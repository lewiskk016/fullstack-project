class Review < ApplicationRecord
    belongs_to :user,
    foreign_key: :review_id,
    class_name: :User

    belongs_to :item,
    foreign_key: :review_id,
    class_name: :Item


end
