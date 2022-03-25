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
    # default_profile = open('https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png')
    # @user.profile_picture.attach(io: default_profile, filename: 'icon_blue.png')
    
    @user.tag = tag_creator
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
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
