Ext.define('BuskartApp.store.Memberships.MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore', {
  
});




var _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Memberships.MembershipsModel',
    id: '_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNo',
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