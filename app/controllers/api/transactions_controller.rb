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
    

    private
    def transaction_params
        params.require(:transaction).permit(:amount, :receiver_id)
    end

end
