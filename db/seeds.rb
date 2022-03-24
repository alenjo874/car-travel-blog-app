require 'faker'

Blog.destroy_all

User.create(name: "Alen", password: "123")

20.times do 
    Blog.create(title:Faker::Name.name , user_id: User.all.sample.id, blog_entry:Faker::Lorem.sentence(word_count: 50) ,thumbnail: Faker::LoremFlickr.image, like: 0)
end