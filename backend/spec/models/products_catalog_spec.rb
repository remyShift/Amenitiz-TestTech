require "rails_helper"

RSpec.describe ProductsCatalog, type: :model do
    describe ".find" do
        it "should find green tea by code GR1" do
            result = ProductsCatalog.find("GR1")
            expect(result.name).to eq("Green Tea")
            expect(result.price).to eq(3.11)
            expect(result.code).to eq("GR1")
        end

        it "should find strawberries by code SR1" do
            result = ProductsCatalog.find("SR1")
            expect(result.name).to eq("Strawberries")
            expect(result.price).to eq(5.00)
            expect(result.code).to eq("SR1")
        end

        it "should find coffee by code CF1" do
            result = ProductsCatalog.find("CF1")
            expect(result.name).to eq("Coffee")
            expect(result.price).to eq(11.23)
            expect(result.code).to eq("CF1")
        end

        it "should return nil for non-existent code" do
            result = ProductsCatalog.find("XXX")
            expect(result).to be_nil
        end
    end

    describe ".all" do
        it "should return all products with the same structure as before" do
            products = ProductsCatalog.all
            expect(products).to be_an(Array)
            expect(products.length).to eq(3)
            
            green_tea = products.find { |p| p[:code] == "GR1" }
            expect(green_tea).to eq({ code: "GR1", name: "Green Tea", price: 3.11 })
        end
    end

    describe "performance optimization" do
        it "should cache products to avoid multiple DB queries" do
            expect(Product).to receive(:find_by).once.and_call_original
            
            2.times { ProductsCatalog.find("GR1") }
        end
    end
end