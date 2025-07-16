require "rails_helper"

RSpec.describe Product, type: :model do
    describe "basic functionality" do
        it "can be created with the same data as ProductsCatalog" do
            product = Product.new(code: "GR1", name: "Green Tea", price: 3.11)
            expect(product.code).to eq("GR1")
            expect(product.name).to eq("Green Tea")
            expect(product.price).to eq(3.11)
        end
    end
end 