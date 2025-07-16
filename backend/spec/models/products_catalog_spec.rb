require "rails_helper"

RSpec.describe ProductsCatalog, type: :model do
    describe ".find" do
        it "should find green tea by code GR1" do
            Rails.application.load_seed
            result = ProductsCatalog.find("GR1")
            expect(result).to eq({ name: "Green Tea", price: 3.11 })
        end
    end
end