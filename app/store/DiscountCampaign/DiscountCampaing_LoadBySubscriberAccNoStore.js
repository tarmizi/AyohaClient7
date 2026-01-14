
Ext.define('BuskartApp.store.DiscountCampaign.DiscountCampaing_LoadBySubscriberAccNoStore', {
});

var _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.DiscountCampaign.DiscountCampaignModel',
    id: '_DiscountCampaing_LoadBySubscriberAccNoStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DiscountCampaign/DiscountCampaing_LoadBySubscriberAccNo',
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





var _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.DiscountCampaign.DiscountCampaignModel',
    id: '_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + 'DiscountCampaign/DiscountCampaignRedeem_LoadByDiscountRedeemStatus',
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



var _DataStore_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.DiscountCampaign.DiscountCampaignModel',
    id: '_DashboardDiscount_SuccessCheckIn_Load_DiscountPerkStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashboardDiscount_SuccessCheckIn_Load_DiscountPerk',
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



var _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaeWalletTransaction.AyohaeWalletAllTransactionModel',
    id: '_DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaeWalletTransaction/DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOffline',
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