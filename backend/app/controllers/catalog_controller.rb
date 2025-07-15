class CatalogController < ApplicationController
  def index
    products = ProductsCatalog.all.map.with_index do |product, index|
      {
        id: index + 1,
        code: product[:code],
        name: product[:name],
        price: product[:price]
      }
    end

    render json: products
  end
end
