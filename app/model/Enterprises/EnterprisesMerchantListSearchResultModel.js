Ext.define('BuskartApp.model.Enterprises.EnterprisesMerchantListSearchResultModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
     'ID',
     'EnterpriseHQAccNo',
     'EnterpriseAccNo',
     'EnterpriseName',
     'EnterpriseAddress',
     'EnterprisePhoneNo',
     'EnterpriseRegistrationNo',
     'EnterpriseEmail',
     'EnterpriseWebsite',
     'EnterpriseDescriptions',
     'EnterpriseFacebook',
     'EnterpriseTwiter',
     'EnterpriseInstagram',
     'EnterpriseCoordinate',
     'EnterpriseLogoPath',
     'EnterpriseLogoName',
     'RowStatus',
     'CreatedDate',
     'CreatedBy',
     'ModifiedDate',
     'ModifiedBy',
     'PICContactNo',
     'PersonInCharge',
     'LoyaltyCardType',
     'EnterpriseType',
     'EnterpriseBusinessType',
     'AyohaVersion',
     'CountMembership',
     'CountStar',
     'SearchCol',
     'NamaJalan',
      'Postkod',
      'Bandar',
      'Negeri',
     'BusinessMode',
     'BusinessTypeCode',
     'BusinessTypeGroupCode',
     'BusinessTypeIconPath',
     'BusinessTypeGroup',
     'MerchantLinkType',
     'EnterpriseTagLine',
     'AdvertisementCode',
     {
         name: 'ModifiedCountStar',
         convert: function (value, record) {
             var _value;
             var _CountStar;



             _CountStar = record.get('CountStar');

             if (_CountStar == 0) {
                 _value = 'No Rate';
             } if (_CountStar == 1) {
                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';

             } if (_CountStar == 2) {
                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
             } if (_CountStar == 3) {
                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
             } if (_CountStar == 4) {
                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
             } if (_CountStar == 5) {
                 _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
             }



             return _value
         }
     },
     {
         name: 'ModifiedRecommendedByAyoha',
         convert: function (value, record) {
             var _value;
             var _CountStar;
             var ID;



             _CountStar = record.get('CountStar');
             ID = record.get('ID');

             var TotalReviews = record.get('TotalReviews');
             var RateReviews = parseFloat(record.get('RateReviews'));

             if (_CountStar == 0) {
                 _value = '&nbsp;<br><br><br><br><br>';
             } if (_CountStar == 5) {
                 //_value = 'Recommended by Ayoha&nbsp;<br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:0px 10px 0px 0px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"></div>';
                 if (RateReviews == 5) {
                     _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                 }
                 if ((RateReviews >= 4) && (RateReviews < 5)) {
                     _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';


                     if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 4.5) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 4.9) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }



                 }
                 if ((RateReviews >= 3) && (RateReviews < 4)) {
                     _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 3.5) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 3.9) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }



                 }
                 if ((RateReviews >= 2) && (RateReviews < 3)) {
                     _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 2.5) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 2.9) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }





                 }
                 if ((RateReviews >= 1) && (RateReviews < 2)) {
                     _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 1.5) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }
                     if (RateReviews == 1.9) {
                         _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                     }

                 }
                 if ((RateReviews >= 0) && (RateReviews < 1)) {
                     _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

                 }

             }


             if (_value) {
                 _value = _value;
             } else {
                 _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')">0.0</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow_FromMerchantListSearchResult(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>';

             }

             return _value
         }
     },

    {
        name: 'ModifiedSocialMediaButton',
        convert: function (value, record) {


            var ID = record.get('ID');
            var PICContactNo = record.get('PICContactNo');
            var EnterpriseCoordinate = record.get('EnterpriseCoordinate');
            var EnterpriseFacebook = record.get('EnterpriseFacebook');

            var WhastAppIcon;
            var MapIcon;
            var FbIcon;

            if (PICContactNo != "NA") {
                //  WhastAppIcon = "wassap.png";
                WhastAppIcon = '<button OnClick="FloatPanel_OpenLink_Wassap(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/wassap.png" alt="" /></button>';

            } else {
                WhastAppIcon = "";
            }

            if (EnterpriseCoordinate != "NA") {
                //  MapIcon = "locationOne.png";
                MapIcon = '<button OnClick="FloatPanel_OpenLink_Location(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/locationOne.png" alt="" /></button>';
            } else {

                MapIcon = "";
            }
            if (EnterpriseFacebook != "NA") {
                // FbIcon = "Facebooklogo.png"
                FbIcon = '<button OnClick="FloatPanel_OpenLink_FB(' + ID + ')" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/Facebooklogo.png" alt="" /></button>';
            } else {
                FbIcon = "";
            }

            return '<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;">' + WhastAppIcon + MapIcon + FbIcon + '</div>';

            //return '<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_OpenLink_Wassap(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/' + WhastAppIcon + '" alt="" /></button><button OnClick="FloatPanel_OpenLink_Location(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/' + MapIcon + '" alt="" /></button><button OnClick="FloatPanel_OpenLink_FB(' + ID + ')" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/' + FbIcon + '" alt="" /></button></div>';
        }
    },


       {
           name: 'ModifiedMerchantLinkType',
           convert: function (value, record) {
               var _value;

               // var MerchantLinkType = record.get('MerchantLinkType').split("-");
               var MerchantLinkType = record.get('MerchantLinkType');
               var ID = record.get('ID');
               console.log(ID);

               var WhastAppIcon;
               var MapIcon;
               var FbIcon;

               if (MerchantLinkType) {
                   _value = '<button OnClick="FloatPanel_RewardStore_SearchResult_OpenStore(' + ID + ')" class="buttonMerchantBusinessTypeLink" style="margin:0px 0px 0px 2px;">Visit Our ' + MerchantLinkType + '</button>';

               } else {
                   _value = '<button OnClick="btnFloatPanel_RewardStore_OpenStoreNoBusiness()" class="buttonMerchantBusinessTypeLinkNoBusiness" style="margin:0px 0px 0px 2px;"><b>No Business Page/Site </b></button>';
               }



               return _value;
           }
       },
        {
            name: 'ModifiedEnterpriseRegistrationNo',
            convert: function (value, record) {
                var _value;

                var EnterpriseRegistrationNo = record.get('EnterpriseRegistrationNo');
                var ID = record.get('ID');




                if (EnterpriseRegistrationNo) {
                    _value = '(' + EnterpriseRegistrationNo + ')';

                } else {
                    _value = '';
                }



                return _value;
            }
        },
        'TotalReviews',
        'RateReviews'
        ]
    }
});




//<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_OpenLink_Wassap({ID})" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/wassap.png" alt="" /></button><button OnClick="FloatPanel_OpenLink_Location({ID})" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/locationOne.png" alt="" /></button><button OnClick="FloatPanel_OpenLink_FB({ID})" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/Facebooklogo.png" alt="" /></button></div>

