Ext.define('BuskartApp.model.AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'ID',
                 'ItemCode',
                 'RedeemHistoryCode',
                 'RedeemHistoryStatus',
                 'RedeemHistoryStatusBy',
                 'RedeemHistoryStatusDate',
                 'RedeemPoint',
                 'Remarks',
                 'RowStatus',
                 'ImgPath',
                 'ItemName',
                 'RowNumber',
                 'ItemPrizePriceCost',
                    {
                        name: 'ModifiedRedeemHistoryStatus',
                        convert: function (value, record) {
                            var _value;
                            var _RedeemHistoryStatus;
                            var _RedeemHistoryStatusDate;
                        


                            _RedeemHistoryStatus = record.get('RedeemHistoryStatus');
                            _RedeemHistoryStatusDate = record.get('RedeemHistoryStatusDate');

                            if (_RedeemHistoryStatus == "Submitted") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:orange;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';
                            }
                            if (_RedeemHistoryStatus == "Cancel") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:red;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';
                            }
                            if (_RedeemHistoryStatus == "Approved") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:green;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            } if (_RedeemHistoryStatus == "Rejected") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:red;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            } if (_RedeemHistoryStatus == "Delivered") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:purple;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            } if (_RedeemHistoryStatus == "Accepted") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:blue;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            }



                            return _value
                        }
                    },
                          {
                              name: 'ButtonBottomHistoryStatus',
                              convert: function (value, record) {
                                  var _value;
                                  var _RedeemHistoryStatus;
                                  var _ID;



                                  _RedeemHistoryStatus = record.get('RedeemHistoryStatus');
                                  _ID = record.get('ID');

                                  _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonAyohaRedemptionHistoryStatus" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow(' + _ID + ')">View Redeem Status Log</button></div>';
                                  if (_RedeemHistoryStatus == "Submitted") {
                                      _value = '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonAyohaRedemptionHistoryCancel" onClick="FloatPanel_AyohaPointRedemptionCancelShow(' + _ID + ')">Cancel</button>&nbsp;&nbsp;&nbsp;<button class="buttonAyohaRedemptionHistoryStatus" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow(' + _ID + ')">View Redeem Status Log</button></div>';
                                  }
                                



                                  return _value
                              }
                          },
        ]
    }
});







