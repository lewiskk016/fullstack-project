Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :items, only: [:index, :show]
    get 'items/category/:category', to: 'items#index', as: 'category_items'
    resources :shopping_lists, only: [:index, :create, :update, :destroy]
    resources :reviews, only: [:index, :create, :update, :destroy]
    resources :searches, only: [:index, :show] do
      collection do
        get :search # Add this line to define the search route
      end
    end
  end


  get '*path', to: "static_pages#frontend_index"
  #  get '*path', to: "static_pages#frontend_index", constraints: ->(req) {
  #   req.path.exclude? 'rails/active_storage'

end
