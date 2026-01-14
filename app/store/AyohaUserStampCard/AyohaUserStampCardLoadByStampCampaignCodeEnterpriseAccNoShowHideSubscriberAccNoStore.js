Ext.define('BuskartApp.store.AyohaUserStampCard.AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore', {
    // extend: 'Ext.data.Store',
    // //  alias: 'store.ResponderAlertGetByAcc',
    // config: {
    //     model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    //     autoLoad: false,

    //     proxy: {

    //         type: 'ajax',
    //         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //         //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //         url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNo',
    //         reader: {
    //             type: 'json',
    //             rootProperty: 'results',
    //             totalProperty: 'total',
    //             successProperty: 'success',
    //             messageProperty: 'message'
    //         },



    //     }


    // }
});





var _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNo',
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











var _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/StampCard/StampCardLoadByStampCampaignCodeEnterpriseAccNo',
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