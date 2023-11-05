class CreateGymAreas < ActiveRecord::Migration[7.1]
  def change
    create_table :gym_areas, id: :integer do |t|
      t.string :name

      t.timestamps
    end
  end
end
