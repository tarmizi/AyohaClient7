
Ext.define('BuskartApp.store.Enterprises.EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStore', {
});





var _DataStore_EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStore = Ext.create('Ext.data.Store', {
    //var _DataStore_EnterprisesLoadByMerchantCategory = Ext.create('Ext.data.Store', {
    model: 'BuskartApp.model.Enterprises.EnterprisesMerchantListModel',
    id: '_EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessType',
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