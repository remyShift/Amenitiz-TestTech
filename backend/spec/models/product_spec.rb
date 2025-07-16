require "rails_helper"

RSpec.describe Product, type: :model do
    describe "basic functionality" do
        it "can be created with the same data as ProductsCatalog" do
            product = Product.new(code: "GR1", name: "Green Tea", price: 3.11)
            expect(product.code).to eq("GR1")
            expect(product.name).to eq("Green Tea")
            expect(product.price).to eq(3.11)
        end

        it "should require a code" do
            product = Product.new(name: "Green Tea", price: 3.11)
            expect(product).not_to be_valid
            expect(product.errors[:code]).to include("can't be blank")
        end

        it "should require a name" do
            product = Product.new(code: "GR1", price: 3.11)
            expect(product).not_to be_valid
            expect(product.errors[:name]).to include("can't be blank")
        end
    
        it "should require a price" do
            product = Product.new(code: "GR1", name: "Green Tea")
            expect(product).not_to be_valid
            expect(product.errors[:price]).to include("can't be blank")
        end

        it "should require a unique code" do
            Product.create!(code: "GR1", name: "Green Tea", price: 3.11)
            product = Product.new(code: "GR1", name: "Another Product", price: 5.00)
            expect(product).not_to be_valid
            expect(product.errors[:code]).to include("has already been taken")
        end

        it "should require a positive price" do
            product = Product.new(code: "GR1", name: "Green Tea", price: -1)
            expect(product).not_to be_valid
            expect(product.errors[:price]).to include("must be greater than 0")
        end
    end
end 