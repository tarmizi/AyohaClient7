
Ext.define('BuskartApp.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore', {
});

var _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel',
    id: '_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherType',
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

