class Cart
    attr_reader :items

    def initialize
        @items = []
    end

    def add(product_code)
        @items << product_code
    end

    def total
        total = 0

        gr1_count = @items.count('GR1') 
        sr1_count = @items.count('SR1')
        cf1_count = @items.count('CF1')
        
        total += 3.11 * ((gr1_count + 1) / 2)
        total += (sr1_count >= 3 ? 4.50 : 5.00) * sr1_count
        total += 11.23 * cf1_count

        total
    end
end