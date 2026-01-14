Ext.define('BuskartApp.model.MembershipCard.MembershipCardModel', {
    extend: 'Ext.data.Model',
    config: {
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
        name: 'ModifiedMarketingTagline',
        convert: function (value, record) {

            var _value;
            var taglines = [
                "Enjoy Exclusive Perks",
                "Unlock VIP Access",
                "Member Deals Only",
                "Get More as Member",
                "Privileges Await You",
                "Perks Made for You",
                "Your VIP Journey Starts",
                "Be Treated Like Royalty",
                "Rewards All Year Long",
                "Special For Members",
                "Join. Save. Repeat.",
                "Swipe for Perks",
                "Scan and Enjoy",
                "Your Perk Card",
                "Member First Always",
                "One Card, Many Perks",
                "Member Life Starts",
                "Your Pass to More",
                "VIP Cardholder Zone",
                "Card That Gives Back",
                "Get It Now!",
                "Sign Up & Save",
                "Unlock the Perks",
                "Tap Into Benefits",
                "Claim Your Benefits",
                "Don’t Miss Out!",
                "Grab the Rewards",
                "Activate Rewards",
                "Limited Time Only",
                "Join & Enjoy More",
                "Shop More, Earn More",
                "Earn As You Spend",
                "Points, Deals, Perks",
                "Your Daily Bonus",
                "Instant Reward Mode",
                "Save More Today",
                "Spend Smart. Get Back.",
                "Big Rewards Inside",
                "Extra Value Daily",
                "Exclusive & Worth It",
                "Because You Deserve",
                "Treat Yourself Right",
                "Be Rewarded Always",
                "Smarter Way to Shop",
                "Live the Member Life",
                "More Than Just Deals",
                "You Earned This",
                "Joy in Every Swipe",
                "Everyday Bonus Life",
                "Level Up Your Life"
              ];
              
              // Randomly select a tagline
              _value = taglines[Math.floor(Math.random() * taglines.length)];
              



            return _value;
        }
    },
    {
        name: 'ModifiedGetItNow',
        convert: function (value, record) {

            var _value;
            var GetItNowtaglines = [
                "Get It NOW!",
                "Claim This Perk",
                "Unlock Your Reward",
                "Tap to Enjoy",
                "Redeem Instantly",
                "Activate Now",
                "Join & Save",
                "Enjoy This Deal",
                "Tap & Get It",
                "Start Saving Today",
                "Grab It Fast",
                "Dont Miss Out",
                "Claim Your Spot",
                "Unlock Exclusive Now",
                "Join the Club",
                "Snag This Offer",
                "One Tap to Perks",
                "Go VIP Now",
                "Experience the Perks",
                "Try It Today!",
                "Get Member Access",
                "Rebut Sekarang!",
                "Terus Nikmati Ganjaran",
                "Klik & Dapat!",
                "Jom Join Sekarang",
                "Tebus Sekarang",
                "Cepat, Limited Offer!",
                "Dapatkan Tawaran Ini"
              ];
              
              // Randomly select a tagline
              _value = GetItNowtaglines[Math.floor(Math.random() * GetItNowtaglines.length)];
              



            return _value;
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
    } , {
              name: 'ModifiedEnterprisesNameUpperCase',
              convert: function (value, record) {

                  var _value;
                  var str = record.get('EnterprisesName');
if(str){
    _value = str.toUpperCase();
}else{
    _value='NA';
}
                 




                  return _value;
              }
          }

//  ORI 1/11/2025         , {
//               name: 'ModifiedEnterprisesName',
//               convert: function (value, record) {

//                   var _value;
//                   var str = record.get('EnterprisesName');
                  
// if(str){
//     if (str.length <= 16) {
//         _value = '<div style="margin:-51px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>';
      
//         return _value;
//     }
//     if (str.length >= 17) {
//         var str0 = str.substring(0, 16);
//         var str1 = str.substring(16, str.length);
//         _value = '<div style="margin:-61px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str0.toUpperCase() + '-</div><br>' +
//                  '<div style="margin:-26px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str1.toUpperCase() + '</div>';
//         return _value;
//     }
// }
                 



//               }
//           } 
          ,{
            name: 'ModifiedEnterprisesName',
            convert: function (value, record) {

                var _value;
                var str = record.get('EnterprisesName');
                
if(str){
  if (str.length <= 16) {
      _value = '<div style="margin:-51px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>';
    
      return _value;
  }
  if (str.length >= 17) {
      var str0 = str.substring(0, 16);
      var str1 = str.substring(16, str.length);
      _value = '<div style="margin:-53px 0px 0px 60px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str0.toUpperCase() + '-</div><br>' +
               '<div style="margin:-26px 0px 0px 68px;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str1.toUpperCase() + '</div>';
      return _value;
  }
}
               



            }
        } 
          
          
          
          
          , {
            name: 'ModifiedEnterprisesNameDesignOneTwo',
            convert: function (value, record) {

                var _value;
                var str = record.get('EnterprisesName');
         
               


                if(str){

                    _value = '<div style="margin:0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>'; 

                    return _value;




//   if (str.length <= 16) {
//       _value = '<div style="margin:-29px 0px 0px 33px;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str.toUpperCase() + '</div>';
    
//       return _value;
//   }
//   if (str.length >= 17) {
//       var str0 = str.substring(0, 16);
//       var str1 = str.substring(16, str.length);
//       _value = '<div style="margin:-33px 0px 0px 33px;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str0.toUpperCase() + '-</div><br>' +
//                '<div style="margin:-20px 0px 0px 33px;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white;width:100%;">' + str1.toUpperCase() + '</div>';
//       return _value;
//   }
}
               



            }
        }
            , 
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
                    var str = record.get('EnterprisesName');
                    var logo = record.get('EnterprisesLogo');
                  if(str){
                    if (str.length <= 13) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:50px;height:50px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }
                    if (str.length >= 14) {
                        _value = '<img src="' + logo + '" alt="Image" style="width:50px;height:50px;border-radius: 50%;border: 1px solid white;margin:0px 0px 0px 0px">';
                        console.log(str.length);
                        return _value;
                    }
                  }else{
                    return 'NA';
                  }
                   



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
            //   , {
            //       name: 'ModifiedHeaderHeight',
            //       convert: function (value, record) {

            //           var _value;
            //           var str = record.get('EnterprisesName');

            //           if(str){
            //             if (str.length <= 16) {
            //                 _value = 'height:73px';
            //                 console.log(str.length);
            //                 return _value;
            //             }
            //             if (str.length >= 17) {
            //                 _value = 'height:90px';
            //                 console.log(str.length);
            //                 return _value;
            //             }
  
  
            //           }else{
            //             return 'NA';
            //           }   
                      

            //       }
            //   }
  


              , {
                  name: 'ModifiedHeaderHeight',
                  convert: function (value, record) {

                      var _value;
                      var str = record.get('EnterprisesName');
if(str){
    if (str.length <= 16) {
        //_value = 'height:65px';
        _value = 'height:50px';
        console.log(str.length);
        return _value;
    }
    if (str.length >= 17) {
        //_value = 'height:80px';
        _value = 'height:63px';
        console.log(str.length);
        return _value;
    }
}else{
    return 'NA';
  }  
                    



                  }
              }    , {
                name: 'ModifiedPaddingHeight',
                convert: function (value, record) {

                    var _value;
                    var str = record.get('EnterprisesName');
if(str){
    if (str.length <= 16) {
        _value = '8px';
        console.log(str.length);
        return _value;
    }
    if (str.length >= 17) {
        _value = '0px';
        console.log(str.length);
        return _value;
    }

}{
    return 'NA';
  }  
                    


                }
            }
                , {
                    name: 'ModifiedAyohaUserAccountNo',
                    convert: function (value, record) {

                        var _value;
                        var str = record.get('AyohaUserAccountNo');

if(str){

    var str0 = str.split('-');
    var str1 = str0[2];
    _value = insert(str1, 3, " ");
}


                        return _value


                    }
                }
                //    , {
                //        name: 'ModifiedMembershipNo',
                //        convert: function (value, record) {
                //            // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                //            // 0111 3218 9269
                //            var _value;
                //            var str = record.get('MembershipNo');
                //            if(str){
                //            var str1 = str.split('-');
                //            var str2 = str1[1];
                //            var str3 = str1[2];
                //            var str4 = str3.substring(0, 1);

                //            var str5 = str2 + str4;
                //            var str6 = str5;

                //            var str7 = insert(str6, 4, " ");
                //            var str8 = insert(str7, 9, " ");



                //            _value = str8;
                //            }
                //            return _value;





                //        }
                //    }
                   
                   
                   ,  
                   {
                       name: 'ModifiedUntilDate',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var isValidLifeTime = record.get('isValidLifeTime');
                           var StrExpiredDate = record.get('StrExpiredDate');
                           if (isValidLifeTime == "YES") {
                               _value = StrExpiredDate;
                           }
                           if (isValidLifeTime == "NO") {
                               _value = StrExpiredDate+'(Month)';
                           }

                          
                           return _value;





                       }
                   }
                   , {
                       name: 'ModifiedUntilDate',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var ValidUntilDateMonthYearOnly = record.get('ValidUntilDateMonthYearOnly');
                           var isValidLifeTime = record.get('isValidLifeTime');
                           var StrExpiredDate = record.get('StrExpiredDate');
                           if (isValidLifeTime == "YES") {
                               _value = StrExpiredDate;
                           }
                           if (isValidLifeTime == "NO") {
                               if (ValidUntilDateMonthYearOnly == "02/1983") {
                                   _value = "Need Approval";
                               } else {
                                   _value = ValidUntilDateMonthYearOnly;
                               }

                           }
                           return _value;

                       }
                   }, {
                       name: 'ModifiedMemberSinceDate',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var isValidLifeTime = record.get('isValidLifeTime');
                           var CreatedDate = record.get('CreatedDate');
                           var MembrshipApprovalDate = record.get('MembrshipApprovalDate');
                           if (isValidLifeTime == "YES") {
                               _value = CreatedDate;
                           }
                           if (isValidLifeTime == "NO") {
                               if (MembrshipApprovalDate) {
                                   _value = MembrshipApprovalDate;
                               } else {
                                   _value = "After Confirmed";
                               }


                           }
                           return _value;

                       }
                   }, {
                       name: 'ModifiedisMembershipCardSubscribed',
                       convert: function (value, record) {
                           // Mizi - 01113218926 - 9309422 - MMC - 02 - 23
                           // 0111 3218 9269
                           var _value;
                           var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');

                           if (isMembershipCardSubscribed == "YES") {
                               _value = '<div style="width:95%;height:20px;text-align:right;" ><img style="margin:0px 0px 0px 0px" src="resources/icons/alreadymember.png" height="20px" width="100px"></div>';
                           }
                           if (isMembershipCardSubscribed == "NO") {

                               _value = '<div style="width:95%;height:15px;text-align:right;"><img style="margin:0px 0px 0px 0px" src="resources/icons/NeedApprovalTransparent.png" height="15px" width="90px"></div>';

                           }
                           return _value;

                       }
                   },
                   {
                    name: 'ModifiedCTA',
                    convert: function (value, record) {
            
                        var _value;
                        var _fee;
                        var str = record.get('MembershipCardFee');
                        var isMembershipCardSubscribed = record.get('isMembershipCardSubscribed');
                        var _tagLine=record.get('ModifiedMarketingTagline');
                        var _MembershipCardType=record.get('MembershipCardType');
                       
                        if(isMembershipCardSubscribed=="YES"){
                           
                            var isValidLifeTime=record.get('isValidLifeTime');
                            var endDate;
                            if(isValidLifeTime=="YES"){
                                endDate="Lifetime Member";
                            }else{
                               endDate = "Expires on "+record.get('ValidUntilDateMonthYearOnly');
                              // endDate="Expires on "+record.get('ValidUntilDate')
                               
                               
                            }


                           _value= '<div style="margin:6px 0px 0px 0px"><div class="ayohaBtnCheckInNow">'+
                                          '<span class="ico">'+
                                            '<svg viewBox="0 0 24 24" aria-hidden="true">'+
                                              '<path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"></path>'+
                                            '</svg>'+
                                          '</span>'+
                                          '<span class="txt">Check-In Now</span>'+
                                        '</div></div>'+
                                        '<div class="ayohaHubOverlayHint">✓ Active • '+_MembershipCardType+' • '+endDate+'</div>'
                                        
                                        return _value;

                        }
                        if(isMembershipCardSubscribed=="NO"){

                            if(str){
                                _fee= record.get('MembershipCardFee');
                         }else{
                             _fee=0;
                         }
             if(_fee>0){
                 _value='<div class="ayohaHubCta">View Membership Plans <span style="font-size:12px;font-weight:bold; color:white;">&#10095;</span></div>'+
                 '<div class="ayohaHubFee">Membership from RM '+_fee+'</div>'
             }else if (_fee==0){
                 _value='<div class="ayohaHubCta">🎉 Join for Free <span style="font-size:12px;font-weight:bold; color:white;">&#10095;</span></div>'+
                        '<div class="ayohaHubFee">'+_tagLine+'</div>'
             }
             return _value;

                        }



       
            
            
                      
                    }
                },
                  
            //     {
            //         name: 'ModifiedHelperCTA',
            //         convert: function (value, record) {
            
            //             var _value;
            //             var _fee;
            //             var _tagLine=record.get('ModifiedMarketingTagline');
            //             var str = record.get('MembershipCardFee');
            //             if(str){
            //                    _fee= record.get('MembershipCardFee');
            //             }else{
            //                 _fee=0;
            //             }
            // if(_fee>0){
            //     _value='<div class="ayohaHubFee">Membership from RM '+_fee+'</div>'
            // }else if (_fee==0){
            //     _value='<div class="ayohaHubFee">'+record.get('ModifiedMarketingTagline')+'</div>'
            // }
                       
            
            
            //             return _value;
            //         }
            //     },
              
        ]
    }
});

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}