Ext.define('BuskartApp.model.Advertisement.AdvertisementDashboardCountModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'Submitted',
      'Approved',
      'Rejected',
      'Published',
        ]
    }
});