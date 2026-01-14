Ext.define('BuskartApp.view.Dashboard.FloatPanel_DashboardMerchantReward', {
    //requires: [
    //  'BuskartApp.view.Dashboard.DashboardMerchantReward',
    //  'Ext.dataview.List',
    //  'Ext.data.Store',
    //  'Ext.carousel.Carousel',
    //                 'Ext.util.DelayedTask',
    //],
});







var _FloatPanel_DashboardMerchantReward;

function FloatPanel_DashboardMerchantReward() {

    _FloatPanel_DashboardMerchantReward = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_DashboardMerchantRewardID',
            //    requires: [
            //'BuskartApp.view.Dashboard.DashboardMerchantReward',
            //'Ext.dataview.List',
            //'Ext.data.Store',
            //'Ext.carousel.Carousel',
            //               'Ext.util.DelayedTask',
            //    ],
            // xtype: 'panel',
            // zIndex: 100,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            // styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            // modal: true,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },
            //  style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            // style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            style: ' background-color:white;',

            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

            items: 
            
            {

                xtype: 'container',
                // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                style: "background-color: transparent;",
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'

                },
                width: '100%',
                height: '100%',
                items: [



                        {
                            xtype: 'container',
                            // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 280px;background-repeat: no-repeat;',
                            style: "background-color: transparent;",
                            width: '100%',
                            height: '100%',
                            title: 'DashboardMerchantReward',
                            scrollable: {
                                direction: 'vertical',
                                directionLock: true,
                                indicators: false
                            },
                            layout: {
                                type: 'vbox',
                                //pack: 'start',
                                //align: 'center'

                            },
                            items: [
                                {

                                    xtype: 'container',
                                    width: '100%',
                                    docked: 'top',
                                    height:40,
                                    // width: 40,

                                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                    //hidden: true,

                                    id: 'containerFloatPanel_DashboardMerchantRewardHeader',
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
                                                             id: 'btnFloatPanel_DashboardMerchantRewardCardBack',
                                                             height: 30,
                                                             width: 35,
                                                             margin: '0 0 0 10',
                                                             // iconCls: 'list',
                                                             html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 // FloatPanel_MembershipCardList_MyMembershipCardHide();
                                                                 // FloatPanel_MembershipCardList_MyMembershipCard_AddCardHide();
                                                                 is_FloatPanel_DashboardMerchantRewardHide = 'N';
                                                                 VIAAdvertismentAutoSlideReset();
                                                                 _FloatPanel_DashboardMerchantReward.hide(Ext.fx.Animation({
                                                                     type: 'slideOut',
                                                                     direction: 'left',
                                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                                     duration: 250

                                                                 }));
                                                                 RemovePages("FloatPanel_DashboardMerchantRewardHide()");

                                                             }
                                                         },

                                                          {
                                                              xtype: 'spacer',

                                                          },


                                                          {
                                                              margin: '0 20 0 0',
                                                              id: 'htmlFloatPanel_DashboardMerchantReward_TitleHeaderTxt',
                                                              html: '<font size=2 color=black><b>Merchant Reward</b></font>'
                                                          },









                                           ]

                                },

                                {
                                    xtype: 'container',
                                    width: '100%',
                                    /// hidden:true,
                                    margin: '20 0 0 0',
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
                                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Merchant Advertisement</b></div>'
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },
                                    ]
                                },


                                ////////////
                                  //{
                                  //    xtype: 'container',
                                  //    //xtype: 'carousel',
                                  //    id: 'containerDashboardMerchantRewardBg',
                                  //    // name: 'nameDashboard_Carousel',
                                  //    //width: '100%',
                                  //    //height: '100%',
                                  //    width: '100%',
                                  //    height: 350,
                                  //    style: 'background-color:transparent',
                                  //    margin: '-40 0 0 0',
                                  //    items: [

                                  //    ]
                                  //},

                                  {
                                      xtype: 'container',
                                      //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                                      width: '100%',
                                      height: 400,
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center'

                                      },
                                      items: [
                                           {
                                               xtype: 'panel',
                                               width: '100%',
                                               height: 30
                                           },

                                           /////////Start VIA Advertisement
                                        //    {
                                        //        xtype: 'container',
                                        //        width: '100%',
                                        //        /// hidden:true,
                                        //        margin: '0 0 0 0',
                                        //        style: {
                                        //            background: '#D25959',
                                        //          //  background: 'transparent',
                                        //            // border: '2px'
                                        //        },
                                        //        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                        //        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                        //        layout: {
                                        //            type: 'hbox',
                                        //            pack: 'left',
                                        //            align: 'left',
                                        //        },
                                        //        items: [
                                        //             {
                                        //                 margin: '0 0 0 14',
                                        //                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                        //                 html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Merchant Advertisement and News</b></div>'
                                        //                 // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                        //             },
                                        //        ]
                                        //    },

                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               //hidden:true,
                                               height: 250,
                                               margin: '0 0 0 0',
                                               name: 'namecontainerVIA_Advertisement',
                                               //style: {
                                               //    // background: '#D25959',
                                               //    background: 'rgba(76, 175, 80, 0.3);',
                                               //    // border: '2px'
                                               //},
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               style: 'background-color:transparent',


                                               // style: 'background-color:white;border-radius: 10px 10px 10px 10px;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;',

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
                                                       //hidden:true,
                                                       height: 345,
                                                       margin: '60 0 0 0',
                                                       //style: {
                                                       //    // background: '#D25959',
                                                       //    background: 'rgba(76, 175, 80, 0.3);',
                                                       //    // border: '2px'
                                                       //},
                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                       style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 0px 0px;',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center',
                                                       },
                                                       //scrollable: {
                                                       //    direction: 'horizontal',
                                                       //    directionLock: true
                                                       //},
                                                       items: [

                           {
                               xtype: 'container',

                               // hidden: true,
                               style: 'background-color: transparent;',
                               //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                               // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                               height: 0,
                               width: '100%',
                               // margin: '70 0 0 0',
                               id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia',
                               layout: {

                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'left'
                               },
                               items: [
                                   {
                                       xtype: 'container',
                                       margin: '2 0 0 0',
                                       // hidden: true,
                                       style: 'background-color: transparent;',
                                       //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                       // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;',

                                       height: 3,
                                       width: '100%',
                                       // margin: '70 0 0 0',
                                       id: 'containerDashboard_PreviewAdvertisement_HeaderTitleAndMedia_TimingBar',
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
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing0',
                               margin: '0 0 0 0',
                               flex: 1,
                               // hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               html: '<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">',

                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing1',
                               margin: '0 0 0 0',
                               flex: 1,
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               hidden: true,
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing2',
                               margin: '0 0 0 0',
                               flex: 1,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               hidden: true,
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing3',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing4',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing5',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing6',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing7',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing8',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Timing9',
                               margin: '0 0 0 0',
                               flex: 1,
                               hidden: true,
                               // iconCls: 'list',
                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                               // html: '<div style="color:black;text-align: left;font-size:12px;width:5px;font-weight:bold;"><img src="resources/icons/TimerBarwhite.png" width="35" height="10" alt="Company Name"></div>',
                               html: '<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {


                               }
                           },
                           {
                               xtype: 'spacer'
                           }, {
                               xtype: 'button',
                               id: 'btnDashboard_PreviewAdvertisement_Start',
                               hidden: true,
                               margin: '7 10 0 0',
                               height: 25,
                               width: 25,
                               html: '<img src="resources/icons/playPurpleOne.png" style="width: 15px; height: 15px;">',
                               // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                   VIAAdvertismentAutoSlide();
                                   Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(true);
                                   Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(false);

                               }
                           },
                                {
                                    xtype: 'button',
                                    id: 'btnDashboard_PreviewAdvertisement_Stop',
                                    margin: '7 10 0 0',
                                    height: 25,
                                    width: 25,
                                    html: '<img src="resources/icons/stopPurple.png" style="width: 15px; height: 15px;">',
                                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                    ui: 'plain',
                                    handler: function () {

                                        clearInterval(VIAAdvertismentAutoSlideTimer);
                                        Ext.getCmp('btnDashboard_PreviewAdvertisement_Start').setHidden(false);
                                        Ext.getCmp('btnDashboard_PreviewAdvertisement_Stop').setHidden(true);

                                    }
                                },
                                       ]
                                   },

                                   {
                                       xtype: 'container',
                                       //   margin: '0 0 0 5',
                                       // hidden: true,
                                       style: 'background-color: transparent;',
                                       //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                       // style: 'background-color:white;border-radius: 10px 10px 10px 10px;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;',
                                       //height: 25,
                                       //width: 70,
                                       margin: '25 15 0 0',
                                       id: 'containerDashboard_PreviewAdvertisementHeaderOutter',
                                       layout: {

                                           type: 'hbox',
                                           pack: 'start',
                                           align: 'center'
                                       },
                                       items: [


                                         {
                                             xtype: 'button',
                                             id: 'btnDashboard_PreviewAdvertisement_PicProfile',
                                             margin: '0 0 0 10',
                                             height: 60,
                                             width: 60,
                                             // iconCls: 'list',
                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                             html: '<img src="resources/icons/founder.jpg" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">',


                                             // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                             ui: 'plain',
                                             handler: function () {


                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnDashboard_PreviewAdvertisement_UserNameProfile',
                                             margin: '0 0 0 0',
                                             height: 60,
                                             width: 250,
                                             // iconCls: 'list',
                                             //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                             html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Unjun Restaurant Sdn Bhd</div><br><div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',

                                             // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',
                                             ui: 'plain',
                                             handler: function () {


                                             }
                                         },
                                       {
                                           xtype: 'spacer'
                                       },



                                       ]
                                   },

                               ]
                           },



                                                           {
                                                               xtype: 'carousel',
                                                               id: 'Dashboard_PreviewAdvertisement_Carousel',
                                                               name: 'Dashboard_PreviewAdvertisement_CarouselName',
                                                               width: '99%',
                                                               height: '100%',
                                                               margin:'10 0 0 0',

                                                               //delay :2000,
                                                               //  carouselSlideDelay: 1000,
                                                               // autoSlide: true,
                                                               indicator: false,


                                                               //initialize: function (c) {
                                                               //    this.element.on({
                                                               //        tap: function (e, node, options) {
                                                               //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                                               //        }
                                                               //    });
                                                               //},


                                                               listeners:
                                                        {

                                                            activeitemchange: function (container, newCard, oldCard, index) {

                                                                //console.log("newCard Index:"+carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard));
                                                                //console.log("oldCard Index:" + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard));




                                                                if (ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] != 'NULL') {
                                                                    //  Ext.getCmp('containerDashboard_Advertisement_CaptionText').setHidden(false);
                                                                    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(false);
                                                                    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 0px 0px;');
                                                                    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHtml('<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">' + ArrCaptionTextVIAAdvertisement[container.getActiveIndex()] + '</div>');

                                                                } else {
                                                                    Ext.getCmp('htmlDashboard_Advertisement_CaptionText').setHidden(true);
                                                                    Ext.getCmp('containerDashboard_Advertisement_CaptionText').setStyle('background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;');
                                                                }

                                                                if (carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard) > carouselDasboardVIAAdertisement.getInnerItems().indexOf(newCard)) {
                                                                    // console.log("kanan");
                                                                    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + carouselDasboardVIAAdertisement.getInnerItems().indexOf(oldCard)).setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');

                                                                } else {
                                                                    //  console.log("kiri");
                                                                    Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + container.getActiveIndex()).setHtml('<img src="resources/icons/TimerBarPurpleOne.png" width="98%" height="3" alt="Company Name">')
                                                                }



                                                            },

                                                        },

                                                           },

                                                       ]
                                                   },

                                                   {
                                                       xtype: 'spacer'
                                                   },
                                               ]

                                           },
                       {
                           xtype: 'container',
                           width: '93.6%',
                           height: 60,
                           //hidden:true,
                           margin: '14 0 0 0',

                           layout: {
                               type: 'vbox',
                               pack: 'center',
                               align: 'center',
                           },
                           id: 'containerDashboard_Advertisement_CaptionText',
                           // hidden:true,

                           style: 'background-color:rgba(0, 0, 0, 0);border-radius: 0px 0px 0px 0px;',
                           items: [
                                {
                                    id: 'htmlDashboard_Advertisement_CaptionText',
                                    html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold"></div>',
                                }
                           ]
                       },

                       {
                           xtype: 'container',
                           width: '94.6%',
                           height: 46,
                           /// hidden:true,
                           margin: '1 0 0 0',
                           style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px none #ECF0F1 white;background: white;border-radius: 0px 0px 10px 10px;',
                           //style: {
                           //    // background: '#D25959',
                           //    background: 'transparent',
                           //    // border: '2px'
                           //},
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
                                   id: 'DashboardAdvertisementButtonHeader_bottom',
                                   //hidden:true,
                                   width: '100%',
                                   style: "background-color: transparent",
                                   //style: "background-color: #F35B57;",
                                   margin: '-5 0 0 0',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [
                                        //{
                                        //    width: '75%',
                                        //    margin: '0 0 0 5',
                                        //    hidden:true,
                                        //    id: 'htmlDasboardAdvertisementTitleTxt',
                                        //    html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;">Ramadhan AlMubarak 2021 Promotion.Started:March 2020</div>',

                                        //    // html: '<font size=2 color=black><b>Contact Us</b></font>',
                                        //},
                                        {
                                            xtype: 'container',

                                            //hidden:true,
                                            width: '60%',
                                            style: "background-color: transparent",
                                            name: 'nameContainerDashboardVIAAdvertisement_eStore',
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
                                                     width: 5
                                                 },
                                                 {
                                                     //xtype: 'button',
                                                     height: 38,
                                                     width: 38,
                                                     //margin: '0 0 0 0',
                                                     //hidden: false,
                                                     margin: '5 0 0 0',
                                                     id: 'DashboardVIAAdvertisement_eStoreIcon',
                                                     //badgeText: "2",
                                                     html: '<div><img src="https://setkita.com/AyohaImgCard/eStoreLogo/Default.png" width="38" height="38" alt="Company Name"></div>',

                                                 },
                                                 {
                                                     xtype: 'panel',
                                                     width: 5
                                                 },
                                                                       {
                                                                           margin: '0 0 0 0',
                                                                           id: 'DashboardVIAAdvertisement_eStoreName',
                                                                           html: '<div style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>Kiah Store</b></font></div></div>',
                                                                       },
                                            ]

                                        },
                                        {
                                            xtype: 'container',

                                            //hidden:true,
                                            width: '40%',
                                            style: "background-color: transparent",
                                            id: 'DashboardAdvertisementButton_bottom',
                                            margin: '8 0 0 0',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'right',
                                                align: 'right'

                                            },
                                            items: [


                                                {
                                                    xtype: 'button',
                                                    height: 36,
                                                    width: 36,
                                                    margin: '0 0 0 0',
                                                    //  hidden: true,
                                                    id: 'btnDashboardAdvertisementbottom_Location',
                                                    //badgeText: "2",
                                                    html: '<div ><img src="resources/icons/locationThree.png" width="26" height="26" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {
                                                        globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                        var task = Ext.create('Ext.util.DelayedTask', function () {
                                                            FloatPanel_PreviewAdvertisement_OpenLocation();
                                                        });
                                                        task.delay(150);

                                                        //var Coordinate = globalEnterpriseCoordinate.split(",");
                                                        //var PlaceMarkerlats = Coordinate[0];
                                                        //var PlaceMarkerlngs = Coordinate[1];





                                                        //if (PlaceMarkerlats) {
                                                        //    if (PlaceMarkerlngs) {
                                                        //        window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlats + "," + PlaceMarkerlngs, '_system'); return false;
                                                        //    } else {

                                                        //        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
                                                        //    }
                                                        //} else {
                                                        //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
                                                        //}






                                                    }
                                                },
                                                               {
                                                                   xtype: 'button',
                                                                   height: 38,
                                                                   width: 38,
                                                                   margin: '0 0 0 0',
                                                                   // hidden: true,
                                                                   id: 'btnDashboardAdvertisementbottom_FB',
                                                                   //badgeText: "2",
                                                                   html: '<div ><img src="resources/icons/Facebooklogo.png" width="28" height="28" alt="Company Name"></div>',
                                                                   ui: 'plain',
                                                                   handler: function () {
                                                                       //alert(GetEnterpriseFacebook());
                                                                       //window.open("fb://page/1999591407027990" + ModifiedMediaFileName);
                                                                       // setTimeout(function () { window.open("fb://profile/100002717204522"); }, 25);
                                                                       //setTimeout(function () { window.open("fb://page/107468437955395"); }, 25);
                                                                       globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                       var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                           FloatPanel_PreviewAdvertisement_OpenFB();
                                                                       });
                                                                       task.delay(150);



                                                                       //if (globalVIAEnterpriseFacebookUrl) {
                                                                       //    setTimeout(function () { window.open("fb://page/" + globalVIAEnterpriseFacebookUrl + "", '_system'); return false; }, 25);

                                                                       //} else {

                                                                       //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
                                                                       //}


                                                                   }
                                                               },
                                                                {
                                                                    xtype: 'button',
                                                                    height: 38,
                                                                    width: 38,
                                                                    margin: '0 0 0 0',
                                                                    hidden: true,
                                                                    id: 'btnDashboardAdvertisementbottom_Insta',
                                                                    //badgeText: "2",
                                                                    html: '<div ><img src="resources/icons/instagram.png" width="28" height="28" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                        globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                        var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                            FloatPanel_PreviewAdvertisement_OpenInsta();
                                                                        });
                                                                        task.delay(150);



                                                                        //if (globalVIAEnterpriseInstagramUrl) {

                                                                        //    setTimeout(function () { window.open("instagram://user?username=" + globalVIAEnterpriseInstagramUrl + "", '_system'); return false; }, 25);

                                                                        //} else {

                                                                        //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Instagram Link.,Help Merchant to know this Message!", "Insta")
                                                                        //}




                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    height: 38,
                                                                    width: 38,
                                                                    margin: '0 0 0 0',
                                                                    hidden: true,
                                                                    id: 'btnDashboardAdvertisementbottom_Twitter',
                                                                    //badgeText: "2",
                                                                    html: '<div ><img src="resources/icons/twitter.png" width="28" height="28" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {

                                                                        setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                                    }
                                                                },
                                                                {
                                                                    xtype: 'button',
                                                                    height: 28,
                                                                    width: 28,
                                                                    margin: '0 0 0 0',
                                                                    id: 'btnDashboardAdvertisementbottom_Web',
                                                                    hidden: true,
                                                                    //badgeText: "2",
                                                                    // html: '<div ><img src="resources/icons/websiteIcon.png" width="18" height="18" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {

                                                                        window.open(GetEnterpriseWebsite());
                                                                        //setTimeout(function () { window.open(GetEnterpriseWebsite()); }, 25);
                                                                        //setTimeout(function () { window.open("twitter://user?screen_name=" + GetEnterpriseTwiter() + ""); }, 25);

                                                                    }
                                                                },
                                                                  {
                                                                      xtype: 'button',
                                                                      height: 38,
                                                                      width: 38,
                                                                      margin: '0 0 0 0',
                                                                      id: 'btnDashboardAdvertisementbottom_Email',
                                                                      hidden: true,
                                                                      //badgeText: "2",
                                                                      // html: '<div ><img src="resources/icons/EmailRed.png" width="18" height="18" alt="Company Name"></div>',
                                                                      ui: 'plain',
                                                                      handler: function () {

                                                                          window.open("mailto:" + GetEnterpriseEmail() + "");

                                                                      }
                                                                  },
                                                                 {
                                                                     xtype: 'button',
                                                                     height: 28,
                                                                     width: 28,
                                                                     margin: '0 0 0 0',
                                                                     id: 'btnDashboarddvertisementbottom_Call',
                                                                     hidden: true,
                                                                     //badgeText: "2",
                                                                     html: '<div ><img src="resources/icons/calling.png" width="18" height="18" alt="Company Name"></div>',
                                                                     ui: 'plain',
                                                                     handler: function () {

                                                                         setTimeout(function () { window.open("tel:0133376958"); }, 25);


                                                                     }
                                                                 },
                                                                 //{
                                                                 //    //xtype: 'button',
                                                                 //    //align: 'stretch',
                                                                 //    //height: 32,
                                                                 //    //width: 92,
                                                                 //    id: 'btnFloatPanel_PreviewAdvertisementbottom_Wassap',
                                                                 //    // ui: 'plain',
                                                                 //    //  window.open("http://" + url, "_blank");
                                                                 //    //  html: '<img src="resources/icons/whatApplogosnew.png" style="width: 32px; height: 32px;" />'


                                                                 //    html: '<a href="https://api.whatsapp.com/send?phone=+60133376958"><img src="resources/icons/whatApplogosnew.png" style="width: 22px; height: 22px;" /></a>'
                                                                 //}
                                                                 {
                                                                     xtype: 'button',
                                                                     height: 38,
                                                                     width: 38,
                                                                     margin: '0 0 0 0',
                                                                     hidden: true,
                                                                     id: 'btnDashboardAdvertisementbottom_Wassap',
                                                                     //badgeText: "2",
                                                                     html: '<img src="resources/icons/WhatsApp01.png" width="28" height="28" alt="Company Name"/>',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         globalFloatPanel_AyohaStore_ModuleTagging = "VIAAdvertisement";
                                                                         var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                             FloatPanel_PreviewAdvertisement_OpenWhatsApp();
                                                                         });
                                                                         task.delay(150);

                                                                         //if (globalVIAPICContactNo) {
                                                                         //    // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                                                         //    //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                                                         //    window.open("https://api.whatsapp.com/send?phone=" + globalVIAPICContactNo + "&text=Hi", '_system'); return false;
                                                                         //    // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
                                                                         //} else {
                                                                         //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                                                         //}


                                                                     }
                                                                 },


                                                                 {
                                                                     xtype: 'panel',
                                                                     width: 5
                                                                 }


                                                 //{

                                                 //    margin: '0 0 0 0',
                                                 //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;">Contact Us</div>',

                                                 //    // html: '<font size=2 color=black><b>Contact Us</b></font>',
                                                 //},
                                                 //{
                                                 //    xtype: 'container',
                                                 //    id: 'DashboardAdvertisementButton_bottom',
                                                 //    //hidden:true,
                                                 //    width: '100%',
                                                 //    style: "background-color: transparent",
                                                 //    //style: "background-color: #F35B57;",
                                                 //    margin: '0 0 0 0',
                                                 //    layout: {
                                                 //        type: 'hbox',
                                                 //        pack: 'center',
                                                 //        align: 'center'

                                                 //    },


                                                 //    items: [


                                                 //    ]

                                                 //},
                                            ]

                                        },

                                   ]
                               },







                           ]
                       },

                                           ///////////////////////////////end via

















                                           ///////////////////////////////////////////////
                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               hidden: true,
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
                                                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Loyalty Campaing Activity</b></div>'
                                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                    },
                                                    {
                                                        xtype: 'spacer'
                                                    },



             {
                 xtype: 'panel',
                 width: 20
             },


                                               ]
                                           },


                                           ////////


                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               height: 100,
                                               hidden: true,
                                               margin: '10 0 0 0',
                                               name: 'containerDashboard_User_LatestStamps',
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
                                                       width: '92%',
                                                       height: 100,
                                                       margin: '0 0 0 0',

                                                       // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                       style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'center',
                                                           align: 'center',
                                                       },
                                                       items: [
                                                             {
                                                                 xtype: 'container',
                                                                 width: '100%',

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
                                                                         xtype: 'container',
                                                                         width: '100%',
                                                                         margin: '0 0 0 0',
                                                                         style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'right',
                                                                             align: 'right',
                                                                         },
                                                                         items: [
                                                                             {
                                                                                 xtype: 'image',
                                                                                 margin: '4 10 0 0',
                                                                                 height: 32,
                                                                                 width: 32,
                                                                                 src: 'resources/icons/latestStampcardPurple.png',
                                                                                 // html: '<img src="resources/icons/pointcarddashboardicon.png" width="32" height="32" alt="Company Name">',
                                                                             }
                                                                         ]
                                                                     },
                                                                      {
                                                                          margin: '-37 0 0 0',
                                                                          html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Latest Stamp</div>',
                                                                      },
                                                                       {
                                                                           margin: '0 0 0 0',
                                                                           id: 'DashBoard_AyohaRewards_TotalStampsLbl',
                                                                           html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                       },
                                                                        {
                                                                            margin: '-5 0 0 0',
                                                                            id: 'DashBoard_AyohaRewards_TotalStampsLblLastDate',
                                                                            html: '<div  style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Stamp 9685.</div>',
                                                                        },
                                                                 ]
                                                             },

                                                             {
                                                                 xtype: 'container',
                                                                 width: '40%',
                                                                 // hidden: true,
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
                                                                           height: 80,
                                                                           width: 80,

                                                                           margin: '2 0 0 0',
                                                                           id: 'btnMyAccount_DashboardStamp',
                                                                           //badgeText: "2",
                                                                           // html: '<img src="resources/icons/crStampPurpleDashboard.png" width="70" height="70" alt="Company Name">',
                                                                           html: '<img src="resources/icons/stampcarddashboardicon.png" width="70" height="70" alt="Company Name">',
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
                                                       xtype: 'spacer'
                                                   },
                                               ]

                                           },

                  {
                      xtype: 'container',
                      width: '100%',
                      height: 100,
                      margin: '15 0 0 0',
                      hidden: true,
                      name: 'containerDashboard_AyohaRewards_TotalPoints',
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
                              width: '92%',
                              height: 100,
                              margin: '0 0 0 0',
                              //style: {
                              //    // background: '#D25959',
                              //    background: 'rgba(76, 175, 80, 0.3);',
                              //    // border: '2px'
                              //},
                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',

                              // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                              style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                              // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 10px 10px 10px 10px;border:2px solid #fac;',
                              layout: {
                                  type: 'hbox',
                                  pack: 'center',
                                  align: 'center',
                              },
                              items: [
                                    {
                                        xtype: 'container',
                                        width: '100%',

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
                                                xtype: 'container',
                                                width: '100%',
                                                margin: '0 0 0 0',
                                                style: 'background-color:transparent',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'right',
                                                    align: 'right',
                                                },
                                                items: [
                                                    {
                                                        xtype: 'image',
                                                        margin: '4 10 0 0',
                                                        height: 32,
                                                        width: 32,
                                                        src: 'resources/icons/ayoharedeeempoint01.png',
                                                        // html: '<img src="resources/icons/pointcarddashboardicon.png" width="32" height="32" alt="Company Name">',
                                                    }
                                                ]
                                            },
                                             {
                                                 margin: '-37 0 0 0',
                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Latest Point</div>',
                                             },
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  margin: '0 0 0 0',
                                                  style: 'background-color:transparent',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'DashBoard_AyohaRewards_TotalPointsLbl',
                                                          html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                      },
                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'DashBoard_AyohaRewards_TotalPointsTypeLbl',
                                                          html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:bold">0</div>',
                                                      }
                                                  ]



                                              },
                                               {
                                                   margin: '-5 0 0 0',
                                                   id: 'DashBoard_AyohaRewards_TotalPointsLblLastDate',
                                                   html: '<div  style="color:transparent;text-align: center;font-size:11px;width:100%;font-weight:normal">Next Redeem Point 154682.</div>',
                                               },
                                        ]
                                    },

                                    {
                                        xtype: 'container',
                                        width: '40%',
                                        //hidden: true,
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
                                                  height: 80,
                                                  width: 80,

                                                  margin: '2 0 0 0',
                                                  id: 'btnMyAccount_DashboardPoint',
                                                  //badgeText: "2",
                                                  //html: '<img src="resources/icons/crPointPurpleDashboard.png" width="70" height="70" alt="Company Name">',
                                                  html: '<img src="resources/icons/pointcarddashboardicon.png" width="70" height="70" alt="Company Name">',
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
                              xtype: 'spacer'
                          },
                      ]

                  }





                                      ]
                                  },


                                  ////////Merchant Redemption

                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      height: 800,
                                      /// hidden:true,

                                      margin: '70 0 0 0',
                                      id: 'containerDashboard_MerchantRedemptionMain',
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
                                              /// hidden:true,
                                              margin: '0 0 0 0',
                                              id: 'containerDashboard_MerchantRedemption',
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
                                                       margin: '10 0 0 14',
                                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                       html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Merchant Redemption</b></div>'
                                                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                   },
                                                   {
                                                       xtype: 'spacer'
                                                   },
                                                    //{
                                                    //    xtype: 'button',
                                                    //    id: 'btnMyDashboard_AyohaRewardNearestRedeemInfo',
                                                    //    //  badgeText: '1',
                                                    //    margin: '0 10 0 0',
                                                    //    height: 35,
                                                    //    width: 35,
                                                    //    html: '<img src="resources/icons/AyohaStoreGrey.png" width="25" height="25" alt="Company Name">',
                                                    //    ui: 'plain',
                                                    //    handler: function () {
                                                    //        FloatPanel_NearestRedemptionShow();
                                                    //    }
                                                    //},
                                                     {
                                                         xtype: 'button',
                                                         id: 'btnMyDashboard_AyohaRewardNearestRedeemInfo',
                                                         //  badgeText: '1',
                                                         margin: '10 -5 0 0',
                                                         height: 35,
                                                         width: 100,
                                                         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b><u>View All</u></b></div>',
                                                         // html: '<img src="resources/icons/AyohaStoreGrey.png" width="25" height="25" alt="Company Name">',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             FloatPanel_NearestRedemptionShow();
                                                         }
                                                     },

                                              ]
                                          },

                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              // hidden: true,
                                              margin: '7 0 0 0',
                                              id: 'containerLoyaltyStampNearestRedeemItem_Header',
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
                                                       margin: '6 0 0 14',
                                                       id: 'htmlLoyaltyStampNearestRedeemItem_Header',
                                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                       html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1).-Stamp Loyalty Redemption</div>'
                                                       // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                   },

                                                    {
                                                        xtype: 'button',
                                                        id: 'btnLoyaltyStampNearestRedeemItem_Header',
                                                        // hidden: true,
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',
                                                        height: 30,
                                                        width: 30,
                                                        html: '<img src="resources/icons/AyohaStampCardWhite01.png" width="20" height="20" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                        }
                                                    },



                                              ]
                                          },




                                          {
                                              xtype: 'container',
                                              hidden: false,
                                              //width: '95%',
                                              //height: 80,
                                              margin: '-10 0 0 0',
                                              width: '100%',
                                              id: 'container_Dashboard_NearestRedeemMembersMaster',
                                              height: 290,
                                              // height: 440,
                                              // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                              style: 'background-color:transparent',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'start',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      //width: '95%',
                                                      //height: 80,
                                                      hidden: true,
                                                      margin: '0 0 0 0',
                                                      width: '100%',
                                                      id: 'container_Dashboard_NearestRedeemNonMembers',
                                                      name: 'namecontainer_Dashboard_NearestRedeemNonMembers',
                                                      height: 280,
                                                      //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                      style: 'background-color:transparent',
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'center',
                                                          align: 'center',
                                                      },
                                                      items: [

                                                          {

                                                              //xtype: 'button',
                                                              //height: 90,
                                                              //width: 90,
                                                              margin: '10 0 0 0',
                                                              //zIndex: 400,

                                                              id: 'htmlDashboard_NearestRedeem_NonMembersTxt',
                                                              html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Hai!, you have no stamp redemption items yet.</div>'

                                                              //ui: 'plain',
                                                              //handler: function () {

                                                              //}

                                                          },


                                                           {

                                                               //xtype: 'button',
                                                               //height: 90,
                                                               //width: 90,
                                                               //  margin: '0 0 0 60',
                                                               //zIndex: 400,
                                                               margin: '0 0 0 0',
                                                               id: 'htmlDashboard_NearestRedeem_NonMembersTxt0',
                                                               html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Tap Ayoha Mechant below ,get their Membership card</div>'

                                                               //ui: 'plain',
                                                               //handler: function () {

                                                               //}

                                                           },

                                                            {

                                                                //xtype: 'button',
                                                                //height: 90,
                                                                //width: 90,
                                                                //  margin: '0 0 0 60',
                                                                //zIndex: 400,
                                                                margin: '0 0 0 0',
                                                                id: 'htmlDashboard_NearestRedeem_NonMembersTxt00',
                                                                html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">and then collect your redemptions items!</div>'

                                                                //ui: 'plain',
                                                                //handler: function () {

                                                                //}

                                                            },
                                                           {

                                                               //xtype: 'button',
                                                               //height: 90,
                                                               //width: 90,
                                                               margin: '20 0 0 0',
                                                               //zIndex: 400,
                                                               width: 100,
                                                               height: 100,
                                                               id: 'htmlDashboard_NearestRedeem_NonMembers',
                                                               html: '<img src="resources/icons/AyohaMerchant03.png" alt="Image" style="width:150px;height:100px;zIndex:400px">',

                                                               //ui: 'plain',
                                                               //handler: function () {

                                                               //}

                                                           },
                                                           {

                                                               //xtype: 'button',
                                                               //height: 90,
                                                               //width: 90,
                                                               //  margin: '0 0 0 60',
                                                               //zIndex: 400,
                                                               margin: '3 0 0 0',
                                                               id: 'htmlDashboard_NearestRedeem_NonMembersTxtAyohaMerchant',
                                                               html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div>'

                                                               //ui: 'plain',
                                                               //handler: function () {

                                                               //}

                                                           },

                                                      ]
                                                  },



                                                  {
                                                      xtype: 'carousel',
                                                      hidden: false,
                                                      //width: '95%',
                                                      //height: 80,
                                                      margin: '2 0 0 0',
                                                      width: '100%',
                                                      id: 'container_Dashboard_NearestRedeemMembers',
                                                      height: 320,
                                                      requires: [
       'Ext.data.Store',
       'Ext.carousel.Carousel',
       'Ext.util.DelayedTask',
                                                      ],
                                                      items: [

                                                          {
                                                              xtype: 'container',
                                                              // xtype: 'carousel',
                                                              hidden: false,
                                                              //width: '95%',
                                                              //height: 80,
                                                              margin: '-2 0 0 0',
                                                              width: '100%',
                                                              id: 'container_Dashboard_NearestRedeemMembers_carosel0',
                                                              height: 290,
                                                              // height: 440,
                                                              // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                              style: 'background-color:transparent',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'start',
                                                                  align: 'center',
                                                              },
                                                              items: [
                                                                  {
                                                                      xtype: 'container',
                                                                      //width: '95%',
                                                                      //height: 80,
                                                                      margin: '12 0 0 0',
                                                                      width: '95%',
                                                                      height: 85,
                                                                      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                      //  style: 'background-color:transparent',
                                                                      //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                      style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                              width: '92%',
                                                                              //height: 100,
                                                                              height: 80,
                                                                              margin: '10 0 0 0',
                                                                              name: 'container_Dashboard_NearestRedeem0',
                                                                              //style: {
                                                                              //    // background: '#D25959',
                                                                              //    background: 'rgba(76, 175, 80, 0.3);',
                                                                              //    // border: '2px'
                                                                              //},
                                                                              style: 'background-color:transparent',
                                                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                              //style: 'background-color:transparent',
                                                                              layout: {
                                                                                  type: 'hbox',
                                                                                  pack: 'center',
                                                                                  align: 'center',
                                                                              },
                                                                              items: [
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '15%',

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

                                                                                                //xtype: 'button',
                                                                                                //height: 90,
                                                                                                //width: 90,
                                                                                               // margin: '-18 0 0 -10',
                                                                                                margin: '-18 0 0 35',
                                                                                                //zIndex: 400,
                                                                                                id: 'Dashboard_NearestRedeem_StampContent0',
                                                                                                html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                                //ui: 'plain',
                                                                                                //handler: function () {

                                                                                                //}

                                                                                            },

                                                                                      ]
                                                                                  },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '95%',
                                                                                       // width: '100%',
                                                                                        //zIndex: -99,
                                                                                        //margin: '-18 0 0 0',                                   
                                                                                        //height: 80,                                   
                                                                                        margin: '-14 0 0 0',
                                                                                        height: 80,
                                                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                        style: 'background-color:transparent',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'center',
                                                                                            align: 'left',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 margin: '-8 0 0 33',
                                                                                                 id: 'Dashboard_NearestRedeem_StampContentNote0',
                                                                                                 html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                             },
                                                                                              {
                                                                                                  margin: '-2 0 0 33',
                                                                                                  id: 'Dashboard_NearestRedeem_EnterpriseName0',
                                                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                              },
                                                                                               {
                                                                                                   margin: '0 0 0 33',
                                                                                                   width: '100%',
                                                                                                   id: 'Dashboard_NearestRedeem_EndDate0',
                                                                                                   html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                               },

                                                                                        ]
                                                                                    },


                                                                              ]
                                                                          },

                                                                          {
                                                                              xtype: 'spacer'
                                                                          },
                                                                      ]

                                                                  },



                                                             {
                                                                 xtype: 'container',
                                                                 //width: '95%',
                                                                 //height: 80,
                                                                 margin: '12 0 0 0',
                                                                 width: '95%',
                                                                 height: 85,
                                                                 //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 // style: 'background-color:transparent',
                                                                 // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                 //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
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
                                                                         width: '92%',
                                                                         //height: 100,
                                                                         height: 80,
                                                                         margin: '10 0 0 0',
                                                                         name: 'container_Dashboard_NearestRedeem1',
                                                                         //style: {
                                                                         //    // background: '#D25959',
                                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                                         //    // border: '2px'
                                                                         //},
                                                                         style: 'background-color:transparent',
                                                                         //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                         //style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'center',
                                                                             align: 'center',
                                                                         },
                                                                         items: [
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '15%',
                                                                                 //  zIndex: 400,
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

                                                                                           //xtype: 'button',
                                                                                           //height: 90,
                                                                                           //width: 90,
                                                                                          // margin: '-18 0 0 -10',
                                                                                          margin: '-18 0 0 35',
                                                                                           //zIndex: 400,
                                                                                           id: 'Dashboard_NearestRedeem_StampContent1',
                                                                                           html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                           //ui: 'plain',
                                                                                           //handler: function () {

                                                                                           //}

                                                                                       },

                                                                                 ]
                                                                             },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '95%',
                                                                                  // width: '100%',
                                                                                   // zIndex: -99,
                                                                                   //margin: '-18 0 0 0',                                   
                                                                                   //height: 80,                                   
                                                                                   margin: '-14 0 0 0',
                                                                                   height: 80,
                                                                                   //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                   style: 'background-color:transparent',
                                                                                   layout: {
                                                                                       type: 'vbox',
                                                                                       pack: 'center',
                                                                                       align: 'left',
                                                                                   },
                                                                                   items: [
                                                                                        {
                                                                                            margin: '-8 0 0 33',
                                                                                            id: 'Dashboard_NearestRedeem_StampContentNote1',
                                                                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                        },
                                                                                         {
                                                                                             margin: '-2 0 0 33',
                                                                                             id: 'Dashboard_NearestRedeem_EnterpriseName1',
                                                                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                         },
                                                                                          {
                                                                                              margin: '0 0 0 33',
                                                                                              width: '100%',
                                                                                              id: 'Dashboard_NearestRedeem_EndDate1',
                                                                                              html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                          },

                                                                                   ]
                                                                               },


                                                                         ]
                                                                     },

                                                                     {
                                                                         xtype: 'spacer'
                                                                     },
                                                                 ]

                                                             },




                                                                {
                                                                    xtype: 'container',
                                                                    //width: '95%',
                                                                    //height: 80,
                                                                    margin: '12 0 0 0',
                                                                    width: '95%',
                                                                    height: 85,
                                                                    //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                    // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                            width: '92%',
                                                                            //height: 100,
                                                                            height: 80,
                                                                            margin: '10 0 0 0',
                                                                            name: 'container_Dashboard_NearestRedeem2',
                                                                            //style: {
                                                                            //    // background: '#D25959',
                                                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                                                            //    // border: '2px'
                                                                            //},
                                                                            style: 'background-color:transparent',
                                                                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                            //style: 'background-color:transparent',
                                                                            layout: {
                                                                                type: 'hbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '15%',
                                                                                    //  zIndex: 400,
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

                                                                                              //xtype: 'button',
                                                                                              //height: 90,
                                                                                              //width: 90,
                                                                                            //  margin: '-18 0 0 -10',
                                                                                              margin: '-18 0 0 35',
                                                                                              //zIndex: 400,
                                                                                              id: 'Dashboard_NearestRedeem_StampContent2',
                                                                                              html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                              //ui: 'plain',
                                                                                              //handler: function () {

                                                                                              //}

                                                                                          },

                                                                                    ]
                                                                                },
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '95%',
                                                                                     // width: '100%',
                                                                                      // zIndex: -99,
                                                                                      //margin: '-18 0 0 0',                                   
                                                                                      //height: 80,                                   
                                                                                      margin: '-14 0 0 0',
                                                                                      height: 80,
                                                                                      //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                      style: 'background-color:transparent',
                                                                                      layout: {
                                                                                          type: 'vbox',
                                                                                          pack: 'center',
                                                                                          align: 'left',
                                                                                      },
                                                                                      items: [
                                                                                           {
                                                                                               margin: '-8 0 0 33',
                                                                                               id: 'Dashboard_NearestRedeem_StampContentNote2',
                                                                                               html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                           },
                                                                                            {
                                                                                                margin: '-2 0 0 33',
                                                                                                id: 'Dashboard_NearestRedeem_EnterpriseName2',
                                                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                            },
                                                                                             {
                                                                                                 margin: '0 0 0 33',
                                                                                                 width: '100%',
                                                                                                 id: 'Dashboard_NearestRedeem_EndDate2',
                                                                                                 html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                             },

                                                                                      ]
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

                                                          ///////////////////////////////////////////carosel-2

                                                          {
                                                              xtype: 'container',
                                                              // xtype: 'carousel',
                                                              hidden: false,
                                                              //width: '95%',
                                                              //height: 80,
                                                              margin: '-2 0 0 0',
                                                              width: '100%',
                                                              id: 'container_Dashboard_NearestRedeemMembers_carosel1',
                                                              height: 290,
                                                              // height: 440,
                                                              // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                              style: 'background-color:transparent',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'start',
                                                                  align: 'center',
                                                              },
                                                              items: [
                                                                  {
                                                                      xtype: 'container',
                                                                      //width: '95%',
                                                                      //height: 80,
                                                                      margin: '12 0 0 0',
                                                                      width: '95%',
                                                                      height: 85,
                                                                      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                      //  style: 'background-color:transparent',
                                                                      // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                      style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                              width: '92%',
                                                                              //height: 100,
                                                                              height: 80,
                                                                              margin: '10 0 0 0',
                                                                              name: 'container_Dashboard_NearestRedeem3',
                                                                              //style: {
                                                                              //    // background: '#D25959',
                                                                              //    background: 'rgba(76, 175, 80, 0.3);',
                                                                              //    // border: '2px'
                                                                              //},
                                                                              style: 'background-color:transparent',
                                                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                              //style: 'background-color:transparent',
                                                                              layout: {
                                                                                  type: 'hbox',
                                                                                  pack: 'center',
                                                                                  align: 'center',
                                                                              },
                                                                              items: [
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '15%',

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

                                                                                                //xtype: 'button',
                                                                                                //height: 90,
                                                                                                //width: 90,
                                                                                               // margin: '-18 0 0 -10',
                                                                                                margin: '-18 0 0 35',
                                                                                                //zIndex: 400,
                                                                                                id: 'Dashboard_NearestRedeem_StampContent3',
                                                                                                html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                                //ui: 'plain',
                                                                                                //handler: function () {

                                                                                                //}

                                                                                            },

                                                                                      ]
                                                                                  },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '95%',
                                                                                      //  width: '100%',
                                                                                        //zIndex: -99,
                                                                                        //margin: '-18 0 0 0',                                   
                                                                                        //height: 80,                                   
                                                                                        margin: '-14 0 0 0',
                                                                                        height: 80,
                                                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                        style: 'background-color:transparent',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'center',
                                                                                            align: 'left',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 margin: '-8 0 0 33',
                                                                                                 id: 'Dashboard_NearestRedeem_StampContentNote3',
                                                                                                 html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                             },
                                                                                              {
                                                                                                  margin: '-2 0 0 33',
                                                                                                  id: 'Dashboard_NearestRedeem_EnterpriseName3',
                                                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                              },
                                                                                               {
                                                                                                   margin: '0 0 0 33',
                                                                                                   width: '100%',
                                                                                                   id: 'Dashboard_NearestRedeem_EndDate3',
                                                                                                   html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                               },

                                                                                        ]
                                                                                    },


                                                                              ]
                                                                          },

                                                                          {
                                                                              xtype: 'spacer'
                                                                          },
                                                                      ]

                                                                  },



                                                             {
                                                                 xtype: 'container',
                                                                 //width: '95%',
                                                                 //height: 80,
                                                                 margin: '12 0 0 0',
                                                                 width: '95%',
                                                                 height: 85,
                                                                 //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 // style: 'background-color:transparent',
                                                                 // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                         width: '92%',
                                                                         //height: 100,
                                                                         height: 80,
                                                                         margin: '10 0 0 0',
                                                                         name: 'container_Dashboard_NearestRedeem4',
                                                                         //style: {
                                                                         //    // background: '#D25959',
                                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                                         //    // border: '2px'
                                                                         //},
                                                                         style: 'background-color:transparent',
                                                                         //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                         //style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'center',
                                                                             align: 'center',
                                                                         },
                                                                         items: [
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '15%',
                                                                                 //  zIndex: 400,
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

                                                                                           //xtype: 'button',
                                                                                           //height: 90,
                                                                                           //width: 90,
                                                                                          // margin: '-18 0 0 -10',
                                                                                           margin: '-18 0 0 35',
                                                                                           //zIndex: 400,
                                                                                           id: 'Dashboard_NearestRedeem_StampContent4',
                                                                                           html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                           //ui: 'plain',
                                                                                           //handler: function () {

                                                                                           //}

                                                                                       },

                                                                                 ]
                                                                             },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '95%',
                                                                                  // width: '100%',
                                                                                   // zIndex: -99,
                                                                                   //margin: '-18 0 0 0',                                   
                                                                                   //height: 80,                                   
                                                                                   margin: '-14 0 0 0',
                                                                                   height: 80,
                                                                                   //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                   style: 'background-color:transparent',
                                                                                   layout: {
                                                                                       type: 'vbox',
                                                                                       pack: 'center',
                                                                                       align: 'left',
                                                                                   },
                                                                                   items: [
                                                                                        {
                                                                                            margin: '-8 0 0 33',
                                                                                            id: 'Dashboard_NearestRedeem_StampContentNote4',
                                                                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                        },
                                                                                         {
                                                                                             margin: '-2 0 0 33',
                                                                                             id: 'Dashboard_NearestRedeem_EnterpriseName4',
                                                                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                         },
                                                                                          {
                                                                                              margin: '0 0 0 33',
                                                                                              width: '100%',
                                                                                              id: 'Dashboard_NearestRedeem_EndDate4',
                                                                                              html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                          },

                                                                                   ]
                                                                               },


                                                                         ]
                                                                     },

                                                                     {
                                                                         xtype: 'spacer'
                                                                     },
                                                                 ]

                                                             },




                                                                {
                                                                    xtype: 'container',
                                                                    //width: '95%',
                                                                    //height: 80,
                                                                    margin: '12 0 0 0',
                                                                    width: '95%',
                                                                    height: 85,
                                                                    //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                    //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                            width: '92%',
                                                                            //height: 100,
                                                                            height: 80,
                                                                            margin: '10 0 0 0',
                                                                            name: 'container_Dashboard_NearestRedeem5',
                                                                            //style: {
                                                                            //    // background: '#D25959',
                                                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                                                            //    // border: '2px'
                                                                            //},
                                                                            style: 'background-color:transparent',
                                                                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                            //style: 'background-color:transparent',
                                                                            layout: {
                                                                                type: 'hbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '15%',
                                                                                    //  zIndex: 400,
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

                                                                                              //xtype: 'button',
                                                                                              //height: 90,
                                                                                              //width: 90,
                                                                                             // margin: '-18 0 0 -10',
                                                                                              margin: '-18 0 0 35',
                                                                                              //zIndex: 400,
                                                                                              id: 'Dashboard_NearestRedeem_StampContent5',
                                                                                              html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                              //ui: 'plain',
                                                                                              //handler: function () {

                                                                                              //}

                                                                                          },

                                                                                    ]
                                                                                },
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '95%',
                                                                                     // width: '100%',
                                                                                      // zIndex: -99,
                                                                                      //margin: '-18 0 0 0',                                   
                                                                                      //height: 80,                                   
                                                                                      margin: '-14 0 0 0',
                                                                                      height: 80,
                                                                                      //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                      style: 'background-color:transparent',
                                                                                      layout: {
                                                                                          type: 'vbox',
                                                                                          pack: 'center',
                                                                                          align: 'left',
                                                                                      },
                                                                                      items: [
                                                                                           {
                                                                                               margin: '-8 0 0 33',
                                                                                               id: 'Dashboard_NearestRedeem_StampContentNote5',
                                                                                               html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                           },
                                                                                            {
                                                                                                margin: '-2 0 0 33',
                                                                                                id: 'Dashboard_NearestRedeem_EnterpriseName5',
                                                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                            },
                                                                                             {
                                                                                                 margin: '0 0 0 33',
                                                                                                 width: '100%',
                                                                                                 id: 'Dashboard_NearestRedeem_EndDate5',
                                                                                                 html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                             },

                                                                                      ]
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



                                                          ///////////////////////////carosel-2
                                                          {
                                                              xtype: 'container',
                                                              // xtype: 'carousel',
                                                              hidden: false,
                                                              //width: '95%',
                                                              //height: 80,
                                                              margin: '-2 0 0 0',
                                                              width: '100%',
                                                              id: 'container_Dashboard_NearestRedeemMembers_carosel2',
                                                              height: 290,
                                                              // height: 440,
                                                              // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                              style: 'background-color:transparent',
                                                              layout: {
                                                                  type: 'vbox',
                                                                  pack: 'start',
                                                                  align: 'center',
                                                              },
                                                              items: [
                                                                  {
                                                                      xtype: 'container',
                                                                      //width: '95%',
                                                                      //height: 80,
                                                                      margin: '12 0 0 0',
                                                                      width: '95%',
                                                                      height: 85,
                                                                      //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                      //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                      //  style: 'background-color:transparent',
                                                                      //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                      style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                              width: '92%',
                                                                              //height: 100,
                                                                              height: 80,
                                                                              margin: '10 0 0 0',
                                                                              name: 'container_Dashboard_NearestRedeem6',
                                                                              //style: {
                                                                              //    // background: '#D25959',
                                                                              //    background: 'rgba(76, 175, 80, 0.3);',
                                                                              //    // border: '2px'
                                                                              //},
                                                                              style: 'background-color:transparent',
                                                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                              //style: 'background-color:transparent',
                                                                              layout: {
                                                                                  type: 'hbox',
                                                                                  pack: 'center',
                                                                                  align: 'center',
                                                                              },
                                                                              items: [
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '15%',

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

                                                                                                //xtype: 'button',
                                                                                                //height: 90,
                                                                                                //width: 90,
                                                                                               // margin: '-18 0 0 -10',
                                                                                                margin: '-18 0 0 35',
                                                                                                //zIndex: 400,
                                                                                                id: 'Dashboard_NearestRedeem_StampContent6',
                                                                                                html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                                //ui: 'plain',
                                                                                                //handler: function () {

                                                                                                //}

                                                                                            },

                                                                                      ]
                                                                                  },
                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: '95%',
                                                                                       // width: '100%',
                                                                                        //zIndex: -99,
                                                                                        //margin: '-18 0 0 0',                                   
                                                                                        //height: 80,                                   
                                                                                        margin: '-14 0 0 0',
                                                                                        height: 80,
                                                                                        //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                        style: 'background-color:transparent',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'center',
                                                                                            align: 'left',
                                                                                        },
                                                                                        items: [
                                                                                             {
                                                                                                 margin: '-8 0 0 33',
                                                                                                 id: 'Dashboard_NearestRedeem_StampContentNote6',
                                                                                                 html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                             },
                                                                                              {
                                                                                                  margin: '-2 0 0 33',
                                                                                                  id: 'Dashboard_NearestRedeem_EnterpriseName6',
                                                                                                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                              },
                                                                                               {
                                                                                                   margin: '0 0 0 33',
                                                                                                   width: '100%',
                                                                                                   id: 'Dashboard_NearestRedeem_EndDate6',
                                                                                                   html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                               },

                                                                                        ]
                                                                                    },


                                                                              ]
                                                                          },

                                                                          {
                                                                              xtype: 'spacer'
                                                                          },
                                                                      ]

                                                                  },



                                                             {
                                                                 xtype: 'container',
                                                                 //width: '95%',
                                                                 //height: 80,
                                                                 margin: '12 0 0 0',
                                                                 width: '95%',
                                                                 height: 85,
                                                                 //  style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                                                                 //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 // style: 'background-color:transparent',
                                                                 // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                 style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                         width: '92%',
                                                                         //height: 100,
                                                                         height: 80,
                                                                         margin: '10 0 0 0',
                                                                         name: 'container_Dashboard_NearestRedeem7',
                                                                         //style: {
                                                                         //    // background: '#D25959',
                                                                         //    background: 'rgba(76, 175, 80, 0.3);',
                                                                         //    // border: '2px'
                                                                         //},
                                                                         style: 'background-color:transparent',
                                                                         //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                         //style: 'background-color:transparent',
                                                                         layout: {
                                                                             type: 'hbox',
                                                                             pack: 'center',
                                                                             align: 'center',
                                                                         },
                                                                         items: [
                                                                             {
                                                                                 xtype: 'container',
                                                                                 width: '15%',
                                                                                 //  zIndex: 400,
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

                                                                                           //xtype: 'button',
                                                                                           //height: 90,
                                                                                           //width: 90,
                                                                                          // margin: '-18 0 0 -10',
                                                                                           margin: '-18 0 0 35',
                                                                                           //zIndex: 400,
                                                                                           id: 'Dashboard_NearestRedeem_StampContent7',
                                                                                           html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                           //ui: 'plain',
                                                                                           //handler: function () {

                                                                                           //}

                                                                                       },

                                                                                 ]
                                                                             },
                                                                               {
                                                                                   xtype: 'container',
                                                                                   width: '95%',
                                                                                  // width: '100%',
                                                                                   // zIndex: -99,
                                                                                   //margin: '-18 0 0 0',                                   
                                                                                   //height: 80,                                   
                                                                                   margin: '-14 0 0 0',
                                                                                   height: 80,
                                                                                   //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                   style: 'background-color:transparent',
                                                                                   layout: {
                                                                                       type: 'vbox',
                                                                                       pack: 'center',
                                                                                       align: 'left',
                                                                                   },
                                                                                   items: [
                                                                                        {
                                                                                            margin: '-8 0 0 33',
                                                                                            id: 'Dashboard_NearestRedeem_StampContentNote7',
                                                                                            html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                        },
                                                                                         {
                                                                                             margin: '-2 0 0 33',
                                                                                             id: 'Dashboard_NearestRedeem_EnterpriseName7',
                                                                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                         },
                                                                                          {
                                                                                              margin: '0 0 0 33',
                                                                                              width: '100%',
                                                                                              id: 'Dashboard_NearestRedeem_EndDate7',
                                                                                              html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                          },

                                                                                   ]
                                                                               },


                                                                         ]
                                                                     },

                                                                     {
                                                                         xtype: 'spacer'
                                                                     },
                                                                 ]

                                                             },




                                                                {
                                                                    xtype: 'container',
                                                                    //width: '95%',
                                                                    //height: 80,
                                                                    margin: '12 0 0 0',
                                                                    width: '95%',
                                                                    height: 85,
                                                                    //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                    // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
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
                                                                            width: '92%',
                                                                            //height: 100,
                                                                            height: 80,
                                                                            margin: '10 0 0 0',
                                                                            name: 'container_Dashboard_NearestRedeem8',
                                                                            //style: {
                                                                            //    // background: '#D25959',
                                                                            //    background: 'rgba(76, 175, 80, 0.3);',
                                                                            //    // border: '2px'
                                                                            //},
                                                                            style: 'background-color:transparent',
                                                                            //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',

                                                                            //style: 'background-color:transparent',
                                                                            layout: {
                                                                                type: 'hbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '15%',
                                                                                    //  zIndex: 400,
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

                                                                                              //xtype: 'button',
                                                                                              //height: 90,
                                                                                              //width: 90,
                                                                                             // margin: '-18 0 0 -10',
                                                                                              margin: '-18 0 0 35',
                                                                                              //zIndex: 400,
                                                                                              id: 'Dashboard_NearestRedeem_StampContent8',
                                                                                              html: '<img src="resources/icons/AyohaRedeemPrize02.png" alt="Image" style="width:60px;height:60px;zIndex:400px">',

                                                                                              //ui: 'plain',
                                                                                              //handler: function () {

                                                                                              //}

                                                                                          },

                                                                                    ]
                                                                                },
                                                                                  {
                                                                                      xtype: 'container',
                                                                                      width: '95%',
                                                                                     // width: '100%',
                                                                                      // zIndex: -99,
                                                                                      //margin: '-18 0 0 0',                                   
                                                                                      //height: 80,                                   
                                                                                      margin: '-14 0 0 0',
                                                                                      height: 80,
                                                                                      //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                      style: 'background-color:transparent',
                                                                                      layout: {
                                                                                          type: 'vbox',
                                                                                          pack: 'center',
                                                                                          align: 'left',
                                                                                      },
                                                                                      items: [
                                                                                           {
                                                                                               margin: '-8 0 0 33',
                                                                                               id: 'Dashboard_NearestRedeem_StampContentNote8',
                                                                                               html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">No stamp loyalty reward</div>',
                                                                                           },
                                                                                            {
                                                                                                margin: '-2 0 0 33',
                                                                                                id: 'Dashboard_NearestRedeem_EnterpriseName8',
                                                                                                html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Please go to Ayoha Merchant</div>',
                                                                                            },
                                                                                             {
                                                                                                 margin: '0 0 0 33',
                                                                                                 width: '100%',
                                                                                                 id: 'Dashboard_NearestRedeem_EndDate8',
                                                                                                 html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal">and get the membership card to collect stamp!</div>',
                                                                                             },

                                                                                      ]
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
                                                      ]
                                                  },




                                                        ///////////////////////////////////////////////////////
                                                        //Loyalty Point Nearest Redeem Item

                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                                                                        // hidden: true,
                                                                        margin: '10 0 0 0',
                                                                        id: 'containerLoyaltyPointNearestRedeemItem_Header',
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
                                                                                 margin: '8 0 0 14',
                                                                                 id: 'htmlLoyaltyPointNearestRedeemItem_Header',
                                                                                 //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                 html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">2).-Point Loyalty Redemption</div>'
                                                                                 // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                                             },

                                                                              {
                                                                                  xtype: 'button',
                                                                                  id: 'btnLoyaltyPointNearestRedeemItem_Header',
                                                                                  // hidden: true,
                                                                                  //  badgeText: '1',
                                                                                  margin: '0 0 0 0',
                                                                                  height: 30,
                                                                                  width: 30,
                                                                                  html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                                                                                  ui: 'plain',
                                                                                  handler: function () {
                                                                                      //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                                                  }
                                                                              },



                                                                        ]
                                                                    },


                                                        {
                                                            xtype: 'container',
                                                            width: '100%',
                                                            //width: 1050,
                                                            height: 260,
                                                            margin: '-46 0 0 0',
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
                                                                    height: 230,
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
                                                                                     width: 2
                                                                                 },

                                                                                 {
                                                                                     xtype: 'container',
                                                                                     name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture0',
                                                                                     height: 165,
                                                                                     width: 160,
                                                                                     margin: '20 0 0 0',

                                                                                     //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                     //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                     style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                     layout: {
                                                                                         type: 'vbox',
                                                                                         pack: 'center',
                                                                                         align: 'center',
                                                                                     },
                                                                                     items: [
                                                                                           {
                                                                                               xtype: 'container',
                                                                                               width: '100%',
                                                                                               height: 18,
                                                                                               zIndex: 200,
                                                                                               style: 'background-color:transparent;',
                                                                                               layout: {
                                                                                                   type: 'vbox',
                                                                                                   pack: 'start',
                                                                                                   align: 'center',
                                                                                                   //type: 'hbox',
                                                                                                   //pack: 'start',
                                                                                                   //align: 'center',
                                                                                               },
                                                                                               items: [
                                                                                                  {
                                                                                                      width: '100%',
                                                                                                      zIndex: 100,
                                                                                                      id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint0',
                                                                                                      html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',

                                                                                                  },
                                                                                                  //{
                                                                                                  //    xtype:'spacer'
                                                                                                  //},
                                                                                                  // {
                                                                                                  //     //width: '100%',
                                                                                                  //     zIndex: 100,
                                                                                                  //     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft0',
                                                                                                  //     html: '<div style="color:purple;text-align: right;font-size:12px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">100<div style="color:purple;text-align: right;font-size:6px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Day Left</div></div>',

                                                                                                  // },
                                                                                               ]

                                                                                           },

                                                                                          {

                                                                                              height: 165,
                                                                                              width: 110,
                                                                                              id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture0',
                                                                                              //margin: '-70 0 0 0',
                                                                                              margin: '-16 0 0 -8',
                                                                                              html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px">',

                                                                                          },
                                                                                         {
                                                                                             xtype: 'container',
                                                                                             width: '100%',
                                                                                             height: 38,
                                                                                             // docked: 'bottom',
                                                                                             /// hidden:true,
                                                                                             margin: '-42 0 0 0',
                                                                                             style: 'border-right:0.5px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                             //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                             layout: {
                                                                                                 type: 'vbox',
                                                                                                 pack: 'start',
                                                                                                 align: 'center',
                                                                                             },
                                                                                             items: [
                                                                                                   {
                                                                                                       //width: '100%',
                                                                                                       margin: '-30 0 0 120',
                                                                                                       zIndex: 100,
                                                                                                       hidden: true,
                                                                                                       id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft0',
                                                                                                       html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                                   },
                                                                                                   {
                                                                                                       // margin: '-13 0 0 0',
                                                                                                       margin: '3 0 0 0',
                                                                                                       id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt0',
                                                                                                       //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                       html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                                   },

                                                                                                //{

                                                                                                //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                                //    margin:'-3 0 0 0',
                                                                                                //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                                //},

                                                                                                 {

                                                                                                     id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt0',
                                                                                                     margin: '-3 0 0 0',
                                                                                                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                     html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                            height: 165,
                                                                            width: 160,
                                                                            margin: '20 0 0 0',
                                                                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture1',
                                                                            //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                            //  style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [

                                                                                     {
                                                                                         xtype: 'container',
                                                                                         width: '100%',
                                                                                         height: 18,
                                                                                         zIndex: 200,
                                                                                         style: 'background-color:transparent;',
                                                                                         layout: {
                                                                                             type: 'vbox',
                                                                                             pack: 'start',
                                                                                             align: 'center',
                                                                                         },
                                                                                         items: [
                                                                                            {
                                                                                                width: '100%',
                                                                                                zIndex: 100,
                                                                                                id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint1',
                                                                                                html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                            },
                                                                                         ]

                                                                                     },


                                                                                 {

                                                                                     height: 165,
                                                                                     width: 110,
                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture1',
                                                                                     //margin: '-70 0 0 0',
                                                                                     margin: '-16 0 0 -8',
                                                                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px">',

                                                                                 },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '100%',
                                                                                    height: 38,
                                                                                    // docked: 'bottom',
                                                                                    /// hidden:true,
                                                                                    margin: '-42 0 0 0',
                                                                                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                    //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'start',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             //width: '100%',
                                                                                             margin: '-30 0 0 120',
                                                                                             zIndex: 100,
                                                                                             hidden: true,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft1',
                                                                                             html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                         },
                                                                                          {
                                                                                              margin: '3 0 0 0',
                                                                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt1',
                                                                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                          },

                                                                                       //{

                                                                                       //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                       //    margin:'-3 0 0 0',
                                                                                       //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                       //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                       //},

                                                                                        {

                                                                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt1',
                                                                                            margin: '-3 0 0 0',
                                                                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                            height: 165,
                                                                            width: 160,
                                                                            margin: '20 0 0 0',
                                                                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture2',
                                                                            //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [
                                                                                 {
                                                                                     xtype: 'container',
                                                                                     width: '100%',
                                                                                     height: 18,
                                                                                     zIndex: 200,
                                                                                     style: 'background-color:transparent;',
                                                                                     layout: {
                                                                                         type: 'vbox',
                                                                                         pack: 'start',
                                                                                         align: 'center',
                                                                                     },
                                                                                     items: [
                                                                                         {
                                                                                             width: '100%',
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint2',
                                                                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                         }
                                                                                     ]

                                                                                 },
                                                                                 {

                                                                                     height: 165,
                                                                                     width: 110,
                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture2',
                                                                                     margin: '-16 0 0 -8',
                                                                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                 },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '100%',
                                                                                    height: 38,
                                                                                    // docked: 'bottom',
                                                                                    /// hidden:true,
                                                                                    margin: '-42 0 0 0',
                                                                                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                    //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'start',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                        {
                                                                                            //width: '100%',
                                                                                            margin: '-30 0 0 120',
                                                                                            zIndex: 100,
                                                                                            hidden: true,
                                                                                            id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft2',
                                                                                            html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                        },
                                                                                          {
                                                                                              margin: '3 0 0 0',
                                                                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt2',
                                                                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                          },

                                                                                       //{

                                                                                       //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                       //    margin:'-3 0 0 0',
                                                                                       //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                       //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                       //},

                                                                                        {

                                                                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt2',
                                                                                            margin: '-3 0 0 0',
                                                                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                            height: 165,
                                                                            width: 160,
                                                                            margin: '20 0 0 0',
                                                                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture3',
                                                                            //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [
                                                                                 {
                                                                                     xtype: 'container',
                                                                                     width: '100%',
                                                                                     height: 18,
                                                                                     zIndex: 200,
                                                                                     style: 'background-color:transparent;',
                                                                                     layout: {
                                                                                         type: 'vbox',
                                                                                         pack: 'start',
                                                                                         align: 'center',
                                                                                     },
                                                                                     items: [
                                                                                         {
                                                                                             width: '100%',
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint3',
                                                                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                         }
                                                                                     ]

                                                                                 },
                                                                                 {

                                                                                     height: 165,
                                                                                     width: 110,
                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture3',
                                                                                     margin: '-16 0 0 -8',
                                                                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                 },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '100%',
                                                                                    height: 38,
                                                                                    // docked: 'bottom',
                                                                                    /// hidden:true,
                                                                                    margin: '-42 0 0 0',
                                                                                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                    //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'start',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             //width: '100%',
                                                                                             margin: '-30 0 0 120',
                                                                                             zIndex: 100,
                                                                                             hidden: true,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft3',
                                                                                             html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                         },
                                                                                          {
                                                                                              margin: '3 0 0 0',
                                                                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt3',
                                                                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                          },

                                                                                       //{

                                                                                       //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                       //    margin:'-3 0 0 0',
                                                                                       //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                       //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                       //},

                                                                                        {

                                                                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt3',
                                                                                            margin: '-3 0 0 0',
                                                                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                            height: 165,
                                                                            width: 160,
                                                                            margin: '20 0 0 0',
                                                                            name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture4',
                                                                            //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                            style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'center',
                                                                            },
                                                                            items: [
                                                                                 {
                                                                                     xtype: 'container',
                                                                                     width: '100%',
                                                                                     height: 18,
                                                                                     zIndex: 200,
                                                                                     style: 'background-color:transparent;',
                                                                                     layout: {
                                                                                         type: 'vbox',
                                                                                         pack: 'start',
                                                                                         align: 'center',
                                                                                     },
                                                                                     items: [
                                                                                         {
                                                                                             width: '100%',
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint4',
                                                                                             html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                         }
                                                                                     ]

                                                                                 },
                                                                                 {

                                                                                     height: 165,
                                                                                     width: 110,
                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture4',
                                                                                     margin: '-16 0 0 -8',
                                                                                     html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                 },
                                                                                {
                                                                                    xtype: 'container',
                                                                                    width: '100%',
                                                                                    height: 38,
                                                                                    // docked: 'bottom',
                                                                                    /// hidden:true,
                                                                                    margin: '-42 0 0 0',
                                                                                    style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                    //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'start',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             //width: '100%',
                                                                                             margin: '-30 0 0 120',
                                                                                             zIndex: 100,
                                                                                             hidden: true,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft4',
                                                                                             html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                         },
                                                                                          {
                                                                                              margin: '3 0 0 0',
                                                                                              id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt4',
                                                                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                              html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                          },

                                                                                       //{

                                                                                       //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                       //    margin:'-3 0 0 0',
                                                                                       //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                       //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                       //},

                                                                                        {

                                                                                            id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt4',
                                                                                            margin: '-3 0 0 0',
                                                                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                            html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                                    //hidden: true,
                                                                                    height: 165,
                                                                                    width: 160,
                                                                                    margin: '20 0 0 0',
                                                                                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture5',
                                                                                    //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             xtype: 'container',
                                                                                             width: '100%',
                                                                                             height: 18,
                                                                                             zIndex: 200,
                                                                                             style: 'background-color:transparent;',
                                                                                             layout: {
                                                                                                 type: 'vbox',
                                                                                                 pack: 'start',
                                                                                                 align: 'center',
                                                                                             },
                                                                                             items: [
                                                                                                 {
                                                                                                     width: '100%',
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint5',
                                                                                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                                 }
                                                                                             ]

                                                                                         },
                                                                                         {

                                                                                             height: 165,
                                                                                             width: 110,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture5',
                                                                                             margin: '-16 0 0 -8',
                                                                                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                         },
                                                                                        {
                                                                                            xtype: 'container',
                                                                                            width: '100%',
                                                                                            height: 38,
                                                                                            // docked: 'bottom',
                                                                                            /// hidden:true,
                                                                                            margin: '-42 0 0 0',
                                                                                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                            //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                            layout: {
                                                                                                type: 'vbox',
                                                                                                pack: 'start',
                                                                                                align: 'center',
                                                                                            },
                                                                                            items: [
                                                                                                 {
                                                                                                     //width: '100%',
                                                                                                     margin: '-30 0 0 120',
                                                                                                     zIndex: 100,
                                                                                                     hidden: true,
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft5',
                                                                                                     html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                                 },
                                                                                                  {
                                                                                                      margin: '3 0 0 0',
                                                                                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt5',
                                                                                                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                                  },

                                                                                               //{

                                                                                               //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                               //    margin:'-3 0 0 0',
                                                                                               //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                               //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                               //},

                                                                                                {

                                                                                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt5',
                                                                                                    margin: '-3 0 0 0',
                                                                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                                    //hidden: true,
                                                                                    height: 165,
                                                                                    width: 160,
                                                                                    margin: '20 0 0 0',
                                                                                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture6',
                                                                                    //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             xtype: 'container',
                                                                                             width: '100%',
                                                                                             height: 18,
                                                                                             zIndex: 200,
                                                                                             style: 'background-color:transparent;',
                                                                                             layout: {
                                                                                                 type: 'vbox',
                                                                                                 pack: 'start',
                                                                                                 align: 'center',
                                                                                             },
                                                                                             items: [
                                                                                                 {
                                                                                                     width: '100%',
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint6',
                                                                                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                                 }
                                                                                             ]

                                                                                         },
                                                                                         {

                                                                                             height: 165,
                                                                                             width: 110,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture6',
                                                                                             margin: '-16 0 0 -8',
                                                                                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                         },
                                                                                        {
                                                                                            xtype: 'container',
                                                                                            width: '100%',
                                                                                            height: 38,
                                                                                            // docked: 'bottom',
                                                                                            /// hidden:true,
                                                                                            margin: '-42 0 0 0',
                                                                                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                            //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                            layout: {
                                                                                                type: 'vbox',
                                                                                                pack: 'start',
                                                                                                align: 'center',
                                                                                            },
                                                                                            items: [
                                                                                                 {
                                                                                                     //width: '100%',
                                                                                                     margin: '-30 0 0 120',
                                                                                                     zIndex: 100,
                                                                                                     hidden: true,
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft6',
                                                                                                     html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                                 },
                                                                                                  {
                                                                                                      margin: '3 0 0 0',
                                                                                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt6',
                                                                                                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                                  },

                                                                                               //{

                                                                                               //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                               //    margin:'-3 0 0 0',
                                                                                               //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                               //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                               //},

                                                                                                {

                                                                                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt6',
                                                                                                    margin: '-3 0 0 0',
                                                                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                                    //hidden: true,
                                                                                    height: 165,
                                                                                    width: 160,
                                                                                    margin: '20 0 0 0',
                                                                                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture7',
                                                                                    //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             xtype: 'container',
                                                                                             width: '100%',
                                                                                             height: 18,
                                                                                             zIndex: 200,
                                                                                             style: 'background-color:transparent;',
                                                                                             layout: {
                                                                                                 type: 'vbox',
                                                                                                 pack: 'start',
                                                                                                 align: 'center',
                                                                                             },
                                                                                             items: [
                                                                                                 {
                                                                                                     width: '100%',
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint7',
                                                                                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                                 }
                                                                                             ]

                                                                                         },
                                                                                         {

                                                                                             height: 165,
                                                                                             width: 110,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture7',
                                                                                             margin: '-16 0 0 -8',
                                                                                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                         },
                                                                                        {
                                                                                            xtype: 'container',
                                                                                            width: '100%',
                                                                                            height: 38,
                                                                                            // docked: 'bottom',
                                                                                            /// hidden:true,
                                                                                            margin: '-42 0 0 0',
                                                                                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                            //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                            layout: {
                                                                                                type: 'vbox',
                                                                                                pack: 'start',
                                                                                                align: 'center',
                                                                                            },
                                                                                            items: [
                                                                                                 {
                                                                                                     //width: '100%',
                                                                                                     margin: '-30 0 0 120',
                                                                                                     zIndex: 100,
                                                                                                     hidden: true,
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft7',
                                                                                                     html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                                 },
                                                                                                  {
                                                                                                      margin: '3 0 0 0',
                                                                                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt7',
                                                                                                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                                  },

                                                                                               //{

                                                                                               //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                               //    margin:'-3 0 0 0',
                                                                                               //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                               //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                               //},

                                                                                                {

                                                                                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt7',
                                                                                                    margin: '-3 0 0 0',
                                                                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


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
                                                                                    //hidden: true,
                                                                                    height: 165,
                                                                                    width: 160,
                                                                                    margin: '20 0 0 0',
                                                                                    name: 'nameLoyaltyPointNearestRedeemItem_ItemPicture8',
                                                                                    //style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75,#c800ffc9);border-radius: 10px 10px 10px 10px;',
                                                                                    style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                                                    layout: {
                                                                                        type: 'vbox',
                                                                                        pack: 'center',
                                                                                        align: 'center',
                                                                                    },
                                                                                    items: [
                                                                                         {
                                                                                             xtype: 'container',
                                                                                             width: '100%',
                                                                                             height: 18,
                                                                                             zIndex: 200,
                                                                                             style: 'background-color:transparent;',
                                                                                             layout: {
                                                                                                 type: 'vbox',
                                                                                                 pack: 'start',
                                                                                                 align: 'center',
                                                                                             },
                                                                                             items: [
                                                                                                 {
                                                                                                     width: '100%',
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPoint8',
                                                                                                     html: '<div style="color:purple;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px;">0 <div style="color:purple;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>',
                                                                                                 }
                                                                                             ]

                                                                                         },
                                                                                         {

                                                                                             height: 165,
                                                                                             width: 110,
                                                                                             id: 'htmlLoyaltyPointNearestRedeemItem_ItemPicture8',
                                                                                             margin: '-16 0 0 -8',
                                                                                             html: '<img src="resources/icons/AyohaStoreGrey.png"  style="width: 120px; height: 120px;margin:20px 0px 0px 0px;">',

                                                                                         },
                                                                                        {
                                                                                            xtype: 'container',
                                                                                            width: '100%',
                                                                                            height: 38,
                                                                                            // docked: 'bottom',
                                                                                            /// hidden:true,
                                                                                            margin: '-42 0 0 0',
                                                                                            style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 white;background-color:rgba(0, 0, 0, 0.2);border-radius: 0px 0px 10px 10px;',
                                                                                            //  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:rgba(0, 0, 0, 0.5);">Murugan Car Wash</div><br>',
                                                                                            layout: {
                                                                                                type: 'vbox',
                                                                                                pack: 'start',
                                                                                                align: 'center',
                                                                                            },
                                                                                            items: [
                                                                                                 {
                                                                                                     //width: '100%',
                                                                                                     margin: '-30 0 0 120',
                                                                                                     zIndex: 100,
                                                                                                     hidden: true,
                                                                                                     id: 'htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft8',
                                                                                                     html: '<div style="border: 2px solid purple;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: purple;height:30px;width:30px;padding:5px 0px">100<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>',

                                                                                                 },
                                                                                                  {
                                                                                                      margin: '3 0 0 0',
                                                                                                      id: 'html_LoyaltyPointNearestRedeemItem_ItemNameTxt8',
                                                                                                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                      html: '<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">No Item Redemption</div>',


                                                                                                  },

                                                                                               //{

                                                                                               //    id: 'html_LoyaltyPointNearestRedeemItem_EnterpriseNameTxt0',
                                                                                               //    margin:'-3 0 0 0',
                                                                                               //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                               //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Klinik Pergigian Ismile</div>',


                                                                                               //},

                                                                                                {

                                                                                                    id: 'html_LoyaltyPointNearestRedeemItem_EndDateTxt8',
                                                                                                    margin: '-3 0 0 0',
                                                                                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                                                                    html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">Go to Ayoha Merchant!</div>',


                                                                                                },



                                                                                            ]
                                                                                        },





                                                                                    ]
                                                                                },

                                                                    ]
                                                                },

                                                                {
                                                                    xtype: 'spacer'
                                                                },
                                                            ]

                                                        },




                                                        //////////////////// voucher redemption
                                                      //////////////////Ayoha Voucher////
                        {
                            xtype: 'container',
                            width: '100%',
                            /// hidden:true,
                            // margin: '120 0 0 0',
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
                                     id: 'htmlFloatPanel_DashboardMerchantRewardTxt',
                                     html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Merchant Voucher</b></div>'
                                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                 },
                                  {
                                      xtype: 'spacer'
                                  },
                {

                    margin: '0 14 0 0',
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
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
                             margin: '10 0 0 0',
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

                                      id: 'FloatPanel_DashboardMerchantRewardVoucherList',
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
                                      itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
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








                                                        ////////


                                              ]

                                          },
        //////////////////////////////////////end merchant redemption

















                                      ]
                                  },



















                                  /////////////////////////////////////////////////

                                  ///////Membership Contest

                                  {
                                      xtype: 'container',
                                      //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                                      width: '100%',
                                      margin: '170 0 0 0',
                                      height: 600,
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center'

                                      },
                                      items: [
                                             //////////////////////////MembershipContest


                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               // hidden: true,
                                               margin: '10 0 0 0',
                                               id: 'containerFloatPanel_DashboardMerchantMembershipContest_Header',
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
                                                        margin: '8 0 0 14',
                                                        id: 'htmlFloatPanel_DashboardMerchantMembershipContest_Header',
                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Membership Contest</div>'
                                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                    },

                                                     {
                                                         xtype: 'button',
                                                         id: 'btnFloatPanel_DashboardMerchantMembershipContest_Header',
                                                         // hidden: true,
                                                         //  badgeText: '1',
                                                         margin: '0 0 0 0',
                                                         height: 30,
                                                         width: 30,
                                                         html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                         }
                                                     },



                                               ]
                                           },


                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                             height: 600,
                                                             margin: '0 0 0 0',
                                                             //  hidden: true,
                                                             id: 'htmlFloatPanel_DashboardMerchantMembershipContest',
                                                             style: "background-color: transparent;",
                                                             // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center'

                                                             },
                                                             items: [
                                                                 {

                                                                     id: 'FloatPanel_MerchantReward_MembershipContest',
                                                                     margin: '-30 0 0 0',
                                                                     //  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                                     // grouped: true,
                                                                     xtype: 'dataview',
                                                                     //xtype: 'list',
                                                                     height: 600,
                                                                     style: "background-color: transparent;",
                                                                     inline: {
                                                                         wrap: false
                                                                     },
                                                                     scrollable: {
                                                                         direction: 'horizontal',
                                                                         indicators: false,
                                                                     },
                                                                     width: '100%',


                                                                     //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
                                                                     //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                                     //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                     //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


                                                                     //'</div>',


                                                                     itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
                                                                   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                                   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                 // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
                                                                  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:5px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

                                                                  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:5px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:30px; background:white; margin:5px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


                                                                '</div>',


                                                                     emptyText: '<div  style="background-color:transparent;width:100%; height: 500px;margin:20px 0px 0px 0px;text-align:center"><img src="resources/icons/NoMembershipEventContest01.jpg" style="width: 95%; height: 500px;"/></div>',

                                                                 },
                                                             ]
                                                         },


                                      ]
                                  },

                                  ////////////////////////////////////////////////////////



                                  //////membership event


                                  {
                                      xtype: 'container',
                                      //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                                      width: '100%',
                                      margin: '50 0 0 0',
                                      height: 400,
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'center'

                                      },
                                      items: [
                                             //////////////////////////MembershipEvent


                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               // hidden: true,
                                               margin: '0 0 0 0',
                                               id: 'containerLoyaltMembershipEvent_Header',
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
                                                        margin: '8 0 0 14',
                                                        id: 'htmlLoyaltyMembershipEvent_Header',
                                                        //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                        html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">Membership Events</div>'
                                                        // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                    },

                                                     {
                                                         xtype: 'button',
                                                         id: 'btnLoyaltyMembershipEventtNearestRedeemItem_Header',
                                                         // hidden: true,
                                                         //  badgeText: '1',
                                                         margin: '0 0 0 0',
                                                         height: 30,
                                                         width: 30,
                                                         html: '<img src="resources/icons/latestpoint03.png" width="20" height="20" alt="Company Name">',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             //  FloatPanel_AyohaReward_ContestAdvertisementShow();
                                                         }
                                                     },



                                               ]
                                           },


                                                         {
                                                             xtype: 'container',
                                                             width: '100%',
                                                             height: 400,
                                                             margin: '40 0 0 0',
                                                             //  hidden: true,
                                                             id: 'htmlFloatPanel_DashboardMerchantMembershipEvent',
                                                             style: "background-color: transparent;",
                                                             // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center'

                                                             },
                                                             items: [
                                                                 {

                                                                     id: 'FloatPanel_MerchantReward_MembershipEvent',
                                                                     margin: '-15 0 0 0',
                                                                     //  store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                                                                     // grouped: true,
                                                                     xtype: 'dataview',
                                                                     //xtype: 'list',
                                                                     height: 500,
                                                                     style: "background-color: transparent;",
                                                                     inline: {
                                                                         wrap: false
                                                                     },
                                                                     scrollable: {
                                                                         direction: 'horizontal',
                                                                         indicators: false,
                                                                     },
                                                                     width: '100%',
                                                                     // cls: 'dataview-item',
                                                                     //itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')"  src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px none #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:100%;" onclick="FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')">{EventName}</div><br><div  style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">{ModifiedPrice}</div><br>{Pointlabel}<br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px" onclick="FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')">{ModifiedItemDescriptions}</div></th></tr></thead></table>',

                                                                     //itemTpl: '<div class="myContent" style="background-color:white;width:100%;height:400px;">' +
                                                                     //     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
                                                                     //    '&nbsp;&nbsp;<img src="{EventCoverPhoto}" style="width:390px;height:200px;margin:-10px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                     //   '&nbsp;&nbsp;<div style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 270px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div><br><div style="margin:-21px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-21px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div></div></div>&nbsp;&nbsp;' +
                                                                     //   '&nbsp;&nbsp;<div style="width: 90px; float:left; height:30px; background:red; margin:0px"></div><div style="width: 270px; float:left; height:30px; background:black; margin:0px;word-break: break-all;"></div>&nbsp;&nbsp;' +
                                                                     //   '</div>',



                                                                     itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:400px;">' +
                                                                      '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

                                                                      // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
                                                                      '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:{ModifiedWidth}px;height:200px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                                                     '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div><br>' +


                                                                  //'{ModifiedRespondStatus}' +
                                                                   '</div>',


                                                                     //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


                                                                     // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
                                                                     emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

                                                                 },
                                                             ]
                                                         },


                                      ]
                                  },












                                  //////////////////////////////////////////////////////////

                                  ///////Membership Weekly Summary


                                  {
                                      xtype: 'container',
                                      width: '100%',
                                      hidden: true,
                                      margin: '30 0 0 0',
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
                                               zIndex: 100,
                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                               html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Membership Weekly Summary</b></div>'
                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                           },
                                      ]
                                  },

                             {
                                 xtype: 'container',
                                 width: '100%',
                                 margin: '0 0 0 0',
                                 hidden: true,
                                 style: {
                                     // background: '#D25959',
                                     background: 'transparent',
                                     // border: '2px'
                                 },
                                 height: 8,

                             },


                             {

                                 xtype: 'container',
                                 style: "background-color: transparent;",
                                 hidden: true,
                                 width: '100%',
                                 //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
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
                                         width: '45%',
                                         height: 90,
                                         margin: '0 0 0 0',
                                         //style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                                         style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                         //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         items: [
                                               {
                                                   xtype: 'container',
                                                   width: '100%',

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

                                                   },
                                                   items: [
                                                        {
                                                            margin: '0 0 0 0',
                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',
                                                        },

                                                   ]
                                               },
                                                  {
                                                      xtype: 'container',
                                                      width: '100%',

                                                      margin: '-5 0 0 0',
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

                                                               xtype: 'button',
                                                               height: 60,
                                                               width: 60,

                                                               margin: '0 0 0 0',
                                                               id: 'btnMyAccount_Dashboard_Enterprise_Activity_Stamp',
                                                               //badgeText: "2",
                                                               html: '<img src="resources/icons/latestStampcardPurple.png" width="50" height="50" alt="Company Name">',
                                                               ui: 'plain',
                                                               handler: function () {

                                                                   //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                   //  setupMovementMap(2);





                                                                   //Ext.getCmp('mainView').setActiveItem(16);
                                                                   //loadNotificationSummary();
                                                               }
                                                           },
                                                               {
                                                                   margin: '0 0 0 0',
                                                                   id: 'Dashboard_AyohaActivity_ThisWeekStamp',
                                                                   html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">100</div>',
                                                               },
                                                               //margin: '10 0 0 0',
                                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                                      ]
                                                  },
                                               {
                                                   margin: '-5 0 0 0',
                                                   html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Stamps</div>',
                                               },
                                         ]
                                     },

                                     {
                                         xtype: 'spacer',
                                         // hidden: true
                                     },



                                       {
                                           xtype: 'container',
                                           width: '45%',
                                           // hidden: true,
                                           height: 90,
                                           margin: '0 0 0 0',
                                           //  style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                                           style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                           // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center',
                                           },
                                           items: [
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',

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

                                                     },
                                                     items: [
                                                          {
                                                              margin: '0 0 0 0',
                                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamp Card Redemption</div>',
                                                          },

                                                     ]
                                                 },
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',

                                                        margin: '-5 0 0 0',
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

                                                                 xtype: 'button',
                                                                 height: 60,
                                                                 width: 60,

                                                                 margin: '0 0 0 0',
                                                                 id: 'btnMyAccount_Dashboard_Enterprise_Activity_Campaign',
                                                                 //badgeText: "2",
                                                                 html: '<img src="resources/icons/StampRedeemThisWeek03.png" width="50" height="50" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {

                                                                     //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                     //  setupMovementMap(2);





                                                                     //Ext.getCmp('mainView').setActiveItem(16);
                                                                     //loadNotificationSummary();
                                                                 }
                                                             },
                                                                 {
                                                                     margin: '0 0 0 0',
                                                                     id: 'Dashboard_AyohaActivity_ThisWeekRedeemStamp',
                                                                     html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                 },
                                                                 //margin: '10 0 0 0',
                                                                 //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                                        ]
                                                    },
                                                     {
                                                         margin: '-5 0 0 0',
                                                         html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Redeem</div>',
                                                     },

                                           ]
                                       },
                                        {
                                            xtype: 'spacer',
                                            // hidden: true,
                                        },
                                 ]


                             },







                             {

                                 xtype: 'container',
                                 style: "background-color: transparent;",
                                 width: '100%',
                                 margin: '15 0 0 0',
                                 hidden: true,
                                 //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
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
                                         width: '45%',
                                         height: 90,
                                         margin: '0 0 0 0',
                                         style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                         //style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                                         //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'center',
                                             align: 'center',
                                         },
                                         items: [
                                               {
                                                   xtype: 'container',
                                                   width: '100%',

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

                                                   },
                                                   items: [
                                                        {
                                                            margin: '0 0 0 0',
                                                            html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Points</div>',
                                                        },

                                                   ]
                                               },
                                                  {
                                                      xtype: 'container',
                                                      width: '100%',

                                                      margin: '-5 0 0 0',
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

                                                               xtype: 'button',
                                                               height: 60,
                                                               width: 60,

                                                               margin: '0 0 0 0',
                                                               id: 'btnMyAccount_Dashboard_Enterprise_Activity_Point',
                                                               //badgeText: "2",
                                                               html: '<img src="resources/icons/ayoharedeeempoint01.png" width="50" height="50" alt="Company Name">',
                                                               ui: 'plain',
                                                               handler: function () {

                                                                   //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                   //  setupMovementMap(2);





                                                                   //Ext.getCmp('mainView').setActiveItem(16);
                                                                   //loadNotificationSummary();
                                                               }
                                                           },
                                                               {
                                                                   margin: '0 0 0 0',
                                                                   id: 'Dashboard_AyohaActivity_ThisWeekPoint',
                                                                   html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                               },
                                                               //margin: '10 0 0 0',
                                                               //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                                      ]
                                                  },
                                               {
                                                   margin: '-5 0 0 0',
                                                   html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Points</div>',
                                               },
                                         ]
                                     },

                                     {
                                         xtype: 'spacer'
                                     },



                                       {
                                           xtype: 'container',
                                           width: '45%',
                                           height: 90,
                                           margin: '0 0 0 0',
                                           style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                           //style: 'background-color:black;border-radius: 10px 10px 10px 10px;',
                                           // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'center',
                                               align: 'center',
                                           },
                                           items: [
                                                 {
                                                     xtype: 'container',
                                                     width: '100%',

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

                                                     },
                                                     items: [
                                                          {
                                                              margin: '0 0 0 0',
                                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Point Card Redemption</div>',
                                                          },

                                                     ]
                                                 },
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',

                                                        margin: '-5 0 0 0',
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

                                                                 xtype: 'button',
                                                                 height: 60,
                                                                 width: 60,

                                                                 margin: '0 0 0 0',
                                                                 id: 'btnMyAccount_Dashboard_Enterprise_Activity_MembershipCards',
                                                                 //badgeText: "2",
                                                                 html: '<img src="resources/icons/thisweekpointredemption01.png" width="50" height="50" alt="Company Name">',
                                                                 ui: 'plain',
                                                                 handler: function () {

                                                                     //   MovementHistoryMapPanelCheckInShow(GetCurrentUserAccountNo(), globalMovementcode);
                                                                     //  setupMovementMap(2);



                                                                     //setDashBoardPushNotificationsQuota();
                                                                     //setDashBoardSMSQuota();
                                                                     //setDashBoardWhatAppQuota()

                                                                     //Ext.getCmp('mainView').setActiveItem(16);
                                                                     //loadNotificationSummary();
                                                                 }
                                                             },
                                                                 {
                                                                     margin: '0 0 0 0',
                                                                     id: 'Dashboard_AyohaActivity_ThisWeekCountsPointRedeem',
                                                                     html: '<div style="color:black;text-align: center;font-size:38px;width:100%;font-weight:bold">0</div>',
                                                                 },
                                                                 //margin: '10 0 0 0',
                                                                 //html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Stamps</div>',

                                                        ]
                                                    },
                                                     {
                                                         margin: '-5 0 0 0',
                                                         html: '<div style="color:black;text-align: center;font-size:11px;width:100%;font-weight:normal">This Week Redeem</div>',
                                                     },

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
                                           height: 500,
                                       }























                                ////////

                            ]
                        },






                ]



            },






        });

    return _FloatPanel_DashboardMerchantReward;
}



function FloatPanel_DashboardMerchantRewardShow() {

    Ext.Viewport.remove(_FloatPanel_DashboardMerchantReward);
    this.overlay = Ext.Viewport.add(FloatPanel_DashboardMerchantReward());
    this.overlay.show();
    is_FloatPanel_DashboardMerchantRewardHide = 'Y';
   // AddRoutePages(_FloatPanel_DashboardMerchantReward, "is_FloatPanel_DashboardMerchantRewardHide");
    AddRoutePages("FloatPanel_DashboardMerchantRewardHide()");
    MembershipTag="YES";
    var containerView = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem0]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {

          // SingleTap_Dashboard_NearestRedeem0();
          SingleTap_Dashboard_NearestRedeem_StampCard(0);
      }
    );


    var containerView1 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem1]')[0];
    var containerViewEl1 = containerView1.element;
    containerViewEl1.on('tap',
      function (event, node, options, eOpts) {

          //SingleTap_Dashboard_NearestRedeem1();
          SingleTap_Dashboard_NearestRedeem_StampCard(1);
      }
    );


    var containerView2 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem2]')[0];
    var containerViewEl2 = containerView2.element;
    containerViewEl2.on('tap',
      function (event, node, options, eOpts) {

          // SingleTap_Dashboard_NearestRedeem2();
          SingleTap_Dashboard_NearestRedeem_StampCard(2);
      }
    );



    var containerView3 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem3]')[0];
    var containerViewEl3 = containerView3.element;
    containerViewEl3.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(3);
      }
    );


    var containerView4 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem4]')[0];
    var containerViewEl4 = containerView4.element;
    containerViewEl4.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(4);
      }
    );




    var containerView5 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem5]')[0];
    var containerViewEl5 = containerView5.element;
    containerViewEl5.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(5);
      }
    );




    var containerView6 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem6]')[0];
    var containerViewEl6 = containerView6.element;
    containerViewEl6.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(6);
      }
    );




    var containerView7 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem7]')[0];
    var containerViewEl7 = containerView7.element;
    containerViewEl7.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(7);
      }
    );


    var containerView8 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem8]')[0];
    var containerViewEl8 = containerView8.element;
    containerViewEl8.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_StampCard(8);
      }
    );

    var containerViewLatestStamps = Ext.ComponentQuery.query('container[name=containerDashboard_User_LatestStamps]')[0];
    var containerViewElLatestStamps = containerViewLatestStamps.element;
    containerViewElLatestStamps.on('tap',
      function (event, node, options, eOpts) {


          SingleTap_Dashboard_User_LatestStamps();


      }
    );



    var containerViewTotalPoints = Ext.ComponentQuery.query('container[name=containerDashboard_AyohaRewards_TotalPoints]')[0];
    var containerViewElTotalPoints = containerViewTotalPoints.element;
    containerViewElTotalPoints.on('tap',
      function (event, node, options, eOpts) {




          SingleTap_Dashboard_User_LatestPoint();



      }
    );









    var containerViewNearestRedeemNonMembers = Ext.ComponentQuery.query('container[name=namecontainer_Dashboard_NearestRedeemNonMembers]')[0];
    var containerViewElNearestRedeemNonMembers = containerViewNearestRedeemNonMembers.element;
    containerViewElNearestRedeemNonMembers.on('tap',
      function (event, node, options, eOpts) {
          Dashboard_SearchMerchantListShow();
         // FloatPanel_RewardStoreShow();
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture0 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture0]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture0 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture0.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture0.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(0);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture1 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture1]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture1 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture1.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture1.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(1);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture2 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture2]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture2 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture2.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture2.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(2);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );

    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture3 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture3]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture3 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture3.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture3.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(3);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
      }
    );

    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture4 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture4]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture4 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture4.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture4.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(4);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint4();
      }
    );


    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture5 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture5]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture5 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture5.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture5.on('tap',
      function (event, node, options, eOpts) {
          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(5);
          // SingleTap_Dashboard_NearestRedeem_loyaltyPoint5();
      }
    );

    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture6 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture6]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture6 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture6.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture6.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(6);
      }
    );



    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture7 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture7]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture7 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture7.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture7.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(7);
      }
    );


    var containerViewLoyaltyPointNearestRedeemItem_ItemPicture8 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture8]')[0];
    var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture8 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture8.element;
    containerViewElLoyaltyPointNearestRedeemItem_ItemPicture8.on('tap',
      function (event, node, options, eOpts) {

          SingleTap_Dashboard_NearestRedeem_loyaltyPoint(8);
      }
    );





    var containerViewLoyaltynamecontainerVIA_Advertisement = Ext.ComponentQuery.query('container[name=namecontainerVIA_Advertisement]')[0];
    var containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement = containerViewLoyaltynamecontainerVIA_Advertisement.element;
    containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
      }
    );
    var containerViewNamecontainerDashboardVIAAdvertisement_eStore = Ext.ComponentQuery.query('container[name=nameContainerDashboardVIAAdvertisement_eStore]')[0];
    var containerViewElDashboardVIAAdvertisement_eStore = containerViewNamecontainerDashboardVIAAdvertisement_eStore.element;
    containerViewElDashboardVIAAdvertisement_eStore.on('tap',
      function (event, node, options, eOpts) {

          Dashboard_openVIAAdvertisement_OnlineStore();


      }
    );



    FloatPanel_DashboardMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore();

    var y = parseInt(screen.width - 24);
    var x = parseInt(window.innerWidth - 64);
    var z = parseInt(window.innerWidth - 58);
    console.log(y)
    console.log(x)

    //  Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardVoucherImg_NA').setWidth(y);
    //Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardVoucherImg_NA').setHtml('<div  style="background-color:transparent;width: '+y+'px; height: 150px;"><img src="resources/icons/NotAvailableVoucher.png" style="width: 100%; height: 150px;"/></div>');

    ////////////Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardContestImg_NA').setWidth(x);
    ////////////Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardContestImg_NA').setHtml('<div  style="background-color:transparent;width: '+x+'px; height: 150px;"><img src="resources/icons/AyohaMerchantContest01.png" style="width: 100%; height: 150px;"/></div>');

    //Ext.getCmp('htmlFloatPanel_DashboardMerchantMembershipEventImg_NA').setWidth(z);
    //Ext.getCmp('htmlFloatPanel_DashboardMerchantMembershipEventImg_NA').setHtml('<div  style="background-color:transparent;width: ' + z + 'px; height: 150px;"><img src="resources/icons/membershipEvent.png" style="width: 100%; height: 150px;"/></div>')

    FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();

}
var is_FloatPanel_DashboardMerchantRewardHide = 'N';

function FloatPanel_DashboardMerchantRewardHide() {

    if (is_FloatPanel_DashboardMerchantRewardHide == 'Y') {
        _FloatPanel_DashboardMerchantReward.hide();
        is_FloatPanel_DashboardMerchantRewardHide = 'N';
        VIAAdvertismentAutoSlideReset();
        //RemovePages(_FloatPanel_DashboardMerchantReward, "is_FloatPanel_DashboardMerchantRewardHide");
        RemovePages("FloatPanel_DashboardMerchantRewardHide()");
    }

}




function FloatPanel_DashboardMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore() {



    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemStampCard');
    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.load();




    var task = Ext.create('Ext.util.DelayedTask', function () {

        // var myStore = Ext.getStore('AyohaUserDashBoardNearestRedeemItemStampCardStore');



        var count = _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getCount();

        //if (count <= 0) {
        //    return;
        //}




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

        ArrStampisRequiredStartEndDate.length = 0;
        ArrStampisCampaignExpired.length = 0;
        ArrStampCampaignDayLeft.length = 0;
        ArrStampCampaignAdvertisementTitle.length = 0;
        //unlimited load//
        for (i = 0; i < count; i++) {
            // for (i = 0; i < a; i++) {
            //   var modelRecord = myStore.getAt(i);
            var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getAt(i);
            if (modelRecord.get('StampCampaignCode')) {
                var StampCampaignCode = modelRecord.get('StampCampaignCode');
                var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                var StampContentNote = modelRecord.get('StampContentNote');
                var StampContentSequence = modelRecord.get('StampContentSequence');
                var EnterpriseName = modelRecord.get('EnterpriseName').toUpperCase();
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
                var CampaignDayLeft = parseInt(modelRecord.get('CampaignDayLeft'));
                var AdvertisementTitle = modelRecord.get('AdvertisementTitle');


             
                if (i <= 8) {
                    Ext.getCmp('Dashboard_NearestRedeem_StampContent' + i).setHtml(StampContent.replace("-90px", "-50px"));
                    Ext.getCmp('Dashboard_NearestRedeem_StampContentNote' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 2px;">' + StampContentNote + '</div>');
                    Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;margin:5px 0px 0px 2px;">' + EnterpriseName + '</div>');


                    if (isCampaignExpired == "Expired") {

                        Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: left;font-size:10px;font-weight:normal;width:100%;margin:3px 0px 0px 2px">End Date:' + EndDate + ' (Campaign Expired !)</div>');
                        //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: center;font-size:12px;font-weight:normal;width:50%">End Date:' + EndDate + '</div><div  style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">Campaign Expired !</div>');

                    }
                    if (isCampaignExpired == "NotExpired") {
                           
                        //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div  style="color:purple;text-align: right;font-size:12px;font-weight:bold;margin:-19px -150px 0px 0px;">' + CampaignDayLeft + ' Day Left</div>');
                        Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');


                        if (CampaignDayLeft >= 20 && CampaignDayLeft <= 30) {
                            // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:green;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');



                        }
                        if (CampaignDayLeft >= 10 && CampaignDayLeft <= 19) {
                            // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:orange;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');


                        }
                        if (CampaignDayLeft >= 1 && CampaignDayLeft <= 9) {
                            //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');



                        }
                    }
                }

                if (isRequiredStartEndDate == "NO") {
                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:5px 0px 0px 2px">End Date:&nbsp;<i>No End Date,Valid LifeTime</i></div>');

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
                ArrStampisRequiredStartEndDate.push(isRequiredStartEndDate);
                ArrStampisCampaignExpired.push(isCampaignExpired);
                ArrStampCampaignDayLeft.push(CampaignDayLeft);
                ArrStampCampaignAdvertisementTitle.push(AdvertisementTitle);
            }



        }



        if (count <= 0) {





            Ext.getCmp('container_Dashboard_NearestRedeemNonMembers').setHidden(false);
            Ext.getCmp('container_Dashboard_NearestRedeemMembers').setHidden(true);
        }

        Dashboard_AyohaUserDashBoardNearestRedeemItemPointCardStore();
        FloatPanel_DashboardMerchantReward_loadVIAAdvertisement();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();


    });
    task.delay(1000);












    ////////////////////////
    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemStampCardStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemStampCardStore').load();

}


function FloatPanel_DashboardMerchantReward_loadVIAAdvertisement() {
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
                carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
            }
            if (MediaType == "Video") {
                carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });

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
        //loadAdvertisementloadHotSeatStore();
        Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);
        FloatPanel_DashboardMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
    });
    task.delay(1000);

}








function FloatPanel_DashboardMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore() {

    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setExtraParam('VoucherType', "AyohaMerchantVoucher");
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantReward');

  //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();




    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getCount();
                Ext.getCmp('FloatPanel_DashboardMerchantRewardVoucherList').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);
        
                if (count < 1) {
                    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Vocher (0)</div>');
                }
        
                if (count == 1) {
                    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
                }
        
                if (count > 1) {
                    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
                }
               
              //  LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });







    // var task = Ext.create('Ext.util.DelayedTask', function () {



    //     //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //     var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getCount();
    //     Ext.getCmp('FloatPanel_DashboardMerchantRewardVoucherList').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);

    //     if (count < 1) {
    //         Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Vocher (0)</div>');
    //     }

    //     if (count == 1) {
    //         Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
    //     }

    //     if (count > 1) {
    //         Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
    //     }

    // });
    // task.delay(1000);

}



function FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore() {
if(isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
    return;
}
    _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNo');

    _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {


        Ext.getCmp('FloatPanel_MerchantReward_MembershipEvent').setStore(_DataStore_AyohaRewardEventLoadBySubscriberAccNoStore);
      


        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getCount();
        
        //Ext.getCmp('FloatPanel_DashboardMerchantRewardVoucherList').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);

        //if (count < 1) {
        //    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Vocher (0)</div>');
        //}

        //if (count == 1) {
        //    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
        //}

        //if (count > 1) {
        //    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
        //}
        FloatPanel_DashboardMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
    });
    task.delay(500);
}



function FloatPanel_DashboardMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore() {

    _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNo');

    _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.load();

  

    var task = Ext.create('Ext.util.DelayedTask', function () {


       
       
        if (isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        
        return
           // Ext.getCmp('FloatPanel_DashboardMerchantReward_MembershipContestSelfieFormID').setZIndex(335);
        }
        Ext.getCmp('FloatPanel_MerchantReward_MembershipContest').setStore(_DataStore_AyohaRewardContestLoadBySubscriberAccNoStore);
        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getCount();
       
       
       
        // alert(count);
        //Ext.getCmp('FloatPanel_DashboardMerchantRewardVoucherList').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);

        //if (count < 1) {
        //    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Vocher (0)</div>');
        //}

        //if (count == 1) {
        //    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
        //}

        //if (count > 1) {
        //    Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
        //}

    });
    task.delay(500);
}







function FloatPanel_MerchantReward_MembershipEvent_Interested(EnterpriseAccNo, EventCode, ID) {

    FloatPanel_MerchantReward_MembershipEvent_RespondStatus("Interested", EnterpriseAccNo, ID, EventCode);
}


function FloatPanel_MerchantReward_MembershipEvent_IwillAttend(EnterpriseAccNo, EventCode, ID) {

    FloatPanel_MerchantReward_MembershipEvent_RespondStatus("IwillAttend", EnterpriseAccNo, ID, EventCode);
}
function FloatPanel_MerchantReward_MembershipEvent_RespondStatus(RespondStatus, EnterpriseAccNo, ID, EventCode) {





    LoadingPanelShow(getLoadingIcon(), 'Save Respond....');
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ID": ID,
            "EventCode": EventCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "RespondStatus": RespondStatus,
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "Noted": "NA",
            "EnterpriseAccNo": EnterpriseAccNo,
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardEvent_Respond/AyohaRewardEventRespondInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/respondEvent.png", "Your Respond Has Been Saved!", "Purple", "Purple");
                    FloatPanel_DashboardMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);
}

function FloatPanel_MerchantReward_MembershipEvent_Detail() {

}