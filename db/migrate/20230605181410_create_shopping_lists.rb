class CreateShoppingLists < ActiveRecord::Migration[7.0]
  def change
    create_table :shopping_lists do |t|
      t.bigint :user_id, null: false
      t.index :user_id, name: "index_shopping_lists_on_user_id"
      t.bigint :item_id, null: false
      t.index :item_id, name: "index_shopping_lists_on_item_id"
      t.index [:user_id, :item_id], name: "index_shopping_lists_on_user_id_and_item_id", unique: true
      t.integer :quantity, null: false
      t.timestamps
    end
  end
end
