class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :name
      t.string :rarity
      t.string :color
      t.string :color2
      t.integer :rank
    end
  end
end
