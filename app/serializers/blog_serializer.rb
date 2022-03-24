class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :blog_entry, :thumbnail, :like
end
