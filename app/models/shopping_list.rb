class ShoppingList < ApplicationRecord
    validates :user_id, :item_id, presence: true

    belongs_to :user
    # foreign_key: :user_id,
    # class_name: :User

    has_many :item
    # foreign_key: :item_id,
    # class_name: :Item

    # def quantity=(value)
    #     self[:quantity] = value
    # end

end
