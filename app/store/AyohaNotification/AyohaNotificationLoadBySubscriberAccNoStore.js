Ext.define('BuskartApp.store.AyohaNotification.AyohaNotificationLoadBySubscriberAccNoStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaNotification.AyohaNotificationModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNo',
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







var _DataStore_AyohaNotificationLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaNotification.AyohaNotificationModel',
    id: '_AyohaNotificationLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNo',
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

