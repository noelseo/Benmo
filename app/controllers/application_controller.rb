class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login
        unless logged_in?
            render json: ["Your email or password was incorrect."], status: 401
        end
    end

    def login(user) 
        @current_user = user
        session[:session_token] = user.reset_session_token
    end

    def logout
        current_user.reset_session_token
        @current_user = nil
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end
end
