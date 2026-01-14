Ext.define('BuskartApp.model.AyohaRewardContest.AyohaRewardContest_SelfieAndWinModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'ContestCode',
      'SelfieImagePath',
      'SelfieImageName',
      'SubscriberAccNo',
      'CreatedDate',
      'CreatedBy',
      'ModifiedDate',
      'ModifiedBy',
      'Note',
      'RowStatus',
      'ContestStatus',
      'EnterpriseAccNo',
      'ReceiptLink',
      'ReceiptName'
        ]
    }
});