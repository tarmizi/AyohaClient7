Ext.define('BuskartApp.model.MerchantLoyaltyCampaign.DiscountCardModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'DiscountCode',
                  'DiscountImgPath',
                  'DiscountName',
                  'DiscountPercent',
                  'DiscountTermAndCondition',
                  'DiscountEndDate',
                  'CreatedDate',
                  'DiscountNote',
                  'isRequireDiscountEndDate',
                  'EnterpriseName',
                  'EnterpriseLogo',
                  'EnterpriseTagLine',
                  'EnterpriseAccNo',
                  'MembershipCardCode',
                  'CountStar',
                  'CountReviewer',
                  'SearchCol',
                  'MembershipCardFeePaymentCycle',
                  'BusinessMode',    
                  'EnterpriseDescription',
                  {
                    name: 'ModifiedDiscountPercent',
                    convert: function (value, record) {
                        var v = record.get('DiscountPercent');
    if (v === null || v === undefined || v === '') return v;
    v = String(v);
    if (!v.includes('.')) return v;                        // already integer-like
    return v.replace(/(\.\d*?[1-9])0+$|\.0+$/,'$1');       // trims trailing zeros
                    }
                },               
                    
                    
        ]
    }
});

