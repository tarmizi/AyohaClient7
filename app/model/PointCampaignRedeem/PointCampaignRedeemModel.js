Ext.define('BuskartApp.model.PointCampaignRedeem.PointCampaignRedeemModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
             'ID',
      'ImgPath',
      'AyohaUserGroupCode',
      'ItemName',
      'ItemCode',
      'ItemPoint',
      'ItemImg',
      'RowStatus',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'Remarks',
      'ItemPrizePriceCost',
      'AyohaUserGroupCategory',
      'PointCampaignCode',
      'EnterpriseAccNo',
      'MembershipCardCode',
      'EnterpriseName',
      'CountRow',
      'EndDate',
      'StartDate',
      'PointCampaignName',
      'EnterprisesLogo',
      'isRequiredStartEndDate',
      'isCampaignExpired',
      'CampaignDayLeft',
      'AdvertisementTitle',
      'SearchCol',
      {
        name: 'ModifiedItemImg',
        convert: function (value, record) {
            var _value;
            var StampContent = record.get('ImgPath');          
                _value = '<img src="' + StampContent + '" width="70px" height="70px" alt="Company Name">';  
            return _value
        }
    }, 
    {
        name: 'ModifiedCampaignDayLeft',
        convert: function (value, record) {
            var _value;
            var _value =Number(record.get('CampaignDayLeft'));          
              if(_value<0){
                _value = Math.abs(_value);  // 137
              }

        
            return _value
        }
    },      
        ]
    }
});



