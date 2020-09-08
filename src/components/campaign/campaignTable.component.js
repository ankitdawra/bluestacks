// import Table from 'react-bootstrap/Table'

import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';

import TableRow from './tableRow.component';
import '../../styles/campaign-table.scss';

function CampaignTable({ campaigns, activeFilterId, campaignsById }) {
  useEffect(() => {
    console.log(campaignsById);
  }, [activeFilterId, campaignsById]);

  return (
    <div className="campaign-table">
      {campaigns.length && (
        <div className="table">
          <div className="table-header table-row">
            <div className="item">Date</div>
            <div className="item">Campaign</div>
            <div className="item">View</div>
            <div className="item">Actions</div>
          </div>
          <div className="table-body">
            {campaigns.map((campaign, i) => (
              <TableRow campaignId={campaign}
                        key={i}/>
              )
            )}
          </div>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = ({appReducer}) => ({
  campaigns: appReducer.campaigns,
  activeFilterId: appReducer.activeFilterId,
  campaignsById: appReducer.campaignsById
})

export default connect(mapStateToProps)(CampaignTable);