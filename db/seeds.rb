# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')

    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'Demo-User',
      email: 'demo@user.io',
      password: 'password'
    )

    # More users
    10.times do
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      })
    end

    # bird_items = [
    #   {
    #     name: "Hummingbird Feeder",
    #     category: "Feeder",
    #     price: 24.99,
    #     description: "A hummingbird feeder that can be filled with hummingbird nectar.",
    #   },
    #   {
    #     name: "Bird Feeder",
    #     category: "Feeder",
    #     price: 14.99,
    #     description: "A simple bird feeder that can be filled with bird seed.",
    #   },
    #   {
    #     name: "Colorful Bird Feeder",
    #     category: "Feeder",
    #     price: 19.99,
    #     description: "A beautiful bird feeder that attracts various bird species with its vibrant colors.",
    #   },
    #   {
    #     name: "Birdhouse with Perch",
    #     category: "Houses",
    #     price: 29.99,
    #     description: "A cozy birdhouse with a perch, providing birds with a comfortable place to nest.",
    #   },
    #   {
    #     name: "Bird Watching Binoculars",
    #     category: "Binoculars",
    #     price: 49.99,
    #     description: "High-quality binoculars designed for bird watchers, allowing for clear and detailed bird observations.",
    #   },
    #   {
    #     name: "Bird Bath",
    #     category: "Bath",
    #     price: 39.99,
    #     description: "A bird bath that provides birds with a place to drink and bathe.",
    #   },
    #   {
    #     name: "Bird Seed",
    #     category: "Seed",
    #     price: 9.99,
    #     description: "A bag of bird seed that can be used to fill bird feeders.",
    #   }
    # ]

    # bird_items.each do |item|
    #   Item.create(item)
    # end





    item1 = Item.create!(
      name: "Kaytee Wild Bird Food 5 Pounds
      ",
        category: "Seed",
        price: 9.99,
        description: "A bag of bird seed that can be used to fill bird feeders."
    )

    item2 = Item.create!(
      name: "Bird Bath",
        category: "Bath",
        price: 39.99,
        description: "A bird bath that provides birds with a place to drink and bathe."
    )

    item3 = Item.create!(
      name: "Bird Watching Binoculars",
        category: "Binoculars",
        price: 49.99,
        description: "High-quality binoculars designed for bird watchers, allowing for clear and detailed bird observations."
    )

    item4 = Item.create!(
      name: "Birdhouse with Perch",
        category: "Houses",
        price: 29.99,
        description: "A cozy birdhouse with a perch, providing birds with a comfortable place to nest."
    )

    item5 = Item.create!(
      name: "Hanizi Wild Bird Feeders for Outside, Hanging Bird Feeder Squirrel Proof, Outdoor Birds Feeders Wild Bird Seed, Garden Yard Decoration (Green)",
        category: "Feeder",
        price: 19.99,
        description:
        " - Hanizi Bird Feeder: We focus on researching and developing wild bird feeders, squirrel proof birds feeders for outside hanging. Lightweight build, durable metal rope, and a twist lock that deters squirrels.
        - Easy to Use: Open the lid, put the wild bird seeds, sunflower seeds for birds into the bird feeder, close the lid, and then hang the bird feeder under the eaves or in the garden.
        - Large Capacity: 8.5 x 7.9 x 7.3 inches. Made of durable, high quality plastic. The clear plastic make it easy to inspect bird seed levels. Hold up to 47 oz bird seeds. - Large opening allows for easy refills and clean.
        - Clever Design: Inclined roof to help prevent the seeds inside from getting wet. When the seeds are eaten, more seeds will naturally fill the tray. The tray has leaking holes to avoid water accumulation, keep the bird seeds dry.
        - Ideal Choice: For your convenience and the health of your garden birds, choose Hanizi wild bird feeder that is easy to fill, empty, and clean. Check the birds feeders once a week and wash it regularly with mild soap and water solution. If you have any questions about bird feeders, please feel free to contact us."
    )

    item6 = Item.create!(
      name: "Bird Feeder",
        category: "Feeder",
        price: 14.99,
        description: "A simple bird feeder that can be filled with bird seed."
    )

    item7 = Item.create!(
      name: "Hummingbird Feeder",
      category: "Feeder",
      price: 24.99,
      description: "A hummingbird feeder that can be filled with hummingbird nectar."
    )

    item8 = Item.create!(
      name: "Woodpecker Bird Seed",
      category: "Seed",
      price: 9.99,
      description: "A bag of bird seed that can be used to fill bird feeders."
    )

    item9 = Item.create!(
      name: "Small Bird Bath",
      category: "Bath",
      price: 39.99,
      description: "A bird bath that provides small birds with a place to drink and bathe."
    )

    item10 = Item.create!(
      name: "Entry Level Binoculars",
      category: "Binoculars",
      price: 39.99,
      description: "Binoculars designed for beginner bird watchers, allowing for clear and detailed bird observations."
    )

    item11 = Item.create!(
      name: "Birdhouse",
      category: "Houses",
      price: 19.99,
      description: "A cozy birdhouse, providing birds with a comfortable place to nest."
    )

    item12= Item.create!(
      name: "Bird Feeder",
      category: "Feeder",
      price: 14.99,
      description: "A simple bird feeder that can be filled with bird seed."
    )

    item13 = Item.create!(
      name: "Premium Bird Feeder",
      category: "Feeder",
      price: 34.99,
      description: "A high-quality bird feeder designed to attract a wide variety of bird species."
    )

    item14 = Item.create!(
      name: "Squirrel-Proof Bird Feeder",
      category: "Feeder",
      price: 49.99,
      description: "A bird feeder equipped with mechanisms to prevent squirrels from accessing the bird food."
    )

    item15 = Item.create!(
      name: "Birdhouse Kit",
      category: "Houses",
      price: 24.99,
      description: "A DIY birdhouse kit that allows you to build and decorate your own birdhouse."
    )

    item16 = Item.create!(
      name: "Cardinal Bird Seed",
      category: "Seed",
      price: 12.99,
      description: "A specialized blend of bird seed formulated to attract cardinal birds."
    )

    item17 = Item.create!(
      name: "Large Bird Bath",
      category: "Bath",
      price: 59.99,
      description: "A spacious bird bath that accommodates multiple birds at once."
    )

    item18 = Item.create!(
      name: "Compact Binoculars",
      category: "Binoculars",
      price: 29.99,
      description: "Lightweight and portable binoculars ideal for bird watching on the go."
    )

    item19 = Item.create!(
      name: "Oriole Bird Feeder",
      category: "Feeder",
      price: 22.99,
      description: "A specialized bird feeder designed to attract beautiful oriole birds."
    )

    item20 = Item.create!(
      name: "Elegant Bird Bath",
      category: "Bath",
      price: 69.99,
      description: "An elegant and decorative bird bath made from durable materials."
    )

    item21 = Item.create!(
      name: "Compact Spotting Scope",
      category: "Binoculars",
      price: 89.99,
      description: "A compact spotting scope with high magnification for detailed bird observations."
    )

    item22 = Item.create!(
      name: "Suet Bird Feeder",
      category: "Feeder",
      price: 17.99,
      description: "A bird feeder designed to hold suet cakes, a favorite food for many bird species."
    )

    item23 = Item.create!(
      name: "Wildflower Bird Seed",
      category: "Seed",
      price: 11.99,
      description: "A blend of wildflower seeds suitable for attracting birds and adding beauty to your garden."
    )

    item24 = Item.create!(
      name: "Colorful Butterfly Feeder",
      category: "Feeder",
      price: 12.99,
      description: "A vibrant butterfly feeder that attracts and provides nourishment for beautiful butterflies."
    )

    item25 = Item.create!(
      name: "Wooden Birdhouse",
      category: "Houses",
      price: 24.99,
      description: "A rustic wooden birdhouse with intricate design details, perfect for bird nesting."
    )

    item26 = Item.create!(
      name: "Premium Binoculars",
      category: "Binoculars",
      price: 149.99,
      description: "High-end binoculars with advanced optics for professional bird watching and nature observation."
    )

    item27 = Item.create!(
      name: "Hanging Bird Bath",
      category: "Bath",
      price: 29.99,
      description: "A hanging bird bath that can be easily suspended from a tree or a pole."
    )

    item28 = Item.create!(
      name: "Songbird Bird Seed",
      category: "Seed",
      price: 8.99,
      description: "A specialized blend of bird seed formulated to attract a variety of beautiful songbirds."
    )

    item29 = Item.create!(
      name: "Squirrel-Proof Bird Feeder",
      category: "Feeder",
      price: 34.99,
      description: "A cleverly designed bird feeder that keeps pesky squirrels from stealing bird seed."
    )

    item30 = Item.create!(
      name: "Waterproof Binoculars",
      category: "Binoculars",
      price: 79.99,
      description: "Waterproof binoculars perfect for bird watching even in wet and rainy conditions."
    )

    item31 = Item.create!(
      name: "Decorative Birdhouse",
      category: "Houses",
      price: 17.99,
      description: "A decorative birdhouse featuring intricate patterns and vibrant colors."
    )

    item32 = Item.create!(
      name: "Durable Bird Feeder",
      category: "Feeder",
      price: 22.99,
      description: "A sturdy and durable bird feeder made from weather-resistant materials."
    )

    item33 = Item.create!(
      name: "Premium Bird Seed Mix",
      category: "Seed",
      price: 11.99,
      description: "A premium blend of bird seed mix containing a variety of high-quality seeds and nuts."
    )

    item34 = Item.create!(
      name: "Songbird Blend Bird Seed",
      category: "Seed",
      price: 14.99,
      description: "A special blend of bird seed designed to attract beautiful songbirds to your backyard."
    )

    item35 = Item.create!(
      name: "Rustic Birdhouse",
      category: "Houses",
      price: 24.99,
      description: "A charming and rustic birdhouse made from reclaimed wood, adding a touch of nature to your garden."
    )

    item36 = Item.create!(
      name: "Compact Binoculars",
      category: "Binoculars",
      price: 59.99,
      description: "Compact and lightweight binoculars ideal for bird watching on-the-go."
    )

    item37 = Item.create!(
      name: "Suet Cake",
      category: "Feeder",
      price: 8.99,
      description: "A nutritious suet cake packed with energy-rich ingredients for birds to enjoy."
    )

    item38 = Item.create!(
      name: "Bird Feeding Station",
      category: "Feeder",
      price: 49.99,
      description: "A complete bird feeding station with multiple feeders, perches, and a water tray."
    )

    item39 = Item.create!(
      name: "Wide Angle Binoculars",
      category: "Binoculars",
      price: 89.99,
      description: "Binoculars with a wide-angle lens for a broader field of view during bird observations."
    )

    item40 = Item.create!(
      name: "Ceramic Bird Bath",
      category: "Bath",
      price: 59.99,
      description: "A ceramic bird bath with an elegant design, providing birds with a stylish place to bathe."
    )

    item41 = Item.create!(
      name: "Seed Catcher Tray",
      category: "Seed",
      price: 12.99,
      description: "A seed catcher tray that attaches to bird feeders, preventing seed spillage and keeping the area tidy."
    )

    item42 = Item.create!(
      name: "Nesting Material",
      category: "Feeders",
      price: 6.99,
      description: "A bundle of natural nesting material for birds to use in constructing their nests."
    )

    item43 = Item.create!(
      name: "Squirrel Baffle",
      category: "Feeders",
      price: 19.99,
      description: "A squirrel baffle that protects bird feeders by preventing squirrels from climbing up the pole."
    )

    item44 = Item.create!(
      name: "Compact Binoculars",
      category: "Binoculars",
      price: 79.99,
      description: "Compact and lightweight binoculars with high magnification for detailed bird observations."
    )

    item45 = Item.create!(
      name: "Bird Watching Guide",
      category: "Books",
      price: 19.99,
      description: "A comprehensive guidebook for bird watchers, featuring information on bird species and their behavior."
    )

    item46 = Item.create!(
      name: "Window Bird Feeder",
      category: "Feeder",
      price: 29.99,
      description: "A transparent window bird feeder that attaches to your window, providing a close-up view of feeding birds."
    )

    item47 = Item.create!(
      name: "Premium Bird Seed",
      category: "Seed",
      price: 12.99,
      description: "A premium blend of bird seed enriched with nutritious ingredients to attract a variety of bird species."
    )

    item48 = Item.create!(
      name: "Ceramic Bird Bath",
      category: "Bath",
      price: 69.99,
      description: "A ceramic bird bath with a decorative design, creating an inviting space for birds to bathe and drink."
    )

    item49 = Item.create!(
      name: "Multi-level Birdhouse",
      category: "Houses",
      price: 39.99,
      description: "A multi-level birdhouse with separate compartments for multiple bird families to nest comfortably."
    )

    item50 = Item.create!(
      name: "Zoom Binoculars",
      category: "Binoculars",
      price: 99.99,
      description: "Powerful binoculars with adjustable zoom capability, allowing for close-up views of distant birds."
    )

    item51 = Item.create!(
      name: "Bird Identification Book",
      category: "Books",
      price: 14.99,
      description: "A handy pocket-sized book with illustrations and descriptions of various bird species for easy identification."
    )

    item52 = Item.create!(
      name: "Squirrel-Proof Feeder",
      category: "Feeder",
      price: 49.99,
      description: "A squirrel-proof bird feeder with special mechanisms to prevent squirrels from accessing the bird seed."
    )

    item53 = Item.create!(
      name: "Wildflower Seed Mix",
      category: "Seed",
      price: 9.99,
      description: "A mix of wildflower seeds that attract birds and provide them with a natural food source."
    )

    item54 = Item.create!(
      name: "Night Vision Binoculars",
      category: "Binoculars",
      price: 149.99,
      description: "High-quality binoculars with night vision capability, perfect for bird watching during low-light conditions."
    )

    item55 = Item.create!(
      name: "Birding Field Guide",
      category: "Books",
      price: 24.99,
      description: "A comprehensive field guide specifically tailored for bird enthusiasts, featuring detailed information and illustrations."
    )

    item56 = Item.create!(
      name: "Hanging Bird Feeder",
      category: "Feeder",
      price: 34.99,
      description: "A hanging bird feeder with multiple feeding ports, attracting a wide range of bird species to your yard."
    )

    item57 = Item.create!(
      name: "Premium Bird Seed Mix",
      category: "Seed",
      price: 14.99,
      description: "A premium blend of bird seed mix formulated with high-quality ingredients to attract a diverse range of birds."
    )

    item58 = Item.create!(
      name: "Solar-Powered Bird Bath",
      category: "Bath",
      price: 89.99,
      description: "A solar-powered bird bath that circulates water, providing a fresh and inviting source for birds to drink and bathe."
    )

    item59 = Item.create!(
      name: "Decorative Birdhouse",
      category: "Houses",
      price: 49.99,
      description: "A decorative birdhouse with intricate designs, adding a charming touch to your garden while providing a nesting spot for birds."
    )

    item60 = Item.create!(
      name: "Wide-Angle Binoculars",
      category: "Binoculars",
      price: 119.99,
      description: "Wide-angle binoculars with a wide field of view, allowing for immersive bird watching experiences."
    )

    item61 = Item.create!(
      name: "Birding Journal",
      category: "Books",
      price: 9.99,
      description: "A birding journal to record your observations, notes, and sightings during your bird watching adventures."
    )

    item62 = Item.create!(
      name: "Platform Bird Feeder",
      category: "Feeder",
      price: 39.99,
      description: "A platform-style bird feeder that accommodates different bird species and provides ample space for feeding."
    )

    item63 = Item.create!(
      name: "Fruit & Nut Bird Seed",
      category: "Seed",
      price: 11.99,
      description: "A specialized bird seed blend with added fruits and nuts to attract birds with specific dietary preferences."
    )

    item64 = Item.create!(
      name: "Compact Binoculars",
      category: "Binoculars",
      price: 79.99,
      description: "Compact and lightweight binoculars ideal for bird watching on the go, offering excellent portability and performance."
    )

    item65 = Item.create!(
      name: "Birding Handbook",
      category: "Books",
      price: 19.99,
      description: "A comprehensive handbook for birding enthusiasts, providing valuable insights, tips, and identification techniques."
    )

    item66 = Item.create!(
      name: "Squirrel-Proof Bird Feeder",
      category: "Feeder",
      price: 49.99,
      description: "A squirrel-proof bird feeder designed with innovative mechanisms to prevent squirrels from accessing the bird seed."
    )

    item67 = Item.create!(
      name: "Premium Sunflower Seeds",
      category: "Seed",
      price: 8.99,
      description: "High-quality sunflower seeds, a favorite among many bird species, offering a nutritious and energy-rich food source."
    )

    item68 = Item.create!(
      name: "Ceramic Bird Bath",
      category: "Bath",
      price: 69.99,
      description: "A beautifully crafted ceramic bird bath, adding an elegant touch to your garden while providing birds with a refreshing spot to bathe."
    )

    item69 = Item.create!(
      name: "Multiple Entry Birdhouse",
      category: "Houses",
      price: 59.99,
      description: "A spacious birdhouse with multiple entry holes, accommodating several bird families simultaneously."
    )

    item70 = Item.create!(
      name: "Waterproof Binoculars",
      category: "Binoculars",
      price: 129.99,
      description: "Waterproof binoculars suitable for bird watching in wet and rainy conditions, ensuring durability and clear vision."
    )

    item71 = Item.create!(
      name: "Birding Field Journal",
      category: "Books",
      price: 12.99,
      description: "A field journal specifically designed for birders, featuring prompts and spaces to document bird sightings and observations."
    )

    item72 = Item.create!(
      name: "Tube Bird Feeder",
      category: "Feeder",
      price: 24.99,
      description: "A tube-style bird feeder with multiple perches and seed ports, attracting various bird species for feeding."
    )

    item73 = Item.create!(
      name: "Nyjer Thistle Seed",
      category: "Seed",
      price: 6.99,
      description: "Nyjer thistle seed, a favorite among finches and other small bird species, providing a high-energy food source."
    )


    item74 = Item.create!(
      name: "Zoom Binoculars",
      category: "Binoculars",
      price: 149.99,
      description: "Powerful zoom binoculars with adjustable magnification, allowing for detailed bird observations even at a distance."
    )

    item75 = Item.create!(
      name: "Birding Guide Book",
      category: "Books",
      price: 14.99,
      description: "An informative guide book covering various bird species, habitats, behaviors, and conservation efforts."
    )

    item76 = Item.create!(
      name: "Window Bird Feeder",
      category: "Feeder",
      price: 29.99,
      description: "A convenient window-mounted bird feeder that allows for up-close bird watching from the comfort of your home."
    )

    item77 = Item.create!(
      name: "Wildflower Seed Mix",
      category: "Seed",
      price: 9.99,
      description: "A mix of wildflower seeds specially formulated to attract a wide variety of birds and enhance your garden's biodiversity."
    )

    item78 = Item.create!(
      name: "Heated Bird Bath",
      category: "Bath",
      price: 89.99,
      description: "A heated bird bath designed to keep the water from freezing during colder months, providing birds with a reliable water source."
    )

    item79 = Item.create!(
      name: "Rustic Birdhouse",
      category: "Houses",
      price: 39.99,
      description: "A charming and rustic birdhouse crafted from natural materials, offering birds a cozy and inviting nesting spot."
    )

    item80 = Item.create!(
      name: "Night Vision Binoculars",
      category: "Binoculars",
      price: 199.99,
      description: "Advanced binoculars equipped with night vision technology, allowing for bird observations in low-light or nighttime conditions."
    )

    item81 = Item.create!(
      name: "Bird Identification Book",
      category: "Books",
      price: 17.99,
      description: "An illustrated bird identification book featuring detailed descriptions, images, and range maps for easy bird species identification."
    )

    item82 = Item.create!(
      name: "Platform Bird Feeder",
      category: "Feeder",
      price: 34.99,
      description: "A spacious platform-style bird feeder suitable for offering a variety of bird feed, attracting different species to your yard."
    )

    item83 = Item.create!(
      name: "Suet Cake Variety Pack",
      category: "Seed",
      price: 12.99,
      description: "A variety pack of suet cakes in different flavors, providing birds with a high-energy treat during colder months."
    )

    item84 = Item.create!(
      name: "Hanging Bird Feeder",
      category: "Feeder",
      price: 19.99,
      description: "A hanging bird feeder that can be suspended from a tree branch or hook."
    )

    item85 = Item.create!(
      name: "Sunflower Bird Seed",
      category: "Seed",
      price: 8.99,
      description: "A bag of sunflower seeds suitable for attracting a variety of bird species."
    )



    puts "Done!"
  end
