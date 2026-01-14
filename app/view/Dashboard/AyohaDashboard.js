
var detectIndex = [];
var iseWalletButtonTap = "NO";
Ext.define('BuskartApp.view.Dashboard.AyohaDashboard', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'Dashboard',
    id: 'DashboardID',
    //requires: [
    //     'BuskartApp.view.Dashboard.DashboardMerchantReward',
    //],
    // requires: [
    //     'Ext.carousel.Carousel',
    //     'Ext.util.DelayedTask',
    //     'Ext.Video'
    // ],
    config: {
        styleHtmlContent: true,
        layout: 'fit',     
        fullscreen: true,
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




















///////////////////////////////
////////////////////////////////////////////****** AYOHA REWARD DASHBOARD PAGE *****************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

{
    xtype: 'container',
    //id: 'containerMyAccount_DashboardAyohaReward',
    width: '100%',
    height: '100%',
    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
    style: "background-color: transparent;",
    //style: "background-color: #F35B57;",
    title: 'DashboardAyohaReward',
    layout: {
        type: 'vbox',
      //  align: 'stretch'
     //  pack: 'start',
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
    //listeners: {
    //    initialize: function (c) {

    //        this.element.on({
    //            swipe: function (e, node, options) {
    //                if (e.direction == "left") {
    //                    //  alert("Hey! I swipe left");
    //                    Ext.getCmp('tabpanelMyAccount_Dashboard').setActiveItem(1);

    //                }

    //                if (e.direction == "right") {
    //                    //  alert("Hey! I swipe left");
    //                    Ext.getCmp('tabpanelMyAccount_Dashboard').setActiveItem(0);

    //                }
    //            }
    //        });
    //    }
    //},


    items: [




       {

           xtype: 'container',
           width: '100%',
           height: 40,
           // width: 40,
           // docked: 'top',

           //  title: '<font size="3" color="white">Live Tracking Map</font>',
           //hidden: true,

           id: 'containerMyAccount_DashboardHeader',
           //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
           style: ' background-color:transparent;',
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
                             id: 'btnMyAccount_DashboardBack',
                             height: 35,
                             width: 35,
                             hidden: true,
                             // iconCls: 'list',
                             html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                             // html: '<div ><img src="resources/icons/ayohaewallet01.png" width="25" height="25" alt="Company Name"></div>',
                             ui: 'plain',
                             handler: function () {

                                 //_FloatPanel_AyohaEnterpriseAccount.hide(Ext.fx.Animation({
                                 //    type: 'slideOut',
                                 //    direction: 'left',
                                 //    easing: 'cubic-bezier(.7,0,.7,1)',
                                 //    duration: 250

                                 //}));
                                 //isLoyaltyCardRedeemListOpen = 'N';
                             }
                         },


                       {
                           margin: '0 0 0 0',
                           hidden: true,
                           id: 'htmlMyAccount_Dashboard_TitleHeaderTxt',
                           html: '<font size=2 color=black>Ayoha-eWallet</font><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:-5px 0px 0px 0px">RM 0.00</div>'
                           // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                       },
                               {
                                   xtype: 'panel',
                                   width: 3
                               },

                      {
                          xtype: 'container',
                          margin: '13 0 0 0',
                          zIndex: 200,
                          // hidden:true,
                          style: 'background-color:transparent;',
                          id: 'containerMyAccount_DashboardHaiUser',
                          name: 'namecontainerMyAccount_DashboardHaiUser',
                          //style: 'background-color:rgba(255,255,255, 0.8);border-radius: 10px 10px 10px 10px;',
                          //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                          // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                          height: 53,
                          width: 180,
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
                                           margin: '1 0 0 0',
                                           // iconCls: 'list',
                                           //  html: '<div ><img src="resources/icons/CloudRewardLogoWhiteSmallOne.png" width="25" height="25" alt="Company Name"></div>',
                                           html: '<div ><img src="resources/icons/founderWayang02.jpg" style ="width:45px;height:45px;border-radius:50%;border:2px solid white;" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {


                                           }
                                       },
                                       {
                                           id: 'btnMyAccount_DashboardRankIcon',
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
                                     width: 2
                                 },
                              {
                                  margin: '2 0 0 0',
                                  id: 'htmlMyAccount_Dashboard_ProfileTitle',
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Hello!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">Tarmizi</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:-27px 0px 0px 0px">Non-Ayoha Member</div>'
                                  // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                              },

                          ]
                      },





                                 {
                                     xtype: 'spacer',

                                 },
                                 {
                                     xtype: 'container',
                                     margin: '20 0 0 0',
                                     zIndex: 200,
                                     id: 'containerMyAccount_DashboardAyohaeWallet',
                                     name: 'namecontainerMyAccount_DashboardAyohaeWallet',
                                     // hidden:true,
                                     style: 'background-color:rgba(255,255,255, 0.7);border-radius: 25px 25px 25px 25px;',
                                     //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                     // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;',

                                     height: 36,
                                     width: 135,
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
                                             id: 'htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet',
                                             html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>'
                                             // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                         },

                                            {
                                                xtype: 'panel',
                                                width: 2
                                            },

                                         {
                                             xtype: 'container',
                                             style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                             height: 40,
                                             width: 40,
                                             margin: '0 0 -2 0',
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



                                     ]
                                 },






                                 //////////////////////////////

                                 //{
                                 //    margin: '0 0 0 0',
                                 //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                 //},

                                         {
                                             xtype: 'container',
                                             margin: '5 0 0 0',
                                             hidden: true,
                                             zIndex: 200,
                                             // hidden: true,
                                             //style: 'background-color: white;',
                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                             style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                             height: 25,
                                             width: 75,
                                             // margin: '70 0 0 0',
                                             id: 'containerMyAccount_DashboardHaiUserx',
                                             name: 'namecontainerMyAccount_DashboardHaiUserx',
                                             layout: {

                                                 type: 'vbox',
                                                 pack: 'center',
                                                 align: 'center'
                                             },
                                             items: [


                                                 {
                                                     margin: '2 0 0 0',
                                                     zIndex: 200,
                                                     id: 'htmlMyAccount_DashboardHaiUser',
                                                     html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                 },
                                                 {
                                                     xtype: 'container',
                                                     //   margin: '0 0 0 5',
                                                     hidden: true,
                                                     style: 'background-color: red;',
                                                     zIndex: 500,
                                                     height: 25,
                                                     width: 70,
                                                     // margin: '70 0 0 0',
                                                     id: 'containerMyAccount_DashboardeWallet',
                                                     layout: {

                                                         type: 'hbox',
                                                         pack: 'left',
                                                         align: 'left'
                                                     },
                                                     items: [
                                                          {
                                                              xtype: 'button',
                                                              id: 'btnMyAccount_DashboardeWallet',
                                                              margin: '4 0 0 8',
                                                              height: 30,
                                                              width: 35,

                                                              // iconCls: 'list',
                                                              html: '<div ><img src="resources/icons/ewalletTwo.png" width="25" height="20" alt="Company Name"></div>',
                                                              ui: 'plain',
                                                              handler: function () {
                                                                  Ayoha_eWallet();

                                                              }
                                                          },
                                                          //{
                                                          //    height: 30,
                                                          //    margin: '10 0 0 0',
                                                          //    width: 65,

                                                          //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                          //},
                                                          {
                                                              xtype: 'button',
                                                              id: 'btnMyAccount_DashboardeWalletValue',
                                                              margin: '7 0 0 2',
                                                              height: 30,
                                                              width: 65,

                                                              // iconCls: 'list',
                                                              html: '<div style="color:black;text-align: left;font-size:14px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >RM00.00</div>',
                                                              ui: 'plain',
                                                              handler: function () {
                                                                  Ayoha_eWallet();

                                                              }
                                                          },
                                                          //{
                                                          //    margin: '7 0 0 2',

                                                          //}
                                                     ]
                                                 },

                                             ]
                                         },
                                      {
                                          xtype: 'container',
                                          margin: '5 0 0 -5',
                                          zIndex: 200,
                                          hidden: true,
                                          // hidden: true,
                                          //style: 'background-color: white;',
                                          style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                          height: 35,
                                          width: 35,
                                          // margin: '70 0 0 0',
                                          id: 'containerMyAccount_DashboardPictureUser',
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
                                                  //badgeText: '10',
                                                  margin: '0 0 0 -8',
                                                  id: 'btnMyAccount_DashboardPicProfile',
                                                  //badgeText: "2",
                                                  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: white;border-radius: 20px 20px 20px 20px;width:35px;height:35px" ><img src="resources/icons/picprofile.png" width="30" height="30" alt="Company Name"></div>',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      if (globalPNUnread == "0") {
                                                          FloatPanel_MyAccountMasterShow();
                                                      } else {
                                                          FloatPanel_AyohaNotificationShow();
                                                      }
                                                  }
                                              },



                                          ]
                                      },



                                      {
                                          xtype: 'panel',
                                          width: 10
                                      }






                  ]

       },
       {
           xtype: 'container',
         // xtype: 'carousel',
           id: 'Dashboard_Carousel',
           name: 'nameDashboard_Carousel',
           //width: '100%',
           //height: '100%',
           width: '100%',
           height: 420,
        //    hidden:true,
          // disable:true,
         style: 'background-color:transparent',
         //  style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
          margin: '-40 0 0 0',
          // indicators: false,
           //listeners: {

             
           //    activeitemchange: function (container, newCard, oldCard, index) {
           //        // console.log('Current index:' + container.getActiveIndex());
           //        var CarouselIndex = container.getActiveIndex();
           //        console.log("CarouselIndex:" + CarouselIndex);
           //        if (CarouselIndex == 0) {
           //            document.getElementById("ext-element-244").pause();
           //            document.getElementById("ext-element-322").pause();
           //        }

           //        var Index;
           //        if (CarouselIndex > 0) {
           //            var EntAccNo = arrAyohaHotMerchantEnterpriseAccNo[CarouselIndex - 1];
           //            Index = CarouselIndex - 1;
           //            Dashboard_AyohaStoreSaleItemloadByEnterpriseAccNoHotItemStore(EntAccNo, Index);


           //            if (CarouselIndex == 1) {
           //                document.getElementById("ext-element-244").play();
           //                Ext.getCmp('Dashboard_VideoAyohaHotMerchant0').ghost.hide();
           //                Ext.getCmp('Dashboard_VideoAyohaHotMerchant0').media.show();


           //                document.getElementById("ext-element-322").pause();
           //            }
           //            if (CarouselIndex == 2) {
           //                document.getElementById("ext-element-244").pause();
           //                document.getElementById("ext-element-322").play();
           //                Ext.getCmp('Dashboard_VideoAyohaHotMerchant1').ghost.hide();
           //                Ext.getCmp('Dashboard_VideoAyohaHotMerchant1').media.show();
           //            }

           //        }



           //    },

           //},

           items: [
                 {
                     xtype: 'container',
                     //style: 'background-image: url("resources/icons/bgfront06.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                     style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    // style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                     
                     width: '100%',
                     height: 400,
                     title: 'Dashboard_AyohaReward_AyohaMerchant',
                   // style: "background-color: transparent;",
                     layout: {
                         type: 'vbox',
                         pack: 'start',
                         align: 'center'

                     },
                     items: [




                         {
                             xtype: 'panel',
                             width: '100%',
                             height: 100
                         },
                         {
                             xtype: 'container',
                             width: '100%',
                            hidden: false,
                             margin: '0 0 0 0',
                             style: 'background-color:transparent',
                             layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center',
                             },
                             items: [
//{
//                                               margin: '0 0 0 14',
//                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//                                               html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Membership Cards</b></div>'
//                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//                                           },
 {
     margin: '0 0 0 14',
     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
     html: '<div class="blink_me" style="color:black;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px -20px"><b>Membership Cards</b></div><br><div class="blink_me" style="color:black;text-align: center;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">- Latest membership card.Get It NOW!! -</div>'
     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
 },
                                           {
                                               xtype: 'spacer'
                                           },
                                           {
                                              xtype: 'button',
                                              height: 30,
                                              width: 30,
                                              margin: '3 0 0 -7',
                                            //  id: 'btnDashbordAyohaHotMerchant_SearchAyohaMerchant',
                                              //badgeText: "2",
                                              html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_Membership_MembershipCardSaleDetailShow();
                                              }
                                          },
                             ]
                         },

                          {
                              xtype: 'container',
                              width: '100%',
                              height: 400,
                              margin: '0 0 0 0',
                              //  hidden: true,
                              id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxx',
                              style: "background-color: transparent;",
                              // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                              layout: {
                                  type: 'hbox',
                                  pack: 'center',
                                  align: 'center'

                              },
                              items: [
                                  {
                                      xtype: 'container',
                                      width: '5%',
                                      height: 400,
                                      margin: '0 0 0 0',
                                      //  hidden: true,
                                      id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer01',
                                      style: "background-color: transparent;",

                                  },
                                  {

                                      id: 'Dashboard_MyAccount_UnSubscribedMembershipCardList',
                                      margin: '-30 0 0 0',
                                      //  store: _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore,
                                      // grouped: true,
                                      xtype: 'dataview',
                                      //xtype: 'list',
                                      height: 400,
                                      style: "background-color: transparent;",
                                      inline: {
                                          wrap: false
                                      },
                                      scrollable: {
                                          direction: 'horizontal',
                                          indicators: false,
                                      },
                                      width: '90%',

                                      itemTpl: '<div class="myContent" style="background-color:transparent;width:330px;height:180px;">&nbsp;&nbsp;&nbsp;<div style="margin:0px 0px 0px 0px;width:310px;height:180px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                    ////  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                   //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +

                                                   //  '{ModifiedisMembershipCardSubscribed}' +
                                                   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:0px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isMembershipCardSubscribed}' + "'" + ',' + "'" + '{MembershipCardFeePaymentCycle}' + "'" + ')" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                                 '</div></div>' +
                                                  
                                    '<br><div style="margin:5px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">RM{MembershipCardFee}<br><div style="margin:-5px 0px 0px 0px;font-size:10px;font-weight:normal">Membership Fees</div></div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px"></div></div>' +
                                                         //  '<br><div style="margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><button id="btnDashboard_Membership_AyohaStore"  style="display:inline-block;background-color: Transparent;border: none;outline:none;margin:3px 0px 0px 0px;" onClick="FloatPanel_AyohaStoreShow_FromPushNotification();"><img src={EnterprisesLogo} style="float:right;margin-right:0.5em;width: 40px; height: 40px;border-radius:50%;border: 1px solid grey;"><div style="margin:15px 50px 0px 0px;font-size:10px;font-weight:bold;font-color:blue"><u>Visit Us</u></div></button></div></div></div>',
                                                              '<br><div style="margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><div style="margin:0px 25px 0px 0px;font-size:10px;font-weight:normal;">Tap Card For Details Info</div></div></div></div>',




                                      //////itemTpl: '<div class="myContent" style="background-color:transparent;width:330px;height:190px;">&nbsp;&nbsp;&nbsp;<div style="margin:0px 0px 0px 0px;width:310px;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                       

                                      //////                  '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                      //////                                                 '</div></div>' ,
                                                                                    

                                                          //'<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                                                          // '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                                                        
                                                          // '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Membership Fees(RM)</div></div>' +
                                                          //   '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{MembershipFee}</div></div></div>',
                                                        


                                      emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

                                  },

                                   {
                                       xtype: 'container',
                                       width: '5%',
                                       height: 400,
                                       margin: '0 0 0 0',
                                       //  hidden: true,
                                       id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer02',
                                       style: "background-color: transparent;",

                                   },
                              ]
                          },



                         
















//////////////////////////                               {
//////////////////////////                                   xtype: 'panel',
//////////////////////////                                   width: '100%',
//////////////////////////                                   height: 30
//////////////////////////                               },



//////////////////////////                              {
//////////////////////////                                  xtype: 'container',
//////////////////////////                                  width: '100%',
//////////////////////////                                  hidden: false,
//////////////////////////                                  margin: '10 0 0 0',
//////////////////////////                                  // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
//////////////////////////                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//////////////////////////                                  style: 'background-color:transparent',
//////////////////////////                                  layout: {
//////////////////////////                                      type: 'hbox',
//////////////////////////                                      pack: 'center',
//////////////////////////                                      align: 'center',
//////////////////////////                                  },
//////////////////////////                                  items: [
//////////////////////////                                       {
//////////////////////////                                           margin: '10 0 0 14',
//////////////////////////                                           //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//////////////////////////                                           html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Merchants</b></div>'
//////////////////////////                                           // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//////////////////////////                                       },
//////////////////////////                                       {
//////////////////////////                                           xtype: 'spacer'
//////////////////////////                                       },
//////////////////////////                                       {
//////////////////////////                                           xtype: 'container',
//////////////////////////                                           // zIndex: 100,
//////////////////////////                                           height: 35,
//////////////////////////                                           width: 35,
//////////////////////////                                           margin: '10 0 0 0',
//////////////////////////                                           // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
//////////////////////////                                           id: 'containerDashbord_SearchAyohaMerchant',
//////////////////////////                                           name: 'namecontainerDashbord_SearchAyohaMerchant',
//////////////////////////                                           // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//////////////////////////                                           //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
//////////////////////////                                           style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
//////////////////////////                                           layout: {
//////////////////////////                                               type: 'vbox',
//////////////////////////                                               pack: 'center',
//////////////////////////                                               align: 'center'

//////////////////////////                                           },
//////////////////////////                                           items: [
//////////////////////////                                                 {
//////////////////////////                                                     xtype: 'button',
//////////////////////////                                                     height: 30,
//////////////////////////                                                     width: 30,
//////////////////////////                                                     margin: '3 0 0 -7',
//////////////////////////                                                     id: 'btnDashbord_SearchAyohaMerchant',
//////////////////////////                                                     //badgeText: "2",
//////////////////////////                                                     html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
//////////////////////////                                                     ui: 'plain',
//////////////////////////                                                     handler: function () {

//////////////////////////                                                         Dashboard_SearchMerchantListShow();
//////////////////////////                                                     }
//////////////////////////                                                 },

//////////////////////////                                       //{
//////////////////////////                                       //    margin: '0 0 0 0',
//////////////////////////                                       //    // hidden: true,
//////////////////////////                                       //    width: 20,
//////////////////////////                                       //    height: 20,
//////////////////////////                                       //    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
//////////////////////////                                       //    // ui:'plain'
//////////////////////////                                       //},


//////////////////////////                                           ]
//////////////////////////                                       },
//////////////////////////                                      {
//////////////////////////                                          xtype: 'panel',
//////////////////////////                                          width: 7
//////////////////////////                                      },
//////////////////////////                                        {
//////////////////////////                                            xtype: 'container',
//////////////////////////                                            // zIndex: 100,
//////////////////////////                                            height: 35,
//////////////////////////                                            width: 35,
//////////////////////////                                            margin: '10 0 0 0',
//////////////////////////                                            // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
//////////////////////////                                            id: 'containerDashbord_MyPurchaseHistory',
//////////////////////////                                            name: 'namecontainerDashbord_MyPurchaseHistory',
//////////////////////////                                            // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//////////////////////////                                            //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
//////////////////////////                                            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
//////////////////////////                                            layout: {
//////////////////////////                                                type: 'vbox',
//////////////////////////                                                pack: 'center',
//////////////////////////                                                align: 'center'

//////////////////////////                                            },
//////////////////////////                                            items: [
//////////////////////////                                                  {
//////////////////////////                                                      xtype: 'button',
//////////////////////////                                                      height: 30,
//////////////////////////                                                      width: 30,
//////////////////////////                                                      margin: '3 0 0 -7',
//////////////////////////                                                      id: 'btnDashbord_MyPurchaseHistory',
//////////////////////////                                                      //badgeText: "2",
//////////////////////////                                                      html: '<img src="resources/icons/purchase01.png" width="20" height="20" alt="Company Name">',
//////////////////////////                                                      ui: 'plain',
//////////////////////////                                                      handler: function () {
//////////////////////////                                                          FloatPanel_OrderHistoryShow();

//////////////////////////                                                      }
//////////////////////////                                                  },

//////////////////////////                                        //{
//////////////////////////                                        //    margin: '0 0 0 0',
//////////////////////////                                        //    // hidden: true,
//////////////////////////                                        //    width: 20,
//////////////////////////                                        //    height: 20,
//////////////////////////                                        //    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
//////////////////////////                                        //    // ui:'plain'
//////////////////////////                                        //},


//////////////////////////                                            ]
//////////////////////////                                        },
//////////////////////////{
//////////////////////////    xtype: 'panel',
//////////////////////////    width: 7
//////////////////////////},
//////////////////////////{
//////////////////////////    xtype: 'container',
//////////////////////////    zIndex: 100,
//////////////////////////    height: 35,
//////////////////////////    width: 35,
//////////////////////////    margin: '10 0 0 0',
//////////////////////////    // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
//////////////////////////    id: 'containerDashbord_MyCart',
//////////////////////////    name: 'namecontainerDashbord_MyCart',
//////////////////////////    // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//////////////////////////    //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
//////////////////////////    style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
//////////////////////////    layout: {
//////////////////////////        type: 'vbox',
//////////////////////////        pack: 'center',
//////////////////////////        align: 'center'

//////////////////////////    },
//////////////////////////    items: [

//////////////////////////{
//////////////////////////    margin: '-1 0 0 0',
//////////////////////////    id: 'htmlDashbord_OrderCart_CountbadgeText',
//////////////////////////    html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'

//////////////////////////},
//////////////////////////{
//////////////////////////    margin: '2 2 0 0',
//////////////////////////    // hidden: true,
//////////////////////////    width: 18,
//////////////////////////    height: 18,
//////////////////////////    html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:18px;height:18px;">',
//////////////////////////    // ui:'plain'
//////////////////////////},


//////////////////////////    ]
//////////////////////////},
//////////////////////////{
//////////////////////////    xtype: 'panel',
//////////////////////////    width: 20
//////////////////////////},


//////////////////////////                                  ]
//////////////////////////                              },
//////////////////////////                               {
//////////////////////////                                   xtype: 'container',
//////////////////////////                                   width: '100%',
//////////////////////////                                   // hidden: true,
//////////////////////////                                   margin: '-3 0 0 0',
//////////////////////////                                   id: 'containerDashboardBrowseAyohaMerchantCategory',
//////////////////////////                                   style: {
//////////////////////////                                       // background: '#D25959',
//////////////////////////                                       background: 'transparent',
//////////////////////////                                       // border: '2px'
//////////////////////////                                   },
//////////////////////////                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//////////////////////////                                   // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//////////////////////////                                   layout: {
//////////////////////////                                       type: 'hbox',
//////////////////////////                                       pack: 'center',
//////////////////////////                                       align: 'center',
//////////////////////////                                   },
//////////////////////////                                   items: [
//////////////////////////                                        {
//////////////////////////                                            margin: '-7 0 0 14',
//////////////////////////                                            id: 'htmlDashboardBrowseAyohaMerchantCategory',
//////////////////////////                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
//////////////////////////                                            html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">- Collect Point From our Ayoha Merchant -</div>'
//////////////////////////                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
//////////////////////////                                        },
//////////////////////////                                        {
//////////////////////////                                            xtype: 'spacer'
//////////////////////////                                        },




//////////////////////////                                   ]
//////////////////////////                               },






                             {
                                 xtype: 'container',
                                 id: 'Dashboard_CarouselInnner',
                                 name: 'nameDashboard_CarouselInner',
                                 hidden:true,
                                 //width: '100%',
                                 //height: '100%',
                                 width: '100%',
                                 height: 230,
                                 style: 'background-color:transparent',
                                 //height: '100%',
                                 //  indicator: false,
                                 // scrollable:false,
                                 //                 requires: [
                                 //'Ext.carousel.Carousel',
                                 //'Ext.util.DelayedTask',
                                 //'Ext.Video'
                                 //                 ],

                                 items: [

                                     {
                                         xtype: 'container',
                                         id: 'Dashboard_ContainerInnnerFirst',
                                         //width: '100%',
                                         //height: '100%',
                                         width: '100%',
                                         height: 230,
                                         style: 'background-color:transparent',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'start',
                                             align: 'center'

                                         },
                                         items: [
                                               {
                                                   xtype: 'container',
                                                   width: '88%',
                                                   // height: 60,
                                                   margin: '15 0 0 0',
                                                   style: "background-color: transparent;",
                                                   layout: {
                                                       type: 'hbox',
                                                       pack: 'center',
                                                       align: 'center'

                                                   },
                                                   items: [
                                                       {
                                                           xtype: 'container',
                                                           width: 70,
                                                           height: 75,
                                                           id: 'containerAyohaMerchant_Hawker',
                                                           name: 'namecontainerAyohaMerchant_Hawker',
                                                           margin: '0 0 0 0',
                                                           // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                           style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                           layout: {
                                                               type: 'vbox',
                                                               pack: 'center',
                                                               align: 'center',
                                                           },
                                                           items: [
                                                                 {
                                                                     height: 30,
                                                                     width: 30,

                                                                     margin: '5 0 0 0',
                                                                     //badgeText: "2",
                                                                     html: '<img src="resources/icons/hawker.png" width="30" height="30" alt="Company Name">',
                                                                 }, {
                                                                     margin: '5 0 0 0',
                                                                     html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Hawker</div>'
                                                                 }


                                                           ]
                                                       },
                                                       {
                                                           xtype: 'container',
                                                           width: 15,
                                                       },
                                                         {
                                                             xtype: 'container',
                                                             width: 70,
                                                             height: 75,
                                                             id: 'containerAyohaMerchant_Scaf',
                                                             name: 'namecontainerAyohaMerchant_Scaf',
                                                             margin: '0 0 0 0',
                                                             //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                             style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                   {
                                                                       height: 30,
                                                                       width: 30,

                                                                       margin: '5 0 0 0',
                                                                       //badgeText: "2",
                                                                       html: '<img src="resources/icons/hijab.png" width="30" height="30" alt="Company Name">',
                                                                   }, {
                                                                       margin: '5 0 0 0',
                                                                       html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Scaf/Hijab</div>'
                                                                   }


                                                             ]
                                                         },
                                                          {
                                                              xtype: 'container',
                                                              width: 15,
                                                          },
                                                           {
                                                               xtype: 'container',
                                                               width: 70,
                                                               height: 75,
                                                               id: 'containerAyohaMerchant_Snack',
                                                               name: 'namecontainerAyohaMerchant_Snack',
                                                               margin: '0 0 0 0',
                                                               //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'center',
                                                                   align: 'center',
                                                               },
                                                               items: [
                                                                     {
                                                                         height: 30,
                                                                         width: 30,

                                                                         margin: '5 0 0 0',
                                                                         //badgeText: "2",
                                                                         html: '<img src="resources/icons/beverageandsnack.png" width="30" height="30" alt="Company Name">',
                                                                     }, {
                                                                         margin: '5 0 0 0',
                                                                         html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Snack</div>'
                                                                     }


                                                               ]
                                                           },


                                                            {
                                                                xtype: 'container',
                                                                width: 15,
                                                            },
                                                           {
                                                               xtype: 'container',
                                                               width: 70,
                                                               height: 75,
                                                               id: 'containerAyohaMerchant_Cafe',
                                                               name: 'namecontainerAyohaMerchant_Cafe',
                                                               margin: '0 0 0 0',
                                                               //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'center',
                                                                   align: 'center',
                                                               },
                                                               items: [
                                                                     {
                                                                         height: 30,
                                                                         width: 30,

                                                                         margin: '5 0 0 0',
                                                                         //badgeText: "2",
                                                                         html: '<img src="resources/icons/kopishop.png" width="30" height="30" alt="Company Name">',
                                                                     }, {
                                                                         margin: '5 0 0 0',
                                                                         html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Coffee/Drink</div>'
                                                                     }


                                                               ]
                                                           },

                                                   ]
                                               },
                                     ////////////
                                     {
                                         xtype: 'panel',
                                         height: 20,
                                         width: '100%'
                                     },

                                     //////////
                                     {
                                         xtype: 'container',
                                         width: '88%',
                                         // height: 60,
                                         //margin:'50 0 0 0',
                                         style: "background-color: transparent;",
                                         layout: {
                                             type: 'hbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [
                                             {
                                                 xtype: 'container',
                                                 width: 70,
                                                 height: 75,
                                                 id: 'containerAyohaMerchant_CarWash',
                                                 name: 'namecontainerAyohaMerchant_CarWash',
                                                 margin: '0 0 0 0',
                                                 // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                 style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                 // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'center',
                                                     align: 'center',
                                                 },
                                                 items: [
                                                       {
                                                           height: 30,
                                                           width: 30,

                                                           margin: '5 0 0 0',
                                                           //badgeText: "2",
                                                           html: '<img src="resources/icons/carwash.png" width="30" height="30" alt="Company Name">',
                                                       }, {
                                                           margin: '5 0 0 0',
                                                           html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Car Wash</div>'
                                                       }


                                                 ]
                                             },
                                             {
                                                 xtype: 'container',
                                                 width: 15,
                                             },
                                               {
                                                   xtype: 'container',
                                                   width: 70,
                                                   height: 75,
                                                   id: 'containerAyohaMerchant_DentalClinic',
                                                   name: 'namecontainerAyohaMerchant_DentalClinic',
                                                   margin: '0 0 0 0',
                                                   //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                   style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                   // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [
                                                         {
                                                             height: 30,
                                                             width: 30,

                                                             margin: '5 0 0 0',
                                                             //badgeText: "2",
                                                             html: '<img src="resources/icons/dentalclinic.png" width="30" height="30" alt="Company Name">',
                                                         }, {
                                                             margin: '5 0 0 0',
                                                             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Dental Clinic</div>'
                                                         }


                                                   ]
                                               },
                                                {
                                                    xtype: 'container',
                                                    width: 15,
                                                },
                                                 {
                                                     xtype: 'container',
                                                     width: 70,
                                                     height: 75,
                                                     id: 'containerAyohaMerchant_Spa',
                                                     name: 'namecontainerAyohaMerchant_Spa',
                                                     margin: '0 0 0 0',
                                                     //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                     style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                     // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'center',
                                                     },
                                                     items: [
                                                           {
                                                               height: 30,
                                                               width: 30,

                                                               margin: '5 0 0 0',
                                                               //badgeText: "2",
                                                               html: '<img src="resources/icons/spa.png" width="30" height="30" alt="Company Name">',
                                                           }, {
                                                               margin: '5 0 0 0',
                                                               html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Beauty Spa</div>'
                                                           }


                                                     ]
                                                 },


                                                  {
                                                      xtype: 'container',
                                                      width: 15,
                                                  },

                                                  {
                                                      xtype: 'container',
                                                      id: 'containerAyohaMerchant_seeMore',
                                                      name: 'namecontainerAyohaMerchant_seeMore',
                                                      width: 70,
                                                      height: 75,
                                                      margin: '0 0 0 0',
                                                      //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                      style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'center',
                                                          align: 'center',
                                                      },
                                                      items: [
                                                            {
                                                                height: 30,
                                                                width: 30,

                                                                margin: '5 0 0 0',
                                                                //badgeText: "2",
                                                                html: '<img src="resources/icons/moreiconi.png" width="30" height="30" alt="Company Name">',
                                                            }, {
                                                                margin: '5 0 0 0',
                                                                html: '<div style="color:blue;text-align: center;font-size:10px;width:100%;"><u>See More</u></div>'
                                                            }


                                                      ]
                                                  },


                                         ]
                                     },
                                         ]
                                     },

                                   ///////////



                                   {
                                       xtype: 'container',
                                       id: 'Dashboard_ContainerInnnerSecond',
                                       hidden: true,
                                       //width: '100%',
                                       //height: '100%',
                                       width: '100%',
                                       height: 230,
                                       style: 'background-color:transparent',
                                       layout: {
                                           type: 'vbox',
                                           pack: 'start',
                                           align: 'center'

                                       },
                                       items: [
                                             {
                                                 xtype: 'container',
                                                 width: '88%',
                                                 // height: 60,
                                                 margin: '15 0 0 0',
                                                 style: "background-color: transparent;",
                                                 layout: {
                                                     type: 'hbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [
                                                     {
                                                         xtype: 'container',
                                                         width: 70,
                                                         height: 75,
                                                         id: 'containerAyohaMerchant_ToyShop',
                                                         name: 'namecontainerAyohaMerchant_ToyShop',
                                                         margin: '0 0 0 0',
                                                         // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                         style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                         // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'center',
                                                             align: 'center',
                                                         },
                                                         items: [
                                                               {
                                                                   height: 30,
                                                                   width: 30,

                                                                   margin: '5 0 0 0',
                                                                   //badgeText: "2",
                                                                   html: '<img src="resources/icons/toyshop.png" width="30" height="30" alt="Company Name">',
                                                               }, {
                                                                   margin: '5 0 0 0',
                                                                   html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Toys Shop</div>'
                                                               }


                                                         ]
                                                     },
                                                     {
                                                         xtype: 'container',
                                                         width: 15,
                                                     },
                                                       {
                                                           xtype: 'container',
                                                           width: 70,
                                                           height: 75,
                                                           id: 'containerAyohaMerchant_BabyShop',
                                                           name: 'namecontainerAyohaMerchant_BabyShop',
                                                           margin: '0 0 0 0',
                                                           //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                           style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                           // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                           layout: {
                                                               type: 'vbox',
                                                               pack: 'center',
                                                               align: 'center',
                                                           },
                                                           items: [
                                                                 {
                                                                     height: 30,
                                                                     width: 30,

                                                                     margin: '5 0 0 0',
                                                                     //badgeText: "2",
                                                                     html: '<img src="resources/icons/babyshop.png" width="30" height="30" alt="Company Name">',
                                                                 }, {
                                                                     margin: '5 0 0 0',
                                                                     html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Baby Shop</div>'
                                                                 }


                                                           ]
                                                       },
                                                        {
                                                            xtype: 'container',
                                                            width: 15,
                                                        },
                                                         {
                                                             xtype: 'container',
                                                             width: 70,
                                                             id: 'containerAyohaMerchant_ClothPant',
                                                             name: 'namecontainerAyohaMerchant_ClothPant',
                                                             height: 75,
                                                             margin: '0 0 0 0',
                                                             //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                             style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                   {
                                                                       height: 30,
                                                                       width: 30,

                                                                       margin: '5 0 0 0',
                                                                       //badgeText: "2",
                                                                       html: '<img src="resources/icons/FashionPurple.png" width="30" height="30" alt="Company Name">',
                                                                   }, {
                                                                       margin: '5 0 0 0',
                                                                       html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Cloth&Pans</div>'
                                                                   }


                                                             ]
                                                         },


                                                          {
                                                              xtype: 'container',
                                                              width: 15,
                                                          },
                                                         {
                                                             xtype: 'container',
                                                             width: 70,
                                                             height: 75,
                                                             id: 'containerAyohaMerchant_HandPhone',
                                                             name: 'namecontainerAyohaMerchant_HandPhone',
                                                             margin: '0 0 0 0',
                                                             //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                             style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                             // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                   {
                                                                       height: 30,
                                                                       width: 30,

                                                                       margin: '5 0 0 0',
                                                                       //badgeText: "2",
                                                                       html: '<img src="resources/icons/handphone.png" width="30" height="30" alt="Company Name">',
                                                                   }, {
                                                                       margin: '5 0 0 0',
                                                                       html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">HandPhone</div>'
                                                                   }


                                                             ]
                                                         },

                                                 ]
                                             },
                                   ////////////
                                   {
                                       xtype: 'panel',
                                       height: 20,
                                       width: '100%'
                                   },

                                   //////////
                                   {
                                       xtype: 'container',
                                       width: '88%',
                                       // height: 60,
                                       //margin:'50 0 0 0',
                                       style: "background-color: transparent;",
                                       layout: {
                                           type: 'hbox',
                                           pack: 'center',
                                           align: 'center'

                                       },
                                       items: [
                                           {
                                               xtype: 'container',
                                               width: 70,
                                               height: 75,
                                               id: 'containerAyohaMerchant_Groceries',
                                               name: 'namecontainerAyohaMerchant_Groceries',
                                               margin: '0 0 0 0',
                                               // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center',
                                               },
                                               items: [
                                                     {
                                                         height: 30,
                                                         width: 30,

                                                         margin: '5 0 0 0',
                                                         //badgeText: "2",
                                                         html: '<img src="resources/icons/groceries.png" width="30" height="30" alt="Company Name">',
                                                     }, {
                                                         margin: '5 0 0 0',
                                                         html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Groceries</div>'
                                                     }


                                               ]
                                           },
                                           {
                                               xtype: 'container',
                                               width: 15,
                                           },
                                             {
                                                 xtype: 'container',
                                                 width: 70,
                                                 height: 75,
                                                 id: 'containerAyohaMerchant_Computer',
                                                 name: 'namecontainerAyohaMerchant_Computer',
                                                 margin: '0 0 0 0',
                                                 //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                 style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                 // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'center',
                                                     align: 'center',
                                                 },
                                                 items: [
                                                       {
                                                           height: 30,
                                                           width: 30,

                                                           margin: '5 0 0 0',
                                                           //badgeText: "2",
                                                           html: '<img src="resources/icons/computershop.png" width="30" height="30" alt="Company Name">',
                                                       }, {
                                                           margin: '5 0 0 0',
                                                           html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Computer</div>'
                                                       }


                                                 ]
                                             },
                                              {
                                                  xtype: 'container',
                                                  width: 15,
                                              },
                                               {
                                                   xtype: 'container',
                                                   id: 'containerAyohaMerchant_Vape',
                                                   name: 'namecontainerAyohaMerchant_Vape',
                                                   width: 70,
                                                   height: 75,
                                                   margin: '0 0 0 0',
                                                   //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                   style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                   // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [
                                                         {
                                                             height: 30,
                                                             width: 30,

                                                             margin: '5 0 0 0',
                                                             //badgeText: "2",
                                                             html: '<img src="resources/icons/vapeshop02.png" width="30" height="30" alt="Company Name">',
                                                         }, {
                                                             margin: '5 0 0 0',
                                                             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Vape Shop</div>'
                                                         }


                                                   ]
                                               },


                                                {
                                                    xtype: 'container',
                                                    width: 15,
                                                },
                                               {
                                                   xtype: 'container',
                                                   width: 70,
                                                   height: 75,
                                                   id: 'containerAyohaMerchant_Islamicshop',
                                                   name: 'namecontainerAyohaMerchant_Islamicshop',
                                                   margin: '0 0 0 0',
                                                   //style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                                   style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                   // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center',
                                                   },
                                                   items: [
                                                         {
                                                             height: 30,
                                                             width: 30,

                                                             margin: '5 0 0 0',
                                                             //badgeText: "2",
                                                             html: '<img src="resources/icons/islamicStore02.png" width="30" height="30" alt="Company Name">',
                                                         }, {
                                                             margin: '5 0 0 0',
                                                             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">Islamic Shop</div>'
                                                         }


                                                   ]
                                               },

                                       ]
                                   },
                                       ]
                                   },

                                 ]
                             },











                         //{
                         //    width: '88%',
                         //   // margin: '10 0 0 0',
                         //   // height: 240,
                         //    //html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:break-all;color:black;margin:0px 0px 0px 0px;width:100%;text-align:center;">We give a gift return for every purchase you make at our Ayoha Merchant stores by paticipate their loyalty program.This application supports online and offline customer  - loyalty programs</div>'
                         //    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:break-all;color:black;margin:0px 0px 0px 0px;width:100%;text-align:center;">We give a gift return for every purchase you make at our Ayoha Merchant stores by paticipate their loyalty program..Hurry Up!, get ayoha merchant membership card now</div>'

                         //},
                         {
                             id: 'htmlDashboard_SearchMerchant',
                             margin: '20 0 0 0',
                             hidden: true,
                             // zIndex: -10,
                             width: '88%',
                             // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                             // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                             // original background text box color----> #f0f2f5
                             html: '<input onfocus="Dashboard_SearchMerchantListShow()" type="text" id="input-Dashboard_SearchMerchant" style="width:100%;height: 40px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 25px;background-color:white;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="Search Ayoha Merchant">',
                         },

                         {
                             xtype: 'container',
                             width: '100%',
                             hidden: true,
                             // hidden:true,
                             // height: 30,
                             margin: '25 0 0 0',
                             style: "background-color: transparent;",
                             layout: {
                                 type: 'hbox',
                                 pack: 'right',
                                 align: 'right'

                             },
                             items: [
                                 {
                                     //  id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwallet_PayNow',
                                     //margin: '-27 0 0 0',
                                     margin: '0 0 0 0',
                                     html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_BusinessTypeListShow()" class="buttonVisitAyohaMerchant">Ayoha Merchants</button></div>'



                                 },
                                 {
                                     xtype: 'panel',
                                     width: 15
                                 }
                             ]
                         },

                     ]
                 },
                 {
                     xtype: 'container',
                     id: 'container_Dashboard_AyohaReward_NewsUpdate_Header',
                     hidden:true,
                     style: 'background-image: url("resources/icons/headerbg.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                     // style: 'background-image: url(data:image/gif;base64,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"); background-size: 100% 400px;background-repeat: no-repeat;',
                     width: '100%',
                     height: 400,
                     title: 'Dashboard_AyohaReward_NewsUpdate',
                     //  style: "background-color: transparent;",
                     layout: {
                         type: 'vbox',
                         pack: 'start',
                         align: 'center'

                     },
                     items: [

   {
       xtype: 'panel',
       width: '100%',
       height: 90
   },
{
xtype: 'container',
width: '100%',
/// hidden:true,
//  margin: '60 0 0 0',
style: {
  // background: '#D25959',
  background: 'transparent',
  // border: '2px'
},
layout: {
  type: 'hbox',
  pack: 'center',
  align: 'center',
},
items: [
   {
       margin: '0 0 0 14',
       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
       html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Ayoha Hot Merchant !</b></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
   },
   {
       xtype: 'spacer'
   },





   {
       xtype: 'container',
       // zIndex: 100,
       height: 35,
       width: 35,
       margin: '-10px 0px 0px 0px',
       // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
       id: 'containerDashbordAyohaHotMerchant_SearchAyohaMerchant',
       // name: 'namecontainerDashbord_SearchAyohaMerchant',
       // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

       //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
       style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'

       },
       items: [
             {
                 xtype: 'button',
                 height: 30,
                 width: 30,
                 margin: '3 0 0 -7',
                 id: 'btnDashbordAyohaHotMerchant_SearchAyohaMerchant',
                 //badgeText: "2",
                 html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
                 ui: 'plain',
                 handler: function () {
                     Dashboard_SearchMerchantListShow();
                     // document.getElementById("ext-element-244").play();
                     // Ext.getCmp('Dashboard_VideoAyohaHotMerchant0').play();
                     //Ext.getCmp('Dashboard_VideoAyohaHotMerchant0').setEnableControls(true);
                     // Ext.getCmp('myvideos').setPosterUrl('resources/videos/skyfall_video.png');
                     // Ext.getCmp('Dashboard_VideoAyohaHotMerchant0').play();
                     // Ext.getCmp('ext-element-244').ghost.hide();
                     //Ext.getCmp('ext-element-244').media.show();
                 }
             },

   //{
   //    margin: '0 0 0 0',
   //    // hidden: true,
   //    width: 20,
   //    height: 20,
   //    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
   //    // ui:'plain'
   //},


       ]
   },

{
xtype: 'panel',
width: 7
},



{
xtype: 'container',
// zIndex: 100,
height: 35,
width: 35,
margin: '-10px 0px 0px 0px',
// id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
id: 'containerDashbordAyohaHotMerchant_MyPurchaseHistory',
// name: 'namecontainerDashbord_MyPurchaseHistory',
// name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center'

},
items: [
    {
        xtype: 'button',
        height: 30,
        width: 30,
        margin: '3 0 0 -7',
        id: 'btnDashbordAyohaHotMerchant_MyPurchaseHistory',
        //badgeText: "2",
        html: '<img src="resources/icons/purchase01.png" width="20" height="20" alt="Company Name">',
        ui: 'plain',
        handler: function () {
            FloatPanel_OrderHistoryShow();

        }
    },

//{
//    margin: '0 0 0 0',
//    // hidden: true,
//    width: 20,
//    height: 20,
//    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
//    // ui:'plain'
//},


]
},

{
xtype: 'panel',
width: 7
},



{
xtype: 'container',
// zIndex: 100,
height: 35,
width: 35,
margin: '0 0 0 0',
// id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
margin: '-10px 0px 0px 0px',
name: 'namecontainerDashbord_AyohaHotMerchant_MyCart',
// name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center'

},
items: [

{
margin: '-1 0 0 0',
id: 'htmlDashbord_AyohaHotMerchant_CountbadgeText',
html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'

},
{
margin: '2 2 0 0',
// hidden: true,
width: 18,
height: 18,
html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:18px;height:18px;">',
// ui:'plain'
},


]
},
{
xtype: 'panel',
width: 20
},



   //{

   //    margin: '0 14 0 0',
   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
   //    html: '<div onclick="FloatPanel_FloatingAdvertisementShow();" style="color:transparent;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
   //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

   //}
]
},
                          {
                              xtype: 'panel',
                              width: '100%',
                              height: 5
                          },



                          {
                              xtype: 'container',
                              width: '100%',
                              height: 210,
                              // title:'Dashboard_AyohaReward_NewsUpdateVideo',
                              style: "background-color: transparent;",
                              // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center'

                              },
                              items: [

                                  //{
                                  //    //width: '49%',
                                  //    //height: 180,
                                  //    html: '<video width="150" height="150"><source src="https://42.1.63.57/AyohaImgCard/AdvertisementVideo/CRCom-71100/aslam.mp4" type="video/mp4"></video>'
                                  //},


                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      height: 40,
                                      zIndex: 10,

                                      // docked: 'top',
                                      // width: 40,
                                      style: ' background-color:transparent;',
                                      //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      //hidden: true,

                                      id: 'containerFloatPanel_AyohaHotMerchant_OnlineStoreListHeaderx',
                                      //style: {
                                      //    // background: '#D25959',
                                      //    background: 'transparent',
                                      //    // border: '2px'
                                      //},
                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                      layout: {
                                          type: 'hbox',
                                          pack: 'left',
                                          align: 'left',
                                      },
                                      // hidden:true,
                                      items:
                                             [




                                                           {
                                                               xtype: 'spacer'
                                                           },


                                                            {
                                                                margin: '-2 0 0 0',
                                                                id: 'htmlDashboard_AyohaHotMerchant_EnterpriseName0',
                                                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                            },

                                                     {
                                                         xtype: 'button',
                                                         margin: '6 0 0 0',
                                                         //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                         height: 40,
                                                         width: 40,
                                                         // iconCls: 'list',
                                                         id: 'htmlDashboard_AyohaHotMerchant_EnterpriseLogo0',
                                                         html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore(0);
                                                             ////setTimeout(function () { window.open("tiktok://vt.tiktok.com/ZSe7QQTM1/", '_system'); return false; }, 25);
                                                             // setTimeout(function () { window.open("tiktok://ZSe7QQTM1/", '_system'); return false; }, 25);

                                                             //https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250

                                                             // setTimeout(function () { window.open("https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250", '_system'); return false; }, 25);
                                                         }
                                                     },


                                                     {
                                                         xtype: 'panel',
                                                         width: 25
                                                     }









                                             ]

                                  },
                                  {
                                      xtype: 'container',
                                      width: '93%',
                                      height: 210,
                                      margin: '-40px 0px 0px 0px',
                                      // title:'Dashboard_AyohaReward_NewsUpdateVideo',
                                      style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background:black;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                      // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center'

                                      },
                                      items: [
                                          {
                                              xtype: 'video',
                                              id: 'Dashboard_VideoAyohaHotMerchant0',
                                              margin: '3 0 0 0',
                                              //hidden:true,
                                              //width: '100%',
                                              //height: 200,
                                              // url: 'http://42.1.63.57/AyohaImgCard/AdvertisementVideo/CRCom-71100/hicVideo.mp4',
                                              //url: 'https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250',
                                              // mode: 'video',
                                              // posterUrl: 'resources/icons/coverImgHIC01.png',
                                              loop: true,
                                              enableControls: true,
                                              width: '97%',
                                              height: 200,
                                              cls: 'x-videoExt'

                                              //  align: 'stretch',

                                              //x: 100,
                                              //y:100,
                                              //cls:'x-video',
                                              // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: transparent;border-radius: 0px 0px 0px 0px;box-shadow: 5px 10px 18px #888888;',
                                              //                                    html: '<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2"></script>'+
                                              //'<div class="fb-video"'+
                                              //  'data-href="https://www.facebook.com/tarmizi.abdrahim.1/videos/356886782663940"' +
                                              //  'data-width="500"'+
                                              //  'data-allowfullscreen="true"'+
                                              //  'data-autoplay="true"'+
                                              //  'data-show-captions="true"></div>',

                                              // html: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@user3035549193796/video/6998964976341847323" data-video-id="6998964976341847323" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@user3035549193796" href="https://www.tiktok.com/@user3035549193796">@user3035549193796</a> <p>Advertise with us</p> <a target="_blank" title="♬ bunyi asal  - Atok Bush" href="https://www.tiktok.com/music/bunyi-asal-Atok-Bush-6998964762055084826">♬ bunyi asal  - Atok Bush</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>'
                                              //html: '<div style="max-width: 56vh;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 177.7778%; padding-top: 120px;"><iframe src="https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250" allow="fullscreen" style="position: absolute; top: 0px; left: 0px; height: 100%; width: 100%;"></iframe></div>',
                                              // html: '<div style="max-width: 56vh;"><div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 177.7778%; padding-top: 120px;"><iframe src="https://www.tiktok.com/embed/6998964976341847323" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div></div>'



                                              //html: '<iframe src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/AjarMalaysia/videos/490067202635699" style="border:none;overflow:hidden;height:400px;" scrolling="no" frameborder="0" allowfullscreen="false" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="false"></iframe>',
                                          },



                                            {
                                                xtype: 'container',
                                                id: 'Dashboard_AyohaHotMerchant_eStoreID',
                                                // hidden:true,
                                                width: '100%',
                                                height: 60,
                                                style: "background-color: transparent",
                                                name: 'nameDashboard_AyohaHotMerchant0_HotItems',
                                                //style: "background-color: #F35B57;",
                                                margin: '0 0 0 0',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'left',
                                                    align: 'left'

                                                },
                                                items: [
                                                     {
                                                         xtype: 'panel',
                                                         width: 5,
                                                         hidden: true,
                                                     },
                                                     {
                                                         //xtype: 'button',
                                                         height: 38,
                                                         width: 38,
                                                         //margin: '0 0 0 0',
                                                         hidden: true,
                                                         margin: '5 0 0 0',
                                                         id: 'htmlDashboard_AyohaHotMerchant_eStoreIcon',
                                                         //badgeText: "2",
                                                        // html: '<div><img src="https://42.1.63.57/AyohaImgCard/eStoreLogo/Default.png" width="38" height="38" alt="Company Name"></div>',

                                                     },
                                                     {
                                                         xtype: 'panel',
                                                         width: 5,
                                                         hidden: true,
                                                     },
                                                                           {
                                                                               margin: '0 0 0 0',
                                                                               id: 'htmlDashboard_AyohaHotMerchant_eStoreName',
                                                                               hidden: true,
                                                                               html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>Kiah Store</b></font></div></div>',


                                                                           },
                                                                           {
                                                                               xtype: 'spacer',
                                                                               hidden: true,
                                                                           },

                                                                           {
                                                                               xtype: 'container',
                                                                               style: 'background-color: transparent;',
                                                                               width: '100%',
                                                                               layout: {

                                                                                   type: 'vbox',
                                                                                   pack: 'left',
                                                                                   align: 'left'
                                                                               }, items: [
                                                                                   {
                                                                                       html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Hot Items!</b></font></div>',

                                                                                   },
                                                                                   {
                                                                                       xtype: 'container',
                                                                                       style: 'background-color: transparent;',
                                                                                       width: '100%',
                                                                                       id: 'containerHotItem_HotMerchant',
                                                                                       // cls:'marquee',
                                                                                       margin: '21 0 0 0',
                                                                                       layout: {

                                                                                           type: 'hbox',
                                                                                           pack: 'center',
                                                                                           align: 'center'
                                                                                       },
                                                                                       items: [
                                                                                            {
                                                                                                // xtype: 'button',
                                                                                                height: 32,
                                                                                                width: 32,
                                                                                                margin: '0 0 0 0',
                                                                                                hidden: true,
                                                                                                id: 'htmlHotItem_HotMerchant0_Img0',
                                                                                                html: '<div ><img src="resources/icons/romina.jpg" width="32" height="32" alt="Company Name"></div>',

                                                                                            },
                                                                                             {
                                                                                                 margin: '0 0 0 0',
                                                                                                 id: 'htmlHotItem_HotMerchant0_Name0',
                                                                                                 hidden: true,
                                                                                                 html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Rumina</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                             },
                                                                                           {
                                                                                               xtype: 'panel',
                                                                                               width: 20
                                                                                           },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               hidden: true,
                                                                                               id: 'htmlHotItem_HotMerchant0_Img1',
                                                                                               html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                           {
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant0_Name1',
                                                                                               hidden: true,
                                                                                               html: '<div  style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Obselic</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                           },
                                                                                           {
                                                                                               xtype: 'panel',
                                                                                               width: 20
                                                                                           },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant0_Img2',
                                                                                               hidden: true,
                                                                                               html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant0_Name2',
                                                                                                hidden: true,
                                                                                                html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Enchong</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                            },
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                width: 20
                                                                                            },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant0_Img3',
                                                                                               hidden: true,
                                                                                               html: '<div><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant0_Name3',
                                                                                                hidden: true,
                                                                                                html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Enchong</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                            },
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                width: 20
                                                                                            },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant0_Img4',
                                                                                               hidden: true,
                                                                                               html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant0_Name4',
                                                                                                hidden: true,
                                                                                                html: '<div  style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Enchong3</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                            },
                                                                                           //{
                                                                                           //    xtype: 'panel',
                                                                                           //    width: 20
                                                                                           //},
                                                                                           //{
                                                                                           //    // xtype: 'button',
                                                                                           //    height: 32,
                                                                                           //    width: 32,
                                                                                           //    margin: '0 0 0 0',
                                                                                           //    html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           //},
                                                                                           //{
                                                                                           //    margin: '0 0 0 0',
                                                                                           //    html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Chenjeng</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                           //},

                                                                                       ]
                                                                                   }
                                                                               ]
                                                                           },
                                                                           {
                                                                               xtype: 'container',
                                                                               style: 'background-color: transparent;',
                                                                               hidden: true,
                                                                               // margin: '-12 0 0 -7',
                                                                               // docked: 'bottom',
                                                                               layout: {

                                                                                   type: 'hbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
                                                                               },
                                                                               items: [

                                                                                          {
                                                                                              // xtype: 'button',
                                                                                              height: 22,
                                                                                              width: 22,
                                                                                              hidden: true,
                                                                                              margin: '0 0 0 0',
                                                                                              id: 'htmlDashboard_AyohaHotMerchant_FB',
                                                                                              //badgeText: "2",
                                                                                              html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',

                                                                                          },
                                                                                           {
                                                                                               xtype: 'panel',
                                                                                               width: 7
                                                                                           },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 22,
                                                                                               width: 22,
                                                                                               margin: '0 0 0 0',
                                                                                               hidden: true,
                                                                                               id: 'htmlDashboard_AyohaHotMerchant_Insta',
                                                                                               //badgeText: "2",
                                                                                               html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                width: 7
                                                                                            },
                                                                                          {
                                                                                              //xtype: 'button',
                                                                                              height: 22,
                                                                                              width: 22,
                                                                                              // hidden: true,
                                                                                              margin: '0 0 0 0',
                                                                                              id: 'htmlDashboard_AyohaHotMerchant_Location',
                                                                                              //badgeText: "2",
                                                                                              html: '<div ><img src="resources/icons/locationThree.png" width="22" height="22" alt="Company Name"></div>',

                                                                                          },
                                                                                          {
                                                                                              xtype: 'panel',
                                                                                              width: 7
                                                                                          },
                                                                                            {
                                                                                                // xtype: 'button',
                                                                                                height: 22,
                                                                                                width: 22,
                                                                                                margin: '0 0 0 0',
                                                                                                // hidden: true,
                                                                                                id: 'htmlDashboard_AyohaHotMerchant_Wassap',
                                                                                                //badgeText: "2",
                                                                                                html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"/></a>',

                                                                                            },
                                                                               ]
                                                                           }
                                                ]

                                            },
                                      ]
                                  },



                              ]
                          }

                     ]
                 },


                 /////////////////  Ayoha Hot Merchant 2

                 {
                     xtype: 'container',
                     id: 'container_Dashboard_AyohaHotMerchant_video_Header1',
                     hidden:true,
                     style: 'background-image: url("resources/icons/headerbg.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                     // style: 'background-image: url(data:image/gif;base64,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"); background-size: 100% 400px;background-repeat: no-repeat;',
                     width: '100%',
                     height: 400,
                     title: 'Dashboard_AyohaHotMerchant_video1',
                     //  style: "background-color: transparent;",
                     layout: {
                         type: 'vbox',
                         pack: 'start',
                         align: 'center'

                     },
                     items: [

   {
       xtype: 'panel',
       width: '100%',
       height: 90
   },
{
xtype: 'container',
width: '100%',
/// hidden:true,
//  margin: '60 0 0 0',
style: {
  // background: '#D25959',
  background: 'transparent',
  // border: '2px'
},
layout: {
  type: 'hbox',
  pack: 'center',
  align: 'center',
},
items: [
   {
       margin: '0 0 0 14',
       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
       html: '<div style="color:black;text-align: left;font-size:16px;width:100%;"><b>Ayoha Hot Merchant !</b></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
   },
   {
       xtype: 'spacer'
   },





   {
       xtype: 'container',
       // zIndex: 100,
       height: 35,
       width: 35,
       margin: '-10px 0px 0px 0px',
       // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
       id: 'containerDashbordAyohaHotMerchant_SearchAyohaMerchant1',
       // name: 'namecontainerDashbord_SearchAyohaMerchant',
       // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

       //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
       style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center'

       },
       items: [
             {
                 xtype: 'button',
                 height: 30,
                 width: 30,
                 margin: '3 0 0 -7',
                 id: 'btnDashbordAyohaHotMerchant_SearchAyohaMerchant1',
                 //badgeText: "2",
                 html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
                 ui: 'plain',
                 handler: function () {
                     Dashboard_SearchMerchantListShow();
                 }
             },

   //{
   //    margin: '0 0 0 0',
   //    // hidden: true,
   //    width: 20,
   //    height: 20,
   //    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
   //    // ui:'plain'
   //},


       ]
   },

{
xtype: 'panel',
width: 7
},



{
xtype: 'container',
// zIndex: 100,
height: 35,
width: 35,
margin: '-10px 0px 0px 0px',
// id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
id: 'containerDashbordAyohaHotMerchant_MyPurchaseHistory1',
// name: 'namecontainerDashbord_MyPurchaseHistory',
// name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center'

},
items: [
    {
        xtype: 'button',
        height: 30,
        width: 30,
        margin: '3 0 0 -7',
        id: 'btnDashbordAyohaHotMerchant_MyPurchaseHistory1',
        //badgeText: "2",
        html: '<img src="resources/icons/purchase01.png" width="20" height="20" alt="Company Name">',
        ui: 'plain',
        handler: function () {
            FloatPanel_OrderHistoryShow();

        }
    },

//{
//    margin: '0 0 0 0',
//    // hidden: true,
//    width: 20,
//    height: 20,
//    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
//    // ui:'plain'
//},


]
},

{
xtype: 'panel',
width: 7
},



{
xtype: 'container',
// zIndex: 100,
height: 35,
width: 35,
margin: '0 0 0 0',
// id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
margin: '-10px 0px 0px 0px',
name: 'namecontainerDashbord_AyohaHotMerchant_MyCart1',
// name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center'

},
items: [

{
margin: '-1 0 0 0',
id: 'htmlDashbord_AyohaHotMerchant_CountbadgeText1',
html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'

},
{
margin: '2 2 0 0',
// hidden: true,
width: 18,
height: 18,
html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:18px;height:18px;">',
// ui:'plain'
},


]
},
{
xtype: 'panel',
width: 20
},



   //{

   //    margin: '0 14 0 0',
   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
   //    html: '<div onclick="FloatPanel_FloatingAdvertisementShow();" style="color:transparent;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
   //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

   //}
]
},
                          {
                              xtype: 'panel',
                              width: '100%',
                              height: 5
                          },



                          {
                              xtype: 'container',
                              width: '100%',
                              height: 210,
                              // title:'Dashboard_AyohaReward_NewsUpdateVideo',
                              style: "background-color: transparent;",
                              // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center'

                              },
                              items: [

                                  //{
                                  //    //width: '49%',
                                  //    //height: 180,
                                  //    html: '<video width="150" height="150"><source src="https://42.1.63.57/AyohaImgCard/AdvertisementVideo/CRCom-71100/aslam.mp4" type="video/mp4"></video>'
                                  //},


                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      height: 40,
                                      zIndex: 100,

                                      // docked: 'top',
                                      // width: 40,
                                      style: ' background-color:transparent;',
                                      id: 'containerFloatPanel_AyohaHotMerchant_OnlineStoreListHeaderx1',
                                      layout: {
                                          type: 'hbox',
                                          pack: 'left',
                                          align: 'left',
                                      },
                                      // hidden:true,
                                      items:
                                             [




                                                           {
                                                               xtype: 'spacer'
                                                           },


                                                            {
                                                                margin: '-2 0 0 0',
                                                                id: 'htmlDashboard_AyohaHotMerchant_EnterpriseName1',
                                                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                            },

                                                     {
                                                         xtype: 'button',
                                                         margin: '6 0 0 0',
                                                         //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                         height: 40,
                                                         width: 40,
                                                         // iconCls: 'list',
                                                         id: 'htmlDashboard_AyohaHotMerchant_EnterpriseLogo1',
                                                         html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {


                                                             FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore(1);
                                                             ////setTimeout(function () { window.open("tiktok://vt.tiktok.com/ZSe7QQTM1/", '_system'); return false; }, 25);
                                                             // setTimeout(function () { window.open("tiktok://ZSe7QQTM1/", '_system'); return false; }, 25);

                                                             //https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250

                                                             // setTimeout(function () { window.open("https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250", '_system'); return false; }, 25);
                                                         }
                                                     },


                                                     {
                                                         xtype: 'panel',
                                                         width: 25
                                                     }









                                             ]

                                  },
                                  {
                                      xtype: 'container',
                                      width: '93%',
                                      height: 210,
                                      margin: '-40px 0px 0px 0px',
                                      // title:'Dashboard_AyohaReward_NewsUpdateVideo',
                                      style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background:black;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                      // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center'

                                      },
                                      items: [
                                          {
                                              xtype: 'video',
                                              id: 'Dashboard_VideoAyohaHotMerchant1',
                                              margin: '3 0 0 0',
                                              //hidden:true,
                                              //width: '100%',
                                              //height: 200,
                                              // url: 'https://42.1.63.57/AyohaImgCard/AdvertisementVideo/CRCom-71100/hicVideo.mp4',
                                              //url: 'https://www.tiktok.com/@user3035549193796/video/6998964976341847323?is_from_webapp=1&sender_device=pc&web_id7064588980977141250',
                                              // mode: 'video',
                                              // posterUrl: 'resources/icons/coverImgHIC01.png',
                                              loop: true,
                                              enableControls: true,
                                              width: '97%',
                                              height: 200,
                                              cls: 'x-videoExt'

                                          },



                                            {
                                                xtype: 'container',
                                                id: 'Dashboard_AyohaHotMerchant_HotItem1',
                                                // hidden:true,
                                                width: '100%',
                                                height: 60,
                                                style: "background-color: transparent",
                                                name: 'nameDashboard_AyohaHotMerchant1_eStore',
                                                //style: "background-color: #F35B57;",
                                                margin: '0 0 0 0',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'left',
                                                    align: 'left'

                                                },
                                                items: [


                                                                           {
                                                                               xtype: 'container',
                                                                               style: 'background-color: transparent;',
                                                                               width: '100%',
                                                                               layout: {

                                                                                   type: 'vbox',
                                                                                   pack: 'left',
                                                                                   align: 'left'
                                                                               }, items: [
                                                                                   {
                                                                                       html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Hot Items!</b></font></div>',

                                                                                   },
                                                                                   {
                                                                                       xtype: 'container',
                                                                                       style: 'background-color: transparent;',
                                                                                       width: '100%',
                                                                                       id: 'containerHotItem_HotMerchant1',
                                                                                       // cls:'marquee',
                                                                                       margin: '20 0 0 0',
                                                                                       layout: {

                                                                                           type: 'hbox',
                                                                                           pack: 'center',
                                                                                           align: 'center'
                                                                                       },
                                                                                       items: [
                                                                                            {
                                                                                                // xtype: 'button',
                                                                                                height: 32,
                                                                                                width: 32,
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant1_Img0',
                                                                                                hidden: true,
                                                                                                html: '<div ><img src="resources/icons/romina.jpg" width="32" height="32" alt="Company Name"></div>',

                                                                                            },
                                                                                             {
                                                                                                 margin: '0 0 0 0',
                                                                                                 id: 'htmlHotItem_HotMerchant1_Name0',
                                                                                                 hidden: true,
                                                                                                 html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Rumina</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                             },
                                                                                           {
                                                                                               xtype: 'panel',
                                                                                               width: 20
                                                                                           },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant1_Img1',
                                                                                               hidden: true,
                                                                                               html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                           {
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant1_Name1',
                                                                                               hidden: true,
                                                                                               html: '<div  style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Obselic</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                           },
                                                                                           {
                                                                                               xtype: 'panel',
                                                                                               width: 20
                                                                                           },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant1_Img2',
                                                                                               hidden: true,
                                                                                               html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant1_Name2',
                                                                                                hidden: true,
                                                                                                html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Enchong</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                            },
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                width: 20
                                                                                            },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant1_Img3',
                                                                                               hidden: true,
                                                                                               html: '<div><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant1_Name3',
                                                                                                hidden: true,
                                                                                                html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Enchong</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                            },
                                                                                            {
                                                                                                xtype: 'panel',
                                                                                                width: 20
                                                                                            },
                                                                                           {
                                                                                               // xtype: 'button',
                                                                                               height: 32,
                                                                                               width: 32,
                                                                                               margin: '0 0 0 0',
                                                                                               id: 'htmlHotItem_HotMerchant1_Img4',
                                                                                               hidden: true,
                                                                                               html: '<div ><img src="resources/icons/romina.jpg" width="32 height="32" alt="Company Name"></div>',

                                                                                           },
                                                                                            {
                                                                                                margin: '0 0 0 0',
                                                                                                id: 'htmlHotItem_HotMerchant1_Name4',
                                                                                                hidden: true,
                                                                                                html: '<div  style="width:100%;margin:6px 0px 0px 0px;"><font size=1 color=black><b>Enchong3</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=2 color=black><b>RM20.00</b></font></div></div>',


                                                                                            },


                                                                                       ]
                                                                                   }
                                                                               ]
                                                                           },

                                                ]

                                            },
                                      ]
                                  },



                              ]
                          }

                     ]
                 },


           ]
       },






           //////////Slider Bar

           {
               xtype: 'container',
               margin: '-16 0 0 0',
               hidden: true,
               // hidden: true,
               style: 'background-color: white;',
               //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
               // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

               height: 14,
               width: '100%',
               // margin: '70 0 0 0',
               id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia_TimingBarx',
               layout: {

                   type: 'hbox',
                   pack: 'center',
                   align: 'center'
               },
               items: [
                   {
                       xtype: 'spacer'
                   },
   {
       xtype: 'container',
       id: 'btnDashboard_PreviewAdvertisement_Timing0x',
       margin: '0 0 0 0',
       height: 10,
       width: 50,
       // flex: 1,           
       style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);border-radius: 20px 20px 20px 20px;',
       //html: '<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">',


       //ui: 'plain',
       //handler: function () {


       //}
   }, {
       xtype: 'spacer',
       width: 10,
   },
   {
       xtype: 'container',
       id: 'btnDashboard_PreviewAdvertisement_Timing11',
       margin: '0 0 0 0',
       height: 7,
       width: 50,
       // flex: 1, 
       style: 'border-right:2px solid #e4e4e4;border-left:2px solid #e4e4e4;border-bottom:2px solid #e4e4e4;border-top:2px solid #e4e4e4;background: #e4e4e4;border-radius: 20px 20px 20px 20px;',
       //html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
       //ui: 'plain',            
       //handler: function () {


       //}
   },
   {
       xtype: 'spacer',
       width: 10,
   },
   {
       xtype: 'container',
       id: 'btnDashboard_PreviewAdvertisement_Timing2x',
       margin: '0 0 0 0',
       height: 7,
       width: 50,
       // flex: 1, 
       style: 'border-right:2px solid #e4e4e4;border-left:2px solid #e4e4e4;border-bottom:2px solid #e4e4e4;border-top:2px solid #e4e4e4;background: #e4e4e4;border-radius: 20px 20px 20px 20px;',
       // html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
       //ui: 'plain',           
       //handler: function () {


       //}
   },
    {
        xtype: 'spacer',
        width: 10,
    },
   {
       xtype: 'container',
       id: 'btnDashboard_PreviewAdvertisement_Timing2xx',
       margin: '0 0 0 0',
       height: 7,
       width: 50,
       // flex: 1, 
       style: 'border-right:2px solid #e4e4e4;border-left:2px solid #e4e4e4;border-bottom:2px solid #e4e4e4;border-top:2px solid #e4e4e4;background: #e4e4e4;border-radius: 20px 20px 20px 20px;',
       // html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
       //ui: 'plain',           
       //handler: function () {


       //}
   },
    {
        xtype: 'spacer',
        width: 10,
    },
   {
       xtype: 'container',
       id: 'btnDashboard_PreviewAdvertisement_Timing2xxx',
       margin: '0 0 0 0',
       height: 7,
       width: 50,
       // flex: 1, 
       style: 'border-right:2px solid #e4e4e4;border-left:2px solid #e4e4e4;border-bottom:2px solid #e4e4e4;border-top:2px solid #e4e4e4;background: #e4e4e4;border-radius: 20px 20px 20px 20px;',
       // html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
       //ui: 'plain',           
       //handler: function () {


       //}
   },

   {
       xtype: 'spacer'
   },
               ]
           },






           //////////////





               {
                   xtype: 'container',
                   width: '100%',
                   //width: '55%',
                   /// hidden:true,
                   margin: '15 0 0 0',
                   //style: {
                   //    // background: '#D25959',
                   //    background: 'transparent',
                   //    // border: '2px'
                   //},
                   //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                   // style: 'border-bottom:2px solid #D25959;background-color:transparent',
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
                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px -40px"><b>Ayoha Points</b></div><br><div style="color:black;text-align: center;font-size:10px;width:100%;margin:-25px 0px 0px 0px;">- Collect Point From our Ayoha Merchant -</div>'
                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                        },
                        {
                            xtype: 'spacer'
                        },
                          
                                 {
                                     xtype: 'container',
                                     // zIndex: 100,
                                     height: 35,
                                     width: 35,
                                     margin: '10 0 0 0',
                                     // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                                     id: 'containerDashbord_SearchAyohaMerchant',
                                     name: 'namecontainerDashbord_SearchAyohaMerchant',
                                     // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

                                     //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                     style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'center',
                                         align: 'center'

                                     },
                                     items: [
                                           {
                                               xtype: 'button',
                                               height: 30,
                                               width: 30,
                                               margin: '3 0 0 -7',
                                               id: 'btnDashbord_SearchAyohaMerchant',
                                               //badgeText: "2",
                                               html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
                                               ui: 'plain',
                                               handler: function () {

                                                   Dashboard_SearchMerchantListShow();
                                               }
                                           },

                                 //{
                                 //    margin: '0 0 0 0',
                                 //    // hidden: true,
                                 //    width: 20,
                                 //    height: 20,
                                 //    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
                                 //    // ui:'plain'
                                 //},


                                     ]
                                 },
                                {
                                    xtype: 'panel',
                                    width: 7
                                },
                                  {
                                      xtype: 'container',
                                      // zIndex: 100,
                                      height: 35,
                                      width: 35,
                                      margin: '10 0 0 0',
                                      // id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
                                      id: 'containerDashbord_MyPurchaseHistory',
                                      name: 'namecontainerDashbord_MyPurchaseHistory',
                                      // name: 'namecontainerFloatPanel_AyohaStoreMyCart',

                                      //  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                      style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center'

                                      },
                                      items: [
                                            {
                                                xtype: 'button',
                                                height: 30,
                                                width: 30,
                                                margin: '3 0 0 -7',
                                                id: 'btnDashbord_MyPurchaseHistory',
                                                //badgeText: "2",
                                                html: '<img src="resources/icons/purchase01.png" width="20" height="20" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function () {
                                                    FloatPanel_OrderHistoryShow();

                                                }
                                            },

                                  //{
                                  //    margin: '0 0 0 0',
                                  //    // hidden: true,
                                  //    width: 20,
                                  //    height: 20,
                                  //    html: '<img src="resources/icons/purchase01.png" alt="Image" style="width:20px;height:20px;">',
                                  //    // ui:'plain'
                                  //},


                                      ]
                                  },
{
xtype: 'panel',
width: 7
},
{
xtype: 'container',
zIndex: 100,
height: 35,
width: 35,
margin: '10 0 0 0',
// id: 'containerFloatPanel_AyohaStore_MyCartCountbadge',
id: 'containerDashbord_MyCart',
name: 'namecontainerDashbord_MyCart',
// name: 'namecontainerFloatPanel_AyohaStoreMyCart',

//  style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 50%;',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center'

},
items: [

{
margin: '-1 0 0 0',
id: 'htmlDashbord_OrderCart_CountbadgeText',
html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'

},
{
margin: '2 2 0 0',
// hidden: true,
width: 18,
height: 18,
html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:18px;height:18px;">',
// ui:'plain'
},


]
},
{
xtype: 'panel',
width: 20
},

                        //////////////////////////////////////////////////////////////////////////////


                           //{
                           //    xtype: 'panel',
                           //    width: '100%',
                           //    height: 30
                           //},



                        {
                            xtype: 'container',
                            width: '100%',
                             hidden: true,
                            margin: '10 0 0 0',
                            // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                               


                            ]
                        },
                         {
                             xtype: 'container',
                             width: '100%',
                             hidden: true,
                             margin: '-3 0 0 0',
                             id: 'containerDashboardBrowseAyohaMerchantCategory',
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
                                      margin: '-7 0 0 14',
                                      id: 'htmlDashboardBrowseAyohaMerchantCategory',
                                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                      html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">- Collect Point From our Ayoha Merchant -</div>'
                                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
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
                   id: 'containerAyohaRewards',

                   //  hidden: true,
                   style: "background-color: transparent;",
                   margin: '5 0 0 0',
                   width: '100%',
                   height: 320,

                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                   layout: {
                       type: 'vbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [

                              {
                                  xtype: 'container',
                                  //  style: 'background-color:#f7347a;border-radius: 50%;',
                                  // style: 'background-color:#C72CB4;border-radius: 50%;border:2px solid purple',


                                  style: "background-color: transparent;",
                                  //  style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac',


                                  margin: '0 0 0 0',
                                  id: 'htmlDashboard_AyohaRewardLogos',
                                  name: 'containerNameAyohaRewards',
                                  zIndex: 200,
                                  width: 230,
                                  height: 230,
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'

                                  },
                                  items: [


                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center'

                                          },
                                          items: [

                                              {
                                                  width: 16,
                                                  height: 16,
                                                  html: '<div style="margin:30px 0px 0px -10px"><img src="resources/icons/shiningIcon.png" width="16" height="16" alt="Company Name"></div>',
                                              },
                                              {
                                                  xtype: 'spacer'
                                              },
                                              {
                                                  width: 26,
                                                  height: 26,
                                                  html: '<div style="margin:20px 0px 0px 10px"><img src="resources/icons/shiningIcon.png" width="26" height="26" alt="Company Name"></div>',
                                              },
                                          ]

                                      },

                                      {

                                          //  html: '<div  class="pulse" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px"><div style="color:black;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>2560</b></div><br><div style="color:black;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div></div>'
                                          id: 'Dashboard_AyohaRewardPoint',
                                          html: '<div style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>0</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Fetching...</b></div></div>'



                                      },
                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            items: [

                                                {
                                                    width: 36,
                                                    height: 36,
                                                    html: '<div style="margin:-30px 0px 0px -10px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                                },
                                                {
                                                    xtype: 'spacer'
                                                },
                                                {
                                                    width: 20,
                                                    height: 20,
                                                    html: '<div style="margin:-20px 0px 0px 10px"><img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name"></div>',
                                                },
                                            ]

                                        },
                                      {
                                          hidden: true,
                                          id: 'htmlDashboard_AyohaPointCollected',
                                          html: '<div style="color:black;text-align: center;font-size:48px;width:100%;"><b>2560</b></div>'
                                      }, {
                                          hidden: true,
                                          margin: '-10 0 0 0',
                                          id: 'htmlDashboard_AyohaPointCollectedTxt',
                                          html: '<div style="color:black;text-align: center;font-size:11px;width:100%;"><b>Collected Point</b></div>'
                                      },
                                       {
                                           //width: 220,
                                           hidden: true,
                                           //  id: 'btnDashboard_Redeem',
                                           // margin: '5 0 0 0',
                                           ////left:-2,
                                           //height: 150,
                                           //  html: '<img src="resources/icons/founder.jpg" width="220" height="150" border:2px solid red; border-radius: 50%; max-width:300px; alt="Company Name">',
                                           id: 'htmlDashboard_Redeem',
                                           html: '<div style="margin:-110px 0px 0px 0px" class="blink_me"><button class="buttonRedeem">Redeem!</button></div>',
                                           //html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" style="width: 64px; height: 64px;" /></div>',
                                       },
                                  ]
                                  // html: '<img src="resources/icons/ayohaReward01.gif" style="width: 230px; height: 230px;" />',
                              },



                           //{
                           //    margin: '0 0 0 0',
                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                           //    id: 'htmlDashboard_EnterpriseAddress',
                           //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">Petronas Wangsa Maju Sekysen 3,Jalan Genting Kelang,5215461 Ampang. Selangor Darul Ehsan</div>'
                           //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                           //},


                   ]

               },





               //Ayoha reward redemption//

                          {
                              xtype: 'container',
                              width: '100%',
                              hidden: false,
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
                                       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Point Redemption</b></div>'
                                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   },
                                   {
                                       xtype: 'spacer'
                                   },
                                    {
                                        xtype: 'button',
                                        id: 'btnMyDashboard_AyohaRewardRedemptionList',
                                        //hidden:true,
                                        //  badgeText: '1',
                                        margin: '15 10 0 0',
                                        height: 35,
                                        width: 35,
                                        html: '<img src="resources/icons/myredeemption.png" width="25" height="25" alt="Company Name">',
                                        ui: 'plain',
                                        handler: function () {
                                            FloatPanel_AyohaReward_RedemptionHistoryShow();
                                        }
                                    },



                              ]
                          },
                          {
                              xtype: 'container',
                              width: '100%',
                              // hidden: true,
                              margin: '-7 0 0 0',
                              id: 'containerAyoharewardredemptionVerifiedUser',
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
                                       margin: '-8 0 0 14',
                                       id: 'htmlAyohaRewardRedemptionVerifiedUser',
                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                       html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">- Ayoha Membership Only -</div>'
                                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   },
                                   {
                                       xtype: 'spacer'
                                   },




                              ]
                          },



                          {
                              xtype: 'container',
                              id: 'containerAyohaRewardRedemption',

                              // hidden: true,
                              style: "background-color: transparent;",
                              margin: '5 0 0 0',
                              width: '100%',
                              //height: 350,
                              height: 380,
                              //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                              layout: {
                                  type: 'hbox',
                                  pack: 'center',
                                  align: 'center'

                              },
                              items: [



                                  {
                                      xtype: 'container',
                                      margin: '0 0 0 0',
                                      width: '8%',
                                      id: 'container_containerAyohaRewardRedemption_carosel_back',
                                      // height: 350,
                                      height: 400,
                                      style: 'background-color:transparent',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      }, items: [

                                               {
                                                   xtype: 'button',
                                                   margin: '-50 0 0 0',
                                                   id: 'btn_containerAyohaRewardRedemption_carosel_back',
                                                   height: 30,
                                                   width: 35,
                                                   // iconCls: 'list',
                                                   html: '<div ><img src="resources/icons/backPurple2.png" width="25" height="20" alt="Company Name"></div>',
                                                   ui: 'plain',
                                                   handler: function () {

                                                       //Ext.getCmp('carousel_containerAyohaRewardRedemption').setShowAnimation('slideIn');
                                                       // Ext.getCmp('carousel_containerAyohaRewardRedemption').setShowAnimation('slideIn');

                                                       var crsl = Ext.getCmp('carousel_containerAyohaRewardRedemption');
                                                       crsl.previous();
                                                   }
                                               },

                                      ]
                                  },





{
xtype: 'carousel',
hidden: false,
//width: '95%',
//height: 80,
margin: '-2 0 0 0',
width: '84%',
id: 'carousel_containerAyohaRewardRedemption',
// height: 350,
height: 380,
items: [





{
xtype: 'container',
// xtype: 'carousel',
hidden: false,
//width: '95%',
//height: 80,
margin: '5 0 0 0',
width: '100%',
id: 'container_containerAyohaRewardRedemption_carosel0',
height: 350,
// height: 440,
// style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
style: 'background-color:transparent',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center',
},
items: [
  {
      xtype: 'container',
      //width: '95%',
      //height: 80,
      //margin: '12 0 0 0',
      width: '100%',
      height: 30,
      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      style: 'background-color:transparent',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
      layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center',
      },
      items: [




           {
               margin: '-10 0 0 0',
               id: 'containerAyohaRewardRedemption_carosel_APoint0',
               html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
           },
          {
              margin: '3 0 0 3',
              id: 'containerAyohaRewardRedemption_carosel_APointTxt0',
              html: '<div style="color:purple;text-align: center;font-size:10px;width:100%;font-weight:bold">Ayoha Point</div>',
          },



      ]

  },




  {


      //xtype: 'button',
      height: 250,
      width: '100%',
      margin: '-2 0 0 0',
      //zIndex: 400,
      id: 'containerAyohaRewardRedemption_carosel_APointImg0',
      name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg0',
      html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

      //ui: 'plain',
      //handler: function () {

      //}


  },



{
  margin: '-20 0 0 0',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt0',
  html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
},
{
   margin: '-2 0 0 0',
   id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt0',
   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
},

{
  margin: '5 0 0 0',
  width: '100%',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton0',
  html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(0)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
},


]

},



///////////////////////////

{
xtype: 'container',
// xtype: 'carousel',
hidden: false,
//width: '95%',
//height: 80,
margin: '5 0 0 0',
width: '100%',
id: 'container_containerAyohaRewardRedemption_carosel1',
height: 350,
// height: 440,
// style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
style: 'background-color:transparent',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center',
},
items: [
  {
      xtype: 'container',
      //width: '95%',
      //height: 80,
      //margin: '12 0 0 0',
      width: '100%',
      height: 30,
      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      style: 'background-color:transparent',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
      layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center',
      },
      items: [




           {
               margin: '-10 0 0 0',
               id: 'containerAyohaRewardRedemption_carosel_APoint1',
               html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
           },
          {
              margin: '3 0 0 3',
              id: 'containerAyohaRewardRedemption_carosel_APointTxt1',
              html: '<div style="color:purple;text-align: center;font-size:10px;width:100%;font-weight:bold">Ayoha Point</div>',
          },



      ]

  },




  {


      //xtype: 'button',
      height: 250,
      width: '100%',
      margin: '-2 0 0 0',
      //zIndex: 400,
      id: 'containerAyohaRewardRedemption_carosel_APointImg1',
      name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg1',
      html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

      //ui: 'plain',
      //handler: function () {

      //}


  },



{
  margin: '-20 0 0 0',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt1',
  html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
},
{
   margin: '-2 0 0 0',
   id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt1',
   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
},

{
  margin: '5 0 0 0',
  width: '100%',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton1',
  html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(1)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
},


]

},



{
xtype: 'container',
// xtype: 'carousel',
hidden: false,
//width: '95%',
//height: 80,
margin: '5 0 0 0',
width: '100%',
id: 'container_containerAyohaRewardRedemption_carosel2',
height: 350,
// height: 440,
// style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
style: 'background-color:transparent',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center',
},
items: [
  {
      xtype: 'container',
      //width: '95%',
      //height: 80,
      //margin: '12 0 0 0',
      width: '100%',
      height: 30,
      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      style: 'background-color:transparent',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
      layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center',
      },
      items: [




           {
               margin: '-10 0 0 0',
               id: 'containerAyohaRewardRedemption_carosel_APoint2',
               html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
           },
          {
              margin: '3 0 0 3',
              id: 'containerAyohaRewardRedemption_carosel_APointTxt2',
              html: '<div style="color:purple;text-align: center;font-size:10px;width:100%;font-weight:bold">Ayoha Point</div>',
          },



      ]

  },




  {


      //xtype: 'button',
      height: 250,
      width: '100%',
      margin: '-2 0 0 0',
      //zIndex: 400,
      id: 'containerAyohaRewardRedemption_carosel_APointImg2',
      name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg2',
      html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

      //ui: 'plain',
      //handler: function () {

      //}


  },



{
  margin: '-20 0 0 0',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt2',
  html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
},
{
   margin: '-2 0 0 0',
   id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt2',
   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
},

{
  margin: '5 0 0 0',
  width: '100%',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton2',
  html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(2)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
},


]

},



{
xtype: 'container',
// xtype: 'carousel',
hidden: false,
//width: '95%',
//height: 80,
margin: '5 0 0 0',
width: '100%',
id: 'container_containerAyohaRewardRedemption_carosel3',
height: 350,
// height: 440,
// style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
style: 'background-color:transparent',
layout: {
  type: 'vbox',
  pack: 'center',
  align: 'center',
},
items: [
  {
      xtype: 'container',
      //width: '95%',
      //height: 80,
      //margin: '12 0 0 0',
      width: '100%',
      height: 30,
      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      style: 'background-color:transparent',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
      layout: {
          type: 'hbox',
          pack: 'center',
          align: 'center',
      },
      items: [




           {
               margin: '-10 0 0 0',
               id: 'containerAyohaRewardRedemption_carosel_APoint3',
               html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
           },
          {
              margin: '3 0 0 3',
              id: 'containerAyohaRewardRedemption_carosel_APointTxt3',
              html: '<div style="color:purple;text-align: center;font-size:10px;width:100%;font-weight:bold">Ayoha Point</div>',
          },



      ]

  },




  {


      //xtype: 'button',
      height: 250,
      width: '100%',
      margin: '-2 0 0 0',
      //zIndex: 400,
      id: 'containerAyohaRewardRedemption_carosel_APointImg3',
      name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg3',
      html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

      //ui: 'plain',
      //handler: function () {

      //}


  },



{
  margin: '-20 0 0 0',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt3',
  html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
},
{
   margin: '-2 0 0 0',
   id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt3',
   html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
},

{
  margin: '5 0 0 0',
  width: '100%',
  id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton3',
  html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(3)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
},


]

},






   {
       xtype: 'container',
       // xtype: 'carousel',
       hidden: false,
       //width: '95%',
       //height: 80,
       margin: '5 0 0 0',
       width: '100%',
       id: 'container_containerAyohaRewardRedemption_carosel4',
       height: 350,
       // height: 440,
       // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
       style: 'background-color:transparent',
       layout: {
           type: 'vbox',
           pack: 'center',
           align: 'center',
       },
       items: [
           {
               xtype: 'container',
               //width: '95%',
               //height: 80,
               //margin: '12 0 0 0',
               width: '100%',
               height: 30,
               //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
               //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
               style: 'background-color:transparent',
               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
               // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
               layout: {
                   type: 'hbox',
                   pack: 'center',
                   align: 'center',
               },
               items: [




                    {
                        margin: '-10 0 0 0',
                        id: 'containerAyohaRewardRedemption_carosel_APoint4',
                        html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
                    },
                   {
                       margin: '3 0 0 3',
                       id: 'containerAyohaRewardRedemption_carosel_APointTxt4',
                       html: '<div style="color:purple;text-align: center;font-size:10px;width:100%;font-weight:bold">Ayoha Point</div>',
                   },



               ]

           },




           {


               //xtype: 'button',
               height: 250,
               width: '100%',
               margin: '-2 0 0 0',
               //zIndex: 400,
               id: 'containerAyohaRewardRedemption_carosel_APointImg4',
               name: 'NamecontainerAyohaRewardRedemption_carosel_APointImg4',
               html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

               //ui: 'plain',
               //handler: function () {

               //}


           },



       {
           margin: '-20 0 0 0',
           id: 'containerAyohaRewardRedemption_carosel_APointNameItemTxt4',
           html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
       },
        {
            margin: '-2 0 0 0',
            id: 'containerAyohaRewardRedemption_carosel_APointNameItemPriceTxt4',
            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
        },

       {
           margin: '5 0 0 0',
           width: '100%',
           id: 'containerAyohaRewardRedemption_carosel_APointNameItemRedeemButton4',
           html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(4)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
       },


       ]

   },

////



]
},



 {
     xtype: 'container',
     margin: '0 0 0 0',
     width: '8%',
     id: 'container_containerAyohaRewardRedemption_carosel_next',
     // height: 350,
     height: 380,
     style: 'background-color:transparent',
     layout: {
         type: 'vbox',
         pack: 'center',
         align: 'center',
     }, items: [

              {
                  xtype: 'button',
                  margin: '-50 0 0 -10',
                  id: 'btn_containerAyohaRewardRedemption_carosel_next',
                  height: 30,
                  width: 35,
                  // iconCls: 'list',
                  html: '<div ><img src="resources/icons/nextPurple2.png" width="25" height="20" alt="Company Name"></div>',
                  ui: 'plain',
                  handler: function () {
                      var crsl = Ext.getCmp('carousel_containerAyohaRewardRedemption');
                      crsl.next();
                  }
              },

     ]
 },
















                              ]
                          },





///////////////////////////////////////////////// start ayoha reward contest ///////////////

{
xtype: 'container',
width: '100%',
//hidden:true,
//margin: '-10 0 0 0',
margin: '35 0 0 0',
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
       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Reward Contest</b></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
   },
   {
       xtype: 'spacer'
   },
    {
        xtype: 'button',
        id: 'btnMyDashboard_AyohaRewardRankingInfo',
        //hidden:true,
        //  badgeText: '1',
        margin: '15 10 0 0',
        height: 35,
        width: 35,
        html: '<img src="resources/icons/entercontest01.png" width="25" height="25" alt="Company Name">',
        ui: 'plain',
        handler: function () {
            // FloatPanel_AyohaReward_ContestAdvertisementShow();
            FloatPanel_AyohaReward_ContestHistoryShow();
        }
    },



]
},

                {
                    xtype: 'container',
                    width: '100%',
                    hidden: true,
                    margin: '-7 0 0 0',
                    id: 'containerContestEndDate',
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
                             margin: '-8 0 0 14',
                             id: 'htmlJoinContestDate',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div style="color:black;text-align: center;font-size:14px;width:100%;">Spent And Win</div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },
                         {
                             xtype: 'spacer'
                         },
                          {
                              xtype: 'button',
                              id: 'btnMyDashboard_AyohaRewardRankingInfoxx',
                              hidden: true,
                              //  badgeText: '1',
                              margin: '0 10 0 0',
                              height: 35,
                              width: 35,
                              html: '<img src="resources/icons/contest01.png" width="25" height="25" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {
                                  FloatPanel_AyohaReward_ContestAdvertisementShow();
                              }
                          },



                    ]
                },



                {
                    xtype: 'container',
                    width: '40%',
                    //width: 100,
                    height: 150,
                    zIndex: 300,
                    // hidden: true,
                    margin: '-30 0 0 0',
                    id: 'containerContestYourRanking',
                    name: 'containerContestYourRankingName',
                    //style: {
                    //     background: '#D25959',
                    //   // background: 'transparent',
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
                             margin: '0 0 0 0',
                             id: 'htmlContestYourRanking',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Your Ranking !</div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },

                        {
                            margin: '0 0 0 0',
                            id: 'htmlContestYourRankingNo',
                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            html: '<div style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">?</div>'
                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                        },

                         {
                             margin: '-80 0 0 0',
                             id: 'htmlContestYourRankingview',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div  style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">*View Ranking</div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },

                    ]
                },

                {
                    xtype: 'container',
                    width: '100%',
                    height: 400,
                    margin: '-100 0 0 5',
                    name: 'containerDashboard_User_AyohaRewardRankingBar',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                    style: 'background-color:transparent;border-bottom:2px none white;',
                    //  style: 'background-image: url("resources/icons/sportlight03-removebg-preview.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },

                    items: [
                         {
                             xtype: 'container',
                             width: '31%',
                             height: 400,
                             margin: '0 0 0 0',
                             name: 'containerDashboard_User_AyohaRewardRankingBar01',
                             //style: {
                             //    // background: '#D25959',
                             //    background: 'rgba(76, 175, 80, 0.3);',
                             //    // border: '2px'
                             //},
                             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                             style: 'background-color:transparent',
                             layout: {
                                 type: 'vbox',
                                 pack: 'end',
                                 align: 'center',
                             },

                             items: [

                                  //{
                                  //    xtype: 'button',
                                  //    height: 70,
                                  //    width: 70,
                                  //    margin: '0 0 0 3',
                                  //    id: 'btnDashboard_User_AyohaRewardRanking01',
                                  //    //badgeText: "2",
                                  //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/AzuImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                  //    ui: 'plain',
                                  //    handler: function () {



                                  //    }
                                  //},




                                  {
                                      //xtype: 'button',

                                      xtype: 'container',
                                      style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                      height: 80,
                                      width: 80,
                                      margin: '-38 0 0 0',
                                      id: 'btnDashboard_User_AyohaRewardRanking02',
                                      //badgeText: "2",
                                      //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                      //ui: 'plain',
                                      //handler: function () {



                                      //}

                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                                          {
                                              height: 70,
                                              width: 70,
                                              id: 'imgDashboard_User_AyohaRewardRanking02',
                                              html: '<img src="resources/icons/AzuImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                          }
                                      ]
                                  },




                                   {
                                       margin: '0 0 0 0',
                                       id: 'htmlDashboard_User_AyohaRewardRanking02_Name',
                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                       html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Azuliana</b></div>'
                                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   },
                                    {
                                        margin: '-2 0 0 0',
                                        id: 'htmlDashboard_User_AyohaRewardRanking02_AyohaPoint',
                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>2000 Point</b></div>'
                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                    },

                                    {
                                        xtype: 'container',
                                        width: 100,
                                        height: 130,
                                        margin: '0 0 0 0',
                                        zIndex: 50,
                                        name: 'containerDashboard_User_AyohaRewardRankingBar02_Bar',
                                        //style: {
                                        //    // background: '#D25959',
                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                        //    // border: '2px'
                                        //},
                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                        //  style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-bottom:2px none white;border-left:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center',
                                        },
                                        items: [
                                            {
                                                html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>2</b></div>'
                                            }
                                        ]

                                    }



                             ]
                         },


                          {
                              xtype: 'container',
                              width: '31%',
                              height: 400,
                              margin: '0 0 0 6',
                              name: 'containerDashboard_User_AyohaRewardRankingBar01',
                              //style: {
                              //    // background: '#D25959',
                              //    background: 'rgba(76, 175, 80, 0.3);',
                              //    // border: '2px'
                              //},
                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                              style: 'background-color:transparent',
                              layout: {
                                  type: 'vbox',
                                  pack: 'end',
                                  align: 'center',
                              },

                              items: [


                                  {
                                      //xtype: 'button',

                                      xtype: 'container',
                                      style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.5);',
                                      height: 90,
                                      width: 90,
                                      margin: '-38 0 0 0',
                                      id: 'btnDashboard_User_AyohaRewardRanking01',
                                      //badgeText: "2",
                                      //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                      //ui: 'plain',
                                      //handler: function () {



                                      //}

                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center',
                                      },
                                      items: [
                                          {
                                              height: 80,
                                              width: 80,
                                              id: 'imgDashboard_User_AyohaRewardRanking01',
                                              html: '<img src="resources/icons/founder.jpg"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                          }
                                      ]
                                  },
                                   {
                                       margin: '0 0 0 0',
                                       id: 'htmlDashboard_User_AyohaRewardRanking01_Name',
                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                       html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Mizi</b></div>'
                                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                   },
                                    {
                                        margin: '-2 0 0 0',
                                        id: 'htmlDashboard_User_AyohaRewardRanking01_AyohaPoint',
                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>4870 Point</b></div>'
                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                    },

                                     {
                                         xtype: 'container',
                                         width: 110,
                                         height: 220,
                                         zIndex: 50,
                                         margin: '0 0 0 0',
                                         name: 'containerDashboard_User_AyohaRewardRankingBar01_Bar',
                                         //style: {
                                         //    // background: '#D25959',
                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                         //    // border: '2px'
                                         //},
                                         //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                         style: 'background-color:#FF69B4;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         items: [
                                             {
                                                 html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>1</b></div>'
                                             }
                                         ]

                                     }


                              ]
                          },





                           {
                               xtype: 'container',
                               width: '31%',
                               height: 400,
                               margin: '0 0 0 0',
                               name: 'containerDashboard_User_AyohaRewardRankingBar03',
                               //style: {
                               //    // background: '#D25959',
                               //    background: 'rgba(76, 175, 80, 0.3);',
                               //    // border: '2px'
                               //},
                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                               style: 'background-color:transparent',
                               layout: {
                                   type: 'vbox',
                                   pack: 'end',
                                   align: 'center',
                               },

                               items: [


                                    //{
                                    //    xtype: 'button',
                                    //    height: 70,
                                    //    width: 70,
                                    //    margin: '20 0 0 0',
                                    //    id: 'btnDashboard_User_AyohaRewardRanking03',
                                    //    //badgeText: "2",
                                    //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/anisAqilahImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                    //    ui: 'plain',
                                    //    handler: function () {



                                    //    }
                                    //},

                                    {
                                        //xtype: 'button',

                                        xtype: 'container',
                                        style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                        height: 80,
                                        width: 80,
                                        margin: '-38 0 0 0',
                                        id: 'btnDashboard_User_AyohaRewardRanking03',
                                        //badgeText: "2",
                                        //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                        //ui: 'plain',
                                        //handler: function () {



                                        //}

                                        layout: {
                                            type: 'vbox',
                                            pack: 'center',
                                            align: 'center',
                                        },
                                        items: [
                                            {
                                                height: 70,
                                                width: 70,
                                                id: 'imgDashboard_User_AyohaRewardRanking03',
                                                html: '<img src="resources/icons/anisAqilahImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                            }
                                        ]
                                    },
                                    {
                                        margin: '0 0 0 0',
                                        id: 'htmlDashboard_User_AyohaRewardRanking03_Name',
                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>A.Aqilah</b></div>'
                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                    },
                                     {
                                         margin: '-2 0 0 0',
                                         id: 'htmlDashboard_User_AyohaRewardRanking03_AyohaPoint',
                                         //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                         html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>1120 Point</b></div>'
                                         // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                     },

                                        {
                                            xtype: 'container',
                                            width: 90,
                                            height: 90,
                                            zIndex: 50,
                                            margin: '0 0 0 0',
                                            name: 'containerDashboard_User_AyohaRewardRankingBar03_Bar',
                                            //style: {
                                            //    // background: '#D25959',
                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                            //    // border: '2px'
                                            //},
                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            style: 'background-color:#FADC77; border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                {
                                                    html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>3</b></div>'
                                                }
                                            ]

                                        }

                               ]
                           },

                    ]
                },
                {
                    xtype: 'container',
                    width: '95%',
                    height: 20,
                    margin: '0 0 0 10',
                    name: 'containerDashboard_User_AyohaRewardRankingLine',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                    // style: 'background-color:transparent;border-bottom:2px solid white;',
                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },


                    items: [
                         {
                             xtype: 'button',
                             id: 'btnMyDashboard_AyohaRewardRankingEnterContest',
                             // hidden:true,
                             //  badgeText: '1',
                             margin: '-550 0 0 0',
                             height: 30,
                             width: 30,
                             //html: '<img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name">',
                             ui: 'plain',
                             handler: function () {
                                 // FloatPanel_AyohaReward_TopTenRankingShow();
                                 FloatPanel_AyohaReward_ContestAdvertisementShow();
                             }
                         },
                         {
                             margin: '-620 0 0 -145',
                             zIndex: -100,
                             hidden: true,
                             html: '<img src="resources/icons/splashbg03.png" width="600px" height="600px" alt="Company Name">'
                             // html: '<img src="resources/icons/splashbg05.png" width="600px" height="600px" alt="Company Name">'
                         },
                          {
                              xtype: 'button',
                              id: 'btnMyDashboard_AyohaRewardRankingEnterContest2',
                              //  badgeText: '1',
                              margin: '-500 0 0 -645',

                              height: 50,
                              width: 50,
                              // html: '<img src="resources/icons/shiningIcon.png" width="40" height="40" alt="Company Name">',
                              ui: 'plain',
                              handler: function () {
                                  // FloatPanel_AyohaReward_TopTenRankingShow();
                                  FloatPanel_AyohaReward_ContestAdvertisementShow();
                              }
                          },
                          //{
                          //    xtype: 'button',
                          //    id: 'btnMyDashboard_AyohaRewardRankingEnterContest2',
                          //    //  badgeText: '1',
                          //    margin: '-500 0 0 60',

                          //    height: 50,
                          //    width: 50,
                          //    html: '<img src="resources/icons/shiningIcon.png" width="40" height="40" alt="Company Name">',
                          //    ui: 'plain',
                          //    handler: function () {
                          //        // FloatPanel_AyohaReward_TopTenRankingShow();
                          //        FloatPanel_AyohaReward_ContestAdvertisementShow();
                          //    }
                          //},
                         {
                             xtype: 'spacer'
                         },
                           {
                               xtype: 'button',
                               id: 'btnMyDashboard_AyohaRewardRankingEnterContest3',
                               hidden: true,
                               //  badgeText: '1',
                               margin: '-585 -20 0 0',
                               height: 60,
                               width: 60,
                               //   html: '<img src="resources/icons/shiningIcon.png" width="50" height="50" alt="Company Name">',
                               ui: 'plain',
                               handler: function () {
                                   // FloatPanel_AyohaReward_TopTenRankingShow();
                                   FloatPanel_AyohaReward_ContestAdvertisementShow();
                               }
                           },
                          //{
                          //    xtype: 'button',
                          //    id: 'btnMyDashboard_AyohaRewardRankingContest',
                          //    //  badgeText: '1',
                          //    //zIndex:-50,
                          //    margin: '-500 -20 0 0',
                          //    height: 160,
                          //    width: 160,
                          //    html: '<img src="resources/icons/enterContest-removebg-preview.png" width="150" height="150" alt="Company Name">',
                          //    ui: 'plain',
                          //    handler: function () {
                          //        // FloatPanel_AyohaReward_TopTenRankingShow();
                          //        FloatPanel_AyohaReward_ContestAdvertisementShow();
                          //    }
                          //},

                          {
                              xtype: 'container',
                              name: 'btnMyDashboard_AyohaRewardRankingContest',
                              //  badgeText: '1',
                              //zIndex:-50,
                              margin: '-750 -20 0 0',
                              height: 160,
                              width: 160,
                              style: 'background: transparent;',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center',
                              },
                              items: [

                                  {
                                      //hidden: true,
                                      id: 'imgMyDashboard_AyohaRewardRankingContest',
                                      html: '<img src="resources/icons/enterContest-removebg-preview.png" width="160" height="160" alt="Company Name" class="blink_me">',
                                  },

                              {
                                  hidden: true,
                                  id: 'imgMyDashboard_AyohaRewardRankingContestShining',
                                  //html: '<img src="resources/icons/shiningIcon.png" width="60" height="60" alt="Company Name">',
                                  html: '<img src="resources/icons/contestLogo01.png" width="100" height="100" alt="Company Name">',
                              },



                              ]
                              //  html: '<img src="resources/icons/enterContest-removebg-preview.png" width="150" height="150" alt="Company Name">',
                              //ui: 'plain',
                              //handler: function () {
                              //    // FloatPanel_AyohaReward_TopTenRankingShow();
                              //    FloatPanel_AyohaReward_ContestAdvertisementShow();
                              //}
                          },
                    ]
                },

                {

                    xtype: 'container',
                    width: '100%',
                    height: 10,
                    margin: '0 0 0 0',
                    name: 'containerDashboard_User_AyohaRewardRankingViewMyRanking',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                    style: 'background-color:transparent;',
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                       {
                           xtype: 'button',
                           id: 'btnMyDashboard_AyohaRewardRankingEnterContest4',
                           //  badgeText: '1',
                           margin: '0 0 0 0',
                           hidden: true,
                           height: 35,
                           width: 35,
                           //html: '<img src="resources/icons/shiningIcon.png" width="25" height="25" alt="Company Name">',
                           ui: 'plain',
                           handler: function () {
                               // FloatPanel_AyohaReward_TopTenRankingShow();
                               FloatPanel_AyohaReward_ContestAdvertisementShow();
                           }
                       },

                        {

                            xtype: 'container',
                            hidden: true,
                            //width: 160,
                            height: 10,
                            width: '100%',
                            margin: '0 0 0 0',
                            id: 'containerDashboard_User_AyohaRewardRankingViewMyRankingBtnID',
                            name: 'containerDashboard_User_AyohaRewardRankingViewMyRankingBtn',
                            //style: {
                            //    // background: '#D25959',
                            //    background: 'rgba(76, 175, 80, 0.3);',
                            //    // border: '2px'
                            //},
                            // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                            style: 'background-color:transparent;',
                            // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 20px 20px;',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items: [
                                //{
                                //    margin:'0 0 0 1',
                                //     html: '<font size=2 color=grey>View My Ranking</font>',
                                //},
                                // {
                                //     margin: '8 0 0 0',
                                //     html: '<img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 5px;">',
                                // }



                                //{
                                //    margin: '0 0 0 0',
                                //    height: 40,
                                //    width:40,
                                //    html: '<img src="resources/icons/contestrule04.png"  style="width: 40px; height: 40px;   margin:0px 0px 0px 0px;">',
                                //},
                                {
                                    margin: '-10 0 0 38',
                                    html: '<div style="background: transparent;width:90%;font-size: 11px;font-weight:normal;color:black;text-align:center;" >*<i>Dear contestant, please maintain your rank until the end of contest for entitlement to redeem the prize.</i></div>',
                                },
                                  {
                                      margin: '5 0 0 0',
                                      html: '<div style="background: transparent;width:100%;font-size: 11px;font-weight:normal;color:black;text-align:center;" ><img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:0px 0px 0px 0px;"></div>',
                                  },
                                  {
                                      margin: '-5 0 0 0',
                                      html: '<div style="background: transparent;width:100%;font-size: 11px;font-weight:normal;color:black;text-align:center;" ><u>View Ranking</u></div>',
                                  },

                            ]
                        },





                        {
                            xtype: 'container',

                            width: '100%',
                            height: 40,
                            margin: '0 0 0 0',
                            style: 'background-color:transparent;',
                            id: 'containerDashboard_User_AyohaRewardRankingEnterContestBtnID',
                            name: 'containerDashboard_User_AyohaRewardRankingEnterContestBtn',

                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [


                                {

                                    html: '<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'
                                    // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



                                },
                                  {

                                      html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'
                                      // html: '<img src="resources/icons/contest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'


                                  },



                            ]

                        },


                             {
                                 xtype: 'spacer'
                             },
                              {
                                  xtype: 'button',
                                  id: 'btnMyDashboard_AyohaRewardRankingEnterContest5',
                                  //  badgeText: '1',
                                  margin: '0 0 0 0',
                                  height: 25,
                                  width: 25,
                                  //  html: '<img src="resources/icons/shiningIcon.png" width="15" height="15" alt="Company Name">',
                                  ui: 'plain',
                                  handler: function () {
                                      // FloatPanel_AyohaReward_TopTenRankingShow();
                                      // FloatPanel_AyohaReward_ContestAdvertisementShow();
                                  }
                              },
                    ]

                },



                //{

                //    xtype: 'container',
                //    width: '100%',
                //    height: 40,
                //    margin: '0 0 0 0',
                //    name: 'containerDashboard_User_AyohaRewardRankingViewTop10Ranking',
                //    //style: {
                //    //    // background: '#D25959',
                //    //    background: 'rgba(76, 175, 80, 0.3);',
                //    //    // border: '2px'
                //    //},
                //    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                //    style: 'background-color:transparent;',
                //    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                //    layout: {
                //        type: 'hbox',
                //        pack: 'center',
                //        align: 'center',
                //    },
                //    items: [


                //        {
                //            xtype: 'button',
                //            height: 30,
                //            width: 180,

                //            margin: '0 0 0 0',
                //            id: 'btnDashboard_User_AyohaRewardRankingViewTop10Ranking',
                //            //badgeText: "2",
                //            // html: '<img src="resources/icons/crStampPurpleDashboard.png" width="70" height="70" alt="Company Name">',
                //            html: '<font size=2 color=white><u>View Top 10 Ranking</u></font>',
                //            ui: 'plain',
                //            handler: function () {

                //                //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                //                //  setupMovementMap(2);

                //                FloatPanel_AyohaReward_TopTenRankingShow();



                //                //Ext.getCmp('mainView').setActiveItem(16);
                //                //loadNotificationSummary();
                //            }
                //        },

                //    ]

                //},




                {

                    xtype: 'container',
                    width: '100%',
                    height: 40,
                    hidden: true,
                    margin: '0 0 0 0',
                    name: 'containerDashboard_User_AyohaRewardShiningBottom',
                    //style: {
                    //    // background: '#D25959',
                    //    background: 'rgba(76, 175, 80, 0.3);',
                    //    // border: '2px'
                    //},
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                    style: 'background-color:transparent;',
                    // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [

                              {
                                  xtype: 'button',
                                  id: 'btncontainerDashboard_User_AyohaRewardShiningBottomShining',
                                  //  badgeText: '1',
                                  margin: '0 0 0 0',
                                  height: 45,
                                  width: 45,
                                  //  html: '<img src="resources/icons/shiningIcon.png" width="35" height="35" alt="Company Name">',
                                  ui: 'plain',
                                  handler: function () {
                                      //FloatPanel_AyohaReward_ViewMyRankingShow();
                                  }
                              },

                    ]

                },


                ///////////////////////////////////////////////// End ayoha reward contest ///////////////




/////////////////////////////merchant redemption


///////////////////////////////////////////////////////////




////////////////////////////////////////////AyohaTAPS Contest


{
xtype: 'container',
width: '100%',
margin: '120 0 0 0',
id: 'Dashboard_containerAyohaRewardContest01',
name: 'Dashboard_namecontainerAyohaRewardContest01',
height: 270,
layout: {
  type: 'vbox',
  pack: 'start',
  align: 'center',
},

items: [
  {
      xtype: 'container',
      width: '100%',
      /// hidden:true,
      margin: '0 0 0 0',
      height: 10,

      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
      style: 'background-color:transparent',
      layout: {
          type: 'hbox',
          pack: 'left',
          align: 'left',
      },
      items: [
           {
               margin: '0 0 0 18',
               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
               html: '<div style="color:black;text-align: center;font-size:14px;width:100%;">Ayoha TAP and Win</div>'
               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
           },
      ]
  },
   {
       xtype: 'container',
       width: '92%',
       /// hidden:true,
       margin: '15 0 0 0',
       height: 200,

       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
       style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
       layout: {
           type: 'hbox',
           pack: 'center',
           align: 'center',
       },
       items: [
            {
                height: 198,
                width: '99%',
                // margin: '0 0 0 14',
                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                id: 'AyohaRewardContest1',
                html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/ayohaTapContest.png"/>'
                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            },
       ]
   },
   {
       xtype: 'container',

       width: '100%',
       height: 40,
       margin: '20 0 0 0',
       style: 'background-color:transparent;',
       id: 'containerDashboard_User_AyohaRewardContest01BtnID',
       name: 'containerDashboard_User_AyohaRewardContest01Btn',

       layout: {
           type: 'hbox',
           pack: 'center',
           align: 'center',
       },
       items: [


           {
               id: 'htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt',
               html: '<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'
               // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'



           },
             //{

             //    html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'
             //    // html: '<img src="resources/icons/contest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'


             //},



       ]

   },
]
},











///////////////////////////////




//{
//    xtype: 'container',
//    width: '100%',
//    height:300
//},



                ///////////end tempat baru



          {
              xtype: 'container',
              width: '100%',
              hidden: true,
              margin: '0 0 0 0',
              id: 'containerDashboard_User_MembershipActivities',
              style: {
                  // background: '#D25959',
                  background: 'transparent',
                  // border: '2px'
              },
              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
              layout: {
                  type: 'hbox',
                  pack: 'left',
                  align: 'left',
              },
              items: [
                   {
                       margin: '20 0 0 14',
                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                       html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Loyalty Campaing Activity</b></div>'
                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                   },
              ]
          },













           //////////




           ///////////////////////////////////////////////////////////////////////////////

           //////////////////Ayoha Voucher////
           {
               xtype: 'container',
               width: '100%',
               /// hidden:true,
               margin: '120 0 0 0',
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
                        id: 'htmlDashboard_AyohaVaucherTxt',
                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Voucher</b></div>'
                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                    },
                     {
                         xtype: 'spacer'
                     },
   {

       margin: '0 14 0 0',
       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
       html: '<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

   }

                     //{
                     //    margin: '-4 0 0 14',
                     //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                     //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1.-Welcome/Opening Account Voucer</div>'
                     //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                     //},
               ]
           },



            {
                xtype: 'container',
                width: '98%',
                /// hidden:true,
                margin: '-5 0 0 0',
                height: 222,
                style: 'background-color: white;',
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center',
                },
                items: [
                     {

                         id: 'Dashboard_AyohaVoucherListID',
                         // margin: '-4 0 0 14',
                         // margin: '-5 0 0 0',
                         // store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore,
                         // grouped: true,
                         xtype: 'dataview',
                         // xtype: 'list',
                         height: 200,
                         //scrollable: true,
                         // scrollable: 'horizontal',
                         // indicators: false,
                         //inline: true,
                         inline: {
                             wrap: false
                         },
                         scrollable: {
                             direction: 'horizontal',
                             indicators: false,
                         },
                         width: '100%',
                         cls: 'dataview-item',
                         //itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>',
                         itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:100%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
                         emptyText: '<div style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="resources/icons/NotAvailableVoucher.png" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:9px;word-wrap: break-word;font-weight:normal;width:100%">*Vouchers will be given by ayoha reward to users when users reach a certain level of spending in the ayoha merchant online store and also certain special days such as religious days, national independence day, birthdays and so on.</div></div>',
                     },
                     //{
                     //    height: 198,
                     //    width: '100%',
                     //    // margin: '0 0 0 14',
                     //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                     //    html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/AyohaVoucher.png"/>'
                     //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                     //},
                ]
            },


           //////



/////////Start VIA Advertisement

{
xtype: 'container',
width: '100%',
hidden: true,
margin: '280 0 0 0',
style: {
  // background: '#D25959',
  background: 'transparent',
  // border: '2px'
},
//  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
// style: 'border-bottom:2px solid #D25959;background-color:transparent',
layout: {
  type: 'hbox',
  pack: 'left',
  align: 'left',
},
items: [
   {
       margin: '0 0 0 14',
       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>VIA Advertisement</b></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
   },
]
},
////////////////////////////                {
////////////////////////////                    xtype: 'container',
////////////////////////////                    width: '100%',
////////////////////////////                    height: 250,                   
////////////////////////////                    margin: '0 0 0 0',
////////////////////////////                    name: 'namecontainerVIA_Advertisement',
////////////////////////////                    //style: {
////////////////////////////                    //    // background: '#D25959',
////////////////////////////                    //    background: 'rgba(76, 175, 80, 0.3);',
////////////////////////////                    //    // border: '2px'
////////////////////////////                    //},
////////////////////////////                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
////////////////////////////                     style: 'background-color:transparent',


////////////////////////////                   // style: 'background-color:white;border-radius: 10px 10px 10px 10px;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;',

////////////////////////////                    layout: {
////////////////////////////                        type: 'hbox',
////////////////////////////                        pack: 'center',
////////////////////////////                        align: 'center',
////////////////////////////                    },
////////////////////////////                    items: [
////////////////////////////                        {
////////////////////////////                            xtype: 'spacer'
////////////////////////////                        },
////////////////////////////                        {
////////////////////////////                            xtype: 'container',
////////////////////////////                            width: '95%',
////////////////////////////                            height: 330,
////////////////////////////                            margin: '0 0 0 0',
////////////////////////////                            //style: {
////////////////////////////                            //    // background: '#D25959',
////////////////////////////                            //    background: 'rgba(76, 175, 80, 0.3);',
////////////////////////////                            //    // border: '2px'
////////////////////////////                            //},
////////////////////////////                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
////////////////////////////                            style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 0px 0px;',
////////////////////////////                            layout: {
////////////////////////////                                type: 'vbox',
////////////////////////////                                pack: 'center',
////////////////////////////                                align: 'center',
////////////////////////////                            },
////////////////////////////                            //scrollable: {
////////////////////////////                            //    direction: 'horizontal',
////////////////////////////                            //    directionLock: true
////////////////////////////                            //},
////////////////////////////                            items: [

////////////////////////////{
////////////////////////////    xtype: 'container',

////////////////////////////    // hidden: true,
////////////////////////////    style: 'background-color: transparent;',
////////////////////////////    //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
////////////////////////////    // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

////////////////////////////    height: 0,
////////////////////////////    width: '100%',
////////////////////////////    // margin: '70 0 0 0',
////////////////////////////    id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia',
////////////////////////////    layout: {

////////////////////////////        type: 'vbox',
////////////////////////////        pack: 'start',
////////////////////////////        align: 'left'
////////////////////////////    },
////////////////////////////    items: [
////////////////////////////        {
////////////////////////////            xtype: 'container',
////////////////////////////            margin: '2 0 0 0',
////////////////////////////            // hidden: true,
////////////////////////////            style: 'background-color: transparent;',
////////////////////////////            //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
////////////////////////////            // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

////////////////////////////            height: 3,
////////////////////////////            width: '100%',
////////////////////////////            // margin: '70 0 0 0',
////////////////////////////            id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia_TimingBar',
////////////////////////////            layout: {

////////////////////////////                type: 'hbox',
////////////////////////////                pack: 'center',
////////////////////////////                align: 'center'
////////////////////////////            },
////////////////////////////            items: [
////////////////////////////                {
////////////////////////////                    xtype: 'spacer'
////////////////////////////                },
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing0',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    // hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">',

////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing1',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    hidden: true,
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing2',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    hidden: true,
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing3',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing4',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing5',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing6',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing7',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing8',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Timing9',
////////////////////////////    margin: '0 0 0 0',
////////////////////////////    flex: 1,
////////////////////////////    hidden: true,
////////////////////////////    // iconCls: 'list',
////////////////////////////    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////    // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
////////////////////////////    html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {


////////////////////////////    }
////////////////////////////},
////////////////////////////{
////////////////////////////    xtype: 'spacer'
////////////////////////////}, {
////////////////////////////    xtype: 'button',
////////////////////////////    id: 'btnDashboard_PreviewAdvertisement_Start',
////////////////////////////    hidden: true,
////////////////////////////    margin: '7 10 0 0',
////////////////////////////    height: 25,
////////////////////////////    width: 25,
////////////////////////////    html: '<img src="resources/icons/playPurpleOne.png" style="width: 15px; height: 15px;">',
////////////////////////////    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////    ui: 'plain',
////////////////////////////    handler: function () {
////////////////////////////        VIAAdvertismentAutoSlide();
////////////////////////////        Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(true);
////////////////////////////        Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(false);

////////////////////////////    }
////////////////////////////},
////////////////////////////     {
////////////////////////////         xtype: 'button',
////////////////////////////         id: 'btnDashboard_PreviewAdvertisement_Stop',
////////////////////////////         margin: '7 10 0 0',
////////////////////////////         height: 25,
////////////////////////////         width: 25,
////////////////////////////         html: '<img src="resources/icons/stopPurple.png" style="width: 15px; height: 15px;">',
////////////////////////////         // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////         ui: 'plain',
////////////////////////////         handler: function () {

////////////////////////////             clearInterval(VIAAdvertismentAutoSlideTimer);
////////////////////////////             Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(false);
////////////////////////////             Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(true);

////////////////////////////         }
////////////////////////////     },
////////////////////////////            ]
////////////////////////////        },

////////////////////////////        {
////////////////////////////            xtype: 'container',
////////////////////////////            //   margin: '0 0 0 5',
////////////////////////////            // hidden: true,
////////////////////////////           style: 'background-color: transparent;',
////////////////////////////            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
////////////////////////////           // style: 'background-color:white;border-radius: 10px 10px 10px 10px;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;',
////////////////////////////            //height: 25,
////////////////////////////            //width: 70,
////////////////////////////            margin: '25 15 0 0',
////////////////////////////            id: 'containerDashboard_PreviewAdvertisementHeaderOutter',
////////////////////////////            layout: {

////////////////////////////                type: 'hbox',
////////////////////////////                pack: 'start',
////////////////////////////                align: 'center'
////////////////////////////            },
////////////////////////////            items: [


////////////////////////////              {
////////////////////////////                  xtype: 'button',
////////////////////////////                  id: 'btnDashboard_PreviewAdvertisement_PicProfile',
////////////////////////////                  margin: '0 0 0 10',
////////////////////////////                  height: 60,
////////////////////////////                  width: 60,
////////////////////////////                  // iconCls: 'list',
////////////////////////////                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////                  html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


////////////////////////////                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////                  ui: 'plain',
////////////////////////////                  handler: function () {


////////////////////////////                  }
////////////////////////////              },
////////////////////////////              {
////////////////////////////                  xtype: 'button',
////////////////////////////                  id: 'btnDashboard_PreviewAdvertisement_UserNameProfile',
////////////////////////////                  margin: '0 0 0 0',
////////////////////////////                  height: 60,
////////////////////////////                  width: 250,
////////////////////////////                  // iconCls: 'list',
////////////////////////////                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
////////////////////////////                  html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

////////////////////////////                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
////////////////////////////                  ui: 'plain',
////////////////////////////                  handler: function () {


////////////////////////////                  }
////////////////////////////              },
////////////////////////////            {
////////////////////////////                xtype: 'spacer'
////////////////////////////            },



////////////////////////////            ]
////////////////////////////        },

////////////////////////////    ]
////////////////////////////},



////////////////////////////                                {
////////////////////////////                                    xtype: 'carousel',
////////////////////////////                                    id: 'Dashboard_PreviewAdvertisement_Carousel',
////////////////////////////                                    name:'Dashboard_PreviewAdvertisement_CarouselName',
////////////////////////////                                    width: '99%',
////////////////////////////                                    height: '100%',

////////////////////////////                                    //delay :2000,
////////////////////////////                                    //  carouselSlideDelay: 1000,
////////////////////////////                                    // autoSlide: true,
////////////////////////////                                    indicator: false,


////////////////////////////                                    //initialize: function (c) {
////////////////////////////                                    //    this.element.on({
////////////////////////////                                    //        tap: function (e, node, options) {
////////////////////////////                                    //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
////////////////////////////                                    //        }
////////////////////////////                                    //    });
////////////////////////////                                    //},


////////////////////////////                                    listeners:
////////////////////////////                             {

////////////////////////////                                 activeitemchange: function (container, newCard, oldCard, index) {

////////////////////////////                                     //console.log("newCard Index:"+carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard));
////////////////////////////                                     //console.log("oldCard Index:" + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard));




////////////////////////////                                     if (ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] != 'NULL') {
////////////////////////////                                         //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
////////////////////////////                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
////////////////////////////                                         Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
////////////////////////////                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] + '</div>');

////////////////////////////                                     } else {
////////////////////////////                                         Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
////////////////////////////                                         Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
////////////////////////////                                     }

////////////////////////////                                     if (carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard) > carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard)) {
////////////////////////////                                         // console.log("kanan");
////////////////////////////                                         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');

////////////////////////////                                     } else {
////////////////////////////                                         //  console.log("kiri");
////////////////////////////                                         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">')
////////////////////////////                                     }



////////////////////////////                                 },

////////////////////////////                             },

////////////////////////////                                },

////////////////////////////                            ]
////////////////////////////                        },

////////////////////////////                        {
////////////////////////////                            xtype: 'spacer'
////////////////////////////                        },
////////////////////////////                    ]

////////////////////////////                },
          ////////////////////{
          ////////////////////    xtype: 'container',
          ////////////////////    width: '93.6%',
          ////////////////////    height: 60,
          ////////////////////    //hidden:true,
          ////////////////////    margin: '14 0 0 12',

          ////////////////////    layout: {
          ////////////////////        type: 'vbox',
          ////////////////////        pack: 'center',
          ////////////////////        align: 'center',
          ////////////////////    },
          ////////////////////    id: 'containerDashboard_Advertisement_CaptionText',
          ////////////////////    // hidden:true,

          ////////////////////    style: 'background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;',
          ////////////////////    items: [
          ////////////////////         {
          ////////////////////             id: 'htmlDashboard_Advertisement_CaptionText',
          ////////////////////             html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold"></div>',
          ////////////////////         }
          ////////////////////    ]
          ////////////////////},

          //////////////////////////////////{
          //////////////////////////////////    xtype: 'container',
          //////////////////////////////////    width: '94.2%',
          //////////////////////////////////    height: 46,
          //////////////////////////////////    /// hidden:true,
          //////////////////////////////////    margin: '1 0 0 11',
          //////////////////////////////////    style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 10px 10px;',
          //////////////////////////////////    //style: {
          //////////////////////////////////    //    // background: '#D25959',
          //////////////////////////////////    //    background: 'transparent',
          //////////////////////////////////    //    // border: '2px'
          //////////////////////////////////    //},
          //////////////////////////////////    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
          //////////////////////////////////    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
          //////////////////////////////////    layout: {
          //////////////////////////////////        type: 'vbox',
          //////////////////////////////////        pack: 'center',
          //////////////////////////////////        align: 'center',
          //////////////////////////////////    },
          //////////////////////////////////    items: [

          //////////////////////////////////        {
          //////////////////////////////////            xtype: 'container',
          //////////////////////////////////            id: 'DashboardAdvertisementButtonHeader_bottom',
          //////////////////////////////////            //hidden:true,
          //////////////////////////////////            width: '100%',
          //////////////////////////////////            style: "background-color: transparent",
          //////////////////////////////////            //style: "background-color: #F35B57;",
          //////////////////////////////////            margin: '-5 0 0 0',
          //////////////////////////////////            layout: {
          //////////////////////////////////                type: 'hbox',
          //////////////////////////////////                pack: 'center',
          //////////////////////////////////                align: 'center'

          //////////////////////////////////            },
          //////////////////////////////////            items: [
          //////////////////////////////////                 //{
          //////////////////////////////////                 //    width: '75%',
          //////////////////////////////////                 //    margin: '0 0 0 5',
          //////////////////////////////////                 //    hidden:true,
          //////////////////////////////////                 //    id: 'htmlDasboardAdvertisementTitleTxt',
          //////////////////////////////////                 //    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">Ramadhan AlMubarak 2021 Promotion.Started:March 2020</div>',

          //////////////////////////////////                 //    // html: '<font size=2 color=black><b>Contact Us</b></font>',
          //////////////////////////////////                 //},
          //////////////////////////////////                 {
          //////////////////////////////////                     xtype: 'container',

          //////////////////////////////////                     //hidden:true,
          //////////////////////////////////                     width: '60%',
          //////////////////////////////////                     style: "background-color: transparent",
          //////////////////////////////////                     name: 'nameContainerDashboardVIAAdvertisement_eStore',
          //////////////////////////////////                     //style: "background-color: #F35B57;",
          //////////////////////////////////                     margin: '0 0 0 0',
          //////////////////////////////////                     layout: {
          //////////////////////////////////                         type: 'hbox',
          //////////////////////////////////                         pack: 'left',
          //////////////////////////////////                         align: 'left'

          //////////////////////////////////                     },
          //////////////////////////////////                     items: [
          //////////////////////////////////                          {
          //////////////////////////////////                              xtype: 'panel',
          //////////////////////////////////                              width: 5
          //////////////////////////////////                          },
          //////////////////////////////////                          {
          //////////////////////////////////                              //xtype: 'button',
          //////////////////////////////////                              height: 38,
          //////////////////////////////////                              width: 38,
          //////////////////////////////////                              //margin: '0 0 0 0',
          //////////////////////////////////                              //hidden: false,
          //////////////////////////////////                              margin: '5 0 0 0',
          //////////////////////////////////                              id: 'DashboardVIAAdvertisement_eStoreIcon',
          //////////////////////////////////                              //badgeText: "2",
          //////////////////////////////////                              html: '<div><img src="https://42.1.63.57/AyohaImgCard/eStoreLogo/Default.png" width="38" height="38" alt="Company Name"></div>',

          //////////////////////////////////                          },
          //////////////////////////////////                          {
          //////////////////////////////////                              xtype: 'panel',
          //////////////////////////////////                              width:5
          //////////////////////////////////                          },
          //////////////////////////////////                                                {
          //////////////////////////////////                                                    margin: '0 0 0 0',
          //////////////////////////////////                                                    id: 'DashboardVIAAdvertisement_eStoreName',
          //////////////////////////////////                                                    html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>Kiah Store</b></font></div></div>',
          //////////////////////////////////                                                },
          //////////////////////////////////                     ]

          //////////////////////////////////                 },
          //////////////////////////////////                 {
          //////////////////////////////////                     xtype: 'container',

          //////////////////////////////////                     //hidden:true,
          //////////////////////////////////                     width: '40%',
          //////////////////////////////////                     style: "background-color: transparent",
          //////////////////////////////////                     id: 'DashboardAdvertisementButton_bottom',
          //////////////////////////////////                     margin: '8 0 0 0',
          //////////////////////////////////                     layout: {
          //////////////////////////////////                         type: 'hbox',
          //////////////////////////////////                         pack: 'right',
          //////////////////////////////////                         align: 'right'

          //////////////////////////////////                     },
          //////////////////////////////////                     items: [


          //////////////////////////////////                         {
          //////////////////////////////////                             xtype: 'button',
          //////////////////////////////////                             height: 36,
          //////////////////////////////////                             width: 36,
          //////////////////////////////////                             margin: '0 0 0 0',
          //////////////////////////////////                           //  hidden: true,
          //////////////////////////////////                             id: 'btnDashboardAdvertisementbottom_Location',
          //////////////////////////////////                             //badgeText: "2",
          //////////////////////////////////                             html: '<div ><img src="resources/icons/locationThree.png" width="26" height="26" alt="Company Name"></div>',
          //////////////////////////////////                             ui: 'plain',
          //////////////////////////////////                             handler: function () {
          //////////////////////////////////                                 globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
          //////////////////////////////////                                 var task = Ext.create('Ext.util.DelayedTask', function () {
          //////////////////////////////////                                     FloatPanel_PreviewAdvertisement_OpenLocation();
          //////////////////////////////////                                 });
          //////////////////////////////////                                 task.delay(150);

          //////////////////////////////////                                 //var Coordinate = globalEnterpriseCoordinate.split(",");
          //////////////////////////////////                                 //var PlaceMarkerlats = Coordinate[0];
          //////////////////////////////////                                 //var PlaceMarkerlngs = Coordinate[1];





          //////////////////////////////////                                 //if (PlaceMarkerlats) {
          //////////////////////////////////                                 //    if (PlaceMarkerlngs) {
          //////////////////////////////////                                 //        window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlats + "," + PlaceMarkerlngs, '_system'); return false;
          //////////////////////////////////                                 //    } else {

          //////////////////////////////////                                 //        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
          //////////////////////////////////                                 //    }
          //////////////////////////////////                                 //} else {
          //////////////////////////////////                                 //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
          //////////////////////////////////                                 //}






          //////////////////////////////////                             }
          //////////////////////////////////                         },
          //////////////////////////////////                                        {
          //////////////////////////////////                                            xtype: 'button',
          //////////////////////////////////                                            height: 38,
          //////////////////////////////////                                            width: 38,
          //////////////////////////////////                                            margin: '0 0 0 0',
          //////////////////////////////////                                           // hidden: true,
          //////////////////////////////////                                            id: 'btnDashboardAdvertisementbottom_FB',
          //////////////////////////////////                                            //badgeText: "2",
          //////////////////////////////////                                            html: '<div ><img src="resources/icons/Facebooklogo.png" width="28" height="28" alt="Company Name"></div>',
          //////////////////////////////////                                            ui: 'plain',
          //////////////////////////////////                                            handler: function () {
          //////////////////////////////////                                                //alert(GetEnterpriseFacebook());
          //////////////////////////////////                                                //window.open("fb://page/1999591407027990" + ModifiedMediaFileName);
          //////////////////////////////////                                                // setTimeout(function () { window.open("fb://profile/100002717204522"); }, 25);
          //////////////////////////////////                                                //setTimeout(function () { window.open("fb://page/107468437955395"); }, 25);
          //////////////////////////////////                                                globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
          //////////////////////////////////                                                var task = Ext.create('Ext.util.DelayedTask', function () {
          //////////////////////////////////                                                    FloatPanel_PreviewAdvertisement_OpenFB();
          //////////////////////////////////                                                });
          //////////////////////////////////                                                task.delay(150);



          //////////////////////////////////                                                //if (globalVIAEnterpriseFacebookUrl) {
          //////////////////////////////////                                                //    setTimeout(function () { window.open("fb://page/" + globalVIAEnterpriseFacebookUrl + "", '_system'); return false; }, 25);

          //////////////////////////////////                                                //} else {

          //////////////////////////////////                                                //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
          //////////////////////////////////                                                //}


          //////////////////////////////////                                            }
          //////////////////////////////////                                        },
          //////////////////////////////////                                         {
          //////////////////////////////////                                             xtype: 'button',
          //////////////////////////////////                                             height: 38,
          //////////////////////////////////                                             width: 38,
          //////////////////////////////////                                             margin: '0 0 0 0',
          //////////////////////////////////                                             hidden: true,
          //////////////////////////////////                                             id: 'btnDashboardAdvertisementbottom_Insta',
          //////////////////////////////////                                             //badgeText: "2",
          //////////////////////////////////                                             html: '<div ><img src="resources/icons/instagram.png" width="28" height="28" alt="Company Name"></div>',
          //////////////////////////////////                                             ui: 'plain',
          //////////////////////////////////                                             handler: function () {
          //////////////////////////////////                                                 globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
          //////////////////////////////////                                                 var task = Ext.create('Ext.util.DelayedTask', function () {
          //////////////////////////////////                                                     FloatPanel_PreviewAdvertisement_OpenInsta();
          //////////////////////////////////                                                 });
          //////////////////////////////////                                                 task.delay(150);



          //////////////////////////////////                                                 //if (globalVIAEnterpriseInstagramUrl) {

          //////////////////////////////////                                                 //    setTimeout(function () { window.open("instagram://user?username=" + globalVIAEnterpriseInstagramUrl + "", '_system'); return false; }, 25);

          //////////////////////////////////                                                 //} else {

          //////////////////////////////////                                                 //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Instagram Link.,Help Merchant to know this Message!", "Insta")
          //////////////////////////////////                                                 //}




          //////////////////////////////////                                             }
          //////////////////////////////////                                         },
          //////////////////////////////////                                         {
          //////////////////////////////////                                             xtype: 'button',
          //////////////////////////////////                                             height: 38,
          //////////////////////////////////                                             width: 38,
          //////////////////////////////////                                             margin: '0 0 0 0',
          //////////////////////////////////                                             hidden: true,
          //////////////////////////////////                                             id: 'btnDashboardAdvertisementbottom_Twitter',
          //////////////////////////////////                                             //badgeText: "2",
          //////////////////////////////////                                             html: '<div ><img src="resources/icons/twitter.png" width="28" height="28" alt="Company Name"></div>',
          //////////////////////////////////                                             ui: 'plain',
          //////////////////////////////////                                             handler: function () {

          //////////////////////////////////                                                 setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

          //////////////////////////////////                                             }
          //////////////////////////////////                                         },
          //////////////////////////////////                                         {
          //////////////////////////////////                                             xtype: 'button',
          //////////////////////////////////                                             height: 28,
          //////////////////////////////////                                             width: 28,
          //////////////////////////////////                                             margin: '0 0 0 0',
          //////////////////////////////////                                             id: 'btnDashboardAdvertisementbottom_Web',
          //////////////////////////////////                                             hidden: true,
          //////////////////////////////////                                             //badgeText: "2",
          //////////////////////////////////                                             // html: '<div ><img src="resources/icons/websiteIcon.png" width="18" height="18" alt="Company Name"></div>',
          //////////////////////////////////                                             ui: 'plain',
          //////////////////////////////////                                             handler: function () {

          //////////////////////////////////                                                 window.open(GetEnterpriseWebsite());
          //////////////////////////////////                                                 //setTimeout(function () { window.open(GetEnterpriseWebsite()); }, 25);
          //////////////////////////////////                                                 //setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

          //////////////////////////////////                                             }
          //////////////////////////////////                                         },
          //////////////////////////////////                                           {
          //////////////////////////////////                                               xtype: 'button',
          //////////////////////////////////                                               height: 38,
          //////////////////////////////////                                               width: 38,
          //////////////////////////////////                                               margin: '0 0 0 0',
          //////////////////////////////////                                               id: 'btnDashboardAdvertisementbottom_Email',
          //////////////////////////////////                                               hidden: true,
          //////////////////////////////////                                               //badgeText: "2",
          //////////////////////////////////                                               // html: '<div ><img src="resources/icons/EmailRed.png" width="18" height="18" alt="Company Name"></div>',
          //////////////////////////////////                                               ui: 'plain',
          //////////////////////////////////                                               handler: function () {

          //////////////////////////////////                                                   window.open("mailto:" + GetEnterpriseEmail() + "");

          //////////////////////////////////                                               }
          //////////////////////////////////                                           },
          //////////////////////////////////                                          {
          //////////////////////////////////                                              xtype: 'button',
          //////////////////////////////////                                              height: 28,
          //////////////////////////////////                                              width: 28,
          //////////////////////////////////                                              margin: '0 0 0 0',
          //////////////////////////////////                                              id: 'btnDashboarddvertisementbottom_Call',
          //////////////////////////////////                                              hidden: true,
          //////////////////////////////////                                              //badgeText: "2",
          //////////////////////////////////                                              html: '<div ><img src="resources/icons/calling.png" width="18" height="18" alt="Company Name"></div>',
          //////////////////////////////////                                              ui: 'plain',
          //////////////////////////////////                                              handler: function () {

          //////////////////////////////////                                                  setTimeout(function () { window.open("tel:0133376958"); }, 25);


          //////////////////////////////////                                              }
          //////////////////////////////////                                          },
          //////////////////////////////////                                          //{
          //////////////////////////////////                                          //    //xtype: 'button',
          //////////////////////////////////                                          //    //align: 'stretch',
          //////////////////////////////////                                          //    //height: 32,
          //////////////////////////////////                                          //    //width: 92,
          //////////////////////////////////                                          //    id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
          //////////////////////////////////                                          //    // ui: 'plain',
          //////////////////////////////////                                          //    //  window.open("http://" + url, "_blank");
          //////////////////////////////////                                          //    //  html: '<img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" />'


          //////////////////////////////////                                          //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatApplogosnew.png" style="width: 22px; height: 22px;" /></a>'
          //////////////////////////////////                                          //}
          //////////////////////////////////                                          {
          //////////////////////////////////                                              xtype: 'button',
          //////////////////////////////////                                              height: 38,
          //////////////////////////////////                                              width: 38,
          //////////////////////////////////                                              margin: '0 0 0 0',
          //////////////////////////////////                                              hidden: true,
          //////////////////////////////////                                              id: 'btnDashboardAdvertisementbottom_Wassap',
          //////////////////////////////////                                              //badgeText: "2",
          //////////////////////////////////                                              html: '<img src="resources/icons/whatsapp01.png" width="28" height="28" alt="Company Name"/>',
          //////////////////////////////////                                              ui: 'plain',
          //////////////////////////////////                                              handler: function () {
          //////////////////////////////////                                                  globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
          //////////////////////////////////                                                  var task = Ext.create('Ext.util.DelayedTask', function () {
          //////////////////////////////////                                                      FloatPanel_PreviewAdvertisement_OpenWhatsApp();
          //////////////////////////////////                                                  });
          //////////////////////////////////                                                  task.delay(150);

          //////////////////////////////////                                                  //if (globalVIAPICContactNo) {
          //////////////////////////////////                                                  //    // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
          //////////////////////////////////                                                  //    //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
          //////////////////////////////////                                                  //    window.open("https://api.whatsapp.com/send?phone=" + globalVIAPICContactNo + "&text=Hi", '_system'); return false;
          //////////////////////////////////                                                  //    // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
          //////////////////////////////////                                                  //} else {
          //////////////////////////////////                                                  //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
          //////////////////////////////////                                                  //}


          //////////////////////////////////                                              }
          //////////////////////////////////                                          },


          //////////////////////////////////                                          {
          //////////////////////////////////                                              xtype: 'panel',
          //////////////////////////////////                                              width:5
          //////////////////////////////////                                          }


          //////////////////////////////////                          //{

          //////////////////////////////////                          //    margin: '0 0 0 0',
          //////////////////////////////////                          //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;">Contact Us</div>',

          //////////////////////////////////                          //    // html: '<font size=2 color=black><b>Contact Us</b></font>',
          //////////////////////////////////                          //},
          //////////////////////////////////                          //{
          //////////////////////////////////                          //    xtype: 'container',
          //////////////////////////////////                          //    id: 'DashboardAdvertisementButton_bottom',
          //////////////////////////////////                          //    //hidden:true,
          //////////////////////////////////                          //    width: '100%',
          //////////////////////////////////                          //    style: "background-color: transparent",
          //////////////////////////////////                          //    //style: "background-color: #F35B57;",
          //////////////////////////////////                          //    margin: '0 0 0 0',
          //////////////////////////////////                          //    layout: {
          //////////////////////////////////                          //        type: 'hbox',
          //////////////////////////////////                          //        pack: 'center',
          //////////////////////////////////                          //        align: 'center'

          //////////////////////////////////                          //    },


          //////////////////////////////////                          //    items: [


          //////////////////////////////////                          //    ]

          //////////////////////////////////                          //},
          //////////////////////////////////                     ]

          //////////////////////////////////                 },

          //////////////////////////////////            ]
          //////////////////////////////////        },







          //////////////////////////////////    ]
          //////////////////////////////////},

///////
{
xtype: 'panel',
height: 15
},

{
xtype: 'container',
width: '100%',
/// hidden:true,
margin: '60 0 0 0',
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
       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Hot Seat Promotion!</b></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
   },
   {
       xtype: 'spacer'
   },
   {

       margin: '0 14 0 0',
       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
       html: '<div onclick="FloatPanel_FloatingAdvertisementShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

   }
]
},
          {
              xtype: 'container',
              width: '100%',
              height: 280,
              margin: '0 0 0 0',
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


                        //////original hotseat 0
                           ////////////////{
                           ////////////////    xtype: 'container',
                           ////////////////    height: 300,
                           ////////////////    width: 230,
                           ////////////////    margin: '0 0 0 0',
                           ////////////////    //style: {
                           ////////////////    //    // background: '#D25959',
                           ////////////////    //    background: 'rgba(76, 175, 80, 0.3);',
                           ////////////////    //    // border: '2px'
                           ////////////////    //},
                           ////////////////    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                           ////////////////    //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;border:2px none #ECF0F1;',
                           ////////////////    style: 'background-color:transparent;',
                           ////////////////    layout: {
                           ////////////////        type: 'vbox',
                           ////////////////        pack: 'center',
                           ////////////////        align: 'center',
                           ////////////////    },
                           ////////////////    items: [


                           ////////////////        {
                           ////////////////            xtype: 'container',
                           ////////////////            width: '100%',
                           ////////////////            height: 30,
                           ////////////////            docked: 'bottom',
                           ////////////////            /// hidden:true,
                           ////////////////            margin: '-2 0 0 0',
                           ////////////////            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',
                           ////////////////            //style: {
                           ////////////////            //    // background: '#D25959',
                           ////////////////            //    background: 'transparent',
                           ////////////////            //    // border: '2px'
                           ////////////////            //},
                           ////////////////            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                           ////////////////            //  style: 'border-bottom:2px solid #D25959;background-color:transparent',
                           ////////////////            layout: {
                           ////////////////                type: 'vbox',
                           ////////////////                pack: 'center',
                           ////////////////                align: 'center',
                           ////////////////            },
                           ////////////////            items: [
                           ////////////////                //{
                           ////////////////                //    margin: '-2 0 0 0',

                           ////////////////                //    html: '<font size=2 color=black><b>Contact Us</b></font>',
                           ////////////////                //},

                           ////////////////                    {
                           ////////////////                        xtype: 'container',
                           ////////////////                        id: 'DashboardHotSeatAdvertisementButton_bottom0',
                           ////////////////                        //hidden:true,
                           ////////////////                        width: '100%',
                           ////////////////                        style: "background-color: transparent",
                           ////////////////                        //style: "background-color: #F35B57;",
                           ////////////////                        margin: '0 0 0 0',
                           ////////////////                        layout: {
                           ////////////////                            type: 'hbox',
                           ////////////////                            pack: 'center',
                           ////////////////                            align: 'center'

                           ////////////////                        },



                           ////////////////                        items: [

                           ////////////////                            {
                           ////////////////                                xtype: 'button',
                           ////////////////                                margin: '0 0 0 0',
                           ////////////////                                ui: 'plain',
                           ////////////////                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt0',
                           ////////////////                                width: '100%',
                           ////////////////                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                           ////////////////                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Car Wash Promotion! >></b></div>',
                           ////////////////                                handler: function () {

                           ////////////////                                }


                           ////////////////                            }

                           ////////////////                                    //{
                           ////////////////                                    //    xtype: 'button',
                           ////////////////                                    //    height: 28,
                           ////////////////                                    //    width: 28,
                           ////////////////                                    //    margin: '0 0 0 0',
                           ////////////////                                    //    id: 'btnDashboardAdvertisementbottom_Wassap',
                           ////////////////                                    //    //badgeText: "2",
                           ////////////////                                    //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                           ////////////////                                    //    ui: 'plain',
                           ////////////////                                    //    handler: function () {

                           ////////////////                                    //        //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                           ////////////////                                    //        //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://BuskartApp.com/ayohaimg/"+ModifiedMediaFileName);

                           ////////////////                                    //        //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);

                           ////////////////                                    //    }
                           ////////////////                                    //},
                           ////////////////                        ]

                           ////////////////                    },




                           ////////////////            ]
                           ////////////////        },



                           ////////////////        {
                           ////////////////            xtype: 'button',
                           ////////////////            id: 'btnDashboard_HotSeatAdvertisement_PicProfile0',
                           ////////////////            margin: '-2 0 0 0',
                           ////////////////            //docked:'top',
                           ////////////////            height: 60,
                           ////////////////            width: 60,
                           ////////////////            // iconCls: 'list',
                           ////////////////            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                           ////////////////            html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                           ////////////////            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                           ////////////////            ui: 'plain',
                           ////////////////            handler: function () {


                           ////////////////            }
                           ////////////////        },
                           ////////////////        {
                           ////////////////            xtype: 'container',
                           ////////////////            // width: '91.1%',
                           ////////////////            width: 228,
                           ////////////////            height: 60,
                           ////////////////            hidden: true,
                           ////////////////            margin: '14 0 0 16',

                           ////////////////            layout: {
                           ////////////////                type: 'vbox',
                           ////////////////                pack: 'center',
                           ////////////////                align: 'center',
                           ////////////////            },
                           ////////////////            id: 'containerDashboard_HotSeatAdvertisement_ProfileText0',
                           ////////////////            // hidden:true,

                           ////////////////            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                           ////////////////            items: [

                           ////////////////            ]
                           ////////////////        },
                           ////////////////        {
                           ////////////////            xtype: 'button',
                           ////////////////            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile0',
                           ////////////////            margin: '-20 0 0 0',
                           ////////////////            height: 60,
                           ////////////////            //width: 228,
                           ////////////////            width: '100%',
                           ////////////////            // iconCls: 'list',
                           ////////////////            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                           ////////////////            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                           ////////////////            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',

                           ////////////////            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                           ////////////////            ui: 'plain',
                           ////////////////            handler: function () {


                           ////////////////            }
                           ////////////////        },
                           ////////////////                                 {

                           ////////////////                                     height: 210,
                           ////////////////                                     width: 230,
                           ////////////////                                     id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat0',
                           ////////////////                                     margin: '-70 0 0 0',
                           ////////////////                                     html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;">',

                           ////////////////                                 },
                           ////////////////         //{
                           ////////////////         //    xtype: 'container',
                           ////////////////         //    style: 'background-color:transparent;',
                           ////////////////         //    height: 210,
                           ////////////////         //    width: 230,
                           ////////////////         //    layout: {
                           ////////////////         //        type: 'vbox',
                           ////////////////         //    },
                           ////////////////         //    initialize: function (c) {
                           ////////////////         //        this.element.on({
                           ////////////////         //            tap: function (e, node, options) {

                           ////////////////         //            }
                           ////////////////         //        });
                           ////////////////         //    },
                           ////////////////         //    items: [

                           ////////////////         //    ]
                           ////////////////         //},

                           ////////////////    ]
                           ////////////////},

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

                          /////////////////////hotseat 5 unused


                          // {
                          //     xtype: 'panel',
                          //     width: 15
                          // },
                          //{
                          //    xtype: 'container',
                          //    height: 270,
                          //    width: 230,
                          //    margin: '0 0 0 0',
                          //    style: 'background-color:transparent;',
                          //    layout: {
                          //        type: 'vbox',
                          //        pack: 'center',
                          //        align: 'center',
                          //    },
                          //    items: [


                          //        {
                          //            xtype: 'container',
                          //            width: '100%',
                          //            height: 30,
                          //            docked: 'bottom',
                          //            margin: '-2 0 0 0',
                          //            style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 5px 5px;',

                          //            layout: {
                          //                type: 'vbox',
                          //                pack: 'center',
                          //                align: 'center',
                          //            },
                          //            items: [

                          //                    {
                          //                        xtype: 'container',
                          //                        id: 'DashboardHotSeatAdvertisementButton_bottom5',
                          //                        //hidden:true,
                          //                        width: '100%',
                          //                        style: "background-color: transparent",
                          //                        //style: "background-color: #F35B57;",
                          //                        margin: '0 0 0 0',
                          //                        layout: {
                          //                            type: 'hbox',
                          //                            pack: 'center',
                          //                            align: 'center'

                          //                        },


                          //                        items: [

                          //                            {
                          //                                xtype: 'button',
                          //                                margin: '0 0 0 0',
                          //                                ui: 'plain',
                          //                                width: '100%',
                          //                                id: 'btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt5',
                          //                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                          //                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Opening Restauran Promotion! >></b></div>',
                          //                                handler: function () {


                          //                                }


                          //                            }

                          //                        ]

                          //                    },




                          //            ]
                          //        },



                          //        {
                          //            xtype: 'container',
                          //            id: 'btnDashboard_HotSeatAdvertisement_PicProfile5',
                          //            margin: '-2 0 0 0',
                          //            //docked:'top',
                          //            zIndex: 300,
                          //            height: 60,
                          //            width: '100%',
                          //            layout:{
                          //                type: 'hbox',
                          //                pack: 'left',
                          //                align: 'left'
                          //            },

                          //            items:[
                          //                {
                          //                    zIndex:300,
                          //                    html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:3px solid #ECF0F1; border-radius: 50%; max-width:200px;">',

                          //                }
                          //            ]

                          //        },
                          //        {
                          //            xtype: 'container',
                          //            // width: '91.1%',
                          //            width: 228,
                          //            height: 60,
                          //            hidden: true,
                          //            margin: '14 0 0 16',

                          //            layout: {
                          //                type: 'vbox',
                          //                pack: 'center',
                          //                align: 'center',
                          //            },
                          //            id: 'containerDashboard_HotSeatAdvertisement_ProfileText5',
                          //            // hidden:true,

                          //            style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                          //            items: [

                          //            ]
                          //        },

                          //        {
                          //            xtype: 'button',
                          //            id: 'btnDashboard_HotSeatAdvertisement_UserNameProfile5',
                          //            margin: '-20 0 0 0',
                          //            height: 60,
                          //            //width: 228,
                          //            width: '100%',
                          //            // iconCls: 'list',
                          //            //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                          //            //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',
                          //            html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',

                          //            // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                          //            ui: 'plain',
                          //            handler: function () {


                          //            }
                          //        },

                          //          {

                          //              height: 210,
                          //              width: 230,
                          //              id: 'htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat5',
                          //              margin: '-70 0 0 0',
                          //              html: '<img src="resources/icons/toypromo.jpg"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;">',

                          //          },
                          //    ]
                          //},

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

                                                              //{
                                                              //    xtype: 'button',
                                                              //    height: 28,
                                                              //    width: 28,
                                                              //    margin: '0 0 0 0',
                                                              //    id: 'btnDashboardAdvertisementbottom_Wassap',
                                                              //    //badgeText: "2",
                                                              //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/wassap.png" width="18" height="18" alt="Company Name"/></a>',
                                                              //    ui: 'plain',
                                                              //    handler: function () {

                                                              //        //var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;

                                                              //        //// window.open("https://api.whatsapp.com/send?phone=+60133376958&text=https://BuskartApp.com/ayohaimg/"+ModifiedMediaFileName);

                                                              //        //window.open("https://api.whatsapp.com/send?phone=" + GetPICContactNo() + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);

                                                              //    }
                                                              //},
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
              xtype: 'container',
              width: '100%',
              id: 'Dashboard_AyohaCommunity_Txt',
              // hidden:true,
              margin: '60 0 0 0',
              style: {
                  // background: '#D25959',
                  background: 'transparent',
                  // border: '2px'
              },
              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
              layout: {
                  type: 'hbox',
                  pack: 'left',
                  align: 'left',
              },
              items: [
                   {
                       margin: '0 0 0 14',
                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Community (Comming Soon!)</b></div>'
                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                   },
              ]
          },
           {
               xtype: 'container',
               width: '100%',
               height: 110,
               margin: '0 0 0 20',
               hidden: true,
               id: 'Dashboard_FloatingAdvertisement_Icon',
               //style: {
               //    // background: '#D25959',
               //    background: 'rgba(76, 175, 80, 0.3);',
               //    // border: '2px'
               //},
               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
               style: 'background-color:transparent',

               layout: {
                   type: 'hbox',
                   pack: 'left',
                   align: 'left',
               },
               items: [
                   {
                       html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                       name: 'nameHtmlDashboard_FloatAdvertisementIcon',
                       height: 105,
                       width: 100,
                   },
               ]

           },

          {
              xtype: 'panel',
              //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
              height: 200
          },



         //{
         //    xtype: 'container',
         //    style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
         //    width: '100%',
         //    height:200,
         //    //  style: "background-color: transparent;",
         //    layout: {
         //        type: 'vbox',
         //        pack: 'start',
         //        align: 'center'

         //    },
         //}


        ////////////////////////////////













    ]

},

//////////////////////////////////////////  MerchantRewardDashboard   \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                        //  {
                        //      xtype: 'container',
                        //      id: 'containerMyAccount_DashboardMerchantReward',
                        //      width: '100%',
                        //      height: '100%',
                        //      //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                        //      style: "background-color: white;",
                        //      //style: "background-color: #F35B57;",
                        //      title: 'MerchantReward',
                        //      layout: {
                        //          type: 'fit',
                        //          //pack: 'center',
                        //          //align: 'center'

                        //      },
                        //      listeners: {
                        //          initialize: function (c) {

                        //              this.element.on({
                        //                  swipe: function (e, node, options) {
                        //                      //if (e.direction == "left") {
                        //                      //    //  alert("Hey! I swipe left");
                        //                      //    Ext.getCmp('tabpanelMyAccount_Dashboard').setActiveItem(1);

                        //                      //}
                        //                      if (e.direction == "right") {
                        //                          //  alert("Hey! I swipe left");
                        //                          Ext.getCmp('tabpanelMyAccount_Dashboard').setActiveItem(0);

                        //                      }

                        //                  }
                        //              });
                        //          }
                        //      },

                        //      items: [

                        //          {

                        //              xtype: 'DashboardMerchantRewardList'
                        //          }



                        //      ]

                        //  },

//////////////////////



                      {

                          xtype: 'container',
                          width: '100%',
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
                                                                            html: '<div style="color:purple;text-align: center;font-size:9px;width:100%;font-weight:bold"><u>Ayoha Reward</u></div><br><div style="color:purple;text-align: center;font-size:9px;width:100%;margin:-25px 0px 0px 0px;font-weight:bold"><u>Home</u></div>',

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
                                                                     html: '<img src="resources/icons/merchantreward02.png" width="22" height="22" alt="Company Name">',
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
                                                   id: 'containerMyAccount_Dashboard_MenuBottom_Notification',
                                                   name: 'namecontainerMyAccount_Dashboard_MenuBottom_Notification',
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
                                                            id: 'btn_MyAccount_Dashboard_MenuBottom_Notification',
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
                                                            id: 'containerMyAccount_Dashboard_MenuBottom_NotificationTxt',
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
    _DataStore_AdvertisementloadHotSeatStore.load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        //Ext.getStore('AdvertisementloadHotSeatStore').getProxy().setExtraParams({
        //    //AdvertisementCode: document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value,
        //    //EnterpriseHQAccNo: GetEnterpriseHQAccNo()
        //});
        //Ext.StoreMgr.get('AdvertisementloadHotSeatStore').load();



        // var myStore = Ext.getStore('AdvertisementloadHotSeatStore');

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




        //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);


        //var modelRecords = myStore.getAt(0);
        //localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        //localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        //localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        //localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        //localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        //localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));


        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(1000);

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



    var containerViewPointTransactionsShow = Ext.ComponentQuery.query('container[name=containerNameAyohaRewards]')[0];
    var containerViewElPointTransactionsShow = containerViewPointTransactionsShow.element;
    containerViewElPointTransactionsShow.on('tap',
      function (event, node, options, eOpts) {

          // SingleTap_Dashboard_AyohaRewards();
          FloatPanel_AyohaReward_PointTransactionsShow();
      }
    );



    var containerViewDashboardHaiUser = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_DashboardHaiUser]')[0];
    var containerViewElDashboardHaiUser = containerViewDashboardHaiUser.element;
    containerViewElDashboardHaiUser.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_MyAccountMasterShow();
      }
    );


    var containerViewnamecontainerMyAccount_DashboardAyohaeWallet = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_DashboardAyohaeWallet]')[0];
    var containerViewElnamecontainerMyAccount_DashboardAyohaeWallet = containerViewnamecontainerMyAccount_DashboardAyohaeWallet.element;
    containerViewElnamecontainerMyAccount_DashboardAyohaeWallet.on('tap',
      function (event, node, options, eOpts) {




         
          if (GetAyohaUserisUserVerified() == "YES") {
              FloatPanel_AyohaeWalletShow();
          }else

              if (GetAyohaUserisUserVerified() == "NO") {
                  iseWalletButtonTap = "YES";
                  eWalletWarningToBeMembershipFirst();
             
          } 


        
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
          animatedClickTabExt('containerMyAccount_Dashboard_MenuBottom_Notification');
          FloatPanel_AyohaNotificationShow();
      }
    );






    var containerViewMenuBottom_QrCodeScanOutter = Ext.ComponentQuery.query('container[name=namecontainerMyAccount_Dashboard_MenuBottom_QrCodeScanOutter]')[0];
    var containerViewElMenuBottom_QrCodeScanOutter = containerViewMenuBottom_QrCodeScanOutter.element;
    containerViewElMenuBottom_QrCodeScanOutter.on('tap',
      function (event, node, options, eOpts) {
          Ext.getCmp('mainView').setHidden(true);
          FloatPanel_QrCodeScanner_ScanCampaignShow();
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
function DashboardAyohaUserMainStore() {
    globalLatestPoint = "0";
    globalLatestStamp = "0/0";

    _DataStore_DashboardAyohaUserMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_DashboardAyohaUserMainStore.getProxy().setUrl(GetAPIurl() + '/DashboardAyohaUser/DashboardAyohaUserMain');
    _DataStore_DashboardAyohaUserMainStore.load();




    var task = Ext.create('Ext.util.DelayedTask', function () {

        var modelRecord = _DataStore_DashboardAyohaUserMainStore.getAt(0);
        var count = _DataStore_DashboardAyohaUserMainStore.getCount();
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
        var AyohaMember_Rank = modelRecord.get('AyohaMember_Rank');
        localStorage.setItem("AyohaMember_Rank", AyohaMember_Rank);


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
            Ext.getCmp('htmlMyAccount_Dashboard_ProfileTitle').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Hello!,</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + AccName.toLowerCase() + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 10px;font-weight:bold;color:black;margin:-26px 0px 0px 0px"><u>Ranking : ' + AyohaMember_Rank + '</u></div>');


            if (AyohaMember_Rank == "Black Iron") {
                //  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/Starter.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/blackIron.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;background-color:transparent;"></div>');

            }
            if (AyohaMember_Rank == "Bronze") {
                //  Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/nomembercard.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Bronze.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;background-color:transparent;"></div>');

            }
            if (AyohaMember_Rank == "Silver") {
                // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/vip.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Silver.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;background-color:transparent;"></div>');

            }
            if (AyohaMember_Rank == "Gold") {
                //Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/vvip.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Gold.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;background-color:transparent;"></div>');

            }
            if (AyohaMember_Rank == "Platinum") {
                // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/goldmember.jpg" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/Platinum.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;background-color:transparent;"></div>');

            }
            if (AyohaMember_Rank == "King Club") {
                // Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:white;border-radius:50%;"><img src="resources/icons/icons/kingclubIcon.png" alt="Image" style="width:15px;height:15px;margin:3px 0px 0px 4px;background-color:white;"></div>');
                Ext.getCmp('btnMyAccount_DashboardRankIcon').setHtml('<div style="width:22px;height:22px;background-color:transparent;border-radius:50%;"><img src="resources/icons/ayohaRankingIcon/kingclubIcon.png" alt="Image" style="width:20px;height:20px;margin:0px 0px 0px 0px;background-color:transparent;"></div>');

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



        if (globalDashboard_TotalItemQuantityCart) {
            globalDashboard_TotalItemQuantityCart = globalDashboard_TotalItemQuantityCart
        } else {
            globalDashboard_TotalItemQuantityCart = "0";
        }
        globalDashboard_TotalItemQuantityCart_fromAyohaNotification=globalDashboard_TotalItemQuantityCart;
        Ext.getCmp('htmlDashbord_OrderCart_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalDashboard_TotalItemQuantityCart + '</b></div>');
        Ext.getCmp('htmlDashbord_AyohaHotMerchant_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalDashboard_TotalItemQuantityCart + '</b></div>');


        globalDashboard_TotalItemQuantityCart = 0;

        //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsTypeLbl').setHtml('<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:bold"> (' + PointType + ')</div>');

        //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekRedeemStamp').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsStampRedeem + '</div>');

        //Ext.getCmp('Dashboard_AyohaActivity_ThisWeekCountsPointRedeem').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + ThisWeekCountsPointRedeem + '</div>');



        Ext.getCmp('Dashboard_AyohaRewardPoint').setHtml('<div  class="example-1"  style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac;text-align:center;margin:-30px 0px 0px 0px;height:230px;width:230px"><div style="color:white;text-align: center;font-size:48px;width:100%;margin:70px 0px 0px 0px;"><b>' + AyohaPoint + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Collected Ayoha Points</b></div></div>');
        Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + AyohaTaAndWin_TapBalance + '</font> Chance Left</div></div>');
        //Ext.getCmp('htmlDashboard_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div class="example-2" style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>(' + AyohaTaAndWin_TapBalance + ')</font> Chance Left</div></div>');
        AyohaPoint = 0;


        if (globalPNUnread != "0") {
            Ext.getCmp('btnMyAccount_DashboardPicProfile').setBadgeText(globalPNUnread);
            // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setBadgeText(globalPNUnread);
            Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/NotificationPurple.png" width="20" height="20" alt="Company Name"><div style="margin:-30px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
        }





        //Ext.getCmp('DashBoard_AyohaRewards_NextRedeemStampsLbl').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Stamp:<font size=2 color=white><b>' + NextRedeemStamp + '</b></font></div>');


        //Ext.getCmp('DashBoard_AyohaRewards_TotalPointsLbl').setHtml('<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">' + UnClaimedTotalPoint + '</div>');
        //Ext.getCmp('DashBoard_AyohaRewards_NextRedeemPointLbl').setHtml('<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Point:<font size=2 color=white><b>' + NextRedeemPoint + '</b></font></div>');



        AyohaRewardPointRewardRankingStore();
        AyohaRewardContestLoadActiveStore();
        Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore();

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

        LoadingPanelHide();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    
    });
    task.delay(1100);

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
        Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(false);
        Ext.getCmp('containerDashboard_User_AyohaRewardRankingViewMyRankingBtnID').setHidden(true);

        Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(false);
        Ext.getCmp('imgMyDashboard_AyohaRewardRankingContest').setHidden(false);
        Ext.getCmp('imgMyDashboard_AyohaRewardRankingContestShining').setHidden(true);
        Ext.getCmp('containerContestEndDate').setHidden(false);
        //Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('220 0 0 0');
        Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('100 0 0 0');

        // Ext.getCmp('containerDashboard_MerchantRedemption').setMargin('90 0 0 0');
        if (count >= 1) {
            globalIsContestant = "Y";
            Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(true);
            Ext.getCmp('containerDashboard_User_AyohaRewardRankingViewMyRankingBtnID').setHidden(false);

            Ext.getCmp('containerDashboard_User_AyohaRewardRankingEnterContestBtnID').setHidden(true);
            Ext.getCmp('imgMyDashboard_AyohaRewardRankingContest').setHidden(true);
            Ext.getCmp('imgMyDashboard_AyohaRewardRankingContestShining').setHidden(false);
            Ext.getCmp('containerContestEndDate').setHidden(false);

            //  Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('220 0 0 0');
            // Ext.getCmp('containerDashboard_MerchantRedemption').setMargin('120 0 0 0');
            Ext.getCmp('containerDashboard_User_MembershipActivities').setMargin('100 0 0 0');

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


    }

    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setExtraParam('ContestCode', ContestCode);
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadByContestCode');
    _DataStore_AyohaRewardContestantLoadByContestCodeStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var check = _DataStore_AyohaRewardContestantLoadByContestCodeStore.getCount();

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


                Ext.getCmp('containerAyohaRewardRedemption_carosel_APoint' + i).setHtml('<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">' + ItemPoint + '</div>');
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

                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div  style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM' + globalDashboardeWalletCurrentBalance + '</div>');



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
                        Ext.getCmp('htmlMyAccount_Dashboard_TitleHeaderTxtAyohaEwallet').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha e-Wallet</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 16px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">RM 00.00</div>');

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




    var ContainernamecontainerAyohaMerchant_Hawker = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Hawker]')[0];
    var containerViewElnamecontainerAyohaMerchant_Hawker = ContainernamecontainerAyohaMerchant_Hawker.element;
    containerViewElnamecontainerAyohaMerchant_Hawker.on('tap',
      function (event, node, options, eOpts) {

          animatedClickTabExt('containerAyohaMerchant_Hawker');

          //FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('Hawker');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Hawker');
      }
    );

    var ContainernamecontainerAyohaMerchant_Scaf = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Scaf]')[0];
    var containerViewElnamecontainerAyohaMerchant_Scaf = ContainernamecontainerAyohaMerchant_Scaf.element;
    containerViewElnamecontainerAyohaMerchant_Scaf.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Scaf');
          // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('Hijab');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Hijab');

      }
    );



    var ContainernamecontainerAyohaMerchant_Snack = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Snack]')[0];
    var containerViewElnamecontainerAyohaMerchant_Snack = ContainernamecontainerAyohaMerchant_Snack.element;
    containerViewElnamecontainerAyohaMerchant_Snack.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Snack');
          // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('Snack');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Snack');

      }
    );



    var ContainernamecontainerAyohaMerchant_Cafe = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Cafe]')[0];
    var containerViewElnamecontainerAyohaMerchant_Cafe = ContainernamecontainerAyohaMerchant_Cafe.element;
    containerViewElnamecontainerAyohaMerchant_Cafe.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Cafe');
          // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('Drink');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Drink');

      }
    );



    var ContainernamecontainerAyohaMerchant_CarWash = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_CarWash]')[0];
    var containerViewElnamecontainerAyohaMerchant_CarWash = ContainernamecontainerAyohaMerchant_CarWash.element;
    containerViewElnamecontainerAyohaMerchant_CarWash.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_CarWash');
          // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('CarWash');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('CarWash');

      }
    );


    var ContainernamecontainerAyohaMerchant_DentalClinic = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_DentalClinic]')[0];
    var containerViewElnamecontainerAyohaMerchant_DentalClinic = ContainernamecontainerAyohaMerchant_DentalClinic.element;
    containerViewElnamecontainerAyohaMerchant_DentalClinic.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_DentalClinic');
          //FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('DentalClinic');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('DentalClinic');
      }
    );




    var ContainernamecontainerAyohaMerchant_Spa = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Spa]')[0];
    var containerViewElnamecontainerAyohaMerchant_Spa = ContainernamecontainerAyohaMerchant_Spa.element;
    containerViewElnamecontainerAyohaMerchant_Spa.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Spa');
          //FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('Spa');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Spa');
      }
    );



    var ContainernamecontainerAyohaMerchant_Islamicshop = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Islamicshop]')[0];
    var containerViewElnamecontainerAyohaMerchant_Islamicshop = ContainernamecontainerAyohaMerchant_Islamicshop.element;
    containerViewElnamecontainerAyohaMerchant_Islamicshop.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Islamicshop');
          // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('IslamicShop');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('IslamicShop');
      }
    );



    var ContainernamecontainerAyohaMerchant_ToyShop = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_ToyShop]')[0];
    var containerViewElnamecontainerAyohaMerchant_ToyShop = ContainernamecontainerAyohaMerchant_ToyShop.element;
    containerViewElnamecontainerAyohaMerchant_ToyShop.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_ToyShop');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('ToyShop');

      }
    );



    var ContainernamecontainerAyohaMerchant_BabyShop = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_BabyShop]')[0];
    var containerViewElnamecontainerAyohaMerchant_BabyShop = ContainernamecontainerAyohaMerchant_BabyShop.element;
    containerViewElnamecontainerAyohaMerchant_BabyShop.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_BabyShop');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('BabyShop');

      }
    );




    var ContainernamecontainerAyohaMerchant_ClothPant = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_ClothPant]')[0];
    var containerViewElnamecontainerAyohaMerchant_ClothPant = ContainernamecontainerAyohaMerchant_ClothPant.element;
    containerViewElnamecontainerAyohaMerchant_ClothPant.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_ClothPant');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('ClothPant');

      }
    );



    var ContainernamecontainerAyohaMerchant_HandPhone = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_HandPhone]')[0];
    var containerViewElnamecontainerAyohaMerchant_HandPhone = ContainernamecontainerAyohaMerchant_HandPhone.element;
    containerViewElnamecontainerAyohaMerchant_HandPhone.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_HandPhone');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('HandPhone');

      }
    );



    var ContainernamecontainerAyohaMerchant_Groceries = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Groceries]')[0];
    var containerViewElnamecontainerAyohaMerchant_Groceries = ContainernamecontainerAyohaMerchant_Groceries.element;
    containerViewElnamecontainerAyohaMerchant_Groceries.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Groceries');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Groceries');

      }
    );


    var ContainernamecontainerAyohaMerchant_Computer = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Computer]')[0];
    var containerViewElnamecontainerAyohaMerchant_Computer = ContainernamecontainerAyohaMerchant_Computer.element;
    containerViewElnamecontainerAyohaMerchant_Computer.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Computer');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Computer');

      }
    );




    var ContainernamecontainerAyohaMerchant_Vape = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_Vape]')[0];
    var containerViewElnamecontainerAyohaMerchant_Vape = ContainernamecontainerAyohaMerchant_Vape.element;
    containerViewElnamecontainerAyohaMerchant_Vape.on('tap',
      function (event, node, options, eOpts) {
          animatedClickTabExt('containerAyohaMerchant_Vape');
          Dashboard_SearchMerchantListShow_FromAyohaMerchant('Vape');
      }
    );



    var ContainernamecontainerAyohaMerchant_seeMore = Ext.ComponentQuery.query('container[name=namecontainerAyohaMerchant_seeMore]')[0];
    var containerViewElnamecontainerAyohaMerchant_seeMore = ContainernamecontainerAyohaMerchant_seeMore.element;
    containerViewElnamecontainerAyohaMerchant_seeMore.on('tap',
      function (event, node, options, eOpts) {
          // FloatPanel_RewardStore_EnterprisesLoadByEnterpriseBusinessTypeStore('SeeMore');
          // FloatPanel_DashboardMerchantRewardShow();
          animatedClickTabExt('containerAyohaMerchant_seeMore');
          FloatPanel_Dashboard_AyohaMerchant_SeeMoreShow();
          //FloatPanel_BusinessTypeListShow();
      }
    );








    var ContainernamecontainerDashbord_MyCart = Ext.ComponentQuery.query('container[name=namecontainerDashbord_MyCart]')[0];
    var containerViewElnamecontainerDashbord_MyCart = ContainernamecontainerDashbord_MyCart.element;
    containerViewElnamecontainerDashbord_MyCart.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderCartShow();
      }
    );



    var ContainernamecontainerDashbord_AyohaHotMerchant_MyCart = Ext.ComponentQuery.query('container[name=namecontainerDashbord_AyohaHotMerchant_MyCart]')[0];
    var containerViewElnamecontainerDashbord_AyohaHotMerchant_MyCart = ContainernamecontainerDashbord_AyohaHotMerchant_MyCart.element;
    containerViewElnamecontainerDashbord_AyohaHotMerchant_MyCart.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderCartShow();
      }
    );
}

var globalDashboard_;

function Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore() {

    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setExtraParam('VoucherType', "AyohaVoucher");
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherType');

    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {



        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore.getCount();
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
    });
    task.delay(1000);

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













        document.getElementById('ext-element-243').className = 'x-videoExt-ghost';
        //document.getElementById('ext-element-115').className = 'marqueeExt';
        document.getElementById('ext-element-246').className = 'marqueeExt';
        document.getElementById('containerHotItem_HotMerchant').className = 'track';




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
        document.getElementById('ext-element-325').className = 'marqueeExt';
        document.getElementById('containerHotItem_HotMerchant1').className = 'track';


    });
    task.delay(1000);
}

//var camalize = function camalize(str) {
//    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
//        return chr.toUpperCase();
//    });
//}






function Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore() {

    globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain');
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load();
   

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getCount());
        Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardList').setStore(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore);
       // alert(count);

        LoadingPanelHide();

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}