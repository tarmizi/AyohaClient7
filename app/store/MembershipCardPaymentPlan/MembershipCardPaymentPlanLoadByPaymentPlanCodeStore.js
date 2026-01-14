Ext.define('BuskartApp.store.MembershipCardPaymentPlan.MembershipCardPaymentPlanLoadByPaymentPlanCodeStore', {  
});




// var _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore = Ext.create('Ext.data.Store', {

//     model: 'BuskartApp.model.MembershipCardPaymentPlan.MembershipCardPaymentPlanModel',
//     id: '_MembershipCardPaymentPlanLoadByPaymentPlanCodeStoreID',
//     proxy: {
//         type: 'ajax',
//         url: GetAPIurl() + '/MembershipCardPaymentPlan/MembershipCardPaymentPlanLoadByPaymentPlanCode',
//         actionMethods: {
//             read: 'POST'
//         },
//         reader: {
//             type: 'json',
//             rootProperty: 'results',
//             totalProperty: 'total',
//             successProperty: 'success',
//             messageProperty: 'message'
//         }
//     },
// });





var _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore = Ext.create('Ext.data.Store', {

   // model: 'BuskartApp.model.MembershipCardPaymentPlan.MembershipCardPaymentPlanModel',
    model:'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCardPaymentPlanLoadByPaymentPlanCodeStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion',
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