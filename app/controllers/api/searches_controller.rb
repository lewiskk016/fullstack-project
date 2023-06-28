class Api::SearchesController < ApplicationController
    def search
      query = params[:q]
      @results = Search.perform(query)
      render json: @results
    end
  end
