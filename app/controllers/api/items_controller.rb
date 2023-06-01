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
        render json: {item: nil}
      end
    end

   
  end
