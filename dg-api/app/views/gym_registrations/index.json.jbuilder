json.array! @gym_registrations do |registration|
  json.goodgymer do
    json.partial! 'gym_members/gym_member', member: registration.gym_member
  end

  json.session do
    json.partial! 'gym_sessions/gym_session', session: registration.gym_session
  end
end
