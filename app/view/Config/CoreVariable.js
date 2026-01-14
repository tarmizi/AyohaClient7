Ext.define('BuskartApp.view.Config.CoreVariable', {
});



var CoreVariable_CheckOutBoxDesign="background-color: white;border-top:1px none grey;border-left:1px none grey;border-bottom:1px none grey;border-right:1px none grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);";

function FloatPanel_AyohaStore_getEnterpriseAccNo() {
   
       var EntAccNo;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntAccNo = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        EntAccNo = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntAccNo = globalDashboardVIAAdvertisement_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntAccNo = globalStampCampaignEnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntAccNo = globalEnterpriseAccNo_FloatLoyaltyCardPoint;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntAccNo = globalFloatPanel_RewardStore_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntAccNo = globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntAccNo = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardOrderHistory") {
           EntAccNo = globalFloatPanel_OrderHistory_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntAccNo = globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart") {
           EntAccNo = globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardAyohaVoucherHistory") {
           EntAccNo = globalFloatPanel_OrderHistory_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CheckOut") {
           EntAccNo = globalFloatPanel_AyohaStore_CheckOut_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntAccNo = globalDashboard_AyohaHotMerchant_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntAccNo = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntAccNo = _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaNotification") {
           EntAccNo = globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntAccNo = _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaMerchantInfo_LoyaltyProgram") {
        EntAccNo = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
    }

       
       return EntAccNo;
   }
   
   function FloatPanel_AyohaStore_getEnterpriseLogo() {
   
   //alert(globalFloatPanel_AyohaStore_ModuleTagging)
       var EntLogo;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntLogo = globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        EntLogo = globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntLogo = globalDashboardVIAAdvertisement_EnterpriseLogoPath;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntLogo = globalStampCampaignEnterpriseLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntLogo = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntLogo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntLogo = globalFloatPanel_FloatingAdvertisement_CompanyLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntLogo = globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardOrderHistory") {
           EntLogo = globalFloatPanel_OrderCartEnterpriseLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntLogo = globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseLogo;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart") {
           EntLogo = globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseLogo;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardAyohaVoucherHistory") {
           EntLogo = globalFloatPanel_OrderCartEnterpriseLogo;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntLogo = globalDashboard_AyohaHotMerchant_EnterpriseLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntLogo = globalFloatPanelMerchantDetailPage_EnterpriseLogo;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntLogo = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntLogo = global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CheckOut") {
        EntLogo = globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaMerchantInfo_LoyaltyProgram") {
        EntLogo = globalFloatPanel_AyohaStore_CheckOut_EnterpriseLogo;
    }
  
   
       
    //   alert(globalFloatPanelMerchantDetailPage_EnterpriseLogo);
       return EntLogo;
   }
   
   
   function FloatPanel_AyohaStore_getEnterpriseName() {
   
   
      
   
       var EntName;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntName = globalFloatPanel_PreviewAdvertisement_EnterpriseName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        EntName = globalFloatPanel_PreviewAdvertisement_EnterpriseName;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntName = globalDashboardVIAAdvertisement_EnterpriseName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntName = globalStampCampaignEnterpriseName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntName = globalPointCampaignEnterpriseName_FloatLoyaltyCardPoint;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntName = globalFloatPanel_RewardStore_EnterpriseName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntName = globalFloatPanel_FloatingAdvertisement_CompanyName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntName = globalFloatPanel_AyohaNotification_Notification_EnterpriseName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardOrderHistory") {
           EntName = globalFloatPanel_OrderCartEnterpriseName;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntName = globalFloatPanel_AyohaReward_AyohaTapContest_EnterpriseName;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart") {
           EntName = globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseName;
       }
   
   
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "DashboardAyohaVoucherHistory") {
           EntName = globalFloatPanel_OrderCartEnterpriseName;
       }
   
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntName = globalDashboard_AyohaHotMerchant_EnterpriseName;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntName = globalFloatPanelMerchantDetailPage_EnterpriseName;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntName = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
           EntName = global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CheckOut") {
        EntName = globalFloatPanel_AyohaStore_CheckOut_EnterpriseName;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaMerchantInfo_LoyaltyProgram") {
        EntName = globalFloatPanel_AyohaStore_CheckOut_EnterpriseName;
    }
       
       return EntName;
   }
   
   function FloatPanel_AyohaStore_getEnterpriseTagLine() {
      // alert(globalFloatPanel_AyohaStore_ModuleTagging)
       var EntTagLine;
       if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
           EntTagLine = globalFloatPanel_PreviewAdvertisement_AdvertisementTitle;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        EntTagLine = globalFloatPanel_PreviewAdvertisement_AdvertisementTitle;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
           EntTagLine = globalDashboardVIAAdvertisement_AdvertisementTitle;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
           EntTagLine = globalStampCampaignAdvertisementTitle;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
           EntTagLine = globalFloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCard_EnterpriseTagLine;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
           EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
           EntTagLine = globalFloatPanel_FloatingAdvertisement_AdvertismentTitle;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
           EntTagLine = globalFloatPanel_AyohaNotification_Notification_EnterpriseTagLine;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
           EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
       }
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
           EntTagLine = globalDashboard_AyohaHotMerchant_EnterpriseTagLine;
       }
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
           EntTagLine = globalFloatPanelMerchantDetailPage_EnterpriseTagLine;
       }
       
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
           EntTagLine = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesTagLine;
       }
   
   
       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_NotYetSubscribed") {
         //  EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
           EntTagLine = global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesTagLine;
       }

       else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaStore_CheckOut") {
        EntTagLine = globalFloatPanel_AyohaStore_CheckOut_EnterpriseTagLine;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaMerchantInfo_LoyaltyProgram") {
        EntTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;
    }
    //  alert(globalFloatPanel_AyohaStore_ModuleTagging)
       return EntTagLine;
   }



   function FloatPanel_AyohaStore_getFBLink() {
    var result;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_FBLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_FBLink;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalVIAEnterpriseFacebookUrl;
       
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
        result = globalFloatPanel_PreviewAdvertisement_FBLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_FBLink;
    }
    else if(globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_FB;
    }else{
        result = globalFloatPanel_RewardStore_EnterpriseFacebook;
    }


    return result;

}



function FloatPanel_AyohaStore_getInstaLink() {
    var result;
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_InstaLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_InstaLink;
      
    } 
    else if  (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalVIAEnterpriseInstagramUrl;
    }
    else if  (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
        result = globalFloatPanel_PreviewAdvertisement_InstaLink;
    }
    else if  (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_InstaLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_Insta;
    }else{
        result = globalFloatPanel_RewardStore_EnterpriseInstagram;
    }

  
    return result;

}




function FloatPanel_AyohaStore_getCoordinateLink() {
    var result;
    
    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_CoordinateLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_CoordinateLink;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {       
        result = globalEnterpriseCoordinate;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseCoordinate;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
        result = globalFloatPanel_PreviewAdvertisement_CoordinateLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_CoordinateLink;
    }
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_Location;
    }else{
        result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    }

    // if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
    //     result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    // }
   
    // if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_AyohaReward_AyohaTapContest") {
    //     result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    // }
    // if (globalFloatPanel_AyohaStore_ModuleTagging == "Dashboard_AyohaHotMerchant") {
    //     result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    // }
    // if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanelMerchantDetailPage") {
    //     result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    // }
    // if (globalFloatPanel_AyohaStore_ModuleTagging == "FloatPanel_MembershipCardList_Upgrade") {
    //     result = globalFloatPanel_RewardStore_EnterpriseCoordinate;
    // }
    return result;

}



function FloatPanel_AyohaStore_getWhatsAppLink() {
    var result;

    if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PremiumAdvertisement") {
        result = globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
      
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
        result = globalVIAPICContactNo;
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
        result = globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo;
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PointCard") {
        result = globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "Floating_Advertisement") {
        result = globalFloatPanel_PreviewAdvertisement_WhatsAppLink;
    } 
    else if (globalFloatPanel_AyohaStore_ModuleTagging == "PushNotification") {
        result = globalFloatPanel_AyohaNotification_Notification_WhatsApp;
    } 
    else {
        result = globalFloatPanel_RewardStore_PICContactNo; 
    }

    
    return result;

}




















////////////////////// AyohaStore Show Function //////////////////////




   function FloatPanel_AyohaStoreShow_VIA() {
    globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
    FloatPanel_AyohaStoreShow();  
}


function FloatPanel_AyohaStoreShow_AyohaMerchant() {
    globalFloatPanel_AyohaStore_ModuleTagging = "AyohaMerchant";
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}

function FloatPanel_AyohaStoreShow_AyohaContestTapAndWin() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaReward_AyohaTapContest";
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}

function  FloatPanel_AyohaStoreShow_FromStampCard() {
    globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
    FloatPanel_AyohaStoreShow();
}
function  FloatPanel_AyohaStoreShow_FromPointCard() {
   globalFloatPanel_AyohaStore_ModuleTagging = "PointCard";
   FloatPanel_RewardStoreMembershipCardHide();
  // globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
    FloatPanel_AyohaStoreShow();
}
function FloatPanel_AyohaStoreShow_FromPushNotification() {
    FloatPanel_AyohaNotificationHide();
    FloatPanel_AyohaNotification_NotificationHide();
    globalFloatPanel_AyohaStore_ModuleTagging = "PushNotification";
    FloatPanel_AyohaStoreShow();  
 
}
function FloatPanel_AyohaStoreShow_FloatingAdvertisement() {
    globalFloatPanel_AyohaStore_ModuleTagging = "Floating_Advertisement";
    FloatPanel_AyohaStoreShow();
}
function FloatPanel_AyohaStoreShow_AyohaHotMerchant() {
    globalFloatPanel_AyohaStore_ModuleTagging = "Dashboard_AyohaHotMerchant";
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}


function FloatPanel_AyohaStoreShow_AyohaStore_CheckOut() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaStore_CheckOut";
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}
//    function FloatPanel_AyohaStore_AddToCart_ADD(StampRuleAmounts,ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode, ItemPriceDiscount, ItemPriceDiscountRate, MerchantSumStamp) {
  
//     globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmounts;




//     AddToCart_ADD = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Qty" + ID).value);
//     AddToCart_ADD = AddToCart_ADD + 1;
//     if (AddToCart_ADD <= 999) {      
//         document.getElementById("input-FloatPanel_AyohaStore_Qty" + ID).value = AddToCart_ADD;
       

      
//         // var MerchantSumStamps=0;
//         // var TTlMerchantPoint=0;
//         // var TTlAyohaPoint=0;
//         // var SumPrice;
//         if (CampaignType == "Stamp Reward Loyalty Card") {
         



//             var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
//          //   var stamp=0;
//             // if (ItemPriceDiscountRate >= 0.1) {
//             //     if (ItemPriceDiscount >= StampRuleAmount) {
//             //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);                  
//             //     } else {
//             //         stamp = 0;
//             //     }            
//             // } else {
//             //     if (ItemPrice >= StampRuleAmount) {                      
//             //         stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount);                 
//             //     } else {
//             //         stamp = 0;
//             //     }
             
//             // }
         

//             if (ItemPriceDiscountRate >= 0.1) {
               
//                 //TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
//                 TTlMerchantPoint = 0.00;
//                 TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
//                 stamp=ItemPriceDiscount / StampRuleAmount;
//               //  SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
//             } else {
                
//                // TTlMerchantPoint = ItemPrice * MerchantPoint;
//                TTlMerchantPoint = 0.00;
//                 TTlAyohaPoint = ItemPrice * AyohaPoint;
//                 stamp=ItemPrice / StampRuleAmount;
//                 //SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
//             }
          
//             MerchantSumStamps = stamp;
//           //  TTlAyohaPoint = MerchantSumStamps;
//             AyohaPoint = TTlAyohaPoint;
//             //TTlMerchantPoint = parseFloat(MerchantPoint);


//         }
//         if (CampaignType == "Point Reward Loyalty Card") {
//             //TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
//             //TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
//             //MerchantSumStamp = 0;
//             if (ItemPriceDiscountRate > 0) {
//                 TTlMerchantPoint = (ItemPriceDiscount * AddToCart_ADD) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPriceDiscount * AddToCart_ADD) * AyohaPoint;
//                 MerchantSumStamps = 0;
//             } else {
//                 TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
//                 MerchantSumStamps = 0;
//             }
//         }

//         if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
          
//             var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
          
//             if (ItemPriceDiscountRate >= 0.1) {
               
//                 TTlMerchantPoint = (ItemPriceDiscount * AddToCart_ADD) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPriceDiscount * AddToCart_ADD) * AyohaPoint;
//                 stamp=ItemPriceDiscount / StampRuleAmount;
//               //  SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
//             } else {
                
//                 TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
//                 stamp=ItemPrice / StampRuleAmount;
//                 //SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
//             }

           
          
          
//             // MerchantSumStamps = stamp;
//             // AyohaPoint = TTlAyohaPoint;
//             MerchantSumStamps = parseInt(MerchantSumStamp) + stamp;
//             //TTlAyohaPoint = MerchantSumStamps;
//             AyohaPoint = parseInt(MerchantSumStamp) + stamp;
           
        
//         }
       
//         if (ItemPriceDiscountRate > 0) {
//             SumPrice = ItemPriceDiscount * AddToCart_ADD;
//         } else {
//             SumPrice = ItemPrice * AddToCart_ADD;
//         }


//        // SumPrice = ItemPrice * AddToCart_ADD;
//         //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });
//         FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_ADD, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamps, MerchantPoint, AyohaPoint);
       
//     }
    

// }


// function FloatPanel_AyohaStore_cart_AddToCart_MINUS(StampRuleAmounts,ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode, ItemPriceDiscount, ItemPriceDiscountRate, MerchantSumStamp) {
  
//     AddToCart_MINUS = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);
//     AddToCart_MINUS = AddToCart_MINUS - 1;
//     globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmounts;
//     if (AddToCart_MINUS >= 1) {      
//         document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value = AddToCart_MINUS;


//         // var MerchantSumStamps=0;
//         // var TTlMerchantPoint=0;
//         // var TTlAyohaPoint=0;
//         // var SumPrice;
//         //if (CampaignType == "Stamp Reward Loyalty Card") {
//         //    TTlMerchantPoint = 0.00;
//         //    TTlAyohaPoint = AddToCart_MINUS * AyohaPoint;
//         //    MerchantSumStamp = 1;
//         //}
//         //if (CampaignType == "Point Reward Loyalty Card") {
//         //    TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
//         //    TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
//         //    MerchantSumStamp = 0;
//         //}
//         //SumPrice = ItemPrice * AddToCart_MINUS;








//         if (CampaignType == "Stamp Reward Loyalty Card") {
           



//             // var StampRuleAmount = parseFloat(MerchantPoint);
//             // var stamp;
//             // if (ItemPriceDiscountRate >= 0.1) {
//             //     if (ItemPriceDiscount >= StampRuleAmount) {
//             //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);
//             //     } else {
//             //         stamp = 0;
//             //     }
//             // } else {
//             //     if (ItemPrice >= StampRuleAmount) {
//             //         stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount);
//             //     } else {
//             //         stamp = 0;
//             //     }             
//             // }
//             // MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
//             // TTlAyohaPoint = MerchantSumStamps;
//             // AyohaPoint = parseInt(MerchantSumStamp) - stamp;
//             // TTlMerchantPoint = parseFloat(MerchantPoint);




//             var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
          
           
         

//             if (ItemPriceDiscountRate >= 0.1) {
//                 TTlMerchantPoint = 0.00;
//                 TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
//                 stamp=ItemPriceDiscount / StampRuleAmount;
//             } else {
            
//                TTlMerchantPoint = 0.00;
//                 TTlAyohaPoint = ItemPrice * AyohaPoint;
//                 stamp=ItemPrice / StampRuleAmount;
//             }
          


//              MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
//             // TTlAyohaPoint = MerchantSumStamps;
//             // AyohaPoint = parseInt(MerchantSumStamp) - stamp;
  
           
           
          
       


            
//         }


//         if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
//             var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
       
           
         



//             if (ItemPriceDiscountRate >= 0.1) {
//                // TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
//                // TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
//                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_MINUS) * MerchantPoint;
//                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_MINUS) * AyohaPoint;
//                 stamp=ItemPriceDiscount / StampRuleAmount;
//             } else {
            
             
              
//               // TTlMerchantPoint = ItemPrice * MerchantPoint;
//                 //TTlAyohaPoint = ItemPrice * AyohaPoint;
//                 TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
//                 stamp=ItemPrice / StampRuleAmount;
//             }
          
           
//              MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
//             TTlAyohaPoint =TTlAyohaPoint - AyohaPoint;
//           //  AyohaPoint = parseInt(MerchantSumStamp) - stamp;
          


          
//         }



//         if (CampaignType == "Point Reward Loyalty Card") {
//             //TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
//             //TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
//             //MerchantSumStamp = 0;
//             if (ItemPriceDiscountRate > 0) {
//                 TTlMerchantPoint = (ItemPriceDiscount * AddToCart_MINUS) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPriceDiscount * AddToCart_MINUS) * AyohaPoint;
//                 MerchantSumStamps = 0;
//             } else {
//                 TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
//                 TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
//                 MerchantSumStamps = 0;
//             }
//             TTlAyohaPoint =TTlAyohaPoint - AyohaPoint;
//         }

//         if (ItemPriceDiscountRate > 0) {
//             SumPrice = ItemPriceDiscount * AddToCart_MINUS;
//         } else {
//             SumPrice = ItemPrice * AddToCart_MINUS;
//         }
//         FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_MINUS, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamps, MerchantPoint, AyohaPoint);
      
//     }
  
// }



/**
 * Updates a UI badge's count and visibility.
 * - If count > 0, it sets the number and makes the badge visible using 'flex'.
 * - If count is 0 or less, it hides the badge.
 *
 * @param {string} elementId The ID of the badge div element.
 * @param {number} count The number to display in the badge.
 */
// function Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign(elementId, count) {
//     // Find the badge element by its ID
//     const badgeElement = document.getElementById(elementId);

//     // Make sure the element was found before proceeding
//     if (!badgeElement) {
//         console.error("Badge element not found:", elementId);
//         return;
//     }

//     // Check if the count is a positive number
//     if (count > 0) {
//         // Set the text inside the div to the new count
//         badgeElement.innerText = count;

//         // Change the display style to 'flex' to make it visible
//         // This also enables the 'align-items' and 'justify-content' rules
//         badgeElement.style.display = 'flex';
//     } else {
//         // If the count is 0 or less, hide the badge
//         badgeElement.style.display = 'none';
//     }
// }


function Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign(elementId, count) {
    // Find the badge element by its ID
    const badgeElement = document.getElementById(elementId);

    // Make sure the element was found before proceeding
    if (!badgeElement) {
        console.error("Badge element not found:", elementId);
        return;
    }

    // --- IMPROVEMENT START ---
    // First, attempt to convert the input to an integer.
    const numericCount = parseInt(count);

    // Check if the result is a valid number (not NaN) AND it's greater than 0.
    if (!isNaN(numericCount) && numericCount > 0) {
    // --- IMPROVEMENT END ---

        // Set the text inside the div to the new count
        badgeElement.innerText = numericCount;

        // Change the display style to 'flex' to make it visible
        badgeElement.style.display = 'flex';
    } else {
        // If the count is not a valid positive number, hide the badge
        badgeElement.style.display = 'none';
    }
}




function Dashboard_updateBadge_AyohaMerchantList_CheckOutAndShoppingBag(elementId, count) {
    // Find the badge element by its ID
    const badgeElement = document.getElementById(elementId);

    // Make sure the element was found before proceeding
    if (!badgeElement) {
        console.error("Badge element not found:", elementId);
        return;
    }

    // --- IMPROVEMENT START ---
    // First, attempt to convert the input to an integer.
    const numericCount = parseInt(count);

    // Check if the result is a valid number (not NaN) AND it's greater than 0.
    if (!isNaN(numericCount) && numericCount > 0) {
    // --- IMPROVEMENT END ---

        // Set the text inside the div to the new count
        badgeElement.innerText = numericCount;

        // Change the display style to 'flex' to make it visible
        badgeElement.style.display = 'block';
    } else {
        // If the count is not a valid positive number, hide the badge
        badgeElement.style.display = 'none';
    }
  
}