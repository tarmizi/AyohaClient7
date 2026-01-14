Ext.define('BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
      'EntitledVoucherStartDate',
      'EntitledVoucherEndDate',
      'EntitledVoucherStatus',
      'EntitledVoucherNote',
      'VoucherCode',
      'DayLeft',
      'MembershipCardCode',
      'VoucherName',
      'VoucherImgPath',
      'VoucherAmount',
      'VoucherTermAndCondition',
      'PaymentNo',
'OrderNo',
'EnterpriseName',
'EnterpriseLogo',
'Voucher_EnterpriseName',
'Voucher_EnterpriseLogo',
'ItemCartCode',
'TotalQuantity',
'EnterpriseTagLine',
'TotalStampEarn',
'PaymentAtEnterpriseAccNo',
'SearchCol',
'EnterpriseCountStar',
'TotalReviewer',
'BusinessMode',
'EnterpriseDescription',
'EnterpriseAccNo',
'MembershipCardFeePaymentCycle',
'SearchCol',
       {
           name: 'isThisVoucherUses',
           convert: function (value, record) {
               var _value;
               var EntitledVoucherStatus = record.get('EntitledVoucherStatus');
               var VoucherAmount = parseFloat(record.get('VoucherAmount'));
               var VoucherCode = record.get('VoucherCode');

               console.log("EntitledVoucherStatus:" + EntitledVoucherStatus);
               if (EntitledVoucherStatus == "ShoppingCart") {
                   //_value = '<input type="checkbox"  checked class="largerCheckbox" onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_OnChangeCheckbox (' + this + ',' + VoucherCode + ',' + VoucherAmount + ')" name="checkbox" />';
                   _value = 'checked';
               } else {
                   _value = '';
               }




               return _value;
           }
       },
           {
               name: 'VoucherUsedStatus',
               convert: function (value, record) {
                   var _value;
                   var EntitledVoucherStatus = record.get('EntitledVoucherStatus');

                   if (EntitledVoucherStatus == "Voucher_Used") {
                       _value = '<div style="width:100%;text-align:right;margin:-200px 0px 0px -20px;"><img src="resources/icons/UsedStampIcon.png" style="width:250px;height:250px"></div>';
                      // _value = 'Was Used Voucher';
                   } else {
                       _value = '<div style="width:100%;text-align:right;margin:-200px 0px 0px -20px;"><img src="resources/icons/transparentbox.png" style="width:250px;height:250px"></div>';
                   }

                   


                   return _value;
               }
           },
           {
            name: 'ButtonBottomDisplay',
            convert: function (value, record) {
             

             
        
              // text hari berbaki
              var Text = (DayLeft == null) ? '-' : (DayLeft < 0 ? 'Expired' : (DayLeft + ' days left'));          
                var VoucherName = record.get('VoucherName');
                var VoucherImgPath = record.get('VoucherImgPath');
                var EntitledVoucherEndDate = record.get('EntitledVoucherEndDate');
               // var DayLeft = getDaysLeft(EntitledVoucherEndDate);
                var DayLeft = record.get('DayLeft');
                var VoucherCode = record.get('VoucherCode');
                var VoucherAmount = record.get('VoucherAmount');
                var VoucherTermAndCondition = record.get('VoucherTermAndCondition');
                var MembershipCardCode = record.get('MembershipCardCode');
                var EnterpriseCountStar = record.get('EnterpriseCountStar');
                var EnterpriseAccNo = record.get('EnterpriseAccNo');
                var TotalReviewer = record.get('TotalReviewer');
          
                // Kemas dalam payload dan encode — SELAMAT untuk attribute HTML
                var payload = {
                  VoucherName,
                  VoucherImgPath,
                  EntitledVoucherEndDate,
                  DayLeft,
                  VoucherCode,
                  VoucherAmount,
                  VoucherTermAndCondition,
                  MembershipCardCode,
                  EnterpriseCountStar,
                  EnterpriseAccNo,
                  TotalReviewer
                };



               
                var encoded = encodeURIComponent(JSON.stringify(payload));
          
                // Tiada inline JS, tiada backtick; data disimpan dalam data-voucher
                return '' +
                  '<button type="button" class="voucher-btn" ' +
                  'data-voucher="' + encoded + '" ' +
                  'style="width:97%; background-image:linear-gradient(#ff00de75,#c800ffc9); background-color:#fac; color:white; border:none; padding:15px; border-radius:12px; font-size:14px; font-weight:bold; cursor:pointer; text-shadow:0 1px 1px rgba(0,0,0,0.2); box-shadow:0 4px 10px rgba(247,151,30,0.4); transition:transform 0.2s ease, box-shadow 0.2s ease;" ' +
                  'onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247,151,30,0.5)\'" ' +
                  'onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247,151,30,0.4)\'">' +
                  'View Membership Voucher' +
                  '</button>';
             
            }
          },
        ]
    }
});