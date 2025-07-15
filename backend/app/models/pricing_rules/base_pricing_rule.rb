module PricingRules
    class BasePricingRule
        def initialize(code:)
            @code = code
            @base_price = ProductsCatalog.find(code)[:price]
        end

        def count(items)
            items.count(@code)
        end

        def apply(items)
            count(items) * @base_price
        end

        def original_price(items)
            count(items) * @base_price
        end

        def savings(items)
            original_price(items) - apply(items)
        end

        def discount_info(items)
            quantity = count(items)
            return nil if quantity == 0
            
            savings_amount = savings(items)
            return nil if savings_amount <= 0
            
            {
                product_code: @code,
                product_name: ProductsCatalog.find(@code)[:name],
                original_price: original_price(items),
                discounted_price: apply(items),
                savings: savings_amount,
            }
        end
    end
end