class AddPaymentToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :payment, :string
  end
end
