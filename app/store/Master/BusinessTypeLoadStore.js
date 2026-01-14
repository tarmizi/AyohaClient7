

Ext.define('BuskartApp.store.Master.BusinessTypeLoadStore', {
    extend: 'Ext.data.Store',
   
    config: {
        model: 'BuskartApp.model.Master.BusinessTypeModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByAccNo',
            //url: 'http://192.168.0.103:9019/Receipts/ReceiptgetByIc',
            url: GetAPIurl() + '/BusinessTypeGroup/BusinessTypeGroupMerchantCategory',

            actionMethods: {
                read: 'GET'
            },
            reader: {
                type: 'json',
                rootProperty: 'results',
                totalProperty: 'total',
                successProperty: 'success',
                messageProperty: 'message'
            },



        },

    }
});



var _DataStore_BusinessTypeGroupMerchantCategoryStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.Master.BusinessTypeModel',
    id: '_BusinessTypeGroupMerchantCategoryStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/BusinessTypeGroup/BusinessTypeGroupMerchantCategory',
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



    //autoLoad: true

});