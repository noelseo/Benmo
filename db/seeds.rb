# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create({ first_name: 'Ben', last_name: 'Mo', username: 'b-h-13', email: 'benmo@benmo.com', phone_number: '4151234567', password: 'password', balance: 0.00 })

User.create({ first_name: 'Megan', last_name: 'Laney', username: 'm-l-1', email: 'megan@benmo.com', phone_number: '2393921049', password: 'password', balance: 0.00 })

User.create({ first_name: 'Chris', last_name: 'Nguyen', username: 'c-n-2', email: 'chris@benmo.com', phone_number: '4911039829', password: 'password', balance: 0.00 })

User.create({ first_name: 'Jon', last_name: 'Bent', username: 'j-b-3', email: 'jon@benmo.com', phone_number: '2940493059', password: 'password', balance: 0.00 })

User.create({ first_name: 'Darryl', last_name: 'Nguyen', username: 'd-n-2', email: 'darryl@benmo.com', phone_number: '9203911930', password: 'password', balance: 0.00 })

User.create({ first_name: 'Andy', last_name: 'Minucos', username: 'a-m-5', email: 'andy@benmo.com', phone_number: '9502933039', password: 'password', balance: 0.00 })

