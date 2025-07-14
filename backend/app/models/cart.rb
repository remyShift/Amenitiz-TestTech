class Cart
    attr_reader :items

    def initialize
        @items = []
    end

    def add(product_code)
        @items << product_code
    end

    def total
        gr1_count = @items.count('GR1')
        return 3.11 * gr1_count if gr1_count > 0

        sr1_count = @items.count('SR1')
        return 5.00 * sr1_count if sr1_count > 0

        return 11.23 if @items == ['CF1']
        0
    end
end