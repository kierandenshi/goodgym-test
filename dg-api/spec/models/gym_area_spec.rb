# == Schema Information
#
# Table name: gym_areas
#
#  id         :uuid             not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

describe GymArea do
  context 'with associations' do
    it { is_expected.to have_many(:gym_sessions).dependent(:destroy) }
  end
end
