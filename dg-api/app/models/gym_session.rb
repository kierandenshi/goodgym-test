# == Schema Information
#
# Table name: gym_sessions
#
#  id                  :uuid             not null, primary key
#  name                :string
#  registrations_limit :integer
#  gym_area_id         :uuid             not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#  description         :text
#
class GymSession < ApplicationRecord
  belongs_to :gym_area
  has_many :gym_registrations, dependent: :destroy
  has_many :gym_members, through: :gym_registrations
end
