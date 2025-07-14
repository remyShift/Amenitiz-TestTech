module PricingRules
    class StrawberriesRule < BasePricingRule
        def apply(items)
            quantity = count(items)
            price = quantity >= 3 ? 4.50 : @base_price
            price * quantity
        end
    end
end