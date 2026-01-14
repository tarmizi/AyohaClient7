Ext.define('BuskartApp.store.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore', {
});



var _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel',
    id: '_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantReward',
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

   

    //autoLoad: true

});




var _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel',
    id: '_VoucherCampaignRedeemLoadByVoucherRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/VoucherCampaignRedeemLoadByVoucherRedeemStatus',
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

   

    //autoLoad: true

});





var _DataStore_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel',
    id: '_DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerkStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashboardVoucherCard_SuccessCheckIn_LoadVoucherPerk',
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

   

    //autoLoad: true

});