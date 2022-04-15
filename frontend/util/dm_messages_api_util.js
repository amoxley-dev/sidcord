export const fetchDmMessage = dmMessageId => {
  return $.ajax({
    method: 'GET',
    url: `api/dm_messages/${dmMessageId}`
  })
};

export const createDmMessage = (dmServerId, dmMessage) => {
  return $.ajax({
    method: 'POST',
    url: `api/dm_servers/${dmServerId}/dm_messages`,
    data: { dm_message: dmMessage}
  })
};

export const updateDmMessage = dmMessage => {
  return $.ajax({
    method: 'PATCH',
    url: `api/dm_messages/${dmMessage.id}`,
    data: { dm_message: dmMessage }
  })
};

export const deleteDmMessage = dmMessageId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/dm_messages/${dmMessageId}`
  })
}
