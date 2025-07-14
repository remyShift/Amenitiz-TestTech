Rails.application.routes.draw do
  get "catalog/index"
  post "/cart/total", to: "cart#total"
  get "/catalog", to: "catalog#index"
end
