

Ext.define('BuskartApp.store.AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore', {
});



var _DataStore_AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardEvent.AyohaRewardEventModel',
    id: '_AyohaRewardEventLoadBySubscriberAccNoAndEventCodeStoreID',
    proxy: {
        type: 'ajax',
      //  url: GetAPIurl() + '/DashboardAyohaUser/DashboardEvent_SuccessCheckIn_Load_EventPerk',
        url: GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNoAndEventCode',
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