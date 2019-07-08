class AddColumtToIndividualTours < ActiveRecord::Migration[5.1]
  def change
    add_column :individual_tours, :order_number, :integer
  end
end
