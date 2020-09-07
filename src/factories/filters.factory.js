export const filterIds = Object.freeze({
  UPCOMING: 1,
  LIVE: 2,
  PAST: 3
})

export const filters = Object.freeze([
  {label: 'Upcoming Campaigns', id: filterIds.UPCOMING},
  {label: 'Live Campaigns', id: filterIds.LIVE},
  {label: 'Past Campaigns', id: filterIds.PAST}
])