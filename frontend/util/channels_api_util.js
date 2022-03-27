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