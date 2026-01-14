Ext.define('BuskartApp.model.AyohaNotification.AyohaNotificationModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
           'ID',
      'NotificationCode',
      'SubscriberAccNo',
      'AccountName',
      'IsRead',
      'ReadDate',
      'PlayerID',
      'EnterpriseRowStatus',
      'SentDate',
      'UserRowStatus',
      'EnterpriseAccNo',
      'EnterpriseHQAccNo',
      'MobilePhoneNo',
      'Counts',
      'SendStatus',
      'RowNumber',
      'NotificationTitle',
      'NotificationBody',
      'NotifcationImage',
      'NotificationFooterImage',
      'NotificationType',
      'NotificationMedium',
      'EnterpriseName',
      'EnterpriseLogoPath',
      'EnterpriseTagLine',
      'AdvertisementCode',
        {
            name: 'ModifiedIsRead',
            convert: function (value, record) {
       var _value;
       var IsReadStatus = record.get('IsRead');
       var ID = record.get('ID');
    if (IsReadStatus == "Y") {
        _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotification_DeleteNotification(' + ID + ')" class="buttonsHtmlBgDeleteNotificationListTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>';
    }
    if (IsReadStatus == "N") {
        _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/unreadNotification01.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>';
    }
   


    return _value
}
        },
              {
                  name: 'ModifiedNotification',
                  convert: function (value, record) {
                      var _value;
                      var IsReadStatus = record.get('IsRead');

                      var EnterpriseLogoPath = record.get('EnterpriseLogoPath');
                      var EnterpriseName = record.get('EnterpriseName');
                      var NotificationTitle = record.get('NotificationTitle');
                      var SentDate = record.get('SentDate');
                      var ID = record.get('ID');
                     var NotificationType= record.get('NotificationType');
                     var NotificationCode= record.get('NotificationCode');
                     var EnterpriseAccNo= record.get('EnterpriseAccNo');
                      if (IsReadStatus == "Y") {
                          _value = '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">' + EnterpriseName + '<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' + NotificationTitle + '<br>Date:' + SentDate + '</font></td></tr></table>';
                         
                      }
                      if (IsReadStatus == "N") {
                          _value = '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>' + EnterpriseName + '</b><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">' + NotificationTitle + '<br>Date:' + SentDate + '</font></td></tr></table>';
                      }

                      return _value
                  }
              },
              'EnterpriseAddress',
              'EnterprisePhoneNo',
              'EnterpriseWebsite',
              'EnterpriseFacebook',
              'EnterpriseTwiter',
              'EnterpriseInstagram',
              'EnterpriseCoordinate',

        ]
    }
});







