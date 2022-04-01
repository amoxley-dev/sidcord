class AddUser < ActiveRecord::Migration[5.2]
  def change
  end

  add_column :users, :profile_picture_url, :string
end
