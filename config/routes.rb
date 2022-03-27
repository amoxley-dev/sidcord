Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :servers do
      resources :channels, only: [:create]
    end
    resources :channels, only: [:update, :show, :destroy]
    resources :server_memberships, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
end
