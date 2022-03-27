json.extract! server, :id, :server_name, :public, :owner_id
json.users server.users.map(&:id);
json.currentUser do 
  json.partial! "api/users/user", user: current_user
end