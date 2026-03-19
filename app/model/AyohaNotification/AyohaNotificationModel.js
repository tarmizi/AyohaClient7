Ext.define('BuskartApp.model.AyohaNotification.AyohaNotificationModel', {
    extend: 'Ext.data.Model',
   // config: {
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
    name: 'ModifiedNotificationCard',
    convert: function (value, record) {

        var IsReadStatus      = record.get('IsRead') || 'N';
        var EnterpriseLogoPath = record.get('EnterpriseLogoPath') || 'resources/icons/giftBoxNotification.png';
        var EnterpriseName    = record.get('EnterpriseName') || '';
        var NotificationTitle = record.get('NotificationTitle') || '';
        var SentDate          = record.get('SentDate') || '';
        var ID                = record.get('ID') || 0;
        var NotificationType  = record.get('NotificationType') || '';
        var NotificationCode  = record.get('NotificationCode') || '';
        var EnterpriseAccNo   = record.get('EnterpriseAccNo') || '';

        var rightIcon = '';
        var nameWeight = 'font-weight:normal;';
        var titleWeight = 'font-weight:normal;';

        if (IsReadStatus === 'N') {
            nameWeight = 'font-weight:bold;';
            titleWeight = 'font-weight:bold;';

            rightIcon =
                '<div style="width:34px;min-width:34px;display:flex;align-items:center;justify-content:center;">' +
                    '<img src="resources/icons/unreadNotification01.png" style="width:23px;height:23px;display:block;" />' +
                '</div>';
        } else {
            rightIcon =
                '<div style="width:34px;min-width:34px;display:flex;align-items:center;justify-content:center;">' +
                    '<button onclick="event.stopPropagation();FloatPanel_AyohaNotification_DeleteNotification(' + ID + ')" style="background:transparent;border:none;padding:0;margin:0;cursor:pointer;">' +
                        '<img src="resources/icons/DeletePurple.png" style="width:23px;height:23px;display:block;" />' +
                    '</button>' +
                '</div>';
        }

        return '' +
            '<div onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')" ' +
                 'style="width:100%;box-sizing:border-box;background:#ffffff;padding:12px 14px;border-bottom:1px solid #f1f1f1;display:flex;align-items:center;justify-content:space-between;gap:10px;">' +

                '<div style="width:78px;min-width:78px;display:flex;align-items:center;justify-content:center;">' +
                    '<img src="' + EnterpriseLogoPath + '" style="width:62px;height:62px;object-fit:contain;display:block;border:1px solid transparent;" />' +
                '</div>' +

                '<div style="flex:1;min-width:0;">' +
                    '<div style="font-family:Arial,sans-serif;font-size:14px;line-height:18px;color:#000;' + nameWeight + 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' +
                        EnterpriseName +
                    '</div>' +

                    '<div style="font-family:Arial,sans-serif;font-size:12px;line-height:17px;color:#000;margin-top:2px;' + titleWeight + 'word-break:break-word;">' +
                        NotificationTitle +
                    '</div>' +

                    '<div style="font-family:Arial,sans-serif;font-size:11px;line-height:16px;color:#111;margin-top:2px;font-weight:bold;">' +
                        'Date:' + SentDate +
                    '</div>' +
                '</div>' +

                rightIcon +

            '</div>';
    }
},
//         {
//             name: 'ModifiedIsRead',
//             convert: function (value, record) {
//        var _value;
//        var IsReadStatus = record.get('IsRead');
//        var ID = record.get('ID');
//     if (IsReadStatus == "Y") {
//         _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotification_DeleteNotification(' + ID + ')" class="buttonsHtmlBgDeleteNotificationListTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>';
//     }
//     if (IsReadStatus == "N") {
//         _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/unreadNotification01.png" style="width: 23px; height: 23px; margin:0px 0px 0px 20px;" /></button></div>';
//     }
   


//     return _value
// }
//         },
//               {
//                   name: 'ModifiedNotification',
//                   convert: function (value, record) {
//                       var _value;
//                       var IsReadStatus = record.get('IsRead');

//                       var EnterpriseLogoPath = record.get('EnterpriseLogoPath');
//                       var EnterpriseName = record.get('EnterpriseName');
//                       var NotificationTitle = record.get('NotificationTitle');
//                       var SentDate = record.get('SentDate');
//                       var ID = record.get('ID');
//                      var NotificationType= record.get('NotificationType');
//                      var NotificationCode= record.get('NotificationCode');
//                      var EnterpriseAccNo= record.get('EnterpriseAccNo');
//                       if (IsReadStatus == "Y") {
//                           _value = '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">' + EnterpriseName + '<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' + NotificationTitle + '<br>Date:' + SentDate + '</font></td></tr></table>';
                         
//                       }
//                       if (IsReadStatus == "N") {
//                           _value = '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>' + EnterpriseName + '</b><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">' + NotificationTitle + '<br>Date:' + SentDate + '</font></td></tr></table>';
//                       }

//                       return _value
//                   }
//               },
              'EnterpriseAddress',
              'EnterprisePhoneNo',
              'EnterpriseWebsite',
              'EnterpriseFacebook',
              'EnterpriseTwiter',
              'EnterpriseInstagram',
              'EnterpriseCoordinate',

        ]
   // }
});







