class ChangeDataTypeForTag < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :tag, :string, null: false
  end
end
