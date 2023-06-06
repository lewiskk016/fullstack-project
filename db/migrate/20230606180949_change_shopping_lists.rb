class ChangeShoppingLists < ActiveRecord::Migration[7.0]
  def change
    remove_index :shopping_lists, name: "index_shopping_lists_on_user_id_and_item_id"
  end
end
