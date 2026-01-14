
var detectIndex = [];
var iseWalletButtonTap = "NO";
var DashboardArrIndexmainDashboardCarousel = 0;
var indexmainDashboardCarousel = 0;
Ext.define('BuskartApp.view.MyAccount.Dashboard', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'Dashboard',
    id: 'DashboardID',
    //requires: [
    //     'BuskartApp.view.Dashboard.DashboardMerchantReward',
    //],
    requires: [
       // 'BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_MainDashboard',
        'Ext.carousel.Carousel',
        'Ext.util.DelayedTask',
        'Ext.Video'
    ],
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,

        //scrollable: {
        //    direction: 'vertical',
        //    directionLock: true
        //},

        //style: "background-color: #157fcc; color:black;",

        //    style: "background-color: #D25959; color:black;",

        // style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
        //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        //style: 'background-image: url("resources/icons/kedaikopibg.jpg"); background-size: 100% 100%;border-bottom:1px none;',

        style: "background-color:white;",
        items: [







            {
                xtype: 'container',
                // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                style: "background-color: transparent;",
              //  docked:'top',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
               
                // scrollable:false,

                items: [

















                     //last setup letak dalam tabpanel ,28/5/2025 off letak dalam ni 

                    //   {
                    //       xtype: 'tabpanel',
                    //       style: "background-color: transparent;",
                    //       // hidden: true,
                    //       //  hidden:true,
                    //       id: 'tabpanelMyAccount_Dashboard',
                    //       // style: 'border-top:2px solid #ECF0F1;background: white;',
                    //       // style: 'background-color: black;',
                    //       // margin: '-20 0 0 -26',
                    //       // margin: '25 0 0 0',

                    //       //width: 200,
                    //       width: '100%',
                    //       height: '100%',
                    //       //height: 120,
                    //       //height: 50,
                    //       //  zIndex: 200,
                    //       //  docked: 'bottom',
                    //       tabBarPosition: 'top',
                    //       ui: 'plain',
                    //       // docked: 'bottom',

                    //     //   initialize: function (c) {
                    //     //       //  this.getTabBar().hide();
                    //     //   },

                    //       //scrollable: {
                    //       //    direction: 'vertical',
                    //       //    directionLock: true
                    //       //},


                    //       items: [
                    //       ]
                    //     },




                    
////////////////////////////////////////////****** MAIN PAGE DASH BOARD *****************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

      {
          xtype: 'container',
          id: 'containerMyAccount_DashboardAyohaReward',
          width: '100%',
          height: '100%',
          //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
         style: "background-color: transparent;",



          //style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
          //style: "background-color: #F35B57;",
          title: 'DashboardAyohaReward',
          layout: {
              type: 'vbox',
              align: 'stretch'
             // pack: 'start',
              //pack: 'center',
             // align: 'top'

          },
          scrollable: {
              direction: 'vertical',
              directionLock: true,
              indicators: false,
              bounces: false,
              outOfBoundRestrictFactor: 0,
              //threshold: 20,
              scroller: {
                  listeners: {
                      scroll: function (scroller, x, y, eOpts) {
                        //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                          if (y <= 0) {
                           
                             // console.log('sampai scrollable')
                              scroller.scrollTo({
                                  x: 0,
                                  y: 0
                              });
                              return
                          }
                      },
                      //scrollend: function (scroller, x, y, eOpts) {
                      //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                      //    //if (y <= 0) {
                      //    //    console.log('sampai')
                      //    //    scroller.scrollTo({
                      //    //        x: 0,
                      //    //        y: 0
                      //    //    });
                      //    //}

                         
                      //}
                  }
              }
          },
      
          items: [

        

      

             {

                 xtype: 'container',
                 width: '100%',
                 height: 60,
                 // width: 40,
                 // docked: 'top',

                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                // hidden: true,

                 id: 'containerMyAccount_DashboardHeader',
                /// style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                style: 'background-color:transparent;',
                // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },




                 // hidden:true,
                 items:
                        [

                            //    {
                            //        xtype: 'button',
                            //        id: 'btnMyAccount_DashboardBack',
                            //        height: 35,
                            //        width: 35,
                            //        hidden: true,
                            //        // iconCls: 'list',
                            //        html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                            //        // html: '<div ><img src="resources/icons/ayohaewallet01.png" width="25" height="25" alt="Company Name"></div>',
                            //        ui: 'plain',
                            //        handler: function () {

                            //            //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                            //            //    type: 'slideOut',
                            //            //    direction: 'left',
                            //            //    easing: 'cubic-bezier(.7,0,.7,1)',
                            //            //    duration: 250

                            //            //}));
                            //            //isLoyaltyCardRedeemListOpen = 'N';
                            //        }
                            //    },


                            //  {
                            //      margin: '0 0 0 0',
                            //      hidden: true,
                            //      id: 'htmlMyAccount_Dashboard_TitleHeaderTxt',
                            //      html: '<font size=2 color=black>Ayoha-eWallet</font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:-5px 0px 0px 0px">RM 0.00</div>'
                            //      // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                            //  },
                                    //  {
                                    //      xtype: 'panel',
                                    //      width: 1,
                                    //      hidden:true
                                    //  },

                            {
                                xtype: 'container',
                               //margin: '30 0 0 0',
                              margin: '10 0 0 0',
                                zIndex: 200,
                                // hidden:true,
                                style: 'background-color:transparent;',
                                id: 'containerMyAccount_DashboardHaiUser',
                                name: 'namecontainerMyAccount_DashboardHaiUser',
                                //style: 'background-color:rgba(255,255,255, 0.8);border-radius: 10px 10px 10px 10px;',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                                height: 53,
                                width: 145,
                               //ori width: 180,
                                layout: {

                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'
                                },
                                items: [
                                    //{
                                    //    xtype: 'panel',
                                    //    width:1
                                    //},

                                    {
                                        xtype: 'container',
                                        height: 55,
                                        width: 55,
                                        layout: {

                                            type: 'vbox',
                                            pack: 'left',
                                            align: 'left'
                                        },
                                        items: [
                                             {
                                                 xtype: 'button',
                                                 id: 'btnMyAccount_DashboardPicProfileIcon',
                                                 height: 55,
                                                 width: 55,
                                                 margin: '-3 0 0 0',
                                                 // iconCls: 'list',
                                                 //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                                 html: '<div ><img src="resources/icons/founderWayang02.jpg" style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>',
                                                 ui: 'plain',
                                                 handler: function () {


                                                 }
                                             },
                                             {
                                                 id: 'btnMyAccount_DashboardRankIconx',
                                                 hidden: true,
                                                 margin: '-20 0 0 30',
                                                 style: 'background-color:transparent;',
                                                 height: 22,
                                                 width: 22,
                                                 zIndex: 100,
                                                 html: '<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/kingclubIcon.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>',


                                             }
                                        ]
                                    },

                                       {
                                           xtype: 'panel',
                                           hidden:true,
                                           width: 1
                                       },
                                    {
                                        margin: '4 0 0 0',
                                        id: 'htmlMyAccount_Dashboard_ProfileTitle',
                                        html: '<div onclick="FloatPanel_MyAccountMasterShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:white;margin:3px 0px 0px 0px">Good Days!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">Tarmizi Rahim</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:white;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>'
                                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                    },

                                ]
                            },





                                       {
                                           xtype: 'spacer',

                                       },
                        //                {
                        //                 xtype: 'container',
                        //                 zIndex: 100,
                        //                 height: 40,
                        //                 width: 40,
                        //                 hidden:true,
                        //                // hidden:true,
                        //                // margin: '10 0 0 0',
                        //                 margin: '-3 0 0 0',
                        //                 // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                        //                 id: 'containerDashbord_MyCart',
                        // name: 'namecontainerDashbord_MyCart',
                        //                 style: 'background-color:transparent;',
                        //                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                        //                 layout: {
                        //                     type: 'vbox',
                        //                     pack: 'center',
                        //                     align: 'center'
                                    
                        //                 },
                        //                 items: [
                                    
                        //                     {
                        //                        // margin: '10 0 0 3',
                        //                         margin: '3 0 0 3',
                        //                         height: 20,
                        //                         width: 20,
                        //                         hidden:true,
                        //                       //  zIndex:-1,
                        //                        // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
                        //                        id: 'htmlDashbord_OrderCart_CountbadgeText',
                        //                       html: '<div style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                        //                     },
    
                        //             {
                        //                 margin: '-5 2 0 0',
                        //                 hidden:true,
                        //                 width: 18,
                        //                 height: 18,
                        //                 html: '<img src="resources/icons/myCart01.png" alt="Image" style="width:20px;height:20px;">',
                        //                 // ui:'plain'
                        //             },
                                    
                                    
                        //                 ]
                        //             },


                        {
                            xtype: 'container',
                            id: 'containerMyAccount_Dashboard_MenuBottom_Notification',
                            name: 'namecontainerMyAccount_Dashboard_MenuBottom_Notification',
                            // width: '19%',
                            //height: 30,
                            zIndex: 100,
                            margin: '-10 0 0 0',
                           // margin: '-8px 0 0 0', 
                           width: 50,
                           height: 40,
                            style: "background-color: transparent",
                            //style: "background-color: #F35B57;",

                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'

                            },
                            items: [

                                 {
                                     //xtype: 'button',
                                     id: 'btn_MyAccount_Dashboard_MenuBottom_Notification',
                                     // badgeText: '10',
                                     margin: '0 0 0 0',

                                     height: 20,
                                     width: 20,
                                     html: '<img src="resources/icons/Notification.png" width="22" height="22" alt="Company Name">',
                                     //ui: 'plain',
                                     //handler: function () {
                                     //    // FloatLoyaltyCardStampShow();
                                     //    //  NotificationIndividualPanelShow();
                                     //    FloatPanel_AyohaNotificationShow();
                                     //}
                                 },
                                 


                            ]
                        },








                                       /////////new EWALLEt
                                       {
                                        xtype: 'container',
                                       // margin: '20 3 0 0',
                                      
                                        margin: '-8px 10 0 0',                                        
                                        zIndex: 100,
                                        id: 'containerMyAccount_DashboardAyohaeWallet',
                                        name: 'namecontainerMyAccount_DashboardAyohaeWallet',
                                       // hidden: true,
                                       
                                        style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                      //  height: 40,
                                        height: 35,
                                       // width: 160,
                                        width: 75,
                                        layout: {

                                            type: 'hbox',
                                            pack: 'center',
                                            align: 'center'
                                        },
                                        items: [
                                          
                                            {
                                                margin: '0 0 0 0',
                                                hidden:true,
                                                id: 'htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet',
                                               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>'
                                                html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">RM 00.00</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:normal;color:black;margin:-25px 0px 0px 0px">TOP UP</div>'
                                               

                                            },
                                            {
                                                xtype: 'container',
                                                style: 'background-color:transparent;',
                                                hidden:true,
                                                   width: 15,
                                                   height: 30,
                                               },
                                               {
                                                xtype: 'container',
                                                style: 'background-color:grey;',
                                                hidden:true,
                                                   width: 1,
                                                   height: 28,
                                               },
                                               {
                                                xtype: 'container',
                                                style: 'background-color:transparent;',
                                                hidden:true,
                                                   width: 15,
                                                   height: 30,
                                               },
                                               {
                                                margin: '0 0 0 0',
                                                id: 'htmlMyAccount_Dashboard_TitleHeaderTxtAyohapoint',
                                               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>'
                                                html: '<div id="Dashboard_userPts" onclick="Dashboard_ayoharedeem_page();" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">2355 pts</div><br><div onclick="Dashboard_ayoharedeem_page();" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px">Redeem</div>'
                                               

                                            },

                                            // {
                                            //     xtype: 'container',
                                            //     id: 'containerMyAccount_Dashboard_AyohaEwalletIcon',
                                            //     hidden: true,
                                            //     style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                            //     height: 40,
                                            //     width: 40,
                                            //     margin: '0 -2 -2 0',
                                            //     layout: {

                                            //         type: 'vbox',
                                            //         pack: 'center',
                                            //         align: 'center'
                                            //     },
                                            //     items: [
                                            //         {
                                            //             //xtype: 'button',
                                            //             //id: 'btnMyAccount_DashboardEwalletIcon',
                                            //             height: 20,
                                            //             width: 20,
                                            //             margin: '0 0 0 0',
                                            //             // iconCls: 'list',
                                            //             //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                            //             html: '<div ><img src="resources/icons/ayohaewallet01.png" style ="width:20px;height:20px;" alt="Company Name"></div>',
                                            //             // ui: 'plain',
                                            //             //handler: function () {

                                            //             //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                            //             //    //    type: 'slideOut',
                                            //             //    //    direction: 'left',
                                            //             //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                            //             //    //    duration: 250

                                            //             //    //}));
                                            //             //    //isLoyaltyCardRedeemListOpen = 'N';
                                            //             //}
                                            //         },
                                            //     ]
                                            // },
                                            

                                         //    {
                                         //     xtype: 'button',
                                         //     id: 'btnMyAccount_DashboardPicProfileIcon_eWallet',
                                         //     height: 55,
                                         //     width: 55,
                                         //     margin: '-3 0 0 0',
                                         //     // iconCls: 'list',
                                         //     //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                         //     html: '<div ><img src="resources/icons/founderWayang02.jpg" style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>',
                                         //     ui: 'plain',
                                         //     handler: function () {


                                         //     }
                                         // },

                                        ]
                                    },

                                     
                                       //////////////////////////////////////////////////////////////////////////// Ayoha eWallet top Right
                                       {
                                           xtype: 'container',
                                          // margin: '20 3 0 0',
                                           margin: '0 3 0 0',                                        
                                           zIndex: 200,
                                           id: 'containerMyAccount_DashboardAyohaeWalletx',
                                           name: 'namecontainerMyAccount_DashboardAyohaeWallet',
                                           hidden: true,
                                          // style: 'background-color:rgba(255,255,255, 0.2);border-radius: 25px 25px 25px 25px;',
                                         // style: 'background-color:rgba(255,255,255);border-radius: 25px 25px 25px 25px;',
                                          // style: 'background-color: transparent;',
                                           //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                           style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 20px 20px 20px 20px;',

                                           height: 40,
                                           width: 125,
                                           layout: {

                                               type: 'hbox',
                                               pack: 'right',
                                               align: 'right'
                                           },
                                           items: [
                                               //{
                                               //    xtype: 'panel',
                                               //    width:1
                                               //},
                                               {
                                                   margin: '0 0 0 0',
                                                   id: 'htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwalletx',
                                                   html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>'
                                                   // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                               },

                                                  {
                                                      xtype: 'panel',
                                                      width: 2
                                                  },

                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_AyohaEwalletIcon',
                                                   style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                                   height: 40,
                                                   width: 40,
                                                   margin: '0 -2 -2 0',
                                                   layout: {

                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'
                                                   },
                                                   items: [
                                                       {
                                                           //xtype: 'button',
                                                           //id: 'btnMyAccount_DashboardEwalletIcon',
                                                           height: 20,
                                                           width: 20,
                                                           margin: '0 0 0 0',
                                                           // iconCls: 'list',
                                                           //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                                           html: '<div ><img src="resources/icons/ayohaewallet01.png" style ="width:20px;height:20px;" alt="Company Name"></div>',
                                                           // ui: 'plain',
                                                           //handler: function () {

                                                           //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                                           //    //    type: 'slideOut',
                                                           //    //    direction: 'left',
                                                           //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                           //    //    duration: 250

                                                           //    //}));
                                                           //    //isLoyaltyCardRedeemListOpen = 'N';
                                                           //}
                                                       },
                                                   ]
                                               },
                                               

                                            //    {
                                            //     xtype: 'button',
                                            //     id: 'btnMyAccount_DashboardPicProfileIcon_eWallet',
                                            //     height: 55,
                                            //     width: 55,
                                            //     margin: '-3 0 0 0',
                                            //     // iconCls: 'list',
                                            //     //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                            //     html: '<div ><img src="resources/icons/founderWayang02.jpg" style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>',
                                            //     ui: 'plain',
                                            //     handler: function () {


                                            //     }
                                            // },

                                           ]
                                       },
                                       

//////////////////////////////////////////////////////////end eWallet





                                       //////////////////////////////

                                       //{
                                       //    margin: '0 0 0 0',
                                       //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                       //},

                                            //    {
                                            //        xtype: 'container',
                                            //        margin: '5 0 0 0',
                                            //        hidden: true,
                                            //        zIndex: 200,
                                            //        // hidden: true,
                                            //        //style: 'background-color: white;',
                                            //        //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                            //        style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                            //        height: 25,
                                            //        width: 75,
                                            //        // margin: '70 0 0 0',
                                            //        id: 'containerMyAccount_DashboardHaiUserx',
                                            //        name: 'namecontainerMyAccount_DashboardHaiUserx',
                                            //        layout: {

                                            //            type: 'vbox',
                                            //            pack: 'center',
                                            //            align: 'center'
                                            //        },
                                            //        items: [


                                            //            {
                                            //                margin: '2 0 0 0',
                                            //                zIndex: 200,
                                            //                id: 'htmlMyAccount_DashboardHaiUser',
                                            //                html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                            //            },
                                            //            {
                                            //                xtype: 'container',
                                            //                //   margin: '0 0 0 5',
                                            //                hidden: true,
                                            //                style: 'background-color: red;',
                                            //                zIndex: 500,
                                            //                height: 25,
                                            //                width: 70,
                                            //                // margin: '70 0 0 0',
                                            //                id: 'containerMyAccount_DashboardeWallet',
                                            //                layout: {

                                            //                    type: 'hbox',
                                            //                    pack: 'left',
                                            //                    align: 'left'
                                            //                },
                                            //                items: [
                                            //                     {
                                            //                         xtype: 'button',
                                            //                         id: 'btnMyAccount_DashboardeWallet',
                                            //                         margin: '4 0 0 8',
                                            //                         height: 30,
                                            //                         width: 35,

                                            //                         // iconCls: 'list',
                                            //                         html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                            //                         ui: 'plain',
                                            //                         handler: function () {
                                            //                             Ayoha_eWallet();

                                            //                         }
                                            //                     },
                                            //                     //{
                                            //                     //    height: 30,
                                            //                     //    margin: '10 0 0 0',
                                            //                     //    width: 65,

                                            //                     //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                            //                     //},
                                            //                     {
                                            //                         xtype: 'button',
                                            //                         id: 'btnMyAccount_DashboardeWalletValue',
                                            //                         margin: '7 0 0 2',
                                            //                         height: 30,
                                            //                         width: 65,

                                            //                         // iconCls: 'list',
                                            //                         html: '<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                            //                         ui: 'plain',
                                            //                         handler: function () {
                                            //                             Ayoha_eWallet();

                                            //                         }
                                            //                     },
                                            //                     //{
                                            //                     //    margin: '7 0 0 2',

                                            //                     //}
                                            //                ]
                                            //            },

                                            //        ]
                                            //    },
                                            // {
                                            //     xtype: 'container',
                                            //     margin: '5 0 0 -5',
                                            //     zIndex: 200,
                                            //     hidden: true,
                                            //     // hidden: true,
                                            //     //style: 'background-color: white;',
                                            //     style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                            //     height: 35,
                                            //     width: 35,
                                            //     // margin: '70 0 0 0',
                                            //     id: 'containerMyAccount_DashboardPictureUser',
                                            //     layout: {

                                            //         type: 'hbox',
                                            //         pack: 'center',
                                            //         align: 'center'
                                            //     },
                                            //     items: [
                                            //         {
                                            //             xtype: 'button',
                                            //             height: 40,
                                            //             width: 40,
                                            //             //badgeText: '10',
                                            //             margin: '0 0 0 -8',
                                            //             id: 'btnMyAccount_DashboardPicProfile',
                                            //             //badgeText: "2",
                                            //             html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                            //             ui: 'plain',
                                            //             handler: function () {

                                            //                 if (globalPNUnread == "0") {
                                            //                     FloatPanel_MyAccountMasterShow();
                                            //                 } else {
                                            //                     FloatPanel_AyohaNotificationShow();
                                            //                 }
                                            //             }
                                            //         },



                                            //     ]
                                            // },


//ori 16/10/2025
                                            // {
                                            //     xtype: 'panel',
                                            //     width: 3
                                            // }






                        ]

             },

          
             {
                xtype: 'container',
                margin: '20 0 0 5',
               //docked:'top',
              //  margin: '-45 0 0 0',
               // zIndex: 00,
                id: 'containerMyAccount_DashboardMyReward',
                name: 'namecontainerMyAccount_DashboardMyReward',
                hidden:true,
                style: 'background-color:transparent;',
                //style: 'background-color:rgba(255,255,255, 0.7);border-radius: 25px 25px 25px 25px;',
                //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
            
                height: 41,
                width: '100%',
                layout: {
            
                    type: 'hbox',
                    pack: 'right',
                    align: 'right'
                },
                items: [
                    //{
                    //    xtype: 'panel',
                    //    width:1
                    //},






                  
                    {
                        xtype: 'container',
                        zIndex: 100,
                        hidden:true,
                       height: 40,
                       width: 40,                                                         
                        //margin: '10 0 0 0',
                        margin: '0 0 0 0',
                        // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                        id: 'containerDashbord_MyReward',
                        name: 'namecontainerDashbord_MyReward',
                        // name: 'namecontainerFloatPanel_AyohaStoreMyCart',
                        //style: 'background-color:transparent;',                                               
                       style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                    
                        },
                        items: [
                    
                    {
                        margin: '-1 0 0 0',
                        id: 'htmlDashbord_MyReward_CountbadgeText',
                        html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
                    
                    },
                    {
                        margin: '2 0 0 0',
                        // hidden: true,
                        width: 18,
                        height: 18,
                        html: '<img src="resources/icons/presentBoxPurple.png" alt="Image" style="width:18px;height:18px;">',
                        // ui:'plain'
                    },
                    
                    
                        ]
                    },
                    {
                        xtype: 'panel',
                       width: 7
                        //width: 3
                    },
                    {
                        xtype: 'container',
                        zIndex: 100,
                        height: 40,
                        width: 40,
                        hidden:true,
                       // margin: '10 0 0 0',
                        margin: '0 0 0 0',
                        // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                       
                        //style: 'background-color:transparent;',
                       style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                    
                        },
                        items: [
                    
                    {
                        margin: '-1 0 0 0',                     
                        html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
                    
                    },
                    {
                        margin: '2 2 0 0',
                        // hidden: true,
                        width: 18,
                        height: 18,
                        html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:20px;height:20px;">',
                        // ui:'plain'
                    },
                    
                    
                        ]
                    },
              {
                       xtype: 'panel',
                       width:10
                    },
                ]
            },
             
            /////////////////////////////////////////
           

            
            
            
            
            
            
            
            
            
            
            
            
            {
                 xtype: 'container',
             
                 id: 'Dashboard_Carousel',
                 name: 'nameDashboard_Carousel',                
                 //width: '100%',
                 //height: '100%',
                
                 width: '100%',
                 height: 210,
             // ori height: 410,
               
                 style: 'background-color:transparent',
              
               margin: '-60 0 0 0',
            
                 items: [
                    {
                      // xtype: 'carousel',
                       xtype: 'container',
                        id: 'mainDashboardCarousel',
                        name: 'namemainDashboardCarousel',
                        height: 210,
                      //ori  height: 410,
                        width: '100%',
                        indicator: false,
                        style: 'background-color:transparent',
                       

                                                          items:[


                                                            ///////////////////////////////// Ayoha Reward Container /////////////////////////////////
 {
    xtype: 'container',
                           
    //style: 'background-image: url("resources/icons/bgfront06.png"); background-size: 100% 400px;background-repeat: no-repeat;',
   // style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
 //style: 'background-image: url("resources/icons/bgfront15.png"); background-size: 100% 400px;background-repeat: no-repeat;',
 
 
 
 
 style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
 //style: 'background: linear-gradient(180deg,#C94EE5 0%, #E073E9 55%, #FF7FD8 100%);',
 

 
 //style: 'background-image: url("resources/icons/bgfront16.png"); background-size: 100% 393x;background-repeat: no-repeat;',
    
    width: '100%',
    //0ri height: 393,
    height: 235,
    title: 'Dashboard_AyohaReward_MainDashboard',
  // style: "background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',
            height: 75,
        },
           //////////////////////last checkin//
           {
            xtype: 'container',
            width: '100%',
           // hidden: false,
            id:'containerDashboard_LastCheckIn',
            margin: '0 0 0 0',
            // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            style: 'background-color:transparent',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                 {
                     margin: '10 0 0 14',
                    // id: 'labelDashboard_LastCheckInTimeStamp',    
                    // html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">00:00:00</div>'
                     html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:#16a34a;background:#ecfdf5;border:1px solid #bbf7d0;padding:3px 6px;border-radius:999px;white-space:nowrap;">Earn +10 Ayoha Point on every checkin</span><br><b>Membership Hubs Check-In</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">Last Check-In Merchant:</div>'
                    
                 },
                 {
                     xtype: 'spacer'
                 },
                 {
id: 'btnDashboard_CheckIn',
hidden:true,
                    margin: '10 14 0 0',
                 html:'<a href="#checkin" class="example-5" role="button"'+
                 //'onclick="Dashboard_SearchMerchantListShow();" style="display:inline-flex;align-items:center;gap:5px;padding:6px 9px;'+
                  'onclick="FloatPanel_Membership_MembershipCardHubsUpgradeShow();" style="display:inline-flex;align-items:center;gap:5px;padding:6px 9px;'+
                        'background-color: #fac;background-image: linear-gradient(#c800ffc9, #ff00de75);'+
                       'color:#fff;text-decoration:none;border-radius:999px;'+
                        'font:400 10px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;'+
                        'letter-spacing:.2px;'+
                        'border:2px solid #fac; border-radius: 18px; box-shadow: 0 12px 28px rgba(0,0,0,.28);">'+            
               '<span>Check-In Now</span>'+
              '</a>',
                   // html: '<div onclick="FloatPanel_Membership_CheckInPage_ConfirmedShow();" style="color:white;text-align: center;font-size:12px;width:100%;"><u>Check-In Trail</u></div>'
                
                },
               

                
            ]
        },
        {
            xtype: 'container',
            margin: '0 0 0 0',           
            id: 'DashboardMain_EnterprisesLoadCheckInEmptyID',
            name:'nameDashboardMain_EnterprisesLoadCheckInEmpty',
            // mode: 'SINGLE',
            // disableSelection: true,
            // scrollable: {
            //     direction: 'vertical',
            //     indicators: {
            //         y: {
            //             autoHide: true
            //         },
            //         x: {
            //             autoHide: true
            //         }
            //     }
            // },
            style: 'background-color:rgba(255, 255, 255, 0.5);border-radius: 10px 10px 10px 10px;',
         


               







html: '<div style="text-align:center;padding:10px;margin:-3px 0px 0px 0px;">' +
            '<style>@keyframes ayohaPulse{0%{box-shadow:0 0 0 0 rgba(138,43,226,.35)}70%{box-shadow:0 0 0 14px rgba(138,43,226,0)}100%{box-shadow:0 0 0 0 rgba(138,43,226,0)}}@keyframes ayohaShine{0%{transform:translateX(-120%)}100%{transform:translateX(120%)}}</style>' +
            '<a href="#checkin" aria-label="Check-In Now"' +
               'style="position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-width:210px;height:48px;padding:0 18px;background-color: #fac;background:linear-gradient(90deg,#ff00de75, #c800ffc9);color:#fff;text-decoration:none;border-radius:999px;font:700 15px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:.2px;border:1px solid rgba(255,255,255,.18);box-shadow:0 8px 18px rgba(138,43,226,.25);animation:ayohaPulse 2.2s ease-out infinite;overflow:hidden;transform:translateZ(0);">' +
                '<span style="width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;">' +
                  '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:block"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>' +
                '</span>' +
                '<span>Check-In Now</span>' +
                '<span style="margin-left:2px;display:inline-flex;align-items:center;background:linear-gradient(90deg,#f59e0b,#fbbf24);color:#111;font:800 10px/1.1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:3px 6px;border-radius:999px;">+10 pts</span>' +
                '<span style="content:\'\';position:absolute;top:-30%;left:0;width:30%;height:160%;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 50%,rgba(255,255,255,0) 100%);filter:blur(2px);transform:translateX(-120%);pointer-events:none;animation:ayohaShine 2.8s ease-in-out infinite;"></span>' +
            '</a>' +
           '<div style="margin-top:8px;font:600 11px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:white;">Earn +10 Ayoha Points on every check-in</div>' +
          '</div>',
            


            width: '92%',
            height: 80,
            disableSelection: true,
            scrollable:false,






        },

        {
            xtype: 'list',
            hidden:true,
margin: '0 0 0 0',           
            id: 'DashboardMain_EnterprisesLoadLastCheckInStoreID',
            mode: 'SINGLE',
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
            style: 'background-color:rgba(255, 255, 255, 0.5);border-radius: 10px 10px 10px 10px;',
         

itemTpl: '<div class="myContent" style="background-color:transparent;width:103%;margin:-30px 0px 0px 0px" onclick="FloatPanel_MerchantDetailPageShow({ID}, `{EnterpriseAccNo}`, `{EnterpriseLogoPath}`, `{EnterpriseName}`, `{EnterpriseTagLine}`,`{NamaJalan}`, `{Postkod}`, `{Bandar}`, `{Negeri}`, `{EnterpriseCoordinate}`,`{EnterpriseDescriptions}`, `{EnterprisePhoneNo}`,`{PICContactNo}`, `{`EnterpriseFacebook}`, `{EnterpriseWebsite}`, `{EnterpriseInstagram}`,`{EnterpriseTwiter}`, `{BusinessMode}`)";>' +                                 
'{ModifiedIsMemberDashboardMerchantListLastCheckIn}' +
'<div style="overflow:hidden;width:105%;margin:-57px 0px 0px -11px;background-color:transparent;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:17%;margin:5px 0px 0px 0px;background-color:transparent;"><img src="{EnterpriseLogoPath}" style="border:1px none white; width:35px;height:35px;margin:3px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:80%;margin:3px 0px 0px -15px;background-color:transparent;color:black"><b>{EnterpriseName}</b><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><i>{EnterpriseTagLine}</i></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;float:left;margin:-5px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><img src="resources/icons/locationThree.png" style="width:16px;height:12px;"/>{Bandar},{Negeri}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:right;margin:-10px -25px 0px 0px;background-color:transparent;color:black;width:30%;">{ModifiedCountStar}</div></div>' +
'</div>' +
'</div>',

               







            emptyText: '<div id="checkin-btn" style="text-align:center;padding:10px;margin:5px 0px 0px 0px;">' +
            '<style>@keyframes ayohaPulse{0%{box-shadow:0 0 0 0 rgba(138,43,226,.35)}70%{box-shadow:0 0 0 14px rgba(138,43,226,0)}100%{box-shadow:0 0 0 0 rgba(138,43,226,0)}}@keyframes ayohaShine{0%{transform:translateX(-120%)}100%{transform:translateX(120%)}}</style>' +
            '<a href="#checkin" aria-label="Check-In Now"' +
               'style="position:relative;display:inline-flex;align-items:center;justify-content:center;gap:10px;min-width:210px;height:48px;padding:0 18px;background-color: #fac;background:linear-gradient(90deg,#ff00de75, #c800ffc9);color:#fff;text-decoration:none;border-radius:999px;font:700 15px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:.2px;border:1px solid rgba(255,255,255,.18);box-shadow:0 8px 18px rgba(138,43,226,.25);animation:ayohaPulse 2.2s ease-out infinite;overflow:hidden;transform:translateZ(0);">' +
                '<span style="width:20px;height:20px;display:inline-flex;align-items:center;justify-content:center;">' +
                  '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="display:block"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>' +
                '</span>' +
                '<span>Check-In Now</span>' +
                '<span style="margin-left:2px;display:inline-flex;align-items:center;background:linear-gradient(90deg,#f59e0b,#fbbf24);color:#111;font:800 10px/1.1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:3px 6px;border-radius:999px;">+10 pts</span>' +
                '<span style="content:\'\';position:absolute;top:-30%;left:0;width:30%;height:160%;background:linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 50%,rgba(255,255,255,0) 100%);filter:blur(2px);transform:translateX(-120%);pointer-events:none;animation:ayohaShine 2.8s ease-in-out infinite;"></span>' +
            '</a>' +
           '<div style="margin-top:8px;font:600 11px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;color:white;">Earn +10 Ayoha Points on every check-in</div>' +
          '</div>',
            listeners: {
                itemtap: function (list, idx, target, records, evt) {
                    LoadingPanelShow(getLoadingIcon(),'Loading....');
                    MembershipTag= records.get('isMember');
                    glonbalDashboard_SearchMerchantList_FullCompanyAddress=records.get('NamaJalan')+',<br>'+records.get('Postkod')+' '+records.get('Bandar')+'.<br> '+records.get('Negeri')
              

                },
                deselect: function (list, records) {
                 
                }
            },


            width: '92%',
            height: 60,
            disableSelection: true,
            scrollable:false,






        },
        // {
        //     xtype: 'container',
                           
        //     //style: 'background-image: url("resources/icons/bgfront06.png"); background-size: 100% 400px;background-repeat: no-repeat;',
        //    // style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
        //  //  style: 'background-image: url("resources/icons/bgfront15.png"); background-size: 100% 390px;background-repeat: no-repeat;',
        //    style: 'background-image: url("resources/icons/sampleCheckIn.png"); background-size: 100% 60px;background-repeat: no-repeat;',
            
        //     width: '92%',
        //     height: 60,
        // },



        {
            xtype: 'container',
            width: '92%',
            height: 20,
           hidden: true,
            id:'containerDashboard_LastCheckInTimeStamp',
            margin: '0 0 0 0',
            // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            style: 'background-color:white;border-radius: 0px 0px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'center',
            },
            items: [
                {
                    margin: '0 0 0 4',
                    id: 'labelDashboard_LastCheckInTimeStamp',
                    hidden:true, 
                  //  width: 350,                  
                    html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">00:00:00</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                //  {
                //      xtype: 'spacer'
                //  },
                 {

                    margin: '0 0 0 10',
                 hidden:true,
                 id: 'labelDashboard_LastCheckInEarnedPointToDisplay', 
                    html: '<div style="display:inline-block;background-color:transparent;">'+
                    '<span style="display:inline-block;background:#6b21a8;color:#ffffff;font:600 10px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:1px 6px;border-radius:999px;letter-spacing:.2px;white-space:nowrap;">'+
                     '+10 Pts'+
                    '</span>'+
                  '</div>',
                
                },
               


            ]
        },
       
        // {
        //     xtype: 'container',
        //     width: '100%',
        //     height: 35,
        // },


       ///////////Check-In Reward Original Location//
 
   ////////////////////////End Check-In Reward////////////////////////////
    {
        xtype: 'container',
        width: '100%',
       hidden: true,
       // id:'containerDashboard_MembershipInsight',
       margin: '-3 0 0 0',
        // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
        style: 'background-color:transparent',
        layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center',
        },
        items:[
{
    xtype: 'container',
    width: '33%', 
    height: 130,
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items:[
        {
            xtype: 'container',
    width: '90%', 
    height: 120,
    style: 'background-image: url("resources/icons/firstPrize01.png"); background-size: 99% 99%;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius:10px;',
    //style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: transparent;border-radius:10px;',
        }
    ]
},
{
    xtype: 'container',
    width: '33%', 
    height: 130,
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items:[
        {
            xtype: 'container',
    width: '90%', 
    height: 120,
    style: 'background-image: url("resources/icons/thirdPrize01.png"); background-size: 99% 99%;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius:10px;',
    //style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: transparent;border-radius:10px;',
        }
    ]
},
{
    xtype: 'container',
    width: '33%', 
    height: 130,
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items:[
        {
            xtype: 'container',
    width: '90%', 
    height: 120,
    style: 'background-image: url("resources/icons/forthPrize01.png"); background-size: 99% 99%;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius:10px;',
    //style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: transparent;border-radius:10px;',
        }
    ]
},


        ]
    },

    {
        width: '100%',
        hidden: true,
       // height: 330,
      //  html: '<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:#fafafb;padding:12px;">' +
        html: '<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;background:transparent;padding:0px;">' +
        '<div style="max-width:420px;margin:auto;">' +
    //    '<div style="display:flex;align-items:center;gap:8px;margin:0 0 10px 0;">' +
    //      '<i class="fa-solid fa-bolt" style="font-size:14px;color:#a855f7;"></i>' +
    //      '<div style="font-weight:700;color:#0f172a;font-size:13px;letter-spacing:.2px;">Today’s Insights</div>' +
    //    '</div>' +

      // '<div style="background:#ffffff;border-radius:12px 12px 0px 0px;padding:10px;box-shadow:0 2px 10px rgba(2,6,23,.06);">' +
       '<div style="background:transparent;border-radius:12px 12px 0px 0px;padding:0px 10px;box-shadow:0 2px 10px rgba(2,6,23,.06);">' +

         '<div style="display:flex;gap:10px;align-items:center;padding:8px;border:2px solid #f1f5f9;border-radius:10px;margin-bottom:8px;background:#ffffff;">' +
           '<div style="width:36px;height:36px;border-radius:9px;background:linear-gradient(135deg,#f3e8ff,#fae8ff);display:flex;align-items:center;justify-content:center;">' +
             '<i class="fa-solid fa-people-group" style="font-size:16px;color:#9333ea;"></i>' +
           '</div>' +
           '<div style="flex:1;min-width:0;">' +
             '<div style="display:flex;justify-content:space-between;gap:8px;">' +
               '<div style="font-weight:700;color:#111827;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Membership Activity</div>' +
               '<div style="font-weight:800;color:#111827;font-size:14px;">500<span style="font-weight:600;color:#64748b;"> pts</span></div>' +
             '</div>' +
             '<div style="display:flex;gap:8px;margin-top:4px;align-items:center;flex-wrap:wrap;">' +
               '<span style="font-size:11px;color:#6b7280;background:#f8fafc;border:1px solid #eef2f7;padding:3px 6px;border-radius:999px;white-space:nowrap;">from merchants</span>' +
               '<span style="font-size:11px;color:#475569;background:#f1f5f9;border:1px dashed #e2e8f0;padding:3px 6px;border-radius:999px;white-space:nowrap;">streak +3 days</span>' +
               '<span style="font-size:11px;color:#0ea5e9;background:#ecfeff;border:1px solid #bae6fd;padding:3px 6px;border-radius:999px;white-space:nowrap;"><i class="fa-regular fa-calendar" style="margin-right:5px;"></i> 2025-10-17</span>' +
             '</div>' +
           '</div>' +
         '</div>' +

         '<div style="display:flex;gap:10px;align-items:center;padding:8px;border:2px solid #f1f5f9;border-radius:10px;background:#ffffff;">' +
           '<div style="width:36px;height:36px;border-radius:9px;background:linear-gradient(135deg,#eef2ff,#f5f3ff);display:flex;align-items:center;justify-content:center;">' +
             '<i class="fa-solid fa-coins" style="font-size:16px;color:#7c3aed;"></i>' +
           '</div>' +
           '<div style="flex:1;min-width:0;">' +
             '<div style="display:flex;justify-content:space-between;gap:8px;">' +
               '<div style="font-weight:700;color:#111827;font-size:13px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Ayoha Points</div>' +
               '<div style="font-weight:800;color:#111827;font-size:14px;">10<span style="font-weight:600;color:#64748b;"> pts</span></div>' +
             '</div>' +
             '<div style="display:flex;gap:8px;margin-top:4px;align-items:center;flex-wrap:wrap;">' +
               '<span style="font-size:11px;color:#16a34a;background:#ecfdf5;border:1px solid #bbf7d0;padding:3px 6px;border-radius:999px;white-space:nowrap;">+10 today</span>' +
               '<span style="font-size:11px;color:#ef4444;background:#fef2f2;border:1px solid #fecaca;padding:3px 6px;border-radius:999px;white-space:nowrap;">120 expire in 5d</span>' +
               '<span style="font-size:11px;color:#0ea5e9;background:#ecfeff;border:1px solid #bae6fd;padding:3px 6px;border-radius:999px;white-space:nowrap;"><i class="fa-regular fa-calendar" style="margin-right:5px;"></i> 2025-10-17</span>' +
             '</div>' +
           '</div>' +
         '</div>' +


       '</div>' +
     '</div>' +
   '</div>'

    //    // html: '<div style="font-family: Arial, sans-serif; background-color: #f4f4f9; padding: 20px;">' +
    //     html: '<div style="font-family: Arial, sans-serif; background-color: transparent; padding: 20px;">' +
    //     '<div style="max-width: 400px; margin: auto; background-color: #ffffff; border-radius: 12px; padding: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">' +
   
    //       '<div style="display: flex; justify-content: space-around; text-align: center;">' +
    //         '<div style="flex: 1; padding: 0 5px;">' +
    //           '<div style="width: 45px; height: 45px; margin: 0 auto 8px auto; background-color: #f3e5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
    //             '<i class="fa-solid fa-star" style="color: #9c27b0; font-size: 20px;"></i>' +
    //           '</div>' +
    //           '<div style="font-size: 22px; font-weight: bold; color: #333;">6</div>' +
    //           '<div style="font-size: 11px; color: #757575; line-height: 1.3;">Membership<br>Cards</div>' +
    //         '</div>' +
   
    //         '<div style="flex: 1; padding: 0 5px;">' +
    //           '<div style="width: 45px; height: 45px; margin: 0 auto 8px auto; background-color: #f3e5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
    //             '<i class="fa-solid fa-gift" style="color: #9c27b0; font-size: 20px;"></i>' +
    //           '</div>' +
    //           '<div style="font-size: 22px; font-weight: bold; color: #333;">18</div>' +
    //           '<div style="font-size: 11px; color: #757575; line-height: 1.3;">Available<br>Perks</div>' +
    //         '</div>' +
   
    //         '<div style="flex: 1; padding: 0 5px;">' +
    //           '<div style="width: 45px; height: 45px; margin: 0 auto 8px auto; background-color: #f3e5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
    //             '<i class="fa-solid fa-hourglass-half" style="color: #9c27b0; font-size: 20px;"></i>' +
    //           '</div>' +
    //           '<div style="font-size: 22px; font-weight: bold; color: #e53935;">120</div>' +
    //           '<div style="font-size: 11px; color: #757575; line-height: 1.3;">Pts expiring<br>in 5 days</div>' +
    //         '</div>' +
    //       '</div>' +
   
    //       '<div style="height: 1px; background-color: #eeeeee; margin: 15px 0;"></div>' +
   
    //       '<div style="display: flex; justify-content: space-around; text-align: center;">' +
    //         '<div style="flex: 1; padding: 0 5px;">' +
    //           '<div style="width: 45px; height: 45px; margin: 0 auto 8px auto; background-color: #f3e5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
    //             '<i class="fa-solid fa-store" style="color: #9c27b0; font-size: 20px;"></i>' +
    //           '</div>' +
    //           '<div style="font-size: 22px; font-weight: bold; color: #333;">32</div>' +
    //           '<div style="font-size: 11px; color: #757575; line-height: 1.3;">Total<br>Visits</div>' +
    //         '</div>' +
   
    //         '<div style="flex: 1; padding: 0 5px;">' +
    //           '<div style="width: 45px; height: 45px; margin: 0 auto 8px auto; background-color: #f3e5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
    //             '<i class="fa-solid fa-ticket" style="color: #9c27b0; font-size: 20px;"></i>' +
    //           '</div>' +
    //           '<div style="font-size: 22px; font-weight: bold; color: #333;">5</div>' +
    //           '<div style="font-size: 11px; color: #757575; line-height: 1.3;">Rewards<br>Redeemed</div>' +
    //         '</div>' +
   
    //         '<div style="flex: 1; padding: 0 5px;">' +
    //           '<div style="width: 45px; height: 45px; margin: 0 auto 8px auto; background-color: #f3e5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center;">' +
    //             '<i class="fa-solid fa-coins" style="color: #9c27b0; font-size: 20px;"></i>' +
    //           '</div>' +
    //           '<div style="font-size: 22px; font-weight: bold; color: #333;">2,355</div>' +
    //           '<div style="font-size: 11px; color: #757575; line-height: 1.3;">Total Pts<br>Earned</div>' +
    //         '</div>' +
    //       '</div>' +
   
    //     '</div>' +
    //   '</div>'
   
    }
    ]
 },

 
                   
                //    {
                //     xtype: 'container',
                           
                //     //style: 'background-image: url("resources/icons/bgfront06.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                //    // style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                //    style: 'background-image: url("resources/icons/Herosection/HeroAI.png"); background-size: 100% 390px;background-repeat: no-repeat;',
                //     width: '100%',
                //     height: 390,
                //     title: 'Dashboard_AyohaReward_AyohaMerchant_Advertisement',
                //   // style: "background-color: transparent;",
                //     layout: {
                //         type: 'vbox',
                //         pack: 'start',
                //         align: 'center'

                //     },
                //    },
                   
                   
                    
                //    {
                //     xtype: 'container',
                           
                //     //style: 'background-image: url("resources/icons/bgfront06.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                //    // style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                  
                //    style: 'background-image: url("resources/icons/Herosection/Gemini_Generated_Image_x4ortx4ortx4ortx.png"); background-size: 100% 390px;background-repeat: no-repeat;',
                  
                //     width: '100%',
                //     height: 390,
                //     title: 'Dashboard_AyohaReward_AyohaMerchant_Advertisement1',
                //   // style: "background-color: transparent;",
                //     layout: {
                //         type: 'vbox',
                //         pack: 'start',
                //         align: 'center'

                //     },
                //    },
                   
                   
                   
                    ]
                    },
                    
                    
                    
             {
                xtype: 'container',
               //margin: '170 0 0 0',
                margin: '-80 0 0 0',
             //  docked:'bottom',
              //  margin: '-45 0 0 0',
             hidden:true,
               zIndex: 200,
                id: 'containerMyAccount_DashboardAdvertisementPremium',
               // name: 'namecontainerMyAccount_DashboardMyReward',
             
              // style: 'background-color:yellow;',
               style: 'background-color:transparent;',
                //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
            
                height: 50,
                width: '100%',
                layout: {
            
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'
                },
                items: [
                    //{
                    //    xtype: 'panel',
                    //    width:1
                    //},
                    {
                        xtype: 'container', 
                        id: 'containerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo',
                        name: 'namecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo',                        
                        width: '70%',
                       height: 50,
                       //hidden:true,
                       style: 'background-color:transparent;',
                       zIndex: 200,
                       layout: {
            
                        type: 'hbox',
                        pack: 'start',
                        align: 'center'
                    },
                       items:[
                       
                        {
                            xtype: 'container',
                            width: '24%',
                            id: 'containerDashboard_AyohaStore_Logo',
                            height: 50,
                           // style: 'background-color:transparent;',
                            margin: '0 0 0 0',
                            //style: {
                            //    // background: '#D25959',
                            //    background: 'rgba(76, 175, 80, 0.3);',
                            //    // border: '2px'
                            //},
                           //  style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: white;',
                          style: 'background-color:transparent',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                                  {
                                      //xtype: 'button',
                                      //height: 75,
                                      //width: 75,
                                    //   height: 50,
                                    //   width: '100%',
                                      margin: '0 0 0 16',
                                      id: 'htmlDashboard_AyohaStore_CompanyLogo',
                                      //badgeText: "2",
                                      //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                                      html: '<div style="width: 50px; height: 47px ; z-index: 200 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="50" height="47" alt="Company Name"></div>',

                                  },

                            ]
                        },
                        {
                            xtype: 'spacer',
                            width: 10
                        },
                           {
                               xtype: 'container',
                               width: '74%',
                               id: 'containerDashboard_AyohaStore_CompanyInfo',


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

                                          id: 'htmlDashboard_AyohaStore_CompanyInfo_Name',
                                          width: '100%',
                                          html: '<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',


                                      },
                                       {

                                           id: 'htmlDashboard_AyohaStore_CompanyInfo_Line',
                                           width: '100%',
                                           margin: '0 0 0 0',
                                           html: '<div style="background-color:white;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',


                                       },
                                       {

                                           id: 'htmlDashboard_AyohaStore_CompanyInfo_Tagline',

                                           width: '100%',
                                           // iconCls: 'list',
                                           //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                           html: '<div style="color:white;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Burger padu bak hang!</div>',


                                       },
                                       

                               ]
                           },
                       ]

                    },

                    {
                        xtype: 'container',
                        zIndex: 100,
                        width: '30%',
                       height: 50,
                       layout: {
            
                        type: 'hbox',
                        pack: 'end',
                        align: 'center'
                    },
                       items:[

                     

//                         {

//                             xtype: 'container',
//                           //  width: '30%',
//                           id: 'containerDashbord_MyAyohaStoreRateReview',
//                           name: 'namecontainerDashbord_MyAyohaStoreRateReview',
//                             width: '60%',
//                             hidden: true,
//                             //margin:'0 0 0 0',
//                             height: 35,
//                             style: 'background-color: transparent;',
//                            // id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',

//                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                             layout: {
//                                 type: 'vbox',
//                                 pack: 'center',
//                                 align: 'center',
//                             },
//                             items: [
//                                 {
//                                     xtype: 'container',
//                                     width: '100%',
//                                    // flex: 1,
//                                     margin: '-5 0 0 0',
//                                     height: 50,
//                                     id: 'containerDashbord_ReviewAndRate',
//                                    // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
//                                     // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                     style: "background-color: transparent;",
//                                     layout: {
//                                         type: 'vbox',
//                                         pack: 'center',
//                                         align: 'center'

//                                     },
//                                     items: [
//                                         {
//                                             margin: '0 0 0 0',
//                                             id: 'htmlDashbord_ReviewAndRateCount',
//                                             html: '<div style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',

//                                         },

//                                         {
//                                             xtype: 'container',
//                                             width: '100%',
//                                             margin: '-12 0 0 0',
//                                             height: 9,
//                                             // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                             style: "background-color: transparent;",
//                                             layout: {
//                                                 type: 'hbox',
//                                                 pack: 'center',
//                                                 align: 'center'

//                                             },
//                                             items: [

//                                                 {
//                                                     id: 'htmlDashbord_Star1',
//                                                     height: 9,
//                                                     width: 9,
//                                                     html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
//                                                 },
// {
// id: 'htmlDashbord_Star2',
// height: 9,
// width: 9,
// html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// },
// {
// id: 'htmlDashbord_Star3',
// height: 9,
// width: 9,
// html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// },
// {
// id: 'htmlDashbord_Star4',
// height: 9,
// width: 9,
// html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// },
// {
// id: 'htmlDashbord_Star5',
// height: 9,
// width: 9,
// html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',

// },
//                                             ]
//                                         },

//                                         {
//                                             xtype: 'container',
//                                             width: '100%',
//                                             margin: '10 0 0 0',
//                                             height: 9,
//                                             layout: {
//                                                 type: 'hbox',
//                                                 pack: 'center',
//                                                 align: 'center'
//                                             },
//                                             items: [
//                                                 {
//                                                     id: 'htmlDashbord_ReviewByCount',
//                                                     html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:white;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
//                                                 },
//                                             ]
//                                         },
//                                          //{
//                                          //    margin: '0 0 0 0',
//                                          //    height: 15,
//                                          //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
//                                          //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
//                                          //}
//                                     ]
//                                 },
//                             ]
//                         },




                        // {
                        //     xtype: 'container',
                        //     zIndex: 100,
                        //    // hidden:true,
                        //    height:30,
                        //    width: 30,                                                         
                        //     //margin: '10 0 0 0',
                        //     margin: '-10 0 0 0',
                        //     // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                        //     id: 'containerDashbord_MyAyohaStoreRateReview',
                        //     name: 'namecontainerDashbord_MyAyohaStoreRateReview',
                        //     hidden:true,
                        //     // name: 'namecontainerFloatPanel_AyohaStoreMyCart',
                        //     style: 'background-color:transparent;',                                               
                        //  //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                        //     layout: {
                        //         type: 'vbox',
                        //         pack: 'center',
                        //         align: 'center'
                        
                        //     },
                        //     items: [
                        
                      
                        // {
                        //     margin: '2 0 0 0',
                        //     // hidden: true,
                        //     width: 18,
                        //     height: 18,
                        //     html: '<img src="resources/icons/MerchantpageIcon.png" alt="Image" style="width:28px;height:28px;">',
                        //     // ui:'plain'
                        // },
                        
                        
                        //     ]
                        // },
                        {
                            xtype: 'panel',
                           width: 7
                           // width: 3
                        },


                        {
                            xtype: 'container',
                            id: 'containerDashbord_MyAyohaStore',
                            name: 'namecontainerDashbord_MyAyohaStore',
                            hidden:true,
                            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                            height: 40,
                            width: 40,
                            margin: '0 0 0 0',
                            layout: {

                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    //xtype: 'button',
                                    //id: 'btnMyAccount_DashboardEwalletIcon',
                                    height: 20,
                                    width: 20,
                                    margin: '0 0 0 0',
                                    // iconCls: 'list',
                                    //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                    html: '<div ><img src="resources/icons/onlineStore.jpg" style ="width:20px;height:20px;" alt="Company Name"></div>',
                                    // ui: 'plain',
                                    //handler: function () {

                                    //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                    //    //    type: 'slideOut',
                                    //    //    direction: 'left',
                                    //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                    //    //    duration: 250

                                    //    //}));
                                    //    //isLoyaltyCardRedeemListOpen = 'N';
                                    //}
                                },
                            ]
                        },




                        // {
                        //     xtype: 'container',
                        //     zIndex: 100,
                        //     height: 30,
                        //     width: 30,
                        //     hidden:true,
                        //    // margin: '10 0 0 0',
                        //    margin: '-10 0 0 0',
                        //     // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                        //     id: 'containerDashbord_MyAyohaStore',
                        //     name: 'namecontainerDashbord_MyAyohaStore',
                        //     style: 'background-color:transparent;',
                        //    //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                        //     layout: {
                        //         type: 'vbox',
                        //         pack: 'center',
                        //         align: 'center'
                        
                        //     },
                        //     items: [
                        
                       
                        // {
                        //     margin: '2 2 0 0',
                        //     // hidden: true,
                        //     width: 18,
                        //     height: 18,
                        //     html: '<img src="resources/icons/AyohaStoreWhite.png" alt="Image" style="width:28px;height:28px;">',
                        //     // ui:'plain'
                        // },
                        
                        
                        //     ]
                        // },
                       ]

                    },
                  
              {
                       xtype: 'spacer',
                       width:20
                    },
                ]
            },
                    
                    

                       

                   

                 ]
             },

////////////////////////////////// Check-In Reward/////
{
    xtype: 'container',
    width: '100%',
    height:40
},
{
    xtype: 'container',
    width: '100%',
   // hidden: false,
    id:'containerDashboard_MembershipInsight',
   // margin: '0 0 0 0',
  // margin: '20 0 0 0',
    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    items: [
         {
            
             margin: '10 0 0 14',
             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            html: '<div style="color:black;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Check-In Rewards</b></div><br><div style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">Tap “Check-In” to redeem at<b> <u>kopi surat cinta-putrajaya!</u></b></div>'
            // html: '<span style="font-size:10px;color:#16a34a;background:#ecfdf5;border:1px solid #bbf7d0;padding:3px 6px;border-radius:999px;white-space:nowrap;">Get available perks in selected Check-In Merchant!</span><br><div style="color:white;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">One Hub • Double Reward,Get your exiciting perks!</div>'
             
         },
         {
             xtype: 'spacer'
         },
         {

            margin: '0 14 0 14',
            hidden:true,
            html: '<div onclick="FloatPanel_AyohaEnterpriseRewardItemShow();" style="background-color: transparent; color: white; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 10px; padding: 3px 6px; border-radius: 50px; display: inline-block; text-align: center; white-space: nowrap;margin:5px 0px 0px 0px;"><u>View All</u></div>'
        
        },
       


    ]
},



    {

        id: 'Dashboard_MyAccount_MembershipPerksList',
       // margin: '1 0 0 0',
       margin: '2 0 0 20',
        xtype: 'dataview',
        //height: 150,
        height: 100,
        style: 'background-color:rgba(255,255,255, 0);border-radius: 0px 0px 0px 0px;',
        //style: "background-color: white;",
        inline: {
            wrap: false
        },
        scrollable: {
            direction: 'horizontal',
            indicators: false,
        },
       // store:_DataStore_VIEW_merchantperk_View_LoadbySubscriberAccNoStore,
       width: '90%',
        //width: '95%',
 
       // itemTpl:'<div style="border:2px solid #fac;width:100px; display:inline-block; margin-right:12px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#111827; border-radius:10px 10px 10px 10px; box-shadow:0 10px 25px rgba(0,0,0,.12); overflow:hidden; background:#fff;">' +
itemTpl:'<div onclick="FloatPanel_AyohaEnterpriseRewardItem_MembershipCardLoadByMembershipCardCodeStore(`{MembershipCardCode}`,`{EnterpriseCountStar}`,`{EnterpriseAccNo}`,`{TotalReviewer}`);" style="border:2px solid #E5E7EB;width:85px; display:inline-block; margin-right:12px; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#111827; border-radius:10px 10px 10px 10px;overflow:hidden; background:#fff;">' +
'<div style="position:relative; width:100%; height:60px; overflow:visible;">' +  
'{ModifiedImagePath_Dashboard}' +
'<div style="position:absolute; top:6px; left:6px; width:40px; {Modified_DashboardHeight}; background:{ModifiedCampaignColor}; color:#fff; border-radius:10px; display:none; flex-direction:column; align-items:center; justify-content:center; gap:2px; text-align:center; font-weight:800; z-index:3; box-shadow:0 8px 18px rgba(0,0,0,.18); border:1px solid #fff;">' +
'<span style="font-size:8px; line-height:1; {ModifiedtagMargin};">{ItemType}</span>{ModifiedAmount_Dashboard}' +   
'</div>' +
'</div>' +
'<div style="padding:5px 6px;">' +
'<div style="display:flex; align-items:flex-start; gap:10px;">' +
'<div style="flex:1 1 auto;">' +
  '<h3 style="margin:0; font-size:10px; font-weight:normal; color:#111827;">{ModifiedName}</h3>' +
  //'<div style="margin-top:4px; color:#6b7280; font-size:8px; line-height:1.4; border-top:1px solid #e5e7eb; padding-bottom:1px; text-align:left;">{EnterpriseName}</div>' +
'</div>' +
'</div>' +
'</div>' +
'</div>',


    


        emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

    },



//////////

  
            

            {
                xtype: 'container',
                width: '100%',
                hidden: false,
                id:'containerDashboard_AyohaMerchantMembershipCardList',
                margin: '0 0 0 0',
                // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                style: 'background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [
                     {
                         margin: '10 0 0 14',
                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                         html: '<div style="color:black;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Membership Hubs</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">Tap the card to see what’s included and how it pays back</div>'
                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                     },
                     {
                         xtype: 'spacer'
                     },
                     {

                        margin: '0 14 0 0',
                     
                        html: '<div onclick="FloatPanel_Membership_MembershipCardHubsShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
                    
                    },
                    //   {
                    //       xtype: 'button',
                    //       id: 'btnMyDashboard_AyohaMerchantMembershipCardList',
                    //       //hidden:true,
                    //       //  badgeText: '1',
                    //       margin: '0 10 0 0',
                    //       height: 35,
                    //       width: 35,
                    //       html: '<img src="resources/icons/membershipPurpleThree.png" width="25" height="25" alt="Company Name">',
                    //       ui: 'plain',
                    //       handler: function () {
                    //         FloatPanel_Membership_MembershipCardHubsShow();
                    //       }
                    //   },



                ]
            },

            // {
            //     margin: '-70 0 0 0',
            //     width: '100%',
            //    // height: 300,
            //     xtype: 'imagecarousel' // Use the xtype you defined
              
            // },

            {

                id: 'Dashboard_MyAccount_UnSubscribedMembershipCardList_front',
                margin: '3 0 0 20',
                xtype: 'dataview',
                height: 220,
                style: "background-color: transparent;",
                inline: {
                    wrap: false
                },
                scrollable: {
                    direction: 'horizontal',
                    indicators: false,
                },
                width: '90%',
              



                itemTpl: new Ext.XTemplate(
                    // TPL for the "View More" card
                    '<tpl if="isLoadMore">',
                        // Use the EXACT SAME outer structure as the regular card
                        '<div class="myContent" style="background-color:transparent;width:320px;height:auto;">', // Matched width, auto height
                            // This is the dashed box, replacing the regular card's visual part
                            '<div style="margin:0px 0px 0px 0px;width:300px;height:180px; border: 2px dashed #b0b0b0; border-radius: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; cursor: pointer; color: #444; font-family: Arial, sans-serif;" OnClick="FloatPanel_Membership_MembershipCardHubsShow()">',
                                '<img src="resources/icons/membershipPurpleThree.png" width="32" height="32" alt="Company Name">',
                                '<div style="margin-top: 10px; font-size: 15px; font-weight: bold;">View More <br> Membership Card</div>',
                            '</div>',
                            
                            // Replicate the space below the card using visibility:hidden
                            '<div style="visibility:hidden; margin:5px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">RM<br><div style="margin:-5px 0px 0px 0px;font-size:10px;font-weight:normal">Membership Fees</div></div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px"></div></div>',
                            '<br>',
                            '<div style="visibility:hidden; margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><div style="margin:0px 25px 0px 0px;font-size:10px;font-weight:normal;"><img src="resources/icons/getItNow01.png" style="width:90px;height:25px;"></div></div></div></div>',
                        '</div>',
                    '</tpl>',
                
                    // TPL for the regular membership card (no changes here)
                    '<tpl if="!isLoadMore">',
                        '<div class="myContent" style="background-color:transparent;width:320px;height:auto;">',
                            '<div style="margin:0px 0px 0px 0px;width:300px;height:180px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                            '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:0px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:{ModifiedPaddingHeight} 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-5px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:20px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                            '</div>' + // Note: There was a missing closing </div> tag here in your original code
                            '<div style="margin:5px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">RM{MembershipCardFee}<br><div style="margin:-5px 0px 0px 0px;font-size:10px;font-weight:normal">Membership Fees</div></div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px"></div></div>' +
                            '<br><div style="margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><div style="margin:0px 25px 0px 0px;font-size:10px;font-weight:normal;"><img src="resources/icons/getItNow01.png" style="width:90px;height:25px;"></div></div></div></div>',
                        '</div>', // Closing myContent
                    '</tpl>'
                ),


            //     itemTpl: '<div class="myContent" style="background-color:transparent;width:320px;height:180px;"><div style="margin:0px 0px 0px 0px;width:300px;height:180px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +           
            //                  '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:0px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:{ModifiedPaddingHeight} 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-5px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:20px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +                                                           '</div></div>' +                            
            //   '<div style="margin:5px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">RM{MembershipCardFee}<br><div style="margin:-5px 0px 0px 0px;font-size:10px;font-weight:normal">Membership Fees</div></div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px"></div></div>' +                          
            //                             '<br><div style="margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><div style="margin:0px 25px 0px 0px;font-size:10px;font-weight:normal;">Tap Card For Details Info</div></div></div></div>',




                emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

            },



            // {
            //     margin: '0 0 0 14',
            //     width:'100%',
            //     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //     html: '<div style="color:black;text-align: left;font-size:16px;width:100%;margin:0px 0px 0px 0px"><b>Ayoha Merchant Loyalty Campaign</b></div><br><div  style="color:transparent;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">- One hub. Double Reward. -</div>'
            //     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            // },


            {
                xtype: 'container',
                width: '100%',
                hidden: false,
                id:'containerDashboard_AyohaMerchantLoyaltyCampaignList',
                margin: '20 0 0 0',
                // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                style: 'background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [
                     {
                         margin: '10 0 0 14',
                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                         html: '<div style="color:black;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Membership Loyalty Campaigns</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">Member only benefits,turn your transactions into a reward</div>'
                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                     },
                     {
                         xtype: 'spacer'
                     },
                     {

                        margin: '0 14 0 0',
                     
                        html: '<div onclick="FloatPanel_AyohaEnterpriseRewardItemShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
                    
                    },
                    //   {
                    //       xtype: 'button',
                    //       id: 'btnMyDashboard_AyohaMerchantLoyaltyCampaign',
                    //       //hidden:true,
                    //       //  badgeText: '1',
                    //       margin: '0 10 0 0',
                    //       height: 35,
                    //       width: 35,
                    //       html: '<div onclick="FloatPanel_FloatingAdvertisementShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>',
                    //     //  html: '<img src="resources/icons/merchantreward01.png" width="25" height="25" alt="Company Name">',
                    //       ui: 'plain',
                    //       handler: function () {
                    //         LoadingPanelShow(getLoadingIcon(), 'Loading....');
                    //           FloatPanel_AyohaEnterpriseRewardItemShow();
                    //       }
                    //   },



                ]
            },







            {
                xtype: 'container',
                width: '100%',
                height:90,
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
                align: 'center',
                },
                items:[
                  
                    

                    {
                        xtype: 'container',
                       // width: '33.3%',
                       //width: 150,
                       width: '25%',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                               // width: '90%',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '19 0 0 0',
                                id:'containerMyAccount_Dashboard_StampCardLoyaltyID',
                                name:'namecontainerMyAccount_Dashboard_StampCardLoyalty',
                                style: 'background-color:transparent',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                        //hidden: true,
                                        zIndex:10,
                                        //id:'txtMyAccount_Dashboard_StampCardLoyaltyBadgeID',
                                     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                  html:' <div id="txtMyAccount_Dashboard_StampCardLoyaltyBadgeID" style="'+
                                  'position: absolute;'+
                                  'top: -10px;display:none;'+
                                  'right: -5px;'+
                                    //'background-color: #FF1493;'+
                                    'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                                  'color: white;'+
                                  'border-radius: 50%;'+ 
                                  'width: 28px;'+
                                  'height: 28px;'+
                                  'font-size: 12px;'+
                                  'font-weight: bold;'+
                                 // 'display: flex;'+
                                  'align-items: center;'+
                                  'justify-content: center;'+
                                  'border: 2px solid white; '+
                                  '">'+
                                  '0'+
                                  '</div>',
                                  
                                  
                                    },
                                    {



                                        // html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        // '<img src="resources/icons/merchantreward01.png" style="width: 30px; height: 30px; margin-bottom: 5px;" />'+ 
                                        // '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;">'+ 
                                        // 'Merchant<br>'+ 
                                        // '<span style="display: block; margin-top: -4px;">Reward</span>'+ 
                                        // '</div>'+ 
                                        // '</div>'

                                        margin: '-15 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">' + 
                                      //  '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                     
                                        '<img src="resources/icons/stampedFeature01.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                                          //  '</div>' + 
                                            '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">' + 
                                                'Stamp Card<br>' + 
                                                '<span style="display: block; margin-top: -2px;">Loyalty</span>' +                                            
                                       '</div>' + 
                                    '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                       // width: '33.3%',
                       width: '25%',
                     //  width: 150,
                        // id:'containerMyAccount_Dashboard_MembershipCardHub',
                        // name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
                        id:'containerMyAccount_Dashboard_PointCardLoyaltyID',
                        name:'namecontainerMyAccount_Dashboard_PointCardLoyalty',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '19 0 0 0',
                                style: 'background-color:transparent',
                               // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                       // hidden: true,
                                        zIndex:10,
                                        //id:'txtMyAccount_Dashboard_PointCardLoyaltyBadgeID',
                                     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                  html:' <div id="txtMyAccount_Dashboard_PointCardLoyaltyBadgeID" style="'+
                                  'position: absolute;display:none;'+
                                  'top: -10px;'+
                                  'right: -5px;'+
                                    //'background-color: #FF1493;'+
                                    'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                                  'color: white;'+
                                  'border-radius: 50%;'+ 
                                  'width: 28px;'+
                                  'height: 28px;'+
                                  'font-size: 12px;'+
                                  'font-weight: bold;'+
                                 // 'display: flex;'+
                                  'align-items: center;'+
                                  'justify-content: center;'+
                                  'border: 2px solid white; '+
                                  '">'+
                                  '3'+
                                  '</div>',
                                  
                                  
                                    },
                                    {


                                        margin: '-15 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                       // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/PointFeature01.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                                       // '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                                        'Point<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Loyalty</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                       // width: '33.3%',
                      // width: 150,
                      width: '25%',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        id:'containerMyAccount_Dashboard_DiscountCardLoyaltyID',
                        name:'namecontainerMyAccount_Dashboard_DiscountCardLoyalty',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '19 0 0 0',
                                style: 'background-color:transparent',
                                // id:'containerMyAccount_Dashboard_AyohaMerchantStoreID',
                                // name:'nameContainerMyAccount_Dashboard_AyohaMerchantStore',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                       // hidden: true,
                                        zIndex:10,
                                       // id:'txtMyAccount_Dashboard_DiscountCardLoyaltyBadgeID',
                                     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                  html:' <div id="txtMyAccount_Dashboard_DiscountCardLoyaltyBadgeID" style="'+
                                  'position: absolute;display:none;'+
                                  'top: -10px;'+
                                  'right: -5px;'+
                                    //'background-color: #FF1493;'+
                                    'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                                  'color: white;'+
                                  'border-radius: 50%;'+ 
                                  'width: 28px;'+
                                  'height: 28px;'+
                                  'font-size: 12px;'+
                                  'font-weight: bold;'+
                                  //'display: flex;'+
                                  'align-items: center;'+
                                  'justify-content: center;'+
                                  'border: 2px solid white; '+
                                  '">'+
                                  '3'+
                                  '</div>',
                                  
                                  
                                    },

                                    {

                                        margin: '-15 0 0 0',
                                       // margin: '5 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                      //  '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/MembershipFeature01.png" style="width: 30px; height: 30px; margin-bottom: 5px;" />'+ 
                                       // '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                                        'Membership<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Discount</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },



                    {
                        xtype: 'container',
                       // width: '33.3%',
                      // width: 150,
                      width: '25%',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        id:'containerMyAccount_Dashboard_ContestCardLoyaltyID',
                        name:'namecontainerMyAccount_Dashboard_ContestCardLoyalty',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',                     
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '19 0 0 0',
                                style: 'background-color:transparent',
                                // id:'containerMyAccount_Dashboard_AyohaMerchantShoppingBagID',
                                // name:'nameMyAccount_Dashboard_AyohaMerchantShoppingBag',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                       // hidden: true,
                                        zIndex:10,
                                       // id:'txtMyAccount_Dashboard_ContestCardLoyaltyBadgeID',
                                     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                  html:' <div id="txtMyAccount_Dashboard_ContestCardLoyaltyBadgeID" style="'+
                                  'position: absolute;display:none;'+
                                  'top: -10px;'+
                                  'right: -5px;'+
                                   //'background-color: #FF1493;'+
                                   'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                                  'color: white;'+
                                  'border-radius: 50%;'+ 
                                  'width: 28px;'+
                                  'height: 28px;'+
                                  'font-size: 12px;'+
                                  'font-weight: bold;'+
                                 // 'display: flex;'+
                                  'align-items: center;'+
                                  'justify-content: center;'+
                                  'border: 2px solid white; '+
                                  '">'+
                                  '3'+
                                  '</div>',
                                  
                                  
                                    },
                                    {


                                        margin: '-15 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        //'<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/ContestFeature01.png" style="width: 30px; height: 30px; margin-bottom: 5px;" ></img>'+ 
                                       // '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center; margin: 4px 0px 0px 0px;">'+ 
                                        'Membership<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Contest</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                               
                                   
                                   
                                ]
                            }
                        ]
                    },
                ]
            },






            {
                xtype: 'container',
                width: '100%',
                height:90,
                hidden: false,
                margin: '20 0 0 0',
                style: 'background-color:transparent',
                // scrollable: {
                //     direction: 'horizontal',
                //     directionLock: true,
                //     indicators: false
                // },
                layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center',
                },
                items:[
                  
                    

                    {
                        xtype: 'container',
                       // width: '33.3%',
                       //width: 150,
                       width: '25%',
                        height:80,
                        id:'containerMyAccount_Dashboard_VoucherCardLoyaltyID',
                        name:'namecontainerMyAccount_Dashboard_VoucherCardLoyalty',
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                               // width: '90%',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '0 0 0 0',
                                // id:'containerMyAccount_Dashboard_AyohaMerchantRewardID',
                                // name:'nameContainerMyAccount_Dashboard_AyohaMerchantReward',
                                style: 'background-color:transparent',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                       // hidden: true,
                                        zIndex:10,
                                       // id:'txtMyAccount_Dashboard_VoucherCardLoyaltyBadgeID',
                                     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                  html:' <div id="txtMyAccount_Dashboard_VoucherCardLoyaltyBadgeID" style="'+
                                  'position: absolute;display:none;'+
                                  'top: -10px;'+
                                  'right: -5px;'+
                                  //'background-color: #FF1493;'+
                                  'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                                  'color: white;'+
                                  'border-radius: 50%;'+ 
                                  'width: 28px;'+
                                  'height: 28px;'+
                                  'font-size: 12px;'+
                                  'font-weight: bold;'+
                                  //'display: flex;'+
                                  'align-items: center;'+
                                  'justify-content: center;'+
                                  'border: 2px solid white; '+
                                  '">'+
                                  '0'+
                                  '</div>',
                                  
                                  
                                    },
                                    {



                                        // html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        // '<img src="resources/icons/merchantreward01.png" style="width: 30px; height: 30px; margin-bottom: 5px;" />'+ 
                                        // '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;">'+ 
                                        // 'Merchant<br>'+ 
                                        // '<span style="display: block; margin-top: -4px;">Reward</span>'+ 
                                        // '</div>'+ 
                                        // '</div>'

                                        margin: '-15 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">' + 
                                      //  '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                     
                                        '<img src="resources/icons/VoucherFeature01.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                                          //  '</div>' + 
                                            '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">' + 
                                                'Voucher<br>' + 
                                                '<span style="display: block; margin-top: -2px;">Loyalty</span>' +                                            
                                       '</div>' + 
                                    '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                       // width: '33.3%',
                       width: '25%',
                     //  width: 150,
                        // id:'containerMyAccount_Dashboard_MembershipCardHub',
                        // name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        id:'containerMyAccount_Dashboard_EventCardLoyaltyID',
                        name:'namecontainerMyAccount_Dashboard_EventCardLoyalty',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '0 0 0 0',
                                style: 'background-color:transparent',
                               // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                       // hidden: true,
                                        zIndex:10,
                                        //id:'txtMyAccount_Dashboard_EventCardLoyaltyBadgeID',
                                     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                  html:'<div id="txtMyAccount_Dashboard_EventCardLoyaltyBadgeID" style="'+
                                  'position: absolute;display:none;'+
                                  'top: -10px;'+
                                  'right: -5px;'+
                                  //'background-color: #FF1493;'+
                                  'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                                  'color: white;'+
                                  'border-radius: 50%;'+ 
                                  'width: 28px;'+
                                  'height: 28px;'+
                                  'font-size: 12px;'+
                                  'font-weight: bold;'+
                                  //'display: flex;'+
                                  'align-items: center;'+
                                  'justify-content: center;'+
                                  'border: 2px solid white; '+
                                  '">'+
                                  '0'+
                                  '</div>',
                                  
                                  
                                    },
                                    {


                                        margin: '-15 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                       // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/EventFeature01.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                                       // '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                                        'Membership<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Event</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },


/////////////////////////////////gamification

{
    xtype: 'container',
   // width: '33.3%',
   width: '25%',
 //  width: 150,
    // id:'containerMyAccount_Dashboard_MembershipCardHub',
    // name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
    height:80,
    hidden: false,
    margin: '0 0 0 0',
    id:'containerMyAccount_Dashboard_GamificationCardLoyaltyID',
    name:'namecontainerMyAccount_Dashboard_GamificationCardLoyalty',
    style: 'background-color:transparent',
    layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center',
    },items:[
        {
            xtype: 'container',
            width: '100%',
            height:80,
            hidden: false,
            margin: '0 0 0 0',
            style: 'background-color:transparent',
           // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
            layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center',
            },items:[
                {
                    margin: '0 0 0 28',
                    height: 20,
                    width: 20,
                   // hidden: true,
                    zIndex:10,
                    //id:'txtMyAccount_Dashboard_EventCardLoyaltyBadgeID',
                 // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
              html:'<div id="txtMyAccount_Dashboard_GamificationCardLoyaltyBadgeID" style="'+
              'position: absolute;display:none;'+
              'top: -10px;'+
              'right: -5px;'+
              //'background-color: #FF1493;'+
              'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
              'color: white;'+
              'border-radius: 50%;'+ 
              'width: 28px;'+
              'height: 28px;'+
              'font-size: 12px;'+
              'font-weight: bold;'+
              //'display: flex;'+
              'align-items: center;'+
              'justify-content: center;'+
              'border: 2px solid white; '+
              '">'+
              '0'+
              '</div>',
              
              
                },
                {


                    margin: '-15 0 0 0',
                    html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                   // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                    '<img src="resources/icons/gameficationIcon_9CA3AF.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                   // '</div>' + 
                    '<div style="font-size: 10px; font-weight: normal; color: #9CA3AF; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                    'Game<br>'+ 
                    '<span style="display: block; margin-top: -2px;">Quests</span>'+ 
                    '</div>'+ 
                    '</div>'
                     
                            
                            },
               
               
            ]
        }
    ]
},

/////////////////////////////////

/////////////////////////////////Referral

{
    xtype: 'container',
   // width: '33.3%',
   width: '25%',
 //  width: 150,
    // id:'containerMyAccount_Dashboard_MembershipCardHub',
    // name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
    height:80,
    hidden: false,
    margin: '0 0 0 0',
    id:'containerMyAccount_Dashboard_AnniverseryCardLoyaltyID',
    name:'namecontainerMyAccount_Dashboard_AnniverseryCardLoyalty',
    style: 'background-color:transparent',
    layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center',
    },items:[
        {
            xtype: 'container',
            width: '100%',
            height:80,
            hidden: false,
            margin: '0 0 0 0',
            style: 'background-color:transparent',
           // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
            layout: {
            type: 'vbox',
            pack: 'center',
            align: 'center',
            },items:[
                {
                    margin: '0 0 0 28',
                    height: 20,
                    width: 20,
                   // hidden: true,
                    zIndex:10,
                    //id:'txtMyAccount_Dashboard_EventCardLoyaltyBadgeID',
                 // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
              html:'<div id="txtMyAccount_Dashboard_AnniverseryCardLoyaltyBadgeID" style="'+
              'position: absolute;display:none;'+
              'top: -10px;'+
              'right: -5px;'+
              //'background-color: #FF1493;'+
              'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
              'color: white;'+
              'border-radius: 50%;'+ 
              'width: 28px;'+
              'height: 28px;'+
              'font-size: 12px;'+
              'font-weight: bold;'+
              //'display: flex;'+
              'align-items: center;'+
              'justify-content: center;'+
              'border: 2px solid white; '+
              '">'+
              '0'+
              '</div>',
              
              
                },
                {


                    margin: '-15 0 0 0',
                    html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                   // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                    '<img src="resources/icons/disableAnniverseryIcon.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                   // '</div>' + 
                    '<div style="font-size: 10px; font-weight: normal; color: #9CA3AF; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                    'Anniversary<br>'+ 
                    '<span style="display: block; margin-top: -2px;">Perks</span>'+ 
                    '</div>'+ 
                    '</div>'
                     
                            
                            },
               
               
            ]
        }
    ]
},

/////////////////////////////////





                   
                ]
            },


//////////////////////////////////line 3 start


{
    xtype: 'container',
    width: '100%',
    height:90,
    hidden: false,
    margin: '10 0 0 0',
    style: 'background-color:transparent',
    // scrollable: {
    //     direction: 'horizontal',
    //     directionLock: true,
    //     indicators: false
    // },
    layout: {
    type: 'hbox',
    pack: 'center',
    align: 'center',
    },
    items:[
      
        

        {
            xtype: 'container',
           // width: '33.3%',
           //width: 150,
           width: '25%',
            height:80,
            id:'containerMyAccount_Dashboard_FamilyTeamRewardCardLoyaltyID',
            name:'namecontainerMyAccount_Dashboard_FamilyTeamRewardCardLoyalty',
            hidden: false,
            margin: '0 0 0 0',
            style: 'background-color:transparent',
            layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center',
            },items:[
                {
                    xtype: 'container',
                   // width: '90%',
                    width: '100%',
                    height:80,
                    hidden: false,
                    margin: '0 0 0 0',
                    // id:'containerMyAccount_Dashboard_AyohaMerchantRewardID',
                    // name:'nameContainerMyAccount_Dashboard_AyohaMerchantReward',
                    style: 'background-color:transparent',
                    //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                    layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                    },items:[
                        {
                            margin: '0 0 0 28',
                            height: 20,
                            width: 20,
                           // hidden: true,
                            zIndex:10,
                           // id:'txtMyAccount_Dashboard_VoucherCardLoyaltyBadgeID',
                         // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                      html:' <div id="txtMyAccount_Dashboard_FamilyTeamRewardCardLoyaltyBadgeID" style="'+
                      'position: absolute;display:none;'+
                      'top: -10px;'+
                      'right: -5px;'+
                      //'background-color: #FF1493;'+
                      'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                      'color: white;'+
                      'border-radius: 50%;'+ 
                      'width: 28px;'+
                      'height: 28px;'+
                      'font-size: 12px;'+
                      'font-weight: bold;'+
                      //'display: flex;'+
                      'align-items: center;'+
                      'justify-content: center;'+
                      'border: 2px solid white; '+
                      '">'+
                      '0'+
                      '</div>',
                      
                      
                        },
                        {



                            // html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                            // '<img src="resources/icons/merchantreward01.png" style="width: 30px; height: 30px; margin-bottom: 5px;" />'+ 
                            // '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;">'+ 
                            // 'Merchant<br>'+ 
                            // '<span style="display: block; margin-top: -4px;">Reward</span>'+ 
                            // '</div>'+ 
                            // '</div>'

                            margin: '-15 0 0 0',
                            html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">' + 
                          //  '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                         
                            '<img src="resources/icons/FamilyTeamRewardicon_9CA3AF.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                              //  '</div>' + 
                                '<div style="font-size: 10px; font-weight: normal; color: #9CA3AF; text-align: center;margin: 4px 0px 0px 0px;">' + 
                                    'Family/Team<br>' + 
                                    '<span style="display: block; margin-top: -2px;">Reward</span>' +                                            
                           '</div>' + 
                        '</div>'
                             
                                    
                                    },
                       
                       
                    ]
                }
            ]
        },
        {
            xtype: 'container',
           // width: '33.3%',
           width: '25%',
         //  width: 150,
            // id:'containerMyAccount_Dashboard_MembershipCardHub',
            // name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
            height:80,
            hidden: false,
            margin: '0 0 0 0',
            id:'containerMyAccount_Dashboard_MembershipCheckInCardLoyaltyID',
            name:'namecontainerMyAccount_Dashboard_MembershipCheckInCardLoyalty',
            style: 'background-color:transparent',
            layout: {
            type: 'hbox',
            pack: 'center',
            align: 'center',
            },items:[
                {
                    xtype: 'container',
                    width: '100%',
                    height:80,
                    hidden: false,
                    margin: '0 0 0 0',
                    style: 'background-color:transparent',
                   // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                    layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                    },items:[
                        {
                            margin: '0 0 0 28',
                            height: 20,
                            width: 20,
                           // hidden: true,
                            zIndex:10,
                            //id:'txtMyAccount_Dashboard_EventCardLoyaltyBadgeID',
                         // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                      html:'<div id="txtMyAccount_Dashboard_MembershipCheckInCardLoyaltyBadgeID" style="'+
                      'position: absolute;display:none;'+
                      'top: -10px;'+
                      'right: -5px;'+
                      //'background-color: #FF1493;'+
                      'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
                      'color: white;'+
                      'border-radius: 50%;'+ 
                      'width: 28px;'+
                      'height: 28px;'+
                      'font-size: 12px;'+
                      'font-weight: bold;'+
                      //'display: flex;'+
                      'align-items: center;'+
                      'justify-content: center;'+
                      'border: 2px solid white; '+
                      '">'+
                      '0'+
                      '</div>',
                      
                      
                        },
                        {


                            margin: '-15 0 0 0',
                            html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                           // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                            '<img src="resources/icons/MembershipCheckInIcon_9CA3AF.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                           // '</div>' + 
                            '<div style="font-size: 10px; font-weight: normal; color: #9CA3AF; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                            'Membership<br>'+ 
                            '<span style="display: block; margin-top: -2px;">Check-In</span>'+ 
                            '</div>'+ 
                            '</div>'
                             
                                    
                                    },
                       
                       
                    ]
                }
            ]
        },


/////////////////////////////////

{
xtype: 'container',
// width: '33.3%',
width: '25%',
//  width: 150,
// id:'containerMyAccount_Dashboard_MembershipCardHub',
// name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
height:80,
hidden: false,
margin: '0 0 0 0',
id:'containerMyAccount_Dashboard_MsteryboxCardLoyaltyID',
name:'namecontainerMyAccount_Dashboard_MsteryboxCardLoyalty',
style: 'background-color:transparent',
layout: {
type: 'hbox',
pack: 'center',
align: 'center',
},items:[
{
xtype: 'container',
width: '100%',
height:80,
hidden: false,
margin: '0 0 0 0',
style: 'background-color:transparent',
// style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
layout: {
type: 'vbox',
pack: 'center',
align: 'center',
},items:[
    {
        margin: '0 0 0 28',
        height: 20,
        width: 20,
       // hidden: true,
        zIndex:10,
        //id:'txtMyAccount_Dashboard_EventCardLoyaltyBadgeID',
     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
  html:'<div id="txtMyAccount_Dashboard_MsteryboxCardLoyaltyBadgeID" style="'+
  'position: absolute;display:none;'+
  'top: -10px;'+
  'right: -5px;'+
  //'background-color: #FF1493;'+
  'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
  'color: white;'+
  'border-radius: 50%;'+ 
  'width: 28px;'+
  'height: 28px;'+
  'font-size: 12px;'+
  'font-weight: bold;'+
  //'display: flex;'+
  'align-items: center;'+
  'justify-content: center;'+
  'border: 2px solid white; '+
  '">'+
  '0'+
  '</div>',
  
  
    },
    {


        margin: '-15 0 0 0',
        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
       // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
        '<img src="resources/icons/MsteryboxIcon_9CA3AF.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
       // '</div>' + 
        '<div style="font-size: 10px; font-weight: normal; color: #9CA3AF; text-align: center;margin: 4px 0px 0px 0px;">'+ 
        'Mystery Box<br>'+ 
        '<span style="display: block; margin-top: -2px;">Reward</span>'+ 
        '</div>'+ 
        '</div>'
         
                
                },
   
   
]
}
]
},

/////////////////////////////////

/////////////////////////////////

{
xtype: 'container',
// width: '33.3%',
width: '25%',
//  width: 150,
// id:'containerMyAccount_Dashboard_MembershipCardHub',
// name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
height:80,
hidden: false,
margin: '0 0 0 0',
id:'containerMyAccount_Dashboard_ReferralCardLoyaltyID',
name:'namecontainerMyAccount_Dashboard_ReferralCardLoyalty',
style: 'background-color:transparent',
layout: {
type: 'hbox',
pack: 'center',
align: 'center',
},items:[
{
xtype: 'container',
width: '100%',
height:80,
hidden: false,
margin: '0 0 0 0',
style: 'background-color:transparent',
// style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
layout: {
type: 'vbox',
pack: 'center',
align: 'center',
},items:[
    {
        margin: '0 0 0 28',
        height: 20,
        width: 20,
       // hidden: true,
        zIndex:10,
        //id:'txtMyAccount_Dashboard_EventCardLoyaltyBadgeID',
     // html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
  html:'<div id="txtMyAccount_Dashboard_ReferralCardLoyaltyBadgeID" style="'+
  'position: absolute;display:none;'+
  'top: -10px;'+
  'right: -5px;'+
  //'background-color: #FF1493;'+
  'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);'+
  'color: white;'+
  'border-radius: 50%;'+ 
  'width: 28px;'+
  'height: 28px;'+
  'font-size: 12px;'+
  'font-weight: bold;'+
  //'display: flex;'+
  'align-items: center;'+
  'justify-content: center;'+
  'border: 2px solid white; '+
  '">'+
  '0'+
  '</div>',
  
  
    },
    {


        margin: '-15 0 0 0',
        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
       // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
        '<img src="resources/icons/refferalIcon_9CA3AF.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
       // '</div>' + 
        '<div style="font-size: 10px; font-weight: normal; color: #9CA3AF; text-align: center;margin: 4px 0px 0px 0px;">'+ 
        'Referral Code<br>'+ 
        '<span style="display: block; margin-top: -2px;">Reward</span>'+ 
        '</div>'+ 
        '</div>'
         
                
                },
   
   
]
}
]
},

/////////////////////////////////





       
    ]
},




//////////////////////////////////line 3 end



            // {
            //     margin: '50 0 0 14',
            //     width:'100%',
            //     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //     html: '<div style="color:black;text-align: left;font-size:16px;width:100%;margin:0px 0px 0px 0px"><b>Ayoha Merchant List</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">-Collect Ayoha Point from our Ayoha Merchant. -</div>'
            //     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            // },




            {
                xtype: 'container',
                width: '100%',
                hidden: false,
                id:'containerDashboard_AyohaOnlineMerchantStoreList',
                margin: '40 0 0 0',
                // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                style: 'background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [
                     {
                         margin: '0 0 0 14',
                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                         html: '<div style="color:black;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Merchant List</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">From neighbourhood stalls to hidden gems,<br>enjoy more every visit</div>'
                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                     },
                     {
                         xtype: 'spacer'
                     },
                     {
                        xtype: 'container',
                        zIndex: 50,
                        height: 40,
                        width: 80,
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                    
                        },
                        items:[
                            {
xtype: 'container',
height: 25,
width: 80,
                            },
                            {

                                margin: '0 0 0 0',
                             
                                html: '<div onclick="Dashboard_SearchMerchantListShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
                            
                            },
                            {
                                xtype: 'container',
                                height: 10,
                                width: 80,
                                                            },
                            {
                                xtype: 'container',
                                zIndex: 50,
                                height: 40,
                                width: 80,
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'
                            
                                },
                                items:[
        
        
        
        
        
        
                                    {
                                        xtype: 'container',
                                        zIndex: 50,
                                        height: 40,
                                        width: 35,
                                        //hidden:true,
                                       // hidden:true,
                                       // margin: '10 0 0 0',
                                        margin: '-3 0 0 0',
                                        // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                                        id: 'containerMyDashboard_AyohaOnlineMerchantStoreCheckout',
                                        name: 'nameMyDashboard_AyohaOnlineMerchantStoreCheckout',
                                        style: 'background-color:transparent;',
                                       //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center'
                                    
                                        },
                                        items: [
                                           
                                            {
                                               // margin: '10 0 0 3',
                                                margin: '3 0 0 3',
                                                height: 20,
                                                width: 20,
                                               // hidden:true,
                                              //  zIndex:-1,
                                               // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
                                              // id: '',
                                              html: '<div id="htmlMyDashboard_AyohaOnlineMerchantStoreChecout_CountbadgeText" style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                            },
                
                                    {
                                        margin: '-5 2 0 0',
                                       // hidden:true,
                                        width: 18,
                                        height: 18,
                                        html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:20px;height:20px;">',
                                        // ui:'plain'
                                    },
                                    
                                    
                                        ]
                                    },
                
                
                                    {
                                        xtype: 'container',
                                        zIndex: 50,
                                        height: 40,
                                        width: 35,
                                        //hidden:true,
                                       // hidden:true,
                                       // margin: '10 0 0 0',
                                        margin: '-3 0 0 0',
                                        // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                                        id: 'containerMyDashboard_AyohaOnlineMerchantStoreShoppingBag',
                                        name: 'nameMyDashboard_AyohaOnlineMerchantStoreShoppingBag',
                                        style: 'background-color:transparent;',
                                       //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center'
                                    
                                        },
                                        items: [
                                    
                                            {
                                               // margin: '10 0 0 3',
                                                margin: '3 0 0 3',
                                                height: 20,
                                                width: 20,
                                               hidden:false,
                                              //  zIndex:-1,
                                               // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
                                               //id: 'htmlMyDashboard_AyohaOnlineMerchantStoreShoppingBag_CountbadgeText',
                                              html: '<div  id="htmlMyDashboard_AyohaOnlineMerchantStoreShoppingBag_CountbadgeText"  style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                            },
                
                                    {
                                        margin: '-5 2 0 0',
                                       // hidden:true,
                                        width: 18,
                                        height: 18,
                                        html: '<img src="resources/icons/shoppingbag03.png" alt="Image" style="width:20px;height:20px;">',
                                        // ui:'plain'
                                    },
                                    
                                    
                                        ]
                                    },
                                ]
                             },
                        ]
                    },
                    
                   


                    // {
                    //     xtype: 'container',
                    //     zIndex: 50,
                    //     height: 40,
                    //     width: 35,
                    //     //hidden:true,
                    //    // hidden:true,
                    //    // margin: '10 0 0 0',
                    //     margin: '-3 0 0 0',
                    //     // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                    //     id: 'containerMyDashboard_AyohaOnlineMerchantStore',
                    //     name: 'nameMyDashboard_AyohaOnlineMerchantStore',
                    //     style: 'background-color:transparent;',
                    //    //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                    //     layout: {
                    //         type: 'vbox',
                    //         pack: 'center',
                    //         align: 'center'
                    
                    //     },
                    //     items: [
                    
                    //         {
                    //            // margin: '10 0 0 3',
                    //             margin: '3 0 0 3',
                    //             height: 20,
                    //             width: 20,
                    //             //hidden:true,
                    //           //  zIndex:-1,
                    //            // id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
                    //            id: 'htmlMyDashboard_AyohaOnlineMerchantStore_CountbadgeText',
                    //           html: '<div style="text-align:center;font-size:10px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;display:none;">0</div>',
                    //         },

                    // {
                    //     margin: '-5 2 0 0',
                    //    // hidden:true,
                    //     width: 18,
                    //     height: 18,
                    //     html: '<img src="resources/icons/onlineStore.jpg" alt="Image" style="width:20px;height:20px;">',
                    //     // ui:'plain'
                    // },
                    
                    
                    //     ]
                    // },


                   

                    //   {
                    //       xtype: 'button',
                    //       id: 'btnMyDashboard_AyohaOnlineMerchantStore',
                    //       //hidden:true,
                    //       //  badgeText: '1',
                    //       margin: '0 10 0 0',
                    //       height: 35,
                    //       width: 35,
                    //       html: '<img src="resources/icons/onlineStore.jpg" width="25" height="25" alt="Company Name">',
                    //       ui: 'plain',
                    //       handler: function () {
                    //         FloatPanel_Membership_MembershipCardHubsShow();
                    //       }
                    //   },



                ]
            },

            {
                xtype: 'container',
            
                id: 'Dashboard_Carousel_PremiumAdvertisement',
                name: 'nameDashboard_Carousel_PremiumAdvertisement',                
                //width: '100%',
                //height: '100%',
                margin: '25 0 0 0',
                width: '100%',
            // height: 480,
             height: 430,
               // disable:true,
               style: 'background-color:transparent',
             
            
             //margin: '-322 0 0 0',
                //indicators: false,
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center',
                },
                items: [
                   {
                       xtype: 'carousel',
                       id: 'mainDashboardCarousel_PremiumAdvertisement',
                       name: 'namemainDashboardCarousel_PremiumAdvertisement',
                       height: 400,
                       width: '95%',
                       style: 'background-color:transparent',
                       listeners: {
                           activeitemchange: function (container, newCard, oldCard, index) {
                               var index =parseInt(container.getActiveIndex());
                               indexmainDashboardCarousel =parseInt(container.getActiveIndex());
                             
                              
                            
                                   DashboardArrIndexmainDashboardCarousel =parseInt(index);
                                  
                                            
                                   Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setStyle('background-color: rgba(0, 0, 0, 0.4);display:block;');
                                   Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setZIndex(100);
                                   Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setHidden(false);

                                   slideUpShow('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',500);

                                  
                                  
                             
                   
                   
                                //    Ext.getCmp('containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement').setHidden(false);
                                //    Ext.getCmp('containerDashbord_MyAyohaStore_PremiumAdvertisement').setHidden(false);
                                  
                                 
                                   
         
                                   
                                   
                                 
                   
                   
                   
                   
                                   Ext.getCmp('htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement').setHtml('<div style="width: 48px; height: 42px ; z-index: 100 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="'+ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel]+'" width="44" height="39" alt="Company Name"></div>');
                                   Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">'+ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]+'</div>');
                                   Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:11px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">'+ArrAdvertisementPremium_AdvertisementTitle[DashboardArrIndexmainDashboardCarousel]+'</div>');
                                   
                   
                   
                   
                                   Dashboard_CalculateRating(ArrAdvertisementPremium_EnterpriseAccNo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]);
                              
                               console.log("mainDashboardCarousel Index_PremiumAdvertisement:" + container.getActiveIndex());
                           },
                          
                           
                       },
                                                         items:[

                  
                  
                  
                  
                  
                  
                  
                  
                  
                   ]
                   },
                   
                   
                   
            {
               xtype: 'container',
              //margin: '170 0 0 0',
               margin: '0 0 0 0',
            //  docked:'bottom',
             margin: '-90 0 0 0',
            //hidden:true,
              zIndex: 200,
               id: 'containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',
              // name: 'namecontainerMyAccount_DashboardMyReward',
            
             // style: 'background-color:yellow;',
              style: 'background-color:transparent;',
               //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
               // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
           
               height: 50,
               width: '95%',
               layout: {
           
                   type: 'hbox',
                   pack: 'center',
                   align: 'center'
               },
               items: [
                   //{
                   //    xtype: 'panel',
                   //    width:1
                   //},
                   {
                       xtype: 'container', 
                       id: 'containerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',
                       name: 'namecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',                        
                       width: '70%',
                      height: 50,
                      //hidden:true,
                      style: 'background-color:transparent;',
                      zIndex: 200,
                      layout: {
           
                       type: 'hbox',
                       pack: 'start',
                       align: 'center'
                   },
                      items:[
                      
                       {
                           xtype: 'container',
                           width: '24%',
                           id: 'containerDashboard_AyohaStore_Logo_PremiumAdvertisement',
                           height: 50,
                          // style: 'background-color:transparent;',
                           margin: '0 0 0 0',
                           //style: {
                           //    // background: '#D25959',
                           //    background: 'rgba(76, 175, 80, 0.3);',
                           //    // border: '2px'
                           //},
                          //  style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: white;',
                         style: 'background-color:transparent',
                           layout: {
                               type: 'vbox',
                               pack: 'center',
                               align: 'center',
                           },
                           items: [
                                 {
                                     //xtype: 'button',
                                     //height: 75,
                                     //width: 75,
                                   //   height: 50,
                                   //   width: '100%',
                                     margin: '0 0 0 16',
                                     id: 'htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement',
                                     //badgeText: "2",
                                     //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                                     html: '<div style="width: 50px; height: 47px ; z-index: 200 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="50" height="47" alt="Company Name"></div>',

                                 },

                           ]
                       },
                       {
                           xtype: 'spacer',
                           width: 10
                       },
                          {
                              xtype: 'container',
                              width: '74%',
                              id: 'containerDashboard_AyohaStore_CompanyInfo_PremiumAdvertisement',


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

                                         id: 'htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement',
                                         width: '100%',
                                         html: '<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',


                                     },
                                      {

                                          id: 'htmlDashboard_AyohaStore_CompanyInfo_Line_PremiumAdvertisement',
                                          width: '100%',
                                          margin: '0 0 0 0',
                                          html: '<div style="background-color:white;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',


                                      },
                                      {

                                          id: 'htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement',

                                          width: '100%',
                                          // iconCls: 'list',
                                          //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                          html: '<div style="color:white;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Burger padu bak hang!</div>',


                                      },
                                      

                              ]
                          },
                      ]

                   },

                   {
                       xtype: 'container',
                       zIndex: 100,
                       width: '30%',
                      height: 50,
                      layout: {
           
                       type: 'hbox',
                       pack: 'end',
                       align: 'center'
                   },
                      items:[

                     

                       {

                           xtype: 'container',
                         //  width: '30%',
                         id: 'containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
                         name: 'namecontainerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
                           width: '60%',
                           //hidden: true,
                           //margin:'0 0 0 0',
                           height: 35,
                           style: 'background-color: transparent;',
                          // id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',

                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                           layout: {
                               type: 'vbox',
                               pack: 'center',
                               align: 'center',
                           },
                           items: [
                               {
                                   xtype: 'container',
                                   width: '100%',
                                  // flex: 1,
                                   margin: '-5 0 0 0',
                                   height: 50,
                                   id: 'containerDashbord_ReviewAndRate_PremiumAdvertisement',
                                  // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
                                   // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                   style: "background-color: transparent;",
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [
                                       {
                                           margin: '0 0 0 0',
                                           id: 'htmlDashbord_ReviewAndRateCount_PremiumAdvertisement',
                                           html: '<div style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',

                                       },

                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           margin: '-12 0 0 0',
                                           height: 9,
                                           // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                           style: "background-color: transparent;",
                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           items: [

                                               {
                                                   id: 'htmlDashbord_Star1',
                                                   height: 9,
                                                   width: 9,
                                                   html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                               },
{
id: 'htmlDashbord_Star2',
height: 9,
width: 9,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
},
{
id: 'htmlDashbord_Star3',
height: 9,
width: 9,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
},
{
id: 'htmlDashbord_Star4',
height: 9,
width: 9,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
},
{
id: 'htmlDashbord_Star5',
height: 9,
width: 9,
html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',

},
                                           ]
                                       },

                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           margin: '10 0 0 0',
                                           height: 9,
                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'center'
                                           },
                                           items: [
                                               {
                                                   id: 'htmlDashbord_ReviewByCount_PremiumAdvertisement',
                                                   html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:white;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
                                               },
                                           ]
                                       },
                                        //{
                                        //    margin: '0 0 0 0',
                                        //    height: 15,
                                        //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
                                        //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                        //}
                                   ]
                               },
                           ]
                       },




                     
                       {
                           xtype: 'panel',
                          width: 7
                          // width: 3
                       },


                       
                       {
                        xtype: 'container',
                        id: 'containerDashbord_MyAyohaStore_PremiumAdvertisement',
                        name: 'namecontainerDashbord_MyAyohaStore_PremiumAdvertisement',
                      
                        style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                        height: 40,
                        width: 40,
                        margin: '0 0 0 0',
                        layout: {

                            type: 'vbox',
                            pack: 'center',
                            align: 'center'
                        },
                        items: [
                            {
                                //xtype: 'button',
                                //id: 'btnMyAccount_DashboardEwalletIcon',
                                height: 20,
                                width: 20,
                                margin: '0 0 0 0',
                                // iconCls: 'list',
                                //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                html: '<div ><img src="resources/icons/onlineStore.jpg" style ="width:20px;height:20px;" alt="Company Name"></div>',
                                // ui: 'plain',
                                //handler: function () {

                                //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                //    //    type: 'slideOut',
                                //    //    direction: 'left',
                                //    //    easing: 'cubic-bezier(.7,0,.7,1)',
                                //    //    duration: 250

                                //    //}));
                                //    //isLoyaltyCardRedeemListOpen = 'N';
                                //}
                            },
                        ]
                    },


                      ]

                   },
                 
             {
                      xtype: 'spacer',
                      width:20
                   },
               ]
           },
                   

                      

                  

                ]
            },


            {
                xtype: 'list',
margin: '25 0 0 0',
hidden:true,
                //  flex: 1,
               // store: _DataStore_EnterprisesLoadByMerchantCategory,
             // store: _DataStore_EnterprisesLoadByMerchantCategory_temp_front,
                id: 'DashboardMain_SearchMerchantListLoadAllStoreID',
                mode: 'SINGLE',
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
                style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
             
                // itemTpl: '<div class="myContent" style="background-color:transparent;width:103%;">' +
                //     '{ModifiedIsMemberDashboardMerchantList}' +
                //     '<div style="overflow:hidden;width:100%;margin:-45px 0px 0px 0px;background-color:transparent;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:17%;margin:5px 0px 0px 0px;background-color:transparent;"><img src="{EnterpriseLogoPath}" style="border:1px none white; width:35px;height:35px;margin:3px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:80%;margin:3px 0px 0px -20px;background-color:transparent;color:black"><b>{EnterpriseName}</b><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><i>{EnterpriseTagLine}</i></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-5px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><img src="resources/icons/locationThree.png" style="width:16px;height:12px;"/>{Bandar},{Negeri}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:right;margin:-10px -25px 0px 0px;background-color:transparent;color:black;width:30%;">{ModifiedCountStar}</div></div>' +

                //            '</div>' +
                //            '<br><div style="width:100%;text-align:center;margin:-51px 0px 0px 0px;height: 23px;background-color:transparent;"></div>',




                           itemTpl: new Ext.XTemplate(
                            // Check for the special 'isLoadMore' flag. If it's true, render the "Load More" button.
                            '<tpl if="isLoadMore">',
                                '<div class="myContent" style="padding: 10px 0; width: 103%;">',
                                    '<div style="width: 100%; height: 50px; border: 1px none #b0b0b0; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; cursor: pointer; color: #444; font-family: Arial, sans-serif;" OnClick="Dashboard_SearchMerchantListShow();">',
                                        // SVG Icon for a plus sign
                                        '<img src="resources/icons/onlineStore.jpg" width="32" height="32" alt="Company Name">',
                                        // Label
                                        '<div style="margin-top: 8px; font-size: 14px; font-weight: bold;">',
                                            'Load More Ayoha Merchant',
                                        '</div>',
                                    '</div>',
                                '</div>',
                            '</tpl>',
                        
                            // If 'isLoadMore' is not true, render the regular merchant item.
                            '<tpl if="!isLoadMore">',
                                // This is your original template for a merchant
                                '<div class="myContent" style="background-color:transparent;width:103%;" onclick="FloatPanel_MerchantDetailPageShow({ID}, `{EnterpriseAccNo}`, `{EnterpriseLogoPath}`, `{EnterpriseName}`, `{EnterpriseTagLine}`,`{NamaJalan}`, `{Postkod}`, `{Bandar}`, `{Negeri}`, `{EnterpriseCoordinate}`,`{EnterpriseDescriptions}`, `{EnterprisePhoneNo}`,`{PICContactNo}`, `{`EnterpriseFacebook}`, `{EnterpriseWebsite}`, `{EnterpriseInstagram}`,`{EnterpriseTwiter}`, `{BusinessMode}`)";>',                                  
                                    '{ModifiedIsMemberDashboardMerchantList}',
                                    '<div style="overflow:hidden;width:100%;margin:-45px 0px 0px 0px;background-color:transparent;height:60px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:17%;margin:5px 0px 0px 0px;background-color:transparent;"><img src="{EnterpriseLogoPath}" style="border:1px none white; width:35px;height:35px;margin:3px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:16px;font-weight:normal;float:left;width:80%;margin:3px 0px 0px -20px;background-color:transparent;color:black"><b>{EnterpriseName}</b><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><i>{EnterpriseTagLine}</i></div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-5px 0px 0px 0px;background-color:transparent;color:black;width:73%;"><img src="resources/icons/locationThree.png" style="width:16px;height:12px;"/>{Bandar},{Negeri}</div><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;float:right;margin:-10px -25px 0px 0px;background-color:transparent;color:black;width:30%;">{ModifiedCountStar}</div></div>',
                                    '</div>',
                                    '<br><div style="width:100%;text-align:center;margin:-51px 0px 0px 0px;height: 23px;background-color:transparent;"></div>',
                                '</div>',
                            '</tpl>'
                        ),








                emptyText: '<div style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;font-size=16;font-weight:bold;color:black">Not Found!</div>',
                listeners: {
                    itemtap: function (list, idx, target, records, evt) {
                        LoadingPanelShow(getLoadingIcon(),'Loading....');
                        MembershipTag= records.get('isMember');
                        glonbalDashboard_SearchMerchantList_FullCompanyAddress=records.get('NamaJalan')+',<br>'+records.get('Postkod')+' '+records.get('Bandar')+'.<br> '+records.get('Negeri')
                  
                        // FloatPanel_MerchantDetailPageShow(records.get('ID'), records.get('EnterpriseAccNo'), records.get('EnterpriseLogoPath'), records.get('EnterpriseName'), records.get('EnterpriseTagLine'),
                        //     records.get('NamaJalan'), records.get('Postkod'), records.get('Bandar'), records.get('Negeri'), records.get('EnterpriseCoordinate'), records.get('EnterpriseDescriptions'), records.get('EnterprisePhoneNo')
                        //     , records.get('PICContactNo'), records.get('EnterpriseFacebook'), records.get('EnterpriseWebsite'), records.get('EnterpriseInstagram'), records.get('EnterpriseTwiter'), records.get('BusinessMode')
                        //     );


                    },
                    deselect: function (list, records) {
                        // FloatPanel_MerchantDetailPageShow({ID}, {EnterpriseAccNo}, {EnterpriseLogoPath}, {EnterpriseName}, {EnterpriseTagLine},
                        // {NamaJalan}, {Postkod}, {Bandar}, {Negeri}, {EnterpriseCoordinate},{EnterpriseDescriptions}, {EnterprisePhoneNo}
                        // ,{PICContactNo}, {EnterpriseFacebook}, {EnterpriseWebsite}, {EnterpriseInstagram},{EnterpriseTwiter}, {BusinessMode});
                        
                    }
                },


                width: '100%',
                height: 480,
              //  height: '90%',
                disableSelection: true,
                scrollable:false,






            },





///////////////////////////////////Ayoha Merchant premium Card List//////////////////////////////////////
// {
//     xtype: 'container',
//     margin: '0 0 0 0',
//     width: '100%',
//     height: 450,
//    // hidden: true,
//     // disable:true,
//     style: 'background-color:white',
//   //  style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
//     layout: {
//         type: 'vbox',
//         pack: 'start',
//         align: 'center',
//     },
//     items:[

   
//                 {
//                     xtype: 'container',
//                     width: '100%',
//                     id:'containerDashboard_PremiumAdvertisement',
//                     margin: '0 0 0 0',
//                     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                   style: 'background-color:transparent',
//                     layout: {
//                         type: 'hbox',
//                         pack: 'center',
//                         align: 'center',
//                     },
//                     items: [
//                          {
//                              margin: '10 0 0 14',
//                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                              html: '<div style="color:black;text-align: left;font-size:14px;width:100%;"><b>Ayoha Merchant Premium</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">Popular with regulars. Better with membership</div>'
//                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                          },
//                          {
//                              xtype: 'spacer'
//                          },
                          



//                     ]
//                 },


//                 {
//                     xtype: 'container',
                
//                     id: 'Dashboard_Carousel_PremiumAdvertisement',
//                     name: 'nameDashboard_Carousel_PremiumAdvertisement',                
//                     //width: '100%',
//                     //height: '100%',
//                     margin: '10 0 0 0',
//                     width: '100%',
//                 // height: 480,
//                  height: 450,
//                    // disable:true,
//                    style: 'background-color:transparent',
                 
                
//                  //margin: '-322 0 0 0',
//                     //indicators: false,
//                     layout: {
//                         type: 'vbox',
//                         pack: 'start',
//                         align: 'center',
//                     },
//                     items: [
//                        {
//                            xtype: 'carousel',
//                            id: 'mainDashboardCarousel_PremiumAdvertisement',
//                            name: 'namemainDashboardCarousel_PremiumAdvertisement',
//                            height: 400,
//                            width: '95%',
//                            style: 'background-color:transparent',
//                            listeners: {
//                                activeitemchange: function (container, newCard, oldCard, index) {
//                                    var index =parseInt(container.getActiveIndex());
//                                    indexmainDashboardCarousel =parseInt(container.getActiveIndex());
                                 
                                  
                                
//                                        DashboardArrIndexmainDashboardCarousel =parseInt(index);
                                      
                                                
//                                        Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setStyle('background-color: rgba(0, 0, 0, 0.4);display:block;');
//                                        Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setZIndex(100);
//                                        Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setHidden(false);
   
//                                        slideUpShow('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',500);
   
                                      
                                      
                                 
                       
                       
//                                     //    Ext.getCmp('containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement').setHidden(false);
//                                     //    Ext.getCmp('containerDashbord_MyAyohaStore_PremiumAdvertisement').setHidden(false);
                                      
                                     
                                       
             
                                       
                                       
                                     
                       
                       
                       
                       
//                                        Ext.getCmp('htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement').setHtml('<div style="width: 48px; height: 42px ; z-index: 100 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="'+ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel]+'" width="44" height="39" alt="Company Name"></div>');
//                                        Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">'+ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]+'</div>');
//                                        Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:11px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">'+ArrAdvertisementPremium_AdvertisementTitle[DashboardArrIndexmainDashboardCarousel]+'</div>');
                                       
                       
                       
                       
//                                        Dashboard_CalculateRating(ArrAdvertisementPremium_EnterpriseAccNo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]);
                                  
//                                    console.log("mainDashboardCarousel Index_PremiumAdvertisement:" + container.getActiveIndex());
//                                },
                              
                               
//                            },
//                                                              items:[
 
                      
                      
                      
                      
                      
                      
                      
                      
                      
//                        ]
//                        },
                       
                       
                       
//                 {
//                    xtype: 'container',
//                   //margin: '170 0 0 0',
//                    margin: '0 0 0 0',
//                 //  docked:'bottom',
//                  margin: '-90 0 0 0',
//                 //hidden:true,
//                   zIndex: 200,
//                    id: 'containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',
//                   // name: 'namecontainerMyAccount_DashboardMyReward',
                
//                  // style: 'background-color:yellow;',
//                   style: 'background-color:transparent;',
//                    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
//                    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
               
//                    height: 50,
//                    width: '95%',
//                    layout: {
               
//                        type: 'hbox',
//                        pack: 'center',
//                        align: 'center'
//                    },
//                    items: [
//                        //{
//                        //    xtype: 'panel',
//                        //    width:1
//                        //},
//                        {
//                            xtype: 'container', 
//                            id: 'containerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',
//                            name: 'namecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',                        
//                            width: '70%',
//                           height: 50,
//                           //hidden:true,
//                           style: 'background-color:transparent;',
//                           zIndex: 200,
//                           layout: {
               
//                            type: 'hbox',
//                            pack: 'start',
//                            align: 'center'
//                        },
//                           items:[
                          
//                            {
//                                xtype: 'container',
//                                width: '24%',
//                                id: 'containerDashboard_AyohaStore_Logo_PremiumAdvertisement',
//                                height: 50,
//                               // style: 'background-color:transparent;',
//                                margin: '0 0 0 0',
//                                //style: {
//                                //    // background: '#D25959',
//                                //    background: 'rgba(76, 175, 80, 0.3);',
//                                //    // border: '2px'
//                                //},
//                               //  style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: white;',
//                              style: 'background-color:transparent',
//                                layout: {
//                                    type: 'vbox',
//                                    pack: 'center',
//                                    align: 'center',
//                                },
//                                items: [
//                                      {
//                                          //xtype: 'button',
//                                          //height: 75,
//                                          //width: 75,
//                                        //   height: 50,
//                                        //   width: '100%',
//                                          margin: '0 0 0 16',
//                                          id: 'htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement',
//                                          //badgeText: "2",
//                                          //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
//                                          html: '<div style="width: 50px; height: 47px ; z-index: 200 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="50" height="47" alt="Company Name"></div>',
   
//                                      },
   
//                                ]
//                            },
//                            {
//                                xtype: 'spacer',
//                                width: 10
//                            },
//                               {
//                                   xtype: 'container',
//                                   width: '74%',
//                                   id: 'containerDashboard_AyohaStore_CompanyInfo_PremiumAdvertisement',
   
   
//                                   margin: '0 0 0 0',
//                                   //style: {
//                                   //    // background: '#D25959',
//                                   //    background: 'rgba(76, 175, 80, 0.3);',
//                                   //    // border: '2px'
//                                   //},
//                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                   style: 'background-color:transparent',
//                                   layout: {
//                                       type: 'vbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   items: [
//                                          {
   
//                                              id: 'htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement',
//                                              width: '100%',
//                                              html: '<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',
   
   
//                                          },
//                                           {
   
//                                               id: 'htmlDashboard_AyohaStore_CompanyInfo_Line_PremiumAdvertisement',
//                                               width: '100%',
//                                               margin: '0 0 0 0',
//                                               html: '<div style="background-color:white;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',
   
   
//                                           },
//                                           {
   
//                                               id: 'htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement',
   
//                                               width: '100%',
//                                               // iconCls: 'list',
//                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
//                                               html: '<div style="color:white;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Burger padu bak hang!</div>',
   
   
//                                           },
                                          
   
//                                   ]
//                               },
//                           ]
   
//                        },
   
//                        {
//                            xtype: 'container',
//                            zIndex: 100,
//                            width: '30%',
//                           height: 50,
//                           layout: {
               
//                            type: 'hbox',
//                            pack: 'end',
//                            align: 'center'
//                        },
//                           items:[
   
                         
   
//                            {
   
//                                xtype: 'container',
//                              //  width: '30%',
//                              id: 'containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
//                              name: 'namecontainerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
//                                width: '60%',
//                                //hidden: true,
//                                //margin:'0 0 0 0',
//                                height: 35,
//                                style: 'background-color: transparent;',
//                               // id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',
   
//                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                                layout: {
//                                    type: 'vbox',
//                                    pack: 'center',
//                                    align: 'center',
//                                },
//                                items: [
//                                    {
//                                        xtype: 'container',
//                                        width: '100%',
//                                       // flex: 1,
//                                        margin: '-5 0 0 0',
//                                        height: 50,
//                                        id: 'containerDashbord_ReviewAndRate_PremiumAdvertisement',
//                                       // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
//                                        // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                        style: "background-color: transparent;",
//                                        layout: {
//                                            type: 'vbox',
//                                            pack: 'center',
//                                            align: 'center'
   
//                                        },
//                                        items: [
//                                            {
//                                                margin: '0 0 0 0',
//                                                id: 'htmlDashbord_ReviewAndRateCount_PremiumAdvertisement',
//                                                html: '<div style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
   
//                                            },
   
//                                            {
//                                                xtype: 'container',
//                                                width: '100%',
//                                                margin: '-12 0 0 0',
//                                                height: 9,
//                                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
//                                                style: "background-color: transparent;",
//                                                layout: {
//                                                    type: 'hbox',
//                                                    pack: 'center',
//                                                    align: 'center'
   
//                                                },
//                                                items: [
   
//                                                    {
//                                                        id: 'htmlDashbord_Star1',
//                                                        height: 9,
//                                                        width: 9,
//                                                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
//                                                    },
//    {
//    id: 'htmlDashbord_Star2',
//    height: 9,
//    width: 9,
//    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
//    },
//    {
//    id: 'htmlDashbord_Star3',
//    height: 9,
//    width: 9,
//    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
//    },
//    {
//    id: 'htmlDashbord_Star4',
//    height: 9,
//    width: 9,
//    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
//    },
//    {
//    id: 'htmlDashbord_Star5',
//    height: 9,
//    width: 9,
//    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
   
//    },
//                                                ]
//                                            },
   
//                                            {
//                                                xtype: 'container',
//                                                width: '100%',
//                                                margin: '10 0 0 0',
//                                                height: 9,
//                                                layout: {
//                                                    type: 'hbox',
//                                                    pack: 'center',
//                                                    align: 'center'
//                                                },
//                                                items: [
//                                                    {
//                                                        id: 'htmlDashbord_ReviewByCount_PremiumAdvertisement',
//                                                        html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:white;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
//                                                    },
//                                                ]
//                                            },
//                                             //{
//                                             //    margin: '0 0 0 0',
//                                             //    height: 15,
//                                             //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
//                                             //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
//                                             //}
//                                        ]
//                                    },
//                                ]
//                            },
   
   
   
   
                         
//                            {
//                                xtype: 'panel',
//                               width: 7
//                               // width: 3
//                            },
   
   
                           
//                            {
//                             xtype: 'container',
//                             id: 'containerDashbord_MyAyohaStore_PremiumAdvertisement',
//                             name: 'namecontainerDashbord_MyAyohaStore_PremiumAdvertisement',
                          
//                             style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
//                             height: 40,
//                             width: 40,
//                             margin: '0 0 0 0',
//                             layout: {

//                                 type: 'vbox',
//                                 pack: 'center',
//                                 align: 'center'
//                             },
//                             items: [
//                                 {
//                                     //xtype: 'button',
//                                     //id: 'btnMyAccount_DashboardEwalletIcon',
//                                     height: 20,
//                                     width: 20,
//                                     margin: '0 0 0 0',
//                                     // iconCls: 'list',
//                                     //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
//                                     html: '<div ><img src="resources/icons/onlineStore.jpg" style ="width:20px;height:20px;" alt="Company Name"></div>',
//                                     // ui: 'plain',
//                                     //handler: function () {

//                                     //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
//                                     //    //    type: 'slideOut',
//                                     //    //    direction: 'left',
//                                     //    //    easing: 'cubic-bezier(.7,0,.7,1)',
//                                     //    //    duration: 250

//                                     //    //}));
//                                     //    //isLoyaltyCardRedeemListOpen = 'N';
//                                     //}
//                                 },
//                             ]
//                         },

   
//                           ]
   
//                        },
                     
//                  {
//                           xtype: 'spacer',
//                           width:20
//                        },
//                    ]
//                },
                       

                          
   
                      
   
//                     ]
//                 },

//             ]
//         },




///////////////////////////////////////////End Ayoha Merchant premium Card List//////////////////////////////////////



//////////////////////////////////////////////////Start Hot seat merchant//////////////////////////////////////



{
    xtype: 'container',
    width: '100%',
    id:'containerDashboard_HotSeatPromotion',
    /// hidden:true,
    margin: '0 0 0 0',
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
             margin: '0 0 0 14',
             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
             html: '<div style="color:black;text-align: left;font-size:14px;width:100%;"><b>Hot Seat Promotion!</b></div><br><div style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">Member price + bonus points,while it lasts.</div>'
             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
         },
         {
             xtype: 'spacer'
         },
         {

             margin: '0 14 0 0',
          
             html: '<div onclick="FloatPanel_FloatingAdvertisementShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
         
         }
    ]
},
                {
                    xtype: 'container',
                    width: '100%',
                    id:'containerDashboard_HotSeatPromotionImage',
                    height: 280,
                    margin: '20 0 0 0',
                   // hidden:true,
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    style: 'background-color:transparent',

                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'container',
                            width: '95%',
                            height: 310,
                            margin: '0 0 0 0',
                            //style: {
                            //    // background: '#D25959',
                            //    background: 'rgba(76, 175, 80, 0.3);',
                            //    // border: '2px'
                            //},
                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                            // style: 'background-color:rgba(255, 255, 255, 0);border-radius: 10px 10px 10px 10px;',
                            style: 'background-color:transparent',
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
                                  xtype: 'panel',
                                  width: 7
                              },


                                       {
                                           xtype: 'container',
                                           height: 300,
                                           width: 230,
                                           margin: '0 0 0 0',
                                           style: 'background-color:transparent;',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center',
                                           },
                                           items: [


                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   height: 30,
                                                   docked: 'bottom',
                                                   hidden: true,
                                                   margin: '-2 0 0 0',
                                                   style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [


                                                           {
                                                               xtype: 'container',
                                                               id: 'DashboardHotSeatAdvertisementButton_bottom0',
                                                               //hidden:true,
                                                               width: '100%',
                                                               style: "background-color: transparent",
                                                               //style: "background-color: #F35B57;",
                                                               margin: '0 0 0 0',
                                                               layout: {
                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'

                                                               },


                                                               items: [

                                                                   {
                                                                       xtype: 'button',
                                                                       margin: '0 0 0 0',
                                                                       ui: 'plain',
                                                                       width: '100%',
                                                                       id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt0',
                                                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                       html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                       handler: function () {


                                                                       }


                                                                   }

                                                               ]

                                                           },




                                                   ]
                                               },



                                               {
                                                   xtype: 'button',
                                                   id: 'btnDashboard_HotSeatAdvertisement_PicProfile0',
                                                   margin: '0 0 0 0',
                                                   //docked:'top',
                                                   height: 60,
                                                   width: 60,
                                                   // iconCls: 'list',
                                                   //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                   html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                                   // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   handler: function () {


                                                   }
                                               },


                                                 {

                                                     height: 260,
                                                     width: 230,
                                                     id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat0',
                                                     margin: '-30 0 0 0',
                                                     html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                 },
                                                     {
                                                         xtype: 'container',
                                                         // width: '91.1%',
                                                         width: 228,
                                                         height: 60,
                                                         hidden: true,
                                                         margin: '14 0 0 16',

                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         id: 'containerDashboard_HotSeatAdvertisement_ProfileText0',
                                                         // hidden:true,

                                                         style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                         items: [

                                                         ]
                                                     },

                                               {
                                                   xtype: 'container',
                                                   id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile0',
                                                   margin: '-40 0 0 0',
                                                   height: 40,
                                                   zIndex: 200,
                                                   //width: 228,
                                                   width: '100%',
                                                   style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                                   // iconCls: 'list',
                                                   //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                   //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                                   // 
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [
                                                       {
                                                           id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName0',
                                                           html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                       },
                                                        {
                                                            xtype: 'container',
                                                            style: 'background-color:white;',
                                                            height: 2,
                                                            width: '80%',
                                                            // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                        },
                                                         {
                                                             id: 'htmlDasboard_HotSeatAdvertisement_Title0',
                                                             html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                         },
                                                   ]

                                               },
                                           ]
                                       },



                                {
                                    xtype: 'panel',
                                    width: 15
                                },



                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [


                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom1',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },


                                                          items: [

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt1',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {


                                                                  }


                                                              }

                                                          ]

                                                      },




                                              ]
                                          },



                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile1',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {


                                              }
                                          },


                                            {

                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat1',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText1',
                                                    // hidden:true,

                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [

                                                    ]
                                                },

                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile1',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName1',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title1',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]

                                          },
                                      ]
                                  },


                                  ////////////////hotseat 2

                                {
                                    xtype: 'panel',
                                    width: 15
                                },

                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [


                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom2',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },


                                                          items: [

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt2',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {


                                                                  }


                                                              }

                                                          ]

                                                      },




                                              ]
                                          },



                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile2',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {


                                              }
                                          },


                                            {

                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat2',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText2',
                                                    // hidden:true,

                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [

                                                    ]
                                                },

                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile2',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName2',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title2',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]

                                          },
                                      ]
                                  },

                                  ///////hotseat 3


                                {
                                    xtype: 'panel',
                                    width: 15
                                },
                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [


                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom3',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },


                                                          items: [

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt3',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {


                                                                  }


                                                              }

                                                          ]

                                                      },




                                              ]
                                          },



                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile3',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {


                                              }
                                          },


                                            {

                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat3',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText3',
                                                    // hidden:true,

                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [

                                                    ]
                                                },

                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile3',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName3',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title3',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]

                                          },
                                      ]
                                  },








                                ///////////////////hotseat 4
                           {
                               xtype: 'panel',
                               width: 15
                           },

                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [


                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom4',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },


                                                          items: [

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt4',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {


                                                                  }


                                                              }

                                                          ]

                                                      },




                                              ]
                                          },



                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile4',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {


                                              }
                                          },


                                            {

                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat4',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText4',
                                                    // hidden:true,

                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [

                                                    ]
                                                },

                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile4',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName4',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title4',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]

                                          },
                                      ]
                                  },



                                /////////////////hotseat 5


                                  {
                                      xtype: 'panel',
                                      width: 15
                                  },

                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [


                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom5',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },


                                                          items: [

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt5',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {


                                                                  }


                                                              }

                                                          ]

                                                      },




                                              ]
                                          },



                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile5',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {


                                              }
                                          },


                                            {

                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat5',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText5',
                                                    // hidden:true,

                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [

                                                    ]
                                                },

                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile5',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName5',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title5',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]

                                          },
                                      ]
                                  },

                        
                                /////////////////////////hotseat 6


                                  {
                                      xtype: 'panel',
                                      width: 15
                                  },

                                  {
                                      xtype: 'container',
                                      height: 300,
                                      width: 230,
                                      margin: '0 0 0 0',
                                      style: 'background-color:transparent;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 30,
                                              docked: 'bottom',
                                              hidden: true,
                                              margin: '-2 0 0 0',
                                              style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [


                                                      {
                                                          xtype: 'container',
                                                          id: 'DashboardHotSeatAdvertisementButton_bottom6',
                                                          //hidden:true,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          margin: '0 0 0 0',
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },


                                                          items: [

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '0 0 0 0',
                                                                  ui: 'plain',
                                                                  width: '100%',
                                                                  id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt6',
                                                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                  handler: function () {


                                                                  }


                                                              }

                                                          ]

                                                      },




                                              ]
                                          },



                                          {
                                              xtype: 'button',
                                              id: 'btnDashboard_HotSeatAdvertisement_PicProfile6',
                                              margin: '0 0 0 0',
                                              //docked:'top',
                                              height: 60,
                                              width: 60,
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                              // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                              ui: 'plain',
                                              handler: function () {


                                              }
                                          },


                                            {

                                                height: 260,
                                                width: 230,
                                                id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat6',
                                                margin: '-30 0 0 0',
                                                html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                            },
                                                {
                                                    xtype: 'container',
                                                    // width: '91.1%',
                                                    width: 228,
                                                    height: 60,
                                                    hidden: true,
                                                    margin: '14 0 0 16',

                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center',
                                                    },
                                                    id: 'containerDashboard_HotSeatAdvertisement_ProfileText6',
                                                    // hidden:true,

                                                    style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                    items: [

                                                    ]
                                                },

                                          {
                                              xtype: 'container',
                                              id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile6',
                                              margin: '-40 0 0 0',
                                              height: 40,
                                              zIndex: 200,
                                              //width: 228,
                                              width: '100%',
                                              style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                              // iconCls: 'list',
                                              //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                              //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                              // 
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName6',
                                                      html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       height: 2,
                                                       width: '80%',
                                                       // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                   },
                                                    {
                                                        id: 'htmlDasboard_HotSeatAdvertisement_Title6',
                                                        html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                    },
                                              ]

                                          },
                                      ]
                                  },





                                ////////////// hotseat 7



                                        {
                                            xtype: 'panel',
                                            width: 15
                                        },

                                {
                                    xtype: 'container',
                                    height: 300,
                                    width: 230,
                                    margin: '0 0 0 0',
                                    style: 'background-color:transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [


                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            height: 30,
                                            docked: 'bottom',
                                            hidden: true,
                                            margin: '-2 0 0 0',
                                            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [


                                                    {
                                                        xtype: 'container',
                                                        id: 'DashboardHotSeatAdvertisementButton_bottom7',
                                                        //hidden:true,
                                                        width: '100%',
                                                        style: "background-color: transparent",
                                                        //style: "background-color: #F35B57;",
                                                        margin: '0 0 0 0',
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },


                                                        items: [

                                                            {
                                                                xtype: 'button',
                                                                margin: '0 0 0 0',
                                                                ui: 'plain',
                                                                width: '100%',
                                                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt7',
                                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
                                                                handler: function () {


                                                                }


                                                            }

                                                                 
                                                        ]

                                                    },




                                            ]
                                        },



                                        {
                                            xtype: 'button',
                                            id: 'btnDashboard_HotSeatAdvertisement_PicProfile7',
                                            margin: '0 0 0 0',
                                            //docked:'top',
                                            height: 60,
                                            width: 60,
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


                                            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                            ui: 'plain',
                                            handler: function () {


                                            }
                                        },


                                          {

                                              height: 260,
                                              width: 230,
                                              id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat7',
                                              margin: '-30 0 0 0',
                                              html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                          },
                                              {
                                                  xtype: 'container',
                                                  // width: '91.1%',
                                                  width: 228,
                                                  height: 60,
                                                  hidden: true,
                                                  margin: '14 0 0 16',

                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  id: 'containerDashboard_HotSeatAdvertisement_ProfileText7',
                                                  // hidden:true,

                                                  style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                                                  items: [

                                                  ]
                                              },

                                        {
                                            xtype: 'container',
                                            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile7',
                                            margin: '-40 0 0 0',
                                            height: 40,
                                            zIndex: 200,
                                            //width: 228,
                                            width: '100%',
                                            style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
                                            // iconCls: 'list',
                                            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                                            // 
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                {
                                                    id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName7',
                                                    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
                                                },
                                                 {
                                                     xtype: 'container',
                                                     style: 'background-color:white;',
                                                     height: 2,
                                                     width: '80%',
                                                     // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
                                                 },
                                                  {
                                                      id: 'htmlDasboard_HotSeatAdvertisement_Title7',
                                                      html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                  },
                                            ]

                                        },
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    width: 15
                                }

                            ]
                        },










                        {
                            xtype: 'spacer'
                        },
                    ]

                },


                {
                    xtype: 'panel',
                    height: 30
                },
////////////////////////////////////////////////////End Hot seat merchant//////////////////////////////////////

            {
                margin: '20 0 0 14',
                width:'100%',
                hidden: true,
                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                html: '<div style="color:black;text-align: left;font-size:16px;width:100%;margin:0px 0px 0px 0px"><b>Quick Explore Ayoha Rewards</b></div><br><div  style="color:transparent;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">- One hub. Double Reward. -</div>'
                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            },

            {
                xtype: 'container',
                width: '100%',
                height:90,
                hidden: true,
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
                align: 'center',
                },
                items:[
                    {
                        xtype: 'container',
                       // width: '33.3%',
                       width: '25%',
                       // width: 150,
                        height:80,
                        id:'containerMyAccount_Dashboard_AyohaRewardHomeID',
                        name:'nameContainerMyAccount_Dashboard_AyohaRewardHome',
                        hidden: true,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
{
xtype: 'container',
width: '100%',
height:80,
hidden: true,
margin: '0 0 0 0',
style: 'background-color:transparent',
//style: 'border-right:2px solid purple;border-left:2px solid purple;border-bottom:2px solid purple;border-top:2px solid purple;background: white;border-radius: 10px 10px 10px 10px;',
layout: {
type: 'vbox',
pack: 'center',
align: 'center',
},items:[

{



html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
'<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 40px; height: 40px; margin-bottom: 5px;" />'+ 
'<div style="font-size: 10px; font-weight: bold; color: purple; text-align: center;">'+ 
'Ayoha Reward<br>'+ 
'<span style="display: block; margin-top: -4px;">Home</span>'+ 
'</div>'+ 
'</div>'


}
]
}
                        ]
                    },
                    

                    {
                        xtype: 'container',
                       // width: '33.3%',
                       //width: 150,
                       width: '25%',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                               // width: '90%',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '0 0 0 0',
                                id:'containerMyAccount_Dashboard_AyohaMerchantRewardID',
                                name:'nameContainerMyAccount_Dashboard_AyohaMerchantReward',
                                style: 'background-color:transparent',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[

                                    {



                                        // html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        // '<img src="resources/icons/merchantreward01.png" style="width: 30px; height: 30px; margin-bottom: 5px;" />'+ 
                                        // '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;">'+ 
                                        // 'Merchant<br>'+ 
                                        // '<span style="display: block; margin-top: -4px;">Reward</span>'+ 
                                        // '</div>'+ 
                                        // '</div>'


                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">' + 
                                        '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                       // '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                       // '<img src="resources/icons/merchantreward01.png" style="width: 30px; height: 30px;" />' + 
                                        '<img src="resources/icons/merchantreward01.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                                            '</div>' + 
                                            '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">' + 
                                                'Get Loyalty<br>' + 
                                                '<span style="display: block; margin-top: -2px;">Perks</span>' +                                            
                                        '</div>' + 
                                    '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                       // width: '33.3%',
                       width: '25%',
                     //  width: 150,
                        id:'containerMyAccount_Dashboard_MembershipCardHub',
                        name:'nameContainerMyAccount_Dashboard_MembershipCardHub',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '0 0 0 0',
                                style: 'background-color:transparent',
                               // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[

                                    {



                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/membershipPurpleThree.png" style="width: 32px; height: 32px; margin-bottom: 5px;" />'+ 
                                        '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                                        'Memberships<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Card Hub</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                       // width: '33.3%',
                      // width: 150,
                      width: '25%',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '0 0 0 0',
                                style: 'background-color:transparent',
                                id:'containerMyAccount_Dashboard_AyohaMerchantStoreID',
                                name:'nameContainerMyAccount_Dashboard_AyohaMerchantStore',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[

                                    {


                                       // margin: '5 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/onlineStore.jpg" style="width: 30px; height: 30px; margin-bottom: 5px;" />'+ 
                                        '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center;margin: 4px 0px 0px 0px;">'+ 
                                        'Ayoha<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Merchant</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                   
                                   
                                ]
                            }
                        ]
                    },



                    {
                        xtype: 'container',
                       // width: '33.3%',
                      // width: 150,
                      width: '25%',
                        height:80,
                        hidden: false,
                        margin: '0 0 0 0',
                        style: 'background-color:transparent',
                        layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                        },items:[
                            {
                                xtype: 'container',
                                width: '100%',
                                height:80,
                                hidden: false,
                                margin: '19 0 0 0',
                                style: 'background-color:transparent',
                                id:'containerMyAccount_Dashboard_AyohaMerchantShoppingBagID',
                                name:'nameMyAccount_Dashboard_AyohaMerchantShoppingBag',
                                //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 10px 10px 10px 10px;',
                                layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center',
                                },items:[
                                    {
                                        margin: '0 0 0 28',
                                        height: 20,
                                        width: 20,
                                        hidden: true,
                                        zIndex:-1,
                                        id:'txtDashboard_AyohaMerchantShoppingBagBadgeID',
                                      html: '<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">0</div>',
                                    },
                                    {


                                        margin: '-15 0 0 0',
                                        html:'<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; font-family: sans-serif;">'+ 
                                        '<div style="background: linear-gradient(135deg, rgba(238,130,238,0.3), rgba(255,182,193,0.3)); border-radius: 12px; padding: 10px 10px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">' + 
                                        '<img src="resources/icons/shoppingbag03.png" style="width: 30px; height: 30px; margin-bottom: 5px;" ></img>'+ 
                                        '</div>' + 
                                        '<div style="font-size: 10px; font-weight: normal; color: black; text-align: center; margin: 4px 0px 0px 0px;">'+ 
                                        'Shopping<br>'+ 
                                        '<span style="display: block; margin-top: -2px;">Bag</span>'+ 
                                        '</div>'+ 
                                        '</div>'
                                         
                                                
                                                },
                                               
                                   
                                   
                                ]
                            }
                        ]
                    },
                ]
            },

                 

             {
                xtype: 'container',
                width: '100%',
                hidden: true,
                height:4,               
                style: 'background-color:transparent',
                layout: {
                    // type: 'vbox',
                    // align: 'stretch'
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                },
                items:[
{
    xtype: 'container',
                width: '95%',
                height:1,               
                style: 'background-color:#ECF0F1',
}
                ]

            },
          



/////////////////////////////// START PAGE AYOHA REWARD HOME

//                    {
//                     xtype: 'container',
//                     width: '100%',
//                   hidden: true,
//                     height:3250,
//                     id:'containerDashboard_AyohaRewardHomeMainContainer',
                  
//                     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                    // style: 'background-color:transparent',
//                     style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
//                     layout: {
//                         type: 'vbox',
//                         align: 'stretch'
//                     },
//                     items:[

//                 //     ]
//                 //    },
// /////////////////////////////////////////////// Start Ayoha premuim advertisement
// //                 {
// //                     xtype: 'container',
// //                     width: '100%',
// //                     hidden: false,
// //                     height:45,
// //                     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
// //                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //                    // style: 'background-color:transparent',
// //                     style: 'background-color:white',
// //                 },

// // {
// //     xtype: 'container',
// //     margin: '0 0 0 0',
// //     width: '100%',
// //     height: 450,
// //     hidden: true,
// //     // disable:true,
// //     style: 'background-color:white',
// //   //  style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
// //     layout: {
// //         type: 'vbox',
// //         pack: 'start',
// //         align: 'center',
// //     },
// //     items:[

   
// //                 {
// //                     xtype: 'container',
// //                     width: '100%',
// //                     id:'containerDashboard_PremiumAdvertisement',
// //                     margin: '0 0 0 0',
// //                     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
// //                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //                   style: 'background-color:transparent',
// //                     layout: {
// //                         type: 'hbox',
// //                         pack: 'center',
// //                         align: 'center',
// //                     },
// //                     items: [
// //                          {
// //                              margin: '10 0 0 14',
// //                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Merchant Premium</b></div>'
// //                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
// //                          },
// //                          {
// //                              xtype: 'spacer'
// //                          },
                          



// //                     ]
// //                 },


// //                 {
// //                     xtype: 'container',
                
// //                     id: 'Dashboard_Carousel_PremiumAdvertisement',
// //                     name: 'nameDashboard_Carousel_PremiumAdvertisement',                
// //                     //width: '100%',
// //                     //height: '100%',
// //                     margin: '10 0 0 0',
// //                     width: '100%',
// //                 // height: 480,
// //                  height: 450,
// //                    // disable:true,
// //                    style: 'background-color:transparent',
                 
                
// //                  //margin: '-322 0 0 0',
// //                     //indicators: false,
// //                     layout: {
// //                         type: 'vbox',
// //                         pack: 'start',
// //                         align: 'center',
// //                     },
// //                     items: [
// //                        {
// //                            xtype: 'carousel',
// //                            id: 'mainDashboardCarousel_PremiumAdvertisement',
// //                            name: 'namemainDashboardCarousel_PremiumAdvertisement',
// //                            height: 400,
// //                            width: '95%',
// //                            style: 'background-color:transparent',
// //                            listeners: {
// //                                activeitemchange: function (container, newCard, oldCard, index) {
// //                                    var index =parseInt(container.getActiveIndex());
// //                                    indexmainDashboardCarousel =parseInt(container.getActiveIndex());
                                 
                                  
                                
// //                                        DashboardArrIndexmainDashboardCarousel =parseInt(index);
                                      
                                                
// //                                        Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setStyle('background-color: rgba(0, 0, 0, 0.4);display:block;');
// //                                        Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setZIndex(100);
// //                                        Ext.getCmp('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement').setHidden(false);
   
// //                                        slideUpShow('containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',500);
   
                                      
                                      
                                 
                       
                       
// //                                     //    Ext.getCmp('containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement').setHidden(false);
// //                                     //    Ext.getCmp('containerDashbord_MyAyohaStore_PremiumAdvertisement').setHidden(false);
                                      
                                     
                                       
             
                                       
                                       
                                     
                       
                       
                       
                       
// //                                        Ext.getCmp('htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement').setHtml('<div style="width: 48px; height: 42px ; z-index: 100 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="'+ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel]+'" width="44" height="39" alt="Company Name"></div>');
// //                                        Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">'+ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]+'</div>');
// //                                        Ext.getCmp('htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement').setHtml('<div style="color:white;text-align: left;font-size:11px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">'+ArrAdvertisementPremium_AdvertisementTitle[DashboardArrIndexmainDashboardCarousel]+'</div>');
                                       
                       
                       
                       
// //                                        Dashboard_CalculateRating(ArrAdvertisementPremium_EnterpriseAccNo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel],ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel]);
                                  
// //                                    console.log("mainDashboardCarousel Index_PremiumAdvertisement:" + container.getActiveIndex());
// //                                },
                              
                               
// //                            },
// //                                                              items:[
 
                      
                      
                      
                      
                      
                      
                      
                      
                      
// //                        ]
// //                        },
                       
                       
                       
// //                 {
// //                    xtype: 'container',
// //                   //margin: '170 0 0 0',
// //                    margin: '0 0 0 0',
// //                 //  docked:'bottom',
// //                  margin: '-90 0 0 0',
// //                 //hidden:true,
// //                   zIndex: 200,
// //                    id: 'containerMyAccount_DashboardAdvertisementPremium_PremiumAdvertisement',
// //                   // name: 'namecontainerMyAccount_DashboardMyReward',
                
// //                  // style: 'background-color:yellow;',
// //                   style: 'background-color:transparent;',
// //                    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
// //                    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',
               
// //                    height: 50,
// //                    width: '95%',
// //                    layout: {
               
// //                        type: 'hbox',
// //                        pack: 'center',
// //                        align: 'center'
// //                    },
// //                    items: [
// //                        //{
// //                        //    xtype: 'panel',
// //                        //    width:1
// //                        //},
// //                        {
// //                            xtype: 'container', 
// //                            id: 'containerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',
// //                            name: 'namecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement',                        
// //                            width: '70%',
// //                           height: 50,
// //                           //hidden:true,
// //                           style: 'background-color:transparent;',
// //                           zIndex: 200,
// //                           layout: {
               
// //                            type: 'hbox',
// //                            pack: 'start',
// //                            align: 'center'
// //                        },
// //                           items:[
                          
// //                            {
// //                                xtype: 'container',
// //                                width: '24%',
// //                                id: 'containerDashboard_AyohaStore_Logo_PremiumAdvertisement',
// //                                height: 50,
// //                               // style: 'background-color:transparent;',
// //                                margin: '0 0 0 0',
// //                                //style: {
// //                                //    // background: '#D25959',
// //                                //    background: 'rgba(76, 175, 80, 0.3);',
// //                                //    // border: '2px'
// //                                //},
// //                               //  style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background: white;',
// //                              style: 'background-color:transparent',
// //                                layout: {
// //                                    type: 'vbox',
// //                                    pack: 'center',
// //                                    align: 'center',
// //                                },
// //                                items: [
// //                                      {
// //                                          //xtype: 'button',
// //                                          //height: 75,
// //                                          //width: 75,
// //                                        //   height: 50,
// //                                        //   width: '100%',
// //                                          margin: '0 0 0 16',
// //                                          id: 'htmlDashboard_AyohaStore_CompanyLogo_PremiumAdvertisement',
// //                                          //badgeText: "2",
// //                                          //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
// //                                          html: '<div style="width: 50px; height: 47px ; z-index: 200 !important;  border-width: 2px; border-style: solid; border-color: rgb(236, 240, 241); background: white; border-radius: 10%;" ><img src="https://setkita.com/AyohaImgCard/Logo/39259-0123214416-NoEnterprise/azmah01-removebg-preview.png" width="50" height="47" alt="Company Name"></div>',
   
// //                                      },
   
// //                                ]
// //                            },
// //                            {
// //                                xtype: 'spacer',
// //                                width: 10
// //                            },
// //                               {
// //                                   xtype: 'container',
// //                                   width: '74%',
// //                                   id: 'containerDashboard_AyohaStore_CompanyInfo_PremiumAdvertisement',
   
   
// //                                   margin: '0 0 0 0',
// //                                   //style: {
// //                                   //    // background: '#D25959',
// //                                   //    background: 'rgba(76, 175, 80, 0.3);',
// //                                   //    // border: '2px'
// //                                   //},
// //                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //                                   style: 'background-color:transparent',
// //                                   layout: {
// //                                       type: 'vbox',
// //                                       pack: 'center',
// //                                       align: 'center',
// //                                   },
// //                                   items: [
// //                                          {
   
// //                                              id: 'htmlDashboard_AyohaStore_CompanyInfo_Name_PremiumAdvertisement',
// //                                              width: '100%',
// //                                              html: '<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold">BuskartApp Technology Sdn Bhd</div>',
   
   
// //                                          },
// //                                           {
   
// //                                               id: 'htmlDashboard_AyohaStore_CompanyInfo_Line_PremiumAdvertisement',
// //                                               width: '100%',
// //                                               margin: '0 0 0 0',
// //                                               html: '<div style="background-color:white;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',
   
   
// //                                           },
// //                                           {
   
// //                                               id: 'htmlDashboard_AyohaStore_CompanyInfo_Tagline_PremiumAdvertisement',
   
// //                                               width: '100%',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<div style="color:white;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Burger padu bak hang!</div>',
   
   
// //                                           },
                                          
   
// //                                   ]
// //                               },
// //                           ]
   
// //                        },
   
// //                        {
// //                            xtype: 'container',
// //                            zIndex: 100,
// //                            width: '30%',
// //                           height: 50,
// //                           layout: {
               
// //                            type: 'hbox',
// //                            pack: 'end',
// //                            align: 'center'
// //                        },
// //                           items:[
   
                         
   
// //                            {
   
// //                                xtype: 'container',
// //                              //  width: '30%',
// //                              id: 'containerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
// //                              name: 'namecontainerDashbord_MyAyohaStoreRateReview_PremiumAdvertisement',
// //                                width: '60%',
// //                                //hidden: true,
// //                                //margin:'0 0 0 0',
// //                                height: 35,
// //                                style: 'background-color: transparent;',
// //                               // id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',
   
// //                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //                                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
// //                                layout: {
// //                                    type: 'vbox',
// //                                    pack: 'center',
// //                                    align: 'center',
// //                                },
// //                                items: [
// //                                    {
// //                                        xtype: 'container',
// //                                        width: '100%',
// //                                       // flex: 1,
// //                                        margin: '-5 0 0 0',
// //                                        height: 50,
// //                                        id: 'containerDashbord_ReviewAndRate_PremiumAdvertisement',
// //                                       // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
// //                                        // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
// //                                        style: "background-color: transparent;",
// //                                        layout: {
// //                                            type: 'vbox',
// //                                            pack: 'center',
// //                                            align: 'center'
   
// //                                        },
// //                                        items: [
// //                                            {
// //                                                margin: '0 0 0 0',
// //                                                id: 'htmlDashbord_ReviewAndRateCount_PremiumAdvertisement',
// //                                                html: '<div style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',
   
// //                                            },
   
// //                                            {
// //                                                xtype: 'container',
// //                                                width: '100%',
// //                                                margin: '-12 0 0 0',
// //                                                height: 9,
// //                                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
// //                                                style: "background-color: transparent;",
// //                                                layout: {
// //                                                    type: 'hbox',
// //                                                    pack: 'center',
// //                                                    align: 'center'
   
// //                                                },
// //                                                items: [
   
// //                                                    {
// //                                                        id: 'htmlDashbord_Star1',
// //                                                        height: 9,
// //                                                        width: 9,
// //                                                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// //                                                    },
// //    {
// //    id: 'htmlDashbord_Star2',
// //    height: 9,
// //    width: 9,
// //    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// //    },
// //    {
// //    id: 'htmlDashbord_Star3',
// //    height: 9,
// //    width: 9,
// //    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// //    },
// //    {
// //    id: 'htmlDashbord_Star4',
// //    height: 9,
// //    width: 9,
// //    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
// //    },
// //    {
// //    id: 'htmlDashbord_Star5',
// //    height: 9,
// //    width: 9,
// //    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
   
// //    },
// //                                                ]
// //                                            },
   
// //                                            {
// //                                                xtype: 'container',
// //                                                width: '100%',
// //                                                margin: '10 0 0 0',
// //                                                height: 9,
// //                                                layout: {
// //                                                    type: 'hbox',
// //                                                    pack: 'center',
// //                                                    align: 'center'
// //                                                },
// //                                                items: [
// //                                                    {
// //                                                        id: 'htmlDashbord_ReviewByCount_PremiumAdvertisement',
// //                                                        html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:white;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
// //                                                    },
// //                                                ]
// //                                            },
// //                                             //{
// //                                             //    margin: '0 0 0 0',
// //                                             //    height: 15,
// //                                             //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
// //                                             //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
// //                                             //}
// //                                        ]
// //                                    },
// //                                ]
// //                            },
   
   
   
   
                         
// //                            {
// //                                xtype: 'panel',
// //                               width: 7
// //                               // width: 3
// //                            },
   
   
                           
// //                            {
// //                             xtype: 'container',
// //                             id: 'containerDashbord_MyAyohaStore_PremiumAdvertisement',
// //                             name: 'namecontainerDashbord_MyAyohaStore_PremiumAdvertisement',
                          
// //                             style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
// //                             height: 40,
// //                             width: 40,
// //                             margin: '0 0 0 0',
// //                             layout: {

// //                                 type: 'vbox',
// //                                 pack: 'center',
// //                                 align: 'center'
// //                             },
// //                             items: [
// //                                 {
// //                                     //xtype: 'button',
// //                                     //id: 'btnMyAccount_DashboardEwalletIcon',
// //                                     height: 20,
// //                                     width: 20,
// //                                     margin: '0 0 0 0',
// //                                     // iconCls: 'list',
// //                                     //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
// //                                     html: '<div ><img src="resources/icons/onlineStore.jpg" style ="width:20px;height:20px;" alt="Company Name"></div>',
// //                                     // ui: 'plain',
// //                                     //handler: function () {

// //                                     //    //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
// //                                     //    //    type: 'slideOut',
// //                                     //    //    direction: 'left',
// //                                     //    //    easing: 'cubic-bezier(.7,0,.7,1)',
// //                                     //    //    duration: 250

// //                                     //    //}));
// //                                     //    //isLoyaltyCardRedeemListOpen = 'N';
// //                                     //}
// //                                 },
// //                             ]
// //                         },

   
// //                           ]
   
// //                        },
                     
// //                  {
// //                           xtype: 'spacer',
// //                           width:20
// //                        },
// //                    ]
// //                },
                       

                          
   
                      
   
// //                     ]
// //                 },

// //             ]
// //         },
        






//                 /////////////////////////////////////////////// end Ayoha premuim advertisement





// {
//     xtype: 'container',
//     width: '100%',
//     hidden: false,
//     height:30,
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//     style: 'background-color:white',
// },
// {
//     xtype: 'container',
//     width: '100%',
//     hidden: false,
//     height:10,
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//     style: 'background-color:transparent',
// },

//                      //Ayoha reward redemption//

//                                 {
//                                     xtype: 'container',
//                                     width: '100%',
//                                     hidden: false,
//                                     id:'containerDashboard_AyohaPointRedemption',
//                                     margin: '0 0 0 0',
//                                     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                     style: 'background-color:transparent',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center',
//                                     },
//                                     items: [
//                                          {
//                                              margin: '10 0 0 14',
//                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                              html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Ayoha Point Redemption</b></div>'
//                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                          },
//                                          {
//                                              xtype: 'spacer'
//                                          },
//                                           {
//                                               xtype: 'button',
//                                               id: 'btnMyDashboard_AyohaRewardRedemptionList',
//                                               //hidden:true,
//                                               //  badgeText: '1',
//                                               margin: '15 10 0 0',
//                                               height: 35,
//                                               width: 35,
//                                               html: '<img src="resources/icons/myredeemption.png" width="25" height="25" alt="Company Name">',
//                                               ui: 'plain',
//                                               handler: function () {
//                                                   FloatPanel_AyohaReward_RedemptionHistoryShow();
//                                               }
//                                           },



//                                     ]
//                                 },
//                                 {
//                                     xtype: 'container',
//                                     width: '100%',
//                                      hidden: true,
//                                     margin: '-7 0 0 0',
//                                     id: 'containerAyoharewardredemptionVerifiedUser',
//                                     style: {
//                                         // background: '#D25959',
//                                         background: 'transparent',
//                                         // border: '2px'
//                                     },
//                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center',
//                                     },
//                                     items: [
//                                          {
//                                              margin: '-8 0 0 14',
//                                              id: 'htmlAyohaRewardRedemptionVerifiedUser',
//                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                              html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">- Ayoha Membership Only -</div>'
//                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                          },
//                                          {
//                                              xtype: 'spacer'
//                                          },




//                                     ]
//                                 },



//                                 {
//                                     xtype: 'container',
//                                     id: 'containerAyohaRewardRedemption',

//                                     // hidden: true,
//                                    style: "background-color: transparent;",
//                                    // style:"background:linear-gradient(180deg, #FFF8E1 0%, #FFE7B7 100%);",                                   
//                                     margin: '5 0 0 0',
//                                     width: '100%',
//                                     //height: 350,
//                                     height: 380,
//                                     //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
//                                     layout: {
//                                         type: 'hbox',
//                                         pack: 'center',
//                                         align: 'center'

//                                     },
//                                     items: [



//                                         {
//                                             xtype: 'container',
//                                             margin: '0 0 0 0',
//                                             width: '8%',
//                                             id: 'container_containerAyohaRewardRedemption_carosel_back',
//                                             // height: 350,
//                                             height: 400,
//                                             style: 'background-color:transparent',
//                                             layout: {
//                                                 type: 'vbox',
//                                                 pack: 'center',
//                                                 align: 'center',
//                                             }, items: [

//                                                      {
//                                                          xtype: 'button',
//                                                          margin: '-50 0 0 0',
//                                                          id: 'btn_containerAyohaRewardRedemption_carosel_back',
//                                                          height: 30,
//                                                          width: 35,
//                                                          // iconCls: 'list',
//                                                          html: '<div ><img src="resources/icons/backPurple2.png" width="25" height="20" alt="Company Name"></div>',
//                                                          ui: 'plain',
//                                                          handler: function () {

//                                                              //Ext.getCmp('carousel_containerAyohaRewardRedemption').setShowAnimation('slideIn');
//                                                              // Ext.getCmp('carousel_containerAyohaRewardRedemption').setShowAnimation('slideIn');

//                                                              var crsl = Ext.getCmp('carousel_containerAyohaRewardRedemption');
//                                                              crsl.previous();
//                                                          }
//                                                      },

//                                             ]
//                                         },





//   {
//       xtype: 'carousel',
//       hidden: false,
//       //width: '95%',
//       //height: 80,
//       margin: '-2 0 0 0',
//       width: '84%',
//       id: 'carousel_containerAyohaRewardRedemption',
//       // height: 350,
//       height: 380,
//       items: [





// {
//     xtype: 'container',
//     // xtype: 'carousel',
//     hidden: false,
//     //width: '95%',
//     //height: 80,
//     margin: '5 0 0 0',
//     width: '100%',
//     id: 'container_containerAyohaRewardRedemption_carosel0',
//     height: 350,
//     // height: 440,
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//     style: 'background-color:transparent',
//     layout: {
//         type: 'vbox',
//         pack: 'center',
//         align: 'center',
//     },
//     items: [
//         {
//             xtype: 'container',
//             //width: '95%',
//             //height: 80,
//             //margin: '12 0 0 0',
//             width: '100%',
//             height: 30,
//             //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//             //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             style: 'background-color:transparent',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//             layout: {
//                 type: 'hbox',
//                 pack: 'center',
//                 align: 'center',
//             },
//             items: [




//                  {
//                      margin: '-10 0 0 0',
//                      id: 'containerAyohaRewardRedemption_carosel_APoint0',
//                      html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
//                  },
//                 {
//                     margin: '-12 0 0 3',
//                     id: 'containerAyohaRewardRedemption_carosel_APointTxt0',
//                     html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
//                 },



//             ]

//         },




//         {


//             //xtype: 'button',
//             height: 250,
//             width: '100%',
//             margin: '-2 0 0 0',
//             //zIndex: 400,
//             id: 'containerAyohaRewardRedemption_carosel_APointImg0',
//             name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg0',
//             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

//             //ui: 'plain',
//             //handler: function () {

//             //}


//         },



//     {
//         margin: '-20 0 0 0',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt0',
//         html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
//     },
//      {
//          margin: '-2 0 0 0',
//          id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt0',
//          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
//      },

//     {
//         margin: '5 0 0 0',
//         width: '100%',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton0',
//         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(0)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">🎉 Redeem Now</button></div>'
//     },


//     ]

// },



// ///////////////////////////

// {
//     xtype: 'container',
//     // xtype: 'carousel',
//     hidden: false,
//     //width: '95%',
//     //height: 80,
//     margin: '5 0 0 0',
//     width: '100%',
//     id: 'container_containerAyohaRewardRedemption_carosel1',
//     height: 350,
//     // height: 440,
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//     style: 'background-color:transparent',
//     layout: {
//         type: 'vbox',
//         pack: 'center',
//         align: 'center',
//     },
//     items: [
//         {
//             xtype: 'container',
//             //width: '95%',
//             //height: 80,
//             //margin: '12 0 0 0',
//             width: '100%',
//             height: 30,
//             //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//             //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             style: 'background-color:transparent',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//             layout: {
//                 type: 'hbox',
//                 pack: 'center',
//                 align: 'center',
//             },
//             items: [




//                  {
//                      margin: '-10 0 0 0',
//                      id: 'containerAyohaRewardRedemption_carosel_APoint1',
//                      html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
//                  },
//                 {
//                     margin: '-12 0 0 3',
//                     id: 'containerAyohaRewardRedemption_carosel_APointTxt1',
//                     html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
//                 },



//             ]

//         },




//         {


//             //xtype: 'button',
//             height: 250,
//             width: '100%',
//             margin: '-2 0 0 0',
//             //zIndex: 400,
//             id: 'containerAyohaRewardRedemption_carosel_APointImg1',
//             name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg1',
//             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

//             //ui: 'plain',
//             //handler: function () {

//             //}


//         },



//     {
//         margin: '-20 0 0 0',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt1',
//         html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
//     },
//      {
//          margin: '-2 0 0 0',
//          id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt1',
//          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
//      },

//     {
//         margin: '5 0 0 0',
//         width: '100%',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton1',
//         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(1)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
//     },


//     ]

// },



// {
//     xtype: 'container',
//     // xtype: 'carousel',
//     hidden: false,
//     //width: '95%',
//     //height: 80,
//     margin: '5 0 0 0',
//     width: '100%',
//     id: 'container_containerAyohaRewardRedemption_carosel2',
//     height: 350,
//     // height: 440,
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//     style: 'background-color:transparent',
//     layout: {
//         type: 'vbox',
//         pack: 'center',
//         align: 'center',
//     },
//     items: [
//         {
//             xtype: 'container',
//             //width: '95%',
//             //height: 80,
//             //margin: '12 0 0 0',
//             width: '100%',
//             height: 30,
//             //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//             //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             style: 'background-color:transparent',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//             layout: {
//                 type: 'hbox',
//                 pack: 'center',
//                 align: 'center',
//             },
//             items: [




//                  {
//                      margin: '-10 0 0 0',
//                      id: 'containerAyohaRewardRedemption_carosel_APoint2',
//                      html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
//                  },
//                 {
//                     margin: '-12 0 0 3',
//                     id: 'containerAyohaRewardRedemption_carosel_APointTxt2',
//                     html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
//                 },



//             ]

//         },




//         {


//             //xtype: 'button',
//             height: 250,
//             width: '100%',
//             margin: '-2 0 0 0',
//             //zIndex: 400,
//             id: 'containerAyohaRewardRedemption_carosel_APointImg2',
//             name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg2',
//             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

//             //ui: 'plain',
//             //handler: function () {

//             //}


//         },



//     {
//         margin: '-20 0 0 0',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt2',
//         html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
//     },
//      {
//          margin: '-2 0 0 0',
//          id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt2',
//          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
//      },

//     {
//         margin: '5 0 0 0',
//         width: '100%',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton2',
//         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(2)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
//     },


//     ]

// },



// {
//     xtype: 'container',
//     // xtype: 'carousel',
//     hidden: false,
//     //width: '95%',
//     //height: 80,
//     margin: '5 0 0 0',
//     width: '100%',
//     id: 'container_containerAyohaRewardRedemption_carosel3',
//     height: 350,
//     // height: 440,
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//     style: 'background-color:transparent',
//     layout: {
//         type: 'vbox',
//         pack: 'center',
//         align: 'center',
//     },
//     items: [
//         {
//             xtype: 'container',
//             //width: '95%',
//             //height: 80,
//             //margin: '12 0 0 0',
//             width: '100%',
//             height: 30,
//             //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//             //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             style: 'background-color:transparent',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//             layout: {
//                 type: 'hbox',
//                 pack: 'center',
//                 align: 'center',
//             },
//             items: [




//                  {
//                      margin: '-10 0 0 0',
//                      id: 'containerAyohaRewardRedemption_carosel_APoint3',
//                      html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
//                  },
//                 {
//                     margin: '-12 0 0 3',
//                     id: 'containerAyohaRewardRedemption_carosel_APointTxt3',
//                     html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
//                 },



//             ]

//         },




//         {


//             //xtype: 'button',
//             height: 250,
//             width: '100%',
//             margin: '-2 0 0 0',
//             //zIndex: 400,
//             id: 'containerAyohaRewardRedemption_carosel_APointImg3',
//             name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg3',
//             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

//             //ui: 'plain',
//             //handler: function () {

//             //}


//         },



//     {
//         margin: '-20 0 0 0',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt3',
//         html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
//     },
//      {
//          margin: '-2 0 0 0',
//          id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt3',
//          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
//      },

//     {
//         margin: '5 0 0 0',
//         width: '100%',
//         id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton3',
//         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(3)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
//     },


//     ]

// },






//          {
//              xtype: 'container',
//              // xtype: 'carousel',
//              hidden: false,
//              //width: '95%',
//              //height: 80,
//              margin: '5 0 0 0',
//              width: '100%',
//              id: 'container_containerAyohaRewardRedemption_carosel4',
//              height: 350,
//              // height: 440,
//              // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
//              style: 'background-color:transparent',
//              layout: {
//                  type: 'vbox',
//                  pack: 'center',
//                  align: 'center',
//              },
//              items: [
//                  {
//                      xtype: 'container',
//                      //width: '95%',
//                      //height: 80,
//                      //margin: '12 0 0 0',
//                      width: '100%',
//                      height: 30,
//                      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
//                      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                      style: 'background-color:transparent',
//                      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
//                      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
//                      layout: {
//                          type: 'hbox',
//                          pack: 'center',
//                          align: 'center',
//                      },
//                      items: [




//                           {
//                               margin: '-10 0 0 0',
//                               id: 'containerAyohaRewardRedemption_carosel_APoint4',
//                               html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
//                           },
//                          {
//                             margin: '-12 0 0 3',
//                              id: 'containerAyohaRewardRedemption_carosel_APointTxt4',
//                              html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
//                          },



//                      ]

//                  },




//                  {


//                      //xtype: 'button',
//                      height: 250,
//                      width: '100%',
//                      margin: '-2 0 0 0',
//                      //zIndex: 400,
//                      id: 'containerAyohaRewardRedemption_carosel_APointImg4',
//                      name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg4',
//                      html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

//                      //ui: 'plain',
//                      //handler: function () {

//                      //}


//                  },



//              {
//                  margin: '-20 0 0 0',
//                  id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt4',
//                  html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
//              },
//               {
//                   margin: '-2 0 0 0',
//                   id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt4',
//                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
//               },

//              {
//                  margin: '5 0 0 0',
//                  width: '100%',
//                  id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton4',
//                  html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(4)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
//              },


//              ]

//          },

// ////



//       ]
//   },



//        {
//            xtype: 'container',
//            margin: '0 0 0 0',
//            width: '8%',
//            id: 'container_containerAyohaRewardRedemption_carosel_next',
//            // height: 350,
//            height: 380,
//            style: 'background-color:transparent',
//            layout: {
//                type: 'vbox',
//                pack: 'center',
//                align: 'center',
//            }, items: [

//                     {
//                         xtype: 'button',
//                         margin: '-50 0 0 -10',
//                         id: 'btn_containerAyohaRewardRedemption_carosel_next',
//                         height: 30,
//                         width: 35,
//                         // iconCls: 'list',
//                         html: '<div ><img src="resources/icons/nextPurple2.png" width="25" height="20" alt="Company Name"></div>',
//                         ui: 'plain',
//                         handler: function () {
//                             var crsl = Ext.getCmp('carousel_containerAyohaRewardRedemption');
//                             crsl.next();
//                         }
//                     },

//            ]
//        },
















//                                     ]
//                                 },





// ///////////////////////////////////////////////// start ayoha reward contest ///////////////

// {
//     xtype: 'container',
//     width: '100%',
//     id:'containerAyohaRewardContest',
//     //hidden:true,
//     //margin: '-10 0 0 0',
//     margin: '35 0 0 0',
//     // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//     style: 'background-color:transparent',
//     layout: {
//         type: 'hbox',
//         pack: 'center',
//         align: 'center',
//     },
//     items: [
//          {
//              margin: '10 0 0 14',
//              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Reward Contest</b></div>'
//              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//          },
//          {
//              xtype: 'spacer'
//          },
//           {
//               xtype: 'button',
//               id: 'btnMyDashboard_AyohaRewardRankingInfo',
//               //hidden:true,
//               //  badgeText: '1',
//               margin: '15 10 0 0',
//               height: 35,
//               width: 35,
//               html: '<img src="resources/icons/entercontest01.png" width="25" height="25" alt="Company Name">',
//               ui: 'plain',
//               handler: function () {
//                   // FloatPanel_AyohaReward_ContestAdvertisementShow();
//                   FloatPanel_AyohaReward_ContestHistoryShow();
//               }
//           },



//     ]
// },

//                       {
//                           xtype: 'container',
//                           width: '100%',
//                           hidden: true,
//                           margin: '-7 0 0 0',
//                           id: 'containerContestEndDate',
//                           style: {
//                               // background: '#D25959',
//                               background: 'transparent',
//                               // border: '2px'
//                           },
//                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                           layout: {
//                               type: 'hbox',
//                               pack: 'center',
//                               align: 'center',
//                           },
//                           items: [
//                                {
//                                    margin: '-8 0 0 14',
//                                    id: 'htmlJoinContestDate',
//                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                    html: '<div style="color:black;text-align: center;font-size:14px;width:100%;">Spent And Win</div>'
//                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                },
//                                {
//                                    xtype: 'spacer'
//                                },
//                                 {
//                                     xtype: 'button',
//                                     id: 'btnMyDashboard_AyohaRewardRankingInfoxx',
//                                     hidden: true,
//                                     //  badgeText: '1',
//                                     margin: '0 10 0 0',
//                                     height: 35,
//                                     width: 35,
//                                     html: '<img src="resources/icons/contest01.png" width="25" height="25" alt="Company Name">',
//                                     ui: 'plain',
//                                     handler: function () {
//                                         FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                     }
//                                 },



//                           ]
//                       },



//                       {
//                           xtype: 'container',
//                           width: '40%',
//                           //width: 100,
//                           height: 150,
//                           zIndex: 300,
//                           // hidden: true,
//                           margin: '-30 0 0 0',
//                           id: 'containerContestYourRanking',
//                           name: 'containerContestYourRankingName',
//                           //style: {
//                           //     background: '#D25959',
//                           //   // background: 'transparent',
//                           //    // border: '2px'
//                           //},
//                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                           style: 'background-color:transparent',
//                           layout: {
//                               type: 'vbox',
//                               pack: 'center',
//                               align: 'center',
//                           },
//                           items: [
//                                {
//                                    margin: '0 0 0 0',
//                                    id: 'htmlContestYourRanking',
//                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                    html: '<div style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Your Ranking !</div>'
//                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                },

//                               {
//                                   margin: '0 0 0 0',
//                                   id: 'htmlContestYourRankingNo',
//                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                   html: '<div style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">?</div>'
//                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                               },

//                                {
//                                    margin: '-80 0 0 0',
//                                    id: 'htmlContestYourRankingview',
//                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                    html: '<div  style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">*View Ranking</div>'
//                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                },

//                           ]
//                       },

//                       {
//                           xtype: 'container',
//                           width: '100%',
//                           height: 400,
//                           margin: '-100 0 0 5',
//                           name: 'containerDashboard_User_AyohaRewardRankingBar',
//                           id:'containerDashboard_User_AyohaRewardRankingBarID',
//                           //style: {
//                           //    // background: '#D25959',
//                           //    background: 'rgba(76, 175, 80, 0.3);',
//                           //    // border: '2px'
//                           //},
//                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
//                           style: 'background-color:transparent;border-bottom:2px none white;',
//                           //  style: 'background-image: url("resources/icons/sportlight03-removebg-preview.png"); background-size: 100% 100%;background-repeat: no-repeat;',
//                           layout: {
//                               type: 'hbox',
//                               pack: 'center',
//                               align: 'center',
//                           },

//                           items: [
//                                {
//                                    xtype: 'container',
//                                    width: '31%',
//                                    height: 400,
//                                    margin: '0 0 0 0',
//                                    name: 'containerDashboard_User_AyohaRewardRankingBar01',
//                                    //style: {
//                                    //    // background: '#D25959',
//                                    //    background: 'rgba(76, 175, 80, 0.3);',
//                                    //    // border: '2px'
//                                    //},
//                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                    style: 'background-color:transparent',
//                                    layout: {
//                                        type: 'vbox',
//                                        pack: 'end',
//                                        align: 'center',
//                                    },

//                                    items: [

//                                         //{
//                                         //    xtype: 'button',
//                                         //    height: 70,
//                                         //    width: 70,
//                                         //    margin: '0 0 0 3',
//                                         //    id: 'btnDashboard_User_AyohaRewardRanking01',
//                                         //    //badgeText: "2",
//                                         //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/AzuImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
//                                         //    ui: 'plain',
//                                         //    handler: function () {



//                                         //    }
//                                         //},




//                                         {
//                                             //xtype: 'button',

//                                             xtype: 'container',
//                                             style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
//                                             height: 80,
//                                             width: 80,
//                                             margin: '-38 0 0 0',
//                                             id: 'btnDashboard_User_AyohaRewardRanking02',
//                                             //badgeText: "2",
//                                             //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
//                                             //ui: 'plain',
//                                             //handler: function () {



//                                             //}

//                                             layout: {
//                                                 type: 'vbox',
//                                                 pack: 'center',
//                                                 align: 'center',
//                                             },
//                                             items: [
//                                                 {
//                                                     height: 70,
//                                                     width: 70,
//                                                     id: 'imgDashboard_User_AyohaRewardRanking02',
//                                                     html: '<img src="resources/icons/AzuImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
//                                                 }
//                                             ]
//                                         },




//                                          {
//                                              margin: '0 0 0 0',
//                                              id: 'htmlDashboard_User_AyohaRewardRanking02_Name',
//                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Azuliana</b></div>'
//                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                          },
//                                           {
//                                               margin: '-2 0 0 0',
//                                               id: 'htmlDashboard_User_AyohaRewardRanking02_AyohaPoint',
//                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                               html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>2000 Point</b></div>'
//                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                           },

//                                           {
//                                               xtype: 'container',
//                                               width: 100,
//                                               height: 130,
//                                               margin: '0 0 0 0',
//                                               zIndex: 50,
//                                               name: 'containerDashboard_User_AyohaRewardRankingBar02_Bar',
//                                               //style: {
//                                               //    // background: '#D25959',
//                                               //    background: 'rgba(76, 175, 80, 0.3);',
//                                               //    // border: '2px'
//                                               //},
//                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                               style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
//                                               //  style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-bottom:2px none white;border-left:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


//                                               layout: {
//                                                   type: 'vbox',
//                                                   pack: 'center',
//                                                   align: 'center',
//                                               },
//                                               items: [
//                                                   {
//                                                       html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>2</b></div>'
//                                                   }
//                                               ]

//                                           }



//                                    ]
//                                },


//                                 {
//                                     xtype: 'container',
//                                     width: '31%',
//                                     height: 400,
//                                     margin: '0 0 0 6',
//                                     name: 'containerDashboard_User_AyohaRewardRankingBar01',
//                                     //style: {
//                                     //    // background: '#D25959',
//                                     //    background: 'rgba(76, 175, 80, 0.3);',
//                                     //    // border: '2px'
//                                     //},
//                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                     style: 'background-color:transparent',
//                                     layout: {
//                                         type: 'vbox',
//                                         pack: 'end',
//                                         align: 'center',
//                                     },

//                                     items: [


//                                         {
//                                             //xtype: 'button',

//                                             xtype: 'container',
//                                             style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.5);',
//                                             height: 90,
//                                             width: 90,
//                                             margin: '-38 0 0 0',
//                                             id: 'btnDashboard_User_AyohaRewardRanking01',
//                                             //badgeText: "2",
//                                             //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
//                                             //ui: 'plain',
//                                             //handler: function () {



//                                             //}

//                                             layout: {
//                                                 type: 'vbox',
//                                                 pack: 'center',
//                                                 align: 'center',
//                                             },
//                                             items: [
//                                                 {
//                                                     height: 80,
//                                                     width: 80,
//                                                     id: 'imgDashboard_User_AyohaRewardRanking01',
//                                                     html: '<img src="resources/icons/founder.jpg"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
//                                                 }
//                                             ]
//                                         },
//                                          {
//                                              margin: '0 0 0 0',
//                                              id: 'htmlDashboard_User_AyohaRewardRanking01_Name',
//                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Mizi</b></div>'
//                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                          },
//                                           {
//                                               margin: '-2 0 0 0',
//                                               id: 'htmlDashboard_User_AyohaRewardRanking01_AyohaPoint',
//                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                               html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>4870 Point</b></div>'
//                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                           },

//                                            {
//                                                xtype: 'container',
//                                                width: 110,
//                                                height: 220,
//                                                zIndex: 50,
//                                                margin: '0 0 0 0',
//                                                name: 'containerDashboard_User_AyohaRewardRankingBar01_Bar',
//                                                //style: {
//                                                //    // background: '#D25959',
//                                                //    background: 'rgba(76, 175, 80, 0.3);',
//                                                //    // border: '2px'
//                                                //},
//                                                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                style: 'background-color:#FF69B4;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
//                                                layout: {
//                                                    type: 'vbox',
//                                                    pack: 'center',
//                                                    align: 'center',
//                                                },
//                                                items: [
//                                                    {
//                                                        html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>1</b></div>'
//                                                    }
//                                                ]

//                                            }


//                                     ]
//                                 },





//                                  {
//                                      xtype: 'container',
//                                      width: '31%',
//                                      height: 400,
//                                      margin: '0 0 0 0',
//                                      name: 'containerDashboard_User_AyohaRewardRankingBar03',
//                                      //style: {
//                                      //    // background: '#D25959',
//                                      //    background: 'rgba(76, 175, 80, 0.3);',
//                                      //    // border: '2px'
//                                      //},
//                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                      style: 'background-color:transparent',
//                                      layout: {
//                                          type: 'vbox',
//                                          pack: 'end',
//                                          align: 'center',
//                                      },

//                                      items: [


//                                           //{
//                                           //    xtype: 'button',
//                                           //    height: 70,
//                                           //    width: 70,
//                                           //    margin: '20 0 0 0',
//                                           //    id: 'btnDashboard_User_AyohaRewardRanking03',
//                                           //    //badgeText: "2",
//                                           //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/anisAqilahImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
//                                           //    ui: 'plain',
//                                           //    handler: function () {



//                                           //    }
//                                           //},

//                                           {
//                                               //xtype: 'button',

//                                               xtype: 'container',
//                                               style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
//                                               height: 80,
//                                               width: 80,
//                                               margin: '-38 0 0 0',
//                                               id: 'btnDashboard_User_AyohaRewardRanking03',
//                                               //badgeText: "2",
//                                               //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
//                                               //ui: 'plain',
//                                               //handler: function () {



//                                               //}

//                                               layout: {
//                                                   type: 'vbox',
//                                                   pack: 'center',
//                                                   align: 'center',
//                                               },
//                                               items: [
//                                                   {
//                                                       height: 70,
//                                                       width: 70,
//                                                       id: 'imgDashboard_User_AyohaRewardRanking03',
//                                                       html: '<img src="resources/icons/anisAqilahImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
//                                                   }
//                                               ]
//                                           },
//                                           {
//                                               margin: '0 0 0 0',
//                                               id: 'htmlDashboard_User_AyohaRewardRanking03_Name',
//                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                               html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>A.Aqilah</b></div>'
//                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                           },
//                                            {
//                                                margin: '-2 0 0 0',
//                                                id: 'htmlDashboard_User_AyohaRewardRanking03_AyohaPoint',
//                                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                                html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>1120 Point</b></div>'
//                                                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                            },

//                                               {
//                                                   xtype: 'container',
//                                                   width: 90,
//                                                   height: 90,
//                                                   zIndex: 50,
//                                                   margin: '0 0 0 0',
//                                                   name: 'containerDashboard_User_AyohaRewardRankingBar03_Bar',
//                                                   //style: {
//                                                   //    // background: '#D25959',
//                                                   //    background: 'rgba(76, 175, 80, 0.3);',
//                                                   //    // border: '2px'
//                                                   //},
//                                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                                                   style: 'background-color:#FADC77; border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
//                                                   layout: {
//                                                       type: 'vbox',
//                                                       pack: 'center',
//                                                       align: 'center',
//                                                   },
//                                                   items: [
//                                                       {
//                                                           html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>3</b></div>'
//                                                       }
//                                                   ]

//                                               }

//                                      ]
//                                  },

//                           ]
//                       },
//                       {
//                           xtype: 'container',
//                           width: '95%',
//                           height: 20,
//                           margin: '0 0 0 10',
//                           name: 'containerDashboard_User_AyohaRewardRankingLine',
//                           id:'containerDashboard_User_AyohaRewardRankingLineID',
//                           //style: {
//                           //    // background: '#D25959',
//                           //    background: 'rgba(76, 175, 80, 0.3);',
//                           //    // border: '2px'
//                           //},
//                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
//                           // style: 'background-color:transparent;border-bottom:2px solid white;',
//                           style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
//                           layout: {
//                               type: 'hbox',
//                               pack: 'center',
//                               align: 'center',
//                           },


//                           items: [
//                                {
//                                    xtype: 'button',
//                                    id: 'btnMyDashboard_AyohaRewardRankingEnterContest',
//                                    // hidden:true,
//                                    //  badgeText: '1',
//                                    margin: '-550 0 0 0',
//                                    height: 30,
//                                    width: 30,
//                                    //html: '<img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name">',
//                                    ui: 'plain',
//                                    handler: function () {
//                                        // FloatPanel_AyohaReward_TopTenRankingShow();
//                                        FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                    }
//                                },
//                                {
//                                    margin: '-620 0 0 -145',
//                                    zIndex: -100,
//                                    hidden: true,
//                                    html: '<img src="resources/icons/splashbg03.png" width="600px" height="600px" alt="Company Name">'
//                                    // html: '<img src="resources/icons/splashbg05.png" width="600px" height="600px" alt="Company Name">'
//                                },
//                                 {
//                                     xtype: 'button',
//                                     id: 'btnMyDashboard_AyohaRewardRankingEnterContest2',
//                                     //  badgeText: '1',
//                                     margin: '-500 0 0 -645',

//                                     height: 50,
//                                     width: 50,
//                                     // html: '<img src="resources/icons/shiningIcon.png" width="40" height="40" alt="Company Name">',
//                                     ui: 'plain',
//                                     handler: function () {
//                                         // FloatPanel_AyohaReward_TopTenRankingShow();
//                                         FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                     }
//                                 },
//                                 //{
//                                 //    xtype: 'button',
//                                 //    id: 'btnMyDashboard_AyohaRewardRankingEnterContest2',
//                                 //    //  badgeText: '1',
//                                 //    margin: '-500 0 0 60',

//                                 //    height: 50,
//                                 //    width: 50,
//                                 //    html: '<img src="resources/icons/shiningIcon.png" width="40" height="40" alt="Company Name">',
//                                 //    ui: 'plain',
//                                 //    handler: function () {
//                                 //        // FloatPanel_AyohaReward_TopTenRankingShow();
//                                 //        FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                 //    }
//                                 //},
//                                {
//                                    xtype: 'spacer'
//                                },
//                                  {
//                                      xtype: 'button',
//                                      id: 'btnMyDashboard_AyohaRewardRankingEnterContest3',
//                                      hidden: true,
//                                      //  badgeText: '1',
//                                      margin: '-585 -20 0 0',
//                                      height: 60,
//                                      width: 60,
//                                      //   html: '<img src="resources/icons/shiningIcon.png" width="50" height="50" alt="Company Name">',
//                                      ui: 'plain',
//                                      handler: function () {
//                                          // FloatPanel_AyohaReward_TopTenRankingShow();
//                                          FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                      }
//                                  },
//                                 //{
//                                 //    xtype: 'button',
//                                 //    id: 'btnMyDashboard_AyohaRewardRankingContest',
//                                 //    //  badgeText: '1',
//                                 //    //zIndex:-50,
//                                 //    margin: '-500 -20 0 0',
//                                 //    height: 160,
//                                 //    width: 160,
//                                 //    html: '<img src="resources/icons/enterContest-removebg-preview.png" width="150" height="150" alt="Company Name">',
//                                 //    ui: 'plain',
//                                 //    handler: function () {
//                                 //        // FloatPanel_AyohaReward_TopTenRankingShow();
//                                 //        FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                 //    }
//                                 //},

//                                 {
//                                     xtype: 'container',
//                                     name: 'btnMyDashboard_AyohaRewardRankingContest',
//                                     //  badgeText: '1',
//                                     //zIndex:-50,
//                                     margin: '-750 -20 0 0',
//                                     height: 160,
//                                     width: 160,
//                                     style: 'background: transparent;',
//                                     layout: {
//                                         type: 'vbox',
//                                         pack: 'center',
//                                         align: 'center',
//                                     },
//                                     items: [

//                                         {
//                                             //hidden: true,
//                                             id: 'imgMyDashboard_AyohaRewardRankingContest',
//                                             html: '<img src="resources/icons/enterContest-removebg-preview.png" width="160" height="160" alt="Company Name" class="blink_me">',
//                                         },

//                                     {
//                                         hidden: true,
//                                         id: 'imgMyDashboard_AyohaRewardRankingContestShining',
//                                         //html: '<img src="resources/icons/shiningIcon.png" width="60" height="60" alt="Company Name">',
//                                         html: '<img src="resources/icons/contestLogo01.png" width="100" height="100" alt="Company Name">',
//                                     },



//                                     ]
//                                     //  html: '<img src="resources/icons/enterContest-removebg-preview.png" width="150" height="150" alt="Company Name">',
//                                     //ui: 'plain',
//                                     //handler: function () {
//                                     //    // FloatPanel_AyohaReward_TopTenRankingShow();
//                                     //    FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                     //}
//                                 },
//                           ]
//                       },

//                       {

//                           xtype: 'container',
//                           width: '100%',
//                           height: 10,
//                           margin: '0 0 0 0',
//                           id:'containerDashboard_User_AyohaRewardRankingViewMyRankingID',
//                           name: 'containerDashboard_User_AyohaRewardRankingViewMyRanking',
//                           //style: {
//                           //    // background: '#D25959',
//                           //    background: 'rgba(76, 175, 80, 0.3);',
//                           //    // border: '2px'
//                           //},
//                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
//                           style: 'background-color:transparent;',
//                           // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
//                           layout: {
//                               type: 'hbox',
//                               pack: 'center',
//                               align: 'center',
//                           },
//                           items: [
//                              {
//                                  xtype: 'button',
//                                  id: 'btnMyDashboard_AyohaRewardRankingEnterContest4',
//                                  //  badgeText: '1',
//                                  margin: '0 0 0 0',
//                                  hidden: true,
//                                  height: 35,
//                                  width: 35,
//                                  //html: '<img src="resources/icons/shiningIcon.png" width="25" height="25" alt="Company Name">',
//                                  ui: 'plain',
//                                  handler: function () {
//                                      // FloatPanel_AyohaReward_TopTenRankingShow();
//                                      FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                  }
//                              },

//                               {

//                                   xtype: 'container',
//                                   hidden: true,
//                                   //width: 160,
//                                   height: 10,
//                                   width: '100%',
//                                   margin: '0 0 0 0',
//                                   id: 'containerDashboard_User_AyohaRewardRankingViewMyRankingBtnID',
//                                   name: 'containerDashboard_User_AyohaRewardRankingViewMyRankingBtn',
//                                   //style: {
//                                   //    // background: '#D25959',
//                                   //    background: 'rgba(76, 175, 80, 0.3);',
//                                   //    // border: '2px'
//                                   //},
//                                   // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
//                                   style: 'background-color:transparent;',
//                                   // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 20px 20px;',
//                                   layout: {
//                                       type: 'vbox',
//                                       pack: 'start',
//                                       align: 'center',
//                                   },
//                                   items: [
//                                       //{
//                                       //    margin:'0 0 0 1',
//                                       //     html: '<font size=2 color=grey>View My Ranking</font>',
//                                       //},
//                                       // {
//                                       //     margin: '8 0 0 0',
//                                       //     html: '<img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 5px;">',
//                                       // }



//                                       //{
//                                       //    margin: '0 0 0 0',
//                                       //    height: 40,
//                                       //    width:40,
//                                       //    html: '<img src="resources/icons/contestrule04.png"  style="width: 40px; height: 40px;   margin:0px 0px 0px 0px;">',
//                                       //},
//                                       {
//                                           margin: '-10 0 0 38',
//                                           id: 'htmlDashboard_User_AyohaRewardRankingViewMyRankingText',
//                                           html: '<div style="background: transparent;width:90%;font-size: 11px;font-weight:normal;color:black;text-align:center;" >*<i>Dear contestant, please maintain your rank until the end of contest for entitlement to redeem the prize.</i></div>',
//                                       },
//                                         {
//                                             margin: '5 0 0 0',
//                                             id: 'htmlDashboard_User_AyohaRewardRankingViewMyRankingIcon',
//                                             html: '<div style="background: transparent;width:100%;font-size: 11px;font-weight:normal;color:black;text-align:center;" ><img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:0px 0px 0px 0px;"></div>',
//                                         },
//                                         {
//                                             margin: '-5 0 0 0',
//                                             id: 'htmlDashboard_User_AyohaRewardRankingViewMyRankingViewRanking',
//                                             html: '<div style="background: transparent;width:100%;font-size: 11px;font-weight:normal;color:black;text-align:center;" ><u>View Ranking</u></div>',
//                                         },

//                                   ]
//                               },





//                               {
//                                   xtype: 'container',

//                                   width: '100%',
//                                   height: 40,
//                                   margin: '0 0 0 0',
//                                   style: 'background-color:transparent;',
//                                   id: 'containerDashboard_User_AyohaRewardRankingEnterContestBtnID',
//                                   name: 'containerDashboard_User_AyohaRewardRankingEnterContestBtn',

//                                   layout: {
//                                       type: 'vbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   items: [



//                                     {

//                                         // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'
//                                        // html: '<div class="buttonRedeemDashboard" >Enter Contest</div>',
//                                         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Enter Contest</button></div>',
//                                         width: '100%',
//                                         height: 40,
//                                         margin: '15 0 0 30',
//                                         // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'

//                                            },



// // {
// // xtype: 'spacer',
// // width: '20%',
// // height: 40,
// // },

// //                                       {
// //                                         xtype: 'container',
// //                                         width: '60%',
// //                                         height: 40,
// //                                         layout: {
// //                                             type: 'vbox',
// //                                             pack: 'center',
// //                                             align: 'center',
// //                                         },
// //                                         items: [
                                          
// //                                         ]






// //                                       },
// //                                       {
// //                                         xtype: 'spacer',
// //                                         width: '20%',
// //                                         height: 40,
// //                                         },
//                                         // {

//                                         //   //  html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'
//                                         //     // html: '<img src="resources/icons/contest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'


//                                         // },



//                                   ]

//                               },


//                                    {
//                                        xtype: 'spacer'
//                                    },
//                                     {
//                                         xtype: 'button',
//                                         id: 'btnMyDashboard_AyohaRewardRankingEnterContest5',
//                                         //  badgeText: '1',
//                                         margin: '0 0 0 0',
//                                         height: 25,
//                                         width: 25,
//                                         //  html: '<img src="resources/icons/shiningIcon.png" width="15" height="15" alt="Company Name">',
//                                         ui: 'plain',
//                                         handler: function () {
//                                             // FloatPanel_AyohaReward_TopTenRankingShow();
//                                             // FloatPanel_AyohaReward_ContestAdvertisementShow();
//                                         }
//                                     },
//                           ]

//                       },



                    




                      


//                       ///////////////////////////////////////////////// End ayoha reward contest ///////////////







// ////////////////////////////////////////////AyohaTAPS Contest


// {
//     xtype: 'container',
//     width: '100%',
//     margin: '120 0 0 0',
//     id: 'Dashboard_containerAyohaRewardContest01',
//     name: 'Dashboard_namecontainerAyohaRewardContest01',
//     height: 270,
//     layout: {
//         type: 'vbox',
//         pack: 'start',
//         align: 'center',
//     },

//     items: [
//         {
//             xtype: 'container',
//             width: '100%',
//             /// hidden:true,
//             margin: '0 0 0 0',
//             height: 10,

//             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//             style: 'background-color:transparent',
//             layout: {
//                 type: 'hbox',
//                 pack: 'left',
//                 align: 'left',
//             },
//             items: [
//                  {
//                      margin: '0 0 0 18',
//                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                      html: '<div style="color:black;text-align: center;font-size:14px;width:100%;">Ayoha TAP and Win</div>'
//                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                  },
//             ]
//         },
//          {
//              xtype: 'container',
//              width: '92%',
//              /// hidden:true,
//              margin: '15 0 0 0',
//              height: 200,

//              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//              style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
//              layout: {
//                  type: 'hbox',
//                  pack: 'center',
//                  align: 'center',
//              },
//              items: [
//                   {
//                       height: 198,
//                       width: '99%',
//                       // margin: '0 0 0 14',
//                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                       id: 'AyohaRewardContest1',
//                       html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/ayohaTapContest.png"/>'
//                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                   },
//              ]
//          },
//          {
//              xtype: 'container',

//              width: '100%',
//              height: 40,
//              margin: '20 0 0 0',
//              style: 'background-color:transparent;',
//              id: 'containerDashboard_User_AyohaRewardContest01BtnID',
//              name: 'containerDashboard_User_AyohaRewardContest01Btn',

//              layout: {
//                  type: 'hbox',
//                  pack: 'center',
//                  align: 'center',
//              },
//              items: [


//                  {
//                      id: 'htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt',
//                     // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'
//                      html: '<div class="buttonRedeemDashboard" >Enter Contest</div>'
//                      // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



//                  },
//                    //{

//                    //    html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'
//                    //    // html: '<img src="resources/icons/contest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'


//                    //},



//              ]

//          },
//     ]
// },



//                  //////////////////Ayoha Voucher////
//                  {
//                      xtype: 'container',
//                      width: '100%',
//                      id:'containerDashboard_AyohaVoucher',
//                      /// hidden:true,
//                      margin: '120 0 0 0',
//                      style: {
//                          // background: '#D25959',
//                          background: 'transparent',
//                          // border: '2px'
//                      },
//                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                      layout: {
//                          type: 'hbox',
//                          pack: 'center',
//                          align: 'center',
//                      },
//                      items: [
//                           {
//                               margin: '0 0 0 14',
//                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                               id: 'htmlDashboard_AyohaVaucherTxt',
//                               html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Voucher</b></div>'
//                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                           },
//                            {
//                                xtype: 'spacer'
//                            },
//          {

//              margin: '0 14 0 0',
//              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//              html: '<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
//              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

//          }

//                            //{
//                            //    margin: '-4 0 0 14',
//                            //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                            //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1.-Welcome/Opening Account Voucer</div>'
//                            //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                            //},
//                      ]
//                  },



//                   {
//                       xtype: 'container',
//                       width: '98%',
//                       id: 'containerDashboard_AyohaVoucherListID',
//                       /// hidden:true,
//                       margin: '-5 0 0 0',
//                       height: 222,
//                       style: 'background-color: white;',
//                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
//                       layout: {
//                           type: 'vbox',
//                           pack: 'center',
//                           align: 'center',
//                       },
//                       items: [
//                            {

//                                id: 'Dashboard_AyohaVoucherListID',
//                                // margin: '-4 0 0 14',
//                                // margin: '-5 0 0 0',
//                                // store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore,
//                                // grouped: true,
//                                xtype: 'dataview',
//                                // xtype: 'list',
//                                height: 200,
//                                //scrollable: true,
//                                // scrollable: 'horizontal',
//                                // indicators: false,
//                                //inline: true,
//                                inline: {
//                                    wrap: false
//                                },
//                                scrollable: {
//                                    direction: 'horizontal',
//                                    indicators: false,
//                                },
//                                width: '100%',
//                                cls: 'dataview-item',
//                                //itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>',
//                                itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:100%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
//                                emptyText: '<div style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="resources/icons/NotAvailableVoucher.png" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:9px;word-wrap: break-word;font-weight:normal;width:100%">*Vouchers will be given by ayoha reward to users when users reach a certain level of spending in the ayoha merchant online store and also certain special days such as religious days, national independence day, birthdays and so on.</div></div>',
//                            },
//                            //{
//                            //    height: 198,
//                            //    width: '100%',
//                            //    // margin: '0 0 0 14',
//                            //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                            //    html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/AyohaVoucher.png"/>'
//                            //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                            //},
//                       ]
//                   },


//                  //////



// /////////hot Seat Promotion



// // {
// //     xtype: 'panel',
// //     height: 35
// // },

// // {
// //     xtype: 'container',
// //     width: '100%',
// //     id:'containerDashboard_HotSeatPromotion',
// //     /// hidden:true,
// //     margin: '60 0 0 0',
// //     style: {
// //         // background: '#D25959',
// //         background: 'transparent',
// //         // border: '2px'
// //     },
// //     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
// //     layout: {
// //         type: 'hbox',
// //         pack: 'center',
// //         align: 'center',
// //     },
// //     items: [
// //          {
// //              margin: '0 0 0 14',
// //              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Hot Seat Promotion!</b></div>'
// //              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
// //          },
// //          {
// //              xtype: 'spacer'
// //          },
// //          {

// //              margin: '0 14 0 0',
// //              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //              html: '<div onclick="FloatPanel_FloatingAdvertisementShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
// //              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

// //          }
// //     ]
// // },
// //                 {
// //                     xtype: 'container',
// //                     width: '100%',
// //                     id:'containerDashboard_HotSeatPromotionImage',
// //                     height: 280,
// //                     margin: '0 0 0 0',
// //                    // hidden:true,
// //                     //style: {
// //                     //    // background: '#D25959',
// //                     //    background: 'rgba(76, 175, 80, 0.3);',
// //                     //    // border: '2px'
// //                     //},
// //                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //                     style: 'background-color:transparent',

// //                     layout: {
// //                         type: 'hbox',
// //                         pack: 'center',
// //                         align: 'center',
// //                     },
// //                     items: [
// //                         {
// //                             xtype: 'spacer'
// //                         },
// //                         {
// //                             xtype: 'container',
// //                             width: '95%',
// //                             height: 310,
// //                             margin: '0 0 0 0',
// //                             //style: {
// //                             //    // background: '#D25959',
// //                             //    background: 'rgba(76, 175, 80, 0.3);',
// //                             //    // border: '2px'
// //                             //},
// //                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// //                             // style: 'background-color:rgba(255, 255, 255, 0);border-radius: 10px 10px 10px 10px;',
// //                             style: 'background-color:transparent',
// //                             layout: {
// //                                 type: 'hbox',
// //                                 pack: 'center',
// //                                 align: 'center',
// //                             },
// //                             scrollable: {
// //                                 direction: 'horizontal',
// //                                 directionLock: true,
// //                                 indicators: false
// //                             },
// //                             items: [
// //                               {
// //                                   xtype: 'panel',
// //                                   width: 7
// //                               },


// //                                        {
// //                                            xtype: 'container',
// //                                            height: 300,
// //                                            width: 230,
// //                                            margin: '0 0 0 0',
// //                                            style: 'background-color:transparent;',
// //                                            layout: {
// //                                                type: 'vbox',
// //                                                pack: 'center',
// //                                                align: 'center',
// //                                            },
// //                                            items: [


// //                                                {
// //                                                    xtype: 'container',
// //                                                    width: '100%',
// //                                                    height: 30,
// //                                                    docked: 'bottom',
// //                                                    hidden: true,
// //                                                    margin: '-2 0 0 0',
// //                                                    style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                                    layout: {
// //                                                        type: 'vbox',
// //                                                        pack: 'center',
// //                                                        align: 'center',
// //                                                    },
// //                                                    items: [


// //                                                            {
// //                                                                xtype: 'container',
// //                                                                id: 'DashboardHotSeatAdvertisementButton_bottom0',
// //                                                                //hidden:true,
// //                                                                width: '100%',
// //                                                                style: "background-color: transparent",
// //                                                                //style: "background-color: #F35B57;",
// //                                                                margin: '0 0 0 0',
// //                                                                layout: {
// //                                                                    type: 'hbox',
// //                                                                    pack: 'center',
// //                                                                    align: 'center'

// //                                                                },


// //                                                                items: [

// //                                                                    {
// //                                                                        xtype: 'button',
// //                                                                        margin: '0 0 0 0',
// //                                                                        ui: 'plain',
// //                                                                        width: '100%',
// //                                                                        id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt0',
// //                                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                        html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                        handler: function () {


// //                                                                        }


// //                                                                    }

// //                                                                ]

// //                                                            },




// //                                                    ]
// //                                                },



// //                                                {
// //                                                    xtype: 'button',
// //                                                    id: 'btnDashboard_HotSeatAdvertisement_PicProfile0',
// //                                                    margin: '0 0 0 0',
// //                                                    //docked:'top',
// //                                                    height: 60,
// //                                                    width: 60,
// //                                                    // iconCls: 'list',
// //                                                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                                    html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                                    ui: 'plain',
// //                                                    handler: function () {


// //                                                    }
// //                                                },


// //                                                  {

// //                                                      height: 260,
// //                                                      width: 230,
// //                                                      id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat0',
// //                                                      margin: '-30 0 0 0',
// //                                                      html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                                  },
// //                                                      {
// //                                                          xtype: 'container',
// //                                                          // width: '91.1%',
// //                                                          width: 228,
// //                                                          height: 60,
// //                                                          hidden: true,
// //                                                          margin: '14 0 0 16',

// //                                                          layout: {
// //                                                              type: 'vbox',
// //                                                              pack: 'center',
// //                                                              align: 'center',
// //                                                          },
// //                                                          id: 'containerDashboard_HotSeatAdvertisement_ProfileText0',
// //                                                          // hidden:true,

// //                                                          style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                          items: [

// //                                                          ]
// //                                                      },

// //                                                {
// //                                                    xtype: 'container',
// //                                                    id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile0',
// //                                                    margin: '-40 0 0 0',
// //                                                    height: 40,
// //                                                    zIndex: 200,
// //                                                    //width: 228,
// //                                                    width: '100%',
// //                                                    style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                                    // iconCls: 'list',
// //                                                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                                    //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                                    // 
// //                                                    layout: {
// //                                                        type: 'vbox',
// //                                                        pack: 'center',
// //                                                        align: 'center',
// //                                                    },
// //                                                    items: [
// //                                                        {
// //                                                            id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName0',
// //                                                            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                        },
// //                                                         {
// //                                                             xtype: 'container',
// //                                                             style: 'background-color:white;',
// //                                                             height: 2,
// //                                                             width: '80%',
// //                                                             // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                         },
// //                                                          {
// //                                                              id: 'htmlDasboard_HotSeatAdvertisement_Title0',
// //                                                              html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                          },
// //                                                    ]

// //                                                },
// //                                            ]
// //                                        },



// //                                 {
// //                                     xtype: 'panel',
// //                                     width: 15
// //                                 },



// //                                   {
// //                                       xtype: 'container',
// //                                       height: 300,
// //                                       width: 230,
// //                                       margin: '0 0 0 0',
// //                                       style: 'background-color:transparent;',
// //                                       layout: {
// //                                           type: 'vbox',
// //                                           pack: 'center',
// //                                           align: 'center',
// //                                       },
// //                                       items: [


// //                                           {
// //                                               xtype: 'container',
// //                                               width: '100%',
// //                                               height: 30,
// //                                               docked: 'bottom',
// //                                               hidden: true,
// //                                               margin: '-2 0 0 0',
// //                                               style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [


// //                                                       {
// //                                                           xtype: 'container',
// //                                                           id: 'DashboardHotSeatAdvertisementButton_bottom1',
// //                                                           //hidden:true,
// //                                                           width: '100%',
// //                                                           style: "background-color: transparent",
// //                                                           //style: "background-color: #F35B57;",
// //                                                           margin: '0 0 0 0',
// //                                                           layout: {
// //                                                               type: 'hbox',
// //                                                               pack: 'center',
// //                                                               align: 'center'

// //                                                           },


// //                                                           items: [

// //                                                               {
// //                                                                   xtype: 'button',
// //                                                                   margin: '0 0 0 0',
// //                                                                   ui: 'plain',
// //                                                                   width: '100%',
// //                                                                   id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt1',
// //                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                   handler: function () {


// //                                                                   }


// //                                                               }

// //                                                           ]

// //                                                       },




// //                                               ]
// //                                           },



// //                                           {
// //                                               xtype: 'button',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_PicProfile1',
// //                                               margin: '0 0 0 0',
// //                                               //docked:'top',
// //                                               height: 60,
// //                                               width: 60,
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                               ui: 'plain',
// //                                               handler: function () {


// //                                               }
// //                                           },


// //                                             {

// //                                                 height: 260,
// //                                                 width: 230,
// //                                                 id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat1',
// //                                                 margin: '-30 0 0 0',
// //                                                 html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                             },
// //                                                 {
// //                                                     xtype: 'container',
// //                                                     // width: '91.1%',
// //                                                     width: 228,
// //                                                     height: 60,
// //                                                     hidden: true,
// //                                                     margin: '14 0 0 16',

// //                                                     layout: {
// //                                                         type: 'vbox',
// //                                                         pack: 'center',
// //                                                         align: 'center',
// //                                                     },
// //                                                     id: 'containerDashboard_HotSeatAdvertisement_ProfileText1',
// //                                                     // hidden:true,

// //                                                     style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                     items: [

// //                                                     ]
// //                                                 },

// //                                           {
// //                                               xtype: 'container',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile1',
// //                                               margin: '-40 0 0 0',
// //                                               height: 40,
// //                                               zIndex: 200,
// //                                               //width: 228,
// //                                               width: '100%',
// //                                               style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                               // 
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName1',
// //                                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                   },
// //                                                    {
// //                                                        xtype: 'container',
// //                                                        style: 'background-color:white;',
// //                                                        height: 2,
// //                                                        width: '80%',
// //                                                        // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                    },
// //                                                     {
// //                                                         id: 'htmlDasboard_HotSeatAdvertisement_Title1',
// //                                                         html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                     },
// //                                               ]

// //                                           },
// //                                       ]
// //                                   },


// //                                   ////////////////hotseat 2

// //                                 {
// //                                     xtype: 'panel',
// //                                     width: 15
// //                                 },

// //                                   {
// //                                       xtype: 'container',
// //                                       height: 300,
// //                                       width: 230,
// //                                       margin: '0 0 0 0',
// //                                       style: 'background-color:transparent;',
// //                                       layout: {
// //                                           type: 'vbox',
// //                                           pack: 'center',
// //                                           align: 'center',
// //                                       },
// //                                       items: [


// //                                           {
// //                                               xtype: 'container',
// //                                               width: '100%',
// //                                               height: 30,
// //                                               docked: 'bottom',
// //                                               hidden: true,
// //                                               margin: '-2 0 0 0',
// //                                               style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [


// //                                                       {
// //                                                           xtype: 'container',
// //                                                           id: 'DashboardHotSeatAdvertisementButton_bottom2',
// //                                                           //hidden:true,
// //                                                           width: '100%',
// //                                                           style: "background-color: transparent",
// //                                                           //style: "background-color: #F35B57;",
// //                                                           margin: '0 0 0 0',
// //                                                           layout: {
// //                                                               type: 'hbox',
// //                                                               pack: 'center',
// //                                                               align: 'center'

// //                                                           },


// //                                                           items: [

// //                                                               {
// //                                                                   xtype: 'button',
// //                                                                   margin: '0 0 0 0',
// //                                                                   ui: 'plain',
// //                                                                   width: '100%',
// //                                                                   id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt2',
// //                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                   handler: function () {


// //                                                                   }


// //                                                               }

// //                                                           ]

// //                                                       },




// //                                               ]
// //                                           },



// //                                           {
// //                                               xtype: 'button',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_PicProfile2',
// //                                               margin: '0 0 0 0',
// //                                               //docked:'top',
// //                                               height: 60,
// //                                               width: 60,
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                               ui: 'plain',
// //                                               handler: function () {


// //                                               }
// //                                           },


// //                                             {

// //                                                 height: 260,
// //                                                 width: 230,
// //                                                 id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat2',
// //                                                 margin: '-30 0 0 0',
// //                                                 html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                             },
// //                                                 {
// //                                                     xtype: 'container',
// //                                                     // width: '91.1%',
// //                                                     width: 228,
// //                                                     height: 60,
// //                                                     hidden: true,
// //                                                     margin: '14 0 0 16',

// //                                                     layout: {
// //                                                         type: 'vbox',
// //                                                         pack: 'center',
// //                                                         align: 'center',
// //                                                     },
// //                                                     id: 'containerDashboard_HotSeatAdvertisement_ProfileText2',
// //                                                     // hidden:true,

// //                                                     style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                     items: [

// //                                                     ]
// //                                                 },

// //                                           {
// //                                               xtype: 'container',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile2',
// //                                               margin: '-40 0 0 0',
// //                                               height: 40,
// //                                               zIndex: 200,
// //                                               //width: 228,
// //                                               width: '100%',
// //                                               style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                               // 
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName2',
// //                                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                   },
// //                                                    {
// //                                                        xtype: 'container',
// //                                                        style: 'background-color:white;',
// //                                                        height: 2,
// //                                                        width: '80%',
// //                                                        // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                    },
// //                                                     {
// //                                                         id: 'htmlDasboard_HotSeatAdvertisement_Title2',
// //                                                         html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                     },
// //                                               ]

// //                                           },
// //                                       ]
// //                                   },

// //                                   ///////hotseat 3


// //                                 {
// //                                     xtype: 'panel',
// //                                     width: 15
// //                                 },
// //                                   {
// //                                       xtype: 'container',
// //                                       height: 300,
// //                                       width: 230,
// //                                       margin: '0 0 0 0',
// //                                       style: 'background-color:transparent;',
// //                                       layout: {
// //                                           type: 'vbox',
// //                                           pack: 'center',
// //                                           align: 'center',
// //                                       },
// //                                       items: [


// //                                           {
// //                                               xtype: 'container',
// //                                               width: '100%',
// //                                               height: 30,
// //                                               docked: 'bottom',
// //                                               hidden: true,
// //                                               margin: '-2 0 0 0',
// //                                               style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [


// //                                                       {
// //                                                           xtype: 'container',
// //                                                           id: 'DashboardHotSeatAdvertisementButton_bottom3',
// //                                                           //hidden:true,
// //                                                           width: '100%',
// //                                                           style: "background-color: transparent",
// //                                                           //style: "background-color: #F35B57;",
// //                                                           margin: '0 0 0 0',
// //                                                           layout: {
// //                                                               type: 'hbox',
// //                                                               pack: 'center',
// //                                                               align: 'center'

// //                                                           },


// //                                                           items: [

// //                                                               {
// //                                                                   xtype: 'button',
// //                                                                   margin: '0 0 0 0',
// //                                                                   ui: 'plain',
// //                                                                   width: '100%',
// //                                                                   id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt3',
// //                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                   handler: function () {


// //                                                                   }


// //                                                               }

// //                                                           ]

// //                                                       },




// //                                               ]
// //                                           },



// //                                           {
// //                                               xtype: 'button',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_PicProfile3',
// //                                               margin: '0 0 0 0',
// //                                               //docked:'top',
// //                                               height: 60,
// //                                               width: 60,
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                               ui: 'plain',
// //                                               handler: function () {


// //                                               }
// //                                           },


// //                                             {

// //                                                 height: 260,
// //                                                 width: 230,
// //                                                 id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat3',
// //                                                 margin: '-30 0 0 0',
// //                                                 html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                             },
// //                                                 {
// //                                                     xtype: 'container',
// //                                                     // width: '91.1%',
// //                                                     width: 228,
// //                                                     height: 60,
// //                                                     hidden: true,
// //                                                     margin: '14 0 0 16',

// //                                                     layout: {
// //                                                         type: 'vbox',
// //                                                         pack: 'center',
// //                                                         align: 'center',
// //                                                     },
// //                                                     id: 'containerDashboard_HotSeatAdvertisement_ProfileText3',
// //                                                     // hidden:true,

// //                                                     style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                     items: [

// //                                                     ]
// //                                                 },

// //                                           {
// //                                               xtype: 'container',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile3',
// //                                               margin: '-40 0 0 0',
// //                                               height: 40,
// //                                               zIndex: 200,
// //                                               //width: 228,
// //                                               width: '100%',
// //                                               style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                               // 
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName3',
// //                                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                   },
// //                                                    {
// //                                                        xtype: 'container',
// //                                                        style: 'background-color:white;',
// //                                                        height: 2,
// //                                                        width: '80%',
// //                                                        // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                    },
// //                                                     {
// //                                                         id: 'htmlDasboard_HotSeatAdvertisement_Title3',
// //                                                         html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                     },
// //                                               ]

// //                                           },
// //                                       ]
// //                                   },








// //                                 ///////////////////hotseat 4
// //                            {
// //                                xtype: 'panel',
// //                                width: 15
// //                            },

// //                                   {
// //                                       xtype: 'container',
// //                                       height: 300,
// //                                       width: 230,
// //                                       margin: '0 0 0 0',
// //                                       style: 'background-color:transparent;',
// //                                       layout: {
// //                                           type: 'vbox',
// //                                           pack: 'center',
// //                                           align: 'center',
// //                                       },
// //                                       items: [


// //                                           {
// //                                               xtype: 'container',
// //                                               width: '100%',
// //                                               height: 30,
// //                                               docked: 'bottom',
// //                                               hidden: true,
// //                                               margin: '-2 0 0 0',
// //                                               style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [


// //                                                       {
// //                                                           xtype: 'container',
// //                                                           id: 'DashboardHotSeatAdvertisementButton_bottom4',
// //                                                           //hidden:true,
// //                                                           width: '100%',
// //                                                           style: "background-color: transparent",
// //                                                           //style: "background-color: #F35B57;",
// //                                                           margin: '0 0 0 0',
// //                                                           layout: {
// //                                                               type: 'hbox',
// //                                                               pack: 'center',
// //                                                               align: 'center'

// //                                                           },


// //                                                           items: [

// //                                                               {
// //                                                                   xtype: 'button',
// //                                                                   margin: '0 0 0 0',
// //                                                                   ui: 'plain',
// //                                                                   width: '100%',
// //                                                                   id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt4',
// //                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                   handler: function () {


// //                                                                   }


// //                                                               }

// //                                                           ]

// //                                                       },




// //                                               ]
// //                                           },



// //                                           {
// //                                               xtype: 'button',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_PicProfile4',
// //                                               margin: '0 0 0 0',
// //                                               //docked:'top',
// //                                               height: 60,
// //                                               width: 60,
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                               ui: 'plain',
// //                                               handler: function () {


// //                                               }
// //                                           },


// //                                             {

// //                                                 height: 260,
// //                                                 width: 230,
// //                                                 id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat4',
// //                                                 margin: '-30 0 0 0',
// //                                                 html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                             },
// //                                                 {
// //                                                     xtype: 'container',
// //                                                     // width: '91.1%',
// //                                                     width: 228,
// //                                                     height: 60,
// //                                                     hidden: true,
// //                                                     margin: '14 0 0 16',

// //                                                     layout: {
// //                                                         type: 'vbox',
// //                                                         pack: 'center',
// //                                                         align: 'center',
// //                                                     },
// //                                                     id: 'containerDashboard_HotSeatAdvertisement_ProfileText4',
// //                                                     // hidden:true,

// //                                                     style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                     items: [

// //                                                     ]
// //                                                 },

// //                                           {
// //                                               xtype: 'container',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile4',
// //                                               margin: '-40 0 0 0',
// //                                               height: 40,
// //                                               zIndex: 200,
// //                                               //width: 228,
// //                                               width: '100%',
// //                                               style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                               // 
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName4',
// //                                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                   },
// //                                                    {
// //                                                        xtype: 'container',
// //                                                        style: 'background-color:white;',
// //                                                        height: 2,
// //                                                        width: '80%',
// //                                                        // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                    },
// //                                                     {
// //                                                         id: 'htmlDasboard_HotSeatAdvertisement_Title4',
// //                                                         html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                     },
// //                                               ]

// //                                           },
// //                                       ]
// //                                   },



// //                                 /////////////////hotseat 5


// //                                   {
// //                                       xtype: 'panel',
// //                                       width: 15
// //                                   },

// //                                   {
// //                                       xtype: 'container',
// //                                       height: 300,
// //                                       width: 230,
// //                                       margin: '0 0 0 0',
// //                                       style: 'background-color:transparent;',
// //                                       layout: {
// //                                           type: 'vbox',
// //                                           pack: 'center',
// //                                           align: 'center',
// //                                       },
// //                                       items: [


// //                                           {
// //                                               xtype: 'container',
// //                                               width: '100%',
// //                                               height: 30,
// //                                               docked: 'bottom',
// //                                               hidden: true,
// //                                               margin: '-2 0 0 0',
// //                                               style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [


// //                                                       {
// //                                                           xtype: 'container',
// //                                                           id: 'DashboardHotSeatAdvertisementButton_bottom5',
// //                                                           //hidden:true,
// //                                                           width: '100%',
// //                                                           style: "background-color: transparent",
// //                                                           //style: "background-color: #F35B57;",
// //                                                           margin: '0 0 0 0',
// //                                                           layout: {
// //                                                               type: 'hbox',
// //                                                               pack: 'center',
// //                                                               align: 'center'

// //                                                           },


// //                                                           items: [

// //                                                               {
// //                                                                   xtype: 'button',
// //                                                                   margin: '0 0 0 0',
// //                                                                   ui: 'plain',
// //                                                                   width: '100%',
// //                                                                   id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt5',
// //                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                   handler: function () {


// //                                                                   }


// //                                                               }

// //                                                           ]

// //                                                       },




// //                                               ]
// //                                           },



// //                                           {
// //                                               xtype: 'button',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_PicProfile5',
// //                                               margin: '0 0 0 0',
// //                                               //docked:'top',
// //                                               height: 60,
// //                                               width: 60,
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                               ui: 'plain',
// //                                               handler: function () {


// //                                               }
// //                                           },


// //                                             {

// //                                                 height: 260,
// //                                                 width: 230,
// //                                                 id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat5',
// //                                                 margin: '-30 0 0 0',
// //                                                 html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                             },
// //                                                 {
// //                                                     xtype: 'container',
// //                                                     // width: '91.1%',
// //                                                     width: 228,
// //                                                     height: 60,
// //                                                     hidden: true,
// //                                                     margin: '14 0 0 16',

// //                                                     layout: {
// //                                                         type: 'vbox',
// //                                                         pack: 'center',
// //                                                         align: 'center',
// //                                                     },
// //                                                     id: 'containerDashboard_HotSeatAdvertisement_ProfileText5',
// //                                                     // hidden:true,

// //                                                     style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                     items: [

// //                                                     ]
// //                                                 },

// //                                           {
// //                                               xtype: 'container',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile5',
// //                                               margin: '-40 0 0 0',
// //                                               height: 40,
// //                                               zIndex: 200,
// //                                               //width: 228,
// //                                               width: '100%',
// //                                               style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                               // 
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName5',
// //                                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                   },
// //                                                    {
// //                                                        xtype: 'container',
// //                                                        style: 'background-color:white;',
// //                                                        height: 2,
// //                                                        width: '80%',
// //                                                        // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                    },
// //                                                     {
// //                                                         id: 'htmlDasboard_HotSeatAdvertisement_Title5',
// //                                                         html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                     },
// //                                               ]

// //                                           },
// //                                       ]
// //                                   },

                        
// //                                 /////////////////////////hotseat 6


// //                                   {
// //                                       xtype: 'panel',
// //                                       width: 15
// //                                   },

// //                                   {
// //                                       xtype: 'container',
// //                                       height: 300,
// //                                       width: 230,
// //                                       margin: '0 0 0 0',
// //                                       style: 'background-color:transparent;',
// //                                       layout: {
// //                                           type: 'vbox',
// //                                           pack: 'center',
// //                                           align: 'center',
// //                                       },
// //                                       items: [


// //                                           {
// //                                               xtype: 'container',
// //                                               width: '100%',
// //                                               height: 30,
// //                                               docked: 'bottom',
// //                                               hidden: true,
// //                                               margin: '-2 0 0 0',
// //                                               style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [


// //                                                       {
// //                                                           xtype: 'container',
// //                                                           id: 'DashboardHotSeatAdvertisementButton_bottom6',
// //                                                           //hidden:true,
// //                                                           width: '100%',
// //                                                           style: "background-color: transparent",
// //                                                           //style: "background-color: #F35B57;",
// //                                                           margin: '0 0 0 0',
// //                                                           layout: {
// //                                                               type: 'hbox',
// //                                                               pack: 'center',
// //                                                               align: 'center'

// //                                                           },


// //                                                           items: [

// //                                                               {
// //                                                                   xtype: 'button',
// //                                                                   margin: '0 0 0 0',
// //                                                                   ui: 'plain',
// //                                                                   width: '100%',
// //                                                                   id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt6',
// //                                                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                   handler: function () {


// //                                                                   }


// //                                                               }

// //                                                           ]

// //                                                       },




// //                                               ]
// //                                           },



// //                                           {
// //                                               xtype: 'button',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_PicProfile6',
// //                                               margin: '0 0 0 0',
// //                                               //docked:'top',
// //                                               height: 60,
// //                                               width: 60,
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                               ui: 'plain',
// //                                               handler: function () {


// //                                               }
// //                                           },


// //                                             {

// //                                                 height: 260,
// //                                                 width: 230,
// //                                                 id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat6',
// //                                                 margin: '-30 0 0 0',
// //                                                 html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                             },
// //                                                 {
// //                                                     xtype: 'container',
// //                                                     // width: '91.1%',
// //                                                     width: 228,
// //                                                     height: 60,
// //                                                     hidden: true,
// //                                                     margin: '14 0 0 16',

// //                                                     layout: {
// //                                                         type: 'vbox',
// //                                                         pack: 'center',
// //                                                         align: 'center',
// //                                                     },
// //                                                     id: 'containerDashboard_HotSeatAdvertisement_ProfileText6',
// //                                                     // hidden:true,

// //                                                     style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                     items: [

// //                                                     ]
// //                                                 },

// //                                           {
// //                                               xtype: 'container',
// //                                               id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile6',
// //                                               margin: '-40 0 0 0',
// //                                               height: 40,
// //                                               zIndex: 200,
// //                                               //width: 228,
// //                                               width: '100%',
// //                                               style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                               // iconCls: 'list',
// //                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                               // 
// //                                               layout: {
// //                                                   type: 'vbox',
// //                                                   pack: 'center',
// //                                                   align: 'center',
// //                                               },
// //                                               items: [
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName6',
// //                                                       html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                   },
// //                                                    {
// //                                                        xtype: 'container',
// //                                                        style: 'background-color:white;',
// //                                                        height: 2,
// //                                                        width: '80%',
// //                                                        // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                    },
// //                                                     {
// //                                                         id: 'htmlDasboard_HotSeatAdvertisement_Title6',
// //                                                         html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                     },
// //                                               ]

// //                                           },
// //                                       ]
// //                                   },





// //                                 ////////////// hotseat 7



// //                                         {
// //                                             xtype: 'panel',
// //                                             width: 15
// //                                         },

// //                                 {
// //                                     xtype: 'container',
// //                                     height: 300,
// //                                     width: 230,
// //                                     margin: '0 0 0 0',
// //                                     style: 'background-color:transparent;',
// //                                     layout: {
// //                                         type: 'vbox',
// //                                         pack: 'center',
// //                                         align: 'center',
// //                                     },
// //                                     items: [


// //                                         {
// //                                             xtype: 'container',
// //                                             width: '100%',
// //                                             height: 30,
// //                                             docked: 'bottom',
// //                                             hidden: true,
// //                                             margin: '-2 0 0 0',
// //                                             style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
// //                                             layout: {
// //                                                 type: 'vbox',
// //                                                 pack: 'center',
// //                                                 align: 'center',
// //                                             },
// //                                             items: [


// //                                                     {
// //                                                         xtype: 'container',
// //                                                         id: 'DashboardHotSeatAdvertisementButton_bottom7',
// //                                                         //hidden:true,
// //                                                         width: '100%',
// //                                                         style: "background-color: transparent",
// //                                                         //style: "background-color: #F35B57;",
// //                                                         margin: '0 0 0 0',
// //                                                         layout: {
// //                                                             type: 'hbox',
// //                                                             pack: 'center',
// //                                                             align: 'center'

// //                                                         },


// //                                                         items: [

// //                                                             {
// //                                                                 xtype: 'button',
// //                                                                 margin: '0 0 0 0',
// //                                                                 ui: 'plain',
// //                                                                 width: '100%',
// //                                                                 id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt7',
// //                                                                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
// //                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Available Advertisement Space! >></b></div>',
// //                                                                 handler: function () {


// //                                                                 }


// //                                                             }

                                                                 
// //                                                         ]

// //                                                     },




// //                                             ]
// //                                         },



// //                                         {
// //                                             xtype: 'button',
// //                                             id: 'btnDashboard_HotSeatAdvertisement_PicProfile7',
// //                                             margin: '0 0 0 0',
// //                                             //docked:'top',
// //                                             height: 60,
// //                                             width: 60,
// //                                             // iconCls: 'list',
// //                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                             html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">',


// //                                             // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
// //                                             ui: 'plain',
// //                                             handler: function () {


// //                                             }
// //                                         },


// //                                           {

// //                                               height: 260,
// //                                               width: 230,
// //                                               id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat7',
// //                                               margin: '-30 0 0 0',
// //                                               html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

// //                                           },
// //                                               {
// //                                                   xtype: 'container',
// //                                                   // width: '91.1%',
// //                                                   width: 228,
// //                                                   height: 60,
// //                                                   hidden: true,
// //                                                   margin: '14 0 0 16',

// //                                                   layout: {
// //                                                       type: 'vbox',
// //                                                       pack: 'center',
// //                                                       align: 'center',
// //                                                   },
// //                                                   id: 'containerDashboard_HotSeatAdvertisement_ProfileText7',
// //                                                   // hidden:true,

// //                                                   style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
// //                                                   items: [

// //                                                   ]
// //                                               },

// //                                         {
// //                                             xtype: 'container',
// //                                             id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile7',
// //                                             margin: '-40 0 0 0',
// //                                             height: 40,
// //                                             zIndex: 200,
// //                                             //width: 228,
// //                                             width: '100%',
// //                                             style: 'background-color:rgba(0, 0, 0, 0.2);border-radius:0px 0px 10px 10px;border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;',
// //                                             // iconCls: 'list',
// //                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
// //                                             //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
// //                                             // 
// //                                             layout: {
// //                                                 type: 'vbox',
// //                                                 pack: 'center',
// //                                                 align: 'center',
// //                                             },
// //                                             items: [
// //                                                 {
// //                                                     id: 'htmlDasboard_HotSeatAdvertisement_EnterpriseName7',
// //                                                     html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">MHSya Enterprise</div>',
// //                                                 },
// //                                                  {
// //                                                      xtype: 'container',
// //                                                      style: 'background-color:white;',
// //                                                      height: 2,
// //                                                      width: '80%',
// //                                                      // html: '<div style="color:white;text-align: center;font-size:10px;width:90%;font-weight:normal;background-color:white;margin:0px 0px 0px 0px;height:5px"/>',
// //                                                  },
// //                                                   {
// //                                                       id: 'htmlDasboard_HotSeatAdvertisement_Title7',
// //                                                       html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
// //                                                   },
// //                                             ]

// //                                         },
// //                                     ]
// //                                 },
// //                                 {
// //                                     xtype: 'panel',
// //                                     width: 15
// //                                 }

// //                             ]
// //                         },










// //                         {
// //                             xtype: 'spacer'
// //                         },
// //                     ]

// //                 },

// /////////hot Seat Promotion END


              


// /////////Ayoha Community
// {
//                     xtype: 'container',
//                     width: '100%',
//                     id: 'Dashboard_AyohaCommunity_Txt',
//                     // hidden:true,
//                     margin: '100 0 0 0',
//                     style: {
//                         // background: '#D25959',
//                         background: 'transparent',
//                         // border: '2px'
//                     },
//                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                     layout: {
//                         type: 'hbox',
//                         pack: 'left',
//                         align: 'left',
//                     },
//                     items: [
//                          {
//                              margin: '0 0 0 14',
//                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Community (Comming Soon!)</b></div>'
//                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                          },
//                     ]
//                 },

//                 {
//                     xtype: 'container',
//                     margin: '60 0 0 0',
//                     style: 'background-image: url("resources/icons/Ayohacommunity01.png"); background-size: 100% 400px;background-repeat: no-repeat;',
//                     width: '100%',
//                     height: 400,
//                 },
//                  {
//                      xtype: 'container',
//                      width: '100%',
//                      height: 50,
//                      margin: '0 0 0 20',
//                      hidden: true,
//                      id: 'Dashboard_FloatingAdvertisement_Icon',
//                      //style: {
//                      //    // background: '#D25959',
//                      //    background: 'rgba(76, 175, 80, 0.3);',
//                      //    // border: '2px'
//                      //},
//                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                      style: 'background-color:transparent',

//                      layout: {
//                          type: 'hbox',
//                          pack: 'left',
//                          align: 'left',
//                      },
//                      items: [
//                          {
//                              html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
//                              name: 'nameHtmlDashboard_FloatAdvertisementIcon',
//                              height: 105,
//                              width: 100,
//                          },
//                      ]

//                  },

//                 // {
//                 //     xtype: 'panel',
//                 //     //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
//                 //     height: 200
//                 // },


// /////////Ayoha Community END


//             ]
//         },



          ]

      },

        
/////////////////////////////// END MAIN PAGE DASH BOARD







///Bottom Menu

                      {

                          xtype: 'container',
                          width: '100%',
                         // zIndex:-5,
                          // width: 40,
                          docked: 'bottom',
                          height: 55,
                          //  title: '<font size="3" color="white">Live Tracking Map</font>',
                          //hidden: true,

                          id: 'containerMyAccount_Dashboard_MenuBottom',
                          style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
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
                                         //width: '78%',
                                         width: '100%',
                                         style: "background-color: transparent",
                                         height: 55,
                                         layout: {
                                             type: 'hbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         //scrollable: {
                                         //    direction: 'horizontal',
                                         //    directionLock: true,
                                         //    indicators: false
                                         //},
                                         items: [


                                             {
                                                 xtype: 'container',

                                                 //width: 450,
                                                 width: '100%',
                                                 style: "background-color: transparent",
                                                 height: 55,
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center',
                                                 },
                                                 items: [



                                                     {
                                                         xtype: 'container',
                                                         id: 'containerMyAccount_Dashboard_MenuBottom_Logout',
                                                         hidden: true,
                                                         //width: '33%',
                                                         //height: 30,
                                                         margin: '0 0 0 0',
                                                         flex: 1,
                                                         style: "background-color: transparent",
                                                         //style: "background-color: #F35B57;",

                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [

                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btn_MyAccount_Dashboard_MenuBottom_Logout',
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 0 0',

                                                                  height: 36,
                                                                  width: 36,
                                                                  html: '<img src="resources/icons/logoutPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                                      // FloatPanel_AyohaUserRegistrationAddNewShow();
                                                                      Ext.getCmp('mainView').setActiveItem(0);
                                                                      VIAAdvertismentAutoSlideReset();

                                                                  }
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerMyAccount_Dashboard_MenuBottom_LogoutTxt',
                                                                  width: '100%',
                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [
                                                                      {
                                                                          margin: '-12 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          html: '<font size=1 color=grey>LogOut</font>'
                                                                      },
                                                                      {
                                                                          margin: '-12 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          html: '<font size=1 color=white>.</font>'
                                                                      },
                                                                  ]

                                                              },


                                                         ]
                                                     },
                                                     {
                                                         xtype: 'container',
                                                         id: 'containerMyAccount_Dashboard_MenuBottom_MyAccount',
                                                         name: 'namecontainerMyAccount_Dashboard_MenuBottom_MyAccount',
                                                         width: '19%',
                                                         margin: '0 0 0 0',
                                                         hidden: true,
                                                         // flex: 1,
                                                         style: "background-color: transparent",
                                                         //style: "background-color: #F35B57;",

                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [

                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btn_MyAccount_Dashboard_MenuBottom_MyAccount',
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 0 0',

                                                                  height: 36,
                                                                  width: 36,
                                                                  html: '<img src="resources/icons/userInfoPurple.png" width="26" height="26" alt="Company Name">',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                                      //FloatPanel_SubscriberMasterShow();

                                                                      FloatPanel_MyAccountMasterShow();

                                                                      //    FloatPanel_AyohaEnterpriseAccountShow();
                                                                  }
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerMyAccount_Dashboard_MenuBottom_MyAccountTxt',
                                                                  width: '100%',
                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'start',
                                                                      align: 'center'

                                                                  },
                                                                  items: [
                                                                       {
                                                                           margin: '-10 0 0 0',
                                                                           // id: 'htmlStampHistoryTxt',
                                                                           //html: '<font size=1 color=grey>My Membership</font>',
                                                                           html: '<div style="color:grey;text-align: center;font-size:9px;width:100%;">My</div><br><div style="color:grey;text-align: center;font-size:9px;width:100%;margin:-27px 0px 0px 0px">Account</div>',

                                                                       },
                                                                      //{
                                                                      //    margin: '-12 0 0 0',
                                                                      //    // id: 'htmlStampHistoryTxt',
                                                                      //    html: '<font size=1 color=grey>My</font>'
                                                                      //},
                                                                      //{
                                                                      //    margin: '-12 0 0 0',
                                                                      //    // id: 'htmlStampHistoryTxt',
                                                                      //    html: '<font size=1 color=grey>Account</font>'
                                                                      //},
                                                                  ]

                                                              },


                                                         ]
                                                     },
                                                     {
                                                         xtype: 'container',
                                                         style: "background-color: transparent",
                                                         width: 5,
                                                     },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_AyohaReward',
                                                            name: 'namecontainerMyAccount_Dashboard_MenuBottom_AyohaReward',
                                                            // hidden: true,
                                                            // width: '19%',
                                                            //height: 30,
                                                            margin: '0 0 0 0',
                                                            flex: 1,
                                                            style: "background-color: transparent",
                                                            //style: "background-color: #F35B57;",

                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [

                                                                 {
                                                                     //xtype: 'button',
                                                                     id: 'btn_MyAccount_Dashboard_MenuBottom_AyohaReward',
                                                                     //  badgeText: '1',
                                                                     margin: '-2 0 0 0',

                                                                     height: 30,
                                                                     width: 30,
                                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" width="30" height="30" alt="Company Name">',
                                                                     //ui: 'plain',
                                                                     //handler: function () {
                                                                     //    SingleTap_Dashboard_AyohaRewards();
                                                                     //}
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerMyAccount_Dashboard_MenuBottom_AyohaRewardTxt',
                                                                     width: '100%',
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'center',
                                                                         align: 'center'

                                                                     },
                                                                     items: [
                                                                        {
                                                                            margin: '1 0 0 0',
                                                                            // id: 'htmlStampHistoryTxt',
                                                                            //html: '<font size=1 color=grey>My Membership</font>',
                                                                            html: '<div style="color:purple;text-align: center;font-size:9px;width:100%;font-weight:bold"><u>Home</u></div>',

                                                                        },
                                                                     ]

                                                                 },


                                                            ]
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_MyStore',
                                                            name: 'namecontainerMyAccount_Dashboard_MenuBottom_MyStore',
                                                            // width: '19%',
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
                                                                     //  xtype: 'button',
                                                                     id: 'btn_MyAccount_Dashboard_MenuBottom_MyStore',
                                                                     //  badgeText: '1',
                                                                     margin: '0 0 0 0',

                                                                     height: 22,
                                                                     width: 22,
                                                                     html: '<img src="resources/icons/nearestredemptionpurple.png" width="22" height="22" alt="Company Name">',
                                                                     //ui: 'plain',
                                                                     //handler: function () {
                                                                     //  //  FloatPanel_RewardStoreShow();
                                                                     //}
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerMyAccount_Dashboard_MenuBottom_MyStoreTxt',
                                                                     width: '100%',
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'center',
                                                                         align: 'center'

                                                                     },
                                                                     items: [
                                                                          {
                                                                              margin: '0 0 0 0',
                                                                              // id: 'htmlStampHistoryTxt',
                                                                              //html: '<font size=1 color=grey>My Membership</font>',
                                                                              html: '<div style="color:grey;text-align: center;font-size:8px;width:100%;">Merchant</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-25px 0px 0px 0px">Reward</div>',

                                                                          },

                                                                     ]

                                                                 },


                                                            ]
                                                        },





                                                     {
                                                         xtype: 'container',
                                                         margin: '0 0 0 0',
                                                         //hidden: true,
                                                         style: 'background-color: transparent;',
                                                         //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                         // width: '23%',
                                                         flex: 1.5,
                                                         // margin: '70 0 0 0',
                                                         id: 'containerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter',
                                                         name: 'namecontainerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter',
                                                         layout: {

                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'
                                                         },
                                                         items: [
                                                             {
                                                                 xtype: 'container',
                                                                 // margin: '-70 0 0 -100',
                                                                 // hidden: true,
                                                                 //style: 'background-color: white;',
                                                                 style: 'border-right:2px none grey;border-left:2px none grey;border-bottom:2px none grey;border-top:2px  none grey;background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);border-radius: 70px 70px 70px 70px;',
                                                                 height: 48,
                                                                 width: 87,
                                                                 // margin: '70 0 0 0',
                                                                 id: 'containerMyAccount_Dashboard_MenuBottom_QrCodeScanInner',
                                                                 layout: {

                                                                     type: 'vbox',
                                                                     pack: 'center',
                                                                     align: 'center'
                                                                 },
                                                                 items: [
                                                                     {
                                                                         //xtype: 'button',
                                                                         //height: 110,
                                                                         //width: 110,
                                                                         margin: '5 0 0 0',
                                                                         id: 'btnMyAccount_Dashboard_MenuBottom_QrCodeScan',
                                                                         html: '<img src="resources/icons/scanQRcodeGrey.png" width="30" height="30" alt="Company Name">',
                                                                         //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                         //ui: 'plain',
                                                                         //handler: function () {


                                                                         //    //Ext.getCmp('mainView').setHidden(true);
                                                                         //    //FloatPanel_AyohaeWallet_IconHide();

                                                                         //    //  FloatPanel_QrCodeScanner_ScanCampaignShow();

                                                                         //}
                                                                     },



                                                                 ]
                                                             },
                                                         ]
                                                     },




                                                     //////////////////////////my membership card


                                                     {
                                                         xtype: 'container',
                                                         id: 'containerMyAccount_Dashboard_MenuBottom_MyMembershipCard',
                                                         name: 'namecontainerMyAccount_Dashboard_MenuBottom_MyMembershipCard',
                                                         // width: '19%',
                                                         margin: '0 0 0 0',
                                                         flex: 1,
                                                         style: "background-color: transparent",
                                                         //style: "background-color: #F35B57;",

                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [

                                                              {
                                                                  // xtype: 'button',
                                                                  id: 'btn_MyAccount_Dashboard_MenuBottom_MyMembershipCard',
                                                                  //  badgeText: '1',
                                                                  margin: '0 0 0 0',

                                                                  height: 20,
                                                                  width: 20,
                                                                  html: '<img src="resources/icons/MyMembershipCard03.png" width="20" height="20" alt="Company Name">',
                                                                  //ui: 'plain',
                                                                  //handler: function () {

                                                                  //    // FloatPanel_LoyaltyCardMemberListShow();
                                                                  //    FloatPanel_MembershipCardList_MyMembershipCardShow();
                                                                  //}
                                                              },
                                                              {
                                                                  xtype: 'container',
                                                                  id: 'containerMyAccount_Dashboard_MenuBottom_MyMembershipCardTxt',
                                                                  width: '100%',
                                                                  layout: {
                                                                      type: 'vbox',
                                                                      pack: 'center',
                                                                      align: 'center'

                                                                  },
                                                                  items: [
                                                                      {
                                                                          margin: '0 0 0 0',
                                                                          // id: 'htmlStampHistoryTxt',
                                                                          //html: '<font size=1 color=grey>My Membership</font>',
                                                                          html: '<div style="color:grey;text-align: center;font-size:8px;width:100%;">My Membership</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-25px 0px 0px 0px">Card</div>',

                                                                      },
                                                                      //{
                                                                      //    margin: '-12 0 0 0',
                                                                      //    // id: 'htmlStampHistoryTxt',
                                                                      //    // html: '<font size=1 color=grey>Card</font>'
                                                                      //    html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Card</div>',
                                                                      //},
                                                                  ]

                                                              },


                                                         ]
                                                     },




                                                     /////////////////////





                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_NotificationBottom',
                                                   name: 'namecontainerMyAccount_Dashboard_MenuBottom_NotificationBottom',
                                                   // width: '19%',
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
                                                            //xtype: 'button',
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_NotificationBottom',
                                                            // badgeText: '10',
                                                            margin: '0 0 0 0',

                                                            height: 20,
                                                            width: 20,
                                                            html: '<img src="resources/icons/NotificationPurple.png" width="20" height="20" alt="Company Name">',
                                                            //ui: 'plain',
                                                            //handler: function () {
                                                            //    // FloatLoyaltyCardStampShow();
                                                            //    //  NotificationIndividualPanelShow();
                                                            //    FloatPanel_AyohaNotificationShow();
                                                            //}
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_NotificationTxtBottom',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'center',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                 {
                                                                     margin: '0 0 0 0',
                                                                     // id: 'htmlStampHistoryTxt',
                                                                     //html: '<font size=1 color=grey>My Membership</font>',
                                                                     html: '<div style="color:grey;text-align: center;font-size:8px;width:100%;">Notification</div><br><div style="color:transparent;text-align: center;font-size:9px;width:100%;margin:-27px 0px 0px 0px">Account</div>',

                                                                 },
                                                                //{
                                                                //    margin: '-12 0 0 0',
                                                                //    // id: 'htmlStampHistoryTxt',
                                                                //    html: '<font size=1 color=grey>Notification</font>'
                                                                //},
                                                                //{
                                                                //    margin: '-12 0 0 0',
                                                                //    // id: 'htmlStampHistoryTxt',
                                                                //    html: '<font size=1 color=white>.</font>'
                                                                //},
                                                            ]

                                                        },


                                                   ]
                                               },



                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_MyPointHistory',
                                                   hidden: true,
                                                   //width: '33%',
                                                   //height: 30,
                                                   margin: '0 0 0 0',
                                                   flex: 1,
                                                   style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_MyPointHistory',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',

                                                            height: 36,
                                                            width: 36,
                                                            //  html: '.',
                                                            //html: '<img src="resources/icons/pointPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                // FloatPanel_LoyaltyCard_PointHistoryShow();
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_MyPointHistoryTxt',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=white>Point</font>'
                                                                },
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=white>History</font>'
                                                                },
                                                            ]

                                                        },


                                                   ]
                                               },

                                               {
                                                   xtype: 'container',
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_RedeemHistory',
                                                   hidden: true,
                                                   //width: '33%',
                                                   //height: 30,
                                                   margin: '0 0 0 0',
                                                   flex: 1,
                                                   style: "background-color: transparent",
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'start',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_RedeemHistory',
                                                            //  badgeText: '1',
                                                            margin: '0 0 0 0',

                                                            height: 36,
                                                            width: 36,
                                                            html: '<img src="resources/icons/redeemHistory.png" width="26" height="26" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                LoyaltyCardRedeemListShow();
                                                            }
                                                        },
                                                        {
                                                            xtype: 'container',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_RedeemHistoryTxt',
                                                            width: '100%',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>Redeem</font>'
                                                                },
                                                                {
                                                                    margin: '-12 0 0 0',
                                                                    // id: 'htmlStampHistoryTxt',
                                                                    html: '<font size=1 color=grey>History</font>'
                                                                },
                                                            ]

                                                        },


                                                   ]
                                               },










                                                   {
                                                       xtype: 'container',
                                                       id: 'containerMyAccount_Dashboard_MenuBottom_Community',
                                                       hidden: true,
                                                       //width: '33%',
                                                       //height: 30,
                                                       margin: '0 0 0 0',
                                                       flex: 1,
                                                       style: "background-color: transparent",
                                                       //style: "background-color: #F35B57;",

                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'center'

                                                       },
                                                       items: [

                                                            {
                                                                xtype: 'button',
                                                                id: 'btn_MyAccount_Dashboard_MenuBottom_Community',
                                                                //  badgeText: '1',
                                                                margin: '0 0 0 0',

                                                                height: 36,
                                                                width: 36,
                                                                html: '<img src="resources/icons/communityPurpleOne.png" width="26" height="26" alt="Company Name">',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                }
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                id: 'containerMyAccount_Dashboard_MenuBottom_CommunityTxt',
                                                                width: '100%',
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>Community</font>'
                                                                    },
                                                                    {
                                                                        margin: '-12 0 0 0',
                                                                        // id: 'htmlStampHistoryTxt',
                                                                        html: '<font size=1 color=grey>.</font>'
                                                                    },
                                                                ]

                                                            },


                                                       ]
                                                   },











                                                 ]

                                             },
















                                         ]
                                     },





                                                //{
                                                //    margin: '0 0 0 0',
                                                //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                //},

                                                {
                                                    xtype: 'container',
                                                    margin: '10 0 0 0',
                                                    hidden: true,
                                                    style: 'background-color: transparent;',
                                                    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 40px 40px 40px 40px;box-shadow:inset 1px 0px 3px 3px #EEEDED ;',
                                                    height: 110,
                                                    width: '40%',
                                                    // margin: '70 0 0 0',
                                                    id: 'containerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter_Ori',
                                                    name: 'namecontainerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter_Ori',
                                                    layout: {

                                                        type: 'vbox',
                                                        pack: 'start',
                                                        align: 'center'
                                                    },
                                                    items: [
                                                        {
                                                            xtype: 'container',
                                                            margin: '-70 0 0 -100',
                                                            // hidden: true,
                                                            //style: 'background-color: white;',
                                                            style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px  solid grey;background: white;border-radius: 70px 70px 70px 70px;box-shadow:inset 5px 5px 5px 5px #EEEDED ;',
                                                            height: 110,
                                                            width: 110,
                                                            // margin: '70 0 0 0',
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_QrCodeScanInner_Ori',
                                                            layout: {

                                                                type: 'vbox',
                                                                pack: 'center',
                                                                align: 'center'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'button',
                                                                    height: 110,
                                                                    width: 110,
                                                                    margin: '0 0 0 0',
                                                                    id: 'btnMyAccount_Dashboard_MenuBottom_QrCodeScan_Ori',
                                                                    html: '<img src="resources/icons/scanQrCodePurple.png" width="75" height="75" alt="Company Name">',
                                                                    //    html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: white;border-radius: 20px 20px 20px 20px;width:70px;height:70px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {


                                                                        //Ext.getCmp('mainView').setHidden(true);
                                                                        //FloatPanel_AyohaeWallet_IconHide();

                                                                        //  FloatPanel_QrCodeScanner_ScanCampaignShow();

                                                                    }
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
    initialize: function () {

    }
});



var TotalSend = 100;


var PNremainingval;
function setDashBoardPushNotificationsQuota() {



    var percentchartPN = 0;
    var valUsedPercentage;


    PNremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartPN = setInterval(function () {









        percentchartPN += 1;
        dataPNDashBoard.setValue(0, 1, percentchartPN);
        dataPNDashBoard.setValue(1, 1, 100 - percentchartPN);


        //// Ext.getCmp('PushNotificationspercentageTxtPushNotificationsDashboard').setHtml('<font size="4" color="#067ab5"><b>' + percentchartPN + '%</b></font><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="2" color="#067ab5"><b>' + TotalSend + '/' + 500 + '</b></font>');
        // Ext.getCmp('PushNotificationsTotalOverviewTxtPushNotificationsDashboard').setHtml('<font size="2" color="#067ab5"><b>' + TotalSend + '/' + GetCurrEnterprisePushNotificationQuota() + '</b></font>');



        //Ext.getCmp('SMSCountOverTxtSMSDashboard').setHtml('<font size="2" color="black">&nbsp;&nbsp;&nbsp;<b>SMS<br>' + chartSMSusedval + '/' + chartSMSremainingval + '</b></font>');
        //  Ext.getCmp('PushNotificationsCountOverTxtPushNotificationsDashboard').setHtml('<font size="2" color="black"><b><u>Quota:</u></b></font><br><font size="5" color="black"><b>' + 500 + '</b></font><br><font size="2" color="black"><b><u>Used:</u></b></font><br><font size="5" color="black"><b>' + TotalSend + '</b></font><br><font size="2" color="black"><b><u>Balance:</u></b><br><font size="5" color="black"><b>' + PNremainingval + '</b></font>');

        chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
        if (percentchartPN > valUsedPercentage) {
            clearInterval(handlerchartPN);
            dataPNDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', PNremainingval],
            ]);
            chartPushNotificationsDashboard = new google.visualization
       .PieChart(document.getElementById('chartPushNotificationsDashboard'));
            chartPushNotificationsDashboard.draw(dataPNDashBoard, optionPNDashBoard);
        }


    }, 30);








}




var SMSremainingval;

function setDashBoardSMSQuota() {



    var percentchartSMS = 0;
    var valUsedPercentage;


    SMSremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartSMS = setInterval(function () {


        percentchartSMS += 1;
        dataSMSDashBoard.setValue(0, 1, percentchartSMS);
        dataSMSDashBoard.setValue(1, 1, 100 - percentchartSMS);
        chartSMSDashboard.draw(dataSMSDashBoard, optionSMSDashBoard);
        if (percentchartSMS > valUsedPercentage) {
            clearInterval(handlerchartSMS);
            dataSMSDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', SMSremainingval],
            ]);
            chartSMSDashboard = new google.visualization
       .PieChart(document.getElementById('chartSMSDashboard'));
            chartSMSDashboard.draw(dataSMSDashBoard, optionSMSDashBoard);
        }


    }, 30);








}



var WhatAppremainingval;

function setDashBoardWhatAppQuota() {



    var percentchartWhatApp = 0;
    var valUsedPercentage;


    WhatAppremainingval = 500 - TotalSend;
    valUsedPercentage = (100 * TotalSend) / 500;
    var handlerchartSMS = setInterval(function () {

        percentchartWhatApp += 1;
        dataWhatAppDashBoard.setValue(0, 1, percentchartWhatApp);
        dataWhatAppDashBoard.setValue(1, 1, 100 - percentchartWhatApp);

        chartWhatAppDashboard.draw(dataWhatAppDashBoard, optionWhatAppDashBoard);
        if (percentchartWhatApp > valUsedPercentage) {
            clearInterval(handlerchartSMS);
            dataWhatAppDashBoard = google.visualization.arrayToDataTable([
              ['Content', 'Size'],
              ['Used', TotalSend],
              ['Remaining', WhatAppremainingval],
            ]);
            chartWhatAppDashboard = new google.visualization
       .PieChart(document.getElementById('chartWhatAppDashboard'));
            chartWhatAppDashboard.draw(dataWhatAppDashBoard, optionWhatAppDashBoard);
        }


    }, 30);






    // loadVIAAdvertisement();



}





//var myVar = setInterval(VIAAdvertismentAutoSlide, 2000);

//function VIAAdvertismentAutoSlide() {
//    i++;
//}



var VIAAdvertismentAutoSlideTimer;
var currDirection;
var VIAAdvertisementOnlineStoreIndex = 0;
var AdvertismentTypeTag = 'NA';
function VIAAdvertismentAutoSlide() {
    var i = 0;
    var interval = parseInt(3000);
    var crsl = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');

    var maxIndenx = crsl.getMaxItemIndex();
    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    VIAAdvertismentAutoSlideTimer = setInterval(function () {

        crsl.next();
        globalMediaFileName = ArrMediaFileName[crsl.getActiveIndex() + 1];
        //  console.log(globalMediaFileName);

        ////if (ArrCaptionTextVIAAdvertisement[crsl.getActiveIndex()] != 'NULL') {
        ////    //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
        ////    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
        ////    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
        ////    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:black;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[crsl.getActiveIndex()] + '</div>');

        ////} else {
        ////      Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
        ////    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
        ////}
        if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
            // crsl.previous();
            Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
        }
        //if (crsl.getActiveIndex() === 0) {
        //    crsl.next();
        //}

        Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + arrVIAAdvertisementeStoreIconPath[VIAAdvertisementOnlineStoreIndex] + '" width="38" height="38" alt="Company Name"></div>');
        Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + arrVIAAdvertisementeStoreName[VIAAdvertisementOnlineStoreIndex] + '</b></font></div></div>');

        VIAAdvertisementOnlineStoreIndex++;
        // console.log(VIAAdvertisementOnlineStoreIndex);
        if (VIAAdvertisementOnlineStoreIndex == VIAAdvertisementCount) {
            // console.log('stop');
            VIAAdvertisementOnlineStoreIndex = 0;
            // console.log('reset');
        }
        //  console.log(VIAAdvertisementOnlineStoreIndex);




    }, interval);
}


function VIAAdvertismentAutoSlideReset() {
    carouselDasboardVIAAdertisement.removeAll();
    clearInterval(VIAAdvertismentAutoSlideTimer);
    Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
}


var carouselDasboardVIAAdertisement;
var ArrCaptionTextVIAAdvertisement = [];
var globalDashboardVIAAdvertisement_EnterpriseAccNo;
var globalDashboardVIAAdvertisement_EnterpriseLogoPath;
var globalDashboardVIAAdvertisement_EnterpriseName;
var globalDashboardVIAAdvertisement_AdvertisementTitle;
function loadVIAAdvertisement() {
    AdvertismentTypeTag = 'VIAAdvertisement';
    globalFloatPanel_AyohaStore_ModuleTagging = 'VIAAdvertisement';

    //Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore').getProxy().setExtraParams({
    //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    //});
    //Ext.StoreMgr.get('AdvertisementloadMediaAdvertisementVIAStore').load();




    _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadMediaAdvertisementVIA');
    _DataStore_AdvertisementloadMediaAdvertisementVIAStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore').getProxy().setExtraParams({
        //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        //});
        //Ext.StoreMgr.get('AdvertisementloadMediaAdvertisementVIAStore').load();
        //var myStore = Ext.getStore('AdvertisementloadMediaAdvertisementVIAStore');

        var count = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getCount();

        CountAdvertisementMedia = count - 1;
        var modelRecorded = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        var AdvertisementCode = modelRecorded.get('AdvertisementCode');
        var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
        var EnterpriseName = modelRecorded.get('EnterpriseName');
        var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
        var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
        var EnterpriseHQAccNo = modelRecorded.get('EnterpriseHQAccNo');

        globalDashboardVIAAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
        globalDashboardVIAAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
        globalDashboardVIAAdvertisement_EnterpriseName = EnterpriseName;
        globalDashboardVIAAdvertisement_AdvertisementTitle = AdvertisementTitle;








        localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);
        localStorage.setItem('EnterpriseHQAccNo', EnterpriseHQAccNo);

        Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
        //   Ext.getCmp('htmlDasboardAdvertisementTitleTxt').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AdvertisementTitle + '</div>');


        //console.log(GetEnterpriseHQAccNo());
        //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //var modelRecord = myStore.getAt(0);

        //var Complaint = modelRecord.get('Complaint');
        // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        // var StoreBalance = modelRecord.get('TotalStock');

        carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
        ArrCaptionTextVIAAdvertisement.length = 0;
        ArrMediaFileName.length = 0;

        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(i);

            var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
            var MediaType = modelRecord.get('MediaType');
            var MediaFileName = modelRecord.get('MediaFileName');





            ArrMediaFileName.push(MediaFileName);

            Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
            //  xtype: 'pinchzoomimage',
            if (MediaType == "Image") {
                carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });

            }

            if (AdvertismentMediaNote) {
                ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
            } else {
                ArrCaptionTextVIAAdvertisement.push('NULL');
            }


            // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        }




        //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


        var modelRecords = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        // localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //  localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        // localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));
        ////globalVIAEnterpriseFacebookUrl=modelRecords.get('EnterpriseFacebook');
        ////globalVIAEnterpriseInstagramUrl = modelRecords.get('EnterpriseInstagram');
        ////globalVIAPICContactNo = modelRecords.get('PICContactNo');
        ////globalEnterpriseCoordinate = modelRecords.get('EnterpriseCoordinate');
        Ext.Viewport.setMasked(false);
        VIAAdvertismentAutoSlide();
        loadAdvertisementloadHotSeatStore();
        Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);

    });
    task.delay(1000);

}








var arrVIAAdvertisementeStoreName = [];
var arrVIAAdvertisementOnlineStoreUrl = [];
var arrVIAAdvertisementeStoreIconPath = [];
var VIAAdvertisementCount = 0;

function Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo) {

    arrVIAAdvertisementeStoreName.length = 0;
    arrVIAAdvertisementOnlineStoreUrl.length = 0;
    arrVIAAdvertisementeStoreIconPath.length = 0;



    _DataStore_EnterprisesContactUsLinkStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesContactUsLinkStore.getProxy().setUrl(GetAPIurl() + 'Enterprises/EnterprisesContactUsLink');
    _DataStore_EnterprisesContactUsLinkStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Store = _DataStore_EnterprisesContactUsLinkStore.getAt(0);
        VIAAdvertisementCount = _DataStore_EnterprisesContactUsLinkStore.getCount();
        globalVIAEnterpriseFacebookUrl = Store.get('EnterpriseFacebook');
        globalVIAEnterpriseInstagramUrl = Store.get('EnterpriseInstagram');
        globalVIAPICContactNo = Store.get('PICContactNo');
        globalEnterpriseCoordinate = Store.get('EnterpriseCoordinate');
        globalVIAEnterpriseWebsite = Store.get('EnterpriseWebsite');

        globalVIAMerchantLinkType = Store.get('MerchantLinkType');

        console.log(globalEnterpriseCoordinate);

        console.log(globalVIAEnterpriseInstagramUrl);

        if (globalEnterpriseCoordinate != "NA") {
            Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(true);
        }
        if (globalVIAEnterpriseFacebookUrl != "NA") {
            Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(true);
        }
        if (globalVIAEnterpriseInstagramUrl != "NA") {
            Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(true);
        }
        if (globalVIAPICContactNo != "NA") {
            Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(false);
        } else {
            Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(true);
        }


        //   Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + Store.get('eStoreIconPath') + '" width="38" height="38" alt="Company Name"></div>');
        //   Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + Store.get('eStoreName') + '</b></font></div></div>');


        //if (globalVIAMerchantLinkType.includes("eCommerce")) {
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + Store.get('eStoreIconPath') + '" width="38" height="38" alt="Company Name"></div>');
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + Store.get('eStoreName') + '</b></font></div></div>');

        //    //  margin:'0 0 0 5' ,
        //} else {
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="resources/icons/websiteIcon.png" width="38" height="38" alt="Company Name"></div>');
        //    Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<font class="blink_me" size=2 color=black><b>Visit Our Website</b></font>');

        //}



        for (i = 0; i < _DataStore_EnterprisesContactUsLinkStore.getCount() ; i++) {
            Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(i);



            arrVIAAdvertisementeStoreName.push(Stores.get('eStoreName'));
            arrVIAAdvertisementOnlineStoreUrl.push(Stores.get('OnlineStoreUrl'));
            arrVIAAdvertisementeStoreIconPath.push(Stores.get('eStoreIconPath'));

            //if (Stores.get('eStoreName')) {
            //    Ext.getCmp('containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_' + i).setHidden(false);
            //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon' + i).setHtml('<div class="blink_me"><img src="' + Stores.get('eStoreIconPath') + '" width="32" height="32" alt="Company Name" onclick="FloatPanel_PreviewAdvertisement_OpenOnlineStore' + i + '()"></div>');
            //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName' + i).setHtml('<div class="blink_me" style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + Stores.get('eStoreName') + '</div>');

            //} else {
            //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>No Online Store</b></font>');
            //}

        }

        LoadingPanelHide();
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}






var globalVIAEnterpriseFacebookUrl;
var globalVIAEnterpriseInstagramUrl;
var globalVIAPICContactNo;
var globalVIAEnterpriseWebsite;
var globalEnterpriseCoordinate;

var ArrAdvertisementCodeHotSeat = [];
var ArrAdvertisementHotseat_CompanyLogo = [];
var ArrAdvertisementHotseat_CompanyName = [];
var ArrAdvertisementHotseat_AdvertisementTitle = [];
var ArrAdvertisementHotseat_EnterpriseAccNo = [];
function loadAdvertisementloadHotSeatStore() {
    AdvertismentTypeTag = 'HotSeatAdvertisement';
    //Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
    //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    //});
    //Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();
    _DataStore_AdvertisementloadHotSeatStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadHotSeat');

    _DataStore_AdvertisementloadHotSeatStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
               // var record = records[0]; // Access only the first record
              //  var planCode = record.get('PaymentPlanCode');
              var count = _DataStore_AdvertisementloadHotSeatStore.getCount();


              ArrAdvertisementCodeHotSeat.length = 0;
      
              ArrAdvertisementHotseat_CompanyLogo.length = 0;
              ArrAdvertisementHotseat_CompanyName.length = 0;
              ArrAdvertisementHotseat_AdvertisementTitle.length = 0;
              ArrAdvertisementHotseat_EnterpriseAccNo.length = 0;
      
              for (i = 0; i < count; i++) {
                  var modelRecord = _DataStore_AdvertisementloadHotSeatStore.getAt(i);
      
                  var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
                  var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
                  var MediaType = modelRecord.get('MediaType');
                  var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
                  var EnterpriseName = modelRecord.get('EnterpriseName');
                  var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
                  var AdvertisementCode = modelRecord.get('AdvertisementCode');
                  var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
      
                  ArrAdvertisementCodeHotSeat.push(AdvertisementCode);
                  ArrAdvertisementHotseat_CompanyLogo.push(EnterpriseLogoPath);
                  ArrAdvertisementHotseat_CompanyName.push(EnterpriseName);
                  ArrAdvertisementHotseat_AdvertisementTitle.push(AdvertisementTitle);
                  ArrAdvertisementHotseat_EnterpriseAccNo.push(EnterpriseAccNo);
                  //ArrMediaFileName.push(MediaFileName);
                  Ext.getCmp('btnDashboard_HotSeatAdvertisement_PicProfile' + i).setHtml('<img src="' + EnterpriseLogoPath + '" style="background-color:white;width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">');
                  // Ext.getCmp('btnDashboard_HotSeatAdvertisement_UserNameProfile' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);border-radius:5px 5px 5px 5px">' + EnterpriseName + '</div><br>');
                  Ext.getCmp('htmlDasboard_HotSeatAdvertisement_EnterpriseName' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">' + EnterpriseName + '</div>');
                  Ext.getCmp('htmlDasboard_HotSeatAdvertisement_Title' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">' + AdvertisementTitle + ' </div>');
      
                  Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
      
                  Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
      
      
      
                  ////  xtype: 'pinchzoomimage',
                  //if (MediaType == "Image") {
                  //    carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                  //    // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
                  //}
                  //if (MediaType == "Video") {
                  //    carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, margin: '7 0 0 0' });
      
                  //}
      
                  //if (AdvertismentMediaNote) {
                  //    ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
                  //} else {
                  //    ArrCaptionTextVIAAdvertisement.push('NULL');
                  //}
      
      
                  // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
              }
                //LoadingPanelHide();
                loadAdvertisementloadPremiumAdvertisment();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




    // _DataStore_AdvertisementloadHotSeatStore.load();
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     //Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
    //     //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
    //     //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
    //     //});
    //     //Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();



    //     // var myStore = Ext.getStore('AdvertisementloadHotSeatStore');

    //     var count = _DataStore_AdvertisementloadHotSeatStore.getCount();


    //     ArrAdvertisementCodeHotSeat.length = 0;

    //     ArrAdvertisementHotseat_CompanyLogo.length = 0;
    //     ArrAdvertisementHotseat_CompanyName.length = 0;
    //     ArrAdvertisementHotseat_AdvertisementTitle.length = 0;
    //     ArrAdvertisementHotseat_EnterpriseAccNo.length = 0;

    //     for (i = 0; i < count; i++) {
    //         var modelRecord = _DataStore_AdvertisementloadHotSeatStore.getAt(i);

    //         var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
    //         var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
    //         var MediaType = modelRecord.get('MediaType');
    //         var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
    //         var EnterpriseName = modelRecord.get('EnterpriseName');
    //         var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
    //         var AdvertisementCode = modelRecord.get('AdvertisementCode');
    //         var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');

    //         ArrAdvertisementCodeHotSeat.push(AdvertisementCode);
    //         ArrAdvertisementHotseat_CompanyLogo.push(EnterpriseLogoPath);
    //         ArrAdvertisementHotseat_CompanyName.push(EnterpriseName);
    //         ArrAdvertisementHotseat_AdvertisementTitle.push(AdvertisementTitle);
    //         ArrAdvertisementHotseat_EnterpriseAccNo.push(EnterpriseAccNo);
    //         //ArrMediaFileName.push(MediaFileName);
    //         Ext.getCmp('btnDashboard_HotSeatAdvertisement_PicProfile' + i).setHtml('<img src="' + EnterpriseLogoPath + '" style="background-color:white;width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;">');
    //         // Ext.getCmp('btnDashboard_HotSeatAdvertisement_UserNameProfile' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);border-radius:5px 5px 5px 5px">' + EnterpriseName + '</div><br>');
    //         Ext.getCmp('htmlDasboard_HotSeatAdvertisement_EnterpriseName' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">' + EnterpriseName + '</div>');
    //         Ext.getCmp('htmlDasboard_HotSeatAdvertisement_Title' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">' + AdvertisementTitle + ' </div>');

    //         Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 260px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');

    //         Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');



    //         ////  xtype: 'pinchzoomimage',
    //         //if (MediaType == "Image") {
    //         //    carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'image', margin: '7 0 0 0' });
    //         //    // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
    //         //}
    //         //if (MediaType == "Video") {
    //         //    carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '98%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, margin: '7 0 0 0' });

    //         //}

    //         //if (AdvertismentMediaNote) {
    //         //    ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
    //         //} else {
    //         //    ArrCaptionTextVIAAdvertisement.push('NULL');
    //         //}


    //         // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
    //     }




    //     //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
    //     //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


    //     //var modelRecords = myStore.getAt(0);
    //     //localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
    //     //localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
    //     //localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
    //     //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
    //     //localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
    //     //localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
    //     //localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
    //     //localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));


    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(1000);

}


function openAdvertisement_fromOtherPage(index) {
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[index]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[index], ArrAdvertisementHotseat_CompanyName[index], ArrAdvertisementHotseat_AdvertisementTitle[index], ArrAdvertisementHotseat_EnterpriseAccNo[index]);

}
var globalDashboard_OpenAdvertisementNo;
function openAdvertisement0() {
    globalDashboard_OpenAdvertisementNo = 0;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[0]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[0], ArrAdvertisementHotseat_CompanyName[0], ArrAdvertisementHotseat_AdvertisementTitle[0], ArrAdvertisementHotseat_EnterpriseAccNo[0]);
}
function openAdvertisement1() {
    globalDashboard_OpenAdvertisementNo = 1;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[1]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[1], ArrAdvertisementHotseat_CompanyName[1], ArrAdvertisementHotseat_AdvertisementTitle[1], ArrAdvertisementHotseat_EnterpriseAccNo[1]);
}
function openAdvertisement2() {
    globalDashboard_OpenAdvertisementNo = 2;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[2]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[2], ArrAdvertisementHotseat_CompanyName[2], ArrAdvertisementHotseat_AdvertisementTitle[2], ArrAdvertisementHotseat_EnterpriseAccNo[2]);
}


function openAdvertisement3() {
    globalDashboard_OpenAdvertisementNo = 3;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[3]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[3], ArrAdvertisementHotseat_CompanyName[3], ArrAdvertisementHotseat_AdvertisementTitle[3], ArrAdvertisementHotseat_EnterpriseAccNo[3]);
}
function openAdvertisement4() {
    globalDashboard_OpenAdvertisementNo = 4;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[4]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[4], ArrAdvertisementHotseat_CompanyName[4], ArrAdvertisementHotseat_AdvertisementTitle[4], ArrAdvertisementHotseat_EnterpriseAccNo[4]);
}
function openAdvertisement5() {
    globalDashboard_OpenAdvertisementNo = 5;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[5]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[5], ArrAdvertisementHotseat_CompanyName[5], ArrAdvertisementHotseat_AdvertisementTitle[5], ArrAdvertisementHotseat_EnterpriseAccNo[5]);
}

function openAdvertisement6() {
    globalDashboard_OpenAdvertisementNo = 6;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[6]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[6], ArrAdvertisementHotseat_CompanyName[6], ArrAdvertisementHotseat_AdvertisementTitle[6], ArrAdvertisementHotseat_EnterpriseAccNo[6]);
}
function openAdvertisement7() {
    globalDashboard_OpenAdvertisementNo = 7;
    globalFloatPanel_AyohaStore_ModuleTagging = "HotSeatAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode", ArrAdvertisementCodeHotSeat[7]);
    FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[7], ArrAdvertisementHotseat_CompanyName[7], ArrAdvertisementHotseat_AdvertisementTitle[7], ArrAdvertisementHotseat_EnterpriseAccNo[7]);
}

var ArrStampCampaignCode = [];
var ArrStampContentNote = [];
var ArrEnterpriseName = [];
var ArrEndDate = [];
var ArrStampContent = [];
var ArrStartDate = [];
var ArrStampRuleRemarks = [];
var ArrIsStampRulePopUp = [];
var ArrStampContentSequence = [];
var ArrStampTotalRow = [];
var ArrEnterpriseAccNo = [];
var ArrStampCampaignName = [];



var ArrCountStampYES = [];
var ArrEnterprisesLogo = [];

var ArrStampisRequiredStartEndDate = [];
var ArrStampisCampaignExpired = [];
var ArrStampCampaignDayLeft = [];
var ArrStampCampaignAdvertisementTitle = [];
function Dashboard_NearestRedeem() {
    //Ext.getStore('AyohaUserStampCardNearestRedeemItemStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    Ext.getStore('AyohaUserDashBoardNearestRedeemItemStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    });
    Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserDashBoardNearestRedeemItemStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        });
        Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemStore').load();
        var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemStore');

        var count = myStore.getCount();





        var a;

        //  console.log(count);

        if (count > 3) {
            a = 3;
        }

        if (count < 3) {
            a = count;
        }


        ArrStampContentSequence.length = 0;
        ArrStampTotalRow.length = 0;

        ArrStampCampaignCode.length = 0;
        ArrStampContentNote.length = 0;
        ArrEnterpriseName.length = 0;
        ArrEndDate.length = 0;
        ArrStampContent.length = 0;

        ArrStartDate.length = 0;
        ArrStampRuleRemarks.length = 0;
        ArrIsStampRulePopUp.length = 0;
        ArrEnterpriseAccNo.length = 0;
        ArrStampCampaignName.length = 0;


        ArrCountStampYES.length = 0;
        ArrEnterprisesLogo.length = 0;


        //unlimited load//
        for (i = 0; i < count; i++) {
            // for (i = 0; i < a; i++) {
            var modelRecord = myStore.getAt(i);
            if (modelRecord.get('StampCampaignCode')) {
                var StampCampaignCode = modelRecord.get('StampCampaignCode');
                var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                var StampContentNote = modelRecord.get('StampContentNote');
                var StampContentSequence = modelRecord.get('StampContentSequence');
                var EnterpriseName = modelRecord.get('EnterpriseName');
                var CountRow = modelRecord.get('CountRow');
                var EndDate = modelRecord.get('EndDate');
                var StartDate = modelRecord.get('StartDate');
                var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
                var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
                var StampCampaignName = modelRecord.get('StampCampaignName');
                var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
                var StampContentFinal = StampContent.replace("height:70px", "height:80px");
                var CountStampYES = modelRecord.get('CountStampYES');
                var EnterprisesLogo = modelRecord.get('EnterprisesLogo');


                if (i <= 2) {

                    Ext.getCmp('Dashboard_NearestRedeem_StampContent' + i).setHtml(StampContent);
                    Ext.getCmp('Dashboard_NearestRedeem_StampContentNote' + i).setHtml('<div style="color:white;text-align: center;font-size:15px;width:100%;font-weight:bold">' + StampContentNote + '</div>');
                    Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');
                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:normal">End Date:' + EndDate + '</div>');
                    //Ext.getCmp('btnDashboard_HotSeatAdvertisement_UserNameProfile' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">' + EnterpriseName + '</div><br>');
                    console.log('CountStampYES' + CountStampYES);
                    console.log('CountRow' + CountRow);

                }

                if (i >= 3) {
                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHtml('<img src="' + StampContent + '"  style="width: 120px; height: 160px;">');
                    var subStr = StampContentNote.substring(0, 19);
                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">' + subStr + '</div>');
                    // Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');


                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">End Date:' + EndDate + '</div>');

                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">' + StampContentSequence + ' <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>');



                }


                ArrStampContentSequence.push(StampContentSequence);
                ArrStampTotalRow.push(CountRow);
                //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
                //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
                ArrStampCampaignCode.push(StampCampaignCode);
                ArrStampContentNote.push(StampContentNote);
                ArrEnterpriseName.push(EnterpriseName);
                ArrEndDate.push(EndDate);
                ArrStampContent.push(StampContentFinal);
                ArrStartDate.push(StartDate);
                ArrStampRuleRemarks.push(StampRuleRemarks);
                ArrIsStampRulePopUp.push(IsStampRulePopUp);
                ArrEnterpriseAccNo.push(EnterpriseAccNo);
                ArrStampCampaignName.push(StampCampaignName);
                ArrCountStampYES.push(CountStampYES);
                ArrEnterprisesLogo.push(EnterprisesLogo);
            }



        }



        if (count <= 0) {





            Ext.getCmp('container_Dashboard_NearestRedeemNonMembers').setHidden(false);
            Ext.getCmp('container_Dashboard_NearestRedeemMembers').setHidden(true);
        }


        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(2000);
}








function Dashboard_AyohaUserDashBoardNearestRedeemItemStampCardStore() {



    //_DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    //_DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemStampCard');
    //_DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.load();




    //var task = Ext.create('Ext.util.DelayedTask', function () {

    //   // var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemStampCardStore');



    //    var count = _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getCount();
    //    //alert(count)
    //    //if (count <= 0) {
    //    //    return;
    //    //}




    //    ArrStampContentSequence.length = 0;
    //    ArrStampTotalRow.length = 0;

    //    ArrStampCampaignCode.length = 0;
    //    ArrStampContentNote.length = 0;
    //    ArrEnterpriseName.length = 0;
    //    ArrEndDate.length = 0;
    //    ArrStampContent.length = 0;

    //    ArrStartDate.length = 0;
    //    ArrStampRuleRemarks.length = 0;
    //    ArrIsStampRulePopUp.length = 0;
    //    ArrEnterpriseAccNo.length = 0;
    //    ArrStampCampaignName.length = 0;


    //    ArrCountStampYES.length = 0;
    //    ArrEnterprisesLogo.length = 0;

    //    ArrStampisRequiredStartEndDate.length = 0;
    //    ArrStampisCampaignExpired.length = 0;
    //    ArrStampCampaignDayLeft.length = 0;
    //    ArrStampCampaignAdvertisementTitle.length = 0;
    //    //unlimited load//
    //    for (i = 0; i < count; i++) {
    //        // for (i = 0; i < a; i++) {
    //     //   var modelRecord = myStore.getAt(i);
    //        var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getAt(i);
    //        if (modelRecord.get('StampCampaignCode')) {
    //            var StampCampaignCode = modelRecord.get('StampCampaignCode');
    //            var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
    //            var StampContentNote = modelRecord.get('StampContentNote');
    //            var StampContentSequence = modelRecord.get('StampContentSequence');
    //            var EnterpriseName = modelRecord.get('EnterpriseName');
    //            var CountRow = modelRecord.get('CountRow');
    //            var EndDate = modelRecord.get('EndDate');
    //            var StartDate = modelRecord.get('StartDate');
    //            var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
    //            var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
    //            var StampCampaignName = modelRecord.get('StampCampaignName');
    //            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
    //            var StampContentFinal = StampContent.replace("height:70px", "height:80px");
    //            var CountStampYES = modelRecord.get('CountStampYES');
    //            var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
    //            var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
    //            var isCampaignExpired = modelRecord.get('isCampaignExpired');
    //            var CampaignDayLeft = parseInt(modelRecord.get('CampaignDayLeft'));
    //            var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
    //            if (i <= 8) {
    //                Ext.getCmp('Dashboard_NearestRedeem_StampContent' + i).setHtml(StampContent);
    //                Ext.getCmp('Dashboard_NearestRedeem_StampContentNote' + i).setHtml('<div style="color:black;text-align: center;font-size:15px;width:100%;font-weight:bold">' + StampContentNote + '</div>');
    //                Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');

    //                if (isRequiredStartEndDate == "YES") {

    //                    if (isCampaignExpired == "Expired") {

    //                        Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div  style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -140px 0px 0px;">Campaign Expired !</div>');
    //                        // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: center;font-size:12px;width:100%;font-weight:normal">Campaign Expired !</div>');
    //                    }
    //                    if (isCampaignExpired == "NotExpired") {
    //                        // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">End Date:' + EndDate + '</div>');
    //                        // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setMargin('-2 0 0 23');
    //                        Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div  style="color:purple;text-align: right;font-size:12px;font-weight:bold;margin:-19px -130px 0px 0px;">' + CampaignDayLeft + ' Day Left</div>');
    //                        if (CampaignDayLeft >= 20 && CampaignDayLeft <= 30) {
    //                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:green;text-align: right;font-size:12px;font-weight:bold;margin:-19px -140px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
    //                        }
    //                        if (CampaignDayLeft >= 10 && CampaignDayLeft <= 19) {
    //                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:orange;text-align: right;font-size:12px;font-weight:bold;margin:-19px -140px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
    //                        }
    //                        if (CampaignDayLeft >= 1 && CampaignDayLeft <= 9) {
    //                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -140px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
    //                        }
    //                    }
    //                }

    //                if (isRequiredStartEndDate == "NO") {
    //                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">End Date:&nbsp;<i>No End Date,Valid LifeTime</i></div>');

    //                }


    //                //Ext.getCmp('btnDashboard_HotSeatAdvertisement_UserNameProfile' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">' + EnterpriseName + '</div><br>');

    //            }


    //            ArrStampContentSequence.push(StampContentSequence);
    //            ArrStampTotalRow.push(CountRow);
    //            //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
    //            //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
    //            ArrStampCampaignCode.push(StampCampaignCode);
    //            ArrStampContentNote.push(StampContentNote);
    //            ArrEnterpriseName.push(EnterpriseName);
    //            ArrEndDate.push(EndDate);
    //            ArrStampContent.push(StampContentFinal);
    //            ArrStartDate.push(StartDate);
    //            ArrStampRuleRemarks.push(StampRuleRemarks);
    //            ArrIsStampRulePopUp.push(IsStampRulePopUp);
    //            ArrEnterpriseAccNo.push(EnterpriseAccNo);
    //            ArrStampCampaignName.push(StampCampaignName);
    //            ArrCountStampYES.push(CountStampYES);
    //            ArrEnterprisesLogo.push(EnterprisesLogo);
    //            ArrStampisRequiredStartEndDate.push(isRequiredStartEndDate);
    //            ArrStampisCampaignExpired.push(isCampaignExpired);
    //            ArrStampCampaignDayLeft.push(CampaignDayLeft);
    //            ArrStampCampaignAdvertisementTitle.push(AdvertisementTitle);
    //        }



    //    }



    //    if (count <= 0) {





    //        Ext.getCmp('container_Dashboard_NearestRedeemNonMembers').setHidden(false);
    //        Ext.getCmp('container_Dashboard_NearestRedeemMembers').setHidden(true);
    //    }

    //    Dashboard_AyohaUserDashBoardNearestRedeemItemPointCardStore();
    //    Ext.Viewport.setMasked(false);
    //    //  VIAAdvertismentAutoSlide();

    //});
    //task.delay(1000);












    ////////////////////////
    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemStampCardStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemStampCardStore').load();

}










var ArrPointCampaignCode = [];
var ArrPointContentNote = [];
var ArrPointEnterpriseName = [];
var ArrPointisRequiredStartEndDate = [];
var ArrPointisCampaignExpired = [];
var ArrPointEndDate = [];
var ArrPointContent = [];
var ArrPointStartDate = [];
var ArrPointRuleRemarks = [];
var ArrIsPointRulePopUp = [];
var ArrPointContentSequence = [];
var ArrPointTotalRow = [];
var ArrPointEnterpriseAccNo = [];
var ArrPointCampaignName = [];
var ArrCountPointYES = [];
var ArrPointEnterprisesLogo = [];
var ArrPointAdvertisementTitle = [];

function Dashboard_AyohaUserDashBoardNearestRedeemItemPointCardStore() {

    _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemPointCard');
    _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.load();







    var task = Ext.create('Ext.util.DelayedTask', function () {


        var count = _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getCount();
        //if (count <= 0) {
        //    return;
        //}









        ArrPointContentSequence.length = 0;
        ArrPointTotalRow.length = 0;
        ArrPointCampaignCode.length = 0;
        ArrPointContentNote.length = 0;
        ArrPointEnterpriseName.length = 0;
        ArrPointEndDate.length = 0;
        ArrPointContent.length = 0;
        ArrPointStartDate.length = 0;
        ArrPointRuleRemarks.length = 0;
        ArrIsPointRulePopUp.length = 0;
        ArrPointEnterpriseAccNo.length = 0;
        ArrPointCampaignName.length = 0;
        ArrCountPointYES.length = 0;
        ArrPointEnterprisesLogo.length = 0;
        ArrPointisRequiredStartEndDate.length = 0;
        ArrPointisCampaignExpired.length = 0;
        ArrPointAdvertisementTitle.length = 0;
        //unlimited load//
        for (i = 0; i < count; i++) {
            // for (i = 0; i < a; i++) {
            var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getAt(i);
            if (modelRecord.get('StampCampaignCode')) {
                var StampCampaignCode = modelRecord.get('StampCampaignCode');
                var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                var StampContentNote = modelRecord.get('StampContentNote');
                var StampContentSequence = modelRecord.get('StampContentSequence');
                var EnterpriseName = modelRecord.get('EnterpriseName');
                var CountRow = modelRecord.get('CountRow');
                var EndDate = modelRecord.get('EndDate');
                var StartDate = modelRecord.get('StartDate');
                var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
                var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
                var StampCampaignName = modelRecord.get('StampCampaignName');
                var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
                var StampContentFinal = StampContent.replace("height:70px", "height:80px");
                var CountStampYES = modelRecord.get('CountStampYES');
                var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
                var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
                var isCampaignExpired = modelRecord.get('isCampaignExpired');
                var CampaignDayLeft = modelRecord.get('CampaignDayLeft');
                var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
                if (i <= 8) {
                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHtml('<img src="' + StampContent + '"  style="width: 120px; height: 160px;">');
                    var subStr = StampContentNote.substring(0, 19);
                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">' + subStr + '</div>');


                    // Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');



                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:transparent;text-align: center;font-size:10px;width:100%;font-weight:normal;">No End Date</div>');
                    // Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('10 0 0 0');
                    if (isRequiredStartEndDate == "YES") {
                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>');
                        if (isCampaignExpired == "NotExpired") {
                            Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">End Date:' + EndDate + '</div>');
                            Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                        }
                        if (isCampaignExpired == "Expired") {
                            Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div class="blink_me" style="color:red;text-align: center;font-size:10px;width:105%;font-weight:normal;border: 1px solid red;background-color: white;border-radius: 10px 10px 10px 10px;">Campaign Expired!</div>');
                            Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                            Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                            Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Pass</div></div>');
                        }

                    } else {
                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('8 0 0 0');
                    }

                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">' + StampContentSequence + ' <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>');

                }



                ArrPointContentSequence.push(StampContentSequence);
                ArrPointTotalRow.push(CountRow);
                //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
                //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
                ArrPointCampaignCode.push(StampCampaignCode);
                ArrPointContentNote.push(StampContentNote);
                ArrPointEnterpriseName.push(EnterpriseName);
                ArrPointEndDate.push(EndDate);
                ArrPointContent.push(StampContentFinal);
                ArrPointStartDate.push(StartDate);
                ArrPointRuleRemarks.push(StampRuleRemarks);
                ArrIsPointRulePopUp.push(IsStampRulePopUp);
                ArrPointEnterpriseAccNo.push(EnterpriseAccNo);
                ArrPointCampaignName.push(StampCampaignName);
                ArrCountPointYES.push(CountStampYES);
                ArrPointEnterprisesLogo.push(EnterprisesLogo);
                ArrPointisRequiredStartEndDate.push(isRequiredStartEndDate);
                ArrPointisCampaignExpired.push(isCampaignExpired);
                ArrPointAdvertisementTitle.push(AdvertisementTitle);
            }



        }



        //if (count <= 0) {





        //    Ext.getCmp('container_Dashboard_NearestRedeemNonMembers').setHidden(false);
        //    Ext.getCmp('container_Dashboard_NearestRedeemMembers').setHidden(true);
        //}


        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);
}





var globalLatestPoint = "0";
var globalLatestStamp = "0/0";

function initializeContainerSingleTapEvent() {



    // var containerViewPointTransactionsShow = Ext.ComponentQuery.query('container[name=containerNameAyohaRewards]')[0];
    // var containerViewElPointTransactionsShow = containerViewPointTransactionsShow.element;
    // containerViewElPointTransactionsShow.on('tap',
    //   function (event, node, options, eOpts) {

    //       // SingleTap_Dashboard_AyohaRewards();
         
    //   }
    // );
    


    var containerViewDashboardHaiUser = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_DashboardHaiUser]')[0];
    var containerViewElDashboardHaiUser = containerViewDashboardHaiUser.element;
    containerViewElDashboardHaiUser.on('tap',
      function (event, node, options, eOpts) {
      //  DrawerMenuShow();
          FloatPanel_MyAccountMasterShow();
      }
    );


    var containerViewnamecontainerMyAccount_DashboardAyohaeWallet = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_DashboardAyohaeWallet]')[0];
    var containerViewElnamecontainerMyAccount_DashboardAyohaeWallet = containerViewnamecontainerMyAccount_DashboardAyohaeWallet.element;
    containerViewElnamecontainerMyAccount_DashboardAyohaeWallet.on('tap',
      function (event, node, options, eOpts) {

    
       //16102025//off semenetare testing saja// FloatPanel_AyohaeWalletShow();

         
        //   if (GetAyohaUserisUserVerified() == "YES") {
        //       FloatPanel_AyohaeWalletShow();
        //   }else

        //       if (GetAyohaUserisUserVerified() == "NO") {
        //           iseWalletButtonTap = "YES";
        //           eWalletWarningToBeMembershipFirst();
             
        //   } 


        
          //Ayoha_eWallet();
      }
    );




    var containerViewMenuBottom_MyAccount = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_MyAccount]')[0];
    var containerViewElMenuBottom_MyAccount = containerViewMenuBottom_MyAccount.element;
    containerViewElMenuBottom_MyAccount.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_MyAccountMasterShow();
      }
    );





    var containerViewMenuBottom_MyMembershipCard = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_MyMembershipCard]')[0];
    var containerViewElMenuBottom_MyMembershipCard = containerViewMenuBottom_MyMembershipCard.element;
    containerViewElMenuBottom_MyMembershipCard.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_MyMembershipCard');
          FloatPanel_MembershipCardList_MyMembershipCardShow();
      }
    );




    //var containerViewMenuBottom_NearestRedemption = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_NearestRedemption]')[0];
    //var containerViewElMenuBottom_NearestRedemption = containerViewMenuBottom_NearestRedemption.element;
    //containerViewElMenuBottom_NearestRedemption.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_NearestRedemptionShow();
    //  }
    //);





    var containerViewMenuBottom_AyohaReward = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_AyohaReward]')[0];
    var containerViewElMenuBottom_AyohaReward = containerViewMenuBottom_AyohaReward.element;
    containerViewElMenuBottom_AyohaReward.on('tap',
      function (event, node, options, eOpts) {

          //SingleTap_Dashboard_AyohaRewards();
          Ext.getCmp('tabpanelMyAccount_Dashboard').setActiveItem(0);
      }
    );





    //var containerViewMenuBottom_AyohaRewardContest = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_AyohaRewardContest]')[0];
    //var containerViewElMenuBottom_AyohaRewardContest = containerViewMenuBottom_AyohaRewardContest.element;
    //containerViewElMenuBottom_AyohaRewardContest.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_AyohaReward_ContestHistoryShow();
    //  }
    //);





    var containerViewMenuBottom_MyStore = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_MyStore]')[0];
    var containerViewElMenuBottom_MyStore = containerViewMenuBottom_MyStore.element;
    containerViewElMenuBottom_MyStore.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTab();
          LoadingPanelShow(getLoadingIcon(), 'Loading....');

          //var task = Ext.create('Ext.util.DelayedTask', function () {
          //    FloatPanel_DashboardMerchantRewardShow();
          //});
          //task.delay(10);

      }
    );




    var containerViewMenuBottom_Notification = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_Notification]')[0];
    var containerViewElMenuBottom_Notification = containerViewMenuBottom_Notification.element;
    containerViewElMenuBottom_Notification.on('tap',
      function (event, node, options, eOpts) {
         // animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_Notification');
          FloatPanel_AyohaNotificationShow();
      }
    );






    var containerViewMenuBottom_QrCodeScanOutter = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter]')[0];
    var containerViewElMenuBottom_QrCodeScanOutter = containerViewMenuBottom_QrCodeScanOutter.element;
    containerViewElMenuBottom_QrCodeScanOutter.on('tap',
      function (event, node, options, eOpts) {
         
        //working code on 15/9/2025 1:13am
        //comment for testing new pag FloatPanel_ScannedMerchant 
      Ext.getCmp('mainView').setHidden(true);
      FloatPanel_QrCodeScanner_ScanCampaignShow();
      // FloatPanel_ScannedMerchantShow();
         
         
         
          //comment on 2/11/2022 10:45PM
          //Ext.getCmp('mainView').setHidden(true);
          //window.QRScanner.prepare(onDone);




      }
    );








    //var containerViewLoyaltynamecontainerVIA_Advertisement = Ext.ComponentQuery.query('container[name=namecontainerVIA_Advertisement]')[0];
    //var containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement = containerViewLoyaltynamecontainerVIA_Advertisement.element;
    //containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement.on('tap',
    //  function (event, node, options, eOpts) {

    //      FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
    //  }
    //);



    var containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg0 = Ext.ComponentQuery.query('container[name=NamecontainerAyohaRewardRedemption_carosel_APointImg0]')[0];
    var containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg0 = containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg0.element;
    containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg0.on('tap',
      function (event, node, options, eOpts) {
          //var Point = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point [0];
          //var ItemImage = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[0];
          //var ItemName = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[0];
          //var ItemPrice = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[0];
          //var ItemCode =arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode[0];
          //FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode);
          DashboardAyohaPointRedemption_openRedeemItem(0);


      }
    );



    var containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg1 = Ext.ComponentQuery.query('container[name=NamecontainerAyohaRewardRedemption_carosel_APointImg1]')[0];
    var containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg1 = containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg1.element;
    containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg1.on('tap',
      function (event, node, options, eOpts) {
          //var Point = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point[1];
          //var ItemImage = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[1];
          //var ItemName = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[1];
          //var ItemPrice = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[1];
          //var ItemCode = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode[1];
          //FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode);
          DashboardAyohaPointRedemption_openRedeemItem(1);


      }
    );





    var containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg2 = Ext.ComponentQuery.query('container[name=NamecontainerAyohaRewardRedemption_carosel_APointImg2]')[0];
    var containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg2 = containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg2.element;
    containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg2.on('tap',
      function (event, node, options, eOpts) {
          //var Point = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point[2];
          //var ItemImage = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[2];
          //var ItemName = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[2];
          //var ItemPrice = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[2];
          //var ItemCode = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode[2];
          //FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode);
          DashboardAyohaPointRedemption_openRedeemItem(2);


      }
    );





    var containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg3 = Ext.ComponentQuery.query('container[name=NamecontainerAyohaRewardRedemption_carosel_APointImg3]')[0];
    var containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg3 = containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg3.element;
    containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg3.on('tap',
      function (event, node, options, eOpts) {
          //var Point = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point[3];
          //var ItemImage = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[3];
          //var ItemName = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[3];
          //var ItemPrice = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[3];
          //var ItemCode = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode[3];
          //FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode);
          DashboardAyohaPointRedemption_openRedeemItem(3);


      }
    );



    var containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg4 = Ext.ComponentQuery.query('container[name=NamecontainerAyohaRewardRedemption_carosel_APointImg4]')[0];
    var containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg4 = containerViewNamecontainerAyohaRewardRedemption_carosel_APointImg4.element;
    containerViewElNamecontainerAyohaRewardRedemption_carosel_APointImg4.on('tap',
      function (event, node, options, eOpts) {
          //var Point = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point[4];
          //var ItemImage = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[4];
          //var ItemName = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[4];
          //var ItemPrice = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[4];
          //var ItemCode = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode[4];
          //FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode);
          DashboardAyohaPointRedemption_openRedeemItem(4);


      }
    );



    ////var containerViewNamecontainerDashboardVIAAdvertisement_eStore = Ext.ComponentQuery.query('container[name=nameContainerDashboardVIAAdvertisement_eStore]')[0];
    ////var containerViewElDashboardVIAAdvertisement_eStore = containerViewNamecontainerDashboardVIAAdvertisement_eStore.element;
    ////containerViewElDashboardVIAAdvertisement_eStore.on('tap',
    ////  function (event, node, options, eOpts) {

    ////      Dashboard_openVIAAdvertisement_OnlineStore();


    ////  }
    ////);




    var containerViewDashboard_namecontainerAyohaRewardContest01 = Ext.ComponentQuery.query('container[name=Dashboard_namecontainerAyohaRewardContest01]')[0];
    var containerViewElDashboard_namecontainerAyohaRewardContest01 = containerViewDashboard_namecontainerAyohaRewardContest01.element;
    containerViewElDashboard_namecontainerAyohaRewardContest01.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_AyohaTapContestShow();

      }
    );



    var nameContainerMyAccount_Dashboard_AyohaRewardHome = Ext.ComponentQuery.query('container[name=nameContainerMyAccount_Dashboard_AyohaRewardHome]')[0];
    var containerViewElnameContainerMyAccount_Dashboard_AyohaRewardHome = nameContainerMyAccount_Dashboard_AyohaRewardHome.element;
    containerViewElnameContainerMyAccount_Dashboard_AyohaRewardHome.on('tap',
      function (event, node, options, eOpts) {
        Dashboard_AyohaRewardHome();
         // FloatPanel_AyohaReward_AyohaTapContestShow();

      }
    )




    var nameContainerMyAccount_Dashboard_MembershipCardHub = Ext.ComponentQuery.query('container[name=nameContainerMyAccount_Dashboard_MembershipCardHub]')[0];
    var containerViewElnameContainerMyAccount_Dashboard_MembershipCardHub = nameContainerMyAccount_Dashboard_MembershipCardHub.element;
    containerViewElnameContainerMyAccount_Dashboard_MembershipCardHub.on('tap',
      function (event, node, options, eOpts) {
        //Dashboard_MembershipCardHub();
        FloatPanel_Membership_MembershipCardHubsShow();
         // FloatPanel_AyohaReward_AyohaTapContestShow();

      }
    );


    // var ContainernamecontainerDashbord_MyCart = Ext.ComponentQuery.query('container[name=namecontainerDashbord_MyCart]')[0];
    // var containerViewElnamecontainerDashbord_MyCart = ContainernamecontainerDashbord_MyCart.element;
    // containerViewElnamecontainerDashbord_MyCart.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_OrderCartShow();
    //   }
    // );



    var ContainernamecontainerDashbord_MyCart = Ext.ComponentQuery.query('container[name=nameMyDashboard_AyohaOnlineMerchantStoreCheckout]')[0];
    var containerViewElnamecontainerDashbord_MyCart = ContainernamecontainerDashbord_MyCart.element;
    containerViewElnamecontainerDashbord_MyCart.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderCartShow();
      }
    );


    var ContainernameContainerMyAccount_Dashboard_AyohaMerchantReward = Ext.ComponentQuery.query('container[name=nameContainerMyAccount_Dashboard_AyohaMerchantReward]')[0];
    var containerViewElnameContainerMyAccount_Dashboard_AyohaMerchantReward = ContainernameContainerMyAccount_Dashboard_AyohaMerchantReward.element;
    containerViewElnameContainerMyAccount_Dashboard_AyohaMerchantReward.on('tap',
      function (event, node, options, eOpts) {
       // animatedClickTab();
       LoadingPanelShow(getLoadingIcon(), 'Loading....');
       FloatPanel_AyohaEnterpriseRewardItemShow();
        
      }
    );




    var ContainernameContainerMyAccount_Dashboard_AyohaMerchantStore = Ext.ComponentQuery.query('container[name=nameContainerMyAccount_Dashboard_AyohaMerchantStore]')[0];
    var containerViewElnameContainerMyAccount_Dashboard_AyohaMerchantStore = ContainernameContainerMyAccount_Dashboard_AyohaMerchantStore.element;
    containerViewElnameContainerMyAccount_Dashboard_AyohaMerchantStore.on('tap',
      function (event, node, options, eOpts) {
        Dashboard_SearchMerchantListShow();
      }
    );




    // var ContainerbtnNameMyAccount_DashboardRankIcon = Ext.ComponentQuery.query('container[name=btnNameMyAccount_DashboardRankIcon]')[0];
    // var containerViewElbtnNameMyAccount_DashboardRankIcon = ContainerbtnNameMyAccount_DashboardRankIcon.element;
    // containerViewElbtnNameMyAccount_DashboardRankIcon.on('tap',
    //   function (event, node, options, eOpts) {
      
    //   }
    // );

    


    // var ContainernameMyAccount_Dashboard_AyohaMerchantShoppingBag = Ext.ComponentQuery.query('container[name=nameMyAccount_Dashboard_AyohaMerchantShoppingBag]')[0];
    // var containerViewElnameMyAccount_Dashboard_AyohaMerchantShoppingBag = ContainernameMyAccount_Dashboard_AyohaMerchantShoppingBag.element;
    // containerViewElnameMyAccount_Dashboard_AyohaMerchantShoppingBag.on('tap',
    //   function (event, node, options, eOpts) {
    //     FloatPanel_MainDashboard_PendingOrderShow();
    //   }
    // );

    var ContainernameMyAccount_Dashboard_AyohaMerchantShoppingBag = Ext.ComponentQuery.query('container[name=nameMyDashboard_AyohaOnlineMerchantStoreShoppingBag]')[0];
    var containerViewElnameMyAccount_Dashboard_AyohaMerchantShoppingBag = ContainernameMyAccount_Dashboard_AyohaMerchantShoppingBag.element;
    containerViewElnameMyAccount_Dashboard_AyohaMerchantShoppingBag.on('tap',
      function (event, node, options, eOpts) {
       if(globalFloatPanel_MainDashboard_PendingOrder_Count>0){
        FloatPanel_MainDashboard_PendingOrderShow();
        return;
       }else{
        swalFireShoppingBag('Shopping Bag (Paid Order) has been completed . You can check your order history in purchase history in My Account section.');
       }
       
       
      }
    );
    


    var containerViewnamecontainerDashbord_MyAyohaStore = Ext.ComponentQuery.query('container[name=namecontainerDashbord_MyAyohaStore]')[0];
    var containerViewElnamecontainerDashbord_MyAyohaStore = containerViewnamecontainerDashbord_MyAyohaStore.element;
    containerViewElnamecontainerDashbord_MyAyohaStore.on('tap',
      function (event, node, options, eOpts) {

        Dashboard_AyohaStore();
      }
    );


    var containerViewnamecontainerDashbord_MyAyohaStore_PremiumAdvertisement = Ext.ComponentQuery.query('container[name=namecontainerDashbord_MyAyohaStore_PremiumAdvertisement]')[0];
    var containerViewElnamecontainerDashbord_MyAyohaStore_PremiumAdvertisement = containerViewnamecontainerDashbord_MyAyohaStore_PremiumAdvertisement.element;
    containerViewElnamecontainerDashbord_MyAyohaStore_PremiumAdvertisement.on('tap',
      function (event, node, options, eOpts) {

        Dashboard_AyohaStore();
      }
    );
  










    var containerViewnamecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo_PremiumAdvertisement]')[0];
    var containerViewElnamecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo = containerViewnamecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo.element;
    containerViewElnamecontainerMyAccount_DashboardAdvertisementPremium_EnterpriseInfo.on('tap',
      function (event, node, options, eOpts) {

        FloatPanelMerchantDetailPage_EnterprisesStageLoad(globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
      }
    );


    

    var containerViewnamemainDashboardCarousel = Ext.ComponentQuery.query('container[name=namemainDashboardCarousel_PremiumAdvertisement]')[0];
    var containerViewElnamemainDashboardCarousel = containerViewnamemainDashboardCarousel.element;
    containerViewElnamemainDashboardCarousel.on('tap',
      function (event, node, options, eOpts) {
        openPremiumAdvertisement(ArrAdvertisementCodePremiumAdvertisment[DashboardArrIndexmainDashboardCarousel],
            ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel],
            ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel], 
            ArrAdvertisementPremium_AdvertisementTitle[DashboardArrIndexmainDashboardCarousel],
            ArrAdvertisementPremium_EnterpriseAccNo[DashboardArrIndexmainDashboardCarousel]);
      
// if(indexmainDashboardCarousel>0){

 
//     openPremiumAdvertisement(ArrAdvertisementCodePremiumAdvertisment[DashboardArrIndexmainDashboardCarousel],
//         ArrAdvertisementPremium_CompanyLogo[DashboardArrIndexmainDashboardCarousel],
//         ArrAdvertisementPremium_CompanyName[DashboardArrIndexmainDashboardCarousel], 
//         ArrAdvertisementPremium_AdvertisementTitle[DashboardArrIndexmainDashboardCarousel],
//         ArrAdvertisementPremium_EnterpriseAccNo[DashboardArrIndexmainDashboardCarousel]);
// }



      }
    );





    var containerViewnamenamecontainerMyAccount_Dashboard_StampCardLoyalty = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_StampCardLoyalty]')[0];
    var containerViewElnamecontainerMyAccount_Dashboard_StampCardLoyalty = containerViewnamenamecontainerMyAccount_Dashboard_StampCardLoyalty.element;
    containerViewElnamecontainerMyAccount_Dashboard_StampCardLoyalty.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaMerchantInfo_LoyaltyProgramShow();
      }
    );



    var containerViewnamenamecontainerMyAccount_Dashboard_PointCardLoyalty = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_PointCardLoyalty]')[0];
    var containerViewElnamecontainerMyAccount_Dashboard_PointCardLoyalty = containerViewnamenamecontainerMyAccount_Dashboard_PointCardLoyalty.element;
    containerViewElnamecontainerMyAccount_Dashboard_PointCardLoyalty.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaMerchantInfo_PointCardLoyaltyProgramShow();
      }
    );

    var containerViewnamenamecontainerMyAccount_Dashboard_DiscountCardLoyalty = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_DiscountCardLoyalty]')[0];
    var containerViewElnamecontainerMyAccount_Dashboard_DiscountCardLoyalty = containerViewnamenamecontainerMyAccount_Dashboard_DiscountCardLoyalty.element;
    containerViewElnamecontainerMyAccount_Dashboard_DiscountCardLoyalty.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaMerchantInfo_DiscountCardLoyaltyProgramShow();
      }
    );






    var containerViewnamenamecontainerMyAccount_Dashboard_ContestCardLoyalty = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_ContestCardLoyalty]')[0];
    var containerViewElnamecontainerMyAccount_Dashboard_ContestCardLoyalty = containerViewnamenamecontainerMyAccount_Dashboard_ContestCardLoyalty.element;
    containerViewElnamecontainerMyAccount_Dashboard_ContestCardLoyalty.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaMerchantInfo_ContestCardLoyaltyProgramShow();
      }
    );

    var containerViewnamenamecontainerMyAccount_Dashboard_EventCardLoyalty = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_EventCardLoyalty]')[0];
    var containerViewElnamecontainerMyAccount_Dashboard_EventCardLoyalty = containerViewnamenamecontainerMyAccount_Dashboard_EventCardLoyalty.element;
    containerViewElnamecontainerMyAccount_Dashboard_EventCardLoyalty.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaMerchantInfo_EventCardLoyaltyProgramShow();
      }
    );
    



    var containerViewnamenamecontainerMyAccount_Dashboard_VoucherCardLoyalty = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_VoucherCardLoyalty]')[0];
    var containerViewElnamecontainerMyAccount_Dashboard_VoucherCardLoyalty = containerViewnamenamecontainerMyAccount_Dashboard_VoucherCardLoyalty.element;
    containerViewElnamecontainerMyAccount_Dashboard_VoucherCardLoyalty.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaMerchantInfo_VoucherCardLoyaltyProgramShow();
      }
    );
    

    var containerViewnamenameDashboardMain_EnterprisesLoadCheckInEmpty = Ext.ComponentQuery.query('container[name=nameDashboardMain_EnterprisesLoadCheckInEmpty]')[0];
    var containerViewElnameDashboardMain_EnterprisesLoadCheckInEmpty = containerViewnamenameDashboardMain_EnterprisesLoadCheckInEmpty.element;
    containerViewElnameDashboardMain_EnterprisesLoadCheckInEmpty.on('tap',
      function (event, node, options, eOpts) {
        FloatPanel_Membership_MembershipCardHubsUpgradeShow();
        //Dashboard_SearchMerchantListShow();
      }
    );
}




function Dashboard_openVIAAdvertisement_OnlineStore() {
    FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
    //var nm;
    //var web;

    //nm = arrVIAAdvertisementeStoreName[VIAAdvertisementOnlineStoreIndex];
    //web = arrVIAAdvertisementOnlineStoreUrl[VIAAdvertisementOnlineStoreIndex];
    //console.log(VIAAdvertisementOnlineStoreIndex);
    //if (nm == "Ayoha") {

    //    FloatPanel_AyohaStoreShow_VIA();
    //} else {
    //    window.open(web, '_system'); return false;
    //}
}





function SingleTap_Dashboard_NearestRedeem0() {



    var StampCampaignCode = ArrStampCampaignCode[0];
    var EnterpriseAccNo = ArrEnterpriseAccNo[0];
    var StartDate = ArrStartDate[0];
    var EndDate = ArrEndDate[0];
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    var EnterpriseName = ArrEnterpriseName[0];
    var StampRuleRemarks = ArrStampRuleRemarks[0];
    var isStampRulePopUp = ArrIsStampRulePopUp[0];
    var StampCampaignName = ArrStampCampaignName[0];
    var CountLoyaltyStamped = ArrStampContentSequence[0];
    var CountStampCardRowShow = ArrStampTotalRow[0];
    var EnterprisesLogo = ArrEnterprisesLogo[0];

    var strStampedYES = ArrCountStampYES[0];
    var StampedYES = strStampedYES.split("/");
    var YESStamped = StampedYES[0];
    var TotalRows = StampedYES[1];


    localStorage.setItem('StampCampaignCode', StampCampaignCode);

    localStorage.setItem('CountLoyaltyStamped', YESStamped);
    localStorage.setItem('CountStampCardRowShow', TotalRows);
    //alert(StampRuleRemarks); alert(isStampRulePopUp);

    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterprisesLogo);





}

function SingleTap_Dashboard_NearestRedeem1() {

    var StampCampaignCode = ArrStampCampaignCode[1];
    var EnterpriseAccNo = ArrEnterpriseAccNo[1];
    var StartDate = ArrStartDate[1];
    var EndDate = ArrEndDate[1];
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    var EnterpriseName = ArrEnterpriseName[1];
    var StampRuleRemarks = ArrStampRuleRemarks[1];
    var isStampRulePopUp = ArrIsStampRulePopUp[1];
    var StampCampaignName = ArrStampCampaignName[1];
    var CountLoyaltyStamped = ArrStampContentSequence[1];
    var CountStampCardRowShow = ArrStampTotalRow[1];
    var EnterprisesLogo = ArrEnterprisesLogo[1];

    //localStorage.setItem('StampCampaignCode', StampCampaignCode);

    //localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
    //localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);


    var strStampedYES = ArrCountStampYES[1];
    var StampedYES = strStampedYES.split("/");
    var YESStamped = StampedYES[0];
    var TotalRows = StampedYES[1];


    localStorage.setItem('StampCampaignCode', StampCampaignCode);

    localStorage.setItem('CountLoyaltyStamped', YESStamped);
    localStorage.setItem('CountStampCardRowShow', TotalRows);


    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterprisesLogo);


}

function SingleTap_Dashboard_NearestRedeem2() {

    var StampCampaignCode = ArrStampCampaignCode[2];
    var EnterpriseAccNo = ArrEnterpriseAccNo[2];
    var StartDate = ArrStartDate[2];
    var EndDate = ArrEndDate[2];
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    var EnterpriseName = ArrEnterpriseName[2];
    var StampRuleRemarks = ArrStampRuleRemarks[2];
    var isStampRulePopUp = ArrIsStampRulePopUp[2];
    var StampCampaignName = ArrStampCampaignName[2];
    var CountLoyaltyStamped = ArrStampContentSequence[2];
    var CountStampCardRowShow = ArrStampTotalRow[2];
    var EnterprisesLogo = ArrEnterprisesLogo[2];

    //localStorage.setItem('StampCampaignCode', StampCampaignCode);

    //localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
    //localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);


    var strStampedYES = ArrCountStampYES[2];
    var StampedYES = strStampedYES.split("/");
    var YESStamped = StampedYES[0];
    var TotalRows = StampedYES[1];


    localStorage.setItem('StampCampaignCode', StampCampaignCode);

    localStorage.setItem('CountLoyaltyStamped', YESStamped);
    localStorage.setItem('CountStampCardRowShow', TotalRows);


    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterprisesLogo);


}

function SingleTap_Dashboard_NearestRedeem_StampCard(idx) {

    var StampCampaignCode = ArrStampCampaignCode[idx];
    var EnterpriseAccNo = ArrEnterpriseAccNo[idx];
    var StartDate = ArrStartDate[idx];
    var EndDate = ArrEndDate[idx];
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    var EnterpriseName = ArrEnterpriseName[idx];
    var StampRuleRemarks = ArrStampRuleRemarks[idx];
    var isStampRulePopUp = ArrIsStampRulePopUp[idx];
    var StampCampaignName = ArrStampCampaignName[idx];
    var CountLoyaltyStamped = ArrStampContentSequence[idx];
    var CountStampCardRowShow = ArrStampTotalRow[idx];
    var EnterprisesLogo = ArrEnterprisesLogo[idx];
    var isRequiredStartEndDate = ArrStampisRequiredStartEndDate[idx];
    var isCampaignExpired = ArrStampisCampaignExpired[idx];
    var CampaignDayLeft = ArrStampCampaignDayLeft[idx];
    var AdvertismentTitle = ArrStampCampaignAdvertisementTitle[idx];
    //localStorage.setItem('StampCampaignCode', StampCampaignCode);

    //localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
    //localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);


    var strStampedYES = ArrCountStampYES[idx];
    var StampedYES = strStampedYES.split("/");
    var YESStamped = StampedYES[0];
    var TotalRows = StampedYES[1];

    globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
    localStorage.setItem('StampCampaignCode', StampCampaignCode);

    localStorage.setItem('CountLoyaltyStamped', YESStamped);
    localStorage.setItem('CountStampCardRowShow', TotalRows);


    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterprisesLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle);


}





function SingleTap_Dashboard_NearestRedeem_loyaltyPoint(idx) {

    var StampCampaignCode = ArrPointCampaignCode[idx];
    var EnterpriseAccNo = ArrPointEnterpriseAccNo[idx];
    var StartDate = ArrPointStartDate[idx];
    var EndDate = ArrPointEndDate[idx];
    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    var EnterpriseName = ArrPointEnterpriseName[idx];
    var StampRuleRemarks = ArrPointRuleRemarks[idx];
    var isStampRulePopUp = ArrIsPointRulePopUp[idx];
    var StampCampaignName = ArrPointCampaignName[idx];
    var CountLoyaltyStamped = ArrPointContentSequence[idx];
    var CountStampCardRowShow = ArrPointTotalRow[idx];
    var EnterprisesLogo = ArrPointEnterprisesLogo[idx];
    var PointisRequiredStartEndDate = ArrPointisRequiredStartEndDate[idx];
    var PointisCampaignExpired = ArrPointisCampaignExpired[idx];

    // globalLatestPointCampaignCode = StampCampaignCode;

    if (StampCampaignCode) {
        var strStampedYES = ArrCountPointYES[idx];
        var StampedYES = strStampedYES.split("/");
        var YESStamped = StampedYES[0];
        var TotalRows = StampedYES[1];

        isFloatLoyaltyCardPointOpen = 'N';
        localStorage.setItem('StampCampaignCode', StampCampaignCode);

        localStorage.setItem('CountLoyaltyStamped', YESStamped);
        localStorage.setItem('CountStampCardRowShow', TotalRows);
        //  SingleTap_Dashboard_User_LoyaltyPointNearestRedeemItem(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo);
        //FloatLoyaltyCardPoint_MoveCarousel(11);
        FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo, EndDate, PointisRequiredStartEndDate, PointisCampaignExpired);

        return;
    } else {

        swalFireInfo_NoRedemptionItem("Dear User, you have not subscribed any point loyalty program,go To ayoha merchant and subscribed their loyalty program now!");
        //return;

    }



}



function SingleTap_Dashboard_AyohaRewards() {
    FloatPanel_AyohaRewardShow();
}





function SingleTap_Dashboard_User_LatestStamps() {




    if (globalLatestStamp == "0/0") {
        swalFireInfo("Dear User, you have no stamp loyalty activities. be a membership from ayoha merchant and redeem the reward!.");
        return;
    }

    Ext.getStore('StampCampaignDashboardAyohaUserLatestStampStore').getProxy().setExtraParams({

        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        StampCampaignCode: globalLatestStampCampaignCode,
    });
    Ext.StoreMgr.get('StampCampaignDashboardAyohaUserLatestStampStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignDashboardAyohaUserLatestStampStore').getProxy().setExtraParams({

            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
            StampCampaignCode: globalLatestStampCampaignCode,
        });
        Ext.StoreMgr.get('StampCampaignDashboardAyohaUserLatestStampStore').load();
        var myStore = Ext.getStore('StampCampaignDashboardAyohaUserLatestStampStore');
        var modelRecord = myStore.getAt(0);


        var count = myStore.getCount();

        if (count > 0) {

            var StampCampaignCode = modelRecord.get('StampCampaignCode');
            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
            var StartDateOnly = modelRecord.get('StartDateOnly');
            var EndDateOnly = modelRecord.get('EndDateOnly');
            var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
            var isStampRulePopUp = modelRecord.get('isStampRulePopUp');
            var StampCampaignName = modelRecord.get('StampCampaignName');
            var EnterpriseName = modelRecord.get('EnterpriseName');
            var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
            var CountStampStr = modelRecord.get('CountStampStr').split("/");
            var YESStamped = CountStampStr[0];
            var TotalRows = CountStampStr[1];

            localStorage.setItem('StampCampaignCode', StampCampaignCode);
            localStorage.setItem('CountLoyaltyStamped', YESStamped);
            localStorage.setItem('CountStampCardRowShow', TotalRows);
            //alert(StampRuleRemarks); alert(isStampRulePopUp);

            FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCode, EnterpriseAccNo, StartDateOnly, EndDateOnly, GetCurrAyohaUserAccountNo(), EnterpriseName, StampRuleRemarks, StampCampaignName, YESStamped, TotalRows, EnterpriseLogo);

        } else {

            swalFireStampInfo("Dear User,Hurry up go to (" + globalEnterpriseNameStampCard + ") get stamped and redeem the reward!.");
        }


        Ext.Viewport.setMasked(false);

    });
    task.delay(500);











    // Dashboard_MembershipActivityStampShow();
}


function SingleTap_Dashboard_User_LoyaltyPointNearestRedeemItem(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo) {


    _FloatLoyaltyCardPoint_isFirstLoad = "Y";


    FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo);



    //Ext.getStore('LoyaltyPointDashboardAyohaUserLatestPointStore').getProxy().setExtraParams({

    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //    PointCampaignCode: globalLatestPointCampaignCode,
    //});
    //Ext.StoreMgr.get('LoyaltyPointDashboardAyohaUserLatestPointStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('LoyaltyPointDashboardAyohaUserLatestPointStore').getProxy().setExtraParams({

    //        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //        PointCampaignCode: globalLatestPointCampaignCode,
    //    });
    //    Ext.StoreMgr.get('LoyaltyPointDashboardAyohaUserLatestPointStore').load();
    //    var myStore = Ext.getStore('LoyaltyPointDashboardAyohaUserLatestPointStore');
    //    var modelRecord = myStore.getAt(0);
    //    var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
    //    var PointCampaignName = modelRecord.get('PointCampaignName');
    //    var EnterpriseName = modelRecord.get('EnterpriseName');
    //    var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
    //    var EndDate = modelRecord.get('EndDate');



    //    FloatLoyaltyCardPointShow(PointCampaignName, globalLatestPointCampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo);

    //    Ext.Viewport.setMasked(false);

    //});
    //task.delay(500);




}



//function SingleTap_Dashboard_AyohaRewards_TotalStamps() {
//    Dashboard_MembershipActivityStampShow();
//}

//function SingleTap_Dashboard_AyohaRewards_TotalPoints() {
function SingleTap_Dashboard_User_LatestPoint() {



    if (globalLatestPoint == "0") {
        swalFireInfo("Dear User, you have no point loyalty activities. be a membership from ayoha merchant and redeem the reward!.");
        return;
    }

    if (globalEnterpriseNamePointCard == "Ayoha-Reward.Com") {
        FloatPanel_GraphicConfetiShow();
        Ext.getCmp('btnFloatPanel_GraphicConfeti_Success').setHtml('<font size=5px color=white><center><b>Congratulation!!</center></font>');
        Ext.getCmp('htmlFloatPanel_GraphicConfeti_Success_ImgProfile').setHtml('<img src="' + localStorage.getItem('AyohaUserPicProfile') + '" style="width: 240px; height: 240px; border:1px solid white; border-radius: 50%; " alt="Company Name">');
        Ext.getCmp('btnFloatPanel_GraphicConfeti_Success_textName').setHtml('<div style="background: transparent;width:80%;font-size: 20px;font-weight:bold;color:white;text-align:center;" ><b>' + localStorage.getItem('AyohaUserAccountNames') + '</b></div>');
        Ext.getCmp('btnFloatPanel_GraphicConfeti_Success_text').setHtml('<div style="background: transparent;width:80%;font-size: 16px;font-weight:bold;color:white;text-align:center;" >You Earn <font size=6><b>' + globalLatestPoint + '</b></font> Ayoha Reward Greeting Point, !<img src="resources/icons/PointAnimation02.gif" style="width: 40px; height: 40px;  " alt="Company Name"></div>');




        return;
    }


    Ext.getStore('LoyaltyPointDashboardAyohaUserLatestPointStore').getProxy().setExtraParams({

        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        PointCampaignCode: globalLatestPointCampaignCode,
    });
    Ext.StoreMgr.get('LoyaltyPointDashboardAyohaUserLatestPointStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyPointDashboardAyohaUserLatestPointStore').getProxy().setExtraParams({

            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
            PointCampaignCode: globalLatestPointCampaignCode,
        });
        Ext.StoreMgr.get('LoyaltyPointDashboardAyohaUserLatestPointStore').load();
        var myStore = Ext.getStore('LoyaltyPointDashboardAyohaUserLatestPointStore');
        var modelRecord = myStore.getAt(0);
        var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
        var PointCampaignName = modelRecord.get('PointCampaignName');
        var EnterpriseName = modelRecord.get('EnterpriseName');
        var EnterpriseLogo = modelRecord.get('EnterpriseLogo');
        var EndDate = modelRecord.get('EndDate');


        _FloatLoyaltyCardPoint_isFirstLoad = "Y";
        FloatLoyaltyCardPointShow(PointCampaignName, globalLatestPointCampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo);

        Ext.Viewport.setMasked(false);

    });
    task.delay(500);




}


//function Dashboard_AyohaRewards() {

//    Ext.getStore('AyohaUserProfileUnClaimedTotalStampPointStore').getProxy().setExtraParams({
//        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
//    });
//    Ext.StoreMgr.get('AyohaUserProfileUnClaimedTotalStampPointStore').load();
//    var task = Ext.create('Ext.util.DelayedTask', function () {
//        Ext.getStore('AyohaUserProfileUnClaimedTotalStampPointStore').getProxy().setExtraParams({
//            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
//        });
//        Ext.StoreMgr.get('AyohaUserProfileUnClaimedTotalStampPointStore').load();
//        var myStore = Ext.getStore('AyohaUserProfileUnClaimedTotalStampPointStore');
//        var modelRecord = myStore.getAt(0);
//        var count = myStore.getCount();

//        var UnClaimedTotalPoint = modelRecord.get('UnClaimedTotalPoint');
//        var UnClaimedTotalStamp = modelRecord.get('UnClaimedTotalStamp');
//        var NextRedeemPoint = modelRecord.get('NextRedeemPoint');
//        var NextRedeemStamp = modelRecord.get('NextRedeemStamp');


//        Ext.getCmp('DashBoard_AyohaRewards_TotalStampsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + UnClaimedTotalStamp + '</div>');
//        Ext.getCmp('DashBoard_AyohaRewards_NextRedeemStampsLbl').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Stamp:<font size=2 color=white><b>' + NextRedeemStamp + '</b></font></div>');


//        Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + UnClaimedTotalPoint + '</div>');
//        Ext.getCmp('DashBoard_AyohaRewards_NextRedeemPointLbl').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Point:<font size=2 color=white><b>' + NextRedeemPoint + '</b></font></div>');







//        //console.log("UnClaimedTotalPoint:" + UnClaimedTotalPoint);
//        //console.log("UnClaimedTotalStamp:" + UnClaimedTotalStamp);
//        //for (i = 0; i < count; i++) {
//        //    var modelRecord = myStore.getAt(i);

//        //    var StampCampaignCode = modelRecord.get('UnClaimedTotalStamp');
//        //    //var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
//        //    //var StampContentNote = modelRecord.get('StampContentNote');
//        //    //var StampContentSequence = modelRecord.get('StampContentSequence');
//        //    //var EnterpriseName = modelRecord.get('EnterpriseName');
//        //    //var CountRow = modelRecord.get('CountRow');
//        //    //var EndDate = modelRecord.get('EndDate');
//        //    //var StartDate = modelRecord.get('StartDate');
//        //    //var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
//        //    //var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
//        //    //var StampCampaignName = modelRecord.get('StampCampaignName');
//        //    //var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
//        //    //var StampContentFinal = StampContent.replace("height:70px", "height:80px")

//        //    //ArrMediaFileName.push(MediaFileName);
//        //    console.log(StampContentFinal);
//        //    //Ext.getCmp('Dashboard_NearestRedeem_StampContent' + i).setHtml(StampContentFinal);
//        //    //Ext.getCmp('Dashboard_NearestRedeem_StampContentNote' + i).setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">' + StampContentNote + '</div>');
//        //    //Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');
//        //    //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">End Date:' + EndDate + '</div>');


//        //}


//        Ext.Viewport.setMasked(false);
//       // VIAAdvertismentAutoSlide();

//    });
//    task.delay(600);
//}



var globalEnterpriseNamePointCard;
var globalLatestStampCampaignCode;
var globalLatestPointCampaignCode;
var globalPNUnread
var globalEnterpriseNameStampCard;
var globalDashboard_AyohaPoint;
var globalDashboard_TotalItemQuantityCart;
var DashboardAyohaMember_NextRankPoint;
function DashboardAyohaUserMainStore() {
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



// Hide (element still takes space)




          


           // Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:180px;width:180px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:50px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-33px 0px 0px 0px"><b>Your Ayoha Points</b></div></div>');
           
            Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + AyohaTaAndWin_TapBalance + '</font> Chance Left</div></div>');
            //Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>(' + AyohaTaAndWin_TapBalance + ')</font> Chance Left</div></div>');
            AyohaPoint = 0;
    
    
            if (globalPNUnread != "0") {
               // Ext.getCmp('btnMyAccount_DashboardPicProfile').setBadgeText(globalPNUnread);
                // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setBadgeText(globalPNUnread);
                Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/Notification.png" width="22" height="22" alt="Company Name"><div style="margin:-35px 0px 0px -10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
            }
    
    
    
    
    
            //Ext.getCmp('DashBoard_AyohaRewards_NextRedeemStampsLbl').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Stamp:<font size=2 color=white><b>' + NextRedeemStamp + '</b></font></div>');
    
    
            //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + UnClaimedTotalPoint + '</div>');
            //Ext.getCmp('DashBoard_AyohaRewards_NextRedeemPointLbl').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Point:<font size=2 color=white><b>' + NextRedeemPoint + '</b></font></div>');
    
    






            Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_StampCardLoyaltyBadgeID', BadgeCount_Stamp); 
            Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_PointCardLoyaltyBadgeID', BadgeCount_Point); 
            Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_DiscountCardLoyaltyBadgeID', BadgeCount_Discount); 
            Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_ContestCardLoyaltyBadgeID', BadgeCount_Contest); 
            Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_EventCardLoyaltyBadgeID', BadgeCount_Event); 
            Dashboard_updateBadge_AyohaMerchantLoyaltyCampaign('txtMyAccount_Dashboard_VoucherCardLoyaltyBadgeID', BadgeCount_Voucher); 





    
            AyohaRewardPointRewardRankingStore();
            AyohaRewardContestLoadActiveStore();
           // Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore();
           Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore_Front() 
            var containerView = Ext.ComponentQuery.query('container[name=btnMyDashboard_AyohaRewardRankingContest]')[0];
            var containerViewEl = containerView.element;
            containerViewEl.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ContestAdvertisementShow();
              }
            );
    
    
    
    
    
            var containerView1 = Ext.ComponentQuery.query('container[name=containerDashboard_User_AyohaRewardRankingEnterContestBtn]')[0];
            var containerViewEl1 = containerView1.element;
            containerViewEl1.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ContestAdvertisementShow();
              }
            );
    
    
    
           
    
            // var containerView2 = Ext.ComponentQuery.query('container[name=containerDashboard_User_AyohaRewardRankingViewMyRankingBtn]')[0];
            var containerView2 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
            var containerViewEl2 = containerView2.element;
            containerViewEl2.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ViewMyRankingShow();
              }
            );
    
    
    
            var containerView3 = Ext.ComponentQuery.query('container[name=containerDashboard_User_AyohaRewardRankingViewMyRankingBtn]')[0];
            //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
            var containerViewEl3 = containerView3.element;
            containerViewEl3.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ViewMyRankingShow();
              }
            );
    
    
            var containerView4 = Ext.ComponentQuery.query('container[name=containerDashboard_User_AyohaRewardRankingBar01_Bar]')[0];
            //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
            var containerViewEl4 = containerView4.element;
            containerViewEl4.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ViewMyRankingShow();
              }
            );
    
            var containerView5 = Ext.ComponentQuery.query('container[name=containerDashboard_User_AyohaRewardRankingBar02_Bar]')[0];
            //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
            var containerViewEl5 = containerView5.element;
            containerViewEl5.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ViewMyRankingShow();
              }
            );
    
    
            var containerView6 = Ext.ComponentQuery.query('container[name=containerDashboard_User_AyohaRewardRankingBar03_Bar]')[0];
            //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
            var containerViewEl6 = containerView6.element;
            containerViewEl6.on('tap',
              function (event, node, options, eOpts) {
    
                  FloatPanel_AyohaReward_ViewMyRankingShow();
              }
            );
    

            FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbord_CountStore();
            LoadingPanelHide();
            Ext.Viewport.setMasked(false);



       
        } else {
            console.error('Failed to load store data or no record found.');
            LoadingPanelHide();
        }
    }
});














    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var modelRecord = _DataStore_DashboardAyohaUserMainStore.getAt(0);
    //     var count = _DataStore_DashboardAyohaUserMainStore.getCount();
   
    //     //  VIAAdvertismentAutoSlide();

    
    // });
    // task.delay(1100);

}


var globalJoinDate;
function AyohaRewardPointRewardRankingStore() {


    var ii = 1;
    _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setExtraParam('RankingLevel', "ALL");
    _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointRewardRanking');
    _DataStore_AyohaRewardPointRewardRankingStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_AyohaRewardPointRewardRankingStore.getCount();
        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AyohaRewardPointRewardRankingStore.getAt(i);
            var AccountName = modelRecord.get('AccountName');
            var Photo = modelRecord.get('Photo');
            var AyohaPoint = modelRecord.get('AyohaPoint');
            var SubscriberAccNo = modelRecord.get('SubscriberAccNo');
            var JoinDate_DateOnly = modelRecord.get('JoinDate_DateOnly');
            var JoinDate_TimeOnly = modelRecord.get('JoinDate_TimeOnly');



            if (ii < 4 && i < 3) {
                if (ii == 1) {


                    Ext.getCmp('imgDashboard_User_AyohaRewardRanking0' + ii).setHtml('<img src="' + Photo + '"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    Ext.getCmp('htmlDashboard_User_AyohaRewardRanking0' + ii + '_Name').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AccountName + '</b></div>');
                    Ext.getCmp('htmlDashboard_User_AyohaRewardRanking0' + ii + '_AyohaPoint').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>' + AyohaPoint + ' Point</b></div>');
                } else {
                    Ext.getCmp('imgDashboard_User_AyohaRewardRanking0' + ii).setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    Ext.getCmp('htmlDashboard_User_AyohaRewardRanking0' + ii + '_Name').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AccountName + '</b></div>');
                    Ext.getCmp('htmlDashboard_User_AyohaRewardRanking0' + ii + '_AyohaPoint').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>' + AyohaPoint + ' Point</b></div>');
                }


            }



            if (SubscriberAccNo == GetCurrAyohaUserAccountNo()) {

               myRankingNo = ii;
                // alert(JoinDate);

                globalJoinDate = JoinDate_DateOnly + ' ' + JoinDate_TimeOnly;
                //Ext.getCmp('htmlJoinContestDate').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;">Joined Date:' + JoinDate_DateOnly + '' + JoinDate_TimeOnly + '</div>');


                if (myRankingNo <= 10) {

                    if (myRankingNo == 1) {
                        //Ext.getCmp('imgDashboard_User_AyohaRewardRanking01').setHtml('<img src="' + Photo + '"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;" class="example-1">');
                        Ext.getCmp('imgDashboard_User_AyohaRewardRanking01').setHtml('<img src="' + Photo + '"  style="width: 80px; height: 80px; border:2px solid grey; border-radius: 50%;  margin:0px 0px 0px 0px;" >');
                    }

                    if (myRankingNo == 2) {
                        //Ext.getCmp('imgDashboard_User_AyohaRewardRanking02').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;" class="example-1">');
                        Ext.getCmp('imgDashboard_User_AyohaRewardRanking02').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:2px grey; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    }
                    if (myRankingNo == 3) {
                        // Ext.getCmp('imgDashboard_User_AyohaRewardRanking03').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;"  class="example-1">');
                        Ext.getCmp('imgDashboard_User_AyohaRewardRanking03').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:2px solid grey; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    }
                    Ext.getCmp('htmlContestYourRanking').setHtml('<div  class="blink_me" style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Hooray You in Ranking !</div>');
                    Ext.getCmp('htmlContestYourRankingNo').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">' + myRankingNo + '</div>');

                } else {
                    Ext.getCmp('htmlContestYourRankingNo').setHtml('<div style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">' + myRankingNo + '</div>');
                    Ext.getCmp('htmlContestYourRanking').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Your Ranking !</div>');
                }


            }

            ii++;

        }
















        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

}




var globalContestAdvertisementImgPath;
var globalContestEndDateDateOnly;
var globalFirstPrizeImgPath;
var globalFirstPrizeImgName;
var globalSecondPrizeImgPath;
var globalSecondPrizeImgName;
var globalThirdPrizeImgPath;
var globalThirdPrizeImgName;
var globalConsolationPrizeImg;
var globalConsolationPrizeName;

function AyohaRewardContestLoadActiveStore() {


    //Ext.getStore('AyohaRewardContestLoadActiveStore').getProxy().setExtraParams({
    //    RowStatus: "Active",
    //});
    //Ext.StoreMgr.get('AyohaRewardContestLoadActiveStore').load();

    _DataStore_AyohaRewardContestLoadActiveStore.getProxy().setExtraParam('RowStatus', "Active");
    _DataStore_AyohaRewardContestLoadActiveStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadActive');
    _DataStore_AyohaRewardContestLoadActiveStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaRewardContestLoadActiveStore').getProxy().setExtraParams({
        //    RowStatus: "Active",
        //});
        //Ext.StoreMgr.get('AyohaRewardContestLoadActiveStore').load();
        //var myStore = Ext.getStore('AyohaRewardContestLoadActiveStore');
        var count = _DataStore_AyohaRewardContestLoadActiveStore.getCount();
        var modelRecord = _DataStore_AyohaRewardContestLoadActiveStore.getAt(0);


        if (count >= 1) {
            var ContestCode = modelRecord.get('ContestCode');
            var EndDate_DateOnly = modelRecord.get('EndDate_DateOnly');
            globalWinnerAnnoucementStatus = modelRecord.get('WinnerAnnoucementStatus');
            globalTodayDateSvr = modelRecord.get('TodayDateSvr');
            globalFirstPrizeImgPath = modelRecord.get('FirstPrizeImgPath');
            globalFirstPrizeImgName = modelRecord.get('FirstPrizeImgName');

            globalSecondPrizeImgPath = modelRecord.get('SecondPrizeImgPath');
            globalSecondPrizeImgName = modelRecord.get('SecondPrizeImgName');


            globalThirdPrizeImgPath = modelRecord.get('ThirdPrizeImgPath');
            globalThirdPrizeImgName = modelRecord.get('ThirdPrizeImgName');


            globalConsolationPrizeImg = modelRecord.get('ConsolationPrizeImg');
            globalConsolationPrizeName = modelRecord.get('ConsolationPrizeName');


            globalContestEndDateDateOnly = EndDate_DateOnly;
            globalContestAdvertisementImgPath = modelRecord.get('AdvertisementImgPath');
            localStorage.setItem("ContestCode", ContestCode);
            localStorage.setItem("WinnerAnnoucementStatus", globalWinnerAnnoucementStatus);
            localStorage.setItem("TodayDateSvr", globalTodayDateSvr);
            localStorage.setItem("EndDateContest", EndDate_DateOnly);



            //Ext.getCmp('htmlJoinContestDate').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;">Contest End Date:' + EndDate_DateOnly + '</div>');
            // Ext.getCmp('htmlJoinContestDate').setHtml('<div style="color:black;text-align: center;font-size:14px;width:100%;">Contest End Date:' + EndDate_DateOnly + '</div>');

            // localStorage.setItem("ContestEndDateDateOnly", EndDate_DateOnly);





            AyohaRewardContestantLoadByContestCodeStore();
        }


        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

}



var globalIsContestant = "N";

function AyohaRewardContestantLoadByContestCodeStore() {
    globalIsContestant = "N";
    NextRanking();
    //Ext.getStore('AyohaRewardContestantLoadByContestCodeStore').getProxy().setExtraParams({
    //    ContestCode: localStorage.getItem("ContestCode"),
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaRewardContestantLoadByContestCodeStore').load();

    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setExtraParam('ContestCode', localStorage.getItem("ContestCode"));
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadByContestCode');
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AyohaRewardContestantLoadByContestCodeStore').getProxy().setExtraParams({
        //    ContestCode: localStorage.getItem("ContestCode"),
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        //});
        //Ext.StoreMgr.get('AyohaRewardContestantLoadByContestCodeStore').load();
        //var myStore = Ext.getStore('AyohaRewardContestantLoadByContestCodeStore');
        var count = _DataStore_AyohaRewardContestantLoadByContestCodeStore.getCount();
        console.log(count);
        //var modelRecord = myStore.getAt(0);
        //var ID = modelRecord.get('ID');
        AppState.FloatPanel_AyohaReward.isButtonEnterContestOrViewMyRanking="EnterContest";
        Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(false);
        Ext.getCmp('containerDashboard_User_AyohaRewardRankingViewMyRankingBtnID').setHidden(true);

        Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(false);
        Ext.getCmp('imgMyDashboard_AyohaRewardRankingContest').setHidden(false);
        Ext.getCmp('imgMyDashboard_AyohaRewardRankingContestShining').setHidden(true);
        Ext.getCmp('containerContestEndDate').setHidden(false);
        //Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('220 0 0 0');
      //  Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('100 0 0 0');

        // Ext.getCmp('containerDashboard_MerchantRedemption').setMargin('90 0 0 0');
        if (count >= 1) {
            globalIsContestant = "Y";
            AppState.FloatPanel_AyohaReward.isButtonEnterContestOrViewMyRanking="ViewMyRanking";
            Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(true);
            Ext.getCmp('containerDashboard_User_AyohaRewardRankingViewMyRankingBtnID').setHidden(false);

            Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(true);
            Ext.getCmp('imgMyDashboard_AyohaRewardRankingContest').setHidden(true);
            Ext.getCmp('imgMyDashboard_AyohaRewardRankingContestShining').setHidden(false);
            Ext.getCmp('containerContestEndDate').setHidden(false);

            //  Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('220 0 0 0');
            // Ext.getCmp('containerDashboard_MerchantRedemption').setMargin('120 0 0 0');
           // Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('100 0 0 0');

        }
        AyohaRewardContest_Extended();
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

}

var globalDashboard_AyohaTapContestImg;
var globalDashboard_AyohaTapContestCode;

function AyohaRewardContest_Extended() {

    var count = _DataStore_AyohaRewardContestLoadActiveStore.getCount();
    var ContestCode;
    for (ii = 1; ii < count; ii++) {
        var Store = _DataStore_AyohaRewardContestLoadActiveStore.getAt(ii);
        var contestImg = Store.get('AdvertisementImgPath');
        globalDashboard_AyohaTapContestImg = contestImg;
        ContestCode = Store.get('ContestCode');
        globalDashboard_AyohaTapContestCode = Store.get('ContestCode');
        Ext.getCmp('AyohaRewardContest1').setHtml('<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="' + contestImg + '"/>');
        AppState.FloatPanel_AyohaReward.TapAndWinMainImg=contestImg;

    }

    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setExtraParam('ContestCode', ContestCode);
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadByContestCode');
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var check = _DataStore_AyohaRewardContestantLoadByContestCodeStore.getCount();
        AppState.FloatPanel_AyohaReward.isContestTapAndWinActive=_DataStore_AyohaRewardContestantLoadByContestCodeStore.getCount();
        
        Ext.getCmp('Dashboard_containerAyohaRewardContest01').setHeight(270);
        Ext.getCmp('containerDashboard_User_AyohaRewardContest01BtnID').setHidden(false);
        // Ext.getCmp('containerDashboard_MerchantRedemption').setMargin('90 0 0 0');
        if (check > 0) {

            Ext.getCmp('Dashboard_containerAyohaRewardContest01').setHeight(210);
            Ext.getCmp('containerDashboard_User_AyohaRewardContest01BtnID').setHidden(true);



        }
        Ext.Viewport.setMasked(false);

    });
    task.delay(300);


}




function onDone(err, status) {
    if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
    }
    if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.

        // window.QRScanner.show();
        window.QRScanner.show(function (status) {
            window.QRScanner.scan(displayContents);
        });
        // window.QRScanner.scan(displayContents);
    } else if (status.denied) {
        // The video preview will remain black, and scanning is disabled. We can
        // try to ask the user to change their mind, but we'll have to send them
        // to their device settings with `QRScanner.openSettings()`.
    } else {
        // we didn't get permission, but we didn't get permanently denied. (On
        // Android, a denial isn't permanent unless the user checks the "Don't
        // ask again" box.) We can ask again at the next relevant opportunity.
    }
}


function displayContents(err, text) {
    if (err) {
        // an error occurred, or the scan was canceled (error code `6`)
    } else {
        // The scan completed, display the contents of the QR code:


        var audio = new Audio();
        audio.src = 'https://setkita.com/AyohaSoundExternal/store-scanner-beep.mp3';
        audio.play();



        //var x = document.getElementById("myAudio");
        //x.play();
        //alert(text);
        Ext.getCmp('mainView').setHidden(false);
        FloatPanel_QrCodeScanner_CenterLineMessageHide();
        _FloatPanel_QrCodeScanner_ScanCampaign.hide(Ext.fx.Animation({
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'

        }));
        is_FloatPanel_QrCodeScanner_ScanCampaignOpen = 'N';
        RemovePages(_FloatPanel_QrCodeScanner_ScanCampaign, "is_FloatPanel_QrCodeScanner_ScanCampaignOpen");
        window.QRScanner.destroy(function (status) {

        });

        var n = text.includes("Point");
        if (n) {
            Scan_QRCode_VerifyQRCode_PointCampaign(text);
        } else {
            Scan_QRCode_VerifyQRCode_StampCampaign(text);
        }



    }
}







var arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point = [];
var arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage = [];
var arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName = [];
var arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice = [];
var arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode = [];
function AyohaRedeemPrize_LoadByRowStatusAndGCStore() {

    arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point.length = 0;
    arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage.length = 0;
    arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName.length = 0;
    arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice.length = 0;
    arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode.length = 0;
    var AyohaUserGroupCode = localStorage.getItem('AyohaUserGroupCode');




    //if (AyohaUserGroupCode.length > 1)
    //{
    //    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getProxy().setExtraParam('AyohaUserGroupCode', AyohaUserGroupCode);
    //    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrize/AyohaRedeemPrizeLoadByAyohaUserGroupCode');
    //    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.load();

    //}


    //if (AyohaUserGroupCode.length < 0) {
    //    console.log("sd");
    //    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getProxy().setExtraParam('AyohaUserGroupCode', "01");
    //    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrize/AyohaRedeemPrizeLoadByAyohaUserGroupCode');
    //    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.load();
    //}

    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getProxy().setExtraParam('AyohaUserGroupCode', "01");
    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrize/AyohaRedeemPrizeLoadByAyohaUserGroupCode');
    _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.load();






    var task = Ext.create('Ext.util.DelayedTask', function () {



        for (i = 0; i < 5; i++) {
            console.log(i);

            var store = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getAt(i);


            if (store != null) {
                var store = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getAt(i);
                var ItemPoint = store.get('ItemPoint');
                var ImgPath = store.get('ImgPath');
                var ItemName = store.get('ItemName');
                var ItemPrizePriceCost = store.get('ItemPrizePriceCost');
                var ItemCode = store.get('ItemCode');


                Ext.getCmp('containerAyohaRewardRedemption_carosel_APoint' + i).setHtml('<div style="color:purple;text-align: center;font-size:15px;width:100%;font-weight:bold">🎁' + ItemPoint + '- </div>');
                Ext.getCmp('containerAyohaRewardRedemption_carosel_APointImg' + i).setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="' + ImgPath + '" alt="Image" style="width:70%;height:230px;"></div>');
                Ext.getCmp('containerAyohaRewardRedemption_carosel_APointNameItemTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:15px;width:100%;font-weight:bold">' + ItemName + '</div>');
                Ext.getCmp('containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM' + ItemPrizePriceCost + '</div>');
                arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point.push(ItemPoint);
                arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage.push(ImgPath);
                arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName.push(ItemName);
                arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice.push(ItemPrizePriceCost);
                arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode.push(ItemCode);


            } else {
                console.log('tiada')
            }





        }

       // LoadingPanelHide();
      
    });
    task.delay(1000);





    //for (i = 0; i < 5; i++) {
    //    console.log(i);

    //    var store = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getAt(0);


    //    if (store != null) {
    //        var store = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getAt(0);
    //        var ItemPoint = store.get('ItemPoint');
    //        var ImgPath = store.get('ImgPath');
    //        var ItemName = store.get('ItemName');
    //        var ItemPricePrizeCost = store.get('ItemPricePrizeCost');
    //        Ext.getCmp('containerAyohaRewardRedemption_carosel_APoint' + i).setHtml('<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">' + ItemPoint + '</div>');
    //        Ext.getCmp('containerAyohaRewardRedemption_carosel_APointImg' + i).setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="' + ImgPath + '" alt="Image" style="width:70%;height:230px;"></div>');
    //        Ext.getCmp('containerAyohaRewardRedemption_carosel_APointNameItemTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">' + ItemName + '</div>');
    //        Ext.getCmp('containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM' + ItemPricePrizeCost + '</div>');

    //    } else {
    //        console.log('tiada')
    //    }





    //}

    //var task = Ext.create('Ext.util.DelayedTask', function () {

    //    //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //    var count = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCode.getCount();


    //});
    //task.delay(500);


    //Ext.Viewport.setMasked(false);
}



function Dashboard_VisitorAnalsysInsertUpdate(Modul, Adver_Code) {
    var obj = {

        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "IPAddress": "IPADDRESS",
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "AdvertisementCode": Adver_Code,
        "AccessedPlatform": "AccessedPlatform",
        "Module": Modul

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/VisitorAnalsys/VisitorAnalsysInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                console.log("Log view ayoha store success!");


            }
            else {

                console.log("Log view store Failed!");



            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });
}


var globalDashboardeWalletType;
var globalDashboardeWalletStatus;
var globalDashboardCreditLimitPerDay;
var globalDashboardDebitLimitPerDay;
var globalDashboardeWalletCurrentBalance;
var globalDashboardisUserHasEwalletAccount = "N";

function Dashboard_LoadAyohaEwallet() {
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWallet/AyohaeWalletLoadeWallet',

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
                        globalDashboardeWalletType = data.results[0].eWalletType;
                        globalDashboardeWalletStatus = data.results[0].eWalletStatus;
                        globalDashboardCreditLimitPerDay = data.results[0].CreditLimitPerDay;
                        globalDashboardDebitLimitPerDay = data.results[0].DebitLimitPerDay;
                        globalDashboardeWalletCurrentBalance = data.results[0].eWalletCurrentBalance;
                        localStorage.setItem("DashboardeWalletCurrentBalance", data.results[0].eWalletCurrentBalance);
                        localStorage.setItem("isUserHasEwalletAccount", "Y");
                        localStorage.setItem("AyohaeWalletDeviceID", data.results[0].DeviceID);
                        localStorage.setItem("AyohaeWalletisUsedDeviceID_Detection", data.results[0].isUsedDeviceID_Detection);
                        localStorage.setItem("AyohaeWalletisUsedTAC_Code", data.results[0].isUsedTAC_Code);
                        localStorage.setItem("AyohaeWalletPassCode", data.results[0].PassCode);
                        globalDashboardisUserHasEwalletAccount = "Y";
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }

                        if (isFloatPanel_AyohaStoreOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_TitleHeaderTxtAyohaEwallet').setHtml('<div  style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:-3px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-24px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                        }
                        if (isFloatPanel_AyohaeWalletOpen == 'Y') {
                            //Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div id="odometer_ewallet" class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + globalDashboardeWalletCurrentBalance + '</div>');
                            Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div id="odometer_ewallet" class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">' + globalDashboardeWalletCurrentBalance + '</div>');
                            FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();
                        }

                        //temporary of 16102025
                       // Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div  style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha eWallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div>');

                       Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div onclick="FloatPanel_AyohaeWalletShow()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">RM ' + globalDashboardeWalletCurrentBalance + '</div><br><div onclick="FloatPanel_AyohaeWalletShow()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:normal;color:black;margin:-25px 0px 0px 0px">TOP UP</div>');



                        // FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                        // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'



                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {
                        globalDashboardisUserHasEwalletAccount = "N";
                        localStorage.setItem("isUserHasEwalletAccount", "N");
                        if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet_CurrentBalanceAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM 00.00</div>');

                        }
                   //ori     Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha eWallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 14px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>');
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">RM 00.00</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 10px;font-weight:normal;color:black;margin:-25px 0px 0px 0px">TOP UP</div>');



                        
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


function initTapListener_AyohaMerchantsIcon() {





    // var ContainernamecontainerAyohaMerchant_seeMore = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_seeMore]')[0];
    // var containerViewElnamecontainerAyohaMerchant_seeMore = ContainernamecontainerAyohaMerchant_seeMore.element;
    // containerViewElnamecontainerAyohaMerchant_seeMore.on('tap',
    //   function (event, node, options, eOpts) {
    //       // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('SeeMore');
    //       // FloatPanel_DashboardMerchantRewardShow();
    //       animatedClickTabExt('containerAyohaMerchant_seeMore');
    //       FloatPanel_Dashboard_AyohaMerchant_SeeMoreShow();
    //       //FloatPanel_BusinessTypeListShow();
    //   }
    // );








    // var ContainernamecontainerDashbord_MyCart = Ext.ComponentQuery.query('container[name=namecontainerDashbord_MyCart]')[0];
    // var containerViewElnamecontainerDashbord_MyCart = ContainernamecontainerDashbord_MyCart.element;
    // containerViewElnamecontainerDashbord_MyCart.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_OrderCartShow();
    //   }
    // );



    // var ContainernamecontainerDashbord_AyohaHotMerchant_MyCart = Ext.ComponentQuery.query('container[name=namecontainerDashbord_AyohaHotMerchant_MyCart]')[0];
    // var containerViewElnamecontainerDashbord_AyohaHotMerchant_MyCart = ContainernamecontainerDashbord_AyohaHotMerchant_MyCart.element;
    // containerViewElnamecontainerDashbord_AyohaHotMerchant_MyCart.on('tap',
    //   function (event, node, options, eOpts) {
    //       FloatPanel_OrderCartShow();
    //   }
    // );
}

var globalDashboard_;

function Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore() {

    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setExtraParam('VoucherType', "AyohaVoucher");
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherType');

    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
               // var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getCount();
                var count =records.length;
                AppState.FloatPanel_AyohaReward.AyohaVoucherCount=records.length;
                Ext.getCmp('Dashboard_AyohaVoucherListID').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore);
        
                if (count < 1) {
                    Ext.getCmp('htmlDashboard_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">(0) Ayoha Vocher Left!</div>');
                }
        
                if (count == 1) {
                    Ext.getCmp('htmlDashboard_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold"><font class="blink_me" size=4x>(' + count + ')</font> Redeemable Ayoha Voucher!</div>');
                }
        
                if (count > 1) {
                    Ext.getCmp('htmlDashboard_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold"><font class="blink_me" size=4x>(' + count + ')</font> Redeemable Ayoha Voucher!</div>');
                }
                Dashboard_AyohaHotMerchantSet01();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });









    // _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    // _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setExtraParam('VoucherType', "AyohaVoucher");
    // _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherType');

    // _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.load();



    // var task = Ext.create('Ext.util.DelayedTask', function () {



    //     //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //     var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getCount();
    //     Ext.getCmp('Dashboard_AyohaVoucherListID').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore);

    //     if (count < 1) {
    //         Ext.getCmp('htmlDashboard_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">(0) Ayoha Vocher Left!</div>');
    //     }

    //     if (count == 1) {
    //         Ext.getCmp('htmlDashboard_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold"><font class="blink_me" size=4x>(' + count + ')</font> Redeemable Ayoha Voucher!</div>');
    //     }

    //     if (count > 1) {
    //         Ext.getCmp('htmlDashboard_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold"><font class="blink_me" size=4x>(' + count + ')</font> Redeemable Ayoha Voucher!</div>');
    //     }
    //     Dashboard_AyohaHotMerchantSet01();
    // });
    // task.delay(1000);

}


var globalDashboard_AyohaHotMerchant_EnterpriseName;
var globalDashboard_AyohaHotMerchant_EnterpriseLogo;
var globalDashboard_AyohaHotMerchant_EnterpriseAccNo;
var globalDashboard_AyohaHotMerchant_EnterpriseTagLine;
function Dashboard_AyohaHotMerchantSet01() {
    //  background-image: url(https://scx1.b-cdn.net/csz/news/800/2017/theoreticala.jpg); background-size: 100% 400px;background-repeat: no-repeat;


    _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore.getProxy().setExtraParam('AyohaHotMerchant_Status', "Approved");
    _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaHotMerchant/AyohaHotMerchantLoadByAyohaHotMerchantStatus');
    _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore.load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        // var Store = _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore.getAt(0);

        arrAyohaHotMerchantEnterpriseAccNo.length = 0;
        for (i = 0; i < _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore.getCount() ; i++) {
            var Store = _DataStore_AyohaHotMerchantLoadByAyohaHotMerchantStatusStore.getAt(i);

            //  Ext.getCmp('Dashboard_VideoAyohaHotMerchant'+i).setPosterUrl(Store.get('AyohaHotMerchant_CoverImgVideoUrl'));
            Ext.getCmp('Dashboard_VideoAyohaHotMerchant' + i).setUrl(Store.get('AyohaHotMerchant_VideoUrl'));
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_EnterpriseLogo' + i).setHtml('<div class="blink_me"><img src="' + Store.get('EnterpriseLogoPath') + '" width="30" height="30" alt="Company Name"></div>');
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_EnterpriseName' + i).setHtml('<div class="blink_me" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:5px 0px 0px 0px">' + Store.get('EnterpriseName') + '</div><br><div class="blink_me" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;margin:-27px 0px 0px 0px">' + Store.get('EnterpriseTagLine') + '</div>');
            globalDashboard_AyohaHotMerchant_EnterpriseName = Store.get('EnterpriseName');
            globalDashboard_AyohaHotMerchant_EnterpriseLogo = Store.get('EnterpriseLogoPath');
            globalDashboard_AyohaHotMerchant_EnterpriseTagLine = Store.get('EnterpriseTagLine');
            // Dashboard_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore(Store.get('EnterpriseAccNo'));
            arrAyohaHotMerchantEnterpriseAccNo.push(Store.get('EnterpriseAccNo'))

        }




        //arrAyohaHotMerchantEnterpriseAccNo













        // document.getElementById('ext-element-243').className = 'x-videoExt-ghost';
        // //document.getElementById('ext-element-115').className = 'marqueeExt';
        // document.getElementById('ext-element-246').className = 'marqueeExt';
        // document.getElementById('containerHotItem_HotMerchant').className = 'track';




    });
    task.delay(500);


    Ext.Viewport.setMasked(false);



}

var arrAyohaHotMerchantEnterpriseAccNo = [];


var arrAyohaHotMerchant_eStoreName = [];
var arrAyohaHotMerchant_eStoreLogo = [];
var arrAyohaHotMerchant_eStoreLink = [];
var Dashboard_AyohaHotMerchantSet03_Timer;
function Dashboard_AyohaHotMerchantSet02(EnterpriseAccNo) {
    globalFloatPanel_AyohaStore_ModuleTagging = "Dashboard_AyohaHotMerchant";
    globalDashboard_AyohaHotMerchant_EnterpriseAccNo = EnterpriseAccNo;
    _DataStore_EnterprisesContactUsLinkStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesContactUsLinkStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesContactUsLink');
    _DataStore_EnterprisesContactUsLinkStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Store = _DataStore_EnterprisesContactUsLinkStore.getAt(0);




        if (Store.get('PICContactNo') != "NA") {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Wassap').setHidden(true);
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Wassap').setHtml('<div onclick="Dashboard_AyohaHotMerchant_OpenWhatsApp(' + "'" + Store.get('PICContactNo') + "'" + ')"><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"/></div>');

        } else {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Wassap').setHidden(true);
        }


        if (Store.get('EnterpriseFacebook') != "NA") {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_FB').setHidden(false);
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_FB').setHtml('<div onclick="Dashboard_AyohaHotMerchant_OpenFB(' + "'" + Store.get('EnterpriseFacebook') + "'" + ')" ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>');


        } else {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_FB').setHidden(true);
        }

        if (Store.get('EnterpriseInstagram') != "NA") {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Insta').setHidden(false);
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Insta').setHtml('<div onclick="Dashboard_AyohaHotMerchant_OpenInsta(' + "'" + Store.get('EnterpriseInstagram') + "'" + ')" ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>');
        } else {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Insta').setHidden(true);
        }
        if (Store.get('EnterpriseCoordinate') != "NA") {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Location').setHidden(false);
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Location').setHtml('<div onclick="Dashboard_AyohaHotMerchant_OpenLocation(' + "'" + Store.get('EnterpriseCoordinate') + "'" + ')"><img src="resources/icons/locationThree.png" width="22" height="22" alt="Company Name"></div>');
        } else {
            Ext.getCmp('htmlDashboard_AyohaHotMerchant_Location').setHidden(true);
        }

        //id: 'htmlDashboard_AyohaHotMerchant_eStoreName',
        //html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>Kiah Store</b></font></div></div>',
        arrAyohaHotMerchant_eStoreName.length = 0;
        arrAyohaHotMerchant_eStoreLogo.length = 0;
        arrAyohaHotMerchant_eStoreLink.length = 0;
        for (i = 0; i < _DataStore_EnterprisesContactUsLinkStore.getCount() ; i++) {
            var Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(i);

            arrAyohaHotMerchant_eStoreName.push(Stores.get('eStoreName'));
            arrAyohaHotMerchant_eStoreLogo.push(Stores.get('eStoreIconPath'));
            arrAyohaHotMerchant_eStoreLink.push(Stores.get('OnlineStoreUrl'));
        }


        clearInterval(Dashboard_AyohaHotMerchantSet03_Timer);
        Dashboard_AyohaHotMerchantSet03();
    });
    task.delay(1000);


    Ext.Viewport.setMasked(false);
}



function Dashboard_AyohaHotMerchantSet03() {
    var i = 0;
    var interval = parseInt(2000);

    //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
    Dashboard_AyohaHotMerchantSet03_Timer = setInterval(function () {





        Ext.getCmp('htmlDashboard_AyohaHotMerchant_eStoreIcon').setHtml('<div onclick=" FloatPanel_AyohaHotMerchant_OnlineStoreListShow();" class="blink_me"><img src="' + arrAyohaHotMerchant_eStoreLogo[i] + '" width="38" height="38" alt="Company Name"></div>');
        Ext.getCmp('htmlDashboard_AyohaHotMerchant_eStoreName').setHtml('<div onclick=" FloatPanel_AyohaHotMerchant_OnlineStoreListShow();" class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + arrAyohaHotMerchant_eStoreName[i] + '</b></font></div></div>');
        if (i == _DataStore_EnterprisesContactUsLinkStore.getCount() - 1) {
            i++;
            i = 0;

        } else {
            i++;
        }




    }, interval);
}


function Dashboard_AyohaHotMerchant_OpenFB(FBLink) {

    setTimeout(function () { window.open("fb://page/" + FBLink + "", '_system'); return false; }, 25);
}

function Dashboard_AyohaHotMerchant_OpenInsta(InstaLink) {

    setTimeout(function () { window.open("instagram://user?username=" + InstaLink + "", '_system'); return false; }, 25);
}

function Dashboard_AyohaHotMerchant_OpenLocation(Location) {

    var Coordinate = Location.split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];





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



function Dashboard_AyohaHotMerchant_OpenWhatsApp(PIC) {

    window.open("https://api.whatsapp.com/send?phone=" + PIC + "&text=Hi", '_system'); return false;


}

function DashboardAyohaPointRedemption_openRedeemItem(idx) {
    var Point = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point[idx];
    var ItemImage = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[idx];
    var ItemName = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[idx];
    var ItemPrice = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[idx];
    var ItemCode = arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemCode[idx];
    FloatPanel_AyohaPointRedemption_RedeemShow(Point, ItemImage, ItemName, ItemPrice, ItemCode);
}


function Dashboard_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore(EnterpriseAccNo, idx) {


    console.log('Dashboard_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore:' + EnterpriseAccNo);
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getProxy().setExtraParam('ItemCategoryCode', "firstload");
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByEnterpriseAccNoHotItem');
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Store = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getAt(0);
        //alert(_DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getCount());


        //arrAyohaHotMerchant_eStoreName.length = 0;
        //arrAyohaHotMerchant_eStoreLogo.length = 0;
        //arrAyohaHotMerchant_eStoreLink.length = 0;
        for (i = 0; i < _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getCount() ; i++) {
            var Stores = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore.getAt(i);

            var ItemName = Stores.get('ItemName').toLowerCase();
            var ItemPrice = Stores.get('ItemPrice');
            var ItemPriceDiscount = parseFloat(Stores.get('ItemPriceDiscount'));
            var RealItemPrice;
            if (ItemPriceDiscount > 0) {
                RealItemPrice = ItemPriceDiscount;
            } else {
                RealItemPrice = ItemPrice;
            }
            Ext.getCmp('htmlHotItem_HotMerchant' + idx + '_Img' + i).setHidden(false);
            Ext.getCmp('htmlHotItem_HotMerchant' + idx + '_Name' + i).setHidden(false);
            Ext.getCmp('htmlHotItem_HotMerchant' + idx + '_Img' + i).setHtml('<div onclick="FloatPanel_AyohaHotMerchant_HotItems_OnlineStoreListAyohaStore(' + idx + ')" ><img src="' + Stores.get('ItemCoverImg') + '" width="32" height="32" alt="Company Name"></div>');
            Ext.getCmp('htmlHotItem_HotMerchant' + idx + '_Name' + i).setHtml('<div onclick="FloatPanel_AyohaHotMerchant_HotItems_OnlineStoreListAyohaStore(' + idx + ')" style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>' + ItemName + '</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM' + RealItemPrice + '</b></font></div></div>');

            // =Stores.get('ItemCoverImg');
            //=Stores.get('ItemName');
            // =Stores.get('ItemPrice');
            // =Stores.get('ItemPriceDiscount');
        }
        // document.getElementById('ext-element-325').className = 'marqueeExt';
        // document.getElementById('containerHotItem_HotMerchant1').className = 'track';


    });
    task.delay(1000);
}

//var camalize = function camalize(str) {
//    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
//        return chr.toUpperCase();
//    });
//}






function Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore() {
if(isFloatPanel_Membership_MembershipCardHubsOpen=='N'){
    return;
}
    globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain');
    
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                var allData = records;
    
                // Store - MembershipCardFee > 0
                var storeWithFee = Ext.create('Ext.data.Store', {
                    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    data: allData.filter(function (record) {
                        return record.get('MembershipCardFee') > 0;
                    })
                });
    
                // Store - MembershipCardFee <= 0
                var storeFOC = Ext.create('Ext.data.Store', {
                    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    data: allData.filter(function (record) {
                        return record.get('MembershipCardFee') <= 0;
                    })
                });
    
                // Store - Top Rated (3.5 stars and above, sorted descending)
                var storeTopRated = Ext.create('Ext.data.Store', {
                    model: 'BuskartApp.model.MembershipCard.MembershipCardModel',
                    data: allData
                        .filter(function (record) {
                            var star = record.get('CountStar');
                            return star !== null && star !== undefined && star >= 3.5;
                        })
                        .sort(function (a, b) {
                            return b.get('CountStar') - a.get('CountStar');
                        })
                });
    
                // Set stores to list components
                Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardList').setStore(storeFOC);
                Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardListDesignOne').setStore(storeWithFee);
                Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardListDesignTwo').setStore(storeTopRated);
    
                console.log('Stores updated based on loaded membership card data.');
            } else {
                console.log('Failed to load membership card data or no records returned.');
            }
        }
    });
    










}


function Dashboard_MembershipCardHub(){

  
    Ext.getCmp('container_DashboardMembershipCardHubs_Main').setHidden(false);
    Ext.getCmp('containerDashboard_AyohaRewardHomeMainContainer').setHidden(true);
    
    
    
}

function Dashboard_AyohaRewardHome(){

   
    Ext.getCmp('container_DashboardMembershipCardHubs_Main').setHidden(true);
    Ext.getCmp('containerDashboard_AyohaRewardHomeMainContainer').setHidden(false);
    
    
    
}






var carouselDasboardPremiumAdvertisement;
var ArrAdvertisementCodePremiumAdvertisment = [];
var ArrAdvertisementPremium_CompanyLogo = [];
var ArrAdvertisementPremium_CompanyName = [];
var ArrAdvertisementPremium_AdvertisementTitle = [];
var ArrAdvertisementPremium_EnterpriseAccNo = [];
var ArrAdvertisementPremium_AdvertisementCode = [];
function loadAdvertisementloadPremiumAdvertisment() {
    AdvertismentTypeTag = 'PremiumAdvertisement';
    _DataStore_AdvertisementloadPremiumAdvertisementStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadPremiumAdvertisment');   
    _DataStore_AdvertisementloadPremiumAdvertisementStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('loadAdvertisementloadPremiumAdvertisment loaded successfully, total records: ' + records.length);    
                // var record = records[0]; // Access only the first record
                // var planCode = record.get('PaymentPlanCode'); 
                var count = _DataStore_AdvertisementloadPremiumAdvertisementStore.getCount();

                carouselDasboardPremiumAdvertisement = Ext.getCmp('mainDashboardCarousel_PremiumAdvertisement');
                ArrAdvertisementCodePremiumAdvertisment.length = 0;
        
                ArrAdvertisementPremium_CompanyLogo.length = 0;
                ArrAdvertisementPremium_CompanyName.length = 0;
                ArrAdvertisementPremium_AdvertisementTitle.length = 0;
                ArrAdvertisementPremium_EnterpriseAccNo.length = 0;
                
        
                for (i = 0; i < count; i++) {
                    var modelRecord = _DataStore_AdvertisementloadPremiumAdvertisementStore.getAt(i);
        
                    var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
                    var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
                    var MediaType = modelRecord.get('MediaType');
                    var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
                    var EnterpriseName = modelRecord.get('EnterpriseName');
                    var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
                    var AdvertisementCode = modelRecord.get('AdvertisementCode');
                    var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
        
                    ArrAdvertisementCodePremiumAdvertisment.push(AdvertisementCode);
                    ArrAdvertisementPremium_CompanyLogo.push(EnterpriseLogoPath);
                    ArrAdvertisementPremium_CompanyName.push(EnterpriseName);
                    ArrAdvertisementPremium_AdvertisementTitle.push(AdvertisementTitle);
                    ArrAdvertisementPremium_EnterpriseAccNo.push(EnterpriseAccNo);
                 
        
                    
                    if (MediaType == "Image") {
                        carouselDasboardPremiumAdvertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: 370, width: '100%', mode: 'image', margin: '-10 0 0 0' });
                       // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
                    }
                    //margin: '-10 0 0 0'
                    if (MediaType == "Video") {
                        carouselDasboardPremiumAdvertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: 370, width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: true, enableControls: true, margin: '7 0 0 0' });
        
                    }
        
                 
                }
                

           
            } else {
                console.error('Failed to load store data or no record found.');
               
            }
        }
    });











    // var task = Ext.create('Ext.util.DelayedTask', function () {
    

       






    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(1000);

}






function Dashboard_CalculateRating(EnterpriseAccNo,EnterpriseLogo,EnterpriseName) {
   


    globalFloatPanelMerchantDetailPage_EnterpriseAccNo=EnterpriseAccNo;
    globalFloatPanelMerchantDetailPage_EnterpriseLogo= EnterpriseLogo;
    globalFloatPanelMerchantDetailPage_EnterpriseName= EnterpriseName;

    
   

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

                            Ext.getCmp('htmlDashbord_ReviewAndRateCount_PremiumAdvertisement').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');

                        } else {
                            Ext.getCmp('htmlDashbord_ReviewAndRateCount_PremiumAdvertisement').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="color:white;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                        }

                        Ext.getCmp('htmlDashbord_ReviewByCount_PremiumAdvertisement').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:white;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;' + TotalVoter + ' Reviews</div>');

                        //  Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp; Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);
                        globalFloatPanelMerchantDetailPage_CountReviewer= TotalVoter;
                        globalFloatPanelMerchantDetailPage_CountStar=TotalAvg.toFixed(1);
                      

                        if (RateReviews == 5) {

                            Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('htmlDashbord_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlDashbord_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


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



function Dashboard_AyohaStore() {
    globalFloatPanel_AyohaStore_ModuleTagging = "Dashboard_AyohaStore";
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';





    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);

    
   // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();

    console.log(globalFloatPanelMerchantDetailPage_EnterpriseAccNo)
    console.log(GetCurrAyohaUserAccountNo())


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
      //  FloatPanel_OrderCartHide();
        FloatPanel_RewardStore_OpenStore_FromFloatPanelMerchantDetailPage_OnlineStoreList(ID);
    
        LoadingPanelHide();
        

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}



function openPremiumAdvertisement(AdvertisementCode,CompanyLogo, CompanyName, AdvertisementTitle, EnterpriseAccNo) {
   
    globalFloatPanel_AyohaStore_ModuleTagging = "PremiumAdvertisement";
    localStorage.setItem("Dashboard_AdvertismentCode",AdvertisementCode);


    Dashboard_PreviewAdvertisementShow("Dashboard_PremiumAdvertisement", CompanyLogo,CompanyName, AdvertisementTitle, EnterpriseAccNo);
  //  FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewAdvertisement", ArrAdvertisementHotseat_CompanyLogo[0], ArrAdvertisementHotseat_CompanyName[0], ArrAdvertisementHotseat_AdvertisementTitle[0], ArrAdvertisementHotseat_EnterpriseAccNo[0]);


}


function Dashboard_PreviewAdvertisementShow(Module, EnterpriseLogoPath, EnterpriseName, AdvertisementTitle,EnterpriseAccNo) {
    // function FloatPanel_PreviewAdvertisementShow(Module) {
     Ext.Viewport.remove(_FloatPanel_PreviewAdvertisement);
     this.overlay = Ext.Viewport.add(FloatPanel_PreviewAdvertisement());
     this.overlay.show();
     AddRoutePages("FloatPanel_PreviewAdvertisementHide()");
     isFloatPanel_PreviewAdvertisementOpen = 'Y';
     //_FloatPanel_PreviewAdvertisement_isFirstLoad = 'N';
     Ext.getCmp('containerFloatPanel_Advertisement_CaptionText').setHidden(true);
     MoveCountSwipe = 0;
     swipeDirection = 'Left';
     globalFloatPanel_PreviewAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
     globalFloatPanel_PreviewAdvertisement_EnterpriseName = EnterpriseName;
     globalFloatPanel_PreviewAdvertisement_AdvertisementTitle = AdvertisementTitle;
     globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
     AdvertismentTypeTag = 'PremiumAdvertisement';
     //carousel.add({ xtype: 'image', src: 'image URL' });
     //carousel.add({ xtype: 'image', src: 'image URL' });
     //carousel.add({ xtype: 'image', src: 'image URL' });
     Ext.getCmp('btnFloatPanel_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="background-color:white;width: 60px; height: 60px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
   //  Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>')
     Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyName').setHtml('<div style="color:white;text-align: left;font-size:16px;width:95%;font-weight:bold;border-bottom:1px none white;">' + EnterpriseName + '</div>');
     Ext.getCmp('htmlFloatPanel_PreviewAdvertisement_CompanyTagLine').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
 
     Load_FloatPanel_PreviewAdvertisement_AdvertisementloadMediaPreviewStore(Module, EnterpriseAccNo);
   
 
     
 
 }




function updateProgress(current, target){
  const pct = Math.max(0, Math.min(100, (current/target)*100));
  const bar   = document.getElementById('tierBar');
  const label = document.getElementById('tierLabel');
  if (!bar || !label) return; // safety

  bar.style.width = pct + '%';
  label.textContent = `${current.toLocaleString()} / ${target.toLocaleString()}`;
  const progressEl = document.querySelector('.progress');
  if (progressEl) progressEl.setAttribute('aria-valuenow', String(current));
}



function NextRanking(){
    const currentPoints = globalDashboard_AyohaPoint;
    const nextTierPoints = DashboardAyohaMember_NextRankPoint;
    updateProgress(currentPoints, nextTierPoints);

    // Optional: animate count-up
    let val = 0, step = Math.ceil(currentPoints / 60);
    const timer = setInterval(() => {
      val = Math.min(currentPoints, val + step);
      updateProgress(val, nextTierPoints);
      if (val >= currentPoints) clearInterval(timer);
    }, 16);
}





function Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore_Front() {

    globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain');
   // _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load();
   
 
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
             
                var count = parseInt(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getCount());
                Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardList_front').setStore(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore);
               // alert(count);
        
                LoadingPanelHide();
                console.log('Stores updated based on loaded membership card data.');
                Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStore_Front();
            } else {
                console.log('Failed to load membership card data or no records returned.');
                Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStore_Front()
            }
        }
    });










    // var task = Ext.create('Ext.util.DelayedTask', function () {

      

    // });
    // task.delay(500);


    Ext.Viewport.setMasked(false);
}






function Dashboard_SearchMerchantList_EnterprisesLoadAyohaMerchantListStore_Front() {
  


    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('RowStatus', 'Active');
    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantList');
    // _DataStore_EnterprisesLoadByMerchantCategory.load();

    
    _DataStore_EnterprisesLoadByMerchantCategory_temp_front.getProxy().setExtraParam('RowStatus', 'Active');
    _DataStore_EnterprisesLoadByMerchantCategory_temp_front.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory_temp_front.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadAyohaMerchantList');
  //  _DataStore_EnterprisesLoadByMerchantCategory_temp.load();



  _DataStore_EnterprisesLoadByMerchantCategory_temp_front.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
             //   id: 'DashboardMain_SearchMerchantListLoadAllStoreID'
                Ext.getCmp('DashboardMain_SearchMerchantListLoadAllStoreID').setStore(_DataStore_EnterprisesLoadByMerchantCategory_temp_front);
                Dashboard_LoadLastCheckIn();
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });











  


    Ext.Viewport.setMasked(false);
}


function Dashboard_ayoharedeem_page(){
    //FloatPanel_AyohaRewardShow();
  Ext.getCmp('mainView').setActiveItem(2);
}



function Dashboard_LoadLastCheckIn(){
    _DataStore_EnterprisesLoadLastCheckInStore.getProxy().setExtraParam('EnterpriseAccNo', 'NA');
    _DataStore_EnterprisesLoadLastCheckInStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadLastCheckInStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/Enterprises_LoadLastCheckIn');
    
    _DataStore_EnterprisesLoadLastCheckInStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              //  console.log('Store loaded successfully, total records: ' + records.length);
                var record = records[0]; // Access only the first record
                var RelativeCheckInTime = record.get('RelativeCheckInTime');
                var AyohaRewardPointCheckIn = record.get('AyohaRewardPointCheckIn');
                var CheckInCount = record.get('CheckInCount');


               AppState.MainDashboard.MainDashboardRelativeCheckInTime = record.get('RelativeCheckInTime');
               AppState.MainDashboard.MainDashboardAyohaRewardPointCheckIn = record.get('AyohaRewardPointCheckIn');
               AppState.MainDashboard.MainDashboardCheckInCount  = record.get('CheckInCount');


                Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setStore(_DataStore_EnterprisesLoadLastCheckInStore);
               Ext.getCmp('labelDashboard_LastCheckInTimeStamp').setHtml('<div  style="background-color:transparent;color:black;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;font-weight:normal;">'+CheckInCount+'-'+RelativeCheckInTime+'</div>');
             //   Ext.getCmp('labelDashboard_LastCheckInTimeStamp').setHtml('<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Last Check-In</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">'+RelativeCheckInTime+'</div>');
              
             Ext.getCmp('labelDashboard_LastCheckInEarnedPointToDisplay').setHtml('<div style="display:inline-block;background-color:transparent;">'+
             '<span style="display:inline-block;background:#6b21a8;color:#ffffff;font:600 10px/1.2 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;padding:1px 6px;border-radius:999px;letter-spacing:.2px;white-space:nowrap;">'+
              '+'+AyohaRewardPointCheckIn+'A.Pts'+
             '</span>'+
           '</div>');
             
                Ext.getCmp('labelDashboard_LastCheckInEarnedPointToDisplay').setHidden(false);
                Ext.getCmp('labelDashboard_LastCheckInTimeStamp').setHidden(false);
                Ext.getCmp('containerDashboard_LastCheckInTimeStamp').setHidden(false);
                Ext.getCmp('btnDashboard_CheckIn').setHidden(false);                
                Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setHeight(60);
                Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setStyle('background-color:rgba(255, 255, 255, 10);border-radius: 10px 10px 0px 0px;');
                Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setHidden(false); 
                Ext.getCmp('DashboardMain_EnterprisesLoadCheckInEmptyID').setHidden(true); 
                CoreFunction_DashboardLoadByEnterpriseAccNoStorePerk();
            
            } else {
                console.error('Failed to load store data or no record found.');
               // Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setStore(_DataStore_EnterprisesLoadLastCheckInStore);
               Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setHidden(true); 
               Ext.getCmp('DashboardMain_EnterprisesLoadCheckInEmptyID').setHidden(false); 
                Ext.getCmp('labelDashboard_LastCheckInTimeStamp').setHidden(true);
                Ext.getCmp('labelDashboard_LastCheckInEarnedPointToDisplay').setHidden(true);
                Ext.getCmp('containerDashboard_LastCheckInTimeStamp').setHidden(true);                
                Ext.getCmp('DashboardMain_EnterprisesLoadLastCheckInStoreID').setHeight(80);
                Ext.getCmp('btnDashboard_CheckIn').setHidden(true);
                CoreFunction_DashboardLoadInitialPerk();    
                // LoadingPanelHide();
            }

            

           // FloatPanel_AyohaEnterpriseRewardItem_VIEW_merchantperk_View_LoadbySubscriberAccNoStore();
        }
    });
}




