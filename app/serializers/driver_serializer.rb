class DriverSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :date_of_birth

  has_many :cars
end
