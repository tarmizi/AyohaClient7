
Ext.define('BuskartApp.store.Enterprises.EnterprisesLoadByEnterpriseBusinessTypeStore', {
});

//var _DataStore_EnterprisesLoadByEnterpriseBusinessTypeStore = Ext.create('Ext.data.Store', {
var _DataStore_EnterprisesLoadByMerchantCategory = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesModel',
    id: '_EnterprisesLoadByEnterpriseBusinessTypeStore',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseBusinessType',
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