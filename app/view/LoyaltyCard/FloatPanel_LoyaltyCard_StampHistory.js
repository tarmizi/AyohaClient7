
Ext.define('BuskartApp.view.LoyaltyCard.FloatPanel_LoyaltyCard_StampHistory', {

});

var _FloatPanel_LoyaltyCard_StampHistory;


var isFloatPanel_LoyaltyCard_StampHistoryOpen = 'N';






function FloatPanel_LoyaltyCard_StampHistory() {

    _FloatPanel_LoyaltyCard_StampHistory =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_LoyaltyCard_StampHistoryID',
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
            type: 'slideOut',
            direction: 'left',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_LoyaltyCard_StampHistory.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isLoyaltyCardRedeemListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_LoyaltyCard_StampHistory.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isLoyaltyCardRedeemListOpen = 'N';
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
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_LoyaltyCard_StampHistoryHeader',
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
                                                         id: 'btnFloatPanel_LoyaltyCard_StampHistoryBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             FloatPanel_LoyaltyCard_StampHistoryHide();

                                                             //FloatPanel_LoyaltyCard_StampHistory_AddCardHide();
                                                             //_FloatPanel_LoyaltyCard_StampHistory.hide(Ext.fx.Animation({
                                                             //    type: 'slideOut',
                                                             //    direction: 'left',
                                                             //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                             //    duration: 250

                                                             //}));

                                                         }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_LoyaltyCard_StampHistory_TitleHeaderTxt',
                                                           html: '<font size=2 color=white><b>Stamp History</b></font>'
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
                                                                  id: 'containerFloatPanel_LoyaltyCard_StampHistoryHaiUser',
                                                                  layout: {

                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'
                                                                  },
                                                                  items: [


                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          id: 'htmlFloatPanel_LoyaltyCard_StampHistoryHaiUser',
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
                                                                          id: 'containerFloatPanel_LoyaltyCard_StampHistoryeWallet',
                                                                          layout: {

                                                                              type: 'hbox',
                                                                              pack: 'left',
                                                                              align: 'left'
                                                                          },
                                                                          items: [
                                                                               {
                                                                                   xtype: 'button',
                                                                                   id: 'btnFloatPanel_LoyaltyCard_StampHistoryeWallet',
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
                                                               id: 'containerFloatPanel_LoyaltyCard_StampHistoryPictureUser',
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
                                                                       id: 'btnFloatPanel_LoyaltyCard_StampHistoryInfo',
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
                                  height: '100%',
                                  width: '100%',

                                  id: 'containerFloatPanel_LoyaltyCard_StampHistory_Master',
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



                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: 65,
                                          margin: '10 0 0 0',
                                          //style: {
                                          //    // background: '#D25959',
                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                          //    // border: '2px'
                                          //},
                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                          style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [
                                                {
                                                    xtype: 'container',
                                                    width: '60%',

                                                    margin: '0 0 0 0',
                                                    //style: {
                                                    //    // background: '#D25959',
                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                    //    // border: '2px'
                                                    //},
                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                    style: 'background-color:transparent',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    items: [
                                                         {
                                                             margin: '10 0 0 0',
                                                             html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">TOTAL STAMPS</div>',
                                                         },
                                                          {
                                                              margin: '-10 0 0 0',
                                                              id: 'htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount',
                                                              html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                          },
                                                    ]
                                                },

                                                {
                                                    xtype: 'container',
                                                    width: '40%',

                                                    margin: '0 0 0 0',
                                                    //style: {
                                                    //    // background: '#D25959',
                                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                                    //    // border: '2px'
                                                    //},
                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                    style: 'background-color:transparent',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    items: [
                                                          {
                                                              xtype: 'button',
                                                              height: 60,
                                                              width: 60,

                                                              margin: '2 0 0 0',
                                                              id: 'btnFloatPanel_LoyaltyCard_StampHistory_StampIcon',
                                                              //badgeText: "2",
                                                              html: '<img src="resources/icons/StampDashboard.png" width="50" height="50" alt="Company Name">',
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

                                         {
                                             xtype: 'panel',
                                             height: 10
                                         },

                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                             // style: 'background-color:black;color:white',
                                                             style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'start',
                                                                 align: 'center'

                                                             },
                                                             //height: 50,
                                                             // margin:'10 0 0 0',
                                                             items: [

                                                                     //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                                                     //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                                                     //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                                                     //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                                                     //    '</div></div></div>'

                                                                     {

                                                                         width: '50%',
                                                                         html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Stamped Date&By</div>'
                                                                     },

                                                                     //{

                                                                     //    width: '50%',
                                                                     //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                                                     //},
                                                                     //     //{
                                                                          //    margin: '-8 0 0 0',

                                                                          //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                                                          //},
                                                                          // {
                                                                          //     margin: '-7 0 0 0',

                                                                          //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                                                          // },


                                                             ]
                                                         },










                                      {
                                          xtype: 'list',

                                          height: '81%',
                                          store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                          id: 'FloatPanel_LoyaltyCard_StampHistory_StampHistoryList',
                                          mode: 'SINGLE',
                                          grouped: true,
                                          disableSelection: true,
                                          itemTpl: '<div class="myContent">' +
                                         
                                          //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                           '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</div>' +



                                            '</div>',
                                          width: '100%',
                                          listeners: {
                                              itemsingletap: function (list, idx, target, records, evt) {

                                                  var StampedCampaignCode = records.get('StampedCampaignCode');
                                                  var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                  var StartDate = records.get('StartDate');
                                                  var EndDate = records.get('EndDate');
                                                  var SubscriberAccNo = records.get('SubscriberAccNo');
                                                  var EnterpriseName = records.get('EnterpriseName');
                                                  var StampRuleRemarks = records.get('StampRuleRemarks');
                                                  var isStampRulePopUp = records.get('isStampRulePopUp');
                                                  var StampCampaignName = records.get('StampCampaignName');
                                                  var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                  var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                  localStorage.setItem('StampCampaignCode', StampedCampaignCode);

                                                  localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                  localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                  //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                  FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);


                                              },
                                              deselect: function (list, records) {

                                              }
                                          },
                                      },

                                  ]

                              },













                        ]
                    },










                    {
                        xtype: 'container',
                        id: 'containerFloatPanel_LoyaltyCard_StampHistoryTitleOutter',
                        width: '100%',
                        docked: 'bottom',
                        // hidden:true,
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
                                  id: 'btnFloatPanel_LoyaltyCard_StampHistorySearch',
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
                                 id: 'FloatPanel_LoyaltyCard_StampHistory_SearchTxt',
                                 margin: '0 0 0 0',
                                 width: '80%',
                                 height: 20,
                                 html: '<input type="text" id="input-FloatPanel_LoyaltyCard_StampHistory_SearchTxt" placeHolder="Search Enterprise" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                             },









                        ]

                    },



















                ]
            },












        ]





    });
    return _FloatPanel_LoyaltyCard_StampHistory;



}








function FloatPanel_LoyaltyCard_StampHistoryShow() {

    Ext.Viewport.remove(_FloatPanel_LoyaltyCard_StampHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_LoyaltyCard_StampHistory());
    this.overlay.show();
    isFloatPanel_LoyaltyCard_StampHistoryOpen = 'Y';
    FloatPanel_LoyaltyCard_StampHistory_LoyaltyStampLoadBySubscriberAccNoStore();

  //  FloatPanel_LoyaltyCard_StampHistory_MembershipLoadBySubscriberAccNoStore();
    document.getElementById("input-FloatPanel_LoyaltyCard_StampHistory_SearchTxt").addEventListener("keyup", LoyaltyStampLoadBySubscriberAccNoStoreOnKeyUp);


}





function FloatPanel_LoyaltyCard_StampHistoryHide() {

    _FloatPanel_LoyaltyCard_StampHistory.hide(); isFloatPanel_LoyaltyCard_StampHistoryOpen = 'N';
}









//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_LoyaltyStampLoadBySubscriberAccNoStore;

function FloatPanel_LoyaltyCard_StampHistory_LoyaltyStampLoadBySubscriberAccNoStore() {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        _DataStore_LoyaltyStampLoadBySubscriberAccNoStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        StampCount = myStore.getCount();
        if (isFloatPanel_LoyaltyCard_StampHistoryOpen == 'Y') {
            Ext.getCmp('htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        }
       
        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);




}





function LoyaltyStampLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipCard = 0;


    _DataStore_LoyaltyStampLoadBySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_LoyaltyCard_StampHistory_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_LoyaltyStampLoadBySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EnterpriseName'))) {
                console.log('ada0');

                countMembershipCard = _DataStore_LoyaltyStampLoadBySubscriberAccNoStore.getCount();
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipCard = _DataStore_LoyaltyStampLoadBySubscriberAccNoStore.getCount();

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_LoyaltyStampLoadBySubscriberAccNoStore.clearFilter();
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}



