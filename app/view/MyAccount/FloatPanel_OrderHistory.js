Ext.define('BuskartApp.view.MyAccount.FloatPanel_OrderHistory', {

});

var _FloatPanel_OrderHistory;


var isFloatPanel_OrderHistoryOpen = 'N';


var globalFloatPanel_OrderHistory_EnterpriseAccNo;


function FloatPanel_OrderHistory() {

    _FloatPanel_OrderHistory =
     Ext.create('Ext.Panel', {
         zIndex: 200,
         xtype: 'container',
         // height: '50%',
         width: '100%',
         height: '100%',
         styleHtmlContent: true,
         //width: 280,
         id: 'LoadingFloatPanel_OrderHistoryID',
         // name: 'nameFloatPanel_OrderHistoryID',
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
             duration: 250,
             easing: 'ease-out'
         },
         hideAnimation: {
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250

             type: 'popOut',
             duration: 250,
             easing: 'ease-out'
         },

         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',




         items: [
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

                           id: 'containerFloatPanel_OrderHistoryHeader',
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
                                                    id: 'btnFloatPanel_OrderHistoryBack',
                                                    height: 30,
                                                    width: 35,
                                                    margin: '0 0 0 10',
                                                    // iconCls: 'list',
                                                    html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                    ui: 'plain',
                                                    handler: function () {

                                                        _FloatPanel_OrderHistory.hide(Ext.fx.Animation({
                                                            type: 'slideOut',
                                                            direction: 'left',
                                                            easing: 'cubic-bezier(.7,0,.7,1)',
                                                            duration: 250

                                                        }));
                                                        isFloatPanel_OrderHistoryOpen = 'N';
                                                        RemovePages("FloatPanel_OrderHistoryHide()");

                                                    }
                                                },

                                                {
                                                    xtype: 'spacer'
                                                },


                                                 {
                                                     margin: '0 10 0 0',
                                                     id: 'htmlFloatPanel_OrderHistory_TitleHeaderTxt',
                                                     //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                     html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Purchase History</div>',

                                                     //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                 },













                                  ]

                       },
                 {
                     xtype: 'tabpanel',
                     // hidden: true,
                     //  hidden:true,
                     id: 'tabpanelFloatPanel_OrderHistory_MasterContent',
                     // style: 'border-top:2px solid #ECF0F1;background: white;',
                     // style: 'background-color: black;',
                     // margin: '-20 0 0 -26',
                     // margin: '25 0 0 0',

                     //width: 200,
                     width: '100%',
                     height: '100%',
                     //height: 120,
                     //height: 50,
                     //  zIndex: 200,
                     //  docked: 'bottom',
                     tabBarPosition: 'top',
                     ui: 'plain',
                     initialize: function (c) {
                         //this.getTabBar().hide();


                     },

                     items: [
                         {
                             xtype: 'container',
                             width: '100%',
                             id: 'containerFloatPanel_OrderHistory_OrderSent',
                             height: '100%',
                             //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',

                             //style: "background-color: #F35B57;",
                             //styleHtmlContent: true,
                             title: 'titleFloatPanel_OrderHistory_OrderSent',
                             style: 'background-color:transparent',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left'
                             },
                             items: [
                                   {
                                       xtype: 'container',
                                       style: 'background-color: transparent;',
                                       width: '100%',
                                       margin: '10 0 0 0',
                                       height: 15,
                                       layout: {
                                           type: 'vbox',
                                           pack: 'left',
                                           align: 'left'
                                       },
                                       items: [
                                           {
                                               margin: '0 0 0 0',
                                               html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:Purple;text-align:left;" >Order Placed</div>',
                                           },
                                       ]


                                   },
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore,
                                    id: 'FloatPanel_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',                                   
                                    disableSelection: false,
                                    grouped: true,
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
                                    itemTpl: '<div class="myContent">' +
                                       // '{ID}'+
                                        '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore(' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');" style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:purple;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="purple">Order Placed</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                       '</table>' +
                                       // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Order No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                        '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                              '</div>',
                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:32px;height:32px;"><br>No Order Placed',

                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,









                                },
                             ]
                         },
                         {
                             xtype: 'container',
                             width: '100%',
                             id: 'containerFloatPanel_OrderHistory_OrderReceivedConfirm',
                             height: '100%',
                             title: 'titleFloatPanel_OrderHistory_OrderReceivedConfirm',
                             //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                             style: 'background-color:transparent',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left'
                             },
                             items: [

                                    {
                                        xtype: 'container',
                                        style: 'background-color: transparent;',
                                        width: '100%',
                                        margin: '10 0 0 0',
                                        height: 15,
                                        layout: {
                                            type: 'vbox',
                                            pack: 'left',
                                            align: 'left'
                                        },
                                        items: [
                                            {
                                                margin: '0 0 0 0',
                                                html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:Orange;text-align:left;" >Order Received&Confirm</div>',
                                            },
                                        ]


                                    },
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore,
                                    // id: 'FloatPanel_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    disableSelection: false,
                                    grouped: true,
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
                                    itemTpl: '<div class="myContent">' +
                                       // '{ID}'+
                                        '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');" style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:orange;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="orange">Order Received&Confirm</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                       '</table>' +
                                       // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Order No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                        '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                              '</div>',

                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Received & Confirm',
                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },


                             ]

                         },


                         {
                             xtype: 'container',
                             width: '100%',
                             title: 'titleFloatPanel_OrderHistory_OrderPaid',
                             id: 'containerFloatPanel_OrderHistory_OrderPaid',
                             height: '100%',
                             //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                             style: 'background-color:white',
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'left'
                             },
                             items: [
                                    {
                                        xtype: 'container',
                                        style: 'background-color: transparent;',
                                        width: '100%',
                                        margin: '10 0 0 0',
                                        height: 15,
                                        layout: {
                                            type: 'vbox',
                                            pack: 'left',
                                            align: 'left'
                                        },
                                        items: [
                                            {
                                                margin: '0 0 0 0',
                                                html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:#3399ff;text-align:left;" >Order Paid</div>',
                                            },
                                        ]


                                    },
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore,
                                    // id: 'FloatPanel_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    disableSelection: false,
                                    grouped: true,
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
                                    itemTpl: '<div class="myContent">' +
                                       // '{ID}'+
                                        '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');" style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:#3399ff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="blue">{OrderStatus}</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                       '</table>' +
                                       // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Order No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                        '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                              '</div>',
                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Paid',

                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },


                             ]
                         },
                          {
                              xtype: 'container',
                              width: '100%',
                              id: 'containerFloatPanel_OrderHistory_OrderCompleted',
                              height: '100%',
                              //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                              style: 'background-color:white',
                              title: 'titleFloatPanel_OrderHistory_OrderCompleted',
                              layout: {
                                  type: 'vbox',
                                  pack: 'start',
                                  align: 'left'
                              },
                              items: [

                                      {
                                          xtype: 'container',
                                          style: 'background-color: transparent;',
                                          width: '100%',
                                          margin: '10 0 0 0',
                                          height: 15,
                                          layout: {
                                              type: 'vbox',
                                              pack: 'left',
                                              align: 'left'
                                          },
                                          items: [
                                              {
                                                  margin: '0 0 0 0',
                                                  html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:green;text-align:left;" >Order Completed</div>',
                                              },
                                          ]


                                      },
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore,
                                    // id: 'FloatPanel_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    disableSelection: false,
                                    grouped: true,
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
                                    itemTpl: '<div class="myContent">' +
                                       // '{ID}'+
                                        '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ')"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:green;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="green">Order Completed</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                       '</table>' +
                                       // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Order No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                        '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                              '</div>',

                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Completed',
                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },

                              ]
                          },
                           {
                               xtype: 'container',
                               width: '100%',
                               id: 'containerFloatPanel_OrderHistory_OrderCancel',
                               title: 'titleFloatPanel_OrderHistory_OrderCancel',
                               height: '100%',
                               //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                               style: 'background-color:white',
                               layout: {
                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'left'
                               },
                               items: [

                                         {
                                             xtype: 'container',
                                             style: 'background-color: transparent;',
                                             width: '100%',
                                             margin: '10 0 0 0',
                                             height: 15,
                                             layout: {
                                                 type: 'vbox',
                                                 pack: 'left',
                                                 align: 'left'
                                             },
                                             items: [
                                                 {
                                                     margin: '0 0 0 0',
                                                     html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:left;" >Order Cancel</div>',
                                                 },
                                             ]


                                         },
                                {
                                    xtype: 'list',
                                    //  flex: 1,
                                    store: _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore,
                                    // id: 'FloatPanel_OrderHistory_OrderSentListID',
                                    mode: 'SINGLE',
                                    disableSelection: false,
                                    grouped: true,
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
                                    itemTpl: '<div class="myContent">' +
                                       // '{ID}'+
                                        '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="red">Order Cancel</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                       '</table>' +
                                       // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Order No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                        '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                              '</div>',

                                    emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Cancelled',
                                    width: '100%',
                                    height: '100%',
                                    disableSelection: true,


                                },

                               ]
                           },
                            {
                                xtype: 'container',
                                width: '100%',
                                id: 'containerFloatPanel_OrderHistory_OrderRejected',
                                title: 'titleFloatPanel_OrderHistory_OrderRejected',
                                height: '100%',
                                //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                style: 'background-color:white',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'
                                },
                                items: [

                                          {
                                              xtype: 'container',
                                              style: 'background-color: transparent;',
                                              width: '100%',
                                              margin: '10 0 0 0',
                                              height: 15,
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'left',
                                                  align: 'left'
                                              },
                                              items: [
                                                  {
                                                      margin: '0 0 0 0',
                                                      html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:#ff0066;text-align:left;" >Order Rejected</div>',
                                                  },
                                              ]


                                          },
                                 {
                                     xtype: 'list',
                                     //  flex: 1,
                                     store: _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore,
                                     // id: 'FloatPanel_OrderHistory_OrderSentListID',
                                     mode: 'SINGLE',
                                     disableSelection: false,
                                     grouped: true,
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
                                     itemTpl: '<div class="myContent">' +
                                        // '{ID}'+
                                         '<table onclick="FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_DashboardOrderHistory(' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{TotalItemQuantity}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ');FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo({TotalStampEarn},' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ');"  style="margin:-10px 0px 0px -15px;border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 110%;background-color:white;" class="tg"><colgroup><col style="width: 10px"><col style="width: 180px"><col style="width: 69px"></colgroup><thead><tr><td style="background-color:#ff0066;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold"><u>{Row_num}.#Order No:{DisplayOrderNo}</u></span><br><span style="font-weight:bold">{ModifiedOrderLogOrderStatus}</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 20px;text-align:left;vertical-align:top;word-break:normal;font-weight:bold;" rowspan="2"><u>Total Order Item:{TotalQuantity}</u><br><u>Grand Total(RM):{GrandTotal}</u><br><u>Status:<font color="#ff0066">Order Rejected</font></u></div></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:6px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/orderColor.png" alt="Image" width="35" height="35"><br><span style="text-decoration:underline;color:blue">View Order</span><br><br></td></tr><tr></tr></thead>' +

                                        '</table>' +
                                        // '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%;" class="tg"><colgroup><col style="width:20%"><col style="width:80%"><col style="width: 50%"></colgroup><thead><tr><td style="background-color:red;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="3"></td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><span style="font-weight:bold">1.#Order No:{OrderNo}</span><br><span style="font-weight:bold">17-12-2021 03:00:25PM</span></td></tr><tr><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:3px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2">Total Item Order:2<br>Grand Total(RM):500<br>Order Status:Sent</td><td style="border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:3px 5px;text-align:center;vertical-align:top;word-break:normal" rowspan="2"><img src="resources/icons/AllPurple.png" alt="Image" width="30" height="30"><br><span style="text-decoration:underline">View Order</span></td></tr><tr></tr></thead></table>' +
                                         '<div style="background-color:white;width:100%;height:10px;margin:-20px 0px 0px 0px;"></div>' +

                                               '</div>',

                                     emptyText: '<img src="resources/icons/noOrder.png" style="width:62px;height:62px;"><br>No Order Rejected',
                                     width: '100%',
                                     height: '100%',
                                     disableSelection: true,


                                 },

                                ]
                            },

                     ]
                 },



                 {

                     xtype: 'container',
                     width: '100%',
                     docked: 'bottom',
                     height: 40,
                     // style: 'background-color:white;border-top:1px solid #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                     style: 'background-color:white;',
                     id: 'containerFloatPanel_OrderHistoryFooter',
                     style: 'background-color:white',
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
                                 //{
                                 //    xtype: 'container',
                                 //    width: '8%',
                                 //    style: "background-color: transparent",
                                 //    height: 55,
                                 //    layout: {
                                 //        type: 'hbox',
                                 //        pack: 'center',
                                 //        align: 'center',
                                 //    },
                                 //    scrollable: {
                                 //        direction: 'horizontal',
                                 //        directionLock: true,
                                 //        indicators: false
                                 //    },
                                 //},

                                {
                                    xtype: 'container',
                                    width: '100%',
                                    id: 'containerFloatPanel_OrderHistory_OrderSent',
                                    height: 40,
                                    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                    style: 'background-color:white',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'
                                    },
                                    scrollable: {
                                        direction: 'horizontal',
                                        directionLock: true,
                                        indicators: false
                                    },
                                    items: [

                                         {
                                             xtype: 'container',
                                             //width: 600,
                                             width: 650,
                                             // width: 650,
                                             style: "background-color: transparent",
                                             height: 40,
                                             layout: {
                                                 type: 'hbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [
                                                 {
                                                     xtype: 'container',
                                                     id: 'containerFloatPanel_OrderHistory_OrderSentTitle',
                                                     name: 'nameFloatPanel_OrderHistory_OrderSentTitle',
                                                     style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                     // style: 'background-color:#fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px solid #fac;border-left:2px solid #fac;',
                                                     flex: 1,
                                                     height: 40,
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'center'
                                                     },
                                                     items: [
                                                         {
                                                             margin: '0 0 0 0',
                                                             id: 'htmlFloatPanel_OrderHistory_OrderSentTitle',
                                                             html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:bold;color:black;text-align:center;" ><u>Order Placed</u></div>',
                                                         }
                                                     ]


                                                 },
                                             {
                                                 xtype: 'container',
                                                 //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                 id: 'containerFloatPanel_OrderHistory_OrderRecConfirmTitle',
                                                 name: 'nameFloatPanel_OrderHistory_OrderRecConfirmTitle',
                                                 style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                 flex: 1,
                                                 height: 40,
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'center',
                                                     align: 'center'
                                                 },
                                                 items: [
                                                     {
                                                         margin: '0 0 0 0',
                                                         id: 'htmlFloatPanel_OrderHistory_OrderRecConfirmTitle',
                                                         html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Received&Confirm</div>',
                                                     },
                                                 ]


                                             },
                                               {
                                                   xtype: 'container',
                                                   //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                   id: 'containerFloatPanel_OrderHistory_OrderPaidTitle',
                                                   name: 'nameFloatPanel_OrderHistory_OrderPaidTitle',
                                                   style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                   flex: 1,
                                                   height: 40,
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'
                                                   },
                                                   items: [
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_OrderHistory_OrderPaidTitle',
                                                           html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>',
                                                       },
                                                   ]


                                               },
                                               {
                                                   xtype: 'container',
                                                   //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                   id: 'containerFloatPanel_OrderHistory_OrderCompletedTitle',
                                                   name: 'nameFloatPanel_OrderHistory_OrderCompletedTitle',
                                                   style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                   flex: 1,
                                                   height: 40,
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'
                                                   },
                                                   items: [
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_OrderHistory_OrderCompletedTitle',
                                                           html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>',
                                                       },
                                                   ]


                                               },
                                               {
                                                   xtype: 'container',
                                                   //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                   id: 'containerFloatPanel_OrderHistory_OrderCancelTitle',
                                                   name: 'nameFloatPanel_OrderHistory_OrderCancelTitle',
                                                   style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                   flex: 1,
                                                   height: 40,
                                                   layout: {
                                                       type: 'vbox',
                                                       pack: 'center',
                                                       align: 'center'
                                                   },
                                                   items: [
                                                       {
                                                           margin: '0 0 0 0',
                                                           id: 'htmlFloatPanel_OrderHistory_OrderCancelTitle',
                                                           html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>',
                                                       },
                                                   ]


                                               },
                                                 {
                                                     xtype: 'container',
                                                     //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                     id: 'containerFloatPanel_OrderHistory_OrderRejectedTitle',
                                                     name: 'nameFloatPanel_OrderHistory_OrderRejectedTitle',
                                                     style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                     flex: 1,
                                                     height: 40,
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'center'
                                                     },
                                                     items: [
                                                         {
                                                             margin: '0 0 0 0',
                                                             id: 'htmlFloatPanel_OrderHistory_OrderRejectedTitle',
                                                             html: '<div style="background: transparent;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>',
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
               },
         ],










     });
    return _FloatPanel_OrderHistory;





}

function FloatPanel_OrderHistoryShow_FromNotificationList(ID) {

    Ext.Viewport.remove(_FloatPanel_OrderHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_OrderHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_OrderHistoryHide()");
    isFloatPanel_OrderHistoryOpen = 'Y';
    Ext.getCmp('containerFloatPanel_OrderHistoryFooter').setHidden(false);
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').getTabBar().hide();
 
    // Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(0);

    // FloatPanel_OrderHistory_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();


    //Ext.getCmp('htmlFloatPanel_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    //Ext.getCmp('btnFloatPanel_OrderHistory_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');



    var containerViewnameFloatPanel_OrderHistory_OrderSentTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderSentTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderSentTitle = containerViewnameFloatPanel_OrderHistory_OrderSentTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderSentTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderSentTitle_Active();
      }
    );

    var containerViewnameFloatPanel_OrderHistory_OrderRecConfirmTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderRecConfirmTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderRecConfirmTitle = containerViewnameFloatPanel_OrderHistory_OrderRecConfirmTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderRecConfirmTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderRecConfirmTitle_Active();
      }
    );



    var containerViewnameFloatPanel_OrderHistory_OrderPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderPaidTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderPaidTitle = containerViewnameFloatPanel_OrderHistory_OrderPaidTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderPaidTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderPaidTitle_Active();
      }
    );



    var containerViewnameFloatPanel_OrderHistory_OrderCompletedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderCompletedTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderCompletedTitle = containerViewnameFloatPanel_OrderHistory_OrderCompletedTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderCompletedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderCompletedTitle_Active();
      }
    );


    var containerViewnameFloatPanel_OrderHistory_OrderCancelTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderCancelTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderCancelTitle = containerViewnameFloatPanel_OrderHistory_OrderCancelTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderCancelTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderCancelTitle_Active();
      }
    );


    var containerViewnameFloatPanel_OrderHistory_OrderRejectedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderRejectedTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderRejectedTitle = containerViewnameFloatPanel_OrderHistory_OrderRejectedTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderRejectedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderRejectedTitle_Active();
      }
    );



    FloatPanel_OrderHistoryAdjustHeight();
   // FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("NewOrder");
    FloatPanel_OrderHistory_OrderSentTitle_Active();
    FloatPanel_AyohaNotification_Notification_UpdateIsRead(ID);
}

function FloatPanel_OrderHistoryShow() {

    Ext.Viewport.remove(_FloatPanel_OrderHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_OrderHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_OrderHistoryHide()");
    isFloatPanel_OrderHistoryOpen = 'Y';
    Ext.getCmp('containerFloatPanel_OrderHistoryFooter').setHidden(false);
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').getTabBar().hide();
 
    // Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(0);

    // FloatPanel_OrderHistory_AyohaStoreShippingAddressLoadBySubscriberAccNoStore();


    //Ext.getCmp('htmlFloatPanel_OrderHistory_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">' + FloatPanel_AyohaStore_getEnterpriseName() + '</div>');
    //Ext.getCmp('btnFloatPanel_OrderHistory_PicProfile').setHtml('<div ><img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" width="30" height="30" alt="Company Name"></div>');



    var containerViewnameFloatPanel_OrderHistory_OrderSentTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderSentTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderSentTitle = containerViewnameFloatPanel_OrderHistory_OrderSentTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderSentTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderSentTitle_Active();
      }
    );

    var containerViewnameFloatPanel_OrderHistory_OrderRecConfirmTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderRecConfirmTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderRecConfirmTitle = containerViewnameFloatPanel_OrderHistory_OrderRecConfirmTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderRecConfirmTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderRecConfirmTitle_Active();
      }
    );



    var containerViewnameFloatPanel_OrderHistory_OrderPaidTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderPaidTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderPaidTitle = containerViewnameFloatPanel_OrderHistory_OrderPaidTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderPaidTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderPaidTitle_Active();
      }
    );



    var containerViewnameFloatPanel_OrderHistory_OrderCompletedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderCompletedTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderCompletedTitle = containerViewnameFloatPanel_OrderHistory_OrderCompletedTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderCompletedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderCompletedTitle_Active();
      }
    );


    var containerViewnameFloatPanel_OrderHistory_OrderCancelTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderCancelTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderCancelTitle = containerViewnameFloatPanel_OrderHistory_OrderCancelTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderCancelTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderCancelTitle_Active();
      }
    );


    var containerViewnameFloatPanel_OrderHistory_OrderRejectedTitle = Ext.ComponentQuery.query('container[name=nameFloatPanel_OrderHistory_OrderRejectedTitle]')[0];
    var containerViewElnameFloatPanel_OrderHistory_OrderRejectedTitle = containerViewnameFloatPanel_OrderHistory_OrderRejectedTitle.element;
    containerViewElnameFloatPanel_OrderHistory_OrderRejectedTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_OrderHistory_OrderRejectedTitle_Active();
      }
    );



    FloatPanel_OrderHistoryAdjustHeight();
   // FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("NewOrder");
    FloatPanel_OrderHistory_OrderSentTitle_Active();
}

function FloatPanel_OrderHistory_OrderSentTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(0);
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderSentTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:center;" ><u>Order UnPaid</u></div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Received&Confirm</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>');
    FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("OrderUnPaid");
}

function FloatPanel_OrderHistory_OrderRecConfirmTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(1);
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:orange;text-align:center;" ><u>Order Received&Confirm</u></div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderSentTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Placed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>');
    FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Confirmed");


}
function FloatPanel_OrderHistory_OrderPaidTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(2);
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Received&Confirm</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderSentTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Placed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:#3399ff;text-align:center;" ><u>Order Paid</u></div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>');
    FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("OrderPaid");
}
function FloatPanel_OrderHistory_OrderCompletedTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(3);
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Received&Confirm</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderSentTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Placed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:green;text-align:center;" ><u>Order Completed</u></div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>');
    FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Completed");
}
function FloatPanel_OrderHistory_OrderCancelTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(4);
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Received&Confirm</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderSentTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Placed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:red;text-align:center;" ><u>Order Cancel</u></div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Rejected</div>');
    FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Cancel");
}
function FloatPanel_OrderHistory_OrderRejectedTitle_Active() {
    Ext.getCmp('tabpanelFloatPanel_OrderHistory_MasterContent').setActiveItem(5);
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRecConfirmTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Received&Confirm</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderSentTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Placed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderPaidTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Paid</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCompletedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Completed</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderCancelTitle').setHtml('<div style="background-color: white;width:100%;font-size: 10px;font-weight:normal;color:black;text-align:center;" >Order Cancel</div>');
    Ext.getCmp('htmlFloatPanel_OrderHistory_OrderRejectedTitle').setHtml('<div style="background-color: white;width:100%;font-size: 12px;font-weight:bold;color:#ff0066;text-align:center;" ><u>Order Rejected</u></div>');
    FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore("Order_Rejected");
}
function FloatPanel_OrderHistoryAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x + 5;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('LoadingFloatPanel_OrderHistoryID').setHeight(newHeights);

}


function FloatPanel_OrderHistoryHide() {
    if (isFloatPanel_OrderHistoryOpen == 'Y') {
        _FloatPanel_OrderHistory.hide(); isFloatPanel_OrderHistoryOpen = 'N';
        RemovePages("FloatPanel_OrderHistoryHide()");
    }
}




function FloatPanel_OrderHistory_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusStore(OrderStatus) {


    _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore.getProxy().setExtraParam('OrderStatus', OrderStatus);
    _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore.getProxy().setUrl(GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistory');
    _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaStoreOrderLoadBySubscriberAccNoAndOrderStatusDashboardOrderHistoryStore.getCount();

        // Ext.getCmp('htmlFloatPanel_AyohaStore_LikeStatusList_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Loves</div>');

        LoadingPanelHide();
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}



