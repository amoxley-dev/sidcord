class DmMessage < ApplicationRecord
  validates :sender_id, :dm_server_id, :body, presence: true
  validates :body, length: {minimum: 1}

  belongs_to :user,
    foreign_key: :sender_id,
    class_name: :User

  belongs_to :dm_server,
    foreign_key: :dm_server_id,
    class_name: :DmServer

end
