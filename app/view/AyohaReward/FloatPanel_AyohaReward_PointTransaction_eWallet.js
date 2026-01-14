Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_PointTransaction_eWallet', {

});

var _FloatPanel_AyohaReward_PointTransaction_eWallet;


var isFloatPanel_AyohaReward_PointTransaction_eWalletOpen = 'N';











function FloatPanel_AyohaReward_PointTransaction_eWallet() {

    _FloatPanel_AyohaReward_PointTransaction_eWallet =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaReward_PointTransaction_eWalletID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 230,
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
         style: 'border-bottom:1px none;background-color:white;',
         /// style: 'border-bottom:1px none;background-color:transparent;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        // style: 'background-color:rgba(0, 0, 0, 1);border-radius: 0px 0px 0px 0px;',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaReward_PointTransaction_eWallet.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaReward_PointTransaction_eWalletOpen = 'N';
                             RemovePages("FloatPanel_AyohaReward_PointTransaction_eWalletHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaReward_PointTransaction_eWallet.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaReward_PointTransaction_eWalletOpen = 'N';
                             RemovePages("FloatPanel_AyohaReward_PointTransaction_eWalletHide()");
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
                 //height: 300,
                 height: '100%',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center',
                 },
                 scrollable: {
                     direction: 'vertical',
                     directionLock: true,
                     indicators: false
                 },
                 items: [
                     {

                         xtype: 'container',
                         width: '100%',
                         style: ' background-color: transparent;',
                         id: 'containerFloatPanel_AyohaeWallet_ScanAndPay_PaymentHeader',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center',
                         },
                         docked: 'top',
                         items:
                                [
                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_AyohaReward_PointTransaction_eWalletBack',
                                                  height: 30,
                                                  width: 35,
                                                  margin: '10 0 0 10',
                                                  // iconCls: 'list',
                                                  html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      _FloatPanel_AyohaReward_PointTransaction_eWallet.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'left',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250

                                                      }));
                                                      isFloatPanel_AyohaReward_PointTransaction_eWalletOpen = 'N';
                                                      RemovePages("FloatPanel_AyohaReward_PointTransaction_eWalletHide()");

                                                  }
                                              },
                                              {
                                                  xtype: 'spacer',

                                              },


                                                   {
                                                       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:black;">Ayoha eWallet Payment Details</div>',

                                                   },

                                                   {
                                                       xtype: 'panel',
                                                       width:30
                                                   }

                                ]

                     },

                   
                     {

                         xtype: 'container',
                         width: '100%',
                         margin: '0 0 0 0',
                         hidden:true,
                         //height: 300,
                         height: 70,
                         style: ' background-color: transparent;',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                             //{
                             //    xtype: 'panel',
                             //    width: 25
                             //},
                             {
                                 width: 62,
                                 height: 62,
                                 margin: '0 0 0 0',
                                 html: '<img src="resources/icons/ewallet5.png" width="62px" height="62px">'
                             },
                              {
                                  xtype: 'panel',
                                  width: 7
                              },
                             {

                                 margin: '30 0 0 0',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;height:62;vertical-align:middle">Ayoha e Wallet </div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },
                             //{
                             //    xtype: 'panel',
                             //    width: 40
                             //},
                         ]

                     },




                     {

                         xtype: 'container',
                         width: '100%',
                         //height: 300,
                         hidden:true,
                         height: 20,
                         style: ' background-color:transparent;',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                                {
                                    margin: '0 0 0 0',
                                    id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactionType',
                                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:black;">Ayoha eWallet Payment Details</div>',

                                    // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                },






                         ]

                     },






                     {

                         xtype: 'container',
                         width: '90%',
                         margin: '40 0 0 0',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'container',
                                 width: '85%',
                                 height: 60,
                                 style: ' background-color:	transparent;',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left',
                                 },
                                 items: [
                                      {
                                          xtype: 'panel',
                                          height: 12
                                      },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountNameLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay To</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountName',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">TARMIZI BIN RAHIM</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                                 ]
                             },
                               {
                                   xtype: 'container',
                                   width: '15%',
                                   height: 60,
                                   style: ' background-color:	transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   items: [
                                        {
                                            width: 32,
                                            height: 32,
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountNameImg',
                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
                                        },
                                   ]
                               },


                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletPayDateLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Payment Date</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletPaydate',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">00/00/000</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },



                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountNoLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay To Account No</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountNo',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">0133376958</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Payment No</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletPaymentNo',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Sedekah</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Payment Note/Reference</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactionNote',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Sedekah</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactionAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactionAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },

                    {

                        xtype: 'container',
                        width: '90%',
                        //height: 300,
                        height: 60,
                        style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left',
                        },
                        items: [

                            {
                                xtype: 'panel',
                                height: 12
                            },
                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_MembershipCardUsedLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Membership Card Used</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                          {
                              xtype: 'container',
                              width: '100%',
                              margin: '0 0 0 0',
                              // height: 70,
                              style: ' background-color: transparent;',
                              layout: {
                                  type: 'hbox',
                                  pack: 'left',
                                  align: 'left',
                              },
                              items: [
                                  {
                                      xtype: 'panel',
                                      width: 25
                                  },
                                  {
                                      xtype: 'button',
                                      id: 'btn_FloatPanel_AyohaReward_PointTransaction_eWallet_MembershipCardUsed',
                                      //  badgeText: '1',
                                      margin: '-17 0 0 -30',
                                      height: 50,
                                      width: 50,
                                      html: '<img  src="resources/icons/membershipPurpleThree.png" style="width:20px;height:20px;margin:0px 0px 0px -2px;" alt="Company Name">',
                                      ui: 'plain',
                                      handler: function () {

                                      }
                                  },
                          {
                              xtype: 'button',
                              id: 'btn_FloatPanel_AyohaReward_PointTransaction_eWallet_MembershipCardUsed_Txt',
                              //  badgeText: '1',
                              margin: '-10 0 0 -4',
                              height: 40,
                              // hidden:true,
                              width: 180,
                              html: '<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">Atul Follower</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>',
                              ui: 'plain',
                              handler: function () {

                              }
                          },


                              ]
                          },

                        ]

                    },






                    {

                        xtype: 'container',
                        width: '90%',
                        //height: 300,
                        height: 60,
                        style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left',
                        },
                        items: [

                            {
                                xtype: 'panel',
                                height: 12
                            },
                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_MerchantPointEarnLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Merchant Point Earn</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_MerchantPointEarn',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">1000.00</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                        ]

                    },





                    {

                        xtype: 'container',
                        width: '90%',
                        //height: 300,
                        height: 60,
                        style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left',
                        },
                        items: [

                            {
                                xtype: 'panel',
                                height: 12
                            },
                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_AyohaPointEarnLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Ayoha Point Earn</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_AyohaPointEarn',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">1000.00</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                        ]

                    },





                    {

                        xtype: 'container',
                        width: '90%',
                        //height: 300,
                        height: 60,
                        style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left',
                        },
                        items: [

                            {
                                xtype: 'panel',
                                height: 12
                            },
                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_MembershipDiscountLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Membership Discount(%)</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_MembershipDiscount',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">0.0%</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                        ]

                    },










                    {

                        xtype: 'container',
                        width: '90%',
                        //height: 300,
                        height: 60,
                        style: ' background-color:	transparent;border-bottom:1px none #F0F0F0',
                        layout: {
                            type: 'vbox',
                            pack: 'left',
                            align: 'left',
                        },
                        items: [

                            {
                                xtype: 'panel',
                                height: 12
                            },
                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_PayAmountAfterDiscountLbl',
                                html: '<div class="blink_me" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 18px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay Amount After Disount</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaReward_PointTransaction_eWallet_PayAmountAfterDiscount',
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">1000</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                        ]

                    },

                      {

                          xtype: 'container',
                          width: '100%',
                          //height: 300,
                          //hidden: true,
                          height: 50,
                          style: ' background-color:transparent;',
                          layout: {
                              type: 'vbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                                 






                          ]

                      },













                 ]

             },


                    ///////










         ]







     });
    return _FloatPanel_AyohaReward_PointTransaction_eWallet;





}

//function FloatPanel_AyohaReward_PointTransaction_eWalletShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID)
function FloatPanel_AyohaReward_PointTransaction_eWalletShow(PaymentNo, EnterpriseLogo, PointAmountEquation, PaymentAmount, PaymentNoDisplay, MembershipCardImg, MembershipCardName, PaymentNote, EnterpriseName, EnterpriseAccNo, CreatedDate) {

    Ext.Viewport.remove(_FloatPanel_AyohaReward_PointTransaction_eWallet);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_PointTransaction_eWallet());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_PointTransaction_eWalletHide()");
    isFloatPanel_AyohaReward_PointTransaction_eWalletOpen = 'Y';
    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaeWallet_Payment_PayNow_Validate";



    Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransaction_eWallet_MembershipCardUsed').setHtml('<div><img src="' + MembershipCardImg + '" style="width:40px;height:30px;margin:20px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name"></div>');
    //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
    Ext.getCmp('btn_FloatPanel_AyohaReward_PointTransaction_eWallet_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:10px 0px 0px -4px;color:black;">' + MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-30px 0px 0px 0px;color:black;">RM ' + PointAmountEquation + ' = 0.01 Point</div>');


    //var AccNo = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser').value;


   //alert("FloatPanel_AyohaReward_PointTransaction_eWalletShow")
    var PayAmount = PaymentAmount

    var MerchantPoint = parseFloat(PayAmount * PointAmountEquation);
    var AyohaPoint;

    if (MerchantPoint < 1000) {
        AyohaPoint = MerchantPoint;
    } else {
        AyohaPoint = 1000;
    }





    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountNameImg').setHtml('<img src="' + EnterpriseLogo + '" width="62px" height="62px" style="border-radius:50%;margin:-25px 0px 0px -15px;background-color:white;">');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + EnterpriseAccNo + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactionNote').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + PaymentNote + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactionAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM' + PayAmount + '</div>');

    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletPaydate').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + CreatedDate + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_TransactioneWalletPaymentNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + PaymentNoDisplay + '</div>');


  

    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_MerchantPointEarn').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + MerchantPoint.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_AyohaPointEarn').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + MerchantPoint.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_PointTransaction_eWallet_PayAmountAfterDiscount').setHtml('<div class="blink_me" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + PayAmount + '</div>');

}


function FloatPanel_AyohaReward_PointTransaction_eWalletHide() {
    if (isFloatPanel_AyohaReward_PointTransaction_eWalletOpen == 'Y') {
        _FloatPanel_AyohaReward_PointTransaction_eWallet.hide(); isFloatPanel_AyohaReward_PointTransaction_eWalletOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_PointTransaction_eWalletHide()");
        //  FloatPanel_RewardStoreHide();
    }

}





