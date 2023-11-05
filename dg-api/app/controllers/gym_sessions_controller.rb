class GymSessionsController < ApplicationController
  def index
    @gym_sessions = GymSession.includes([:gym_area, :gym_members]).all
  end
end
