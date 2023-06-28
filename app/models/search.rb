class Search < ApplicationRecord
    def self.perform(query)
      Item.where("name ILIKE ?", "%#{query}%").select(:name)
    end
  end
