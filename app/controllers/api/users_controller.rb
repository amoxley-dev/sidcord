class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
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
