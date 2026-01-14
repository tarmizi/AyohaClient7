Ext.define('BuskartApp.model.Master.AdvertisementApprovalStatusModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'AdvertisementStatus',
                  'AdvertisementStatusDesc',
                 'RowStatus'
        ]
    }
});