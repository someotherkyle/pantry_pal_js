class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :wet
  has_many :available_ingredients, :required_ingredients
  has_many :pantries, through: :available_ingredients
  has_many :recipes, through: :required_ingredients
end
