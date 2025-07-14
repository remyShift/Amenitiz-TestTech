module PricingRules
    class GreenTeaRule < BasePricingRule
        def apply(items)
            quantity = count(items)

            (@base_price * ((quantity + 1) / 2))
        end
    end
end