class RequiredIngredientsController < ApplicationController
  before_action :require_login

  def create
    @ingredients = Ingredient.all
    @required = RequiredIngredient.new(available_params)
    if @required.save
      redirect_to recipe_path(params[:required_ingredient][:recipe_id])
    else
      render :'/recipes/edit'
    end
  end

  private
    def available_params
      params.require(:required_ingredient).permit(:ingredient_id, :recipe_id, :quantity, :unit)
    end
end
