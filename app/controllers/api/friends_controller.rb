class Api::FriendsController < ApplicationController

    def index
        @friends = User.where.not(id: params[:user_id]).where.not(email: 'bank@benmo.com')
    end

end