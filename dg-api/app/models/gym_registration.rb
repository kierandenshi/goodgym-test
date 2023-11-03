# == Schema Information
#
# Table name: gym_registrations
#
#  id             :uuid             not null, primary key
#  gym_member_id  :uuid             not null
#  gym_session_id :uuid             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class GymRegistration < ApplicationRecord
  belongs_to :gym_session
  belongs_to :gym_member
end
