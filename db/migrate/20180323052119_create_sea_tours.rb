class CreateSeaTours < ActiveRecord::Migration[5.1]
  def change
    create_table :sea_tours do |t|

      t.timestamps
    end
  end
end
