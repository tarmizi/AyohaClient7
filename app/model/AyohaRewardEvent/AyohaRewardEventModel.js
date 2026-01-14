Ext.define('BuskartApp.model.AyohaRewardEvent.AyohaRewardEventModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'ID',
      'EventCode',
      'EventType',
      'EventName',
      'EventStartDate_Day',
      'EventStartDate_Month',
      'EventStartTime',
      'EventEndDate_Day',
      'EventEndDate_Month',
      'EventEndTime',
      'EventDescription',
      'EventCategoryCode',
      'EventLocationCoordinate',
      'EventLocationName',
      'EventCoverPhoto',
      'EventUrlTicket',
      'EnterpriseAccNo',
      'EventStatus',
      'RowStatus',
      'CreatedDate',
      'CreatedBy',
      'ModifiedBy',
      'ModifiedDate',
      'EnterpriseLogo',
      'EnterpriseName',
      'RespondStatus',
      'RespondStatus_IwillAttendCount',
      'RespondStatus_InterestedCount',
      'SearchCol',
      'isMember',
      {
          name: 'ModifiedWidth',
          convert: function (value, record) {
              var _value = parseInt(window.innerWidth) - 24;

              return _value;
          }
      },
        {
            name: 'ModifiedRespondStatus',
            convert: function (value, record) {
                var RespondStatus = record.get('RespondStatus');
                var EnterpriseAccNo = record.get('EnterpriseAccNo');
                var ID = record.get('ID');
                var EventCode = record.get('EventCode');
                var _value;

                _value = '<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-10px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ','+ID+')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>';

                if (RespondStatus == "IwillAttend") {
                    _value = '<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-10px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:bold;color:purple"><u>I Will Attend</u></div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;">Interested</div></div></div>'
                } if (RespondStatus == "Interested") {
                    _value = '<br><br><br><div style="width:100%;background-color:transparent;height:50px;margin:-10px 0px 0px 0px;"><div style="width: 50%; float:left; height:50px; background:white;text-align:center;font-size:12px;" onclick="FloatPanel_MerchantReward_MembershipEvent_IwillAttend(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/iwillattend02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div style="margin:0px 0px 0px 0px;font-weight:normal;">I Will Attend</div></div><div style="width:50%; float:left; height:50px; background:white;text-align:center;font-size:13px;" onclick="FloatPanel_MerchantReward_MembershipEvent_Interested(' + "'" + EnterpriseAccNo + "'" + ',' + "'" + EventCode + "'" + ',' + ID + ')"><img src="resources/icons/like02.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/><div  style="margin:0px 0px 0px 0px;font-weight:bold;color:purple"><u>Interested</u></div></div></div>';

                } 

                

                return _value;
            }
        },

        {
            name: 'ModifiedRespondStatusImg',
            convert: function (value, record) {
                var RespondStatus = record.get('RespondStatus');
               
                var _value;

                _value = '<img src="resources/icons/transparentbox.png" style="width:20px;height:20px;margin:0px 20px 0px 0px;"/>';
                if (RespondStatus == "IwillAttend") {
                    _value = '<img src="resources/icons/iwillattend01.png" style="width:20px;height:20px;margin:0px 20px 0px 0px;"/>';
                } if (RespondStatus == "Interested") {
                    _value = '<img src="resources/icons/like02.png" style="width:20px;height:20px;margin:0px 20px 0px 0px;"/>';

                }



                return _value;
            }
        },
        ]
    }
});
