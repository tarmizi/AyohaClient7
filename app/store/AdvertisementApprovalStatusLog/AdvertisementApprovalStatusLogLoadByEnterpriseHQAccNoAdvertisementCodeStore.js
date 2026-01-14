Ext.define('BuskartApp.store.AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogLoadByEnterpriseHQAccNoAdvertisementCodeStore', {
    extend: 'Ext.data.Store',
    //  alias: 'store.ResponderAlertGetByAcc',
    config: {
        model: 'BuskartApp.model.AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogModel',
        autoLoad: false,

        proxy: {

            type: 'ajax',
            //   url: document.location.protocol + '//' + document.location.host + '/API/AutoFenceTimer/GetAutoFenceTimerByID',
            url: GetAPIurl() + '/AdvertisementApprovalStatusLog/AdvertisementApprovalStatusLogLoadByEnterpriseHQAccNoAdvertisementCode',
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

