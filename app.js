/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'BuskartApp.Application',

    name: 'BuskartApp',

    requires: [
        // This will automatically load all classes in the BuskartApp namespace
        // so that application classes do not need to require each other.
        'BuskartApp.*'
    ],

    // models: ['AyohaHotMerchant.AyohaHotMerchantModel'],
    // stores: ['AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusModified_Store'],
    // views: ['login.FanLogin', 'login.FloatPanel_ForgotPassword', 'config.Route', 'Dashboard.AyohaDashboard','Dashboard.buskartMap'],
  




    models: ['Customer.CustomerModel', 'Receipt.FlatBillModel', 'CloudReceiptsMobileUser.CloudReceiptsMobileUserModel', 'Notifications.NotificationsModel',
        'Enterprise.EnterpriseModel', 'EnterpriseSubscriber.EnterpriseSubscriberModel', 'ReceiptTemplate.ReceiptTemplateModel', 'Receipt.ReceiptModel',
        'RedeemItem.RedeemItemModel', 'LoyaltyStamp.LoyaltyStampModel', 'Subscriber.SubscriberModel', 'StampCampaign.StampCampaignModel', 'StampCard.StampCardModel',
        'StampContentDefaultTemplate.StampContentDefaultTemplateModel', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageModel', 'AyohaEnterpriseAccount.AyohaEnterpriseAccountModel',
    'Master.BusinessTypeModel', 'Master.EnterprisesBranchTypeModel', 'Enterprises.EnterprisesModel', 'AyohaEnterprisesUser.AyohaEnterprisesUserModel', 'Master.AyohaEnterprisesUserStatusModel',
    'Master.AyohaEnterprisesUserTypeModel', 'StampCampaignEnterprises.StampCampaignEnterprisesModel', 'StampCampaignStamper.StampCampaignStamperModel', 'Advertisement.AdvertisementModel',
    'Advertisement.AdvertisementImagesModel', 'Advertisement.AdvertisementVideoModel', 'Advertisement.AdvertisementAudioModel', 'Master.AdvertisementTypeModel', 'Master.ModuleModel', 'AdvertisementLinkModule.AdvertisementLinkModuleModel',
    'Advertisement.AdvertisementDashboardCountModel', 'Master.AdvertisementApprovalStatusModel', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogModel', 'AyohaUserProfile.AyohaUserProfileModel', 'AyohaUserStampCard.AyohaUserStampCardModel',
    'TemporaryStampQrCode.TemporaryStampQrCodeModel', 'Membership.MembershipModel', 'DashboardAyohaRewardSummary.DashboardAyohaRewardSummaryModel', 'LoyaltyCardMember.LoyaltyCardMemberModel', 'MembershipCard.MembershipCardModel',
    'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledModel', 'MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledModel', 'Memberships.MembershipsModel', 'DashboardAyohaUser.DashboardAyohaUserModel',
    'AyohaRedeemPrize.AyohaRedeemPrizeModel', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryModel', 'AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogModel', 'AyohaRewardPoint.AyohaRewardPointModel',
    'StampCampaignRubberStamp.StampCampaignRubberStampModel', 'PointCampaignRedeemItemSetting.PointCampaignRedeemItemSettingModel', 'LoyaltyPoint.LoyaltyPointModel', 'LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryModel',
    'LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogModel', 'Memberships.MembershipsCheckIsMemberModel', 'StampCampaign.StampCampaignDashboardAyohaUserLatestStampModel', 'LoyaltyPoint.LoyaltyPointDashboardAyohaUserLatestPointModel',
    'AyohaNotification.AyohaNotificationModel', 'AyohaRewardContest.AyohaRewardContestModel', 'AyohaRewardContestant.AyohaRewardContestantModel', 'MembershipCard.MembershipCardMembershipsModel', 'Advertisement.AdvertisementloadMediaAyohaUserDashboardModel',
    'AyohaMerchantReview.AyohaMerchantReviewModel', 'Master.YearOnlyModel', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryCountStatusModel', 'Enterprises.EnterpriseContactUsLinkModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemModel',
    'AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageModel', 'AyohaStoreLikeStatus.AyohaStoreLikeStatusModel', 'AyohaStoreCart.AyohaStoreCartModel', 'Master.MonthOnlyModel', 'AyohaStoreCart.AyohaStoreCartStatusModel',
    'AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendModel', 'ChargeDeliverySetting.ChargeDeliverySettingModel', 'AyohaStoreSaleItem.AyohaStoreSaleItemItemCategoryModel', 'AyohaStoreShippingAddress.AyohaStoreShippingAddressModel',
    'Master.StateModel', 'Master.CountryModel', 'AyohaStoreOrder.AyohaStoreOrderModel', 'AyohaStoreOrder.AyohaStoreOrderCheckOutModel', 'Master.PaymentMethodModel', 'AyohaStorePayment.AyohaStorePaymentModel', 'Enterprises.EnterprisesMerchantListModel',
    'Enterprises.EnterprisesMerchantListSearchResultModel', 'AyohaeWalletTransaction.AyohaeWalletTransactionModel', 'AyohaeWallet.AyohaeWalletModel', 'Memberships.MembershipsCheckIsMemberScanAndPayModel',
    'Enterprises.EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoModel', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserModel', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUser_VoucherHistoryModel',
    'AyohaHotMerchant.AyohaHotMerchantModel', 'AyohaRewardEvent.AyohaRewardEventModel', 'AyohaRewardContest.AyohaRewardContest_SelfieAndWinModel', 'EnterprisesCoverMedia.EnterprisesCoverMediaModel',
    'EnterprisesOnlineStore.EnterprisesOnlineStoreModel', 'EnterprisesWorkingHour.EnterprisesWorkingHourModel', 'AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramModel',
    'Master.BankAccountTypeModel', 'AyohaUserProfile.AyohaUserProfile_BankAccountModel','MembershipCardPaymentPlan.MembershipCardPaymentPlanModel','AyohaStoreOrder.AyohaStoreOrderPeding_MainDashboardModel',
    'AyohaStoreCart.AyohaStoreCartReOrderModel','AyohaeWalletTransaction.AyohaeWalletAllTransactionModel','Merchantperk.Merchantperk_ViewModel','MerchantLoyaltyCampaign.StampCardModel','MerchantLoyaltyCampaign.PointCardModel',
'MerchantLoyaltyCampaign.DiscountCardModel','MerchantLoyaltyCampaign.ContestCardModel','MerchantLoyaltyCampaign.EventCardModel','DiscountCampaign.DiscountCampaignModel',
'PointCampaignRedeem.PointCampaignRedeemModel','DashboardAyohaUser.SuccessCheckInModel','ViewMerchantDashboard.StoreActivityModel'],

    stores: ['Notifications.NotificationsCountTypeNNStore', 'Notifications.NotificationsCountTypeRStore', 'Enterprises.EnterprisesLoadByMerchantCategoryStore',
    'EnterpriseSubscriber.EnterpriseSubscribergetBySubcriberAccNoSearchReceiptStore','RedeemItem.RedeemItemgetByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadByEnterpriseAccNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore',
    'LoyaltyStamp.LoyaltyStampLoadByStampedByUserAccNoAndEnterpriseAccNoStore', 'Subscriber.SubscriberLoadByEnterpriseAccountNoStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoHistoryStore'
    ,'StampCampaign.StampCampaignLoadByEnterpriseAccNoStore', 'StampCampaign.StampCampaignLoadByStampCampaignCodeStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccNoStore',
    'StampContentDefaultTemplate.StampContentDefaultTemplateResetByIDStore', 'StampCard.StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore', 'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore',
    'LoyaltyCardBackgroundImage.LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore', 'AyohaEnterpriseAccount.AyohaEnterprisesUserLoginStore',
    'Master.BusinessTypeLoadStore', 'Master.EnterprisesBranchTypeStore', 'Enterprises.EnterprisesLoadByEnterpriseAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoginStore',
    'Master.AyohaEnterprisesUserTypeLoadStore', 'Master.AyohaEnterprisesUserStatusLoadStore', 'Enterprises.EnterprisesLoadByEnterpriseHQAccNoStore', 'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore',
    'AyohaEnterprisesUser.AyohaEnterprisesUserLoadByAccountNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByEnterpriseAccNoStore', 'StampCampaignEnterprises.StampCampaignEnterprisesLoadByStampCampaignCodeStore',
    'StampCampaignStamper.StampCampaignStamperLoadByStampCampaignCodeStore', 'Advertisement.AdvertisementloadByEnterpriseHQAccNoStore', 'Advertisement.AdvertisementloadByApprovedAdvertisementStartDateEndDateStore',
    'Advertisement.AdvertisementAudioloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementVideoloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementImagesloadByEnterpriseHQAccNoAdvertisementCodeStore',
    'Master.AdvertisementTypeLoadAllStore', 'Master.ModuleloadMasterStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementDashboardCountByEnterpriseHQAccNoStore',
    'Master.AdvertisementApprovalStatusLoadMasterStore', 'AdvertisementApprovalStatusLog.AdvertisementApprovalStatusLogLoadByEnterpriseHQAccNoAdvertisementCodeStore', 'Advertisement.AdvertisementloadMediaStore', 'Advertisement.AdvertisementloadMediaPreviewStore',
    'Enterprises.EnterprisesContactUsLinkStore', 'Advertisement.AdvertisementloadMediaAdvertisementVIAStore', 'Advertisement.AdvertisementloadStandardStore', 'Advertisement.AdvertisementloadHotSeatStore', 'AyohaUserProfile.AyohaUserProfileLoginStore',
    'AyohaUserProfile.AyohaUserProfileLoadProfileStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore', 'AdvertisementLinkModule.AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore',
    'TemporaryStampQrCode.TemporaryStampQrCodeGenerateTempQrCodeStore', 'AyohaUserStampCard.AyohaUserStampCardLoadByStampCardCodeStore', 'AyohaUserStampCard.AyohaUserStampCardCheckStampedStatusStore',
    'Membership.MembershipLoadBySubscriberAccNoStore', 'AyohaUserStampCard.AyohaUserStampCardNearestRedeemItemStore', 'AyohaUserProfile.AyohaUserProfileUnClaimedTotalStampPointStore',
    'DashboardAyohaRewardSummary.DashboardAyohaRewardSummaryStore', 'Enterprises.EnterprisesLoadByRowStatusStore', 'StampCampaign.StampCampaignLoadByGetLoyaltyCardStore', 'LoyaltyCardMember.LoyaltyCardMemberLoadBySubscriberAccNoStore',
    'MembershipCard.MembershipCardLoadByEnterpriseAccNoStore', 'MembershipCardCampaingEntitled.MembershipCardCampaingEntitledLoadByMembershipCardCodeStore', 'MembershipCardEnterprisesEntitled.MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
    'Memberships.MembershipsLoadBySubscriberAccNoStore', 'MembershipCard.MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore', 'MembershipCard.MembershipCardAyohaUserMembershipCardStore',
    'AyohaUserStampCard.AyohaUserStampCardLoadStampCardfromQrCodeStore', 'Enterprises.EnterprisesGetEnterprisesHQAccNoStore', 'DashboardAyohaUser.DashboardAyohaUserMainStore', 'LoyaltyStamp.LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore',
    'AyohaRedeemPrize.AyohaRedeemPrizeLoadByRowStatusAndGCStore', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore', 'AyohaRedeemPrizeHistoryLog.AyohaRedeemPrizeHistoryLogLoadByRedeemHistoryCodeStore',
    'AyohaRewardPoint.AyohaRewardPointLoadBySubscriberAccNoStore', 'StampCampaignRubberStamp.StampCampaignRubberStampLoadByStampCampaignCodeStore', 'PointCampaignRedeemItemSetting.PointCampaignRedeemLoadByPointCampaignCodeStore',
    'LoyaltyPoint.LoyaltyPointLoadByPointCampaignCodeUserStore', 'LoyaltyPointRedeemPrizeHistory.LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore', 'LoyaltyPointRedeemPrizeHistoryLog.LoyaltyPointRedeemPrizeHistoryLogLoadStore',
    'Memberships.MembershipsCheckIsMemberStore', 'StampCampaign.StampCampaignDashboardAyohaUserLatestStampStore', 'LoyaltyPoint.LoyaltyPointDashboardAyohaUserLatestPointStore', 'AyohaNotification.AyohaNotificationLoadBySubscriberAccNoStore',
    'AyohaRewardPoint.AyohaRewardPointRewardRankingStore', 'AyohaRewardContest.AyohaRewardContestLoadActiveStore', 'AyohaRewardContestant.AyohaRewardContestantLoadByContestCodeStore', 'AyohaRewardContestant.AyohaRewardContestantLoadBySubscriberAccNoStore',
    'AyohaUserStampCard.AyohaUserDashBoardNearestRedeemItemListStore', 'MembershipCard.MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore', 'AyohaRewardPoint.AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore',
    'Advertisement.AdvertisementloadMediaAyohaUserDashboardStore', 'AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoStore', 'DashboardAyohaUser.AyohaUserDashBoardNearestRedeemItemStampCardStore', 'DashboardAyohaUser.AyohaUserDashBoardNearestRedeemItemPointCardStore',
    'Master.YearOnlyStore', 'AyohaRedeemPrizeHistory.AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemAyohaStoreFrontPageStore',
    'AyohaStoreLikeStatus.AyohaStoreLoadLikeStatusStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadItemCategoryStore', 'AyohaStoreCart.AyohaStoreCartLoadCartAyohaStore', 'Master.MonthOnlyStore', 'AyohaStoreCart.AyohaStoreCartLoadItemCartStatusStore',
    'AyohaStoreSaleItem.AyohaStoreSaleItemImgExtendloadByItemCodeStore', 'Advertisement.AdvertisementloadFloatingStore', 'Memberships.MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore',
    'Memberships.MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore', 'ChargeDeliverySetting.ChargeDeliverySettingLoadByEnterpriseAccNoStore', 'AyohaMerchantReview.AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore',
    'AyohaStoreShippingAddress.AyohaStoreShippingAddressLoadBySubscriberAccNoStore', 'Master.CountryStore', 'Master.StateStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByEnterpriseAccNoAndOrderStatusStore',
    'AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore', 'AyohaStoreOrder.AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore', 'Master.PaymentMethodStore', 'AyohaStorePayment.AyohaStorePaymentGenerateReceiptStore',
    'Enterprises.EnterprisesDashboardSearchAyohaMerchantEnterpriseAccNoStore', 'Enterprises.EnterprisesLoadAyohaMerchantListStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore', 'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoDebitCreditStore', 'AyohaeWallet.AyohaeWalletAccountSettingStore', 'AyohaUserProfile.AyohaUserProfileLoadByPhoneNoStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore', 'Memberships.MembershipsCheckIsMemberScanAndPayStore', 'Enterprises.EnterprisesLoadByEnterpriseBusinessTypeStore', 'AyohaStoreOrder.AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore',
    'AyohaStoreCart.AyohaStoreCartOrderCartStore', 'Enterprises.EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNoStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore',
    'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore', 'AyohaHotMerchant.AyohaHotMerchantLoadByAyohaHotMerchantStatusStore', 'AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoStore', 'AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoStore',
    'AyohaRewardContest.AyohaRewardContestSelfieAndWinLoadBySubscriberAccNoContestCodeStore', 'Enterprises.EnterprisesLoadAyohaMerchantListbyEnterpriseBusinessTypeStore', 'AyohaRewardEvent.AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore',
    'AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardVoucherHistoryStore', 'AyohaRewardVoucherEntitledUser.AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoAyohaStoreVoucherHistoryStore',
    'EnterprisesCoverMedia.EnterprisesCoverMediaLoadByEnterpriseAccNoStore', 'EnterprisesOnlineStore.EnterprisesOnlineStoreLoadByEnterpriseAccNoStore', 'EnterprisesWorkingHour.EnterprisesWorkingHourLoadByEnterpriseAccNoStore', 'AyohaMerchantInfoMembershipLoyaltyProgram.AyohaMerchantInfoMembershipLoyaltyProgramStore',
    'AyohaeWalletTransaction.AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore', 'AyohaStoreSaleItem.AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore', 'AyohaeWallet.AyohaeWalletAccountSettingHardCodedStore',
    'MembershipCard.MembershipCardLoadBySubscriberAccNoDashboardMainStore','Master.BankAccountTypeStore', 'AyohaeWallet.AyohaeWalletAccountRequestCashOutStore','AyohaRewardContest.AyohaRewardContestLoadBySubscriberAccNoAndContestCodeStore','MembershipCardPaymentPlan.MembershipCardPaymentPlanLoadByPaymentPlanCodeStore',
    'AyohaStoreOrder.AyohaStoreOrderPendingOrderMainDashbordStore','Merchantperk.VIEW_merchantperk_ViewStore','MembershipCard.MembershipCardLoadByMembershipCardCodeStore','MerchantLoyaltyCampaign.AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore','MerchantLoyaltyCampaign.MerchantLoyaltyCampaignStore',
'Enterprises.EnterprisesLoadLastCheckInStore','DiscountCampaign.DiscountCampaing_LoadBySubscriberAccNoStore','PointCampaignRedeem.PointCampaignRedeemLoadByPointRedeemStatusStore','DashboardAyohaUser.SuccessCheckInStore',
'ViewMerchantDashboard.StoreActivityStore','Enterprises.Enterprises_LoadRecentlyCheckIn'],
    //
    views: ['ImageCarousel','Config.AppState','MyAccount.Dashboard', 'MyAccount.FloatPanel_MyAccountMaster', 'Config.Configs', 'Config.QRcode', 'Main', 'LoginAyohaUser', 'Subscriber.FloatPanel_SubscriberMaster', 'AyohaNotification.FloatPanel_AyohaNotification',
        'AyohaNotification.FloatPanel_AyohaNotification_Notification', 'AyohaReward.FloatPanel_AyohaReward_PointTransactions', 'AyohaReward.FloatPanel_AyohaReward_ContestHistory',
        'AyohaReward.FloatPanel_AyohaReward_ContestAdvertisement', 'AyohaReward.FloatPanel_AyohaReward_ViewMyRanking', 'AyohaReward.FloatPanel_AyohaReward_Congratulations',
        'NearestRedemption.FloatPanel_NearestRedemption', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard_ContentNote',
        'AyohaCardManagement.FloatPanel_AyohaCardManagement_StampSuccesAnimation', 'AyohaCardManagement.FloatPanel_AyohaCardManagement_StampQrCode', 'Advertisement.FloatPanel_PreviewAdvertisement',
        'LoyaltyCard.FloatLoyaltyCardPoint', 'LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrize', 'LoyaltyCard.FloatLoyaltyCardPoint_RedeemPrizeHistoryLog', 'Membership.FloatPanel_MembershipCardList_MyMembershipCard',
        'Membership.FloatPanel_MembershipCardList_Upgrade', 'Membership.FloatPanel_Membership_TermAndCondition', 'Membership.FloatPanel_MembershipCardManagement_TermAndCondition', 'RewardStore.FloatPanel_RewardStore', 'RewardStore.FloatPanel_RewardStoreMembershipCard',
        'AyohaMerchantReview.AyohaMerchantReview', 'AyohaMerchantReview.AyohaMerchantReview_AddEdit', 'QrCodeScannerInstascan.FloatPanel_QrCodeScanner_ScanCampaign', 'Registration.FloatPanel_ForgotPassword',
        'QrCodeScannerInstascan.FloatPanel_QrCodeScanner_CenterLineMessage', 'QrCodeScannerInstascan.Scan_QRCode_Process', 'AyohaeWallet.FloatPanel_AyohaeWallet_Icon', 'Registration.FloatPanel_AyohaUserRegistration',
        'FloatPanel.TestRoutePanel', 'Master.FloatPanel_GraphicConfeti', 'RewardStore.FloatPanel_RewardStoreCategoryFilter', 'Master.FloatPanel_BusinessTypeList', 'AyohaReward.FloatPanel_AyohaPointRedemption_Redeem',
        'AyohaReward.FloatPanel_AyohaReward_RedemptionHistory', 'AyohaReward.FloatPanel_AyohaPointRedemption_RedeemHistoryLog', 'AyohaReward.FloatPanel_AyohaPointRedemption_Cancel', 'Master.FloatPanel_YearOnly',
    'AyohaReward.FloatPanel_AyohaReward_RedemptionHistory_Details', 'Advertisement.FloatPanel_Advertisement_FloatAdvertisement', 'AyohaStoreSaleItem.FloatPanel_AyohaStore', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_LikeStatusList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_ItemCategory', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_Cart', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_FloatCart', 'Master.FloatPanel_MonthOnly', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_CartStatusList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_SaleItemDetail', 'MyAccount.FloatPanel_AccountVerified', 'FloatPanel.LoadingPanel', 'Advertisement.FloatPanel_FloatingAdvertisement', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardUsed',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed_Floating', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryChargeList',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_DotMenuItem', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_ShareAndWhatsapp', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_CheckOut', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_DeliveryAddress',
    'Master.FloatPanel_State', 'Master.FloatPanel_Country', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentMethodList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentReceipt',
    'MyAccount.Dashboard_SearchMerchantList', 'RewardStore.FloatPanel_RewardStore_SearchResult', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_AyohaPointCollectedAnim', 'FloatPanel.FloatPanel_ExitDialogBox', 'AyohaeWallet.FloatPanel_AyohaeWallet',
    'AyohaeWallet.FloatPanel_AyohaeWallet_TransactionHistory', 'AyohaeWallet.FloatPanel_AyohaeWallet_TransactionIncomeSpent', 'AyohaeWallet.FloatPanel_AyohaeWallet_Setting', 'AyohaeWallet.FloatPanel_AyohaeWallet_Passcode', 'AyohaeWallet.FloatPanel_AyohaeWallet_Transfer',
        'AyohaeWallet.FloatPanel_AyohaeWallet_Transaction_Detail', 'AyohaeWallet.FloatPanel_AyohaeWallet_TransferConfirm', 'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Upgrade', 'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Payment',
    'AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm', 'AyohaReward.FloatPanel_AyohaReward_PointTransaction_eWallet', 'MyAccount.FloatPanel_OrderHistory', 'MyAccount.FloatPanel_OrderCart', 'Dashboard.DashboardMerchantReward',
    'Dashboard.FloatPanel_DashboardMerchantReward', 'AyohaReward.FloatPanel_AyohaReward_AyohaTapContest', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherDetail', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart',
    'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_Dashboard', 'AyohaRewardVoucher.FloatPanel_AyohaReward_MerchantReward_VoucherListUsed', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_BuyNow',
    'AyohaHotMerchant.FloatPanel_AyohaHotMerchant_OnlineStoreList', 'Dashboard.FloatPanel_DashboardMerchantReward_MembershipEventDetail', 'MyAccount.FloatPanel_MyAccountRankDescription',
    'Dashboard.FloatPanel_DashboardMerchantReward_MembershipContestDetail', 'Dashboard.FloatPanel_DashboardMerchantReward_MembershipContestSelfieForm', 'Dashboard.FloatPanel_Dashboard_AyohaMerchant_SeeMore', 'AyohaeWallet.FloatPanel_AyohaeWallet_ForgotPassword',
    'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipEventList', 'AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipContestList', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaRewardHome', 'AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore',
    'MyAccount.FloatPanel_MerchantDetailPage', 'AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_BusinessHour', 'MyAccount.Scan_QRCode_StampCard', 'MyAccount.FloatPanel_AyohaMembershipAdvantages', 'AyohaeWallet.FloatPanel_AyohaeWallet_CashOut',
    'AyohaeWallet.FloatPanel_AyohaeWallet_CashOutConfirm', 'Master.FloatPanel_BankAccountName', 'Master.FloatPanel_BankAccountType','AyohaRewardMerchantDiscountLoyalty.FloatPanel_MerchantDiscountLoyaltyDescription','Dashboard.FloatPanel_DashboardMerchantReward_UploadedReceipt',
    'Membership.FloatPanel_Membership_MembershipCardSaleDetail','Membership.FloatPanel_MembershipCardList_NotYetSubscribed','AyohaStoreSaleItem.FloatPanel_AyohaStore_CheckOut_MembershipCard','Config.CoreVariable','Membership.FloatPanel_Membership_MembershipCardHubs',
'AyohaStoreSaleItem.FloatPanel_MainDashboard_PendingOrder','MyAccount.FloatPanel_ShoppingBagOrder','AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory_Single','Menu.DrawerMenu','MyAccount.FloatPanel_MyAccount_AllTransactionHistory',
'AyohaEnterpriseAccount.FloatPanel_AyohaEnterpriseRewardItem','Menu.FloatPanel_ScannedMerchant','AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_LoyaltyProgram','AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_PointCardLoyaltyProgram',
'AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgram','AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_ContestCardLoyaltyProgram','AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_EventCardLoyaltyProgram','AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgram',
'AyohaReward.FloatPanel_AyohaReward_MainDashboard','Membership.FloatPanel_Membership_CheckInPage','Membership.FloatPanel_Membership_CheckInPage_Confirmed','AyohaReward.FloatPanel_AyohaReward','Config.CoreFunction','Membership.FloatPanel_Membership_MembershipCardHubsUpgrade',
'AyohaMerchant.AyohaMerchantReward','Membership.MembershipCardList','Membership.SideMenuMembershipCardList','AyohaMerchant.SideMenuAyohaMerchantReward','CheckOut.FloatPanel_CheckOut_NonMember','CheckOut.FloatPanel_CheckOut_ConfirmedCheckOut','Config.AppStyle'],






    // The name of the initial view to create.
    // mainView: 'BuskartApp.view.main.Main',
mainView: 'BuskartApp.view.Main',


    launch: function () {
        // Destroy the #appLoadingIndicator element
        //  Ext.fly('appLoadingIndicator').destroy();


     //  Ext.getCmp('tabPanelMain').getTabBar().hide();

        //Ext.Viewport.add(Ext.create('Buskart.view.Dashboard.buskartMap'));\\
        //    Ext.Viewport.add({
        //              xtype: 'map',
        //        useCurrentLocation: true
        //});

    },

});



//Ext.application({

//    extend: 'BuskartApp.Application',
//    name: 'BuskartApp',
//        requires: [
//        // This will automatically load all classes in the BuskartApp namespace
//        // so that application classes do not need to require each other.
//            'BuskartApp.*','Ext.ux.google.Map'
//  ],

//    launch: function () {
//       Ext.Viewport.add({
//      xtype: 'google-map',
//     useCurrentLocation: true
//});
//    }
//});