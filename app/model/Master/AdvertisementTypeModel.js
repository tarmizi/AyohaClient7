Ext.define('BuskartApp.model.Master.AdvertisementTypeModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'AdvertismentTypeCode',
                  'AdvertisementType',
                 'Descriptions',
                  'RowStatus'
        ]
    }
});