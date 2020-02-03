# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
bank = User.create({ first_name: 'Bank', last_name: 'Account', username: 'bank', email: 'bank@benmo.com', phone_number: '2930391029', password: 'safesafe', balance: 1000000.00 })

ben = User.create({ first_name: 'Ben', last_name: 'Mo', username: 'b-h-13', email: 'benmo@benmo.com', phone_number: '4151234567', password: 'password', balance: 3723.58 })

mike = User.create({ first_name: 'Mike', last_name: 'Madsen', username: 'm-l-1', email: 'mike@benmo.com', phone_number: '2393921049', password: 'password', balance: 1950.31 })

noah = User.create({ first_name: 'Noah', last_name: 'Cayman', username: 'c-n-2', email: 'noah@benmo.com', phone_number: '4911039829', password: 'password', balance: 420.94 })

jacob = User.create({ first_name: 'Jacob', last_name: 'Bent', username: 'j-b-3', email: 'jacob@benmo.com', phone_number: '2940493059', password: 'password', balance: 2873.08 })

charlie = User.create({ first_name: 'Charlie', last_name: 'Brown', username: 'd-n-2', email: 'charlie@benmo.com', phone_number: '9203911930', password: 'password', balance: 1308.19 })

andrew = User.create({ first_name: 'Andrew', last_name: 'Smith', username: 'a-m-5', email: 'andrew@benmo.com', phone_number: '9502933039', password: 'password', balance: 4019.29 })

Transaction.destroy_all
transaction1 = Transaction.create!({ amount: 100.00, sender_id: ben.id, receiver_id: mike.id })
transaction2 = Transaction.create!({ amount: 53.00, sender_id: andrew.id, receiver_id: ben.id })
transaction3 = Transaction.create!({ amount: 293.39, sender_id: charlie.id, receiver_id: andrew.id })
transaction4 = Transaction.create!({ amount: 19.92, sender_id: jacob.id, receiver_id: mike.id })
transaction5 = Transaction.create!({ amount: 593.10, sender_id: noah.id, receiver_id: ben.id })
transaction6 = Transaction.create!({ amount: 278.27, sender_id: mike.id, receiver_id: ben.id })
transaction7 = Transaction.create!({ amount: 73.03, sender_id: andrew.id, receiver_id: charlie.id })
transaction8 = Transaction.create!({ amount: 84.25, sender_id: ben.id, receiver_id: jacob.id })
transaction9 = Transaction.create!({ amount: 593.31, sender_id: andrew.id, receiver_id: ben.id })
transaction2 = Transaction.create!({ amount: 300.00, sender_id: mike.id, receiver_id: andrew.id })
transaction3 = Transaction.create!({ amount: 491.07, sender_id: charlie.id, receiver_id: noah.id })
transaction4 = Transaction.create!({ amount: 36.00, sender_id: andrew.id, receiver_id: jacob.id })
transaction5 = Transaction.create!({ amount: 77.86, sender_id: charlie.id, receiver_id: andrew.id })
transaction6 = Transaction.create!({ amount: 20.00, sender_id: noah.id, receiver_id: ben.id })
transaction7 = Transaction.create!({ amount: 104.23, sender_id: jacob.id, receiver_id: charlie.id })
transaction8 = Transaction.create!({ amount: 1400.00, sender_id: andrew.id, receiver_id: mike.id })
transaction9 = Transaction.create!({ amount: 500.00, sender_id: noah.id, receiver_id: andrew.id })


