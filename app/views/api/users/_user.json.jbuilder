json.extract! user, :id, :email, :username, :tag
if user.profile_picture_url == nil 
  json.profilePicUrl ""
else
  json.profilePicUrl user.profile_picture_url
end

json.servers user.servers.map(&:id);
# json.dm_servers user.dm_servers.map(&:id);