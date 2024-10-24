class Flower < ApplicationRecord
  validates :name, presence: true
  validates :colour, presence: true
  validates :description, presence: true
end
