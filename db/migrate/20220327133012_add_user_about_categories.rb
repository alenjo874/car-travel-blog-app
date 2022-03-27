class AddUserAboutCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :about, :string 
    add_column :users, :category, :string 
  end
end
