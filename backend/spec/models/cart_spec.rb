require "rails_helper"

RSpec.describe Cart, type: :model do
    it "should create a cart with empty items" do
        cart = Cart.new
        expect(cart.items).to be_empty
    end

    describe "#add" do
        it "should add a product to the cart" do
            cart = Cart.new
            cart.add('GR1')
            expect(cart.items).to eq(['GR1'])
        end
    end
end