# json.search do
#     @items.each do |item|
#         json.set! item.id do
#             json.extract! item, :id, :name, :category, :price, :description
#             json.photoUrl url_for(item.image)
#             json.reviews do
#                 if item.reviews
#                     item.reviews.each do |review|
#                         json.set! review.id do
#                             json.extract! review, :id, :title, :body, :rating, :user_id, :product_id
#                             json.extract! review.user, :id, :email, :name, :created_at, :updated_at
#                         end
#                     end
#                 end
#             end
#         end
#     end
# end


json.results @results.map { |result| { name: result.name } }
