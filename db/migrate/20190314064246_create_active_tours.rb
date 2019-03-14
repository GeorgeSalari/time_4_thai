class CreateActiveTours < ActiveRecord::Migration[5.1]
  def change
    create_table :active_tours do |t|
    	t.string :title
      t.string :short_content
      t.string :content
      t.integer :adult_price
      t.integer :child_price
      t.json :images
      t.integer :order_number
      t.boolean :popular, default: false
      t.integer :duration
      t.string :tour_program
      t.string :included
      t.string :necessary
      t.timestamps
    end
  end
end
