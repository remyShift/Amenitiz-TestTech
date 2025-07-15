class CartController < ApplicationController
    def total
        unless params[:items].is_a?(Array)
            render json: { error: 'Items are required' }, status: :bad_request
            return
        end

        cart = Cart.new
        params[:items].each do |item|
            unless item[:code].present? && item[:quantity].present?
                render json: { error: 'Invalid item format' }, status: :bad_request
                return
            end
            item[:quantity].times { cart.add(item[:code]) }
        end
        
        render json: { 
            total: cart.total,
            original_total: cart.original_total,
            total_savings: cart.total_savings,
            discounts_applied: cart.discounts_applied
        }
    end
end