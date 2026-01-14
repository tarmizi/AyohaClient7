Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_CashOutConfirm', {

});

var _FloatPanel_AyohaeWallet_CashOutConfirm;


var isFloatPanel_AyohaeWallet_CashOutConfirmOpen = 'N';











function FloatPanel_AyohaeWallet_CashOutConfirm() {

    _FloatPanel_AyohaeWallet_CashOutConfirm =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_CashOutConfirmID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 220,
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
         style: 'background-color:rgba(0, 0, 0, 0.8);border-radius: 0px 0px 0px 0px;',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_CashOutConfirm.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_CashOutConfirmOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_CashOutConfirmHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_CashOutConfirm.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_CashOutConfirmOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_CashOutConfirmHide()");
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
                         height: 70,
                         docked: 'bottom',
                         id: 'containerFloatPanel_AyohaeWallet_CashOutConfirm_YesNo',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center',
                         },
                         items: [
                             {
                                 id: 'htmlFloatPanel_ExitDialogBox_No',
                                 //margin: '-27 0 0 0',
                                 //width: 80,
                                 //height: 30,
                                 margin: '-30 0 0 0',
                                 html: '<button OnClick="FloatPanel_AyohaeWallet_CashOutConfirmHide()" class="buttonCancelTransferMoneyPurple">Cancel</button>'



                             },
                                   {
                                       xtype: 'panel',
                                       width: 20
                                   },
                                   {
                                       id: 'htmlFloatPanel_ExitDialogBox_Yes',
                                       //margin: '-27 0 0 0',
                                       margin: '-30 0 0 0',
                                       html: '<button OnClick="FloatPanel_AyohaeWallet_PasscodeShow()" class="buttonConfirmTransferMoneyPurple">Confirm</button>'



                                   },
                         ]
                     },
                     {

                         xtype: 'container',
                         width: '100%',
                         margin: '10 0 0 0',
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
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [
                              {
                                  xtype: 'container',
                                  width: '5%',
                                  height: 70,
                              },


                             {
                                 xtype: 'container',
                                 width: '80%',
                                 height: 70,
                                 style: ' background-color:	transparent;',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left',
                                 },
                                 items: [
                                     {
                                         margin: '25 0 0 0',
                                         id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionType',
                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:white;">Cash Out Confirmation</div>',

                                         // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                         //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                     },
                                 ]
                             },
                             //{
                             //    xtype: 'container',
                             //    width: '15%',
                             //    height: 70,
                             //},
                              {
                                  xtype: 'container',
                                  width: '20%',
                                  hidden: true,
                                  height: 70,
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
                                            id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionTypeIcon',
                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
                                        },
                                  ]
                              },





                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         hidden: true,
                         //height: 300,
                         height: 60,
                         style: ' background-color:	transparent;border-bottom:1px solid #F0F0F0',
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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Reference ID</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionID',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">123</div>',

                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         hidden: true,
                         height: 60,
                         style: 'background-color:transparent;border-bottom:1px solid #F0F0F0',
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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Date</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionDate',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">12/1/2022 09:55:32 AM</div>',


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
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'container',
                                 width: '75%',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNameLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Bank</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletBankAccountName',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">TARMIZI BIN RAHIM</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                                 ]
                             },
                               {
                                   xtype: 'container',
                                   width: '25%',
                                   height: 60,
                                   style: ' background-color:	transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   items: [
                                        {
                                            width: 62,
                                            height: 32,
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNameImg',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNoLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Account No</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNo',
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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Account Name</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_AccountName',
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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Account Type</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_AccountType',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Personal</div>',




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
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Request CashOut Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_RequestCashOutAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



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
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersentLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">CashOut Charge Percentage</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">1% from RM117243</div>',



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
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeLbl',
                                 html: '<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">CashOut Charge Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeAmount',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalLbl',
                                 html: '<div class="blink_me" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Total CashOut Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },

                    {

                    }
                 ]

             },


                    ///////










         ]







     });
    return _FloatPanel_AyohaeWallet_CashOutConfirm;





}


var FloatPanel_AyohaeWallet_CashOutConfirm_RequestCashOutAmount;
var FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent;
var FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeAmount;
var FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount;

//function FloatPanel_AyohaeWallet_CashOutConfirmShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID)
function FloatPanel_AyohaeWallet_CashOutConfirmShow() {

    var count = parseInt(_DataStore_AyohaeWalletAccountRequestCashOutStore.getCount());

    if (count <= 0) {
        swalFireWarning("Request cash out info Not Valid.Please Update your bank info in profile module");
        return;
    }


    var cAmount = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer").value);


    if (cAmount <= 0.00) {
        swalFireWarning("Cash out Amount Not Valid!");
        return;
    }

    var val = parseFloat(FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount);

    if (val < 150) {
        swalFireWarning("eWallet balance amount must more than RM 150 included charges");
        return;
    }

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_CashOutConfirm);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_CashOutConfirm());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_CashOutConfirmHide()");
    isFloatPanel_AyohaeWallet_CashOutConfirmOpen = 'Y';
    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaeWallet_CashOutConfirm";
    //var AccNo = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser').value;


    //var TransferNoted = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_TransferNote').value;
    //var TransactionAmount_Creditd = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_AmountTransfer').value;


    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + globalFloatPanel_AyohaeWallet_Transfer_Name_Credit + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNameImg').setHtml('<img src="' + globalFloatPanel_AyohaeWallet_Transfer_Photo_Credit + '" width="62px" height="62px" style="border-radius:50%;margin:-25px 0px 0px -15px;">');
    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + AccNo + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionNote').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + TransferNoted + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactionAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM' + TransactionAmount_Creditd + '</div>');




    var Store = _DataStore_AyohaeWalletAccountRequestCashOutStore.getAt(0);

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletBankAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + Store.get('BankName') + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNameImg').setHtml('<img src="' + Store.get('ModifiedBankName') + '" width="80px" height="32px">');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + Store.get('BankAccountNo') + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_AccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + Store.get('BankAccountName') + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_AccountType').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + Store.get('BankAccountType') + '</div>');


    var amountCashOut = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer").value);

    var cashOutCharge = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_charge").value);
    var ttlCashOut = amountCashOut + cashOutCharge;
    var balDashboardeWalletCurrentBalance = parseFloat(globalDashboardeWalletCurrentBalance) - ttlCashOut;
    FloatPanel_AyohaeWallet_CashOutConfirm_RequestCashOutAmount = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer").value);
    FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeAmount = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_charge").value);
    FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount = ttlCashOut.toFixed(2);
    FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent = parseFloat(Store.get('eWalletCashOutChargePersent'));
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_RequestCashOutAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM' + amountCashOut.toFixed(2) + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent.toFixed(2) + '% from RM' + globalDashboardeWalletCurrentBalance + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeAmount').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM' + cashOutCharge.toFixed(2) + '</div>');

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount').setHtml('<div class="blink_me" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM' + ttlCashOut.toFixed(2) + '</div>');
   

    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_CashOutConfirmID').setZIndex(410);
    }

}


function FloatPanel_AyohaeWallet_CashOutConfirmHide() {
    if (isFloatPanel_AyohaeWallet_CashOutConfirmOpen == 'Y') {
        _FloatPanel_AyohaeWallet_CashOutConfirm.hide(); isFloatPanel_AyohaeWallet_CashOutConfirmOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_CashOutConfirmHide()");
        //  FloatPanel_RewardStoreHide();
    }

}





function FloatPanel_AyohaeWallet_CashOutConfirm_Confirm() {
  

  

    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Cash Out eWallet..");
    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "eWalletAccNo": GetCurrAyohaUserAccountNo(),
            "TransactionType": "CashOut",
            "TransactionAmount": FloatPanel_AyohaeWallet_CashOutConfirm_RequestCashOutAmount.toFixed(2),
            "TransactionReferenceNo": "COut-Client" + GetCurrAyohaUserAccountNo() + "-" + GenerateRandomNo(),
            "TransactionStatus": "Pending-Approval",
            "TransactionNote": "NA",
            "CreditDebitType": "Debit",
            "CustomerAccNo": GetCurrAyohaUserAccountNo(),
            "CashOutCharge": FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeAmount.toFixed(2),
            "CashOutPercentageCharge": FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent.toFixed(2),
            "TotalCashOutAmount": FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount,
        };

        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionInsertRequestCashOut',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    Dashboard_LoadAyohaEwallet();

                    swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "Ayoha eWallet Cash Out Amount <b>RM" + FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount + "</b> has been sent for process !", "black", "#9932cc");


                    FloatPanel_AyohaeWallet_CashOutConfirmHide();
                    LoadingPanelHide();
                    FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
                    FloatPanel_AyohaeWallet_CashOutHide();
                    return
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                if (data.success == "false-Email") {

                    Dashboard_LoadAyohaEwallet();
                    //  swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "eWallet Transfer has been process successfully-Notification Email Failed!", "black", "#9932cc");
                    swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "Ayoha eWallet Cash Out Amount <b>RM" + FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargeTotalAmount + "</b> has been sent for process !", "black", "#9932cc");

                    FloatPanel_AyohaeWallet_CashOutConfirmHide();

                    LoadingPanelHide();
                    FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
                    FloatPanel_AyohaeWallet_CashOutHide();
                    return
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                else {

                    swalFireFail("Fail Transfer!--->" + data.success);
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail Transfer !!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}
