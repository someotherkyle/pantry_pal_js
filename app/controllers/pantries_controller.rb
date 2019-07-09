class PantriesController < ApplicationController
  before_action :require_login
  def new
    @pantry = Pantry.new
  end

  def edit
    @pantry = Pantry.find_by(id: params[:id])
    @ingredients = Ingredient.sorted_ingredients
    @available = @pantry.available_ingredients.build
  end

  def create
    @pantry = Pantry.new(pantry_params)
    @pantry.user_id = current_user.id
    if @pantry.save
      redirect_to user_pantry_path(current_user, @pantry)
    else
      render :new
    end
  end

  def show
    @pantry = Pantry.find_by(id: params[:id])
  end

  private

    def pantry_params
      params.require(:pantry).permit(:location)
    end
end
