# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#
10.times { GymMember.create!(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name) }
10.times { GymArea.create!(name: Faker::Address.city) }
10.times {
  gym_area = GymArea.all.sample
  GymSession.create!(
    gym_area_id: gym_area.id,
    registrations_limit: (5..20).step(5).to_a.sample,
    name: Faker::Lorem.words(number: 3, exclude_words: 'error, cum, id').join(' ').capitalize,
  )
}
10.times {
  gym_session = GymSession.all.sample
  gym_member = GymMember.all.sample
  GymRegistration.create!(
    gym_session_id: gym_session.id,
    gym_member_id: gym_member.id
  )
}
