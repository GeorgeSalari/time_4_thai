class AddTourIdToComments < ActiveRecord::Migration[5.1]
  def change
    add_column :comments, :tour_id, :integer
    add_column :comments, :tour_type, :string
  end
end
