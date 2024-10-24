class CreatePokemons < ActiveRecord::Migration[7.1]
  def change
    create_table :pokemons do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.string :image, null:false
      t.string :health, null:false
      t.string :attack, null:false
      t.string :defense, null:false
      t.string :speed, null:false

      t.timestamps
    end
  end
end
