export const createServerMembership = membership => {
  return $.ajax({
      url: `/api/server_memberships`,
      method: 'POST',
      data: { server_membership }
    })
};

export const deleteServerMembership = membership => {
  return $.ajax({
      url: `/api/server_memberships/${membership.id}`,
      method: 'DELETE',
      data: { server_membership }
    })
};

