require "rails_helper"

RSpec.describe ProductsCatalog, type: :model do
    describe ".find" do
        it "should find green tea by code GR1" do
            result = ProductsCatalog.find("GR1")
            expect(result.name).to eq("Green Tea")
            expect(result.price).to eq(3.11)
            expect(result.code).to eq("GR1")
        end
    end
end