class Item < ApplicationRecord
    validates :name, :category, :price, :description, presence: true

    has_many :shopping_lists,
    foreign_key: :item_id,
    class_name: :ShoppingList


    has_many :reviews,
    foreign_key: :review_id,
    dependent: :destroy

    def update_reviews
        # total_rating = reviews.sum(:rating)
        average_rating = reviews.average(:rating)
        average_rating
    end

    has_one_attached :photo
end
