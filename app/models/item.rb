class Item < ApplicationRecord
    validates :name, :category, :price, :description, presence: true
    validates :description, uniqueness: true


end
