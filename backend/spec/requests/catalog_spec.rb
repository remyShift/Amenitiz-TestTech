require 'rails_helper'

RSpec.describe "Catalog API", type: :request do
    describe "GET /catalog" do
        it "returns a list of products with code, name, and price" do
            get "/catalog"

            expect(response).to have_http_status(:ok)

            json = JSON.parse(response.body)

            expect(json).to be_an(Array)
            expect(json.first).to include("code" => "GR1", "name" => "Green Tea", "price" => 3.11)
        end
    end
end
