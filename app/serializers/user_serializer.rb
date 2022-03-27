class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :password, :category, :about, :profile_picture
end
