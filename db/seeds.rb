require 'faker'

Blog.destroy_all

20.times do 
    Blog.create(title:Faker::Name.name , blog_entry:Faker::Lorem.sentence(word_count: 50) ,thumbnail: Faker::LoremFlickr.image, like: 0)
end