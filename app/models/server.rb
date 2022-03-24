class Server < ApplicationRecord
  validates :owner_id, presence: true
  validates :server_name, presence: true, length: {minimum: 2}
  validates :public, inclusion:{in:[true, false]}

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User
end
