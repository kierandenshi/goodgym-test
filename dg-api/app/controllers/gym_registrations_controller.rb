class GymRegistrationsController < ApplicationController
  def index
    @gym_registrations = GymRegistration.all
  end
end
