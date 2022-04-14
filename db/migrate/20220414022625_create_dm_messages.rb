class CreateDmMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_messages do |t|
      t.integer :sender_id, null: false
      t.integer :parent_message_id
      t.text :body, null: false
      t.integer :dm_server_id, null: false
      t.timestamps
    end
    add_index :dm_messages, :sender_id
    add_index :dm_messages, :parent_message_id
    add_index :dm_messages, :dm_server_id
  end
end
