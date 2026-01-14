//Ext.define('BuskartApp.store.AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCodeStore', {
//    extend: 'Ext.data.Store',
//    //  alias: 'store.ResponderAlertGetByAcc',
//    config: {
//        model: 'BuskartApp.model.AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogModel',
//        autoLoad: false,

//        proxy: {

//            type: 'ajax',
//            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
//            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
//            url: GetAPIurl() + '/AyohaRedeemPrizeHistoryLog/AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCode',
//            reader: {
//                type: 'json',
//                rootProperty: 'results',
//                totalProperty: 'total',
//                successProperty: 'success',
//                messageProperty: 'message'
//            },



//        }


//    }
//});




Ext.define('BuskartApp.store.AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCodeStore', {

});




var _DataStore_AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogModel',
    id: '_AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCodeStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRedeemPrizeHistoryLog/AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCode',
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