module Api
  module V1
    class CarsController < ApplicationController
      protect_from_forgery with: :null_session
      
      def cardrivers
        drivers = Driver.joins(:car_drivers)
        .where({'car_drivers.car_id' => params[:id]})
        .select('drivers.id, drivers.name, car_drivers.created_at')
        render json: {joined: drivers}
      end

      def index 
        #return all cars
        cars = Car.all
        render json: CarSerializer.new(cars).serialized_json
      end

      def show
        begin
          #return specific car found by title
          car = Car.find(params[:id])
          render json: CarSerializer.new(car, options).serialized_json
        rescue => e
          render json: {error: e}
        end
      end

      def create 
        car = Car.new(new_car_params)
        drivers = Driver.find(params[:drivers_ids])
        car.drivers = drivers

        if car.save
          render json: CarSerializer.new(car,options).serialized_json
        else
          render json: {error: car.errors.messages}, status: 422
        end
      end 

      def options
        @options ||= {include: %i[drivers]}
      end

      def new_car_params
        params.require(:car).permit(:title, :car_type, :color)
      end

    end
  end
end