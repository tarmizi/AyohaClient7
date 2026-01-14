Ext.define('BuskartApp.store.Enterprises.Enterprises_LoadRecentlyCheckIn', {
});


var _DataStore_EnterprisesLoadRecentlyCheckInStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadRecentlyCheckInStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/Enterprises_LoadRecentlyCheckIn',
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