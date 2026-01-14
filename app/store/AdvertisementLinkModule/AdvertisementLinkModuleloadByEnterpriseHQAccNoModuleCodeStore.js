Ext.define('BuskartApp.store.AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore', {
    // extend: 'Ext.data.Store',
    // //  alias: 'store.ResponderAlertGetByAcc',
    // config: {
    //     model: 'BuskartApp.model.AdvertisementLinkModule.AdvertisementLinkModuleModel',
    //     autoLoad: false,

    //     proxy: {

    //         type: 'ajax',
    //         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //         url: GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCode',
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




var _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AdvertisementLinkModule.AdvertisementLinkModuleModel',
    id: '_LoyaltyPointLoadByPointCampaignCodeUserStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCode',
        actionMethods: {
            read: 'GET'
          //  read: AyohaStoreCartRouteMethod
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