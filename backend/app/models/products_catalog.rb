class ProductsCatalog
    def self.find(code)
        product = Product.find_by(code: code)
        return nil unless product
        
        return product
    end

    def self.all

    end
end
