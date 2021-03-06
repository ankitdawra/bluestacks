import React, { useState, useRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';

import { updateDate } from '../../reducers/app/actions';
import DateTime from '../DateTime'
import Moment from 'react-moment';
import { filterIds } from  '../../factories/filters.factory';
import ScheduleDate from './scheduleDate.component';
import CampaignModal from './campaignModal.component';
import { useTranslation } from 'react-i18next';

const path = `${process.env.PUBLIC_URL}/assets/Row Copy 0-Row`;

function TableRow({campaignId, updateDate, campaignsById, activeFilterId}) {
  const {t} = useTranslation();
  const campaign = campaignsById[campaignId];
  const ref = useRef();

  const [openCampaign, setOpenCampaign] = useState(false);

  const dateUpdated = React.useCallback((date) => {
    updateDate(campaign, date);
  }, []);

  const toggleCampaign = () => {
    setOpenCampaign(prevValue => {
      return !prevValue;
    });
  }

  if (campaign && campaign.filterCateg == activeFilterId) {
    return (
      <>
        <div className="table-row">
          <div className="item">
            <DateTime
              format={'MMM YYYY, DD'}
              value={campaign.createdOn}
            />
            {campaign.filterCateg !== filterIds.LIVE && (
              <div className="meta text-capitalize">
                <Moment fromNow ago>{campaign.createdOn}</Moment>
                {campaign.filterCateg === filterIds.PAST ? ' ago' : ' ahead'}
              </div>
            )}
          </div>
          <div className="item campaign-name">
            <img src={campaign.imageUrl}/>
            <div className="name">
              <span>{campaign.name}</span>
              <span className="meta">{campaign.region}</span>
            </div>
          </div>
          <div className="item view-pricing"
               onClick={toggleCampaign}>
            <img src={`${path}/Group 4/Price.png`}
                height="20"
                className="half-breathing-space right-only"/>
            {t('VIEW_PRICING')}
          </div>
          <div className="item actions">
            <div className="action-item">
              <img src={`${path}/Group 3/file.png`}
                  height="20"
                  className="half-breathing-space right-only"/>
              {t('CSV')}
            </div>
            <div className="action-item">
              <img src={`${path}/Group 2/statistics-report.png`}
                  height="20"
                  className="half-breathing-space right-only"/>
              {t('REPORT')}
            </div>
            <div className="action-item"
                onClick={e => e.stopPropagation()}>
              <DatePicker
                selected={campaign.createdOn}
                onChange={date => dateUpdated(date)}
                customInput={<ScheduleDate ref={ref} path={path}/>}
              />
            </div>
          </div>
        </div>
        {(openCampaign &&
          <CampaignModal
            campaign={campaign}
            handleClose={toggleCampaign}/>
        )}
      </>
    )
  } else {
    return (<></>);
  }
}

const mapStateToProps = ({appReducer}) => ({
  campaignsById: appReducer.campaignsById,
  activeFilterId: appReducer.activeFilterId
})

export default connect(mapStateToProps, {
  updateDate
})(TableRow);