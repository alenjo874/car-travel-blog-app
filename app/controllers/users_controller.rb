class UsersController < ApplicationController
    def create 
       create_user = User.create!(user_params)
    end

    def show 
        show_user = User.find(session[:user_id])
        render json: show_user
    end

    def index
        render json: {hello: "heello"}
    end

    private 

    def user_params 
        params.permit(:name, :password)
    end
end
