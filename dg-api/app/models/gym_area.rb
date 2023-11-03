# == Schema Information
#
# Table name: gym_areas
#
#  id         :uuid             not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class GymArea < ApplicationRecord
  has_many :gym_sessions, dependent: :destroy
end
