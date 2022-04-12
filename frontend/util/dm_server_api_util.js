export const fetchDmServers = () => {
  return $.ajax({
    method: 'GET',
    url: `api/dm_servers`
  })
};

export const fetchDmServer = dmServerId => {
  return $.ajax({
    method: 'GET',
    url: `api/dm_servers/${dmServerId}`
  })
};

export const createDmServer = () => {
  return $.ajax({
    method: 'POST',
    url: `api/dm_servers`
  })
};

export const deleteDmServer = dmServerId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/dm_servers/${dmServerId}`
  })
};