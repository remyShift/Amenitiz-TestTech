class ProductsCatalog
    PRODUCTS = {
        "GR1" => { name: "Green Tea", price: 3.11 },
        "SR1" => { name: "Strawberries", price: 5.00 },
        "CF1" => { name: "Coffee", price: 11.23 }
    }

    def self.find(code)
        product = Product.find_by(code: code)
        return nil unless product
        
        return product
    end

    def self.all
        PRODUCTS.map do |code, data|
            { code: code, name: data[:name], price: data[:price] }
        end
    end
end
