# class User < ApplicationRecord
#     before_validation :ensure_session_token

#     validates :name, :email, :password_digest, :session_token, presence: true
#     validates :email, :session_token, uniqueness: true
#     validates :password, length: { minimum: 6, allow_nil: true }

#     has_many :reviews
#     has_many :shopping_list


#     def self.find_by_credentials(email, password)
#         @user = User.find_by(email: email)
#         if @user && @user.is_password?(password)
#             return @user
#         else
#             nil
#         end
#     end

#     def password=(password)
#         @password = password
#         self.password_digest = BCrypt::Password.create(password)
#         # self.password_digest = password
#     end

#     def is_password?(password)
#         password_object = BCrypt::Password.new(self.password_digest)
#         password_object.is_password?(password)
#     end

#     def reset_session_token!
#         self.session_token = SecureRandom::urlsafe_base64
#         self.save!
#         self.session_token
#     end

#     def ensure_session_token
#         self.session_token ||= SecureRandom::urlsafe_base64
#     end

# end


class User < ApplicationRecord
    has_secure_password

    validates :username,
      uniqueness: true,
      length: { in: 3..30 },
      format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email,
      uniqueness: true,
      length: { in: 3..255 },
      format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true

    before_validation :ensure_session_token

    def self.find_by_credentials(credential, password)
      field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
      user = User.find_by(field => credential)
      user&.authenticate(password)
    end

    def reset_session_token!
      self.update!(session_token: generate_unique_session_token)
      self.session_token
    end

    private

    def generate_unique_session_token
      loop do
        token = SecureRandom.base64
        break token unless User.exists?(session_token: token)
      end
    end

    def ensure_session_token
      self.session_token ||= generate_unique_session_token
    end
  end
