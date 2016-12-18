class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
    	t.decimal :rating, null: false
    	t.string :author
    	t.string :description, null: false

    	t.timestamps null: false
    end
  end
end
