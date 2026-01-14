
Ext.define('BuskartApp.store.AyohaStoreSaleItem.AyohaStoreSaleItemloadItemCategoryStore', {
});

var _DataStore_AyohaStoreSaleItemloadItemCategoryStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemItemCategoryModel',
    id: '_AyohaStoreSaleItemloadItemCategoryStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadItemCategory',
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