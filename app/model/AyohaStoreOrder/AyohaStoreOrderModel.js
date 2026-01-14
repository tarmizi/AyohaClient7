Ext.define('BuskartApp.model.AyohaStoreOrder.AyohaStoreOrderModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
        'ID',
      'OrderNo',
      'ItemCartCode',
      'DeliveryChargeCode',
      'DeliveryCharge',
      'MembershipDiscountCampaignCode',
      'MembershipDiscount',
      'VoucherCampaignCode',
      'VoucherDiscount',
      'GrandTotal',
      'DeliveryAddress_StreetName',
      'DeliveryAddress_Town',
      'DeliveryAddress_Postcode',
      'DeliveryAddress_StateCode',
      'DeliveryAddress_CountryCode',
      'ReferenceName',
      'ReferencePhoneNo',
      'NoteToSeller',
      'MerchantPointEarn',
      'AyohaPointEarn',
      'EnterpriseAccNo',
      'SubscriberAccNo',
      'MembershipCardCode',
      'OrderStatus',
      'CreatedDate',
      'CreatedBy',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      'DisplayOrderNo',
      'DeliveryName',
      'TotalQuantity',
      'OrderLogOrderStatus',
      'OrderLogCreatedDate',
      'TotalStampEarn',
      'Row_num',
      'SubTotal',
      'EnterpriseName',
      'EnterpriseLogo',
      'EnterpriseAddress',
      {
          name: 'ModifiedOrderLogOrderStatus',
          convert: function (value, record) {
              var _value;
              var txt = record.get('OrderLogOrderStatus');
              if(txt){
                var OrderLogOrderStatus = record.get('OrderLogOrderStatus').split(",");
                var OrderLogCreatedDate = record.get('OrderLogCreatedDate').split(",");
  
  
                var count = txt.split(",").length - 1;
                var html0;
                html0 = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[0] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;<font color="black">(' + OrderLogOrderStatus[0] + ')</font></i></div>'
             
  
                if (count > 1) {
                    for (i = 1; i <= count; i++) {
                        html0 += '<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;' + OrderLogCreatedDate[i] + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;(' + OrderLogOrderStatus[i] + ')</i></div>'
                    }
                   
  
                }
              // console.log(html0);
               _value = html0.replace('<br><img src="resources/icons/lineDown01.png" style="width:10px;height:70px;margin:-35px 0px 0px 0px;"></img><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;">&nbsp;&nbsp;&nbsp;&nbsp;</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;color:black;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><i>&nbsp;&nbsp;&nbsp;&nbsp;()</i></div>', "")
              
                
  
  
  
                return _value;
              }
             
          }
      },
        ]
    }
});
