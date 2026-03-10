Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_OrderHistory_Single', {

});

var _FloatPanel_AyohaStore_OrderHistory_Single=null;


var isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'N';





function FloatPanel_AyohaStore_OrderHistory_Single() {

    _FloatPanel_AyohaStore_OrderHistory_Single =
     Ext.create('Ext.Container', {
      
         id: 'LoadingFloatPanel_AyohaStore_OrderHistory_SingleID',
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
                            height: ayoha_HeaderHeight(),
                           style: ayohaThemeColor_Header(),

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
                                                    id: 'btnFloatPanel_AyohaStore_OrderHistory_SingleBack',
                                                    height: 30,
                                                    width: 65,
                                                             // iconCls: 'list',
                                                             html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                             ui: 'plain',
                                                    ui: 'plain',
                                                    handler: function () {
FloatPanel_AyohaStore_OrderHistory_SingleHide(false);
                                                        
                                                    }
                                                },

                                                {
                                                    xtype: 'spacer'
                                                },


                                                 {
                                                     margin: '0 0 0 0',
                                                     id: 'htmlFloatPanel_AyohaStore_OrderHistory_Single_TitleHeaderTxt',
                                                      html: ayohaTheme_HeaderText('Order Status Log'),
                                                     //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                    // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Purchase History</div>',

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
                              // grouped: true,
                              // groupFooterTpl: 'Total Order Item: {TotalQuantity} | Grand Total(RM): {GrandTotal}',
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
  //  return _FloatPanel_AyohaStore_OrderHistory_Single;





}



function FloatPanel_AyohaStore_OrderHistory_SingleShow() {

    // Ext.Viewport.remove(_FloatPanel_AyohaStore_OrderHistory_Single);
    // this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_OrderHistory_Single());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_AyohaStore_OrderHistory_SingleHide()");







FloatPanel_AyohaStore_OrderHistory_Single();



_FloatPanel_AyohaStore_OrderHistory_Single.show();
// ✅ push browser back (ikut style kau)
if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
  AyohaBrowserBack.push('FloatPanel_AyohaStore_OrderHistory_Single', function () {
 
    FloatPanel_AyohaStore_OrderHistory_SingleHide(true);
  });
}







    isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'Y';
    FloatPanel_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore();
   



 

}




function FloatPanel_AyohaStore_OrderHistory_SingleHide(animCfg, fromBack) {
   


 if (isFloatPanel_AyohaStore_OrderHistory_SingleOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_AyohaStore_OrderHistory_Single.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_AyohaStore_OrderHistory_Single.hide();
          }
         
          isFloatPanel_AyohaStore_OrderHistory_SingleOpen = 'N';         
          _FloatPanel_AyohaStore_OrderHistory_Single.destroy();
          _FloatPanel_AyohaStore_OrderHistory_Single = null;

         //  FloatPanel_MerchantDetailPageHide();
          //  Dashboard_SearchMerchantListHide();
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_AyohaStore_OrderHistory_Single');
          }
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

  _DataStore_AyohaStoreOrderLoadByOrderNoSubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                  
                } else {
                    console.error('Failed to load store data or no record found.');
                   // LoadingPanelHide();
                }
            }
        });









}



