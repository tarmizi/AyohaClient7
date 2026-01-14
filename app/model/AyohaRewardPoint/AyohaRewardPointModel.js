Ext.define('BuskartApp.model.AyohaRewardPoint.AyohaRewardPointModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
       'ID',               
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'CreatedBy',
      'CreatedByAccNo',
      'CreatedDate',
      'JenisPoint',
      'RowStatus',
      'AyohaPoint',
      'CampaignCode',
      'MembershipCardCode',
      'GUIDRow',
      'AyohaPointType',
      'RowID',
      'CreatedDate_DateOnly',
      'CreatedDate_TimeOnly',
      'CreatedDate_MonthYear',
      'CampaignName',
      'EnterpriseName',
      'TypeCRDB',      
      'ModifiedBy',
      'AyohaPointRedemptionItem',
      'ModifiedDateTime',
      'Month',
      'ItemCartCode',
      'MembershipCardCode_AyohaStore_Order',
      'OrderNo',
      'TotalStampEarn',
      'EnterpriseAddress',
      'EnterpriseTagLine',
      {
          name: 'ModifiedTypeCRDB',
          convert: function (value, record) {
              var _value;

              var str = record.get('TypeCRDB');
              var AyohaPoint = record.get('AyohaPoint');
              var ModifiedBy = record.get('ModifiedBy');
              var JenisPoint = record.get('JenisPoint');
              var AyohaPointRedemptionItem = record.get('AyohaPointRedemptionItem');
              var CreatedDate_DateOnly = record.get('CreatedDate_DateOnly');
              var CreatedDate_TimeOnly = record.get('CreatedDate_TimeOnly');
              var ModifiedDateTime = record.get('ModifiedDateTime');
              var CampaignCode = record.get('CampaignCode');
              var RedeemHistoryCode = record.get('GUIDRow');
             
              if (str == "Credit") {
                 // _value = '<font size=2 color=black><b>+</b></font>' + AyohaPoint;
                  _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;text-align:right"><font size=2 color=black><b>+</b></font>' + AyohaPoint + ' Point</div>';
                
                  if (CampaignCode == "AyohaPointRedemptionCancel") {

                      var nameArr = AyohaPointRedemptionItem.split(',');

                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;text-align:right;color:black"><font size=4 color=black><b>+</b></font>' + AyohaPoint + ' Point</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;text-align:right;color:black">Point Refund</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-13px 0px 0px 0px;text-align:right;color:black;">' + CreatedDate_DateOnly + ' ' + CreatedDate_TimeOnly + '</div>';

                  }
                  if (CampaignCode == "001-AP_CheckIn") {

                    _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;text-align:right"><font size=2 color=black><b>+</b></font>' + AyohaPoint + ' Point</div>';

                }

              }

              if (str == "Debit") {
                  //  _value = '<font size=3 color=red><b>-</b></font> ' + AyohaPoint;
                 // _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right;color:red"><font size=2 color=red><b>-</b></font><strike>' + AyohaPoint + ' Point</strike></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-10px 0px 0px 0px;text-align:right;color:red">' + ModifiedBy + '</div>';
                  _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;text-align:right;color:red"><font size=4 color=red><b>-</b></font><strike>' + AyohaPoint + ' Point</strike></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;text-align:right;color:red">' + ModifiedBy + '</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-13px 0px 0px 0px;text-align:right;color:red;">' + ModifiedDateTime + '</div>';
                  if (CampaignCode == "AyohaPointRedemption") {

                      var nameArr = AyohaPointRedemptionItem.split(',');

                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;text-align:right;color:black"><font size=4 color=black><b>-</b></font>' + AyohaPoint + ' Point</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;text-align:right;color:black">' + nameArr[4] + '-' + RedeemHistoryCode + '</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-13px 0px 0px 0px;text-align:right;color:black;">' + CreatedDate_DateOnly + ' ' + CreatedDate_TimeOnly + '</div>';

                  }

              }
        
                

              return _value;


          }
      },
         {
             name: 'ModifiedTypeCRDBExtent',
             convert: function (value, record) {
                 var _value;

                 var str = record.get('TypeCRDB');
                 var AyohaPoint = record.get('AyohaPoint');
                 var ModifiedBy = record.get('ModifiedBy');
                 var JenisPoint = record.get('JenisPoint');
                 if (str == "Credit") {
                     // _value = '<font size=2 color=black><b>+</b></font>' + AyohaPoint;dddd10
                     _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right"><font size=2 color=black><b>+</b></font>' + AyohaPoint + ' Point</div>';
                     // return;
                 }

                 if (str == "Debit" && JenisPoint=="Cancel") {
                     //  _value = '<font size=3 color=red><b>-</b></font> ' + AyohaPoint;
                     _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right;color:red"><font size=2 color=red><b>-</b></font><strike>' + AyohaPoint + ' Point</strike></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-25px 0px 0px 0px;text-align:right;color:red">' + ModifiedBy + '</div>';
                 }

                 if (str == "Debit" && JenisPoint != "Cancel") {
                     //  _value = '<font size=3 color=red><b>-</b></font> ' + AyohaPoint;d
                     _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:20px 0px 0px 0px;text-align:right;color:black"><font size=4 color=black><b>-</b></font>' + AyohaPoint + ' Point</div>';
                 }

                 return _value;


             }
         },
       {
           name: 'ModifiedCreatedDate_DateOnly',
           convert: function (value, record) {
               var _value;

               var str = record.get('JenisPoint');
               var CreatedDate_DateOnly = record.get('CreatedDate_DateOnly');
               var AyohaPointRedemptionItem = record.get('AyohaPointRedemptionItem');
               var CampaignCode = record.get('CampaignCode');
               var RedeemHistoryCode = record.get('GUIDRow');
               var strCampaignCode;
               if (CampaignCode) {
                   strCampaignCode = CampaignCode.includes("Ayoha");
               }
              
               if (str == "Cancel" && strCampaignCode==false) {
                   _value = '<font color=red>' + CreatedDate_DateOnly + '</font>'
                   return _value;

                   // return;
               }
               if (str == "Point" && CampaignCode == "AyohaPointRedemption") {
                   var nameArr = AyohaPointRedemptionItem.split(',');
                   //_value = '<font color=purple class=blink_me><u>' + nameArr[0] + '-' + RedeemHistoryCode + '</u></font>'
                   _value = '<font color=purple class=blink_me><u>' + nameArr[0] + '</u></font><br><div style="margin:0px 0px 0px 0px"><font color=purple >Redeem Code:' + RedeemHistoryCode + '</font></div>';
                   return _value;

                   // return;
               }
               //if (str == "Point" && CampaignCode == "AyohaPointToken-eWalletOpeningAccount") {
               //  //  var nameArr = AyohaPointRedemptionItem.split(',');
               //    //_value = '<font color=purple class=blink_me><u>' + nameArr[0] + '-' + RedeemHistoryCode + '</u></font>'
               //    _value = '<font color=purple class=blink_me><u>Ayoha Point Token</u></font><br><div style="margin:0px 0px 0px 0px"><font color=purple >eWallet Opening Account</font></div>';
               //    return _value;

               //    // return;
               //}
               if (str == "Point" && CampaignCode == "AyohaPointRedemptionCancel") {
                   var nameArr = AyohaPointRedemptionItem.split(',');
                   // _value = '<font color=red><strike>' + nameArr[0] + '-' + RedeemHistoryCode +'</strike></font>'
                   _value = '<font color=red><strike>' + nameArr[0] + '</strike></font><br><div style="margin:0px 0px 0px 0px"><font color=red >Redeem Code:' + RedeemHistoryCode + '</font></div>';
                   return _value;

                   // return;
               }


               else {
                   _value = '<font color=black>' + CreatedDate_DateOnly + '</font>'
                   return _value;
               }



           }
       },
        {
            name: 'ModifiedCreatedDate_TimeOnly',
            convert: function (value, record) {
                var _value;

                var str = record.get('JenisPoint');
                var CreatedDate_TimeOnly = record.get('CreatedDate_TimeOnly');
                var CampaignCode = record.get('CampaignCode');
                var strCampaignCode;




                if (CampaignCode) {
                    strCampaignCode = CampaignCode.includes("Ayoha");
                }
                if (str == "Cancel" && strCampaignCode == false) {
                    _value = '<font color=red>' + CreatedDate_TimeOnly + '</font>'
                    return _value;

                    // return;
                }
                if (str == "Point" && strCampaignCode == true) {
                    _value = '<font color=white>.</font>'

                    if (CampaignCode == "AyohaPointGreetingPoint") {
                        _value = '<font color=black>' + CreatedDate_TimeOnly + '</font>'

                    }


                    return _value;

                    // return;
                }
                if (str == "Point" && strCampaignCode == true) {
                    _value = '<font color=white>.</font>'

                    if (CampaignCode == "AyohaPointToken-eWalletOpeningAccount") {
                        _value = '<font color=black>' + CreatedDate_TimeOnly + '</font>'

                    }


                    return _value;

                    // return;
                }
                else {
                    _value = '<font color=black>' + CreatedDate_TimeOnly + '</font>'
                    return _value;
                }



               


            }
        },
         {
             name: 'ModifiedEnterpriseName',
             convert: function (value, record) {
                 var _value;

                 var str = record.get('JenisPoint');
                 var EnterpriseName = record.get('EnterpriseName');
                 var CampaignCode = record.get('CampaignCode');
                 var CreatedBy = record.get('CreatedBy');
                 var strCampaignCode;
                 var OrderNo = record.get('OrderNo');
                 if (CampaignCode) {
                     strCampaignCode = CampaignCode.includes("Ayoha");
                 }
                 var method="";



                 
                 if (OrderNo) {
                    _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;color:black">' + EnterpriseName + '</div>'
                 } else {
                   // method = "-<img src=resources/icons/Logo/LogoOrangeSimplifed.png width=25 height=20 alt=Company Name><font size=1 color=black>-Complementary Point</font>";

                     if (str == "Point") {
                         method = "-<img src=resources/icons/StampLoyaltyCard.png width=25 height=20 alt=Company Name>";
                     }
                     if (str == "Stamp" && CreatedBy !="Auto-PaidOnline" ) {
                         method = "-<img src=resources/icons/scanQrCodePurple.png width=25 height=20 alt=Company Name><font size=1 color=black>-QR Code digital Stamp</font>";
                     }
                     if (str == "Stamp" && CreatedBy =="Auto-PaidOnline" ) {
                        method = "-<img src=resources/icons/Logo/LogoOrangeSimplifed.png width=25 height=20 alt=Company Name><font size=1 color=black>-Complementary Point</font>";
                    }
                 }
                 _value = _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:-1px 0px 0px 0px;color:black">' + EnterpriseName +  method + '</div>'

                 if (str == "Cancel") {
                 //    _value = '<font color=red>' + EnterpriseName + '</font>';

                     _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;color:red">' + EnterpriseName + '</div>'
                    
                 } else
                 {
                     if (EnterpriseName == "Ayoha-Reward.Com") {
                         //  _value = '<font color=purple>' + EnterpriseName + '</font>';
console.log(CampaignCode);

                         if (CampaignCode == "AyohaPointRedemption" || CampaignCode == "AyohaPointRedemptionCancel") {
                             //  _value = '<font color=purple>' + EnterpriseName + '</font>';
                             _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:10px 0px 0px 0px;color:black">' + EnterpriseName + '</div>'



                         }
                         if (CampaignCode == "AyohaPointGreetingPoint") {
                             //  _value = '<font color=purple>' + EnterpriseName + '</font>';
                             _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;color:black">' + EnterpriseName + '</div>'



                         }
                         if (CampaignCode == "AyohaPointToken-eWalletOpeningAccount") {
                            //  _value = '<font color=purple>' + EnterpriseName + '</font>';
                            _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;color:black">' + EnterpriseName + '</div>'



                        }
                        


                     }

                 }
                 

                 //if (str == "Point") {
                 //    _value = '<font color=black>' + EnterpriseName + '</font>';
                     
                   
                 //    // return;
                 //}
                 //if (str == "Stamp") {
                 //    _value = '<font color=black>' + EnterpriseName + '</font>';
                   
                 //}


                 //console.log(str);
                 return _value;
              

              


             }
         },
         {
            name: 'ModifiedMembershipCardName',
            convert: function (value, record) {
                var _value;

              
                var MembershipCardName = record.get('MembershipCardName');
                var CampaignCode = record.get('CampaignCode');
                if (CampaignCode == "AyohaPointGreetingPoint") {
                    _value= "Opening Ayoha Account!-<img src=resources/icons/Logo/LogoOrangeSimplifed.png width=25 height=20 alt=Company Name>"
                    return _value;

                }if (CampaignCode == "AyohaPointToken-eWalletOpeningAccount") {
                    _value= "Ayoha eWalllet Account!-<img src=resources/icons/AyohaeWallet02.png width=25 height=20 alt=Company Name>"
                   // _value= "Ayoha eWalllet Account"
                    return _value;

                }if (CampaignCode == "001-AP_CheckIn") {
                    _value= "Ayoha Merchant Check-In Point"
                    return _value;

                }


                
                else
                {
                    _value= MembershipCardName;
                    return _value;
                }

                


            }
        },





       'AccountName',
      'Photo',
       'JoinDate_DateOnly',
      'JoinDate_TimeOnly',
      'AyohaPoint_Yearly',
      'PaymentNo',
        'EnterpriseLogo',
      'PointAmountEquation',
       'PaymentAmount',
      'PaymentNoDisplay',
      'OrderNo',
      'MembershipCardImg',
      'MembershipCardName',
      'PaymentNote'
        ]
    }
});







