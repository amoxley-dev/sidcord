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

  default_profile1 = open('https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png')
  default_profile2 = open('https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png')
  default_profile3 = open('https://sidcord-dev.s3.us-west-1.amazonaws.com/icon_blue.png')

  demo.profile_picture.attach(io: default_profile1, filename: 'blue_icon.png')
  test1.profile_picture.attach(io: default_profile2, filename: 'blue_icon.png')
  test2.profile_picture.attach(io: default_profile3, filename: 'blue_icon.png')

  server_1 = Server.create!(server_name: 'Demo Server', public: true, owner_id: 1)
  server_2 = Server.create!(server_name: 'Anonymous Server', public: false, owner_id: 1)
  server_3 = Server.create!(server_name: 'Straw Hat\'s Server', public: true, owner_id: 2)
  server_3 = Server.create!(server_name: 'Baki Server', public: true, owner_id: 2)
  server_4 = Server.create!(server_name: 'Oliver Tree Fans', public: true, owner_id: 3)
end