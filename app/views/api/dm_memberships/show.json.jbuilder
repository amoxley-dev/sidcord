json.extract! @dm_membership, :id, :user_id, :dm_server_id

json.dm_server do 
  json.partial! "api/dm_servers/dm_server", dm_server: @dm_server
end