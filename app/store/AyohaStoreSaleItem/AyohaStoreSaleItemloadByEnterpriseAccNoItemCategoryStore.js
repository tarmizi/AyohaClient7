
Ext.define('BuskartApp.store.AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore', {
});

var _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemModel',
    id: '_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByEnterpriseAccNoItemCategory',
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

    grouper: {
        property: 'ProductCategoryName',
        direction: 'ASC'
    },

    listeners: {
        beforeload: function(store, operation) {
            console.log('=== Store BeforeLoad ===');
            console.log('Store ID:', store.getId());
            console.log('Proxy URL:', store.getProxy().getUrl());
            console.log('Extra Params:', store.getProxy().getExtraParams());
        },
        load: function(store, records, successful, operation) {
            console.log('=== Store Load Event ===');
            console.log('Successful:', successful);
            console.log('Records count:', records ? records.length : 0);
            if (records && records.length > 0) {
                console.log('Sample record data:', records[0].getData());
            }
            if (!successful) {
                console.error('Store load error:', operation.getError());
            }
        }
    }

    //autoLoad: true

});