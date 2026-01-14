Ext.define('BuskartApp.store.DashboardAyohaUser.AyohaUserDashBoardNearestRedeemItemPointCardStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemPointCard',
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




var _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_AyohaUserDashBoardNearestRedeemItemPointCardStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemPointCard',
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