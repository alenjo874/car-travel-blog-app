class ChangeBlogLikesColumn < ActiveRecord::Migration[6.1]
  def change
    change_column :blogs, :like, :integer, :default => 0
  end
end
