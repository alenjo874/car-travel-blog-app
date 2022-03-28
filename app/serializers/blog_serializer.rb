class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :blog_teaser, :blog_entry, :thumbnail, :like, :create_date

  has_one :user

  def create_date 
    self.object.created_at.to_date.strftime("%b %d, %Y")
  end

  def blog_teaser 
    self.object.blog_entry.split[0..20].join(" ").gsub(/<\/?[^>]+>/, '')
  end

end
