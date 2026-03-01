Ext.define('BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemModel', {
    extend: 'Ext.data.Model',
    //config: {
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

                 if (ItemDescriptions) {
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
                 }else{
                        _result = "";
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

                   if (ItemDescriptions) {
                       _value = ItemDescriptions.replace(/(\r\n|\n|\r)/gm, "<br>");
                   }else{
                          _value = "";
                   }

                



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
                           _value = '<div style="position:absolute; top:5px; left:5px; z-index:10;"><img src="resources/icons/DiscountPurple04.png" alt="Discount" style="width:35px;height:55px;"/><div style="position:absolute; top:5px; left:5px; font-family:Arial, sans-serif; font-size:13px; font-weight:bold; color:white; text-align:center; width:25px;">' + ItemPriceDiscountRate + '%</div></div>';
                       } else {
                           _value = '';
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
                         isPrice = "<span style='font-family:Arial, sans-serif;font-size:13px;font-weight:bold;color:#999;text-decoration:line-through;margin-right:8px;'>RM" + ItemPrice + "</span><span style='font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:#c800ffc9;'>RM" + ItemPriceDiscount + "</span>";
                         TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
                         TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                         stampEntitled=ItemPriceDiscount / StampRuleAmount;
                     } else {
                         isPrice = "<span style='font-family:Arial, sans-serif;font-size:16px;font-weight:bold;color:#c800ffc9;'>RM" + ItemPrice + "</span>";
                         TTlMerchantPoint = ItemPrice * MerchantPoint;
                         TTlAyohaPoint = ItemPrice * AyohaPoint;
                         stampEntitled=ItemPrice / StampRuleAmount;
                     }






                     var CampaignType = record.get('CampaignType');


                     if (CampaignType == "Point Reward Loyalty Card") {


                         isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;margin:0px;"><input type="text" readOnly value="' + parseInt(TTlMerchantPoint) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;<input type="text" readOnly value="*' + parseInt(TTlAyohaPoint) + ' A.Point" style="border: none;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:#666;text-align:left;background-color:transparent;"/></div>';
                     }

                     if (CampaignType == "Stamp Reward Loyalty Card") {
                        isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;margin:0px;"><input type="text" readOnly value="'+ parseInt(stampEntitled) +' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;<input type="text" readOnly value="*2 A.Point" style="border: none;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:#666;text-align:left;background-color:transparent;"/></div>';
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
                         isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;margin:0px;"><input type="text" readOnly value="? Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;<input type="text" readOnly value="*? A.Point" style="border: none;padding: 2px; width: 68px;height: 16px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:#666;text-align:left;background-color:transparent;"/></div>';
                     }



                     if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
                        isPoint = '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;margin:0px;"><input type="text" readOnly value="' + parseInt(TTlMerchantPoint) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 65px;height: 16px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;<input type="text" readOnly value="'+parseInt(stampEntitled)+' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 65px;height: 16px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;<input type="text" readOnly value="*' + parseInt(TTlAyohaPoint) + ' A.Point" style="border: none;padding: 2px; width: 55px;height: 16px;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;color:#666;text-align:left;background-color:transparent;"/></div>';
                     }


                     var _StockShowHide;
                     var Stock = record.get('Stock');
                     var ShowStock = record.get('ShowStock');


                     if (ShowStock == "Y") {
                         if (Stock > 0) {
                             _StockShowHide = '<span style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;color:#c800ffc9;">Stock: ' + Stock + '</span>';
                         } else {
                             _StockShowHide = '<span style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;color:red;">Out of Stock</span>';
                         }

                     } else {
                         _StockShowHide = '';
                     }




                     var ModifiedItemName;

                     if(ItemName){
                         if (ItemName.length >= 21) {
                             ModifiedItemName = ItemName.substring(0, 21) + '...';
                         }
                         if (ItemName.length <= 20) {
                             ModifiedItemName = ItemName;
                         }
                         
                         _value = '<div style="position:relative; background:white; border:1px solid #e0e0e0; border-radius:8px; padding:10px; box-sizing:border-box; min-height:320px; height:100%; display:flex; flex-direction:column;">' +
                                  '<div style="text-align:center; margin-bottom:8px; flex-shrink:0; height:150px; display:flex; align-items:center; justify-content:center;">' +
                                  '<img src="' + ItemCoverImg + '" style="max-width:100%; max-height:150px; width:auto; height:auto; border-radius:5px; object-fit:contain;" />' +
                                  '</div>' +
                                  '<div style="font-family:Arial, sans-serif; font-size:13px; font-weight:bold; color:#333; margin:5px 0px; text-align:left; flex-shrink:0;">' + row_num + '). ' + ModifiedItemName + '</div>' +
                                  '<div style="margin:5px 0px; flex-shrink:0;">' + isPrice + '</div>' +
                                  '<div style="margin:5px 0px; flex-shrink:0;">' + isPoint + '</div>' +
                                  '<div style="margin:5px 0px; text-align:right; flex-grow:1; display:flex; align-items:flex-end; justify-content:flex-end;">' + _StockShowHide + '</div>' +
                                  '</div>';
                     }else{
                         _value = '';
                     }
                    

                     return _value;
                 }
             },
      
        ]
    //}
});

// Check if dataview exists:

// Sepatutnya return number > 0