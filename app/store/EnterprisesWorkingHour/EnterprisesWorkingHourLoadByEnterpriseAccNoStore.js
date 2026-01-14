
Ext.define('BuskartApp.store.EnterprisesWorkingHour.EnterprisesWorkingHourLoadByEnterpriseAccNoStore', {
});

var _DataStore_EnterprisesWorkingHourLoadByEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.EnterprisesWorkingHour.EnterprisesWorkingHourModel',
    id: '_EnterprisesWorkingHourLoadByEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/EnterprisesWorkingHour/EnterprisesWorkingHourLoadByEnterpriseAccNo',
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