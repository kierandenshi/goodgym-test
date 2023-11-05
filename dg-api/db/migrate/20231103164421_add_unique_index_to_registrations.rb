class AddUniqueIndexToRegistrations < ActiveRecord::Migration[7.1]
  def change
    add_index :gym_registrations, [:gym_session_id, :gym_member_id], unique: true
  end
end
