class ChangeUsers < ActiveRecord::Migration[7.0]
  def change
    remove_column :users, :name
    add_column :users, :username, :string, null: false
  end
end
