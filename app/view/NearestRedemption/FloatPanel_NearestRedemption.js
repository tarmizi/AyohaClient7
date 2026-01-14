
Ext.define('BuskartApp.view.NearestRedemption.FloatPanel_NearestRedemption', {

});

var _FloatPanel_NearestRedemption;


var isFloatPanel_NearestRedemptionOpen = 'N';






function FloatPanel_NearestRedemption() {

    _FloatPanel_NearestRedemption =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_NearestRedemptionID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        // hideOnMaskTap: true,
        layout: {
            type: 'fit'
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
                            _FloatPanel_NearestRedemption.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_NearestRedemptionHide()");
                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_NearestRedemption.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
                            RemovePages("FloatPanel_NearestRedemptionHide()");
                        }
                      
                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: 'background-color:white;',
                layout: {
                    type: 'fit',

                },
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                docked: 'top',
                                height: 50,
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_NearestRedemptionHeader',
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
                                                         id: 'btnFloatPanel_NearestRedemptionBack',
                                                         margin: '20 0 0 5',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_NearestRedemptionHide();
                                                             // FloatPanel_NearestRedemption_AddCardHide();
                                                             isFloatPanel_NearestRedemptionOpen = 'N';
                                                             _FloatPanel_NearestRedemption.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_NearestRedemptionHide()");
                                                             //  FloatPanel_NearestRedemption_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '20 10 0 0',
                                                          id: 'htmlFloatPanel_NearestRedemption_TitleHeaderTxt',

                                                          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>All Nearest Redemption</b></div>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_NearestRedemption_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                hidden:true,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/AyohaRedeemPrize02.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_NearestRedemptionOpen = 'N';

                                                                    _FloatPanel_NearestRedemption.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_NearestRedemptionHide()");
                                                                    //FloatPanel_NearestRedemption_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },



























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_NearestRedemptionList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: white;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_NearestRedemptionCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_NearestRedemption').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    {
                                        xtype: 'panel',
                                        height: 5
                                    },

                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      items: [



                                              

                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: '95%',
                                                  id: 'FloatPanel_NearestRedemptionListContentID',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  style: 'background-color:transparent',

                                                  items: [
                                                      {
                                                          xtype: 'list',
                                                          width: '100%',
                                                          // height: '98%',
                                                          // flex: 1,
                                                          store: _DataStore_AyohaUserDashBoardNearestRedeemItemListStore,
                                                          // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                                          grouped:true,
                                                          id: 'FloatPanel_NearestRedemptionListListID',
                                                          mode: 'SINGLE',
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
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          // width: '100%',
                                                          disableSelection: true,
                                                          itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:80px;">' +


                                                           '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNearestRedemption({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center">{ModifiedStampContent}</td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{EnterpriseName}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{StampContentNote}<br>End Date:{EndDate}</font></td></tr></table>'

                                                               + '</div>',
                                                        
                                                          //height: '100%',
                                                        
                                                          emptyText: '<div  style="background-color:transparent;width:100%;height100%;">Hai!, you have no redemption items yet.Go to Ayoha Mechant Menu ,get their Membership card and then collect your redemptions items!</div>',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {

                                                          //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                          //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                          //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //        //var ID = records.get('ID');
                                                          //        ////FloatPanel_NearestRedemption_EditCardShow_Edit(ID);
                                                          //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                          //        //setTimeout(function () {
                                                          //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                                                          //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

                                                          //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                          //        //}, 2000);



                                                          //    },
                                                          //    deselect: function (list, records) {

                                                          //    }
                                                          //},
                                                          listeners: {
                                                              itemswipe: function (list, idx, target, record, evt) {
                                                                  //  To get the selection you should use getSelection() instead
                                                                  //////var selected = list.getActiveItem();
                                                                  //////alert(list.getActiveItem());
                                                                  //////if (!selected) { return; }

                                                                  //////var selectedIndex = selected[0];
                                                                  //////alert([selectedIndex, idx]);
                                                                  //Ext.Msg.alert('itemswipe', idx);


                                                              } // itemswipe
                                                          }

                                                      },
                                                  ]
                                              },



                                      ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_NearestRedemptionTitleOutter',
                                width: '100%',
                                //  docked: 'bottom',
                                hidden: true,
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
                                          id: 'btnFloatPanel_NearestRedemptionListSearch',
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
                                         id: 'FloatPanel_NearestRedemption_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_NearestRedemption_SearchTxt" placeHolder="Search Merchant" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_NearestRedemption_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_NearestRedemptionFilter',
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


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_NearestRedemption',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [










































                              //    ]

                              //    //}
                              //},










                        ]
                    },

















































                ]
            },












        ]





    });
    return _FloatPanel_NearestRedemption;



}








function FloatPanel_NearestRedemptionShow() {

    Ext.Viewport.remove(_FloatPanel_NearestRedemption);
    this.overlay = Ext.Viewport.add(FloatPanel_NearestRedemption());
    this.overlay.show();
    AddRoutePages("FloatPanel_NearestRedemptionHide()");
    isFloatPanel_NearestRedemptionOpen = 'Y';

    

    FloatPanel_NearestRedemptionAdjustHeight();
    //FloatPanel_NearestRedemptionList_AyohaUserStampCardNearestRedeemItemStore();
    FloatPanel_NearestRedemptionList_AyohaUserDashBoardNearestRedeemItemListStore();


}





function FloatPanel_NearestRedemptionHide() {
    // FloatPanel_NearestRedemption_AddCardHide();
    if (isFloatPanel_NearestRedemptionOpen == "Y") {
        _FloatPanel_NearestRedemption.hide(); isFloatPanel_NearestRedemptionOpen = 'N';
        RemovePages("FloatPanel_NearestRedemptionHide()");
    }
  
}







//var _DataStore_AyohaUserDashBoardNearestRedeemItemListStore;
function openNearestRedemption(val) {

   // FloatPanel_NearestRedemption_NotificationShow(ID);
    //  FloatPanel_NearestRedemptionHide();
    //alert(val);

    var StampCampaignCode = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StampContent = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StampContentNote = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StampContentSequence = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseName = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var CountRow = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var EndDate = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StartDate = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StampRuleRemarks = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var IsStampRulePopUp = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StampCampaignName = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo= _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var StampContentFinal = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var CountStampYES = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);
    var EnterprisesLogo = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.findRecord('ID', val, 0, false, false, true);

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
    var EnterprisesLogos = EnterprisesLogo.get('EnterprisesLogo');



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
    
    //alert(StampRuleRemarks); alert(isStampRulePopUp);



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




function FloatPanel_NearestRedemptionAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 40;
    // globalFloatPanel_NearestRedemptionManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_NearestRedemptionID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_NearestRedemptionListListID').setHeight(newHeights);


}




function FloatPanel_NearestRedemptionList_AyohaUserDashBoardNearestRedeemItemListStore() {



    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();

    _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemList');
    _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
        //var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');

       // _DataStore_AyohaUserDashBoardNearestRedeemItemListStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore');
        _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.load();
        var count = _DataStore_AyohaUserDashBoardNearestRedeemItemListStore.getCount();

        Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_PendingApprovalOrRedeemed').setStore(_DataStore_AyohaUserDashBoardNearestRedeemItemListStore);
        


        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);
}