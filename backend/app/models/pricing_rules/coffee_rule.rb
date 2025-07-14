module PricingRules
    class CoffeeRule < BasePricingRule
        def initialize
            super(code: 'CF1', base_price: 11.23)
        end
    
        def apply(items)
            quantity = count(items)
            price = quantity >= 3 ? (@base_price * 2/3.0) : @base_price
            price * quantity
        end
    end
end