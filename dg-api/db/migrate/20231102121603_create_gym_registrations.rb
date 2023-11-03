class CreateGymRegistrations < ActiveRecord::Migration[7.1]
  def change
    create_table :gym_registrations, id: :uuid do |t|
      t.references :gym_member, null: false, foreign_key: true, type: :uuid
      t.references :gym_session, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
