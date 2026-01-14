Ext.define('BuskartApp.store.Memberships.MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore', {

});




var _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Memberships.MembershipsModel',
    id: '_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCode',
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