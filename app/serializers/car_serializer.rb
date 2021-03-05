class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :car_type, :color

  has_many :drivers
end
