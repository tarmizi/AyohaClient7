Ext.define('BuskartApp.store.ViewMerchantDashboard.StoreActivityStore', {
  
});


var _DataStore_VIEWMerchantDashboard_StoreActivityStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.ViewMerchantDashboard.StoreActivityModel',
    id: '_DataStore_StoreActivityStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEW_MerchantDashboard/VIEWMerchantDashboard_StoreActivity',
        actionMethods: {
            read: 'POST'
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







var _DataStore_MerchantDashboard_CheckOutActivityStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.ViewMerchantDashboard.StoreActivityModel',
    id: '_DataStore_MerchantDashboard_CheckOutActivityStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/VIEW_MerchantDashboard/MerchantDashboard_CheckOutActivity',
        actionMethods: {
            read: 'POST'
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