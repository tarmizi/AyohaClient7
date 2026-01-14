Ext.define("BuskartApp.store.AyohaeWallet.AyohaeWalletAccountSettingStore", {
    });




//Ext.define('BuskartApp.store.AyohaeWallet.AyohaeWalletAccountSettingStore', {
//    extend: 'Ext.data.Store',
//    id: 'AyohaeWalletAccountSettingStoreList',
//    config: {
//        model: 'BuskartApp.model.AyohaeWallet.AyohaeWalletModel',
//        autoLoad: false,

//        proxy: {

//            type: 'ajax',
//            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
//            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
//            url: GetAPIurl() + '/AyohaeWalletAccountSetting/AyohaeWalletAccountSettingload',

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



var _DataStore_AyohaeWalletAccountSettingStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaeWallet.AyohaeWalletModel',
    id: '_AyohaeWalletAccountSettingStoreListID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaeWalletAccountSetting/AyohaeWalletAccountSettingload',
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

