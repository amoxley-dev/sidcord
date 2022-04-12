Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users 
    resources :servers do
      resources :channels, only: [:create]
    end
    resources :channels, only: [:update, :show, :destroy] do
      resources :messages, only: [:create]
    end

    resources :dm_servers, only: [:index, :show, :create, :destroy]

    resources :messages, only: [:update, :show, :destroy, :index]
    resources :server_memberships, only: [:create, :destroy]
  end
  
  mount ActionCable.server => "/cable"
  root to: 'static_pages#root'
end
