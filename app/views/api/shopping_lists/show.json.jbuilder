json.extract! @shopping_list, :quantity, :user_id, :item_id

# json.array! @shopping_list_items do |shopping_list_item|
#     json.quantity shopping_list_item.quantity
#     json.id shopping_list_item.item.id
#     json.photoUrl shopping_list_item.item.photo.attached? ? url_for(shopping_list_item.item.photo.url) : nil
#     json.extract! shopping_list_item.item, :name, :category, :description, :price
# end
