# The Rails controller is the logical center of the application. 
# It faciliates the interaction between the users, views, and model.
# It is capable of routing external requests to internal actions. It handles URL extremely well
# It regulates helper modules, which extend the capabilities of the view templates without bulking of their code
# It regulates sessions; that gives users the impression of an ongoing interaction with our applications

class Api::UsersController < ApplicationController

    #creates a new user and the user gets saved in the database
    def create
        @user = User.new(user_params)
        
        if @user.save
            @user.username = @user.first_name[0] + '-' + @user.last_name[0] + '-' +(User.last.id + 1).to_s
            @user.balance = rand(100.00..5000.00).to_f.round(2)
            @user.save
            login(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422 
            # Redirect is a method that is used to issue the error message in case the page is not issued or found to the browser. It tells browser to process and issue a new request.

            # Render is a method used to make the content. 
            # Render only works when the controller is being set up properly with the variables that require to be rendered.
        end
    end

    def show
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
    end
end
