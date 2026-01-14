
Ext.define('BuskartApp.store.AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoStore', {
});





var _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_AyohaRewardContestLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNo',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
});







var _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_ContestCampaignRedeem_LoadByContestRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/ContestCampaignRedeem_LoadByContestRedeemStatus',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
});






var _DataStore_Contest_SuccessCheckIn_LoadContestPerkStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_Contest_SuccessCheckIn_LoadContestPerkStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashboardContest_SuccessCheckIn_LoadContestPerk',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
});