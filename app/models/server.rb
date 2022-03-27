class Server < ApplicationRecord
  validates :owner_id, presence: true
  validates :server_name, presence: true, length: {minimum: 2}
  validates :public, inclusion:{in:[true, false]}

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :server_memberships,
    foreign_key: :server_id,
    class_name: :ServerMembership,
    dependent: :destroy

  has_many :users,
    through: :server_memberships,
    source: :user
end
