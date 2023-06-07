@items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :name, :category, :price, :description
        json.photoUrl item.photo.attached? ? url_for(item.photo.url) : nil
    end
end
