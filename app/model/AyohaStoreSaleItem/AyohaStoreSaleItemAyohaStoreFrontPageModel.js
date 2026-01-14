Ext.define('BuskartApp.model.AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [            
      'CountItemCategory',
      'CountItem',
      'CountLike',
      'CountMembershipCard',
      'MembershipCardCode',
      'MembershipApprovalStatus',
      'isLikeStatus',
      'CartTotalItemQuantity',
      'CartSumItemSumPrice',
      'ItemCartCode',
      'MembershipEventCount',
      'MembershipContestCount',
      'VoucherCount',
      'StampPointCampaignCodeCount',
      'StampPointCampaignCode'

        ]
    }
});