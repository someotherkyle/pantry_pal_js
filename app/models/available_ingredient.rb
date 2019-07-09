class AvailableIngredient < ApplicationRecord
  belongs_to :ingredient
  belongs_to :pantry
  validates :quantity, :ingredient_id, :pantry_id, presence: true
  validates :ingredient_id, uniqueness: {scope: :pantry_id}
end
