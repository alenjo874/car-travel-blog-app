class UsersController < ApplicationController
    skip_before_action :authorized, only: :create
    def index
        users = User.all 
        render json: users, status: :ok
    end
    
    def create 
       create_user = User.create!(user_params)
    end

    def show 
        # show_user = User.find(session[:user_id])
        # render json: show_user
        user = User.find_by(id: session[:user_id])
        if user
         render json: user
        else
         render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

 
  

    private 

    def user_params 
        params.permit(:name, :password)
    end
end
