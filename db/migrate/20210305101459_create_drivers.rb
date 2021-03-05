class CreateDrivers < ActiveRecord::Migration[6.1]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :email
      t.string :date_of_birth

      t.timestamps
    end
  end
end
