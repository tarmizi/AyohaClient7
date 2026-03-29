
Ext.define('BuskartApp.view.AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_LoyaltyProgram', {

});

var _FloatPanel_AyohaMerchantInfo_LoyaltyProgram=null;


var isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';



function FloatPanel_AyohaMerchantInfo_LoyaltyProgramCreateIfNeeded() {
    if (_FloatPanel_AyohaMerchantInfo_LoyaltyProgram && !_FloatPanel_AyohaMerchantInfo_LoyaltyProgram.destroyed) return;

    _FloatPanel_AyohaMerchantInfo_LoyaltyProgram =
    Ext.create('Ext.Container', {
        id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgramID',
        floated: true,
        centered: true,
        fullscreen: true,
       // closeAction: 'hide',
       closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250


            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       listeners: {
 

        // ✅ kalau user tap mask, close macam standard
        beforehide: function () {
          // kalau hide dipanggil bukan dari function kita, block dulu
          // (optional: boleh allow kalau kau nak)
          return true;
        }
      },

        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: ayoha_HeaderHeight(),
                    style:ayohaThemeColor_Header(),

                id: 'containerFloatPanel_AyohaMerchantInfo_LoyaltyProgramHeader',
              
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
                                         id: 'btnFloatPanel_AyohaMerchantInfo_LoyaltyProgramBack',
                                      
                                         height: 30,
                                         width: 65,
                                         margin: '0 0 0 10',
                                            // iconCls: 'list',
                                            html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                            FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide(false);
                                            //  // FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide();
                                            //  // FloatPanel_AyohaMerchantInfo_LoyaltyProgram_AddCardHide();
                                            //  isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';
                                            //  _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(Ext.fx.Animation({
                                            //      type: 'slideOut',
                                            //      direction: 'left',
                                            //      easing: 'cubic-bezier(.7,0,.7,1)',
                                            //      duration: 250

                                            //  }));
                                            //  RemovePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
                                             //  FloatPanel_AyohaMerchantInfo_LoyaltyProgram_AddCardHide();

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                      
                                        id: 'htmlFloatPanel_AyohaMerchantInfo_LoyaltyProgram_TitleHeaderTxt',
                                        html:ayohaTheme_HeaderText('Membership Loyalty Stamp'),
                                        margin: '0 15 0 0',   
                                       // html: '<div style="color:black;text-align: right;font-size:14px;width:100%;"><b>Membership Loyalty Stamp</b></div>'
                                    },
                                    //   {
                                    //     xtype: 'button',
                                    //     margin: '10 0 0 -10',
                                    //     id: 'btnFloatPanel_AyohaMerchantInfo_LoyaltyProgram_CardIcon',
                                    //     height: 35,
                                    //     width: 35,
                                    //     //hidden:true,
                                    //     // iconCls: 'list',
                                    //     html: '<div ><img src="resources/icons/stampedFeature01.png" width="25" height="25" alt="Company Name"></div>',
                                    //     ui: 'plain',
                                    //     handler: function () {

                                    //     }
                                    // },
                                      

                                    // {
                                    //     xtype: 'spacer',
                                    //     width: 10,
                                    // },
                                          









                       ]

            },


           
            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgramListContentID',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                style: 'background-color:transparent',

                items: [

{
    xtype: 'list',
    id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgramListListID',
    cls: 'ayohaLoyaltyListFull',
    itemCls: 'ayohaLoyaltyListItem',
    width: '100%',
    height: '100%',
    variableHeights: true,
    mode: 'SINGLE',
    inset: false,
    grouped: true,
    pinHeaders: false,
    disableSelection: true,
    style: 'background:#fff;border-radius:0;',
    scrollable: {
        direction: 'vertical',
        indicators: {
            y: { autoHide: true },
            x: { autoHide: true }
        }
    },
    //  listeners: {
    //     painted: function (list) {
    //         Ext.defer(function () {
    //             AyohaLoyalty_BindGroupHeaderObserver(list);
    //             AyohaLoyalty_RenderGroupHeaderLogoName(list);
    //         }, 120);
    //     },
    //     refresh: function (list) {
    //         Ext.defer(function () {
    //             AyohaLoyalty_RenderGroupHeaderLogoName(list);
    //         }, 80);
    //     },
    //     resize: function (list) {
    //         Ext.defer(function () {
    //             AyohaLoyalty_RenderGroupHeaderLogoName(list);
    //         }, 80);
    //     }
    // },
    store: _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore,
    itemTpl: new Ext.XTemplate([
        '<div class="ayohaLoyaltyCard" onclick="FloatPanel_AyohaMerchantInfo_LoyaltyProgram_OpenMerchantLoyaltyProgram({ID})">',
        '    <div style="position:relative;">',
        '        {ModifiedStampContent}',
        '    </div>',
        '    <div class="ayohaLoyaltyContent">',
        '        <div class="ayohaLoyaltyStoreRow">',
        '            <div class="ayohaLoyaltyLogoWrap">',
        '                <img class="ayohaLoyaltyLogo" src="{EnterpriseLogo}" alt="Store Icon">',
        '            </div>',
        '            <div class="ayohaLoyaltyStoreInfo">',
        '                <p class="ayohaLoyaltyStoreName">{EnterpriseName}</p>',
        '                <p class="ayohaLoyaltyStoreTagline">{EnterpriseTagLine}</p>',
        '            </div>',
        '            <div class="ayohaLoyaltyRating">',
        '                <div class="ayohaLoyaltyRatingTop">',
        '                    <span class="ayohaLoyaltyRatingValue">{CountStar}</span>',
        '                    <span class="ayohaLoyaltyRatingStar">★</span>',
        '                </div>',
        '                <div class="ayohaLoyaltyReview">{CountReviewer} Reviews</div>',
        '            </div>',
        '        </div>',
        '        <h2 class="ayohaLoyaltyTitle">{StampContentNote}</h2>',
        '        <p class="ayohaLoyaltyEndDate">End Date: {EndDate}</p>',
        '        <div class="ayohaLoyaltyTags">',
        '            <span class="ayohaLoyaltyTag">{BusinessMode}</span>',
        '            <span class="ayohaLoyaltyTag">{EnterpriseDescription}</span>',
        '        </div>',
        '    </div>',
        '</div>'
    ].join(''))
}
// {
//     xtype: 'list',
//     id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgramListListID',
  
//     cls: 'ayohaLoyaltyListFull',
// itemCls: 'ayohaLoyaltyListItem',
//     width: '100%',
//     height: '100%',
//     variableHeights: true,
//     mode: 'SINGLE',
//     inset: false,
//     grouped: true,
//    pinHeaders: false,
//     disableSelection: true,
//     style: 'background:#fff;border-radius:0;',
//     scrollable: {
//         direction: 'vertical',
//         indicators: {
//             y: { autoHide: true },
//             x: { autoHide: true }
//         }
//     },
     
//     store: _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore,
//     itemTpl: new Ext.XTemplate([
//         '<div class="ayohaLoyaltyCard" onclick="FloatPanel_AyohaMerchantInfo_LoyaltyProgram_OpenMerchantLoyaltyProgram({ID})">',
//         '    <div style="position:relative;">',
//         '        {ModifiedStampContent}',
//         '    </div>',
//         '    <div class="ayohaLoyaltyContent">',
//         '        <div class="ayohaLoyaltyStoreRow">',
//         '            <div class="ayohaLoyaltyLogoWrap">',
//         '                <img class="ayohaLoyaltyLogo" src="{EnterpriseLogo}" alt="Store Icon">',
//         '            </div>',
//         '            <div class="ayohaLoyaltyStoreInfo">',
//         '                <p class="ayohaLoyaltyStoreName">{EnterpriseName}</p>',
//         '                <p class="ayohaLoyaltyStoreTagline">{EnterpriseTagLine}</p>',
//         '            </div>',
//         '            <div class="ayohaLoyaltyRating">',
//         '                <div class="ayohaLoyaltyRatingTop">',
//         '                    <span class="ayohaLoyaltyRatingValue">{CountStar}</span>',
//         '                    <span class="ayohaLoyaltyRatingStar">★</span>',
//         '                </div>',
//         '                <div class="ayohaLoyaltyReview">{CountReviewer} Reviews</div>',
//         '            </div>',
//         '        </div>',
//         '        <h2 class="ayohaLoyaltyTitle">{StampContentNote}</h2>',
//         '        <p class="ayohaLoyaltyEndDate">End Date: {EndDate}</p>',
//         '        <div class="ayohaLoyaltyTags">',
//         '            <span class="ayohaLoyaltyTag">{BusinessMode}</span>',
//         '            <span class="ayohaLoyaltyTag">{EnterpriseDescription}</span>',
//         '        </div>',
//         '    </div>',
//         '</div>'
//     ].join(''))
// }


                ]
            },







            {
                xtype: 'container',
                id: 'containerFloatPanel_AyohaMerchantInfo_LoyaltyProgramTitleOutter',
                width: '100%',
                docked: 'bottom',
               // hidden: true,
                height: 40,
                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                // style: "background-color: #EAEEF3;",

                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [




                      {
                          xtype: 'button',
                          id: 'btnFloatPanel_AyohaMerchantInfo_LoyaltyProgramListSearch',
                          // hidden: true,
                          //  badgeText: '1',
                          margin: '2 0 0 -5',
                          height: 40,
                          width: 40,
                          html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                          ui: 'plain',
                          handler: function () {
                              // NotificationsPanelShow();

                              // LoyaltyCardRedeemListShow();


                              //  LoyaltyCardRedeemListShow();
                          }
                      },



                     {
                         id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgram_SearchTxt',
                         margin: '0 0 0 -10',
                         width: '78%',
                         height: 20,
                         html: '<input type="text" id="input-FloatPanel_AyohaMerchantInfo_LoyaltyProgram_SearchTxt" placeHolder="Search" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                     },



                     {
                         id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgram_CountSearchTxt',
                         margin: '0 0 0 0',
                       //  hidden: true,
                         height: 20,
                         html: '<font size=3 color=black>(0)</font>'
                     },
                     {
                         xtype: 'button',
                         id: 'btnFloatPanel_AyohaMerchantInfo_LoyaltyProgramFilter',
                         hidden: true,
                         //  badgeText: '1',
                         margin: '2 0 0 15',
                         height: 25,
                         width: 35,
                         html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                         ui: 'plain',
                         handler: function () {
                             // NotificationsPanelShow();

                             // LoyaltyCardRedeemListShow();


                             //  LoyaltyCardRedeemListShow();
                         }
                     },





                ]

            },



        ]





    });




}










function FloatPanel_AyohaMerchantInfo_LoyaltyProgramShow() {

    // Ext.Viewport.remove(_FloatPanel_AyohaMerchantInfo_LoyaltyProgram);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaMerchantInfo_LoyaltyProgram());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");






    FloatPanel_AyohaMerchantInfo_LoyaltyProgramCreateIfNeeded();


    _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.show();
   // ✅ push browser back (ikut style kau)
   if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
     AyohaBrowserBack.push('FloatPanel_AyohaMerchantInfo_LoyaltyProgram', function () {
    
        FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide(true);
     });
   }





    isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'Y';

    

    FloatPanel_AyohaMerchantInfo_LoyaltyProgramAdjustHeight();
    //FloatPanel_AyohaMerchantInfo_LoyaltyProgramList_AyohaUserStampCardNearestRedeemItemStore();
    FloatPanel_AyohaMerchantInfo_LoyaltyProgramList_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore();
    document.getElementById("input-FloatPanel_AyohaMerchantInfo_LoyaltyProgram_SearchTxt").addEventListener("keyup", MerchantLoyaltyCampaign_LoadStampStoreStoreOnKeyUp);

}





function FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide(fromBack,animCfg){
    // FloatPanel_AyohaMerchantInfo_LoyaltyProgram_AddCardHide();
    // if (isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen == "Y") {
    //     _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(); isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';
    //     RemovePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
    // }



    
    if (isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide();
          }
          isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';
         
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaMerchantInfo_LoyaltyProgram');
          }
          _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.destroy();
          _FloatPanel_AyohaMerchantInfo_LoyaltyProgram = null;
    }
 
  
}

var countMerchantLoyaltyCampaign_LoadStampStoreFirst=0;
function MerchantLoyaltyCampaign_LoadStampStoreStoreOnKeyUp(){
   






        console.log('SearchEnterpriseOnKeyUp');
        var countMerchantLoyaltyCampaign_LoadStampStore = 0;
    
    
        _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.clearFilter();
    
        var queryString = document.getElementById('input-FloatPanel_AyohaMerchantInfo_LoyaltyProgram_SearchTxt').value;
    
    
    
        if (queryString) {
            console.log(queryString.length);
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                    countMerchantLoyaltyCampaign_LoadStampStore = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.getCount();
                    Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadStampStore + ')</b></font>');
                    // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
            console.log('tiada3');
            countMerchantLoyaltyCampaign_LoadStampStore = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.getCount();
            Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadStampStore + ')</b></font>');
    
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            console.log('tiada2');
            _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.clearFilter();
            Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadStampStoreFirst + ')</b></font>');
            // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
            // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
            return false;
        }
    
    
    
    
  
}




// //var _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore;
function FloatPanel_AyohaMerchantInfo_LoyaltyProgram_OpenMerchantLoyaltyProgram(val) {

   // FloatPanel_AyohaMerchantInfo_LoyaltyProgram_NotificationShow(ID);
    //  FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide();
    globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";

    var StampCampaignCode = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StampContent = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StampContentNote = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StampContentSequence = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseName = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var CountRow = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var EndDate = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StartDate = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StampRuleRemarks = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var IsStampRulePopUp = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StampCampaignName = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo= _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var StampContentFinal = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var CountStampYES = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
    var EnterprisesLogo = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);
  var TodayCheckInCount = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);


var MembershipCardCode = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);

var CountStar = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);


var CountReviewer = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);

var MembershipCardFeePaymentCycle = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('ID', val, 0, false, false, true);



AppState.MainDashboard_HomePage.MembershipCardCode = MembershipCardCode.get('MembershipCardCode');
AppState.MainDashboard_HomePage.CountStar = CountStar.get('CountStar');
AppState.MainDashboard_HomePage.CountReviewer = CountReviewer.get('CountReviewer');
AppState.MainDashboard_HomePage.MembershipCardFeePaymentCycle = MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');


    var StampCampaignCodes = StampCampaignCode.get('StampCampaignCode');
    var StampContents = StampContent.get('StampContent').replace("width:70px", "width:80px");
    var StampContentNotes = StampContentNote.get('StampContentNote');
    var StampContentSequences = StampContentSequence.get('StampContentSequence');
    var EnterpriseNames = EnterpriseName.get('EnterpriseName');
    var CountRows = CountRow.get('CountRow');
    var EndDates = EndDate.get('EndDate');
    var StartDates = StartDate.get('StartDate');
    var StampRuleRemarkss = StampRuleRemarks.get('StampRuleRemarks');
    var IsStampRulePopUps = IsStampRulePopUp.get('IsStampRulePopUp');
    var StampCampaignNames = StampCampaignName.get('StampCampaignName');
    var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
    var StampContentFinals = StampContents.replace("height:70px", "height:80px");
    var CountStampYESs = CountStampYES.get('CountStampYES');
    var EnterprisesLogos = EnterprisesLogo.get('EnterpriseLogo');
var TodayCheckInCounts = TodayCheckInCount.get('TodayCheckInCount');


    //var StampCampaignCode = ArrStampCampaignCode[0];
    //var EnterpriseAccNo = ArrEnterpriseAccNo[0];
    //var StartDate = ArrStartDate[0];
    //var EndDate = ArrEndDate[0];
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    //var EnterpriseName = ArrEnterpriseName[0];
    //var StampRuleRemarks = ArrStampRuleRemarks[0];
    //var isStampRulePopUp = ArrIsStampRulePopUp[0];
    //var StampCampaignName = ArrStampCampaignName[0];
    //var CountLoyaltyStamped = ArrStampContentSequence[0];
    //var CountStampCardRowShow = ArrStampTotalRow[0];
    //var EnterprisesLogo = ArrEnterprisesLogo[0];



    globalLatestPointCampaignCode = StampCampaignCodes;
    
   

    MembershipTag="NO";

    if (IsStampRulePopUps == "POINTLOYALTYCARD")
    {
        FloatLoyaltyCardPointShow(StampCampaignNames, globalLatestPointCampaignCode, EnterprisesLogos, EnterpriseNames, EnterpriseAccNos);

    } else {
        var strStampedYES = CountStampYESs;
        var StampedYES = strStampedYES.split("/");
        var YESStamped = StampedYES[0];
        var TotalRows = StampedYES[1];
        // localStorage.setItem('StampCampaignCode', StampCampaignCodes);

        // localStorage.setItem('CountLoyaltyStamped', YESStamped);
        // localStorage.setItem('CountStampCardRowShow', TotalRows);

Dashboard_SuccessCheckInController_DirectCheckIn(TodayCheckInCounts, EnterpriseAccNos, "MembershipCampaign-LoyaltyStamp","Online")

        //FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);

    }

   





   
}


function FloatPanel_AyohaMerchantInfo_LoyaltyProgram_OpenMerchantLoyaltyProgram_MembershipCardCode(val) {

    // FloatPanel_AyohaMerchantInfo_LoyaltyProgram_NotificationShow(ID);
     //  FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide();


    
     globalsetMessage_toBeAyohaMember_tag="MerchantLoyaltyCampaign";
 
     var StampCampaignCode = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StampContent = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StampContentNote = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StampContentSequence = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var EnterpriseName = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var CountRow = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var EndDate = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StartDate = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StampRuleRemarks = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var IsStampRulePopUp = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StampCampaignName = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var EnterpriseAccNo= _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var StampContentFinal = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var CountStampYES = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var EnterprisesLogo = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var MembershipCardCode = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var CountStar = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var CountReviewer = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);
     var MembershipCardFeePaymentCycle = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.findRecord('MembershipCardCode', val, 0, false, false, true);


     var StampCampaignCodes = StampCampaignCode.get('StampCampaignCode');
     var StampContents = StampContent.get('StampContent').replace("width:70px", "width:80px");
     var StampContentNotes = StampContentNote.get('StampContentNote');
     var StampContentSequences = StampContentSequence.get('StampContentSequence');
     var EnterpriseNames = EnterpriseName.get('EnterpriseName');
     var CountRows = CountRow.get('CountRow');
     var EndDates = EndDate.get('EndDate');
     var StartDates = StartDate.get('StartDate');
     var StampRuleRemarkss = StampRuleRemarks.get('StampRuleRemarks');
     var IsStampRulePopUps = IsStampRulePopUp.get('IsStampRulePopUp');
     var StampCampaignNames = StampCampaignName.get('StampCampaignName');
     var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
     var StampContentFinals = StampContents.replace("height:70px", "height:80px");
     var CountStampYESs = CountStampYES.get('CountStampYES');
     var EnterprisesLogos = EnterprisesLogo.get('EnterpriseLogo');
     var MembershipCardCodes= MembershipCardCode.get('MembershipCardCode');
     var CountStars= CountStar.get('CountStar');
     var CountReviewers= CountReviewer.get('CountReviewer');
     var MembershipCardFeePaymentCycles= MembershipCardFeePaymentCycle.get('MembershipCardFeePaymentCycle');
     //var StampCampaignCode = ArrStampCampaignCode[0];
     //var EnterpriseAccNo = ArrEnterpriseAccNo[0];
     //var StartDate = ArrStartDate[0];
     //var EndDate = ArrEndDate[0];
     var SubscriberAccNo = GetCurrAyohaUserAccountNo();
     //var EnterpriseName = ArrEnterpriseName[0];
     //var StampRuleRemarks = ArrStampRuleRemarks[0];
     //var isStampRulePopUp = ArrIsStampRulePopUp[0];
     //var StampCampaignName = ArrStampCampaignName[0];
     //var CountLoyaltyStamped = ArrStampContentSequence[0];
     //var CountStampCardRowShow = ArrStampTotalRow[0];
     //var EnterprisesLogo = ArrEnterprisesLogo[0];
    
     
     globalLatestPointCampaignCode = StampCampaignCodes;
     
    

     MembershipTag="NO";
     globalFloatPanelMerchantDetailPage_MembershipCardCode=MembershipCardCodes;
     globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNos;
     globalFloatPanelMerchantDetailPage_CountStar=CountStars;
     globalFloatPanelMerchantDetailPage_CountReviewer=CountReviewers;
     if (IsStampRulePopUps == "POINTLOYALTYCARD")
     {
         FloatLoyaltyCardPointShow(StampCampaignNames, globalLatestPointCampaignCode, EnterprisesLogos, EnterpriseNames, EnterpriseAccNos);
 
     } else {
         var strStampedYES = CountStampYESs;
         var StampedYES = strStampedYES.split("/");
         var YESStamped = StampedYES[0];
         var TotalRows = StampedYES[1];
         localStorage.setItem('StampCampaignCode', StampCampaignCodes);
 
         localStorage.setItem('CountLoyaltyStamped', YESStamped);
         localStorage.setItem('CountStampCardRowShow', TotalRows);
         FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(MembershipCardCodes, EnterpriseAccNos, MembershipTag,MembershipCardFeePaymentCycles,CountStars,CountReviewers);
        
        
        
        // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);
 
     }
 
    
 
 
 
 
 
    
 }

function FloatPanel_AyohaMerchantInfo_LoyaltyProgramAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 40;
    

   // Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgramID').setHeight(x + 40);
   // Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgramListListID').setHeight(newHeights);


}




function FloatPanel_AyohaMerchantInfo_LoyaltyProgramList_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore() {



    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();

    _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStamp');
 

    _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
             //  alert('Store loaded successfully, total records: ' + records.length);
    
            //    var record = records[0]; // Access only the first record
            //    var MembershipCardCode = record.get('MembershipCardCode');
            //    alert('First record MembershipCardCode: ' + MembershipCardCode);
              countMerchantLoyaltyCampaign_LoadStampStoreFirst=records.length;
              Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadStampStoreFirst + ')</b></font>');
              
      
//               Ext.defer(function () {
//     var list = Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgramListListID');
//     if (list) {
//         AyohaLoyalty_RenderGroupHeaderLogoName(list);
//     }
// }, 300);
            LoadingPanelHide(false);
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide(false);
            }
        }
    });






    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //     //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //     //});
    //     //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
    //     //var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

    //    // _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');
    //     _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.load();
    //     var count = _DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore.getCount();


    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(1000);
}
