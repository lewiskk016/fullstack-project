class Api::ItemsController < ApplicationController
    def index
      @items = Item.all
      # render 'api/items/index'
      render :index
    end

    def show
      @item = Item.find_by(id: params[:id])
      # @item = Item.find_by(id: params[:id])
      if @item
        # render 'api/items/show'
        render :show
      else
        render json: { message: 'Item not found' }
      end
    end

    def search
      @items = Item.where("lower(name) LIKE?", "%#{params[:q]}%")
      render :search
  end

  end
