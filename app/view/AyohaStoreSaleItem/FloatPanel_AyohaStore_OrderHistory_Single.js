Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory_Single', {

});

var _FloatPanel_AyohaStore_OrderHistory_Single;


var isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'N';





function FloatPanel_AyohaStore_OrderHistory_Single() {

    _FloatPanel_AyohaStore_OrderHistory_Single =
     Ext.create('Ext.Panel', {
         zIndex: 360,
         xtype: 'container',
         // height: '50%',
         width: '90%',
         height: '60%',
         styleHtmlContent: true,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_OrderHistory_SingleID',
         // name: 'nameFloatPanel_AyohaStore_OrderHistory_SingleID',
         draggable: false,
         //hideOnMaskTap: true,
     

         centered: true,
         //bottom: 64,         
         modal: true,
         // hideOnMaskTap: true,
         layout: {
             type: 'fit'
         },
         showAnimation: {
             type: 'popIn',
             duration: 150,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 150,
             easing: 'ease-out'
         },

         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',




         items:[
               {
                   xtype: 'container',
                   width: '100%',
                   height: '100%',
                   style: ' background-color: white',
                   layout: {
                       type: 'fit',

                   },
                   items: [
                       {

                           xtype: 'container',
                           width: '100%',
                           docked: 'top',
                           // width: 40,
                           style: ' background-color:transparent;',
                           //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                           //  title: '<font size="3" color="white">Live Tracking Map</font>',
                           //hidden: true,

                           id: 'containerFloatPanel_AyohaStore_OrderHistory_SingleHeader',
                           //style: {
                           //    // background: '#D25959',
                           //    background: 'transparent',
                           //    // border: '2px'
                           //},
                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                           // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                           layout: {
                               type: 'hbox',
                               pack: 'left',
                               align: 'left',
                           },
                           // hidden:true,
                           items:
                                  [


                                                {
                                                    xtype: 'button',
                                                    id: 'btnFloatPanel_AyohaStore_OrderHistory_SingleBack',
                                                    height: 30,
                                                    width: 35,
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {

                                                        _FloatPanel_AyohaStore_OrderHistory_Single.hide(Ext.fx.Animation({
                                                            type: 'slideOut',
                                                            direction: 'left',
                                                            easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250

                                                        }));
                                                        isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'N';
                                                        RemovePages("FloatPanel_AyohaStore_OrderHistory_SingleHide()");

                                                    }
                                                },

                                                {
                                                    xtype: 'spacer'
                                                },


                                                 {
                                                     margin: '0 0 0 0',
                                                     id: 'htmlFloatPanel_AyohaStore_OrderHistory_Single_TitleHeaderTxt',
                                                     //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Purchase History</div>',

                                                     //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                 },













                                  ]

                       },
              

                       {
                        xtype: 'container',
                        width: '100%',
                        id: 'containerFloatPanel_AyohaStore_OrderHistory_Single_OrderSent',
                        height: '100%',
                        //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                      
                        //style: "background-color: #F35B57;",
                        //styleHtmlContent: true,
                        title: 'titleFloatPanel_AyohaStore_OrderHistory_Single_OrderSent',
                        style: 'background-color:transparent',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'
                        },
                        items: [
                            
                           {
                               xtype: 'list',
                               //  flex: 1,
                              store: _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore,
                               id: 'FloatPanel_AyohaStore_OrderHistory_Single_OrderSentListID',
                               mode: 'SINGLE',
                               disableSelection: false,
                               style: 'background-color:rgba(255, 255, 255, 10);border-radius: 0px 0px 0px 0px;',
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

                               //itemTpl: '<div class="myContent">' +
                               //   '<div><b>{ID}</b></div>' +
                               //   '<div>{ReceiptName}</div>' +
                               //   '<div style="float:right;width:3%;margin:-35px 10px 0px 0px"><img src="resources/icons/editresititem.png" height="22" width="30"></div>' +
                               //   '<div><b>{Amount}</b></div>' +
                               //    '<div style="display: none;">{ID}</div>' +
                               //   '</div>',
                               itemTpl: '<div class="myContent">' +
                               '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 0px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 10px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold;font-size:14px;"><u>{Row_num}).{ClientName}</u></span><br><span style="font-size:12px;font-weight:bold;margin:0px 0px -10px 0px;">#Invoice No:{DisplayOrderNo}</span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"></td></tr><tr></tr></thead>' +
                              '</table><br>' +
                               //'<div onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseName() + "'" + ',' + "'" + FloatPanel_AyohaStore_getEnterpriseLogo() + "'" + ',' + "'" + '{ClientName}' + "'" + ',' + "'" + '{DisplayOrderNo}' + "'" + ',' + "'" + '{ModifiedOrderLogCreatedDate}' + "'" + ',' + "'" + '{OrderPaidUnpaidStatus}' + "'" + ',' + "'" + '{OrderLogCreatedDate}' + "'" + ')"  style="background-color:white;width:100%;height:50px;margin:-80px 0px 0px 0px;text-align:right"><img src="resources/icons/orderColor.png" alt="Image" style="width:30px;height:30px;margin:-40px 0px 0px 0px;"><br><div style="text-decoration:underline;color:blue;font-size:10px;margin:-5px 0px 0px 0px;">View Order</div></div>' +
                                     '</div>',

                                   emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Cancelled',
                                   width: '100%',
                                   height: '100%',
                                   disableSelection: true,

                           

                                 
                               




                           },
                        ]
                    },

                 
                   ]
               },
         ],


      







     });
    return _FloatPanel_AyohaStore_OrderHistory_Single;





}



function FloatPanel_AyohaStore_OrderHistory_SingleShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistory_Single);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistory_Single());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_OrderHistory_SingleHide()");
    isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'Y';
    FloatPanel_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore();
   



 

}




function FloatPanel_AyohaStore_OrderHistory_SingleHide() {
    if (isFloatPanel_AyohaStore_OrderHistory_SingleOpen == 'Y') {
        _FloatPanel_AyohaStore_OrderHistory_Single.hide(); isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_OrderHistory_SingleHide()");
    }
}




function FloatPanel_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore() {
    _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.clearFilter();
    //globalFloatPanel_AyohaStore_OrderHistory_OrderStatus = OrderStatus;
    //globalFloatPanel_AyohaStore_OrderHistory_Color = color;



    _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.getProxy().setExtraParam('OrderNo', globalFloatPanel_AyohaStore_CheckOut_OrderNo);
    _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadByOrderNoSubscriberAccNo');
    _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.getCount();
      //  alert(count);
        //if (OrderStatus == "All Orders") {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:blue;margin:-28px 0px 0px 0px">Order Paid (28) | <font color="red">Order UnPaid (1)</font></div>');

        //} else {
        //    Ext.getCmp('htmlFloatPanel_AyohaStore_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Received Order List-YEAR (' + globalFloatPanel_AyohaStore_OrderHistory_Year + ')</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:' + color + ';margin:-28px 0px 0px 0px">' + OrderStatus + ' (' + count + ')</div>');

        //}

        // FloatPanel_AyohaStore_OrderHistory_AyohaStoreOrderCountOrderStatusMerchant();
       
      
       
       // FloatPanel_AyohaNotification_UpdateIsReadNotification(ID);

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}



