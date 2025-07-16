class ProductsCatalog
    def self.find(code)
        product = Product.find_by(code: code)
        return nil unless product
        
        return product
    end

    def self.all
        Product.all.map do |product|
            { code: product.code, name: product.name, price: product.price }
        end
    end
end
