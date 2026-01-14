Ext.define('BuskartApp.store.DashboardAyohaUser.SuccessCheckInStore', {
  
});


var _DataStore_SuccessCheckIn_LoadPerkCanEnjoyInfoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.DashboardAyohaUser.SuccessCheckInModel',
    id: '_DataStore_SuccessCheckIn_LoadPerkCanEnjoyInfoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/DashboardAyohaUser/DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo',
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