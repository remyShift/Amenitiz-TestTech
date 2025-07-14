module PricingRules
    class StrawberriesRule < BasePricingRule
        def initialize
            super(code: 'SR1', base_price: 5.00)
        end
    
        def apply(items)
            quantity = count(items)
            price = quantity >= 3 ? 4.50 : @base_price
            price * quantity
        end
    end
end