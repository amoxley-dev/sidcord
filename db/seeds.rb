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
  Server.destroy_all
  ActiveRecord::Base.connection.reset_pk_sequence!('users')
  ActiveRecord::Base.connection.reset_pk_sequence!('servers')
  ActiveRecord::Base.connection.reset_pk_sequence!('dm_servers')

  demo = User.create!(email: 'demo@gmail.com', username: 'demo', tag: '0001', password: 'password')
  test1 = User.create!(email: 'test1@gmail.com', username: 'test1', tag: '0002', password: 'password')
  test2 = User.create!(email: 'test2@gmail.com', username: 'test2', tag: '0003', password: 'password')
  luffy = User.create!(email: 'luffy@gmail.com', username: 'Straw Hat', tag: '0004', password: 'password', profile_picture_url: 'https://sidcord-dev.s3.us-west-1.amazonaws.com/luffy.png' )
  zoro = User.create!(email: 'zoro@gmail.com', username: 'Pirate Hunter', tag: '0005', password: 'password', profile_picture_url: 'https://sidcord-dev.s3.us-west-1.amazonaws.com/zoro.jpg')
  nami = User.create!(email: 'nami@gmail.com', username: 'Ship Navigator', tag: '0006', password: 'password')
  usopp = User.create!(email: 'usopp@gmail.com', username: 'SogeKing', tag: '0007', password: 'password')
  sanji = User.create!(email: 'sanji@gmail.com', username: 'Black Leg', tag: '0008', password: 'password')
  chopper = User.create!(email: 'chopper@gmail.com', username: 'Pet', tag: '0009', password: 'password', profile_picture_url: 'https://sidcord-dev.s3.us-west-1.amazonaws.com/chopper.jpg')
  robin = User.create!(email: 'robin@gmail.com', username: 'Demon Child', tag: '0010', password: 'password', profile_picture_url: 'https://sidcord-dev.s3.us-west-1.amazonaws.com/robin.jpg')
  franky = User.create!(email: 'franky@gmail.com', username: 'Cyborg', tag: '0011', password: 'password')
  brooke = User.create!(email: 'brooke@gmail.com', username: 'Dead Bones', tag: '0012', password: 'password')
  jimbei = User.create!(email: 'jimbei@gmail.com', username: 'First Son Of The Sea', tag: '0013', password: 'password')
  anonymous = User.create!(email: 'anonymous@gmail.com', username: 'the hacker', tag: '0014', password: 'password', profile_picture_url: 'https://sidcord-dev.s3.us-west-1.amazonaws.com/anonymous.png')

  server_1 = Server.create!(server_name: 'Demo Server', public: true, owner_id: demo.id)
  server_2 = Server.create!(server_name: 'Anonymous Server', public: false, owner_id: demo.id)
  server_3 = Server.create!(server_name: 'Straw Hat\'s Server', public: true, owner_id: luffy.id)
  server_4 = Server.create!(server_name: '90 Day Server', public: true, owner_id: test1.id)
  server_5 = Server.create!(server_name: 'Jojo\'s Bizzare Server', public: true, owner_id: test2.id)
  server_6 = Server.create!(server_name: 'Cat Land', public: true, owner_id: test1.id)
  server_7 = Server.create!(server_name: 'React Fans', public: false, owner_id: demo.id)

  channel_1 = Channel.create!(channel_name: 'general', server_id: server_1.id)
  channel_2 = Channel.create!(channel_name: 'general', server_id: server_2.id)
  channel_3 = Channel.create!(channel_name: 'general', server_id: server_3.id)
  channel_4 = Channel.create!(channel_name: 'general', server_id: server_4.id)
  channel_5 = Channel.create!(channel_name: 'general', server_id: server_5.id)
  channel_6 = Channel.create!(channel_name: 'general', server_id: server_6.id)
  channel_7 = Channel.create!(channel_name: 'general', server_id: server_7.id)
  channel_8 = Channel.create!(channel_name: 'channel test', server_id: server_1.id)
  channel_9 = Channel.create!(channel_name: 'part 1', server_id: server_5.id)
  channel_10 = Channel.create!(channel_name: 'Thousand Sunny', server_id: server_3.id)

  server_membership_1 = ServerMembership.create!( user_id: demo.id, server_id: server_1.id)
  server_membership_2 = ServerMembership.create!( user_id: demo.id, server_id: server_2.id)
  server_membership_3 = ServerMembership.create!( user_id: test1.id, server_id: server_3.id)
  server_membership_4 = ServerMembership.create!( user_id: test1.id, server_id: server_4.id)
  server_membership_1 = ServerMembership.create!( user_id: demo.id, server_id: server_3.id)
  server_membership_6 = ServerMembership.create!( user_id: test1.id, server_id: server_2.id)
  server_membership_7 = ServerMembership.create!( user_id: test2.id, server_id: server_5.id)
  server_membership_8 = ServerMembership.create!( user_id: test1.id, server_id: server_6.id)
  server_membership_9 = ServerMembership.create!( user_id: demo.id, server_id: server_7.id)
  server_membership_10 = ServerMembership.create!( user_id: test2.id, server_id: server_3.id)
  server_membership_11 = ServerMembership.create!( user_id: luffy.id, server_id: server_3.id)
  server_membership_12 = ServerMembership.create!( user_id: zoro.id, server_id: server_3.id)
  server_membership_13 = ServerMembership.create!( user_id: nami.id, server_id: server_3.id)
  server_membership_14 = ServerMembership.create!( user_id: sanji.id, server_id: server_3.id)
  server_membership_15 = ServerMembership.create!( user_id: chopper.id, server_id: server_3.id)
  server_membership_16 = ServerMembership.create!( user_id: robin.id, server_id: server_3.id)
  server_membership_17 = ServerMembership.create!( user_id: franky.id, server_id: server_3.id)
  server_membership_18 = ServerMembership.create!( user_id: brooke.id, server_id: server_3.id)
  server_membership_19 = ServerMembership.create!( user_id: jimbei.id, server_id: server_3.id)
  server_membership_20 = ServerMembership.create!( user_id: anonymous.id, server_id: server_2.id)

  dm_server_1 = DmServer.create!( owner_id: demo.id )
  dm_server_2 = DmServer.create!( owner_id: demo.id )
  dm_server_3 = DmServer.create!( owner_id: demo.id )
  dm_server_4 = DmServer.create!( owner_id: test1.id )
  dm_server_5 = DmServer.create!( owner_id: test2.id )
  dm_server_6 = DmServer.create!( owner_id: luffy.id )

  dm_membership_1 = DmMembership.create!( dm_server_id: dm_server_1.id, user_id: demo.id )
  dm_membership_2 = DmMembership.create!( dm_server_id: dm_server_1.id, user_id: test1.id )
  dm_membership_3 = DmMembership.create!( dm_server_id: dm_server_2.id, user_id: demo.id )
  dm_membership_4 = DmMembership.create!( dm_server_id: dm_server_2.id, user_id: test2.id )
  dm_membership_5 = DmMembership.create!( dm_server_id: dm_server_3.id, user_id: demo.id )
  dm_membership_6 = DmMembership.create!( dm_server_id: dm_server_3.id, user_id: zoro.id )
  dm_membership_7 = DmMembership.create!( dm_server_id: dm_server_4.id, user_id: test1.id )
  dm_membership_8 = DmMembership.create!( dm_server_id: dm_server_4.id, user_id: luffy.id )
  dm_membership_9 = DmMembership.create!( dm_server_id: dm_server_5.id, user_id: test2.id )
  dm_membership_10 = DmMembership.create!( dm_server_id: dm_server_5.id, user_id: sanji.id )
  dm_membership_11 = DmMembership.create!( dm_server_id: dm_server_6.id, user_id: luffy.id )
  dm_membership_12 = DmMembership.create!( dm_server_id: dm_server_6.id, user_id: demo.id )
end