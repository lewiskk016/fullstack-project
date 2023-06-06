class Api::ShoppingListsController < ApplicationController
    def index
        @shopping_lists = current_user.shopping_lists
        render :index
    end


    def create
        @shopping_list = ShoppingList.find_by(item_id: shopping_list_params[:item_id], user_id: current_user.id)
        if @shopping_list
            @shopping_list.quantity += shopping_list_params[:quantity].to_i
            @shopping_list.save
        else
            @shopping_list = ShoppingList.create(shopping_list_params)
        end
        render :show
    end
    #     @shopping_list = ShoppingList.new(shopping_list_params)
    #     # if @shopping_list.save!
    #     if @shopping_list
    #         render :show
    #     else
    #         render json: @shopping_list.errors.full_messages, status: 422
    #     end
    # end

    def update
        @shopping_list = ShoppingList.find_by(id: params[:id])
        if @shopping_list
          if @shopping_list.update(shopping_list_params)
            render :show
          else
            render json: @shopping_list.errors.full_messages, status: 422
          end
        else
          render json: { error: 'Shopping list item not found' }, status: 404
        end
      end

    def destroy
        @shopping_list = ShoppingList.find_by(id: params[:id])
        if @shopping_list
            @shopping_list.destroy
        end
    end

    def shopping_list_params
        params.require(:shopping_list).permit(:quantity, :user_id, :item_id)
      end

end
