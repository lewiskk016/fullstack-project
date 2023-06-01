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

    bird_items = [
      {
        name: "Colorful Bird Feeder",
        category: "Feeder",
        price: 19.99,
        description: "A beautiful bird feeder that attracts various bird species with its vibrant colors.",
      },
      {
        name: "Birdhouse with Perch",
        category: "Houses",
        price: 29.99,
        description: "A cozy birdhouse with a perch, providing birds with a comfortable place to nest.",
      },
      {
        name: "Bird Watching Binoculars",
        category: "Binoculars",
        price: 49.99,
        description: "High-quality binoculars designed for bird watchers, allowing for clear and detailed bird observations.",
      },
      {
        name: "Bird Bath",
        category: "Bath",
        price: 39.99,
        description: "A bird bath that provides birds with a place to drink and bathe.",
      },
      {
        name: "Bird Seed",
        category: "Seed",
        price: 9.99,
        description: "A bag of bird seed that can be used to fill bird feeders.",
      }
    ]

    bird_items.each do |item|
      Item.create(item)
    end

    puts "Done!"
  end
