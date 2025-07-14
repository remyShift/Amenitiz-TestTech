module PricingRules
    class DefaultPricingRule < BasePricingRule
        def apply(items)
            count(items) * @base_price
        end
    end
end