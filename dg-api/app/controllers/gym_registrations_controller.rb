class GymRegistrationsController < ApplicationController
  def index
    @gym_registrations = GymRegistration.all
  end

  def create
    @gym_registration = GymRegistration.new(
      gym_member_id: gym_registration_params[:gym_member_id][-1].to_i,
      gym_session_id: gym_registration_params[:gym_session_id][-1].to_i
    )
    if @gym_registration.save
      render json: @gym_registration, status: :created, location: @gym_registration
    else
      render json: @gym_registration.errors, status: :unprocessable_entity
    end
  end

  def delete
    @gym_registration = GymRegistration.find_by(
      gym_member_id: params[:member_id][-1.to_i],
      gym_session_id: params[:session_id][-1].to_i
    )
    @gym_registration.destroy
  end

  private

  def gym_registration_params
    params.require(:gym_registration).permit(:gym_member_id, :gym_session_id)
  end
end
