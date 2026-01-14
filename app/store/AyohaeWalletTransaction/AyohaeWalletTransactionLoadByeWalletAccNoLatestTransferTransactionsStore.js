
Ext.define('BuskartApp.store.AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore', {
});

var _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaeWalletTransaction.AyohaeWalletTransactionModel',
    id: '_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactions',
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