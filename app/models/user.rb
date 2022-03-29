class User < ApplicationRecord
    has_secure_password
    has_many :blogs
    validates :name, uniqueness: true
    # validates :name :password,  presence: true
end
