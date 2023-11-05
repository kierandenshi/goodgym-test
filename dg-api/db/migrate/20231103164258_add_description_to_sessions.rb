class AddDescriptionToSessions < ActiveRecord::Migration[7.1]
  def change
    add_column :gym_sessions, :description, :text
  end
end
