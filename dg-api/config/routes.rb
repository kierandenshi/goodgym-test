Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  resources :gym_members, path: 'goodgymers', only: :index
  resources :gym_sessions, path: 'sessions', only: :index
  resources :gym_registrations, path: 'registrations'
  delete 'registrations/:member_id/:session_id', to: 'gym_registrations#delete', as: :delete_gym_registration
end
