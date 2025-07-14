require "rails_helper"

RSpec.describe Cart, type: :model do
    it "should create a cart with empty items" do
        cart = Cart.new
        expect(cart.items).to be_empty
    end

    describe "#add" do
        it "should add a product to the cart" do
            cart = Cart.new
            cart.add('GR1')
            expect(cart.items).to eq(['GR1'])
        end
    end

    describe "#total" do
        it "should return 0 when the cart is empty" do
            cart = Cart.new
            expect(cart.total).to eq(0)
        end

        it "should return 3.11 when the cart has 1 green tea" do
            cart = Cart.new
            cart.add('GR1')
            expect(cart.total).to eq(3.11)
        end

        it "should return 5 when the cart has 1 strawberry" do
            cart = Cart.new
            cart.add('SR1')
            expect(cart.total).to eq(5.00)
        end

        it "should return 11.23 when the cart has 1 coffee" do
            cart = Cart.new
            cart.add('CF1')
            expect(cart.total).to eq(11.23)
        end

        it "should return 10 when the cart has 2 strawberries" do
            cart = Cart.new
            cart.add('SR1')
            cart.add('SR1')
            expect(cart.total).to eq(10)
        end

        it "should return 22.46 when the cart has 2 coffee" do
            cart = Cart.new
            cart.add('CF1')
            cart.add('CF1')
            expect(cart.total).to eq(22.46)
        end

        it "should return 8.11 when the cart has 1 green tea and 1 strawberry" do
            cart = Cart.new
            cart.add('GR1')
            cart.add('SR1')
            expect(cart.total).to eq(8.11)
        end
    end

    describe "pricing rules" do
        describe "BOGO rule on green tea" do
            it "should apply BOGO rule for 2 GR1s (pay 1 get 2)" do
                cart = Cart.new
                cart.add('GR1')
                cart.add('GR1')
                expect(cart.total).to eq(3.11)
            end

            it "should apply BOGO rule for 3 GR1s (pay 2 get 3)" do
                cart = Cart.new
                cart.add('GR1')
                cart.add('GR1')
                cart.add('GR1')
                expect(cart.total).to eq(6.22)
            end
        end

        describe "price reduction on strawberries" do
            it "should apply bulk discount for 3 or more strawberries (4.50 each)" do
                cart = Cart.new
                cart.add('SR1')
                cart.add('SR1')
                cart.add('SR1')
                expect(cart.total).to eq(13.50)
            end
        end

        describe "price reduction on coffee" do
            it "should apply bulk discount for 3 or more coffees (2/3 of the base price each)" do
                cart = Cart.new
                cart.add('CF1')
                cart.add('CF1')
                cart.add('CF1')
                expect(cart.total).to eq((11.23 * 2/3).to_f * 3)
            end
        end
    end

    describe "Integration rules" do
        it "returns 3.11€ for GR1,GR1 (1 bought, 1 free)" do
            cart = Cart.new
            cart.add('GR1')
            cart.add('GR1')
            expect(cart.total).to eq(3.11)
        end

        it "returns 16.61€ for SR1,SR1,GR1,SR1 (3 strawberries at 4.50€ each)" do
            cart = Cart.new
            cart.add('SR1')
            cart.add('SR1')
            cart.add('GR1')
            cart.add('SR1')
            expect(cart.total).to eq(16.61)
        end

        it "returns 30.57€ for GR1,CF1,SR1,CF1,CF1 (1 green tea, 3 coffees at 2/3 of the base price each, 1 strawberry)" do
            cart = Cart.new
            cart.add('GR1')
            cart.add('CF1')
            cart.add('SR1')
            cart.add('CF1')
            cart.add('CF1')
            expect(cart.total).to eq(30.57)
        end
    end
end