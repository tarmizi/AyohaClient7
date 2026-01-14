Ext.define('BuskartApp.store.PointCampaignRedeemItemSetting.PointCampaignRedeemLoadByPointCampaignCodeStore', {
   
});





// Ext.define('BuskartApp.store.PointCampaignRedeemItemSetting.PointCampaignRedeemLoadByPointCampaignCodeStore', {
//     extend: 'Ext.data.Store',
//     //  alias: 'store.ResponderAlertGetByAcc',
//     config: {
//         model: 'BuskartApp.model.PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel',
//         autoLoad: false,

//         proxy: {

//             type: 'ajax',          
//             url: GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemLoadByPointCampaignCode',
//             reader: {
//                 type: 'json',
//                 rootProperty: 'results',
//                 totalProperty: 'total',
//                 successProperty: 'success',
//                 messageProperty: 'message'
//             },



//         }


//     }
// });





var _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel',
    id: '_PointCampaignRedeemLoadByPointCampaignCodeStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemLoadByPointCampaignCode',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
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




