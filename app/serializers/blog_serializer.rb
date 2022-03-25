class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :blog_entry, :thumbnail, :like, :create_date

  has_one :user

  def create_date 
    self.object.created_at.to_date
  end
end
