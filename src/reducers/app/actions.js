import { LOAD_CAMPAIGNS_START, LOAD_CAMPAIGNS_SUCCESS, LOAD_CAMPAIGNS_ERROR, ON_FILTER, UPDATE_DATE } from './types';

import { getCampaigns } from '../../services/campaign.service';
import Campaign from '../../factories/campaign.factory';

export const loadCampaigns = () => async dispatch => {
  dispatch({
    type: LOAD_CAMPAIGNS_START
  })
  try {
    const {data} = await getCampaigns(true);
    const campaigns = data.map((campaign, i) => Campaign.build(campaign, i));

    const campaignIds = [];
    const campaignsById = {};
    campaigns.forEach(campaign => {
      campaignsById[campaign.id] = campaign;
      campaignIds.push(campaign.id)
    })
    // console.log(campaignsById);
    // console.log(campaignIds);
    
    dispatch({
      type: LOAD_CAMPAIGNS_SUCCESS,
      campaignIds,
      campaignsById
    })
  } catch(e) {
    console.warn(e);
    dispatch({
      type: LOAD_CAMPAIGNS_ERROR
    })
  }
}


export const filterCampaigns = filterId => dispatch => {
  // console.log(filterId);
  dispatch({
    type: ON_FILTER,
    filterId
  })
}

export const updateDate = (campaign, newDate) => dispatch => {
  // Campaign.build(campaign);
  // console.log(id, newDate);
  dispatch({
    type: UPDATE_DATE,
    id: campaign.id,
    newDate
  })
}