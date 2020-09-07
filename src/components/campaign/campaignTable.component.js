// import Table from 'react-bootstrap/Table'

import React, { useEffect} from 'react';
import { connect } from 'react-redux';

import TableRow from './tableRow.component';
import '../../styles/campaign-table.scss';

function CampaignTable({ campaigns, activeFilterId }) {
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

// class CampaignTable extends React.Component {
//   componentDidUpdate() {
//     // console.log(this.props.campaigns);
//     // console.log(this.props.activeFilterId);
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div className="campaign-table">
//         {this.props.campaigns.length && (
//           <div className="table">
//             <div className="table-header table-row">
//               <div className="item">Date</div>
//               <div className="item">Campaign</div>
//               <div className="item">View</div>
//               <div className="item">Actions</div>
//             </div>
//             <div className="table-body">
//               {this.props.campaigns.map((campaign, i) => {
//                 return campaign.filterCateg == this.props.activeFilterId ? (
//                   <TableRow campaign={campaign}
//                             key={i}/>
//                 ) : (
//                   <div key={i}>
//                     No data
//                     {campaign.filterCateg}
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     )
//   }
// }

const mapStateToProps = ({appReducer}) => ({
  campaigns: appReducer.campaigns,
  activeFilterId: appReducer.activeFilterId
})

export default connect(mapStateToProps)(CampaignTable);