json.extract! dm_message, :id, :dm_server_id, :body, :created_at

json.user dm_message.user, :id, :username