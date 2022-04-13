class DmMembership < ApplicationRecord
  belongs_to :dm_server,
    foreign_key: :dm_server_id,
    class_name: :DmServer

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User
end
