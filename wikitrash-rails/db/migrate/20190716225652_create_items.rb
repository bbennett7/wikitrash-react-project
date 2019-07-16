class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :recyclable
      t.string :image
      t.text :rules
      t.text :locations
      t.boolean :verified
      t.integer :downvotes
      t.integer :upvotes
      t.timestamps
    end
  end
end
