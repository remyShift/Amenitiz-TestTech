Rails.application.routes.draw do
  post "/cart/total", to: "cart#total"
  get "/catalog", to: "catalog#index"
end
