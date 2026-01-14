
Ext.define('BuskartApp.store.AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageStore', {
});

var _DataStore_AyohaStoreSaleItemAyohaStoreFrontPageStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageModel',
    id: '_AyohaStoreSaleItemAyohaStoreFrontPageStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemAyohaStoreFrontPage',
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