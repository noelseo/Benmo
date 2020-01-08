class Api::UsersController < ApplicationController

    #sign up
    def create
        @user = User.new(user_params)
        @user.username = @user.first_name[0] + '-' + @user.last_name[0] + '-' +(User.last.id + 1).to_s
        if @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422 
        end
    end

    def show
        @user = User.find_by(username: username)
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
    end
end
