class AddOrderNumberToTables < ActiveRecord::Migration[5.1]
  def change
    add_column :avia_tours, :order_number, :integer
    add_column :evening_shows, :order_number, :integer
    add_column :land_tours, :order_number, :integer
    add_column :phuket_tours, :order_number, :integer
    add_column :sea_tours, :order_number, :integer
    add_column :boats, :order_number, :integer
    add_column :shops, :order_number, :integer
  end
end
