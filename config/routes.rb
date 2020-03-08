Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # defaults: {format: :json} makes rails to automatically look for json file when you try to render something.
  
  # The Rails router recognizes URLs and dispatches them to a controller's action. 
  # It can also generate paths and URLs, avoiding the need to hardcode strings in your views.


  root to: "static_pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show] do
      resources :transactions, only: [:index, :create]
      resources :friends, only: [:index]
    end
    
    resources :transactions, only: [:show]

    resource :session, only: [:create, :destroy]

    #custom route for graph
    get 'transactions/users/:id', :to => 'transactions#graph' 
  end

end

#rails creates 'routes table' using the above
#rails router routes the appropriate request from ajax calls
#then goes to the appropriate controller then finds the appropriate method

# 1.2 Generating Paths and URLs from Code
# You can also generate paths and URLs. If the route above is modified to be:

# get '/patients/:id', to: 'patients#show', as: 'patient'
# and your application contains this code in the controller:

# @patient = Patient.find(params[:id])
# and this in the corresponding view:

# <%= link_to 'Patient Record', patient_path(@patient) %>
# then the router will generate the path /patients/17. This reduces the brittleness of your view and makes your code easier to understand. Note that the id does not need to be specified in the route helper.



#any api_util.js <- -> any appropriate controller.rb