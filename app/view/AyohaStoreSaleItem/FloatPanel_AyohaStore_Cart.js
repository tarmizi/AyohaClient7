Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_Cart', {
  
});





var _FloatPanel_AyohaStore_Cart;


var isFloatPanel_AyohaStore_CartOpen = 'N';

function FloatPanel_AyohaStore_Cart() {

    _FloatPanel_AyohaStore_Cart =
          Ext.create('Ext.Container', {
              requires: [
         'Ext.util.DelayedTask',
              ],
              xtype: 'container',
              height: '100%',
              // height: 615,
              width: 310,
              id: 'FloatPanel_AyohaStore_CartID',
              zIndex: 310,
              // centered: true,
              right: -1,
              //top:32,
              modal: true,
              hideOnMaskTap: true,
              layout: {
                  type: 'fit'
              },
              showAnimation: {
                  type: 'slideIn',
                  direction: 'left',
                  duration: 150,
                  //easing: 'ease-in'
              },
              hideAnimation: {
                  //type: 'reveal',
                  //duration: 250,
                  type: 'slideOut',

                  direction: 'right',
                  duration: 150
              },
              style: 'background-color:white;',
              listeners: {
                  initialize: function (c) {
                      this.element.on({
                          swipe: function (e, node, options) {
                              if (e.direction == "right") {
                                  FloatPanel_AyohaStore_CartHide();
                                  //  alert("Hey! I swipe left");
                                  //Ext.getCmp('tabpanelTrackingOverViewMapPointInfoTblManualTrack').setActiveItem(2);
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderMovement').setHtml("<font size=2>Tracking</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderClaim').setHtml("<font size=2>Claim</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderPurpose').setHtml("<font size=3><u><b>Purpose</b></u></font>");

                              } else {
                                //  FloatPanel_AyohaStore_CartHide();



                              }
                          }
                      });
                  }
              },

            

                        items: [
                   



{

    xtype: 'container',
    width: '100%',
    height: 40,
    docked: 'top',
    hidden:true,
    id: 'containerFloatPanel_AyohaStore_CartHeader_FromAyohaCart',
    style: 'background-color:white;border-bottom:1px solid #f0f2f5;box-shadow: 0px 15px 10px -25px rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19);',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    // hidden:true,
    items:
           [{
               xtype: 'panel',
               width: 5
           },
              
                {
                    margin: '0 0 0 0',

                    width: 24,
                    height: 24,
                    id: 'htmlFloatPanel_AyohaStore_CartHeader_FromAyohaCart_EnterpriseLogo',
                    html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">',
                    // ui:'plain'
                },
                {
                    xtype: 'panel',
                    width:2
                },
                 {
                     margin: '15 0 0 0',
                     id: 'htmlFloatPanel_AyohaStore_CartHeader_FromAyohaCart_EnterpriseName',
                     html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >Shopping Cart</div>'
                 },

                 {
                     xtype:'spacer',
                 },
                  {
                      margin: '15 0 0 0',
                      //id: 'htmlFloatPanel_AyohaStore_CartHeader_FromAyohaCart_EnterpriseName',
                      html: '<div style="background: transparent;height:30px;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Shopping Cart</div>'
                  },
                  {
                      margin: '0 0 0 0',

                      width: 20,
                      height: 20,
                      html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:20px;height:20px;">',
                      // ui:'plain'
                  },
                  {
                      xtype: 'panel',
                      width: 5
                  },

           ]

},

{

    xtype: 'container',
    width: '100%',
    height: 40,
    docked: 'top',
    id: 'containerFloatPanel_AyohaStore_CartHeader',
    style: 'background-color:white;border-bottom:1px solid #f0f2f5;box-shadow: 0px 15px 10px -25px rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19);',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    // hidden:true,
    items:
           [

                {
                    margin: '0 0 0 0',

                    width: 24,
                    height: 24,
                    html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">',
                    // ui:'plain'
                },

                  {
                      margin: '15 0 0 0',
                      id: 'htmlFloatPanel_AyohaStore_Cart_Title',
                      html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >Shopping Cart</div>'
                  },
                       
           ]

},
 //style: 'background-color:#f0f2f5;',
{
    xtype: 'container',
    width: '100%',
    docked: 'bottom',
    margin: '0 0 0 0',
    height: 43,
    style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
   // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid black;',
   // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #f0f2f5;box-shadow:1px 0px 3px 3px #EEEDED ;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center'

    },
    items: [
        {
            xtype: 'container',
            width: '100%',
            margin: '-2 0 0 0',
            height: 20,
            hidden: true,
        style: 'background-color:transparent',
           // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:2px solid #f0f2f5;',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'

            },
            items: [
                {
                xtype: 'panel',
                width: 12
            },
                   {
                       xtype: 'button',
                       /// hidden: true,
                       width: 100,
                       height: 20,
                       margin: '0 0 0 0',
                       ui: 'plain',
                       id: 'btnFloatPanel_AyohaStore_Cart_MakePayemnt',
                       html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Make Payment</u></div>',
                       handler: function () {
                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_ShippingAddressMaster').setHidden(true);
                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_NoteToSellerMaster').setHidden(true);
                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_MakePayment').setHidden(false);
                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderWhatsApp').setHidden(true);
                           Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderHistory').setHidden(true);
                           Ext.getCmp('btnFloatPanel_AyohaStore_Cart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order Only</div>');
                           Ext.getCmp('btnFloatPanel_AyohaStore_Cart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Make Payment</u></div>');
                           Ext.getCmp('btnFloatPanel_AyohaStore_Cart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>');

                       }
                   },
                    {
                        xtype: 'spacer',
                    },
              {
                  xtype: 'button',
                  width: 100,
                  height: 20,
                  margin: '0 0 0 0',
                  ui: 'plain',
                  id: 'btnFloatPanel_AyohaStore_Cart_Order',
                  html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order Only</div>',
                  handler: function () {

                      Ext.getCmp('containerFloatPanel_AyohaStore_Cart_ShippingAddressMaster').setHidden(false);
                      Ext.getCmp('containerFloatPanel_AyohaStore_Cart_NoteToSellerMaster').setHidden(false);

                      Ext.getCmp('containerFloatPanel_AyohaStore_Cart_MakePayment').setHidden(true);
                      Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderWhatsApp').setHidden(false);
                      Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderHistory').setHidden(true);
                      Ext.getCmp('btnFloatPanel_AyohaStore_Cart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order Only</u></div>');
                      Ext.getCmp('btnFloatPanel_AyohaStore_Cart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>');
                      Ext.getCmp('btnFloatPanel_AyohaStore_Cart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order History</u></div>');

                  }
              },

                     
                    
                      {
                          xtype: 'button',
                          width: 100,
                          height: 20,
                          margin: '0 0 0 -34',
                          ui: 'plain',
                          hidden: true,
                          id: 'btnFloatPanel_AyohaStore_Cart_OrderHistory',
                          html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>',
                          handler: function () {
                              Ext.getCmp('containerFloatPanel_AyohaStore_Cart_MakePayment').setHidden(true);
                              Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderWhatsApp').setHidden(true);
                              Ext.getCmp('containerFloatPanel_AyohaStore_Cart_OrderHistory').setHidden(false);
                              Ext.getCmp('btnFloatPanel_AyohaStore_Cart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order Only</div>');
                              Ext.getCmp('btnFloatPanel_AyohaStore_Cart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>');
                              Ext.getCmp('btnFloatPanel_AyohaStore_Cart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order History</u></div>');

                          }
                      },
                      {
                          xtype: 'panel',
                          width: 6
                      },

            ]
        },
        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaStore_Cart_OrderWhatsApp',
            name: 'namecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp',
            width: '60%',
            height: 40,
            margin: '0 0 0 0',
            hidden:true,

            // style: "background-color: transparent",
            //style: "background-color: #F35B57;",
            //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background: #075e54;border-radius: 20px 20px 20px 20px;',
            style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
                {
                    margin: '0 0 0 0',

                    width: 24,
                    height: 24,
                    //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                    html: '<img src="resources/icons/sendorderwhite01.png" alt="Image" style="width:24px;height:24px;">',

                    
                    // ui:'plain'
                },

{
    margin: '12 0 0 5',
    id: 'htmlFloatPanel_AyohaStore_Cart_WhatsAppText',
    html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:white;text-align:center;" >Send My Order</div>'
},
            ]
        },
        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaStore_Cart_OrderHistory',
            width: '100%',
            height: 40,
            margin: '0 0 0 0',
            hidden: true,
            style: "background-color: transparent",
            //style: "background-color: #F35B57;",
            // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background: #075e54;border-radius: 20px 20px 20px 20px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center'

            },
            items: [
            
               {
                   xtype: 'container',
                   id: 'containerFloatPanel_AyohaStore_Cart_OrderHistory_Status',
                   width: '100%',
                   height: 35,
                   margin: '0 0 0 0',
                   style: 'border-right:1px none grey;border-left:1px none grey;border-bottom:1px none grey;border-top:1px none grey ;background: white;',
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [
                        {
                            //  width: 150,

                            id: 'htmlFloatPanel_AyohaStore_Cart_Status',
                            html: '<input type="text" id="input-htmlFloatPanel_AyohaStore_Cart_Status"  placeHolder="Status" readOnly  style="border-radius: 0px;border-bottom: 1px solid purple;padding: 2px; width: 80%;height: 20px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/>'
                        },
{

    width: 26,
    height: 26,
    margin: '6 0 0 -40',
    html: '<img src="resources/icons/dropdown01.png" width="16" height="16" alt="Company Name">',
    xtype: 'button',
    ui: 'plain',
    handler: function () {

        FloatPanel_AyohaStore_CartStatusListShow();
    }
},

                   ]
               },
               {
                   xtype: 'panel',
                   width: 5
               },
            ]
        },

        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaStore_Cart_MakePayment',
            width: '100%',
            height: 45,
            margin: '0 0 0 0',
            //hidden: true,
            style: "background-color: transparent",
            //style: "background-color: #F35B57;",
            // style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background: #075e54;border-radius: 20px 20px 20px 20px;',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left'

            },
            items: [
                //{
                //    xtype: 'panel',
                //    width: 5
                //},
//                {
//                    xtype: 'container',
//                    id: 'containerFloatPanel_AyohaStore_Cart_MakePayment_OnlineBanking',
//                    width: '41%',
//                    height: 35,
//                    margin: '0 0 0 0',
//                    // hidden: true,
//                    // style: "background-color: transparent",
//                    //style: "background-color: #F35B57;",
//                    style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
//                    layout: {
//                        type: 'hbox',
//                        pack: 'center',
//                        align: 'center'

//                    },
//                    items: [

//                         {
//                             margin: '0 0 0 0',

//                             width: 24,
//                             height: 24,
//                             html: '<img src="resources/icons/onlineBanking.png" alt="Image" style="width:24px;height:24px;">',
//                             // ui:'plain'
//                         },

//{
//    margin: '12 0 0 5',
//    id: 'htmlFloatPanel_AyohaStore_Cart_onlineBankingText',
//    html: '<div style="background: transparent;height:30px;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Online Banking</div>'
//},
//                    ]
//                },
                //{
                //    xtype: 'panel',
                //    width: 10
                //},
               {
                   xtype: 'container',
                   id: 'containerFloatPanel_AyohaStore_Cart_MakePayment_AyohaEwallet',
                   width: '100%',
                   height: 50,
                   margin: '-5 0 0 0',
                   // hidden: true,
                   style: "background-color: transparent",
                   //style: "background-color: #F35B57;",
                  // style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [
                      

                        {
                            id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwallet_PayNow',
                            //margin: '-27 0 0 0',
                            margin: '0 0 0 -2',
                            html: '<button OnClick="FloatPanel_AyohaStore_Cart_CheckOutStaging()" class="buttonCheckOut">Check Out</button>'



                        },
                        // {
                        //     xtype: 'spacer',
                        //     width: 5
                        // },
                        // {
                        //     xtype: 'container',
                        //     width: 2,
                        //     height: 30,
                        //     style: "background-color: #f0f2f5;",
                        // },
                        //  {
                        //      xtype: 'spacer',
                        //      width: 5
                        //  },
                        //{
                        //    margin: '0 0 0 0',

                        //    width: 30,
                        //    height: 30,

                        //    html: '<img src="resources/icons/ayohaewallet01.png" alt="Image" style="width:30px;height:30px;">',
                        //    // ui:'plain'
                        //},





                        //{
                        //    xtype: 'container',
                        //   // id: 'containerFloatPanel_AyohaStore_Cart_MakePayment_AyohaEwallet',
                        //    width: 100,
                        //    height: 45,
                        //    margin: '0 0 0 0',
                        //    // hidden: true,
                        //    style: "background-color: transparent",
                        //    //style: "background-color: #F35B57;",
                        //    // style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
                        //    layout: {
                        //        type: 'vbox',
                        //        pack: 'start',
                        //        align: 'left'

                        //    },
                        //    items: [
                        //        {
                        //            margin: '10 0 0 5',
                        //            id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwalletTextAmount',
                        //            html: '<div style="background: transparent;font-size: 16px;font-weight:bold;color:black;text-align:center;" >RM0.00</div>'
                        //        },
                        //        {
                        //            margin: '-3 0 0 5',
                        //            id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwalletText',
                        //            html: '<div style="background: transparent;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Ayoha e-Wallet</div>'
                        //        },
                        //    ]
                        //},
                         

                   ]
               },
               {
                   xtype: 'panel',
                   width: 5
               },
            ]
        }
    ]
},

{
    xtype: 'container',
    id: 'containerFloatPanel_AyohaStore_CartItem_Outter',
    style: ' background-color: white',
    margin: '2 0 0 0',
    height: '100%',
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    scrollable: {
        direction: 'vertical',
        directionLock: true,
        indicators:false,
    },
    items: [
        {
            xtype: 'container',
            id: 'containerFloatPanel_AyohaStore_CartItem',
            style: ' background-color: transparent',
           // margin: '0 0 0 0',
            height: 968,
            width: '100%',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'left'

            },
            //scrollable: {
            //    direction: 'vertical',
            //    directionLock: true
            //},
            items: [

                {


                    xtype: 'list',
                    // height: '64%',
                    // height: '100%',
                    // height: 200,
                    //   flex: 2,
                    store: _DataStore_AyohaStoreCartLoadCartAyohaStore,
                    style: 'border-bottom:1px none grey;background-color:white;',
                    id: 'List_FloatPanel_AyohaStore_CartList',
                    mode: 'SINGLE',
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
                    //  grouped: true,
                    // disableSelection: true,
                    itemTpl: '<div style="width:110%;text-align:right;margin:-8px 0px 0px -3px;"><button OnClick="FloatPanel_AyohaStore_Cart_Delete({ID})" class="buttonsHtmlBgDeleteNotificationListTransparent" style="margin:-10px 0px 0px 0px;z-index:100;"><img src="resources/icons/xsigncircle04.png" style="width: 16px; height: 16px; margin:-10px 0px 0px -10px;z-index:100;" /></button></div>' +
                   '<div class="myContent" style="background-color:white;width:112%;height:99px; margin:-30px 0px 0px -16px;">' +
                                                                     ///ori  '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:158px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 124.52px; height: 156px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{ItemName}</div><br><div onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" style="font-family:Arial, sans-serif;font-size:17px;font-weight:bold;word-break:normal;margin:-17px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;">RM{ItemPrice}</div><br> <div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0.05 Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*0.05 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;height:45px" onclick="FloatPanel_AyohaStore_DetailsShow({ID});">{ItemDescriptions}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;" onclick="FloatPanel_AyohaStore_DetailsShow({ID});"><input type="number" value="1" style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_RewardStore_OpenStore()" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div></th></tr></thead></table>'
                                                                       // '<div style="width:100%;text-align:right;margin:-10px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaStore_Cart_DeleteItem({ID})" class="buttonsHtmlBgDeleteNotificationListTransparent"><img src="resources/icons/xsigncircle04.png" style="width: 16px; height: 16px; margin:0px 0px 0px -10px;z-index:100;" /></button></div><br>'

                                                                      //ori + '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:-50px 0px 0px -13px;height:95px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 100px; height: 100px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:5px 0px 0px 0px;height:30px;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;"><button OnClick="FloatPanel_RewardStore_AddToCart_Minus() class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Qty{ID}" value="1" style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 22px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD() class="buttonAddToCartSign">+</button> X RM{ItemPrice}</div><br>{PointlabelTemp}</th></tr></thead></table>'
                                                                      // + '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:-50px 0px 0px -13px;height:95px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});" src="{ItemCoverImg}" style="width: 100px; height: 100px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:90%;" onclick="FloatPanel_AyohaStore_SaleItem_Detail({ID});">{ItemName}</div>{PointlabelTemp}<br><div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;"><button OnClick="FloatPanel_RewardStore_AddToCart_Minus() class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Qty{ID}" value="1" style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 22px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD() class="buttonAddToCartSign">+</button> X RM{ItemPrice}</div></th></tr></thead></table>'


                                                                       '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px solid #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img  src="{ItemCoverImg}" style="width: 95px; height: 113px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;" /></th><th style="background-color:transparent;border-bottom:2px solid #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:90%;"><u>{RowNumber}).{ItemName}</u></div>{Pointlabel}   <br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px;">{ModifiedItemDescriptions}</div>{OrderSentCreatedDate}</th></tr></thead></table>'


                                                                     + '</div>'
                    + '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_MINUS({StampRuleAmount},{ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{MerchantSumStamp}' + "'" + ')"  class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Cart_Qty{ID}" value={ItemQuantity} style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 23px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD({StampRuleAmount},{ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{MerchantSumStamp}' + "'" + ')"  class="buttonAddToCartSign">+</button> X RM{ModifiedItemPrice}</div>',


                    //  + '{ButtonBottomHistoryStatus}',
                    //+ '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonAyohaRedemptionHistoryCancel" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow({ID})">Cancel</button>&nbsp;&nbsp;&nbsp;<button class="buttonAyohaRedemptionHistoryStatus" onClick="FloatPanel_AyohaPointRedemption_RedeemHistoryLogShow({ID})">View Redeem Status Log</button></div>',
                    emptyText: '<div class="myContent">No Cart Item</div>',
                    width: '100%',
                   height: 468,
                    //height: '70%',

                    // listeners: {


                    //     itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                    //     },

                    //     itemsingletap: function (dataview, index, target, record, e, eOpts) {

                    //     }
                    // }






                },



                {
                    xtype: 'container',
                    id: 'containerFloatPanel_AyohaStore_CartItemBottom',
                    style: ' background-color: transparent',
                    margin: '0 0 0 0',
                    // height: '30%',
                    height: 200,
                    width: '100%',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'

                    },
                    //scrollable: {
                    //    direction: 'vertical',
                    //    directionLock: true
                    //},
                    items: [



                        ////////////////

                        {
                            xtype: 'container',
                            width: '100%',
                            margin: '-3 0 0 0',
                            height: 1,
                            style: 'background-color:transparent;',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'

                            },
                            items: [
                                 {
                                     xtype: 'container',
                                     width: '90%',
                                     margin: '3 0 0 0',
                                     height: 2,
                                     //style: 'background-color:#f0f2f5;',
                                     style: 'background-color:black;',
                                 },
                            ]
                        },


                {
                    xtype: 'container',
                    width: '100%',
                    margin: '8 0 0 0',
                    height: 18,
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'

                    },
                    items: [

                        {
                            xtype: 'container',
                            width: '80%',
                            // height: 30,
                            layout: {
                                type: 'hbox',
                                pack: 'right',
                                align: 'center'

                            },
                            items: [
                                 {
                                     html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Quantity:</div>'
                                 }
                            ]
                        },
                         {
                             xtype: 'container',
                             width: '20%',
                             // height: 30,
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'center'

                             },
                             items: [
                               {
                                   margin: '0 0 0 5',
                                   id: 'htmlFloatPanel_AyohaStore_Cart_TotalQuantity',
                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>'
                               }
                             ]
                         },
                    ]
                },
                /////

                {
                    xtype: 'container',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: 50,
                    hidden:true,
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'left'

                    },
                    items: [

                        {
                            xtype: 'container',
                            width: '100%',
                            // height: 30,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'left'

                            },
                            items: [
                                 {
                                     margin: '0 0 0 10',
                                     html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:Left;color:Red;">*Delivery Type:</div>'
                                 },
                                 {
                                     xtype: 'container',
                                     width: '100%',
                                     // height: 30,
                                     layout: {
                                         type: 'hbox',
                                         pack: 'left',
                                         align: 'center'

                                     },
                                     items: [

   {
       xtype: 'panel',
       width: 11
   },
     {
         id: 'htmlFloatPanel_AyohaStore_Cart_DeliveryChargeType',
         margin: '0 0 0 0',
         hidden: true,
         // zIndex: -10,
         width: '90%',
         // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
         // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
         html: '<input type="text" id="input-FloatPanel_AyohaStore_Cart_DeliveryChargeType"  onClick="FloatPanel_AyohaStore_Cart_DeliveryChargeTypeOpen()" readOnly style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Delivery ---">',
     },



{
    width: 24,
    height: 24,
    margin: '0 0 0 -25',
    hidden:true,
    id: 'htmlFloatPanel_AyohaStore_Cart_DeliveryChargeTypeIcon',
    html: '<img src="resources/icons/dropdown01.png" width="24" height="24" alt="Company Name">',
},
       {
           xtype: 'panel',
           width: 11
       },
                                     ]
                                 },
                            ]
                        },

                    ]
                },

                ///
                {
                    xtype: 'container',
                    width: '100%',
                    hidden:true,
                    height: 18,
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'

                    },
                    items: [

                        {
                            xtype: 'container',
                            width: '80%',
                            // height: 30,
                            layout: {
                                type: 'hbox',
                                pack: 'right',
                                align: 'center'

                            },
                            items: [
                                 {

                                     html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Delivery Charge(RM):</div>'
                                 }
                            ]
                        },
                         {
                             xtype: 'container',
                             width: '20%',
                             // height: 30,
                             layout: {
                                 type: 'hbox',
                                 pack: 'left',
                                 align: 'center'

                             },
                             items: [
                               {
                                   margin: '0 0 0 5',
                                   id: 'htmlFloatPanel_AyohaStore_Cart_Delivery',
                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                               }
                             ]
                         },
                    ]
                },

                          

                               {
                                   xtype: 'container',
                                   width: '100%',
                                   height: 18,
                                   id: 'containerFloatPanel_AyohaStore_Cart_VoucherCount',
                                   hidden:true,
                                   layout: {
                                       type: 'hbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [

                                       {
                                           xtype: 'container',
                                           width: '80%',
                                           // height: 30,
                                           layout: {
                                               type: 'hbox',
                                               pack: 'right',
                                               align: 'center'

                                           },
                                           items: [
                                                {
                                                    id: 'htmlFloatPanel_AyohaStore_Cart_VoucherCount',
                                                    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Voucher Discount(RM):</div>'
                                                }
                                           ]
                                       },
                                        {
                                            xtype: 'container',
                                            width: '20%',
                                            // height: 30,
                                            layout: {
                                                type: 'hbox',
                                                pack: 'left',
                                                align: 'center'

                                            },
                                            items: [
                                              {
                                                  margin: '0 0 0 5',
                                                  id: 'htmlFloatPanel_AyohaStore_Cart_VoucherDiscount',
                                                  html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                                              }
                                            ]
                                        },
                                   ]
                               },

                ////

               {
                   xtype: 'container',
                   width: '100%',
                   height: 18,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [

                       {
                           xtype: 'container',
                           width: '80%',
                           // height: 30,
                           layout: {
                               type: 'hbox',
                               pack: 'right',
                               align: 'center'

                           },
                           items: [
                                {
                                    id: 'htmlFloatPanel_AyohaStore_Cart_SubTotalTxt',
                                    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">SubTotal(RM):</div>'
                                }
                           ]
                       },
                        {
                            xtype: 'container',
                            width: '20%',
                            // height: 30,
                            layout: {
                                type: 'hbox',
                                pack: 'left',
                                align: 'center'

                            },
                            items: [
                              {
                                  margin: '0 0 0 5',
                                  id: 'htmlFloatPanel_AyohaStore_Cart_SubTotal',
                                  html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                              }
                            ]
                        },
                   ]
               },
               {
                xtype: 'container',
                width: '100%',
                height: 18,
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [

                    {
                        xtype: 'container',
                        width: '80%',
                        // height: 30,
                        layout: {
                            type: 'hbox',
                            pack: 'right',
                            align: 'center'

                        },
                        items: [
                             {
                                 id: 'htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaignPersent',
                                 html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">*(NA)Membership Discount(RM):</div>'
                             }
                        ]
                    },
                     {
                         xtype: 'container',
                         width: '20%',
                         // height: 30,
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'center'

                         },
                         items: [
                           {
                               margin: '0 0 0 5',
                               id: 'htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaign',
                               html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                           }
                         ]
                     },
                ]
            },
                                                  {
                                                      xtype: 'container',
                                                      width: '100%',
                                                      margin: '-3 0 0 0',
                                                      height: 1,
                                                      style: 'background-color:transparent;',
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'center',
                                                          align: 'right'

                                                      },
                                                      items: [
                                                           {
                                                               xtype: 'container',
                                                               width: '70%',
                                                               margin: '3 0 0 0',
                                                               height: 1,
                                                               style: 'background-color:grey;',
                                                           },
                                                      ]
                                                  },


               {
                   xtype: 'container',
                   width: '100%',
                   height: 38,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [

                       {
                           xtype: 'container',
                           width: '79%',
                           // height: 30,
                           layout: {
                               type: 'hbox',
                               pack: 'right',
                               align: 'center'

                           },
                           items: [
                                {
                                    margin: '3 0 0 0',

                                    html: '<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total(RM):</div>'
                                }
                           ]
                       },
                        {
                            xtype: 'container',
                            width: '21%',
                            // height: 30,
                            layout: {
                                type: 'hbox',
                                pack: 'left',
                                align: 'center'

                            },
                            items: [
                              {
                                  margin: '3 0 0 0',
                                  id: 'htmlFloatPanel_AyohaStore_Cart_GrandTotal',
                                  html: '<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                              }
                            ]
                        },
                   ]
               },

                   {
                       xtype: 'container',
                       width: '100%',
                       margin: '-3 0 0 0',
                       height: 1,
                       style: 'background-color:transparent;',
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'right'

                       },
                       items: [
                            {
                                xtype: 'container',
                                width: '70%',
                                margin: '3 0 0 0',
                                height: 1,
                                style: 'background-color:grey;',
                            },
                       ]
                   },

               {
                   xtype: 'container',
                   width: '100%',
                   margin: '3 0 0 0',
                   height: 18,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [

                       {
                           xtype: 'container',
                           width: '80%',
                           // height: 30,
                           layout: {
                               type: 'hbox',
                               pack: 'right',
                               align: 'center'

                           },
                           items: [
                                {
                                    id: 'htmlFloatPanel_AyohaStore_Cart_MpointLbl',
                                    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">M.Point Earn:</div>'
                                }
                           ]
                       },
                        {
                            xtype: 'container',
                            width: '20%',
                            // height: 30,
                            layout: {
                                type: 'hbox',
                                pack: 'left',
                                align: 'center'

                            },
                            items: [
                              {
                                  margin: '0 0 0 5',
                                  id: 'htmlFloatPanel_AyohaStore_Cart_Mpoint',
                                  html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                              }
                            ]
                        },
                   ]
               },




               {
                xtype: 'container',
                width: '100%',
                margin: '0 0 0 0',
                height: 18,
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center'

                },
                items: [

                    {
                        xtype: 'container',
                        width: '80%',
                        // height: 30,
                        layout: {
                            type: 'hbox',
                            pack: 'right',
                            align: 'center'

                        },
                        items: [
                             {
                                 id: 'htmlFloatPanel_AyohaStore_Cart_StampCollectedLbl',
                                 html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Stamp Collected:</div>'
                             }
                        ]
                    },
                     {
                         xtype: 'container',
                         width: '20%',
                         // height: 30,
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'center'

                         },
                         items: [
                           {
                               margin: '0 0 0 5',
                               id: 'htmlFloatPanel_AyohaStore_Cart_StampCollected',
                               html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>'
                           }
                         ]
                     },
                ]
            },








               {
                   xtype: 'container',
                   width: '100%',
                   // margin: '3 0 0 0',
                   height: 18,
                   layout: {
                       type: 'hbox',
                       pack: 'center',
                       align: 'center'

                   },
                   items: [

                       {
                           xtype: 'container',
                           width: '80%',
                           // height: 30,
                           layout: {
                               type: 'hbox',
                               pack: 'right',
                               align: 'center'

                           },
                           items: [
                                {
                                    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">A.Point Earn:</div>'
                                }
                           ]
                       },
                        {
                            xtype: 'container',
                            width: '20%',
                            // height: 30,
                            layout: {
                                type: 'hbox',
                                pack: 'left',
                                align: 'center'

                            },
                            items: [
                              {
                                  margin: '0 0 0 5',
                                  id: 'htmlFloatPanel_AyohaStore_Cart_Apoint',
                                  html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>'
                              }
                            ]
                        },
                   ]
               },
           {
               xtype: 'container',
               width: '100%',
               margin: '2 0 0 0',
               height: 1,
               style: 'background-color:transparent;',
               layout: {
                   type: 'vbox',
                   pack: 'center',
                   align: 'center'

               },
               items: [
                    {
                        xtype: 'container',
                        width: '90%',
                        margin: '3 0 0 0',
                        height: 2,
                        //style: 'background-color:#f0f2f5;',
                        style: 'background-color:white;',
                    },
               ]
           },


           {
               xtype: 'container',
               width: '100%',
               // margin: '0 0 0 0',
               margin: '0 0 0 0',
               height: 90,
               style: 'background-color:transparent;',
               id: 'containerFloatPanel_AyohaStore_Cart_ShippingAddressMaster',
               hidden:true,
               layout: {
                   type: 'vbox',
                   pack: 'start',
                   align: 'left'

               },
               items: [
                   {
                       xtype: 'container',
                       width: '100%',
                       // margin: '0 0 0 0',
                       margin: '16 0 0 14',
                       height: 20,
                       style: 'background-color:transparent;',
                       layout: {
                           type: 'hbox',
                           pack: 'center',
                           align: 'center'

                       },
                       items: [
                          {
                              //  margin: '16 0 0 14',
                              html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Shipping Address</div>'
                          },
                          {
                              xtype: 'spacer'
                          },
                          {
                              xtype: 'button',
                              ui: 'plain',
                              width: 30,
                              height: 30,
                              margin: '-4 0 0 0',
                              id: 'btnFloatPanel_AyohaStore_Cart_DeliveryAddressHistory_history',
                              html: '<img src="resources/icons/History01.png" width="20" height="20" alt="Company Name">',
                              handler: function () {
                                  FloatPanel_AyohaStore_DeliveryAddressShow_History();
                              }
                          },
                          {
                              xtype: 'button',
                              ui: 'plain',
                              width: 30,
                              height: 30,
                              margin: '-4 0 0 0',
                              id: 'btnFloatPanel_AyohaStore_Cart_DeliveryAddressHistory_edit',
                              html: '<img src="resources/icons/editReview.png" width="20" height="20" alt="Company Name">',
                              handler: function () {
                                  FloatPanel_AyohaStore_DeliveryAddressShow();
                              }
                          },
                          {
                              xtype: 'panel',
                              width: 30
                          }
                       ]
                   },


            {
                margin: '3 0 0 14',
                id: 'htmlFloatPanel_AyohaStore_Cart_DeliveryAddress',
                width: '90%',
                height: 109,
                // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                html: '<textarea id="input-FloatPanel_AyohaStore_Cart_DeliveryAddress" readOnly style="width:100%;height:109px;padding: 5px 5px;box-sizing: border-box;border-top: 1px solid #ccc;border-bottom: 1px solid #ccc;border-left: 1px solid #ccc;border-right: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px" wrap="hard" placeHolder="Set Drop off Address" ></textarea>'
                // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

            },
               ]
           },
           
                   //{
                   //    margin: '16 0 0 14',
                   //    html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Instruction/Note To Seller</div>'
                   //},


                   {
                       xtype: 'container',
                       width: '100%',
                       margin: '25 0 0 0',
                       // margin: '0 0 0 0',                      
                       height: 120,
                       style: 'background-color:transparent;',
                       id: 'containerFloatPanel_AyohaStore_Cart_NoteToSellerMaster',
                       hidden:true,
                       layout: {
                           type: 'vbox',
                           pack: 'start',
                           align: 'left'

                       },
                       items: [
                           {
                               xtype: 'container',
                               width: '100%',
                               height:25

                           },
                           {
                               xtype: 'container',
                               width: '100%',
                               // margin: '0 0 0 0',
                               margin: '16 0 0 14',
                               height: 20,
                               style: 'background-color:transparent;',
                               layout: {
                                   type: 'hbox',
                                   pack: 'center',
                                   align: 'center'

                               },
                               items: [
                                  {
                                      //margin: '16 0 0 14',
                                      html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Instruction/Note To Seller</div>'
                                  },
                                  {
                                      xtype: 'spacer'
                                  },
                                  {
                                      xtype: 'button',
                                      hidden:true,
                                      ui: 'plain',
                                      width: 30,
                                      height: 30,
                                      margin: '-4 0 0 0',
                                      id: 'btnFloatPanel_AyohaStore_Cart_InstructionToSeller',
                                      html: '<img src="resources/icons/History01.png" width="20" height="20" alt="Company Name">',
                                  },
                                  {
                                      xtype: 'panel',
                                      width: 30
                                  }
                               ]
                           },
                            {
                                margin: '0 0 0 14',
                                id: 'htmlFloatPanel_AyohaStore_Cart_Note',
                                width: '90%',
                                height: 70,
                                // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                                html: '<textarea id="input-FloatPanel_AyohaStore_Cart_Note" style="width:100%;height:70px;padding: 0px 0px;box-sizing: border-box;border: 1px solid grey;border-radius: 4px;background-color: transparent;color:black;font-size: 12px;font-weight:bold" wrap="hard" placeHolder="Note" ></textarea>'
                                // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                            },
                       ]
                   },
                     
           



                    ]
                },




                

            ]

        },
    ]
},
       



                













                            







              ],



          });

    return _FloatPanel_AyohaStore_Cart





}





function FloatPanel_AyohaStore_CartShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_Cart);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_Cart());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_CartHide()");
    isFloatPanel_AyohaStore_CartOpen = 'Y';
    isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder = 'N';
    globalFloatPanel_AyohaStore_CheckOut_OrderStatus = "CheckOut";
    globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0;
    globalFloatPanel_AyohaStore_Cart_VoucherCount = 0;


    FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');






    //var containerViewnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp]')[0];
    //var containerViewElnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp = containerViewnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp.element;
    //containerViewElnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp.on('tap',
    //  function (event, node, options, eOpts) {

    //     // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
    //      FloatPanel_AyohaStore_Cart_SendMyOrder();
    //  }
    //);



    globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = "0";


    // alert(globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom);

    if (globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom == 'SaleItemDetail') {
        Ext.getCmp('FloatPanel_AyohaStore_CartID').setZIndex(320);
    }


    if (globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom == 'MyCart') {
        FloatPanel_AyohaStore_CartShow_FromCart();
    }

    //FloatPanel_AyohaStore_Cart_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
   

}
function FloatPanel_AyohaStore_CartShow_FromCart() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_Cart);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_Cart());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_CartHide()");
    isFloatPanel_AyohaStore_CartOpen = 'Y';
    isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder = 'N';
    globalFloatPanel_AyohaStore_CheckOut_OrderStatus = "CheckOut";

    globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0;
    globalFloatPanel_AyohaStore_Cart_VoucherCount = 0;

   // FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');

    Ext.getCmp('FloatPanel_AyohaStore_CartID').setZIndex(350);




    var containerViewnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp = containerViewnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_Cart_OrderWhatsApp.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
      }
    );



    //globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = "0";

   // FloatPanel_AyohaStore_Cart_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();



}


var globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseAccNo;
var globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseLogo;
var globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseName;
function FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart(EnterpriseAccNo, MembershipCardCode, EnterpriseLogo, EnterpriseName) {
    isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder = 'N';
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart";
    globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseLogo = EnterpriseLogo;
    globalFloatPanel_AyohaStore_CartShow_FromAyohaShoppingCart_EnterpriseName = EnterpriseName;
    FloatPanel_AyohaStore_CartShow();
    Ext.getCmp('containerFloatPanel_AyohaStore_CartHeader').setHidden(true);
    Ext.getCmp('containerFloatPanel_AyohaStore_CartHeader_FromAyohaCart').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaStore_CartHeader_FromAyohaCart_EnterpriseName').setHtml('<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >' + EnterpriseName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CartHeader_FromAyohaCart_EnterpriseLogo').setHtml('<img src="' + EnterpriseLogo + '" alt="Image" style="width:24px;height:24px;border-radius:50%;">');
    Ext.getCmp('List_FloatPanel_AyohaStore_CartList').setHeight(470);
    
}



var globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo;
var globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode;
var globalFloatPanel_AyohaStore_Cart_VoucherCount;
var globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal = 0;
var globalFloatPanel_AyohaStore_Cart_VoucherCode;

function FloatPanel_AyohaStore_Cart_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore() {

    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo="";
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode="";


    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = '50528-0133376958-NoEnterprise,' + FloatPanel_AyohaStore_getEnterpriseAccNo();
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = 'USU,' + globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;


    console.log(globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    console.log(globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCode');
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.load();

   
    var task = Ext.create('Ext.util.DelayedTask', function () {
       
       

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getCount();
        globalFloatPanel_AyohaStore_Cart_VoucherCount =parseInt(count);
        globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal = count;
        if (count > 0) {
            Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + count + ' Voucher!</font> - Voucher Discount(RM):</div>');
            Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setMargin('-6 0 0 0');
            Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setMargin('-3 0 0 5');
            
            Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotalTxt').setMargin('-5 0 0 0');
            Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setMargin('-3 0 0 5');
            //id: 'htmlFloatPanel_AyohaStore_Cart_SubTotalTxt',
            //html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">SubTotal(RM):</div>'

            Ext.getCmp('FloatPanel_AyohaStore_CartID').setWidth(295);

            for (i = 0; i < count; i++) {
                var Store = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getAt(i);
                globalFloatPanel_AyohaStore_Cart_VoucherCode += Store.get('VoucherCode') + ',';
                
            }
           
            FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus();
        }
      //  alert(count);
      //  Ext.getCmp('Dashboard_AyohaVoucherListID').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore);

    });
    task.delay(500);

}







var globalFloatPanel_AyohaStore_Cart_ItemCartCode;
var globalFloatPanel_AyohaStore_Cart_MerchantSumStamp=0;
function FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert(ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint) {
    
  // alert(MerchantSumStamp)
    //toastMsg("Add to cart...", "resources/icons/addtocart01.gif");

    LoadingPanelShow("resources/icons/addtocart01.gif", "Add to cart...");
    // var TTLMerchantSumStamp = 0;
    // var TTLAyohaSumPoint = 0;

    // if (CampaignType == "Stamp Reward Loyalty Card")
    // {
    //     var StampRuled = parseFloat(MerchantPoint);
    // var SumPrices=parseFloat(SumPrice);

    // if(SumPrices>=StampRuled){
    //     TTLMerchantSumStamp = parseInt(SumPrices) / parseInt(StampRuled);
    //     TTLAyohaSumPoint =parseFloat(TTLMerchantSumStamp);
    // }else{
    //     TTLMerchantSumStamp = 0;
    //     TTLAyohaSumPoint = 0.00;
    // }
       
  
    // } else {
    //     TTLAyohaSumPoint = parseFloat(TTlAyohaPoint);
    // }


if(TTlMerchantPoint){

}else{
    TTlMerchantPoint=0.00;
}



if(MerchantPoint){

}else{
    MerchantPoint=1.00
}

    var task = Ext.create('Ext.util.DelayedTask', function () {

       
        // var objn = {
        //     "ID": 0,
        //     "ItemCode": ItemCode,
        //     "ItemQuantity": Qty,
        //     "ItemSumPrice": SumPrice,
        //     "ItemCartStatus": "NewCart",
        //     "CreatedBy": GetCurrAyohaUserAccountNo(),
        //     "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        //     "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        //     "LoyaltyRewardType": CampaignType,
        //     "MerchantSumPoint": TTlMerchantPoint.toFixed(2),
        //     "AyohaSumPoint": TTLAyohaSumPoint.toFixed(2),
        //     "MerchantSumStamp": TTLMerchantSumStamp,
        //     "MerchantPoint": MerchantPoint,
        //     "AyohaPoint": AyohaPoint,
        //     "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        //     "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode
        // };


        globalFloatPanel_AyohaStore_Cart_MerchantSumStamp=MerchantSumStamp;

        var objn = {
            "ID": 0,
            "ItemCode": ItemCode,
            "ItemQuantity": Qty,
            "ItemSumPrice": SumPrice,
            "ItemCartStatus": "NewCart",
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "LoyaltyRewardType": CampaignType,
            "MerchantSumPoint": TTlMerchantPoint.toFixed(2),
            "AyohaSumPoint": TTlAyohaPoint,
            "MerchantSumStamp": MerchantSumStamp,
            "MerchantPoint": MerchantPoint,
            "AyohaPoint": AyohaPoint,
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode
        };
        console.log(objn)
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    //FloatPanel_AyohaStore_SaleItemDetailHide();
                   
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        if (isFloatPanel_AyohaStoreOpen == "Y") {
                            FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                        }
                        if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == "Y") {
                            var ttl = document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail').value;
                            var res =parseInt(globalFloatPanel_AyohaStore_CartTotalItemQuantity) + parseInt(ttl);
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + res + '</b></div>');


                        }

                       
                    });
                    task.delay(500);

                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        if (isFloatPanel_OrderCartOpen == "Y") {
                            FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                        }
                       
                    });
                    task.delay(500);



                    var ttlcartqty = parseInt(Qty) + parseInt(globalDashboard_TotalItemQuantityCart);                   
                    Ext.getCmp('htmlDashbord_OrderCart_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + ttlcartqty + '</b></div>');
                  
                   LoadingPanelHide();


                }
                else {
                   
                    swalFireFail("Fail!->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
               
                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });
      
        Ext.Viewport.unmask();
    });
    task.delay(500);


  
}







var globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo;
function FloatPanel_AyohaStore_Cart_SetMembershipDiscount(){
// alert(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent)
// alert(globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo)
// alert(FloatPanel_AyohaStore_getEnterpriseAccNo())

    if(globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo==FloatPanel_AyohaStore_getEnterpriseAccNo()){
      //  alert("Not Run")
        return;
    }
   







//alert("Run Function")
globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo=FloatPanel_AyohaStore_getEnterpriseAccNo();


var objn = {
    "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
    "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
};
console.log(objn);
var _value = Ext.Ajax.request({

    type: "POST",

    url: GetAPIurl() + '/DiscountCampaing/DiscountCampaingLoadByEnterpriseAccNoMembershipCardCode',

    dataType: "json",
    data: JSON.stringify(objn),
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },

    success: function (result, request) {

       

        data = Ext.decode(result.responseText.trim());

        if (data.success == "true") {
            //var newData = JSON.parse(JSON.stringify(result.results.Email))
            //console.log(result.results.Email);
            //  //data.results[0];
            // console.log(data.total);
            if (data.total > 0) {
var ttlpercent=0.00;
for (var i = 0; i < data.total; i++) {
ttlpercent+= parseFloat(data.results[i].DiscountPercent);

}

if (ttlpercent>100){

globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent =100.00;
}else{
globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent =ttlpercent;
}

var  result = parseFloat((globalFloatPanel_AyohaStore_Cart_TotalSumPrice + 0) - 0);
//alert(result)
globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=parseFloat((result/100)*globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent);



//// Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscountCampaignPersent').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent.toFixed(2)+'% -Membership Discount(RM):</div>');
// Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Discount').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2) + '</div>');

// Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + (result.toFixed(2)-globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2)).toFixed(2) + '</div>');
   





// if(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent>0){



// }
             






             
                Ext.Viewport.unmask();
            }
            if (data.total == 0) {
               globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent=0.00;
               globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=0.00;
                Ext.Viewport.unmask();
                if(isFloatPanel_AyohaStore_CheckOutOpen == 'N'){
                    return;
                }
               // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
              

            }





        }
        else {

            alert(result.responseText);
            Ext.Viewport.unmask();
        }


    },

    failure: function (result, request) {
        alert(result.responseText);
        Ext.Viewport.unmask();
    }

});












    // var task = Ext.create('Ext.util.DelayedTask', function () {

     



    // });
    
    // task.delay(300);
    //Disable 1/5/2025 6.24pm
    //FloatPanel_AyohaStore_CheckOut_LoadByMembershipCardCode();
}



var globalFloatPanel_AyohaStore_Cart_TotalItemQuantity;
var globalFloatPanel_AyohaStore_Cart_TotalSumPrice;
var globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint;
var globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint;
var globalFloatPanel_AyohaStore_Cart_GrandTotal;
var globalFloatPanel_AyohaStore_Cart_LoyaltyRewardType;
var globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp;

function FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore(ItemCartStatus) {


//     //_DataStore_AyohaStoreCartLoadCartAyohaStore.removeAll(true);
//     _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('ItemCartStatus', ItemCartStatus);
//     _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
//     _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
//     _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
//     _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStore');

//     // alert(ItemCartStatus)
//     // alert(FloatPanel_AyohaStore_getEnterpriseAccNo())
//     // alert(GetCurrAyohaUserAccountNo())
//     // alert(globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode)


//     _DataStore_AyohaStoreCartLoadCartAyohaStore.load();







//     var task = Ext.create('Ext.util.DelayedTask', function () {

//         _DataStore_AyohaStoreCartLoadCartAyohaStore.load();
     
       
//         var count = parseInt(_DataStore_AyohaStoreCartLoadCartAyohaStore.getCount());
//         var Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(0);


    

//         if (count <= 0) {
//             globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
//             globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = 0;


//             if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
//                 Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>');
//                 Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
//                 Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
//                 Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
//                 Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_StampCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>');
              
              
//                 // Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div  style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
//                 //  Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
//                 Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
//             }
//             if( isFloatPanel_AyohaStore_CheckOutOpen == 'Y'){
//                 FloatPanel_AyohaStore_CheckOutSetHeightOrderList();
//                }
         
//             LoadingPanelHide();
//             return;
//                     }
                 

//  // var Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(0);


// alert(Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalItemQuantity'));

//  if (Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalItemQuantity').length >= 6) {
//     // Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -7');
//  }
//  if (Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalItemQuantity').length < 6) {
//     // Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -8');
//  }


//  if (isFloatPanel_AyohaStore_CartOpen == 'Y') {

//      // 16/5/2025 - INI ADALAH PUNCA, CHECK FUNCTION FloatPanel_AyohaStore_CheckOut_DiscountCampaingLoadByEnterpriseAccNoMembershipCardCodeStore();
//     // FloatPanel_AyohaStore_CheckOut_DiscountCampaingLoadByEnterpriseAccNoMembershipCardCodeStore();
  
// //  alert('Store.get(\'TotalItemQuantity\') : ' + Store.get('TotalItemQuantity'));
  
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalItemQuantity') + '</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalSumPrice') + '</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalMerchantPoint') + '</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalAyohaPoint') + '</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_StampCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalMerchantSumStamp') + '</div>');
//      // Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaign').setHtml('<div  style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM' + Store.get('TotalSumPrice') + '</div>');
//      //  Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + Store.get('TotalItemQuantity') + '</b></div>');

//  }


//  if (globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher > 0) {
//      if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
//          Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-2px 0px 0px 5px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>');

//      }
//      if (isFloatPanel_AyohaStore_CheckOutOpen == "Y") {
//          Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>');
//      }
    
//  }




//  globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalItemQuantity');
//  globalFloatPanel_AyohaStore_Cart_TotalSumPrice =parseFloat(Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalSumPrice'));
//  globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalMerchantPoint');
//  globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint = Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalAyohaPoint');
//  globalFloatPanel_AyohaStore_Cart_ItemCartCode = Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('ItemCartCode');
//  globalFloatPanel_AyohaStore_Cart_LoyaltyRewardType = Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('LoyaltyRewardType');
//  globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp =parseInt(Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalMerchantSumStamp'));
//  // globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=parseInt(Store.get('StampRuleAmount'));





// // var result;

//  if (isFloatPanel_AyohaStore_CartOpen == "Y") {

//     //16/5/2024
//    ////  globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=0.00;
//      //result = (globalFloatPanel_AyohaStore_Cart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - 0;
 
 
 
//      var  result = parseFloat((globalFloatPanel_AyohaStore_Cart_TotalSumPrice + 0) - 0);
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result.toFixed(2) + '</div>');

// // alert(result)
   
//      if(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent>0){
        
//      globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=parseFloat((result/100)*globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent);
    


//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + (result.toFixed(2)-globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2)).toFixed(2) + '</div>');
               
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaignPersent').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent.toFixed(2)+'% -Membership Discount(RM):</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaign').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2) + '</div>');
     
//       }
//       globalFloatPanel_AyohaStore_Cart_GrandTotal = (result.toFixed(2)-globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2));
   






 
//  }

// //alert(isFloatPanel_AyohaStore_CheckOutOpen)



//  if (isFloatPanel_AyohaStore_CheckOutOpen == "Y") {
//      FloatPanel_AyohaStore_CheckOutSetHeightOrderList();
//      // result = (globalFloatPanel_AyohaStore_Cart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
//      // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result.toFixed(2) + '</div>');
//      // globalFloatPanel_AyohaStore_Cart_GrandTotal = result.toFixed(2);
// // alert(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2))
//      Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2)+'</div>');
    
//      FloatPanel_AyohaStore_CheckOut_Calculate_GrandTotal()

//  }


 


 
//  if (Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('LoyaltyRewardType') == "Stamp Reward Loyalty Card") {
     
//    //  Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MpointLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Stamp Earn:</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + parseInt(Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalAyohaPoint')) + '</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalAyohaPoint') + '</div>');
//      Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_StampCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store_FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore.get('TotalMerchantSumStamp') + '</div>');

//  }






//  if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == "Y") {
//      Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');

//  }
 
// //alert("isFloatPanel_OrderCartOpen:"+isFloatPanel_OrderCartOpen)
//  if (isFloatPanel_OrderCartOpen == "Y") {
// //16/5/2024
//     //FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');

//  }
//  //globalFloatPanel_AyohaStore_CheckOut_OrderStatus = "CheckOut";


//  FloatPanel_AyohaStore_Cart_SetMembershipDiscount();






// LoadingPanelHide();




    
//     });
//     task.delay(500);


// return;






    _DataStore_AyohaStoreCartLoadCartAyohaStore.removeAll(true);
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('ItemCartStatus', ItemCartStatus);
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
    _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStore');
  


    _DataStore_AyohaStoreCartLoadCartAyohaStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);

                console.log('records:', records);
                console.log('records[0]:', records[0]);
                console.log('records[0].data:', records[0]?.data);
                console.log('TotalItemQuantity:', records[0]?.get('TotalItemQuantity'));






                var count = parseInt(_DataStore_AyohaStoreCartLoadCartAyohaStore.getCount());
                var Store  = records[0]; // Access only the first record
                if (count <= 0) {
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = 0;
        
        
                    if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_StampCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">0</div>');
                      
                      
                        // Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div  style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                        //  Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
                    }
                    if( isFloatPanel_AyohaStore_CheckOutOpen == 'Y'){
                        FloatPanel_AyohaStore_CheckOutSetHeightOrderList();
                       }
                 
                    LoadingPanelHide();
                    return;
                            }
     
               // var Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(0);
                if (Store.get('TotalItemQuantity').length >= 6) {
                   // Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -7');
                }
                if (Store.get('TotalItemQuantity').length < 6) {
                   // Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -8');
                }
        
        
                if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
        
                    // 16/5/2025 - INI ADALAH PUNCA, CHECK FUNCTION FloatPanel_AyohaStore_CheckOut_DiscountCampaingLoadByEnterpriseAccNoMembershipCardCodeStore();
                   // FloatPanel_AyohaStore_CheckOut_DiscountCampaingLoadByEnterpriseAccNoMembershipCardCodeStore();
                 
                
                 
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_TotalQuantity').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalItemQuantity') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalSumPrice') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalMerchantPoint') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalAyohaPoint') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_StampCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalMerchantSumStamp') + '</div>');
                    // Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaign').setHtml('<div  style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM' + Store.get('TotalSumPrice') + '</div>');
                    //  Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + Store.get('TotalItemQuantity') + '</b></div>');
        
                }
        
               
                if (globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher > 0) {
                    if (isFloatPanel_AyohaStore_CartOpen == 'Y') {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-2px 0px 0px 5px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>');
        
                    }
                    if (isFloatPanel_AyohaStore_CheckOutOpen == "Y") {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>');
                    }
                   
                }
           



                globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = Store.get('TotalItemQuantity');
                globalFloatPanel_AyohaStore_Cart_TotalSumPrice =parseFloat(Store.get('TotalSumPrice'));
                globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = Store.get('TotalMerchantPoint');
                globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint = Store.get('TotalAyohaPoint');
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = Store.get('ItemCartCode');
                globalFloatPanel_AyohaStore_Cart_LoyaltyRewardType = Store.get('LoyaltyRewardType');
                globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp =parseInt(Store.get('TotalMerchantSumStamp'));
                // globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=parseInt(Store.get('StampRuleAmount'));
        
              
        
        
        
               // var result;
              
                if (isFloatPanel_AyohaStore_CartOpen == "Y") {
        
                   //16/5/2024
                  ////  globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=0.00;
                    //result = (globalFloatPanel_AyohaStore_Cart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - 0;
                
                
                
                    var  result = parseFloat((globalFloatPanel_AyohaStore_Cart_TotalSumPrice + 0) - 0);
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result.toFixed(2) + '</div>');
        
           // alert(result)
                  
                    if(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent>0){
                       
                    globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=parseFloat((result/100)*globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent);
                   
        
        
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + (result.toFixed(2)-globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2)).toFixed(2) + '</div>');
                              
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaignPersent').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent.toFixed(2)+'% -Membership Discount(RM):</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MembershipDiscountCampaign').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2) + '</div>');
                    
                     }
                     globalFloatPanel_AyohaStore_Cart_GrandTotal = (result.toFixed(2)-globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2));
                  
        
        
        
        
        
        
                
                }
        
               //alert(isFloatPanel_AyohaStore_CheckOutOpen)
              
        
        
                if (isFloatPanel_AyohaStore_CheckOutOpen == "Y") {
                    FloatPanel_AyohaStore_CheckOutSetHeightOrderList();
                    // result = (globalFloatPanel_AyohaStore_Cart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
                    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result.toFixed(2) + '</div>');
                    // globalFloatPanel_AyohaStore_Cart_GrandTotal = result.toFixed(2);
        // alert(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2))
                    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2)+'</div>');
                   
                    FloatPanel_AyohaStore_CheckOut_Calculate_GrandTotal()
               
                }
               
        
                
        
        
                
                if (Store.get('LoyaltyRewardType') == "Stamp Reward Loyalty Card") {
                    
                  //  Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_MpointLbl').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">Total Stamp Earn:</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Mpoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + parseInt(Store.get('TotalAyohaPoint')) + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_Apoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalAyohaPoint') + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_StampCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + Store.get('TotalMerchantSumStamp') + '</div>');
        
                }
        
        
        
        
        
        
                if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == "Y") {
                    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');
        
                }
                
        //alert("isFloatPanel_OrderCartOpen:"+isFloatPanel_OrderCartOpen)
                if (isFloatPanel_OrderCartOpen == "Y") {
         //16/5/2024
                   //FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');
        
                }
                //globalFloatPanel_AyohaStore_CheckOut_OrderStatus = "CheckOut";
        
        
                FloatPanel_AyohaStore_Cart_SetMembershipDiscount();
        
        
              
        
        
        
               LoadingPanelHide();
               
                
            } else {
                console.error('Failed to load store data or no record found.');
              //  LoadingPanelHide();
            }
        }
    });












    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = parseInt(_DataStore_AyohaStoreCartLoadCartAyohaStore.getCount());

    
       

    // });
    // task.delay(500);


    
}





function FloatPanel_AyohaStore_CartHide() {
    if (isFloatPanel_AyohaStore_CartOpen == 'Y') {

        _FloatPanel_AyohaStore_Cart.hide(); isFloatPanel_AyohaStore_CartOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_CartHide()");
    }

}






function FloatPanel_AyohaStore_Cart_Order_viaWhatsApp() {
    var val = parseInt(globalFloatPanel_AyohaStore_Cart_TotalItemQuantity);
    if (val <= 0) {
        swalFireWarning("No Cart Item.!")
        return;
    }


    var pn = FloatPanel_AyohaStore_getWhatsAppLink();
    var count = _DataStore_AyohaStoreCartLoadCartAyohaStore.getCount();
    var ItemName;
    var ItemQuantity;
    var ItemPrice;
    var strOrder;
    var Store;
    var orders;
    var orderss;
    var fullOrder;
    var OrderNote;
    for (i = 0; i < count; i++) {
        Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(i);
        strOrder += Store.get('RowNumber') +")."+ Store.get('ItemName') + '%0a' + Store.get('ItemQuantity') + ' X (RM)' + Store.get('ItemPrice') + '%0a' + '*Total:' + Store.get('ItemSumPrice') + '*' + '%0a%0a'
       
        
    }
    var entName = FloatPanel_AyohaStore_getEnterpriseName();
    orderss = "Hi " + entName + "%0a%0a" + "Below is my order:%0a%0a";
    orders = strOrder.replace("undefined", "");

    var aa = document.getElementById("input-FloatPanel_AyohaStore_Cart_Note").value;

    if (aa) {
        OrderNote = aa;
    } else {
        OrderNote = 'No Note/Instructions';
    }
   

    fullOrder = orderss + orders + "%0aOrder Summary:%0a*Total Quantity:" + globalFloatPanel_AyohaStore_Cart_TotalItemQuantity + "*%0a*Grand Total:" + globalFloatPanel_AyohaStore_Cart_TotalSumPrice + "*%0a*Point Earn:" + globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint + "*%0a%0aOrder Notes:%0a*" + OrderNote + "*";
    

   // alert(orders);
    //window.open("https://api.whatsapp.com/send?phone=" + pn + "&text=" + fullOrder);
    window.open("https://api.whatsapp.com/send?phone=" + pn + "&text=" + fullOrder, '_system'); return false;

    FloatPanel_AyohaStore_Cart_AyohaStoreCartUpdateStatusOrderSent();
    
}


function FloatPanel_AyohaStore_Cart_Delete(ID) {
    
   //toastMsg("Delete cart...", "resources/icons/addtocart02.gif");

   Swal.fire({
    title: 'Are you sure want to delete?',
    //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
    //icon: 'warning',
    //showCancelButton: true,
    //confirmButtonColor: '#3085d6',
    //cancelButtonColor: '#d33',
    imageUrl: "resources/icons/attention1.png",
    imageWidth: 150,
    imageHeight: 150,
    showCloseButton: true,
    showCancelButton: false,
    //  confirmButtonColor: '#3085d6',
    confirmButtonColor: '#9932cc',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
}).then(function (result) {
    if (result.isConfirmed) {

        LoadingPanelShow("resources/icons/delete01.gif", "Delete cart...")

        var task = Ext.create('Ext.util.DelayedTask', function () {
            var objn = {
                "ID": ID,
                "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
                "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
            };
            var _value = Ext.Ajax.request({
    
                type: "POST",
    
                url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartDelete',
    
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
    
                success: function (result, request) {
    
                    //console.log(result.responseText);
    
    
                    data = Ext.decode(result.responseText.trim());
    
                    if (data.success == "true") {
   

                       
                        FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            if (isFloatPanel_AyohaStoreOpen == "Y") {
                                FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                            }
                        });
                        task.delay(500);
    
    
                        // var task = Ext.create('Ext.util.DelayedTask', function () {
                        //     DashboardAyohaUserMainStore();
                        // });
                        // task.delay(500);
                      
                        LoadingPanelHide();
                        // FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(FloatPanel_AyohaStore_getEnterpriseAccNo());
    
    
                    }
                    else {
    
                        swalFireFail("Fail!" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide();
                    }
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                },
    
                failure: function (result, request) {
                    swalFireFail("Fail!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
    
            });
    
    
            Ext.Viewport.unmask();
        });
        task.delay(500);
    

    }
});



  


}
function FloatPanel_AyohaStore_Cart_Delete_CheckOut(ID,ItemPrice,ItemQuantity) {
    
    //toastMsg("Delete cart...", "resources/icons/addtocart02.gif");

    
    SumPrice=parseFloat(ItemPrice*ItemQuantity);
    
    Swal.fire({
     title: 'Are you sure want to delete?',
     //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
     //icon: 'warning',
     //showCancelButton: true,
     //confirmButtonColor: '#3085d6',
     //cancelButtonColor: '#d33',
     imageUrl: "resources/icons/attention1.png",
     imageWidth: 150,
     imageHeight: 150,
     showCloseButton: true,
     showCancelButton: false,
     //  confirmButtonColor: '#3085d6',
     confirmButtonColor: '#9932cc',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes'
 }).then(function (result) {
     if (result.isConfirmed) {
 
         LoadingPanelShow("resources/icons/delete01.gif", "Delete cart...")
 
         var task = Ext.create('Ext.util.DelayedTask', function () {
             var objn = {
                 "ID": ID,
                 "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
                 "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                 "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
             };
             var _value = Ext.Ajax.request({
     
                 type: "POST",
     
                 url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartDelete',
     
                 dataType: "json",
                 data: JSON.stringify(objn),
                 headers: {
                     "Content-Type": "application/json; charset=utf-8"
                 },
     
                 success: function (result, request) {
     
                     //console.log(result.responseText);
     
     
                     data = Ext.decode(result.responseText.trim());
     
                     if (data.success == "true") {

 
                         if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
                              globalFloatPanel_AyohaStore_Cart_TotalSumPrice=(globalFloatPanel_AyohaStore_Cart_TotalSumPrice-SumPrice.toFixed(2));
                              FloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder();
                              LoadingPanelHide();
                              return;
                          }
 
                         FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                         var task = Ext.create('Ext.util.DelayedTask', function () {
                             if (isFloatPanel_AyohaStoreOpen == "Y") {
                                 FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                             }
                         });
                         task.delay(500);
     
     
                         var task = Ext.create('Ext.util.DelayedTask', function () {
                             DashboardAyohaUserMainStore();
                         });
                         task.delay(500);
                       
                         LoadingPanelHide();
                         // FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(FloatPanel_AyohaStore_getEnterpriseAccNo());
     
     
                     }
                     else {
     
                         swalFireFail("Fail!" + result.responseText.trim());
                         Ext.Viewport.unmask();
                         LoadingPanelHide();
                     }
                     Ext.Viewport.unmask();
                     LoadingPanelHide();
                 },
     
                 failure: function (result, request) {
                     swalFireFail("Fail!" + result.responseText.trim());
                     Ext.Viewport.unmask();
                     LoadingPanelHide();
                 }
     
             });
     
     
             Ext.Viewport.unmask();
         });
         task.delay(1000);
     
 
     }
 });
 
 
 
   
 
 
 }


function FloatPanel_AyohaStore_Cart_AyohaStoreCartUpdateStatusOrderSent() {

   // toastMsg("update cart...", "resources/icons/addtocart02.gif");
    //var task = Ext.create('Ext.util.DelayedTask', function () {



    //    Ext.Viewport.unmask();
    //});
    //task.delay(1500);


    var objn = {
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartUpdateStatusOrderSent',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                swalFireGeneralMessaging("Your order have been sent", "resources/icons/sendReceipt.png");
               // Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeTextItem').setHtml('<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>');
               // Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setStyle('border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;');
               // Ext.getCmp('containerFloatPanel_AyohaStore_MyCartCountbadge').setMargin('-3 0 0 -5');
                FloatPanel_AyohaStore_CartHide();

               

            }
            else {

                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
        }

    });
}

var AddToCart_ADD;
var AddToCart_MINUS;
var AddToCart_ADD_ReOrder=0;
var AddToCart_MINUS_ReOrder=0;
var stamp=0;
var MerchantSumStamps=0;
var TTlMerchantPoint=0;
var TTlAyohaPoint=0;
var SumPrice;
function FloatPanel_AyohaStore_cart_AddToCart_ADD(StampRuleAmounts,ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode, ItemPriceDiscount, ItemPriceDiscountRate, MerchantSumStamp) {
    globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmounts;
    AddToCart_ADD_ReOrder=0;
    if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
        AddToCart_ADD = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);  
        AddToCart_ADD_ReOrder=AddToCart_ADD_ReOrder+1;
        AddToCart_ADD=AddToCart_ADD+AddToCart_ADD_ReOrder;
     }

     if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'N'){     
    AddToCart_ADD = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);  
    AddToCart_ADD = AddToCart_ADD + 1;
     }






   
    if (AddToCart_ADD <= 999) {      
        document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value = AddToCart_ADD;
      

      
        // var MerchantSumStamps=0;
        // var TTlMerchantPoint=0;
        // var TTlAyohaPoint=0;
        // var SumPrice;
        if (CampaignType == "Stamp Reward Loyalty Card") {
         



            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
         //   var stamp=0;
            // if (ItemPriceDiscountRate >= 0.1) {
            //     if (ItemPriceDiscount >= StampRuleAmount) {
            //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);                  
            //     } else {
            //         stamp = 0;
            //     }            
            // } else {
            //     if (ItemPrice >= StampRuleAmount) {                      
            //         stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount);                 
            //     } else {
            //         stamp = 0;
            //     }
             
            // }
         

            if (ItemPriceDiscountRate >= 0.1) {
               
                //TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
                TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
              //  SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                
               // TTlMerchantPoint = ItemPrice * MerchantPoint;
               TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPrice * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
                //SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }
          
            MerchantSumStamps = stamp;
          //  TTlAyohaPoint = MerchantSumStamps;
            AyohaPoint = TTlAyohaPoint;
            //TTlMerchantPoint = parseFloat(MerchantPoint);


        }
        if (CampaignType == "Point Reward Loyalty Card") {
            //TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
            //TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
            //MerchantSumStamp = 0;
            if (ItemPriceDiscountRate > 0) {
                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_ADD) * AyohaPoint;
                MerchantSumStamps = 0;
            } else {
                TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
                MerchantSumStamps = 0;
            }
        }

        if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
          
            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
          
            if (ItemPriceDiscountRate >= 0.1) {
               
                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_ADD) * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
              //  SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                
                TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
                //SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }

           
          
          
            // MerchantSumStamps = stamp;
            // AyohaPoint = TTlAyohaPoint;
            MerchantSumStamps = parseInt(MerchantSumStamp) + stamp;
            //TTlAyohaPoint = MerchantSumStamps;
            AyohaPoint = parseInt(MerchantSumStamp) + stamp;
           
        
        }
       
        


        if (ItemPriceDiscountRate > 0) {
            SumPrice = ItemPriceDiscount * AddToCart_ADD;
            if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
                SumPrice = ItemPriceDiscount * AddToCart_ADD_ReOrder;
            }
        } 
        
        if (ItemPriceDiscountRate <= 0) {
            SumPrice = ItemPrice * AddToCart_ADD;
            if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
                SumPrice = ItemPrice * AddToCart_ADD_ReOrder;
            }
        }


     
        if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
            globalFloatPanel_AyohaStore_Cart_TotalSumPrice=globalFloatPanel_AyohaStore_Cart_TotalSumPrice + SumPrice;
         }
      
       // SumPrice = ItemPrice * AddToCart_ADD;
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_ADD, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamps, MerchantPoint, AyohaPoint);
       
    }
    

}


function FloatPanel_AyohaStore_cart_AddToCart_MINUS(StampRuleAmounts,ID, MerchantPoint, AyohaPoint, ItemPrice, CampaignType, ItemCode, ItemPriceDiscount, ItemPriceDiscountRate, MerchantSumStamp) {
    globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmounts;
    AddToCart_MINUS_ReOrder=1;
   
    if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
        AddToCart_MINUS = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);  
        AddToCart_MINUS=AddToCart_MINUS-AddToCart_MINUS_ReOrder;
       // AddToCart_MINUS=AddToCart_MINUS-AddToCart_MINUS_ReOrder;
     }

     if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'N'){     
        AddToCart_MINUS = parseInt(document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value);
        AddToCart_MINUS = AddToCart_MINUS - 1;
     }







  
 
    if (AddToCart_MINUS >= 1) {      
        document.getElementById("input-FloatPanel_AyohaStore_Cart_Qty" + ID).value = AddToCart_MINUS;


        // var MerchantSumStamps=0;
        // var TTlMerchantPoint=0;
        // var TTlAyohaPoint=0;
        // var SumPrice;
        //if (CampaignType == "Stamp Reward Loyalty Card") {
        //    TTlMerchantPoint = 0.00;
        //    TTlAyohaPoint = AddToCart_MINUS * AyohaPoint;
        //    MerchantSumStamp = 1;
        //}
        //if (CampaignType == "Point Reward Loyalty Card") {
        //    TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
        //    TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
        //    MerchantSumStamp = 0;
        //}
        //SumPrice = ItemPrice * AddToCart_MINUS;








        if (CampaignType == "Stamp Reward Loyalty Card") {
           



            // var StampRuleAmount = parseFloat(MerchantPoint);
            // var stamp;
            // if (ItemPriceDiscountRate >= 0.1) {
            //     if (ItemPriceDiscount >= StampRuleAmount) {
            //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);
            //     } else {
            //         stamp = 0;
            //     }
            // } else {
            //     if (ItemPrice >= StampRuleAmount) {
            //         stamp = parseInt(ItemPrice) / parseInt(StampRuleAmount);
            //     } else {
            //         stamp = 0;
            //     }             
            // }
            // MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
            // TTlAyohaPoint = MerchantSumStamps;
            // AyohaPoint = parseInt(MerchantSumStamp) - stamp;
            // TTlMerchantPoint = parseFloat(MerchantPoint);




            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
          
           
         

            if (ItemPriceDiscountRate >= 0.1) {
                TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
            } else {
            
               TTlMerchantPoint = 0.00;
                TTlAyohaPoint = ItemPrice * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
            }
          


             MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
            // TTlAyohaPoint = MerchantSumStamps;
            // AyohaPoint = parseInt(MerchantSumStamp) - stamp;
  
           
           
          
       


            
        }


        if (CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
            var StampRuleAmount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
           
       
           
         



            if (ItemPriceDiscountRate >= 0.1) {
               // TTlMerchantPoint = ItemPriceDiscount * MerchantPoint;
               // TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
               TTlMerchantPoint = (ItemPriceDiscount * AddToCart_MINUS) * MerchantPoint;
               TTlAyohaPoint = (ItemPriceDiscount * AddToCart_MINUS) * AyohaPoint;
                stamp=ItemPriceDiscount / StampRuleAmount;
            } else {
            
             
              
              // TTlMerchantPoint = ItemPrice * MerchantPoint;
                //TTlAyohaPoint = ItemPrice * AyohaPoint;
                TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
                stamp=ItemPrice / StampRuleAmount;
            }
          
           
             MerchantSumStamps = parseInt(MerchantSumStamp) - stamp;
            TTlAyohaPoint =TTlAyohaPoint - AyohaPoint;
          //  AyohaPoint = parseInt(MerchantSumStamp) - stamp;
          


          
        }



        if (CampaignType == "Point Reward Loyalty Card") {
            //TTlMerchantPoint = (ItemPrice * AddToCart_ADD) * MerchantPoint;
            //TTlAyohaPoint = (ItemPrice * AddToCart_ADD) * AyohaPoint;
            //MerchantSumStamp = 0;
            if (ItemPriceDiscountRate > 0) {
                TTlMerchantPoint = (ItemPriceDiscount * AddToCart_MINUS) * MerchantPoint;
                TTlAyohaPoint = (ItemPriceDiscount * AddToCart_MINUS) * AyohaPoint;
                MerchantSumStamps = 0;
            } else {
                TTlMerchantPoint = (ItemPrice * AddToCart_MINUS) * MerchantPoint;
                TTlAyohaPoint = (ItemPrice * AddToCart_MINUS) * AyohaPoint;
                MerchantSumStamps = 0;
            }
            TTlAyohaPoint =TTlAyohaPoint - AyohaPoint;
        }



        // if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
        //     AddToCart_MINUS=AddToCart_MINUS - 1;
        //  }



        // if (ItemPriceDiscountRate > 0) {
        //     SumPrice = ItemPriceDiscount * AddToCart_MINUS;
        // } else {
        //     SumPrice = ItemPrice * AddToCart_MINUS;
        // }
       
/////////////////////////////////////////////////////
if (ItemPriceDiscountRate > 0) {
    SumPrice = ItemPriceDiscount * AddToCart_MINUS;
    if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
        SumPrice = ItemPriceDiscount * AddToCart_MINUS_ReOrder;
    }
} 

if (ItemPriceDiscountRate <= 0) {
    SumPrice = ItemPrice * AddToCart_MINUS;
    if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
        SumPrice = ItemPrice * AddToCart_MINUS_ReOrder;
    }
}







/////////////////////////////////////////////////////










        



        if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
           
            
            globalFloatPanel_AyohaStore_Cart_TotalSumPrice=globalFloatPanel_AyohaStore_Cart_TotalSumPrice - SumPrice;
            
         }
      
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID, ItemCode, AddToCart_MINUS, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamps, MerchantPoint, AyohaPoint);
      
    }
  
}





function FloatPanel_AyohaStore_Cart_AyohaStoreCart_Update(ID,ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint) {

    // AyohaPoint
    // : 
    // NaN
    // AyohaSumPoint
    // : 
    // "NaN"
  // toastMsg("Update Cart...", "resources/icons/addtocart01.gif");
    LoadingPanelShow("resources/icons/addtocart01.gif", "Update Cart...")
   
    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "ID": ID,
            "ItemCode": ItemCode,
            "ItemQuantity": Qty,
            "ItemSumPrice": SumPrice,
            "ItemCartStatus": "NewOrder",
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "LoyaltyRewardType": CampaignType,
            "MerchantSumPoint": TTlMerchantPoint.toFixed(2),
            "AyohaSumPoint": TTlAyohaPoint.toFixed(2),
            "MerchantSumStamp": MerchantSumStamp,
            "MerchantPoint": MerchantPoint,
            "AyohaPoint": AyohaPoint,
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode

        };


        
        console.log(objn)




        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

if(isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder == 'Y'){
   // globalFloatPanel_AyohaStore_Cart_TotalSumPrice=SumPrice;
    FloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder();
    LoadingPanelHide();
    return;
}






                    globalFloatPanel_AyohaStore_Cart_TotalSumPrice=SumPrice;
                   FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        if (isFloatPanel_AyohaStoreOpen == "Y") {
                            FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                        }

                        
                    });
                    task.delay(500);
                    var ttlcartqty = parseInt(Qty) + parseInt(globalDashboard_TotalItemQuantityCart);
                    Ext.getCmp('htmlDashbord_OrderCart_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + ttlcartqty + '</b></div>');

                    LoadingPanelHide();

                }
                else {

                    swalFireFail("Fail!X");
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


function FloatPanel_AyohaStore_Cart_DeliveryChargeTypeOpen() {
    FloatPanel_AyohaStore_DeliveryChargeListShow();
}



function FloatPanel_AyohaStore_Cart_Detail(ID, ItemCode) {
   
    globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'MyCart';
    var ItemCoverImg = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ItemName = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ItemPrice = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var MerchantPoint = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);


    var AyohaPoint = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var CampaignType = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var MembershipCardCode = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ProductCategoryName = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);

    var ItemCategoryCode = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var MembershipCardName = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ItemCoverImgName = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var Stock = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);


    var ShowStock = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var StockAlert = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ModifiedItemDescriptions_01 = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ItemPriceDiscount = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);
    var ItemPriceDiscountRate = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ItemCode', ItemCode, 0, false, false, true);

    FloatPanel_AyohaStore_SaleItemDetailShow(ID, ItemCode, ItemCoverImg.get('ItemCoverImg'), ItemName.get('ItemName'),
        ItemPrice.get('ItemPrice'), MerchantPoint.get('MerchantPoint'), AyohaPoint.get('AyohaPoint'), CampaignType.get('CampaignType'),
        MembershipCardCode.get('MembershipCardCode'), ProductCategoryName.get('ProductCategoryName'), ItemCategoryCode.get('ItemCategoryCode'),
        MembershipCardName.get('MembershipCardName'), ItemCoverImgName.get('ItemCoverImgName'), Stock.get('Stock'), ShowStock.get('ShowStock'),
        StockAlert.get('StockAlert'), ModifiedItemDescriptions_01.get('ModifiedItemDescriptions_01'), ItemPriceDiscount.get('ItemPriceDiscount'), ItemPriceDiscountRate.get('ItemPriceDiscountRate'))


    
   // FloatPanel_AyohaStore_SaleItemDetailShow(ID, ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode, ProductCategoryName, ItemCategoryCode, MembershipCardName, ItemCoverImgName, Stock, ShowStock, StockAlert, ModifiedItemDescriptions_01, ItemPriceDiscount, ItemPriceDiscountRate)
}




function FloatPanel_AyohaStore_Cart_SendMyOrder() {
    var val = document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryChargeType').value;
    var Note = document.getElementById('input-FloatPanel_AyohaStore_Cart_Note').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryAddress').value;
    if (globalFloatPanel_AyohaStore_Cart_TotalItemQuantity == 0) {
        swalFireFail("No Order Item!");
        return;
    }


    if (val.length <= 0) {
        swalFireFail("Delivery Charge required!");
        return;
    }
    if (add) {

    } else {
        swalFireFail("Shipping Address required!");
        return;
    }
    if (Note) {
        Note = Note;
       
    } else {
        Note = "NA";
    }
    LoadingPanelShow("resources/icons/sendingAnim.gif", "Submit Order...")
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "DeliveryChargeCode": globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode,
            "DeliveryCharge": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge,
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount": 0.00,
            "GrandTotal": globalFloatPanel_AyohaStore_Cart_GrandTotal,
            "DeliveryAddress_StreetName": globalFloatPanel_AyohaStore_DeliveryAddress_StreetName,
            "DeliveryAddress_Town": globalFloatPanel_AyohaStore_DeliveryAddress_TownCity,
            "DeliveryAddress_Postcode":globalFloatPanel_AyohaStore_DeliveryAddress_PostCode,
            "DeliveryAddress_StateCode":globalFloatPanel_AyohaStore_DeliveryAddress_State,
            "DeliveryAddress_CountryCode": globalFloatPanel_AyohaStore_DeliveryAddress_Country,
            "ReferenceName":globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson,
            "ReferencePhoneNo": globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo,
            "NoteToSeller": Note,
            "MerchantPointEarn": globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint,
            "AyohaPointEarn": globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "DeliveryName": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName,
            "TotalQuantity": globalFloatPanel_AyohaStore_Cart_TotalItemQuantity,
            "SubTotal": globalFloatPanel_AyohaStore_Cart_TotalSumPrice
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderInsert',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    FloatPanel_AyohaStore_CartHide();
                   // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                    swalFireDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!", "black","red");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                   // Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                }
                else {

                    swalFireFail("Fail!");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}



function FloatPanel_AyohaStore_Cart_CheckOutStaging() {
    var val = document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryChargeType').value;
    
    if (globalFloatPanel_AyohaStore_Cart_TotalItemQuantity == 0) {
        swalFireFail("No Item in Cart!");
        return;

    }

    FloatPanel_AyohaStore_CheckOutShow();
    //if (val) {
    //    FloatPanel_AyohaStore_CheckOutShow();
    //} else {
    //  //  swalFireSuccesDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !");
    //    swalFireDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !", "red","red");
    //}
}



//////////////////////////////////////////////////buy now


function FloatPanel_AyohaStore_Cart_CheckOutStaging_BuyNow() {
    //var val = document.getElementById('input-FloatPanel_AyohaStore_Cart_DeliveryChargeType').value;

    //if (globalFloatPanel_AyohaStore_Cart_TotalItemQuantity == 0) {
    //    swalFireFail("No Item in Cart!");
    //    return;

    //}


    FloatPanel_AyohaStore_SaleItemDetailAddToCart_BuyNow();

   
}




function FloatPanel_AyohaStore_SaleItemDetailAddToCart_BuyNow() {
    var val = document.getElementById("input-FloatPanel_AyohaStore_SaleItemDetail").value;
    if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
        // Swal.fire({ title: '<strong>HTML <u>example</u></strong>', icon: 'info', html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class="fa fa-thumbs-down"></i>', cancelButtonAriaLabel: 'Thumbs down' });

        Swal.fire({
            title: '',
            html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMember(),
          //  html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>Every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
            //imageUrl: "resources/icons/membershipPurpleThree.png",
            imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
            imageWidth: 350,
            imageHeight: 200,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'JOIN',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        }).then(function (result) {
            if (result.isConfirmed) {
                localStorage.setItem("MembershipByMethod", "AyohaStore");
                // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()
                FloatPanel_AyohaStore_SaleItemDetailHide();
                var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
                FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
            }
        });
        return;

    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode == "NotMember") {
        // Swal.fire({ title: '<strong>HTML <u>example</u></strong>', icon: 'info', html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class="fa fa-thumbs-down"></i>', cancelButtonAriaLabel: 'Thumbs down' });

        Swal.fire({
            title: '',
            html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMember(),
           // html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>Every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
            //imageUrl: "resources/icons/membershipPurpleThree.png",
            imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
            imageWidth: 350,
            imageHeight: 200,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'JOIN',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        }).then(function (result) {
            if (result.isConfirmed) {
                localStorage.setItem("MembershipByMethod", "AyohaStore");
                // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()
                FloatPanel_AyohaStore_SaleItemDetailHide();
                var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
                FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
            }
        });
        return;

    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode == "NoMembershipCard") {
        FloatPanel_AyohaStore_SaleItemDetailHide();
        swalFireWarning("This Merchant not create membership card!,Cannot procced.");
        return;
    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_ProductStock == "Out Of Stock") {
        // FloatPanel_AyohaStore_SaleItemDetailHide();
        swalFireDynamicIconWithMessage("resources/icons/outofstock.png", "Out Of Stock!", "red", "red");
        //  swalFireGeneralMessaging("Out Of Stock!", "resources/icons/outofstock.png");
        return;
    }
    if (val) {


        var Qty = parseInt(val);

        if (Qty <= 0) {
            return;
        }


        var MerchantPoints = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint);
        var MerchantSumStamp;
        var AyohaPoints = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint);
        var ItemPrices = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice);
        var TTlMerchantPoint;
        var TTlAyohaPoint;
        var SumPrice;
        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Stamp Reward Loyalty Card") {
            //TTlMerchantPoint = 0.00;
            //TTlAyohaPoint = Qty * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
            //MerchantSumStamp = 1;


            var StampRuleAmount = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint);
            var ItemPriceDiscountRates = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate);
            // var ItemPrices = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice);
            var ItemPriceDiscounts = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount);
            var stamp;
            if (ItemPriceDiscountRates >= 0.1) {
                if (ItemPriceDiscounts >= StampRuleAmount) {

                    stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);

                    //  Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');

                }

                SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                if (ItemPrices >= StampRuleAmount) {

                    stamp = parseInt(ItemPrices) / parseInt(StampRuleAmount);
                    // Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');

                }
                SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }
            MerchantSumStamp = stamp;
            TTlAyohaPoint = stamp;
            //  globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint = 0.00;
            globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint = stamp;
            TTlMerchantPoint = 0.00;


        }
        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Point Reward Loyalty Card") {



            if (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate > 0) {

                TTlMerchantPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
                TTlAyohaPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
                MerchantSumStamp = 0;
                SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                TTlMerchantPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
                TTlAyohaPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
                MerchantSumStamp = 0;
                SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }
        }



        //if (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate > 0) {
        //    SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
        //} else {
        //    SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
        //}


        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });


        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert_BuyNow(globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode, Qty, SumPrice, globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint, globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint);
        // (ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint)
    } else {

    }


    // AC.LoyaltyRewardType, AC.MerchantSumPoint, AC.AyohaSumPoint, AC.MerchantSumStamp
}




function FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert_BuyNow(ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint) {


    //toastMsg("Add to cart...", "resources/icons/addtocart01.gif");

    LoadingPanelShow("resources/icons/addtocart01.gif", "Add to cart...");
    var TTLMerchantSumStamp = 0;
    var TTLAyohaSumPoint = 0;

    if (CampaignType == "Stamp Reward Loyalty Card") {
        var StampRuled = parseFloat(MerchantPoint);
        var SumPrices = parseFloat(SumPrice);

        if (SumPrices >= StampRuled) {
            TTLMerchantSumStamp = parseInt(SumPrices) / parseInt(StampRuled);
            TTLAyohaSumPoint = parseFloat(TTLMerchantSumStamp);
        } else {
            TTLMerchantSumStamp = 0;
            TTLAyohaSumPoint = 0.00;
        }


    } else {
        TTLAyohaSumPoint = parseFloat(TTlAyohaPoint);
    }

    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "ID": 0,
            "ItemCode": ItemCode,
            "ItemQuantity": Qty,
            "ItemSumPrice": SumPrice,
            "ItemCartStatus": "NewCart",
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "LoyaltyRewardType": CampaignType,
            "MerchantSumPoint": TTlMerchantPoint.toFixed(2),
            "AyohaSumPoint": TTLAyohaSumPoint.toFixed(2),
            "MerchantSumStamp": TTLMerchantSumStamp,
            "MerchantPoint": MerchantPoint,
            "AyohaPoint": AyohaPoint,
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode
        };

        console.log(objn)
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartInsertUpdate',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    //FloatPanel_AyohaStore_SaleItemDetailHide();
                   // FloatPanel_AyohaStore_BuyNowShow();
                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        if (isFloatPanel_AyohaStoreOpen == "Y") {
                            FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                        }
                        if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == "Y") {
                            var ttl = document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail').value;
                            var res = parseInt(globalFloatPanel_AyohaStore_CartTotalItemQuantity) + parseInt(ttl);
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + res + '</b></div>');


                        }


                    });
                    task.delay(500);

                    var task = Ext.create('Ext.util.DelayedTask', function () {
                       
                            FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                      

                    });
                    task.delay(500);



                    var ttlcartqty = parseInt(Qty) + parseInt(globalDashboard_TotalItemQuantityCart);
                    Ext.getCmp('htmlDashbord_OrderCart_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + ttlcartqty + '</b></div>');

                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        FloatPanel_AyohaStore_CheckOutShow();

                    });
                    task.delay(1000);
                    LoadingPanelHide();


                }
                else {

                    swalFireFail("Fail!->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();

            },

            failure: function (result, request) {

                swalFireFail("Fail!" + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);



}





var isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder = 'N';

function FloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder() {
   // LoadingPanelShow(getLoadingIcon(), 'Loading Cart...');
     AyohaStoreCartRouteFunction='AyohaStoreCartLoadCartAyohaStoreReOrder';
   isFloatPanel_AyohaStore_Cart_AyohaStore_CheckOut_ReOrder = 'Y';
  
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.removeAll(true);
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('ItemCartStatus', 'NewCart');
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setExtraParam('ItemCartCode', globalFloatPanel_AyohaStore_Cart_ItemCartCode);
    // _DataStore_AyohaStoreCartLoadCartAyohaStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStoreReOrder');


  //  _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.removeAll(true);
    _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getProxy().setExtraParam('ItemCartStatus', 'NewCart');
    _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getProxy().setExtraParam('MembershipCardCode', globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
    _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getProxy().setExtraParam('ItemCartCode', globalFloatPanel_AyohaStore_Cart_ItemCartCode);
    _DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartLoadCartAyohaStoreReOrder');


    



  
console.log(FloatPanel_AyohaStore_getEnterpriseAccNo());
console.log(GetCurrAyohaUserAccountNo());
console.log(globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode);
console.log(globalFloatPanel_AyohaStore_Cart_ItemCartCode);

_DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              _DataStore_AyohaStoreCartLoadCartAyohaStore=_DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder;
             
             
           //   Ext.getCmp('FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromCart').setStore(_DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder);
             
             
                // console.log('Store loaded successfully, total records: ' + records.length);
                var count = parseInt(_DataStore_AyohaStoreCartLoadCartAyohaStoreReOrder.getCount());
                var Store  = records[0]; // Access only the first record
                // console.log('records:', records);
                // console.log('records[0]:', records[0]);
                // console.log('records[0].data:', records[0]?.data);
                // console.log('TotalItemQuantity:', records[0]?.get('TotalItemQuantity'));

            

                globalFloatPanel_AyohaStore_Cart_TotalItemQuantity = Store.get('TotalItemQuantity');
                globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint = Store.get('TotalMerchantPoint');
                globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint = Store.get('TotalAyohaPoint');
                globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp =parseInt(Store.get('TotalMerchantSumStamp'));

            
             //   Ext.getCmp('FloatPanel_AyohaStore_CheckOut_PurchasedItem_FromCart').setHidden(false);
            // alert("globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint-:"+globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint)




        
        
        
                if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == "Y") {
                    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');
        
                }
                
       
        
                FloatPanel_AyohaStore_Cart_SetMembershipDiscount_ReOrder();
        
        
              
        
        
        
               LoadingPanelHide();
               
                
            } else {
                console.error('Failed to load store data or no record found.');
              //  LoadingPanelHide();
            }
        }
    });












    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = parseInt(_DataStore_AyohaStoreCartLoadCartAyohaStore.getCount());

    
       

    // });
    // task.delay(500);


    
}





function FloatPanel_AyohaStore_Cart_SetMembershipDiscount_ReOrder(){
   // alert("FloatPanel_AyohaStore_Cart_SetMembershipDiscount_ReOrder() called");
    // // alert(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent)
    // // alert(globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo)
    // // alert(FloatPanel_AyohaStore_getEnterpriseAccNo())
    
    //     if(globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo==FloatPanel_AyohaStore_getEnterpriseAccNo()){
    //       //  alert("Not Run")
    //         return;
    //     }
       
    
    
    
    
    
    
    
    //alert(globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode)
    // globalFloatPanel_AyohaStore_Cart_PreviousEnterpriseAccNo=FloatPanel_AyohaStore_getEnterpriseAccNo();
    
    
    var objn = {
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
        "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
    };
    console.log(objn);
    var _value = Ext.Ajax.request({
    
        type: "POST",
    
        url: GetAPIurl() + '/DiscountCampaing/DiscountCampaingLoadByEnterpriseAccNoMembershipCardCode',
    
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    
        success: function (result, request) {
    
           
    
            data = Ext.decode(result.responseText.trim());
   // alert(data.success)
            if (data.success == "true") {
                //var newData = JSON.parse(JSON.stringify(result.results.Email))
                //console.log(result.results.Email);
                //  //data.results[0];
                // console.log(data.total);
          //   alert(data.total);
                if (data.total > 0) {

    var ttlpercent=0.00;
    for (var i = 0; i < data.total; i++) {
    ttlpercent+= parseFloat(data.results[i].DiscountPercent);
    
    }
    
    if (ttlpercent>100){
    
    globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent =100.00;
    }else{
    globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent =ttlpercent;
    }
   
    var  result = parseFloat((globalFloatPanel_AyohaStore_Cart_TotalSumPrice + 0) - 0);
    //alert(result)
    globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=parseFloat((result/100)*globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent);
    
    
    
    //// Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscountCampaignPersent').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;">'+globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent.toFixed(2)+'% -Membership Discount(RM):</div>');
    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_Discount').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2) + '</div>');
    
    // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + (result.toFixed(2)-globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice.toFixed(2)).toFixed(2) + '</div>');
       
    
    
    
    
    
    // if(globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent>0){
    
    
    
    // }
                 
    
    
    
    
    
    FloatPanel_AyohaStore_CheckOut_Calculate_GrandTotal_ReOrder()
                 
                    Ext.Viewport.unmask();
                }
                if (data.total == 0) {
                   globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent=0.00;
                   globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice=0.00;




                   FloatPanel_AyohaStore_CheckOut_Calculate_GrandTotal_ReOrder();
                    Ext.Viewport.unmask();
                    if(isFloatPanel_AyohaStore_CheckOutOpen == 'N'){
                        return;
                    }
                   // Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_MembershipDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');
                  
    
                }
    
    
    
    
    
            }
            else {
    
                alert(result.responseText);
                Ext.Viewport.unmask();
            }
    
    
        },
    
        failure: function (result, request) {
            alert(result.responseText);
            Ext.Viewport.unmask();
        }
    
    });
    
    
    
    
    }