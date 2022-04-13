# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  tag             :integer          not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
  validates :username, :password_digest, presence: true, length: {minimum: 2}
  validates :email, :session_token, presence: true, uniqueness: true
  validates :tag, presence: true, length: {minimum:4}
  validates :password, length:{minimum:6, allow_nil: true}

  attr_reader :password
  after_initialize :ensure_session_token

  has_one_attached :profile_picture

  has_many :owned_servers,
    foreign_key: :owner_id,
    class_name: :Server,
    dependent: :destroy

  has_many :server_memberships,
    foreign_key: :user_id,
    class_name: :ServerMembership,
    dependent: :destroy

  has_many :servers,
    through: :server_memberships,
    source: :server

  has_many :messages,
    foreign_key: :sender_id,
    class_name: :Message,
    dependent: :destroy

  has_many :owned_dm_servers,
    foreign_key: :owner_id,
    class_name: :DmServer

  has_many :dm_memberships,
    foreign_key: :user_id,
    class_name: :DmMembership

  has_many :dm_servers,
    through: :dm_memberships,
    source: :dm_server

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
