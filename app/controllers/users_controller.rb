class UsersController < ApplicationController
    def create 
       create_user = User.create!(user_params)
    end

    def index
        render json: {hello: "heello"}
    end

    private 

    def user_params 
        params.permit(:name, :password)
    end
end
