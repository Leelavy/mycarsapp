class Car < ApplicationRecord
  has_many :car_drivers
  has_many :drivers, through: :car_drivers
end
