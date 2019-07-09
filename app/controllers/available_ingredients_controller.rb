class AvailableIngredientsController < ApplicationController
  before_action :require_login

  def create
    @ingredients = Ingredient.all
    @available = AvailableIngredient.new(available_params)
    if @available.save
      redirect_to user_pantry_path(current_user, params[:available_ingredient][:pantry_id])
    else
      render :'/pantries/edit'
    end
  end

  private
    def available_params
      params.require(:available_ingredient).permit(:ingredient_id, :pantry_id, :quantity, :unit)
    end
end
