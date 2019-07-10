class RequiredIngredientSerializer < ActiveModel::Serializer
  attributes :ingredient_id, :quantity, :unit
  belongs_to :recipe
  belongs_to :ingredient
end
