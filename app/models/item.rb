class Item < ApplicationRecord
    validates :name, :category, :price, :description, presence: true

    has_many :shopping_lists,
    foreign_key: :item_id,
    class_name: :ShoppingList,
    dependent: :destroy



    has_one_attached :photo
end
