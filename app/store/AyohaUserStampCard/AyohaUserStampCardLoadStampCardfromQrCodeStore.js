Ext.define('BuskartApp.store.AyohaUserStampCard.AyohaUserStampCardLoadStampCardfromQrCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCardLoadStampCardfromQrCode',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});
