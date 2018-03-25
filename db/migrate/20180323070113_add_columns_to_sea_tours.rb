class AddColumnsToSeaTours < ActiveRecord::Migration[5.1]
  def change
    add_column :sea_tours, :title, :string
    add_column :sea_tours, :short_content, :string
    add_column :sea_tours, :content, :string
    add_column :sea_tours, :adult_price, :integer, default: 0
    add_column :sea_tours, :child_price, :integer, default: 0
  end
end
