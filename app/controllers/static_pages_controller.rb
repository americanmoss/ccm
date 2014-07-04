class StaticPagesController < ApplicationController
  def home
  	@subscriber = Subscriber.new
  end

  def create
  	@subscriber = Subscriber.new(subscriber_params)
	if @subscriber.save
      		redirect_to root_url
    	else
      		render 'new'
    	end
  end

  def contact
  end
end
