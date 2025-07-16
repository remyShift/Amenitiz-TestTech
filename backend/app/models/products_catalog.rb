class ProductsCatalog
    def self.find(code)
        products_cache[code]
    end

    def self.all
        products_cache.values.map do |product|
            { code: product.code, name: product.name, price: product.price }
        end
    end

    def self.reset_cache!
        @products_cache = nil
    end

    private

    def self.products_cache
        @products_cache ||= Product.all.index_by(&:code)
    end
end
