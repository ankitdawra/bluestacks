import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CampaignFilters from '../campaign/campaignFilters.component';
import CampaignTable from '../campaign/campaignTable.component';
import { loadCampaigns } from '../../reducers/app/actions';

import '../../styles/home.scss';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadCampaigns();
  }

  render() {
    return (
      <div className="home">
        <div className="main-wrapper">
          <h1>
            Manage Campaigns
          </h1>
          <CampaignFilters/>
          <CampaignTable/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({appReducer}) => {
  return {
    loading: appReducer.loading
  };
}

export default connect(mapStateToProps, {
  loadCampaigns
})(Home);