
Ext.define('BuskartApp.view.AyohaCardManagement.FloatPanel_AyohaCardManagement_PreviewCard', {

});

var _FloatPanel_AyohaCardManagement_PreviewCard;


var isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';






function FloatPanel_AyohaCardManagement_PreviewCard() {

    _FloatPanel_AyohaCardManagement_PreviewCard =
    Ext.create('Ext.Panel', {
       zIndex: 350,
       // zIndex: 60,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaCardManagement_PreviewCardID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: false,
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
      //  html: '<div style="background-color:transparent;width:100%;height:100%;" ><img src="http://42.1.63.57/AyohaImgCard/BackgroundImgCard/CRCom-71100/kedaikopibg.jpg" style="width:100%;height:100%;"></div>',
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        //  style: 'background-image: url("http://42.1.63.57/AyohaImgCard/BackgroundImgCard/CRCom-71100/kedaikopibg.jpg"); background-size: 100% 100%;border-bottom:1px solid;',
       // style: 'background-image: url(http://www.birds.com/wp-content/uploads/home/bird4.jpg); background-size: 100% 100%;border-bottom:1px solid;',
       // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaCardManagement_PreviewCard.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
                            clearInterval(BackgroungImgInterval);
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaCardManagement_PreviewCard.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
                            clearInterval(BackgroungImgInterval);
                            RemovePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
                        }

                    }
                });
            }
        },

        items: [

            {
                xtype: 'container',
                //xtype: 'carousel',
                //direction: 'horizontal',
                //directionLock: true,
                width: '100%',
                margin: '0px 0px 0px 0px',
                zIndex:500,
                height: '100%',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                id:'FloatPanel_AyohaCardManagement_PreviewCardInnerIDs',
                html: '<div id="divCardBgImg" ></div>',
                layout: {
                    type: 'vbox',

                },
                items: [
                   
                ]
            },

            {
                xtype: 'container',
                zIndex: 800,
               // zIndex: 10,
                //xtype: 'carousel',
                //direction: 'horizontal',
                //directionLock: true,
                width: '100%',
                height: '100%',
                html: '<div id="divCardBgImg1" ></div>',
                id: 'FloatPanel_AyohaCardManagement_PreviewCardInnerID',
               style: 'background-color:transparent;',
               // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
               // style: 'background-image: url(http://www.birds.com/wp-content/uploads/home/bird4.jpg); background-size: 100% 100%;border-bottom:1px solid;',
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

                                id: 'containerFloatPanel_AyohaCardManagement_PreviewCardHeader',
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
                                                         id: 'btnFloatPanel_AyohaCardManagement_PreviewCardBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                        // html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {


                                                             _FloatPanel_AyohaCardManagement_PreviewCard.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
                                                             clearInterval(BackgroungImgInterval);
                                                            // FloatPanel_AyohaCardManagement_AdvertisementButtonHide();
                                                             RemovePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
                                                        
                                                            }
                                                     },
                                                    
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                       //{
                                                       //    margin: '0 0 0 0',
                                                       //    id: 'htmFloatPanel_AyohaCardManagement_PreviewCard_TitleHeaderTxt',
                                                       //    html: '<font size=2 color=white><b>Loyalty Stamp Card</b></font>'
                                                       //},
                                                       //    {
                                                       //        xtype: 'button',
                                                       //        id: 'btnFloatPanel_AyohaCardManagement_PreviewCard_Icon',
                                                       //        height: 30,
                                                       //        width: 35,
                                                       //        // iconCls: 'list',
                                                       //        html: '<div ><img src="resources/icons/AyohaStampCardWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                       //        ui: 'plain',
                                                       //        handler: function () {

                                                                

                                                       //            _FloatPanel_AyohaCardManagement_PreviewCard.hide(Ext.fx.Animation({
                                                       //                type: 'slideOut',
                                                       //                direction: 'right',
                                                       //                easing: 'cubic-bezier(.7,0,.7,1)',
                                                       //                duration: 250

                                                       //            }));
                                                       //            isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
                                                       //            clearInterval(BackgroungImgInterval);
                                                       //            FloatPanel_AyohaCardManagement_AdvertisementButtonHide();
                                                       //        }
                                                       //    },
                                                      //{
                                                      //    margin: '0 0 0 0',
                                                      //    id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_UserAccountName',
                                                      //    hidden:true,
                                                      //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                      //},

                                                           {
                                                               xtype: 'container',
                                                               margin: '2 0 0 0',
                                                               //hidden: true,
                                                               //style: 'background-color: white;',
                                                               //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                               style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;',

                                                               height: 25,
                                                               width: 135,
                                                               // margin: '70 0 0 0',
                                                               id: 'containerFloatPanel_AyohaCardManagement_PreviewCardHaiUser',
                                                               layout: {

                                                                   type: 'vbox',
                                                                   pack: 'center',
                                                                   align: 'center'
                                                               },
                                                               items: [


                                                                   {
                                                                       margin: '20 0 0 0',
                                                                       id: 'htmlFloatPanel_AyohaCardManagement_PreviewCardHaiUser',
                                                                       html: '<font size=2 color=white><b>Loyalty Stamp Card</b></font>',
                                                                       //hidden: true,
                                                                   },
                                                                   {
                                                                       //  margin: '2 0 0 0',
                                                                       margin: '-3 0 0 0',
                                                                       hidden:true,
                                                                       id: 'htmlFloatPanel_AyohaCardManagement_PreviewCardisExpired',
                                                                       html: '<div class="blink_me" style="width:100px;border-radius: 10px 10px 10px 10px;background-color: white;text-align:center;border: 1px solid red;font-size: 9px;font-weight:bold;color:red;height:15px">Campaign Expired!</div>',
                                                                      // hidden: true,
                                                                   },
                                                                   {
                                                                       xtype: 'container',
                                                                       //   margin: '0 0 0 5',
                                                                       // hidden: true,
                                                                       style: 'background-color: transparent;',

                                                                       height: 25,
                                                                       width: 70,
                                                                       // margin: '70 0 0 0',
                                                                       id: 'containerFloatPanel_AyohaCardManagement_PreviewCardeWallet',
                                                                       layout: {

                                                                           type: 'hbox',
                                                                           pack: 'left',
                                                                           align: 'left'
                                                                       },
                                                                       items: [
                                                                            {
                                                                                xtype: 'button',
                                                                                id: 'btnFloatPanel_AyohaCardManagement_PreviewCardeWallet',
                                                                                hidden: true,
                                                                                margin: '7 0 0 8',
                                                                                height: 30,
                                                                                width: 35,
                                                                                // iconCls: 'list',
                                                                                html: '<div class="blink_me"><img src="resources/icons/nfc-sign.png" width="25" height="20" alt="Company Name"></div>',
                                                                                ui: 'plain',
                                                                                handler: function () {
                                                                                   // Ayoha_eWallet();

                                                                                }
                                                                            },
                                                                            //{
                                                                            //    height: 30,
                                                                            //    margin: '10 0 0 0',
                                                                            //    width: 65,

                                                                            //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                            //},
                                                                            {
                                                                                xtype: 'button',
                                                                                id: 'btnFloatPanel_AyohaCardManagement_PreviewCardeWalletValue',
                                                                                margin: '7 0 0 2',
                                                                                height: 30,
                                                                                width: 65,
                                                                                hidden:true,
                                                                                // iconCls: 'list',
                                                                                html: '<div class="blink_me" style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >NFC</div>',
                                                                                ui: 'plain',
                                                                                handler: function () {
                                                                                  //  Ayoha_eWallet();

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
                                                       margin: '1 0 0 -5',
                                                      //hidden: true,
                                                       //style: 'background-color: white;',
                                                       style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                                                       height: 35,
                                                       width: 35,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerFloatPanel_AyohaCardManagement_PreviewCardPictureUser',
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
                                                               margin: '0 0 0 -8',
                                                               id: 'btnFloatPanel_AyohaCardManagement_PreviewCardPicProfile',
                                                               //badgeText: "2",
                                                               html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/stampedFeatureWhite05.png"  style="width: 30px; height: 30px; border:2px none grey; border-radius: 0%;  margin:-1px 0px 0px 2px"></div>',
                                                               ui: 'plain',
                                                               handler: function () {

                                                                               _FloatPanel_AyohaCardManagement_PreviewCard.hide(Ext.fx.Animation({
                                                                                   type: 'slideOut',
                                                                                   direction: 'right',
                                                                                   easing: 'cubic-bezier(.7,0,.7,1)',
                                                                                   duration: 250

                                                                               }));
                                                                               isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
                                                                               clearInterval(BackgroungImgInterval);
                                                                               //FloatPanel_AyohaCardManagement_AdvertisementButtonHide();
                                                                               RemovePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
                                                               }
                                                           },



                                                       ]
                                                   },
                                                           









                                       ]

                            },
                           




                            {

                                xtype: 'container',
                                style: "background-color: transparent",
                                height: '100%',
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true,
                                    indicators: false
                                },

                                items: [

                                    {
                                        xtype: 'container',
                                        style: "background-color: transparent",
                                        height: 800,
                                        width: '100%',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'center'

                                        },


                                        items: [

                                            {
                                                xtype: 'container',
                                                id: 'FloatPanel_AyohaCardManagement_PreviewCard_Template1',
                                                margin: '-60 0 0 0',
                                               // hidden:true,
                                               // style: "background-color: white;border-bottom:1px solid white;",
                                                // margin: '0 0 0 0',
                                                width: '100%',
                                                height: 300,
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'start',
                                                    align: 'center'

                                                },
                                                items: [

                                                    {
                                                        margin: '0 0 0 5',
                                                        height: 120,
                                                        width: 120,
                                                        id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseLogo',
                                                        html: '<img src="resources/icons/ayohaReward01.gif" width="120" height="120"/>',
                                                    },
                                                    {
                                                        xtype: 'container',

                                                        width: '90%',
                                                        layout: {
                                                            type: 'vbox',
                                                            pack: 'center',
                                                            align: 'left'

                                                        },
                                                        items: [

                                                             {
                                                                 margin: '0 0 0 5',
                                                                 id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseName',
                                                                 html: '<font size=3 color=white><b>Loading......</b></font>',
                                                                 // html: '<div style="font-size:8px;color:white;font-weight:bold">Community Coffee Roastes Sdn Bhd</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                             },
                                                             {
                                                                 xtype: 'container',
                                                                 style: "background-color: white;border-bottom:1px solid white;",
                                                                 height: 1,
                                                                 width: '65%',
                                                                 margin: '0 0 0 5',
                                                                 //style: {

                                                                 //    background: 'white',

                                                                 //},
                                                                 //layout: {
                                                                 //    type: 'hbox',
                                                                 //    pack: 'center',
                                                                 //    align: 'center'

                                                                 //},
                                                             },
                                                              {
                                                                  margin: '0 0 0 5',

                                                                  id: 'htmlMyFloatPanel_AyohaCardManagement_CampaignName_PreviewCard',

                                                                  html: '<font size=2 color=white><b>Loading....</b></font>',
                                                              },

                                                                       {
                                                                           margin: '-8 0 0 5',
                                                                           hidden: true,
                                                                           id: 'htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard',
                                                                          

                                                                           html: '<font size=1 color=white><b>Start Date:Loading....</b></font>',
                                                                       },
                                                                       {
                                                                           margin: '-22 0 0 5',
                                                                           hidden: true,
                                                                           id: 'htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard_ExpiredBlinking',


                                                                           html: '<font size=1 color=white><b>Start Date:Loading....</b></font>',
                                                                       },

                                                               //{
                                                               //    xtype:'spacer'
                                                               //},
                                                               {
                                                                   margin: '-7 0 0 5',
                                                                  hidden: true,
                                                                   id: 'htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard',

                                                                   html: '<font size=1 color=white><b>289 campaign days left</b></font>',
                                                               },

                                                              

                                                        ]

                                                    },

                                                      



                                                       




                                                ]
                                            },
                                              //{
                                              //    xtype: 'container',
                                              //    margin:'-50 0 0 0',
                                              //    height: 1,
                                              //    width: '90%',
                                              //    style: {

                                              //        background: 'white',

                                              //    },
                                              //    layout: {
                                              //        type: 'hbox',
                                              //        pack: 'center',
                                              //        align: 'center'

                                              //    },
                                              //},



                                             {
                                                 xtype: 'container',
                                                 id: 'FloatPanel_AyohaCardManagement_PreviewCard_Template2',
                                                hidden:true,
                                                 margin: '-40 0 0 0',
                                                 // margin: '0 0 0 0',
                                                 width: '100%',
                                                 height: 300,
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },
                                                 items: [

                                                     {
                                                         margin: '0 0 0 0',
                                                         height: 130,
                                                         width: 130,
                                                         id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseLogo_Template2',
                                                         html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
                                                     },
                                                     {
                                                         xtype: 'container',

                                                         width: '100%',
                                                         layout: {
                                                             type: 'vbox',
                                                             pack: 'start',
                                                             align: 'center'

                                                         },
                                                         items: [

                                                              {
                                                                  margin: '0 0 0 0',
                                                                  id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseName_Template2',
                                                                  html: '<font size=3 color=white><b>Community Coffee Roastes Sdn Bhd</b></font>',
                                                                 // html: '<div style="font-size:8px;color:white;font-weight:bold">Community Coffee Roastes Sdn Bhd</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                              },

                                                         ]

                                                     },

                                                       {
                                                           xtype: 'container',
                                                           height: 1,
                                                           width: '90%',
                                                           style: {

                                                               background: 'white',

                                                           },
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },
                                                       },



                                                        {
                                                            xtype: 'container',
                                                          
                                                            width: '90%',
                                                            style: {

                                                                background: 'transparent',

                                                            },
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [

                                                                {
                                                                    xtype: 'container',
                                                                    width: '60%',
                                                                    hidden:true,
                                                                    style: {

                                                                        background: 'transparent',

                                                                    },
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'center'

                                                                    }, items: [

                                                                         {
                                                                           
                                                                             html: '<div style="font-size:16px;color:white;font-weight:bold">Ramadhan 2021!</div>',
                                                                         },
                                                                    ]
                                                                },
                                                               

                                                                {
                                                                    xtype: 'container',
                                                                    width: '100%',
                                                                    style: {

                                                                        background: 'transparent',

                                                                    },
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'start',
                                                                        align: 'center'

                                                                    }, items: [
                                                                         {
                                                                             margin: '0 0 0 0',

                                                                             id: 'htmlMyFloatPanel_AyohaCardManagement_CampaignName_PreviewCard_Template2',

                                                                             html: '<font size=2 color=white><b>Loading...</b></font>',
                                                                         },

                                                                        {
                                                                            margin: '-8 0 0 0',

                                                                            id: 'htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard_Template2',

                                                                            html: '<font size=1 color=white><b>Start Date:14/11/2019</b></font>',
                                                                        },

                                                                //{
                                                                //    xtype:'spacer'
                                                                //},
                                                                {
                                                                    margin: '-7 0 0 0',

                                                                    id: 'htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard_Template2',

                                                                    html: '<font size=1 color=white><b>Expired Date:14/12/2020</b></font>',
                                                                },
                                                                 {
                                                                     xtype: 'container',
                                                                     height: 1,
                                                                     width: '80%',
                                                                     style: {

                                                                         background: 'white',

                                                                     },
                                                                     layout: {
                                                                         type: 'hbox',
                                                                         pack: 'center',
                                                                         align: 'center'

                                                                     },
                                                                 },


                                                                    ]

                                                                },

                                                            
                                                                
                                                            ]
                                                        },

                                             

                                              //{
                                              //    xtype: 'container',
                                              //    height: 1,
                                              //    width: '90%',
                                              //    style: {

                                              //        background: 'white',

                                              //    },
                                              //    layout: {
                                              //        type: 'hbox',
                                              //        pack: 'center',
                                              //        align: 'center'

                                              //    },
                                              //},


                                                 ]
                                             },


                                             {
                                                 xtype: 'container',
                                                 id: 'containerFloatPanel_AyohaCardManagement_PreviewCardQrCode',
                                                 width: '100%',
                                                 height: 200,
                                                 hidden: true,
                                                 style: "background-color: transparent",
                                                 //style: "background-color: #F35B57;",

                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'center',
                                                     align: 'center'

                                                 },


                                                 items: [






                                                       {
                                                           id: 'htmlFloatPanel_AyohaCardManagement_PreviewCardQRCode',
                                                           margin: '-90 0 0 0',
                                                         //  hidden:true,
                                                           width: '90%',
                                                           height: '100%',
                                                           html: '<img src="' + GetQRCodeImg() + '" style="width: 100%; height: 100%; border:1px solid white;" /><font size=2 color=white><b>Show This QR Code to be scanned by merchandiser</b></font>',
                                                       },



                                                      



                                                 ]

                                             },







                                               //{
                                               //    margin: '90 0 0 0',
                                                           
                                               //    id: 'htmlFloatPanel_AyohaCardManagement_PreviewCardQRCode_count',
                                               //    html: '<font size=3 color=white><b>12</b></font>'
                                               //},









                                                

                                             ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaCardManagement_PreviewCardMaster',
                                                  width: '100%',
                                                  margin:'-10 0 0 0',
                                                  //hidden:true,
                                                 style: "background-color: transparent",
                                                  //style: "background-color: #F35B57;",
                                                //  style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },


                                                  items: [
                                                       
                                                      {
                                                          xtype: 'container',
                                                          id: 'containerFloatPanel_AyohaCardManagement_PreviewCardMasterLoading',
                                                          width: '80%',
                                                          height:300,
                                                          //hidden:true,
                                                         // style: "background-color: transparent",
                                                          //style: "background-color: #F35B57;",
                                                          style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center'

                                                          },

                                                      },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_AyohaCardManagement_PreviewCard1',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                         //  style: "background-color: #F35B57;",
                                                           height: 80,
                                                           //  height: 120,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [
                                                               //{
                                                               //    xtype: 'panel',
                                                               //    width: '3%'
                                                               //},
                                                               {
                                                                   xtype: 'container',
                                                                   id: 'containerFloatPanel_AyohaCardManagement_PreviewCard01',
                                                                   //hidden:true,
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
                                                           id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard1',
                                                           hidden: true,
                                                           //   margin: '-10 0 0 0',
                                                           margin: '-95 0 0 0',
                                                           height: 110,
                                                           width: 100,
                                                           zIndex: 100,
                                                           html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                           ui: 'plain',
                                                           handler: function () {
                                                               var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard1').getHtml();
                                                               FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[0]);

                                                           }
                                                       },

                                                                        {
                                                                            xtype: 'button',
                                                                            height: 80,
                                                                            width: 80,
                                                                            //zIndex: -10,
                                                                            margin: '-95 0 0 0',
                                                                            id: 'btnFloatPanel_AyohaCardManagement_PreviewCard1',
                                                                            hidden: true,
                                                                            //badgeText: "2",
                                                                            html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard1">1</div></div>',
                                                                            //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: purple;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">1</div></div>',
                                                                            ui: 'plain',
                                                                            handler: function () {
                                                                                var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard1').getHtml();
                                                                                FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[0]);
                                                                               // alert("btnFloatPanel_AyohaCardManagement_PreviewCard1");
                                                                            }
                                                                        },
                                                                        {
                                                                            hidden: true,
                                                                            margin: '-10 0 0 0',
                                                                            
                                                                            id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard1',
                                                                            html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                        },

                                                                        //{
                                                                        //    hidden: true,
                                                                        //    margin: '-10 0 0 0',
                                                                        //    // margin: '-40 0 0 0',
                                                                        //    id: 'htmlDateTimeStampbyFloatPanel_AyohaCardManagement_PreviewCard1',
                                                                        //    html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                        //},
                                                                         //{
                                                                         //    margin: '-10 0 0 0',
                                                                         //    id: 'htmlStampedByFloatPanel_AyohaCardManagement_PreviewCard1',
                                                                         //    html: '<font size=1 color=white><b>Wati</b></font>'
                                                                         //}
                                                                   ]
                                                               },


                                                               

                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatPanel_AyohaCardManagement_PreviewCard02',
                                                                     //hidden:true,
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
                                                                                   id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard2',
                                                                                  // visible: false,
                                                                                   hidden: true,
                                                                                   //   margin: '-10 0 0 0',
                                                                                   margin: '-95 0 0 0',
                                                                                   height: 110,
                                                                                   width: 100,
                                                                                   zIndex: 100,
                                                                                   html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                   ui: 'plain',
                                                                                   handler: function () {
                                                                                       var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard2').getHtml();
                                                                                       FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[1]);

                                                                                   }
                                                                               },


                                                                          {
                                                                              xtype: 'button',
                                                                              height: 80,
                                                                              width: 80,
                                                                              margin: '-95 0 0 0',
                                                                              id: 'btnFloatPanel_AyohaCardManagement_PreviewCard2',
                                                                              hidden: true,
                                                                              //badgeText: "2",
                                                                              // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: brown;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">2</div></div>',
                                                                              html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard2">2</div></div>',


                                                                              ui: 'plain',
                                                                              handler: function () {

                                                                                  var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard2').getHtml();
                                                                                  FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[1]);
                                                                              }
                                                                          },
                                                                     {
                                                                         hidden: true,
                                                                         margin: '-10 0 0 0',
                                                                         // margin: '-40 0 0 0',
                                                                         id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard2',
                                                                         html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                     },
                                                                     ]
                                                                 },




                                                                   {
                                                                       xtype: 'container',
                                                                       id: 'containerFloatPanel_AyohaCardManagement_PreviewCard03',
                                                                       //hidden:true,
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
                                                                                           id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard3',
                                                                                           hidden: true,
                                                                                           //   margin: '-10 0 0 0',
                                                                                           margin: '-95 0 0 0',
                                                                                           height: 110,
                                                                                           width: 100,
                                                                                           zIndex: 100,
                                                                                           html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                           ui: 'plain',
                                                                                           handler: function () {

                                                                                               var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard3').getHtml();
                                                                                               FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[2]);
                                                                                           }
                                                                                       },
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 80,
                                                                                width: 80,
                                                                                margin: '-95 0 0 0',
                                                                                id: 'btnFloatPanel_AyohaCardManagement_PreviewCard3',
                                                                                hidden: true,
                                                                                //badgeText: "2",
                                                                                // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: blue;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',
                                                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">3</div></div>',


                                                                                //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">50%</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>Off</font></div></div>',


                                                                                ui: 'plain',
                                                                                handler: function () {

                                                                                    var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard3').getHtml();
                                                                                    FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[2]);

                                                                                }
                                                                            },
                                                                        
                                                                         {
                                                                             hidden: true,
                                                                             margin: '-10 0 0 0',
                                                                             // margin: '-40 0 0 0',
                                                                             id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard3',
                                                                             html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                         },
                                                                       ]
                                                                   },





                                                           ]

                                                       },

                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_AyohaCardManagement_PreviewCard2',
                                                           //hidden:true,
                                                          style: "background-color: transparent",
                                                          // style: "background-color: #F35B57;",
                                                           height: 80,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [
                                                             
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatPanel_AyohaCardManagement_PreviewCard04',
                                                                     //hidden:true,
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
                                                                              id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard4',
                                                                              hidden: true,
                                                                              //   margin: '-10 0 0 0',
                                                                              margin: '-95 0 0 0',
                                                                              height: 110,
                                                                              width: 100,
                                                                              zIndex: 100,
                                                                              html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {

                                                                                  var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard4').getHtml();
                                                                                  FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[3]);
                                                                              }
                                                                          },

                                                                             {
                                                                                 xtype: 'button',
                                                                                 //height: 80,
                                                                                 //width: 80,
                                                                                 //margin: '0 0 0 0',
                                                                                 height: 80,
                                                                                 width: 80,
                                                                               
                                                                                 margin: '-95 0 0 0',
                                                                                 id: 'btnFloatPanel_AyohaCardManagement_PreviewCard4',
                                                                                 hidden: true,
                                                                                 //badgeText: "2",
                                                                                 //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #8A54EE;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">4</div></div>',
                                                                                 html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard4">4</div></div>',


                                                                                 ui: 'plain',
                                                                                 handler: function () {
                                                                                     var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard4').getHtml();
                                                                                     FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[3]);

                                                                                 }
                                                                             },
                                                                               {
                                                                                   hidden: true,
                                                                                   margin: '-10 0 0 0',
                                                                                   // margin: '-40 0 0 0',
                                                                                   id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard4',
                                                                                   html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                               },

                                                                     ]
                                                                 },



                                                             
                                                              




                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatPanel_AyohaCardManagement_PreviewCard05',
                                                                     //hidden:true,
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
                                                                                id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard5',
                                                                                hidden: true,
                                                                                //   margin: '-10 0 0 0',
                                                                                margin: '-95 0 0 0',
                                                                                height: 110,
                                                                                width: 100,
                                                                                zIndex: 100,
                                                                                html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                ui: 'plain',
                                                                                handler: function () {
                                                                                    var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard5').getHtml();
                                                                                    FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[4]);
                                                                                }
                                                                            },
                                                                           
                                                                          {
                                                                              xtype: 'button',
                                                                              height: 80,
                                                                              width: 80,                                                                           
                                                                              margin: '-95 0 0 0',
                                                                              id: 'btnFloatPanel_AyohaCardManagement_PreviewCard5',
                                                                              hidden: true,
                                                                              //badgeText: "2",
                                                                              // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #00FF00;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">5</div></div>',
                                                                              html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard5">5</div></div>',

                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                                  var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard5').getHtml();
                                                                                  FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[4]);

                                                                              }
                                                                          },
                                                                           
                                                                           {
                                                                               hidden: true,
                                                                               margin: '-10 0 0 0',
                                                                               // margin: '-40 0 0 0',
                                                                               id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard5',
                                                                               html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                           },

                                                                     ]
                                                                 },


                                                                




                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatPanel_AyohaCardManagement_PreviewCard06',
                                                                     //hidden:true,
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
                                                                               id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard6',
                                                                               hidden: true,
                                                                               //   margin: '-10 0 0 0',
                                                                               margin: '-95 0 0 0',
                                                                               height: 110,
                                                                               width: 100,
                                                                               zIndex: 100,
                                                                               html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard6').getHtml();
                                                                                   FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[5]);
                                                                               }
                                                                           },

                                                                           {
                                                                               xtype: 'button',
                                                                               height: 80,
                                                                               width: 80,
                                                                               margin: '-95 0 0 0',
                                                                               id: 'btnFloatPanel_AyohaCardManagement_PreviewCard6',
                                                                               hidden: true,
                                                                               //badgeText: "2",
                                                                               // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #F5B34D;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">6</div></div>',
                                                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard6">6</div></div>',

                                                                               ui: 'plain',
                                                                               handler: function () {

                                                                                   var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard6').getHtml();
                                                                                   FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[5]);
                                                                               }
                                                                           },
                                                                           {
                                                                               hidden: true,
                                                                               margin: '-10 0 0 0',
                                                                               // margin: '-40 0 0 0',
                                                                               id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard6',
                                                                               html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                           },
                                                                            
                                                                     ]

                                                                 },





                                                           ]

                                                       },






                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_AyohaCardManagement_PreviewCard3',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                           height: 80,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [




                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatPanel_AyohaCardManagement_PreviewCard07',
                                                                      //hidden:true,
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
                                                                              id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard7',
                                                                              hidden: true,
                                                                              //   margin: '-10 0 0 0',
                                                                              margin: '-95 0 0 0',
                                                                              height: 110,
                                                                              width: 100,
                                                                              zIndex: 100,
                                                                              html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                                  var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard7').getHtml();
                                                                                  FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[6]);
                                                                              }
                                                                          },
                                                                             {
                                                                                 xtype: 'button',
                                                                                 height: 80,
                                                                                 width: 80,
                                                                                 margin: '-95 0 0 0',
                                                                                 id: 'btnFloatPanel_AyohaCardManagement_PreviewCard7',
                                                                                 hidden: true,
                                                                                 //badgeText: "2",
                                                                                 //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #E35CE1;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:15px 0px 0px 0px"><font size=5>ONLY</font></div><br><div style="margin:-20px 0px 0px 0px"><font size=5>RM1</font></div></div>',
                                                                               //  html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:15px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard7"><font size=5>ONLY</font></div><br><div style="margin:-20px 0px 0px 0px"><font size=5>RM1</font></div></div>',
                                                                                 html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard7">7</div></div>',
                                                                                 ui: 'plain',
                                                                                 handler: function () {
                                                                                     var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard7').getHtml();
                                                                                     FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[6]);
                                                                                 }
                                                                             },
                                                                                 {
                                                                                     hidden: true,
                                                                                     margin: '-10 0 0 0',
                                                                                     // margin: '-40 0 0 0',
                                                                                     id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard7',
                                                                                     html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                                 },
                                                                             
                                                                      ]
                                                                  },





                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatPanel_AyohaCardManagement_PreviewCard08',
                                                                      //hidden:true,
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
                                                                              id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard8',
                                                                              hidden: true,
                                                                              //   margin: '-10 0 0 0',
                                                                              margin: '-95 0 0 0',
                                                                              height: 110,
                                                                              width: 100,
                                                                              zIndex: 100,
                                                                              html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                              ui: 'plain',
                                                                              handler: function () {
                                                                                  var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard8').getHtml();
                                                                                  FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[7]);
                                                                              }
                                                                          },
                                                                          
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 80,
                                                                                width: 80,
                                                                                margin: '-95 0 0 0',
                                                                                id: 'btnFloatPanel_AyohaCardManagement_PreviewCard8',
                                                                                hidden: true,
                                                                                //badgeText: "2",
                                                                                //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: orange;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">8</div></div>',
                                                                                html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard8">8</div></div>',

                                                                                ui: 'plain',
                                                                                handler: function () {
                                                                                    var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard8').getHtml();
                                                                                    FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[7]);

                                                                                }
                                                                            },
                                                                            {
                                                                                hidden: true,
                                                                                margin: '-10 0 0 0',
                                                                                // margin: '-40 0 0 0',
                                                                                id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard8',
                                                                                html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                            },
                                                                           
                                                                      ]
                                                                  },






                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatPanel_AyohaCardManagement_PreviewCard09',
                                                                      //hidden:true,
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
                                                                               id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard9',
                                                                               hidden: true,
                                                                               //   margin: '-10 0 0 0',
                                                                               margin: '-95 0 0 0',
                                                                               height: 110,
                                                                               width: 100,
                                                                               zIndex: 100,
                                                                               html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard9').getHtml();
                                                                                   FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[8]);
                                                                               }
                                                                           },

                                                                             {
                                                                                 xtype: 'button',
                                                                                 height: 80,
                                                                                 width: 80,
                                                                                 margin: '-95 0 0 0',
                                                                                 id: 'btnFloatPanel_AyohaCardManagement_PreviewCard9',
                                                                                 hidden: true,
                                                                                 //badgeText: "2",
                                                                                 //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #808000;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">9</div></div>',
                                                                                 html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard9">9</div></div>',
                                                                                 ui: 'plain',
                                                                                 handler: function () {
                                                                                     var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard9').getHtml();
                                                                                     FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[8]);
                                                                                 }
                                                                             },
                                                                             {
                                                                                 hidden: true,
                                                                                 margin: '-10 0 0 0',
                                                                                 // margin: '-40 0 0 0',
                                                                                 id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard9',
                                                                                 html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                             },

                                                                            
                                                                      ]
                                                                  },



                                                           ]

                                                       },


                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_AyohaCardManagement_PreviewCard4',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                           height: 80,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },


                                                           items: [

                                                               

                                                                  {
                                                                      xtype: 'container',
                                                                      id: 'containerFloatPanel_AyohaCardManagement_PreviewCard10',
                                                                      //hidden:true,
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
                                                                               id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard10',
                                                                               hidden: true,
                                                                               //   margin: '-10 0 0 0',
                                                                               margin: '-95 0 0 0',
                                                                               height: 110,
                                                                               width: 100,
                                                                               zIndex: 100,
                                                                               html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard10').getHtml();
                                                                                   FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[9]);
                                                                               }
                                                                           },


                                                                           {
                                                                               xtype: 'button',
                                                                               height: 80,
                                                                               width: 80,
                                                                               margin: '-95 0 0 0',
                                                                               id: 'btnFloatPanel_AyohaCardManagement_PreviewCard10',
                                                                               hidden: true,
                                                                               //badgeText: "2",
                                                                               //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #008080;border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">10</div></div>',
                                                                               html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard10">10</div></div>',

                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard10').getHtml();
                                                                                   FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents,arrStampRewardNote[9]);
                                                                                   
                                                                               }
                                                                           },
                                                                            {
                                                                                hidden: true,
                                                                                margin: '-10 0 0 0',
                                                                                // margin: '-40 0 0 0',
                                                                                id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard10',
                                                                                html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                            },

                                                                          
                                                                      ]
                                                                  },










                                                                      {
                                                                          xtype: 'container',
                                                                          id: 'containerFloatPanel_AyohaCardManagement_PreviewCard11',
                                                                          //hidden:true,
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
                                                                                   id: 'btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard11',
                                                                                   hidden: true,
                                                                                   //   margin: '-10 0 0 0',
                                                                                   margin: '-95 0 0 0',
                                                                                   height: 110,
                                                                                   width: 100,
                                                                                   zIndex: 100,
                                                                                   html: '<img src="resources/icons/StampTopImgOne.png" width="90" height="100" alt="Company Name">',
                                                                                   ui: 'plain',
                                                                                   handler: function () {
                                                                                       var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard11').getHtml();
                                                                                       FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents, arrStampRewardNote[10]);
                                                                                   }
                                                                               },
                                                                                  {
                                                                                      xtype: 'button',
                                                                                      height: 80,
                                                                                      width: 80,
                                                                                      margin: '-95 0 0 0',
                                                                                      id: 'btnFloatPanel_AyohaCardManagement_PreviewCard11',
                                                                                      hidden: true,
                                                                                      //badgeText: "2",
                                                                                      //html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1.png); background-size: 100% 100%;" ></div>',
                                                                                    //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatPanel_AyohaCardManagement_PreviewCard11" ></div>',
                                                                                      html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard11">11</div></div>',
                                                                                      ui: 'plain',
                                                                                      handler: function () {
                                                                                          var Contents = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard11').getHtml();
                                                                                          FloatPanel_AyohaCardManagement_PreviewCard_ContentNoteShow(Contents,arrStampRewardNote[10]);
                                                                                      
                                                                                         
                                                                                         
                                                                                      }
                                                                                  },
                                                                                   {
                                                                                       hidden: true,
                                                                                       margin: '-10 0 0 0',
                                                                                       // margin: '-40 0 0 0',
                                                                                       id: 'htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard11',
                                                                                       html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">17/10/2020</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">7:58:20PM</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">Mizi</div>',
                                                                                   },

                                                                                   
                                                                          ]

                                                                      },







                                                           ]

                                                       },



                                                       {
                                                           xtype: 'container',
                                                           id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote',
                                                           margin: '-30 0 0 0',
                                                          // docked:'bottom',
                                                           //hidden:true,
                                                           style: "background-color: transparent",
                                                           //style: "background-color: #F35B57;",
                                                           height: 20,
                                                           width: '100%',
                                                           layout: {
                                                               type: 'hbox',
                                                               pack: 'center',
                                                               align: 'center'

                                                           },
                                                           items: [
                                                               {
                                                                  
                                                                 //  margin: '-10 0 0 0',
                                                                   // margin: '-40 0 0 0',
                                                                   id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote',
                                                                   html: '<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;width:100%">*Only purchase above RM100 entitle to be stamped</div>',
                                                               },


                                                           ]
                                                       },
                                                     

                                                         {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_ContactUs',
                                          width: '100%',
                                         // hidden:true,
                                          height: 35,
                                          margin: '35 0 0 0',
                                          style: "background-color:transparent;",
                                          layout: {
                                              type: 'vbox',
                                              pack: 'center',
                                              align: 'center',
                                          },
                                          items: [


                                                {
                                                    margin: '-15 0 0 0',

                                                    html: '<font size=2 color=white><b>Contact Us</b></font>',
                                                },
                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_AyohaCardManagement_PreviewCardbottom',
                                                  //hidden:true,
                                                  style: "background-color: transparent",
                                                  //style: "background-color: #F35B57;",
                                                  margin: '-2 0 0 0',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center'

                                                  },


                                                  items: [

                                                            {
                                                                xtype: 'button',
                                                                height: 32,
                                                                width: 32,
                                                                margin: '0 0 0 0',
                                                                hidden:true,
                                                                id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomLocation',
                                                                //badgeText: "2",
                                                                html: '<div ><img src="resources/icons/locationThree.png" width="22" height="22" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {


                                                                    globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
                                                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                        FloatPanel_PreviewAdvertisement_OpenLocation();
                                                                    });
                                                                    task.delay(150);
                                                                    //var Coordinate = globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseCoordinate.split(",");
                                                                    //PlaceMarkerlat = Coordinate[0];
                                                                    //PlaceMarkerlng = Coordinate[1];

                                                                    ////var addressLongLat = PlaceMarkerlat + ',' + PlaceMarkerlng;                                                          
                                                                    ////window.open("geo:" + addressLongLat);


                                                                    //if (PlaceMarkerlat) {
                                                                    //    if (PlaceMarkerlng) {
                                                                    //        window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system');
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
                                                                height: 32,
                                                                width: 32,
                                                                margin: '0 0 0 0',
                                                                id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB',
                                                                //badgeText: "2",
                                                                hidden: true,
                                                                html: '<div ><img src="resources/icons/Facebooklogo.png" width="22" height="22" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
                                                                    var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                        FloatPanel_PreviewAdvertisement_OpenFB();
                                                                    });
                                                                    task.delay(150);

                                                                    //if (globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook) {

                                                                    //    setTimeout(function () { window.open("fb://page/" + globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook + ""); }, 25);
                                                                    //} else {

                                                                    //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
                                                                    //}

                                                                }
                                                            },
                                                             {
                                                                 xtype: 'button',
                                                                 height: 32,
                                                                 width: 32,
                                                                 margin: '0 0 0 0',
                                                                 id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomInsta',
                                                                 hidden: true,
                                                                 //badgeText: "2",
                                                                 html: '<div ><img src="resources/icons/instagram.png" width="22" height="22" alt="Company Name"></div>',
                                                                 ui: 'plain',
                                                                 handler: function () {

                                                                     globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
                                                                     var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                         FloatPanel_PreviewAdvertisement_OpenInsta();
                                                                     });
                                                                     task.delay(150);


                                                                     //if (globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram) {

                                                                     //    setTimeout(function () { window.open("instagram://user?username=" + globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram + ""); }, 25);
                                                                     //} else {

                                                                     //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set Instagram Link.,Help Merchant to know this Message!", "Insta")
                                                                     //}




                                                                 }
                                                             },



                                                              {
                                                                  xtype: 'button',
                                                                  height: 32,
                                                                  width: 32,
                                                                  margin: '0 0 0 0',
                                                                  id: 'btnFloatPanel_AyohaCardManagement_PreviewCardbottomWassap',
                                                                  hidden: true,
                                                                  //badgeText: "2",
                                                                  html: '<div ><img src="resources/icons/wassap.png" width="22" height="22" alt="Company Name"></div>',
                                                                  ui: 'plain',
                                                                  handler: function () {

                                                                      globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
                                                                      var task = Ext.create('Ext.util.DelayedTask', function () {
                                                                          FloatPanel_PreviewAdvertisement_OpenWhatsApp();
                                                                      });
                                                                      task.delay(150);

                                                                      //if (globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo) {

                                                                      //    window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo + "&text=Hi");
                                                                      //} else {
                                                                      //    swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                                                      //}

                                                                    

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












                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////
                               {
                                   xtype: 'container',
                                   id: 'containerFloatPanel_AyohaCardManagement_PreviewCardTitleOutterN',
                                   width: '100%',
                                   height: 45,
                                   docked: 'bottom',
                                   //hidden:true,
                                   // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                   // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                   //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                                   style: "background-color: transparent;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [

                                       {
                                           xtype: 'container',
                                           margin: '-70 0 0 0',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'center'

                                           },
                                           items: [
                                                 {
                                                     xtype: 'button',
                                                     id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp_Icon',
                                                     //  badgeText: '1',
                                                     margin: '20 0 0 20',
                                                     height: 75,
                                                     width: 55,
                                                     html: '<img src="resources/icons/StampSuccessCount.gif" width="45" height="65" alt="Company Name">',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();

                                                     }
                                                 },
                                                 {
                                                     //margin: '0 0 0 -100',
                                                     xtype: 'button',
                                                     id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp',
                                                     // margin: '0 0 0 -30',
                                                     margin: '0 0 0 30',
                                                     height: 25,
                                                     width: 75,
                                                     html: '<font size=5 color=white><b>4/11</b></font>',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();
                                                     }

                                                 },
                                           ]
                                       },


                                        {
                                                   xtype: 'spacer',
                                                   width:25
                                               },
                                       {


                                           xtype: 'container',
                                           id: 'containerFloatPanel_AyohaCardManagement_PreviewCardButtons',
                                           name: 'namecontainerFloatPanel_AyohaCardManagement_PreviewCardButtons',

                                           // docked: 'bottom',
                                           //hidden:true,
                                           //ori//width: '76%',
                                           width: '46%',
                                           height: 50,
                                           //docked: 'bottom',
                                           // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                           // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                           style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;border-radius:20px 20px 0px 0px;',
                                           // style: "background-color: transparent",

                                           layout: {
                                               type: 'hbox',
                                               pack: 'center',
                                               align: 'center'

                                           },
                                           items: [

                                             
                                               {
                                                   xtype: 'container',
                                                   id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_StampCard',
                                                   width: '38%',
                                                   height: 40,
                                                   style: "background-color: transparent",
                                                   hidden:true,
                                                   //style: "background-color: #F35B57;",

                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'

                                                   },
                                                   items: [

                                                        {
                                                            xtype: 'button',
                                                            id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard',
                                                            //  badgeText: '1',
                                                            margin: '-5 0 0 0',
                                                            height: 35,
                                                            width: 35,
                                                            html: '<img src="resources/icons/StampTwo.png" width="25" height="25" alt="Company Name">',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setHidden(false);
                                                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardQrCode').setHidden(true);

                                                            }
                                                        },
                                                         {
                                                             margin: '-7 0 0 0',
                                                             html: '<font size=2 color=grey><b>Stamp Card</b></font>'
                                                         },

                                                   ]
                                               },

                                           {
                                               xtype: 'container',
                                               id: 'containerFloatPanel_AyohaCardManagement_PreviewCard_QrCode',
                                               name: 'namecontainerFloatPanel_AyohaCardManagement_PreviewCard_QrCode',
                                               //  width: '38%',                                               
                                               width:'80%',
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
                                                        xtype: 'button',
                                                        id: 'btnQrCode_FloatPanel_AyohaCardManagement_PreviewCard',
                                                        //  badgeText: '1',
                                                        margin: '-5 0 0 0',
                                                        height: 35,
                                                        width: 35,
                                                        html: '<img src="resources/icons/qrcodetwo.png" width="25" height="25" alt="Company Name">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            if(is_prompt_setMessage_NotYetMembershipMessage()){
return
                                                            }else
                                                            {
                                                                SingleTap_FloatPanel_AyohaCardManagement_PreviewCard_CreateStampQRCode();
                                                            }
                                                           
                                                            //if (globalStampCampaignisCampaignExpired == "Expired") {

                                                            //    return;
                                                            //}


                                                            //var CountLoyaltyStamped = localStorage.getItem('CountLoyaltyStamped');
                                                            //var CountStampCardRowShow = localStorage.getItem('CountStampCardRowShow');

                                                            //if (CountLoyaltyStamped == CountStampCardRowShow) {

                                                            //    return;
                                                            //}
                                                            //FloatPanel_AyohaCardManagement_StampQrCodeShow();

                                                          
                                                        }
                                                    },
                                                     {
                                                         margin: '-7 0 0 0',
                                                         id: 'htmlFloatPanel_AyohaCardManagement_PreviewCard_StampQrCode',
                                                         html: '<font size=2 color=grey><b>Stamp QR Code</b></font>'
                                                     },

                                               ]
                                           },

                                           //////////////////test  area
                                           // {
                                           //     xtype: 'spacer',
                                           //     width: 25
                                           // },

                                           //{
                                           //    xtype: 'container',
                                           //    margin: '-70 0 0 -10',
                                           //    layout: {
                                           //        type: 'vbox',
                                           //        pack: 'start',
                                           //        align: 'center'

                                           //    },
                                           //    items: [
                                           //          {
                                           //              xtype: 'button',
                                           //              id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp_Icons',
                                           //              //  badgeText: '1',
                                           //              margin: '20 0 0 0',
                                           //              height: 75,
                                           //              width: 55,
                                           //              html: '<img src="resources/icons/StampSuccessCount.gif" width="45" height="65" alt="Company Name">',
                                           //              ui: 'plain',
                                           //              handler: function () {
                                           //                  FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();

                                           //              }
                                           //          },
                                                   
                                           //    ]
                                           //},

                                           ///////////////////

                                           ]



                                       },
                                        {
                                            xtype: 'spacer',
                                            width: 25
                                        },


                                         {
                                             xtype: 'button',
                                             id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton',
                                             //  badgeText: '1',
                                             hidden:true,
                                             margin: '-110 0 0 -65',
                                             height: 160,
                                             width: 160,
                                             html: '<img src="resources/icons/SaleThree.gif" width="150" height="150" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {
                                                
                                                 FloatPanel_PreviewAdvertisementShow_StampCard("FloatPanel_AyohaCardManagement_AdvertisementButton");

                                             }
                                         },

                                            {
                                                xtype: 'button',
                                                id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton_TransparentBox',
                                                //  badgeText: '1',
                                                hidden: false,
                                                margin: '-110 0 0 -65',
                                                height: 160,
                                                width: 160,
                                                html: '<img src="resources/icons/transparentbox.png" width="150" height="150" alt="Company Name">',
                                                ui: 'plain',
                                                handler: function () {
                                                   

                                                }
                                            },


                                           //{
                                           //    xtype: 'container',
                                           //    margin: '-70 0 0 0',
                                           //    layout: {
                                           //        type: 'vbox',
                                           //        pack: 'start',
                                           //        align: 'center'

                                           //    },
                                           //    items: [
                                           //          {
                                           //              xtype: 'button',
                                           //              id: 'btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp_Icons',
                                           //              //  badgeText: '1',
                                           //              margin: '0 0 0 0',
                                           //              height: 160,
                                           //              width: 160,
                                           //              html: '<img src="resources/icons/SaleThree.gif" width="150" height="150" alt="Company Name">',
                                           //              ui: 'plain',
                                           //              handler: function () {
                                           //                  FloatPanel_AyohaCardManagement_StampSuccesAnimationShow();

                                           //              }
                                           //          },

                                           //    ]
                                           //},
                                   ]

                               },

                              


                              {
                                  xtype: 'container',
                                  id: 'containerFloatPanel_AyohaCardManagement_PreviewCardTitleOutter',
                                  width: '100%',
                                  height: 50,
                                  docked: 'bottom',
                                  hidden:true,
                                  // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                  // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                  //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                                  style: "background-color: transparent;",

                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center'

                                  },
                                  items: [


                                  
                                  ]

                              },







                        ]
                    },


                ]
            },












        ]





    });
    return _FloatPanel_AyohaCardManagement_PreviewCard;



}








function FloatPanel_AyohaCardManagement_PreviewCardShow(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName) {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_PreviewCard);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_PreviewCard());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
    isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'Y';
    
    Load_FloatPanel_AyohaCardManagement_PreviewCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
    localStorage.setItem('EnterpriseHQAccNo', EnterpriseAccNo);
    localStorage.setItem('EnterpriseAccNo', EnterpriseAccNo);
   // Load_FloatLoyaltyCard_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore();

  


  
}

var globalStampCampaignisCampaignExpired = "NotExpired";
var globalStampCampaignAdvertisementTitle;
var globalStampCampaignEnterpriseLogo;
var globalStampCampaignEnterpriseName;
var globalStampCampaignEnterpriseAccNo;
function FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_PreviewCard);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_PreviewCard());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
    isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'Y';
    globalStampCampaignisCampaignExpired = isCampaignExpired;
    globalFloatPanel_AyohaStore_ModuleTagging = "StampCard";
    //console.log(isRequiredStartEndDate + "," + isCampaignExpired + "," + CampaignDayLeft)
  //alert(isRequiredStartEndDate);

    
   


    if (isRequiredStartEndDate == "YES") {
        Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard').setHidden(false);
        Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHidden(true);

        if (isCampaignExpired == "NotExpired") {
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHtml('<font size=1 color=white><b>' + CampaignDayLeft + ' campaign days left</b></font>');
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard').setHtml('<font size=1 color=white><b>Campaign End Date:' + EndDate + '</b></font>');

        }
        if (isCampaignExpired == "Expired") {
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard_ExpiredBlinking').setHidden(false);
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHidden(true);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCardisExpired').setHidden(false);
            //Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard_ExpiredBlinking').setHidden(false);            
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHtml('<font size=1 color=white><b>' + CampaignDayLeft + ' campaign days passed</b></font>');
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard').setHtml('<font class="blink_me" size=1 color=red><b>Campaign End Date:' + EndDate + '</b></font>');
            Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard_ExpiredBlinking').setHtml('<font  size=1 color=white><b>Campaign End Date:' + EndDate + '</b></font>');
           // Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard_ExpiredBlinking').setHtml('<font size=1 color=white><b>' + CampaignDayLeft + ' campaign days passed</b></font>');
        }
    }


  

    Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignName_PreviewCard').setHtml('<font size=2 color=white><b>' + StampCampaignName + '</b></font>');
    globalStampCampaingName = StampCampaignName;
    globalStampCampaignAdvertisementTitle = AdvertismentTitle;
    globalStampCampaignEnterpriseLogo = EnterpriseLogo;
    globalStampCampaignEnterpriseName = EnterpriseName;
    globalStampCampaignEnterpriseAccNo = EnterpriseAccNo;

    Load_FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft);
  
    localStorage.setItem('EnterpriseHQAccNo', EnterpriseAccNo);
    localStorage.setItem('EnterpriseAccNo', EnterpriseAccNo);

    loadEnterprisesContactUsLinkStore();
    

    //var containerViewCreateQrCode = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaCardManagement_PreviewCardButtons]')[0];
    //var containerViewElCreateQrCode = containerViewCreateQrCode.element;
    //containerViewElCreateQrCode.on('tap',
    //  function (event, node, options, eOpts) {




    //      SingleTap_FloatPanel_AyohaCardManagement_PreviewCard_CreateStampQRCode();



    //  }
    //);
}




function FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow(StampedCampaignCode, EnterpriseAccNo,SubscriberAccNo) {

    Ext.Viewport.remove(_FloatPanel_AyohaCardManagement_PreviewCard);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaCardManagement_PreviewCard());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
    isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'Y';
    AyohaUserStampCardLoadStampCardfromQrCodeStore(StampedCampaignCode, EnterpriseAccNo, SubscriberAccNo);

    localStorage.setItem('EnterpriseHQAccNo', EnterpriseAccNo);
    localStorage.setItem('EnterpriseAccNo', EnterpriseAccNo);
    // Load_FloatLoyaltyCard_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore();

    //  alert("FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow");
   
    loadEnterprisesContactUsLinkStore();
}



var globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp;
var globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow;
function AyohaUserStampCardLoadStampCardfromQrCodeStore(strStampCampaignCode, EnterpriseAccNo, SubscriberAccNo) {


    
  

    Ext.getStore('AyohaUserStampCardLoadStampCardfromQrCodeStore').getProxy().setExtraParams({
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo,
        SubscriberAccNo: SubscriberAccNo,
    });
    Ext.StoreMgr.get('AyohaUserStampCardLoadStampCardfromQrCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserStampCardLoadStampCardfromQrCodeStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo,
            SubscriberAccNo: SubscriberAccNo,
        });





        Ext.StoreMgr.get('AyohaUserStampCardLoadStampCardfromQrCodeStore').load();
        var myStore = Ext.getStore('AyohaUserStampCardLoadStampCardfromQrCodeStore');
        count = myStore.getCount();
        Ext.Viewport.setMasked(false);
      


        if (count <= 0) {

          //  swalFireFailCustome("Hai,! You are not participated in this campaign.Press OK to join this reward.");
            FloatPanel_AyohaCardManagement_PreviewCardHide();
            Swal.fire({
                title: 'Ayoha Reward v 1.0',
                text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
                imageUrl: "resources/icons/infoPurple.png",
                imageWidth: 400,
                imageHeight: 230,
                showCloseButton: true,
                showCancelButton: false,
              //  confirmButtonColor: '#3085d6',
                confirmButtonColor: '#9932cc',
                cancelButtonColor: '#d33',
                confirmButtonText: 'JOIN'
            }).then(function (result) {
                if (result.isConfirmed) {
                    localStorage.setItem("MembershipByMethod", "QRCode");
                    // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()
                    
                    var EnterprisesHQAccNoFromQrCode = localStorage.getItem("EnterprisesHQAccNoFromQrCode");
                    FloatPanel_RewardStoreMembershipCardShow_FromQrCode(EnterprisesHQAccNoFromQrCode, EnterpriseAccNo);
                }
            });


            Ext.getStore('EnterprisesGetEnterprisesHQAccNoStore').getProxy().setExtraParams({
                EnterpriseAccNo: EnterpriseAccNo,
            });
            Ext.StoreMgr.get('EnterprisesGetEnterprisesHQAccNoStore').load();

            var task = Ext.create('Ext.util.DelayedTask', function () {
                Ext.getStore('EnterprisesGetEnterprisesHQAccNoStore').getProxy().setExtraParams({
                    EnterpriseAccNo: EnterpriseAccNo,
                });

                Ext.StoreMgr.get('EnterprisesGetEnterprisesHQAccNoStore').load();
                var myStoreEnterpriseAccNo = Ext.getStore('EnterprisesGetEnterprisesHQAccNoStore');
                var modelRecordsmyStoreEnterpriseAccNo = myStoreEnterpriseAccNo.getAt(0);                
                localStorage.setItem("EnterprisesHQAccNoFromQrCode", modelRecordsmyStoreEnterpriseAccNo.get('EnterpriseHQAccNo'));

            });
            task.delay(1000);
            return;
        }
        var modelRecords = myStore.getAt(0);
        var EnterpriseName = modelRecords.get('EnterpriseName');
        var EnterpriseLogo = modelRecords.get('EnterpriseLogo');
        var StartDate = modelRecords.get('StartDate');
        var EndDate = modelRecords.get('EndDate');
        var StampCampaignName = modelRecords.get('StampCampaignName');
        var CountLoyaltyStamped = modelRecords.get('CountStampCardRowYES');
        var CountStampCardRowShow = modelRecords.get('CountStampCardRowShow');
        var StampRuleRemarks = modelRecords.get('StampRuleRemarks');
       
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseLogo').setHtml('<img src="' + EnterpriseLogo + '" style="width: 120px; height: 120px; border:2px none white; border-radius: 50%; max-width:150px;"/>');
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseName').setHtml('<font size=3 color=white><b>' + EnterpriseName + '</b></font>');

       // Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHtml('<font size=1 color=white><b>Start Date:' + StartDate + '</b></font>');

        Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard').setHtml('<font size=1 color=white><b>Campaign End Date:' + EndDate + '</b></font>');


        Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignName_PreviewCard').setHtml('<font size=2 color=white><b>' + StampCampaignName + '</b></font>');






        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + CountStampCardRowShow + '</b></font>');

       // globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp = CountLoyaltyStamped;
       // globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow = CountStampCardRowShow;


        var splitCountLoyaltyStamped=CountLoyaltyStamped.split("/");
        globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp = splitCountLoyaltyStamped[0];
        globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow = CountStampCardRowShow;
    
    
       
    //alert("CountLoyaltyStamped:"+globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp)
   // alert("CountStampCardRowShow:"+globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow)
       

        if (globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp == globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow) {
            Ext.getCmp('btnQrCode_FloatPanel_AyohaCardManagement_PreviewCard').setHtml('<img src="resources/icons/ResetPurpleOne.png" width="25" height="25" alt="Company Name">');
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_StampQrCode').setHtml('<font size=2 color=grey><b>Reset Card</b></font>');
        }







        if (StampRuleRemarks) {
            Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHidden(false);
            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;width:100%">*' + StampRuleRemarks + '</div>');


        } else {
            Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHidden(true);
        }


        arrStampRewardNote.length = 0;
        localStorage.setItem('StampCampaignCode', strStampCampaignCode);
        localStorage.setItem('EnterpriseHQAccNo', EnterpriseAccNo);
        localStorage.setItem('AyohaUserAccountNo', SubscriberAccNo)


        console.log(count);

        var No = 0;


        for (var ii = 0; ii < count; ii++) {
            var modelRecord = myStore.getAt(ii);
            var TextOne = modelRecord.get('TextOne');
            var TextTwo = modelRecord.get('TextTwo');
            var StampContent = modelRecord.get('StampContent').replace("http://42.1.63.57/", GetDomainName());
            var StampContentNote = modelRecord.get('StampContentNote');
            var StampedStatus = modelRecord.get('StampedStatus');

            var StampedBy = modelRecord.get('StampedBy');
            var StampedDate = modelRecord.get('StampedDate');
            var StampedTime = modelRecord.get('StampedTime');



            console.log(StampedStatus);

            No = ii + 1;
            var x = TextOne;
            arrStampRewardNote.push(StampContentNote);
            console.log(No);
            if (x != No) {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + TextOne + '</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>' + TextTwo + '</font></div></div>');

                if (StampedStatus == "YES") {

                    var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                    var randomcolor = getRandomColor();
                    var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));







                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                    Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');


                    if (No == 1) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');


                    }




                    if (No == 4) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');


                    }
                    if (No == 7) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                    if (No == 10) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                }


            } else {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">' + TextOne + '</div></div>');

                if (StampedStatus == "YES") {
                    var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                    var randomcolor = getRandomColor();
                    var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));


                    Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');

                    if (No == 1) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');


                    }


                    if (No == 4) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                    }
                    if (No == 7) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                    if (No == 10) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                }


                //   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',  

            }


            var str = StampContent;
            var n = str.includes("background-image");


            if (n) {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(StampContent);
            }




        }


        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMasterLoading').setHidden(true);
        Load_FloatPanel_AyohaCardManagement_PreviewCardLoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore(strStampCampaignCode, EnterpriseAccNo);
        Load_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
    });
    task.delay(2000);
}







////////////////////////////////////////////////////


function Load_FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore(strStampCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft) {


    





    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + CountStampCardRowShow + '</b></font>');
   
   
   
   
   var splitCountLoyaltyStamped=CountLoyaltyStamped.split("/");
    globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp = splitCountLoyaltyStamped[0];
    globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow = CountStampCardRowShow;


   
//alert("CountLoyaltyStamped:"+globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp)
//alert("CountStampCardRowShow:"+globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow)




    if (globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp == globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow) {
        Ext.getCmp('btnQrCode_FloatPanel_AyohaCardManagement_PreviewCard').setHtml('<img src="resources/icons/ResetPurpleOne.png" width="25" height="25" alt="Company Name">');
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_StampQrCode').setHtml('<font size=2 color=grey><b>Reset Card</b></font>');
    }







    if (StampRuleRemarks) {
        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHidden(false);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;width:100%">*' + StampRuleRemarks + '</div>');

        
    } else {
        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHidden(true);
    }

   
    arrStampRewardNote.length = 0;
    localStorage.setItem('StampCampaignCode', strStampCampaignCode);
    localStorage.setItem('EnterpriseHQAccNo', EnterpriseAccNo);
    localStorage.setItem('AyohaUserAccountNo', SubscriberAccNo)





Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseLogo').setHtml('<img src="' + EnterpriseLogo + '" style="width: 120px; height: 120px; border:2px none white; border-radius: 50%; max-width:150px;"/>');
Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseName').setHtml('<font size=3 color=white><b>' + EnterpriseName + '</b></font>');


var No = 0;




if (MembershipTag=="NO"){
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideStore.getProxy().setExtraParam('StampCampaignCode', strStampCampaignCode);
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideStore.getProxy().setExtraParam('EnterpriseAccNo',EnterpriseAccNo);
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideStore.getProxy().setUrl(GetAPIurl() + '/StampCard/StampCardLoadByStampCampaignCodeEnterpriseAccNo');
    
    
    
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideStore.load({
        callback: function(records, operation, success) {
            if (success && records.length > 0) {

           
               
                for (var i = 0; i < records.length; i++) {
                    var rec = records[i];
    
                    var TextOne = rec.get('TextOne');
                    var TextTwo = rec.get('TextTwo');
                    var StampContent = rec.get('StampContent').replace("http://42.1.63.57/",GetDomainName());
                    var StampContentNote = rec.get('StampContentNote');
                    var StampedStatus = rec.get('StampedStatus');
        
                    var StampedBy = rec.get('StampedBy');
                    var StampedDate = rec.get('StampedDate');
                    var StampedTime = rec.get('StampedTime');
        
        
        
                    console.log(StampedStatus);
        
                    No = i + 1;
                    var x = TextOne;
                    arrStampRewardNote.push(StampContentNote);
                    console.log(No);
                    console.log(x);
                    if (x != No) {
                        console.log('btnFloatPanel_AyohaCardManagement_PreviewCard' + No);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + TextOne + '</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>' + TextTwo + '</font></div></div>');
        
                        if (StampedStatus == "YES") {
        
                            var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                            var randomcolor = getRandomColor();
                            var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));
        
        
        
        
        
        
        
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                            Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                            
        
                            if (No == 1) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
        
        
                            }
        
        
        
                            
                            if (No == 4) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                             
                                
                            }
                            if (No == 7) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                            if (No == 10) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                        }
        
        
                    } else {
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">' + TextOne + '</div></div>');
        
                        if (StampedStatus == "YES") {
                            var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                            var randomcolor = getRandomColor();
                            var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));
        
        
                            Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
        
                            if (No == 1) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
        
        
                            }
        
        
                            if (No == 4) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                            }
                            if (No == 7) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                            if (No == 10) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                        }
        
        
                        //   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',  
        
                    }
        
        
                    var str = StampContent;
                    var n = str.includes("background-image");
        
        
                    if (n) {
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(StampContent);
                    }
        
    
    
    
                 
                }
    
                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMasterLoading').setHidden(true);
                Load_FloatPanel_AyohaCardManagement_PreviewCardLoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore(strStampCampaignCode, EnterpriseAccNo);
                Load_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
            } else {
                console.log('No data found or load failed.');
            }
        }
    });
    

}

if (MembershipTag=="YES"){



    // alert('strStampCampaignCode:'+strStampCampaignCode );
    // alert('EnterpriseAccNo:'+EnterpriseAccNo );
    // alert('SubscriberAccNo:'+SubscriberAccNo );
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore.getProxy().setExtraParam('StampCampaignCode', strStampCampaignCode);
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore.getProxy().setExtraParam('EnterpriseAccNo',EnterpriseAccNo);
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo',SubscriberAccNo);
    
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNo');
    
    
    
    _DataStore_AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore.load({
        callback: function(records, operation, success) {
         
            if (success && records.length > 0) {
              //  alert('Load Stamp Card Success'+records.length );
                for (var i = 0; i < records.length; i++) {
                    var rec = records[i];
    
                    var TextOne = rec.get('TextOne');
                    var TextTwo = rec.get('TextTwo');
                    var StampContent = rec.get('StampContent').replace("http://42.1.63.57/", GetDomainName());
                    var StampContentNote = rec.get('StampContentNote');
                    var StampedStatus = rec.get('StampedStatus');
        
                    var StampedBy = rec.get('StampedBy');
                    var StampedDate = rec.get('StampedDate');
                    var StampedTime = rec.get('StampedTime');
        
        
        
                    console.log(StampedStatus);
        
                    No = i + 1;
                    var x = TextOne;
                    arrStampRewardNote.push(StampContentNote);
                    console.log(No);
                    console.log(x);
                    if (x != No) {
                        console.log('btnFloatPanel_AyohaCardManagement_PreviewCard' + No);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + TextOne + '</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>' + TextTwo + '</font></div></div>');
        
                        if (StampedStatus == "YES") {
        
                            var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                            var randomcolor = getRandomColor();
                            var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));
        
        
        
        
        
        
        
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                            Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                            
        
                            if (No == 1) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
        
        
                            }
        
        
        
                            
                            if (No == 4) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                             
                                
                            }
                            if (No == 7) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                            if (No == 10) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                        }
        
        
                    } else {
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">' + TextOne + '</div></div>');
        
                        if (StampedStatus == "YES") {
                            var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                            var randomcolor = getRandomColor();
                            var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));
        
        
                            Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                            Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                            Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
        
                            if (No == 1) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
        
        
                            }
        
        
                            if (No == 4) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                            }
                            if (No == 7) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                            if (No == 10) {
                                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                            }
                        }
        
        
                        //   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',  
        
                    }
        
        
                    var str = StampContent;
                    var n = str.includes("background-image");
        
        
                    if (n) {
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                        Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(StampContent);
                    }
        
    
    
    
                 
                }
    
                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMasterLoading').setHidden(true);
                Load_FloatPanel_AyohaCardManagement_PreviewCardLoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore(strStampCampaignCode, EnterpriseAccNo);
                Load_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
            } else {
                console.log('No data found or load failed.');
            }
        }
    });
    

}

return;

if (MembershipTag=="YES"){
    Ext.getStore('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').getProxy().setExtraParams({
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo,
        SubscriberAccNo: SubscriberAccNo,
    });
    Ext.StoreMgr.get('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo,
            SubscriberAccNo: SubscriberAccNo,
        });





        Ext.StoreMgr.get('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore').load();
        var myStore = Ext.getStore('AyohaUserStampCardLoadByStampCampaignCodeEnterpriseAccNoShowHideSubscriberAccNoStore');
        count = myStore.getCount();
        Ext.Viewport.setMasked(false);

       
      //  alert(count)
   
        // if (count <= 0) {
        //     _FloatPanel_AyohaCardManagement_PreviewCard.hide(Ext.fx.Animation({
        //         type: 'slideOut',
        //         direction: 'left',
        //         easing: 'cubic-bezier(.7,0,.7,1)',
        //         duration: 250

        //     }));
        //     isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
        //     clearInterval(BackgroungImgInterval);
        //    // FloatPanel_AyohaCardManagement_AdvertisementButtonHide();
        //     RemovePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
       
        //     return;
        // }
        // var modelRecords = myStore.getAt(0);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseLogo').setHtml('<img src="' + EnterpriseLogo + '" style="width: 120px; height: 120px; border:2px none white; border-radius: 50%; max-width:150px;"/>');
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseName').setHtml('<font size=3 color=white><b>' + EnterpriseName + '</b></font>');

      

        var No = 0;


        for (var ii = 0; ii < count; ii++) {
            var modelRecord = myStore.getAt(ii);
            var TextOne = modelRecord.get('TextOne');
            var TextTwo = modelRecord.get('TextTwo');
            var StampContent = modelRecord.get('StampContent').replace("http://42.1.63.57/", "https://setkita.com/");
            var StampContentNote = modelRecord.get('StampContentNote');
            var StampedStatus = modelRecord.get('StampedStatus');

            var StampedBy = modelRecord.get('StampedBy');
            var StampedDate = modelRecord.get('StampedDate');
            var StampedTime = modelRecord.get('StampedTime');



            console.log(StampedStatus);

            No = ii + 1;
            var x = TextOne;
            arrStampRewardNote.push(StampContentNote);
            console.log(No);
            console.log(x);
            if (x != No) {
                console.log('btnFloatPanel_AyohaCardManagement_PreviewCard' + No);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + TextOne + '</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>' + TextTwo + '</font></div></div>');

                if (StampedStatus == "YES") {

                    var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                    var randomcolor = getRandomColor();
                    var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));







                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                    Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                    

                    if (No == 1) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');


                    }



                    
                    if (No == 4) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                     
                        
                    }
                    if (No == 7) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                    if (No == 10) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                }


            } else {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">' + TextOne + '</div></div>');

                if (StampedStatus == "YES") {
                    var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                    var randomcolor = getRandomColor();
                    var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));


                    Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-40 0 0 0');
                    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 8px;font-size:8px;color:white;font-weight:bold">' + StampedDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedTime + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');

                    if (No == 1) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');


                    }


                    if (No == 4) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                    }
                    if (No == 7) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setMargin('30 0 0 0');
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                    if (No == 10) {
                        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setMargin('30 0 0 0');
                    }
                }


                //   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',  

            }


            var str = StampContent;
            var n = str.includes("background-image");


            if (n) {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(StampContent);
            }




        }


        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMasterLoading').setHidden(true);
        Load_FloatPanel_AyohaCardManagement_PreviewCardLoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore(strStampCampaignCode, EnterpriseAccNo);
        Load_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
    });
    task.delay(2000);
}

   
}



function Load_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo) {

   



    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setExtraParam('ModuleCode',2);
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setUrl(GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCode'); 
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.load({
            callback: function (records, operation, success) {

                if (!success) {
                    var err = operation.getError();   // boleh jadi string atau object
                   // alert('Load FAILED: ' + JSON.stringify(err, null, 2));
        
                 
        
                    return; // keluar awal, jangan proses records
                }



                if (success && records.length > 0) {                  
                    if (records.length >= 1) {  
                                  
                        var modelRecord = records[0]; // Access only the first record                        
                        localStorage.setItem('FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode', modelRecord.get('AdvertisementCode'));
                      
                        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton').setHidden(false);
                        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton_TransparentBox').setHidden(true);
                       // FloatPanel_AyohaCardManagement_AdvertisementButtonShow();
                    } else {
                         
                        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton').setHidden(true);
                        Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton_TransparentBox').setHidden(false);
                    }
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                   
                }
               // 
            }
        });





//     Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore').getProxy().setExtraParams({
//         EnterpriseHQAccNo: EnterpriseAccNo,
//         ModuleCode:2,
//     });

//     Ext.StoreMgr.get('AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore').load();
//     var task = Ext.create('Ext.util.DelayedTask', function () {
//         Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore').getProxy().setExtraParams({
//             EnterpriseHQAccNo: EnterpriseAccNo,
//             ModuleCode: 2,
//         });

//         Ext.StoreMgr.get('AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore').load();
//         var myStore = Ext.getStore('AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore');
//         count = myStore.getCount();
// //alert(count)
//         if (count >= 1) {
//             var modelRecord = myStore.getAt(0);         
//             localStorage.setItem('FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode', modelRecord.get('AdvertisementCode'));
//           //alert(modelRecord.get('AdvertisementCode'));
          
//             Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton').setHidden(false);
//             Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton_TransparentBox').setHidden(true);
//            // FloatPanel_AyohaCardManagement_AdvertisementButtonShow();
//         } else {
//             Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton').setHidden(true);
//             Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementButton_TransparentBox').setHidden(false);
//         }

//         LoadingPanelHide();
//     });
//     task.delay(2000);

}










function FloatPanel_AyohaCardManagement_PreviewCardHide() {

    if (isFloatPanel_AyohaCardManagement_PreviewCardOpen == "Y") {
        _FloatPanel_AyohaCardManagement_PreviewCard.hide(); isFloatPanel_AyohaCardManagement_PreviewCardOpen = 'N';
        RemovePages("FloatPanel_AyohaCardManagement_PreviewCardHide()");
        //FloatPanel_AyohaCardManagement_AdvertisementButtonHide();
        clearInterval(BackgroungImgInterval);
    }
    
}











function Load_FloatLoyaltyCard_LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore_PreviewCard() {

    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrentAccountNo(),
        EnterpriseAccNo: GetEnterpriseAccNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrentAccountNo(),
            EnterpriseAccNo: GetEnterpriseAccNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndEnterpriseAccNoStore');
        count = myStore.getCount();

        // adjustHeight();
        Ext.Viewport.setMasked(false);

        if (count <= 0) {
            return;
        }

        var No = 0;


        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMaster').setMargin('-5 0 0 0');
        for (var ii = 0; ii < count; ii++) {
            var modelRecord = myStore.getAt(ii);
            var StampedByDate = modelRecord.get('StampedByDate');
            var StampedBy = modelRecord.get('StampedBy');
            No = ii + 1;


            var x = document.getElementById("divContentFloatPanel_AyohaCardManagement_PreviewCard" + No).textContent;
            console.log(x);






            if (x != No) {
                var ycontent = Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).getHtml();
                var randomcolor = getRandomColor();
                var replaceBgColor = ycontent.replace("#85929E", randomcolor);
                Ext.getCmp('btnStampTopImgOne_FloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(replaceBgColor.replace("#566573", 'white'));
                Ext.getCmp('htmlDateTimeStampbyFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                Ext.getCmp('htmlDateTimeStampbyFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
            } else {

                Ext.getCmp('btnStampTopImgOne_FloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 50px;width:70px;height:70px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + No + '</div></div>');
                //Ext.getCmp('htmlDateTimeStampbyFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                Ext.getCmp('htmlDateTimeStampbyFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold">' + StampedByDate + '</div><div style="margin:-3px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;text-align:center">' + StampedBy + '</div>');
                Ext.getCmp('htmlDateTimeStampbyFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
            }
            if (No == 1) {
                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard1').setHeight(100);
            }
            if (No == 4) {
                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard2').setHeight(100);
            }
            if (No == 7) {
                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard3').setHeight(100);
            }
            if (No == 10) {
                Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard4').setHeight(100);
            }

        }







    });
    task.delay(2000);
}



var arrStampRewardNote = [];


function Load_FloatPanel_AyohaCardManagement_PreviewCardLoadByStampCampaignCodeEnterpriseAccNoStore(strStampCampaignCode, EnterpriseAccNo, CardType, StartDate, EndDate, StampCampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName) {


    //Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHtml('<font size=1 color=white><b>Starting Date:' + StartDate + '</b></font>');

    //Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard').setHtml('<font size=1 color=white><b>Expired Date:' + EndDate + '</b></font>');



    //Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignDayLeft_PreviewCard').setHtml('<font size=1 color=white><b>Start Date:' + StartDate + '</b></font>');

    Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_EndDate_PreviewCard').setHtml('<font size=1 color=white><b>Campaign End Date:' + EndDate + '</b></font>');


    Ext.getCmp('htmlMyFloatPanel_AyohaCardManagement_CampaignName_PreviewCard').setHtml('<font size=2 color=white><b>' + StampCampaignName + '</b></font>');

    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseLogo').setHtml('<img src="' + EnterpriseLogo + '" style="width: 120px; height: 120px; border:2px none white; border-radius: 50%; max-width:150px;"/>');
    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseName').setHtml('<font size=3 color=white><b>' + EnterpriseName + '</b></font>');

    if (StampRuleRemarks) {
        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHidden(false);
        Ext.getCmp('htmlFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHtml('<div style="margin:5px 0px 0px 0px;font-size:8px;color:white;font-weight:bold;width:100%">*' + StampRuleRemarks + '</div>');


    } else {
        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCard_StampCampaignNote').setHidden(true);
    }







    arrStampRewardNote.length=0;

    ////if (CardType == "Auto-Default") {
    ////    return;
    ////}

    //Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
    //    StampCampaignCode: strStampCampaignCode,
    //    EnterpriseAccNo: EnterpriseAccNo
    //});
    //Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').load();
    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccNoStore').getProxy().setExtraParams({
    //        StampCampaignCode: strStampCampaignCode,
    //        EnterpriseAccNo: EnterpriseAccNo
    //    });


    Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore').getProxy().setExtraParams({
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo
    });
    Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo
        });





        Ext.StoreMgr.get('StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore').load();
        var myStore = Ext.getStore('StampCardLoadByStampCampaignCodeEnterpriseAccShowHideNoStore');
        count = myStore.getCount();
        Ext.Viewport.setMasked(false);
       

      //alert(count)



        if (count <= 0) {
            return;
        }

        var No = 0;


        for (var ii = 0; ii < count; ii++) {
            var modelRecord = myStore.getAt(ii);
            var TextOne = modelRecord.get('TextOne');
            var TextTwo = modelRecord.get('TextTwo');
            var StampContent = modelRecord.get('StampContent').replace("http://42.1.63.57/",GetDomainName());
            var StampContentNote = modelRecord.get('StampContentNote');
            var StampedStatus = modelRecord.get('StampedStatus');
            console.log(StampedStatus);

            No = ii + 1;
            var x = TextOne;
            arrStampRewardNote.push(StampContentNote);
            if (x != No) {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px">' + TextOne + '</div><br><div style="margin:-20px 0px 0px 0px"><font size=2>' + TextTwo + '</font></div></div>');
               
                //if (StampedStatus == "YES") {
                //    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
                //    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
                //}


            } else {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
             Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml('<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid white;background: #85929E;border-radius: 50px;width:70px;height:70px;color:#566573;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;" ><div style="margin:23px 0px 0px 0px" id="divContentFloatPanel_AyohaCardManagement_PreviewCard3">'+TextOne+'</div></div>');

             //if (StampedStatus == "YES") {
             //    Ext.getCmp('btnFloatPanel_AyohaCardManagement_StampTopImgOne_PreviewCard' + No).setHidden(false);
             //    Ext.getCmp('htmlFloatPanel_AyohaCardManagement_DateTimeStampby_PreviewCard' + No).setHidden(false);
             //}


                //   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:90px;height:90px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url(resources/icons/freecup1Inactive.png); background-size: 100% 100%;" id="divContentFloatLoyaltyCardStamp11" ></div>',  
              
            }


            var str = StampContent;
            var n = str.includes("background-image");


            if (n) {
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHidden(false);
                Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCard' + No).setHtml(StampContent);
            }




        }


        Ext.getCmp('containerFloatPanel_AyohaCardManagement_PreviewCardMasterLoading').setHidden(true);
        Load_FloatPanel_AyohaCardManagement_PreviewCardLoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore(strStampCampaignCode, EnterpriseAccNo);
        Load_FloatPanel_AyohaCardManagement_PreviewCard_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
    });
    task.delay(2000);
}

var ArrCardBackgroundImg = [];
function Load_FloatPanel_AyohaCardManagement_PreviewCardLoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeStore(strStampCampaignCode, EnterpriseAccNo) {


    ArrCardBackgroundImg.length = 0;
    Ext.getStore('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore').getProxy().setExtraParams({
        //StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        //EnterpriseAccNo: GetEnterpriseAccNo()
        StampCampaignCode: strStampCampaignCode,
        EnterpriseAccNo: EnterpriseAccNo
    });
    Ext.StoreMgr.get('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore').getProxy().setExtraParams({
            StampCampaignCode: strStampCampaignCode,
            EnterpriseAccNo: EnterpriseAccNo
        });
        Ext.StoreMgr.get('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore').load();
        var myStore = Ext.getStore('LoyaltyCardBackgroundImageLoadByEnterpriseAccNoStampCampaignCodeBackgroundImageAnimStore');
        count = myStore.getCount();


        if(count>0){
            for (var ii = 0; ii < count; ii++) {

                var modelRecord = myStore.getAt(ii);
                var ImgPath = modelRecord.get('ImgPath');
               // console.log(ImgPath);
                ArrCardBackgroundImg.push(ImgPath);
                
            }
    
            var modelRecords = myStore.getAt(0);
            var isAnimated = modelRecords.get('isAnimated');
            var AnimatedInterval = modelRecords.get('AnimatedInterval');
            setPreviewCardBackgroundImage(AnimatedInterval, isAnimated);
        }
       
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);
}
var BackgroungImgInterval;
function setPreviewCardBackgroundImage(IntervalAnime,isAnimated) {
    //var panjang = ArrCardBackgroundImg.length;
    console.log(ArrCardBackgroundImg[1])


    var y = parseInt(screen.height)-12;
   
    
    //Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardID').setHtml('background-image: url(""); background-size: 100% 100%;');

   // Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerID').setStyle("background-color:transparent;")
  //  Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerID').setHtml('<div style="background-color:transparent;width:100%;height:100%;" id="divCardBgImg" ><img src="' + ArrCardBackgroundImg[1] + '"  style="width:100%;height:' + y + 'px;"></div>');


    var randomImgPath = ArrCardBackgroundImg[Math.floor(Math.random() * ArrCardBackgroundImg.length)];
    Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerIDs').setHtml('<div style="background-color:transparent;width:100%;height:' + y + 'px;background-image: url ("' + randomImgPath + '")" id="divCardBgImg" ></div>');
  

   
 
 

    if (isAnimated == "NO") {
        Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerIDs').setHtml('<div style="background-color:transparent;width:100%;height:' + y + 'px;background-image: url (" ' + randomImgPath + '")" id="divCardBgImg" ></div>');
        $("#divCardBgImg").css("background-image", "url(" + randomImgPath + ")");
        $("#divCardBgImg").css("background-repeat", "no-repeat");
        $("#divCardBgImg").css("background-size", "100% 100%");
        $("#divCardBgImg").css("height", $(window).height() - 3);
        
        return;
    }

    



    if (isAnimated == "YES") {

        var interval = parseInt(IntervalAnime * 1000);
        var i = 0;
        //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
        BackgroungImgInterval = setInterval(function () {
            i++;

            Ext.getCmp('FloatPanel_AyohaCardManagement_PreviewCardInnerID').setStyle("background-color:transparent;");
            if (i == ArrCardBackgroundImg.length) {
                i = 0;
            }

            //  if (ArrCardBackgroundImg[i] != "background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)") {
            console.log(ArrCardBackgroundImg[i]);
            $("#divCardBgImg").fadeOut("slow", function () {
                $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
                $("#divCardBgImg").css("background-repeat", "no-repeat");
                $("#divCardBgImg").css("background-size", "100% 100%");
                $("#divCardBgImg").css("height", $(window).height() - 3);
                //  $("#divCardBgImg").css("width", "1"));
                $("#divCardBgImg").fadeIn("slow");
            });
            //}

        }, interval);
    }
  
}



function Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignRubberStampLoadByStampCampaignCodeStore() {

    Ext.getStore('StampCampaignRubberStampLoadByStampCampaignCodeStore').getProxy().setExtraParams({

        StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
    });
    Ext.StoreMgr.get('StampCampaignRubberStampLoadByStampCampaignCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('StampCampaignRubberStampLoadByStampCampaignCodeStore').getProxy().setExtraParams({

            StampCampaignCode: document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_StampCardCampaignCode').value,
        });
        Ext.StoreMgr.get('StampCampaignRubberStampLoadByStampCampaignCodeStore').load();
        var myStore = Ext.getStore('StampCampaignRubberStampLoadByStampCampaignCodeStore');
        //StampCount = myStore.getCount();
        //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        // adjustHeight();
        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);
}






var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterprisePhoneNo;
var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseEmail;
var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseWebsite;
var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook;
var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseTwiter;
var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram;
var globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseCoordinate;
var globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo;
var globalFloatPanel_AyohaCardManagement_PreviewCard_PersonInCharge;
function loadEnterprisesContactUsLinkStore() {

    Ext.getStore('EnterprisesContactUsLinkStore').getProxy().setExtraParams({

        EnterpriseHQAccNo: GetEnterpriseAccNo(),
    });
    Ext.StoreMgr.get('EnterprisesContactUsLinkStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('EnterprisesContactUsLinkStore').getProxy().setExtraParams({

            EnterpriseHQAccNo: GetEnterpriseAccNo(),
        });
        Ext.StoreMgr.get('EnterprisesContactUsLinkStore').load();
        var myStore = Ext.getStore('EnterprisesContactUsLinkStore');
        var modelRecord = myStore.getAt(0);
       

        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterprisePhoneNo = modelRecord.get('EnterprisePhoneNo');
        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseEmail = modelRecord.get('EnterpriseEmail');
        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseWebsite = modelRecord.get('EnterpriseWebsite');
        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook = modelRecord.get('EnterpriseFacebook');
        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseTwiter = modelRecord.get('EnterpriseTwiter');
        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram = modelRecord.get('EnterpriseInstagram');
        globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseCoordinate = modelRecord.get('EnterpriseCoordinate');
        globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo = modelRecord.get('PICContactNo');
        globalFloatPanel_AyohaCardManagement_PreviewCard_PersonInCharge = modelRecord.get('PersonInCharge');








        if (globalFloatPanel_AyohaCardManagement_PreviewCard_PICContactNo != "NA") {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomWassap').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomWassap').setHidden(true);
        }
       
       
        if (globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseFacebook != "NA") {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomFB').setHidden(true);
        }
        if (globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseInstagram != "NA") {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomInsta').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomInsta').setHidden(true);
        }
        if (globalFloatPanel_AyohaCardManagement_PreviewCard_EnterpriseCoordinate != "NA") {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomLocation').setHidden(false);
        } else {
            Ext.getCmp('btnFloatPanel_AyohaCardManagement_PreviewCardbottomLocation').setHidden(true);
        }




      
        Ext.Viewport.setMasked(false);

    });
    task.delay(500);
}



var globalStampCampaingName;
function SingleTap_FloatPanel_AyohaCardManagement_PreviewCard_CreateStampQRCode() {
    if (globalStampCampaignisCampaignExpired == "Expired") {
        Swal.fire({
            title: "",
            text: globalStampCampaingName + " has been Expired.Unable to generate Stamp QR Code!",
            showConfirmButton: false,
            imageUrl: "resources/icons/campaignExpired.png",
            imageWidth: 300,
            imageHeight: 250,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        })
        return;       
    }


    // var CountLoyaltyStamped = localStorage.getItem('CountLoyaltyStamped');
    // var CountStampCardRowShow = localStorage.getItem('CountStampCardRowShow');
    // globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp = splitCountLoyaltyStamped[0];
    // globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow = CountStampCardRowShow;

    if (globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStamp == globalStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CurrentCountStampCardRowShow) {
        Swal.fire({
            //title: "",
            title:"<div style=font-color:purple;font-size:16px>"+ globalStampCampaingName + " Stamped has been completed!,Need Administrator to Reset It,Thank You!</div>",
            showConfirmButton: false,
            imageUrl: "resources/icons/StampSuccessCount.gif",
            imageWidth: 300,
            imageHeight: 300,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        })
        return;  
        return;
    }
    FloatPanel_AyohaCardManagement_StampQrCodeShow();

}