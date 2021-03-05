module Api
  module V1
    class DriversController < ApplicationController
      protect_from_forgery with: :null_session

      def drivercars
        drivers = Car.joins(:car_drivers)
        .where({'car_drivers.driver_id' => params[:id]})
        .select('cars.id, cars.title, car_drivers.created_at')
        render json: {joined: drivers}
      end

      def index 
        #return all drivers and all their cars
        drivers = Driver.all
        render json: DriverSerializer.new(drivers).serialized_json
      end

      def show 
        #return specific driver found by title and all its cars
        driver = Driver.find(params[:id])
        render json: DriverSerializer.new(driver, options).serialized_json
      end

      def create 
        driver = Driver.new(new_driver_params)
        cars = Car.find(params[:cars_ids])
        driver.cars = cars

        if driver.save
          render json: DriverSerializer.new(driver, options).serialized_json
        else
          render json: {error: driver.errors.messages}, status: 422
        end
      end

      def options
        @options ||= {include: %i[cars]}
      end

      def new_driver_params
        params.require(:driver).permit(:name, :email, :date_of_birth)
      end

    end
  end
end
