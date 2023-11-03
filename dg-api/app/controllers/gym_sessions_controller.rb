class GymSessionsController < ApplicationController
  def index
    @gym_sessions = GymSession.all
  end
end
