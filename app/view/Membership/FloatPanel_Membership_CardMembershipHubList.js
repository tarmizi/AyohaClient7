







Ext.define('BuskartApp.view.Membership.FloatPanel_Membership_CardMembershipHubList', {

});




var isFloatPanel_Membership_CardMembershipHubListOpen = 'N';



var _FloatPanel_Membership_CardMembershipHubList = null;





function FloatPanel_Membership_CardMembershipHubListCreateIfNeeded() {
    if (_FloatPanel_Membership_CardMembershipHubList&& !_FloatPanel_Membership_CardMembershipHubList.destroyed) return;

 _FloatPanel_Membership_CardMembershipHubList =
    Ext.create('Ext.Container', {
        height: '100%',
        width: '100%',
        id: 'FloatPanel_Membership_CardMembershipHubListID',
        floated: true,
    centered: true,
    height: '100%',
    width: '100%',
    closeAction: 'destroy', 
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'

        },
        showAnimation: {
            type: 'popIn',
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
           
        },
       style:ayohaThemeColor_Body_Container(),
        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              style: ' background-color:transparent;',
               layout: {
                type: 'vbox',
                pack: 'start',  // Center the white box vertically
                align: 'center'  // Center the white box horizontally
            },
              
                items: [
                    {

                        xtype: 'container',
                        width: '100%',
                        docked: 'top',
                        height: ayoha_HeaderHeight(),
                        style:ayohaThemeColor_Header(),
                        id: 'containerFloatPanel_Membership_CardMembershipHubListHeader',
                       
                        layout: {
                            type: 'hbox',
                            pack: 'center',
                            align: 'center',
                        },
                        // hidden:true,
                        items:
                               [


                                             {
                                                 xtype: 'button',
                                                 id: 'btnFloatPanel_Membership_CardMembershipHubListBack',
                                                 height: 30,
                                                 width: 65,
                                                 margin: '5 0 0 10',
                                                 // iconCls: 'list',
                                                 html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                // html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {
                                                     FloatPanel_Membership_CardMembershipHubListHide(false);
                                                     // FloatPanel_Membership_CardMembershipHubList_AddCardHide();
                                                    //  isFloatPanel_Membership_CardMembershipHubListOpen = 'N';
                                                    //  _FloatPanel_Membership_CardMembershipHubList.hide(Ext.fx.Animation({
                                                    //      type: 'slideOut',
                                                    //      direction: 'left',
                                                    //      easing: 'cubic-bezier(.7,0,.7,1)',
                                                    //      duration: 250

                                                    //  }));
                                                 

                                                 }
                                             },

                                              {
                                                  xtype: 'spacer',

                                              },
                                              {
                                                margin: '0 15 0 0',
                                                id: 'htmlFloatPanel_Membership_CardMembershipHubList_TitleHeaderTxt',
                                               html:ayohaTheme_HeaderText('Explore Membership Cards'),
                                               // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-weight:700;font-size:18px;color:white">Ayoha Merchant Review</div>',
                                            },                                
     

                                             


                                                    {
                                                        xtype: 'button',
                                                        hidden:true,
                                                        id: 'btnFloatPanel_Membership_CardMembershipHubList_CardIcon',
                                                        height: 30,
                                                        width: 35,
                                                        // iconCls: 'list',
                                                        html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                        ui: 'plain',
                                                        handler: function () {

                                                            isFloatPanel_Membership_CardMembershipHubListOpen = 'N';

                                                            _FloatPanel_Membership_CardMembershipHubList.hide(Ext.fx.Animation({
                                                                type: 'slideOut',
                                                                direction: 'right',
                                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                                duration: 250

                                                            }));
                                                           // RemovePages(_FloatPanel_Membership_CardMembershipHubList, "isFloatPanel_Membership_CardMembershipHubListOpen");
                                                            //FloatPanel_Membership_CardMembershipHubList_AddCardHide();
                                                        }
                                                    },









                               ]

                    },
                    


                 

                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        layout: 'fit', // Layout Fit memastikan item bertindih
                        items: [
                    


{
    xtype: 'list',
    id: 'FloatPanel_Membership_CardMembershipHubListList',    
    cls: 'premiumMembershipList',
    width: '100%',
    height:'100%',
    scrollable: true,
    itemCls: 'premiumMembershipListItem',

itemTpl: new Ext.XTemplate(
    '<div class="membershipRowWrap" onclick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main('
        + '`{MembershipCardCode}`,' 
        + '`{EnterpriseAccNo}`,' 
        + '`{isMembershipCardSubscribed}`,' 
        + '`{MembershipCardFeePaymentCycle}`,' 
        + '`{CountStar}`,' 
        + '`{CountReviewer}`'
    + ')">',

        '<div class="membershipThumbWrap">',

            '<div class="membershipMiniCard" style="background-image:url({MembershipCardBackgroundImg});">',

                '<div class="membershipMiniCardOverlay"></div>',

                '<div class="membershipMiniCardContent">',

                    '<div class="membershipMiniCardTop">',
                        '<div class="membershipMiniBrandWrap">',
                            '{ModifiedEnterprisesLogoDesignOneTwo}',
                            '<div class="membershipMiniBrandName">{[this.ellipsis(values.EnterprisesName, 18)]}</div>',
                        '</div>',
                    '</div>',

                    '<div class="membershipMiniCardMid">',
                        '<div class="membershipMiniType">{[this.ellipsis(values.MembershipCardType || "Membership", 12)]}</div>',
                        '<div class="membershipMiniNo">{[this.ellipsis(values.ModifiedMembershipNo || "", 14)]}</div>',
                        '<div class="membershipMiniNo">YOUR NAME HERE</div>',
                    '</div>',

                    // '<div class="membershipMiniCardBottom">',
                    //     '<div class="membershipMiniMetaLeft">',
                    //         '<div class="membershipMiniLabel">Since</div>',
                    //         '<div class="membershipMiniValue">{[this.safeText(values.ModifiedMembershipDate)]}</div>',
                    //     '</div>',
                    //     '<div class="membershipMiniMetaRight">',
                    //         '<div class="membershipMiniLabel">Until</div>',
                    //         '<div class="membershipMiniValue">{[this.safeText(values.ValidUntilDateMonthYearOnly)]}</div>',
                    //     '</div>',
                    // '</div>',

                '</div>',
            '</div>',
        '</div>',

        '<div class="membershipInfoWrap">',

            '<div class="membershipTopRow">',
                '<div class="membershipMerchantName">{[this.ellipsis(values.EnterprisesName, 26)]}</div>',
                '{ModifiedMembershipCardFeeRenderBadge}',
            '</div>',

            '<div class="membershipAddressRow">',
                '<span class="membershipLocationIcon">📍</span>',
                  '<span class="membershipAddressText">{ModifiedBandar}, {ModifiedNegeri}</span>',
            '</div>',

            '<div class="membershipBottomRow">',
                '<div class="membershipTypeChip">{ModifiedEnterpriseMode}</div>',
               // '<div class="membershipFeeText">{[this.renderFeeText(values)]}</div>',
  '<div class="membershipFeeText">RM{MembershipCardFee}</div>',

                
            '</div>',

        '</div>',

    '</div>',
    {
        ellipsis: function (text, len) {
            if (!text) return '';
            return text.length > len ? text.substring(0, len) + '...' : text;
        },

        safeText: function (text) {
            return text || '-';
        },

        renderLocation: function (district, state) {
            var d = district || '';
            var s = state || '';
            if (d && s) return d + ', ' + s;
            return d || s || 'Location not available';
        },

        renderFeeBadge: function (values) {
            if ((values.FeeType || '').toUpperCase() === 'FOC') {
                return '<div class="membershipFeeBadge membershipFeeBadgeFree">FREE</div>';
            }
            return '<div class="membershipFeeBadge membershipFeeBadgePaid">PAID</div>';
        },

        renderFeeText: function (values) {
            if ((values.FeeType || '').toUpperCase() === 'FOC') {
                return 'Free Membership';
            }

            var amount = parseFloat(values.FeeAmount || 0).toFixed(2);
            var period = values.FeePeriod || '';
            return 'RM ' + amount + ' ' + period;
        }
    }
)



//     itemTpl: new Ext.XTemplate(
//         '<div class="membershipRowWrap">',

//             '<div class="membershipThumbWrap">',
              

//   '<div class="checkIn_ayohaHeroRow" onclick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main('
//                     + '`{MembershipCardCode}`,'
//                     + '`{EnterpriseAccNo}`,'
//                     + '`{isMembershipCardSubscribed}`,'
//                     + '`{MembershipCardFeePaymentCycle}`,'
//                     + '`{CountStar}`,'
//                     + '`{CountReviewer}`'
//                 + ')">'
//                     + '<div class="checkIn_ayohaMiniCard" style="background-image:url({MembershipCardBackgroundImg});">'
//                         + '<div class="checkIn_ayohaMiniOverlay"></div>'
//                         + '<div class="checkIn_ayohaMiniContent">'
//                             + '<div class="checkIn_ayohaMiniTop">'
//                                 + '<div class="checkIn_ayohaMiniBrandWrap">'
//                                     + '{ModifiedEnterprisesLogoDesignOneTwo}'
//                                     + '{ModifiedEnterprisesNameDesignOneTwo}'
//                                 + '</div>'
//                             + '</div>'
//                             + '<div class="checkIn_ayohaMiniMid">'
//                                 + '<div class="checkIn_ayohaMiniType">{MembershipCardType}</div>'
//                                 + '<div class="checkIn_ayohaMiniNo">{ModifiedMembershipNo}</div>'
//                                 + '<div class="checkIn_ayohaMiniName">{ModifiedAyohaUserAccountName}</div>'
//                             + '</div>'
//                             + '<div class="checkIn_ayohaMiniBottom">'
//                                 + '<div class="checkIn_ayohaMiniCol">'
//                                     + '<div class="checkIn_ayohaMiniLabel">Member Since</div>'
//                                     + '<div class="checkIn_ayohaMiniValue">{ModifiedMembershipDate}</div>'
//                                 + '</div>'
//                                 + '<div class="checkIn_ayohaMiniCol right">'
//                                     + '<div class="checkIn_ayohaMiniLabel">Valid Until</div>'
//                                     + '<div class="checkIn_ayohaMiniValue">{ValidUntilDateMonthYearOnly}</div>'
//                                 + '</div>'
//                             + '</div>'
//                         + '</div>'
//                     + '</div>'
//                 + '</div>',





//             '</div>',

//             '<div class="membershipInfoWrap">',

//                 '<div class="membershipTopRow">',
//                     '<div class="membershipMerchantName">{EnterprisesName}</div>',
//                     '{[this.renderFeeBadge(values)]}',
//                 '</div>',

//                 '<div class="membershipAddressRow">',
//                     '<span class="membershipLocationIcon">📍</span>',
//                     '<span class="membershipAddressText">{[this.renderLocation(values.District, values.State)]}</span>',
//                 '</div>',

//                 '<div class="membershipBottomRow">',
//                     '<div class="membershipTypeChip">Membership Card</div>',
//                     '<div class="membershipFeeText">{[this.renderFeeText(values)]}</div>',
//                 '</div>',

//             '</div>',

//         '</div>',
//         {
//             ellipsis: function (text, len) {
//                 if (!text) return '';
//                 return text.length > len ? text.substring(0, len) + '...' : text;
//             },

//             renderLocation: function (district, state) {
//                 var d = district || '';
//                 var s = state || '';
//                 if (d && s) return d + ', ' + s;
//                 return d || s || 'Location not available';
//             },

//             renderFeeBadge: function (values) {
//                 if ((values.FeeType || '').toUpperCase() === 'FREE') {
//                     return '<div class="membershipFeeBadge membershipFeeBadgeFree">FREE</div>';
//                 }

//                 return '<div class="membershipFeeBadge membershipFeeBadgePaid">PAID</div>';
//             },

//             renderFeeText: function (values) {
//                 if ((values.FeeType || '').toUpperCase() === 'FREE') {
//                     return 'Free Membership';
//                 }

//                 var amount = parseFloat(values.FeeAmount || 0).toFixed(2);
//                 var period = values.FeePeriod || '';
//                 return 'RM ' + amount + ' ' + period;
//             }
//         }
//     )
},


                            {
                       
                                xtype: 'container',
                                margin: '0 0 0 0',
                               docked:'bottom',                    
                                height: ayohaThemeColor_Bottom_SearchBox_Height(),
                                width: '100%',                               
                               style:ayohaThemeColor_Bottom_SearchBox(),
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'
                                },
                                items:[
                                    {
                                        height: ayohaThemeColor_Bottom_SearchBox_Height(),
                                        //margin:'-5 0 0 0',
                                        width: '100%',
                                        html:'<div class="ayohaSearchWrap">' +
                                        '<div class="ayohaSearchBar">' +
                                    
                                          '<span class="ayohaSearchIco" aria-hidden="true">' +
                                            '<svg viewBox="0 0 24 24">' +
                                              '<path d="M10.5 3a7.5 7.5 0 1 0 4.6 13.4l3.2 3.2a1 1 0 0 0 1.4-1.4l-3.2-3.2A7.5 7.5 0 0 0 10.5 3Zm0 2a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11Z"></path>' +
                                            '</svg>' +
                                          '</span>' +
                                    
                                          '<input id="FloatPanel_Membership_CardMembershipHubList_SearchInput" class="ayohaSearchInput" type="search" ' +
                                            'placeholder="Search Membership Cards" autocomplete="off" />' +
                                    
                                        //   '<button class="ayohaIconBtn ayohaIconBtnQr" aria-label="Scan QR" ' +
                                        //     'onclick="if(event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; ' +
                                        //     'FloatPanel_ScanQR && FloatPanel_ScanQR();">' +
                                        //     '<svg viewBox="0 0 24 24">' +
                                        //       '<path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm12 0h2v2h-2v-2zm-4 0h2v4h-2v-4zm6 0h2v6h-2v-6zm-4 4h6v2h-6v-2z"></path>' +
                                        //     '</svg>' +
                                        //   '</button>' +
                                    
                                        //   '<button class="ayohaIconBtn ayohaIconBtnFilter" aria-label="Filter" ' +
                                        //     'onclick="if(event.stopPropagation){event.stopPropagation();} event.cancelBubble=true; ' +
                                        //     'FloatPanel_Filter && FloatPanel_Filter();">' +
                                        //     '<svg viewBox="0 0 24 24">' +
                                        //       '<path d="M4 6h16v2H4V6zm3 5h10v2H7v-2zm3 5h4v2h-4v-2z"></path>' +
                                        //     '</svg>' +
                                        //   '</button>' +
                                    
                                        '</div>' +
                                      '</div>',
                                    }
                              
                                     
                                ]
                           },



                        ]
                    },






                   
                ]
            },

        ]

    });
   


  }










/**
 * @param {Boolean} fromBack  true bila dipanggil dari popstate (browser back)
 * @param {Object}  animCfg   optional animation config (untuk swipe left/right)
 */
function FloatPanel_Membership_CardMembershipHubListHide(fromBack, animCfg) {

  // guard
  if (isFloatPanel_Membership_CardMembershipHubListOpen !== 'Y') return;

  // hide (optional custom animation)
  if (animCfg) {
    _FloatPanel_Membership_CardMembershipHubList.hide(Ext.fx.Animation(animCfg));
  } else {
    _FloatPanel_Membership_CardMembershipHubList.hide();
  }

  isFloatPanel_Membership_CardMembershipHubListOpen = 'N';
  _FloatPanel_Membership_CardMembershipHubList.destroy(); // destroy terus supaya next show akan create baru (reset state)
  _FloatPanel_Membership_CardMembershipHubList = null;
 // RemovePages("FloatPanel_ForgotPasswordHide()");

  // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
  if (fromBack !== true) {
    AyohaBrowserBack.close('FloatPanel_Membership_CardMembershipHubList');
  }


 

}




function FloatPanel_Membership_CardMembershipHubListShow() {



FloatPanel_Membership_CardMembershipHubListCreateIfNeeded()

  _FloatPanel_Membership_CardMembershipHubList.show();
  isFloatPanel_Membership_CardMembershipHubListOpen = 'Y';
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_Membership_CardMembershipHubList', function () {
 
       FloatPanel_Membership_CardMembershipHubListHide(true);
  });
}



   // Dashboard_MembershipCardHub();

   FloatPanel_Membership_CardMembershipHubList_MembershipCardLoadBySubscriberAccNoDashboardMainStore();
  // AyohaBrowserBack.push('FloatPanel_Membership_CardMembershipHubList', function () {
  //   // bila user tekan BACK sebenar
  //   FloatPanel_Membership_CardMembershipHubListHide(true);
  // });




}





function  FloatPanel_Membership_CardMembershipHubList_MembershipCardLoadBySubscriberAccNoDashboardMainStore() {
   
        globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
        globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
        _DataStore_MembershipCard_Load_MembershipCardHub.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCard_Load_MembershipCardHub.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCard_LoadforCheck_In');
        
        _DataStore_MembershipCard_Load_MembershipCardHub.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    // var allData = records;
        
                    // // Store - MembershipCardFee > 0
                    // var storeWithFee = Ext.create('Ext.data.Store', {
                    //     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    //     data: allData.filter(function (record) {
                    //         return record.get('MembershipCardFee') > 0;
                    //     })
                    // });
        
                    // // Store - MembershipCardFee <= 0
                    // var storeFOC = Ext.create('Ext.data.Store', {
                    //     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    //     data: allData.filter(function (record) {
                    //         return record.get('MembershipCardFee') <= 0;
                    //     })
                    // });
        
                    // // Store - Top Rated (3.5 stars and above, sorted descending)
                    // var storeTopRated = Ext.create('Ext.data.Store', {
                    //     model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    //     data: allData
                    //         .filter(function (record) {
                    //             var star = record.get('CountStar');
                    //             return star !== null && star !== undefined && star >= 3.5;
                    //         })
                    //         .sort(function (a, b) {
                    //             return b.get('CountStar') - a.get('CountStar');
                    //         })
                    // });
        
                    // Set stores to list components
                 
                    Ext.getCmp('FloatPanel_Membership_CardMembershipHubListList').setStore(_DataStore_MembershipCard_Load_MembershipCardHub);

        
                    console.log('Stores updated based on loaded membership card data.');
                } else {
                    console.log('Failed to load membership card data or no records returned.');
                }
            }
        });
        
    
    
    
    
    
    
    
    
    
    
    }
    




   
function FloatPanel_Membership_CardMembershipHubList_CheckInPageShow(logoUrl,EnterpriseName,EnterpriseTagline,StrCheckInCount,EnterpiseAccNo,Section,Method) {
 


Dashboard_SuccessCheckInController_DirectCheckIn(StrCheckInCount, EnterpiseAccNo, Section,Method) 









  //  var CheckInCount = parseInt(StrCheckInCount);
  //  if (CheckInCount <= 2) {
 
  //      FloatPanel_CheckInModalShow({
  //          logoUrl: logoUrl,
  //          enterpriseName: EnterpriseName,
  //          enterpriseTagline: EnterpriseTagline,
  //          enterpriseAccNo: EnterpiseAccNo,
  //          checkInCount: CheckInCount,
 
  //          onConfirmFn: function(modalView){
  //              // ✅ letak code Ajax insert check-in kau sini
  //              // var objn = {
  //              //     "EnterpriseHQAccNo": EnterpiseAccNo,
  //              //     "EnterpriseAccNo": EnterpiseAccNo,
  //              //     "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
  //              //     "CheckInCode": "CIC-" + GenerateRandomNo() + '-' + GetCurrAyohaUserAccountNo(),
  //              //     "CheckInMethod": "Online",
  //              //     "CheckInPage": "MerchantList"
  //              // };
 
  //              // Ext.Ajax.request({
  //              //     type: "POST",
  //              //     url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',
  //              //     dataType: "json",
  //              //     data: JSON.stringify(objn),
  //              //     headers: {"Content-Type":"application/json; charset=utf-8"},
 
  //              //     success: function (result) {
  //              //         var data = Ext.decode((result.responseText || '').trim());
  //              //         if (data.success == "true") {
  //              //             CheckInCount = CheckInCount + 1;
 
  //              //             // celebrate + refresh
  //              //             Ayoha_CelebrationReward(CheckInCount);
  //              //             CoreFunction_DashboardAyohaUser();
 
  //              //             // close modal
  //              //             FloatPanel_CheckInModalHide();
 
  //              //             // optional: close parent panel
  //              //             FloatPanel_Membership_CardMembershipHubListHide();
  //              //         } else {
  //              //             swalFireFail("Fail!->" + (result.responseText || '').trim());
  //              //         }
  //              //     },
  //              //     failure: function (result) {
  //              //         swalFireFail("Fail!" + (result.responseText || '').trim());
  //              //     }
  //              // });
  //          },
 
  //          onCancelFn: function(){
  //              // optional cancel action
  //          }
  //      });
 
  //      return;
  //  }else{
    
 
 
 
 
 
 
 
 
   
  //  var objn = {
  //    EnterpriseHQAccNo: EnterpiseAccNo,
  //    EnterpriseAccNo: EnterpiseAccNo,
  //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
  //    CheckInCode: "CIC-" + GenerateRandomNo() + '-' + GetCurrAyohaUserAccountNo(),
  //    CheckInMethod: "Online",
  //    CheckInPage: "MerchantList"
  //  };
   
  //  Ext.Ajax.request({
  //    url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',
  //    method: 'POST',                 // ✅ betul
  //    jsonData: objn,                 // ✅ auto encode JSON + set body
  //    headers: {
  //      'Content-Type': 'application/json; charset=utf-8'
  //    },
  //    success: function (response) {  // ✅ Ext pass response
  //      var data;
   
  //      try {
  //        data = Ext.decode((response.responseText || '').trim());
  //      } catch (e) {
  //        swalFireFail("Fail! Invalid JSON -> " + (response.responseText || ''));
  //        Ext.Viewport.unmask();
  //        LoadingPanelHide();
  //        return;
  //      }
   
  //      if (data && (data.success === true || data.success === "true")) {
   
  //       FloatPanel_CheckInModalHide(false); // popOut default
  //        CoreFunction_DashboardAyohaUser();
  //        FloatPanel_Membership_CardMembershipHubListHide(false);
  //      //  CoreFunction_DestroyFloatPanel('FloatPanel_Membership_CardMembershipHubList_ID');
  //        Ayoha_WelcomeBackFans();
 
 
   
  //      } else {
  //        swalFireFail("Fail!->" + (response.responseText || '').trim());
  //        LoadingPanelHide(false);
  //        Ext.Viewport.unmask();
  //        return;
  //      }
   
  //      Ext.Viewport.unmask();
  //    },
  //    failure: function (response) {
  //      swalFireFail("Fail!" + (response.responseText || '').trim());
  //      Ext.Viewport.unmask();
  //      LoadingPanelHide(false);
  //    }
  //  });
 
  //  }
 
 
 }
 