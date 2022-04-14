class DmServer < ApplicationRecord
  validates :owner_id, presence: true

  belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

  has_many :dm_memberships,
    foreign_key: :dm_server_id,
    class_name: :DmMembership

  has_many :users,
    through: :dm_memberships,
    source: :user

  has_many :dm_messages,
    foreign_key: :dm_server_id,
    class_name: :DmMessage
end
