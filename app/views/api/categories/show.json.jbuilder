json.category do
    json.extract! @category, :name

    json.items @items do |item|
      json.extract! item, :id, :name, :price, :description, :photoUrl
    end
  end
