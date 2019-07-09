class IngredientsController < ApplicationController
  before_action :require_login
  def new
    @ingredient = Ingredient.new
  end

  def create
    @ingredient = Ingredient.new(ingredient_params)
    if @ingredient.save
      redirect_to user_path(current_user)
    else
      render :new
    end
  end

  private
    def ingredient_params
      params.require(:ingredient).permit(:name, :wet)
    end
end
