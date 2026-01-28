Ext.define('BuskartApp.store.MembershipCard.MembershipCardLoadBySubscriberAccNoDashboardMainStore', {
   
});



var _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCardLoadBySubscriberAccNoDashboardMainStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain',
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


var _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCardLoadByEnterpriseAccNo_DashboardMainID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo_DashboardMain',
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
});



var _DataStore_MembershipCard_LoadforCheck_InStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCard_MembershipCard_LoadforCheck_InlID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCard_LoadforCheck_In',
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
});



var _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetailID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetail',
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
});



// // Example: In your controller or view model where you define the store
// var myStore_loadMoreMembershipCard = Ext.create('Ext.data.Store', {
//     // ... your existing store configuration (model, proxy, etc.)
//     listeners: {
//         load: function(store, records, successful, operation, eOpts) {
//             // After the store loads data successfully...
//             if (successful) {
//                 // Add the special "Load More" record at the end.
//                 // It only needs the 'isLoadMore' flag.
//                 store.add({
//                     isLoadMore: true
//                 });
//             }
//         }
//     }
// });