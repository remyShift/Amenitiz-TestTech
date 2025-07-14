Rails.application.routes.draw do
  post "/cart/total", to: "cart#total"
end
