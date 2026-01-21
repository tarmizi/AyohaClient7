Ext.define('BuskartApp.model.EnterprisesFavorite.EnterprisesFavoriteModel', {
    extend: 'Ext.data.Model',
 //   config: {
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
      'isMember',
      'CheckInDateTime',
      'RelativeCheckInTime',
      'AyohaRewardPointCheckIn',
      'CheckInCount',
      'CheckInCountStr',
      'CheckInCode',
      'JenisPerniagaan',
      {
          name: 'ModifiedCountStar',
          convert: function (value, record) {
              var _value;
              var RateReviews;
              var ID;


              RateReviews =parseFloat(record.get('CountStar'));
              ID = record.get('ID');



              if (RateReviews == 5) {
                  _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">'+RateReviews.toFixed(1)+'</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"></div>';

              }
              if ((RateReviews >= 4) && (RateReviews < 5)) {
                  _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';


                  if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 4.5) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 4.9) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }



              }
              if ((RateReviews >= 3) && (RateReviews < 4)) {
                  _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 3.5) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 3.9) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }



              }
              if ((RateReviews >= 2) && (RateReviews < 3)) {
                  _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 2.5) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 2.9) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }





              }
              if ((RateReviews >= 1) && (RateReviews < 2)) {
                  _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 1.5) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }
                  if (RateReviews == 1.9) {
                      _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

                  }

              }
              if ((RateReviews >= 0) && (RateReviews < 1)) {
                  _value = '<div style="margin:-18px 0px 0px 12px;text-align:center;width:100%;">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;"></div>';

              }






















              //if (_CountStar == 0) {
              //    _value = 'No Rate';
              //} if (_CountStar == 1) {
              //    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';

              //} if (_CountStar == 2) {
              //    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
              //} if (_CountStar == 3) {
              //    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
              //} if (_CountStar == 4) {
              //    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
              //} if (_CountStar == 5) {
              //    _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';
              //}



              return _value
          }
      },
      //{
      //    name: 'ModifiedRecommendedByAyoha',
      //    convert: function (value, record) {
      //        var _value;
      //        var _CountStar;
      //        var ID;



      //        //_CountStar = record.get('CountStar');
      //        _CountStar = 5;
      //        ID = record.get('ID');
             
      //        var TotalReviews = record.get('TotalReviews');
      //        var RateReviews =parseFloat(record.get('RateReviews'));

      //        if (_CountStar == 0) {
      //            _value = '&nbsp;<br><br><br><br><br>';
      //        } if (_CountStar == 5) {
      //            //_value = 'Recommended by Ayoha&nbsp;<br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:0px 10px 0px 0px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"> <img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;"></div>';
      //            if (RateReviews == 5)
      //            {
      //                _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //            }
      //            if ((RateReviews >= 4) && (RateReviews < 5)){
      //                _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';


      //                if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 4.5) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 4.9) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }



      //            }
      //            if ((RateReviews >= 3) && (RateReviews < 4)) {
      //                _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                if ((RateReviews >= 3.2) && (RateReviews <=3.4)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 3.5) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 3.9) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }



      //            }
      //            if ((RateReviews >= 2) && (RateReviews < 3)) {
      //                _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 2.5) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 2.9) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }





      //            }
      //            if ((RateReviews >= 1) && (RateReviews < 2)) {
      //                _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 1.5) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"  onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
      //                if (RateReviews == 1.9) {
      //                    _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/star.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //                }
                     
      //            }
      //            if ((RateReviews >= 0) && (RateReviews < 1)) {
      //                _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">' + RateReviews.toFixed(1) + '</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalReviews + ' Reviews</div>';

      //            }
                 
      //        }


      //        if (_value) {
      //            _value = _value;
      //        } else
      //        {
      //            _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:50px;color:black;font-weight:normal;overflow:hidden;margin:-10px 5px -20px 0px;vertical-align:top;padding:0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')">0.0</div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:15px;height:15px;"></div><br><div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;" onClick="AyohaMerchantReviewShow(' + ID + ')"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>';

      //        }
             
      //        return _value
      //    }
      //},

      //{
      //    name: 'ModifiedSocialMediaButton',
      //    convert: function (value, record) {
             

      //     var ID = record.get('ID');
      //     var PICContactNo = record.get('PICContactNo');
      //     var EnterpriseCoordinate = record.get('EnterpriseCoordinate');
      //     var EnterpriseFacebook = record.get('EnterpriseFacebook');

      //     var WhastAppIcon;
      //     var MapIcon;
      //     var FbIcon;

      //     if (PICContactNo !="NA") {
      //       //  WhastAppIcon = "wassap.png";
      //         WhastAppIcon = '<button OnClick="FloatPanel_OpenLink_Wassap(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/wassap.png" alt="" /></button>';
               
      //     } else
      //     {
      //         WhastAppIcon = "";
      //     }

      //     if (EnterpriseCoordinate != "NA") {
      //       //  MapIcon = "locationOne.png";
      //         MapIcon = '<button OnClick="FloatPanel_OpenLink_Location(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/locationOne.png" alt="" /></button>';
      //         } else {
                 
      //             MapIcon = "";
      //         }
      //     if (EnterpriseFacebook != "NA") {
      //        // FbIcon = "Facebooklogo.png"
      //         FbIcon = '<button OnClick="FloatPanel_OpenLink_FB(' + ID + ')" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/Facebooklogo.png" alt="" /></button>';
      //         } else {
      //         FbIcon = "";
      //         }

      //     return '<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;">' + WhastAppIcon + MapIcon + FbIcon +'</div>';

      //     //return '<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_OpenLink_Wassap(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/' + WhastAppIcon + '" alt="" /></button><button OnClick="FloatPanel_OpenLink_Location(' + ID + ')" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/' + MapIcon + '" alt="" /></button><button OnClick="FloatPanel_OpenLink_FB(' + ID + ')" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/' + FbIcon + '" alt="" /></button></div>';
      //    }
      //},

      //  {
      //      name: 'ModifiedMerchantLinkType',
      //      convert: function (value, record) {
      //          var _value;

      //          // var MerchantLinkType = record.get('MerchantLinkType').split("-");
      //          var MerchantLinkType = record.get('MerchantLinkType');
      //          var ID = record.get('ID');
      //          var isMember = record.get('isMember');
      //          console.log(ID);

      //          var WhastAppIcon;
      //          var MapIcon;
      //          var FbIcon;

      //          if (MerchantLinkType) {
      //              if (isMember == "NO") {
      //                  _value = '<button OnClick="FloatPanel_RewardStore_OpenStore(' + ID + ')" class="buttonMerchantBusinessTypeLink" style="margin:0px 0px 0px 2px;">Visit Our ' + MerchantLinkType + '</button>';

      //              } else {
      //                  _value = '<button OnClick="FloatPanel_RewardStore_OpenStore(' + ID + ')" class="buttonMerchantBusinessTypeLinkIsMember" style="margin:0px 0px 0px 2px;"><div class="blink_me">Visit Our ' + MerchantLinkType + '</div></button>';

      //              }
                   
      //          } else {
      //              _value = '<button OnClick="btnFloatPanel_RewardStore_OpenStoreNoBusiness()" class="buttonMerchantBusinessTypeLinkNoBusiness" style="margin:0px 0px 0px 2px;"><b>No Business Page/Site </b></button>';
      //          }

              

      //          return _value;
      //      }
      //  },
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
          {
              name: 'ModifiedIsMemeber',
              convert: function (value, record) {
                  var _value;

                  // var MerchantLinkType = record.get('MerchantLinkType').split("-");
                  var isMember = record.get('isMember');
                  var ID = record.get('ID');
                 


                  if (isMember=="NO") {
                      _value = '<td style="background-color:#ffffff;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 20px 0px;" ><button OnClick="FloatPanel_RewardStoreMembershipCardShow(' + ID + ')" class="buttonGetMemberhipCard" style="margin:0px 0px 0px -5px;" >Get Membership Card</button></td>';

                  } else {
                      _value = '';
                  }



                  return _value;
              }
          },
          {
              name: 'ModifiedIsMemberDashboardMerchantList',
              convert: function (value, record) {
                  var _value;

                  // var MerchantLinkType = record.get('MerchantLinkType').split("-");
                  var isMember = record.get('isMember');
                  var ID = record.get('ID');



                  if (isMember == "NO") {
                      //_value = '<div style="height:60px;text-align:center;margin:-14px 0px 0px 0px;text-align:center;" ><img style="margin:0px 0px 0px 130px" src="resources/icons/transparentbox.png" height="15px" width="45px"></div>';
                      _value = '<div style="height:60px;text-align:center;margin:-14px 0px 0px 0px;text-align:right;" ><img style="margin:0px 0px 0px 50px" src="resources/icons/transparentbox.png" height="15px" width="45px"></div>';

                  } else {
                      //_value = '<div style="height:60px;text-align:center;margin:-14px 0px 0px 0px;text-align:center;" ><img style="margin:0px 0px 0px 130px" src="resources/icons/membershiptag001.png" height="15px" width="45px"></div>';
                      _value = '<div style="height:60px;text-align:center;margin:-14px 0px 0px 0px;text-align:right;" ><img style="margin:0px 0px 0px 50px" src="resources/icons/membershiptag002.png" height="15px" width="45px"></div>';
                  }



                  return _value;
              }
          },
          {
            name: 'ModifiedIsMemberDashboardMerchantListLastCheckIn',
            convert: function (value, record) {
                var _value;

                // var MerchantLinkType = record.get('MerchantLinkType').split("-");
                var isMember = record.get('isMember');
                var ID = record.get('ID');



                if (isMember == "NO") {
                    //_value = '<div style="height:60px;text-align:center;margin:-14px 0px 0px 0px;text-align:center;" ><img style="margin:0px 0px 0px 130px" src="resources/icons/transparentbox.png" height="15px" width="45px"></div>';
                    _value = '<div style="height:60px;text-align:center;margin:15px 0px 0px 0px;text-align:right;" ><img style="margin:0px 0px 0px 50px" src="resources/icons/transparentbox.png" height="15px" width="45px"></div>';

                } else {
                    //_value = '<div style="height:60px;text-align:center;margin:-14px 0px 0px 0px;text-align:center;" ><img style="margin:0px 0px 0px 130px" src="resources/icons/membershiptag001.png" height="15px" width="45px"></div>';
                    _value = '<div style="height:60px;text-align:center;margin:15px 0px 0px 0px;text-align:right;" ><img style="margin:0px 0px 0px 50px" src="resources/icons/membershiptag002.png" height="15px" width="45px"></div>';
                }



                return _value;
            }
        },
              {
                  name: 'ModifiedIsMemeberBottomButton',
                  convert: function (value, record) {
                      var _value;

                      // var MerchantLinkType = record.get('MerchantLinkType').split("-");
                      var isMember = record.get('isMember');
                      var ID = record.get('ID');



                      if (isMember == "NO") {
                          _value = '<tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 0px 20px; height:50px">{ModifiedMerchantLinkType}</td>{ModifiedIsMemeber}</tr>';

                      } else {
                          _value = '';
                      }



                      return _value;
                  }
              },
              {
                  name: 'ModifiedIsMemberVisitAyohaStoreRadius',
                  convert: function (value, record) {
                      var _value;

                      // var MerchantLinkType = record.get('MerchantLinkType').split("-");
                      var isMember = record.get('isMember');



                      if (isMember == "NO") {
                          _value = '0px';

                      } else {
                          _value = '20px';
                      }



                      return _value;
                  }
              },
              {
                name: 'isLoadMore',
                type: 'boolean',
                defaultValue: false // Important: defaults to false for real data
            },
         'TotalReviews',
         'RateReviews'
      ]
  //  }
});




//<div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:2px;color:black;font-weight:bold;overflow:hidden;margin:-40px 0px 0px 0px;"><button OnClick="FloatPanel_OpenLink_Wassap({ID})" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/wassap.png" alt="" /></button><button OnClick="FloatPanel_OpenLink_Location({ID})" class="buttonMediaSocial" style="margin:0px 10px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/locationOne.png" alt="" /></button><button OnClick="FloatPanel_OpenLink_FB({ID})" class="buttonMediaSocial" style="margin:0px 17px 0px 0px;"><img style="width: 24px; height: 24px;" src="resources/icons/Facebooklogo.png" alt="" /></button></div>

