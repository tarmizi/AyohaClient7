
Ext.define('BuskartApp.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaRewardHome', {

});

var _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome;


var isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'N';






function FloatPanel_AyohaRewardVoucherList_AyohaRewardHome() {

    _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome =
    Ext.create('Ext.Panel', {
        zIndex: 111,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
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
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'background-color:white;',
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        //listeners: {
        //    initialize: function (c) {
        //        this.element.on({
        //            swipe: function (e, node, options) {
        //                //if (e.direction == "up") {
        //                //    LoyaltyCardRedeemListHide();
        //                //}
        //                if (e.direction == "left") {
        //                    _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'N';
        //                }
        //                RemovePages(_FloatPanel_AyohaRewardVoucherList_AyohaRewardHome, "isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen");
        //               // FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_UpdateVoucherStatus();
        //            }
        //        });
        //    }
        //},

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                style: ' background-color:transparent;',
                // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
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
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeHeader',
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
                                                         xtype: 'button',
                                                         id: 'btnFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeBack',
                                                         height: 30,
                                                         width: 35,
                                                         margin: '0 0 0 10',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeHide();
                                                             // FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_AddCardHide();
                                                             isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'N';
                                                             _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeHide()");
                                                             // FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();
                                                             //FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_UpdateVoucherStatus();



                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 15 0 0',
                                                          id: 'htmlFloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Ayoha Reward Voucher(s)</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                hidden: true,
                                                                id: 'btnFloatPanel_AyohaRewardVoucherList_AyohaRewardHome_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'N';

                                                                    _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
//RemovePages(_FloatPanel_AyohaRewardVoucherList_AyohaRewardHome, "isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen");
                                                                    //FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeStampCardList',                                
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaRewardVoucherList_AyohaRewardHome').setActiveItem(0);
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
                                          align: 'left'

                                      },
                                      items: [





                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: '100%',
                                                  
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  //style: 'background-color:#f7f7f7',
                                                  style: 'background-color:white',
                                                  items: [




                                                      {
                                                          xtype: 'list',
                                                          store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore,
                                                          id: 'FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeListID',
                                                          mode: 'SINGLE',
                                                         
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          disableSelection: true,
                                                         // grouped: true,
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
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          //itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({VoucherImgPath});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                          itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({VoucherImgPath});background-size: 100% 100%;border-radius: 0px 0px 0px 0px;border:3px dashed grey;">' +

                                                          // '{ModifiedMembershipApprovalStatus}' +
                                                        '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                                                      '</div>' +
                                                                                      // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                          '<br><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging({TotalStampEarn},' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Voucher Campaign</div><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging({TotalStampEarn},' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Expired:</div></div>' +
                                                          '<br><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging({TotalStampEarn},' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{VoucherName}</div><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging({TotalStampEarn},' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{EntitledVoucherEndDate}</div></div>' +

                                                          '<br><div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging({TotalStampEarn},' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{TotalQuantity}' + "'" + ',' + "'" + '{EntitledVoucherStatus}' + "'" + ',' + "'" + '{PaymentAtEnterpriseAccNo}' + "'" + ');" style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;"></div>{VoucherUsedStatus}</div>' +
                                                         // '<br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');"style="width:50%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{VoucherAmount}</div></div>' +
                                                            //'<br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{VoucherAmount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;">{UsedThiVoucher}</div></div>' +

                                                          '<br><div style="width:100%;text-align:center;margin:-118px 0px 0px 0px;color:transparent;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div>',
                                                          width: '100%',

                                                      },
                                                  ]
                                              },



                                      ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TotalVoucherAmount',
                                name: 'namecontainerFloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TotalVoucherAmount',
                                // width: '100%',
                                docked: 'bottom',
                                hidden: true,
                                height: 40,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                //style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                                style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid grey ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 5px 5px 5px 5px;',
                                width: '100%',
                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [




                                               //{
                                               //    margin: '0 0 0 0',

                                               //    width: 24,
                                               //    height: 24,
                                               //    //html: '<img src="resources/icons/whatsappWhite.png" alt="Image" style="width:24px;height:24px;">',
                                               //    html: '<img src="resources/icons/payNowIcon.png" alt="Image" style="width:24px;height:24px;">',


                                               //    // ui:'plain'
                                               //},

                            {
                                margin: '0 0 0 0',
                                id: 'htmlFloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TotalVoucherAmount',
                                html: '<div style="background: transparent;height:40px;font-size: 16px;font-weight:bold;color:white;text-align:center;margin:8px 0px 0px 0px;" >TOTAL RM:0.00 - Use This Voucher !</div>'
                            },


                                     //{
                                     //    id: 'FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TotalVoucherAmount',
                                     //    margin: '0 0 0 0',
                                     //    hidden:true,
                                     //    width: '70%',
                                     //    height: 20,
                                     //    html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TotalVoucherAmount" placeHolder="RM 0.00" style="border-color:purple;color:black;width:100%;text-align: center;font-size:18px; font-weight:bold;">'
                                     //},








                                ]

                            },


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaRewardVoucherList_AyohaRewardHome',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [










































                              //    ]

                              //    //}
                              //},










                        ]
                    },

















































                ]
            },












        ]





    });
    return _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome;



}








function FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucherList_AyohaRewardHome);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucherList_AyohaRewardHome());
    this.overlay.show();
    //LoadingPanelShow(getLoadingIcon(), 'Loading....');
    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeListID').setHidden(false);
    AddRoutePages("FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeHide()");
    isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'Y';

    FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeAdjustHeight();

  //  Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaRewardHome_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Ayoha Reward Voucher History</b></font>');
    FloatPanel_AyohaRewardVoucherList_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore('AyohaVoucher');
}






function FloatPanel_AyohaRewardVoucherList_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore(VoucherType) {



    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore.getProxy().setExtraParam('VoucherType', VoucherType);
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistory');
    _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {



        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeVoucherHistoryStore.getCount();




    });
    task.delay(500);
}






function FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeHide() {
    // FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_AddCardHide();
    if (isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen == "Y") {
        _FloatPanel_AyohaRewardVoucherList_AyohaRewardHome.hide(); isFloatPanel_AyohaRewardVoucherList_AyohaRewardHomeOpen = 'N';
        RemovePages("FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeHide()");
        //  FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_UpdateVoucherStatus();
        // FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();
    }

}


function MembershipsLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipsLoadBySubscriberAccNoStoreSequence = 0;


    _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLoadBySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EnterprisesName'))) {
                console.log('ada0');

                countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
                Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();
        Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}








function FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeListID').setHeight(newHeights);
    //   Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeList_AfterAddVoucherID').setHeight(newHeights);



}





function FloatPanel_AyohaRewardVoucherList_AyohaRewardHome_Staging(TotalStampEarn,VoucherName, VoucherImgPath, EntitledVoucherEndDate, DayLeft, VoucherCode, VoucherAmount, ItemCartCode, MembershipCardCode, OrderNo, EnterpriseName, EnterpriseLogo, TotalQuantity, EntitledVoucherStatus, PaymentAtEnterpriseAccNo) {
   
   
  
   
    if (EntitledVoucherStatus == "Voucher_Used") {


        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_SetEnterpriseAccNo_ModuleTagging(PaymentAtEnterpriseAccNo, TotalQuantity, MembershipCardCode, ItemCartCode, "DashboardAyohaVoucherHistory");
        FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderLoadByItemCartCodeAndMembershipCardCodeStore_WithOrderNo(TotalStampEarn,ItemCartCode, MembershipCardCode, OrderNo, EnterpriseName, EnterpriseLogo);

    } else {
        FloatPanel_AyohaRewardVoucherDetailShow(VoucherName, VoucherImgPath, EntitledVoucherEndDate, DayLeft, VoucherCode, VoucherAmount);
    }
}