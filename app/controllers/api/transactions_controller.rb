class Api::TransactionsController < ApplicationController

    # using ActiveRecord, we can access the database

    def create
        @transaction = Transaction.new(transaction_params)
        @transaction.sender_id = params[:user_id]
        # @sender = current_user
        # @receiver = User.find(params[:receiver_id])

        if @transaction.save && (@transaction.sender.balance - @transaction.amount) >= 0
            sender = @transaction.sender #  in 'transaction.rb', 'belongs_to :sender' gives a function to use
            receiver = @transaction.receiver
            sender.balance -= @transaction.amount
            receiver.balance += @transaction.amount
            sender.save
            receiver.save
          
            # @transactions = Transaction.where('sender_id = :id or receiver_id = :id', { id: params[:user_id] }).order(created_at: :desc)
            redirect_to controller: 'transactions', action: 'index', user_id: params[:user_id]
        else
            render json: @transaction.errors.full_messages, status: 422
        end
    end 

    def show
        @transaction = Transaction.find(params[:id])
    end

    def index # index calls the 'index.json.jbuilder'    

        # Below retrieves the current user's transactions
        # @transactions = Transaction.where('sender_id = :id or receiver_id = :id', { id: current_user.id }).order(created_at: :desc)

        # BETTER WAY
        # Below retrieves the transactions for the selected user
        @transactions = Transaction.where('sender_id = :id or receiver_id = :id', { id: params[:user_id] }).order(created_at: :desc)
        @user = User.find(params[:user_id])
        
        # ALTERNATE WAY
        # @sent_transactions = User.find(params[:user_id]).sent_transactions #used associations from the transaction model
        # @received_transactions = User.find(params[:user_id]).received_transactions

        # @transactions = @sent_transactions.concat(@received_transactions).sort_by do |transaction|
        #     transaction.created_at
        # end
    end
    
    def graph
        @sent_transactions = Transaction.where(created_at: 6.days.ago..Time.now, sender_id: params[:id]) # test on rails c
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
        render json: {sent_transactions: result, received_transactions: other_result} # test by running http://localhost:3000/api/transactions/users/2

    end

    private
    def transaction_params
        params.require(:transaction).permit(:amount, :receiver_id)
    end

end
