Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm', {

});

var _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm;


var isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen = 'N';










function FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm() {

    _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmID',
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
         //style: 'border-bottom:1px solid;background-color:#353839;',
         /// style: 'border-bottom:1px none;background-color:transparent;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: 'background-color:rgba(0, 0, 0, 0.9);border-radius: 0px 0px 0px 0px;',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide()");
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
                                                  id: 'btnFloatPanel_AyohaeWallet_ScanAndPay_PaymentBack',
                                                  height: 30,
                                                  width: 35,
                                                  margin:'10 0 0 10',
                                                  // iconCls: 'list',
                                                  html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                                  ui: 'plain',
                                                  handler: function () {
                                                      _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm.hide(Ext.fx.Animation({
                                                          type: 'slideOut',
                                                          direction: 'left',
                                                          easing: 'cubic-bezier(.7,0,.7,1)',
                                                          duration: 250

                                                      }));
                                                      isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen = 'N';
                                                      RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide()");

                                                  }
                                              },
                                              {
                                                  xtype: 'spacer',

                                              },

                                          
                                                   {
                                                       xtype: 'panel',
                                                       width: 17
                                                   }

                                ]

                     },

                     {
                         xtype: 'container',
                         width: '100%',
                         height: 70,
                         docked: 'bottom',
                        // style: 'border-bottom:1px none;background-color:black;',
                         id: 'containerFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_YesNo',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                             //{
                             //   // id: 'htmlFloatPanel_ExitDialogBox_No',
                             //    //margin: '-27 0 0 0',
                             //    //width: 80,
                             //    //height: 30,
                             //    margin: '0 0 0 0',
                             //    html: '<button OnClick="FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide()" class="buttonCancelTransferMoneyPurple">Cancel</button>'



                             //},
                             //      {
                             //          xtype: 'panel',
                             //          width: 20
                             //      },
                                   {
                                      // id: 'htmlFloatPanel_ExitDialogBox_Yes',
                                       //margin: '-27 0 0 0',
                                       margin: '-5 0 0 0',
                                       html: '<button OnClick="FloatPanel_AyohaeWallet_Payment_PayNow_Validate()" class="buttonConfirmTransferMoneyPurple">Confirm</button>'



                                   },
                         ]
                     },
                     {

                         xtype: 'container',
                         width: '100%',
                         margin: '0 0 0 0',
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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:0px 0px 0px 0px;height:62;vertical-align:middle">Ayoha e Wallet </div>',
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
                         height: 70,
                         style: ' background-color:transparent;',
                         layout: {
                             type: 'vbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                                {
                                    margin: '15 0 0 0',
                                    id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactionType',
                                    html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:white;">Payment Confirmation</div>',

                                    // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                },

                            




                         ]

                     },


                     


                     
                     {

                         xtype: 'container',
                         width: '90%',
                         margin:'20 0 0 0',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountNameLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Pay To</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountName',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">TARMIZI BIN RAHIM</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                            id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountNameImg',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountNoLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Pay To Account No</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountNo',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">0133376958</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Payment Note/Reference</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactionNote',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Sedekah</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactionAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Pay Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactionAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipCardUsedLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Membership Card Used</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                      id: 'btn_FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipCardUsed',
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
                              id: 'btn_FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipCardUsed_Txt',
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
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MerchantPointEarnLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Merchant Point Earn</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MerchantPointEarn',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">1000.00</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_AyohaPointEarnLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Ayoha Point Earn</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_AyohaPointEarn',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">1000.00</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipDiscountLbl',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Membership Discount(%)</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipDiscount',
                                html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">0.0%</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

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
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_PayAmountAfterDiscountLbl',
                                html: '<div class="blink_me" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 18px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Pay Amount After Disount</div>',
                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                            {

                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_PayAmountAfterDiscount',
                                html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">1000</div>',



                                // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                            },

                        ]

                    },













                 ]

             },


                    ///////










         ]







     });
    return _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm;





}

//function FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID)
function FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide()");
    isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen = 'Y';
    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaeWallet_Payment_PayNow_Validate";



    Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipCardUsed').setHtml('<div><img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:40px;height:30px;margin:20px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name"></div>');
    //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
    Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:10px 0px 0px -4px;color:white;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-30px 0px 0px 0px;color:white;">RM ' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + ' = 1 Point</div>');


    //var AccNo = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser').value;


    var PaymentNote = document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_PaymentNote').value;
    var PayAmount = document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value;

    var MerchantPoint = parseFloat(PayAmount * globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint);
    var AyohaPoint;

    if (MerchantPoint < 1000) {
        AyohaPoint = MerchantPoint;
    } else
    {
        AyohaPoint = 1000;
    }

    



    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountNameImg').setHtml('<img src="' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountNameImg + '" width="62px" height="62px" style="border-radius:50%;margin:-25px 0px 0px -15px;background-color:white;">');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactionNote').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + PaymentNote + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_TransactionAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM' + PayAmount + '</div>');

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_MerchantPointEarn').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + MerchantPoint.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_AyohaPointEarn').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + MerchantPoint.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm_PayAmountAfterDiscount').setHtml('<div class="blink_me" style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + PayAmount + '</div>');

    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmID').setZIndex(400);
    }

}


function FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide() {
    if (isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen == 'Y') {
        _FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirm.hide(); isFloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide()");
        //  FloatPanel_RewardStoreHide();
    }

}




function FloatPanel_AyohaeWallet_Payment_PayNow_Validate() {

    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaeWallet_Payment_PayNow_Validate";
   

    var PayAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value);
    // alert(TransactionAmount_Credit);


    if (PayAmount <= 0.00) {
        swalFireWarning_NoPreventDefault('Pay Amount Not Valid!');
        return;
    }
    if (PayAmount) {


       // FloatPanel_AyohaeWallet_TransferConfirmShow();

        FloatPanel_AyohaeWallet_PasscodeShow();
    } else {
        swalFireWarning_NoPreventDefault('Pay Amount Not Valid!');
        return;
    }


   
}





function FloatPanel_AyohaeWallet_Payment_PayNow() {
    var PaymentNote = document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_PaymentNote').value;
    var PayAmount = document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value;

    var MerchantPoint = parseInt(PayAmount * globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint);
    var AyohaPoint;

    if (MerchantPoint < 1000) {
        AyohaPoint = MerchantPoint;
    } else {
        AyohaPoint = 1000;
    }
    if (PaymentNote) {
        PaymentNote = PaymentNote;
    } else {
        PaymentNote = "-";
    }

    var intMerchantPoint = Math.round(MerchantPoint);
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Process Payment..");
    var task = Ext.create('Ext.util.DelayedTask', function () {



      

	  var objn = {


	      "OrderNo": "NotRequired",
	      "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
	      "EnterpriseAccNo": globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo,
	      "GrandTotal": PayAmount,
	      "PaymentAmount": PayAmount,
	      "PaymentMethod": "Scan_eWalletApp",
	      "PaymentMethodCode": "Scan_eWalletApp",
	      "CreatedBy": GetCurrAyohaUserAccountNo(),
	      "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
	      "PaymentStatus": "FullPaid",
	      "NoteToSeller": PaymentNote,




	      "eWalletAccNo_Credit": globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo,
            "TransactionType_Credit": "Scan_eWalletApp_Credit",
            "TransactionAmount_Credit": PayAmount,
            "TransactionReferenceNo_Credit": "TransactionReferenceNo_Credit",
            "TransactionStatus_Credit": "Success",
            "TransactionNote_Credit": PaymentNote,
            "CreditDebitType_Credit": "Credit",
            "CustomerAccNo_Credit": GetCurrAyohaUserAccountNo(),
            "Email_Credit": globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseEmail,

            "eWalletAccNo_Debit": GetCurrAyohaUserAccountNo(),
            "TransactionType_Debit": "Scan_eWalletApp_Debit",
            "TransactionAmount_Debit": PayAmount,
            "TransactionReferenceNo_Debit": "TransactionReferenceNo_Debit",
            "TransactionStatus_Debit": "Success",
            "TransactionNote_Debit": PaymentNote,
            "CreditDebitType_Debit": "Debit",
            "CustomerAccNo_Debit": globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo,
            "Email_Debit": globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_ClientEmail,
            "Points": intMerchantPoint
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionPaymentInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //  FloatPanel_AyohaeWallet_TransferHide();
                    FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmHide();
                    FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide();
                    FloatPanel_AyohaeWalletHide();
                    Dashboard_LoadAyohaEwallet();

                   

                    LoadingPanelHide();
                    FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                else {

                    swalFireFail("Fail!");
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
    task.delay(1000);
}





