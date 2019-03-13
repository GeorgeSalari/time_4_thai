class CreateFavoriteItems < ActiveRecord::Migration[5.1]
  def change
    create_table :favorite_items do |t|
    	t.integer :product_id
      t.string :product_type
      t.integer :favorite_id
      t.integer :quantity
      t.integer :adult_count
      t.integer :child_count
      t.date    :booking_date
      t.timestamps
    end
  end
end
