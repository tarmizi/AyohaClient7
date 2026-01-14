Ext.define('BuskartApp.store.MembershipCard.MembershipCardAyohaUserMembershipCardStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            //  url: 'http://192.168.0.103:9019/FlatBill/FlatBillgetFlatBill',
            url: GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard',
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        }


    }
});





var _DataStore_MembershipCardAyohaUserMembershipCardStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
    id: '_MembershipCardAyohaUserMembershipCardStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard',
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