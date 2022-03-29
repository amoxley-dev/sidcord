class Api::MessagesController < ApplicationController
  def show 
    @message = Message.find(params[:id])
    render :show
  end

  def create
    @message = Message.new(message_params)
    @channel = Channel.find_by(id: params[:channel_id])
    @message.sender_id = current_user.id
    @message.channel_id = @channel.id
    if @message.save!
      ConversationChannel.broadcast_to(@channel, @message)
      render :show
    else 
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message  = Message.find(params[:id])
    @channel = Channel.find_by(id: @message.channel_id)
    if (@message && @message.sender_id == current_user.id) && @message.update(message_params)
      ConversationChannel.broadcast_to(@channel, @message)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @channel = Channel.find_by(id: @message.channel_id)
    if @message.sender_id == current_user.id && @message.destroy
      ConversationChannel.broadcast_to(@channel, @message)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:body)
  end
end
