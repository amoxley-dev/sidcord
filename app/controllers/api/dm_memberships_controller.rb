class Api::DmMembershipsController < ApplicationController
  def create

    @dm_membership = DmMembership.new(dm_membership_params)
    
    @dm_server = DmServer.find(params[:dm_membership][:dm_server_id])
    if @dm_membership.save
      render :show
    else
      render json: @dm_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @dm_membership = DmMembership.find_by(dm_membership_params)
    @dm_server = DmServer.find(params[:dm_membership][:dm_server_id])
    @dm_membership.destroy
    render "api/dm_servers/show"
  end

  private
  def dm_membership_params
    params.require(:dm_membership).permit(:dm_server_id, :user_id)
  end
end
