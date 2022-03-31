class UsersController < ApplicationController
    skip_before_action :authorized, only:[:index, :create]
    def index
        users = User.all 
        render json: users, status: :ok
    end
    
    def create 
       create_user = User.create!(user_params)
       render json: create_user, status: :created
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

    def update 
        update_user = User.find_by!(id: params[:id]) 
        update_user.update(update_user_params)
        render json: update_user, status: :accepted
    end

 
  

    private 

    def user_params 
        params.permit(:name, :password, :profile_picture).with_defaults(profile_picture: "https://www.nicepng.com/png/full/933-9332131_profile-picture-default-png.png")
    end

    def update_user_params 
        params.permit(:name, :category, :about, :profile_picture)
    end
end
