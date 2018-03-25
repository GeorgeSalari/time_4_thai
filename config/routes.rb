Rails.application.routes.draw do
  resources :phuket_tours
  resources :sea_tours
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
