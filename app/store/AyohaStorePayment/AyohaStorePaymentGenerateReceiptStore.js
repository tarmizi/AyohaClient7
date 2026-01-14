
Ext.define('BuskartApp.store.AyohaStorePayment.AyohaStorePaymentGenerateReceiptStore', {
});

var _DataStore_AyohaStorePaymentGenerateReceiptStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStorePayment.AyohaStorePaymentModel',
    id: '_AyohaStorePaymentGenerateReceiptStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStorePayment/AyohaStorePaymentGenerateReceipt',
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