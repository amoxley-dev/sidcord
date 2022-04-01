require 'open-uri'

class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def create
    @user = User.new(user_params)
    
    @user.tag = tag_creator
    @user.profile_picture.attach("")
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    
    if @user.update(user_params)
      render :show
    else  
      render json: @user.errors.full_messages, status: 401
    end
  end

  private
  def tag_creator 
    tag = '';
    4.times do
      int = rand(10)
      int = int.to_s
      tag += int
    end
    return tag
  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
