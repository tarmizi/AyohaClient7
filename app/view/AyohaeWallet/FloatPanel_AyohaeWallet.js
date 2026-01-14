Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet', {

});

var _FloatPanel_AyohaeWallet;


var isFloatPanel_AyohaeWalletOpen = 'N';











function FloatPanel_AyohaeWallet() {

    _FloatPanel_AyohaeWallet =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWalletID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 100,
         // modal: true,
         //  hideOnMaskTap: true,
         layout: {
             type: 'vbox'
         },
         showAnimation: {
             type: 'popIn',
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWalletOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWalletHide()");
                             clearInterval(CheckPaymentGatewayTransaction_timer);
                             no = 0;
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWalletOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWalletHide()");
                             clearInterval(CheckPaymentGatewayTransaction_timer);
                             no = 0;
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 style: ' background-color: transparent;',
                 id: 'containerFloatPanel_AyohaeWalletHeader',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },
                 items:
                        [
                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWalletBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_AyohaeWalletHide()");
                                              _FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_AyohaeWalletOpen = 'N';
                                              clearInterval(CheckPaymentGatewayTransaction_timer);
                                              no = 0;
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },
                                        {
                                            margin:'10 0 0 0',
                                            html: '<div id="FloatPanel_AyohaeWallet_eWalletSetting" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:right;margin:-2px 0px 0px 0px;background-color:transparent;color:white">eWallet Setting</div>'
                                        },
                                     
                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaeWalletIcon',
                                               height: 40,
                                               width: 40,
                                               margin: '0 0 0 0',
                                               // hidden: true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/ewallet5.png" width="30" height="30" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   FloatPanel_AyohaeWallet_SettingShow();
                                                   //RemovePages(_FloatPanel_AyohaeWallet, "isFloatPanel_AyohaeWalletOpen");
                                                   //_FloatPanel_AyohaeWallet.hide(Ext.fx.Animation({
                                                   //    type: 'slideOut',
                                                   //    direction: 'right',
                                                   //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                   //    duration: 250

                                                   //}));
                                                   //isFloatPanel_AyohaeWalletOpen = 'N';
                                                  // FloatPanel_RewardStoreHide();
                                                   //  FloatPanel_RewardStoreHide();

                                               }
                                           },
                                           {
                                               xtype: 'panel',
                                               width:17
                                           }

                        ]

             },

             {

                 xtype: 'container',
                 width: '100%',
                 margin:'0 0 0 0',
                 height:60,
                 style: ' background-color: transparent;',
                 id: 'containerFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt',
                 layout: {
                     type: 'vbox',
                     pack: 'left',
                     align: 'left',
                 },
                 items:[
                     {
                         html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:white;padding:5px 25px;">Balance</div>'
                     },
                     {
                         xtype: 'container',
                         width: '100%',
                         margin:'0 0 0 0',
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items:[
                             {
                                 //  id: 'htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt
                                 width: 60,
                               //  height:38,
                                 html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM</div>'
                             },
                             {
                                 //width: 240,
                                 //height: 38,
                                 id: 'htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt',
                                 html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">00.00</div>'
                             },
                                {
                                    xtype: 'spacer'
                                },
                                {
                                    xtype: 'container',
                                    width: 90,
                                    margin: '0 0 0 -10',
                                    id: 'containerFloatPanel_AyohaeWallet_CashOut',
                                    name: 'namecontainerFloatPanel_AyohaeWallet_CashOut',
                                    height: 30,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                    items: [

                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            height: 30,
                                            margin: '0 0 0 0',
                                            style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                            // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                                            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                 {
                                                     xtype: 'panel',
                                                     width: 8
                                                 },
                                        {
                                            html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:black">Cash Out</div>'
                                        },
                                        {
                                            xtype: 'spacer'
                                        },
                                                  {
                                                      height: 22,
                                                      width: 22,


                                                      //badgeText: "2",
                                                      html: '<img src="resources/icons/cashout.png" width="18" height="18" alt="Company Name">',
                                                  },
                                                   {
                                                       xtype: 'panel',
                                                       width: 6
                                                   },


                                            ]
                                        },

                                    ]
                                },
                                 {
                                     xtype: 'spacer',
                                     width: 17
                                 },

                         ]
                     }
                      
                    
                 ]
             },
         //{

         //    xtype: 'container',
         //    width: '100%',
         //    margin:'-10 0 0 0',
         //   // height:10,
         //    style: ' background-color: transparent;',
         //    id: 'containerFloatPanel_AyohaeWalletHeader_AyohaeWalletAmountTxt',
         //    layout: {
         //        type: 'hbox',
         //        pack: 'left',
         //        align: 'left',
         //    },
         //    items:[
         //        {
         //            html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:white;padding:5px 25px;">RM5526.30</div>'
         //        }
                    
         //    ]
         //},
       
            {

                xtype: 'container',
                width: '100%',
                margin: '0 0 0 0',
                height: 130,
                style: ' background-color: transparent;',
                id: 'containerFloatPanel_AyohaeWalletHeader_AyohaeWalletMenu',
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
                       width: '18%',
                       margin: '-10 0 0 0',
                       id: 'containerFloatPanel_AyohaeWallet_TopUp',
                       name: 'namecontainerFloatPanel_AyohaeWallet_TopUp',
                       height: 100,
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center',
                       },
                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height: 65,
                               margin: '0 0 0 0',
                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                               // style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
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

                                        
                                         //badgeText: "2",
                                         html: '<img src="resources/icons/eWalletTopUp01.png" width="30" height="30" alt="Company Name">',
                                     }
                                        
                                     
                               ]
                           },
                           {
                               xtype: 'panel',
                               height:15
                           },
                           {
                               html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Top Up</div>'
                           }
                       ]
                   },
                    {
                        xtype: 'spacer'
                    },

                    /////////scan and pay

                    {
                        xtype: 'container',
                        width: '18%',
                        margin: '-10 0 0 0',
                        id: 'containerFloatPanel_AyohaeWallet_ScanAndPay',
                        name: 'namecontainerFloatPanel_AyohaeWallet_ScanAndPay',
                        height: 100,
                        layout: {
                            type: 'vbox',
                            pack: 'center',
                            align: 'center',
                        },
                        //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                        items: [
                            {
                                xtype: 'container',
                                width: '100%',
                                height: 65,
                                margin: '0 0 0 0',
                                style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center',
                                },
                                items: [
                                      {
                                          height: 30,
                                          width: 30,


                                          //badgeText: "2",
                                          html: '<img src="resources/icons/scanQrCodePurple.png" width="30" height="30" alt="Company Name">',
                                      }


                                ]
                            },
                            {
                                xtype: 'panel',
                                height: 15
                            },
                            {
                                html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Scan & Pay</div>'
                            }
                        ]
                    },


                    ////////////
                   


                    {
                        xtype: 'spacer'
                    },
                   //////////

                   {
                       xtype: 'container',
                       width: '18%',
                       margin:'-10 0 0 0',
                       id: 'containerFloatPanel_AyohaeWallet_Transfer',
                       name: 'namecontainerFloatPanel_AyohaeWallet_Transfer',
                       height: 100,
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center',
                       },
                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height: 65,
                               margin: '0 0 0 0',
                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         height: 30,
                                         width: 30,


                                         //badgeText: "2",
                                         html: '<img src="resources/icons/transferewallet.png" width="30" height="30" alt="Company Name">',
                                     }


                               ]
                           },
                           {
                               xtype: 'panel',
                               height: 15
                           },
                           {
                               html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Transfer</div>'
                           }
                       ]
                   },



                   /////////////////
                   {
                       xtype:'spacer'
                   },
                   ////////eWallet Transaction

                   {
                       xtype: 'container',
                       width: '18%',
                       height: 100,
                       id: 'containerFloatPanel_AyohaeWallet_TransactionHistory',
                       name: 'namecontainerFloatPanel_AyohaeWallet_TransactionHistory',
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center',
                       },
                       //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height: 65,
                               margin: '0 0 0 0',
                               style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                               layout: {
                                   type: 'vbox',
                                   pack: 'center',
                                   align: 'center',
                               },
                               items: [
                                     {
                                         height: 30,
                                         width: 30,


                                         //badgeText: "2",
                                         html: '<img src="resources/icons/eWalletTransaction.png" width="30" height="30" alt="Company Name">',
                                     }


                               ]
                           },
                           {
                               xtype: 'panel',
                               height: 15
                           },
                           {
                               html: '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;float:left;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Transactions</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;text-align:center;margin:-10px 0px 0px 0px;background-color:transparent;color:white">History</div>'
                           }
                       ]
                   },


                   ////////
                   {
                       xtype: 'spacer'
                   },

                ]
            },






            ////////////////
            //{
            //    xtype: 'panel',
            //    height:5
            //},
           
              {
                  xtype: 'container',
                  width: '100%',
                  height: 170,
                  margin: '0 0 0 0',
                  style: 'background-color:rgba(255, 255, 255, 0.3);border-left: 1px none #D0D3D4;border-right: 1px none #D0D3D4;border-bottom: 1px none #D0D3D4;border-top: 1px none #D0D3D4;border-radius: 30px 30px 0px 0px;',
                 
                  layout: {
                      type: 'vbox',
                      pack: 'center',
                      align: 'center',
                  },
                  items: [
                      {
                          xtype: 'container',
                          width: '100%',
                        //  height: 40,
                          layout: {
                              type: 'hbox',
                              pack: 'left',
                              align: 'left',
                          },
                          items: [
                              {
                                  xtype: 'panel',
                                  width:25
                              },
                               {margin:'10 0 0 0',
                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Transaction Summary</div>'
                               },
                          ]
                      },

                       {
                           xtype: 'container',
                           width: '100%',
                           margin: '-17 0 0 0',
                           height: 170,
                           style: 'background-color: transparent',
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
                          width: '43%',
                          height: 75,
                          margin: '-35 0 0 0',
                          style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                              {
                                  width: '91%',
                                  height: 50,
                                  margin: '10 0 0 0',
                                  id:'htmltableFloatPanel_AyohaeWallet_IncomeThisMonth',
                                  html: '<table onclick="FloatPanel_AyohaeWallet_IncomeThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Income This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/income01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM5000</td></tr></thead></table>',
                              }
                          ]
                      },
                      {
                          xtype: 'spacer',
                          width: 15
                      },
                      {
                          xtype: 'container',
                          width: '43%',
                          height: 75,
                          margin: '-35 0 0 0',
                          style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;border-radius: 15px 15px 15px 15px;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                           {
                               width: '91%',
                               height: 50,
                               margin: '10 0 0 0',
                               id: 'htmltableFloatPanel_AyohaeWallet_SpentThisMonth',
                               html: '<table onclick="FloatPanel_AyohaeWallet_SpentThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Spent This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/spent01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM7500</td></tr></thead></table>',
                           }
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
                  width: '100%',
                  height: '100%',
                  margin: '-40 0 0 0',
                  style: 'background-color:white;border-left: 1px none #D0D3D4;border-right: 1px none #D0D3D4;border-bottom: 1px none #D0D3D4;border-top: 1px none #D0D3D4;border-radius: 30px 30px 0px 0px;',

                  layout: {
                      type: 'vbox',
                      pack: 'start',
                      align: 'center',
                  },
                  items: [

                      {
                          xtype: 'container',
                          width: '100%',
                          height: 40,
                          layout: {
                              type: 'hbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                              {
                                  xtype: 'panel',
                                  width:25
                              },
                                 {
                                     html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:black">Transactions</div><br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;float:left;margin:-10px 0px 0px 0px;background-color:transparent;color:black">-A week ago-</div>'
                                 },
                      {
                          xtype: 'spacer'
                      },
                      {
                          html: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistoryShow()" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:blue">View History</div>'
                      },
                         {
                             xtype: 'panel',
                             width: 25
                         },
                          ]
                      },
                   
                   {
                       xtype: 'container',
                       width: '90%',
                       height: '100%',
                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'center',
                       },
                       
                       items: [
                            {
                                xtype: 'container',
                                style: ' background-color: transparent',
                                // margin: '0 0 0 0',
                                height: '100%',
                                width: '100%',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'center'

                                },
                                //scrollable: {
                                //    direction: 'vertical',
                                //    directionLock: true,
                                //    indicators: false
                                //},
                                items: [
                                    {
                                        xtype: 'list',
                                        width: '100%',
                                      // height: '100%',
                                       height: 300,
                                        // flex: 1,
                                        store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore,
                                        // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                        id: 'FloatPanel_AyohaeWallet_TransactionListID',
                                        style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                        mode: 'SINGLE',
                                        // width: '100%',
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
                                       




                                        itemTpl: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ','+ "'" + '{EnterpriseAddress}' + "'" + ','+ "'" + '{EnterpriseTagLine}' + "'" + ',`{CustomerAccNo}`,{ID},`{CreatedDate}`)" class="myContent" style="background-color:white;width:106%;height:70px;">' +

                                       // itemTpl: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})"  class="myContent" style="background-color:white;width:106%;height:70px;">' +


                                        //  '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})"  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedFullAccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                        //  + '<div style="width:96%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{ModifiedTransactionAmount}</div>'
                                        //      + '</div>',




                                             '<table  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedFullAccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                             + '<div style="width:96%;height:20px;margin:-75px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;">{ModifiedTransactionAmount}<br>({AyohaPoint})</div>'
                                                 + '</div>',

                                        //height: '100%',



                                       // itemTpl: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',{ID})"  class="myContent" style="background-color:white;width:106%;height:70px;">' +


                                       //'<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{TransactionReferenceNo}' + "'" + ',' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',{ID})"  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 10px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;">{FullAccountName}</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                       //+ '<div style="width:96%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{ModifiedTransactionAmount}</div>'
                                       //    + '</div>',


                                       

                                        emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',

                                        emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',


                                    },
                                ]
                            },
                            
                       ]
                   },
                 
                  
                   //{
                   //    xtype: 'container',
                   //    width: '95%',
                   //    margin: '-10 0 0 0',
                   //    height: '45%',
                   //    style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 0px 0px 18px #888888;border-radius: 10px 10px 10px 10px;',
                   //}

                  ]

              }
                 
         ]







     });
    return _FloatPanel_AyohaeWallet;





}

function FloatPanel_AyohaeWalletShow() {


    if (GetAyohaUserisUserVerified() == "NO") {
        iseWalletButtonTap = "YES";
        eWalletWarningToBeMembershipFirst();
        return
    }






    AddRoutePages("FloatPanel_AyohaeWalletHide()");
    Ext.Viewport.remove(_FloatPanel_AyohaeWallet);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet());
    this.overlay.show();    
    isFloatPanel_AyohaeWalletOpen = 'Y';
    floatPanel_AyohaeWallet_setHeigtFloatPanel_AyohaeWallet_TransactionListID();
    FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();

    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWalletID').setZIndex(400);
    }

    //   document.getElementById("input-FloatPanel_AyohaeWallet_SearchTxt").addEventListener("keyup", SearchBusinessTypeListOnKeyUp);
    // _DataStore_BusinessTypeList = Ext.StoreMgr.get('BusinessTypeLoadStore').load();
    Ext.getCmp('htmlFloatPanel_AyohaeWalletHeader_AyohaeWalletTxt').setHtml('<div class="odometer" style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">' + globalDashboardeWalletCurrentBalance + '</div>');


    var containerViewnamecontainerFloatPanel_AyohaeWallet_CashOut = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_CashOut]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_CashOut = containerViewnamecontainerFloatPanel_AyohaeWallet_CashOut.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_CashOut.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_CashOutShow();
      }
    );



    var containerViewnamecontainerFloatPanel_AyohaeWallet_Transfer = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_Transfer]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_Transfer = containerViewnamecontainerFloatPanel_AyohaeWallet_Transfer.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_Transfer.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_TransferShow();
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaeWallet_ScanAndPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_ScanAndPay]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_ScanAndPay = containerViewnamecontainerFloatPanel_AyohaeWallet_ScanAndPay.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_ScanAndPay.on('tap',
      function (event, node, options, eOpts) {
         
          FloatPanel_AyohaeWallet_ScanAndPay_UpgradeShow(); 
          Ext.getCmp('mainView').setHidden(true);
          FloatPanel_AyohaeWalletHide();
         

          //comment on 3/11/2022
         // window.QRScanner.prepare(onDone_ScanAndPay);
      }
    );
    
    

    var containerViewnamecontainerFloatPanel_AyohaeWallet_TopUp = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_TopUp]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_TopUp = containerViewnamecontainerFloatPanel_AyohaeWallet_TopUp.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_TopUp.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_TopUp();
        //  FloatPanel_AyohaeWallet_getBillTransaction();
      }
    );


    




    var containerViewnamecontainerFloatPanel_AyohaeWallet_TransactionHistory = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_TransactionHistory]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_TransactionHistory = containerViewnamecontainerFloatPanel_AyohaeWallet_TransactionHistory.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_TransactionHistory.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_TransactionHistoryShow();
      }
    );




    

    var FloatPanel_AyohaeWallet_isUserHasEwalletAccount = localStorage.getItem("isUserHasEwalletAccount");
    if (FloatPanel_AyohaeWallet_isUserHasEwalletAccount == "N") {
        FloatPanel_AyohaeWallet_SettingShow_CreateNewAccount();
        FloatPanel_AyohaeWalletHide();
    } 


    billPaymentGateWayID_randomNo = GenerateRandomNo();
   
  
}




function onDone_ScanAndPay(err, status) {
    if (err) {
        // here we can handle errors and clean up any loose ends.
        console.error(err);
    }
    if (status.authorized) {
        // W00t, you have camera access and the scanner is initialized.
        // QRscanner.show() should feel very fast.

        // window.QRScanner.show();
        window.QRScanner.show(function (status) {
            window.QRScanner.scan(displayContents_ScanAndPay);
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


function displayContents_ScanAndPay(err, text) {
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
        FloatPanel_AyohaeWallet_ScanAndPay_UpgradeHide();
        window.QRScanner.destroy(function (status) {

        });


        FloatPanel_AyohaeWallet_ScanAndPay_Payment_ProcessQRCode(text);
       


    }
}







function FloatPanel_AyohaeWalletHide() {
    if (isFloatPanel_AyohaeWalletOpen == 'Y') {
        _FloatPanel_AyohaeWallet.hide(); isFloatPanel_AyohaeWalletOpen = 'N';
        clearInterval(CheckPaymentGatewayTransaction_timer);
        no = 0;
        RemovePages("FloatPanel_AyohaeWalletHide()");
        //  FloatPanel_RewardStoreHide();
    }

}



var globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent;
var globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome;
function FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore() {



    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();

    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getProxy().setExtraParam('eWalletAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactions');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.load();


    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                var Store = records[0]; // Access only the first record
              //  var planCode = record.get('PaymentPlanCode');
                var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getCount();
                if (count > 0) {
                    //var Store = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getAt(0);
                    globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent = parseFloat(Store.get('ThisMonthSpent'));
                    globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome = parseFloat(Store.get('ThisMonthIncome'));
        
                    Ext.getCmp('htmltableFloatPanel_AyohaeWallet_IncomeThisMonth').setHtml('<table onclick="FloatPanel_AyohaeWallet_IncomeThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Income This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/income01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM' + globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome.toFixed(2) + '</td></tr></thead></table>');
                    Ext.getCmp('htmltableFloatPanel_AyohaeWallet_SpentThisMonth').setHtml('<table onclick="FloatPanel_AyohaeWallet_SpentThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Spent This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/spent01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM' + globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent.toFixed(2) + '</td></tr></thead></table>');
        
                }
        
               
        
                Ext.Viewport.setMasked(false);
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });











    // var task = Ext.create('Ext.util.DelayedTask', function () {
        
    //     var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getCount();
    //     if (count > 0) {
    //         var Store = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore.getAt(0);
    //         globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent = parseFloat(Store.get('ThisMonthSpent'));
    //         globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome = parseFloat(Store.get('ThisMonthIncome'));

    //         Ext.getCmp('htmltableFloatPanel_AyohaeWallet_IncomeThisMonth').setHtml('<table onclick="FloatPanel_AyohaeWallet_IncomeThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Income This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/income01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM' + globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthIncome.toFixed(2) + '</td></tr></thead></table>');
    //         Ext.getCmp('htmltableFloatPanel_AyohaeWallet_SpentThisMonth').setHtml('<table onclick="FloatPanel_AyohaeWallet_SpentThisMonth();" style="border-collapse:collapse;border-spacing:0;width:100%;height:50px;" class="tg"><thead><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">Spent This Month</td><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="resources/icons/spent01.png" width="30" height="30" alt="Company Name"></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal">RM' + globalFloatPanel_AyohaeWallet_AyohaeWalletTransaction_ThisMonthSpent.toFixed(2) + '</td></tr></thead></table>');

    //     }

       

    //     Ext.Viewport.setMasked(false);
    //     //  VIAAdvertismentAutoSlide();

    // });
    // task.delay(500);
}



function FloatPanel_AyohaeWallet_Transaction_StagingViewInvoice(TotalStampEarn,ItemCartCode, MembershipCardCode, OrderNo, TransactionType, AccountName, UserProfileImg,CreatedDate) {

    if (TransactionType == 'AyohaStore_Payment') {
        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode, OrderNo, AccountName, UserProfileImg,CreatedDate);
        return;

    }
    if (TransactionType == 'AyohaStoreOnline_OnlinePayment') {
        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode, OrderNo, AccountName, UserProfileImg,CreatedDate);
        return;

    }
}

function FloatPanel_AyohaeWallet_IncomeThisMonth() {
    FloatPanel_AyohaeWallet_TransactionIncomeSpentShow("Credit");
}

function FloatPanel_AyohaeWallet_SpentThisMonth() {
    FloatPanel_AyohaeWallet_TransactionIncomeSpentShow("Debit");
}

function floatPanel_AyohaeWallet_setHeigtFloatPanel_AyohaeWallet_TransactionListID() {
    var innerHight = parseInt(window.innerHeight) - 406;
    console.log(innerHight)
    Ext.getCmp('FloatPanel_AyohaeWallet_TransactionListID').setHeight(innerHight);
}


var billPaymentGateWayID_randomNo;
var billExternalID;
var FloatPanel_AyohaeWallet_BillCode;
var popUpExternalwindow;
function FloatPanel_AyohaeWallet_TopUp() {
    
  
    var modifiedAccountNo=GetCurrAyohaUserAccountNo().split('-');
    billPaymentGateWayID_randomNo = GenerateRandomNo();
    billExternalID = modifiedAccountNo[2] + '-50528-0133376958-NoEnterprise-' + billPaymentGateWayID_randomNo;
  
    $.ajax({

        url: "https://setkita.com/CRMOBILEAPI/PaymentGateway/PaymentGatewayCreateBill_eWalletTopUp?namBill=Ayoha Membership Bill&name=" + GetAyohaUserAccountNames() + "&hpNo=" + GetCurrentPhoneNumber() + " &billName=Ayoha Membership Fees&billDesc=Ayoha Membership Fees&billEmail=" + GetAyohaUserEmail() + "&billExternalID=" + billExternalID,
      
        success: function (result) {
         
            data = Ext.decode(JSON.stringify(result));
            var json = data.success.replace("[", "").replace("]", "");
            var obj = JSON.parse(json);
            console.log(obj.BillCode);


            var task = Ext.create('Ext.util.DelayedTask', function () {
               
                popUpExternalwindow=window.open('https://dev.toyyibpay.com/' + obj.BillCode, '_system');
                FloatPanel_AyohaeWallet_BillCode = obj.BillCode;
                
                FloatPanel_AyohaeWallet_PaymentGateWayBillMasterInsert(obj.BillCode, "Ayoha_eWallet_TopUp", billExternalID);
                FloatPanel_AyohaeWallet_CheckPaymentGatewayTransaction(billExternalID);
                return false;

               
                
         
            });


            task.delay(500);




            //console.log('After character removed: ', newStr);
            //var obj = JSON.parse(newStr);
            //alert("--->" + obj);


            // console.log(obj.billpaymentSettlement);

        }
    });

       


    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    var objn = {
    //        "namBill": "Ayoha Membership Bill",
    //        "name": GetAyohaUserAccountNames(),
    //        "hpNo": GetCurrentPhoneNumber(),
    //        "billName": "Ayoha membesrhip Fee",
    //        "billDesc": "Ayoha membesrhip Fee",
    //        "billEmail": GetAyohaUserEmail(),
            
    //    };
    //    console.log(objn);
    //    var _value = Ext.Ajax.request({
    //        type: "POST",
    //        url: GetAPIurl() + '/PaymentGateway/PaymentGatewayCreateBill_eWalletTopUp',
    //        dataType: "json",
    //        data: JSON.stringify(objn),
    //        headers: {
    //            "Content-Type": "application/json; charset=utf-8"
    //        },

    //        success: function (result, request) {

    //            //console.log(result.responseText);


    //            data = Ext.decode(result.responseText.trim());
               

    //            var json = data.success.replace("[", "").replace("]", "");
    //            var obj = JSON.parse(json);
    //            console.log(obj.BillCode);
                
    //            window.open('https://dev.toyyibpay.com/' + obj.BillCode, '_system'); return false;
    //            // Ext.Viewport.unmask();

    //        },

    //        failure: function (result, request) {

    //            //Ext.Viewport.unmask();
    //            swalFireFail("Send Failed!" + result.responseText.trim());
    //        }

    //    });
    //});


    //task.delay(500);
}





function FloatPanel_AyohaeWallet_PaymentGateWayBillMasterInsert(billCode, billName, billExternalIDs) {


   


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "billCode": billCode,
            "billName": billName,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": '50528-0133376958-NoEnterprise',
            "billExternalReferenceNo": billExternalIDs,

        };
        console.log(objn);
        var _value = Ext.Ajax.request({
            type: "POST",
            url: GetAPIurl() + '/PaymentGateWayBillTransaction/PaymentGateWayBillMasterInsert',
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

              
            },

            failure: function (result, request) {

                //Ext.Viewport.unmask();
                swalFireFail("Failed!" + result.responseText.trim());
            }

        });
    });


    task.delay(500);
}



function FloatPanel_AyohaeWallet_getBillTransaction() {


    $.ajax({
                
        url: "https://setkita.com/CRMOBILEAPI/PaymentGateway/PaymentGatewayGetBillTransaction?billCode=18y5pena&billpaymentStatus=1",
        success: function (result) {
           
            data = Ext.decode(JSON.stringify(result));
            var json = data.success.replace("[", "").replace("]", "");
            var obj = JSON.parse(json);
            console.log(obj.billName);
            console.log(obj.billDescription);
            console.log(obj.billTo);
            console.log(obj.billEmail);
            console.log(obj.billPhone);
            console.log(obj.billStatus);
            console.log(obj.billpaymentStatus);
            console.log(obj.billpaymentChannel);
            console.log(obj.billpaymentAmount);

            console.log(obj.billpaymentInvoiceNo);
            console.log(obj.billSplitPayment);
            console.log(obj.billSplitPaymentArgs);
            console.log(obj.billpaymentSettlement);
            console.log(obj.billpaymentSettlementDate);
            console.log(obj.SettlementReferenceNo);
            console.log(obj.billPaymentDate);
            console.log(obj.billExternalReferenceNo);
      
      
          


           
            //console.log('After character removed: ', newStr);
            //var obj = JSON.parse(newStr);
            //alert("--->" + obj);

          
                       // console.log(obj.billpaymentSettlement);

        }
    });





    //Ext.Ajax.request({

       
    //    url: 'https://42.1.63.57/CRMOBILEAPI/PaymentGateway/PaymentGatewayGetBillTransaction',
    //    params: {
    //        billCode: "4fvinckq",
    //        billpaymentStatus: "1",
    //    },
    //    success: function (result, request) {
          
    //        alert(result.responseText);
    //    },
    //    failure: function (result, request) {
    //        swalFireFail("Error-->!" + result.responseText)
    //        //   LoadingCustomMsgShow('Error, Contact Admin!', '2');

    //    }
    //});

    //var task = Ext.create('Ext.util.DelayedTask', function () {
    //    var objn = {
    //        "billCode": "4fvinckq",
    //        "billpaymentStatus":"1"
    //    };
    //    console.log(objn);
    //    var _value = Ext.Ajax.request({
    //        type: "POST",
    //        url: GetAPIurl() + '/PaymentGateway/PaymentGatewayGetBillTransaction',
    //        //  dataType: "json",
    //        dataType: 'text',
    //        data: 'billCode="4fvinckq"&billpaymentStatus=""',
    //       // data:({ billCode: "4fvinckq", billpaymentStatus:"" }),
           
    //       // data: JSON.stringify(objn),
    //       // data: 'billCode="4fvinckq"&billpaymentStatus=""',
    //        headers: {
    //            //"Content-Type": "application/json; charset=utf-8"
    //            "Content-Type": "application/x-www-form-urlencoded"
                
    //        },

    //        success: function (result, request) {

    //            //console.log(result.responseText);


    //            data = Ext.decode(result.responseText.trim());


    //            //var json = data.success.replace("[", "").replace("]", "");
    //            //var obj = JSON.parse(json);
    //            console.log(data.success);
    //           // console.log(obj.billpaymentSettlement);

    //           // window.open('https://dev.toyyibpay.com/' + obj.BillCode, '_system'); return false;
    //            // Ext.Viewport.unmask();

    //        },

    //        failure: function (result, request) {

    //            //Ext.Viewport.unmask();
    //            swalFireFail("Send Failed!" + result.responseText.trim());
    //        }

    //    });
    //});


    //task.delay(500);
}



var CheckPaymentGatewayTransaction_timer;
var no = 0;
function FloatPanel_AyohaeWallet_CheckPaymentGatewayTransaction(billExternalID_ext) {

   


    CheckPaymentGatewayTransaction_timer = setInterval(function () {
        no = no + 1;
        if (no == 4) {
           



                var objn = {

                    "eWalletAccNo": GetCurrAyohaUserAccountNo(),
                    "TransactionReferenceNo": billExternalID_ext,
                   
                };
                console.log(objn);
                var _value = Ext.Ajax.request({

                    type: "POST",

                    url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransaction_LoadBy_eWalletAccNo_TransactionReferenceNo',

                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },

                    success: function (result, request) {
                        data = Ext.decode(result.responseText.trim());

                        if (data.success == "true") {

                            if (data.total > 0) {
                              
                               
                                Dashboard_LoadAyohaEwallet();
                                clearInterval(CheckPaymentGatewayTransaction_timer);
                                no = 0;
                                floatPanel_AyohaeWallet_setHeigtFloatPanel_AyohaeWallet_TransactionListID();
                                FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
                                FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                                FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                                if (popUpExternalwindow)
                                    popUpExternalwindow.close();                              
                                    return
                                //localStorage.setItem('AyohaVersion', data.results[0].AyohaVersion);
                                //localStorage.setItem('AyohaUserGroupCode', data.results[0].AyohaUserGroupCode);
                               
                               
                            }
                            if (data.total <= 0) {
                                console.log("No Data!");
                                no = 0;
                            }


                        }
                        else {
                            
                            swalFireLoginFailed("Reading Failed!" + result.responseText.trim());
                           
                        }


                    },

                    failure: function (result, request) {
                       
                        swalFireLoginFailed("Reading Failed!" + result.responseText.trim());

                    }

                });
          





            //var Externalvar_CheckPaymentGatewayTransaction = window.localStorage.getItem('Externalvar_CheckPaymentGatewayTransaction');
            //alert("Externalvar_CheckPaymentGatewayTransactionxxxxx:" + Externalvar_CheckPaymentGatewayTransaction);
            //if (Externalvar_CheckPaymentGatewayTransaction == "Done") {
            //    alert("Done");

            //    localStorage.setItem("Externalvar_CheckPaymentGatewayTransaction", "Idle");
            //    clearInterval(x);
            //    no = 0;
            //    return
            //}



           


        }
        console.log(no);

    }, 1000);
}