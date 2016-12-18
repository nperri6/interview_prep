# Preview all emails at http://localhost:3000/rails/mailers/sessionrequest_mailer
class SessionrequestMailerPreview < ActionMailer::Preview
	def sessionrequest_mail_preview
		SessionrequestMailer.email()
	end
end
