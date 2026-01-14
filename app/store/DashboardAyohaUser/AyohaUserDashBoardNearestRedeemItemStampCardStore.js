Ext.define('BuskartApp.store.DashboardAyohaUser.AyohaUserDashBoardNearestRedeemItemStampCardStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemStampCard',
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












var _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_AyohaUserDashBoardNearestRedeemItemStampCardStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemStampCard',
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



var _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemStatus',
        actionMethods: {
            read: 'POST'
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




var _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemExpired',
        actionMethods: {
            read: 'POST'
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






var _DataStore_DashBoard_StampCardLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel',
    id: '_DashBoard_StampCardLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashBoardStampCardLoadByEnterpriseAccNo',
        actionMethods: {
            read: 'POST'
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