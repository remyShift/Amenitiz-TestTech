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

    describe "#total" do
        it "should return 0 when the cart is empty" do
            cart = Cart.new
            expect(cart.total).to eq(0)
        end

        it "should return 3.11 when the cart has 1 green tea" do
            cart = Cart.new
            cart.add('GR1')
            expect(cart.total).to eq(3.11)
        end

        it "should return 5 when the cart has 1 strawberry" do
            cart = Cart.new
            cart.add('SR1')
            expect(cart.total).to eq(5.00)
        end
    end
end