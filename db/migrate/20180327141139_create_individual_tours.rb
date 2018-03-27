class CreateIndividualTours < ActiveRecord::Migration[5.1]
  def change
    create_table :individual_tours do |t|
      t.string :title
      t.string :short_content
      t.string :content
      t.integer :adult_price
      t.integer :child_price
      t.timestamps
    end
  end
end
