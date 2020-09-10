// import Table from 'react-bootstrap/Table'

import React, { useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import TableRow from './tableRow.component';
import '../../styles/campaign-table.scss';

function CampaignTable({ campaigns, activeFilterId, campaignsById, loadingCampaigns }) {
  const [hasItemsForActiveFilter, setItemsForActiveFilter] = useState(true);
  const [canShowTable, setShowTable] = useState(false);

  const campaignsLoaded = useRef();
  const prevCampaignsLoaded = campaignsLoaded.current;
  useEffect(() => {
    campaignsLoaded.current = loadingCampaigns;
    if (prevCampaignsLoaded && !campaignsLoaded.current) {
      setShowTable(true);
    }
  }, [loadingCampaigns]);

  useEffect(() => {
    for(const id in campaignsById) {
      if (Number(activeFilterId) === Number(campaignsById[id].filterCateg)) {
          setItemsForActiveFilter(true);
          break;
      }
      setItemsForActiveFilter(false);
    }
  }, [campaignsById, activeFilterId]);

  return (
    <>
      {canShowTable && (
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
                {hasItemsForActiveFilter && campaigns.map((campaign, i) => (
                  <TableRow campaignId={campaign}
                            key={i}/>
                  )
                )}
                {!hasItemsForActiveFilter && (
                  <div className="text-center">No active campaigns in this category.</div>
                )}
              </div>
            </div>
          )}
          {!campaigns.length && (
            <div>Sorry, No campaigns available!</div>
          )}
        </div>
      )}
    </>
  )
}

const mapStateToProps = ({appReducer}) => ({
  campaigns: appReducer.campaigns,
  activeFilterId: appReducer.activeFilterId,
  campaignsById: appReducer.campaignsById,
  loadingCampaigns: appReducer.loadingCampaigns
})

export default connect(mapStateToProps)(CampaignTable);