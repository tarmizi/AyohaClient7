Ext.define('BuskartApp.store.Enterprises.EnterprisesLoadLastCheckInStore', {
});


var _DataStore_EnterprisesLoadLastCheckInStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadLastCheckInStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/Enterprises_LoadLastCheckIn',
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