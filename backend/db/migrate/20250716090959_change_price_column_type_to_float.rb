class ChangePriceColumnTypeToFloat < ActiveRecord::Migration[8.0]
  def change
    change_column :products, :price, :float
  end
end
