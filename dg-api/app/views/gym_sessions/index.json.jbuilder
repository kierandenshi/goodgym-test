json.array! @gym_sessions do |session|
  json.id session.id
  json.name session.name
  json.registrations_limit session.registrations_limit
  json.goodgymers session.gym_members

  json.area do
    json.partial! 'gym_areas/gym_area', area: session.gym_area
  end
end
