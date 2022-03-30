json.extract! message, :id, :channel_id, :body, :created_at

json.user message.user, :id, :username