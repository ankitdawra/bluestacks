// import Table from 'react-bootstrap/Table'

import React, { useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';

import TableRow from './tableRow.component';
import '../../styles/campaign-table.scss';
import { useTranslation } from 'react-i18next';

function CampaignTable({ campaigns, activeFilterId, campaignsById, loadingCampaigns }) {
  const {t} = useTranslation();
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
                <div className="item">{t('DATE')}</div>
                <div className="item">{t('CAMPAIGN')}</div>
                <div className="item">{t('VIEW')}</div>
                <div className="item">{t('ACTIONS')}</div>
              </div>
              <div className="table-body">
                {hasItemsForActiveFilter && campaigns.map((campaign, i) => (
                  <TableRow campaignId={campaign}
                            key={i}/>
                  )
                )}
                {!hasItemsForActiveFilter && (
                  <div className="text-center">{t('NO_ACTIVE_CAMPAIGNS')}</div>
                )}
              </div>
            </div>
          )}
          {!campaigns.length && (
            <div>{t('NO_CAMPAIGNS')}</div>
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