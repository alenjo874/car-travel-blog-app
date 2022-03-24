Rails.application.routes.draw do
  
  resources :blogs
  # resources :sessions
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
 
  
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
