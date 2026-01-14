Ext.define('BuskartApp.model.AyohaMerchantReview.AyohaMerchantReviewModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
       'ID',
      'ReviewCode',
      'SubscriberAccNo',
      'EnterpriseAccNo',
      'StarReview',
      'ReviewText',
      'RowStatusMerchant',
      'RowStatusAyoha',
      'ReviewDate',
      'AccountName',
      'Photo',
         {
             name: 'ModifiedStarReview',
             convert: function (value, record) {
                 var _value;
                 var _CountStar;



                 _CountStar = record.get('StarReview');

                 if (_CountStar == 0) {
                     _value = 'No Rate';
                 } if (_CountStar == 1) {
                     _value = '<img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 1px 0px 0px">';

                 } if (_CountStar == 2) {
                     _value = '<img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"> <img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px">';
                 } if (_CountStar == 3) {
                     _value = '<img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"> <img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"><img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px">';
                 } if (_CountStar == 4) {
                     _value = '<img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"> <img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"><img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"><img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px">';
                 } if (_CountStar == 5) {
                     _value = '<img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"> <img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"><img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"><img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px"><img src="resources/icons/star.png" alt="Image" style="width:10px;height:10px;margin:0px 0px 0px 4px">';
                 }



                 return _value
             }
         },
           {
               name: 'ModifiedReviewTxt',
               convert: function (value, record) {
                   var _value;
                   



                   _value = record.get('ReviewText').replace(/\n/g, "<br>");

                   return _value
               }
           },

            {
                name: 'ModifiedBottomButton',
                convert: function (value, record) {
                    var _value;
                    var SubscriberAccNo;



                    SubscriberAccNo = record.get('SubscriberAccNo');
                   var  ID = record.get('ID');

                //  if (SubscriberAccNo == GetCurrAyohaUserAccountNo()) {
                //      _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:transparent;"><button OnClick="AyohaMerchantReviewLike(' + ID + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/like03.png" style="width: 23px; height: 23px; margin:10px 0px 0px -420px;" /><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;margin:-18px 0px 0px -375px;">12</div></button><button OnClick="AyohaMerchantReview_AddEditShow_Edit(' + ID + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/editReview.png" style="width: 23px; height: 23px; margin:10px 0px 0px 0px;" /></button></div>';
                //     } else {
                //      _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:transparent;"><button OnClick="AyohaMerchantReviewLike(' + ID + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/like03.png" style="width: 23px; height: 23px; margin:10px 0px 0px 50px;" /></button></div>';
                //     }

                    if (SubscriberAccNo == GetCurrAyohaUserAccountNo()) {
                        _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:transparent;"><button class="buttonsHtmlBgTransparent"><img src="resources/icons/transparentbox.png" style="width: 23px; height: 23px; margin:10px 0px 0px -420px;" /><div style="background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;margin:-18px 0px 0px -375px;"></div></button><button OnClick="AyohaMerchantReview_AddEditShow_Edit(' + ID + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/editReview.png" style="width: 23px; height: 23px; margin:10px 0px 0px 0px;" /></button></div>';
                       } else {
                        _value = '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:transparent;"><button class="buttonsHtmlBgTransparent"><img src="resources/icons/transparentbox.png" style="width: 23px; height: 23px; margin:10px 0px 0px 50px;" /></button></div>';
                       }

                 
                    return _value
                }
            },
        ]
    }
});







