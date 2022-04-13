export const createDmMembership = dm_membership => {
  return $.ajax({
    url: `/api/dm_memberships`,
    method: 'POST',
    data: { dm_membership }
  })
};

export const deleteDmMembership = dm_membership => {
  return $.ajax({
    url: `api/dm_memberships/${dm_membership.id}`,
    method: 'DELETE',
    data: { dm_membership }
  })
};