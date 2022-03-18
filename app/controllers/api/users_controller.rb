class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.tag = tag_creator
    # use @user.tag = ****
    #create a method to get the tag and stringify it
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  #tag creator method
  # 4.times do
  def tag_creator 
    
  end

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
