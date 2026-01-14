Ext.define('BuskartApp.view.MyAccount.FloatPanel_OrderCart', {

});



var globalFloatPanel_OrderCartEnterpriseName;
var globalFloatPanel_OrderCartEnterpriseLogo;
var _FloatPanel_OrderCart;


var isFloatPanel_OrderCartOpen = 'N';

function FloatPanel_OrderCart() {

    _FloatPanel_OrderCart =
          Ext.create('Ext.Container', {
              requires: [
         'Ext.util.DelayedTask',
              ],
              xtype: 'container',
              height: '100%',
              // height: 615,
             // width: 280,
              width: '100%',
              id: 'FloatPanel_OrderCartID',
              zIndex: 200,
              centered: true,
              //right: -1,
              //top:32,
             // modal: true,
              hideOnMaskTap: false,
              layout: {
                  type: 'fit'
              },
              showAnimation: {
                  //type: 'slideIn',
                  //direction: 'left',
                  //duration: 150,
                  type: 'popIn',
                  duration: 250,
                //  easing: 'ease-out'
              },
              hideAnimation: {
                  type: 'popOut',
                  //direction: 'up',
                  //easing: 'cubic-bezier(.7,0,.7,1)',
                  duration: 250
                  ////type: 'reveal',
                  ////duration: 250,
                  //type: 'slideOut',

                  //direction: 'right',
                  //duration: 150
              },
              style: 'background-color:white;',
              listeners: {
                  initialize: function (c) {
                      this.element.on({
                          swipe: function (e, node, options) {
                              if (e.direction == "right") {
                                 // FloatPanel_OrderCartHide();
                                  //  alert("Hey! I swipe left");
                                  //Ext.getCmp('tabpanelTrackingOverViewMapPointInfoTblManualTrack').setActiveItem(2);
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderMovement').setHtml("<font size=2>Tracking</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderClaim').setHtml("<font size=2>Claim</font>");
                                  //Ext.getCmp('btnSingleTracking_ManualTrackingHeaderPurpose').setHtml("<font size=3><u><b>Purpose</b></u></font>");

                              } else {
                                  //  FloatPanel_OrderCartHide();



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
    // width: 40,
    //zIndex:-10,
    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //hidden: true,
    docked: 'top',
    id: 'containerFloatPanel_OrderCartHeader',
    //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
    //style: 'background-color:white;',
    style: 'background-color:white;border-bottom:1px solid #f0f2f5;box-shadow: 0px 15px 10px -25px rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19);',
    //style: 'background-color:white;border-bottom:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
    //style: 'background-color:white;border-bottom:1px solid #f0f2f5;box-shadow: 4px 0px 0px 8px rgba(0, 0, 0, 0.2), 4px 0px 0px 16px rgba(0, 0, 0, 0.19)',
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
                    id: 'btnFloatPanel_OrderCart_Back',
                    height: 30,
                    width: 35,
                    // iconCls: 'list',
                    html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                    ui: 'plain',
                    handler: function () {
                        // FloatPanel_AyohaStore_CheckOutHide();
                        // FloatPanel_AyohaStore_CheckOut_AddCardHide();
                        isFloatPanel_OrderCartOpen = 'N';
                        _FloatPanel_OrderCart.hide(Ext.fx.Animation({
                            type: 'slideOut',
                            direction: 'left',
                            easing: 'cubic-bezier(.7,0,.7,1)',
                            duration: 250

                        }));
                        RemovePages("FloatPanel_OrderCartHide()");
                        //  FloatPanel_AyohaStore_CheckOut_AddCardHide();

                    }
                },

                                                      {
                                                          xtype: 'spacer',

                                                      },

                //{
                //    margin: '0 0 0 0',

                //    width: 24,
                //    height: 24,
                //    html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">',
                //    // ui:'plain'
                //},

                  {
                      margin: '15 0 0 0',
                      id: 'htmlFloatPanel_OrderCart_Title',
                      html: '<div style="background: transparent;height:30px;font-size: 14px;font-weight:bold;color:black;text-align:left;" >Ayoha Shopping Cart</div>'
                  },
                  {
                      margin: '0 0 0 0',

                      width: 24,
                      height: 24,
                      html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">',
                      // ui:'plain'
                  },
                  {
                      xtype: 'panel',
                      width:15
                  }









           ]

},
//style: 'background-color:#f0f2f5;',
{
    xtype: 'container',
    width: '100%',
    docked: 'bottom',
    hidden: true,
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
                       id: 'btnFloatPanel_OrderCart_MakePayemnt',
                       html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Make Payment</u></div>',
                       handler: function () {
                           Ext.getCmp('containerFloatPanel_OrderCart_ShippingAddressMaster').setHidden(true);
                           Ext.getCmp('containerFloatPanel_OrderCart_NoteToSellerMaster').setHidden(true);
                           Ext.getCmp('containerFloatPanel_OrderCart_MakePayment').setHidden(false);
                           Ext.getCmp('containerFloatPanel_OrderCart_OrderWhatsApp').setHidden(true);
                           Ext.getCmp('containerFloatPanel_OrderCart_OrderHistory').setHidden(true);
                           Ext.getCmp('btnFloatPanel_OrderCart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order Only</div>');
                           Ext.getCmp('btnFloatPanel_OrderCart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Make Payment</u></div>');
                           Ext.getCmp('btnFloatPanel_OrderCart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>');

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
                  id: 'btnFloatPanel_OrderCart_Order',
                  html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order Only</div>',
                  handler: function () {

                      Ext.getCmp('containerFloatPanel_OrderCart_ShippingAddressMaster').setHidden(false);
                      Ext.getCmp('containerFloatPanel_OrderCart_NoteToSellerMaster').setHidden(false);

                      Ext.getCmp('containerFloatPanel_OrderCart_MakePayment').setHidden(true);
                      Ext.getCmp('containerFloatPanel_OrderCart_OrderWhatsApp').setHidden(false);
                      Ext.getCmp('containerFloatPanel_OrderCart_OrderHistory').setHidden(true);
                      Ext.getCmp('btnFloatPanel_OrderCart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order Only</u></div>');
                      Ext.getCmp('btnFloatPanel_OrderCart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:8px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>');
                      Ext.getCmp('btnFloatPanel_OrderCart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order History</u></div>');

                  }
              },



                      {
                          xtype: 'button',
                          width: 100,
                          height: 20,
                          margin: '0 0 0 -34',
                          ui: 'plain',
                          hidden: true,
                          id: 'btnFloatPanel_OrderCart_OrderHistory',
                          html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order History</div>',
                          handler: function () {
                              Ext.getCmp('containerFloatPanel_OrderCart_MakePayment').setHidden(true);
                              Ext.getCmp('containerFloatPanel_OrderCart_OrderWhatsApp').setHidden(true);
                              Ext.getCmp('containerFloatPanel_OrderCart_OrderHistory').setHidden(false);
                              Ext.getCmp('btnFloatPanel_OrderCart_Order').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Order Only</div>');
                              Ext.getCmp('btnFloatPanel_OrderCart_MakePayemnt').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;">Make Payment</div>');
                              Ext.getCmp('btnFloatPanel_OrderCart_OrderHistory').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:bold;word-break:normal;margin:0px 0px 0px -7px;width:100%;text-align:right;color:black;"><u>Order History</u></div>');

                          }
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
    xtype: 'container',
    id: 'containerFloatPanel_OrderCartItem_Outter',
    style: ' background-color: white',
    margin: '2 0 0 0',
    height: '100%',
    width: '100%',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    //scrollable: {
    //    direction: 'vertical',
    //    directionLock: true,
    //    indicators: false,
    //},
    items: [
        {
            xtype: 'container',
            id: 'containerFloatPanel_OrderCartItem',
            style: ' background-color: transparent',
            // margin: '0 0 0 0',
            height:'100%',
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
                    store: _DataStore_AyohaStoreCartOrderCartStore,
                    style: 'border-bottom:1px none grey;background-color:white;',
                    id: 'List_FloatPanel_OrderCartList',
                    mode: 'SINGLE',
                    disableSelection: true,
                    grouped: true,
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
                    // disableSelection: true,
                    itemTpl: '<div style="width:100%;text-align:right;margin:-8px 0px 0px -3px;"><button OnClick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderCart_ExtendEnterpriseNameLogo(' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_OrderCart_Delete({ID})" class="buttonsHtmlBgDeleteNotificationListTransparent" style="margin:-10px 0px 0px 0px;z-index:100;"><img src="resources/icons/xsigncircle04.png" style="width: 16px; height: 16px; margin:-10px 0px 0px -10px;z-index:100;" /></button></div>' +
                   '<div class="myContent" style="background-color:white;width:100%;height:135px; margin:-30px 0px 0px -16px;">' +
                                                                     

                                                                       '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderCart_ExtendEnterpriseNameLogo(' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_SaleItemDetailShow('+ "'" + '{StampRuleAmount}' + "'" + ',{ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ');"  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;"><thead><tr><th style="background-color:transparent;border-color:transparent;border-bottom:2px solid #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:35%" rowspan="2"><img src="{ItemCoverImg}" style="width: 150px; height: 150px; border:1px none grey;max-width:200px;border-radius:0px 0px 0px 0px;margin:0px 0px 0px 5px" /></th><th style="background-color:transparent;border-bottom:2px solid #F3F1F5;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 3px;text-align:left;vertical-align:top;word-break: break-all;width:65%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break: break-all;margin:5px 0px 0px 0px;height:auto;width:90%;" onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_SaleItemDetailShow('+ "'" + '{StampRuleAmount}' + "'" + ',{ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')">{ItemName}</div>{Pointlabel}   <br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;word-break:break-all;margin:-15px 0px 0px 0px;height:35px;" onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_SaleItemDetailShow({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')">{ModifiedItemDescriptions}</div>{OrderSentCreatedDate}</th></tr></thead></table>'


                                                                     + '</div>'
                    //+ '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_OrderCart_AddToCart_MINUS({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{MerchantSumStamp}' + "'" + ')"  class="buttonAddToCartSign">-</button><input type="number" id="input-FloatPanel_OrderCart_Qty{ID}" value={ItemQuantity} style="border-radius: 2px;border: 1px solid purple;padding: 2px; width: 25px;height: 23px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_OrderCart_AddToCart_ADD({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{MerchantSumStamp}' + "'" + ')"  class="buttonAddToCartSign">+</button> X RM{ModifiedItemPrice}</div>',
                       + '<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderCart_ExtendEnterpriseNameLogo(' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_SaleItemDetailShow('+ "'" + '{StampRuleAmount}' + "'" + ',{ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ');"  style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><input type="text" id="input-FloatPanel_OrderCart_Qty{ID}" value=({ItemQuantity}) readOnly style="border-radius: 2px;border: 1px none purple;padding: 0px; width: 25px;height: 24px;font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;color:black;text-align:right"/> X RM{ModifiedItemPrice}</div>',

                   
                    emptyText: '<div class="myContent">No Cart Item</div>',
                    width: '100%',
                    height:'100%',
                    //height: '70%',

                    listeners: {


                        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                        },

                        itemsingletap: function (dataview, index, target, record, e, eOpts) {

                        }
                    }






                },



                





            ]

        },
    ]
},


























              ],



          });

    return _FloatPanel_OrderCart





}





function FloatPanel_OrderCartShow() {

    Ext.Viewport.remove(_FloatPanel_OrderCart);
    this.overlay = Ext.Viewport.add(FloatPanel_OrderCart());
    this.overlay.show();
    AddRoutePages("FloatPanel_OrderCartHide()");
    isFloatPanel_OrderCartOpen = 'Y';
    //globalFloatPanel_AyohaStore_CheckOut_OrderStatus = "CheckOut";




    FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');







    globalFloatPanel_OrderCart_TotalItemQuantity = "0";


 




}


var globalFloatPanel_OrderCart_ItemCartCode;
var globalFloatPanel_OrderCart_TotalItemQuantity;
var globalFloatPanel_OrderCart_TotalSumPrice;
var globalFloatPanel_OrderCart_TotalMerchantPoint;
var globalFloatPanel_OrderCart_TotalAyohaPoint;
var globalFloatPanel_OrderCart_GrandTotal;
var globalFloatPanel_OrderCart_LoyaltyRewardType;
var globalFloatPanel_OrderCart_TotalMerchantSumStamp;

function FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore(ItemCartStatus) {
  //  alert("FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore:"+ItemCartStatus)
  
    _DataStore_AyohaStoreCartOrderCartStore.getProxy().setExtraParam('ItemCartStatus', ItemCartStatus);
    _DataStore_AyohaStoreCartOrderCartStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreCartOrderCartStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartOrderCart');
    _DataStore_AyohaStoreCartOrderCartStore.load();





    _DataStore_AyohaStoreCartOrderCartStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                var Store = records[0]; // Access only the first record
              
               
                var count = parseInt(_DataStore_AyohaStoreCartOrderCartStore.getCount());
        if (count <= 0) {
            globalFloatPanel_OrderCart_ItemCartCode = "NewItemCartCode";
            globalFloatPanel_OrderCart_TotalItemQuantity = 0;
           
            return;
        }

     
      
        globalFloatPanel_OrderCart_TotalItemQuantity = Store.get('TotalItemQuantity');
        globalFloatPanel_OrderCart_TotalSumPrice = parseFloat(Store.get('TotalSumPrice'));
        globalFloatPanel_OrderCart_TotalMerchantPoint = Store.get('TotalMerchantPoint');
        globalFloatPanel_OrderCart_TotalAyohaPoint = Store.get('TotalAyohaPoint');
        globalFloatPanel_OrderCart_ItemCartCode = Store.get('ItemCartCode');
        globalFloatPanel_OrderCart_LoyaltyRewardType = Store.get('LoyaltyRewardType');
        globalFloatPanel_OrderCart_TotalMerchantSumStamp = parseInt(Store.get('TotalMerchantSumStamp'));

        var result = globalFloatPanel_OrderCart_TotalSumPrice + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
    
        globalFloatPanel_OrderCart_GrandTotal = result.toFixed(2);
           
           
           
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });











}





function FloatPanel_OrderCartHide() {
    if (isFloatPanel_OrderCartOpen == 'Y') {
        globalFloatPanel_MembershipCardList_NotYetSubscribed_price = null;
        _FloatPanel_OrderCart.hide(); isFloatPanel_OrderCartOpen = 'N';
        RemovePages("FloatPanel_OrderCartHide()");
    }

}





function FloatPanel_OrderCart_Delete(ID) {
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
        
                           // FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                if (isFloatPanel_AyohaStoreOpen == "Y") {
                                    FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                                }
                               
                            });
                            task.delay(500);
        
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                if (isFloatPanel_OrderCartOpen == "Y") {
                                    FloatPanel_OrderCart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                                }
        
                            });
                            task.delay(500);
        
        
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                DashboardAyohaUserMainStore();
                                console.log('DashboardAyohaUserMainStore');
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
    

    //toastMsg("Delete cart...", "resources/icons/addtocart02.gif");




}





function FloatPanel_OrderCart_DeliveryChargeTypeOpen() {
    FloatPanel_AyohaStore_DeliveryChargeListShow();
}



function FloatPanel_OrderCart_Detail(ID, ItemCode) {

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





    FloatPanel_AyohaStore_SaleItemDetailShow(0,ID, ItemCode, ItemCoverImg.get('ItemCoverImg'), ItemName.get('ItemName'),
        ItemPrice.get('ItemPrice'), MerchantPoint.get('MerchantPoint'), AyohaPoint.get('AyohaPoint'), CampaignType.get('CampaignType'),
        MembershipCardCode.get('MembershipCardCode'), ProductCategoryName.get('ProductCategoryName'), ItemCategoryCode.get('ItemCategoryCode'),
        MembershipCardName.get('MembershipCardName'), ItemCoverImgName.get('ItemCoverImgName'), Stock.get('Stock'), ShowStock.get('ShowStock'),
        StockAlert.get('StockAlert'), ModifiedItemDescriptions_01.get('ModifiedItemDescriptions_01'), ItemPriceDiscount.get('ItemPriceDiscount'), ItemPriceDiscountRate.get('ItemPriceDiscountRate'))

        //function FloatPanel_AyohaStore_SaleItemDetailShow(StampRuleAmount,ID, ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode, ProductCategoryName, ItemCategoryCode, MembershipCardName, ItemCoverImgName, Stock, ShowStock, StockAlert, ModifiedItemDescriptions_01, ItemPriceDiscount, ItemPriceDiscountRate)

    // FloatPanel_AyohaStore_SaleItemDetailShow(ID, ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode, ProductCategoryName, ItemCategoryCode, MembershipCardName, ItemCoverImgName, Stock, ShowStock, StockAlert, ModifiedItemDescriptions_01, ItemPriceDiscount, ItemPriceDiscountRate)
}




function FloatPanel_OrderCart_SendMyOrder() {
    var val = document.getElementById('input-FloatPanel_OrderCart_DeliveryChargeType').value;
    var Note = document.getElementById('input-FloatPanel_OrderCart_Note').value;
    var add = document.getElementById('input-FloatPanel_OrderCart_DeliveryAddress').value;
    if (globalFloatPanel_OrderCart_TotalItemQuantity == 0) {
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
            "ItemCartCode": globalFloatPanel_OrderCart_ItemCartCode,
            "DeliveryChargeCode": globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode,
            "DeliveryCharge": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge,
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount": 0.00,
            "GrandTotal": globalFloatPanel_OrderCart_GrandTotal,
            "DeliveryAddress_StreetName": globalFloatPanel_AyohaStore_DeliveryAddress_StreetName,
            "DeliveryAddress_Town": globalFloatPanel_AyohaStore_DeliveryAddress_TownCity,
            "DeliveryAddress_Postcode": globalFloatPanel_AyohaStore_DeliveryAddress_PostCode,
            "DeliveryAddress_StateCode": globalFloatPanel_AyohaStore_DeliveryAddress_State,
            "DeliveryAddress_CountryCode": globalFloatPanel_AyohaStore_DeliveryAddress_Country,
            "ReferenceName": globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson,
            "ReferencePhoneNo": globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo,
            "NoteToSeller": Note,
            "MerchantPointEarn": globalFloatPanel_OrderCart_TotalMerchantPoint,
            "AyohaPointEarn": globalFloatPanel_OrderCart_TotalAyohaPoint,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "DeliveryName": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName,
            "TotalQuantity": globalFloatPanel_OrderCart_TotalItemQuantity,
            "SubTotal": globalFloatPanel_OrderCart_TotalSumPrice
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
                    FloatPanel_OrderCartHide();
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                    swalFireDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!", "black", "red");
                    globalFloatPanel_OrderCartSumItemSumPrice = 0.00;
                    globalFloatPanel_OrderCartTotalItemQuantity = 0;
                    globalFloatPanel_OrderCart_ItemCartCode = "NewItemCartCode";
                    Ext.getCmp('htmlFloatPanel_OrderCartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                }
                else {

                    swalFireFail("Fail!");
                    globalFloatPanel_OrderCartSumItemSumPrice = 0.00;
                    globalFloatPanel_OrderCartTotalItemQuantity = 0;
                    globalFloatPanel_OrderCart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail!");
                globalFloatPanel_OrderCartSumItemSumPrice = 0.00;
                globalFloatPanel_OrderCartTotalItemQuantity = 0;
                globalFloatPanel_OrderCart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}



function FloatPanel_OrderCart_CheckOutStaging() {
    var val = document.getElementById('input-FloatPanel_OrderCart_DeliveryChargeType').value;

    if (globalFloatPanel_OrderCart_TotalItemQuantity == 0) {
        swalFireFail("No Item in Cart!");
        return;

    }

    if (val) {
        FloatPanel_AyohaStore_CheckOutShow();
    } else {
        //  swalFireSuccesDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !");
        swalFireDynamicIconWithMessage("resources/icons/DeliveryTypeRed.png", "Delivery Type Is Required !", "red", "red");
    }
}