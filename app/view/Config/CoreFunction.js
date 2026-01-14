Ext.define('BuskartApp.view.Config.CoreFunction', {
});



function getViewportHeight() {
    return window.innerHeight 
        || document.documentElement.clientHeight 
        || document.body.clientHeight;
  }


function CoreFunction_DashboardAyohaUser() {
    //  alert("DashboardAyohaUserMainStore");
   
      globalLatestPoint = "0";
      globalLatestStamp = "0/0";
  
      _DataStore_DashboardAyohaUserMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
      _DataStore_DashboardAyohaUserMainStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardAyohaUserMain'); 
      _DataStore_DashboardAyohaUserMainStore.load({
      callback: function (records, operation, success) {
          if (success && records.length > 0) {
  
              var count = _DataStore_DashboardAyohaUserMainStore.getCount();
              var modelRecord =  records[0];
              console.log("_DataStore_DashboardAyohaUserMainStore:" + count);
  
              var ThisWeekCountsStamp = modelRecord.get('ThisWeekCountsStamp');
              var ThisWeekCountsPoint = modelRecord.get('ThisWeekCountsPoint');
              var TotalCountStamp = modelRecord.get('TotalCountStamp');
              var TotalCountPoint = modelRecord.get('TotalCountPoint');
              var TotalCampaign = modelRecord.get('TotalCampaign');
              var TotalMembershipCard = modelRecord.get('TotalMembershipCard');
              var AyohaPoint = modelRecord.get('AyohaPoint');
      
      
              var LatestStamp = modelRecord.get('LatestStamp');
              var LatestStampDate = modelRecord.get('LatestStampDate');
              var LatestPoint = modelRecord.get('LatestPoint');
              var LatestPointDate = modelRecord.get('LatestPointDate');
              var TypeCRDB = modelRecord.get('TypeCRDB');
              var PointType = modelRecord.get('PointType');
              var ThisWeekCountsStampRedeem = modelRecord.get('ThisWeekCountsStampRedeem');
              var ThisWeekCountsPointRedeem = modelRecord.get('ThisWeekCountsPointRedeem');
              var EnterpriseNameStampCard = modelRecord.get('EnterpriseNameStampCard');
              var EnterpriseNamePointCard = modelRecord.get('EnterpriseNamePointCard');
              var AyohaTaAndWin_TapBalance = parseInt(modelRecord.get('AyohaTaAndWin_TapBalance'));
              //var AyohaMember_Rank = modelRecord.get('AyohaMember_Rank');
              var rank = modelRecord.get('AyohaMember_Rank');
  
              var BadgeCount_Stamp = modelRecord.get('BadgeCount_Stamp');
              var BadgeCount_Point = modelRecord.get('BadgeCount_Point');
              var BadgeCount_Discount = modelRecord.get('BadgeCount_Discount');
              var BadgeCount_Contest = modelRecord.get('BadgeCount_Contest');
              var BadgeCount_Event = modelRecord.get('BadgeCount_Event');
              var BadgeCount_Voucher = modelRecord.get('BadgeCount_Voucher');
  
  
  
  
  
  
               var parts = rank.split(",");
               var AyohaMember_Rank=parts[0];
               var AyohaMember_NextRank=parts[1];
               DashboardAyohaMember_NextRankPoint=parts[2];
               AppState.FloatPanel_AyohaReward.AyohaMember_NextRankPoint=parts[2];           
             // localStorage.setItem("AyohaMember_Rank", AyohaMember_Rank);
      
      
              globalDashboard_TotalItemQuantityCart = modelRecord.get('TotalItemQuantityCart');
      
              globalLatestStampCampaignCode = modelRecord.get('LatestStampCampaignCode');
              globalLatestPointCampaignCode = modelRecord.get('LatestPointCampaignCode');
              globalPNUnread = modelRecord.get('PNUnread');
      
      
      
      
      
              globalEnterpriseNameStampCard = EnterpriseNameStampCard;
      
      
      
              if (ThisWeekCountsStamp) {
                  ThisWeekCountsStamp = ThisWeekCountsStamp;
              } else {
                  ThisWeekCountsStamp = '0';
              }
      
              if (ThisWeekCountsPoint) {
                  ThisWeekCountsPoint = ThisWeekCountsPoint;
              } else {
                  ThisWeekCountsPoint = '0';
              }
      
              if (TotalCountStamp) {
                  TotalCountStamp = TotalCountStamp;
              } else {
                  TotalCountStamp = '0';
              }
              if (TotalCountPoint) {
                  TotalCountPoint = TotalCountPoint;
              } else {
                  TotalCountPoint = '0';
              }
              if (TotalMembershipCard) {
                  TotalMembershipCard = TotalMembershipCard;
              } else {
                  TotalMembershipCard = '0';
              }
      
      
              if (TotalCampaign) {
                  TotalCampaign = TotalCampaign;
              } else {
                  TotalCampaign = '0';
              }
              if (AyohaPoint) {
                  AyohaPoint = AyohaPoint;
              } else {
                  AyohaPoint = '0';
              }
              globalDashboard_AyohaPoint = AyohaPoint;
              if (ThisWeekCountsStampRedeem) {
                  ThisWeekCountsStampRedeem = ThisWeekCountsStampRedeem;
              } else {
                  ThisWeekCountsStampRedeem = '0';
              }
      
      
              if (ThisWeekCountsPointRedeem) {
                  ThisWeekCountsPointRedeem = ThisWeekCountsPointRedeem;
              } else {
                  ThisWeekCountsPointRedeem = '0';
              }
      
      
              globalLatestStamp = LatestStamp;
      
              //if (LatestPoint) {
              //    LatestPoint = LatestPoint;
              //} else
              //{
              //    LatestPoint = "0";
              //}
      
      
              if (globalPNUnread) {
                  globalPNUnread = globalPNUnread;
              } else {
                  globalPNUnread = '0';
              }
      
             localStorage.setItem("AyohaPoint", AyohaPoint);
              var a = parseFloat(TotalCountStamp);
              var b = parseInt(TotalCountPoint);
      
      
              console.log(b);
      
      
              var a1 = a * 10;
              var b1 = b / 10;
              // var AyohaPoint = a + b;
              // var AyohaPoint = Math.round(a1 + b1);
      
              ////Ext.getCmp('Dashboard_AyohaActivity_ThisWeekStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsStamp + '</div>');
              ////Ext.getCmp('DashBoard_AyohaRewards_TotalStampsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + LatestStamp + '</div>');
              ////Ext.getCmp('DashBoard_AyohaRewards_TotalStampsLblLastDate').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">' + EnterpriseNameStampCard + ' - ' + LatestStampDate + '</div>');
              ////Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLblLastDate').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">' + EnterpriseNamePointCard + ' - ' + LatestPointDate + '</div>');
      
              globalEnterpriseNamePointCard = EnterpriseNamePointCard;
      
      
              //ori //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekPoint').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPoint + '</div>');
              //ori //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + TotalCountPoint + '</div>');
      
      
      
              var vals = GetCurrAyohaUserAccountNo().split('-');
              var id_Exts = vals[2];
      
      
              var isVerifiedUser = localStorage.getItem('AyohaUserisUserVerified');
              var AccName = localStorage.getItem('AyohaUserAccountNameDisplay');
      
              if (isVerifiedUser == "YES") {
                  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHidden(false);
                 // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Hello!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-26px 0px 0px 0px"><u>Ranking : ' + AyohaMember_Rank + '</u></div>');
                  Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccName.toUpperCase() + '</div>');
                 // Ext.getCmp('btnMyAccount_DashboardRankIconText').setHtml('<div class="blink_me" style="color:white;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px 10px"><b> ' + AyohaMember_Rank + '</b></div>');
                  Ext.getCmp('btnMyAccount_DashboardRankIconText').setHtml('<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="color:white;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px 0px"><b> ' + AyohaMember_Rank + '</b></div>');
                  document.getElementById("txtDashboard_RankingIcon").textContent = AyohaMember_Rank;
  
               
                  document.getElementById("txtNextRanking").textContent = AyohaMember_NextRank;
                  AppState.FloatPanel_AyohaReward.TextNextRankStar=AyohaMember_NextRank;
                  
                  const txtNextRanking = document.getElementById("txtNextRanking");
                  txtNextRanking.style.fontWeight = "bold";
                  // var AyohaMember_NextRank=parts[1];
                  // var AyohaMember_NextRankPoint=parts[2];    
  
  
                AppState.FloatPanel_AyohaReward.TextRankStar=AyohaMember_Rank;
                  
      
                  if (AyohaMember_Rank == "Black Iron") {
                      //  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                     // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/blackIron.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Bronze.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/blackIron.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Bronze.png";
                      
                                        
                      // Ubah margin
                       txtNextRanking.style.margin = "20px -100px 0px 0px";
                      // html: '<div style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>',
                  }
                  if (AyohaMember_Rank == "Bronze") {
                      //  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                     // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Bronze.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Silver.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Bronze.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Silver.png"; 
                    
                      txtNextRanking.style.margin = "20px -100px 0px 0px";
                  }
                  if (AyohaMember_Rank == "Silver") {
                      // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Silver.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Gold.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Silver.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Gold.png";
                   
                      txtNextRanking.style.margin = "20px -100px 0px 0px";
                  }
                  if (AyohaMember_Rank == "Gold") {
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Gold.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/Platinum.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Gold.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/Platinum.png";
                    
                      txtNextRanking.style.margin = "20px -80px 0px 0px";
                  }
                  if (AyohaMember_Rank == "Platinum") {
                      // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.jpg" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                     // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/Platinum.png";
                      Ext.get('imgNextRanking').dom.src = "resources/icons/ayohaRankingIcon/kingclubIcon.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/Platinum.png";
                      AppState.FloatPanel_AyohaReward.imgNextRankStar="resources/icons/ayohaRankingIcon/kingclubIcon.png";
                 
                      txtNextRanking.style.margin = "20px -80px 0px 0px";
                  }
                  if (AyohaMember_Rank == "King Club") {
                      // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/icons/kingclubIcon.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                      //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div class="blink_me" style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:42px;height:42px;margin:3px 0px 0px 14px;"></div>');
                      Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:42px;height:42px;"></div>');
                      Ext.get('imgDashboard_RankingIcon').dom.src = "resources/icons/ayohaRankingIcon/kingclubIcon.png";
                      AppState.FloatPanel_AyohaReward.imgRankStar="resources/icons/ayohaRankingIcon/kingclubIcon.png";                   
                  }
              }
      
      
      
      
              var sign;
              if (TypeCRDB == "Credit") {
                  sign = "<font size=6 color=black><b>+</b></font>";
              } if (TypeCRDB == "Debit") {
                  sign = "<font size=6 color=black><b>-</b></font>";
              }
              //var txtType = "<div style='margin:-7px 0px 0px 0px;width:10px;height:10px;'><font size=1 color=white><b>(" + PointType + ")</b></font></div>";
              var txtType = "<font size=1 color=white margin-top:-5px><b>(" + PointType + ")</b></font>";
              //  Ext.getCmp('Dashboard_AyohaActivity_ThisWeekPoint').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPoint + '</div>');
      
              ////var latestpoints = LatestPoint;
      
              if (LatestPoint) {
                  globalLatestPoint = LatestPoint;
                  //  Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + sign + LatestPoint + '</div>');
              } else {
                  globalLatestPoint = "0";
              }
      
      
      
              // if (globalDashboard_TotalItemQuantityCart) {
              //     globalDashboard_TotalItemQuantityCart = globalDashboard_TotalItemQuantityCart;
              //     Ext.getCmp('containerDashbord_MyCart').setHidden(false);
              // } else {
              //     globalDashboard_TotalItemQuantityCart = "0";
              //     Ext.getCmp('containerDashbord_MyCart').setHidden(true);
              // }
  
              globalDashboard_TotalItemQuantityCart_fromAyohaNotification=globalDashboard_TotalItemQuantityCart;
           
            //Ext.getCmp('htmlDashbord_OrderCart_CountbadgeText').setHtml('<div style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;"><b>' + globalDashboard_TotalItemQuantityCart + '</b></div>');
           
              
              Dashboard_updateBadge_AyohaMerchantList_CheckOutAndShoppingBag('htmlMyDashboard_AyohaOnlineMerchantStoreChecout_CountbadgeText', globalDashboard_TotalItemQuantityCart);
              // Ext.getCmp('htmlDashbord_AyohaHotMerchant_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalDashboard_TotalItemQuantityCart + '</b></div>');
      
      
             globalDashboard_TotalItemQuantityCart = 0;
      
              //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsTypeLbl').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:bold"> (' + PointType + ')</div>');
      
              //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekRedeemStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsStampRedeem + '</div>');
      
              //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekCountsPointRedeem').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPointRedeem + '</div>');
      
      
      
             // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Collected Ayoha Points</b></div></div>');
              
             // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:180px;width:180px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:50px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-28px 0px 0px 0px"><b>Your Ayoha Points</b></div></div>');
  
             document.getElementById("txtDashboard_MembershipSince").textContent =convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate);          
              
            
            //  document.getElementById("txtDashboard_AyohaPoint").textContent = AyohaPoint;
              document.getElementById("Dashboard_AyohaRewardPoint").textContent = AyohaPoint;
             // document.getElementById("Dashboard_AyohaRewardPoint").textContent = `${AyohaPoint.toLocaleString('en-MY')} pts`;
              document.getElementById('Dashboard_userPts').textContent = `${AyohaPoint.toLocaleString('en-MY')} pts`;
              
            
              
  
  if (convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate)=="Non Ayoha Member"){
      document.getElementById("txtDashboard_MembershipTier").style.visibility = "hidden";
      document.getElementById("txtDashboard_MembershipNo").textContent = "00-00-00-00";
  }else{
  // Show
  document.getElementById("txtDashboard_MembershipTier").style.visibility = "visible";
  document.getElementById("txtDashboard_MembershipNo").textContent = globalLogginAyohaUser_AccountNo_Display;
  }
  AppState.FloatPanel_AyohaReward.AyohaRewardPointBalance=AyohaPoint;
  AppState.FloatPanel_AyohaReward.MembershipNo=globalLogginAyohaUser_AccountNo_Display;
  AppState.FloatPanel_AyohaReward.MembershipSince=convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate);
  AppState.FloatPanel_AyohaReward.AyohaTaAndWinTapBalance=AyohaTaAndWin_TapBalance;
  
  
  

  
  
  
  
            
  
  
             // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:180px;width:180px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:50px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-33px 0px 0px 0px"><b>Your Ayoha Points</b></div></div>');
             
              Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + AyohaTaAndWin_TapBalance + '</font> Chance Left</div></div>');
              //Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>(' + AyohaTaAndWin_TapBalance + ')</font> Chance Left</div></div>');
              AyohaPoint = 0;
      
      
              if (globalPNUnread != "0") {
                 // Ext.getCmp('btnMyAccount_DashboardPicProfile').setBadgeText(globalPNUnread);
                  // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setBadgeText(globalPNUnread);
                 // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/NotificationPurple.png" width="20" height="20" alt="Company Name"><div style="margin:-30px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
                  Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/Notification.png" width="22" height="22" alt="Company Name"><div style="margin:-35px 0px 0px -10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
                }
      
      
      
      
  
  
  
  
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_StampCardLoyaltyBadgeID', BadgeCount_Stamp); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_PointCardLoyaltyBadgeID', BadgeCount_Point); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_DiscountCardLoyaltyBadgeID', BadgeCount_Discount); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_ContestCardLoyaltyBadgeID', BadgeCount_Contest); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_EventCardLoyaltyBadgeID', BadgeCount_Event); 
              Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_VoucherCardLoyaltyBadgeID', BadgeCount_Voucher); 
  
  
  
  
  
      
             // AyohaRewardPointRewardRankingStore();
             // AyohaRewardContestLoadActiveStore();          
              //Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore_Front() 
          
              Dashboard_LoadLastCheckIn();
  
         
          } else {
              console.error('Failed to load store data or no record found.');
              LoadingPanelHide();
          }
      }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
   
  }





  function CoreFunction_DashboardLoadInitialPerk() {
  



    
    _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.getProxy().setUrl(GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_DashboardInitialLoad');




    _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
               
             

var r = _DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore.first();
console.log(r.get('Name'));
console.log(r.get('ModifiedName'));
console.log(r.get('ModifiedImagePath_Dashboard'));

console.log('MODEL:', r.self.getName ? r.self.getName() : r.$className);
console.log('FIELDS:', r.fields && r.fields.items ? r.fields.items.map(f => f.name) : 'no fields');



                Ext.getCmp('Dashboard_MyAccount_MembershipPerksList').setStore(_DataStore_VIEW_merchantperk_View_DashboardInitialLoadStore)
                
                LoadingPanelHide();
            } else {
                 alert(records.length)
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




}


function CoreFunction_DashboardEnterprises_LoadRecentlyCheckIn() {
  



    
    _DataStore_EnterprisesLoadRecentlyCheckInStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadRecentlyCheckInStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/Enterprises_LoadRecentlyCheckIn');




    _DataStore_EnterprisesLoadRecentlyCheckInStore.load({
        callback: function (records, operation, success) {

        
            if (success && records.length > 0) {
               
              
                Ext.getCmp('DataView_RecentCheckins').setStore(_DataStore_EnterprisesLoadRecentlyCheckInStore)
                
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




}






function CoreFunction_DashboardLoadByEnterpriseAccNoStorePerk() {
  



    
    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo',globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/VIEW_merchantperk_View/VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNo');




    _DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
               //alert('_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore loaded successfully, total records: ' + records.length);
    
             
                Ext.getCmp('Dashboard_MyAccount_MembershipPerksList').setStore(_DataStore_VIEW_merchantperk_View_DashboardLoadByEnterpriseAccNoStore)
               
               // disabled 20/12/2025 SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo();
                //LoadingPanelHide();
            } else {
               // SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo();
                //alert('Failed to load store data or no record found.');
               // LoadingPanelHide();
            }
        }
    });




}






function CoreFunction_TabToMyMembershipCard() {

    if(AppState.MainDashboard.MainDashboardBottomkMenuTabTag != "MyMembershipCard"){
        SideMenuMembershipCardListShow();
        Ext.getCmp('htmlDashboardMenuBottom_HomeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;font-weight:normal">Home</div>');
        Ext.getCmp('htmlDashboardMenuBottom_AyohaRewardTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;font-weight:normal">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-25px 0px 0px 0px;font-weight:normal">Reward</div>');
        Ext.getCmp('htmlDashboardMenuBottom_MerchantPerkTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;font-weight:normal">Merchant</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-27px 0px 0px 0px;font-weight:normal">Perks</div>');
        Ext.getCmp('htmlDashboardMenuBottom_MyMembershipCardTxt').setHtml('<div style="color:purple;text-align: center;font-size:8px;width:100%;font-weight:bold">My Membership</div><br><div style="color:purple;text-align: center;font-size:8px;width:100%;margin:-25px 0px 0px 0px;font-weight:bold">Card</div>');
       // AyohaMerchantReward_Reset();
          animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_MyMembershipCard');
          MembershipCardListLoad();
          Ext.getCmp('tabpanelMyAccount_Dashboard').setActiveItem(3);
          return
    }
    if(AppState.MainDashboard.MainDashboardBottomkMenuTabTag == "MyMembershipCard"){
        SideMenuMembershipCardListShow();        
          MembershipCardListLoad();
          return
    }

}



// FloatPanel_AyohaRewardVoucherDetailShow_MerchantPerks(
//     payload.VoucherName,
//     payload.VoucherImgPath,
//     payload.EntitledVoucherEndDate,
//     payload.DayLeft,
//     payload.VoucherCode,
//     payload.VoucherAmount,
//     payload.VoucherTermAndCondition,
//     payload.MembershipCardCode,
//     payload.EnterpriseCountStar,
//     payload.EnterpriseAccNo,
//     payload.TotalReviewer
//   );

//   FloatPanel_AyohaEnterpriseRewardItem_MembershipCardLoadByMembershipCardCodeStore({MembershipCardCode},{EnterpriseCountStar},{EnterpriseAccNo},{TotalReviewer});




var TopMargin="-230px"

function CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg(PerkType){
    if(PerkType=="Point" ){
        TopMargin="-310px"
    }
    var value='<div onclick="FloatPanel_AyohaEnterpriseRewardItemShow();" style="text-align:center;margin-top:'+TopMargin+';font-family:Arial,sans-serif;">' +
    '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                'border-radius:50%;background:#F3F4F6;' +
                'display:flex;align-items:center;justify-content:center;">' +
      '<img src="resources/icons/empty_eligible.png" ' +
           'style="width:42px;height:42px;opacity:0.8;" />' +
    '</div>' +
    '<div style="font-size:12px;color:#6B7280;">No perks unlocked yet. Browse merchant perks and join their membership cards to start enjoying <b>'+PerkType+'</b> rewards.</div>' +
  '</div>'

  return value;
}

function CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg(PerkType){
   var val="redeemed";

    if(PerkType=="Event" ||PerkType=="Contest" ){
        val="Joined";
    }
    if(PerkType=="Point" ){
        TopMargin="-310px"
    }
    if(PerkType=="Voucher" ){
        TopMargin="-230px"
    }
    var value='<div style="text-align:center;margin-top:'+TopMargin+';font-family:Arial,sans-serif;">' +
    '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                'border-radius:50%;background:#F3F4F6;' +
                'display:flex;align-items:center;justify-content:center;">' +
      '<img src="resources/icons/empty_redeem01.png" ' +
           'style="width:70px;height:70px;opacity:0.8;" />' +
    '</div>' +
    '<div style="font-size:12px;color:#6B7280;">You haven’t '+val+' any <b>' + PerkType + '</b> yet.<br>Don’t miss out — redeem your <b>' + PerkType + ' before they expire.</div>' +
  '</div>'

  return value;
}

function CoreFunction_AyohaMerchantReward_listEmptyApprovedStore_TextMsg(PerkType){
    var val="No approvals pending. All your perks are up to date";
    if(PerkType=="Contest" ){
        val="Your contest answer is still being reviewed by the merchant.<br> Once the review is complete,<br> your result will appear here.";
    }
    if(PerkType=="Point" ){
        TopMargin="-310px"
    }
    var value='<div style="text-align:center;margin-top:'+TopMargin+';font-family:Arial,sans-serif;">' +
    '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                'border-radius:50%;background:#F3F4F6;' +
                'display:flex;align-items:center;justify-content:center;">' +
      '<img src="resources/icons/empty_approved.png" ' +
           'style="width:70px;height:70px;opacity:0.8;" />' +
    '</div>' +
    '<div style="font-size:12px;color:#6B7280;">'+val+'</div>' +
  '</div>'

  return value;
}


function CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg(PerkType){

    if(PerkType=="Point" ){
        TopMargin="-310px"
    }



    var value='<div style="text-align:center;margin-top:'+TopMargin+';font-family:Arial,sans-serif;">' +
    '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                'border-radius:50%;background:#F3F4F6;' +
                'display:flex;align-items:center;justify-content:center;">' +
      '<img src="resources/icons/empty_expired.png" ' +
           'style="width:70px;height:70px;opacity:0.8;" />' +
    '</div>' +
    '<div style="font-size:12px;color:#6B7280;">All clear! You haven`t let any <b> '+PerkType+'</b> perks expire</div>' +
  '</div>'

  return value;
}

function CoreFunction_AyohaMerchantReward_listEmptyRedeemOnline_TextMsg(){
   
    var value='<div style="text-align:center;margin-top:-230px;font-family:Arial,sans-serif;">' +
    '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                'border-radius:50%;background:#F3F4F6;' +
                'display:flex;align-items:center;justify-content:center;">' +
      '<img src="resources/icons/empty_approved.png" ' +
           'style="width:70px;height:70px;opacity:0.8;" />' +
    '</div>' +
    '<div style="font-size:12px;color:#6B7280;">You haven’t redeemed any discounts yet. Redeem yours now before they expire!</div>' +
  '</div>'

  return value;
}
function CoreFunction_AyohaMerchantReward_listEmptyRedeemOffline_TextMsg(){
   
    var value='<div style="text-align:center;margin-top:-230px;font-family:Arial,sans-serif;">' +
    '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                'border-radius:50%;background:#F3F4F6;' +
                'display:flex;align-items:center;justify-content:center;">' +
      '<img src="resources/icons/empty_approved.png" ' +
           'style="width:70px;height:70px;opacity:0.8;" />' +
    '</div>' +
    '<div style="font-size:12px;color:#6B7280;">You haven’t redeemed any discounts yet. Redeem yours now before they expire!</div>' +
  '</div>'

  return value;
}




function CoreFunction_SetProfieAndGreeting(AccountName,isUserVerified){
    // id: 'htmlMyAccount_Dashboard_ProfileTitleUpgrade',                                              
    
    //  html: '<div onclick="FloatPanel_MyAccountMasterShow()"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:3px 0px 0px 0px" >Tarmizi Rahim</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-25px 0px 0px 0px">Good After Noon!</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>'
    //  Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
    


     if (isUserVerified == "YES") {
        // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">' + AccountNoDisplay[1] + '-' + AccountNoDisplay[2] + '</div>');
        // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitleUpgrade').setHtml('<div onclick="FloatPanel_MyAccountMasterShow()"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:3px 0px 0px 0px" >' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-25px 0px 0px 0px">Good After Noon!</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>');                
        
        
        Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitleUpgrade').setHtml('<div onclick="FloatPanel_MyAccountMasterShow()"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:3px 0px 0px 0px" >' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-25px 0px 0px 0px">'+getGreeting()+'</div>');                

    }
    if (isUserVerified == "NO") {
        Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitleUpgrade').setHtml('<div onclick="FloatPanel_MyAccountMasterShow()"   style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:3px 0px 0px 0px" >' + AccountName.toUpperCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:normal;color:white;margin:-25px 0px 0px 0px">'+getGreeting()+'</div>');                

       // Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 14px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">' + AccountName.toUpperCase() + '</div>');
    }

}

function getGreeting() {
    const now = new Date();
    const hour = now.getHours();
  
    let greeting;
  
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
  
    return greeting;
  }








  function Dashboard_MerchantDetailPageShow() {
    FloatPanel_MerchantPageDetail="";
    FloatPanel_MerchantPageDetail = Ext.getCmp('CarouselDashboard_MerchantDetailPage');
   

    OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
    OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
    OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
    countLikeDislikeTap = 0;
    // is_FloatPanel_MerchantDetailPageOpen = 'Y';
    // globalFloatPanelMerchantDetailPage_ID = ID;
    // globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo;
    // globalFloatPanelMerchantDetailPage_EnterpriseLogo = EnterpriseLogoPath;
    // globalFloatPanelMerchantDetailPage_EnterpriseName = EnterpriseName;
    // globalFloatPanelMerchantDetailPage_EnterpriseTagLine = EnterpriseTagLine;
    // globalFloatPanel_MerchantDetailPage_EnterpriseFacebook = EnterpriseFacebook;
    // globalFloatPanel_MerchantDetailPage_EnterpriseWebsite = EnterpriseWebsite;
    // globalFloatPanel_MerchantDetailPage_EnterpriseInstagram = EnterpriseInstagram;
    // globalFloatPanel_MerchantDetailPage_EnterpriseTikTok = EnterpriseTikTok;
    // globalFloatPanelMerchantDetailPage_EnterpriseCoordinate = EnterpriseCoordinate;
    // globalFloatPanelMerchantDetailPage_BusinessMode = BusinessMode;
    // globalFloatPanelMerchantDetailPage_WhatsAppNo = PICContactNo;
    // globalFloatPanelMerchantDetailPage_NamaJalan=NamaJalan;
    // globalFloatPanelMerchantDetailPage_Postkod=Postkod;
    // globalFloatPanelMerchantDetailPage_Bandar=Bandar;
    // globalFloatPanelMerchantDetailPage_Negeri=Negeri;
    // globalFloatPanelMerchantDetailPage_EnterpriseDescriptions=EnterpriseDescriptions;
    // globalFloatPanelMerchantDetailPage_EnterprisePhoneNo=EnterprisePhoneNo;
    
   
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanelMerchantDetailPage";
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MerchantDetailPage"
    
    // Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseLogo').setHtml('<div ><img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" width="30" height="30" alt="Company Name"></div>');
    Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseInfo_Logo').setHtml('<div ><img src="' + globalFloatPanelMerchantDetailPage_EnterpriseLogo + '" width="100%" height="90" alt="Company Name"></div>');
    
    Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:#4F4F4F;margin:0px 0px 0px 0px;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>' + globalFloatPanelMerchantDetailPage_EnterpriseTagLine + '</i></div>');
    
    Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseDescription').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">' + globalFloatPanelMerchantDetailPage_EnterpriseDescriptions + '</div>');
    Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseContactDetails').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;"><a href="tel:' + globalFloatPanelMerchantDetailPage_EnterprisePhoneNo + '">' + globalFloatPanelMerchantDetailPage_EnterprisePhoneNo + '</a></div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Contact No</div>');
   // Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseWhatsAppDetails').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenWhatsApp()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_WhatsAppNo + '</div><br><div onclick="FloatPanelMerchantDetailPage_OpenWhatsApp()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">WhatsApp Contact No</div>');

    //Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:5px 0px 0px 0px">' + globalFloatPanelMerchantDetailPage_EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:-27px 0px 0px 0px">' + globalFloatPanelMerchantDetailPage_EnterpriseTagLine + '</div>');

    Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseFullAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10.5px;font-weight:normal;color:black;padding:0px 6px;">' + globalFloatPanelMerchantDetailPage_NamaJalan + ',' + globalFloatPanelMerchantDetailPage_Postkod + ' ' + globalFloatPanelMerchantDetailPage_Bandar + ', '+ globalFloatPanelMerchantDetailPage_Negeri +'.</div>');

    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var day = weekday[d.getDay()];

    if (globalFloatPanel_MerchantDetailPage_EnterpriseFacebook != 'NA') {
        Ext.getCmp('htmlDashboard_MerchantDetailPage_FB').setHidden(false);

    }
    if (globalFloatPanel_MerchantDetailPage_EnterpriseWebsite != 'NA') {
        Ext.getCmp('htmlDashboard_MerchantDetailPage_Website').setHidden(false);
    }
    if (globalFloatPanel_MerchantDetailPage_EnterpriseInstagram != 'NA') {
        Ext.getCmp('htmlDashboard_MerchantDetailPage_Insta').setHidden(false);
    }
    if (globalFloatPanel_MerchantDetailPage_EnterpriseTikTok != 'NA') {
        Ext.getCmp('htmlDashboard_MerchantDetailPage_TikTok').setHidden(false);
    }
  
  

    if (globalFloatPanelMerchantDetailPage_BusinessMode == 'Online') {
        // Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(true);
        // Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);
        // FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo, day);


      
        Ext.getCmp('containerDashboard_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(false);
        Ext.getCmp('containerDashboard_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(true);
        CoreFunction_DashboardMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(globalFloatPanelMerchantDetailPage_EnterpriseAccNo, globalFloatPanelMerchantDetailPage_BusinessMode);
        return
    } else
    if (globalFloatPanelMerchantDetailPage_BusinessMode == 'InPremise') {
        Ext.getCmp('containerDashboard_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(true);
        Ext.getCmp('containerDashboard_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);
        CoreFunction_DashboardMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(globalFloatPanelMerchantDetailPage_EnterpriseAccNo, day);
        return
    } 
    else {
        CoreFunction_DashboardMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(globalFloatPanelMerchantDetailPage_EnterpriseAccNo, day);
        Ext.getCmp('containerDashboard_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(false);
        Ext.getCmp('containerDashboard_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);


       
    }

   
   
 

   
}





function CoreFunction_DashboardMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo,day) {

    var Stores;
    var counter = 1;



     _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.removeAll();
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setExtraParam('Today', day);
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/EnterprisesCoverMedia/EnterprisesCoverMediaLoadByEnterpriseAccNo');
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.load();
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = 0;

    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
            FloatPanel_MerchantPageDetail.removeAll(true);
              //  var Store = records[0]; // Access only the first record
                var count = parseInt(_DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getCount());
                //   alert("count: " + count);
            
                    if (count > 0) {
                       
                        for (i = 0; i < count; i++) {
                            Stores = _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getAt(i);
                            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHidden(false);
                            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHtml('<img src="' + Store.get('ImgPath') + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');
                
                            FloatPanel_MerchantPageDetail.add({ xtype: 'image', src: Stores.get('CoverMediaUrl'), height: '96%', width: '100%', mode: 'image' });
                            counter++;
                        }
                    }
            
                   
                    
            
            
            
                    var Store = _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getAt(0);
                    if (count > 0) {
                    if(Store.get('CountLike')){
                        Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('CountLike') + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
                        globalFloatPanel_AyohaStore_CountLike = parseInt(Store.get('CountLike'));
                       // globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = parseInt(Store.get('CountMembershipCard')) * 400;
                       // Ext.getCmp('htmlDashboard_MerchantDetailPage_MembershipCard_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Membership Card (' + Store.get('CountMembershipCard') + ')</b></font></div>');
                      //  Ext.getCmp('htmlDashboard_MerchantDetailPage_OnlineStore_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Online Store (' + Store.get('CountOnlineStore') + ')</b></font></div>');
                    
                    }
                }
            
          
                    if (globalFloatPanelMerchantDetailPage_BusinessMode == "Online") {
                        Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Open 24/7 (Open Now)</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
            
                    } else {
            
                        var today = new Date();
                        var time = today.getHours() + "." + today.getMinutes();
                        var TutupBuka;
                        var isWorkingDay = Store.get('isWorkingDay');
                        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        var d = new Date();
                        var day = weekday[d.getDay()];
            
                        if (isWorkingDay == "Y") {
                            var PremiseOpenTime = Store.get('WorkingHourStart').replace(".", ":") + " " + Store.get('WorkingHourStartAMPM');
                            var PremiseCloseTime = Store.get('WorkingHourEnd').replace(".", ":") + " " + Store.get('WorkingHourEndAMPM');
            
            
                            var OpenModified12Hour = parseFloat(convertTimeFrom12To24(PremiseOpenTime));
                            var ClosedModified12Hour = parseFloat(convertTimeFrom12To24(PremiseCloseTime));
                            var MasaSekarang = parseFloat(time);
            
                            if ((MasaSekarang > OpenModified12Hour) && (MasaSekarang < ClosedModified12Hour)) {
            
                                TutupBuka = "Open Now";
                            } else {
                                TutupBuka = "Closed Now";
                            }
            
            
            
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('WorkingHourStart') + Store.get('WorkingHourStartAMPM') + ' - ' + Store.get('WorkingHourEnd') + Store.get('WorkingHourEndAMPM') + ' (' + TutupBuka + ')</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
            
                        } else {
            
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + day + ' (Off Day/Holiday)</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
                        }
            
                       
                    }
            
            
                    
                    
                  
            
            
            
                   
                    //Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Membership Card (' + Store.get('CountMembershipCard') + ')</div>');
                    //Ext.getCmp('htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Online Store (' + Store.get('CountOnlineStore') + ')</div>');
            
            
            
                    
            
                    FloatPanel_MerchantPageDetail.setActiveItem(0);  
            
                    globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = Store.get('CountOnlineStore') * 80;
            
                    globalFloatPanelMerchantDetailPage_MembershipCard_tinggi = Store.get('CountMembershipCard') * 300;
            
                  
                  
            
                    if (Store.get('isLikeStatus') == "Y") {
                        Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>');
                       
                    }
                    if (Store.get('isLikeStatus') == "N") {
                        Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>');
                       
                    }
            
            
                    
            

                  
            
                  //disable 20122025  CoreFunction_DashboardLoadByEnterpriseAccNoStorePerk();
                    CoreFunction_DasboardMerchantDetailPage_CalculateRating(EnterpriseAccNo);
                    CoreFunction_DasboardAyohaStore_EnterprisesCheckIn(); 
              
                
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });






    // var task = Ext.create('Ext.util.DelayedTask', function () {

     
        


    // });
    // task.delay(500);


    // Ext.Viewport.setMasked(false);
}






function CoreFunction_DasboardMerchantDetailPage_CalculateRating(EnterpriseAccNo) {
   



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNo
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRating',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {
                        FiveStar = data.results[0].FiveStar;
                        FourStar = data.results[0].FourStar;
                        ThreeStar = data.results[0].ThreeStar;
                        TwoStar = data.results[0].TwoStar;
                        OneStar = data.results[0].OneStar;
                        TotalStar = data.results[0].TotalStar;
                        TotalVoter = data.results[0].TotalVoter;
                        VoteFiveStar = data.results[0].VoteFiveStar;
                        VoteFourStar = data.results[0].VoteFourStar;
                        VoteThreeStar = data.results[0].VoteThreeStar;
                        VoteTwoStar = data.results[0].VoteTwoStar;
                        VoteOneStar = data.results[0].VoteOneStar;


                        var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;
globalFloatPanelMerchantDetailPage_CountStar=TotalAvg;
globalFloatPanelMerchantDetailPage_CountReviewer=TotalVoter;
                        if (TotalAvg) {

                            Ext.getCmp('htmlDashboard_MerchantDetailPage_ReviewAndRateCount').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');

                        } else {
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_ReviewAndRateCount').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                        }

                        Ext.getCmp('htmlDashboard_MerchantDetailPage_ReviewByCount').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;' + TotalVoter + ' Reviews</div>');

                        //  Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp; Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);
                        globalFloatPanelMerchantDetailPage_CountReviewer= TotalVoter;
                        globalFloatPanelMerchantDetailPage_CountStar=TotalAvg.toFixed(1);
                      

                        if (RateReviews == 5) {

                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashboard_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                        }

























                       
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                      
                        Ext.Viewport.unmask();

                    }





                }
                else {
                  

                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
             
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);


}



function CoreFunction_DasboardAyohaStore_EnterprisesCheckIn() {
    var payload = {
      EnterpriseAccNo: FloatPanel_AyohaStore_getEnterpriseAccNo(),
      SubscriberAccNo: GetCurrAyohaUserAccountNo()
    };
  
    Ext.Ajax.request({
      method: 'POST',
      url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_CanCheckIn',
      jsonData: payload,
      success: function (result) {
        var data = Ext.decode(result.responseText.trim() || '{}');
  
        if (data.success === true || data.success === 'true') {
          var count = parseInt(data.results[0].CanCheckIn, 10) || 0;
          var CheckInCount = (parseInt(data.results[0].CheckInCount, 10) || 0) + 1;
  
          var RelativeCheckInTime = data.results[0].RelativeCheckInTime || '';
          var AccumulateTotalCheckIn = parseInt(data.results[0].AccumulateTotalCheckIn, 10) || 0;
  
          var logo    = FloatPanel_AyohaStore_getEnterpriseLogo();
          var eName   = FloatPanel_AyohaStore_getEnterpriseName();
          var etagline= FloatPanel_AyohaStore_getEnterpriseTagLine();
          Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>');     
          SuccessCheckinController_DashboardSuccessCheckIn_LoadPerkCanEnjoyInfo();
          return;











          // If can check in now, open the panel immediately
          if (count == 1) {
            FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
            //Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>');     
                
            var containerViewnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn = Ext.ComponentQuery.query('container[name=namecontainerDashboard_MerchantDetailPage_EnterpriseCheckIn]')[0];
            var containerViewElnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn = containerViewnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn.element;
            containerViewElnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn.on('tap',
              function (event, node, options, eOpts) {
           
                FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
              }
            );
          }
          if(count==0){
           

            Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>');     
        

           return
         
        }





          var cmp = Ext.getCmp('htmlDashboard_MerchantDetailPage_EnterpriseCheckInDetails');
  
          if (RelativeCheckInTime) {
            // Show last check-in info
            cmp.setHtml(
              '<div style="width:100%;text-align:left;font-family:Century Gothic;font-size:12px;font-weight:bold;color:#000;padding:0 6px;">'
                + Ext.String.htmlEncode(RelativeCheckInTime) +
                ' - Total Check-In (' + AccumulateTotalCheckIn + ') X Times</div>' +
              '<br>' +
              '<div style="width:100%;text-align:left;font-family:Century Gothic;font-size:10px;color:#000;margin:-27px 0 0 0;padding:0 6px;">Last Check-In</div>'
            );
          } else {
            // Build a tappable "Check-In Now" button and delegate the tap
            var checkInButtonId = Ext.id(null, 'checkin-btn-');
            var buttonHtml =
              '<div id="' + checkInButtonId + '" ' +
                'class="example-5" style="display:inline-flex;align-items:center;gap:6px;padding:8px 12px;' +
                       'background:linear-gradient(90deg,#c800ffc9,#ff00de75);color:#fff;border:2px solid #fac;' +
                       'border-radius:18px;box-shadow:0 12px 28px rgba(0,0,0,.28);cursor:pointer;' +
                       'font:600 10px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">' +
                'Check-In Now!</div>' +
              '<br><div style="height:6px;"></div>';
  
            cmp.setHtml(buttonHtml);
  
            // Delegate 'tap' (works better for Sencha Touch/modern builds; falls back to click on desktop)
            Ext.defer(function () {
              if (!cmp || !cmp.rendered) return;
  
              var evtName = (Ext && Ext.os && Ext.os.is && (Ext.os.is.Android || Ext.os.is.iOS)) ? 'tap' : 'click';
              cmp.getEl().on(evtName, function () {
                FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
              }, null, { delegate: '#' + checkInButtonId });
            }, 10);
          }
 
          Ext.Viewport.unmask();
        } else {
          swalFireFail('Fail! -> ' + (result.responseText || '').trim());
          LoadingPanelHide();
          Ext.Viewport.unmask();
        }
      },
      failure: function (result) {
        swalFireFail('Fail! ' + (result.responseText || '').trim());
        LoadingPanelHide();
        Ext.Viewport.unmask();
      }
    });
  }














