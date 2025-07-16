# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


Product.destroy_all

products_data = [
    { code: "GR1", name: "Green Tea", price: 3.11 },
    { code: "SR1", name: "Strawberries", price: 5.00 },
    { code: "CF1", name: "Coffee", price: 11.23 }
]

products_data.each do |product_data|
    Product.find_or_create_by(code: product_data[:code]) do |product|
        product.name = product_data[:name]
        product.price = product_data[:price]
    end
end

puts "Created #{Product.count} products"
