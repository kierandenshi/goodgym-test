class CreateGymSessions < ActiveRecord::Migration[7.1]
  def change
    create_table :gym_sessions, id: :uuid do |t|
      t.string :name
      t.integer :registrations_limit

      t.references :gym_area, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
