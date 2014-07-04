class Subscriber < ActiveRecord::Base
	validates :name, length: { maximum: 50 }
	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
	validates :email, presence: true, format: { with: VALID_EMAIL_REGEX }
	before_save { self.email = email.downcase }

	def self.to_csv(options = {})
		CSV.generate(options) do |csv|
			csv << column_names
			all.each do |user|
				csv << user.attributes.values
			end
		end
	end
end
