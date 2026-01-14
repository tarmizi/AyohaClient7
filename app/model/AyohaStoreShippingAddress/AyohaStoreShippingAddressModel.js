Ext.define('BuskartApp.model.AyohaStoreShippingAddress.AyohaStoreShippingAddressModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'StreetName',
      'Town',
      'PostCode',
      'StateCode',
      'CountryCode',
      'ContactPersonName',
      'PhoneNo',
      'ItemCartCode',
      'OrderCode',
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'RowStatus',
      'CreatedDate',
        ]
    }
});