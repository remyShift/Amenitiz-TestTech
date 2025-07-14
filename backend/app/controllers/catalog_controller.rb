class CatalogController < ApplicationController
  def index
    products = ProductsCatalog.all.map do |product|
      {
        code: product[:code],
        name: product[:name],
        price: product[:price]
      }
    end

    render json: products
  end
end
