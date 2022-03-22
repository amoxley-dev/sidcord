json.extract! user, :id, :email, :username, :tag
json.profilePicUrl url_for(user.profile_picture)