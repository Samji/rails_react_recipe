class Api::V1::FlowersController < ApplicationController
  before_action :set_flower, only: %i[show destroy]

  def index
    flower = Flower.all.order(created_at: :desc)
    render json: flower
  end

  def create
    flower = Flower.create!(flower_params)
    if flower
      render json: flower
    else
      render json: flower.errors
    end
  end

  def show
    render json: @flower
  end

  def destroy
    @flower&.destroy
    render json: { message: "Flower Deleted!"}
  end

  private

  def flower_params
    params.permit(:name, :image, :colour, :description)
  end

  def set_flower
    @flower = Flower.find(params[:id])
  end
end
