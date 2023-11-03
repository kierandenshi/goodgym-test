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
#

describe GymSession do
  it { is_expected.to belong_to(:gym_area) }
  it { is_expected.to have_many(:gym_registrations).dependent(:destroy) }
end
