
Ext.define('BuskartApp.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore', {
});

var _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel',
    id: '_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatus',
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



    //autoLoad: true

});

