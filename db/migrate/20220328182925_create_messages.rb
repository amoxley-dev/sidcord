class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :parent_message_id
      t.text :body, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :messages, :sender_id
    add_index :messages, :parent_message_id
    add_index :messages, :channel_id
  end
end
