Ext.define('BuskartApp.store.MembershipLoyaltyProgramMaster.MembershipLoyaltyProgramMaster_LoadMasterStore', {
});


var _DataStore_MembershipLoyaltyProgramMaster_LoadMasterStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipLoyaltyProgramMaster.MembershipLoyaltyProgramMasterModel',
    id: '_MembershipLoyaltyProgramMaster_LoadMasterStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipLoyaltyProgramMaster/MembershipLoyaltyProgramMasterLoadMaster',
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