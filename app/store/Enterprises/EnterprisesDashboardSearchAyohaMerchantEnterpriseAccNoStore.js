
Ext.define('BuskartApp.store.Enterprises.EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore', {
});

var _DataStore_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Enterprises.EnterprisesMerchantListSearchResultModel',
    id: '_EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Enterprises/EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNo',
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