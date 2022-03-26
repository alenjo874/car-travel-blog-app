class BlogsController < ApplicationController
    skip_before_action :authorized, only: :index
    def index 
        blogs = Blog.all 
        render json: blogs, status: :ok
    end
end
