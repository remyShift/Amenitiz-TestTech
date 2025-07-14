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

    private

    def build_rules
        ProductsCatalog.all.map do |product|
            rule_class_name = "#{product[:name].gsub(" ", "")}Rule"
            rule_class = PricingRules.const_get(rule_class_name) rescue PricingRules::DefaultPricingRule
            rule_class.new(code: product[:code])
        end
    end
end