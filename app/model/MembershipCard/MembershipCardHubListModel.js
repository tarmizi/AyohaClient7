Ext.define('BuskartApp.model.MembershipCard.MembershipCardHubListModel', {
    extend: 'Ext.data.Model',
   
        fields: [
                 'ID',
      'MembershipCardCode',
      'EnterpriseAccNo',
      'MembershipCardFee',
      'MembershipCardType',
      'RowStatus',
      'ExpiredDate',
      'MembershipCardBackgroundImg',
      'CreatedDate',
      'CreatedBy',
      'StartDate',
      'MembershipCardName',
      'MembershipCardFeePaymentCycle',
      'StrExpiredDate',
      'isValidLifeTime',
      'ModifiedBy',
      'ModifiedDate',
       'AyohaUserAccountName',
      'AyohaUserAccountNo',
      'AyohaUserPhoto',
      'EnterprisesName',
      'EnterprisesLogo',
      'EnterpriseAddress',
      'EnterpriseType',
      'BusinessTypeIconPath',
      'BusinessTypeGroup',
      'MembershipNo',
      'ValidUntilDateMonthYearOnly',
      'isMembershipCardSubscribed',
      'MembershipApprovalStatus',
      'MembrshipApprovalDate',
        'MembershipCardBackgroundImgName_back',
      'MembershipCardBackgroundImg_back',
      'MembershipCardPoint',
      'LoyaltCampaignCount',
      'CountReviewer',
      'CountStar',
      'ValidUntilDate',
      'MembershipDate',
      'TodayCheckInCount',
      'MembershipStartDate',
      'MembershipStartDate_MonthYearOnly',
      'MembershipSince',
       'EnterpriseMode',
      'Bandar',
      'Negeri',
      {
        name: 'ModifiedTodayCheckInCount',
        convert: function (value, record) {

            var _value;
            var TodayCheckInCount = record.get('TodayCheckInCount');
            var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

            if (isMembershipCardSubscribed == "YES") {
                if (TodayCheckInCount == 0) {
                    _value = '<div class="ayohaPillCheckin0">Today Check-In: <b>0</b></div>';
                    return _value;
                }else
                if (TodayCheckInCount > 0) {
    
                    _value = '<div class="ayohaPillCheckin">Today&#39;s Check-In: <b>'+TodayCheckInCount+'</b></div>';
                    return _value;
    
                }
            }
           






           
        }
    },
      {
        name: 'ModifiedMembershipDate',
        convert: function (value, record) {

            var _value;
            var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

            if (isMembershipCardSubscribed == "YES") {
                _value = record.get('MembershipDate');
            }
            if (isMembershipCardSubscribed == "NO") {

                _value = 'Upon Approval';

            }






            return _value;
        }
    },
    {
        name: 'ModifiedAyohaUserAccountName',
        convert: function (value, record) {

            var _value;
            var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

            if (isMembershipCardSubscribed == "YES") {
                _value = record.get('AyohaUserAccountName');
            }
            if (isMembershipCardSubscribed == "NO") {

                _value = 'YOUR NAME';

            }






            return _value;
        }
    },
    {
        name: 'ModifiedEnterpriseMode',
        convert: function (value, record) {

            var _value;
            var EnterpriseMode = record.get('EnterpriseMode');

            if (EnterpriseMode == "Online") {
                _value ='Use online';
            }
             if (EnterpriseMode == "Online&InPremise") {
                _value = 'Use online & in-store';
            }
            if (EnterpriseMode == "InPremise") {

                _value = 'Use in-store only';

            }






            return _value;
        }
    },
    {
        name: 'ModifiedMembershipNo',
        convert: function (value, record) {

            var _value;
            var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

            if (isMembershipCardSubscribed == "YES") {
                _value = record.get('MembershipNo');
            }
            if (isMembershipCardSubscribed == "NO") {

                _value = '123 4567 89';

            }






            return _value;
        }
    },
    {
        name: 'ModifiedValidUntilDate',
        convert: function (value, record) {

            var _value;
            var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

            if (isMembershipCardSubscribed == "YES") {
                _value = record.get('ValidUntilDate');
            }
            if (isMembershipCardSubscribed == "NO") {

                _value = '00/00';

            }






            return _value;
        }
    },
      {
        name: 'isLoadMore',
        type: 'boolean',
        defaultValue: false // This is important!
    },
      {
        name: 'ModifiedEnterpriseAddress',
        convert: function (value, record) {

            var _value;
            var str = record.get('EnterpriseAddress');

            var address = str;
            if(address){
                _value = address.replaceAll(",", "<br>");
            }else{
                _value='NA';
            }
    



            return _value;
        }
    },
    {
        name: 'ModifiedMembershipCardFee',
        convert: function (value, record) {

            var _value;
            var str = record.get('MembershipCardFeePaymentCycle');

            var address = str;
            if(str=="FOC"){
                _value ="0.00";
            }else{
                _value=record.get('MembershipCardFee');
            }
    



            return _value;
        }
    },

  {
        name: 'ModifiedMembershipCardFeeRenderBadge',
        convert: function (value, record) {

            var _value;
            var str = record.get('MembershipCardFeePaymentCycle');

         
            if(str=="FOC"){
               return '<div class="membershipFeeBadge membershipFeeBadgeFree">FREE</div>';
            }else{
               
                  return '<div class="membershipFeeBadge membershipFeeBadgePaid">'+str+'</div>';
            }
    



          
        }
    },
      {
        name: 'ModifiedCountStarCountStar',
        convert: function (value, record) {
            var _value;
            var RateReviews;



            RateReviews = parseFloat(record.get('CountStar'));

            if (RateReviews == 5) {
                _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

            }
            if ((RateReviews >= 4) && (RateReviews < 5)) {
                _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';


                if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {
                   // _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;"></div>';
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 4.5) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';
                    
                }
                if (RateReviews == 4.9) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }



            }
            if ((RateReviews >= 3) && (RateReviews < 4)) {
                _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 3.5) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 3.9) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }



            }
            if ((RateReviews >= 2) && (RateReviews < 3)) {
                _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 2.5) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 2.9) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }





            }
            if ((RateReviews >= 1) && (RateReviews < 2)) {
                _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 1.5) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }
                if (RateReviews == 1.9) {
                    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

                }

            }
            if ((RateReviews >= 0) && (RateReviews < 1)) {
                _value = '<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

            }













//             if (_CountStar == 0) {
//                 _value = 'No Rate';
//             } if (_CountStar == 1) {
//                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';

//             } if (_CountStar == 2) {
//                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
//             } if (_CountStar == 3) {
//                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
//             } if (_CountStar == 4) {
//                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
//             } if (_CountStar == 5) {
//                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
//             }



            return _value
        }
    } , 
    
    
    {
    name: 'ModifiedBandar',
    convert: function (value, record) {
        var bandar = record.get('Bandar') || '';
        var maxLength = 20;

        return bandar.length > maxLength
            ? bandar.substring(0, maxLength) + '..'
            : bandar;
    }
},
   {
    name: 'ModifiedNegeri',
    convert: function (value, record) {
        var negeri = (record.get('Negeri') || '').trim();
        var maxLength = 15;

        if (!negeri) {
            return '';
        }

        negeri = negeri
            .replace(/Wilayah Persekutuan/gi, 'WP')
            .replace(/Kuala Lumpur/gi, 'K.L')
            .replace(/Putrajaya/gi, 'P.Jaya')
             .replace(/Putra Jaya/gi, 'P.Jaya')
            .replace(/\s+/g, ' ')
            .trim();

        return negeri.length > maxLength
            ? negeri.substring(0, maxLength) + '..'
            : negeri;
    }
},
{
    name: 'ModifiedEnterprisesNameDesignOneTwo',
    convert: function (value, record) {

        var str = (record.get('EnterprisesName') || '').trim();
        var limit = 16;
        var shortName = '';

        if (!str) {
            return '';
        }

        shortName = str.length > limit ? str.substring(0, limit) + '..' : str;

        return '<div style="margin:0;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;overflow:hidden;padding:0;text-align:left;vertical-align:top;color:white;width:92%;white-space:nowrap;text-overflow:ellipsis;display:block;">'
            + shortName.toUpperCase() +
            '</div>';
    }
},

//         {
//     name: 'ModifiedEnterprisesNameDesignOneTwo',
//     convert: function (value, record) {

//         var str = record.get('EnterprisesName') || '';
//         var shortName = '';

//         if (str) {
//             shortName = str.length > 12 ? str.substring(0, 12) + '..' : str;

//             return '<div style="margin:0;font-family:Arial,sans-serif;font-size:10px;font-weight:bold;overflow:hidden;padding:0;text-align:left;vertical-align:top;color:white;width:92%;white-space:nowrap;text-overflow:ellipsis;display:block;">'
//                 + shortName.toUpperCase() +
//                 '</div>';
//         }

//         return '';
//     }
// }
            
            // ORI 1/11/2025 {
            //     name: 'ModifiedEnterprisesLogo',
            //     convert: function (value, record) {

            //         var _value;
            //         var str = record.get('EnterprisesName');
            //         var logo = record.get('EnterprisesLogo');
            //       if(str){
            //         if (str.length <= 13) {
            //             _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-28px 0px 0px 0px">';
            //             console.log(str.length);
            //             return _value;
            //         }
            //         if (str.length >= 14) {
            //             _value = '<img src="' + logo + '" alt="Image" style="width:60px;height:60px;border-radius: 50%;border: 1px solid white;margin:-28px 0px 0px 0px">';
            //             console.log(str.length);
            //             return _value;
            //         }
            //       }else{
            //         return 'NA';
            //       }
                   



            //     }
            // } ,
            
            {
                name: 'ModifiedEnterprisesLogo',
                convert: function (value, record) {



   var _value;
                 
                    var logo = record.get('EnterprisesLogo');
                  if(logo){
                
                        _value = '<img src="' + logo + '" alt="Image" style="width:50px;height:50px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                      //  console.log(str.length);
                        return _value;
                  
                  }else{
                    return 'NA';
                  }




                //     var _value;
                //     var str = record.get('EnterprisesName');
                //     var logo = record.get('EnterprisesLogo');
                //   if(str){
                //     if (str.length <= 13) {
                //         _value = '<img src="' + logo + '" alt="Image" style="width:50px;height:50px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                //         console.log(str.length);
                //         return _value;
                //     }
                //     if (str.length >= 14) {
                //         _value = '<img src="' + logo + '" alt="Image" style="width:50px;height:50px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                //         console.log(str.length);
                //         return _value;
                //     }
                //   }else{
                //     return 'NA';
                //   }
                   



                }
            },
            
            
            
            {
                name: 'ModifiedEnterprisesLogoDesignOneTwo',
                convert: function (value, record) {

                    var _value;
                 
                    // var logo = record.get('EnterprisesLogo');
                  
                 
                    //     _value = '<img src="' + logo + '" alt="Image" style="width:32px;height:32px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                    //     //console.log(str.length);
                    //     return _value;
                  

                    //     var _value;
                        var str = record.get('EnterprisesName');
                        var logo = record.get('EnterprisesLogo');
                      

                        if(str){

                            _value = '<img src="' + logo + '" alt="Image" style="width:32px;height:32px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                            return _value;
                            // if (str.length <= 16) {
                            //     _value = '<img src="' + logo + '" alt="Image" style="width:32px;height:32px;border-radius: 50%;border: 1px solid white;margin:-12px 0px 0px 0px">';
                            //   //  console.log(str.length);
                            //     return _value;
                            // }
                            // if (str.length >= 17) {
                            //     _value = '<img src="' + logo + '" alt="Image" style="width:32px;height:32px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                            //   //  console.log(str.length);
                            //     return _value;
                            // }
                        }else{
                            return 'NA';
                          }
                           
                       
    



                }
            }
 

//               , {
//                   name: 'ModifiedHeaderHeight',
//                   convert: function (value, record) {

//                       var _value;
//                       var str = record.get('EnterprisesName');
// if(str){
//     if (str.length <= 16) {
//         //_value = 'height:65px';
//         _value = 'height:50px';
//         console.log(str.length);
//         return _value;
//     }
//     if (str.length >= 17) {
//         //_value = 'height:80px';
//         _value = 'height:63px';
//         console.log(str.length);
//         return _value;
//     }
// }else{
//     return 'NA';
//   }  
                    



//                   }
//               }    , {
//                 name: 'ModifiedPaddingHeight',
//                 convert: function (value, record) {

//                     var _value;
//                     var str = record.get('EnterprisesName');
// if(str){
//     if (str.length <= 16) {
//         _value = '8px';
//         console.log(str.length);
//         return _value;
//     }
//     if (str.length >= 17) {
//         _value = '0px';
//         console.log(str.length);
//         return _value;
//     }

// }{
//     return 'NA';
//   }  
                    


//                 }
//             }
//                 , {
//                     name: 'ModifiedAyohaUserAccountNo',
//                     convert: function (value, record) {

//                         var _value;
//                         var str = record.get('AyohaUserAccountNo');

// if(str){

//     var str0 = str.split('-');
//     var str1 = str0[2];
//     _value = insert(str1, 3, " ");
// }


//                         return _value


//                     }
//                 }
            
                   
                   
//                    ,  
//                    {
//                        name: 'ModifiedUntilDate',
//                        convert: function (value, record) {
//                            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
//                            // 0111 3218 9269
//                            var _value;
//                            var isValidLifeTime = record.get('isValidLifeTime');
//                            var StrExpiredDate = record.get('StrExpiredDate');
//                            if (isValidLifeTime == "YES") {
//                                _value = StrExpiredDate;
//                            }
//                            if (isValidLifeTime == "NO") {
//                                _value = StrExpiredDate+'(Month)';
//                            }

                          
//                            return _value;





//                        }
//                    }
//                    , {
//                        name: 'ModifiedUntilDate_Extend',
//                        convert: function (value, record) {
//                            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
//                            // 0111 3218 9269
//                            var _value;
//                            var ValidUntilDateMonthYearOnly = record.get('ValidUntilDateMonthYearOnly');
//                            var isValidLifeTime = record.get('isValidLifeTime');
//                            var StrExpiredDate = record.get('StrExpiredDate');
//                            if (isValidLifeTime == "YES") {
//                                _value = StrExpiredDate;
//                            }
//                            if (isValidLifeTime == "NO") {
//                                if (ValidUntilDateMonthYearOnly == "02/1983") {
//                                    _value = "Need Approval";
//                                } else {
//                                    _value = ValidUntilDateMonthYearOnly;
//                                }

//                            }
//                            return _value;

//                        }
//                    }, {
//                        name: 'ModifiedMemberSinceDate',
//                        convert: function (value, record) {
//                            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
//                            // 0111 3218 9269
//                            var _value;
//                            var isValidLifeTime = record.get('isValidLifeTime');
//                            var CreatedDate = record.get('CreatedDate');
//                            var MembrshipApprovalDate = record.get('MembrshipApprovalDate');
//                            if (isValidLifeTime == "YES") {
//                                _value = CreatedDate;
//                            }
//                            if (isValidLifeTime == "NO") {
//                                if (MembrshipApprovalDate) {
//                                    _value = MembrshipApprovalDate;
//                                } else {
//                                    _value = "After Confirmed";
//                                }


//                            }
//                            return _value;

//                        }
//                    }, {
//                        name: 'ModifiedisMembershipCardSubscribed',
//                        convert: function (value, record) {
//                            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
//                            // 0111 3218 9269
//                            var _value;
//                            var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

//                            if (isMembershipCardSubscribed == "YES") {
//                                _value = '<div style="width:95%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 0px" src="resources/icons/alreadymember.png" height="20px" width="100px"></div>';
//                            }
//                            if (isMembershipCardSubscribed == "NO") {

//                                _value = '<div style="width:95%;height:15px;text-align:right;"><img style="margin:0px 0px 0px 0px" src="resources/icons/NeedApprovalTransparent.png" height="15px" width="90px"></div>';

//                            }
//                            return _value;

//                        }
//                    },
//                    {
//                     name: 'ModifiedCTA',
//                     convert: function (value, record) {
            
//                         var _value;
//                         var _fee;
//                         var str = record.get('MembershipCardFee');
//                         var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');
//                         var _tagLine=record.get('ModifiedMarketingTagline');
//                         var _MembershipCardType=record.get('MembershipCardType');
                       
//                         if(isMembershipCardSubscribed=="YES"){
                           
//                             var isValidLifeTime=record.get('isValidLifeTime');
//                             var endDate;
//                             if(isValidLifeTime=="YES"){
//                                 endDate="Lifetime Member";
//                             }else{
//                                endDate = "Expires on "+record.get('ValidUntilDateMonthYearOnly');
//                               // endDate="Expires on "+record.get('ValidUntilDate')
                               
                               
//                             }


//                            _value= '<div style="margin:6px 0px 0px 0px"><div class="ayohaBtnCheckInNow">'+
//                                           '<span class="ico">'+
//                                             '<svg viewBox="0 0 24 24" aria-hidden="true">'+
//                                               '<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>'+
//                                             '</svg>'+
//                                           '</span>'+
//                                           '<span class="txt">Check-In Now</span>'+
//                                         '</div></div>'+
//                                         '<div class="ayohaHubOverlayHint">✓ Active • '+_MembershipCardType+' • '+endDate+'</div>'
                                        
//                                         return _value;

//                         }
//                         if(isMembershipCardSubscribed=="NO"){

//                             if(str){
//                                 _fee= record.get('MembershipCardFee');
//                          }else{
//                              _fee=0;
//                          }
//              if(_fee>0){
//                  _value='<div class="ayohaHubCta">View Membership Plans <span style="font-size:12px;font-weight:bold; color:white;">&#10095;</span></div>'+
//                  '<div class="ayohaHubFee">Membership from RM '+_fee+'</div>'
//              }else if (_fee==0){
//                  _value='<div class="ayohaHubCta">🎉 Join for Free <span style="font-size:12px;font-weight:bold; color:white;">&#10095;</span></div>'+
//                         '<div class="ayohaHubFee">'+_tagLine+'</div>'
//              }
//              return _value;

//                         }



       
            
            
                      
//                     }
//                 },
        
              
        ]
    
});






function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}