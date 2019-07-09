class CreatePantries < ActiveRecord::Migration[5.2]
  def change
    create_table :pantries do |t|
      t.string :location
      t.integer :user_id

      t.timestamps
    end
  end
end
