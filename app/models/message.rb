class Message < ApplicationRecord
  validates :sender_id, :body, :channel_id, presence: true

  belongs_to :user,
    foreign_key: :sender_id,
    class_name: :User

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
end
