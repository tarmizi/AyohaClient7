Ext.define('BuskartApp.store.AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaMerchantReview.AyohaMerchantReviewModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNo',
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







var _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaMerchantReview.AyohaMerchantReviewModel',
    id: '__AyohaMerchantReviewLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNo',
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