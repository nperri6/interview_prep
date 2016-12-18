class CreatePrepsessions < ActiveRecord::Migration
  def change
    create_table :prepsessions do |t|
    	t.string :name
    	t.string :email, null: false
    	t.string :time
    	t.string :description

    	t.timestamps null: false
    end
  end
end
