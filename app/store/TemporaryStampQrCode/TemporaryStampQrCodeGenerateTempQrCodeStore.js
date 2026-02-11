Ext.define('BuskartApp.store.TemporaryStampQrCode.TemporaryStampQrCodeGenerateTempQrCodeStore', {
    // extend: 'Ext.data.Store',
    // //  alias: 'store.ResponderAlertGetByAcc',
    // config: {
    //     model: 'BuskartApp.model.TemporaryStampQrCode.TemporaryStampQrCodeModel',
    //     autoLoad: false,

    //     proxy: {

    //         type: 'ajax',
    //         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //         //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //         url: GetAPIurl() + '/TemporaryStampQrCode/TemporaryStampQrCodeGenerateTempQrCode',
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






var _DataStore_TemporaryStampQrCodeGenerateTempQrCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.TemporaryStampQrCode.TemporaryStampQrCodeModel',
    id: '_TemporaryStampQrCodeGenerateTempQrCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/TemporaryStampQrCode/TemporaryStampQrCodeGenerateTempQrCode',
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
