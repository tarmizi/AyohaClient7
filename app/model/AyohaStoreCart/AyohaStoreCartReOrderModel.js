// Ext.define('BuskartApp.model.AyohaStoreCart.AyohaStoreCartReOrderModel', {
//     extend: 'Ext.data.Model',
//     config: {
//         fields: [
//             'RowNumber',
//       'ID',
//         'ItemCode',
//       'ItemQuantity',
//       'ItemSumPrice',
//       'ItemCartStatus',
//       'CreatedBy',
//       'CreatedDate',
//       'ModifiedBy',
//       'ModifiedDate',
//       'RowStatus',
//       'EnterpriseAccNo',
//       'SubscriberAccNo',
//       'LoyaltyRewardType',
//       'MerchantSumPoint',
//       'AyohaSumPoint',
//       'MerchantSumStamp',
//        'ItemCoverImg',
//       'MerchantPoint',
//       'AyohaPoint',
//       'ItemName',
//       'ItemPrice',
//       'ItemPriceDiscount',
//       'ItemPriceDiscountRate',
//       'TotalItemQuantity',
//       'TotalSumPrice',
//       'TotalMerchantPoint',
//       'TotalAyohaPoint',
//       'TotalMerchantSumStamp',
//       'StampRuleAmount',
//       'ItemDescriptions',
//       'ItemCartCode',
//       'EnterpriseName',
//       'EnterpriseLogo',
//       'MembershipCardCode',
//         ]
//     }
// });






Ext.define('BuskartApp.model.AyohaStoreCart.AyohaStoreCartReOrderModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'RowNumber',
      'ID',
        'ItemCode',
      'ItemQuantity',
      'ItemSumPrice',
      'ItemCartStatus',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      'EnterpriseAccNo',
      'SubscriberAccNo',
      'LoyaltyRewardType',
      'MerchantSumPoint',
      'AyohaSumPoint',
      'MerchantSumStamp',
       'ItemCoverImg',
      'MerchantPoint',
      'AyohaPoint',
      'ItemName',
      'ItemPrice',
      'ItemPriceDiscount',
      'ItemPriceDiscountRate',
      'TotalItemQuantity',
      'TotalSumPrice',
      'TotalMerchantPoint',
      'TotalAyohaPoint',
      'TotalMerchantSumStamp',
      'StampRuleAmount',
      'ItemDescriptions',
      'ItemCartCode',
      'EnterpriseName',
      'EnterpriseLogo',
      'MembershipCardCode',
      {
          name: 'Pointlabel',
          convert: function (value, record) {
              var _value;
              var MerchantPoint = parseFloat(record.get('MerchantPoint'));
              var AyohaPoint = parseFloat(record.get('AyohaPoint'));
              var ItemPrice;
              var TTlMerchantPoint;
              var TTlAyohaPoint;


              var CampaignType = record.get('LoyaltyRewardType');
              var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
              if (ItemPriceDiscount > 0) {
                  ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
                  TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
                  TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;

              } else
              {
                  ItemPrice = parseFloat(record.get('ItemPrice'));
                  TTlMerchantPoint = ItemPrice * MerchantPoint;
                  TTlAyohaPoint = ItemPrice * AyohaPoint;
              }

              if (CampaignType == "Point Reward Loyalty Card") {
                 
                  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 60px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>  <input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }

              if (CampaignType == "Stamp Reward Loyalty Card") {

                  var StampRuleAmount = parseFloat(record.get('MerchantPoint'));
                  var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
                  var ItemPrices = parseFloat(record.get('ItemPrice'));
                  var ItemPriceDiscounts = parseFloat(record.get('ItemPriceDiscount'));
                  var stamp;
                  if (ItemPriceDiscountRate >= 0.1) {
                      if (ItemPriceDiscounts >= StampRuleAmount) {

                          stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);
                          //_value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + 'Stamp(s)" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                          _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + 'Stamp(s)" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';

                      }


                  } else {
                      if (ItemPrices >= StampRuleAmount) {

                          stamp = parseInt(ItemPrices) / parseInt(StampRuleAmount);
                          _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + 'Stamp(s)" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                          //_value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + 'Stamp(s)" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                      }
                  }
                 
              }

              if (CampaignType == "NoMembershipCard") {
                  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }




              return _value;
          }
      },
      {
          name: 'OrderSentCreatedDate',
          convert: function (value, record) {
              var _value;

              var ItemCartStatus = record.get('ItemCartStatus');

              if (ItemCartStatus == "NewCart") {
                 
                  _value = '';
              }

              else {
                  _value = '<br><div style="font-family:Arial, sans-serif;font-size:8px;font-weight:bold;word-break:break-all;margin:-15px 16px 0px 0px;height:5px;border-top:1px none grey;color:grey;text-align:right;"><u>Created Date:{CreatedDate}</u></div>';
              }




              return _value;
          }
      },
       {
           name: 'ModifiedItemPrice',
           convert: function (value, record) {
               var _value;

               var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
               if (ItemPriceDiscount > 0) {
                   _value = parseFloat(record.get('ItemPriceDiscount'));
                  

               } else {
                   _value = parseFloat(record.get('ItemPrice'));

               }



               return _value.toFixed(2);
           }
       },
         {
             name: 'ModifiedItemPriceCheckOut',
             convert: function (value, record) {
                 var _value;
                 var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
                 var ItemPrice = record.get('ItemPrice');
                 var ItemQuantity = record.get('ItemQuantity');


           

                 if (ItemPriceDiscount > 0) {
                     _value = ItemPriceDiscount + " X (" + ItemQuantity + ")"
                 } else {
                     _value = ItemPrice + " X (" + ItemQuantity + ")"
                 }




                 return _value;
             }
         },
         {
             name: 'ModifiedItemDescriptions',
             convert: function (value, record) {
                 var _value;
                 var _result;
                 var ItemDescriptions = record.get('ItemDescriptions');

                 _value = ItemDescriptions.replace(/(\r\n|\n|\r)/gm, "<br>");


                 // matching the pattern
                 //var count = ItemDescriptions.split(/\r\n|\r|\n/).length;
                 var count = _value.length;

                 if (count > 70) {
                     _result = _value.substring(0, 70) + " <font color='blue'><u>See More...</u></font>";
                     console.log(_result);
                     return _result;
                 } else {
                     _result = _value;
                     return _result;
                 }


                 return _result;
             }
         },
         {
             name: 'ModifiedItemDescriptions_01',
             convert: function (value, record) {
                 var _value;
                 var _result;
                 var ItemDescriptions = record.get('ItemDescriptions');

                 _value = ItemDescriptions.replace(/(\r\n|\n|\r)/gm, "<br>");


                 // matching the pattern
                 //var count = ItemDescriptions.split(/\r\n|\r|\n/).length;

                 //var count = _value.length;

                 //if (count > 70) {
                 //    _result = _value.substring(0, 70) + " <font color='blue'><u>See More...</u></font>";
                 //    console.log(_result);
                 //    return _result;
                 //} else {
                 //    _result = _value;
                 //    return _result;
                 //}


                 return _value;
             }
         },
        ]
    }
});
