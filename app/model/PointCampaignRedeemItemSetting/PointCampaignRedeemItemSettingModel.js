Ext.define('BuskartApp.model.PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel', {
    extend: 'Ext.data.Model',
   // config: {
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
                if(str){
                    var ModiStr = str.split('-');
                    _value = ModiStr[0];
                }else
                {
                    _value="NA"
                }
              

                return _value;
            }
        },
        {
            name: 'ModifiedButtonRedeemItem',
            convert: function (value, record) {
                var _value;
                var ID = record.get('ID');
                if (globalPointCampaignIsExpired == "Expired") {
                   // _value = '<div  style="width:100%;text-align:center;margin:0px 0px 0px 0px;"><button OnClick="FloatLoyaltyCardPointCheckRedeemEntitle(' + ID + ')" class="buttonLoyaltyCardPointRedeemListExpired">Campaign Expired !</button>';
                    _value= '<div class="redeemBtnWrap" style="width:100%;text-align:center;margin:0;">' +
                    '<button onclick="FloatLoyaltyCardPointCheckRedeemEntitle(' + ID + ')" class="buttonLoyaltyCardPointRedeemListExpired">Campaign Expired !</button>' +
                  '</div>' 

                }
                if (globalPointCampaignIsExpired == "NotExpired") {
                 //   _value = '<div class="blink_me" style="width:100%;text-align:center;margin:0px 0px 0px 0px;"><button OnClick="FloatLoyaltyCardPointCheckRedeemEntitle(' + ID + ')" class="buttonLoyaltyCardPointRedeemList">Redeem Perk!</button>';

               _value= '<div class="redeemBtnWrap" style="width:100%;text-align:center;margin:0;">' +
               '<button onclick="FloatLoyaltyCardPointCheckRedeemEntitle(' + ID + ')" class="buttonStandardTheme">Redeem Perk!</button>' +
             '</div>' 
               
                }
                
                return _value;
            }
        },
        ]
   // }
});



