Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # defaults: {format: :json} makes rails to automatically look for json file
  # when you try to render something.
  
  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :transactions, only: [:index]
    end
    
    resources :transactions, only: [:create, :show]

    resource :session, only: [:create, :destroy]
  end

end

#rails creates 'routes table' using the above
#rails router routes the appropriate request from ajax calls
#then goes to the appropriate controller then finds the appropriate method

#any api_util.js <- -> any appropriate controller.rb