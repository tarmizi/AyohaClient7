
Ext.define('BuskartApp.store.AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusStore', {
});

var _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaHotMerchant.AyohaHotMerchantModel',
    id: '_AyohaHotMerchantLoadByAyohaHotMerchantStatusStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatus',
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