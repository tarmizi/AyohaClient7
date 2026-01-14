Ext.define('BuskartApp.model.MembershipCardPaymentPlan.MembershipCardPaymentPlanModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [                 
      'ID',     
      'PaymentPlanCode',
        'PaymentCycleCode',
      'PaymentPlanPrice',
      'PaymentPlanDescription',
      'isDiscount',
      'EnterpriseAccNo',
      'MembershipCardCode',
      'DiscountPercentage',
      'PaymentPlanPriceDiscount',     
      'CreatedBy',
        'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
        ]
    }
});
