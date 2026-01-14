
Ext.define('BuskartApp.store.AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore', {
});





var _DataStore_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNoAndContestCode',
        actionMethods: {
            read: 'GET'
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