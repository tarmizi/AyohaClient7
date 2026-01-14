Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_RedemptionHistory', {

});

var _FloatPanel_AyohaReward_RedemptionHistory;


var isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';

var _FloatPanel_AyohaReward_RedemptionHistory_isFirstLoad = "N";









function FloatPanel_AyohaReward_RedemptionHistory() {

    _FloatPanel_AyohaReward_RedemptionHistory =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'FloatPanel_AyohaReward_RedemptionHistoryID',
         draggable: false,
         zIndex: 111,


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
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',

         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {
                         //if (e.direction == "up") {
                         //    FloatPanel_AyohaReward_RedemptionHistoryHide();
                         //}
                         if (e.direction == "left") {
                             _FloatPanel_AyohaReward_RedemptionHistory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';
                             RemovePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaReward_RedemptionHistory.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';
                             RemovePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
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
               //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
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
                         margin: '20 0 0 0',
                         // width: 40,
                         //zIndex:-10,
                         //  title: '<font size="3" color="white">Live Tracking Map</font>',
                         //hidden: true,
                         docked: 'top',
                         id: 'containerFloatPanel_AyohaReward_RedemptionHistoryHeader1',
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
                                        id: 'btnFloatPanel_AyohaReward_RedemptionHistoryBack',
                                        height: 30,
                                        width: 35,
                                        margin: '0 0 0 0',
                                        // iconCls: 'list',
                                        html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                        ui: 'plain',
                                        handler: function () {
                                            _FloatPanel_AyohaReward_RedemptionHistory.hide(Ext.fx.Animation({
                                                type: 'slideOut',
                                                direction: 'left',
                                                easing: 'cubic-bezier(.7,0,.7,1)',
                                                duration: 250

                                            }));
                                            isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';
                                            _FloatPanel_AyohaReward_RedemptionHistory_isFirstLoad = "N";
                                            RemovePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
                                        }
                                    },

                                               {
                                                   xtype: 'spacer',

                                               },

                                               {
                                                   xtype: 'button',
                                                   margin: '-10 0 0 0',
                                                   zIndex: 100,
                                                   html: '<font size=2 color=white><b>Ayoha Points Redemtion</b></font>',
                                                   ui: 'plain',
                                                  
                                                   handler: function () {
                                                       _FloatPanel_AyohaReward_RedemptionHistory.hide(Ext.fx.Animation({
                                                           type: 'slideOut',
                                                           direction: 'right',
                                                           easing: 'cubic-bezier(.7,0,.7,1)',
                                                           duration: 250

                                                       }));
                                                       isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';
                                                       _FloatPanel_AyohaReward_RedemptionHistory_isFirstLoad = "N";
                                                       RemovePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
                                                   }
                                               },

                                     {
                                         xtype: 'button',
                                         id: 'btnbtnFloatPanel_AyohaReward_RedemptionHistoryBacksLogo',
                                         height: 30,
                                         width: 30,
                                         hidden: true,
                                         // iconCls: 'list',
                                         margin: '-5 3 0 0',
                                         html: '<div><img src="resources/icons/AyohaPointRedemptionWhite.png" width="25" height="25" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                             _FloatPanel_AyohaReward_RedemptionHistory.hide(Ext.fx.Animation({
                                                 type: 'slideOut',
                                                 direction: 'right',
                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                 duration: 250

                                             }));
                                             isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';
                                             _FloatPanel_AyohaReward_RedemptionHistory_isFirstLoad = "N";
                                             RemovePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
                                         }
                                     },












                                ]

                     },


                     





                     {
                         xtype: 'container',
                         height: 135,
                         // hidden:true,
                         //flex: 1,
                         // height:'35%',
                         //height: 198,

                         //  height: 173,
                         width: '100%',
                         id: 'containerFloatPanel_AyohaReward_RedemptionHistoryCompanyLogoHeaderMaster',
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
                                 margin: '0 0 0 0',
                                 //width: '100%',
                                 // zIndex: 190,
                                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                 //hidden: true,
                                 docked: 'top',
                                 id: 'containerFloatPanel_AyohaReward_RedemptionHistoryCompanyLogoHeader',
                                 style: "background-color: transparent;",
                                 //style: {
                                 //    // background: '#D25959',
                                 //    background: 'transparent',
                                 //    // border: '2px'
                                 //},

                                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'center',
                                     align: 'center',
                                 },
                                 // hidden:true,
                                 items:
                                        [


                                                 //{
                                                 //    xtype: 'container',
                                                 //    width: '100%',
                                                 //    layout: {
                                                 //        type: 'hbox',
                                                 //        pack: 'center',
                                                 //        align: 'center'

                                                 //    },
                                                 //    items: [

                                                 //        {
                                                 //            width: 16,
                                                 //            height: 16,
                                                 //            html: '<div style="margin:30px 0px 0px 40px"><img src="resources/icons/shiningIcon.png" width="16" height="16" alt="Company Name"></div>',
                                                 //        },
                                                 //        {
                                                 //            xtype: 'spacer'
                                                 //        },
                                                 //        {
                                                 //            width: 30,
                                                 //            height: 30,
                                                 //            html: '<div style="margin:-5px 0px 0px 20px"><img src="resources/icons/shiningIcon.png" width="30" height="30" alt="Company Name"></div>',
                                                 //        },
                                                 //         {
                                                 //             xtype: 'spacer'
                                                 //         },
                                                 //         {
                                                 //             width: 36,
                                                 //             height: 36,
                                                 //             html: '<div style="margin:20px 0px 0px -40px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                                 //         },
                                                 //        {
                                                 //            xtype: 'spacer'
                                                 //        },
                                                 //        {
                                                 //            width: 26,
                                                 //            height: 26,
                                                 //            html: '<div style="margin:20px 0px 0px -40px"><img src="resources/icons/shiningIcon.png" width="26" height="26" alt="Company Name"></div>',
                                                 //        },
                                                 //    ]

                                                 //},





                                            {
                                                xtype: 'container',
                                                styleHtmlContent: true,
                                                // hidden:true,
                                                //margin: '-1 0 0 0',
                                                //margin: '20 0 0 -20',
                                                // margin: '-85 0 0 -28',
                                                margin: '0 0 0 0',
                                                width: '100%',
                                                //zIndex: 90,
                                                style: 'background-color: transparent;',

                                                //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 80%;background-repeat: no-repeat;',
                                                //  style: 'border-right:4px none #fac;border-left:4px none #fac;border-bottom:4px none #fac;border-top:2px none #ECF0F1 ;background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;border-radius: 0px 0px 250px 250px;',


                                                //style: 'border-right:4px solid #fac;border-left:4px solid #fac;border-bottom:4px solid #fac;border-top:2px none #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 0px 0px 250px 250px;',




                                                //zIndex: 80,
                                                //height: 90,
                                                //width: 90,
                                                // margin: '70 0 0 0',
                                                id: 'containerFloatPanel_AyohaReward_RedemptionHistoryCompanyLogo',
                                                layout: {

                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'
                                                },
                                                items: [

                                                    //{
                                                    //    //xtype: 'button',

                                                    //    //  width: 150,

                                                    //    margin: '0 0 0 0',
                                                    //    id: 'htmlFloatPanel_AyohaReward_RedemptionHistoryPointsCollected',
                                                    //    //badgeText: "2",
                                                    //    // hidden:true,
                                                    //    //html: '<div style="margin:3px 0px 0px 0px"><img src="resources/icons/ayohaReward01.gif" width="150" height="150" alt="Company Name"></div>',
                                                    //    html: '<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>2560</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-28px 0px 0px 0px"><b>Ayoha Point</b></div><br>'
                                                    //},

                                                    {

                                                        xtype: 'container',
                                                        width: '99%',
                                                        margin: '0 0 0 0',
                                                        height: 85,
                                                        // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                        style: "background-color: transparent;",
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center'

                                                        },
                                                        items: [
                                                            {
                                                                xtype: 'panel',
                                                                id:'panelFloatPanel_AyohaReward_RedemptionHistory_Status7',
                                                                width: 7
                                                            },

                                                            {
                                                                xtype: 'container',
                                                                width: '65%',
                                                                id:'containerFloatPanel_AyohaReward_RedemptionHistory_Status',
                                                                height: 85,
                                                                margin: '0 0 0 0',
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
                                                                          height: 40,
                                                                          margin: '-7 0 0 0',
                                                                          //style: {
                                                                          //    // background: '#D25959',
                                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                                          //    // border: '2px'
                                                                          //},
                                                                          //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                          style: 'background-color:transparent',
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'start',
                                                                              align: 'left',
                                                                          },
                                                                          items: [
                                                                              {
                                                                                  xtype: 'container',
                                                                                  // width: '10%',
                                                                                  flex: 1,
                                                                                  margin: '0 0 0 10',
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
                                                                                           margin: '10 0 0 -55',
                                                                                           html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold">SUBMITTED</div>',
                                                                                       },
                                                                                        {
                                                                                            margin: '-10 0 0 -55',
                                                                                            id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_Submitted',
                                                                                            html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">0</div>',
                                                                                          
                                                                                        },
                                                                                  ]
                                                                              },
                                                                      {
                                                                          xtype: 'container',
                                                                          flex: 1,

                                                                          margin: '0 0 0 10',
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
                                                                                   html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold">APPROVED</div>',
                                                                               },
                                                                                {
                                                                                    margin: '-10 0 0 0',
                                                                                    id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_Approved',
                                                                                    html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">0</div>',
                                                                                    //  html: '<div class="blink_me" style="background-color: orange;border-radius: 50%;height: 15px;width: 15px;display: inline-block;margin:10px 0px 0px 0px"></div><div class="blink_me" style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:-30px 0px 0px 13px;">0</div>',
                                                                                },
                                                                          ]
                                                                      },

                                                                          ]
                                                                      },



                                                                      {
                                                                          xtype: 'container',
                                                                          width: '100%',
                                                                          margin: '6 0 0 0',
                                                                          //style: {
                                                                          //    // background: '#D25959',
                                                                          //    background: 'rgba(76, 175, 80, 0.3);',
                                                                          //    // border: '2px'
                                                                          //},
                                                                          style: 'border-top:1px solid #ECF0F1;background: transparent;',
                                                                          // style: 'background-color:transparent',
                                                                          layout: {
                                                                              type: 'hbox',
                                                                              pack: 'start',
                                                                              align: 'left',
                                                                          },
                                                                          items: [

                                                                         {
                                                                             xtype: 'container',
                                                                             flex: 1,

                                                                             margin: '2 0 0 0',
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
                                                                                      margin: '0 0 0 -45',
                                                                                      html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold">ACCEPTED</div>',
                                                                                  },
                                                                                   {
                                                                                       margin: '-10 0 0 -45',
                                                                                       id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_Accepted',
                                                                                       html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">0</div>',
                                                                                      
                                                                                   },
                                                                             ]
                                                                         },
                                                                         {
                                                                             xtype: 'container',
                                                                             flex: 1,

                                                                             margin: '2 0 0 0',
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
                                                                                      margin: '0 0 0 0',
                                                                                      html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold">CANCELLED</div>',
                                                                                  },
                                                                                   {
                                                                                       margin: '-10 0 0 0',
                                                                                       id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_Cancel',
                                                                                       html: '<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',                                                                                      
                                                                                   },
                                                                             ]
                                                                         },


                                                                          ]
                                                                      }

                                                                ]

                                                            },
                                                            {
                                                                xtype: 'panel',
                                                                id: 'panelFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon20',
                                                                width: 20
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                width: '25%',
                                                                id:'containerFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon',

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
                                                                items: [
                                                                      {
                                                                          //xtype: 'button',
                                                                          //height: 75,
                                                                          //width: 75,

                                                                          margin: '-5 0 0 0',
                                                                          id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon',
                                                                          //badgeText: "2",
                                                                          //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                                                                          html: '<div ><img src="resources/icons/AyohaPointRedemptionWhite.png" width="80" height="65" alt="Company Name"></div>',
                                                                          //ui: 'plain',
                                                                          //handler: function () {

                                                                          //    //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                          //    //  setupMovementMap(2);





                                                                          //    //Ext.getCmp('mainView').setActiveItem(16);
                                                                          //    //loadNotificationSummary();
                                                                          //}
                                                                      },
                                                                       {
                                                                           margin: '-12 0 0 0',
                                                                           id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_TotalRedeem',
                                                                           //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                           html: '<div  style="color:white;text-align: center;font-size:34px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>',
                                                                       },
                                                                       {
                                                                           margin: '-11 0 0 0',
                                                                           id: 'htmlFloatPanel_AyohaReward_RedemptionHistory_TotalRedeemFoundTxt',
                                                                           //  html: '<div style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold">0</div>',
                                                                           html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">REDEEM ITEM</div>',
                                                                       },

                                                                ]
                                                            },
                                                        ]


                                                    },

                                                ]
                                            },


                                             //{
                                             //    xtype: 'container',
                                             //    width: '100%',
                                             //    margin: '-30 0 0 0',
                                             //    layout: {
                                             //        type: 'hbox',
                                             //        pack: 'center',
                                             //        align: 'center'

                                             //    },
                                             //    items: [

                                             //        {
                                             //            width: 46,
                                             //            height: 46,
                                             //            html: '<div style="margin:-60px 0px 0px 20px"><img src="resources/icons/shiningIcon.png" width="46" height="46" alt="Company Name"></div>',
                                             //        },
                                             //        {
                                             //            xtype: 'spacer'
                                             //        },
                                             //         {
                                             //             width: 36,
                                             //             height: 36,
                                             //             html: '<div style="margin:-20px 0px 0px -70px"><img src="resources/icons/shiningIcon.png" width="36" height="36" alt="Company Name"></div>',
                                             //         },
                                             //        {
                                             //            width: 30,
                                             //            height: 30,
                                             //            html: '<div style="margin:-20px 0px 0px 40px"><img src="resources/icons/shiningIcon.png" width="30" height="30" alt="Company Name"></div>',
                                             //        },
                                             //         {
                                             //             xtype: 'spacer'
                                             //         },
                                             //        {
                                             //            width: 20,
                                             //            height: 20,
                                             //            html: '<div style="margin:-20px 0px 0px -20px"><img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name"></div>',
                                             //        },
                                             //    ]

                                             //},














                                                            




                                        ]

                             },


                         ]
                     },



{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaReward_RedemptionHistoryMasterHeaderTop',
    // hidden:true,
    width: '100%',
    height: 25,
    docked: 'top',
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
            id: 'containerFloatPanel_AyohaReward_RedemptionHistoryMasterHeader',
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
                    margin: '0 0 0 5',
                    id: 'htmlFloatPanel_AyohaReward_RedemptionHistoryMasterHeaderIcon',
                    html: '<img src="resources/icons/myredeemption.png" width="15" height="15" alt="Company Name">',
                },
                {
                    //  width: 150,
                    margin: '-5 0 0 0',
                    id: 'htmlFloatPanel_AyohaReward_RedemptionHistoryMasterHeaderTxt',
                    html: '<font size=1 color=black>Ayoha Point Redemption History</font>'
                },
                {
                    xtype: 'spacer'
                },
                 {
                     xtype: 'button',
                     id: 'btn_FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_Maximize',
                     //  badgeText: '1',
                     margin: '-2 10 0 0',
                     //  hidden: true,
                     height: 30,
                     width: 30,
                     html: '<img src="resources/icons/filterPurpleThree.png" width="20" height="20" alt="Company Name">',
                     ui: 'plain',
                     handler: function () {
                         FloatPanel_YearOnlyShow_AyohaPointRedemptionHistory();
                         //////Ext.getCmp('btn_FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_Minimize').setHidden(false);
                         //////Ext.getCmp('btn_FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_Maximize').setHidden(true);
                         //////Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistoryCompanyLogoHeaderMaster').setHidden(true);
                         //////var a = adjustHeight() + 135;
                         //////Ext.getCmp('List_FloatPanel_AyohaReward_RedemptionHistory_AyohaRewardPointHistory').setHeight(a);

                         //
                     }
                 },
                   {
                       xtype: 'button',
                       id: 'btn_FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_Minimize',
                       //  badgeText: '1',
                       margin: '-2 10 0 0',
                       hidden: true,
                       height: 25,
                       width: 25,
                       html: '<img src="resources/icons/minimizepurple.png" width="15" height="15" alt="Company Name">',
                       ui: 'plain',
                       handler: function () {
                           // FloatLoyaltyCardStampShow();
                           // FloatPanel_AyohaReward_RedemptionHistory_MoveCarousel(2);
                           Ext.getCmp('btn_FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_Minimize').setHidden(true);
                           Ext.getCmp('btn_FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_Maximize').setHidden(false);


                           Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistoryCompanyLogoHeaderMaster').setHidden(false);
                           var a = adjustHeight();
                           Ext.getCmp('List_FloatPanel_AyohaReward_RedemptionHistory_AyohaRewardPointHistory').setHeight(a);

                           //
                       }
                   },
                //{
                //    id: 'FloatPanel_AyohaReward_RedemptionHistoryMasterHeader_PointHistorySearchTxt',
                //    margin: '-5 10 0 0',
                //    width: 120,
                //    height: 16,
                //    html: '<input type="text" id="input-RedeemListHistorySearchTxt" placeholder="Search " style="border-color:purple;color:black;width:120px;text-align: center">'
                //}
            ]

        },
    ]
},


//{


//    xtype: 'list',
//    // height: '64%',
//    // height: '100%',
//    // height: 200,
//    //   flex: 2,
//    store: 'AyohaRewardPointLoadBySubscriberAccNoStore',
//    id: 'List_FloatPanel_AyohaReward_RedemptionHistory_AyohaRewardPointHistory',
//    mode: 'SINGLE',
//    disableSelection: true,
//    grouped: true,
//    // disableSelection: true,


//    itemTpl: '<div class="myContent">' +


//                            '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{EnterpriseName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-1px 0px 0px 0px;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-10px 0px 0px 0px;"><b>({AyohaPointType})</b></div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;"><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:right">{ModifiedTypeCRDB}{AyohaPoint} Point(s)</div></td></tr></table>' +

//    '</div>',
//    emptyText: '<div class="myContent">No Transactions</div>',
//    width: '100%',
//    // height: 600,
//    // height: '100%',

//    listeners: {


//        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


//        },

//        itemsingletap: function (dataview, index, target, record, e, eOpts) {

//        }
//    }






//},





    {
        xtype: 'container',
        id: 'containerFloatPanel_AyohaReward_RedemptionHistory_AyohaPointHistory',
        style: ' background-color: transparent',
        margin: '0 0 0 0',
        height: '100%',
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
                store: _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore,
                id: 'List_FloatPanel_AyohaReward_RedemptionHistory_AyohaRewardPointHistory',
                mode: 'SINGLE',
                disableSelection: true,
              //  grouped: true,
                // disableSelection: true,
                itemTpl: '<div class="myContent" style="background-color:white;width:108%;height:148px;">' +
                //itemTpl: '<div class="myContent">' +
                                                                   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});" src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});">Redeem Item Name:</div><br><div onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;" onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});">Redeem Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;" onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});">{RedeemHistoryCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;" onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});">Redeem Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;"><b>{RedeemPoint}</b></div><div style="width:100%;text-align:left;margin:0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;" onclick="FloatPanel_AyohaReward_RedemptionHistory_DetailsShow({ID});">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</div></th></tr></thead></table>'
                                                                   //+ '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-8px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonStatusLog" onClick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow({ID})">View Redeem Status Log</button></div>'
                                                                   + '</div>'
                + '{ButtonBottomHistoryStatus}',
                                                                   //+ '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonAyohaRedemptionHistoryCancel" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow({ID})">Cancel</button>&nbsp;&nbsp;&nbsp;<button class="buttonAyohaRedemptionHistoryStatus" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow({ID})">View Redeem Status Log</button></div>',
                emptyText: '<div class="myContent">No Ayoha Point Redemption</div>',
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
        ]

    },









                 ]

             },




         ]















     });
    return _FloatPanel_AyohaReward_RedemptionHistory;



}



function FloatPanel_AyohaReward_RedemptionHistoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward_RedemptionHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_RedemptionHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
    isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'Y';
    FloatPanel_AyohaReward_RedemptionHistoryAdjustHeight();
    FloatPanel_AyohaReward_RedemptionHistory_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore();
   // FloatPanel_AyohaReward_RedemptionHistory_AyohaRewardPointLoadBySubscriberAccNoStore();


   // Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistoryPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    //AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();



}

function FloatPanel_AyohaReward_RedemptionHistoryShow_FromFloatPanel_AyohaReward_PointTransaction(RedeemHistoryCode) {

    Ext.Viewport.remove(_FloatPanel_AyohaReward_RedemptionHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_RedemptionHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
    isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'Y';
    FloatPanel_AyohaReward_RedemptionHistoryAdjustHeight();
    FloatPanel_AyohaReward_RedemptionHistory_AyohaRedeemPrizeHistoryLoadByRedeemHistoryCodeStore(RedeemHistoryCode);
   


}



function FloatPanel_AyohaReward_RedemptionHistoryHide() {
    _FloatPanel_AyohaReward_RedemptionHistory.hide(); isFloatPanel_AyohaReward_RedemptionHistoryOpen = 'N';
    _FloatPanel_AyohaReward_RedemptionHistory_isFirstLoad = "N";
    RemovePages("FloatPanel_AyohaReward_RedemptionHistoryHide()");
}





function FloatPanel_AyohaReward_RedemptionHistoryAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 196;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaReward_RedemptionHistoryID').setHeight(x + 20);
    Ext.getCmp('List_FloatPanel_AyohaReward_RedemptionHistory_AyohaRewardPointHistory').setHeight(newHeights);


}











function FloatPanel_AyohaReward_RedemptionHistory_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore() {
    Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistory_Status').setHidden(false);
    Ext.getCmp('panelFloatPanel_AyohaReward_RedemptionHistory_Status7').setHidden(false);
    Ext.getCmp('panelFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon20').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon').setWidth('25%');

    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('RedeemHistoryStatusBy', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('Year', GetCurrentYear());
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('Status', 'ALL');
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatus');
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.load();
    

    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistoryMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Redemption History - Year ' + GetCurrentYear() + '</font>');

    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getCount();
        if (count > 0) {
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getProxy().setExtraParam('Year', GetCurrentYear());
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYear');
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.load();
           
            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_TotalRedeem').setHtml('<div  style="color:white;text-align: center;font-size:34px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + count + '</div>');


            var task = Ext.create('Ext.util.DelayedTask', function () {

                var count = _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getCount();
                if (count > 0) {

                    var store = _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getAt(0);
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Submitted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">'+store.get('Submitted')+'</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Approved').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">' + store.get('Approved') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Accepted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">' + store.get('Accepted') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Cancel').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + store.get('Cancel') + '</div>');
                   

                }


            });
            task.delay(500);
        }
    

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);


}









function FloatPanel_AyohaReward_RedemptionHistory_AyohaRedeemPrizeHistoryLoadByRedeemHistoryCodeStore(RedeemHistoryCode) {


    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('RedeemHistoryStatusBy', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('RedeemHistoryCode', RedeemHistoryCode);
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryLoadByRedeemHistoryCode');
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.load();
    
    Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistory_Status').setHidden(true);
    Ext.getCmp('panelFloatPanel_AyohaReward_RedemptionHistory_Status7').setHidden(true);
    Ext.getCmp('panelFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon20').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon').setWidth('30%');
    

    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistoryMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Redemption - Redeem Code:' + RedeemHistoryCode + '</font>');

    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getCount();
        Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_TotalRedeem').setHtml('<div  style="color:white;text-align: center;font-size:34px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + count + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Submitted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">0</div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Approved').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">0</div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Accepted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">0</div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Cancel').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>');



    });
    task.delay(500);


    Ext.Viewport.setMasked(false);


}


















function FloatPanel_AyohaReward_RedemptionHistory_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore_Filter(Year) {
    Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistory_Status').setHidden(false);
    Ext.getCmp('panelFloatPanel_AyohaReward_RedemptionHistory_Status7').setHidden(false);
    Ext.getCmp('panelFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon20').setHidden(false);
    Ext.getCmp('containerFloatPanel_AyohaReward_RedemptionHistory_RedeemIcon').setWidth('25%');
    FloatPanel_YearOnlyHide();
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('RedeemHistoryStatusBy', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('Year', Year);
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setExtraParam('Status', 'ALL');
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatus');
    _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.load();


    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistoryMasterHeaderTxt').setHtml('<font size=1 color=black>Ayoha Point Redemption History - Year ' + Year + '</font>');

    //var store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //store.get('RowNumber')


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRedeemPrizeHistoryLoadRedeemHistoryStatusByYearStatusStore.getCount();
        if (count > 0) {
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getProxy().setExtraParam('Year', Year);
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getProxy().setUrl(GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYear');
            _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.load();

            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_TotalRedeem').setHtml('<div  style="color:white;text-align: center;font-size:34px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + count + '</div>');


            var task = Ext.create('Ext.util.DelayedTask', function () {

                var count = _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getCount();
                if (count > 0) {

                    var store = _DataStore_AyohaRedeemPrizeHistoryCountStatusBySubscriberAccNoYearStore.getAt(0);
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Submitted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">' + store.get('Submitted') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Approved').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">' + store.get('Approved') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Accepted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">' + store.get('Accepted') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Cancel').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + store.get('Cancel') + '</div>');


                }


            });
            task.delay(500);
        } else {
            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_TotalRedeem').setHtml('<div  style="color:white;text-align: center;font-size:34px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>');
            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Submitted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -6px;">0</div>');
            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Approved').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -9px;">0</div>');
            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Accepted').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px -5px;">0</div>');
            Ext.getCmp('htmlFloatPanel_AyohaReward_RedemptionHistory_Cancel').setHtml('<div  style="color:white;text-align: center;font-size:24px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0</div>');

        }


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);


}




