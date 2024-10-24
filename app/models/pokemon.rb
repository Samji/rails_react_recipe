class Pokemon < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :image, presence: true
  validates :health, presence: true
  validates :attack, presence: true
  validates :defense, presence: true
  validates :speed, presence: true
end
