RSpec.describe "Cart API", type: :request do
    it "returns the total price for a given list of items with quantity" do
        items = [
            { code: "GR1", quantity: 2 },
            { code: "SR1", quantity: 1 }
        ]
        
        post "/cart/total", 
                params: { items: items }.to_json,
                headers: { 'Content-Type': 'application/json' }
        
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)["total"]).to eq(8.11)
    end

    it "should handle an empty list of items" do
        post "/cart/total", 
                params: { items: [] }.to_json,
                headers: { 'Content-Type': 'application/json' }
        
        expect(response).to have_http_status(:ok)
        expect(JSON.parse(response.body)["total"]).to eq(0)
    end
end
