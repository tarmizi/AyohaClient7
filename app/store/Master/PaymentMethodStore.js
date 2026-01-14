Ext.define("BuskartApp.store.Master.PaymentMethodStore", {  
});



//Ext.define('BuskartApp.store.Master.PaymentMethodStore', {
//    extend: 'Ext.data.Store',
//    id: 'ListofPaymentMethodStore',
//    config: {
//        model: 'BuskartApp.model.Master.PaymentMethodModel',
//        autoLoad: true,

//        proxy: {

//            type: 'ajax',
//            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
//            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
//            url: GetAPIurl() + '/AyohaPaymentMethod/AyohaPaymentMethodload',

//            actionMethods: {
//                read: 'GET'
//            },
//            reader: {
//                type: 'json',
//                rootProperty: 'results',
//                totalProperty: 'total',
//                successProperty: 'success',
//                messageProperty: 'message'
//            },



//        },

//    }
//});


var _DataStore_PaymentMethodStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Master.PaymentMethodModel',
    id: '_ListofPaymentMethodStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaPaymentMethod/AyohaPaymentMethodload',
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
