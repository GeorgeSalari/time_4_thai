class AddDurationToTours < ActiveRecord::Migration[5.1]
  def change
  	add_column :avia_tours, :duration, :integer
    add_column :evening_shows, :duration, :integer
    add_column :individual_tours, :duration, :integer
    add_column :land_tours, :duration, :integer
    add_column :phuket_tours, :duration, :integer
    add_column :sea_tours, :duration, :integer
    add_column :boats, :duration, :integer
    add_column :shops, :duration, :integer

    add_column :avia_tours, :tour_program, :string
    add_column :evening_shows, :tour_program, :string
    add_column :individual_tours, :tour_program, :string
    add_column :land_tours, :tour_program, :string
    add_column :phuket_tours, :tour_program, :string
    add_column :sea_tours, :tour_program, :string
    add_column :boats, :tour_program, :string
    add_column :shops, :tour_program, :string
	
	add_column :avia_tours, :included, :string
    add_column :evening_shows, :included, :string
    add_column :individual_tours, :included, :string
    add_column :land_tours, :included, :string
    add_column :phuket_tours, :included, :string
    add_column :sea_tours, :included, :string
    add_column :boats, :included, :string
    add_column :shops, :included, :string
	
	add_column :avia_tours, :necessary, :string
    add_column :evening_shows, :necessary, :string
    add_column :individual_tours, :necessary, :string
    add_column :land_tours, :necessary, :string
    add_column :phuket_tours, :necessary, :string
    add_column :sea_tours, :necessary, :string
    add_column :boats, :necessary, :string
    add_column :shops, :necessary, :string
  end
end
