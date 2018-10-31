class CreateCallOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :call_orders do |t|
      t.text :call_type, array: true, default: []
      t.string :customer_name
      t.string :customer_phone
      t.timestamps
    end
  end
end
