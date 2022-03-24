class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :blog_entry
      t.string :thumbnail
      t.integer :like

      t.timestamps
    end
  end
end
