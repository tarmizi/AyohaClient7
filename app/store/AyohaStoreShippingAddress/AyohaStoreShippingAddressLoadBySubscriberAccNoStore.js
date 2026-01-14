
Ext.define('BuskartApp.store.AyohaStoreShippingAddress.AyohaStoreShippingAddressLoadBySubscriberAccNoStore', {
});

var _DataStore_AyohaStoreShippingAddressLoadBySubscriberAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaStoreShippingAddress.AyohaStoreShippingAddressModel',
    id: '_AyohaStoreShippingAddressLoadBySubscriberAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaStore_ShippingAddress/AyohaStoreShippingAddressLoadBySubscriberAccNo',
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