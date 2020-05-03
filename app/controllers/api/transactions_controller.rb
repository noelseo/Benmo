class Api::TransactionsController < ApplicationController
    # using ActiveRecord, we can access the database

    def create
        @transaction = Transaction.new(transaction_params)
        @transaction.sender_id = params[:user_id]
        
        if @transaction.save && (@transaction.sender.balance - @transaction.amount) >= 0
            sender = @transaction.sender #in 'transaction.rb', 'belongs_to :sender' gives a function to use
            receiver = @transaction.receiver
            sender.balance -= @transaction.amount
            receiver.balance += @transaction.amount
            sender.save
            receiver.save
    
            
            # Twilio SMS
            client = Twilio::REST::Client.new
 
            client.messages.create(
                from: ENV["twilio_phone_number"],
                to: "+1#{receiver.phone_number}",
                body: "You just received $#{"%.2f" % @transaction.amount} from #{sender.first_name}!",
            )

            client.messages.create(
                from: ENV["twilio_phone_number"],
                to: "+1#{sender.phone_number}",
                body: "You just sent #{receiver.first_name} $#{"%.2f" % @transaction.amount}!",
            )

            redirect_to controller: 'transactions', action: 'index', user_id: params[:user_id]
        else
            render json: @transaction.errors.full_messages, status: 422
        end
    end 

    def show
        @transaction = Transaction.find(params[:id])
    end

    def index   
        @transactions = Transaction.where('sender_id = :id or receiver_id = :id', { id: params[:user_id] }).order(created_at: :desc)
        @user = User.find(params[:user_id])
    end
    
    def graph
        @sent_transactions = Transaction.where(created_at: 6.days.ago..Time.now, sender_id: params[:id])
        @received_transactions = Transaction.where(created_at: 6.days.ago..Time.now, receiver_id: params[:id])

        
        # sent transactions
        result = []
        current_day = 6.days.ago
        day_transactions = []
   
        i = 0
        while result.length < 7
            if i >= @sent_transactions.length || current_day.end_of_day < @sent_transactions[i].created_at
                current_day = (current_day.next_day(1))
                result.push(day_transactions)
                day_transactions = []
                next
            end

            if i < @sent_transactions.length && current_day.day == @sent_transactions[i].created_at.day && current_day.month == @sent_transactions[i].created_at.month && current_day.year == @sent_transactions[i].created_at.year
                day_transactions.push(@sent_transactions[i])
            end

            i += 1
        end
        

        # received transactions
        other_result = []
        current_day = 6.days.ago
        day_transactions = []

        i = 0
        while other_result.length < 7
            if i >= @received_transactions.length || current_day.end_of_day < @received_transactions[i].created_at
                current_day = (current_day.next_day(1))
                other_result.push(day_transactions)
                day_transactions = []
                next
            end
  
            if i < @received_transactions.length && current_day.day == @received_transactions[i].created_at.day && current_day.month == @received_transactions[i].created_at.month && current_day.year == @received_transactions[i].created_at.year
                day_transactions.push(@received_transactions[i])
            end

            i += 1
        end

        result.map! { |r| r.map! {|t| t.amount}.sum }
        other_result.map! { |r| r.map! {|t| t.amount}.sum }
        render json: {sent_transactions: result, received_transactions: other_result} 
    end

    private
    def transaction_params
        params.require(:transaction).permit(:amount, :receiver_id)
    end

end