class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :customer_name
      t.string :customer_email
      t.string :comment
      t.json :avatar
      t.json :images
      t.timestamps
    end
  end
end
