export const filterIds = Object.freeze({
  UPCOMING: 1,
  LIVE: 2,
  PAST: 3
})

export const filters = Object.freeze([
  {label: 'UPCOMING_CAMPAIGNS', id: filterIds.UPCOMING},
  {label: 'LIVE_CAMPAIGNS', id: filterIds.LIVE},
  {label: 'PAST_CAMPAIGNS', id: filterIds.PAST}
])