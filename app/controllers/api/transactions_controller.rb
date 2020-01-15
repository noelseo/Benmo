class Api::TransactionsController < ApplicationController

    def create
        @transaction = Transaction.new(transaction_params)
        @sender = current_user
        @receiver = User.find(params[:receiver_id])

        if @transaction.save
            @sender.balance -= :amount
            @receiver.balance += :amount
            render 'api/transactions/show'
        else
            render json: @transaction.errors.full_messages, status: 422
        end
        
    end 

    def show
        @transaction = Transaction.find(params[:id])
    end

    def index           
        # BETTER WAY
        @transactions = Transaction.where('sender_id = :id or receiver_id = :id', { id: current_user.id }).order(created_at: :desc)
        
        # ALTERNATE WAY
        # @sent_transactions = User.find(params[:user_id]).sent_transactions #used associations from the transaction model
        # @received_transactions = User.find(params[:user_id]).received_transactions

        # @transactions = @sent_transactions.concat(@received_transactions).sort_by do |transaction|
        #     transaction.created_at
        # end
    end
    

    private
    def transaction_params
        params.require(:transaction).permit(:amount, :sender_id, :receiver_id)
    end

end
