Ext.define('BuskartApp.store.MembershipCard.MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore', {
    // extend: 'Ext.data.Store',
    // //  alias: 'store.ResponderAlertGetByAcc',
    // config: {
    //     model: 'BuskartApp.model.MembershipCard.MembershipCardMembershipsModel',
    //     autoLoad: false,

    //     proxy: {

    //         type: 'ajax',
    //         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //         //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //         url: GetAPIurl() + '/MembershipCardExtent/MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNo',
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





var _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCard.MembershipCardMembershipsModel',
    id: '_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCardExtent/MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNo',
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
    // listeners: {
    //     load: function(store, records, successful, operation, eOpts) {
    //         // After the store loads data successfully...
    //         if (successful) {
    //             // Add the special "Load More" record at the end.
    //             // It only needs the 'isLoadMore' flag.
    //             store.add({
    //                 isLoadMore: true
    //             });
    //         }
    //     }
    // }
});













var _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore_CheckIn = Ext.create('Ext.data.Store', {

     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: 'MembershipCard_LoadBySubscriberAccNo_MembershipCardCode_EnterpriseAccNoID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCard_LoadBySubscriberAccNo_MembershipCardCode_EnterpriseAccNo',
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
    // listeners: {
    //     load: function(store, records, successful, operation, eOpts) {
    //         // After the store loads data successfully...
    //         if (successful) {
    //             // Add the special "Load More" record at the end.
    //             // It only needs the 'isLoadMore' flag.
    //             store.add({
    //                 isLoadMore: true
    //             });
    //         }
    //     }
    // }
});