class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :instructions
  has_many :required_ingredients
  has_many :ingredients, through: :required_ingredients
end
