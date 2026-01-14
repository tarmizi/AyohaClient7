Ext.define('BuskartApp.store.AyohaRewardContestant.AyohaRewardContestantLoadByContestCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AyohaRewardContestant.AyohaRewardContestantModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadByContestCode',
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


var _DataStore_AyohaRewardContestantLoadByContestCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRewardContestant.AyohaRewardContestantModel',
    id: '_AyohaRewardContestantLoadByContestCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadByContestCode',
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