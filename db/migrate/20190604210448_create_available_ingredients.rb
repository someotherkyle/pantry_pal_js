class CreateAvailableIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :available_ingredients do |t|
      t.integer :pantry_id
      t.integer :ingredient_id
      t.string :unit
      t.integer :quantity
    end
  end
end
