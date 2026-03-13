
Ext.define('BuskartApp.view.Membership.FloatPanel_CheckOut_MembershipCard', {
    //    requires: [
    //'Ext.carousel.Carousel',
    //'Ext.util.DelayedTask',
    //'Ext.Video'
    //    ],
    });
    
    var _FloatPanel_CheckOut_MembershipCard=null;
    var isFirstLoad_ViewReceipt = true;
    
    var isFloatPanel_CheckOut_MembershipCardOpen = 'N';
    
    var globalFloatPanel_CheckOut_MembershipCard_OrderOption;
    var globalFloatPanel_CheckOut_MembershipCard_OrderStatus;
    var globalFloatPanel_CheckOut_MembershipCard_OrderNo;
    var globalFloatPanel_CheckOut_MembershipCard_GrandTotal;
    var globalFloatPanel_CheckOut_MembershipCard_ItemCartCode;
    
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryChargeCode;
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryCharge;
    var globalFloatPanel_CheckOut_MembershipCard_MembershipDiscountCampaignCode;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_MembershipDiscount;
    var globalFloatPanel_CheckOut_MembershipCard_VoucherCampaignCode;
    var globalFloatPanel_CheckOut_MembershipCard_VoucherDiscount;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryAddress_StreetName;
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryAddress_Town;
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryAddress_Postcodes;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryAddress_StateCode;
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryAddress_CountryCode;
    var globalFloatPanel_CheckOut_MembershipCard_ReferenceName;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_ReferencePhoneNo;
    var globalFloatPanel_CheckOut_MembershipCard_NoteToSeller;
    var globalFloatPanel_CheckOut_MembershipCard_MerchantPointEarn;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_AyohaPointEarn;
    var globalFloatPanel_CheckOut_MembershipCard_EnterpriseAccNo;
    var globalFloatPanel_CheckOut_MembershipCard_SubscriberAccNo;
    
    var globalFloatPanel_CheckOut_MembershipCard_MembershipCardCode;
    
    var globalFloatPanel_CheckOut_MembershipCard_DeliveryName;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_TotalQuantity;
    var globalFloatPanel_CheckOut_MembershipCard_SubTotal;
    var globalFloatPanel_CheckOut_MembershipCard_PaymentAmount;
    
    
    
    
    var globalFloatPanel_CheckOut_MembershipCard_PaymentMethod;
    var globalFloatPanel_CheckOut_MembershipCard_PaymentMethodCode;
    var globalFloatPanel_CheckOut_MembershipCard_CreatedBy;
    var globalFloatPanel_CheckOut_MembershipCard_PaymentStatus;
    
    
    var globalFloatPanel_CheckOut_MembershipCard_EnterpriseName;
    var globalFloatPanel_CheckOut_MembershipCard_EnterpriseLogo;
    


    
function FloatPanel_CheckOut_MembershipCardCreateIfNeeded() {
  //  if (_FloatPanel_CheckOut_MembershipCard && !_FloatPanel_CheckOut_MembershipCard.destroyed) return;
 _FloatPanel_CheckOut_MembershipCard =
        Ext.create('Ext.Container', {
             id: 'FloatPanel_CheckOut_MembershipCardID',
            floated: true,
        centered: true,
        fullscreen: true,
        //closeAction: 'hide',
       closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
            },
            hideAnimation: {
                //type: 'slideOut',
                //direction: 'left',
                //easing: 'cubic-bezier(.7,0,.7,1)',
                //duration: 250
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
           
            },
            //style: 'border-bottom:1px solid;background-color:#353839;',
           // style: 'border-bottom:1px solid;background-color:#F3F4F6;',
           
            //listeners: {
            //    initialize: function (c) {
            //        this.element.on({
            //            swipe: function (e, node, options) {
            //                //if (e.direction == "up") {
            //                //    LoyaltyCardRedeemListHide();
            //                //}
            //                if (e.direction == "left") {
            //                    _FloatPanel_CheckOut_MembershipCard.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'left',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250
    
            //                    }));
    
            //                    isFloatPanel_CheckOut_MembershipCardOpen = 'N';
            //                } if (e.direction == "right") {
            //                    _FloatPanel_CheckOut_MembershipCard.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'right',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250
    
            //                    }));
            //                    isFloatPanel_CheckOut_MembershipCardOpen = 'N';
            //                }
            //                RemovePages(_FloatPanel_CheckOut_MembershipCard, "isFloatPanel_CheckOut_MembershipCardOpen");
            //            }
            //        });
            //    }
            //},
    
            items: [
    
    
    
                {
                    xtype: 'container',
                    width: '100%',
                    height: '100%',
                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                   // style: ' background-color: #F3F4F6;',
                   id: 'FloatPanel_CheckOut_MembershipCard_InnerID',
                   //style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                   style: ayohaThemeColor_Hero(),
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
                                    docked: 'top',
                                    height: ayoha_HeaderHeight(),
                                    // width: 40,
    
                                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                    //hidden: true,
    
                                    id: 'containerFloatPanel_CheckOut_MembershipCardHeader',
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
                                                xtype: 'spacer',
                                                width:10

                                            },
    
                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_CheckOut_MembershipCardBack',
                                                             height: 30,
                                                             width: 65,
                                                             // iconCls: 'list',
                                                             html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 FloatPanel_CheckOut_MembershipCardHide(false);
                                                                 // FloatPanel_CheckOut_MembershipCard_AddCardHide();
                                                                //  isFloatPanel_CheckOut_MembershipCardOpen = 'N';
                                                                //  isFloatPanel_CheckOut_MembershipCardOpen_ReOrder= 'N';
                                                                //  _FloatPanel_CheckOut_MembershipCard.hide(Ext.fx.Animation({
                                                                //      type: 'slideOut',
                                                                //      direction: 'left',
                                                                //      easing: 'cubic-bezier(.7,0,.7,1)',
                                                                //      duration: 250
    
                                                                //  }));
                                                                //  RemovePages("FloatPanel_CheckOut_MembershipCardHide()");
                                                                 FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();
                                                                 //  FloatPanel_CheckOut_MembershipCard_AddCardHide();
    
                                                             }
                                                         },
    
                                                          {
                                                              xtype: 'spacer',
    
                                                          },
    
    
                                                          {
                                                              margin: '0 0 0 0',
                                                              hidden: true,
                                                              id: 'htmlFloatPanel_CheckOut_MembershipCard_TitleHeaderTxt',
                                                              html: ayohaTheme_HeaderText('Check-Out'),
                                                          },
    
                                                           {
                                                               margin: '-18 0 0 0',
                                                               hidden:true,
                                                               id: 'htmlFloatPanel_CheckOut_MembershipCard_TitleHeaderTxt_AfterOrder',
                                                               html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:17px 0px 0px 0px">Loading Status.. </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-25px 0px 0px 0px">Please Wait...</div>',
    
                                                               // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',
    
                                                               //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                           },
                                                                
                                                           {
                                                            xtype: 'spacer',
                                                            width:15
  
                                                        },
    
    
    
    
    
    
    
    
                                           ]
    
                                },
    
    
    
    
    
    
    
                                {
                                    xtype: 'container',
                                    //width: '110%',
                                    docked: 'bottom',
                                    margin: '0 0 0 0',
                                  //  height: 40,
                                     height: 90,
                        width: '100%',
                        style: 'border-top:2px solid rgba(124,58,237,.14);border-bottom:2px none #D25959;border-left:2px none #D25959;border-right:2px none #D25959;background-color:white;',
                                 //   style: 'background-color:white;border-top:2px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
    
                                    },
                                    items: [
                                       
                                        
    
                                        {
                                            xtype: 'container',
                                            id: 'containerFloatPanel_CheckOut_MembershipCard_MakePayment_AyohaEwallet',
                                            width: '97%',
                                            height: 90,
                                            margin: '0 0 0 0',
                                            // hidden: true,
                                            style: "background-color: white;",
                                          
                                            //style: "background-color: #F35B57;",
                                            // style: 'border-right:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-top:1px solid grey ;background: white;border-radius: 10px 10px 10px 10px;',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
    
                                            },
                                            items: [
                                               
    
                                                 //{
                                                 //    id: 'htmlFloatPanel_CheckOut_MembershipCard_AyohaEwallet_PayNow',
                                                 //    //margin: '-27 0 0 0',
                                                 //    margin: '-4 0 0 0',
                                                 //    html: '<button OnClick="FloatPanel_CheckOut_MembershipCardShow()" class="buttonPayNow">Confirm & Pay</button>',
                                                 //    hidden: true,
    
    
                                                 //},
                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_CheckOut_MembershipCard_ConfirmPay',
                                                   name: 'namecontainerFloatPanel_CheckOut_MembershipCard_ConfirmPay',
                                                   hidden:true,
                                                     width: '95%',
                                                     height: 90,
                                                     style: 'background-color:transparent;',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'
    
                                                     },
                                                     items: [

                                                        {
                                 width: '100%',
                                  height: 90,
                               id: 'htmlFloatPanel_CheckOut_MembershipCard_ConfirmPayText_ConfirmPay',                             
                            html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" >Confirm And Pay Now </button>' +
                              
                            '</div>' 
                            },
                                     
                                                     ]
                                                 },



                                                 {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_FreeMembership',
                                                    hidden:true,
                                                  name: 'namecontainerFloatPanel_CheckOut_MembershipCard_FreeMembership',
                                                    width: '95%',
                                                    height: 90,
                                                    style: 'background-color:transparent;',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'center',
                                                        align: 'center'
   
                                                    },
                                                    items: [

                                                       {
                                width: '100%',
                                 height: 90,
                              id: 'htmlFloatPanel_CheckOut_MembershipCard_ConfirmPayText_FreeMembership',                             
                           html:
                            '<div class="ayohaMActions">' +
                              '<button class="ayohaCheckOutBtn" >🎉 100% FREE, Just a Tab Away! </button>' +
                             
                           '</div>' 
                           },
                                    
                                                    ]
                                                },
    
                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_CheckOut_MembershipCard_ViewReceipt',
                                                     name: 'namecontainerFloatPanel_CheckOut_MembershipCard_ViewReceipt',
                                                     hidden:true,
                                                     width: '95%',
                                                     height: 90,
                                                    // margin: '-20 0 0 -26',
      style: 'background-color:transparent;',
                                                     //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',
    
                                                     //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'
    
                                                     },
                                                     items: [

                                                        {
                                 width: '100%',
                                  height: 90,
                               id: 'htmlFloatPanel_CheckOut_MembershipCard_ViewReceiptText_ViewReceipt',                             
                            html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" >Print Receipt</button>' +
                              
                            '</div>' 
                            },
                                                        
                                                     ]
                                                 },



                                                 {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_OrderStatus',
                                                  name: 'namecontainerFloatPanel_CheckOut_MembershipCard_OrderStatus',
                                                    width: '95%',
                                                    hidden:true,
                                                     width: '95%',
                                                     height: 90,
                                                    // margin: '-20 0 0 -26',
      style: 'background-color:transparent;',
                                                    //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'center',
                                                        align: 'center'
   
                                                    },
                                                    items: [
                                                        {
                                                            width: '100%',
                                  height: 90,
                               id: 'htmlFloatPanel_CheckOut_MembershipCard_OrderStatusText_OrderStatus',                             
                            html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" >View Order Status Log</button>' +
                              
                            '</div>' 
                                                        },
                                                       
                                                    ]
                                                },





                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_CheckOut_MembershipCard_OrderOnly',
                                                     name: 'namecontainerFloatPanel_CheckOut_MembershipCard_OrderOnly',
                                                     hidden:true,
                                                     width: '95%',
                                                     height: 90,
                                                    // margin: '-20 0 0 -26',
      style: 'background-color:transparent;',
                                                     //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'
    
                                                     },
                                                     items: [

                                                        {
                                                            width: '100%',
                                  height: 90,
                               id: 'htmlFloatPanel_CheckOut_MembershipCard_OrderOnlyText_CancelOrder',                             
                            html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" >Submit Order</button>' +
                              
                            '</div>' 
                                                        },
                                                       
                                                     ]
                                                 },
    
                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_CheckOut_MembershipCard_CancelOrder',
                                                     name: 'namecontainerFloatPanel_CheckOut_MembershipCard_CancelOrder',
                                                     hidden: true,
                                                     width: '95%',
                                                     height: 90,
                                                    // margin: '-20 0 0 -26',
      style: 'background-color:transparent;',
                                                     //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',
    
                                                     //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'center',
                                                         align: 'center'
    
                                                     },
                                                     items: [
                                                        {
                                                            width: '100%',
                                  height: 90,
                               id: 'htmlFloatPanel_CheckOut_MembershipCard_CancelOrderText_CancelOrder',                             
                            html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" >Cancel This Orders</button>' +
                              
                            '</div>' 
                                                        },
                                                         
                                                     ]
                                                 },
    
    
    
                                                  {
                                                      xtype: 'container',
                                                      id: 'containerFloatPanel_CheckOut_MembershipCard_DeleteOrder',
                                                      name: 'namecontainerFloatPanel_CheckOut_MembershipCard_DeleteOrder',
                                                      hidden: true,
                                                      width: '95%',
                                                     height: 90,
                                                    // margin: '-20 0 0 -26',
      style: 'background-color:transparent;',
                                                      //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',
    
                                                      //style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'center',
                                                          align: 'center'
    
                                                      },
                                                      items: [

                                                        {
                                                            width: '100%',
                                  height: 90,
                               id: 'htmlFloatPanel_CheckOut_MembershipCard_DeleteOrderText_DeleteOrder',                             
                            html:
                             '<div class="ayohaMActions">' +
                               '<button class="ayohaCheckOutBtn" >Delete Order</button>' +
                              
                            '</div>' 
                                                        },
                                                          
                                                      ]
                                                  },
    
                                            ]
                                        },
                                    ]
                                },
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_CheckOut_MembershipCardStampCardList',
                                    // margin: '-10 0 0 0',
                                    width: '100%',
                                    height: '100%',
                                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                    style: "background-color: transparent;",
                                    //style: "background-color: #F35B57;",
                                    title: 'FloatPanel_CheckOut_MembershipCardCardLis',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
    
                                    },
                                  
                                    //listeners: {
                                    //    initialize: function (c) {
    
                                    //        this.element.on({
                                    //            swipe: function (e, node, options) {
                                    //                if (e.direction == "left") {
                                    //                    //  alert("Hey! I swipe left");
    
                                    //                } else {
                                    //                    //  alert("Hey! I swipe right");
                                    //                    Ext.getCmp('tabpanelFloatPanel_CheckOut_MembershipCard').setActiveItem(0);
                                    //                }
                                    //            }
                                    //        });
                                    //    }
                                    //},
    
                                    items: [
                                        {
                                            xtype: 'panel',
                                            height: 5
                                        },
    
                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: '100%',
                                          style: "background-color: transparent;",
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center'
    
                                          },
                                          scrollable: {
                                              directionLock: true,
                                              indicators: false
                                          },
                                          items: [
    
  
    
                                              {
                                                
                                                  xtype: 'container',
                                                  width: '100%',
                                                 // height: 115,
                                                  height: 160,
                                                  style: "background-color: transparent;",
                                                  id:'containerFloatPanel_CheckOut_MembershipCard_Header',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'
    
                                                  },
                                                  items: [
                                                      {
                                                          width: 72,
                                                          height: 82,
                                                          id: 'htmlFloatPanel_CheckOut_MembershipCard_EnterpriseLogo',                                                     
                                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:0px 0px 0px 0px"><img src="resources/icons/communityCoffea.png" style="width:62px;height:62px;"/></div>',
                                                      },
                                                      {
                                                          id: 'htmlFloatPanel_CheckOut_MembershipCard_EnterpriseName', 
                                                                                                            
                                                          html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Community Coffee Sdn Bhd</div>',
                                                      },
                                                      {
                                                        margin: '5 0 0 0',
                                                        id: 'htmlFloatPanel_CheckOut_MembershipCard_EnterpriseFullAddress', 
                                                          width: '90%',                                                     
                                                        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Community Coffee Sdn Bhd</div>',
                                                    },
                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          hidden: true,
                                                          height: 5,
                                                          style: "background-color: transparent;",
                                                          layout: {
                                                              type: 'vbox',
                                                              pack: 'center',
                                                              align: 'center'
    
                                                          },
                                                          items: [
                                                              {
                                                                  xtype: 'container',
                                                                  width: '80%',
                                                                  height: 2,
                                                                  style: "background-color: grey;",
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              },



                                              {
                                                xtype: 'container',
                                                width: '100%',
                                              //  height: 1800,
                                              id:'containerFloatPanel_CheckOut_MembershipCard_MainForm',
                                                height: 1200,
                                                style: "background-color: white;",
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
                                        
                                                },
                                                items:[
                                                              ///////////////////////////////////Bill To

                                              {
                                                xtype: 'container',
                                                width: '100%',
                                                height:100,
                                                // style: "background-color: transparent;",
                                                id:'containerFloatPanel_CheckOut_MembershipCard_BillTo_Main',
                                                style: "background-color: white;",
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'center'
                                            
                                                },
                                                items:[
                                                    {
                                                        xtype: 'container',
                                                        width: '100%',
                                                        height: 90,
                                                         id:'containerFloatPanel_CheckOut_MembershipCard_BillTo_Main_inner',
                                                        style: CoreVariable_CheckOutBoxDesign,
                                                       // style: "background-color: transparent;border-top:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);",
                                                        layout: {
                                                            type: 'hbox',
                                                            pack: 'start',
                                                            align: 'center'
                                                
                                                        },
                                                        items:[
                                                            {
                                                                xtype: 'container',
                                                                width: '50%',
                                                                 height: 70,
                                                                id:'containerFloatPanel_CheckOut_MembershipCard_BillTo_Main_inner_inner',
                                                                style: "background-color: transparent;",
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'left'
                                                        
                                                                },
                                                                items:[
                                                                    {
                                                                        id: 'htmlFloatPanel_CheckOut_MembershipCard_BillTo',
                                                                        margin: '10 0 0 18',
                                                                      html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 0px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Bill To:</span></div>',
                                                                          // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                                                                       },
                                                                        {
                                                                        id: 'htmlFloatPanel_CheckOut_MembershipCard_BillToEmail',
                                                                        margin: '-9 0 0 4',
                                                                        html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:263px;text-align:left;align-items: center;color:#6B7280;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">admin@ayoha-reward.com</span></div>',
                                                                          // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                                                                       },
                                                                       {
                                                                        id: 'htmlFloatPanel_CheckOut_MembershipCard_BillToName',
                                                                        hidden: true,
                                                                        margin: '-9 0 0 4',
                                                                        html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:#6B7280;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">TARMIZI BIN RAHIM</span></div>',
                                                                          // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                                                                       },
                                                                      
                                                                       {
                                                                        id: 'htmlFloatPanel_CheckOut_MembershipCard_BillToPhoneNumber',
                                                                        hidden: true,
                                                                        margin: '-10 0 0 4',
                                                                        html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:#6B7280;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">0133376958</span></div>',
                                                                          // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                                                                       },




                                                                       {
            id: 'htmlFloatPanel_CheckOut_MembershipCard_TableNo',
            margin: '5 0 0 7',
            hidden: true,
            height: 35,  
             width: '100%',
             html:'<div style="font-family:Arial,sans-serif;font-size:12px;color:black;background-color:transparent;width:163px;text-align:left;margin:0;padding:5px 8px;">' +
    '<div style="font-weight:bold;margin:0 0 1px 0;">Table No:</div>' +
    '<div style="font-weight:normal;margin:0 0 0 4px;">##0000##</div>' +
'</div>'
          //  html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:200px;text-align:left;align-items: center;color:#6B7280;background-color:transparent; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">20/7/2025 11:42:24 PM</span></div>',
            
           },
                                                                ]
                                                            },
                                                            {
                                                                xtype: 'container',
                                                                width: '50%',
                                                                height: 90,
                                                               // hidden  : true,
                                                                id: 'containerFloatPanel_CheckOut_MembershipCard_OrderDateTableNo',
                                                                style: "background-color: transparent;",
                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'
                                                        
                                                                },
                                                                items:[


{
    xtype: 'container',
    width: '90%',
    height: 50,   
    id: 'containerFloatPanel_CheckOut_MembershipCard_OrderDate',
    hidden  : true,
    style: "background-color: transparent;",
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },items:[
        
           {
            id: 'htmlFloatPanel_CheckOut_MembershipCard_OrderDate',
            margin: '0 0 0 0',
             width: '100%',
            html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:200px;text-align:left;align-items: center;color:#6B7280;background-color:transparent; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">20/7/2025 11:42:24 PM</span></div>',
            
           },
           {
            xtype: 'container',
            width: 20,
            height: 35, 
           // height: 2,
           }
    ]
},


{
    xtype: 'container',
    width: '90%',
    height: 35,   
    id: 'containerFloatPanel_CheckOut_MembershipCard_OrderNo',
    hidden  : true,
    style: "background-color: transparent;",
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },items:[
        
           {
            id: 'htmlFloatPanel_CheckOut_MembershipCard_OrderNo',
            margin: '0 0 0 0',
            height: 35,  
             width: '100%',
             html:'<div style="font-family:Arial,sans-serif;font-size:12px;color:black;background-color:transparent;width:200px;text-align:right;margin:0;padding:5px 8px;">' +
    '<div style="font-weight:bold;margin:0 0 1px 0;">Order No:</div>' +
    '<div style="font-weight:normal;">123456789123456789</div>' +
'</div>'
          //  html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:200px;text-align:left;align-items: center;color:#6B7280;background-color:transparent; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">20/7/2025 11:42:24 PM</span></div>',
            
           },
           {
            xtype: 'container',
            width: 20,
            height: 35, 
           // height: 2,
           }
    ]
},
// {
//     xtype: 'container',
//     width: '100%',
//     height: 35,   
//     margin: '10 0 0 0',
//     hidden  : true,
//     id: 'containerFloatPanel_CheckOut_MembershipCard_TableNo',
//     style: "background-color: transparent;",
//     layout: {
//         type: 'vbox',
//         pack: 'center',
//         align: 'right'

//     },items:[
//         {
//             id: 'htmlFloatPanel_CheckOut_MembershipCard_TableNoLabel',
//             margin: '0 0 0 0',
//             html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">Table No:</span></div>',
//               // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
//            },
//            {
//             id: 'htmlFloatPanel_CheckOut_MembershipCard_TableNo',
//             margin: '-8 0 0 0',
//             html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:#6B7280;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">0</span></div>',
//               // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
//            },
//     ]
// },

                                                                   
                                                                ]
                                                            }
                                                        ]
                                                      },
                                                ]
                                              },
                                             
    
    /////////////////////////Ordered Item List//////////////////////////////////////


    {
        xtype: 'container',
        width: '100%',
       // height: 415,
        height: 400,
        style: "background-color: transparent;",
        id:'containerFloatPanel_CheckOut_MembershipCard_OrderedItemList_Main',
       // style: "background-color: yellow;",
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'
    
        },
        items:[
            {
                xtype: 'container',
                width: '100%',
               // height: 405,
                height: 390,
                id:'containerFloatPanel_CheckOut_MembershipCard_OrderedItemList_InnerMain',
              //  style: "background-color: orange;",
               style: CoreVariable_CheckOutBoxDesign,
              //  style: "background-color: transparent;border-top:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);",
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
            
                },
                items: [
                    {
                        xtype: 'container',
                        width: '99%',
                        margin: '0 0 0 0',
                        height: 35,
                        style: "background-color: transparent;",
                       // style: "background-color: rgb(255, 170, 204); background-image: linear-gradient(rgba(255, 0, 222, 0.46), rgba(200, 0, 255, 0.79));border-top:1px none grey;border-left:1px none grey;border-bottom:1px solid grey;border-right:1px none grey;",
                        layout: {
                            type: 'hbox',
                            pack: 'left',
                            align: 'center'
            
                        },
                        items: [
                            {
            xtype:'spacer',
            width:20
                            },
                            {
                                id: 'htmlFloatPanel_CheckOut_MembershipCard_OrderItem',
                                html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Ordered Items</span></div>',
                                  // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                               },
                           
                            
                        ]
                    },
            
                   

//////start listview

{
                        xtype: 'container',
                        width: '99%',
                        margin: '0 0 0 0',
                        height: 12,
                        style: "background-color: transparent;",
                       // style: "background-color: rgb(255, 170, 204); background-image: linear-gradient(rgba(255, 0, 222, 0.46), rgba(200, 0, 255, 0.79));border-top:1px none grey;border-left:1px none grey;border-bottom:1px solid grey;border-right:1px none grey;",
                        layout: {
                            type: 'hbox',
                            pack: 'start',
                            align: 'center'
            
                        },
                        items: [
                            {
            xtype:'spacer',
            width:30
                            },
                           
{
                              
                                html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;background-color:transparent;height:25px; padding: 5px 0px;">◉ 1 x Membership Card</div>',
                              
                               },
                           
                            
                        ]
                    },


{
  
  id: 'FloatPanel_CheckOut_MembershipCard_PurchasedMembershipCard',
  margin: '10 0 0 0',
  xtype: 'dataview',
  
 // store:_DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore,
height: 350,
//height: 325,
// height: 0,
  style: "background-color: rgba(0, 0, 0, 0);",
  inline: {
      wrap: false
  },
  scrollable: {
      direction: 'horizontal',
      indicators: false,
  },
  width: '93%',


itemTpl: new Ext.XTemplate(
'<div class="ayohaCardItem">',

'<div class="ayohaCardWrap">',
// '<div class="priceLeft" style="margin:-10px 0px 0px 0px;height:30px;">' ,
// '<div class="priceSubCheckout_membershipcard" style="margin:0px 0px 0px 0px;height:30px;">1 x Membership Card</div><br>' ,
// '</div>',
// ===== CARD FACE =====
'<div id="membershipCard_{ID}" class="ayohaCardFace" style="background-image:url({MembershipCardBackgroundImg});background-size:100% 100%;background-position:center center;background-repeat:no-repeat;">',

'<div class="ayohaCardOverlay"></div>',
'<div class="ayohaCardInnerRim"></div>',

'<div class="ayohaCardContent">',

'<table class="ayohaCardTable" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)">',
  '<tbody>',

    '<tr>',
      '<td class="ayohaCardTop" colspan="3">',
        '<div class="ayohaTopRow">',
          '<div class="ayohaTopLogo">{ModifiedEnterprisesLogo}</div>',
          '<div class="ayohaTopName">{ModifiedEnterprisesName}</div>',
        '</div>',
      '</td>',
    '</tr>',

    '<tr>',
      '<td class="ayohaCardMid" colspan="3"><br><br>',
        '<div class="ayohaCardType">{MembershipCardType}</div>',
        '<div class="ayohaCardNo">123 4567</div>',
        '<div class="ayohaCardName">YOUR NAME</div>',
      '</td>',
    '</tr>',

    '<tr>',
      '<td class="ayohaCardColL" colspan="2">',
        '<div class="k">Member Since</div>',
         '<div class="v">..</div>',
        '<div class="v">After Approved</div>',
      '</td>',
      '<td class="ayohaCardColR">',
        '<div class="k">Valid Until</div>',
        '<div class="v">{ModifiedStrExpiredDate}</div>',
      '</td>',
    '</tr>',

  '</tbody>',
'</table>',

'</div>', // end ayohaCardContent
'</div>',   // end card face



// ===== PRICE ROW (FLEX SIDE-BY-SIDE) =====





'</div>', // ✅ end ayohaCardWrap (tutup selepas priceRow)
'</div>',    // end ayohaCardItem

'<div class="ayohaCardPriceRow" style="width:100%;height:60px; display:flex; align-items:center;  box-sizing:border-box;">' ,


'<div class="priceLeft">' ,

'<div class="priceSubCheckout_membershipcard">.<br>.</div>' ,
'<div class="priceCheckout_membershipcard" style="padding:0px 2px;">Membership Card Info</div>' ,
'<div class="priceSubCheckout_membershipcard" style="margin-top:3px;padding:0px 11px;">◉ Card Name:{MembershipCardName}</div>' ,
'<div class="priceSubCheckout_membershipcard" style="margin-top:3px;padding:0px 11px;">◉ Card level:{MembershipCardType}</div>' ,
'<div class="priceSubCheckout_membershipcard" style="margin-top:3px;padding:0px 11px;">◉ Payment Plan Charge(RM):{MembershipCardFee}-({MembershipCardFeePaymentCycle})</div>' ,
'</div>',


// '<div style="margin-left:auto;">' ,
// '<button class="ayohaCtaGetItNow" ',
// 'onclick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)">' ,
// '<span class="ayohaCtaText">Get It Now!</span>' ,
// '<span class="ayohaCtaArrow">→</span>' ,
// '</button>',
// '</div>' ,

'</div>'
),





  //emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

},



                            //////////////////////////////////////////////// end listview





                  
            
                ]
            },

        ]
    },

    

//////////////////////////// Billing Detail Info    

{
    xtype: 'container',
    width: '100%',
  //  margin: '20 0 0 0',
    height: 190,
    id:'containerFloatPanel_CheckOut_MembershipCard_Charges_Main',
    style: "background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',
             id:'containerFloatPanel_CheckOut_MembershipCard_Charges_Main_Inner',
          //  margin: '20 0 0 0',
            height: 180,
            style: CoreVariable_CheckOutBoxDesign,        
          //  style: "background-color: transparent;border-top:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    width: '99%',
                    margin: '0 0 0 0',
                    height: 35,
                    style: "background-color: transparent;",
                   // style: "background-color: rgb(255, 170, 204); background-image: linear-gradient(rgba(255, 0, 222, 0.46), rgba(200, 0, 255, 0.79));border-top:1px none grey;border-left:1px none grey;border-bottom:1px solid grey;border-right:1px none grey;",
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'center'
        
                    },
                    items: [
                        {
        xtype:'spacer',
        width:20
                        },
                        {
                            id: 'htmlFloatPanel_CheckOut_MembershipCard_Charges',
                            //html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:white;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">Order Summary</span></div>',
                            html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:163px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Order Summary:</span></div>',
                           },
                       
                        
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height: '100%',
                    margin: '15 0 0 0',
                    id:'containerFloatPanel_CheckOut_MembershipCard_BillingDetailInfo',
                    style: "background-color: transparent;border-top:1px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-bottom:2px none #ECF0F1;;",
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'right'
            
                    },
                    items: [
                     
                        {
    xtype: 'component',
    id: 'htmlOrderSummaryAyoha',
    margin: '18 16 10 16',
    width: '100%',
    html: [
        '<div class="ayohaOrderSummaryWrap">',
            // '<div class="ayohaOrderSummaryTitle">Order Summary:</div>',

            '<div class="ayohaOrderSummaryRows">',

                '<div class="ayohaOrderSummaryRow">',
                    '<div class="ayohaOrderSummaryLabel">Membership Fee(RM):</div>',
                    '<div id="ayohaOrderSummaryMembershipFee" class="ayohaOrderSummaryValue">50.00</div>',
                '</div>',

                '<div id="ayohaOrderSummaryDiscountRow" class="ayohaOrderSummaryRow" style="display:none;">',
                    '<div class="ayohaOrderSummaryLabel">Discount(RM):</div>',
                    '<div id="ayohaOrderSummaryDiscount" class="ayohaOrderSummaryValue">0.00</div>',
                '</div>',

            '</div>',

            '<div class="ayohaOrderSummaryDivider"></div>',

            '<div class="ayohaOrderSummaryGrandRow">',
                '<div class="ayohaOrderSummaryGrandLabel">Grand Total(RM):</div>',
                '<div id="ayohaOrderSummaryGrandTotal" class="ayohaOrderSummaryGrandValue">50.00</div>',
            '</div>',

            '<div class="ayohaOrderSummaryBottomDivider"></div>',
        '</div>'
    ].join('')
},
            
            
            
            
            
                                                        
                        
                    ]
                },
            ]
        }
    ]
},
 ////////////////////////Membership point/stamp


 {
    xtype: 'container',
    width: '100%',
   // hidden:true,
  //  margin: '20 0 0 0',
    height: 120,
    id:'containerFloatPanel_CheckOut_MembershipCard_MembershipPointPerk_Main',
    style: "background-color: white;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',
          //  margin: '20 0 0 0',
            height: 110,
            style: CoreVariable_CheckOutBoxDesign,         
            //style: "background-color: transparent;border-top:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    width: '99%',
                    margin: '0 0 0 0',
                    height: 35,
                    style: "background-color: transparent;", 
                    //style: "background-color: rgb(255, 170, 204); background-image: linear-gradient(rgba(255, 0, 222, 0.46), rgba(200, 0, 255, 0.79));border-top:1px none grey;border-left:1px none grey;border-bottom:1px solid grey;border-right:1px none grey;",
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'center'
        
                    },
                    items: [
                        {
        xtype:'spacer',
        width:20
                        },
                        {
                            id: 'htmlFloatPanel_CheckOut_MembershipCard_MembershipPointPerk',
                          //  html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:white;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">Membership Point & Stamp Earn</span></div>',
                            html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Membership Point & Stamp Earn:</span></div>',
                            // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                           },
                       
                        
                    ]
                },
        
        
                {
                    xtype: 'container',
                    width: '90%',
                    height: 80,
                    style: "background-color: transparent;",
                    // height: 30,
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
        
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 70,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center'
                        
                            },
                            items:[
                                {
                                    xtype: 'container',
                                    width: '33.33%',
                                    height: '100%',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                
                                    },
                                    items: [
                                         {
                                             id:'htmlFloatPanel_CheckOut_MembershipCard_MerchantPointEarnLbl',
                                             html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#6B7280;">Merchant Point Earn</div>'
                                         },
                                         {
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_CheckOut_MembershipCard_MerchantPointEarn',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">(NA)</div>'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: '33.33%',
                                    height: '100%',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                
                                    },
                                    items: [
                                         {
                                             id:'htmlFloatPanel_CheckOut_MembershipCard_StampedCollectedLbl',
                                             html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#6B7280;">Stamped Collected:</div>'
                                         },{
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_CheckOut_MembershipCard_StampedCollected',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">(NA)</div>'
                                        }
                                    ]
                                },
                               
                                {
                                    xtype: 'container',
                                    width: '33.33%',
                                    height: '100%',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                
                                    },
                                    items: [
                                         {
                
                                             html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#6B7280;" onclick="FloatPanel_AyohaReward_PointTransactionsShow();">Ayoha Point Earn:</div>'
                                         },
                                         {
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_CheckOut_MembershipCard_AyohaPointEarn',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">10</div>'
                                        }
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
 /////////////////////////Payment Info//////////////////////////////////////

 {
    xtype: 'container',
    width: '100%',
  //  margin: '20 0 0 0',
    height: 150,
    hidden: true,
    id:'containerFloatPanel_CheckOut_MembershipCard_PaymentInfo',
    style: "background-color: white;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',
           //  id:'containerFloatPanel_CheckOut_MembershipCard_PaymentInfo_Inner',
          //  margin: '20 0 0 0',
            height: 140,
            style: CoreVariable_CheckOutBoxDesign,         
           // style: "background-color: transparent;border-top:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[
                {
                    xtype: 'container',
                    width: '99%',
                    margin: '0 0 0 0',
                    height: 35,
                    style: "background-color: transparent;", 
                    //style: "background-color: rgb(255, 170, 204); background-image: linear-gradient(rgba(255, 0, 222, 0.46), rgba(200, 0, 255, 0.79));border-top:1px none grey;border-left:1px none grey;border-bottom:1px solid grey;border-right:1px none grey;",
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'center'
        
                    },
                    items: [
                        {
        xtype:'spacer',
        width:20
                        },
                        {
                            id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentInfoTitle',
                          //  html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:white;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">Membership Point & Stamp Earn</span></div>',
                            html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Payment Info:</span></div>',
                            // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                           },
                       
                        
                    ]
                },
        
        
                {
                    xtype: 'container',
                    width: '100%',
                    height: 90,
                    style: "background-color: transparent;",
                    // height: 30,
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
        
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 90,
                            margin: '0 0 0 0',
                            style: "background-color: transparent;",
                            //style: "background-color: white;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'

                            },
                            items: [
                                 {
                                     margin: ' 0 0 0 0',
                                     id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentInfo',
                                     width: '97%',
                                     height: 90,
                                     // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  style="border-color:white;color:white;width:100%;height:35px;text-align: left;font-size:12px;word-wrap:break-word;">'
                                     html: '<textarea id="input-FloatPanel_CheckOut_MembershipCard_PaymentInfo" style="width:100%;height:90px;padding: 0px 25px;box-sizing: border-box;border: 1px none grey;border-radius: 4px;font-family:Arial,sans-serif;font-size:12px;color:#6B7280;background-color:transparent;font-weight:bold;text-align:left;line-height:21px;" wrap="hard">Payment Method:Ayoha eWallet\nPayment Amount(RM):25:00\nPaymentStatus:FullPaid\nPayment No:145a4s4\nOrder No:ON-qiwuwu</textarea>'
                                     // html: '<input type="textarea" id="input-FloatPanel_AyohaEnterpriseAccount_EnterpriseDetails_Address" wrap="hard"  rows="25" cols="60">'

                                 },

                            ]
                        }
                        
                    ]
                },
               
          
            ]
        },
    ]
},


   

                                                
    

    /////////////////////////order option
    {
        xtype: 'container',
        width: '100%',
      //  margin: '20 0 0 0',
        height: 150,
        id:'containerFloatPanel_CheckOut_MembershipCard_OrderOption_Main',
        style: "background-color: white;",
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'
    
        },
        items:[
            {
                xtype: 'container',
                width: '100%',
              //  margin: '20 0 0 0',
                height: 140,
                style: CoreVariable_CheckOutBoxDesign,         
               // style: "background-color: transparent;border-top:1px solid grey;border-left:1px solid grey;border-bottom:1px solid grey;border-right:1px solid grey;box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);",
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
            
                },
                items:[
                    {
                        xtype: 'container',
                        width: '99%',
                        margin: '0 0 0 0',
                        height: 35,
                        style: "background-color: transparent;", 
                        //style: "background-color: rgb(255, 170, 204); background-image: linear-gradient(rgba(255, 0, 222, 0.46), rgba(200, 0, 255, 0.79));border-top:1px none grey;border-left:1px none grey;border-bottom:1px solid grey;border-right:1px none grey;",
                        layout: {
                            type: 'hbox',
                            pack: 'left',
                            align: 'center'
            
                        },
                        items: [
                            {
            xtype:'spacer',
            width:20
                            },
                            {
                                id: 'htmlFloatPanel_CheckOut_MembershipCard_OrderOptionTitle',
                              //  html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:white;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">Membership Point & Stamp Earn</span></div>',
                                html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Order Option:</span></div>',
                                // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                               },
                           
                            
                        ]
                    },
            
                    {
                        xtype: 'container',
                        width: '98%',                                                  
                        margin: '10 0 0 0',
                        height: 80,
                        layout: {
                            type: 'vbox',
                           

                        },
                        style: 'background-color:transparent',
                        items: [
                          
                            {
                                xtype: 'radiofield',
                                name: 'color',
                                id: 'radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_MakePayment',
                                value: 'MakePayment',
                                label: 'Make Payment',
                                checked: true,
                                labelWidth: '80%',
                                labelAlign: 'right',
                                listeners: {
                                    check: function (radioFld, event, obj) {
                                        if (radioFld.isChecked()) {
                                            globalFloatPanel_CheckOut_MembershipCard_OrderOption = 'MakePayment';
                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_CarouselMasterOutter').setHidden(false);
                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_SelectPaymentMethod').setHidden(false);

                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_OrderOnly').setHidden(true);
                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_ConfirmPay').setHidden(false);
                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_CancelOrder').setHidden(true);
                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_PaymentInfo').setHidden(true);
                                            Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_OrderStatus').setHidden(true);
                                           

                                        }
                                    }
                                }
                            },

                             {
                                 xtype: 'radiofield',
                                 name: 'color',
                                 margin: '-10 0 0 0',
                                 id: 'radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_ViewReceipt',
                                 value: 'ViewReceipt',
                                 label: 'View Receipt',
                                 hidden:true,
                                 checked: false,
                                 labelWidth: '80%',
                                 labelAlign: 'right',
                                 listeners: {
                                     check: function (radioFld, event, obj) {
                                        if (isFirstLoad_ViewReceipt) {
                                            isFirstLoad_ViewReceipt = false;
                                            return;  // keluar tanpa buat apa-apa pada first trigger
                                        }
                            

                                         if (radioFld.isChecked()) {
                                             globalFloatPanel_CheckOut_MembershipCard_OrderOption = 'ViewReceipt';
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_CarouselMasterOutter').setHidden(true);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_SelectPaymentMethod').setHidden(true);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_PaymentInfo').setHidden(false);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_OrderOnly').setHidden(true);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_ConfirmPay').setHidden(true);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_CancelOrder').setHidden(true);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_ViewReceipt').setHidden(false);
                                             Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_OrderStatus').setHidden(true);
                                           


                                         }
                                     }
                                 }
                             },
                                      {
                                          xtype: 'radiofield',
                                          value: 'OrderOnly',
                                           margin: '-10 0 0 0',
                                           disabled:true,
                                          hidden:true,
                                          name: 'color',
                                          id: 'radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_OrderOnly',
                                          label: 'Order Only',
                                          checked: false,
                                          labelWidth: '80%',
                                          labelAlign: 'right',
                                          listeners: {
                                              check: function (radioFld, event, obj) {
                                                  if (radioFld.isChecked()) {
                                                    Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_MakePayment').setChecked(true);
                                                     swalFireFail("This option not available!");
                                                     this.setChecked(false);
                                                   
                                     
                                                   

                                                  }
                                              }
                                          }
                                      },
                                          
                                          
                                           
                                        
                        ]
                    },
                    
                   
              
                ]
            },
        ]
    },
                                                 
                                                  
                            {
                                xtype: 'container',
                                width: '100%',
                                margin:'0 0 0 0',
                               // height: 140,
                                 height: 100,
                                id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_CarouselMasterOutter',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                              //  style: 'background-color:transparent',
                                style: CoreVariable_CheckOutBoxDesign,   
                                items: [

                                                                {
                                                                    margin: '10 0 0 25',
                                                        id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentMethodTitle',
                                                      //  html:'<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:white;background-color:transparent;height:25px; padding: 5px 10px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 5px;">Membership Point & Stamp Earn</span></div>',
                                                        html:'<div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:250px;text-align:left;align-items: center;color:black;background-color:transparent;height:25px; padding: 5px 0px;border-radius:5px 5px 0px 0px;border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;"> <span style="margin-left: 0px;">Payment Method:</span></div>',
                                                        // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">Billing Charges:</div>'
                                                       },
                                     {
                                         xtype: 'container',
                                         width: '100%',
                                         id: 'containerFloatPanel_CheckOut_MembershipCard_SelectPaymentMethod',
                                         margin: '5 0 0 0',
                                         height: 32,
                                         //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                         style: 'background-color:transparent',
                                         layout: {
                                             type: 'vbox',
                                             pack: 'start',
                                             align: 'center'
                                         },
                                         items: [
                                             {
                                                 id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod',
                                                 hidden:true,
                                                 margin: '0 0 0 0',

                                                 // zIndex: -10,
                                                 width: '90%',
                                                 // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                 // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                // html: '<input type="text" id="input-FloatPanel_CheckOut_MembershipCard_PaymentMethod" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Payment Method ---">',
                                                 html: '<input type="text" id="input-FloatPanel_CheckOut_MembershipCard_PaymentMethod" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px; border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 0px"  placeholder="--- Select Payment Method ---">',
                                             
                                             
                                                },


                                                {
                                                    id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod_FOC',
                                                    hidden:true,
                                                    margin: '0 0 0 0',
   
                                                    // zIndex: -10,
                                                    width: '90%',
                                                    // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                    // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                   // html: '<input type="text" id="input-FloatPanel_CheckOut_MembershipCard_PaymentMethod" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Payment Method ---">',
                                                    html: '<input type="text" id="input-FloatPanel_CheckOut_MembershipCard_PaymentMethod_FOC" readOnly  style="width:100%;height: 32px;padding: 5px 5px; border-top:1px none grey;border-left:1px none grey;border-right:1px none grey;border-bottom:1px none grey;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 0px"  placeholder="--- No Payment Needed ! FREE Membership ---">',
                                                
                                                
                                                   },
                                         ]
                                     },
                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           hidden:true,
                                           id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentAmountCaptured',
                                           height: 31,
                                           //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                           style: 'background-color:transparent',
                                           layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'left'
                                           },
                                           items: [
                                               {
                                                   id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentAmountCaptured',
                                                   margin: '0 0 0 0',

                                                   // zIndex: -10,
                                                   width: '98%',
                                                   // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                   // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                   html: '<input type="number" id="input-FloatPanel_CheckOut_MembershipCard_PaymentAmountCaptured" readOnly onClick="FloatPanel_AyohaStore_PaymentMethodListShow()" style="width:100%;height: 32px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 0px;background-color: #f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:center;margin:0px 0px 0px 3px"  placeholder="--- Select Payment Method ---">',
                                               },
                                           ]
                                       },
                                
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_CarouselMaster',
                                    height: 140,
                                    margin:'5 0 0 0',
                                    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'left'
                                    },
                                    items: [
                                        
                                        
                                        {
                                           // xtype: 'carousel',
                                            xtype: 'container',
                                            //hidden:true,
                                            id: 'FloatPanel_CheckOut_MembershipCard_PaymentMethod_CarouselMasterContent',
                                           // name: 'nameFloatPanel_CheckOut_MembershipCard_PaymentMethod_CarouselMasterContent',
                                            //width: '100%',
                                            //height: '100%',
                                            width: '100%',
                                            height: 140,
                                            style: 'background-color:white',
                                            //height: '100%',
             //                               indicator: false,
             //                               requires: [
             //'Ext.carousel.Carousel',
             //'Ext.util.DelayedTask',
             //'Ext.Video'
             //                               ],
                                            //listeners: {
                                             
                                            //    activeitemchange: function (container, newCard, oldCard, index) {
                                              


                                            //    },

                                            //},



                                            margin: '0 0 0 0',
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWallet',
                                                    height: 100,
                                                    hidden:true,
                                                    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                   // style: 'background-color:transparent',
                                                    style: "background-color: transparent;border-bottom:1px solid #ECF0F1;",
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'start',
                                                        align: 'left'
                                                    },
                                                    items: [
                                                    
                                                        {
                                                            xtype: 'container',
                                                            width: '100%',
                                                            id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner',
                                                            height: 100,
                                                            style: 'background-color:transparent',
                                                            layout: {
                                                                type: 'hbox',
                                                                pack: 'center',
                                                                align: 'left'
                                                            },
                                                            items: [
                                                                {
                                                                    xtype: 'container',
                                                                    width: '30%',
                                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_Logo',
                                                                    height: 100,
                                                                    style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'right'
                                                                    },
                                                                    items: [
                                                                        {

                                                                            width: 80,
                                                                            height: 80,

                                                                            html: '<img src="resources/icons/ayohaewallet01.png" alt="Image" style="width:80px;height:80px;">',
                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: '50%',
                                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_Text',
                                                                    height: 100,
                                                                    style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'left'
                                                                    },
                                                                    items: [
                                                                      
                                                                       {
                                                                           margin: '0 0 0 0',
                                                                           id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWallet_CurrentBalanceAmount',
                                                                           html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 30px;font-weight:bold;color:#c800ffc9;margin:0px 0px 0px 0px">RM 00.00</div>'
                                                                           // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                                       },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWallet_CurrentBalanceTxt',
                                                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Current Balance</div>'
                                                                            // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                                        },
                                                                    ]
                                                                },
                                                                {
                                                                    xtype: 'container',
                                                                    width: '20%',
                                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet',
                                                                    name:'namecontainerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet',
                                                                    height: 100,
                                                                    style: 'background-color:transparent',
                                                                    layout: {
                                                                        type: 'vbox',
                                                                        pack: 'center',
                                                                        align: 'center'
                                                                    },
                                                                    items: [
                                                                        {

                                                                            width: 30,
                                                                            height: 30,

                                                                            html: '<img src="resources/icons/AyohaeWallet_pic.png" alt="Image" style="width:30px;height:30px;">',
                                                                        },
                                                                        {
                                                                            margin: '0 0 0 0',
                                                                            id: 'htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWallet_TopUpCurrentBalanceTxt',
                                                                            html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 8px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha eWallet</div>'
                                                                            // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:0px 0px 0px 0px">Ayoha Reward</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 9px;font-weight:normal;color:black;margin:-6px 0px 0px 0px">Client V 1.0</div>'


                                                                        },
                                                                    ]
                                                                },
                                                                
                                                                 
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    id: 'containerFloatPanel_CheckOut_MembershipCard_PaymentMethod_FPX',
                                                    hidden:true,
                                                    height: 120,
                                                    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                    style: 'background-color:white',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
                                                    },
                                                    items: [
                                                        
                                                         {
                                                             

                                                                            width: 100,
                                                                            height: 100,

                                                                            html: '<img src="resources/icons/onlineFPX1.png" alt="Image" style="width:100px;height:100px;">',
                                                                        }
                                                         
                                                        

                                                    ]

                                                },


                                                
                                                  

                                            ]
                                        },




                                        



                                    ]
                                },
                                ]

                            },            
                                                     
    
    
    
                                                     {
                                                         xtype: 'container',
                                                         width: '100%',
                                                         id: 'containerFloatPanel_CheckOut_MembershipCard_BottomExtra',
                                                         height: 130,
                                                     }
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
    
    
    
    
    
    
    
    
    
    
    
    
            ]
    
    
    
    
    
        });
}
    
    
    
    
   
    
    function FloatPanel_CheckOut_MembershipCardShow() {
    
        // Ext.Viewport.remove(_FloatPanel_CheckOut_MembershipCard);
        // this.overlay = Ext.Viewport.add(FloatPanel_CheckOut_MembershipCard());
        // this.overlay.show();
        // AddRoutePages("FloatPanel_CheckOut_MembershipCardHide()");





 

FloatPanel_CheckOut_MembershipCardCreateIfNeeded();



_FloatPanel_CheckOut_MembershipCard.show();
// ✅ push browser back (ikut style kau)
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_CheckOut_MembershipCard', function () {
 
    FloatPanel_CheckOut_MembershipCardHide(true);
  });
}










        isFloatPanel_CheckOut_MembershipCardOpen = 'Y';
      
    
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:white;margin:0px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_EnterpriseLogo').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:white;margin:0px 0px 0px 0px"><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" style="width:72px;height:72px;border-radius:50%"/></div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_EnterpriseFullAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:white;margin:0px 0px 0px 0px">'+FloatPanel_AyohaStore_getEnterpriseFullAddress()+'</div>');
       
      globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint=0;
      globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint=10;
      globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp=0;
      
        //Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_SubTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:#6B7280;">' + TotalSumPrice.toFixed(2) + '</div>');
       
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_TitleHeaderTxt').setHidden(false);
      
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_MerchantPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:#6B7280;">' + globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint + '</div>');
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_AyohaPointEarn').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:#6B7280;">' + globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint + '</div>');
    
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_StampedCollected').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:#6B7280;">' + globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp + '</div>');
    
    
    
    
    
        
       // Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_CancelOrder').setHidden(true);
        Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_OrderOnly').setHidden(false);

        Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_ConfirmPay').setHidden(true);
        Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_FreeMembership').setHidden(false);

        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod').setHidden(true);
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod_FOC').setHidden(false);

        Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_MakePayment').setChecked(false);
        Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_MakePayment').setDisabled(true);

if(globalFloatPanel_MembershipCardList_NotYetSubscribed_price>0){
    Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_ConfirmPay').setHidden(false);
    Ext.getCmp('containerFloatPanel_CheckOut_MembershipCard_FreeMembership').setHidden(true);
    Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod').setHidden(false);
        Ext.getCmp('htmlFloatPanel_CheckOut_MembershipCard_PaymentMethod_FOC').setHidden(true);

        Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_MakePayment').setChecked(true);
        Ext.getCmp('radioBtnFloatPanel_CheckOut_MembershipCard_OrderOption_MakePayment').setDisabled(false);


}



    
        var containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_OrderOnly = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_CheckOut_MembershipCard_OrderOnly]')[0];
        var containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_OrderOnly = containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_OrderOnly.element;
        containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_OrderOnly.on('tap',
          function (event, node, options, eOpts) {
    
              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
              FloatPanel_CheckOut_MembershipCard_OrderOnly_SendOrder();
          }
        );
    
       
    
        var containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_ConfirmPay = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_CheckOut_MembershipCard_ConfirmPay]')[0];
        var containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_ConfirmPay = containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_ConfirmPay.element;
        containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_ConfirmPay.on('tap',
          function (event, node, options, eOpts) {
    
           if(globalFloatPanel_AyohaStore_PaymentMethod_Code)
           {
 if(globalFloatPanel_AyohaStore_PaymentMethod_Code==2){
              ProductInvoice_MakePayment();
                //ProductInvoice_SubscriptionsInsertUpdate();
                return;
              }
              if(globalFloatPanel_AyohaStore_PaymentMethod_Code==4){
                FloatPanel_AyohaStore_PaymentMethodList_MembershipsInsertPayAtCounter();
                  //ProductInvoice_SubscriptionsInsertUpdate();
                  return;
                }
           }else{
            swalFireFail("Please select payment method.!")
           }


//Staging_FloatPanel_CheckOut_MembershipCard_PaymentOrderAndConfirmPayInsert();
             



             
          }
        );
    
        



        var containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_FreeMembership = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_CheckOut_MembershipCard_FreeMembership]')[0];
        var containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_FreeMembership = containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_FreeMembership.element;
        containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_FreeMembership.on('tap',
          function (event, node, options, eOpts) {
    
              // FloatPanel_AyohaStore_Cart_Order_viaWhatsApp();
             // FloatPanel_CheckOut_MembershipCard_OrderOnly_SendOrder();
             FloatPanel_CheckOut_MembershipCard_MembershipsInsertPayFOC();
          }
        );




    
        var containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet]')[0];
        var containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet = containerViewnamecontainerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet.element;
        containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_PaymentMethod_AyohaeWalletInner_AddeWallet.on('tap',
          function (event, node, options, eOpts) {
    
    
              FloatPanel_AyohaeWalletShow();
             
    
    
          }
        );
     //alert("mangkuk:"+FloatPanel_AyohaStore_getEnterpriseName())
        
        var containerViewnnamecontainerFloatPanel_CheckOut_MembershipCard_OrderStatus = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_CheckOut_MembershipCard_OrderStatus]')[0];
        var containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_OrderStatus = containerViewnnamecontainerFloatPanel_CheckOut_MembershipCard_OrderStatus.element;
        containerViewElnamecontainerFloatPanel_CheckOut_MembershipCard_OrderStatus.on('tap',
          function (event, node, options, eOpts) {
    
            FloatPanel_AyohaStore_OrderHistory_SingleShow();
         
             
    
    
          }
        );
    
     
        
        FloatPanel_CheckOut_MembershipCard_LoadMembershipCard();
      
    
    }
  
   
    

    
    
    
    
    function FloatPanel_CheckOut_MembershipCardHide(animCfg, fromBack) {
      

        
    
    if (isFloatPanel_CheckOut_MembershipCardOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_CheckOut_MembershipCard.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_CheckOut_MembershipCard.hide();
          }
         
          isFloatPanel_CheckOut_MembershipCardOpen = 'N';isFloatPanel_CheckOut_MembershipCardOpen_ReOrder= 'N';
         FloatPanel_CheckOut_MembershipCard_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_isUsed = 'N';
          _FloatPanel_CheckOut_MembershipCard.destroy();
          _FloatPanel_CheckOut_MembershipCard = null;

         //  FloatPanel_MerchantDetailPageHide();
          //  Dashboard_SearchMerchantListHide();
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_CheckOut_MembershipCard');
          }
    }
    }
    
    
    
    










    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



















//////////////////////



function FloatPanel_CheckOut_MembershipCard_LoadMembershipCard() {


 _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
 _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
 _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo_DashboardMain');



 _DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore.load({
     callback: function (records, operation, success) {
         // alert(records.length)
         // alert(success)
         if (success && records.length > 0) {
        
 var record = records[0]; // Access only the first record
 AppState.MainDashboard.CheckIn_MembershipCardCode  = record.get('MembershipCardCode');
 AppState.MainDashboard.MembershipCardFeePaymentCycle  = record.get('MembershipCardFeePaymentCycle');
 AppState.MainDashboard.CountStar  = record.get('CountStar');
 AppState.MainDashboard.CountReviewer  = record.get('CountReviewer');
 globalFloatPanel_MembershipCardList_NotYetSubscribed_price=parseInt(record.get('MembershipCardFee'));
 document.getElementById('ayohaOrderSummaryMembershipFee').textContent = "00.00";
 document.getElementById('ayohaOrderSummaryGrandTotal').textContent = "00.00";
 if(record.get('MembershipCardFee')){
    document.getElementById('ayohaOrderSummaryMembershipFee').textContent = parseFloat(record.get('MembershipCardFee')).toFixed(2);
    document.getElementById('ayohaOrderSummaryGrandTotal').textContent = parseFloat(record.get('MembershipCardFee')).toFixed(2);
 }
 

             Ext.getCmp('FloatPanel_CheckOut_MembershipCard_PurchasedMembershipCard').setStore(_DataStore_MembershipCardLoadByEnterpriseAccNo_DashboardMainStore);
            
            
             // setScreenWidthMembershipCardCheckIn(count,jenis)
            setScreenWidthMembershipCardCheckIn(records.length,"membershipCard_");
           
             LoadingPanelHide(false);
         } else {
             LoadingPanelHide(false);
           //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
           
         }
     }
 });



}




















    
function FloatPanel_CheckOut_MembershipCard_MembershipsInsertPayFOC() {

    if(globalFloatPanel_MembershipCardList_NotYetSubscribed_price){

    }else{
        globalFloatPanel_MembershipCardList_NotYetSubscribed_price="00.00"
    }
    var objn = {
        "CampaignEnterpriseAccNo":AppState.MainDashboard.EnterpriseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        //"MembershipByMethod": "AyohaStoreRequest",
        "MembershipByMethod": 'FromMainPage_HScroller',        
        "ReferalSubscriberAccNo": "NA",
        "MembershipCardCode": AppState.MainDashboard.CheckIn_MembershipCardCode,
        "CreatedBy":GetCurrAyohaUserAccountNo(),
        "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+AppState.MainDashboard.EnterpriseAccNo+'-'+AppState.MainDashboard.CheckIn_MembershipCardCode,
        "SubscribedPackage":AppState.MainDashboard.MembershipCardFeePaymentCycle,
        "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
    };
    console.log(objn);




    Ext.Ajax.request({

        // type: "POST",

        // url: GetAPIurl() + '/Memberships/MembershipsInsertMembershipCardFOCFee',

        // dataType: "json",
        // data: JSON.stringify(obj),
        // headers: {
        //     "Content-Type": "application/json; charset=utf-8"
        // },

        
        url: GetAPIurl() + '/Memberships/MembershipsInsertMembershipCardFOCFee',
        method: 'POST',                 // ✅ betul
        jsonData: objn,                 // ✅ auto encode JSON + set body
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        success: function (result, request) {

            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                swalFireHoorayMessage("Success As Membership");
               // FloatPanel_CheckOut_MembershipCardHide(false);
              //  FloatPanel_MembershipCardList_NotYetSubscribedHide(false);
              //  FloatPanel_MembershipCardManagement_TermAndConditionHide(false);              
                // FloatPanel_MembershipCardList_UpgradeHide(false);
                // FloatPanel_RewardStoreMembershipCardHide(false);                           
                // FloatPanel_RewardStoreMembershipCardHide(false);
                // FloatPanel_OrderCartHide(false);
               // updateSubscriptionStatus(billExternalID_ext);
              
            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Membership Card Failure!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
        }

    });
}