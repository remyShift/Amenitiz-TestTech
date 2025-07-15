module PricingRules
    class CoffeeRule < BasePricingRule    
        def apply(items)
            quantity = count(items)
            price = quantity >= 3 ? (@base_price * 2/3.0) : @base_price
            price * quantity
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
                description: '3 or more : 2/3 of the price.'
            }
        end
    end
end