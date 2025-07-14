class Cart
    attr_reader :items

    def initialize(rules = PricingRules.constants.reject { |c| c == :BasePricingRule }
        .map { |const| PricingRules.const_get(const).new })
        
        @items = [] 
        @rules = rules
    end

    def add(code)
        @items << code
    end

    def total
        @rules.sum { |rule| rule.apply(@items) }.round(2)
    end
end
