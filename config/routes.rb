Rails.application.routes.draw do
  
  resources :blogs
  # resources :sessions
  resources :users, only: [:show, :create]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
