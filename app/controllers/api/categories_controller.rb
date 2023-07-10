# app/controllers/api/categories_controller.rb

class Api::CategoriesController < ApplicationController
    def show
      category = Category.find_by(name: params[:name])
      if category
        items = Item.where(category: category.name)
        render json: items
      else
        render json: { error: 'Category not found' }, status: :not_found
      end
    end
  end

