Ext.define('BuskartApp.model.AyohaStoreLikeStatus.AyohaStoreLikeStatusModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'isLike',
      'CreatedDate',
      'ModifiedDate',
      'RowStatus',
       'AccountName',
      'Photo',
        ]
    }
});
