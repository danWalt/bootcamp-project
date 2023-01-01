const mockCampaigns = [
    {
        id: 1,
        uid: '01905faf-a0c2-4b29-9ab3-b3fb1b78fb94',
        package: 'com.facebok',
        name: 'Facebook best campaign ever',
        bid: 5.2,
        cost_model: 'CPC',
        geos: 'US',
        placements: ['nps','ps','preload'],
        advertiser: 'facebook',
        account_manager: 'Daniel Walters'

    },
    {
        id: 2,
        uid: '01905faf-4b29-9ab3-a0c2-b3fb1b78fb94',
        package: 'com.facebok',
        name: 'Facebook second best campaign ever',
        bid: 3.4,
        cost_model: 'CPI',
        geos: 'IN',
        placements: ['nps','ps','preload','suite'],
        advertiser: 'facebook',
        account_manager: 'Daniel Walters'
    },
    {
        id: 3,
        uid: '01905faf-4b29-1ab3-a0c2-b3fb1b78fb94',
        package: 'com.twitter',
        name: 'twitter best campaign ever',
        bid: 9.6,
        cost_model: 'CPC',
        geos: 'GB',
        placements: ['nps','ps','preload','fso'],
        advertiser: 'twitter',
        account_manager: 'Daniel Walters'
    },
    {
        id: 4,
        uid: '01805faf-3b29-9ab3-a0c2-b3fb1b78fb94',
        package: 'com.twitter',
        name: 'twitter second best campaign ever',
        bid: 7.2,
        cost_model: 'CPC',
        geos: 'IL',
        placements: ['ps','preload'],
        advertiser: 'twitter',
        account_manager: 'Daniel Walters'
    },
    {
        id: 5,
        uid: '01605faf-4b29-9ab3-a0c2-b3fb1b78fb94',
        package: 'com.candycrush',
        name: 'candycrush best campaign ever',
        bid: 6.6,
        cost_model: 'CPI',
        geos: 'TR',
        placements: ['ps'],
        advertiser: 'king',
        account_manager: 'Daniel Walters'
    },
    {
        id: 6,
        uid: '01305faf-4b29-9ab3-a0c2-b3fb1b78fb94',
        package: 'com.candycrush',
        name: 'candycrush second best campaign ever',
        bid: 6.4,
        cost_model: 'CPI',
        geos: 'FR',
        placements: ['reengage','ps'],
        advertiser: 'king',
        account_manager: 'Daniel Walters'
    }
]

module.exports = mockCampaigns