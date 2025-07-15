module PricingRules
    class GreenTeaRule < BasePricingRule
        def apply(items)
            quantity = count(items)
            (@base_price * ((quantity + 1) / 2))
        end

        def discount_info(items)
            quantity = count(items)
            return nil if quantity == 0
            
            savings_amount = savings(items)
            return nil if savings_amount <= 0
            
            {
                product_code: @code,
                product_name: ProductsCatalog.find(@code)[:name],
                quantity: quantity,
                original_price: original_price(items),
                discounted_price: apply(items),
                savings: savings_amount,
                description: 'Buy one, get one free.'
            }
        end
    end
end