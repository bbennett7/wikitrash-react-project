class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.boolean :recyclable
      t.string :image
      t.text :rules
      t.text :locations
      t.text :references
      t.boolean :verified, :default => false
      t.integer :downvotes, :default => 0
      t.integer :upvotes, :default => 0
      t.integer :searches, :default => 0
      t.timestamps
    end
  end
end
