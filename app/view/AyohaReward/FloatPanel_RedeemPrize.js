Ext.define('BuskartApp.view.AyohaReward.FloatPanel_RedeemPrize', {

});

var _FloatPanel_RedeemPrize;


var isFloatPanel_RedeemPrizeOpen = 'N';











function FloatPanel_RedeemPrize() {

    _FloatPanel_RedeemPrize =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '70%',
         width: '95%',
         id: 'LoadingFloatPanel_RedeemPrizeID',
         draggable: false,
         zIndex:300,


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
             type: 'popOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',

         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {
                         //if (e.direction == "up") {
                         //    FloatPanel_RedeemPrizeHide();
                         //}
                         if (e.direction == "left") {
                             _FloatPanel_RedeemPrize.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_RedeemPrizeOpen = 'N';
                             RemovePages("FloatPanel_RedeemPrizeHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_RedeemPrize.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_RedeemPrizeOpen = 'N';
                             RemovePages("FloatPanel_RedeemPrizeHide()");
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
                 //  style: "background-color: transparent;",
                 style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'vbox',
                     pack: 'center',
                     align: 'center'
                 },
                 items: [
                     {

                         xtype: 'container',
                         width: '100%',
                         // width: 40,
                         //zIndex:-10,
                         //  title: '<font size="3" color="white">Live Tracking Map</font>',
                         //hidden: true,
                         docked: 'top',
                         id: 'containerFloatPanel_RedeemPrizeHeader1',
                         style: "background-color: transparent;",
                         //style: {
                         //    // background: '#D25959',
                         //    background: 'transparent',
                         //    // border: '2px'
                         //},
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
                                        id: 'btnFloatPanel_RedeemPrizeBack',
                                        height: 30,
                                        width: 35,
                                        margin: '0 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            _FloatPanel_RedeemPrize.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'left',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            isFloatPanel_RedeemPrizeOpen = 'N';
                                            RemovePages("FloatPanel_RedeemPrizeHide()");
                                        }
                                    },

                                               {
                                                   xtype: 'spacer',

                                               },

                                               {
                                                   margin: '-10 -5 0 0',
                                                   html: '<font size=2 color=white><b>Redeem Prize</b></font>'
                                               },

                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_RedeemPrize_backright',
                                         height: 30,
                                         width: 35,
                                         // iconCls: 'list',
                                         margin: '-5 1 0 0',
                                         html: '<div ><img src="resources/icons/AyohaRedeemPrize02.png" width="25" height="25" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             _FloatPanel_RedeemPrize.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'right',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isFloatPanel_RedeemPrizeOpen = 'N';
                                             RemovePages("FloatPanel_RedeemPrizeHide()");
                                         }
                                     },

                                                       {
                                                           xtype: 'container',
                                                           //   margin: '0 0 0 5',
                                                           hidden: true,
                                                           //style: 'background-color: white;',
                                                           style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                           zIndex: 80,
                                                           height: 25,
                                                           width: 70,
                                                           // margin: '70 0 0 0',
                                                           id: 'containerFloatPanel_RedeemPrizeHaiUser',
                                                           layout: {

                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'
                                                           },
                                                           items: [


                                                               {
                                                                   margin: '0 0 0 0',
                                                                   id: 'htmlFloatPanel_RedeemPrizeHaiUser',
                                                                   html: '<font size=2 color=black><b>Hai Mizi!</b></font>'
                                                               }
                                                           ]
                                                       },
                                                    {
                                                        xtype: 'container',
                                                        margin: '0 0 0 -5',
                                                        hidden: true,
                                                        // hidden: true,
                                                        //style: 'background-color: white;',
                                                        style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                                        zIndex: 80,
                                                        height: 40,
                                                        width: 40,
                                                        // margin: '70 0 0 0',
                                                        id: 'containerFloatPanel_RedeemPrizePictureUser',
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
                                                                margin: '0 0 0 -5',
                                                                id: 'btnFloatPanel_RedeemPrizeUserInfo',
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

                     {
                         xtype: 'container',
                         hidden:true,
                         //flex: 1,
                         // height:'35%',
                         height: 198,
                         // height: 218,
                         width: '100%',

                         docked: 'top',
                         style: "background-color: transparent;",
                         //   style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',
                         //style: {

                         //    background: 'transparent',

                         //},

                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center'

                         },
                         items: [



                             {

                                 xtype: 'container',
                                 margin: '-31 0 0 0',
                                 // zIndex: 190,
                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                 //hidden: true,
                                 docked: 'top',
                                 id: 'containerFloatPanel_RedeemPrizeCompanyLogoHeader',
                                 style: "background-color: transparent;",
                                 //style: {
                                 //    // background: '#D25959',
                                 //    background: 'transparent',
                                 //    // border: '2px'
                                 //},
                                 //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;background: transparent;',
                                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center',
                                 },
                                 // hidden:true,
                                 items:
                                        [


                                            {
                                                xtype: 'container',
                                                margin: '-1 0 0 0',
                                                //zIndex: 90,
                                                style: 'background-color: transparent;',
                                                //style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 50px 50px 50px 50px;',
                                                //zIndex: 80,
                                                //height: 90,
                                                //width: 90,
                                                // margin: '70 0 0 0',
                                                id: 'containerFloatPanel_RedeemPrizeCompanyLogo',
                                                layout: {

                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [
                                                    {
                                                        //xtype: 'button',
                                                        height: 150,
                                                        width: 150,
                                                        margin: '0 0 0 0',
                                                        id: 'btnFloatPanel_RedeemPrizeCompanyLogo',
                                                        //badgeText: "2",
                                                        html: '<div style="margin:3px 0px 0px 0px"><img src="resources/icons/ayohaReward01.gif" width="150" height="150" alt="Company Name"></div>',

                                                    },



                                                ]
                                            },







                                                               {
                                                                   xtype: 'container',
                                                                   hidden: true,
                                                                   margin: '2 0 0 0',
                                                                   style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                                   //style: 'background-color: white;',
                                                                   //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                                                   zIndex: 80,
                                                                   height: 25,
                                                                   width: 250,
                                                                   // margin: '70 0 0 0',
                                                                   id: 'containerFloatPanel_RedeemPrizeCompanyName',
                                                                   layout: {

                                                                       type: 'vbox',
                                                                       pack: 'center',
                                                                       align: 'center'
                                                                   },
                                                                   items: [


                                                                       {
                                                                           margin: '0 0 0 0',
                                                                           id: 'htmlFloatPanel_RedeemPrizeCompanyName',
                                                                           html: '<font size=4 color=white><b>Ayoha Rewards</b></font>'
                                                                       }
                                                                   ]
                                                               },
                                                                //{
                                                                //    margin: '0 0 0 0',
                                                                //    html: '<font size=2 color=white><b>Redeem Your Point.!</b></font>'
                                                                //},

                                                            {
                                                                margin: '0 0 0 0',
                                                                id: 'htmlFloatPanel_RedeemPrizePointsCollected',
                                                                html: '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:40px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:white;width:100%;height:110px">1005</div>',

                                                                //  html: '<font size=13 color=black><b>1005</b></font>'
                                                            },
                                                            {
                                                                margin: '-70 0 0 0',
                                                                // html: '<font size=2 color=white><b>Ayoha Rewards Points</b></font>'
                                                                html: '<div style="color:white;text-align: center;font-size:12px;width:100%;"><b>Points</b></div>'
                                                            },

                                        ]

                             },

                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_RedeemPrizeMasterHeaderTop',
                                 // hidden:true,
                                 width: '100%',
                                 height: 25,
                                 //  zIndex: 90,

                                 // style: "background-color: transparent;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;",
                                 // style: 'border-bottom:1px solid #D25959;background-color:transparent',
                                 //   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 20px 20px 0px 0px;',
                                 // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                 style: {
                                     // background: '#D25959',
                                     background: 'transparent',
                                     // border: '2px'
                                 },
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'

                                 },
                                 items: [
                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_RedeemPrizeMasterHeader',
                                         width: '100%',
                                         height: 25,
                                         // style: "background-color: white",
                                         // style: 'border-bottom:1px solid #D25959;background-color:transparent',
                                         style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                         // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                         //style: "background-color: #F35B57;",

                                         layout: {
                                             type: 'hbox',
                                             pack: 'center',
                                             align: 'center'

                                         },
                                         items: [

                                             {
                                                 width: 20,
                                                 height: 20,
                                                 margin: '0 0 0 20',
                                                 html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">',
                                             },
                                             {
                                                 //  width: 150,
                                                 margin: '-5 0 0 5',
                                                 html: '<font size=1 color=black>Redeem Prize</font>'
                                             },
                                             {
                                                 xtype: 'spacer'
                                             },
                                             //{
                                             //    id: 'FloatPanel_RedeemPrizeMasterHeader_PointHistorySearchTxt',
                                             //    margin: '-5 10 0 0',
                                             //    width: 120,
                                             //    height: 16,
                                             //    html: '<input type="text" id="input-RedeemListHistorySearchTxt" placeholder="Search " style="border-color:purple;color:black;width:120px;text-align: center">'
                                             //}
                                         ]

                                     },
                                 ]
                             },

                         ]
                     },
                












{
    xtype: 'container',
   // docked: 'top',
    // hidden:true,
    //  margin: '0 0 0 0',
    //  docked: 'bottom',
    style: 'background-color: transparent;',
    id: 'containerRedeemPrize',
    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
    zIndex: 90,
    //height:200,
    // autoHeight:true,
    // height: '100%',
    // flex:1,
    //  maxHeight:'100%',
    //height:'63%',
    width: '100%',
    height: '100%',
    // margin: '70 0 0 0',

    layout: {

        type: 'vbox',
        pack: 'center',
        align: 'center'
    },
    items: [

        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            margin: '0 0 0 0',
            //style: {
            //    // background: '#D25959',
            //    background: 'rgba(76, 175, 80, 0.3);',
            //    // border: '2px'
            //},
            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 0px 0px 0px 0px;',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
            items: [
                  {
                      xtype: 'container',
                      width: '100%',
                      zIndex: -100,
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
                          pack: 'start',
                          align: 'center',
                      },
                      //scrollable: {
                      //    direction: 'vertical',
                      //    directionLock: true
                      //},
                      items: [
                           {
                               width: '100%',
                               zIndex: -100,
                               height: 400,
                               margin: '0 0 0 0',
                               id:'FloatPanel_RedeemPrize_PrizeImg',
                               html: '<img src="https://setkita.com/AyohaImgCard/AyohaRedeemPrize/01/externalhd-removebg-preview.png"   style="width:100%;height:400px;zIndex:-100px;">',
                           },


                           //{
                           //    xtype: 'container',
                           //    width: '100%',
                           //    zIndex:100,
                           //    margin: '-100 0 0 0',
                           //    layout: {
                           //        type: 'vbox',
                           //        pack: 'start',
                           //        align: 'left',
                           //    },
                           //    items: [
                           //        {
                                     
                           //            id: 'DashBoard_AyohaRewards_TotalPointsLblz',
                           //            html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;width:100%;color:white;text-align:left;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>Pineng Power Bank 500MAH</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>79957-02</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>2000</b></div>'
                           //            // html: '<div style="color:white;text-align: center;font-size:38px;width:100%;font-weight:bold">5621</div>',
                           //        },
                           //    ]
                           //},
                            
                             //{
                             //    margin: '-5 0 0 0',
                             //    id: 'DashBoard_AyohaRewards_NextRedeemPointLblz',
                             //    html: '<div  style="color:transparent;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Point 154682.</div>',
                             //},
                      ]
                  },

                           {
                               xtype: 'container',
                               width: '100%',
                               zIndex: 100,
                               margin: '-100 0 0 0',
                               layout: {
                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'left',
                               },
                               items: [
                                   {

                                       id: 'FloatPanel_RedeemPrize_PrizeLbl',
                                       html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;width:100%;color:white;text-align:left;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>Sony External Hardisk 1TB</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>79957-02</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>2000</b></div>'

                                       // html: '<div style="color:white;text-align: center;font-size:38px;width:100%;font-weight:bold">5621</div>',
                                   },
                               ]
                           },
                  
            ]
        },






    ]
},


{

    xtype: 'container',
    width: '100%',
    // width: 40,
    docked: 'bottom',
    height: 45,
    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //hidden: true,

    id: 'containerFloatPanel_RedeemPrize_MenuBottom',
    // style: "background-color: transparent",
    style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 0px 0px 0px 0px;',
  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
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
                   width: '100%',
                   style: "background-color: transparent",
                   height: 45,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center',
                   },
                   //scrollable: {
                   //    direction: 'horizontal',
                   //    directionLock: false
                   //},
                   items: [



                            {
                                xtype: 'button',
                                ////  align: 'stretch',

                                ui: 'plain',
                                width: '100%',
                                margin: '-5 0 0 0',
                                height: 40,
                                id: 'btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCardss',
                                //hidden: true,

                                html: '<div class="blink_me"><button class="button3viewloyaltycard">Redeem Now!!!</button></div>',
                                handler: function () {

                                    var AyohaPoint = localStorage.getItem("AyohaPoint");


                                    if (AyohaPoint >= globalItemPoint) {
                                        FloatPanel_RedeemPrize_RedeemNow();
                                        return;

                                    } else {
                                        Swal.fire({
                                            title: 'Insufficient Ayoha Point',
                                            text: "Unable to redeem prize!!",
                                            showConfirmButton: false,
                                            imageUrl: "resources/icons/UnableRedeem01.png",
                                            imageWidth: 300,
                                            imageHeight: 200,
                                            //   imageAlt: 'Cloud-Reward Pro v 1.0',
                                            footer: '<a href>Ayoha Reward v 1.0</a>'
                                        })


                                    }





                                    //if (globalItemPoint <= AyohaPoint) {
                                    //    Swal.fire({
                                    //        title: 'Insufficient Ayoha Point',
                                    //        text: "Unable to redeem prize!",
                                    //        showConfirmButton: false,
                                    //        imageUrl: "resources/icons/insufficientRedeem.png",
                                    //        imageWidth: 400,
                                    //        imageHeight: 300,
                                    //        //   imageAlt: 'Cloud-Reward Pro v 1.0',
                                    //        footer: '<a href>Ayoha Reward v 1.0</a>'
                                    //    })
                                    //    return
                                    //}
                            

                                   
                                    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                                },


                            },
















                   ]
               },





                          //{
                          //    margin: '0 0 0 0',
                          //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                          //},










           ]

},


                 ]

             },




         ]















     });
    return _FloatPanel_RedeemPrize;



}




var globalItemCode;
var globalRemarks;
var ItemID;
function FloatPanel_RedeemPrizeShow(val) {

    Ext.Viewport.remove(_FloatPanel_RedeemPrize);
    this.overlay = Ext.Viewport.add(FloatPanel_RedeemPrize());
    this.overlay.show();
    isFloatPanel_RedeemPrizeOpen = 'Y';
    AddRoutePages("FloatPanel_RedeemPrizeHide()");


   // Ext.getCmp('htmlFloatPanel_RedeemPrizePointsCollected').setHtml('<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:40px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;color:white;width:100%;height:110px">' + localStorage.getItem("AyohaPoint") + '</div>');
  //  Ext.getCmp('containerRedeemPrize').setHeight(adjustHeight());

    ItemID=val;
    var ImgPath = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemName = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemCode = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);
    var ItemPoint = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);
    var Remarks = _DataStore_AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore.findRecord('ID', val, 0, false, false, true);

    globalItemCode = ItemCode.get('ItemCode');
    globalItemPoint = ItemPoint.get('ItemPoint');
    globalRemarks = Remarks.get('Remarks');
    Ext.getCmp('FloatPanel_RedeemPrize_PrizeImg').setHtml('<img src="' + ImgPath.get('ImgPath') + '"   style="width:100%;height:400px;zIndex:-100px;">');
    Ext.getCmp('FloatPanel_RedeemPrize_PrizeLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;width:100%;color:white;text-align:left;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>' + ItemName.get('ItemName') + '</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>' + ItemCode.get('ItemCode') + '</b></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;;width:100%;color:white;text-align:left;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-16px 0px 0px 0px;;width:100%;color:white;text-align:left;"><b>' + ItemPoint.get('ItemPoint') + '</b></div>');

   
   
}





function FloatPanel_RedeemPrizeHide() {
    if (isFloatPanel_RedeemPrizeOpen == "Y") {
        _FloatPanel_RedeemPrize.hide(); isFloatPanel_RedeemPrizeOpen = 'N';
        RemovePages("FloatPanel_RedeemPrizeHide()");

    }
   
}



function FloatPanel_RedeemPrize_RedeemNow() {

    var obj = {
        "ID": 0,
        "ItemCode": globalItemCode,
        "RedeemHistoryCode": globalItemCode,
        "RedeemHistoryStatus": "Submitted",
        "RedeemHistoryStatusBy": GetCurrAyohaUserAccountNo(),
        "RedeemPoint": globalItemPoint,
        "Remarks": globalRemarks,
        "RowStatus": 'Active',

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryInsertUpdate',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireSuccess("Save Successfully!");
                Dashboard_AyohaRewardSummary();
                FloatPanel_RedeemPrizeHide();

            }
            else {

                swalFireFail("Save Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


            }
          
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });


}

//GetCurrAyohaUserGroupCode()
