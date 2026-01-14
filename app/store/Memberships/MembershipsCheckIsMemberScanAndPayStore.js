Ext.define('BuskartApp.store.Memberships.MembershipsCheckIsMemberScanAndPayStore', {

});




var _DataStore_MembershipsCheckIsMemberScanAndPayStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Memberships.MembershipsCheckIsMemberScanAndPayModel',
    id: '_MembershipsCheckIsMemberScanAndPayStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/Memberships/MembershipsCheckIsMemberScanAndPay',
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