class Channel < ApplicationRecord
  validates :channel_name, :server_id, presence: true
  validates :channel_name, uniqueness: { scope: :server_id }

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server
end
