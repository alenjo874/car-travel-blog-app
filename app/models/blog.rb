class Blog < ApplicationRecord
    belongs_to :user

    validates :thumbnail, presence: true
    validates :blog_entry, presence: true
    validates :title, presence: true
end
