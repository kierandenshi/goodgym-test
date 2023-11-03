json.array! @gym_members do |member|
  json.partial! 'gym_members/gym_member', member:
end
