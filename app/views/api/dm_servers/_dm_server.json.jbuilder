json.extract! dm_server, :id, :owner_id

json.users do 
  dm_server.users.each do |user|
    json.set! user.id do 
      json.partial! "api/users/user", user: user
    end
  end
end

json.dm_messages do
  dm_server.dm_messages.each do |dm_message|
    json.set! dm_message.id do
      json.partial! "api/dm_messages/dm_message", dm_message: dm_message
    end
  end
end