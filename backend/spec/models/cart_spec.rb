require "rails_helper"

RSpec.describe Cart, type: :model do
    it "should create a cart with empty items" do
        cart = Cart.new
        expect(cart.items).to be_empty
    end
end