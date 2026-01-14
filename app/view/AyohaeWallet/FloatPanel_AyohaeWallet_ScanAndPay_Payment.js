Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_ScanAndPay_Payment', {

});

var _FloatPanel_AyohaeWallet_ScanAndPay_Payment;


var isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen = 'N';











function FloatPanel_AyohaeWallet_ScanAndPay_Payment() {

    _FloatPanel_AyohaeWallet_ScanAndPay_Payment =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_ScanAndPay_PaymentID',
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
        style: 'border-bottom:1px none;background-color:white;',
         /// style: 'border-bottom:1px none;background-color:transparent;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: 'background-color:rgba(0, 0, 0, 0.8);border-radius: 0px 0px 0px 0px;',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_ScanAndPay_Payment.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_ScanAndPay_Payment.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide()");
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
                         margin: '0 0 0 0',
                         height: 60,
                         docked:'bottom',
                         layout: {
                             type: 'hbox',
                             pack: 'center',
                             align: 'center'
                         },
                         style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;',
                         items: [
                              
                                    {
                                       
                                        //margin: '-27 0 0 0',
                                        margin: '0 0 0 0',
                                        html: '<button OnClick="FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmShow_Staging()" class="buttonConfirmTransferMoneyPurple">Pay Now!</button>'



                                    },
                         ]
                     },
                     {
                         xtype: 'container',
                         width: '100%',
                         height: 50,
                         docked: 'top',
                         layout: {
                             type:'vbox'
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
                                                          id: 'btnFloatPanel_AyohaeWallet_TransferBack',
                                                          height: 30,
                                                          width: 35,
                                                          margin:'10 0 0 10',
                                                          // iconCls: 'list',
                                                          html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                          ui: 'plain',
                                                          handler: function () {
                                                              _FloatPanel_AyohaeWallet_ScanAndPay_Payment.hide(Ext.fx.Animation({
                                                                  type: 'slideOut',
                                                                  direction: 'left',
                                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                                  duration: 250

                                                              }));
                                                              isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen = 'N';
                                                              RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide()");

                                                          }
                                                      },
                                                      {
                                                          xtype: 'spacer',

                                                      },
                                                      
                                                        {
                                                            margin: '0 0 0 0',
                                                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:right;margin:-2px 0px 0px 0px;background-color:transparent;color:black">Scanned Ayoha eWallet</div>'
                                                        },

                                                           {
                                                               xtype: 'button',
                                                               id: 'btnFloatPanel_AyohaeWallet_ScanAndPay_PaymentIcon',
                                                               height: 40,
                                                               hidden:true,
                                                               width: 40,
                                                               margin: '0 0 0 0',
                                                               // hidden: true,
                                                               // iconCls: 'list',
                                                               html: '<div ><img src="resources/icons/eWallet5.png" width="30" height="30" alt="Company Name"></div>',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                   FloatPanel_AyohaeWallet_Transfer_SettingShow();
                                                                   //RemovePages(_FloatPanel_AyohaeWallet_Transfer, "isFloatPanel_AyohaeWallet_TransferOpen");
                                                                   //_FloatPanel_AyohaeWallet_Transfer.hide(Ext.fx.Animation({
                                                                   //    type: 'slideOut',
                                                                   //    direction: 'right',
                                                                   //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                   //    duration: 250

                                                                   //}));
                                                                   //isFloatPanel_AyohaeWallet_TransferOpen = 'N';
                                                                   // FloatPanel_RewardStoreHide();
                                                                   //  FloatPanel_RewardStoreHide();

                                                               }
                                                           },
                                                           {
                                                               xtype: 'panel',
                                                               width: 17
                                                           }

                                        ]

                             },
                         ]

                     },
                     
                     {

                         xtype: 'container',
                         width: '100%',
                         margin: '0 0 0 0',
                         height: '100%',
                        // height: 70,
                         style: ' background-color: transparent;',
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center',
                         },
                         items: [
                             {
                                 xtype: 'panel',
                                 height: 20
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
                                          margin: '0 0 0 0',
                                          id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayToTxt',
                                          html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:black;">Pay To:</div>',

                                          // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                          //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                      },
                                 ]
                             },
                              
                               {
                                   xtype: 'panel',
                                   height: 13
                               },

                               {
                                xtype: 'container',
                                width: '80%',
                                margin: '0 0 0 0',
                                height: 1,
                                style: 'background-color:#D3D3D3;',
                               }, {
                                xtype: 'panel',
                                height: 13
                            },
                               {
                                   xtype: 'container',
                                   //  id: 'containerlFloatPanel_AyohaeWallet_ScanAndPay_Payment_MasterNumber',
                                   id: 'containerFloatPanel_AyohaeWallet_ScanAndPay_PaymentMasterInner',
                                   style: ' background-color: transparent',
                                   height: 80,
                                   width: '100%',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [
                                        {
                                            xtype: 'panel',
                                            width: 25
                                        },
                             {
                                 width: 72,
                                 height: 72,
                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayToProfileImg',
                                 html: '<img src="resources/icons/ewallet5.png" width="62px" height="62px">'
                             },
                              {
                                  xtype: 'panel',
                                  width: 5
                              },
                             {

                                 margin: '5 0 0 10',
                                 id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayTo',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 24px;font-weight:bold;color:black;margin:0px 0px 0px 0px;height:62;vertical-align:middle">Fareha Gold Agent Enterprise</div>',
                                
                             },
                             

                           

                                   ]
                               },

                               {
                                xtype: 'container',
                                width: '100%',
                                margin: '0 0 0 0',
                                height: 15,
                                style: 'background-color:transparent;',
                               },

                               {
                                xtype: 'container',
                                width: '80%',
                                margin: '0 0 0 0',
                                height: 1,
                                style: 'background-color:#D3D3D3;',
                               },
                               {
                                   xtype: 'panel',
                                   height: 30
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
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayAmountTxt',
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:black;">Pay Amount(RM):</div>',

                                         
                                          },
                                     ]
                                 },





                                   
                               {
                                   xtype: 'panel',
                                   height: 13
                               },
                               {



                                   // zIndex: -10,
                                   width: '88.5%',
                                   // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                   // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                   // original background text box color----> #f0f2f5
                                 //  html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount"  value="0.00" style="width:100%;height: 60px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 24px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="00.00">',
                                   html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount"  style="width:100%;height: 60px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 24px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="00.00">',
                                 //  html: '<textarea  type="text" id="input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_PaymentNote"   style="width:100%;height: 60px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;" />',
                                       },




                                  {
                                      xtype: 'panel',
                                      height: 23
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
                                               margin: '0 0 0 0',
                                               id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayNoteTxt',
                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:black;">Payment Note/Reference:</div>',


                                           },
                                      ]
                                  },






                               {
                                   xtype: 'panel',
                                   height: 13
                               },
                               {



                                   // zIndex: -10,
                                   width: '88.5%',
                                   // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                   // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                   // original background text box color----> #f0f2f5
                                   html: '<textarea  type="text" id="input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_PaymentNote"   style="width:100%;height: 160px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;" />',
                                  // html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount"  style="width:100%;height: 60px;padding: 5px 5px;box-sizing: border-box;border-top: 1px none #ccc;border-bottom: 1px solid #ccc;border-left: 1px none #ccc;border-right: 1px none #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 24px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;"  placeholder="00.00">',

                               },




                                  {
                                      xtype: 'panel',
                                      height: 23
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
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed',
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle;color:black;">Membership Card Used:</div>',

                                              // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                              //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                          },
                                     ]
                                 },
                               



                                   {
                                       xtype: 'panel',
                                       height: 21
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
                                             id: 'btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed',
                                             //  badgeText: '1',
                                             margin: '-17 0 0 0',
                                             height: 50,
                                             width: 70,
                                             html: '<img  src="resources/icons/membershipPurpleThree.png" style="width:20px;height:20px;margin:0px 0px 0px -2px;" alt="Company Name">',
                                             ui: 'plain',
                                             handler: function () {


                                                 if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Not Select Any Card") {
                                                     FloatPanel_AyohaStore_MembershipCardUsedShow();
                                                 }
                                                 if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Has Select One Card") {
                                                     FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                                 }
                                                 if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "DefaultCard") {
                                                     FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                                 }
                                                 if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
                                                     swalFireWarning("You are Not Member of this merchant or No Membership Card Created!.");
                                                 }
                                             }
                                         },
                                 {
                                     xtype: 'button',
                                     id: 'btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt',
                                     //  badgeText: '1',
                                     margin: '-10 0 0 -4',
                                     height: 40,
                                    // hidden:true,
                                     width: 180,
                                     html: '<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">Atul Follower</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Membership Card Used</div>',
                                     ui: 'plain',
                                     handler: function () {

                                         if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Not Select Any Card") {
                                             FloatPanel_AyohaStore_MembershipCardUsedShow();
                                         }
                                         if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Has Select One Card") {
                                             FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                         }
                                         if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "DefaultCard") {
                                             FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                         }
                                         if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
                                             swalFireWarning("You are Not Member of this merchant or No Membership Card Created!.");
                                         }
                                     }
                                 },

                                   {
                                       xtype: 'button',
                                       id: 'btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsedPointRate_Txt',
                                       //  badgeText: '1',
                                       hidden: true,
                                       margin: '-6 0 0 -4',
                                       height: 30,
                                       width: 130,
                                       html: '<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">RM0.02 = 1Point</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Card Point Rate </div>',
                                       ui: 'plain',
                                       handler: function () {

                                           if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Not Select Any Card") {
                                               FloatPanel_AyohaStore_MembershipCardUsedShow();
                                           }
                                           if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "Has Select One Card") {
                                               FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                           }
                                           if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "DefaultCard") {
                                               FloatPanel_AyohaStore_MembershipCardBeingUsedShow();
                                           }
                                           if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
                                               swalFireWarning("You are Not Member of this merchant or No Membership Card Created!.");
                                           }
                                       }
                                   },
                                     ]
                                 },
                         ]

                     },




                   


                     


                     
                     
                     
                     
                     

                   
                 ]

             },


                    ///////










         ]







     });
    return _FloatPanel_AyohaeWallet_ScanAndPay_Payment;





}

//function FloatPanel_AyohaeWallet_ScanAndPay_PaymentShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID)
function FloatPanel_AyohaeWallet_ScanAndPay_PaymentShow(EnterpriseLogoPath, EnterpriseName) {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_ScanAndPay_Payment);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_ScanAndPay_Payment());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide()");
    isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen = 'Y';


    
    const address = AppState.FloatPanel_QrCodeScanner_Scanned.EnterpriseAddress;

// Replace every comma (and any spaces after it) with <br>
const formatted = address.replace(/,\s*/g, "<br>");



    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayTo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;height:20;vertical-align:middle">' + EnterpriseName + '</div>' +
    '<br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-21px 0px 0px 0px;height:20;vertical-align:middle;border-bottom:1px none #D3D3D3;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;padding:0px 0px 0px 0px">'+AppState.FloatPanel_QrCodeScanner_Scanned.MerchantTagline+'</div>'+
    '<br><div style="width:80%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 8px;font-weight:normal;color:black;margin:-19px 0px 0px 0px;height:20;vertical-align:middle;border-bottom:1px none #D3D3D3;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;padding:0px 0px 0px 0px">'+formatted+'</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_ScanAndPay_Payment_PayToProfileImg').setHtml('<img src="' + EnterpriseLogoPath + '" width="82px" height="82px" style="border-radius:50%;border:1px solid grey;background-color:white;"/> ');
    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_ScanAndPay_PaymentID').setZIndex(400);
    }

}


function FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide() {
    if (isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen == 'Y') {
        _FloatPanel_AyohaeWallet_ScanAndPay_Payment.hide(); isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_ScanAndPay_PaymentHide()");
        //  FloatPanel_RewardStoreHide();
    }

}

var aaa=''
function FloatPanel_AyohaeWallet_ScanAndPay_Payment_SendNum(digit) {
    aaa += digit;

    document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value = aaa;
    document.getElementById("input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount").focus();
}


function FloatPanel_AyohaeWallet_ScanAndPay_Payment_Backspace() {

    // screenView.value = screenView.value.slice(0, -1);

    aaa = document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value;
    aaa = aaa.substring(0, aaa.length - 1);
    document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value = aaa;
    document.getElementById("input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount").focus();
}




var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo;
var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_membershipCardCode;

var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountName;
var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountNameImg;
var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseEmail;
var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_ClientEmail;

function FloatPanel_AyohaeWallet_ScanAndPay_Payment_ProcessQRCode(QrCode) {
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    
    // var EntAccNo = QrCode.split('-');
    // var EnterpriseAccNo = EntAccNo[1] + '-' + EntAccNo[2] + '-' + EntAccNo[3];
    // var StampedCampaignCode = QrCode;
    // var SubscriberAccNo = GetCurrAyohaUserAccountNo();
    // globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo = EnterpriseAccNo;
 
    

    var EnterpriseAccNo = QrCode.substring(0, QrCode.length-3);
    globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo = EnterpriseAccNo;




    _DataStore_MembershipsCheckIsMemberScanAndPayStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsCheckIsMemberScanAndPayStore.getProxy().setExtraParam('CampaignEnterpriseAccNo', EnterpriseAccNo);
    _DataStore_MembershipsCheckIsMemberScanAndPayStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsCheckIsMemberScanAndPay');
   // _DataStore_MembershipsCheckIsMemberScanAndPayStore.load();


    _DataStore_MembershipsCheckIsMemberScanAndPayStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                var count = records.length;

        if (count >0) {

            // var record = records[0]; // Access only the first record
            // var planCode = record.get('PaymentPlanCode');
           
            var modelRecord =records[0];
            var SubscriberAccNo = modelRecord.get('SubscriberAccNo');
            var MembershipApprovalStatus = modelRecord.get('MembershipApprovalStatus');
            var MembershipCardCode = modelRecord.get('MembershipCardCode');
            var AccountName = modelRecord.get('AccountName');
            var PhoneNo = modelRecord.get('PhoneNo');
            var Email = modelRecord.get('Email');
            var HigherPoint = modelRecord.get('HigherPoint');
            var EnterpriseName = modelRecord.get('EnterprisesName');
            var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
            var EnterpriseEmail = modelRecord.get('EnterpriseEmail');
            var PICContactNo = modelRecord.get('PICContactNo');
            globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountName = EnterpriseName;
            globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountNameImg = EnterpriseLogoPath;
            globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseEmail = EnterpriseEmail;
            globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_ClientEmail = Email;
          //  globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_membershipCardCode = MembershipCardCode;



          
          
            FloatPanel_AyohaeWallet_ScanAndPay_PaymentShow(EnterpriseLogoPath, EnterpriseName);
            FloatPanel_AyohaeWallet_ScanAndPay_Payment_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(EnterpriseAccNo);
            return

        } else {

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
                confirmButtonText: 'JOIN',
                footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
            }).then(function (result) {
                if (result.isConfirmed) {
                    localStorage.setItem("MembershipByMethod", "QRCode");
                    // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()


                    FloatPanel_RewardStoreMembershipCardShow_FromQrCode(EnterpriseAccNo, EnterpriseAccNo);
                }
            });
            // FloatPanel_AyohaeWallet_IconShow();
            // FloatPanel_QrCodeScanner_ScanCampaignHide();
        }
        LoadingPanelHide();
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });




















    // var task = Ext.create('Ext.util.DelayedTask', function () {
      
    //     var count = _DataStore_MembershipsCheckIsMemberScanAndPayStore.getCount();

    //     if (count >0) {
    //         var modelRecord = _DataStore_MembershipsCheckIsMemberScanAndPayStore.getAt(0)
    //         var SubscriberAccNo = modelRecord.get('SubscriberAccNo');
    //         var MembershipApprovalStatus = modelRecord.get('MembershipApprovalStatus');
    //         var MembershipCardCode = modelRecord.get('MembershipCardCode');
    //         var AccountName = modelRecord.get('AccountName');
    //         var PhoneNo = modelRecord.get('PhoneNo');
    //         var Email = modelRecord.get('Email');
    //         var HigherPoint = modelRecord.get('HigherPoint');
    //         var EnterpriseName = modelRecord.get('EnterprisesName');
    //         var EnterpriseLogoPath = modelRecord.get('EnterpriseLogoPath');
    //         var EnterpriseEmail = modelRecord.get('EnterpriseEmail');
    //         var PICContactNo = modelRecord.get('PICContactNo');
    //         globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountName = EnterpriseName;
    //         globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_AccountNameImg = EnterpriseLogoPath;
    //         globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseEmail = EnterpriseEmail;
    //         globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_ClientEmail = Email;
    //       //  globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_membershipCardCode = MembershipCardCode;



          
          
    //         FloatPanel_AyohaeWallet_ScanAndPay_PaymentShow(EnterpriseLogoPath, EnterpriseName);
    //         FloatPanel_AyohaeWallet_ScanAndPay_Payment_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(EnterpriseAccNo);
    //         return

    //     } else {

    //         Swal.fire({
    //             title: 'Ayoha Reward v 1.0',
    //             text: "Hi,! You are not participated in this campaign.Press JOIN to get a membership card and join the reward!",
    //             imageUrl: "resources/icons/infoPurple.png",
    //             imageWidth: 400,
    //             imageHeight: 230,
    //             showCloseButton: true,
    //             showCancelButton: false,
    //             //  confirmButtonColor: '#3085d6',
    //             confirmButtonColor: '#9932cc',
    //             cancelButtonColor: '#d33',
    //             confirmButtonText: 'JOIN',
    //             footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
    //         }).then(function (result) {
    //             if (result.isConfirmed) {
    //                 localStorage.setItem("MembershipByMethod", "QRCode");
    //                 // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()


    //                 FloatPanel_RewardStoreMembershipCardShow_FromQrCode(EnterpriseAccNo, EnterpriseAccNo);
    //             }
    //         });
    //         // FloatPanel_AyohaeWallet_IconShow();
    //         // FloatPanel_QrCodeScanner_ScanCampaignHide();
    //     }
    //     LoadingPanelHide();
    // });
    // task.delay(1500);

}





var globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint;

function FloatPanel_AyohaeWallet_ScanAndPay_Payment_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore(EnterpriseAccNo) {
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.getProxy().setExtraParam('ItemCategoryCode', 'firstload');
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByEnterpriseAccNoItemCategory');
  //  _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.load();

  

    _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                var Count = records.length;
                var Store = records[0];
                if (Count > 0) {
                    globalFloatPanelAyohaStore_MembershipCardCount = parseInt(Store.get('AyohaUser_MembershipCardCount'));
                    globalFloatPanelAyohaStore_SaleItemCode = Store.get('SaleItemCode');
                    globalFloatPanelAyohaStore_MembershipCardImage = Store.get('MembershipCardImage');
                    globalFloatPanelAyohaStore_MembershipCardName = Store.get('MembershipCardName');
                    globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount = parseInt(Store.get('AyohaUser_MembershipCardUsedCount'));
                    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = Store.get('MembershipCardCode');
                    globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint = Store.get('MerchantPoint');
        
                   // Ext.getCmp('htmlFloatPanel_AyohaStore_TotalProductCount').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + Count + '</div>');
                    if (globalFloatPanelAyohaStore_MembershipCardCount >= 2 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
                        globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "Not Select Any Card";
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me" src="resources/icons/MembershipCardDetail.png" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        // Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">No Member Card!</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<img  src="resources/icons/MembershipCardDetail.png" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">No Member Card!</div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-30px 0px 0px 0px;color:black;">' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + '</div>');
        
        
                    }
                    if (globalFloatPanelAyohaStore_MembershipCardCount >= 1 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 1) {
                        globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "Has Select One Card";
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        ////FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<div ><img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name"></div>');
                        //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-30px 0px 0px 0px;color:black;">RM ' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + ' = 1 Point</div>');
        
                    }
                    if (globalFloatPanelAyohaStore_MembershipCardCount == 1 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
                        globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "DefaultCard";
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        ////FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<img  src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-30px 0px 0px 0px;color:black;">RM ' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + '= 1 Point</div>');
        
        
                    }
                    if (globalFloatPanelAyohaStore_MembershipCardCount == 0 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
                        globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "NotMember_NoMembershipCard";
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me" src="resources/icons/CancelMembershipCard.png" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">No Card!</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<img  src="resources/icons/MembershipCardDetail.png" style="width:50px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">No Membership Card!</div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:red;">You need a membership card to continue purchasing</div>');
                        Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setWidth(245);
                    }
        
                }
        
               
                LoadingPanelHide();
               
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });








    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var Count = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.getCount();
    //     var Store = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.getAt(0);

    //     if (Count > 0) {
    //         globalFloatPanelAyohaStore_MembershipCardCount = parseInt(Store.get('AyohaUser_MembershipCardCount'));
    //         globalFloatPanelAyohaStore_SaleItemCode = Store.get('SaleItemCode');
    //         globalFloatPanelAyohaStore_MembershipCardImage = Store.get('MembershipCardImage');
    //         globalFloatPanelAyohaStore_MembershipCardName = Store.get('MembershipCardName');
    //         globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount = parseInt(Store.get('AyohaUser_MembershipCardUsedCount'));
    //         globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = Store.get('MembershipCardCode');
    //         globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint = Store.get('MerchantPoint');

    //        // Ext.getCmp('htmlFloatPanel_AyohaStore_TotalProductCount').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + Count + '</div>');
    //         if (globalFloatPanelAyohaStore_MembershipCardCount >= 2 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
    //             globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "Not Select Any Card";
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me" src="resources/icons/MembershipCardDetail.png" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             // Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">No Member Card!</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<img  src="resources/icons/MembershipCardDetail.png" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">No Member Card!</div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-30px 0px 0px 0px;color:black;">' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + '</div>');


    //         }
    //         if (globalFloatPanelAyohaStore_MembershipCardCount >= 1 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 1) {
    //             globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "Has Select One Card";
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             ////FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<div ><img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name"></div>');
    //             //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-30px 0px 0px 0px;color:black;">RM ' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + ' = 1 Point</div>');

    //         }
    //         if (globalFloatPanelAyohaStore_MembershipCardCount == 1 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
    //             globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "DefaultCard";
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             ////FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<img  src="' + globalFloatPanelAyohaStore_MembershipCardImage + '" style="width:60px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             //FloatPanel_AyohaStore_MembershipCardBeingUsed_FloatingShow(globalFloatPanelAyohaStore_MembershipCardImage);
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">' + globalFloatPanelAyohaStore_MembershipCardName + '</div><br><div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-30px 0px 0px 0px;color:black;">RM ' + globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_MerchantPoint + '= 1 Point</div>');


    //         }
    //         if (globalFloatPanelAyohaStore_MembershipCardCount == 0 && globalFloatPanelAyohaStore_AyohaUser_MembershipCardUsedCount == 0) {
    //             globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus = "NotMember_NoMembershipCard";
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed').setHtml('<img class="blink_me" src="resources/icons/CancelMembershipCard.png" style="width:23px;height:20px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             //Ext.getCmp('btn_FloatPanel_AyohaStoreMasterHeader_MembershipCardUsed_Txt').setHtml('<div style="color:black;text-align: left;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;color:black;">No Card!</div><br><div style="color:black;text-align: left;font-size:8px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:black;">Member Card Used</div>');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed').setHtml('<img  src="resources/icons/MembershipCardDetail.png" style="width:50px;height:40px;margin:0px 0px 0px -2px;border-radius:5px 5px 5px 5px;" alt="Company Name">');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setHtml('<div  style="color:black;text-align: left;font-size:12px;width:100%;font-weight:bold;margin:-8px 0px 0px 0px;color:black;">No Membership Card!</div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;font-weight:normal;margin:-34px 0px 0px 0px;color:red;">You need a membership card to continue purchasing</div>');
    //             Ext.getCmp('btn_FloatPanel_AyohaeWallet_ScanAndPay_Payment_MembershipCardUsed_Txt').setWidth(245);
    //         }

    //     }

       
    //     LoadingPanelHide();
    // });
    // task.delay(1000);


    //Ext.Viewport.setMasked(false);
}



function FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmShow_Staging() {

    var PayAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaeWallet_ScanAndPay_Payment_Amount').value);
    // alert(TransactionAmount_Credit);





    if (PayAmount <= 0.00) {
        swalFireWarning_NoPreventDefault('Pay Amount Not Valid!');
        return;
    }
    if (PayAmount) {


        FloatPanel_AyohaeWallet_ScanAndPay_PaymentConfirmShow();

        //FloatPanel_AyohaeWallet_PasscodeShow();
    } else {
        swalFireWarning_NoPreventDefault('Pay Amount Not Valid!');
        return;
    }
}