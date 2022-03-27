export const fetchChannel = channelId => {
  return $.ajax({
    url: `api/channels/${channelId}`
  });
};

export const createChannel = (channel, serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}/channels/`,
    method: 'POST',
    data: { channel }
  });
};

export const updateChannel = channel => {
  return $.ajax({
    url: `api/channels/${channel.id}`,
    method: 'PATCH',
    data: { channel }
  });
};

export const deleteChannel = channelId => {
  return $.ajax({
    url: `api/channels/${channelId}`,
    method: 'DELETE'
  });
};