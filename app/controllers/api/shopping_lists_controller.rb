class Api::ShoppingListsController < ApplicationController
    def index
        @shopping_lists = current_user.shopping_lists
        render :index
    end

    def create
      @shopping_list = ShoppingList.find_by(user_id: params[:user_id], item_id: params[:item_id])
      unless @shopping_list
        @shopping_list = ShoppingList.new(user_id: params[:user_id], item_id: params[:item_id])
      end

      @shopping_list.quantity = params[:quantity].to_i

      if @shopping_list.save
        @user = User.find(params[:user_id])
        @shopping_list_items = ShoppingList.includes(:item).where(user_id: @user.id)
        render :show
      else
        render json: { errors: @shopping_list.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def show
        @shopping_list = ShoppingList.find_by(id: params[:id])
        if @shopping_list
            render :show
        else
            render json: { error: 'Shopping list item not found' }, status: 404
        end
    end


    def update
      # debugger
        @shopping_list = ShoppingList.find_by(id: params[:id])
        if @shopping_list
          if @shopping_list.update(shopping_list_params)
            render :show
            # debugger
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

    private

    def shopping_list_params
        params.require(:shopping_list).permit( :user_id, :item_id, :quantity)
    end
end




 # def create
    #   @shopping_list = ShoppingList.find_by(user_id: params[:user_id], item_id: params[:item_id])
    #   unless @shopping_list
    #     @shopping_list = ShoppingList.new(user_id: params[:user_id], item_id: params[:item_id])
    #   end

    #   @shopping_list.quantity = params[:quantity].to_i

    #   if @shopping_list.save
    #     @user = User.find(params[:user_id])
    #     @shopping_list_items = ShoppingList.includes(:item).where(user_id: @user.id)
    #     render :show
    #   else
    #     render json: { errors: @shopping_list.errors.full_messages }, status: :unprocessable_entity
    #   # end
    #   #   render json: { errors: @shopping_list.errors.full_messages }, status: :unprocessable_entity
    #   end
    # end

    # def show
    #   @shopping_list_items = ShoppingList.includes(:item).where(user_id: @user.id)
    #   render :show
    # end
