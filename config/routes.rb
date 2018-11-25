Rails.application.routes.draw do
  resources :carts, only: :index
  resources :orders, only: :create
  resources :cart_items, only: [:create, :destroy, :update]
  resources :individual_tours
  resources :evening_shows
  resources :avia_tours
  resources :land_tours
  resources :phuket_tours
  resources :sea_tours
  resources :call_orders, only: :create
  post 'order_all', to: 'orders#cart_order'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get    '/admin',   to: 'sessions#new'
  post   '/admin',   to: 'sessions#create'
  get '/signout' => 'sessions#destroy'
end
