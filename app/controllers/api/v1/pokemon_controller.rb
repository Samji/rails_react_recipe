class Api::V1::PokemonController < ApplicationController
  before_action :set_pokemon, only: %i[show destroy]
  def index
    pokemon = Pokemon.all.order(name: :desc)
    render json: pokemon
  end

  def create
    pokemon = Pokemon.create!(pokemon_params)
    if pokemon
      render json: pokemon
    else
      render json: pokemon.errors
    end
  end

  def show
    render json: @pokemon
  end

  def destroy
    @pokemon&.destroy
    render json: { message: 'Pokemon deleted!' }
  end

  private

  def pokemon_params
    params.permit(:name, :health, :attack, :defense, :speed, :description, :image)
  end

  def set_pokemon
    @pokemon = Pokemon.find(params[:id])
  end
end