class CreateShops < ActiveRecord::Migration[5.1]
  def change
    create_table :shops do |t|
      t.string :title
      t.string :short_content
      t.string :content
      t.integer :adult_price
      t.integer :child_price
      t.json :images
      t.timestamps
    end
  end
end
