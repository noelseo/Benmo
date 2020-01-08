# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  phone_number    :integer          not null
#  username        :string
#  balance         :float
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :first_name, :last_name, :email, :phone_number, :password_digest, presence: true
    validates :email, :phone_number, :username, :session_token, uniqueness: true
    validates :password, length: { minimum: 8, allow_nil: true }

    before_validation :ensure_session_token
    attr_reader :password

    def self.find_by_credentials(username, password)
        @user = User.find_by(username: username)
        return nil unless @user && @user.is_password?(password)
        @user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
