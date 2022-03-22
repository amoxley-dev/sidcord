class Server < ApplicationRecord
  validates :owner_id, :server_name, presence: true
  validate :public, inclusion:{in:[true, false]}

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User
end
