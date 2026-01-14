
Ext.define('BuskartApp.store.AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusStore', {
});

var _DataStore_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreOrder.AyohaStoreOrderModel',
    id: '_AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatus',
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