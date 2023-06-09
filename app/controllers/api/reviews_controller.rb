class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.all
        render '/api/reviews/index'
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        if @review
            render '/api/reviews/show'
        else
            render json: { review: nil }
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @review.delete
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review
            if @review.update(review_params)
                render :show
            else
                render json: @review.errors.full_messages, status: :unprocessable_entity
            end
        end
    end

    # def review_params
    #     params.require(:review).permit(:id, :rating, :title, :body, :user_id, :item_id)
    # end

    def review_params
        params.require(:review).permit(:title, :body, :user_id, :item_id, :rating)
      end
end
