Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_TransferConfirm', {

});

var _FloatPanel_AyohaeWallet_TransferConfirm;


var isFloatPanel_AyohaeWallet_TransferConfirmOpen = 'N';











function FloatPanel_AyohaeWallet_TransferConfirm() {

    _FloatPanel_AyohaeWallet_TransferConfirm =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_TransferConfirmID',
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
                             _FloatPanel_AyohaeWallet_TransferConfirm.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_TransferConfirmOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_TransferConfirmHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_TransferConfirm.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_TransferConfirmOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_TransferConfirmHide()");
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
                 items: [

                     {
                         xtype: 'container',
                         width: '100%',
                         height: 70,
                         docked: 'bottom',                        
                         id: 'containerFloatPanel_AyohaeWallet_TransferConfirm_YesNo',
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
                                 html: '<button OnClick="FloatPanel_AyohaeWallet_TransferConfirmHide()" class="buttonCancelTransferMoneyPurple">Cancel</button>'



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
                         margin:'100 0 0 0',
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
                                         id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionType',
                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:white;">Transfer Money Confirmation</div>',

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
                                  hidden:true,
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
                                            id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionTypeIcon',
                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
                                        },
                                  ]
                              },





                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         hidden:true,
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
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionID',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionDate',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountNameLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountName',
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
                                            id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountNameImg',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountNoLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To Account No</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountNo',
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
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Note/Reference</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionNote',
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
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:white;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



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
    return _FloatPanel_AyohaeWallet_TransferConfirm;





}

//function FloatPanel_AyohaeWallet_TransferConfirmShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID)
function FloatPanel_AyohaeWallet_TransferConfirmShow()
{

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_TransferConfirm);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_TransferConfirm());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_TransferConfirmHide()");
    isFloatPanel_AyohaeWallet_TransferConfirmOpen = 'Y';
   
    var AccNo = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser').value;


    var TransferNoted = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_TransferNote').value;
    var TransactionAmount_Creditd = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_AmountTransfer').value;

    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionID').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + ID + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionDate').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + ModifiedCreatedDate + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + globalFloatPanel_AyohaeWallet_Transfer_Name_Credit + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountNameImg').setHtml('<img src="' + globalFloatPanel_AyohaeWallet_Transfer_Photo_Credit + '" width="62px" height="62px" style="border-radius:50%;margin:-25px 0px 0px -15px;">');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + AccNo + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionNote').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">' + TransferNoted + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferConfirm_TransactionAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px;vertical-align:middle">RM' + TransactionAmount_Creditd + '</div>');

    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_TransferConfirmID').setZIndex(410);
    }

}


function FloatPanel_AyohaeWallet_TransferConfirmHide() {
    if (isFloatPanel_AyohaeWallet_TransferConfirmOpen == 'Y') {
        _FloatPanel_AyohaeWallet_TransferConfirm.hide(); isFloatPanel_AyohaeWallet_TransferConfirmOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_TransferConfirmHide()");
        //  FloatPanel_RewardStoreHide();
    }

}


