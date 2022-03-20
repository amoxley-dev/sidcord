class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    
    if @user.nil?
      render json: ["- Login or password is invalid"], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    if current_user.nil?
      render json: ['Must be logged in first!'], status: 404
    else
      logout!
      render json: {}
    end
    
  end
end
