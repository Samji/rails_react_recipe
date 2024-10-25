class Api::V1::PokemonController < ApplicationController
  def index
    pokemon = Pokemon.all.order(name: :desc)
    render json: pokemon
  end

  def create
  end

  def show
  end

  def destroy
  end
end
