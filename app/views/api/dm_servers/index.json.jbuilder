@dm_servers.each do |dm_server|
  json.set! dm_server.id do
    json.partial! "api/dm_servers/dm_server", dm_server: dm_server
  end
end