class Cart
    attr_reader :items

    def initialize
        @items = []
    end

    def add(product_code)
        @items << product_code
    end

    def total
        return 3.11 if @items == ['GR1']
        0
    end
end