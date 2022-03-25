json.extract! user, :id, :email, :username, :tag
if user.profile_picture.attachment == nil 
  json.profilePicUrl ""
else
  json.profilePicUrl url_for(user.profile_picture)
end
json.servers user.servers.map(&:id);