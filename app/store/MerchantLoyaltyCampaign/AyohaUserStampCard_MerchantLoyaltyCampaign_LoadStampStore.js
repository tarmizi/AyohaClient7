Ext.define('BuskartApp.store.MerchantLoyaltyCampaign.AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore', {
});


var _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore = Ext.create('Ext.data.Store', {

    model: 'BuskartApp.model.MerchantLoyaltyCampaign.StampCardModel',
    id: '_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStoreID',
    proxy: {
        type: 'ajax',
       url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStamp',
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
            return  '<div onclick="FloatPanel_AyohaMerchantInfo_LoyaltyProgram_OpenMerchantLoyaltyProgram_MembershipCardCode(`'+record.get('MembershipCardCode')+'`)" style="display: flex; align-items: center; justify-content: space-between; width: 100%; max-width: 500px; font-family: Arial, sans-serif; padding: 2px 0px; box-sizing: border-box;">' +
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
            '<div  style="background-color: transparent;margin:0px 0px 0px 0px">' +
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





var _DataStore_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStore = Ext.create('Ext.data.Store', {

  model: 'BuskartApp.model.MerchantLoyaltyCampaign.StampCardModel',
  id: '_DashboardStampCard_SuccessCheckIn_LoadStampCardPerkStoreID',
  proxy: {
      type: 'ajax',
     url: GetAPIurl() + '/DashboardAyohaUser/DashboardStampCard_SuccessCheckIn_LoadStampCardPerk',
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