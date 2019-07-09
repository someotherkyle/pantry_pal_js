class Recipe < ApplicationRecord
  has_many :required_ingredients
  has_many :ingredients, through: :required_ingredients
  validates :name, :instructions, presence: true
  validates :name, uniqueness: true
end
