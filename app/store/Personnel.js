Ext.define('BuskartApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'BuskartApp.model.Personnel',

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});





Ext.create('Ext.data.Store', {
    storeId: 'AyohaLeaderboardMiniStore',
    model: 'Ayoha.model.LeaderboardMini',
    data: [
        {
            rank: 1,
            rankLabel: '',
            name: 'Aisyah M.',
            points: '12,450',
            gapText: '',
            badgeText: '1',
            badgeCls: 'gold',
            rowCls: 'ayohaLb2Top ayohaLb2Top1',
            isCurrentUser: false
        },
        {
            rank: 2,
            rankLabel: '',
            name: 'Hafiz K.',
            points: '11,800',
            gapText: '',
            badgeText: '2',
            badgeCls: 'silver',
            rowCls: 'ayohaLb2Top ayohaLb2Top2',
            isCurrentUser: false
        },
        {
            rank: 3,
            rankLabel: '',
            name: 'Nurul A.',
            points: '11,200',
            gapText: '',
            badgeText: '3',
            badgeCls: 'bronze',
            rowCls: 'ayohaLb2Top ayohaLb2Top3',
            isCurrentUser: false
        },
        {
            rank: 22,
            rankLabel: '#22',
            name: 'You',
            points: '550',
            gapText: '58 pts to overtake #21',
            badgeText: '',
            badgeCls: '',
            rowCls: 'ayohaLb2Me',
            isCurrentUser: true
        }
    ]
});








