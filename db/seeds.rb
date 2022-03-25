# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


ActiveRecord::Base.transaction do
  User.destroy_all
  ActiveRecord::Base.connection.reset_pk_sequence!('users')
  ActiveRecord::Base.connection.reset_pk_sequence!('servers')

  demo = User.create!(email: 'demo@gmail.com', username: 'demo', tag: '0001', password: 'password')
  test1 = User.create!(email: 'test1@gmail.com', username: 'test1', tag: '0002', password: 'password')
  test2 = User.create!(email: 'test2@gmail.com', username: 'test2', tag: '0003', password: 'password')

  server_1 = Server.create!(server_name: 'Demo Server', public: true, owner_id: 1)
  server_2 = Server.create!(server_name: 'Anonymous Server', public: false, owner_id: 1)
  server_3 = Server.create!(server_name: 'Straw Hat\'s Server', public: true, owner_id: 2)
  server_4 = Server.create!(server_name: 'Baki Server', public: true, owner_id: 2)
  server_5 = Server.create!(server_name: 'Oliver Tree Fans', public: true, owner_id: 3)

  server_membership_1 = ServerMembership.create!( user_id: demo.id, server_id: server_1.id)
  server_membership_2 = ServerMembership.create!( user_id: demo.id, server_id: server_2.id)
  server_membership_3 = ServerMembership.create!( user_id: test1.id, server_id: server_3.id)
  server_membership_4 = ServerMembership.create!( user_id: test1.id, server_id: server_4.id)
  server_membership_5 = ServerMembership.create!( user_id: test2.id, server_id: server_5.id)
  server_membership_1 = ServerMembership.create!( user_id: demo.id, server_id: server_3.id)
  server_membership_6 = ServerMembership.create!( user_id: test1.id, server_id: server_2.id)
end