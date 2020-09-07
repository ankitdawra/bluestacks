import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';

import { updateDate } from '../../reducers/app/actions';
import DateTime from '../DateTime'
import Campaign from '../../factories/campaign.factory';


const ref = React.createRef();

const ScheduleDate = React.forwardRef(({value, onClick}) => {
  return (
    <div className="pointer"
         onClick={onClick}>
      <img src="./assets/Row Copy 0-Row/Group/calendar.png"
            height="20"
            className="half-breathing-space right-only"/>
      Schedule Again
    </div>
  )
})

function TableRow({campaignId, updateDate, campaignsById, activeFilterId}) {
  const campaign = campaignsById[campaignId];
  const dateUpdated = date => {
    console.log(date);
    updateDate(campaign, date);
  }

  if (campaign && campaign.filterCateg == activeFilterId) {
    return (
      <div className="table-row">
        <div className="item">
          <DateTime
            format={'MMM YYYY, DD'}
            value={campaign.createdOn}
          />
        </div>
        <div className="item campaign-name">
          <img src={campaign.imageUrl}/>
          <div className="name">
            <span>{campaign.name}</span>
            <span className="meta">{campaign.region}</span>
          </div>
        </div>
        <div className="item">
          <img src="./assets/Row Copy 0-Row/Group 4/Price.png"
              height="20"
              className="half-breathing-space right-only"/>
          View Pricing
        </div>
        <div className="item actions">
          <div className="action-item">
            <img src="./assets/Row Copy 0-Row/Group 3/file.png"
                height="20"
                className="half-breathing-space right-only"/>
            CSV
          </div>
          <div className="action-item">
            <img src="./assets/Row Copy 0-Row/Group 2/statistics-report.png"
                height="20"
                className="half-breathing-space right-only"/>
            Report
          </div>
          <div className="action-item">
            <DatePicker
              selected={campaign.createdOn}
              onChange={date => dateUpdated(date)}
              customInput={<ScheduleDate ref={ref}/>}
            />
          </div>        
        </div>
      </div>
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