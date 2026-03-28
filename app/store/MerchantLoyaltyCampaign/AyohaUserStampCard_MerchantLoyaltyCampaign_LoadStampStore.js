Ext.define('BuskartApp.store.MerchantLoyaltyCampaign.AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore', {
});

var _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore = Ext.create('Ext.data.Store', {
    model: 'BuskartApp.model.MerchantLoyaltyCampaign.StampCardModel',
    id: '_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStoreID',
    proxy: {
        type: 'ajax',
        url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStamp',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'results',
            totalProperty: 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    },
    groupDir: 'ASC',
    grouper: {
        groupFn: function (record) {
            return (record.get('EnterpriseName') || '').trim();
        },
        sortProperty: 'EnterpriseName'
    }
});


// var _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore = Ext.create('Ext.data.Store', {
//     model: 'BuskartApp.model.MerchantLoyaltyCampaign.StampCardModel',
//     id: '_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStoreID',
//     proxy: {
//         type: 'ajax',
//         url: GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStamp',
//         actionMethods: {
//             read: 'POST'
//         },
//         reader: {
//             type: 'json',
//             rootProperty: 'results',
//             totalProperty: 'total',
//             successProperty: 'success',
//             messageProperty: 'message'
//         }
//     },

//     groupDir: 'ASC',

//      grouper: {
//         groupFn: function (record) {
//             return record.get('EnterpriseName') || '';
//         },
//         sortProperty: 'EnterpriseName'
//     }
// });



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