class SubscribersController < ApplicationController
  def new
  	@subscriber = Subscriber.new
  end

  def create 
  	@subscriber = Subscriber.new(subscriber_params)
	if @subscriber.save
		flash[:success] = "Thank you for signing up"
		redirect_to root_url
    	else
		render 'new'
		flash[:error] = "Please enter a valid email address"
    	end
  end 

  private

  def subscriber_params
	params.require(:subscriber).permit(:name, :email)
  end

end
