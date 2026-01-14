Ext.define('BuskartApp.model.AyohaUserStampCard.AyohaUserStampCardModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'StampCardCode',
                  'StampCampaignCode',
                  'StampContent',
                  'StampContentSequence',
                  'StampContentNote',
                  'StampCardType',
                  'EnterpriseAccNo',
                  'CreatedByAccNo',
                  'CreatedBy',
                  'CreatedDate',
                  'ModifiedBy',
                  'ModifiedDate',
                  'RowStatus',
                  'TextOne',
                  'TextTwo',
                  'DivContent',
                  'DivContentTextTwo',
                  'StampContentDefaultTemplateID',
                  'ShowHide',
                  'ImgContentName',
                  'isRedeemItem',
                  'StampedStatus',
                  'SubscriberAccNo',
                  'StampedBy',
                  'StampedDate',
                  'StampedTime',
                  'EnterpriseLogo',
                  'EnterpriseName',
                  'CountRow',
                  'EndDate',
                  'StampRuleRemarks',
                  'IsStampRulePopUp',
                  'StartDate',
                  'StampCampaignName',
                  'NextRedeemItemStampContent',
                  'NextRedeemItemStampContentNote',
                  'CountStampCardRowShow',
                  'CountStampCardRowYES',
                  'CountStampYES',
                  'EnterprisesLogo',
                  'isRequiredStartEndDate',
                  'isCampaignExpired',
                  'CampaignDayLeft',
                  'AdvertisementTitle',
                  'StampEligibleCount',
                  'SearchCol',   
                  'RowNumber',
                  'StampedDate',                
                     {
                         name: 'ModifiedStampContent',
                         convert: function (value, record) {
                             var _value;
                             var IsStampRulePopUp = record.get('IsStampRulePopUp');
                             var StampContent = record.get('StampContent');
                             if (IsStampRulePopUp == "POINTLOYALTYCARD") {
                                _value = '<img src="' + StampContent + '" width="70px" height="70px" alt="Company Name">';
                                 //_value = '<img src="' + StampContent + '" style="width:100%; height:100%; object-fit:cover;"  alt="Company Name">';
                             } else {
                                 _value = StampContent;
                             }
                            
                             

                             return _value
                         }
                     },
                     {
                         name: 'ModifiedCampaignType',
                         convert: function (value, record) {
                             var _value;
                             var IsStampRulePopUp = record.get('IsStampRulePopUp');
                             if (IsStampRulePopUp == "POINTLOYALTYCARD") {
                                 _value = 'Point Loyalty Campaign';
                                 return _value
                             } if (IsStampRulePopUp == "YES" || IsStampRulePopUp == "NO") {
                                 _value = 'Stamp Loyalty Campaign';
                                 return _value
                             }
                             else {
                                 _value = 'Unknown Loyalty Campaign';
                                 return _value
                             }



                           
                         }
                     },
        ]
    }
});

