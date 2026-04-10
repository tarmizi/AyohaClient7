Ext.define('BuskartApp.store.AyohaUserProfile.AyohaUserProfileLoadProfileStore', {
    // extend: 'Ext.data.Store',
    // //  alias: 'store.ResponderAlertGetByAcc',
    // config: {
    //     model: 'BuskartApp.model.AyohaUserProfile.AyohaUserProfileModel',
    //     autoLoad: false,

    //     proxy: {

    //         type: 'ajax',
    //         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //         //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //         url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadProfile',
    //         reader: {
    //             type: 'json',
    //             rootProperty: 'results',
    //             totalProperty: 'total',
    //             successProperty: 'success',
    //             messageProperty: 'message'
    //         },



    //     }


    // }
});





var _DataStore_AyohaUserProfileLoadProfileStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.AyohaUserProfile.AyohaUserProfileModel',
    id: '_AyohaUserProfileLoadProfileStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadProfile',
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