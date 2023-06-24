class Review < ApplicationRecord

    validates :rating, :title, :body, :user_id, :item_id, presence: true
    validates :rating, inclusion: { in: (1..5) }


    belongs_to :user,
      foreign_key: :user_id,
      class_name: 'User'

    belongs_to :item,
      foreign_key: :item_id,
      class_name: 'Item'


  end
