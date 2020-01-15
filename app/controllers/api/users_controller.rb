class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        
        if @user.save
            @user.username = @user.first_name[0] + '-' + @user.last_name[0] + '-' +(User.last.id + 1).to_s
            @user.balance = (rand(100.00..5000.00).round / 100.0)
            @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422 
        end
    end
    #creates a new user and the user gets saved in the database

    def show
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
    end
end
