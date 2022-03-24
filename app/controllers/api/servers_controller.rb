class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)
    @server.owner_id = current_user.id
    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = Server.find(params[:id])
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = Server.find(params[:id])
    @current_user = current_user
    if current_user.id == @server.owner_id
      @server.destroy
      render :show
    else
      render json: ['Only the server owner can delete this server'], status: 422
    end
  end

  private 

  def server_params
    params.require(:server).permit(:server_name, :public)
  end
end
