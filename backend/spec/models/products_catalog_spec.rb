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
end