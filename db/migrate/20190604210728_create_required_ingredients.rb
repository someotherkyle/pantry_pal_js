class CreateRequiredIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :required_ingredients do |t|
      t.integer :ingredient_id
      t.integer :recipe_id
      t.integer :quantity
      t.string :unit
    end
  end
end
