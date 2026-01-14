
Ext.define('BuskartApp.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore', {
});

var _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel',
    id: '_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCode',
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

