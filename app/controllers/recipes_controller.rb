class RecipesController < ApplicationController
  before_action :require_login
  def new
    @recipe = Recipe.new
  end

  def edit
    @recipe = Recipe.find_by(id: params[:id])
    @ingredients = Ingredient.all.order(:name)
    @required = @recipe.required_ingredients.build
  end

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      redirect_to recipe_path(@recipe)
    else
      render :new
    end
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
  end

  private

    def recipe_params
      params.require(:recipe).permit(:name, :instructions)
    end
end
