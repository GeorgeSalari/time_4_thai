class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.integer   :product_id
      t.string    :product_type
      t.integer   :quantity
      t.integer   :adult_count
      t.integer   :child_count
      t.date      :booking_date
      t.string    :customer_name
      t.string    :customer_phone
      t.string    :customer_email
      t.string    :customer_comment
      t.timestamps
    end
  end
end
