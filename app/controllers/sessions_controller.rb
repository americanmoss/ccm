class SessionsController < ApplicationController

	def new
	end

	def create
		user = User.find_by(email: params[:session][:email].downcase)
		if user && user.authenticate(params[:session][:password])
			sign_in user
			flash[:success] = "Login successful"
			redirect_to subscribers_path
		else
			flash.now[:error] = 'Invalid email/password combination'
      			render 'new'
    		end
	end

	def destroy
		sign_out
		flash[:success] = "Logout successful"
		redirect_to root_url
	end
end
