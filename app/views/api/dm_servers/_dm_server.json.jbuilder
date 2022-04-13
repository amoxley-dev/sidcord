json.extract! dm_server, :id, :owner_id

json.users do 
  dm_server.users.each do |user|
    json.set! user.id do 
      json.partial! "api/users/user", user: user
    end
  end
end