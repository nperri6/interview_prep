class PrepsessionsController < ApplicationController
  def requestSession
  	p "requested session #{params}"
  	@prepsession = Prepsession.new()
  	# @prepsession.name = params.name
  	# @prepsession.email = params.email
  	# @prepsession.time = params.time
  	# @prepsession.description = params.description
  	# @prepsession.save

  	render json: {status: 'OK'};

  end


end
