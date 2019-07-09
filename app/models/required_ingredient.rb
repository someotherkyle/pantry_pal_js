class RequiredIngredient < ApplicationRecord
  belongs_to :recipe
  belongs_to :ingredient
  validates :recipe_id, :ingredient_id, :quantity, :unit, presence: true
  validates :ingredient_id, uniqueness: {scope: :recipe_id}
end
