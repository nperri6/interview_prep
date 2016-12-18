class SessionrequestMailer < ApplicationMailer
	default from: "prepsesssions@gmail.com"

	def email
		mail(to: 'nperri6@gmail.com', subject: 'Test email')
	end

end
