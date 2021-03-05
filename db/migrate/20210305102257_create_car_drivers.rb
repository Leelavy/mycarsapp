class CreateCarDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :car_drivers do |t|
      t.references :car, null: false, foreign_key: true
      t.references :driver, null: false, foreign_key: true

      t.timestamps
    end
  end
end
