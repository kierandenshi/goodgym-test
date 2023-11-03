class GymSessionsController < ApplicationController
  def index
    @gym_sessions = GymSession.includes(:gym_members).all
  end
end
