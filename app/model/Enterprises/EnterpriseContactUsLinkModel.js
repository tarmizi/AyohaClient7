Ext.define('BuskartApp.model.Enterprises.EnterpriseContactUsLinkModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             'EnterpriseFacebook',
      'EnterpriseTwiter',
      'EnterpriseInstagram',
      'EnterpriseCoordinate',
	  'EnterpriseEmail',
      'EnterpriseWebsite',
	  'EnterprisePhoneNo',
	  'PICContactNo',
	  'PersonInCharge',
      'MerchantLinkType',
      'eStoreIconPath',
      'eStoreName',
      'OnlineStoreUrl'
        ]
    }
});