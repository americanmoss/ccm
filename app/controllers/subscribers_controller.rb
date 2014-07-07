class SubscribersController < ApplicationController

	skip_before_action :verify_authenticity_token

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

	def index
		@subscribers = Subscriber.all
		respond_to do |format|
			format.html
			format.csv { 
				if current_user.try(:admin?) 
					send_data @subscribers.to_csv 
				else
					redirect_to(subscribers_path)
					flash[:error] = "Only administrators may download data"
				end
			}
			format.xls {
				if current_user.try(:admin?) 
					send_data @subscribers.to_csv(col_sep: "\t")
				else
					redirect_to(subscribers_path)
					flash[:error] = "Only administrators may download data"
				end
			}
		end
			

	end

	private

	def subscriber_params
		params.require(:subscriber).permit(:name, :email)
	end

end
