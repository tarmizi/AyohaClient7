Ext.define('BuskartApp.model.EnterprisesOnlineStore.EnterprisesOnlineStoreModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'EnterpriseAccNo',
      'OnlineStoreCode',
      'OnlineStoreURL',
      'OnlineStoreName',
      'OnlineStoreIconPath'
        ]
    }
});