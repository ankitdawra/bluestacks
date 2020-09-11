import React from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import DateTime from '../DateTime';
import '../../styles/campaign-modal.scss';

function CampaignModal({handleClose, campaign}) {
  const { t } = useTranslation();
  return (
    <Modal show={true} onHide={handleClose} dialogClassName="campaign-modal">
      <Modal.Header closeButton>
        <Modal.Title>
          <img src={campaign.imageUrl}/>
          <div className="name half-breathing-space left-only">
            <div>
              {campaign.name}
              <div className="meta">{campaign.region}</div>
            </div>
            <div className="meta date">
              <DateTime
                format={'MMM YYYY, DD'}
                value={campaign.createdOn}
              />
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label className="half-breathing-space right-only">{t('PRICE')}: </label>
          {campaign.price}
        </div>
        <div>
          <label className="half-breathing-space right-only">{t('CSV')}: </label>
          {campaign.csv}
        </div>
        <div>
          <label className="half-breathing-space right-only">{t('REPORT')}: </label>
          {campaign.report}
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default CampaignModal;