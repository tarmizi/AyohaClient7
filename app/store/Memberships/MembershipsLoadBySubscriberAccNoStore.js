Ext.define('BuskartApp.store.Memberships.MembershipsLoadBySubscriberAccNoStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.Memberships.MembershipsModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo',
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




var _DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Memberships.MembershipsModel',
    id: '_MembershipsLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo',
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