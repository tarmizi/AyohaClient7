Ext.define('BuskartApp.store.Advertisement.AdvertisementloadHotSeatStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.Advertisement.AdvertisementModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            url: GetAPIurl() + '/Advertisement/AdvertisementloadHotSeat',
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

var _DataStore_AdvertisementloadHotSeatStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Advertisement.AdvertisementModel',
    id: '_AdvertisementloadHotSeatStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Advertisement/AdvertisementloadHotSeat',
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




var _DataStore_AdvertisementloadPremiumAdvertisementStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Advertisement.AdvertisementModel',
    id: '_AdvertisementloadPremiumAdvertisementStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Advertisement/AdvertisementloadPremiumAdvertisment',
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