Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_MainDashboard_PendingOrder', {
});

var isFloatPanel_MainDashboard_PendingOrder_Open = "N";








var _FloatPanel_MainDashboard_PendingOrder;

function FloatPanel_MainDashboard_PendingOrder() {

    _FloatPanel_MainDashboard_PendingOrder =      Ext.create('Ext.Container', {

        xtype: 'Panel',
      //  height: 100,
        height: 200,
        width: '100%',
        id: 'LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID',
        draggable: false,



        centered: false,
        //bottom: 64,
      // bottom: 90,
       bottom: 50,
        zIndex: 10,
        modal: true,
        hideOnMaskTap: true,
        layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center',
        },
        showAnimation: {
            //type: 'popIn',
            //duration: 250,
            //easing: 'ease-out'
            type: 'slideIn',
            direction: 'up',
            easing: 'cubic-bezier(.2,0,.2,1)',
            duration:650
        },
        hideAnimation: {
          
                type: 'popOut',
                easing: 'easeOut',
                ////duration: 250,
                //type: 'fadeOut',
            duration: 350,
          
          
          
          
          
            // type: 'slideOut',
            // direction: 'down',
            // easing: 'cubic-bezier(.2,0,.2,1)',
            // duration:1000
        
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
       style: 'background-color: rgba(0, 0, 0, 0.0);border-right:1px solid none;border-left:1px solid none;border-bottom:1px solid none;border-top:1px solid none;',
      //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
       

        items: [





            {

                xtype: 'container',
                width: '93%',
                hidden: true,
                // docked: 'top',
                // width: 40,
                style: 'background-color: rgba(0, 0, 0, 0.0)',
                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_MainDashboard_PendingOrderHeader',
                //style: {
                //    // background: '#D25959',
                //    background: 'transparent',
                //    // border: '2px'
                //},
                //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'center',
                },
             //   hidden:true,
                items:
                       [


                                    

                                     


                                      

                                        {
                                            xtype: 'spacer',
  
                                        },

                                        {
                                            xtype: 'button',
                                            id: 'btnFloatPanel_MainDashboard_PendingOrderyBack',
                                            height: 35,
                               width: 35,

                               // iconCls: 'list',
                               html: '<div ><img src="resources/icons/xsigncircle05.png" width="25" height="25" alt="Company Name"></div>',
                               ui: 'plain',
                               handler: function () {
                                FloatPanel_MainDashboard_PendingOrderHide();
                                 //  FloatPanel_Advertisement_FloatAdvertisementHide();
                                //   Ext.getCmp('Dashboard_FloatingAdvertisement_Txt').setHidden(false);
                                  // Ext.getCmp('Dashboard_FloatingAdvertisement_Icon').setHidden(false);
                                  
                               }
                           },
                         
                                        








                       ]

            },
{ xtype: 'container',
width: '95%',
//height: 90,
height: 200,
id: 'FloatPanel_MainDashboard_PendingOrderPanelID',
margin:'-10 0 0 0',
// docked: 'top', width: 40,
style: 'background-color: rgba(0, 0, 0, 0.0)',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items:[
        {
           xtype: 'dataview',
           // xtype: 'list',
            store: _DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore,
            id: 'FloatPanel_MainDashboard_PendingOrderListID',
            mode: 'SINGLE',
            style: 'background-color: rgba(0, 0, 0, 0);',
            scrollable: 'vertical',
            disableSelection: true,
           // height:90,
            height: 200,
            // **no fixed height here** — let each item size itself
            width: '100%',
        
            itemTpl:
              '<div  onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo_Dashboard({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',`{CreatedDate}`,`{EnterpriseAddress}`)" style="display: flex; align-items: center; justify-content: space-between; ' +
                          'background-color: #fff; border: 2px solid #e0e0e0; border-radius: 60px; ' +
                          'padding: 6px 10px; margin: 0px 0; box-shadow: 0 2px 8px rgba(0,0,0,0.05); ' +
                          'box-sizing: border-box; font-family: Arial, sans-serif;">' +
        
                // left side: icon + text
                '<div style="display: flex; align-items: center; gap: 6px;">' +
                  '<img src="{EnterpriseLogo}" ' +
                       'alt="Icon" style="width: 65px; height: 65px; border-radius: 50%; object-fit: cover;" />' +
                  '<div>' +
                    '<span style="font-size: 14px; font-weight: 600; color: #1c1c1e;">{EnterpriseName}</span>' +
                    '<div style="font-size: 12px; color: #6c6c70; margin-top: 2px;">{ItemQuantity} x {ItemName}</div>' +
                    '<div style="font-size: 10px; color: #6c6c70; margin-top: 2px;">{CreatedDate}</div>' +
                  '</div>' +
                '</div>' +
        
                // right side: status badge + points
                '<div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">' +
                //   '<span style="background-color: blue; color: white; padding: 2px 8px;margin:-15px 20px 0px 0px;' +
                //               'border-radius: 6px; font-size: 9px; font-weight: 600;text-align:center;width:90px">Order Paid</span>' +
                              '{ModifiedOrderStatus}'+
                  '<div style="text-align: center;margin:10px 20px 0px 0px;">' +
                    '<div class="blink_me" style="font-size: 24px; font-weight: bold; color: #1c1c1e;">{AyohaPointEarn}</div>' +
                    '<div class="blink_me" style="font-size: 12px; color: #6c6c70;font-weight: bold;">Ayoha Point</div>' +
                  '</div>' +
                '</div>' +
        
             '</div><br>'
              //'</div>'


        }
        
    ]
},
            

    //    {


    //        // xtype: 'button',
    //        xtype: 'panel',
    //        margin: '0 0 0 0',
    //        id: 'FloatPanel_MainDashboard_PendingOrderBg',
    //        //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
    //        style: 'background-color: rgba(0, 0, 0, 0.0)',
    //        height: 30,
    //        width: '100%',
    //        // style: 'border:2px solid #D25959;',
    //        layout: {
    //            type: 'vbox',
    //            pack: 'left',
    //            align: 'left'
    //        },
    //        items: [







               


    //        ]


    //    },









        ]







    });

    return _FloatPanel_MainDashboard_PendingOrder;
}

var globalFloatPanel_AyohaCardManagement_AdvertisementButton;

function FloatPanel_MainDashboard_PendingOrderShow() {
    Ext.Viewport.remove(_FloatPanel_MainDashboard_PendingOrder);
    this.overlay = Ext.Viewport.add(FloatPanel_MainDashboard_PendingOrder());
    this.overlay.show();
    isFloatPanel_MainDashboard_PendingOrder_Open = 'Y';

var count=parseInt(globalFloatPanel_MainDashboard_PendingOrder_Count);
if(count>1){
  //  alert('You have ' +  AppState.FloatPanel_MainDashboard_PendingOrder.OrderStatus + '  orders. Please check your orders.');
    Ext.getCmp('LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID').setHeight(200);
    Ext.getCmp('FloatPanel_MainDashboard_PendingOrderPanelID').setHeight(200);
    Ext.getCmp('FloatPanel_MainDashboard_PendingOrderListID').setHeight(200);
    Ext.getCmp('LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID').setBottom(70);
    //LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID
}else{
   // alert('You have ' +  AppState.FloatPanel_MainDashboard_PendingOrder.OrderStatus + '  orders. Please check your orders.');
    Ext.getCmp('LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID').setHeight(100);
    Ext.getCmp('FloatPanel_MainDashboard_PendingOrderPanelID').setHeight(100);
    Ext.getCmp('FloatPanel_MainDashboard_PendingOrderListID').setHeight(100);
    Ext.getCmp('LoadingFloatPanel_YearOnlyFloatPanel_MainDashboard_PendingOrderID').setBottom(55);



    

}
//FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbordStore();
}

function FloatPanel_MainDashboard_PendingOrderHide() {
    if (isFloatPanel_MainDashboard_PendingOrder_Open == 'Y') {
        _FloatPanel_MainDashboard_PendingOrder.hide();
        isFloatPanel_MainDashboard_PendingOrder_Open = 'N';
       
        //FloatPanel_ShoppingBagOrderShow();
    }

}

var globalFloatPanel_MainDashboard_PendingOrder_Count; 
function FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbordStore() {

  
    _DataStore_AyohaStoreOrderPendingOrderMainDashbordStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreOrderPendingOrderMainDashbordStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderPendingOrderMainDashbord');
   // _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore.load();

   _DataStore_AyohaStoreOrderPendingOrderMainDashbordStore.load({
    callback: function (records, operation, success) {
        if (success && records.length > 0) {
            globalFloatPanel_MainDashboard_PendingOrder_Count = _DataStore_AyohaStoreOrderPendingOrderMainDashbordStore.getCount();
           // console.error('FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbordStore' + count);
        } else {
            console.error('Failed to load store data or no record found.');
            LoadingPanelHide();
        }
    }
});


}




function FloatPanel_MainDashboard_PendingOrderAyohaStoreOrderPendingOrderMainDashbord_CountStore() {

  
    _DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderPendingOrderMainDashbord');
   // _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoPaymentNoEntitledVoucherStatusStore.load();

   _DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore.load({
    callback: function (records, operation, success) {
        if (success && records.length > 0) {
            var count =parseInt(_DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore.getCount());
            if(count > 0) {
             //   var record = records[0]; // Access only the first record
                // AppState.FloatPanel_MainDashboard_PendingOrder.OrderStatus=record.get('OrderStatus');
                globalFloatPanel_MainDashboard_PendingOrder_Count =parseInt(_DataStore_AyohaStoreOrderPendingOrderMainDashbord_CountStore.getCount());
             // alert('You have ' + globalFloatPanel_MainDashboard_PendingOrder_Count + ' pending orders. Please check your orders.');
              
              if(globalFloatPanel_MainDashboard_PendingOrder_Count > 0) {
                //Ext.getCmp('txtDashboard_AyohaMerchantShoppingBagBadgeID').setHtml('<div style="text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;font-weight:bold;padding:2px 0px;">'+globalFloatPanel_MainDashboard_PendingOrder_Count+'</div>');
               // Ext.getCmp('txtDashboard_AyohaMerchantShoppingBagBadgeID').setHidden(false);
              
             //   Ext.getCmp('containerMyAccount_Dashboard_AyohaMerchantShoppingBagID').setMargin('0 0 0 0');

               // alert('You have ' + globalFloatPanel_MainDashboard_PendingOrder_Count + ' pending orders. Please check your orders.');
                Dashboard_updateBadge_AyohaMerchantList_CheckOutAndShoppingBag('htmlMyDashboard_AyohaOnlineMerchantStoreShoppingBag_CountbadgeText', globalFloatPanel_MainDashboard_PendingOrder_Count);

            
              }
              
             
                FloatPanel_MainDashboard_PendingOrderShow();
            }           
        } else {
           // console.error('Failed to load store data or no record found.');
           Dashboard_updateBadge_AyohaMerchantList_CheckOutAndShoppingBag('htmlMyDashboard_AyohaOnlineMerchantStoreShoppingBag_CountbadgeText', 0);

            LoadingPanelHide();
        }
    }
});


}