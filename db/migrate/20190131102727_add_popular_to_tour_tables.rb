class AddPopularToTourTables < ActiveRecord::Migration[5.1]
  def change
  	add_column :avia_tours, :popular, :boolean, default: false
    add_column :evening_shows, :popular, :boolean, default: false
    add_column :individual_tours, :popular, :boolean, default: false
    add_column :land_tours, :popular, :boolean, default: false
    add_column :phuket_tours, :popular, :boolean, default: false
    add_column :sea_tours, :popular, :boolean, default: false
    add_column :boats, :popular, :boolean, default: false
    add_column :shops, :popular, :boolean, default: false
  end
end
