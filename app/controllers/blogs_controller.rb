class BlogsController < ApplicationController
    skip_before_action :authorized, only: [:index, :update, :create, :destroy]
    def index 
        blogs = Blog.all.sort
        render json: blogs, status: :ok
    end

    def update 
        update_blog = Blog.find_by!(id:params[:id])
        update_blog.update(blog_params)
        render json: update_blog, status: :ok
    end

    def create 
        create_blog = Blog.create!(blog_params)
        render json: create_blog, status: :created
    end

    def destroy 
        destroy_blog = Blog.find_by!(id:params[:id])
        destroy_blog.destroy
        render json: {}, status: :accepted
    end

    private 

    def blog_params 
        params.permit(:title,:blog_entry, :thumbnail, :user_id)
    end
end
