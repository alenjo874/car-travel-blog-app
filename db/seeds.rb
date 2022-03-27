require 'faker'

Blog.destroy_all
User.destroy_all

User.create(name: "Alen", password: "123", about: Faker::Hipster.sentence(word_count: 12), category:["Travel", "Car", "Life", "Music"])

images = [ "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", "https://images.unsplash.com/photo-1552519507-88aa2dfa9fdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", "https://images.unsplash.com/photo-1611298280249-ea1e9c1e28f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80", "https://images.unsplash.com/photo-1604705528621-81b2755a320b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","https://images.unsplash.com/photo-1591920689160-ee83654e464a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" ]


    Blog.create(title:Faker::Name.name , user_id: User.all.sample.id, blog_entry:Faker::Hipster.sentence(word_count: 50) ,thumbnail: images[0], like: 0)
    Blog.create(title:Faker::Name.name , user_id: User.all.sample.id, blog_entry:Faker::Hipster.sentence(word_count: 50) ,thumbnail: images[1] ,like: 0)
    Blog.create(title:Faker::Name.name , user_id: User.all.sample.id, blog_entry:Faker::Hipster.sentence(word_count: 50) ,thumbnail: images[2] ,like: 0)
    Blog.create(title:Faker::Name.name , user_id: User.all.sample.id, blog_entry:Faker::Hipster.sentence(word_count: 50) ,thumbnail: images[3] ,like: 0)
    Blog.create(title:Faker::Name.name , user_id: User.all.sample.id, blog_entry:Faker::Hipster.sentence(word_count: 50) ,thumbnail: images[4] ,like: 0)
