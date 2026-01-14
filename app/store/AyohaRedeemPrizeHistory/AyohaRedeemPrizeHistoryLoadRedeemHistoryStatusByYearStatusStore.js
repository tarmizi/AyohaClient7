
Ext.define('BuskartApp.store.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore', {
});



var _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryModel',
    id: '_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatus',
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