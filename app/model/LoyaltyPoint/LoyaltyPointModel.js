Ext.define('BuskartApp.model.LoyaltyPoint.LoyaltyPointModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           'ID',
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'PointCode',
      'PointQrCode',
      'PointedBy',
      'PointedByDate',
      'PointedByPhoneModel',
      'PointedByUserAccNo',
      'PointedByPhoneSerialNo',
      'PointedByPhoneManufacturer',
      'PointedByPhonePlatform',
      'PointedByOneSignalID',
      'PointedByPhoneRawInfo',
      'RowStatus',
      'CountsPoint',
      'PointCampaignCode',
      'Batch',
      'PointClaimStatus',
      'Amount',
      'ReceiptBillID',
      'PointEquation',
      'SumPoint',
      'PointCampaignName',
      'PointedByDate_DateOnly',
      'PointedByDate_TimeOnly',
      'PointedByDate_MonthYear',
      'RowID',
      'TypeCRDB',
      'PointType',
       'JenisPoint',
      'ModifiedBy',
      'Month',
         {
             name: 'ModifiedTypeCRDB',
             convert: function (value, record) {
                 var _value;

                 var str = record.get('TypeCRDB');
                 var AyohaPoint = record.get('CountsPoint');
                 var JenisPoint = record.get('JenisPoint');
                 var ModifiedBy = record.get('ModifiedBy');
                 if (str == "Credit") {
                     //_value = '<font size=5 color=black><b>+</b>' + AyohaPoint + ' </font>'
                     _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right"><font size=5 color=black><b>+</b>' + AyohaPoint + ' </font></div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-30px 0px 0px 0px;text-align:right">Points</div>';
                     // return;
                 }

                 if (str == "Debit" && JenisPoint == "Cancel")  {
                   //  _value = '<font size=6 color=red><b>-</b><strike>' + AyohaPoint + ' </strike></font>'
                     _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-12px 0px 0px 0px;text-align:right"><font size=5 color=red><b>-</b><strike>' + AyohaPoint + ' </strike></font></div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-30px 0px 0px 0px;text-align:right;color:red">Points</div><br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;text-align:right;color:red">' + ModifiedBy + '</div>';
                 }
                
                 if (str == "Debit" && JenisPoint != "Cancel") {
                    // _value = '<font size=6 color=black><b>-</b>' + AyohaPoint + ' </font>'
                     _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right"><font size=5 color=black><b>+</b>' + AyohaPoint + ' </font></div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-30px 0px 0px 0px;text-align:right">Points</div>';
                 }

                 if (str == "Debit" && JenisPoint == "Redeem")  {
                    _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-12px 0px 0px 0px;text-align:right"><font size=5 color=red><b>-</b>' + AyohaPoint + '</font></div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-30px 0px 0px 0px;text-align:right;color:red">Points</div>';
                      //_value = '<div style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;word-break:normal;margin:-12px 0px 0px 0px;text-align:right"><font size=6 color=red><b>-</b>' + AyohaPoint + '</font></div><br><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-30px 0px 0px 0px;text-align:right;color:red">Points</div><br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:normal;margin:-20px 0px 0px 0px;text-align:right;color:red">' + ModifiedBy + '</div>';
                  }
                 return _value;
                 //var _value;

                 //var str = record.get('TypeCRDB');
                 //var AyohaPoint = record.get('CountsPoint');
                 //var ModifiedBy = record.get('ModifiedBy');
                 //if (str == "Credit") {
                 //    // _value = '<font size=2 color=black><b>+</b></font>' + AyohaPoint;
                 //    _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right"><font size=2 color=black><b>+</b></font>' + AyohaPoint + ' Point</div>';
                 //    // return;
                 //}

                 //if (str == "Debit") {
                 //    //  _value = '<font size=3 color=red><b>-</b></font> ' + AyohaPoint;
                 //    _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right;color:red"><font size=2 color=red><b>-</b></font><strike>' + AyohaPoint + ' Point</strike></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:-10px 0px 0px 0px;text-align:right;color:red">' + ModifiedBy + '</div>';
                 //}



                 //return _value;


             }
         },
             {
                 name: 'ModifiedTypeCRDBExtent',
                 convert: function (value, record) {
                     var _value;

                     var str = record.get('TypeCRDB');
                     var AyohaPoint = record.get('CountsPoint');
                     var ModifiedBy = record.get('ModifiedBy');
                     var JenisPoint = record.get('JenisPoint');
                     console.log(JenisPoint);


                     //if (str == "Credit") {
                     //    _value = '<div style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:center"><font size=2 color=black><b>+</b></font>' + AyohaPoint + '</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;text-align:center">Point</div>';
                     //   // _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right"><font size=2 color=black><b>+</b></font>' + AyohaPoint + ' Point</div>';
                     //    // return;
                     //}

                     //if (str == "Debit" && JenisPoint == "Cancel") {
                     //    _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right;color:red"><font size=4 color=black><b>-</b></font><strike>' + AyohaPoint + ' Point</strike></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;text-align:center;color:red">' + ModifiedBy + '</div>';

                     // //   _value = '<div style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:cente;color:redr"><font size=2 color=black><b>-</b></font><strike>' + AyohaPoint + 'Point</strike></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;text-align:center">Point</div>';
                     //}

                     //if (str == "Debit" && JenisPoint != "Cancel") {
                     //    //  _value = '<font size=3 color=red><b>-</b></font> ' + AyohaPoint;d
                     //    _value = '<div style="font-family:Arial, sans-serif;font-size:20px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:center"><font size=2 color=black><b>-</b></font>' + AyohaPoint + '</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;text-align:center">Point</div>';
                     //  //  _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:20px 0px 0px 0px;text-align:right;color:black"><font size=4 color=black><b>-</b></font>' + AyohaPoint + ' Point</div>';
                     //}


                     if (str == "Credit") {
                         // _value = '<font size=2 color=black><b>+</b></font>' + AyohaPoint;dddd10
                         _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right"><font size=2 color=black><b>+</b></font>' + AyohaPoint + ' Point</div>';
                         // return;
                     }

                     if (str == "Debit" && JenisPoint == "Cancel") {
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
             name: 'ModifiedReceiptBillID',
             convert: function (value, record) {
                 var _value;

                 var str = record.get('JenisPoint');
                 var ReceiptBillID = record.get('ReceiptBillID');
                 var ItemCode = record.get('ReceiptBillID').split('-');
                 var strItemCode=ItemCode[0];
                 if (str == "Earn") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Receipt/Bill No:' + ReceiptBillID + '</div>'

                     // return;
                 }

                 if (str == "Redeem") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Item Code:' + strItemCode + '</div>'
                 }


                 if (str == "Refund") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Item Code:' + strItemCode + '-(Rejected)</div>'
                 }
                 if (str == "Cancel") {
                     _value = '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;color:red">Receipt/Bill No:' + ReceiptBillID + '</div>'
                 }
                 return _value;


             }
         },
          {
              name: 'ModifiedAmount',
              convert: function (value, record) {
                  var _value;

                  var str = record.get('JenisPoint');
                  var Amount = record.get('Amount');
                 
                  if (str == "Earn") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">RM'+ Amount +'</div>'

                      // return;
                  }

                  if (str == "Redeem") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">Redemption</div>'
                  }

                  if (str == "Refund") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">Refund Point</div>'
                  }
                  if (str == "Cancel") {
                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;color:red">Point Cancelled By Merchant</div>'
                  }


                  return _value;


              }
          },
        ]
    }
});

//<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Receipt/Bill No:{ReceiptBillID}</div>