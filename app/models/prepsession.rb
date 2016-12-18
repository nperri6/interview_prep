class Prepsession < ActiveRecord::Base
	# include ActiveModel::Model
attr_accessor :name, :email, :time, :description
	def initialize(attrs = {})
		p attrs
		@name = attrs[name]
		@email = attrs[email]
		@time = attrs[time]
		@description = attrs[description]
	end

end
