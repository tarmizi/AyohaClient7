Ext.define('BuskartApp.store.MerchantLoyaltyCampaign.MerchantLoyaltyCampaignStore', {
});


var _DataStore_MerchantLoyaltyCampaign_LoadPointCardLoyaltyStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MerchantLoyaltyCampaign.PointCardModel',
    id: '_MerchantLoyaltyCampaign_LoadPointCardLoyaltyStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/MerchantLoyaltyCampaign/MerchantLoyaltyCampaign_LoadPoint',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    groupDir: "DESC",
    grouper: {
        groupFn: function (record) {
            return  '<div style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 500px; font-family: Arial, sans-serif; padding: 2px 0px; box-sizing: border-box;">' +
            '<div style="display: flex; align-items: center;">' +
              '<div style="width: 42px; height: 42px; border: 2px none #333; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 5px; flex-shrink: 0;">' +
                '<img src='+record.get('EnterpriseLogo')+' style="width:42px;height:42px">' +
              '</div>' +
              '<div>' +
                '<h2 style="margin: 0; padding-bottom: 1px; font-size: 12px; font-weight: bold; border-bottom: 1px solid white;color:white">' +
                 record.get('EnterpriseName') + 
                '</h2>' +
                '<p style="margin: 2px 0 0 0; font-size: 10px; color: white;">' +
                // record.get('StampCampaignName') + ' - (End Date:' + record.get('EndDate') + ')' +
                 record.get('EnterpriseTagLine')+
                '</p>' +
              '</div>' +
            '</div>' +
            '<div onclick="FloatPanel_AyohaMerchantInfo_PointCardLoyaltyProgram_EnterpriseAccNo(`'+record.get('MembershipCardCode')+'`)"  style="background-color: transparent;margin:0px 0px 0px 0px">' +
              '<img  src="resources/icons/MembershipCardWhite.png" style="width:28px;height:28px;margin:0px 0px 0px 10px">' +

              '<p style="margin: -6px 0 0 0; font-size: 10px; color: white;">' +
              'Get It Now!'+
              '</p>' +

            '</div>' +
          '</div>';
        },
        sortProperty: 'EnterpriseName'
    }

});






var _DataStore_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MerchantLoyaltyCampaign.DiscountCardModel',
    id: '_MerchantLoyaltyCampaign_LoadDiscountCardLoyaltyStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/MerchantLoyaltyCampaign/MerchantLoyaltyCampaign_LoadDiscount',
      //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
        actionMethods: {
            read: 'POST'
          //  read: AyohaStoreCartRouteMethod
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },

    groupDir: "DESC",
    grouper: {
        groupFn: function (record) {
            return  '<div  style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 500px; font-family: Arial, sans-serif; padding: 2px 0px; box-sizing: border-box;">' +
            '<div style="display: flex; align-items: center;">' +
              '<div style="width: 42px; height: 42px; border: 2px none #333; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 5px; flex-shrink: 0;">' +
                '<img src='+record.get('EnterpriseLogo')+' style="width:42px;height:42px">' +
              '</div>' +
              '<div>' +
                '<h2 style="margin: 0; padding-bottom: 1px; font-size: 12px; font-weight: bold; border-bottom: 1px solid white;color:white">' +
                 record.get('EnterpriseName') + 
                '</h2>' +
                '<p style="margin: 2px 0 0 0; font-size: 10px; color: white;">' +
                // record.get('StampCampaignName') + ' - (End Date:' + record.get('EndDate') + ')' +
                 record.get('EnterpriseTagLine')+
                '</p>' +
              '</div>' +
            '</div>' +
            '<div onclick="FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram_MembershipCardCode(`'+record.get('MembershipCardCode')+'`)" style="background-color: transparent;margin:0px 0px 0px 0px">' +
              '<img  src="resources/icons/MembershipCardWhite.png" style="width:28px;height:28px;margin:0px 0px 0px 10px">' +

              '<p style="margin: -6px 0 0 0; font-size: 10px; color: white;">' +
              'Get It Now!'+
              '</p>' +

            '</div>' +
          '</div>';
        },
       // sortProperty: 'EnterpriseName'
    }

});












var _DataStore_MerchantLoyaltyCampaign_LoadContestCardLoyaltyStore = Ext.create('Ext.data.Store', {

  model: 'BuskartApp.model.MerchantLoyaltyCampaign.ContestCardModel',
  id: '_MerchantLoyaltyCampaign_LoadContestCardLoyaltyStoreID',
  proxy: {
      type: 'ajax',
     url: GetAPIurl() + '/MerchantLoyaltyCampaign/MerchantLoyaltyCampaign_LoadContest',
    //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
      actionMethods: {
          read: 'POST'
        //  read: AyohaStoreCartRouteMethod
      },
      reader: {
          type: 'json',
          rootProperty: 'results',
          totalProperty: 'total',
          successProperty: 'success',
          messageProperty: 'message'
      }
  },

  groupDir: "DESC",
  grouper: {
      groupFn: function (record) {
          return  '<div  style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 500px; font-family: Arial, sans-serif; padding: 2px 0px; box-sizing: border-box;">' +
          '<div style="display: flex; align-items: center;">' +
            '<div style="width: 42px; height: 42px; border: 2px none #333; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 5px; flex-shrink: 0;">' +
              '<img src='+record.get('EnterpriseLogo')+' style="width:42px;height:42px">' +
            '</div>' +
            '<div>' +
              '<h2 style="margin: 0; padding-bottom: 1px; font-size: 12px; font-weight: bold; border-bottom: 1px solid white;color:white">' +
               record.get('EnterpriseName') + 
              '</h2>' +
              '<p style="margin: 2px 0 0 0; font-size: 10px; color: white;">' +
              // record.get('StampCampaignName') + ' - (End Date:' + record.get('EndDate') + ')' +
               record.get('EnterpriseTagLine')+
              '</p>' +
            '</div>' +
          '</div>' +
          '<div onclick="FloatPanel_AyohaMerchantInfo_ContestCardLoyaltyProgram_MembershipCardCode(`'+record.get('MembershipCardCode')+'`)" style="background-color: transparent;margin:0px 0px 0px 0px">' +
            '<img  src="resources/icons/MembershipCardWhite.png" style="width:28px;height:28px;margin:0px 0px 0px 10px">' +

            '<p style="margin: -6px 0 0 0; font-size: 10px; color: white;">' +
            'Get It Now!'+
            '</p>' +

          '</div>' +
        '</div>';
      },
     // sortProperty: 'EnterpriseName'
  }

});








var _DataStore_MerchantLoyaltyCampaign_LoadEventCardLoyaltyStore = Ext.create('Ext.data.Store', {

  model: 'BuskartApp.model.MerchantLoyaltyCampaign.EventCardModel',
  id: '_MerchantLoyaltyCampaign_LoadEventCardLoyaltyStoreID',
  proxy: {
      type: 'ajax',
     url: GetAPIurl() + '/MerchantLoyaltyCampaign/MerchantLoyaltyCampaign_LoadEvent',
    //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
      actionMethods: {
          read: 'POST'
        //  read: AyohaStoreCartRouteMethod
      },
      reader: {
          type: 'json',
          rootProperty: 'results',
          totalProperty: 'total',
          successProperty: 'success',
          messageProperty: 'message'
      }
  },

  groupDir: "DESC",
  grouper: {
      groupFn: function (record) {
          return  '<div  style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 500px; font-family: Arial, sans-serif; padding: 2px 0px; box-sizing: border-box;">' +
          '<div style="display: flex; align-items: center;">' +
            '<div style="width: 42px; height: 42px; border: 2px none #333; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 5px; flex-shrink: 0;">' +
              '<img src='+record.get('EnterpriseLogo')+' style="width:42px;height:42px">' +
            '</div>' +
            '<div>' +
              '<h2 style="margin: 0; padding-bottom: 1px; font-size: 12px; font-weight: bold; border-bottom: 1px solid white;color:white">' +
               record.get('EnterpriseName') + 
              '</h2>' +
              '<p style="margin: 2px 0 0 0; font-size: 10px; color: white;">' +
              // record.get('StampCampaignName') + ' - (End Date:' + record.get('EndDate') + ')' +
               record.get('EnterpriseTagLine')+
              '</p>' +
            '</div>' +
          '</div>' +
          '<div onclick="FloatPanel_AyohaMerchantInfo_EventCardLoyaltyProgram_MembershipCardCode(`'+record.get('MembershipCardCode')+'`)" style="background-color: transparent;margin:0px 0px 0px 0px">' +
            '<img  src="resources/icons/MembershipCardWhite.png" style="width:28px;height:28px;margin:0px 0px 0px 10px">' +

            '<p style="margin: -6px 0 0 0; font-size: 10px; color: white;">' +
            'Get It Now!'+
            '</p>' +

          '</div>' +
        '</div>';
      },
      //sortProperty: 'EnterpriseName'
  }

});






var _DataStore_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStore = Ext.create('Ext.data.Store', {

  model: 'BuskartApp.model.AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel',
  id: '_AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaignStoreID',
  proxy: {
      type: 'ajax',
      url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucher_EntitledUser_LoadBySubscriberAccNo_MerchantLoyaltyCampaign',
      actionMethods: {
          read: 'GET'
      },
      reader: {
          type: 'json',
          rootProperty: 'results',
          totalProperty: 'total',
          successProperty: 'success',
          messageProperty: 'message'
      }
  },

  groupDir: "ASC",
  // grouper: {
  //     groupFn: function (record) {
  //         // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>',
  //         // return '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:5px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseNameUpperCase') + '<div style="display:none;">' + record.get('CampaignBatch') + '</div></th><th style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:26px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="3">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Campaign:' + record.get('StampCampaignNameLowerCase') + '-Batch(' + record.get('Batch') + ')</td></tr><tr><td style="background-color:#ffffff00;border-color:#ffffff00;border-style:solid;border-width:0px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">Expired:' + record.get('EndDate') + '</td></tr></thead></table>'
  //         // return '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="border-color:#000000;border-style:none;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:bottom;word-break:normal">' + record.get('EnterpriseName') + '</th><th style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:24px;font-weight:bold;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:middle;word-break:normal" rowspan="2">(' + record.get('CountLoyaltyStamped') + '/' + record.get('CountStampCardRowShow') + ')</th></tr><tr><td style="border-color:#000000;border-style:solid;border-width:1px;color:#ffffff;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">' + record.get('StampCampaignName') + '</td></tr></thead></table>'
  //         return '<div style="color:white;text-align: left;font-size:15px;width:98%;margin:0px 0px 0px 0px;">' + record.get('Voucher_EnterpriseName') + '</div>'
  //     },
  //     sortProperty: 'Voucher_EnterpriseName'
  // }

  grouper: {
      groupFn: function (record) {
          return  '<div  style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 500px; font-family: Arial, sans-serif; padding: 2px 0px; box-sizing: border-box;">' +
          '<div style="display: flex; align-items: center;">' +
            '<div style="width: 42px; height: 42px; border: 2px none #333; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 5px; flex-shrink: 0;">' +
              '<img src='+record.get('EnterpriseLogo')+' style="width:42px;height:42px">' +
            '</div>' +
            '<div>' +
              '<h2 style="margin: 0; padding-bottom: 1px; font-size: 12px; font-weight: bold; border-bottom: 1px solid white;color:white">' +
               record.get('EnterpriseName') + 
              '</h2>' +
              '<p style="margin: 2px 0 0 0; font-size: 10px; color: white;">' +
              // record.get('StampCampaignName') + ' - (End Date:' + record.get('EndDate') + ')' +
               record.get('EnterpriseTagLine')+
              '</p>' +
            '</div>' +
          '</div>' +
          '<div onclick="FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram_OpenMembershipCard(`'+record.get('MembershipCardCode')+'`)" style="background-color: transparent;margin:0px 0px 0px 0px">' +
            '<img  src="resources/icons/MembershipCardWhite.png" style="width:28px;height:28px;margin:0px 0px 0px 10px">' +

            '<p style="margin: -6px 0 0 0; font-size: 10px; color: white;">' +
            'Get It Now!'+
            '</p>' +

          '</div>' +
        '</div>';
      },
    //  sortProperty: 'EnterpriseName'
  }

});




var _DataStore_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStore = Ext.create('Ext.data.Store', {

  model: 'BuskartApp.model.MerchantLoyaltyCampaign.PointCardModel',
  id: '_DashboardPointCard_SuccessCheckIn_LoadPointCardPerkStoreID',
  proxy: {
      type: 'ajax',
     url: GetAPIurl() + '/DashboardAyohaUser/DashboardPointCard_SuccessCheckIn_LoadPointCardPerk',
    //  url: GetAPIurl() + '/AyohaStore_Cart/'+AyohaStoreCartRouteFunction,
      actionMethods: {
          read: 'POST'
        //  read: AyohaStoreCartRouteMethod
      },
      reader: {
          type: 'json',
          rootProperty: 'results',
          totalProperty: 'total',
          successProperty: 'success',
          messageProperty: 'message'
      }
  },

 

});