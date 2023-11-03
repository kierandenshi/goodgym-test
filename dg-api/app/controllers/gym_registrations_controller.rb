class GymRegistrationsController < ApplicationController
  def index
    @gym_registrations = GymRegistration.all
  end

  def create
    @gym_registration = GymRegistration.new(gym_registration_params)
    if @gym_registration.save
      render json: @gym_registration, status: :created, location: @gym_registration
    else
      render json: @gym_registration.errors, status: :unprocessable_entity
    end
  end

  def delete
    @gym_registration = GymRegistration.find(params[:id])
    @gym_registration.destroy
  end

  private

  def gym_registration_params
    params.require(:gym_registration).permit(:gym_member_id, :gym_session_id)
  end
end
