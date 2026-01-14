Ext.define('BuskartApp.model.LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryModel', {
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
                 'EnterpriseAccNo',
                 'PointCampaignCode',
                    {
                        name: 'ModifiedRedeemHistoryStatus',
                        convert: function (value, record) {
                            var _value;
                            var _RedeemHistoryStatus;
                            var _RedeemHistoryStatusDate;



                            _RedeemHistoryStatus = record.get('RedeemHistoryStatus');
                            _RedeemHistoryStatusDate = record.get('RedeemHistoryStatusDate');

                            if (_RedeemHistoryStatus == "Submitted") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:orange;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';
                            }
                            if (_RedeemHistoryStatus == "Received") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:blue;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';
                            }
                            if (_RedeemHistoryStatus == "Approved") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:green;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            } if (_RedeemHistoryStatus == "Rejected") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:red;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            } if (_RedeemHistoryStatus == "Delivered") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:purple;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            } if (_RedeemHistoryStatus == "Accepted") {
                                _value = '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;color:black;">' + _RedeemHistoryStatus + ' - ' + _RedeemHistoryStatusDate + '</div>';

                            }



                            return _value
                        }
                    },

                    {
                        name: 'ModifiedItemCode',
                        convert: function (value, record) {
                            var _value;
                            var _ItemCode;
                           


                            _ItemCode = record.get('ItemCode');

                            _value = _ItemCode.split('-');


                            return _value[0]
                        }
                    },
        ]
    }
});







