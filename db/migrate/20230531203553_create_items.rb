class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.string :category, null: false
      t.float :price, null: false
      t.text :description, null: false
      t.timestamps
    end
  end
end

