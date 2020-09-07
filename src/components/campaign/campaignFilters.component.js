import React from 'react';
import { Nav } from 'react-bootstrap';
import { connect } from 'react-redux';

import { filters } from '../../factories/filters.factory';
import { filterCampaigns } from '../../reducers/app/actions';

function CampaignFilters({filterCampaigns}) {
  return (
    <div className="campaign-filters">
      <Nav
        variant="tabs"
        defaultActiveKey="1"
        onSelect={key => filterCampaigns(key)}>
        {
          filters.map(filter => (
            <Nav.Item key={filter.id}>
              <Nav.Link eventKey={filter.id}>{filter.label}</Nav.Link>
            </Nav.Item>
          ))
        }
      </Nav>
    </div>
  )
}

export default connect(null, {
  filterCampaigns
})(CampaignFilters);