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

describe GymRegistration do
  it { is_expected.to belong_to(:gym_member) }
  it { is_expected.to belong_to(:gym_session) }
end
