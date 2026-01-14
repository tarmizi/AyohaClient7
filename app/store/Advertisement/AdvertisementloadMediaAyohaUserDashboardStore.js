Ext.define('BuskartApp.store.Advertisement.AdvertisementloadMediaAyohaUserDashboardStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.Advertisement.AdvertisementloadMediaAyohaUserDashboardModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            url: GetAPIurl() + '/Advertisement/AdvertisementloadMediaAyohaUserDashboard',
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






var _DataStore_AdvertisementloadMediaAyohaUserDashboardStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Advertisement.AdvertisementloadMediaAyohaUserDashboardModel',
    id: '_AdvertisementloadMediaAyohaUserDashboardStoreID',
    proxy: {
        type: 'ajax',
        //url: GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNo',
        url: GetAPIurl() + '/Advertisement/AdvertisementloadMediaAyohaUserDashboard',
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