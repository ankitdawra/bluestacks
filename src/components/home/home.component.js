import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CampaignFilters from '../campaign/campaignFilters.component';
import CampaignTable from '../campaign/campaignTable.component';
import { loadCampaigns } from '../../reducers/app/actions';

import '../../styles/home.scss';


function Home({loadCampaigns}) {
  const { t } = useTranslation();
  useEffect(() => {
    loadCampaigns();
  }, []);

  return (
    <div className="home">
      <div className="main-wrapper">
        <h1>
          {t('MANAGE_CAMPAIGNS')}
        </h1>
        <CampaignFilters/>
        <CampaignTable/>
      </div>
    </div>
  )
}

const mapStateToProps = ({appReducer}) => {
  return {
    loading: appReducer.loading
  };
}

export default connect(mapStateToProps, {
  loadCampaigns
})(Home);