class Driver < ApplicationRecord
  validates :name, :email, presence: true

  has_many :car_drivers
  has_many :cars, through: :car_drivers
end
