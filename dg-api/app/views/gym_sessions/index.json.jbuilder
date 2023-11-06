json.array! @gym_sessions do |session|
  members = session.gym_members.map do |member|
    {
      first_name: member.first_name,
      last_name: member.last_name,
      id: "member_#{member.id}"
    }
  end
  json.id "session_#{session.id}"
  json.name session.name
  json.description session.description
  json.registrations_limit session.registrations_limit
  json.goodgymers members

  json.area do
    json.partial! 'gym_areas/gym_area', area: session.gym_area
  end
end
