json.reviews do
    if @reviews
        @reviews.each do |review|
            json.set! review.id do
                json.extract! review, :rating, :body, :title, :user_id, :item_id
                json.extract! review.user, :email, :username, :created_at, :updated_at
            end
        end
    end
end
