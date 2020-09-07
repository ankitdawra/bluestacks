import { LOAD_CAMPAIGNS_START, LOAD_CAMPAIGNS_SUCCESS, ON_FILTER, UPDATE_DATE } from './types';
import Campaign from '../../factories/campaign.factory';

const initialState = {
  loading: false,
  campaigns: [],
  campaignsById: {},

  activeFilterId: 1
}

function appReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_CAMPAIGNS_START:
      return {
        ...state,
        loading: true
      }

    case LOAD_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        loading: false,
        campaigns: [...action.campaignIds],
        campaignsById: action.campaignsById
      }

    case ON_FILTER:
      return {
        ...state,
        activeFilterId: action.filterId
      }

    case UPDATE_DATE:
      const campaignsById = {...state.campaignsById};
      campaignsById[action.id] = {
        ...campaignsById[action.id],
        createdOn: action.newDate,
      }

      campaignsById[action.id].filterCateg = Campaign.computeCategory(campaignsById[action.id])

      return {
        ...state,
        campaignsById
      }

    default:
      return state;
  }
}

export default appReducer;