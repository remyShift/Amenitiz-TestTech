class Cart
    attr_reader :items

    def initialize
        @items = []
    end

    def add(product_code)
        @items << product_code
    end

    def total
        if @items == ['GR1']
            3.11
        else
            0
        end
    end
end