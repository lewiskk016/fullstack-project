items = []

json.shoppingLists do
    if @shopping_lists
      @shopping_lists.each do |shopping_list|
        items.push(shopping_list.item)
        json.set! shopping_list.id do
          json.extract! shopping_list, :user_id, :item_id, :quantity
        end
      end
    end
  end

  json.items do
    items.each do |item|
      json.set! item.id do
        json.extract! item, :name, :category, :description, :price
        # json.image_url url_for(item.image) if item.image.attached?
      end
    end
  end


  # json.extract! @shopping_lists, :user_id, :item_id, :quantity
# json.array! @shopping_lists do |shopping_list|
#   json.quantity shopping_list.quantity
#   json.id shopping_list.item.id
#   json.extract! shopping_list.item, :name, :category, :description, :price
# end
