class Api::DmMessagesController < ApplicationController
  def show 
    @dm_message = DmMessage.find(params[:id])
    render :show
  end

  def create
    @dm_message = DmMessage.new(dm_message_params)
    @dm_server = DmServer.find_by(id: params[:dm_server_id])
    @dm_message.sender_id = current_user.id
    @dm_message.dm_server_id = @dm_server.id
    if @dm_message.save!
      # DirectMessageChannel.broadcast_to(@dm_message, @dm_message)
      render :show
    else
      render json: @dm_message.errors.full_messages, status: 422
    end
  end

  def update
    @dm_message = DmMessage.find(params[:id])
    @dm_server = DmServer.find_by(id: @dm_message.dm_server_id)
    if (@dm_message && @dm_message.sender_id == current_user.id) && @dm_message.update(dm_message_params)
      # DirectMessageChannel.broadcast_to(@dm_message, @dm_message)
      render :show
    else
      render json: @dm_message.errors.full_messages, status: 422
    end
  end

  def destroy
    @dm_message = DmMessage.find(params[:id])
    @dm_server = DmServer.find_by(id: @dm_message.dm_server_id)
    if @dm_message.sender_id == current_user.id && @dm_message.destroy
      # DirectMessageChannel.broadcast_to(@dm_message, @dm_message)
      render :show
    else
      render json: @dm_message.errors.full_messages, status: 422
    end
  end

  private
  def dm_message_params
    params.require(:dm_message).permit(:body)
  end
end
