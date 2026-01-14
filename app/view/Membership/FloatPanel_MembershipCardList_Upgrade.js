




Ext.define('BuskartApp.view.Membership.FloatPanel_MembershipCardList_Upgrade', {

});

var _FloatPanel_MembershipCardList_Upgrade;
var _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo;
var _FloatPanel_MembershipCardList_Upgrade_MembershipCode;
var Index=0;
var isFloatPanel_MembershipCardList_UpgradeOpen = 'N';

var CarouselIndex = 0;

var _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "N";







function FloatPanel_MembershipCardList_Upgrade() {

    _FloatPanel_MembershipCardList_Upgrade =
    Ext.create('Ext.Panel', {
        zIndex: 320,
        xtype: 'container',
        //height: 465,
       height: '100%',
      // height: '95%',
        width: '100%',
        id: 'FloatPanel_MembershipCardList_UpgradeID',
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
      

        items: [
            {

                xtype: 'container',
                width: '100%',
                docked: 'bottom',
                height: 40,
                //hidden:true,
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,
                //margin: '10 0 0 0',
                id: 'containerFloatPanel_MembershipCardList_UpgradeBottom',
                name: 'clickableContainerFloatPanel_MembershipCardList_UpgradeBottom',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                style: 'border-bottom:2px none #D25959;background-color:transparent',
                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
                layout: {
                    type: 'fit',
                    //pack: 'center',
                    //align: 'center',
                },
                // hidden:true,
                items:
                       [

                            {
                                //xtype: 'button',
                                ////  align: 'stretch',

                                //ui: 'plain',
                                // width: '100%',
                                margin:'2 0 0 0',
                                height: 40,
                                id: 'btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard',
                                //hidden: true,
                              
                                html: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card !!!</button></div>',
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
     id: 'btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard',
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

                id: 'containerFloatPanel_MembershipCardList_UpgradeHeader',
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
                                         id: 'btnFloatPanel_MembershipCardList_UpgradeBack',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             FloatPanel_MembershipCardList_UpgradeHide();

                                             //FloatPanel_MembershipCardList_Upgrade_AddCardHide();
                                             //_FloatPanel_MembershipCardList_Upgrade.hide(Ext.fx.Animation({
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
                                           margin: '-8 0 0 0',                                          
                                           id: 'htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt',
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
                                                    _FloatPanel_MembershipCardList_Upgrade.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'right',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    isFloatPanel_MembershipCardList_UpgradeOpen = 'N';
                                                    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "N";
                                                    RemovePages("FloatPanel_MembershipCardList_UpgradeHide()");
                                                }
                                            },












                       ]

            },



            {

                xtype: 'container',
                width: '100%',
                // width: 40,
                docked: 'bottom',
                height: 55,
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottomOutter',
                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top: 1px solid grey;',

               // width: 100% !important; height: 55px !important; background-image: url(&quot;resources/icons/border5.png&quot;); background-size: 100% 100%; border-top: 1px solid grey;
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
                               id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottomInner',
                               width: '100%',
                               style: "background-color: transparent",
                               height: 55,
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
                                       height: 55,
                                       layout: {
                                           type: 'hbox',
                                           pack: 'center',
                                           align: 'center',
                                       },
                                       items: [

                                        {
                                            xtype:'spacer',
                                            width:10
                                            },

                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',
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
                                                        id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',
                                                        //  badgeText: '1',
                                                        margin: '2 0 0 0',

                                                        height: 30,
                                                        width: 30,
                                                        html: '<img src="resources/icons/EntitleReward.png" width="24" height="24" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {

                                                            MoveMembeshipCarousel(0);
                                                           

                                                         
                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_MenuBottom_EntitleRewardTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-5 0 0 0',
                                                                id: 'htmlMembershipTxt',
                                                               // html: '<font size=1 color=purple><b><u>Membership</u></b></font>'
                                                               html:'<div style="color:purple;text-align: center;font-size:8px;width:100%;font-weight:bold"><u>Membership</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-20px 0px 0px 0px"><u>Privillage</u></div>',
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                id: 'htmlPrivillageTxt',
                                                                hidden:true,
                                                                html: '<font size=1 color=purple><b><u>Privillage</u></b></font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },
                                           {
                                            xtype:'spacer',
                                            width:10
                                            },
                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',
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
                                                        id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',
                                                        //  badgeText: '1',
                                                        margin: '2 0 0 0',

                                                        height: 30,
                                                        width: 30,
                                                        html: '<img src="resources/icons/EnttileOutlet.png" style="width:24px;height:24px;margin:0px 0px 0px -5px">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            MoveMembeshipCarousel(1);
                                                           
                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutletTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                              //  margin: '-15 0 0 0',
                                                                margin: '-5 0 0 0',                                                                
                                                                width: '100%',
                                                                id: 'htmlMembershipTxt02',
                                                              html:'<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Entitle</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>',
                                                            //  html: '<div style="font-size:10px;color:grey;width:100%;height:30px;background-color:transparent;text-align:center">Memberships Entitle Outlets</div>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                hidden:true,
                                                                id: 'htmlEntitleOutletTxt',
                                                                html: '<font size=1 color=grey>Outlets</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },
{
xtype:'spacer',
width:10
},

                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStore',
                                               //width: '33%',
                                               //height: 30,
                                               margin: '0 0 0 0',
                                               flex: 1,
                                               style: "background-color: transparent",
                                               //style: "background-color: #F35B57;",

                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'end',
                                                   align: 'center'

                                               },
                                               items: [

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStore',
                                                        //  badgeText: '1',
                                                        margin: '2 0 0 0',

                                                        height: 30,
                                                        width: 30,
                                                        html: '<img src="resources/icons/AyohaStorePurple.png" style="width:24px;height:24px;margin:0px 0px 0px -5px">',
                                                       // html: '<img src="resources/icons/AyohaStorePurple.png" width="22" height="22" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                           // FloatPanelMerchantDetailPage_AyohaStore();
                                                            FloatPanel_MembershipCardList_Upgrade_AyohaStore();

                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStoreTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'start',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-5 0 0 0',
                                                                width: '100%',
                                                                id: 'htmlAyohaStoreTxt01',
                                                                html:'<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>',
                                                               // html: '<font size=1 color=grey>Ayoha</font>'
                                                               // html: '<div style="font-size:10px;color:grey;width:100%;height:30px;background-color:transparent;text-align:center">Ayoha Store</div>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                hidden:true,
                                                                //id: 'htmlTransactionTxt',
                                                                html: '<font size=1 color=grey>Store</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },
                                           {
                                            xtype:'spacer',
                                            width:10
                                            },
                                            
                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',
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
                                                        id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',
                                                        //  badgeText: '1',
                                                        margin: '2 0 0 0',

                                                        height: 30,
                                                        width: 30,
                                                        html: '<img src="resources/icons/MembershipCardTransaction.png" style="width:24px;height:24px;margin:0px 0px 0px -5px">',
                                                      //  html: '<img src="resources/icons/MembershipCardTransaction.png" width="26" height="26" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            MoveMembeshipCarousel(2);
                                                          


                                                        }
                                                    },
                                                    {
                                                        xtype: 'container',
                                                        id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransactionTxt',
                                                        width: '100%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'start',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                margin: '-5 0 0 0',
                                                                id: 'htmlCardTransactionTxt01',
                                                                html:'<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>',
                                                               // html: '<font size=1 color=grey>Card</font>'
                                                            },
                                                            {
                                                                margin: '-12 0 0 0',
                                                                hidden:true,
                                                               // id: 'htmlTransactionTxt',
                                                                html: '<font size=1 color=grey>Transaction</font>'
                                                            },
                                                        ]

                                                    },


                                               ]
                                           },

                                           {
                                            xtype:'spacer',
                                            width:10
                                            },
                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',
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
                                                  id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',
                                                  //  badgeText: '1',
                                                                                              
                                                  margin: '2 0 0 0',

                                                  height: 30,
                                                  width: 30,
                                                  html: '<img src="resources/icons/MembershipCardDetail.png" style="width:24px;height:24px;margin:0px 0px 0px -5px">',
                                               
                                                  ui: 'plain',
                                                  handler: function () {
                                                      MoveMembeshipCarousel(3);
                                                      
                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfoTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-5 0 0 0',
                                                          id: 'htmlCardDetailTxt',
                                                          html:'<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>',
                                                        //  html: '<font size=1 color=grey>Card Detail</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          //id: 'htmlInfoTxt',
                                                          hidden:true,
                                                          html: '<font size=1 color=grey>Info</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },
                                     {
                                        xtype:'spacer',
                                        width:10
                                        },

                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',
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
                                                  id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',
                                                  //  badgeText: '1',
                                                  margin: '2 0 0 0',

                                                  height: 30,
                                                  width: 30,
                                                  html: '<img src="resources/icons/shakeHand01.png" style="width:24px;height:24px;margin:0px 0px 0px -5px">',
                                                //  html: '<img src="resources/icons/shakeHand01.png" width="26" height="26" alt="Company Name">',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      // MoveMembeshipCarousel(4);
                                                      FloatPanel_Membership_TermAndConditionShow();


                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndConditionTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-5 0 0 0',
                                                          id: 'htmlTermAndConditionTxt',
                                                          html:'<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>',
                                                         // html: '<font size=1 color=grey>Terms &</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 0',
                                                          //id: 'htmlTermAndConditionTxts',
                                                          hidden:true,
                                                          html: '<font size=1 color=grey>Condition</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },



                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC',
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
                                                  id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC',
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
                                                  id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFCTxt',
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
                                        xtype:'spacer',
                                        width:10
                                        },

                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard',
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
                                                  id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard',
                                                  //  badgeText: '1',
                                                 
                                                  margin: '2 0 0 0',

                                                  height: 30,
                                                  width: 30,
                                                  html: '<img src="resources/icons/CancelMembershipCard.png" style="width:24px;height:24px;margin:0px 0px 0px -5px">',
                                                 
                                                 
                                                  ui: 'plain',
                                                  handler: function () {

                                                      MoveMembeshipCarousel(4);
                                                     

                                                    
                                                  }
                                              },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCardTxt',
                                                  width: '100%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },
                                                  items: [
                                                      {
                                                          margin: '-5 0 0 0',
                                                          id: 'htmlUnsubscribeTxt',
                                                          html:'<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Unsubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>',
                                                        //  html: '<font size=1 color=grey>Unsubscribe</font>'
                                                      },
                                                      {
                                                          margin: '-12 0 0 10',
                                                          //id: 'htmlMembershipCardTxt',
                                                          hidden:true,
                                                          html: '<font size=1 color=grey>Membership Card</font>'
                                                      },
                                                  ]

                                              },


                                         ]
                                     },


                                         



                                     {
                                        xtype:'spacer',
                                        width:10
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
                               id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_GetMembershipCard',
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
                                       id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_GetMembershipCardInner',
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
                                               id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_GetMembershipCard',
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
 //               id: 'containerFloatPanel_MembershipCardList_UpgradeBottom',
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
 //                               id: 'btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard',
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
 //    id: 'btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard',
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
                        //    margin: '0 0 0 0',
                       style: 'background-color: transparent',
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            
                            
                            {
                                style: 'background-color: transparent',
                                hidden:true,
                                id:'htmlFloatPanel_MembershipCardList_Upgrade_CardLevel',
                                html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.Gold Membership Card</div>',
                            },


                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MembershipCardList_Upgrade_Loading',
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
                                          id: 'containerFloatPanel_MembershipCardList_Upgrade_LoadingInner',
                                          width: '80%',
                                          height: 200,
                                          //hidden:true,
                                          // style: "background-color: transparent",
                                          //style: "background-color: #F35B57;",
                                          style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                          
                                      },

                                ]

                            },
                           
                            //{
                            //    xtype: 'container',
                            //    style: 'background-color: transparent',
                            //    width: '100%',
                            //    height:5,
                            //},

                            {
                                xtype: 'carousel',
                               
                                hidden: true,
                                id: 'FloatPanel_MembershipCardList_Upgrade_Carousel',
                                style: 'background-color: transparent',
                                width: '90%',
                                height: 220,
                                indicator: true,
                                listeners: {

                                    //initialize: function (c) {
                                    //    this.element.on({
                                    //        swipe: function (e, node, options) {
                                    //            if (e.direction == "left") {
                                    //                swipeDirection = "Left";

                                    //            } else {
                                    //                swipeDirection = "Right";
                                    //            }
                                    //        }
                                    //    });
                                    //},
                                    activeitemchange: function (container, newCard, oldCard, index) {
                                      

                                    },

                                },


                                margin: '0 0 0 0',
                                items: [



                                    
                                  {
                                      xtype: 'container',
                                      id: 'carouselFloatPanel_MembershipCardList_Upgrade_0',
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
                                  {
                                      xtype: 'container',
                                      id: 'carouselFloatPanel_MembershipCardList_Upgrade_1',
                                      hidden: true,                                    
                                      height: 250,
                                      width: '100%',
                                     
                                  },
                               //{
                               //    xtype: 'container',
                               //    id: 'carouselFloatPanel_MembershipCardList_Upgrade_2',
                               //    hidden: true,                                 
                               //    height: 250,
                               //    width: '100%',
                                 
                               //},
                               //  {
                               //      xtype: 'container',
                               //      id: 'carouselFloatPanel_MembershipCardList_Upgrade_3',
                               //      hidden: true,
                               //      height: 250,
                               //      width: '100%',
                                   
                               //  }, {
                               //      xtype: 'container',
                               //      id: 'carouselFloatPanel_MembershipCardList_Upgrade_4',
                               //      hidden: true,                                    
                               //      height: 250,
                               //      width: '100%',
                                   
                               //  },

                                ]
                            },




                            {
                                xtype: 'container',
                                width: '100%',
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
width:20
                                        },
                                        {
                                            id: 'btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward',
                                            html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Perks</u></div>',
                                        },

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_MembershipCardList_Upgrade_EntitiledRewardOld',
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
                                             id: 'btnFloatPanel_MembershipCardList_Upgrade_EntitiledEnterprise',
                                             height: 22,
                                             hidden:true,
                                             width:'50%',
                                             // iconCls: 'list',
                                             html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:11px;">Membership Outlet</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                
                                             }
                                         },
                                        //{

                                        //    width: '50%',
                                        //    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Membership Card List</div>'
                                        //},

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
                                xtype: 'carousel',

                                //hidden: true,
                                id: 'FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise',
                               // style: 'background-color:#f7f7f7',
                                style: 'background-color:white',
                                width: '100%',
                                height: '70%',
                                indicator: true,
                                listeners: {

                                    //initialize: function (c) {
                                    //    this.element.on({
                                    //        swipe: function (e, node, options) {
                                    //            if (e.direction == "left") {
                                    //                swipeDirection = "Left";

                                    //            } else {
                                    //                swipeDirection = "Right";
                                    //            }
                                    //        }
                                    //    });
                                    //},
                                    activeitemchange: function (container, newCard, oldCard, index) {
                                        // console.log('Current index:' + container.getActiveIndex());
                                        CarouselIndex = container.getActiveIndex();

                                  
                                        if (_FloatPanel_MembershipCardList_Upgrade_isFirstLoad == "Y") {
                                            MoveMembeshipCarousel(CarouselIndex);
                                        }

                                      

                                    },

                                },


                               // margin: '0 0 0 0',
                                items: [
                                  
                                        //{
                                        //    style: ' background-color: transparent',
                                        //    margin:'0 0 0 0',
                                        //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                                        //},
                                        {
                                            xtype: 'container',
                                            id: 'IDcarouselFloatPanel_MembershipCardList_Upgrade_Campaignlist',
                                           // hidden:true,
                                            style: ' background-color: transparent',
                                            height:'100%',
                                            width: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'left'
            
                                            },
                                            items: [
                                                {
                                                    xtype: 'list',
                                                    //  flex: 1,
                                                   // hidden:true,
                                                  //  margin: '1 0 0 0',
                                                    width: '100%',
                                                    // store: 'EnterprisegetAllStore',
                                                    store: _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore,
                                                   // store: 'MembershipCardCampaingEntitledLoadByMembershipCardCodeStore',
                                                    id: 'FloatPanel_MembershipCardList_Upgrade_Campaignlist',
                                                   
                                                    // grouped: true,
                                                    mode: 'SINGLE',
                                                    //  indexBar: true,
                                                    disableSelection: true,
                                                    style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                    scrollable: {
                                                        direction: 'vertical',
                                                        directionLock: true,
                                                        indicators: {
                                                            y: {
                                                                autoHide: true
                                                            },
                                                            x: {
                                                                autoHide: true
                                                            }
                                                        }
                                                    },
                                                         
                                                  
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
                                                    height: '100%',
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
                                                             
                                                      

                                                            FloatPanel_ScannedMerchantHide();

                                                         
                                                            if (MembershipTag == 'YES') {


                                                                if (CampaignType == "Stamp Reward Loyalty Card") {

                                                                    //alert(CampaignType);
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {

                                                                    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo,isRequiredStartEndDate,isCampaignExpired,CampaignDayLeft,"NA");
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle)
                                                                    
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
                                                               // 



                                                            }
                                                            if (MembershipTag == 'NO') {
                                                                //   FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp);

                                                              
                                                                if (CampaignType == "Stamp Reward Loyalty Card") {                                                                 

                                                                    FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                                                    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');
                                                                }
                                                                if (CampaignType == "Point Reward Loyalty Card") {
                                                                    FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo);
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

                                                          //  //var Stamps = records.get('Stamps');
                                                          //  //var StampsArr = Stamps.split('/');


                                                          //  var CampaignCode = records.get('CampaignCode');
                                                          //  var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                                          //  var StartDate = records.get('CampaignStartDate');
                                                          //  var EndDate = records.get('CampaignEndDate');
                                                          //  var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                          //  //var EnterpriseName = records.get('EnterpriseName');     
                                                          //  var EnterpriseName = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName;
                                                          //  var StampRuleRemarks = records.get('StampRuleRemarks');
                                                          //  var isStampRulePopUp = records.get('isStampRulePopUp');
                                                          //  var CampaignName = records.get('CampaignName');
                                                          //  var Stamp = records.get('Stamp');
                                                          //  var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                          //  //var EnterpriseLogo = records.get('EnterpriseLogo');
                                                          //  var EnterpriseLogo = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
                                                         
                                                           
                                                    
                                                          ////  FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks);
                                                          

                                                            


                                                          //  //var StampedCampaignCode = records.get('StampedCampaignCode');
                                                          //  //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                          //  //var StartDate = records.get('StartDate');
                                                          //  //var EndDate = records.get('EndDate');
                                                          //  //var SubscriberAccNo = records.get('SubscriberAccNo');
                                                          //  //var EnterpriseName = records.get('EnterpriseName');
                                                          //  //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                          //  //var isStampRulePopUp = records.get('isStampRulePopUp');
                                                          //  //var StampCampaignName = records.get('StampCampaignName');
                                                          //  //var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                          //  //var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                          //  localStorage.setItem('StampCampaignCode', CampaignCode);

                                                          //  localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                          //  localStorage.setItem('CountStampCardRowShow', Stamp);
                                                          //  //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                          //  console.log(MembershipTag);

                                                          //  if (MembershipTag == 'YES') {
                                                          //      FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                          //      Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');

                                                          //  }
                                                          //  if (MembershipTag == 'NO') {
                                                          //   //   FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp);

                                                          //      FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                                          //      Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');

                                                          //  }

                                                        },
                                                        deselect: function (list, records) {

                                                        }
                                                    },

                                                },
                                                {
                                                    xtype:'container',
                                                    width:'100%',
                                                    height:100
                                                }
                                            ]

                                        },


                             ///////////////////////




                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_MembershipCardList_Upgrade_Enterpriselist',
                                 style: ' background-color: transparent',
                                 height: '75%',
                                 width: '100%',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'left'

                                 },
                                 items: [
                                     {
                                         xtype: 'list',
                                         //flex:1,
                                         height: '100%',
                                        // store: 'MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
                                        store:_DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore,
                                         id: 'FloatPanel_MembershipCardList_Upgrade_EnterpriseEntitledList',
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
                                         width: '100%',
                                         listeners: {
                                             itemsingletap: function (list, idx, target, records, evt) {





                                             },
                                             deselect: function (list, records) {

                                             }
                                         },

                                     },

                                 ]

                             },
                                     
                                 
                                 ///////////////////////////////////////////////////////
                                 {
                                     xtype: 'container',
                                     id: 'containerFloatPanel_MembershipCardList_Upgrade_CardTransaction',
                                     style: ' background-color: transparent',
                                    // height: '95%',
                                     width: '100%',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [
                                         {


                                             xtype: 'list',
                                             // height: '64%',
                                             // height: '100%',
                                             // height: 200,
                                             //   flex: 2,
                                             store: 'AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore',
                                             id: 'FloatPanel_MembershipCardList_Upgrade_CardTransactionList',
                                             mode: 'SINGLE',
                                             disableSelection: true,
                                             grouped: true,
                                             // disableSelection: true,

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
                                             itemTpl: '<div class="myContent">' +


                                                                     '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{AyohaPointType}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:1px 0px 0px 0px;"><b>{CampaignName}</b></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right">{ModifiedTypeCRDBExtent}</div></td></tr></table>' +

                                             '</div>',
                                             emptyText: '<div class="myContent">No Transactions</div>',
                                             width: '100%',
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
                                         //    id: 'FloatPanel_MembershipCardList_Upgrade_StampHistoryList',
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
                                     id: 'containerFloatPanel_MembershipCardList_Upgrade_CardDetails',
                                     style: ' background-color: white',
                                     // height: '95%',
                                    // height: 412,
                                     width: '100%',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [
                                         {
                                             xtype: 'list',
                                           //  height: 480,
                                             id: 'FloatPanel_MembershipCardList_Upgrade_CardDetails',
                                             // store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                             store: 'MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore',                                            
                                             mode: 'SINGLE',
                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                            // grouped: true,
                                             disableSelection: true,
                                             indicators: {
                                                y: {
                                                    autoHide: true
                                                },
                                                x: {
                                                    autoHide: true
                                                }
                                            },
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
                                             width: '100%',
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





    });
    return _FloatPanel_MembershipCardList_Upgrade;



}








//function FloatPanel_MembershipCardList_UpgradeShow(ID) {
//var MembershipTag;
function FloatPanel_MembershipCardList_UpgradeShow(MembershipCardCode, EnterpriseAccountNo) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
   

    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
   // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
   // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);
    
    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;



  
    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
        //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );
    MembershipTag = 'NO';
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
    disabledBottomButton();
    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}













var globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed;
function FloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
   
   globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
    
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);

    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;



    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
          //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );
    MembershipTag = 'NO';
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
    disabledBottomButton();
    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}





function FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
   
    if(isMembershipCardSubscribed=="NO"){
        setMessage_NotYetMembershipMessage_WithJoinButton();
   
   
       return
   }

    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;
    globalFloatPanelMerchantDetailPage_MembershipCardCode= MembershipCardCode;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;

    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;

   MembershipTag=isMembershipCardSubscribed;

  
    
    
    
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();




  

 
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';

    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);



  


  

    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_FloatPanel_MerchantDetailPage(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
          //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );
    
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
 
    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}




function FloatPanel_MembershipCardList_UpgradeShow_FromDashboard_Main(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    globalOpenMembershipCardList_Upgrade_From = "DashboardMain";





    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';

    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);






    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;

    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;


    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
          //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );

    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");

    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}








var _FloatPanel_MembershipCardList_Upgrade_ID;
function FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,ID) {

    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
   
   
    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseHQAccountNo;
    _FloatPanel_MembershipCardList_Upgrade_ID = ID;
    MembershipTag = 'YES';
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(true);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(false);

   // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
   //// Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
    
   // Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
   // FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
    FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode)
    
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();


}


function FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard_FromScannedQR(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,isMembershipCardSubscribed) {
    if(isMembershipCardSubscribed=="NO"){
        setMessage_NotYetMembershipMessage_WithJoinButton();
   
   
       return
   }
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
   
   
  //  _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseHQAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;
    globalFloatPanelMerchantDetailPage_MembershipCardCode= MembershipCardCode;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;

    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    _FloatPanel_MembershipCardList_Upgrade_ID = 0;
    MembershipTag = isMembershipCardSubscribed;
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(true);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(false);

   // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
   //// Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
    
   // Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
   // FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
    FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode)
    
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();


}





var globalOpenMembershipCardList_Upgrade_From;

function FloatPanel_MembershipCardList_UpgradeAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    var newHeightss = x - 332;
   


    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_MembershipCardList_MyMembershipCard") {
        Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
    }
    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_RewardStoreMembershipCard")
    {
        console.log(globalOpenMembershipCardList_Upgrade_From);
        console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 1);
            Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
        }
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
            Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        }
    }
    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_MerchantDetailPage") {
       
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 1);
            Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
            disabledBottomButton();
            MembershipTag = 'NO';
        }
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
            Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);           
            MembershipTag = 'YES';
        }
    }

   



    if (globalOpenMembershipCardList_Upgrade_From == "DashboardMain") {
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 1);
            Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
            disabledBottomButton();
            MembershipTag = 'NO';
        }
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
            Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);           
            MembershipTag = 'YES';
        }
      
    }




    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_AyohaStore_MembershipCardUsed") {
        Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
    }
    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_AyohaStore_MembershipCardBeingUsed") {
        Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
    }
    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setHeight(newHeights);
    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Campaignlist').setHeight(newHeights-270);


    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardDetails').setHeight(newHeightss);
    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardTransactionList').setHeight(newHeightss);
    

  

}



function FloatPanel_MembershipCardList_UpgradeHide() {

    if (isFloatPanel_MembershipCardList_UpgradeOpen == 'Y') {
        _FloatPanel_MembershipCardList_Upgrade.hide(); isFloatPanel_MembershipCardList_UpgradeOpen = 'N'; _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "N";
        RemovePages("FloatPanel_MembershipCardList_UpgradeHide()");
    }

 
}







//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_MembershipCardLoadByEnterpriseAccNoStore;
var countMembershipCardLoadByEnterpriseAccNoStoreFirst;
var MmcCode = [];
var EnterpriseAccount = [];
var MembershipCardLevels = [];
function FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode) {

 
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
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
           
           
            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
     //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
     //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
     //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
     //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
     //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
     //                                       '</div>' +
     //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');


            
            

            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);
      
        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
      //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');
     

        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}










function FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_FloatPanel_MerchantDetailPage(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();


   //alert(MembershipCardCode)

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
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');


            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
            //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                       '</div>' +
            //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}



function FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();

 


    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);
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
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');


            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
            //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                       '</div>' +
            //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}










var global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName;
var global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
var global_FloatPanel_MembershipCardList_Upgrade_EnterprisesTagLine;
function FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo,MembershipCardCode) {
  
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
       
console.log(count);
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

        global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
        global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
       
        
        MmcCode.push(MembershipCardCode);

        Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHidden(false);
        Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                     //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                      //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
 // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                         '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-7px 0px 0px 0px;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMembershipNo + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMemberSinceDate + '</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                  '</div>' +




                                       '</div>');
        Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_1').setHidden(false);
        Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_1').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg_back + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border-color:white;border-style:solid;border-width:1px;"/>');

        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">' + MembershipCardType + '</div>');

        var MembershipCode = MmcCode[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
       // alert(MembershipCode)
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);

        _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";

        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}

function FloatPanel_MembershipCardList_Upgrade_StampCampaignLoadByEnterpriseAccNoStore(EnterpriseAccountNo) {
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




function FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MMCCode) {
  
  //  Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').removeAll();
    _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.removeAll();
   



    var mmmCode = MMCCode;
    if (mmmCode) {
    //Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //    MembershipCardCode: MMCCode,
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
        //Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
       
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MMCCode);
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode');
      //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load();


        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    console.log('Store loaded successfully, total records: ' + records.length);
        
                  
                   
                    LoadingPanelHide();
                } else {
                    console.error('Failed to load store data or no record found.');
                    LoadingPanelHide();
                }
            }
        });
















    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     //Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //     //    MembershipCardCode: MMCCode,
    //     //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //     //});
    //     //Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
    //     //var myStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
    //     var Count = _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getCount();
 
    //   //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
    //   LoadingPanelHide();
    //   Ext.Viewport.setMasked(false);

    // });
    // task.delay(1000);
   


}
}


function FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo) {
   // Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').removeAll();

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





function MembershipCardDelete() {
  

    var obj = {
        "ID": _FloatPanel_MembershipCardList_Upgrade_ID,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "MembershipCardCode": _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
        "CreatedBy": GetCurrentUserLogin(),

    };
   
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsDelete',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Delete Membership Card Success!");
                FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();
                FloatPanel_MembershipCardList_UpgradeHide();
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

              //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Delete Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}




function getMembershipCard() {


}


function MoveMembeshipCarousel(Idx) {
   
    if (Idx == 0) {
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(0);
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipCardList_Upgrade_MembershipCode);
        Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:purple;text-align: center;font-size:8px;width:100%;font-weight:bold"><u>Membership</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-20px 0px 0px 0px"><u>Privillage</u></div>');       
        Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Entitle</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
        Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privillage</u></div>');
        if (MembershipTag == 'NO') {
            return;
        }
        Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
      
    }
    if (Idx == 1) {
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(1);
        FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipCardList_Upgrade_MembershipCode, _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Entitle Outlets</u></div>');
        Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
        Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:bold"><u>Entitle</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Outlets</u></div>');
        Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');




        if (MembershipTag == 'NO') {
            return;
        }
         Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
         Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
         Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
         Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
       
       
       
       
       
      
                                              
       
       
    }
    if (Idx == 2) {
        

        if (MembershipTag == 'NO') {
            return;
        }
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(2); 
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Card Transactions</u></div>');     
        FloatPanel_MembershipCardList_Upgrade_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore();
        Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px"><u>Card</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Transactions</u></div>');
        Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
        Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
        Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:normal">Entitle</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
        Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');







        









    }
    if (Idx == 3) {
        if (MembershipTag == 'NO') {
            return;
        }

        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(3);
     
        Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px"><u>Card</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Details</u></div>');
        Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
        Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
        Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:normal">Entitle</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
        Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');



       
       
       
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Card Detail</u></div>');
       
       
        FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore();
    }
    if (Idx == 4) {
        if (MembershipTag == 'NO') {
            return;
        }
 
        Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px"><u>UnSubscribe</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Membership</u></div>');
        Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
        Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:normal">Entitle</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
        Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');

        //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Unsubcribe Membership</u></div>');
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(4);
       
       
       
        Swal.fire({
            title: 'Are you sure To delete?',
            text: "Unsubscribe membership  will effect your Current Point,Stamp and Previllage card. Your are no longer accessible to this card. Think Carefully before proccedd !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then(function (result) {
            if (result.isConfirmed) {
                MembershipCardDelete();
            }
        });
    }
    
}




function GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom() {
 
    FloatPanel_MembershipCardManagement_TermAndConditionShow();
    return;




    //var obj = {
    //    "CampaignEnterpriseAccNo": _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
    //    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
    //    //"MembershipByMethod": "AyohaStoreRequest",
    //    "MembershipByMethod": GetMembershipByMethod(),        
    //    "ReferalSubscriberAccNo": "NA",
    //    "MembershipCardCode": _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
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
    //            FloatPanel_MembershipCardList_UpgradeHide();
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



function disabledBottomButton() {

    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction').setHtml('<img src="resources/icons/cardTransactionDisabled.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:#DCDCDC;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:#DCDCDC;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
   // Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=#DCDCDC>Transaction</font>');

   

    

    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo').setHtml('<img src="resources/icons/disableCardInfo.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=#DCDCDC>Card Detail</font>');
    //Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=#DCDCDC>Info</font>');





    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC').setHtml('<img src="resources/icons/NFCdisabled.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlNFCTxt').setHtml('<font size=1 color=#DCDCDC>NFC</font>');
    Ext.getCmp('htmlEnabledTxt').setHtml('<font size=1 color=#DCDCDC>Enabled</font>');





    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard').setHtml('<img src="resources/icons/disableCardUnsubscribe.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=#DCDCDC>Unsubscribe</font>');
  //  Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=#DCDCDC>Membership Card</font>');

}







function FloatPanel_MembershipCardList_Upgrade_LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore(MCC) {
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





function FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore() {
    
  
    Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
        MMC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
        EnterprisesAccNo:_FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo
    });
    Ext.StoreMgr.get('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
            MMC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
            EnterprisesAccNo: _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo
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






function FloatPanel_MembershipCardList_Upgrade_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore() {






    Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').getProxy().setExtraParams({
        AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
        EnterprisesAccNo: _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
        MCC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
       
    });
    Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').getProxy().setExtraParams({
            AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
            EnterprisesAccNo: _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
            MCC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
           
        });
        Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').load();
        var myStore = Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore');
        count = myStore.getCount();
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);


}







function FloatPanel_MembershipCardList_Upgrade_AyohaStore() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_MembershipCardList_Upgrade";
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';





    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);


    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();

    console.log(_FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo)
    console.log(GetCurrAyohaUserAccountNo())


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
        //  FloatPanel_OrderCartHide();
        FloatPanel_RewardStore_OpenStore_FromFloatPanel_MembershipCardList_Upgrade(ID);

        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}