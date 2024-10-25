class Api::V1::PokemonController < ApplicationController
  before_action :set_pokemon, only: %i[show destroy]
  def index
    pokemon = Pokemon.all.order(name: :desc)
    render json: pokemon
  end

  def create
  end

  def show
    render json: @pokemon
  end

  def destroy
  end

  private

  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end
end