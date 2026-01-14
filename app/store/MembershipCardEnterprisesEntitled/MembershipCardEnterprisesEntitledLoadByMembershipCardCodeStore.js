Ext.define('BuskartApp.store.MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore', {
    // extend: 'Ext.data.Store',
    // //  alias: 'store.ResponderAlertGetByAcc',
    // config: {
    //     model: 'BuskartApp.model.MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledModel',
    //     autoLoad: false,

    //     proxy: {

    //         type: 'ajax',
    //         //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
    //         //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
    //         url: GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledLoadByMembershipCardCode',
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


var _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore = Ext.create('Ext.data.Store', {

    // model: 'BuskartApp.model.MembershipCardPaymentPlan.MembershipCardPaymentPlanModel',
    model: 'BuskartApp.model.MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledModel',
     id: '_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStoreID',
     proxy: {
         type: 'ajax',
         url: GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledLoadByMembershipCardCode',
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



