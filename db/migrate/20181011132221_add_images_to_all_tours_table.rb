class AddImagesToAllToursTable < ActiveRecord::Migration[5.1]
  def change
    add_column :avia_tours, :images, :json
    add_column :evening_shows, :images, :json
    add_column :individual_tours, :images, :json
    add_column :land_tours, :images, :json
    add_column :phuket_tours, :images, :json
    add_column :sea_tours, :images, :json
  end
end
