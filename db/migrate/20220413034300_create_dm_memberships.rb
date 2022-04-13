class CreateDmMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_memberships do |t|
      t.integer :dm_server_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :dm_memberships, :dm_server_id
    add_index :dm_memberships, :user_id
  end
end
