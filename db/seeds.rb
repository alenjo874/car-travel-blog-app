require 'faker'

Attraction.destroy_all

20.times do 
    Attraction.create(name:Faker::Name.name ,image: Faker::LoremFlickr.image)
end