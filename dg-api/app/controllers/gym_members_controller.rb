class GymMembersController < ApplicationController
  def index
    @gym_members = GymMember.all
  end
end
