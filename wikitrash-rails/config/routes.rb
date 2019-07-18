Rails.application.routes.draw do
  resource :item

  get '/db', to: 'items#db'
end
