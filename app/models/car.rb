class Car < ApplicationRecord
  validates :title, presence: true

  has_many :car_drivers
  has_many :drivers, through: :car_drivers
end
