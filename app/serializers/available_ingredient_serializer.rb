class AvailableIngredientSerializer < ActiveModel::Serializer
  attributes :id, :pantry_id, :ingredient_id, :quantity, :unit
  belongs_to :pantry
  belongs_to :ingredient
end
