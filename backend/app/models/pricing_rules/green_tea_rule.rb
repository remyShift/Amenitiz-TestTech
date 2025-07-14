module PricingRules
    class GreenTeaRule < BasePricingRule
        def initialize
            super(code: 'GR1', base_price: 3.11)
        end
    
        def apply(items)
            quantity = count(items)

            (@base_price * ((quantity + 1) / 2))
        end
    end
end