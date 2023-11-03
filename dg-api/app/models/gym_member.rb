# == Schema Information
#
# Table name: gym_members
#
#  id         :uuid             not null, primary key
#  first_name :string
#  last_name  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GymMember < ApplicationRecord
  has_many :gym_registrations, dependent: :destroy
end
