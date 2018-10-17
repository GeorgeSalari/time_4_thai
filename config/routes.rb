Rails.application.routes.draw do
  resources :carts, only: :index
  resources :orders, only: :create
  resources :cart_items, only: [:create, :destroy]
  resources :individual_tours
  resources :evening_shows
  resources :avia_tours
  resources :land_tours
  resources :phuket_tours
  resources :sea_tours
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
