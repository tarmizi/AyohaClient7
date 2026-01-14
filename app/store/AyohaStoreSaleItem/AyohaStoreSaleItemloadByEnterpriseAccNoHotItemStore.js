
Ext.define('BuskartApp.store.AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore', {
});

var _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemModel',
    id: '_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByEnterpriseAccNoHotItem',
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