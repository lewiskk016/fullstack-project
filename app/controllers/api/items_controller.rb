class Api::ItemsController < ApplicationController
    def index
        @items = Item.all
        render 'api/items/index'
    end

    def show
        @item = Item.find(params[:id])
        if @item
        render 'api/items/show'
        else
            render json: @item.errors.full_messages, status: 404
    end

    def search
    
    end
end
