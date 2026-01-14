
Ext.define('BuskartApp.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore', {
});

var _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel',
    id: '_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCode',
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

