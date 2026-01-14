Ext.define('BuskartApp.store.Memberships.MembershipsCheckIsMemberStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.Memberships.MembershipsCheckIsMemberModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/Memberships/MembershipsCheckIsMember',
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



var _DataStore_MembershipsCheckIsMemberStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Memberships.MembershipsCheckIsMemberModel',
    id: '_MembershipsCheckIsMemberStoreID',
    proxy: {
        type: 'ajax',
        //url: GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNo',
        url: GetAPIurl() + '/Memberships/MembershipsCheckIsMember',
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