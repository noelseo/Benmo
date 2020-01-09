# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create({ first_name: 'Ben', last_name: 'Mo', username: 'b-h-13', email: 'benmo@benmo.com', phone_number: '4151234567', password: 'password'})
