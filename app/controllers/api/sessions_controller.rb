class Api::SessionsController < ApplicationController

    #login
    def create
        email = params[:user][:email]
        password = params[:user][:password]

        @user = User.find_by_credentials(email, password)

        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Your email or password was incorrect."], status: 401           
        end
    end

    #logout
    def destroy
        @user = current_user
        if @user
            logout
            render json: {}
        else
            render json: ['Nobody signed in'], status: 404 
        end
    end
end
