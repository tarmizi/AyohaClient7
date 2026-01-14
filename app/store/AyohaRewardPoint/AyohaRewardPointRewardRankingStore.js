Ext.define('BuskartApp.store.AyohaRewardPoint.AyohaRewardPointRewardRankingStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaRewardPoint.AyohaRewardPointModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointRewardRanking',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        },


    }
});



var _DataStore_AyohaRewardPointRewardRankingStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardPoint.AyohaRewardPointModel',
    id: '__AyohaRewardPointRewardRankingStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointRewardRanking',
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