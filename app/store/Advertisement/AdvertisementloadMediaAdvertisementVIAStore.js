Ext.define('BuskartApp.store.Advertisement.AdvertisementloadMediaAdvertisementVIAStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.Advertisement.AdvertisementModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            url: GetAPIurl() + '/Advertisement/AdvertisementloadMediaAdvertisementVIA',
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

var _DataStore_AdvertisementloadMediaAdvertisementVIAStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Advertisement.AdvertisementModel',
    id: '_AdvertisementloadMediaAdvertisementVIAStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Advertisement/AdvertisementloadMediaAdvertisementVIA',
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
