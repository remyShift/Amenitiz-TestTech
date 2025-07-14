module PricingRules
    class BasePricingRule
        def initialize(code:)
            @code = code
            @base_price = ProductsCatalog.find(code)[:price]
        end

        def count(items)
            items.count(@code)
        end
    end
end