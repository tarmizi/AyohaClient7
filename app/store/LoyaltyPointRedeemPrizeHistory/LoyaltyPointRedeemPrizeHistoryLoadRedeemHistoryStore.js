Ext.define('BuskartApp.store.LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore', {
 
});





// Ext.define('BuskartApp.store.LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore', {
//     extend: 'Ext.data.Store',
//     //  alias: 'store.ResponderAlertGetByAcc',
//     config: {
//         model: 'BuskartApp.model.LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryModel',
//         autoLoad: false,

//         proxy: {

//             type: 'ajax',
//             //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
//             //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
//             url: GetAPIurl() + '/LoyaltyPointRedeemPrizeHistory/LoyaltyPointRedeemPrizeHistoryLoadRedeemHistory',
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


var _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryModel',
    id: '_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/LoyaltyPointRedeemPrizeHistory/LoyaltyPointRedeemPrizeHistoryLoadRedeemHistory',
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