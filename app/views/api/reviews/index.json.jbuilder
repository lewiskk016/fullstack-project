json.reviews do
    if @reviews
        @reviews.each do |review|
            json.set! review.id do
                json.extract! review, :id, :rating, :body, :title, :user_id, :item_id
                json.extract! review.user, :email, :name, :created_at, :updated_at
            end
        end
    end
end
