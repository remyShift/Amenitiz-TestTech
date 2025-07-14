class CartController < ApplicationController
    def total
        cart = Cart.new
        params[:items].each { |code| cart.add(code) }
        render json: { total: cart.total }
    end
end