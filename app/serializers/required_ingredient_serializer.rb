class RequiredIngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :unit, :recipe_id, :ingredient_id
  belongs_to :recipe, :ingredient
end
