class CartController < ApplicationController
    def total
        cart = Cart.new
        params[:items].each do |item|
            item[:quantity].times { cart.add(item[:code]) }
        end
        render json: { total: cart.total }
    end
end