class Driver < ApplicationRecord
  has_many :car_drivers
  has_many :cars, through: :car_drivers
end
