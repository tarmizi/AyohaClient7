
Ext.define('BuskartApp.view.Membership.FloatPanel_MembershipCardList_NotYetSubscribed', {

});

var _FloatPanel_MembershipCardList_NotYetSubscribed;
var _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo;
var _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode;
var globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg;
var Index=0;
var isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'N';

var CarouselIndex = 0;

var _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "N";







function FloatPanel_MembershipCardList_NotYetSubscribed() {

    _FloatPanel_MembershipCardList_NotYetSubscribed =
    Ext.create('Ext.Panel', {
       // zIndex: 290,
        zIndex: 70,
        xtype: 'container',
        //height: 465,
       height: '100%',
      // height: '95%',
        width: '100%',
        id: 'FloatPanel_MembershipCardList_NotYetSubscribedID',
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
      //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
      
      listeners: {
        initialize: function (c) {
            this.element.on({
                swipe: function (e, node, options) {

                    if (e.direction == "left") {
                        _FloatPanel_MembershipCardList_NotYetSubscribed.hide(Ext.fx.Animation({
                            type: 'slideOut',
                            direction: 'left',
                            easing: 'cubic-bezier(.7,0,.7,1)',
                            duration: 250

                        }));
                        isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'N';
                        _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "N";
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_price="";
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_plan="";                       
                        RemovePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
                    } if (e.direction == "right") {
                        _FloatPanel_MembershipCardList_NotYetSubscribed.hide(Ext.fx.Animation({
                            type: 'slideOut',
                            direction: 'right',
                            easing: 'cubic-bezier(.7,0,.7,1)',
                            duration: 250

                        }));
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_price="";
                        globalFloatPanel_MembershipCardList_NotYetSubscribed_plan="";
                       
                        isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'N';
                        _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "N";
                        RemovePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
                    }
                   

                }
            });
        }
    },

        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'bottom',
                height: 60,
                //hidden:true,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                //margin: '10 0 0 0',
                id: 'containerFloatPanel_MembershipCardList_NotYetSubscribedBottom',
                name: 'clickableContainerFloatPanel_MembershipCardList_NotYetSubscribedBottom',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;',
               // style: 'border-bottom:2px none #D25959;background-color:transparent',
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
                layout: {
                    //type: 'fit',
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                // hidden:true,
                items:
                       [

                            {
                                //xtype: 'button',
                                ////  align: 'stretch',

                                //ui: 'plain',
                                width: '85%',
                                margin:'5 0 0 0',
                                height: 50,
                                id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard',
                                //hidden: true,
                              
                                html: '<button class="button3getMembershipCard">Get Membership Card NOW !</button>',
                                //handler: function () {
                                //    getMembershipCard();
                                //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                                //},


                            },



 {
     xtype: 'button',
     //  align: 'stretch',

     ui: 'plain',
     width: '100%',
     height: 40,
     id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard',
     hidden: true,
     // width: '80%',
     //style: {
     //    background: '#FA8072',
     //},
     // padding: '10px',
     //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
     //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
     text: '<button class="button3Deleteviewloyaltycard">Delete Membership Card</button>',
     handler: function () {




     },


 },







                       ]

            },
            {

                xtype: 'container',
                width: '100%',
                docked:'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_MembershipCardList_NotYetSubscribedHeader',
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
                                         id: 'btnFloatPanel_MembershipCardList_NotYetSubscribedBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             FloatPanel_MembershipCardList_NotYetSubscribedHide();

                                             //FloatPanel_MembershipCardList_NotYetSubscribed_AddCardHide();
                                             //_FloatPanel_MembershipCardList_NotYetSubscribed.hide(Ext.fx.Animation({
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
                                           margin: '-8 20 0 0',                                          
                                           id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_TitleHeaderTxt',
                                           html: '<font size=2 color=black><b>Membership Card</b></font>'
                                       },

                                            {
                                                xtype: 'button',
                                                //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                height: 30,
                                                width: 35,
                                                hidden:true,
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    _FloatPanel_MembershipCardList_NotYetSubscribed.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'N';
                                                    _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "N";
                                                    RemovePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
                                                }
                                            },












                       ]

            },



            {

                xtype: 'container',
                width: '100%',
                // width: 40,
                hidden:true,
                docked: 'bottom',
                height: 51,
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottomOutter',
                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'start',
                    align: 'center',
                },




                // hidden:true,
                items:
                       [
                           {
                               xtype: 'container',
                               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottomInner',
                               width: '100%',
                               style: "background-color: transparent",
                               height: 51,
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               scrollable: {
                                   direction: 'horizontal',
                                   directionLock: true,
                                   indicators: false
                               },
                               items: [


                                   {
                                       xtype: 'container',
                                       width: 490,
                                       style: "background-color: transparent",
                                       height: 51,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'center',
                                           align: 'center',
                                       },
                                       items: [



                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_EntitleReward',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_EntitleReward',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/EntitleReward.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {

                                                            MoveMembeshipCarousel(0);
                                                           

                                                         
                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_MenuBottom_EntitleRewardTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlMembershipTxt',
                                                                html: '<font size=1 color=purple><b><u>Membership</u></b></font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlPrivillageTxt',
                                                                html: '<font size=1 color=purple><b><u>Privillage</u></b></font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },
                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_EnttileOutlet',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'
                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_EnttileOutlet',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/EnttileOutlet.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            MoveMembeshipCarousel(1);
                                                           
                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_EnttileOutletTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlMembershipTxt02',
                                                                html: '<font size=1 color=grey>Membership</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlEntitleOutletTxt',
                                                                html: '<font size=1 color=grey>Entitle Outlet</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },


                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_AyohaStore',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_AyohaStore',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/AyohaStorePurple.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           // FloatPanelMerchantDetailPage_AyohaStore();
                                                            FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStore();

                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_AyohaStoreTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlCardTxt01',
                                                                html: '<font size=1 color=grey>Ayoha</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlTransactionTxt',
                                                                html: '<font size=1 color=grey>Store</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },

                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_CardTransaction',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_CardTransaction',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',

                                                        height: 36,
                                                        width: 36,
                                                        html: '<img src="resources/icons/MembershipCardTransaction.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            MoveMembeshipCarousel(2);
                                                          


                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_CardTransactionTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-15 0 0 0',
                                                                id: 'htmlCardTxt01',
                                                                html: '<font size=1 color=grey>Card</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlTransactionTxt',
                                                                html: '<font size=1 color=grey>Transaction</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },

                                     
                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_CardDetailsInfo',
                                         //width: '33%',
                                         //height: 30,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_CardDetailsInfo',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/MembershipCardDetail.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      MoveMembeshipCarousel(3);
                                                      
                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_CardDetailsInfoTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlCardDetailTxt',
                                                          html: '<font size=1 color=grey>Card Detail</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          id: 'htmlInfoTxt',
                                                          html: '<font size=1 color=grey>Info</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },


                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_TermAndCondition',
                                         //width: '33%',
                                         //height: 30,
                                        // hidden: true,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_TermAndCondition',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/shakeHand01.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      // MoveMembeshipCarousel(4);
                                                      FloatPanel_Membership_TermAndConditionShow();


                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_TermAndConditionTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlTermAndConditionTxt',
                                                          html: '<font size=1 color=grey>Terms &</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          id: 'htmlTermAndConditionTxts',
                                                          html: '<font size=1 color=grey>Condition</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },



                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_NFC',
                                         //width: '33%',
                                         //height: 30,
                                         hidden:true,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_NFC',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/NFCenabled.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                     // MoveMembeshipCarousel(4);



                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_NFCTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlNFCTxt',
                                                          html: '<font size=1 color=grey>NFC</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          id: 'htmlEnabledTxt',
                                                          html: '<font size=1 color=grey>Enabled</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },

                                     

                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_DeleteCard',
                                         //width: '33%',
                                         //height: 30,
                                         margin: '0 0 0 0',
                                         flex: 1,
                                         style: "background-color: transparent",
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_DeleteCard',
                                                  //  badgeText: '1',
                                                  margin: '0 0 0 0',

                                                  height: 36,
                                                  width: 36,
                                                  html: '<img src="resources/icons/CancelMembershipCard.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      MoveMembeshipCarousel(4);
                                                     

                                                    
                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_DeleteCardTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-15 0 0 0',
                                                          id: 'htmlUnsubscribeTxt',
                                                          html: '<font size=1 color=grey>Unsubscribe</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 10',
                                                          id: 'htmlMembershipCardTxt',
                                                          html: '<font size=1 color=grey>Membership Card</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },


                                         






                                         










                                       ]

                                   },
















                               ]
                           },








                           {
                               xtype: 'container',
                               margin: '10 0 0 0',
                               hidden: true,
                               style: 'background-color: transparent;',
                               //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                               height: 80,
                               width: '20%',
                               // margin: '70 0 0 0',
                               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_GetMembershipCard',
                               layout: {

                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'center'
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       margin: '-40 0 0 -3',
                                       // hidden: true,
                                       //style: 'background-color: white;',
                                       style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                       height: 80,
                                       width: 80,
                                       // margin: '70 0 0 0',
                                       id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_GetMembershipCardInner',
                                       layout: {

                                           type: 'vbox',
                                           pack: 'center',
                                           align: 'center'
                                       },
                                       items: [
                                           {
                                               xtype: 'button',
                                               height: 80,
                                               width: 80,
                                               margin: '0 0 0 0',
                                               id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_MenuBottom_GetMembershipCard',
                                               html: '<img src="resources/icons/MembershipcardPurple.png" width="45" height="45" alt="Company Name">',
                                               //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {

                                                   //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                   //  setupMovementMap(2);


                                                 //  FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();


                                                   //Ext.getCmp('mainView').setActiveItem(16);
                                                   //loadNotificationSummary();
                                               }
                                           },



                                       ]
                                   },
                               ]
                           },




                       ]

            },



//////////////////////////
 //           {

 //               xtype: 'container',
 //               width: '100%',
 //              // docked: 'bottom',
 //               height: 40,
 //               hidden:true,
 //               // width: 40,

 //               //  title: '<font size="3" color="white">Live Tracking Map</font>',
 //               //hidden: true,
 //               //margin: '10 0 0 0',
 //               id: 'containerFloatPanel_MembershipCardList_NotYetSubscribedBottom',
 //               //style: {
 //               //    // background: '#D25959',
 //               //    background: 'transparent',
 //               //    // border: '2px'
 //               //},
 //               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
 //                style: 'border-bottom:2px solid #D25959;background-color:transparent',
 //              // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
 //               layout: {
 //                   type: 'hbox',
 //                   pack: 'center',
 //                   align: 'center',
 //               },
 //               // hidden:true,
 //               items:
 //                      [

 //                           {
 //                               xtype: 'button',
 //                               //  align: 'stretch',

 //                               ui: 'plain',
 //                               width: '100%',
 //                               height: 40,
 //                               id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard',
 //                             hidden:true,
 //                               // width: '80%',
 //                               //style: {
 //                               //    background: '#FA8072',
 //                               //},
 //                               // padding: '10px',
 //                               //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
 //                               //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
 //                               text: '<button class="button3viewloyaltycard">Get Membership Card</button>',
 //                               handler: function () {
 //                                   getMembershipCard();
 //                                  // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
 //                               },


 //                           },
                                    


 //{
 //    xtype: 'button',
 //    //  align: 'stretch',

 //    ui: 'plain',
 //    width: '100%',
 //    height: 40,
 //    id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard',
 //    hidden: true,
 //    // width: '80%',
 //    //style: {
 //    //    background: '#FA8072',
 //    //},
 //    // padding: '10px',
 //    //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
 //    //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
 //    text: '<button class="button3Deleteviewloyaltycard">Delete Membership Card</button>',
 //    handler: function () {

      
       

 //    },


 //},







 //                      ]

 //           },
            
                    {
                        xtype: 'container',
                        width: '100%',
                       height: '100%',
                       // height: 1000,
                        //    margin: '0 0 0 0',
                       style: 'background-color: transparent',
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        // scrollable: {
                        //     direction: 'vertical',
                        //     directionLock: true,
                        //     indicators: false
                        // },
                        items: [
                            
                            
    
{
    xtype: 'container',
    width: '100%',
  //  id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MasterOuter',
   // zIndex: 100,
    //hidden:true,
    margin: '0 0 0 0',
    height: '100%',
    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
    style: 'background-color:white',
    scrollable: {
        direction: 'vertical',
        directionLock: true,
        indicators: false
    },
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',
          //  id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MasterOuter',
           // zIndex: 100,
            //hidden:true,
            margin: '0 0 0 0',
            height: 1500,
            //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
            style: 'background-color:white',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
           
            items:[
                {
                    style: 'background-color: transparent',
                    hidden:true,
                    id:'htmlFloatPanel_MembershipCardList_NotYetSubscribed_CardLevel',
                    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.Gold Membership Card</div>',
                },


                {
                    xtype: 'container',
                    id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_Loading',
                    width: '100%',
                    height: 200,
                    //hidden:true,
                     style: "background-color: transparent",
                    //style: "background-color: #F35B57;",
                 //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'

                    },
                    items: [
                          {
                              xtype: 'container',
                              id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_LoadingInner',
                              width: '100%',
                              height: 200,
                              //hidden:true,
                              // style: "background-color: transparent",
                              //style: "background-color: #F35B57;",
                              style: 'background-image: url("resources/icons/loadingBlade01.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                              
                          },

                    ]

                },
               
              

                {
                   // xtype: 'carousel',
                    xtype: 'container',
                    hidden: true,
                    id: 'FloatPanel_MembershipCardList_NotYetSubscribed_Carousel',
                    style: 'background-color: transparent',
                    width: '94%',
                    height: 212,
                    //indicator: false,
                    //disabled: true, // disables swipe gestures
                    // scrollable: {
                    //     direction: 'horizontal',
                    //     disabled: true // disables scrolling entirely
                    // },
                    // listeners: {

                    //     //initialize: function (c) {
                    //     //    this.element.on({
                    //     //        swipe: function (e, node, options) {
                    //     //            if (e.direction == "left") {
                    //     //                swipeDirection = "Left";

                    //     //            } else {
                    //     //                swipeDirection = "Right";
                    //     //            }
                    //     //        }
                    //     //    });
                    //     //},
                    //     activeitemchange: function (container, newCard, oldCard, index) {
                          

                    //     },

                    // },


                    margin: '0 0 0 0',
                    items: [



                        
                      {
                          xtype: 'container',
                          id: 'carouselFloatPanel_MembershipCardList_NotYetSubscribed_0',
                          style: ' background-color: transparent',
                          hidden:true,
                          // html: '<div class="myContent" style="margin:0px 0px 0px -7px;width:104%;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                          html: '<div class="myContent" style="margin:0px 0px 0px -7px;height: 255px;width:104%;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;">' +
                             //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                              //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                              '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                '</div>' +
                               '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="{AyohaUserPhoto}" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',
                          //'<div style="width:100%;text-align:right;margin:0px 0px 0px 0px;background-color: transparent;height:30px"></div>',
                          height: 250,
                          width: '100%',
                          //  mode: 'image'
                      },
                    //   {
                    //       xtype: 'container',
                    //       id: 'carouselFloatPanel_MembershipCardList_NotYetSubscribed_1',
                    //       hidden: true,                                    
                    //       height: 250,
                    //       width: '100%',
                         
                    //   },
                   //{
                   //    xtype: 'container',
                   //    id: 'carouselFloatPanel_MembershipCardList_NotYetSubscribed_2',
                   //    hidden: true,                                 
                   //    height: 250,
                   //    width: '100%',
                     
                   //},
                   //  {
                   //      xtype: 'container',
                   //      id: 'carouselFloatPanel_MembershipCardList_NotYetSubscribed_3',
                   //      hidden: true,
                   //      height: 250,
                   //      width: '100%',
                       
                   //  }, {
                   //      xtype: 'container',
                   //      id: 'carouselFloatPanel_MembershipCardList_NotYetSubscribed_4',
                   //      hidden: true,                                    
                   //      height: 250,
                   //      width: '100%',
                       
                   //  },

                    ]
                },

/////////////////////////////////////////////// latest Add Rate Review

{
xtype: 'container',
width: '93%',
margin: '10 0 0 0',
height: 40,
// style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
style: "background-color: transparent;",
layout: {
type: 'hbox',
pack: 'center',
align: 'center'

},
items:[
{
xtype: 'container',
width: '50%',
// name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_StarOutterMaster',
margin: '0 0 0 0',
height: 23,
// style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
style: "background-color: transparent;",
layout: {
    type: 'hbox',
    pack: 'center',
    align: 'left'
    
    },
items:[


    {
        xtype: 'container',
        width: '100%',
        height:23,
        hidden: false,
        margin: '0 0 0 0',
        style: 'background-color:transparent',
        // scrollable: {
        //     direction: 'horizontal',
        //     directionLock: true,
        //     indicators: false
        // },
        layout: {
        type: 'hbox',
        pack: 'center',
        align: 'left',
        },
        items: [
{
    xtype: 'container',
    width: '25%',
    height:23,
    name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantPage',
    margin: '0 0 0 0',
    style: 'background-color:transparent',
    // scrollable: {
    //     direction: 'horizontal',
    //     directionLock: true,
    //     indicators: false
    // },
    layout: {
    type: 'vbox',
    pack: 'center',
    align: 'center',
    },
    items:[
        {
            


            html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
            '<img src="resources/icons/Enterprisepage.png" style="width: 22px; height: 22px;" />'+ 
            '<div style="font-size: 8px; font-weight: normal; color: black; text-align: center;">'+ 
            'Merchant<br>'+ 
            '<span style="display: block; margin-top: -4px;">Page</span>'+ 
            '</div>'+ 
            '</div>'
             
                    
                    }
    ]
},
{
    xtype: 'container',
    width: '25%',
    height:23,
    name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_OnlineStore',
    margin: '0 0 0 0',
    style: 'background-color:transparent',
    // scrollable: {
    //     direction: 'horizontal',
    //     directionLock: true,
    //     indicators: false
    // },
    layout: {
    type: 'vbox',
    pack: 'center',
    align: 'center',
    },
    items:[
        {
          
            


                html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                '<img src="resources/icons/onlineStore.jpg" style="width: 22px; height: 22px;" />'+ 
                '<div style="font-size: 8px; font-weight: normal; color: black; text-align: center;">'+ 
                'Online<br>'+ 
                '<span style="display: block; margin-top: -4px;">Store</span>'+ 
                '</div>'+ 
                '</div>'
                 
                        
                      
        }
    ]
},





{
    xtype: 'container',
    width: '25%',
    height:23,
    id:'containerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher',
    name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher',
    margin: '0 0 0 0',
    style: 'background-color:transparent',
    // scrollable: {
    //     direction: 'horizontal',
    //     directionLock: true,
    //     indicators: false
    // },
    layout: {
    type: 'vbox',
    pack: 'center',
    align: 'center',
    },
    items:[
        {
          
            


                html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                '<img src="resources/icons/VoucherFeature02.png" style="width: 22px; height: 22px;" />'+ 
                '<div style="font-size: 8px; font-weight: normal; color: black; text-align: center;">'+ 
                'Loyalty<br>'+ 
                '<span style="display: block; margin-top: -4px;">Voucher</span>'+ 
                '</div>'+ 
                '</div>'
                 
                        
                      
        }
    ]
},

{
    xtype: 'container',
    width: '25%',
    height:23,
    margin: '0 0 0 0',
    style: 'background-color:transparent',
}
        ]



    },
 
]
},

{
xtype: 'container',
width: '50%',
//name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_StarOutterMaster',
// name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_StarOutterMaster',
margin: '0 0 0 0',
height: 35,
// style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
style: "background-color: transparent;",
layout: {
// type: 'fit',
type: 'vbox',
pack: 'center',
align: 'center'

},
items:[
   
{
xtype: 'container',
width: 130,
//width: '100%',
name:'namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_StarOutterMaster',
margin: '0 0 0 80',
height: 35,
// style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
style: "background-color: transparent;",
layout: {
    type: 'vbox',
    pack: 'center',
    align: 'center'

},
items: [
    {  width: 120,
        height: 14,
        margin: '3 0 0 0',
        id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_ReviewAndRateCountOutter',
        html: '<div  style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
        
        },
    {
        xtype: 'container',
        width: 120,
        margin: '0 0 0 0',
        height: 15,
        // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
        style: "background-color: transparent;",
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center'

        },
        items: [

            {
                id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter',
                height: 13,
                width: 13,
                html: '<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>',
            },
{
id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter',

height: 13,
width: 13,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>',
},
{
id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter',

height: 13,
width: 13,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>',
},
{
id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter',

height: 13,
width: 13,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>',
},
{
id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter',

height: 13,
width: 13,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>',

},
// {
// xtype: 'panel',
// width:7
// },

        ]
    },
    
    {
     margin: '17 0 0 0',
     id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_TotalReviewsOutter',
     html: '<div  style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
 },

     {
         margin: '1 0 0 0',
         hidden:true,
         id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_ReviewAndRateHereOutter',
         html: '<div  class="blink_me"  style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Write your review/rate here</div>',

     },
]
},
]

}
]
},

///////////////////////Merchant Info

{
    xtype: 'container',
    width: '95%',
    margin:'30 0 0 0',
    style: 'background-color:white',
  //  hidden:true,
  //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'left'

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
xtype:'spacer',
width:10
            },
            {
             //   id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledReward',
                html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;">Merchant</div>',
            },

        

    ]
},


{
xtype:'container',
width:'90%',
height:1,
style: 'background-color:grey',
},
{
xtype: 'container',
id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseInfolist',
style: ' background-color: transparent',
height: 190,
width: '100%',
layout: {
type: 'vbox',
pack: 'start',
align: 'center'

},
items: [
{
xtype: 'list',
//flex:1,
scrollable:false,
height: 190,
// store: 'MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
store:_DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore,
id: 'FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseInfoList',
mode: 'SINGLE',
//  grouped: true,
disableSelection: true,
style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
// scrollable: {
// direction: 'vertical',
// indicators: {
// y: {
// autoHide: true
// },
// x: {
// autoHide: true
// }
// }
// },
itemTpl: '<div class="myContent"  style="background-color:white;width:104%">' +
//'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:3px 0px 0px -13px;" ><thead><tr><th style="background-color:transparent;border-radius: 0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo}"style="width: 80px; height: 80px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div></th></tr><tr></tr></thead></table>' +


'</div>',
width: '90%',
listeners: {
itemsingletap: function (list, idx, target, records, evt) {





},
deselect: function (list, records) {

}
},

},

]

},




////////////////////
{
xtype: 'container',
width: '100%',
margin: '35 0 0 0',
height: 50,
//style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
style: 'background-color:transparent',
layout: {
type: 'vbox',
pack: 'start',
align: 'center'

},
items:[
    {
        xtype: 'container',
        width: '95%',
        style: 'background-color:white',
      //  hidden:true,
      //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
        layout: {
            type: 'hbox',
            pack: 'left',
            align: 'left'

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
xtype:'spacer',
width:10
                },
                {
                 //   id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledReward',
                    html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;">Membership Card Offered</div>',
                },

            

        ]
    },


{
xtype:'container',
width:'90%',
height:1,
style: 'background-color:grey',
},
{
xtype: 'container',
style: 'background-color:transparent;',
width: '95%',
margin:'10 0 0 0',
// hidden:true,
// margin:'-100 0 0 0',
//zIndex: 100,
height: 80,
layout: {
    type: 'hbox',
    pack: 'start',
    align: 'left'
},
items: [

    {
        xtype: 'panel',
        width: 18
    },
    {
        xtype: 'container',
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'left'
        },
        items: [
             {
                 margin: '-3 0 0 0',                            
                 id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemName',
                 html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;">Card Name:Barbegal</div>',
             },
             {
                 margin: '-3 0 0 0',
                 id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemCardLevel',
                 html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;black:white;text-align:center;" >Card Level:25.00</div>',
             },
            {
                margin: '-3 0 0 0',
                hidden:true,
                id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemPrice',
                html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):25.00</u></div>',
            },
            {
                margin: '20 0 0 0',
                hidden:true,
                id: 'htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemPoint',
                html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="00.00 Ayoha Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 110px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/></div>',
            },
             

        ]
    },

    {
        xtype: 'spacer'
    },




]
},
]
},
 
        
        
        
                                 
                                    {
                                        xtype: 'container',
        margin:'55 0 0 0',
                                        //hidden: true,
                                        id: 'FloatPanel_MembershipCardList_NotYetSubscribed_CarouselEntitleReward_EntitleEnterprise',
                                       // style: 'background-color:#f7f7f7',
                                        style: 'background-color:white',
                                        width: '100%',
                                        height: '70%',
                                      //  indicator: true,
                                        // listeners: {
        
                                        //     //initialize: function (c) {
                                        //     //    this.element.on({
                                        //     //        swipe: function (e, node, options) {
                                        //     //            if (e.direction == "left") {
                                        //     //                swipeDirection = "Left";
        
                                        //     //            } else {
                                        //     //                swipeDirection = "Right";
                                        //     //            }
                                        //     //        }
                                        //     //    });
                                        //     //},
                                        //     activeitemchange: function (container, newCard, oldCard, index) {
                                        //         // console.log('Current index:' + container.getActiveIndex());
                                        //         CarouselIndex = container.getActiveIndex();
        
                                          
                                        //         if (_FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad == "Y") {
                                        //             MoveMembeshipCarousel(CarouselIndex);
                                        //         }
        
                                              
        
                                        //     },
        
                                        // },
        
        
                                       // margin: '0 0 0 0',
                                        items: [
                                          
                                                //{
                                                //    style: ' background-color: transparent',
                                                //    margin:'0 0 0 0',
                                                //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                                                //},
                                                {
                                                    xtype: 'container',
                                                    id: 'IDcarouselFloatPanel_MembershipCardList_NotYetSubscribed_Campaignlist',
                                                    style: ' background-color: transparent',
                                                    height:'100%',
                                                    width: '100%',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'start',
                                                        align: 'center'
                    
                                                    },
                                                    items: [

                                                        {
                                                            xtype: 'container',
                                                            width: '95%',
                                                            style: 'background-color:white',
                                                          //  hidden:true,
                                                          //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'left',
                                                                align: 'left'
                                                
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
                                                xtype:'spacer',
                                                width:10
                                                                    },
                                                                    {
                                                                     //   id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledReward',
                                                                        html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;">Membership Payment Plan</div>',
                                                                    },
                                                
                                                                
                                                
                                                            ]
                                                        },


{
    xtype:'container',
    width:'90%',
    height:1,
    style: 'background-color:grey',
},
{
    xtype:'container',
    width:'90%',
    height:210,
    margin:'0 0 0 0',
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    items:[
       
        {

          //  id: 'Dashboard_MyAccount_UnSubscribedMembershipCardList',
            margin: '0 0 0 0',
            store: _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore,
            // grouped: true,
            xtype: 'dataview',
          //  width:200,
            height:200,
            style: "background-color: transparent;",
            inline: {
                wrap: false
            },
            scrollable: {
                direction: 'horizontal',
                indicators: false,
            },
           width: '95%',

            itemTpl: '<div style="width:200px;height:100px">' +
            '<div id="membershipcardplancontainerID" class="membership-card-container" onclick="changeBackground(event,{MembershipCardFee},`{MembershipCardFeePaymentCycle}`,`{1}`)">'+
            '<div class="promo">LIMITED OFFER!</div>'+
            '<div class="membership-header">{MembershipCardFeePaymentCycle} Plan'+
                
                '</div>'+
                '<div class="membership-body">'+
                '<div class="membership-price">RM{ModifiedMembershipCardFee}</div>'+
                '<div class="membership-duration">Billed {MembershipCardFeePaymentCycle}</div>'+
                '</div>'+
               
                                    '</div>',




            //////itemTpl: '<div class="myContent" style="background-color:transparent;width:330px;height:190px;">&nbsp;&nbsp;&nbsp;<div style="margin:0px 0px 0px 0px;width:310px;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                             

            //////                  '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
            //////                                                 '</div></div>' ,
                                                          

                                //'<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                                // '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                              
                                // '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Membership Fees(RM)</div></div>' +
                                //   '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{MembershipFee}</div></div></div>',
                              


            emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

        },
       
    ]
},






                                                        {
                                                            xtype: 'container',
                                                            width: '95%',
                                                            style: 'background-color:white',
                                                          //  hidden:true,
                                                          //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'left',
                                                                align: 'left'
                            
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
                    xtype:'spacer',
                    width:10
                                                                    },
                                                                    {
                                                                        id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledReward',
                                                                        html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;">Membership Privileges</div>',
                                                                    },
                            
                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledRewardOld',
                                                                         hidden: true,
                                                                         height: 22,
                                                                         width: '50%',
                                                                         // iconCls: 'list',
                                                                         html: '<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privileges</u></div>',
                                                                         ui: 'plain',
                                                                         handler: function () {
                                                                            
                                                                           
                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledEnterprise',
                                                                         height: 22,
                                                                         hidden:true,
                                                                         width:'50%',
                                                                         // iconCls: 'list',
                                                                         html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:11px;">Membership Outlet</div>',
                                                                         ui: 'plain',
                                                                         handler: function () {
                                                                            
                                                                         }
                                                                     },
                                                                  
                            
                                                            ]
                                                        },
                                                        {
                                                            xtype:'container',
                                                            width:'90%',
                                                            height:1,
                                                            style: 'background-color:grey',
                                                        },
                                                        {
                                                            xtype: 'list',
                                                            //  flex: 1,
                                                           // hidden:true,
                                                          //  margin: '1 0 0 0',
                                                            width: '90%',
                                                            // store: 'EnterprisegetAllStore',
                                                            store: _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore,
                                                           // store: 'MembershipCardCampaingEntitledLoadByMembershipCardCodeStore',
                                                            id: 'FloatPanel_MembershipCardList_NotYetSubscribed_Campaignlist',
                                                            scrollable:false,
                                                            // grouped: true,
                                                            mode: 'SINGLE',
                                                            //  indexBar: true,
                                                            disableSelection: true,
                                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                            // scrollable: {
                                                            //     direction: 'vertical',
                                                            //     directionLock: true,
                                                            //     indicators: {
                                                            //         y: {
                                                            //             autoHide: true
                                                            //         },
                                                            //         x: {
                                                            //             autoHide: true
                                                            //         }
                                                            //     }
                                                            // },
                                                                 
                                                          
                                                        //     itemTpl: '{ModifiedCampaignTypeShorted}' +                                              
                                                        //    '<br><div style="width:100%;text-align:center;margin:-10px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black">{ModifiedCampaignType}</div>' +
                                                        //        '<br><div style="width:100%;text-align:center;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{CampaignName}</div>' +
                                                        //         '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{ModifiedCountLoyaltyStamped}</div>' +
                                                        //           '{ModifiedisRequiredStartEndDate}' +
                                                        //                                                      // '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black">Day Left:{CampaignDayLeft}</div>' +
        
                                                        //     '</div>',
        
        
                                                        itemTpl: '<div class="myContent" style="background-color:transparent;">' +
                    
        
                                                       '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;height:60px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:30px;height:30px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({ModifiedCampaignType}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'
                                                       // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'   
                                                       
                                                       
                                                       + '</div>',
        
        
        
        
        
        
                                                           
                                                            // itemTpl: '<div class="myContent" style="background-color:transparent;height:125px">' +
                    
                                                            //    '<div style="width:100%;text-align:center;margin:0px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black"><u>{ModifiedCampaignTypeShorted}</u></div>' +
                                                            //                                                                            // '<br><div style="width:100%;text-align:right;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;color:black"></div>' +
                                                            //     '<br><div style="width:100%;text-align:center;margin:-10px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black">{ModifiedCampaignType}</div>' +
                                                            //         '<br><div style="width:100%;text-align:center;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{CampaignName}</div>' +
                                                            //          '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{ModifiedCountLoyaltyStamped}</div>' +
                                                                     
                                                            //      '</div>',
                                                            height: 100,
                                                           //height: '100%',
                                                            listeners: {
                                                                itemsingletap: function (list, idx, target, records, evt) {
        
                                                                    //var Stamps = records.get('Stamps');
                                                                    //var StampsArr = Stamps.split('/');
        
        
                                                                    var CampaignCode = records.get('CampaignCode');
                                                                    var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                                                    var StartDate = records.get('CampaignStartDate');
                                                                    var EndDate = records.get('CampaignEndDate');
                                                                    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                                    //var EnterpriseName = records.get('EnterpriseName');     
                                                                    var EnterpriseName = records.get('EnterpriseName');
                                                                    var StampRuleRemarks = records.get('Remarks');
                                                                    var isStampRulePopUp = records.get('isRulePopUp');
                                                                    var CampaignName = records.get('CampaignName');
                                                                    var Stamp = records.get('Stamp');
                                                                    var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                                    //var EnterpriseLogo = records.get('EnterpriseLogo');
                                                                    var EnterpriseLogo = records.get('EnterpriseLogo');
                                                                    var CampaignType = records.get('CampaignType');
                                                                    var EnterpriseAccNo = records.get('EnterpriseAccNo');
        
                                                                    var isRequiredStartEndDate = records.get('isRequiredStartEndDate');
                                                                    var isCampaignExpired = records.get('isCampaignExpired');
                                                                    var CampaignDayLeft = records.get('CampaignDayLeft');
        
                                                                    //  FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks);
        
        
        
                                                                    //var StampedCampaignCode = records.get('StampedCampaignCode');
                                                                    //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                                    //var StartDate = records.get('StartDate');
                                                                    //var EndDate = records.get('EndDate');
                                                                    //var SubscriberAccNo = records.get('SubscriberAccNo');
                                                                    //var EnterpriseName = records.get('EnterpriseName');
                                                                    //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                                    //var isStampRulePopUp = records.get('isStampRulePopUp');
                                                                    //var StampCampaignName = records.get('StampCampaignName');
                                                                    //var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                                    //var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                                    localStorage.setItem('StampCampaignCode', CampaignCode);
        
                                                                    localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                                    localStorage.setItem('CountStampCardRowShow', Stamp);
                                                                     
                                                                
        
        
        
                                                                   
                                                                    if (MembershipTag == 'NO') {
                                                                        
                                                                      

                                                                        setMessage_NotYetMembershipMessage();



                                                                        
                                                                if (CampaignType == "Stamp Reward Loyalty Card") {

                                                                    //alert(CampaignType);
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {

                                                                    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                                    //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
                                                                    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
                                                                }
                                                                if (CampaignType == "Point Reward Loyalty Card") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                                                   // FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, PointisCampaignExpired);
                                                                }
                                                                if (CampaignType == "Membership Card Discount") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Contest") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Event") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    //FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID);
                                                                    FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade(CampaignCode,EnterpriseLogo, EnterpriseName);
                                                                   
                                                                   
                                                                    // FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                    }
        
                                                                
        
                                                                },
                                                                deselect: function (list, records) {
        
                                                                }
                                                            },
        
                                                        },








                                                        {
                                                            xtype: 'container',
                                                            width: '95%',
                                                            margin:'30 0 0 0',
                                                            style: 'background-color:white',
                                                          //  hidden:true,
                                                          //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'left',
                                                                align: 'left'
                                                
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
                                                xtype:'spacer',
                                                width:10
                                                                    },
                                                                    {
                                                                     //   id: 'btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledReward',
                                                                        html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;">Entitle Outlet</div>',
                                                                    },
                                                
                                                                
                                                
                                                            ]
                                                        },


{
    xtype:'container',
    width:'90%',
    height:1,
    style: 'background-color:grey',
},
{
    xtype: 'container',
    id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_Enterpriselist',
    style: ' background-color: transparent',
    height: 300,
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items: [
        {
            xtype: 'list',
            //flex:1,
            scrollable:false,
            height: 300,
           // store: 'MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
            store:_DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore,
            id: 'FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseEntitledList',
            mode: 'SINGLE',
            //  grouped: true,
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
            itemTpl: '<div class="myContent"  style="background-color:white;width:104%">' +
                        //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                         '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:3px 0px 0px -13px;" ><thead><tr><th style="background-color:transparent;border-radius: 0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo}"style="width: 80px; height: 80px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div></th></tr><tr></tr></thead></table>' +


                           '</div>',
            width: '90%',
            listeners: {
                itemsingletap: function (list, idx, target, records, evt) {





                },
                deselect: function (list, records) {

                }
            },

        },

    ]

},
                                                        {
                                                            xtype:'container',
                                                            width:'100%',
                                                            height:100
                                                        }
                                                    ]
        
                                                },
        
        
                                     ///////////////////////
        
        
        
        
                                    
                                             
                                         
                                         ///////////////////////////////////////////////////////
                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_CardTransaction',
                                             style: ' background-color: transparent',
                                            // height: '95%',
                                             width: '100%',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'start',
                                                 align: 'center'
        
                                             },
                                             items: [
                                                 {
        
        
                                                     xtype: 'list',
                                                     // height: '64%',
                                                     // height: '100%',
                                                     // height: 200,
                                                     //   flex: 2,
                                                     store: 'AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore',
                                                     id: 'FloatPanel_MembershipCardList_NotYetSubscribed_CardTransactionList',
                                                     mode: 'SINGLE',
                                                     disableSelection: true,
                                                     grouped: true,
                                                     // disableSelection: true,
                                                     scrollable:false,
                                                     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                    //  scrollable: {
                                                    //      direction: 'vertical',
                                                    //      indicators: {
                                                    //          y: {
                                                    //              autoHide: true
                                                    //          },
                                                    //          x: {
                                                    //              autoHide: true
                                                    //          }
                                                    //      }
                                                    //  },
                                                     itemTpl: '<div class="myContent">' +
        
        
                                                                             '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{AyohaPointType}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:1px 0px 0px 0px;"><b>{CampaignName}</b></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right">{ModifiedTypeCRDBExtent}</div></td></tr></table>' +
        
                                                     '</div>',
                                                     emptyText: '<div class="myContent">No Transactions</div>',
                                                     width: '90%',
                                                     // height: 600,
                                                     // height: '100%',
        
                                                     listeners: {
        
        
                                                         itemdoubletap: function (dataview, index, target, record, e, eOpts) {
        
        
                                                         },
        
                                                         itemsingletap: function (dataview, index, target, record, e, eOpts) {
        
                                                         }
                                                     }
        
        
        
        
        
        
                                                 },
                                                 //{
                                                 //    xtype: 'list',
                                                 //    height: '100%',
                                                 //    // store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                                 //    store:'LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore',
                                                 //    id: 'FloatPanel_MembershipCardList_NotYetSubscribed_StampHistoryList',
                                                 //    mode: 'SINGLE',
                                                 //    grouped: true,
                                                 //    disableSelection: true,
                                                 //    itemTpl: '<div class="myContent">' +
        
                                                 //    //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                                 //     '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</div>' +
        
        
        
                                                 //      '</div>',
                                                 //    width: '100%',
                                                 //    listeners: {
                                                 //        itemsingletap: function (list, idx, target, records, evt) {
        
                                                 //            var StampedCampaignCode = records.get('StampedCampaignCode');
                                                 //            var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                 //            var StartDate = records.get('StartDate');
                                                 //            var EndDate = records.get('EndDate');
                                                 //            var SubscriberAccNo = records.get('SubscriberAccNo');
                                                 //            var EnterpriseName = records.get('EnterpriseName');
                                                 //            var StampRuleRemarks = records.get('StampRuleRemarks');
                                                 //            var isStampRulePopUp = records.get('isStampRulePopUp');
                                                 //            var StampCampaignName = records.get('StampCampaignName');
                                                 //            var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                 //            var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                 //            localStorage.setItem('StampCampaignCode', StampedCampaignCode);
        
                                                 //            localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                 //            localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                 //            //alert(StampRuleRemarks); alert(isStampRulePopUp);
        
                                                 //            FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);
        
        
                                                 //        },
                                                 //        deselect: function (list, records) {
        
                                                 //        }
                                                 //    },
        
                                                 //},
        
                                             ]
        
                                         },
        
        
        
                                            ///////////////////////////////////////////////////////
                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_MembershipCardList_NotYetSubscribed_CardDetails',
                                             style: ' background-color: white',
                                             // height: '95%',
                                            // height: 412,
                                             width: '100%',
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'start',
                                                 align: 'center'
        
                                             },
                                             items: [
                                                 {
                                                     xtype: 'list',
                                                     scrollable:false,
                                                   //  height: 480,
                                                     id: 'FloatPanel_MembershipCardList_NotYetSubscribed_CardDetails',
                                                     // store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                                     store: 'MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore',                                            
                                                     mode: 'SINGLE',
                                                     style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                    // grouped: true,
                                                     disableSelection: true,
                                                     itemTpl: '<div class="myContent">' +
        
                                                     //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                                      '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Membership Card Name</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardName}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Level</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardType}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Fees</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardFee}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Fees Payment Cycle</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardFeePaymentCycle}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Expiry (Month)</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{StrExpiredDate}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">is Required Approval?</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{isRequiredApproval}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Date</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{CreatedDate}</div>' +
                                                       //'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Date</div><br>' +
                                                       //'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipDate}</div>' +
                                                        '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Method</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipByMethod}</div>' +
                                                        '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Date</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembrshipApprovalDate}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval By</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipApprovalBy}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Status</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipApprovalStatus}</div>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Paid Fees Amount</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{ReceivedAmount}</div>' +
                                                        '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Remarks</div><br>' +
                                                       '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{Remarks}</div>' +
                                                     '</div>',
                                                     width: '90%',
                                                     listeners: {
                                                         itemsingletap: function (list, idx, target, records, evt) {
        
                                                           
        
                                                         },
                                                         deselect: function (list, records) {
        
                                                         }
                                                     },
        
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
    return _FloatPanel_MembershipCardList_NotYetSubscribed;



}








//function FloatPanel_MembershipCardList_NotYetSubscribedShow(ID) {

function FloatPanel_MembershipCardList_NotYetSubscribedShow(MembershipCardCode, EnterpriseAccountNo) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_NotYetSubscribed);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_NotYetSubscribed());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
    FloatPanel_MembershipCardList_NotYetSubscribedAdjustHeight();
    
    isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'Y';
    globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg="";

    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
   // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard').setHidden(false);
    Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
   // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard').setHidden(true);
    
    _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo = EnterpriseAccountNo;
  
    _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCardCode;


  
    FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_NotYetSubscribedBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
       // FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert();
        FloatPanel_MembershipCardList_NotYetSubscribed_CheckExistSubscriptionCode();
        //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_NotYetSubscribedBottom();
      }
    );
    MembershipTag = 'NO';
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
   // disabledBottomButton();
    _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

   Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
   FloatPanel_MembershipCardList_NotYetSubscribed_initEventContainer();
 
 
   //  FloatPanel_MerchantDetailPageHide();
  //  Dashboard_SearchMerchantListHide();
}













var globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed;
function FloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_NotYetSubscribed);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_NotYetSubscribed());
    this.overlay.show();
   
   globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'Y';
    globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg="";
    FloatPanel_MembershipCardList_NotYetSubscribedAdjustHeight();
   
    AddRoutePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard').setHidden(true);

    _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCardCode;


    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = null;
    FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_NotYetSubscribedBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
       // FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert();
        FloatPanel_MembershipCardList_NotYetSubscribed_CheckExistSubscriptionCode();
        //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_NotYetSubscribedBottom();
      }
    );
    MembershipTag = 'NO';
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
    //disabledBottomButton();
    _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
    FloatPanel_MembershipCardList_NotYetSubscribed_initEventContainer();
}





function FloatPanel_MembershipCardList_NotYetSubscribedShow_FromFloatPanel_MerchantDetailPage(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_NotYetSubscribed);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_NotYetSubscribed());
    this.overlay.show();




  
    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = null;
    globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'Y';
  
    globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg="";
    FloatPanel_MembershipCardList_NotYetSubscribedAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard').setHidden(true);



  


    _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCardCode;

    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;
  

    FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore_FloatPanel_MerchantDetailPage(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_NotYetSubscribedBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
       // FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert();
        FloatPanel_MembershipCardList_NotYetSubscribed_CheckExistSubscriptionCode();
        //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_NotYetSubscribedBottom();
      }
    );
  //  MembershipTag = 'NO';
    
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
 
    _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
    FloatPanel_MembershipCardList_NotYetSubscribed_initEventContainer();
}




function FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed,MembershipCardFeePaymentCycle,CountStar,CountReviewer) {
   

   
//    if(MembershipCardFeePaymentCycle !='FOC'){
//     FloatPanel_MembershipCardList_NotYetSubscribedShow(EnterpriseAccountNo,MembershipCardCode);
//     return;
//    }
   
   
  
   
 
   
   
   
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_NotYetSubscribed);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_NotYetSubscribed());
    this.overlay.show();
  
 
    globalOpenMembershipCardList_NotYetSubscribed_From = "DashboardMain";

    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = null;



    globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'Y';
    globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg="";
    FloatPanel_MembershipCardList_NotYetSubscribedAdjustHeight();
  
    AddRoutePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
    if(isFloatPanel_RewardStoreMembershipCardOpen == 'Y'){
        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setZIndex(185);
    }
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard').setHidden(true);






    _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo = EnterpriseAccountNo;
   
    _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCardCode;
    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode= MembershipCardCode;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;
    globalEnterpriseAccNo_AyohaMerchantReview = EnterpriseAccountNo;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo= EnterpriseAccountNo;
    
   
   FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode);

   var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_NotYetSubscribedBottom]')[0];
   var containerViewEl = containerView.element;
   containerViewEl.on('tap',
     function (event, node, options, eOpts) {
    //   FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert();
       FloatPanel_MembershipCardList_NotYetSubscribed_CheckExistSubscriptionCode();
       //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_NotYetSubscribedBottom();
     }
   );
   MembershipTag = 'NO';

    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");

    _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

   // Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
  
    FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore(EnterpriseAccountNo,MembershipCardCode);


if(CountStar=="NaN"){
    CountStar=0.0;
}
    
    FloatPanel_MembershipCardList_NotYetSubscribed_RateAndReview(CountStar,CountReviewer);
    FloatPanel_MembershipCardList_NotYetSubscribed_initEventContainer();
}








var _FloatPanel_MembershipCardList_NotYetSubscribed_ID;
function FloatPanel_MembershipCardList_NotYetSubscribedShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,ID) {

    Ext.Viewport.remove(_FloatPanel_MembershipCardList_NotYetSubscribed);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_NotYetSubscribed());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
    FloatPanel_MembershipCardList_NotYetSubscribedAdjustHeight();
   
    isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'Y';
    globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg="";
    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = null;
    _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo = EnterpriseHQAccountNo;
    _FloatPanel_MembershipCardList_NotYetSubscribed_ID = ID;
    MembershipTag = 'YES';
    //Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_GetMembershipCard').setHidden(true);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_DeleteMembershipCard').setHidden(false);

   // Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);
   //// Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);
    
   // Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
   // FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode)
    
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
    FloatPanel_MembershipCardList_NotYetSubscribed_initEventContainer();

}








var globalOpenMembershipCardList_NotYetSubscribed_From;

function FloatPanel_MembershipCardList_NotYetSubscribedAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    var newHeightss = x - 332;
   


    if (globalOpenMembershipCardList_NotYetSubscribed_From == "FloatPanel_MembershipCardList_MyMembershipCard") {
        Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 7);
    }
    if (globalOpenMembershipCardList_NotYetSubscribed_From == "FloatPanel_RewardStoreMembershipCard")
    {
        console.log(globalOpenMembershipCardList_NotYetSubscribed_From);
        console.log(globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed);
        if (globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 1);
            Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
        }
        if (globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 7);
            Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);
        }
    }
    if (globalOpenMembershipCardList_NotYetSubscribed_From == "FloatPanel_MerchantDetailPage") {
       
        if (globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 1);
            Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
           // disabledBottomButton();
            MembershipTag = 'NO';
        }
        if (globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 7);
            Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);           
            MembershipTag = 'YES';
        }
    }

   



    if (globalOpenMembershipCardList_NotYetSubscribed_From == "DashboardMain") {
        if (globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 1);
            Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(false);
         //   disabledBottomButton();
            MembershipTag = 'NO';
        }
        if (globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_NotYetSubscribedShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 7);
            Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);           
            MembershipTag = 'YES';
        }
      
    }




    if (globalOpenMembershipCardList_NotYetSubscribed_From == "FloatPanel_AyohaStore_MembershipCardUsed") {
        Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 7);
    }
    if (globalOpenMembershipCardList_NotYetSubscribed_From == "FloatPanel_AyohaStore_MembershipCardBeingUsed") {
        Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribedBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribedID').setHeight(x + 7);
    }
    // Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_CarouselEntitleReward_EntitleEnterprise').setHeight(newHeights);
    // Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Campaignlist').setHeight(newHeights-270);


    // Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_CardDetails').setHeight(newHeightss);
    // Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_CardTransactionList').setHeight(newHeightss);
    

 

    var containerViewnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher]')[0];
    var containerViewElnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher = containerViewnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher.element;
    containerViewElnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantVoucher.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_AyohaRewardVoucherList_MembershipCardShow();
          //if (globalFloatPanel_AyohaStore_MembershipEventCount == 1) {
          //    FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoStore_Event1();
          //}
          //if (globalFloatPanel_AyohaStore_MembershipEventCount > 1) {
          //    FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoStore_Event2();
          //}

      }
    );


    

}



function FloatPanel_MembershipCardList_NotYetSubscribedHide() {

    if (isFloatPanel_MembershipCardList_NotYetSubscribedOpen == 'Y') {
        globalFloatPanel_MembershipCardList_NotYetSubscribed_price="";
        globalFloatPanel_MembershipCardList_NotYetSubscribed_plan="";
        _FloatPanel_MembershipCardList_NotYetSubscribed.hide(); isFloatPanel_MembershipCardList_NotYetSubscribedOpen = 'N'; _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "N";
        RemovePages("FloatPanel_MembershipCardList_NotYetSubscribedHide()");
    }

 
}


function FloatPanel_MembershipCardList_NotYetSubscribed_initEventContainer(){
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_MembershipCardList_NotYetSubscribed";
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=_FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo;
    var containerViewnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantPage = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantPage]')[0];
    var containerViewElnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantPage = containerViewnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantPage.element;
    containerViewElnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_MerchantPage.on('tap',
      function (event, node, options, eOpts) {
    




                                 FloatPanelMerchantDetailPage_EnterprisesStageLoad(_FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo);

      }
    );


    var containerViewnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_OnlineStore = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_OnlineStore]')[0];
    var containerViewElnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_OnlineStore = containerViewnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_OnlineStore.element;
    containerViewElnamecontainerFloatPanel_MembershipCardList_NotYetSubscribed_OnlineStore.on('tap',
      function (event, node, options, eOpts) {
       
      // alert(globalFloatPanel_AyohaStore_ModuleTagging);
        FloatPanelMerchantDetailPage_AyohaStore();
      }
    );

    var containerView = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MembershipCardList_NotYetSubscribed_StarOutterMaster]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
      
        FloatPanelMerchantDetailPage_OpenMerchantReview();
      }
    );
    LoadingPanelHide();
}





//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_MembershipCardLoadByEnterpriseAccNoStore;
var countMembershipCardLoadByEnterpriseAccNoStoreFirst;
var MmcCode = [];
var EnterpriseAccount = [];
var MembershipCardLevels = [];
function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode) {

// alert('xx')
    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();

    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //////Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
        //////    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
        //////    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
        //////    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
        //////    MembershipCardCode: MembershipCardCode
        //////});
       // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
      //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
      //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
       /////// var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
        var count = _DataStore_MembershipCardAyohaUserMembershipCardStore.getCount();
      

        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_MembershipCardAyohaUserMembershipCardStore.getAt(i);
            var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
            var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
            var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
            var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
            var MembershipCardType = modelRecorded.get('MembershipCardType');
            var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
            var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
            var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
            var MembershipCardCode = modelRecorded.get('MembershipCardCode');
            var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
            global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
            globalFloatPanelMerchantDetailPage_EnterpriseLogo= modelRecorded.get('EnterprisesLogo');
            globalFloatPanelMerchantDetailPage_EnterpriseName= modelRecorded.get('EnterprisesName');
            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
     //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
     //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
     //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
     //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
     //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
     //                                       '</div>' +
     //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');


            
            

            Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:222px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Carousel').setHidden(false);
      
        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
      //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribed_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');
     

        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}










function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore_FloatPanel_MerchantDetailPage(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();


   

    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //////Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
        //////    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
        //////    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
        //////    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
        //////    MembershipCardCode: MembershipCardCode
        //////});
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
        /////// var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
        var count = _DataStore_MembershipCardAyohaUserMembershipCardStore.getCount();


        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_MembershipCardAyohaUserMembershipCardStore.getAt(i);
            var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
            var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
            var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
            var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
            var MembershipCardType = modelRecorded.get('MembershipCardType');
            var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
            var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
            var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
            var MembershipCardCode = modelRecorded.get('MembershipCardCode');
            var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
            global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
            globalFloatPanelMerchantDetailPage_EnterpriseLogo= modelRecorded.get('EnterprisesLogo');
            globalFloatPanelMerchantDetailPage_EnterpriseName= modelRecorded.get('EnterprisesName');

            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
            //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                       '</div>' +
            //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





            Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribed_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}

var global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesTagLine;
var global_FloatPanel_MembershipCardList_NotYetSubscribed_CardName;
var global_FloatPanel_MembershipCardList_NotYetSubscribed_CardLevel;
var global_FloatPanel_MembershipCardList_NotYetSubscribed_CardPaymentPlan;
var global_FloatPanel_MembershipCardList_NotYetSubscribed_CardPrice;
function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
   



    _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo);
    _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetail');
  //  _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.load();



    _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                _DataStore_MembershipCardAyohaUserMembershipCardStore=_DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore;
                var count = _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getCount();
                var MembershipCardName;var MembershipCardFee;var MembershipCardFeePaymentCycle;
       
               for (i = 0; i < count; i++) {
                   var modelRecorded = _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getAt(i);
                   var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
                   var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
                   var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
                   var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
                   var MembershipCardType = modelRecorded.get('MembershipCardType');
                   var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
                   var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
                   var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
                   var MembershipCardCode = modelRecorded.get('MembershipCardCode');
                   var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
       
       
                   MembershipCardName = modelRecorded.get('MembershipCardName');
                   MembershipCardFee= modelRecorded.get('MembershipCardFee');
                   MembershipCardFeePaymentCycle = modelRecorded.get('MembershipCardFeePaymentCycle');
                   global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName = modelRecorded.get('EnterprisesName');
                   global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
                   global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesTagLine = modelRecorded.get('EnterprisesTagLine');
                   globalFloatPanelMerchantDetailPage_EnterpriseTagLine= modelRecorded.get('EnterprisesTagLine');
                   globalFloatPanelMerchantDetailPage_EnterpriseLogo= modelRecorded.get('EnterprisesLogo');
                   globalFloatPanelMerchantDetailPage_EnterpriseName= modelRecorded.get('EnterprisesName');
                   global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName= modelRecorded.get('EnterprisesName');
                   MmcCode.push(MembershipCardCode);
                   MembershipCardLevels.push(MembershipCardType);
                   //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
                   //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                   //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                   //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
                   //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                   //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                   //                                       '</div>' +
                   //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');
       
       
       
       
       
                   Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
                   Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                                //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                                 //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">1234567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Name</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                    '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:14px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">1234567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Name</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/00/0000</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                             '</div>' +
       
       
       
       
                                                  '</div>');
                   //  '<div style="width:100%;text-align:right;
       
       
       
               }
               
              // htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemCardLevel
               Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemName').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)" >Card Name:'+MembershipCardName+'</div>');
               Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemCardLevel').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)" >Card Level:'+MembershipCardType+'</div>');
               Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;black;text-align:center;" >Price (RM):'+MembershipCardFee+' ('+MembershipCardFeePaymentCycle+')</div>');
       
               global_FloatPanel_MembershipCardList_NotYetSubscribed_CardName=MembershipCardName;
       global_FloatPanel_MembershipCardList_NotYetSubscribed_CardLevel=MembershipCardType;
       global_FloatPanel_MembershipCardList_NotYetSubscribed_CardPaymentPlan=MembershipCardFee;
       global_FloatPanel_MembershipCardList_NotYetSubscribed_CardPrice=MembershipCardFeePaymentCycle;
       
       
       
       
       
       
               
               Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Carousel').setHidden(false);
       
               var MembershipCode = MmcCode[0];
               var MembershipCardTypes = MembershipCardLevels[0];
               _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCode;
       
               FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCalculateRating(_FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo,MembershipCode)
             //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
               //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
               Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribed_Loading').setHidden(true);
               Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');
       
       
               Ext.Viewport.setMasked(false);
             
                console.log('Stores updated based on loaded membership card data.');
            } else {
                console.log('Failed to load membership card data or no records returned.');
            }
        }
    });




//     var task = Ext.create('Ext.util.DelayedTask', function () {
//         _DataStore_MembershipCardAyohaUserMembershipCardStore=_DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore;
//         //////Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
//         //////    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
//         //////    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
//         //////    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
//         //////    MembershipCardCode: MembershipCardCode
//         //////});
//         // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
//         //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
//         //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
//         //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
//         /////// var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
//         var count = _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getCount();
//          var MembershipCardName;var MembershipCardFee;var MembershipCardFeePaymentCycle;

//         for (i = 0; i < count; i++) {
//             var modelRecorded = _DataStore_AyohaStore_CheckOut_LoadByMembershipCardCodeStore.getAt(i);
//             var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
//             var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
//             var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
//             var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
//             var MembershipCardType = modelRecorded.get('MembershipCardType');
//             var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
//             var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
//             var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
//             var MembershipCardCode = modelRecorded.get('MembershipCardCode');
//             var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');


//             MembershipCardName = modelRecorded.get('MembershipCardName');
//             MembershipCardFee= modelRecorded.get('MembershipCardFee');
//             MembershipCardFeePaymentCycle = modelRecorded.get('MembershipCardFeePaymentCycle');
//             global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName = modelRecorded.get('EnterprisesName');
//             global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
//             global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesTagLine = modelRecorded.get('EnterprisesTagLine');
//             globalFloatPanelMerchantDetailPage_EnterpriseLogo= modelRecorded.get('EnterprisesLogo');
//             globalFloatPanelMerchantDetailPage_EnterpriseName= modelRecorded.get('EnterprisesName');
//             global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName= modelRecorded.get('EnterprisesName');
//             MmcCode.push(MembershipCardCode);
//             MembershipCardLevels.push(MembershipCardType);
//             //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
//             //       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
//             //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
//             //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
//             //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//             //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//             //                                       '</div>' +
//             //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





//             Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHidden(false);
//             Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
//                                          //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
//                                                           //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
//      // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">1234567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Name</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//                                              '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:14px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">1234567</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Name</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/00/0000</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//                                                                                       '</div>' +




//                                            '</div>');
//             //  '<div style="width:100%;text-align:right;



//         }
        
//        // htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemCardLevel
//         Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemName').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)" >Card Name:'+MembershipCardName+'</div>');
//         Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemCardLevel').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3)" >Card Level:'+MembershipCardType+'</div>');
//         Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;black;text-align:center;" >Price (RM):'+MembershipCardFee+' ('+MembershipCardFeePaymentCycle+')</div>');

//         global_FloatPanel_MembershipCardList_NotYetSubscribed_CardName=MembershipCardName;
// global_FloatPanel_MembershipCardList_NotYetSubscribed_CardLevel=MembershipCardType;
// global_FloatPanel_MembershipCardList_NotYetSubscribed_CardPaymentPlan=MembershipCardFee;
// global_FloatPanel_MembershipCardList_NotYetSubscribed_CardPrice=MembershipCardFeePaymentCycle;






        
//         Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Carousel').setHidden(false);

//         var MembershipCode = MmcCode[0];
//         var MembershipCardTypes = MembershipCardLevels[0];
//         _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCode;

//         FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCalculateRating(_FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo,MembershipCode)
//       //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
//         //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
//         Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribed_Loading').setHidden(true);
//         Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


//         Ext.Viewport.setMasked(false);










//     });
//     task.delay(1000);




}










var global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName;
var global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo;
var global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesTagLine;
function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo,MembershipCardCode) {
  
    
    MmcCode.length = 0;
    //Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: EnterpriseAccountNo,
    //    EnterpriseHQAccNo: EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').load();

    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccountNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseHQAccountNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMembershipCardCode');
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccountNo,
            EnterpriseHQAccNo: EnterpriseHQAccountNo,
            AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
            MembershipCardCode: MembershipCardCode
        });
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
       // var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore');
        var count = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getCount();
       

        var modelRecorded = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getAt(0);
        var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
        var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
        var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
        var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
        var MembershipCardType = modelRecorded.get('MembershipCardType');
        var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedAyohaUserAccountNo');
        var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
        var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
        var MembershipCardCode = modelRecorded.get('MembershipCardCode');
        var ModifiedMembershipNo = modelRecorded.get('ModifiedMembershipNo');
        var ValidUntilDateMonthYearOnly = modelRecorded.get('ValidUntilDateMonthYearOnly');

        var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
        var ModifiedMemberSinceDate = modelRecorded.get('ModifiedMemberSinceDate');
        var MembershipCardBackgroundImg_back = modelRecorded.get('MembershipCardBackgroundImg_back');

        global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesName = modelRecorded.get('EnterprisesName');
        global_FloatPanel_MembershipCardList_NotYetSubscribed_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
        globalFloatPanelMerchantDetailPage_EnterpriseLogo= modelRecorded.get('EnterprisesLogo');
            globalFloatPanelMerchantDetailPage_EnterpriseName= modelRecorded.get('EnterprisesName');
        
        MmcCode.push(MembershipCardCode);

       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_0').setHidden(false);
       Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_0').setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                     //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                      //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
 // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                         '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-7px 0px 0px 0px;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMembershipNo + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMemberSinceDate + '</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                  '</div>' +




                                       '</div>');
       // Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_1').setHidden(false);
       // Ext.getCmp('carouselFloatPanel_MembershipCardList_NotYetSubscribed_1').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg_back + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border-color:white;border-style:solid;border-width:1px;"/>');

        Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Carousel').setHidden(false);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">' + MembershipCardType + '</div>');

        var MembershipCode = MmcCode[0];
        _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode = MembershipCode;
       // alert(MembershipCode)
        FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_NotYetSubscribed_Loading').setHidden(true);

        _FloatPanel_MembershipCardList_NotYetSubscribed_isFirstLoad = "Y";

        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}

function FloatPanel_MembershipCardList_NotYetSubscribed_StampCampaignLoadByEnterpriseAccNoStore(EnterpriseAccountNo) {
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





    });
    task.delay(2000);
}




function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MMCCode) {
  
  //  Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').removeAll();
    _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.removeAll();
   



    var mmmCode = MMCCode;
    if (mmmCode) {

        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MMCCode);
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode');
      

        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load({
            callback: function (records, operation, success) {
                if (success) {
                    console.log('Store loaded successfully, total records: ' + records.length);
        
                    var Count = _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getCount();

                    var heightlist =(Count *100)-20;
                            Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_Campaignlist').setHeight(heightlist)
                       
                          //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
                         // FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCalculateRating(MMCCode);
                    
                         FloatPanel_MembershipCardList_NotYetSubscribed_loadEnterprise();
                          LoadingPanelHide();


                  
                } else {
                    console.error('Failed to load store data.');
                    LoadingPanelHide();
                }
            }
        });





    }
}


function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo) {
   

    if (MembershipCode) {

    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCode);
    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccountNo);
    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledLoadByMembershipCardCode');
    
    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
              
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });
    }





    // if (MembershipCode) {
    //     Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //         MembershipCardCode: MembershipCode,
    //         EnterpriseHQAccNo: EnterpriseAccountNo,
    //     });
    //     Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    //     var task = Ext.create('Ext.util.DelayedTask', function () {
    //         Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //             MembershipCardCode: MembershipCode,
    //             EnterpriseHQAccNo: EnterpriseAccountNo,
    //         });
    //         Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    //         var myStore = Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore');
    //         var StampCount = myStore.getCount();

    //         //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
    //         // adjustHeight();
    //         Ext.Viewport.setMasked(false);

    //     });
    //     task.delay(2000);
    // }
}





// function MembershipCardDelete() {
  

//     var obj = {
//         "ID": _FloatPanel_MembershipCardList_NotYetSubscribed_ID,
//         "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
//         "MembershipCardCode": _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode,
//         "CreatedBy": GetCurrentUserLogin(),

//     };
   
//     var _value = Ext.Ajax.request({

//         type: "POST",

//         url: GetAPIurl() + '/Memberships/MembershipsDelete',

//         dataType: "json",
//         data: JSON.stringify(obj),
//         headers: {
//             "Content-Type": "application/json; charset=utf-8"
//         },

//         success: function (result, request) {

//             //console.log(result.responseText);


//             data = Ext.decode(result.responseText.trim());

//             if (data.success == "true") {

//                 swalFireSuccess("Delete Membership Card Success!");
//                 FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();
//                 FloatPanel_MembershipCardList_NotYetSubscribedHide();
//                 //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

//               //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

//             }
//             else {

//                 swalFireFail("Delete Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
//             }
//             Ext.Viewport.unmask();

//         },

//         failure: function (result, request) {
//             Ext.Viewport.unmask();
//             swalFireFail("Delete Failed!!");
//         }

//     });
// }




function getMembershipCard() {


}





function GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_NotYetSubscribedBottom() {
 
    FloatPanel_MembershipCardManagement_TermAndConditionShow();
    return;




    //var obj = {
    //    "CampaignEnterpriseAccNo": _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo,
    //    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
    //    //"MembershipByMethod": "AyohaStoreRequest",
    //    "MembershipByMethod": GetMembershipByMethod(),        
    //    "ReferalSubscriberAccNo": "NA",
    //    "MembershipCardCode": _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode,
    //    "CreatedBy": GetCurrentUserLogin(),

    //};
    //console.log(obj);
    //var _value = Ext.Ajax.request({

    //    type: "POST",

    //    url: GetAPIurl() + '/Memberships/MembershipsInsert',

    //    dataType: "json",
    //    data: JSON.stringify(obj),
    //    headers: {
    //        "Content-Type": "application/json; charset=utf-8"
    //    },

    //    success: function (result, request) {

    //        data = Ext.decode(result.responseText.trim());

    //        if (data.success == "true") {

    //            swalFireHoorayMessage("Membership Process Successfully!,Please Check your Card in Membership Card List.");
    //            FloatPanel_MembershipCardList_NotYetSubscribedHide();
    //            FloatPanel_RewardStoreMembershipCardHide();
    //            //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

    //            //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

    //        }
    //        else {

    //            swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
    //        }
    //        Ext.Viewport.unmask();

    //    },

    //    failure: function (result, request) {
    //        Ext.Viewport.unmask();
    //        swalFireFail("Delete Failed!!");
    //    }

    //});
}











function FloatPanel_MembershipCardList_NotYetSubscribed_LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore(MCC) {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        MembershipCardCode: MCC
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
            MembershipCardCode: MCC
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore');
        //_DataStore_LoyaltyStampLoadBySubscriberAccNoStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        //StampCount = myStore.getCount();
        //if (isFloatPanel_LoyaltyCard_StampHistoryOpen == 'Y') {
        //    Ext.getCmp('htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        //}

        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);




}





function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore() {
    
  
    Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
        MMC: _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode,
        EnterprisesAccNo:_FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo
    });
    Ext.StoreMgr.get('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
            MMC: _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode,
            EnterprisesAccNo: _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo
        });
        Ext.StoreMgr.get('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore');
        //_DataStore_LoyaltyStampLoadBySubscriberAccNoStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        //var StampCount = myStore.getCount();
        //alert(StampCount);
        //if (isFloatPanel_LoyaltyCard_StampHistoryOpen == 'Y') {
        //    Ext.getCmp('htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        //}

        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(800);




}






function FloatPanel_MembershipCardList_NotYetSubscribed_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore() {






    Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').getProxy().setExtraParams({
        AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
        EnterprisesAccNo: _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo,
        MCC: _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode,
       
    });
    Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').getProxy().setExtraParams({
            AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
            EnterprisesAccNo: _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo,
            MCC: _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode,
           
        });
        Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').load();
        var myStore = Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore');
        count = myStore.getCount();
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);


}







function FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStore() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_MembershipCardList_NotYetSubscribed";
   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';





    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo);


    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();

    console.log(_FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo)
    console.log(GetCurrAyohaUserAccountNo())


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
        //  FloatPanel_OrderCartHide();
       // FloatPanel_RewardStore_OpenStore_FromFloatPanel_MembershipCardList_NotYetSubscribed(ID);
        FloatPanel_RewardStore_OpenStore_FromFloatPanel_MembershipCardList_Upgrade(ID);
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}















function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCalculateRating(EnterpriseAccNo,ItemCodeReview) {
    FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(ItemCodeReview);



}



function resetBoxes() {
    const cards = document.querySelectorAll('.membership-card-container');
    cards.forEach(card => {
        card.classList.remove('selected');
    });
}

var globalFloatPanel_MembershipCardList_NotYetSubscribed_price;
var globalFloatPanel_MembershipCardList_NotYetSubscribed_plan;
var globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode;
function changeBackground(event,price,plan,paymentCycleCode) {
    // resetBoxes();
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_price="";
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_plan="";
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode="";
    // const card = event.currentTarget;
    // card.classList.add('selected');
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_price=parseFloat(price);
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_plan=plan;  
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode=plan;
}


function changeBackgroundfromdataload(cardElement, price, plan, paymentCycleCode) {
   // resetBoxes();

    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = "";
    globalFloatPanel_MembershipCardList_NotYetSubscribed_plan = "";
    globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode = "";
    cardElement.classList.add('selected');
    // if (cardElement) {
        
    // }

    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = parseFloat(price);
    globalFloatPanel_MembershipCardList_NotYetSubscribed_plan = plan;
    globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode = plan;
}
function FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore(EnterpriseAccNo,MembershipCardCode){
    // var PaymentPlanCode=EnterpriseAccNo+'-'+MembershipCardCode
    // _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    // _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    // //_DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardPaymentPlan/MembershipCardPaymentPlanLoadByPaymentPlanCode');
    // _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion');
    
    // _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.load();

    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //     var count = _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getCount();
      
    //     FloatPanel_MembershipCardList_NotYetSubscribed_loadEnterprise()

    //     LoadingPanelHide();


    // });
    // task.delay(500);




    var PaymentPlanCode = EnterpriseAccNo + '-' + MembershipCardCode;
   // alert(PaymentPlanCode)
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMerchantVersion');
    
    _DataStore_MembershipCardPaymentPlanLoadByPaymentPlanCodeStore.load({
        callback: function (records, operation, success) {
            if (success) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                // Loop through all records
                records.forEach(function (record) {
                    var planCode = record.get('PaymentPlanCode');
                    var fee = record.get('ModifiedMembershipCardFee');
                    var cycle = record.get('MembershipCardFeePaymentCycle');
    
                    console.log('Plan Code:', planCode);
                   //alert('Fee:'+ fee);
                    console.log('Cycle:', cycle);
                    globalFloatPanel_MembershipCardList_NotYetSubscribed_price = parseFloat(fee);
                    globalFloatPanel_MembershipCardList_NotYetSubscribed_plan = cycle;
                    globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode = cycle;
    
                    // You can also trigger UI actions here like:
                  // changeBackground(null, fee, cycle, 1);
                    //changeBackground
                    changeBackgroundfromdataload(document.querySelector('.membership-card-container'), fee, cycle, 1);
                    //changeBackground(event,{MembershipCardFee},`{MembershipCardFeePaymentCycle}`,`{1}`)
                });
    
                // Optionally continue your task after loading
             
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data.');
                LoadingPanelHide();
            }
        }
    });
    






}


function FloatPanel_MembershipCardList_NotYetSubscribed_loadEnterprise(){
  Ext.getCmp('FloatPanel_MembershipCardList_NotYetSubscribed_CarouselEntitleReward_EntitleEnterprise').setActiveItem(1);
    FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode, _FloatPanel_MembershipCardList_NotYetSubscribed_EnterpriseAccNo);
    Ext.getCmp('htmlMembershipTxt02').setHtml('<font size=1 color=purple><b><u>Membership</u></b></font>');
    Ext.getCmp('htmlEntitleOutletTxt').setHtml('<font size=1 color=purple><b><u>Entitle Outlet</u></b></font>');
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    Ext.getCmp('htmlMembershipTxt').setHtml('<font size=1 color=grey>Membership</font>');
    Ext.getCmp('htmlPrivillageTxt').setHtml('<font size=1 color=grey>Privillage</font>');

    if (MembershipTag == 'NO') {
        return;
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                        
    Ext.getCmp('htmlCardTxt01').setHtml('<font size=1 color=grey>Card</font>');
    Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=grey>Transaction</font>');
    Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=grey>Card Detail</font>');
    Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=grey>Info</font>');
    Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=grey>Unsubscribe</font>');
    Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=grey>Membership Card</font>');
    Ext.getCmp('btnFloatPanel_MembershipCardList_NotYetSubscribed_EntitiledReward').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Entitle Outlet</u></div>');
   


}







function FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert() {
    
   
   globalFloatPanel_AyohaStore_Cart_TotalSumPrice=globalFloatPanel_MembershipCardList_NotYetSubscribed_price;
  globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge=0.00;
 
      var task = Ext.create('Ext.util.DelayedTask', function () {
  
        
          globalFloatPanel_AyohaStore_Cart_MerchantSumStamp=MerchantSumStamp;
  
          var objn = {
              "ID": 0,
             // "ItemCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
              "ItemCode": globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
              "ItemQuantity": 1,
              "ItemSumPrice": globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
              "ItemCartStatus": "NewCart",
              "CreatedBy": GetCurrAyohaUserAccountNo(),
              "EnterpriseAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
              "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
              "LoyaltyRewardType": "MembershipCard",
              "MerchantSumPoint": 0.00,
              "AyohaSumPoint": 0.00,
              "MerchantSumStamp": 0.00,
              "MerchantPoint": 0.00,
              "AyohaPoint": 1,
              "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
              "ItemCartCode": globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode+'-'+globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode,
          };
        //  console.log(objn)
          var _value = Ext.Ajax.request({
  
              type: "POST",
  
              url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartInsertUpdate',
  
              dataType: "json",
              data: JSON.stringify(objn),
              headers: {
                  "Content-Type": "application/json; charset=utf-8"
              },
  
              success: function (result, request) {
  
                  //console.log(result.responseText);
  
  
                  data = Ext.decode(result.responseText.trim());
  
                  if (data.success == "true") {
  
                      //FloatPanel_AyohaStore_SaleItemDetailHide();
                     
                      var task = Ext.create('Ext.util.DelayedTask', function () {
                       // FloatPanel_MembershipCardList_NotYetSubscribed_SubscriptionsInsertUpdate();
                     //  alert(globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType);
                       FloatPanel_AyohaStore_CheckOut_MembershipCardShow();
                        //FloatPanel_MembershipCardList_NotYetSubscribed_CheckOutShow();
                      });
                      task.delay(150);
  
                    
  
  
  
                    // LoadingPanelHide();
  
  
                  }
                  else {
                     
                      swalFireFail("Fail!->" + result.responseText.trim());
                      Ext.Viewport.unmask();
                      LoadingPanelHide();
                  }
                  Ext.Viewport.unmask();
  
              },
  
              failure: function (result, request) {
                 
                  swalFireFail("Fail!" + result.responseText.trim());
                  Ext.Viewport.unmask();
                  LoadingPanelHide();
              }
  
          });
        
          Ext.Viewport.unmask();
      });
      task.delay(500);
  
  
    
  }

  function FloatPanel_MembershipCardList_NotYetSubscribed_SubscriptionsInsertUpdate(){
    // V.SubscriptionCode, V.SubscriberAccNo,
    //        V.MerchantAccNo, V.SaleItemsCode,V.SubscriptionStatus,
    //         V.ModifiedBy

  


    var objn = {

        "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "MerchantAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
        "SaleItemsCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "SubscriptionStatus": "Pending-Payment",
        "ModifiedBy": GetCurrAyohaUserAccountNo(),
        "SubscribedPackage":globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode,
        "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
    };
 console.log(objn)
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Subscriptions/SubscriptionsInsert',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {
            data = Ext.decode(result.responseText.trim());
          
            if (data.success == "true") {
                FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert();
                
              LoadingPanelHide();
              return;
            //  FloatPanel_AyohaStore_AyohaPointCollectedAnimHide();
            }
            else {
               // alert( data.message)
                LoadingPanelHide();
                swalFireLoginFailed("Subscribtion Failed!" + data.message);
               
            }


        },

        failure: function (result, request) {
            LoadingPanelHide();
         // alert( data.message)
            swalFireLoginFailed("Subscribtion failure!" + result.responseText.trim());

        }

    });
}


function FloatPanel_MembershipCardList_NotYetSubscribed_CheckExistSubscriptionCode(){
 //alert(GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode)


 LoadingPanelShow("resources/icons/invoice.gif", "Add to Bill...");


//  if (isFloatPanel_OrderCartOpen == 'N')
//  {
//     if(globalFloatPanel_MembershipCardList_NotYetSubscribed_plan !="FOC"){
//         swalFireFail("Select Membership Payment Plan!");
//         LoadingPanelHide();
//         return;
//     }else{
        
//     }
//  }



//  alert(globalFloatPanel_MembershipCardList_NotYetSubscribed_price);
//alert(globalFloatPanel_MembershipCardList_NotYetSubscribed_plan);
//    alert(globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode);
 var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
             "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
             "SubscribedPackage":globalFloatPanel_MembershipCardList_NotYetSubscribed_plan
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Subscriptions/SubscriptionscheckBySubscriptionCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                  var count=parseInt(data.results[0].SubscriptionCodeCount);
                // alert(count);
                    if (count > 0) {
                       // alert('Already Exsit')
                      //  swalFireFail("Already Exist!");
                       // FloatPanel_AyohaStore_CheckOut_MembershipCardShow();
                       FloatPanel_MembershipCardList_NotYetSubscribed_AyohaStoreCart_Insert();
                        return;
                    }else{
                        FloatPanel_MembershipCardList_NotYetSubscribed_SubscriptionsInsertUpdate();
                    }


                  


                }
                else {
                   
                   swalFireFail("Fail!->" + result.responseText.trim());
                   LoadingPanelHide();
                    Ext.Viewport.unmask();
                  
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
               
                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
      
        Ext.Viewport.unmask();
    });
    task.delay(500); 
}

  function FloatPanel_MembershipCardList_NotYetSubscribed_CheckOutShow() {


    Ext.Viewport.remove(_FloatPanel_AyohaStore_CheckOut_MembershipCard);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_CheckOut_MembershipCard());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_CheckOut_MembershipCardHide()");
    isFloatPanel_AyohaStore_CheckOut_MembershipCardOpen = 'Y';
   //alert("FloatPanel_AyohaStore_CheckOutShow");
    Ext.getCmp('FloatPanel_AyohaStore_CheckOut_MembershipCardPurchasedItem_FromCart').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardTitleHeaderTxt').setHidden(false);
    FloatPanel_AyohaStore_CheckOut_MembershipCardAyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = "N";
   // alert(FloatPanel_AyohaStore_getEnterpriseName())
    globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge = 0.00;
    globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode = "";
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardEnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardEnterpriseLogo').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" style="width:72px;height:72px;border-radius:50%"/></div>');

    var TotalSumPrice = parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice);
    var DelCharge = parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardDeliveryTypeName').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">(' + globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName + ')</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardDelivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + DelCharge.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardTotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalItemQuantity + '</div>');
    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardDelivery').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge + '</div>');
  //bukak balik 15/7/2023
  /////  Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
  //alert(globalFloatPanel_AyohaStore_Cart_GrandTotal)
    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('MembershipDiscount') + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardVoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
    
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardSubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + TotalSumPrice.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardGrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2) + '</div>');
    //alert(globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2))
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardAyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:blue;" onclick="FloatPanel_AyohaReward_PointTransactionsShow();"><u>' + globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint + '</u></div>');

    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardStampedCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp + '</div>');




    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipCardMembershipDiscountPrice.toFixed(2)+'</div>');
    // globalFloatPanel_AyohaStore_CheckOut_MembershipCarddiscountAmount=0.00;
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMembershipDiscountLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipCardMembershipDiscountPercent.toFixed(2)+'% - Membership Discount(RM):</div>');
 


  ///////  Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher!</font> - Voucher Discount(RM):</div>');

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardVoucherDiscountLabel').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length + ' Voucher Used</font> - Voucher Discount(RM):</div>')
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardVoucherDiscountLabel').setMargin('-1 0 0 0');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardVoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>')
        //console.log(DelCharge);
        var tempGrandTotal = parseFloat(TotalSumPrice.toFixed(2)) + DelCharge;
       // var xxx = (tempGrandTotal - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher));
        globalFloatPanel_AyohaStore_Cart_GrandTotal = (tempGrandTotal - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher));
        
       
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardGrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2) + '</div>');
    
       
    
    
        
    
    }
    



    globalFloatPanel_AyohaStore_CheckOut_MembershipCardGrandTotal = globalFloatPanel_AyohaStore_Cart_GrandTotal;
    FloatPanel_AyohaStore_DeliveryAddress_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();
    
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOption_CancelOrder').setHidden(true);
    Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOption_OrderOnly').setHidden(false);

    var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOnly = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOnly]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOnly = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOnly.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardOrderOnly.on('tap',
      function (event, node, options, eOpts) {

          // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
          FloatPanel_AyohaStore_CheckOut_MembershipCardOrderOnly_SendOrder();
      }
    );

    globalFloatPanel_AyohaStore_CheckOut_MembershipCardOrderStatus = "CheckOut";

    var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardConfirmPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardConfirmPay]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardConfirmPay = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardConfirmPay.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardConfirmPay.on('tap',
      function (event, node, options, eOpts) {

          
          Staging_FloatPanel_AyohaStore_CheckOut_MembershipCardAyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert();

         
      }
    );

    

    var containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod_AyohaeWalletInner_AddeWallet = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod_AyohaeWalletInner_AddeWallet]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod_AyohaeWalletInner_AddeWallet = containerViewnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod_AyohaeWalletInner_AddeWallet.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod_AyohaeWalletInner_AddeWallet.on('tap',
      function (event, node, options, eOpts) {


          FloatPanel_AyohaeWalletShow();
         


      }
    );

    

    if (globalFloatPanel_AyohaStore_Cart_LoyaltyRewardType == "Stamp Reward Loyalty Card") {
        globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = 0.00;
        localStorage.setItem("MerchantPointEarn", "0.00");
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMerchantPointEarnLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:blue;"><u>Total Stamp Earn:</u></div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardMerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:blue;"><u>' +parseInt(globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint) + '</u></div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipCardAyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:blue;"><u>' + globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint + '</u></div>');

    }


   
  FloatPanel_AyohaStore_CheckOut_MembershipCardAyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
    globalFloatPanel_AyohaStore_Cart_GrandTotal = 0.00;
















    return;

 
}


function FloatPanel_MembershipCardList_NotYetSubscribed_RateAndReview(RateReviews,Reviewer){
    

   
    Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_TotalReviewsOutter').setHtml('<div  style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:normal;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:8px;height:8px;">&nbsp;&nbsp;&nbsp;'+Reviewer+' Reviews</div>');
    Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_ReviewAndRateCountOutter').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">'+RateReviews+'</div>');
    if (RateReviews == 5) {                           
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
       
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');


        

    }
    if ((RateReviews >= 4) && (RateReviews < 5)) {
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');

        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



        if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="12" height="12" alt="Company Name"></div>');



            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
        }
        if (RateReviews == 4.5) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="12" height="12" alt="Company Name"></div>');
       
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
       
       
        }
        if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="12" height="12" alt="Company Name"></div>');
       
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
       
       
       
        }
        if (RateReviews == 4.9) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="12" height="12" alt="Company Name"></div>');
       
                                  
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
       
       
        }



    }
    if ((RateReviews >= 3) && (RateReviews < 4)) {

        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');


        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



        if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');


            
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        }
        if (RateReviews == 3.5) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');


            
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


        }
        if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        
        
            
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        
        
        }
        if (RateReviews == 3.9) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        
        
                                        
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        
        }



    }
    if ((RateReviews >= 2) && (RateReviews < 3)) {


        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');

                                        
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



        if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
      
      
                                        
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
      
      
        }
        if (RateReviews == 2.5) {

            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
       
                                       
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
       
       
        }
        if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
       
       
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
       
       
        }
        if (RateReviews == 2.9) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');

       
                                  
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
       
        }





    }
    if ((RateReviews >= 1) && (RateReviews < 2)) {

        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');


        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



        if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');


            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

        }
        if (RateReviews == 1.5) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');

     
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
     
        }
        if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
      
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
      
      
        }
        if (RateReviews == 1.9) {
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
            Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
       
       
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
            // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
       
        }

    }
    if ((RateReviews >= 0) && (RateReviews < 1)) {

        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star2Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');
        Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="12" height="12" alt="Company Name"></div>');

                                   
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
        // Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

    }


    LoadingPanelHide();






    return;
   

    if (RateReviews == 5) {
        _value = '<img src="resources/icons/star.png" alt="Image" style="width:17px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">';

    }
    if ((RateReviews >= 4) && (RateReviews < 5)) {
        _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';


        if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {
           // _value = '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:1px;color:black;font-weight:bold;overflow:hidden;margin:-15px 5px 0px 0px;" ><img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;&nbsp;&nbsp;&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;"></div>';
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">';

        }
        if (RateReviews == 4.5) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">';

        }
        if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">';
            
        }
        if (RateReviews == 4.9) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">';

        }



    }
    if ((RateReviews >= 3) && (RateReviews < 4)) {
        _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if (RateReviews == 3.5) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if (RateReviews == 3.9) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }



    }
    if ((RateReviews >= 2) && (RateReviews < 3)) {
        _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if (RateReviews == 2.5) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if (RateReviews == 2.9) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }





    }
    if ((RateReviews >= 1) && (RateReviews < 2)) {
        _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointThree.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if (RateReviews == 1.5) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointFive.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }
        if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointSeven.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;('+RateReviews+')&nbsp;-';

        }
        if (RateReviews == 1.9) {
            _value = '<img src="resources/icons/star.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/StarpointNine.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

        }

    }
    if ((RateReviews >= 0) && (RateReviews < 1)) {
        _value = '<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">&nbsp;<img src="resources/icons/reviewstarunrate.png" alt="Image" style="width:12px;height:12px;">';

    }
    _value = _value.replace(/width:12px;height:12px;/g, 'width:14px;height:14px;');
    Ext.getCmp('htmlFloatPanel_MembershipCardList_NotYetSubscribed_Star1Outter').setHtml('<div>'+_value+'</div>');
  

   // return _value
}

