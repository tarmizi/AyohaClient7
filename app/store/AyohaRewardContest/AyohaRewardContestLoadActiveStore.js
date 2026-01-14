Ext.define('BuskartApp.store.AyohaRewardContest.AyohaRewardContestLoadActiveStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaRewardContest.AyohaRewardContestModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadActive',
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


var _DataStore_AyohaRewardContestLoadActiveStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardContest.AyohaRewardContestModel',
    id: '_AyohaRewardContestLoadActiveStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadActive',
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