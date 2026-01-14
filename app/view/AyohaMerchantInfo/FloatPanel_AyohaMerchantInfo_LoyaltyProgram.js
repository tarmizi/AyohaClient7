
Ext.define('BuskartApp.view.AyohaMerchantInfo.FloatPanel_AyohaMerchantInfo_LoyaltyProgram', {

});

var _FloatPanel_AyohaMerchantInfo_LoyaltyProgram;


var isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';






function FloatPanel_AyohaMerchantInfo_LoyaltyProgram() {

    _FloatPanel_AyohaMerchantInfo_LoyaltyProgram =
    Ext.create('Ext.Container', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaMerchantInfo_LoyaltyProgramID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
          type: 'fit'
        //   type: 'vbox',
        //   pack: 'start',
        //   align: 'center'
        },
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
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                            RemovePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
                        }
                      
                    }
                });
            }
        },

        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'top',
                height: 40,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_AyohaMerchantInfo_LoyaltyProgramHeader',
                style: {
                    // background: '#D25959',
                    background: 'transparent',
                    // border: '2px'
                },
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
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
                                         margin: '10 0 0 5',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             // FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide();
                                             // FloatPanel_AyohaMerchantInfo_LoyaltyProgram_AddCardHide();
                                             isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';
                                             _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'left',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             RemovePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
                                             //  FloatPanel_AyohaMerchantInfo_LoyaltyProgram_AddCardHide();

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },
                                      {
                                        margin: '10 10 0 0',
                                        id: 'htmlFloatPanel_AyohaMerchantInfo_LoyaltyProgram_TitleHeaderTxt',

                                        html: '<div style="color:black;text-align: right;font-size:14px;width:100%;"><b>Membership Loyalty Stamp</b></div>'
                                    },
                                      {
                                        xtype: 'button',
                                        margin: '10 0 0 -10',
                                        id: 'btnFloatPanel_AyohaMerchantInfo_LoyaltyProgram_CardIcon',
                                        height: 35,
                                        width: 35,
                                        //hidden:true,
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/stampedFeature01.png" width="25" height="25" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {

                                        }
                                    },
                                      

                                    {
                                        xtype: 'spacer',
                                        width: 10,
                                    },
                                          









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
                    width: '100%',
                    height: '100%',
                    variableHeights: true,
                    mode: 'SINGLE',
                   // ui: 'plain',        // removes theme borders
inset: false,       // make sure inset styling isn’t applied
//cls: 'list--flat',
// cls: 'card-list list--centered',
                                     
                                      grouped: true,
                                      disableSelection: true,
                                      scrollable: {
                                          direction: 'vertical',
                                          indicators: {
                                              y: {
                                                  autoHide: true
                                              },
                                              x: {
                                                  autoHide: true
                                              }
                                          }
                                      },
                                      style: 'background-color:rgba(255,255,255, 0);border-radius: 0px 0px 0px 0px;',
            
                    // Minimal inline store so you can see it render
                    store:_DataStore_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore,
                  







                    // Drop this into your list's itemTpl
itemTpl: new Ext.XTemplate([
'    <!-- Main Card Container -->',
// '   <div style="background-color:#ffffff; width:105%; border-radius:5px; overflow:hidden; margin:0 0 0 -10px; border:0; -webkit-box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22); box-shadow:0 18px 48px rgba(0,0,0,.28), 0 8px 20px rgba(0,0,0,.22);">',
'<div onclick="FloatPanel_AyohaMerchantInfo_LoyaltyProgram_OpenMerchantLoyaltyProgram({ID})" style="background:#fff; width:103%; border-radius:12px; overflow:hidden; margin:0px 0px 0px -5px; border:0; box-shadow:0 12px 30px rgba(24,39,75,.14), 0 3px 10px rgba(24,39,75,.10);">',
'',
'        <!-- Image Section -->',
'        <div style="position: relative;">',
'            <!-- Placeholder for the main image -->',
//  '            <img src="{ImagePath}" alt="Pandan Butter Latte" style="width: 100%; height: auto; display: block;">',
'{ModifiedStampContent}',
'            ',
'            <!-- Discount Tag -->',
'            <div style="display:block;position: absolute; top: 12px; left: 12px; background-color: #808000; color: white; padding: 5px 12px; border-radius: 8px; font-size: 12px; font-weight: bold;">',
'                Loyalty Stamp',
'            </div>',
'            ',
'            <!-- Price Tag -->',

'<div style="display:none',
';position:absolute; bottom:-25px; right:20px !important; left:auto !important',
'display:flex; flex-direction:column; align-items:center; justify-content:center;',
'width:50px; height:50px;',
'background:{ModifiedCampaignColor}; color:#fff; border-radius:50%;',
'box-shadow:0 4px 8px rgba(0,0,0,0.2); border:2px solid #fff;',
' font-weight:bold; line-height:1; gap:2px;z-index:10;">{ModifiedAmount}</div>',

// '            <div style="display:{ModifiedVoucherDisplay};position: absolute; bottom: -25px; right: 20px; background-color: #e74c3c; color: white; width: 50px; height: 50px; border-radius: 50%;align-items: center; justify-content: center; font-size: 13px; font-weight: bold; box-shadow: 0 4px 8px rgba(0,0,0,0.2); border: 2px solid white;">',
// '                {ModifiedAmount}',
// '            </div>',
'        </div>',
'',
'        <!-- Content Section -->',
'        <div style="padding: 16px; margin-top: 10px;">',
'            <!-- Store Info -->',
'            <div style="display: flex; align-items: center; margin-bottom: 12px; gap: 12px;border-bottom:1px solid #e9e9ee">',
'                <!-- Store Icon -->',
'                <div style="min-width: 48px; height: 48px; border-radius: 8px; border: 1px solid #eee; display:flex; align-items:center; justify-content:center; background-color: #f9f9f9;">',
'                    <img style="width: 28px; height: 28px;" src="{EnterpriseLogo}" alt="Store Icon">',
'                </div>',
'                ',
'                <!-- Store Name and Subtitle -->',
'                <div style="flex-grow: 1;">',
'                    <p style="font-weight: 600; font-size: 15px; margin: 0; color: #333;">{EnterpriseName}</p>',
'                    <p style="font-size: 12px; color: #777; margin: 2px 0 0 0;">{EnterpriseTagLine}</p>',
'                </div>',
'                ',
'                <!-- Rating and Reward Icon Container -->',
'                <div style="display: flex; align-items: center; gap: 12px;">',
'                    <!-- Rating -->',
'                    <div style="text-align: right; white-space: nowrap;">',
'                        <div style="font-size: 14px; display: flex; align-items: center; gap: 4px;">',
'                            <span style="font-weight: bold; color: #333;">{CountStar}</span>',
'                            <span style="color: #f1c40f;">★</span>',
'                        </div>',
'                        <div style="font-size: 11px; color: #999;">{CountReviewer} Reviews</div>',
'                    </div>',    
'                </div>',
'            </div>',
'',
//'            <div style:border:1px solid #e9e9ee;width:100%;height:5px;background-color:#e9e9ee/>',
'            <h2 style="font-size: 20px; font-weight: 700; margin: 16px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
'                 {StampContentNote}',
'            </h2>',
// '            <h2 style="font-size: 12px; font-weight: 700; margin: 3px 0 4px 0; color: #2c3e50; line-height: 1.4;">',
// '              Campaign Name:{StampCampaignName}',
// '            </h2>',
'            ',
'            <!-- Original Price -->',
'            <p style="margin: 0 0 16px 0; color: #95a5a6; font-size: 12px;">',
'                End Date: {EndDate}',
'            </p>',
'',
'            <!-- Tags -->',
'            <div style="display: flex; gap: 8px; margin-bottom: 4px;">',
'                <span style="background-color: #ecf0f1; color: #7f8c8d; padding: 6px 14px; border-radius: 16px; font-size: 13px; font-weight: 500;">{BusinessMode}</span>',
'                <span style="background-color: #ecf0f1; color: #7f8c8d; padding: 6px 14px; border-radius: 16px; font-size: 13px; font-weight: 500;">{EnterpriseDescription}</span>',
'            </div>',
'            ',
'        </div>',
'        ',
'        <!-- Action Button -->',
'        <div  style="margin: -20px 0px 0px 10px;display:none">',
//'{ModifiedButtonBottomDisplay}',
'             <button style="width: 97%; background-image: linear-gradient(#ff00de75, #c800ffc9);background-color: #fac; color: white; border: none; padding: 15px; border-radius: 12px; font-size: 14px; font-weight: bold; cursor: pointer; text-shadow: 0 1px 1px rgba(0,0,0,0.2); box-shadow: 0 4px 10px rgba(247, 151, 30, 0.4); transition: transform 0.2s ease, box-shadow 0.2s ease;" onmouseover="this.style.transform=\'translateY(-2px)\'; this.style.boxShadow=\'0 6px 12px rgba(247, 151, 30, 0.5)\';" onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 10px rgba(247, 151, 30, 0.4)\';">',
 '                View Loyalty Stamp Card',
'            </button>',
'        </div>',
'',
'    </div>'
].join(''),

)}

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
    return _FloatPanel_AyohaMerchantInfo_LoyaltyProgram;



}








function FloatPanel_AyohaMerchantInfo_LoyaltyProgramShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaMerchantInfo_LoyaltyProgram);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaMerchantInfo_LoyaltyProgram());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
    isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'Y';

    

    FloatPanel_AyohaMerchantInfo_LoyaltyProgramAdjustHeight();
    //FloatPanel_AyohaMerchantInfo_LoyaltyProgramList_AyohaUserStampCardNearestRedeemItemStore();
    FloatPanel_AyohaMerchantInfo_LoyaltyProgramList_AyohaUserStampCard_MerchantLoyaltyCampaign_LoadStampStore();
    document.getElementById("input-FloatPanel_AyohaMerchantInfo_LoyaltyProgram_SearchTxt").addEventListener("keyup", MerchantLoyaltyCampaign_LoadStampStoreStoreOnKeyUp);

}





function FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide() {
    // FloatPanel_AyohaMerchantInfo_LoyaltyProgram_AddCardHide();
    if (isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen == "Y") {
        _FloatPanel_AyohaMerchantInfo_LoyaltyProgram.hide(); isFloatPanel_AyohaMerchantInfo_LoyaltyProgramOpen = 'N';
        RemovePages("FloatPanel_AyohaMerchantInfo_LoyaltyProgramHide()");
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
        localStorage.setItem('StampCampaignCode', StampCampaignCodes);

        localStorage.setItem('CountLoyaltyStamped', YESStamped);
        localStorage.setItem('CountStampCardRowShow', TotalRows);
        FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);

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
                console.log('Store loaded successfully, total records: ' + records.length);
    
               // var record = records[0]; // Access only the first record
              //  var planCode = record.get('PaymentPlanCode');
              countMerchantLoyaltyCampaign_LoadStampStoreFirst=records.length;
              Ext.getCmp('FloatPanel_AyohaMerchantInfo_LoyaltyProgram_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMerchantLoyaltyCampaign_LoadStampStoreFirst + ')</b></font>');
               // LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
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






