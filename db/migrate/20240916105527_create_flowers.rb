class CreateFlowers < ActiveRecord::Migration[7.1]
  def change
    create_table :flowers do |t|
      t.string :name, null: false
      t.string :colour, null: false
      t.text :description, null: false
      t.string :image, default: 'https://www.gardendesign.com/pictures/images/675x529Max/site_3/heat-it-up-scarlet-gaillardia-gaillardia-hybrid-blanket-flower-proven-winners_16235.jpg'

      t.timestamps
    end
  end
end
