Ext.define('BuskartApp.view.Advertisement.FloatPanel_FloatingAdvertisement', {

});






//var scanner;
var _FloatPanel_FloatingAdvertisement;

function FloatPanel_FloatingAdvertisement() {

    _FloatPanel_FloatingAdvertisement = Ext.create('Ext.Container',


        {

            id: 'FloatPanel_FloatingAdvertisementID',
            // xtype: 'panel',
            zIndex: 250,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            modal: true,
            // hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
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

            style: ' background-color:white;',
          // style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 10px 10px 10px 10px;',








            items: [
                {

                    xtype: 'container',
                    width: '100%',
                    docked: 'top',
                    height: 40,
                    // width: 40,

                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                   // hidden: true,

                    id: 'containerFloatPanel_FloatingAdvertisementHeader',
                    style: ' background-color:white;',
                   //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                             id: 'btnFloatPanel_FloatingAdvertisementBack',
                                             height: 30,
                                             width: 35,
                                             margin: '0 0 0 0',
                                             // iconCls: 'list',
                                             html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                             ui: 'plain',
                                             handler: function () {
                                                 _FloatPanel_FloatingAdvertisement.hide(Ext.fx.Animation({
                                                     type: 'slideOut',
                                                     direction: 'left',
                                                     easing: 'cubic-bezier(.7,0,.7,1)',
                                                     duration: 250

                                                 }));
                                                 is_FloatPanel_FloatingAdvertisementOpen = 'N';
                                                 RemovePages(_FloatPanel_FloatingAdvertisement, "is_FloatPanel_FloatingAdvertisementOpen");
                                             }
                                         },

                                          {
                                              xtype: 'spacer',


                                          },

                                              {
                                                  margin: '0 -20 0 0',
                                                  id: 'htmlFloatPanel_FloatingAdvertisement_TitleHeaderTxt',
                                                  html: '<div class="blink_me" style="margin:20px 0px 0px 0px"><font size=3 color=black><b><u>Ayoha Sale</u></b></font></div>'
                                              },


                                                        {
                                                            xtype: 'button',
                                                            id: 'btnFloatPanel_FloatingAdvertisement_CardIcon',
                                                            height: 60,
                                                            margin: '0 0 0 10',
                                                            width: 60,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/SaleThree.gif" width="55" height="55" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {
                                                                is_FloatPanel_FloatingAdvertisementOpen = 'N';
                                                                _FloatPanel_FloatingAdvertisement.hide(Ext.fx.Animation({
                                                                    type: 'slideOut',
                                                                    direction: 'right',
                                                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                RemovePages(_FloatPanel_FloatingAdvertisement, "is_FloatPanel_FloatingAdvertisementOpen");
                                                                
                                                                //  RemovePages(_FloatPanel_AyohaNotification, "isFloatPanel_AyohaNotificationOpen");
                                                                //FloatPanel_AyohaNotification_AddCardHide();
                                                            }
                                                        },








                //                          {
                //                              xtype: 'container',
                //                              //  width: '100%',
                //                              style: 'background-color:rgba(0, 0, 0, 0.1);border-radius: 0px 0px 0px 0px;',
                //                              layout: {
                //                                  type: 'vbox',
                //                                  pack: 'start',
                //                                  align: 'center',
                //                              },
                //                              items: [
                //                                  {

                //                                      xtype: 'image',
                //                                      src: 'resources/icons/scanQRcodeGrey.png',
                //                                      width: 55,
                //                                      height: 55,
                //                                      margin: '0 0 0 0'
                //                                  },
                //{
                //    html: '<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 0px" ><u>Scan Ayoha Reward Card</u></div>',
                //},

                //                              ]

                //                          },










                           ]

                },




                /////////////////

                {
                    xtype: 'container',
                    height: '100%',
                    width: '100%',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                    },
                    scrollable: {
                        direction: 'vertical',
                        directionLock: true,
                        indicators: false
                    },
                    style: ' background-color:transparent;',
                   // style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                    items: [

                      

 {
     xtype: 'container',
     width: '100%',
     height: 12,
     /// hidden:true,
     margin: '10 0 0 0',
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
         align: 'center',
     },
     items: [
         {
             html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 10px;">Hot Sale !</div>',
         },
     ]

 },


                        {
                            xtype: 'container',
                            width: '100%',
                            height: 280,
                            margin: '-10 0 0 0',
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
                                     
                                          //{
                                          //    xtype: 'panel',
                                          //    width: 15
                                          //},
                                        {
                                            xtype: 'container',
                                            height: 280,
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
                                                    // xtype: 'button',
                                                    id: 'btnDashboard_FloatingAdvertisement_EnterprisePic0',
                                                    //   margin: '0 0 100 0',
                                                    zIndex: 200,
                                                    //docked:'top',
                                                    height: 60,
                                                    width: 60,
                                                    // iconCls: 'list',
                                                    //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                    html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                    // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                },


                                                  {

                                                      height: 280,
                                                      width: 230,
                                                      id: 'htmlPicture_Dashboard_FloatingAdvertisement0',
                                                      margin: '-60 0 0 0',
                                                      html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                  },


                                                {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName',
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
                                                            id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName0',
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
                                                              id: 'htmlFloatPanel_FloatingAdvertisement_TagLine0',
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
                                               height: 280,
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
                                                       // xtype: 'button',
                                                       id: 'btnDashboard_FloatingAdvertisement_EnterprisePic1',
                                                       //   margin: '0 0 100 0',
                                                       zIndex: 200,
                                                       //docked:'top',
                                                       height: 60,
                                                       width: 60,
                                                       // iconCls: 'list',
                                                       //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                       html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                       // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                   },


                                                     {

                                                         height: 280,
                                                         width: 230,
                                                         id: 'htmlPicture_Dashboard_FloatingAdvertisement1',
                                                         margin: '-60 0 0 0',
                                                         html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                     },


                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName1',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName1',
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
                                                                 id: 'htmlFloatPanel_FloatingAdvertisement_TagLine1',
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
                                               height: 280,
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
                                                       // xtype: 'button',
                                                       id: 'btnDashboard_FloatingAdvertisement_EnterprisePic2',
                                                       //   margin: '0 0 100 0',
                                                       zIndex: 200,
                                                       //docked:'top',
                                                       height: 60,
                                                       width: 60,
                                                       // iconCls: 'list',
                                                       //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                       html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                       // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                   },


                                                     {

                                                         height: 280,
                                                         width: 230,
                                                         id: 'htmlPicture_Dashboard_FloatingAdvertisement2',
                                                         margin: '-60 0 0 0',
                                                         html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                     },


                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName2',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName2',
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
                                                                 id: 'htmlFloatPanel_FloatingAdvertisement_TagLine2',
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
                                               height: 280,
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
                                                       // xtype: 'button',
                                                       id: 'btnDashboard_FloatingAdvertisement_EnterprisePic3',
                                                       //   margin: '0 0 100 0',
                                                       zIndex: 200,
                                                       //docked:'top',
                                                       height: 60,
                                                       width: 60,
                                                       // iconCls: 'list',
                                                       //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                       html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                       // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                   },


                                                     {

                                                         height: 280,
                                                         width: 230,
                                                         id: 'htmlPicture_Dashboard_FloatingAdvertisement3',
                                                         margin: '-60 0 0 0',
                                                         html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                     },


                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName3',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName3',
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
                                                                 id: 'htmlFloatPanel_FloatingAdvertisement_TagLine3',
                                                                 html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                             },
                                                       ]

                                                   },
                                               ]
                                           },


                                   //{
                                   //    xtype: 'panel',
                                   //    width: 15
                                   //},

                                     




                                    ]
                                },










                                {
                                    xtype: 'spacer'
                                },
                            ]

                        },


                        ///////////////rows 2

                 {
                     xtype: 'panel',
                     height: 20
                 },
                 

                     {
                         xtype: 'container',
                         width: '100%',
                         height: 12,
                         /// hidden:true,
                         margin: '10 0 0 0',
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
                             align: 'center',
                         },
                         items: [
                             {
                                 html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 10px;">Extra Promotion!</div>',
                             },
                         ]

                     },

                      {
                          xtype: 'container',
                          width: '100%',
                          height: 280,
                          margin: '-10 0 0 0',
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

                                        //{
                                        //    xtype: 'panel',
                                        //    width: 15
                                        //},
                                      {
                                          xtype: 'container',
                                          height: 280,
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
                                                  // xtype: 'button',
                                                  id: 'btnDashboard_FloatingAdvertisement_EnterprisePic4',
                                                  //   margin: '0 0 100 0',
                                                  zIndex: 200,
                                                  //docked:'top',
                                                  height: 60,
                                                  width: 60,
                                                  // iconCls: 'list',
                                                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                  html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                              },


                                                {

                                                    height: 280,
                                                    width: 230,
                                                    id: 'htmlPicture_Dashboard_FloatingAdvertisement4',
                                                    margin: '-60 0 0 0',
                                                    html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                },


                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName4',
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
                                                          id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName4',
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
                                                            id: 'htmlFloatPanel_FloatingAdvertisement_TagLine4',
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
                                             height: 280,
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
                                                     // xtype: 'button',
                                                     id: 'btnDashboard_FloatingAdvertisement_EnterprisePic5',
                                                     //   margin: '0 0 100 0',
                                                     zIndex: 200,
                                                     //docked:'top',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                 },


                                                   {

                                                       height: 280,
                                                       width: 230,
                                                       id: 'htmlPicture_Dashboard_FloatingAdvertisement5',
                                                       margin: '-60 0 0 0',
                                                       html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                   },


                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName5',
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
                                                             id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName5',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_TagLine5',
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
                                             height: 280,
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
                                                     // xtype: 'button',
                                                     id: 'btnDashboard_FloatingAdvertisement_EnterprisePic6',
                                                     //   margin: '0 0 100 0',
                                                     zIndex: 200,
                                                     //docked:'top',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                 },


                                                   {

                                                       height: 280,
                                                       width: 230,
                                                       id: 'htmlPicture_Dashboard_FloatingAdvertisement6',
                                                       margin: '-60 0 0 0',
                                                       html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                   },


                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName6',
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
                                                             id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName6',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_TagLine6',
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
                                             height: 280,
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
                                                     // xtype: 'button',
                                                     id: 'btnDashboard_FloatingAdvertisement_EnterprisePic7',
                                                     //   margin: '0 0 100 0',
                                                     zIndex: 200,
                                                     //docked:'top',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                 },


                                                   {

                                                       height: 280,
                                                       width: 230,
                                                       id: 'htmlPicture_Dashboard_FloatingAdvertisement7',
                                                       margin: '-60 0 0 0',
                                                       html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                   },


                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName7',
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
                                                             id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName7',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_TagLine7',
                                                               html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                           },
                                                     ]

                                                 },
                                             ]
                                         },


                                 //{
                                 //    xtype: 'panel',
                                 //    width: 15
                                 //},






                                  ]
                              },










                              {
                                  xtype: 'spacer'
                              },
                          ]

                      },







                                ///////////////rows 3

                 {
                     xtype: 'panel',
                     height: 20
                 },


                     {
                         xtype: 'container',
                         width: '100%',
                         height: 12,
                         /// hidden:true,
                         margin: '10 0 0 0',
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
                             align: 'center',
                         },
                         items: [
                             {
                                 html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 10px;">Last Call Sale!</div>',
                             },
                         ]

                     },

                      {
                          xtype: 'container',
                          width: '100%',
                          height: 280,
                          margin: '-10 0 0 0',
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

                                        //{
                                        //    xtype: 'panel',
                                        //    width: 15
                                        //},
                                      {
                                          xtype: 'container',
                                          height: 280,
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
                                                  // xtype: 'button',
                                                  id: 'btnDashboard_FloatingAdvertisement_EnterprisePic8',
                                                  //   margin: '0 0 100 0',
                                                  zIndex: 200,
                                                  //docked:'top',
                                                  height: 60,
                                                  width: 60,
                                                  // iconCls: 'list',
                                                  //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                  html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                  // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                              },


                                                {

                                                    height: 280,
                                                    width: 230,
                                                    id: 'htmlPicture_Dashboard_FloatingAdvertisement8',
                                                    margin: '-60 0 0 0',
                                                    html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                },


                                              {
                                                  xtype: 'container',
                                                  id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName8',
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
                                                          id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName8',
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
                                                            id: 'htmlFloatPanel_FloatingAdvertisement_TagLine8',
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
                                             height: 280,
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
                                                     // xtype: 'button',
                                                     id: 'btnDashboard_FloatingAdvertisement_EnterprisePic9',
                                                     //   margin: '0 0 100 0',
                                                     zIndex: 200,
                                                     //docked:'top',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                 },


                                                   {

                                                       height: 280,
                                                       width: 230,
                                                       id: 'htmlPicture_Dashboard_FloatingAdvertisement9',
                                                       margin: '-60 0 0 0',
                                                       html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                   },


                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName9',
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
                                                             id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName9',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_TagLine9',
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
                                             height: 280,
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
                                                     // xtype: 'button',
                                                     id: 'btnDashboard_FloatingAdvertisement_EnterprisePic10',
                                                     //   margin: '0 0 100 0',
                                                     zIndex: 200,
                                                     //docked:'top',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                 },


                                                   {

                                                       height: 280,
                                                       width: 230,
                                                       id: 'htmlPicture_Dashboard_FloatingAdvertisement10',
                                                       margin: '-60 0 0 0',
                                                       html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                   },


                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName10',
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
                                                             id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName10',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_TagLine10',
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
                                             height: 280,
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
                                                     // xtype: 'button',
                                                     id: 'btnDashboard_FloatingAdvertisement_EnterprisePic11',
                                                     //   margin: '0 0 100 0',
                                                     zIndex: 200,
                                                     //docked:'top',
                                                     height: 60,
                                                     width: 60,
                                                     // iconCls: 'list',
                                                     //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                     html: '<img src="resources/icons/Logo/LogoOrangeSimplifed.png" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">',


                                                     // html: '<div ><img src="resources/icons/videoPurple.png" width="35" height="35" alt="Company Name"></div>',

                                                 },


                                                   {

                                                       height: 280,
                                                       width: 230,
                                                       id: 'htmlPicture_Dashboard_FloatingAdvertisement11',
                                                       margin: '-60 0 0 0',
                                                       html: '<img src="resources/icons/freeAdvertisingSpace.png"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;">',

                                                   },


                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_FloatingAdvertisement_EnterpriseName11',
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
                                                             id: 'htmlFloatPanel_FloatingAdvertisement_EnterpriseName11',
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
                                                               id: 'htmlFloatPanel_FloatingAdvertisement_TagLine11',
                                                               html: '<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">Penjahit baju Custome Made KL</div>',
                                                           },
                                                     ]

                                                 },
                                             ]
                                         },


                                 //{
                                 //    xtype: 'panel',
                                 //    width: 15
                                 //},






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



                    ]
                },




                      ///////////////////////////// row 2


                      



            ],














        });

    return _FloatPanel_FloatingAdvertisement;
}


function FloatPanel_FloatingAdvertisementShow() {
    Ext.Viewport.remove(_FloatPanel_FloatingAdvertisement);
    this.overlay = Ext.Viewport.add(FloatPanel_FloatingAdvertisement());
    this.overlay.show();
    AddRoutePages(_FloatPanel_FloatingAdvertisement, "is_FloatPanel_FloatingAdvertisementOpen");
    is_FloatPanel_FloatingAdvertisementOpen = 'Y';
    loadAdvertisementloadFloatingStore();


}
var is_FloatPanel_FloatingAdvertisementOpen = 'N';

function FloatPanel_FloatingAdvertisementHide() {
    // scanner.stop();
    if (is_FloatPanel_FloatingAdvertisementOpen == 'Y') {
        _FloatPanel_FloatingAdvertisement.hide();
        is_FloatPanel_FloatingAdvertisementOpen = 'N';
        RemovePages(_FloatPanel_FloatingAdvertisement, "is_FloatPanel_FloatingAdvertisementOpen");
       
    }

}






var ArrAdvertisementCodeFloating = [];
var ArrAdvertisementFloating_CompanyLogo = [];
var ArrAdvertisementFloating_CompanyName = [];
var ArrAdvertisementFloating_AdvertisementTitle = [];
var ArrAdvertisementFloating_EnterpriseAccNo = [];
function loadAdvertisementloadFloatingStore() {


    ArrAdvertisementCodeFloating.length = 0;
    ArrAdvertisementFloating_CompanyLogo.length = 0;
    ArrAdvertisementFloating_CompanyName.length = 0;
    ArrAdvertisementFloating_AdvertisementTitle.length = 0;
    ArrAdvertisementFloating_EnterpriseAccNo.length = 0;
    AdvertismentTypeTag = 'Floating_Advertisement';

    _DataStore_AdvertisementloadFloatingStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadFloating');
    _DataStore_AdvertisementloadFloatingStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AdvertisementloadFloatingStore.getCount());

       
        if (count <= 0) {
            return;
        }

     


        for (i = 0; i < count; i++) {

            var Store = _DataStore_AdvertisementloadFloatingStore.getAt(i);
            var AdvertismentMediaUrl = Store.get('AdvertismentMediaUrl');
            var AdvertismentMediaNote = Store.get('AdvertismentMediaNote');
            var MediaType = Store.get('MediaType');
            var AdvertisementTitle = Store.get('AdvertisementTitle');
            var EnterpriseName = Store.get('EnterpriseName');
            var EnterpriseLogoPath = Store.get('EnterpriseLogoPath');
            var AdvertisementCode = Store.get('AdvertisementCode');
            var EnterpriseAccNo = Store.get('EnterpriseAccNo');
            ArrAdvertisementCodeFloating.push(AdvertisementCode);
            ArrAdvertisementFloating_CompanyLogo.push(EnterpriseLogoPath);
            ArrAdvertisementFloating_CompanyName.push(EnterpriseName);
            ArrAdvertisementFloating_AdvertisementTitle.push(AdvertisementTitle);
            ArrAdvertisementFloating_EnterpriseAccNo.push(EnterpriseAccNo);
            //ArrMediaFileName.push(MediaFileName);
            Ext.getCmp('btnDashboard_FloatingAdvertisement_EnterprisePic' + i).setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:3px solid #c800ffc9; border-radius: 50%; max-width:200px;margin:185px 0px 0px 0px;">');
            Ext.getCmp('htmlPicture_Dashboard_FloatingAdvertisement' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 280px; border:2px solid #ECF0F1;border-radius: 10px 10px 10px 10px;"   onclick="openAdvertisementFloating' + i + '()">');
            Ext.getCmp('htmlFloatPanel_FloatingAdvertisement_EnterpriseName' + i).setHtml('<div style="color:white;text-align: center;font-size:12px;width:100%;font-weight:bold;background-color:transparent">' + EnterpriseName + '</div>');
            Ext.getCmp('htmlFloatPanel_FloatingAdvertisement_TagLine' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;background-color:transparent;margin:0px 0px 0px 0px;">' + AdvertisementTitle + '</div>');


        }




        //if (Store.get('TotalItemQuantity').length >= 6) {
        //    Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -7');
        //}
        //if (Store.get('TotalItemQuantity').length < 6) {
        //    Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -8');
        //}
       

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);





}

var globalFloatPanel_FloatingAdvertisement_CompanyLogo;
var globalFloatPanel_FloatingAdvertisement_CompanyName;
var globalFloatPanel_FloatingAdvertisement_AdvertismentTitle;
var globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo;
var globalFloatPanel_FloatingAdvertisement_AdvertismentCode;
function openAdvertisementFloating0() {
    // globalDashboard_OpenAdvertisementNo = 0;
   
    globalFloatPanel_AyohaStore_ModuleTagging = "Floating_Advertisement";
    localStorage.setItem("Floating_AdvertismentCode", ArrAdvertisementCodeFloating[0]);
    globalFloatPanel_FloatingAdvertisement_AdvertismentCode = ArrAdvertisementCodeFloating[0];
    globalFloatPanel_FloatingAdvertisement_CompanyLogo = ArrAdvertisementFloating_CompanyLogo[0];
    globalFloatPanel_FloatingAdvertisement_CompanyName = ArrAdvertisementFloating_CompanyName[0];
    globalFloatPanel_FloatingAdvertisement_AdvertismentTitle = ArrAdvertisementFloating_AdvertisementTitle[0];
    globalFloatPanel_FloatingAdvertisement_EnterpriseAccNo = ArrAdvertisementFloating_EnterpriseAccNo[0];
    FloatPanel_PreviewAdvertisementShow_FloatingAdvertisement("Floating_Advertisement");
}

function openAdvertisementFloating1() {

}
function openAdvertisementFloating2() {

}
function openAdvertisementFloating3() {

}
function openAdvertisementFloating4() {

}
function openAdvertisementFloating5() {

}
function openAdvertisementFloating6() {

}
function openAdvertisementFloating7() {

}
function openAdvertisementFloating8() {

}
function openAdvertisementFloating9() {

}
function openAdvertisementFloating10() {

}
function openAdvertisementFloating11() {

}

