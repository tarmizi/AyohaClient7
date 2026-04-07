Ext.define('BuskartApp.model.Ranking.LeaderboardMiniModel', {
    extend: 'Ext.data.Model',
   // config: {
        fields: [
            { name: 'rank', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'points', type: 'int' },
            { name: 'photo', type: 'string' },
            { name: 'isCurrentUser', type: 'boolean', defaultValue: false },
            { name: 'gapText', type: 'string', defaultValue: '' }
        ]


        //  fields: [
        //     { name: 'rank', type: 'int' },
        //     { name: 'name', type: 'string' },
        //     { name: 'points', type: 'int' },
        //     { name: 'photo', type: 'string' },
        //     { name: 'gapText', type: 'string' },
        //     { name: 'progressPct', type: 'int', defaultValue: 0 }
        // ]
  //  }
});



Ext.create('Ext.data.Store', {
    storeId: 'AyohaRankingPremiumStore',
     model: 'BuskartApp.model.Ranking.LeaderboardMiniModel',
    data: [
        {
            rank: 1,
            name: 'Azuliana Bt Muhammad',
            points: 14694,
            photo: 'resources/images/avatar1.jpg',
            isCurrentUser: false,
            gapText: ''
        },
        {
            rank: 2,
            name: 'Syahrul Fahmi',
            points: 8559,
            photo: 'resources/images/avatar2.jpg',
            isCurrentUser: false,
            gapText: ''
        },
        {
            rank: 3,
            name: 'Azrina Bt Rahim',
            points: 4185,
            photo: 'resources/images/avatar3.jpg',
            isCurrentUser: false,
            gapText: ''
        },
        // {
        //     rank: 22,
        //     name: 'You',
        //     points: 550,
        //     photo: 'resources/images/avatar-me.jpg',
        //     isCurrentUser: true,
        //     gapText: '58 pts to overtake #21'
        // }
    ]
});

