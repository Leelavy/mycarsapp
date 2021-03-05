Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :cars, only: [:index, :show, :create]
      resources :drivers, only: [:index, :show, :create]

      get 'cardrivers/:id', to: 'cars#cardrivers'
      get 'drivercars/:id', to: 'drivers#drivercars'
    end
  end

  get '*path', to: 'pages#index', via: :all
end
