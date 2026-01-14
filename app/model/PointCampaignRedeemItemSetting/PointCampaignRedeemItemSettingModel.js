Ext.define('BuskartApp.model.PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel', {
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
      'TotalItemPoint',
      'TotalItemPrizePriceCost',
        {
            name: 'ModifiedItemCode',
            convert: function (value, record) {
                var _value;

                var str = record.get('ItemCode');
                var ModiStr = str.split('-');
                _value = ModiStr[0];

                return _value;
            }
        },
        {
            name: 'ModifiedButtonRedeemItem',
            convert: function (value, record) {
                var _value;
                var ID = record.get('ID');
                if (globalPointCampaignIsExpired == "Expired") {
                    _value = '<div  style="width:100%;text-align:center;margin:0px 0px 0px 0px;"><button OnClick="FloatLoyaltyCardPointCheckRedeemEntitle(' + ID + ')" class="buttonLoyaltyCardPointRedeemListExpired">Campaign Expired !</button>';

                }
                if (globalPointCampaignIsExpired == "NotExpired") {
                    _value = '<div class="blink_me" style="width:100%;text-align:center;margin:0px 0px 0px 0px;"><button OnClick="FloatLoyaltyCardPointCheckRedeemEntitle(' + ID + ')" class="buttonLoyaltyCardPointRedeemList">Redeem The Prize!</button>';

                }
                
                return _value;
            }
        },
        ]
    }
});



