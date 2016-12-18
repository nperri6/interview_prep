class ReviewsController < ApplicationController
  def index
  end

  def getAll
  	@reviews = Review.take(2)
  	puts " reviews: #{@reviews.size}"
  	# render json: {}
  	render json: @reviews.to_json
  end
end
