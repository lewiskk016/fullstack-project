class Item < ApplicationRecord
    validates :name, :category, :price, :description, presence: true

    has_one_attached :photo
end
