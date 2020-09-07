const getCampaigns = pass =>
  new Promise((resolve, reject) => {
    if (pass) {
      const data = JSON.parse(window.localStorage.getItem('campaignData'))
      resolve(data);
    } else {
      reject();
    }
  })

const data = {
  "data": [
    {
      "id": 1,
      "name": "Test Whatsapp",
      "region": "US",
      "createdOn": 1599332722,
      "price": "Price info of Test Whatsapp",
      "csv": "Some CSV link for Whatsapp",
      "report": "Some report link for Whatsapp",
      "image_url":"Some image url of the campaign" 
    },
    {
      "id": 2,
      "name": "Super Jewels Quest",
      "region": "CA, FR",
      "createdOn": 1601924722,
      "price": "Price info of Super Jewels Quest",
      "csv": "Some CSV link for Super Jewels Quest",
      "report": "Some report link for Super Jewels Ques",
      "image_url":"Some image url of the campaign"
    },
    {
      "id": 3,
      "name": "Mole Slayer",
      "region": "FR",
      "createdOn": 1599159922,
      "price": "Price info of Mole Slayer",
      "csv": "Some CSV link for Mole Slayer",
      "report": "Some report link for Mole Slayer",
      "image_url":"Some image url of the campaign"
    },
    {
      "id": 4,
      "name": "Mancala Mix",
      "region": "JP",
      "createdOn": 1599332722,
      "price": "Price info of Mancala Mix",
      "csv": "Some CSV link for Mancala Mix",
      "report": "Some report link for Mancala Mix",
      "image_url":"Some image url of the campaign"
    }
  ]
}

export {
  getCampaigns,
  data
}
