class DirectMessageChannel < ApplicationCable::Channel
  def subscribed
    directMessage = DmServer.find_by(id: params[:id])
    stream_for directMessage
    # stream_from "some_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
