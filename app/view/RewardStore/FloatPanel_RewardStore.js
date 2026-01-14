
Ext.define('BuskartApp.view.RewardStore.FloatPanel_RewardStore', {

});

var _FloatPanel_RewardStore;


var isFloatPanel_RewardStoreOpen = 'N';






function FloatPanel_RewardStore() {

    _FloatPanel_RewardStore =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_RewardStoreID',
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
            duration: 200,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'border-bottom:1px solid;background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_RewardStore.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                           
                        } if (e.direction == "right") {
                            _FloatPanel_RewardStore.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                          
                        }
                        isFloatPanel_RewardStoreOpen = 'N';
                        RemovePages(_FloatPanel_RewardStore, "isFloatPanel_RewardStoreOpen");
                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: transparent;',
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
                              //  hidden:true,
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_RewardStoreHeader',
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
                                                         id: 'btnFloatPanel_RewardStoreBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             _FloatPanel_RewardStore.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isFloatPanel_RewardStoreOpen = 'N';
                                                             RemovePages(_FloatPanel_RewardStore, "isFloatPanel_RewardStoreOpen");
                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },

                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_RewardStore_TitleHeaderTxt',
                                                           html: '<font size=2 color=black><b>Ayoha Merchants</b></font>'
                                                       },
                                                        {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_RewardStore_MerchantIcon',
                                                            hidden:true,
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/Ayohamerchantwhite01.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {
                                                              //  FloatPanel_RewardStoreHide();
                                                               // isLoyaltyCardRedeemListOpen = 'N';
                                                                _FloatPanel_RewardStore.hide(Ext.fx.Animation({
                                                                    type: 'slideOut',
                                                                    direction: 'right',
                                                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatPanel_RewardStoreOpen = 'N';
                                                                RemovePages(_FloatPanel_RewardStore, "isFloatPanel_RewardStoreOpen");

                                                            }
                                                        },
                                                              {
                                                                  xtype: 'container',
                                                                  //   margin: '0 0 0 5',
                                                                  hidden: true,
                                                                  //style: 'background-color: white;',
                                                                  //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                                                  height: 25,
                                                                  width: 70,
                                                                  // margin: '70 0 0 0',
                                                                  id: 'containerFloatPanel_RewardStoreHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_RewardStoreHaiUser',
                                                                          html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                                      },
                                                                      {
                                                                          xtype: 'container',
                                                                          //   margin: '0 0 0 5',
                                                                          hidden: true,
                                                                          style: 'background-color: transparent;',

                                                                          height: 25,
                                                                          width: 70,
                                                                          // margin: '70 0 0 0',
                                                                          id: 'containerFloatPanel_RewardStoreeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_RewardStoreeWallet',
                                                                                   margin: '4 0 0 -15',
                                                                                   height: 30,
                                                                                   width: 35,
                                                                                   // iconCls: 'list',
                                                                                   html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                                                   ui: 'plain',
                                                                                   handler: function () {
                                                                                       DrawerMenuShow();

                                                                                   }
                                                                               },
                                                                               {
                                                                                   margin: '7 0 0 2',
                                                                                   html: '<font size=2 color=white><b>RM00.00</b></font>'
                                                                               }
                                                                          ]
                                                                      },

                                                                  ]
                                                              },
                                                           {
                                                               xtype: 'container',
                                                               margin: '0 0 0 -5',
                                                               hidden: true,
                                                               //style: 'background-color: white;',
                                                               style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                               height: 40,
                                                               width: 40,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_RewardStorePictureUser',
                                                               layout: {

                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'
                                                               },
                                                               items: [
                                                                   {
                                                                       xtype: 'button',
                                                                       height: 40,
                                                                       width: 40,
                                                                       margin: '0 0 0 -11',
                                                                       id: 'btnFloatPanel_RewardStoreInfo',
                                                                       //badgeText: "2",
                                                                       html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                       ui: 'plain',
                                                                       handler: function () {

                                                                           //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                           //  setupMovementMap(2);





                                                                           //Ext.getCmp('mainView').setActiveItem(16);
                                                                           //loadNotificationSummary();
                                                                       }
                                                                   },



                                                               ]
                                                           },










                                       ]

                            },











                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              {

                                  xtype: 'container',
                                  width: '100%',
                                  height: 80,
                                  hidden: true,
                                  // width: 40,

                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                  //hidden: true,
                                  //docked: 'top',
                                  id: 'containerFloatPanel_RewardStoreHeaderTop',
                                  //style: {
                                  //    // background: '#D25959',
                                  //    background: 'transparent',
                                  //    // border: '2px'
                                  //},
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  style: 'border-bottom:2px none black;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center',
                                  },
                                  // hidden:true,
                                  items:
                                         [



                                      {
                                          width: '100%',
                                          // height:170,
                                          // width: 40,
                                          margin: '25 0 0 0',
                                          //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                          hidden: true,
                                          // docked: 'top',
                                          id: 'containerFloatPanel_RewardStoreIconHeader',
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
                                          items: [
                                               {
                                                   xtype: 'button',
                                                   id: 'btnFloatPanel_RewardStoreAllCard',
                                                   //hidden: true,
                                                   height: 80,
                                                   width: 90,
                                                   margin: '-25 0 0 0',
                                                   // iconCls: 'list',
                                                   html: '<div ><img src="resources/icons/LoyaltyCardOneWhite.png" width="80" height="65" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   //ui: 'confirm',
                                                   handler: function () {
                                                       FloatPanel_RewardStoreHide();
                                                   }
                                               },

                                              {
                                                  //width: '50%',

                                                  //height: 80,
                                                  width: 100,
                                                  // height:170,
                                                  // width: 40,
                                                  // margin: '7 0 0 0',
                                                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                  //hidden: true,
                                                  // docked: 'top',
                                                  id: 'containerFloatPanel_RewardStoreTotalLoyaltyLblCountLbl',
                                                  style: {
                                                      // background: '#D25959',
                                                      background: 'transparent',
                                                      // border: '2px'
                                                  },
                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',

                                                  },
                                                  items: [


                                                          {

                                                              id: 'btnFloatPanel_RewardStoreTotalLoyaltyLbl',
                                                              //hidden: true,
                                                              // height: 20,
                                                              // width: 150,
                                                              margin: '-26 0 0 -10',
                                                              // iconCls: 'list',
                                                              html: '<font size=1 color=white>Total Loyalty Card</font>',

                                                          },
                                                          {
                                                              margin: '-5 0 0 -10',
                                                              id: 'FloatPanel_RewardStoreTotalLoyaltyLblCount',
                                                              html: '<font size=10 color=white><b>1</b></font>',

                                                          },

                                                  ]
                                              },

                                          ]
                                      },











                                         ]

                              },
                              
                              {
                                  height: '97%',
                                  width: '100%',

                                  id: 'containerFloatPanel_RewardStore_List',
                                  style: {
                                      // background: '#D25959',
                                      background: 'transparent',
                                      // border: '2px'
                                  },
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',

                                  },
                                  items: [
                                     // 
                                      {
                                          xtype: 'list',
                                          //  flex: 1,
                                          width: '100%',
                                          store: _DataStore_EnterprisesLoadByMerchantCategory,
                                         // store: 'EnterprisesLoadByRowStatusStore',
                                          id: 'FloatPanel_RewardStore_List',
                                          // grouped: true,
                                          mode: 'SINGLE',
                                          //  indexBar: true,
                                          disableSelection: true,
                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
                                        //  scrollbarIndicator:false,
                                        



                                          itemTpl: '<div class="myContent" style="margin:-30px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;height:310px;">' +
                                                                      '<div onclick="FloatPanel_RewardStore_OpenStore({ID})" style="width:50%;text-align:left;margin:30px 0px 0px 25px;background-color: transparent;height:5px;"><img src="{EnterpriseLogoPath}"style="width: 120px; height: 120px;border-color:grey;border-style:none;border-width:1px;;margin:20px 0px 0px 0px; " /></div>' +
                                                                       //  '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:20px;font-weight:normal;overflow:hidden;padding:17px 0px;text-align:right;vertical-align:middle;word-break:normal" colspan="2"><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;overflow:hidden;margin:7px 0px 0px 0px;height:35px">{EnterpriseBusinessType}&nbsp;<img src="{BusinessTypeIconPath}" alt="Image" style="width:35px;height:35px;margin:0px 10px -15px 0px;"> </div><br><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:white;font-weight:normal;overflow:hidden;margin:-45px 0px 0px -50px;">{EnterpriseDescriptions}</div></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-right: 1px solid white;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;font-weight:normal;" colspan="2">{ModifiedRecommendedByAyoha}<br><div style="width100%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:18px;color:black;font-weight:bold;overflow:hidden;margin:-30px 0px 0px 10px;">{EnterpriseName} <font size=1 color=black>{ModifiedEnterpriseRegistrationNo}</font></div><br><div style="width:70%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:normal;overflow:hidden;margin:-21px 0px 0px 10px;height:52px;">{EnterpriseAddress}</div><br>{ModifiedSocialMediaButton}<br></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 0px 20px; height:50px">{ModifiedMerchantLinkType}</td><td style="background-color:#ffffff;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 20px 0px;" ><button OnClick="FloatPanel_RewardStoreMembershipCardShow({ID})" class="buttonGetMemberhipCard" style="margin:0px 0px 0px -5px;" >Get Membership Card</button></td></tr></tbody></table>' +
                                                                       '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:20px;font-weight:normal;overflow:hidden;padding:17px 0px;text-align:right;vertical-align:middle;word-break:normal" colspan="2"><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;overflow:hidden;margin:7px 0px 0px 0px;height:35px">{EnterpriseBusinessType}&nbsp;<img src="{BusinessTypeIconPath}" alt="Image" style="width:35px;height:35px;margin:0px 10px -15px 0px;"> </div><br><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:white;font-weight:normal;overflow:hidden;margin:-45px 0px 0px -50px;">{EnterpriseDescriptions}</div></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-right: 1px solid white;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;font-weight:normal;" colspan="2">{ModifiedRecommendedByAyoha}<br><div onclick="FloatPanel_RewardStore_OpenStore({ID})" style="width100%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:18px;color:black;font-weight:bold;overflow:hidden;margin:-30px 0px 0px 10px;">{EnterpriseName} <font size=1 color=black>{ModifiedEnterpriseRegistrationNo}</font></div><br><div style="width:70%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:normal;overflow:hidden;margin:-21px 0px 0px 10px;height:52px;">{EnterpriseAddress}</div><br>{ModifiedSocialMediaButton}<br></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px {ModifiedIsMemberVisitAyohaStoreRadius} 20px; height:50px">{ModifiedMerchantLinkType}</td>{ModifiedIsMemeber}</tr></tbody></table>' +

                                                                       '</div>',

                                          height: '100%',

                                          listeners: {
                                              itemsingletap: function (list, idx, target, records, evt) {


                                                  //var Stamps = records.get('Stamps');
                                                  //var StampsArr = Stamps.split('/');


                                                  //var StampCampaignCode = records.get('StampCampaignCode');
                                                  //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                  //var StartDate = records.get('StartDate');
                                                  //var EndDate = records.get('EndDate');
                                                  //var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                  //var EnterpriseName = records.get('EnterpriseName');
                                                  //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                  //var isStampRulePopUp = records.get('IsStampRulePopUp');
                                                  //var StampCampaignName = records.get('StampCampaignName');
                                                  //var CountLoyaltyStamped = StampsArr[0];
                                                  //var CountStampCardRowShow = StampsArr[1];
                                                  //localStorage.setItem('StampCampaignCode', StampCampaignCode);

                                                  //localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                  //localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                  ////alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                  //FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);



                                              },
                                              deselect: function (list, records) {

                                              }
                                          },

                                      },
                                     

                                     {
                                         xtype: 'list',
                                         //  flex: 1,
                                         width: '100%',
                                         //store: _DataStore_EnterprisesLoadByEnterpriseBusinessTypeStore,
                                         store: _DataStore_EnterprisesLoadByMerchantCategory,
                                         id: 'FloatPanel_RewardStoreEnterprisesLoadByEnterpriseBusinessTypeStore_List',
                                         style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',                                      
                                         hidden: true,
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
                                         // grouped: true,
                                         mode: 'SINGLE',
                                         //  indexBar: true,
                                         disableSelection: true,
                                         //  scrollbarIndicator:false,




                                         itemTpl: '<div class="myContent" style="margin:-30px 0px 0px -7px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;height:310px;">' +
                                                                     '<div onclick="FloatPanel_RewardStore_OpenStore({ID})" style="width:50%;text-align:left;margin:30px 0px 0px 25px;background-color: transparent;height:5px;"><img src="{EnterpriseLogoPath}"style="width: 120px; height: 120px;border-color:grey;border-style:none;border-width:1px;;margin:20px 0px 0px 0px; " /></div>' +
                                                                       // '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:20px;font-weight:normal;overflow:hidden;padding:17px 0px;text-align:right;vertical-align:middle;word-break:normal" colspan="2"><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;overflow:hidden;margin:7px 0px 0px 0px;height:35px">{EnterpriseBusinessType}&nbsp;<img src="{BusinessTypeIconPath}" alt="Image" style="width:35px;height:35px;margin:0px 10px -15px 0px;"> </div><br><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:white;font-weight:normal;overflow:hidden;margin:-45px 0px 0px -50px;">{EnterpriseDescriptions}</div></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-right: 1px solid white;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;font-weight:normal;" colspan="2">{ModifiedRecommendedByAyoha}<br><div style="width100%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:18px;color:black;font-weight:bold;overflow:hidden;margin:-30px 0px 0px 10px;">{EnterpriseName} <font size=1 color=black>{ModifiedEnterpriseRegistrationNo}</font></div><br><div style="width:70%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:normal;overflow:hidden;margin:-21px 0px 0px 10px;height:52px;">{EnterpriseAddress}</div><br>{ModifiedSocialMediaButton}<br></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 0px 20px; height:50px">{ModifiedMerchantLinkType}</td><td style="background-color:#ffffff;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px 20px 0px;" ><button OnClick="FloatPanel_RewardStoreMembershipCardShow({ID})" class="buttonGetMemberhipCard" style="margin:0px 0px 0px -5px;" >Get Membership Card</button></td></tr></tbody></table>' +
                                                                         '<table style="border-collapse:collapse;border-spacing:0;width:100%;height:200px;margin:0px 0px 0px 0px;" class="tg"><thead><tr><th style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:20px;font-weight:normal;overflow:hidden;padding:17px 0px;text-align:right;vertical-align:middle;word-break:normal" colspan="2"><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:white;font-weight:bold;overflow:hidden;margin:7px 0px 0px 0px;height:35px">{EnterpriseBusinessType}&nbsp;<img src="{BusinessTypeIconPath}" alt="Image" style="width:35px;height:35px;margin:0px 10px -15px 0px;"> </div><br><div style="width:100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:white;font-weight:normal;overflow:hidden;margin:-45px 0px 0px -50px;">{EnterpriseDescriptions}</div></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-right: 1px solid white;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal;font-weight:normal;" colspan="2">{ModifiedRecommendedByAyoha}<br><div onclick="FloatPanel_RewardStore_OpenStore({ID})"  style="width100%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:18px;color:black;font-weight:bold;overflow:hidden;margin:-30px 0px 0px 10px;">{EnterpriseName} <font size=1 color=black>{ModifiedEnterpriseRegistrationNo}</font></div><br><div style="width:70%;text-align:left;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:normal;overflow:hidden;margin:-21px 0px 0px 10px;height:52px;">{EnterpriseAddress}</div><br>{ModifiedSocialMediaButton}<br></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;border-radius: 0px 0px {ModifiedIsMemberVisitAyohaStoreRadius} 20px; height:50px">{ModifiedMerchantLinkType}</td>{ModifiedIsMemeber}</tr></tbody></table>' +

                                                                     '</div>',

                                         height: '100%',

                                         listeners: {
                                             itemsingletap: function (list, idx, target, records, evt) {


                                                 //var Stamps = records.get('Stamps');
                                                 //var StampsArr = Stamps.split('/');


                                                 //var StampCampaignCode = records.get('StampCampaignCode');
                                                 //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                 //var StartDate = records.get('StartDate');
                                                 //var EndDate = records.get('EndDate');
                                                 //var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                 //var EnterpriseName = records.get('EnterpriseName');
                                                 //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                 //var isStampRulePopUp = records.get('IsStampRulePopUp');
                                                 //var StampCampaignName = records.get('StampCampaignName');
                                                 //var CountLoyaltyStamped = StampsArr[0];
                                                 //var CountStampCardRowShow = StampsArr[1];
                                                 //localStorage.setItem('StampCampaignCode', StampCampaignCode);

                                                 //localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                 //localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                 ////alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                 //FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);



                                             },
                                             deselect: function (list, records) {

                                             }
                                         },

                                     },



                              








                        ]
                    },





                     {
                         xtype: 'container',
                         id: 'containerFloatPanel_RewardStoreTitleOutter',
                         width: '100%',
                         height: 40,
                         docked: 'bottom',
                         // zIndex: -100,
                         // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                         // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                         style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                         // style: "background-color: #EAEEF3;",

                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center'

                         },
                         items: [

                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_SearchRewardStoreTitleOutter',
                                width: '100%',
                             //   docked: 'bottom',
                                //zIndex:-100,
                                // hidden:true,
                                height: 30,
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
                                         id: 'btnFloatPanel_MembershipCardList_MyMembershipCardListSearch',
                                         // hidden: true,
                                         //  badgeText: '1',
                                         margin: '2 0 0 0',
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


                                      //{
                                      //    xtype: 'button',
                                      //    id: 'btnFloatPanel_RewardStoreSearch',
                                      //    // hidden: true,
                                      //    //  badgeText: '1',
                                      //    margin: '2 0 0 -5',
                                      //    height: 28,
                                      //    width: 40,
                                      //    html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                                      //    ui: 'plain',
                                      //    handler: function () {
                                      //        // NotificationsPanelShow();

                                      //        // LoyaltyCardRedeemListShow();


                                      //        //  LoyaltyCardRedeemListShow();
                                      //    }
                                      //},
                                      {
                                          xtype: 'spacer',
                                          width:5
                                      },


                                     {
                                         id: 'FloatPanel_RewardStore_SearchTxt',
                                         margin: '11 0 0 -22',
                                         width: '80%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_RewardStore_SearchTxt" placeHolder="Search" style="border-color:grey;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_RewardStore_CountSearchTxt',
                                         margin: '0 0 0 -20',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_RewardStore_filter',
                                              //  badgeText: '1',
                                              margin: '0 0 0 0',
                                              height: 40,
                                              width: 40,
                                              html: '<img src="resources/icons/filterPurpleThree.png" width="28" height="28" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_BusinessTypeListShow();
                                                 
                                              }
                                          },

                                     //{
                                     //    xtype: 'button',
                                     //    id: 'btnFloatPanel_RewardStoreFilter',
                                     //    // hidden: true,
                                     //    //  badgeText: '1',
                                     //    margin: '2 0 0 15',
                                     //    height: 25,
                                     //    width: 35,
                                     //    html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                     //    ui: 'plain',
                                     //    handler: function () {
                                     //        // NotificationsPanelShow();

                                     //        // LoyaltyCardRedeemListShow();


                                     //        //  LoyaltyCardRedeemListShow();
                                     //    }
                                     //},





                                ]

                            },

                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_RewardStoreTitleInner',
                                 hidden:true,
                                 width: '100%',
                                 height: 45,
                                
                                 // zIndex: -100,
                                 // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                 // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                               //  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                                  style: "background-color:transparent",

                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [

                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_RewardStoreAll',
                                         flex: 1,
                                         //width: '33.3%',
                                         //height: 45,
                                         // style: "background-color: transparent",
                                         style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_RewardStoreAll',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',
                                                  height: 37,
                                                  width: 37,
                                                  html: '<img src="resources/icons/AllWhite.png" width="27" height="27" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      FloatPanel_RewardStoreHide();
                                                  }
                                              },
                                               {
                                                   margin: '-15 0 0 0',
                                                   html: '<font size=1 color=white><b>All(1)</b></font>'
                                               },

                                         ]
                                     },


                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_RewardStoreRestaturant',
                                 flex: 1,
                                 //width: '33.3%',
                                 //height: 45,
                                 style: "background-color: transparent",
                                 //  style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

                                 layout: {
                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [

                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_RewardStoreRestaturant',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',
                                          height: 37,
                                          width: 37,
                                          html: '<img src="resources/icons/restaurantPurple.png" width="27" height="27" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // NotificationsPanelShow();

                                              LoyaltyCardRedeemListShow();


                                              //  LoyaltyCardRedeemListShow();
                                          }
                                      },
                                       {
                                           margin: '-15 0 0 0',
                                           html: '<font size=1 color=grey><b>Food & Bev</b></font>'
                                       },

                                 ]
                             },

                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_RewardStoreButik',
                                 flex: 1,
                                 //width: '33.3%',
                                 //height: 45,
                                 style: "background-color: transparent",
                                 // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

                                 layout: {
                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [

                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_RewardStoreButik',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',
                                          height: 37,
                                          width: 37,
                                          html: '<img src="resources/icons/butikPurple.png" width="27" height="27" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // NotificationsPanelShow();

                                              LoyaltyCardRedeemListShow();


                                              //  LoyaltyCardRedeemListShow();
                                          }
                                      },
                                       {
                                           margin: '-15 0 0 0',
                                           html: '<font size=1 color=grey><b>Boutique</b></font>'
                                       },

                                 ]
                             },

                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_RewardStoreGrocery',
                                 flex: 1,
                                 //width: '33.3%',
                                 //height: 45,
                                 style: "background-color: transparent",
                                 // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

                                 layout: {
                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [

                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_RewardStoreGrocery',
                                          //  badgeText: '1',
                                          margin: '0 0 0 0',
                                          height: 37,
                                          width: 37,
                                          html: '<img src="resources/icons/groceryPurple.png" width="27" height="27" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // NotificationsPanelShow();

                                              LoyaltyCardRedeemListShow();


                                              //  LoyaltyCardRedeemListShow();
                                          }
                                      },
                                       {
                                           margin: '-15 0 0 0',
                                           html: '<font size=1 color=grey><b>Grocery</b></font>'
                                       },

                                 ]
                             },



                    {
                        xtype: 'container',
                        id: 'containerFloatPanel_RewardStoreElectronic',
                        flex: 1,
                        //width: '33.3%',
                        //height: 45,
                        style: "background-color: transparent",
                        // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [

                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_RewardStoreElectronic',
                                 //  badgeText: '1',
                                 margin: '0 0 0 0',
                                 height: 37,
                                 width: 37,
                                 html: '<img src="resources/icons/electronicPurple.png" width="27" height="27" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     // NotificationsPanelShow();

                                     LoyaltyCardRedeemListShow();


                                     //  LoyaltyCardRedeemListShow();
                                 }
                             },
                              {
                                  margin: '-15 0 0 0',
                                  html: '<font size=1 color=grey><b>Electronic</b></font>'
                              },

                        ]
                    },




                    {
                        xtype: 'container',
                        id: 'containerFloatPanel_RewardStoreMore',
                        flex: 1,
                        //width: '33.3%',
                        //height: 45,
                        style: "background-color: transparent",
                        // style: "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);",

                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'

                        },
                        items: [

                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_RewardStoreMore',
                                 //  badgeText: '1',
                                 margin: '0 0 0 0',
                                 height: 37,
                                 width: 37,
                                 html: '<img src="resources/icons/morePurple.png" width="27" height="27" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     // NotificationsPanelShow();

                                     LoyaltyCardRedeemListShow();


                                     //  LoyaltyCardRedeemListShow();
                                 }
                             },
                              {
                                  margin: '-15 0 0 0',
                                  html: '<font size=1 color=grey><b>More..</b></font>'
                              },

                        ]
                    },

                                 ]
                             },



                              
                         ]

                     },
                        ]

                    },













                    






                    


















                ]
            },












        ]





    });
    return _FloatPanel_RewardStore;



}








function FloatPanel_RewardStoreShow() {
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    Ext.Viewport.remove(_FloatPanel_RewardStore);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStore());
    this.overlay.show();
   
    AddRoutePages("FloatPanel_RewardStoreHide()");
    isFloatPanel_RewardStoreOpen = 'Y';
   
    document.getElementById("input-FloatPanel_RewardStore_SearchTxt").addEventListener("keyup", EnterprisesLoadByRowStatusStoreOnKeyUp);

    // FloatPanel_RewardStore_EnterprisesLoadByRowStatusStore();
    FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory("ALL");
    FloatPanel_RewardStore_AdjustHeight();
   // FloatPanel_RewardStoreCategoryFilterShow();

    //var task = Ext.create('Ext.util.DelayedTask', function () {
    Ext.getCmp('FloatPanel_RewardStoreEnterprisesLoadByEnterpriseBusinessTypeStore_List').setHidden(true);
    Ext.getCmp('FloatPanel_RewardStore_List').setHidden(false);
    
    
       
    //    FloatPanel_RewardStore_MembershipLoadBySubscriberAccNoStore();



    //});
    //task.delay(2000);

}


function FloatPanel_RewardStoreShow_FromBusinessTypelist() {

    Ext.Viewport.remove(_FloatPanel_RewardStore);
    this.overlay = Ext.Viewport.add(FloatPanel_RewardStore());
    this.overlay.show();
   
    AddRoutePages("FloatPanel_RewardStoreHide()");
    isFloatPanel_RewardStoreOpen = 'Y';

    document.getElementById("input-FloatPanel_RewardStore_SearchTxt").addEventListener("keyup", EnterprisesLoadByRowStatusStoreOnKeyUp);

    // FloatPanel_RewardStore_EnterprisesLoadByRowStatusStore();
  //  FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory("ALL");
    FloatPanel_RewardStore_AdjustHeight();
    // FloatPanel_RewardStoreCategoryFilterShow();

    //var task = Ext.create('Ext.util.DelayedTask', function () {




    //    FloatPanel_RewardStore_MembershipLoadBySubscriberAccNoStore();



    //});
    //task.delay(2000);

}


function FloatPanel_RewardStoreHide() {
    if (isFloatPanel_RewardStoreOpen == 'Y') {
        _FloatPanel_RewardStore.hide(); isFloatPanel_RewardStoreOpen = 'N';
        RemovePages("FloatPanel_RewardStoreHide()");
        _DataStore_EnterprisesLoadByMerchantCategory.removeAll();
        _DataStore_EnterprisesLoadByMerchantCategory.sync();
    }
   
}







//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_EnterprisesLoadByMerchantCategory;
var countEnterprisesLoadByRowStatusStoreFirst;
function FloatPanel_RewardStore_EnterprisesLoadByRowStatusStore() {




    Ext.getStore('EnterprisesLoadByRowStatusStore').getProxy().setExtraParams({
        RowStatus:'Active'
    });
    Ext.StoreMgr.get('EnterprisesLoadByRowStatusStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('EnterprisesLoadByRowStatusStore').getProxy().setExtraParams({
            RowStatus: 'Active'
        });
        _DataStore_EnterprisesLoadByRowStatusStore = Ext.StoreMgr.get('EnterprisesLoadByRowStatusStore').load();
        var myStore = Ext.getStore('EnterprisesLoadByRowStatusStore');
        countEnterprisesLoadByRowStatusStoreFirst = myStore.getCount();

        Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countEnterprisesLoadByRowStatusStoreFirst + ')</b></font>')
        Ext.Viewport.setMasked(false);










    });
    task.delay(2000);



}


function FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory(Category) {
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('Category', Category);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByMerchantCategory');
    _DataStore_EnterprisesLoadByMerchantCategory.load();

   
    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')

    //id: 'htmlFloatPanel_RewardStore_TitleHeaderTxt',
    //html: '<font size=2 color=black><b>Ayoha Merchants</b></font>'


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        countEnterprisesLoadByRowStatusStoreFirst = _DataStore_EnterprisesLoadByMerchantCategory.getCount();

        Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + _DataStore_EnterprisesLoadByMerchantCategory.getCount() + ')</b></font>')
        LoadingPanelHide();
       

    });
    task.delay(1000);

    
    Ext.Viewport.setMasked(false);
}




function FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore(EnterpriseBusinessType) {
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    //_DataStore_EnterprisesLoadByEnterpriseBusinessTypeStore.getProxy().setExtraParam('EnterpriseBusinessType', EnterpriseBusinessType);
    //_DataStore_EnterprisesLoadByEnterpriseBusinessTypeStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseBusinessType');
    //_DataStore_EnterprisesLoadByEnterpriseBusinessTypeStore.load();


    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseBusinessType', EnterpriseBusinessType);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseBusinessType');
    _DataStore_EnterprisesLoadByMerchantCategory.load();

    
   

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        if (count > 0) {
          
            Ext.Viewport.remove(_FloatPanel_RewardStore);
            this.overlay = Ext.Viewport.add(FloatPanel_RewardStore());
            this.overlay.show();
            AddRoutePages(_FloatPanel_RewardStore, "isFloatPanel_RewardStoreOpen");
            isFloatPanel_RewardStoreOpen = 'Y';

            document.getElementById("input-FloatPanel_RewardStore_SearchTxt").addEventListener("keyup", EnterprisesLoadByRowStatusStoreOnKeyUp);

            // FloatPanel_RewardStore_EnterprisesLoadByRowStatusStore();
           // FloatPanel_RewardStore_EnterpriseLoadByMerchantCategory("ALL");
            FloatPanel_RewardStore_AdjustHeight();
            Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + count + ')</b></font>');
            Ext.getCmp('FloatPanel_RewardStoreEnterprisesLoadByEnterpriseBusinessTypeStore_List').setHidden(false);
            Ext.getCmp('FloatPanel_RewardStore_List').setHidden(true);
            Ext.getCmp('htmlFloatPanel_RewardStore_TitleHeaderTxt').setHtml('<font size=2 color=black><b>' + EnterpriseBusinessType.toUpperCase() + '-Ayoha Merchants</b></font>');


        }

      
        LoadingPanelHide();


    });
    task.delay(1000);


    Ext.Viewport.setMasked(false);
}


function EnterprisesLoadByRowStatusStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipLoadBySubscriberAccNoStoreSequence = 0;


    _DataStore_EnterprisesLoadByMerchantCategory.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_RewardStore_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_EnterprisesLoadByMerchantCategory.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countMembershipLoadBySubscriberAccNoStoreSequence = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
                Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipLoadBySubscriberAccNoStoreSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipLoadBySubscriberAccNoStoreSequence = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipLoadBySubscriberAccNoStoreSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_EnterprisesLoadByMerchantCategory.clearFilter();
        Ext.getCmp('FloatPanel_RewardStore_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countEnterprisesLoadByRowStatusStoreFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}



function FloatPanel_OpenLink_FB(ID) {
    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var UrlFB = EnterpriseFacebook.get('EnterpriseFacebook');
  
    if (UrlFB) {

        
        setTimeout(function () { window.open("fb://page/" + UrlFB + "", '_system'); return false; }, 25);
    } else {
       
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
    }


   
}
function FloatPanel_OpenLink_Instagram(ID) {
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var UrlInsta = EnterpriseInstagram.get('EnterpriseInstagram');
    setTimeout(function () { window.open("instagram://user?username=" + UrlInsta + ""); }, 25);
    
}
function FloatPanel_OpenLink_Location(ID) {
    var Location = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var UrlLocation = Location.get('EnterpriseCoordinate');

    var Coordinate = UrlLocation.split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];

    //var addressLongLat = PlaceMarkerlat + ',' + PlaceMarkerlng;                                                          
    //window.open("geo:" + addressLongLat);


    if (PlaceMarkerlat) {
        if (PlaceMarkerlng) {
            window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;
        } else {
      
            swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
        }
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
    }
   

}



function FloatPanel_OpenLink_Wassap(ID) {
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var UrlPICContactNo = PICContactNo.get('PICContactNo');


    if (UrlPICContactNo) {

        //window.open("https://api.whatsapp.com/send?phone=" + UrlPICContactNo + "&text=Hi");
        window.open("https://api.whatsapp.com/send?phone=" + UrlPICContactNo + "&text=Hi", '_system'); return false;
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
    }

  

}






function FloatPanel_RewardStore_StampCampaignLoadByGetLoyaltyCardStore(ID) {

    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

 ///   var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseHQAccNo');
    var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    console.log(EnterpriseAccountNo);
    //_result.StampCampaignCode = _SQLDataReader["StampCampaignCode"].ToString();
    //_result.StampCampaignName = _SQLDataReader["StampCampaignName"].ToString();
    //_result.StartDateOnly = String.Format("{0:yyyy-MM-dd}", _SQLDataReader["StartDate"]);
    //_result.EndDateOnly = String.Format("{0:yyyy-MM-dd}", _SQLDataReader["EndDate"]);
    //_result.EnterpriseName = _SQLDataReader["EnterpriseName"].ToString();
    //_result.EnterpriseLogo = _SQLDataReader["EnterpriseLogo"].ToString();
    //_result.BackgroundImgOne = _SQLDataReader["BackgroundImgOne"].ToString();
    //_result.BackgroundImgTwo = _SQLDataReader["BackgroundImgTwo"].ToString();
    //_result.NextRedeem = _SQLDataReader["NextRedeem"].ToString();
    //_result.NextRedeemContent = _SQLDataReader["NextRedeemContent"].ToString();
    //_result.isRequiredFee = _SQLDataReader["isRequiredFee"].ToString();
    //_result.StampCampaignFees = _SQLDataReader["StampCampaignFees"].ToString();
    //_result.FeesCycle = _SQLDataReader["FeesCycle"].ToString();


    Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccountNo
    });
    Ext.StoreMgr.get('StampCampaignLoadByGetLoyaltyCardStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccountNo
        });
      
        var myStore = Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore');
      
        Ext.Viewport.setMasked(false);



        FloatPanel_StampCampaignListShow();






    });
    task.delay(2000);



}







function FloatPanel_RewardStore_AdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    //var newHeights = x - 232;
    var newHeights = x - 500;
    console.log(newHeights)

    //  480px 
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_RewardStoreID').setHeight(x + 5);
   // Ext.getCmp('containerFloatPanel_AyohaReward_ViewMyRankingList').setHeight(x);
   // Ext.getCmp('containerFloatPanel_RewardStore_List').setHeight(x - 180);




}

var globalFloatPanel_RewardStore_EnterpriseAccNo;
var globalFloatPanel_RewardStore_EnterpriseName;
var globalFloatPanel_RewardStore_EnterpriseLogoPath;
var globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle;
var globalFloatPanel_RewardStore_EnterpriseFacebook;
var globalFloatPanel_RewardStore_EnterpriseInstagram;
var globalFloatPanel_RewardStore_PICContactNo;
var globalFloatPanel_RewardStore_EnterpriseCoordinate;
var globalFloatPanel_RewardStore_EnterpriseWebsite;
var globalFloatPanel_RewardStore_MerchantLinkType;
var globalFloatPanel_RewardStore_EnterpriseDescriptions;
var globalFloatPanel_RewardStore_EnterpriseTagLine;
var globalFloatPanel_RewardStore_AdvertisementCode;



function FloatPanel_RewardStore_OpenStore(ID) {
    
    globalFloatPanel_AyohaStore_ModuleTagging = "AyohaMerchant";
    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
  //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');
    

    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
        LoadingPanelHide();
    } else {
       // setTimeout(function () { FloatPanel_AyohaStoreShow_AyohaMerchant() }, 50);
        FloatPanel_AyohaStoreShow_AyohaMerchant();
    }

   
   
   

  //  FloatPanel_RewardStoreHide();
 
}




function FloatPanel_RewardStore_OpenStore_FromAyohaTabContest(ID) {
    
    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');

   

    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
    } else {
        setTimeout(function () { FloatPanel_AyohaStoreShow_AyohaContestTapAndWin() }, 50);
    }





    FloatPanel_RewardStoreHide();

}


function FloatPanel_RewardStore_OpenStore_FromAyohaHotMerchant_OnlineStoreList(ID) {

    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);



    var NamaJalan = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var Postkod = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var Bandar = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var Negeri = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var BusinessMode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');

  

    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
    } else {
        globalDashboard_AyohaHotMerchant_EnterpriseLogo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
        globalDashboard_AyohaHotMerchant_EnterpriseName = globalFloatPanel_RewardStore_EnterpriseName;
        globalDashboard_AyohaHotMerchant_EnterpriseTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;


                           



        setTimeout(function () {

            FloatPanel_MerchantDetailPageShow(ID, globalFloatPanel_RewardStore_EnterpriseAccNo, globalFloatPanel_RewardStore_EnterpriseLogoPath, globalFloatPanel_RewardStore_EnterpriseName, globalFloatPanel_RewardStore_EnterpriseTagLine,
                               NamaJalan.get('NamaJalan'), Postkod.get('Postkod'), Bandar.get('Bandar'), Negeri.get('Negeri'), globalFloatPanel_RewardStore_EnterpriseCoordinate, globalFloatPanel_RewardStore_EnterpriseDescriptions, globalFloatPanel_RewardStore_PICContactNo
                              , globalFloatPanel_RewardStore_PICContactNo, globalFloatPanel_RewardStore_EnterpriseFacebook, globalFloatPanel_RewardStore_EnterpriseWebsite, globalFloatPanel_RewardStore_EnterpriseInstagram,
       globalFloatPanel_RewardStore_EnterpriseInstagram, BusinessMode.get('BusinessMode'));


            //FloatPanel_AyohaStoreShow_AyohaHotMerchant()
        }, 50);
        
        
    }





  

}


function FloatPanel_RewardStore_OpenStore_FromAyohaHotMerchant_OnlineStoreList_HotItems(ID) {

    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);



    var NamaJalan = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var Postkod = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var Bandar = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var Negeri = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var BusinessMode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');



    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
    } else {
        globalDashboard_AyohaHotMerchant_EnterpriseLogo = globalFloatPanel_RewardStore_EnterpriseLogoPath;
        globalDashboard_AyohaHotMerchant_EnterpriseName = globalFloatPanel_RewardStore_EnterpriseName;
        globalDashboard_AyohaHotMerchant_EnterpriseTagLine = globalFloatPanel_RewardStore_EnterpriseTagLine;






        setTimeout(function () {

          

            FloatPanel_AyohaStoreShow_AyohaHotMerchant()
        }, 50);


    }







}




function FloatPanel_RewardStore_OpenStore_FromFloatPanelMerchantDetailPage_OnlineStoreList(ID) {

   // alert(ID);
    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanelMerchantDetailPage_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');

  
    //globalFloatPanelMerchantDetailPage_EnterpriseLogo = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanelMerchantDetailPage_EnterpriseName = EnterpriseName.get('EnterpriseName');
    //globalFloatPanelMerchantDetailPage_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    //globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
   
    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
    } else {
        setTimeout(function () { FloatPanel_AyohaStoreShow_FloatPanelMerchantDetailPage() }, 50);
    }







}










function FloatPanel_RewardStore_OpenStore_FromFloatPanel_MembershipCardList_Upgrade(ID) {

    // alert(ID);
    var EnterpriseAccNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseName = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    //  var EnterpriseAdvertisementTitle = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    var EnterpriseFacebook = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var PICContactNo = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var MerchantLinkType = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseDescriptions = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);
    var AdvertisementCode = _DataStore_EnterprisesLoadByMerchantCategory.findRecord('ID', ID, 0, false, false, true);

    globalFloatPanel_RewardStore_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');
    globalFloatPanel_RewardStore_EnterpriseName = EnterpriseName.get('EnterpriseName');
    globalFloatPanel_RewardStore_EnterpriseLogoPath = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanel_RewardStore_EnterpriseAdvertisementTitle = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_EnterpriseFacebook = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_RewardStore_EnterpriseInstagram = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_RewardStore_PICContactNo = PICContactNo.get('PICContactNo');
    globalFloatPanel_RewardStore_EnterpriseCoordinate = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_RewardStore_EnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');
    globalFloatPanel_RewardStore_MerchantLinkType = MerchantLinkType.get('MerchantLinkType');
    globalFloatPanel_RewardStore_EnterpriseDescriptions = EnterpriseDescriptions.get('EnterpriseDescriptions');
    globalFloatPanel_RewardStore_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    globalFloatPanel_RewardStore_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');


    //globalFloatPanelMerchantDetailPage_EnterpriseLogo = EnterpriseLogoPath.get('EnterpriseLogoPath');
    //globalFloatPanelMerchantDetailPage_EnterpriseName = EnterpriseName.get('EnterpriseName');
    global_FloatPanel_MembershipCardList_Upgrade_EnterprisesTagLine = EnterpriseTagLine.get('EnterpriseTagLine');
    //globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo.get('EnterpriseAccNo');

    if (globalFloatPanel_RewardStore_MerchantLinkType.includes("WebSite")) {
        var UrlEnterpriseWebsite = EnterpriseWebsite.get('EnterpriseWebsite');

        setTimeout(function () { window.open(UrlEnterpriseWebsite, '_system'); return false; }, 25);
    } else {
        setTimeout(function () {
            if (isFloatPanel_MembershipCardList_UpgradeOpen=='Y'){
                FloatPanel_AyohaStoreShow_FloatPanel_MembershipCardList_Upgrade() 
            }
             
            
            if (isFloatPanel_MembershipCardList_NotYetSubscribedOpen=='Y'){
                FloatPanel_AyohaStoreShow_FloatPanel_MembershipCardList_NotYetSubscribed();
            }
           
            }, 100);
    }







}


function FloatPanel_AyohaStoreShow_FloatPanelMerchantDetailPage() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanelMerchantDetailPage";
   // Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setZIndex(80);
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}






function FloatPanel_AyohaStoreShow_FloatPanel_MembershipCardList_Upgrade() {
    Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setZIndex(80);
   // Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardID').setZIndex(80);
    FloatPanel_MembershipCardList_MyMembershipCardHide();
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_MembershipCardList_Upgrade";
 
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}

function FloatPanel_AyohaStoreShow_FloatPanel_MembershipCardList_NotYetSubscribed() {
    Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setZIndex(80);
   // Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCardID').setZIndex(80);
    FloatPanel_MembershipCardList_MyMembershipCardHide();   
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_MembershipCardList_NotYetSubscribed";
    FloatPanel_AyohaStoreShow();
    if (globalFloatPanel_RewardStore_AdvertisementCode == "NoAdvertisementCreated") {
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleAnimated').setHidden(true);
    }
}




function btnFloatPanel_RewardStore_OpenStoreNoBusiness() {
    Swal.fire({
        title: '<font size=5>Merchant Business Site</font>',
        text: 'Merchant have no Corporate website or eCommerce site to be linked',
        imageUrl: "resources/icons/disabledMerchantLink.png",
        imageWidth: 400,
        imageHeight: 230,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: true,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK',
       // footer: '<a href>Ayoha Reward v 1.0</a>'
    }).then(function (result) {
        if (result.isConfirmed) {



        }
    });
}






