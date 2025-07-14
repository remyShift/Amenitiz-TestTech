module PricingRules
    class BasePricingRule
        def initialize(code:, base_price:)
            @code = code
            @base_price = base_price
        end
    
        def count(items)
            items.count(@code)
        end
    end
end