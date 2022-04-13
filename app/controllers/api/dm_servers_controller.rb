class Api::DmServersController < ApplicationController
  def index
    # @dm_servers = DmServer.all;
    @current_user = current_user;
    @dm_servers = @current_user.dm_servers if (@current_user)
    render :index
  end

  def create
    @dm_server = DmServer.new()
    @current_user = current_user
    @dm_server.owner_id = @current_user.id
    if @dm_server.save
      render :show
    else
      render json: @dm_server.errors.full_messages, status: 422
    end
  end

  def show
    @dm_server = DmServer.find_by(id: params[:id])
    @current_user = current_user
    render :show
  end

  def destroy
    @dm_server = DmServer.find_by(id: params[:id])
    if @dm_server.destroy
      render :show
    else
      render json: @dm_server.errors.full_messages, status: 422
    end
  end
  
end
