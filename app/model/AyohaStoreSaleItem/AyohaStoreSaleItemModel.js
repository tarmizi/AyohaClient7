Ext.define('BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
      'EnterpriseAccNo',
      'ItemCode',
      'ItemName',
      'ItemPrice',
      'ItemPriceDiscount',
      'ItemCoverImg',
      'ItemDescriptions',
      'ItemCategoryCode',
      'CreatedBy',
      'CreatedDate',
      'ModifiedBy',
      'ModifiedDate',
      'RowStatus',
      'SaleItemCode',
      'CountItemCategory',
       'MembershipCardCode',
      'CampaignCode',
      'CampaignType',
      'MerchantPoint',
      'StampRuleAmount',
      'AyohaPoint',
      'AyohaUser_MembershipCardCount',
      'MembershipCardImage',
      'MembershipCardName',
      'AyohaUser_MembershipCardUsedCount',
      'ItemPriceDiscountRate',
      'ProductCategoryName',
      'ItemCoverImgName',
      'row_num',
      'Stock',
      'ShowStock',
      'StockAlert',
      {
          name: 'Pointlabel',
          convert: function (value, record) {
              var _value;

              var CampaignType = record.get('CampaignType');
              var TTlMerchantPoint;
              var TTlAyohaPoint;
              var MerchantPoint = parseFloat(record.get('MerchantPoint'));
              var AyohaPoint = parseFloat(record.get('AyohaPoint'));
              var ItemPrice = parseFloat(record.get('ItemPrice'));
              var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));

              var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
  
              if (ItemPriceDiscountRate >= 0.1) {
                TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
                TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
            } else {
                TTlMerchantPoint = ItemPrice * MerchantPoint;
                TTlAyohaPoint = ItemPrice * AyohaPoint;
            }

              if (CampaignType == "Point Reward Loyalty Card") {
                



                  _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }

              if (CampaignType == "Stamp Reward Loyalty Card") {
                  //StampRule Amount is RM10
                  var StampRuleAmount = parseFloat(record.get('MerchantPoint'));
                  var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
                  var ItemPrice = parseFloat(record.get('ItemPrice'));
                  var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
                  var stamp;
                  if (ItemPriceDiscountRate >= 0.1) {
                      if (ItemPriceDiscount >= StampRuleAmount) {

                          stamp =parseInt(ItemPriceDiscount) / parseInt(StampRuleAmount)
                      }

                    
                  } else {
                      if (ItemPrice >= StampRuleAmount) {

                          stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount)
                          _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';


                          
                      }
                      if (ItemPrice < StampRuleAmount) {

                          // stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount)
                          stamp = 0
                          _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*1 A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';


                      }
                  }
                  
                 

              }
             
              if (CampaignType == "NoMembershipCard") {
                  _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
              }
              if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
                //_value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + parseInt(TTlMerchantPoint) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="1 Stamp" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + parseInt(TTlAyohaPoint) + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
               
                _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
            }
             


              return _value;
          }
      },
      {
          name: 'ModifiedDiscount',
          convert: function (value, record) {
              var _value;
              var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
              if (ItemPriceDiscountRate >= 0.1) {
                  _value = '<br><div  style="margin:-160px 0px 0px 0px;width:100%;height:85;text-align:left;"><img src="resources/icons/DiscountPurple04.png" alt="Image" style="width:30px;height:50px;margin:0px 0px 0px 0px;"><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-39px 0px 0px 3px;width:100%;text-align:left;color:white;height:20px;">' + ItemPriceDiscountRate + '%</div></div><br><br><br><br><br>';
              } else {
                  _value = "";
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

                 if (count > 100) {
                     _result = _value.substring(0, 100) + " <font color='blue'><u>See More...</u></font>";
                     //console.log(_result);
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

                   //if (count > 100) {
                   //    _result = _value.substring(0, 100) + " <font color='blue'><u>See More...</u></font>";
                   //    console.log(_result);
                   //    return _result;
                   //} else {
                   //    _result = _value;
                   //    return _result;
                   //}


                   return _value;
               }
           },
           {
               name: 'ModifiedPrice',
               convert: function (value, record) {
                   var _value;

                   var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
                   var ID = record.get('ID');
                   var ItemCode = record.get('ItemCode');
                   var ItemCoverImg = record.get('ItemCoverImg');
                   var ItemName = record.get('ItemName');
                   var ItemDescriptions = record.get('ItemDescriptions');
                   var ItemPrice = record.get('ItemPrice');
                   var ItemPriceDiscount = record.get('ItemPriceDiscount');
                   var ItemCategoryCode = record.get('ItemCategoryCode');
                   var ProductCategoryName = record.get('ProductCategoryName');
                   var Stock = record.get('Stock');
                   var ShowStock = record.get('ShowStock');
                   var StockAlert = record.get('StockAlert');

                   if (ItemPriceDiscountRate >= 0.1) {
                       _value = "<div onclick=FloatPanel_AyohaStore_SaleItemDetailShow(" + ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode + "," + ProductCategoryName + "," + Stock + "," + ShowStock + "," + StockAlert + ")  style='font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;text-align:left;'><strike>RM" + ItemPrice + "</strike></div><div onclick=FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit(" + ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode + "," + ProductCategoryName + "," + Stock + ")  style='font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-20px 0px 0px 80px;color:#c800ffc9;text-align:left;'>RM" + ItemPriceDiscount + "</div>";
                   } else {
                       _value = "<div onclick=FloatPanel_AyohaStore_SaleItemDetailShow(" + ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode + "," + ProductCategoryName + "," + Stock + "," + ShowStock + "," + StockAlert + ")  style='font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;'>RM" + ItemPrice + "</div>";
                   }



                   return _value;
               }
           },
           {
               name: 'ModifiedShowStock',
               convert: function (value, record) {
                   var _value;

                   var Stock = record.get('Stock');
                   var ShowStock = record.get('ShowStock');


                   if (ShowStock == "Y") {
                       if (Stock > 0) {
                           _value = '<input type="text"  value="Stock:' + Stock + '"  style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 70px;height: 20px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;color:#c800ffc9;text-align:left;margin:0px 150px 0px 0px;"/>';
                           //_value = '<div style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 40px;height: 20px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;color:#c800ffc9;text-align:left;margin:30px 120px 0px 0px;">Stock:' + Stock + '</div>';

                       } else {
                           _value = '<input type="text"  value="Out of Stock" style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 100px;height: 20px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;color:red;text-align:left;margin:0px 120px 0px 0px;"/>';
                       }

                   } else {
                       _value = '';
                   }






                   return _value;
               }
           },
               {
                   name: 'ModifiedDiscountCol',
                   convert: function (value, record) {
                       var _value;
                       var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
                       if (ItemPriceDiscountRate >= 0.1) {
                           _value = '<div  style="margin:20px 0px 0px 25px;width:100%;height:85;text-align:left;"><img src="resources/icons/DiscountPurple04.png" alt="Image" style="width:30px;height:50px;margin:0px 0px 0px 0px;"><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-39px 0px 0px 3px;width:100%;text-align:left;color:white;height:20px;">' + ItemPriceDiscountRate + '%</div>';
                       } else {
                           _value = '<div  style="margin:20px 0px 0px 25px;width:100%;height:85;text-align:left;"><img src="resources/icons/backgroundTransparent.png" alt="Image" style="width:30px;height:50px;margin:0px 0px 0px 0px;"><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-39px 0px 0px 3px;width:100%;text-align:left;color:white;height:20px;">.</div>';
                       }





                       return _value;
                   }
               },
             {
                 name: 'ModifiedItemCoverImg',
                 convert: function (value, record) {
                     var _value;
                     var isPrice;
                     var isPoint;


                     var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
                     var ID = record.get('ID');
                     var ItemCode = record.get('ItemCode');
                     var ItemCoverImg = record.get('ItemCoverImg');
                     var ItemName = record.get('ItemName');
                     var ItemDescriptions = record.get('ItemDescriptions');
                     var ItemPrice = record.get('ItemPrice');
                     var ItemPriceDiscount = record.get('ItemPriceDiscount');
                     var ItemCategoryCode = record.get('ItemCategoryCode');
                     var ProductCategoryName = record.get('ProductCategoryName');
                     var row_num = record.get('row_num');
                     var Pointlabel = record.get('Pointlabel');
                     var Stock = record.get('Stock');
                     // var StockAlert = record.get('StockAlert');
                     var TTlMerchantPoint;
                     var TTlAyohaPoint;
                     var MerchantPoint = parseFloat(record.get('MerchantPoint'));
                     var AyohaPoint = parseFloat(record.get('AyohaPoint'));
                     var StampRuleAmount = parseFloat(record.get('StampRuleAmount'));
                     var stampEntitled;

                     if (ItemPriceDiscountRate >= 0.1) {
                         isPrice = "<div style='font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-21px 0px 0px 0px;color:#c800ffc9;text-align:left;'><strike>RM" + ItemPrice + "</strike></div><div style='font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 80px;color:#c800ffc9;text-align:left;'>RM" + ItemPriceDiscount + "</div>";
                         TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
                         TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                         stampEntitled=ItemPriceDiscount / StampRuleAmount;
                     } else {
                         isPrice = "<div style='font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-21px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;'>RM" + ItemPrice + "</div>";
                         TTlMerchantPoint = ItemPrice * MerchantPoint;
                         TTlAyohaPoint = ItemPrice * AyohaPoint;
                         stampEntitled=ItemPrice / StampRuleAmount;
                     }






                     var CampaignType = record.get('CampaignType');


                     if (CampaignType == "Point Reward Loyalty Card") {


                         isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + parseInt(TTlMerchantPoint) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + parseInt(TTlAyohaPoint) + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                     }

                     if (CampaignType == "Stamp Reward Loyalty Card") {
                        isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="'+ parseInt(stampEntitled) +' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*2 A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                        //  var StampRuleAmount = parseFloat(record.get('MerchantPoint'));
                        //  var ItemPriceDiscountRate = parseFloat(record.get('ItemPriceDiscountRate'));
                        //  var ItemPrice = parseFloat(record.get('ItemPrice'));
                        //  var ItemPriceDiscount = parseFloat(record.get('ItemPriceDiscount'));
                        //  var stamp;
                        //  if (ItemPriceDiscountRate >= 0.1) {
                        //      if (ItemPriceDiscount >= StampRuleAmount) {

                        //          stamp = parseInt(ItemPriceDiscount) / parseInt(StampRuleAmount)
                        //      }


                        //  } else {
                        //      if (ItemPrice >= StampRuleAmount) {

                        //         // stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount)
                        //          stamp = ItemPrice /StampRuleAmount
                        //          isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';

                        //      }
                        //      if (ItemPrice < StampRuleAmount) {

                        //          // stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount)
                        //          stamp = 0
                        //          isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*1 A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';


                        //      }
                        //  }

                       

                         

                     }

                     if (CampaignType == "NoMembershipCard") {
                         isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                     }



                     if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
                        isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + parseInt(TTlMerchantPoint) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="'+parseInt(stampEntitled)+' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + parseInt(TTlAyohaPoint) + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                        //isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + parseInt(TTlMerchantPoint) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="1 Stamp" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + parseInt(TTlAyohaPoint) + ' A.Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
                     }


                     var _StockShowHide;
                     var Stock = record.get('Stock');
                     var ShowStock = record.get('ShowStock');


                     if (ShowStock == "Y") {
                         if (Stock > 0) {
                             _StockShowHide = '<input type="text"  value="Stock:' + Stock + '"  style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 127px;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;color:#c800ffc9;text-align:right;margin:-7px 0px 0px 0px;"/>';
                             //_value = '<div style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 40px;height: 20px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;color:#c800ffc9;text-align:left;margin:30px 120px 0px 0px;">Stock:' + Stock + '</div>';

                         } else {
                             _StockShowHide = '<input type="text"  value="Out of Stock" style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 127px;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;color:red;text-align:right;margin:-7px 0px 0px 0px;"/>';
                         }

                     } else {
                         _StockShowHide = '<input type="text"  value="Stock:' + Stock + '"  style="border-radius: 5px;border: 1px none purple;padding: 0px; width: 127px;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;color:transparent;text-align:right;margin:-7px 0px 0px 0px;"/>';
                     }




                     var y1 = parseInt(window.innerWidth) - 17;
                     var y2 = y1 / 2;
                     var divWidth = y2 + 2;
                     var divHeight = y2 + 52;

                     var divImg = y2 - 30;
                     var divImgHeight = y2 - 20;



                     var divImgInner = y2 - 25;
                     var divImgHeightInner = y2 - 25;

                     //if (ItemPriceDiscountRate >= 0.1) {
                     //    _value = "<div onclick=FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit(" + ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode + "," + ProductCategoryName + "  style='font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;text-align:left;'><strike>RM" + ItemPrice + "</strike></div><div onclick=FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit(" + ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode + "," + ProductCategoryName + "  style='font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-20px 0px 0px 80px;color:#c800ffc9;text-align:left;'>RM" + ItemPriceDiscount + "</div>";
                     //} else {
                     //    _value = "<div onclick=FloatPanel_AyohaStoreMerchant_AddEditItemShowEdit(" + ID + "," + ItemCode + "," + ItemCoverImg + "," + ItemName + "," + ItemDescriptions + "," + ItemPrice + "," + ItemPriceDiscount + "," + ItemPriceDiscountRate + "," + ItemCategoryCode + "," + ProductCategoryName + "  style='font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;'>RM" + ItemPrice + "</div>";
                     //}


                     //////////_value = '<div class="img" style="width: ' + divWidth + 'px; height: ' + divHeight + 'px; border:2px solid grey;border-radius:0px 0px 0px 0px;"><img src="' + ItemCoverImg + '" style="margin-left: auto;margin-right: auto;width: ' + divImg + 'px; height: ' + divImgHeight + 'px;display: block;" /></div>';
                     //_value = '<div class="img" style="width: ' + divWidth + 'px; height: ' + divHeight + 'px; border:2px none grey;border-radius:0px 0px 0px 0px;"><div style="border:1px solid grey;border-radius:0px 0px 0px 0px;margin-left: auto;margin-right: auto;width: ' + divImgInner + 'px; height: ' + divImgHeightInner + 'px;display: block;"><img src="' + ItemCoverImg + '" style="margin-left: auto;margin-right: auto;width: ' + divImg + 'px; height: ' + divImgHeight + 'px;display: block;" /><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;text-align:center;">' + ItemName + '</div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-20px 0px 0px 0px;color:#c800ffc9;text-align:center;">RM' + ItemPrice + '</div></div></div>';
                     var ModifiedItemName;
                     if (ItemName.length >= 21) {
                         ModifiedItemName = ItemName.substring(0, 21) + '...'

                     }
                     if (ItemName.length <= 20) {
                         ModifiedItemName = ItemName

                     }
                     _value = '<div class="img" style="width: ' + divWidth + 'px; height: ' + divHeight + 'px; border:2px none grey;border-radius:0px 0px 0px 0px;z-index:-10;position: relative;margin:-40px 0px 0px 0px;"><div style="border:1px none grey;border-radius:0px 0px 0px 0px;margin-left: auto;margin-right: auto;width: ' + divImgInner + 'px; height: ' + divImgHeightInner + 'px;display: block;"><img src="' + ItemCoverImg + '" style="margin-left: auto;margin-right: auto;width: ' + divImg + 'px; height: ' + divImgHeight + 'px;display: block;" /><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:black;text-align:left;">' + row_num + ').' + ModifiedItemName + '</div><br>' + isPrice + '<br>' + isPoint + '</div></div><br><div style="margin:-45px 0px 0px 0px;width:90%;height: 20px;text-align:right;">' + _StockShowHide + '<br><br><br></div>';



                     return _value;
                 }
             },
      //      'ID',
      //'EnterpriseAccNo',
      //'ItemCode',
      //'ItemName',
      //'ItemPrice',
      //'ItemPriceDiscount',
      //'ItemCoverImg',
      //'ItemDescriptions',
      //'ItemCategoryCode',
      //'CreatedBy',
      //'CreatedDate',
      //'ModifiedBy',
      //'ModifiedDate',
      //'RowStatus',
      //'SaleItemCode',
      //'CountItemCategory',
      //'MembershipCardCode',
      //'CampaignCode',
      //'CampaignType',
      //'MerchantPoint',
      //'AyohaPoint',
      //'AyohaUser_MembershipCardCount',
      //'MembershipCardImage',
      //'MembershipCardName',
      //'AyohaUser_MembershipCardUsedCount',
      //{
      //    name: 'Pointlabel',
      //    convert: function (value, record) {
      //        var _value;

      //        var CampaignType = record.get('CampaignType');
            

      //        if (CampaignType == "Point Reward Loyalty Card")
      //        {
      //            var MerchantPoint = parseFloat(record.get('MerchantPoint'));
      //            var AyohaPoint = parseFloat(record.get('AyohaPoint'));
      //            var ItemPrice = parseFloat(record.get('ItemPrice'));
      //            var TTlMerchantPoint = ItemPrice * MerchantPoint;
      //            var TTlAyohaPoint = ItemPrice * AyohaPoint;
      //            _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //        }

      //        if (CampaignType == "Stamp Reward Loyalty Card") {
      //            _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="Loyalty Stamp" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*5 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //        }

      //        if (CampaignType == "NoMembershipCard") {
      //            _value = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //        }




      //        return _value;
      //    }
      //},
      //{
      //    name: 'PointlabelTemp',
      //    convert: function (value, record) {
      //        var _value;

      //        var CampaignType = record.get('CampaignType');


      //        if (CampaignType == "Point Reward Loyalty Card") {
      //            var MerchantPoint = parseFloat(record.get('MerchantPoint'));
      //            var AyohaPoint = parseFloat(record.get('AyohaPoint'));
      //            var ItemPrice = parseFloat(record.get('ItemPrice'));
      //            var TTlMerchantPoint = ItemPrice * MerchantPoint;
      //            var TTlAyohaPoint = ItemPrice * AyohaPoint;
      //          //  _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:right;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/></div><br><div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:right;"><input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //            _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -1px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>  <input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //        }

      //        if (CampaignType == "Stamp Reward Loyalty Card") {
      //            _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="1 Stamp" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*5 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //        }

      //        if (CampaignType == "NoMembershipCard") {
      //            _value = '<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="? Point" style="border-radius: 1px;border: 1px solid purple;padding: 1px; width: 50px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*? Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 1px; width: 75px;height: 12px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>';
      //        }




      //        return _value;
      //    }
      //},
        ]
    }
});