class Cart
    attr_reader :items

    def initialize
        @items = []
        @rules = build_rules
    end

    def add(code)
        @items << code
    end

    def total
        @rules.sum { |rule| rule.apply(@items) }.round(2)
    end

    def original_total
        @rules.sum { |rule| rule.original_price(@items) }.round(2)
    end

    def total_savings
        (original_total - total).round(2)
    end

    def discounts_applied
        @rules.filter_map { |rule| rule.discount_info(@items) }
    end

    private

    def build_rules
        ProductsCatalog.all.map do |product|
            rule_class_name = "#{product[:name].gsub(" ", "")}Rule"
            rule_class = PricingRules.const_get(rule_class_name)
            rule_class.new(code: product[:code])
        end
    end
end