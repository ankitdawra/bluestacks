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
      "id": 0,
      "name": "Auto Chess",
      "region": "US",
      "createdOn": 1599332722,
      "price": "Price info of Auto Chess",
      "csv": "Some CSV link for Auto Chess",
      "report": "Some report link for Auto Chess",
      "image_url":"Some image url of the campaign" 
    },
    {
      "id": 1,
      "name": "Summoners War",
      "region": "US",
      "createdOn": 1599332722,
      "price": "Price info of Summoners War",
      "csv": "Some CSV link for Summoners War",
      "report": "Some report link for Summoners War",
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
      "name": "Mortal Kombat",
      "region": "JP",
      "createdOn": 1599332722,
      "price": "Price info of Mortal Kombat",
      "csv": "Some CSV link for Mortal Kombat",
      "report": "Some report link for Mortal Kombat",
      "image_url":"Some image url of the campaign"
    },
    {
      "id": 5,
      "name": "PUBG Mobile",
      "region": "US",
      "createdOn": 1600041600,
      "price": "Price info of PUBG Mobile",
      "csv": "Some CSV link for PUBG Mobile",
      "report": "Some report link for PUBG Mobile",
      "image_url":"Some image url of the campaign"
    },
    {
      "id": 6,
      "name": "Need for speed No limits",
      "region": "CP, PR",
      "createdOn": 1600560000,
      "price": "Price info of NFS",
      "csv": "Some CSV link for NFS",
      "report": "Some report link for NFS",
      "image_url":"Some image url of the campaign"
    },
    {
      "id": 7,
      "name": "Shadow fight 3",
      "region": "US",
      "createdOn": 1608681600,
      "price": "Price info of Shadow fight",
      "csv": "Some CSV link for Shadow fight",
      "report": "Some report link for Shadow fight",
      "image_url":"Some image url of the campaign"
    }
  ]
}

export {
  getCampaigns,
  data
}
