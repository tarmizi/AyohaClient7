
Ext.define('BuskartApp.store.AyohaStoreCart.AyohaStoreCartLoadCartAyohaStore', {
});

var _DataStore_AyohaStoreCartLoadCartAyohaStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreCart.AyohaStoreCartModel',
    id: '_AyohaStoreCartLoadCartAyohaStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStore',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'GET'
          //  read: AyohaStoreCartRouteMethod
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

var _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreCart.AyohaStoreCartReOrderModel',
    id: '_AyohaStoreCartLoadCartAyohaStoreReOrdertoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStoreReOrder',
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