items = []

json.shoppingLists do
  debugger
    if @shopping_lists
      @shopping_lists.each do |shopping_list|
        items.push(shopping_list.item)
        json.set! shopping_list.id do
          json.extract! shopping_list, :id, :user_id, :item_id, :quantity
        end
      end
    end
  end

  json.items do
    debugger
    items.each do |item|
      json.set! item.id do
        json.extract! item, :id, :name, :category, :description, :price
        json.image_url url_for(item.image) if item.image.attached?
      end
    end
  end
