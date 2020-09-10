import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function CampaignModal({handleClose, campaign}) {
  console.log(campaign);
  return (
    <Modal show={true} onHide={handleClose} dialogClassName="campaign-modal">
      <Modal.Header>
        <Modal.Title>
          <div className="title">
            <img src={campaign.imageUrl}/>
            <div className="name">
              {campaign.name}
              <span className="meta">{campaign.region}</span>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button value="clogin" variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CampaignModal;