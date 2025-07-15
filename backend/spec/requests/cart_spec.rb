RSpec.describe "Cart API", type: :request do
    it "returns the total price for a given list of codes" do
        post "/cart/total", params: { items: ["GR1", "GR1"] }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)["total"]).to eq(3.11)
    end

    it "should handle an empty list of codes" do
        post "/cart/total", params: { items: [] }
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)["total"]).to eq(0)
    end
end
