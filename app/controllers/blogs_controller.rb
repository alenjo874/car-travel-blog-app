class BlogsController < ApplicationController
    skip_before_action :authorized, only: [:index, :update]
    def index 
        blogs = Blog.all 
        render json: blogs, status: :ok
    end

    def update 
        update_blog = Blog.find_by!(id:params[:id])
        update_blog.update(blog_params)
        render json: update_blog, status: :ok
    end

    private 

    def blog_params 
        params.permit(:title,:blog_entry)
    end
end
