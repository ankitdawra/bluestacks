import moment from 'moment';
import  { filterIds } from './filters.factory';

// const path = `./assets/Row Copy 0-Row/Thumb/Bitmap.png`;

class Campaign {
  constructor({
    id,
    name,
    region,
    createdOn,
    price,
    csv,
    report
  }) {
    this.id = id;
    this.name = name;
    this.region = region;
    this.createdOn = createdOn * 1000;
    this.price = price;
    this.csv = csv;
    this.report = report;
  }

  static build(data) {
    const campaign = new Campaign(data);
    campaign.filterCateg = Campaign.computeCategory(campaign);
    campaign.imageUrl = campaign._buildImagePath(data.id);
    return campaign;
  }

  static computeCategory(campaign) {
    if (_isToday(campaign.createdOn)) {
      return filterIds.LIVE;
    } else if (_isPast(campaign.createdOn)) {
      return filterIds.PAST;
    } else {
      return filterIds.UPCOMING;
    }
  }

  _buildImagePath(i) {
    return `./assets/Row Copy ${i}-Row/Thumb/Bitmap.png`;
  }  
}

function _isToday(createdOn) {
  return moment(createdOn).isSame(moment(), 'day') && moment(createdOn).isSame(moment(), 'month') && moment(createdOn).isSame(moment(), 'year');
}

function _isPast(createdOn) {
  return moment(createdOn).isBefore(moment().startOf('day'));
}

export default Campaign;