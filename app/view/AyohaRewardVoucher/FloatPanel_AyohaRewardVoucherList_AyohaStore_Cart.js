
Ext.define('BuskartApp.view.AyohaRewardVoucher.FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart', {

});

var _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart;


var isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'N';






function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart() {

    _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart =
    Ext.create('Ext.Panel', {
        zIndex: 360,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaRewardVoucherList_AyohaStore_CartID',
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
        //                    _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'left',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));

        //                    isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'N';
        //                } if (e.direction == "right") {
        //                    _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart.hide(Ext.fx.Animation({
        //                        type: 'slideOut',
        //                        direction: 'right',
        //                        easing: 'cubic-bezier(.7,0,.7,1)',
        //                        duration: 250

        //                    }));
        //                    isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'N';
        //                }
        //                RemovePages(_FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart, "isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen");
        //               // FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus();
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

                                id: 'containerFloatPanel_AyohaRewardVoucherList_AyohaStore_CartHeader',
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
                                                         id: 'btnFloatPanel_AyohaRewardVoucherList_AyohaStore_CartBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide();
                                                             // FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AddCardHide();
                                                             isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'N';
                                                             _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide()");
                                                             // FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();
                                                             FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus_Back();
                                                            
                                                            

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>My Vouchers!</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                hidden: true,
                                                                id: 'btnFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'N';

                                                                    _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages(_FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart, "isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen");
                                                                    //FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaRewardVoucherList_AyohaStore_CartStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaRewardVoucherList_AyohaStore_CartCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart').setActiveItem(0);
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
                                                          store: _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore,
                                                          id: 'FloatPanel_AyohaRewardVoucherList_AyohaStore_CartListID',
                                                          mode: 'SINGLE',
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          //itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({VoucherImgPath});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                          itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({VoucherImgPath});background-size: 100% 100%;border-radius: 0px 0px 0px 0px;border:3px dashed grey;">' +

                                                          // '{ModifiedMembershipApprovalStatus}' +
                                                        '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                                                      '</div>' +
                                                                                      // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                          '<br><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Voucher Campaign</div><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Expired:</div></div>' +
                                                          '<br><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{VoucherName}</div><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{EntitledVoucherEndDate}</div></div>' +

                                                          '<br><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Voucher Amount(RM)</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px;font-weight:bold;" class="blink_me">Use This Voucher!</div></div>' +
                                                          '<br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');"style="width:50%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{VoucherAmount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;"><input type="checkbox"  {isThisVoucherUsed} class="largerCheckbox" onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_OnChangeCheckbox (this,' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ')" name="checkbox" /></div></div>' +
                                                            //'<br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{VoucherAmount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;">{UsedThiVoucher}</div></div>' +

                                                          '<br><div style="width:100%;text-align:center;margin:-38px 0px 0px 0px;color:transparent;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div>',
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
                                id: 'containerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount',
                                name: 'namecontainerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount',
                               // width: '100%',
                                docked: 'bottom',
                                // hidden:true,
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
                                id: 'htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount',
                                html: '<div style="background: transparent;height:40px;font-size: 16px;font-weight:bold;color:white;text-align:center;margin:8px 0px 0px 0px;" >TOTAL RM:0.00 - Use This Voucher !</div>'
                            },


                                     //{
                                     //    id: 'FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount',
                                     //    margin: '0 0 0 0',
                                     //    hidden:true,
                                     //    width: '70%',
                                     //    height: 20,
                                     //    html: '<input type="text" id="input-FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount" placeHolder="RM 0.00" style="border-color:purple;color:black;width:100%;text-align: center;font-size:18px; font-weight:bold;">'
                                     //},








                                ]

                            },


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart',
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
    return _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart;



}








function FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart());
    this.overlay.show();
    //LoadingPanelShow(getLoadingIcon(), 'Loading....');
    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_CartListID').setHidden(false);
    AddRoutePages("FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide()");
    isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'Y';
    globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0;
    globalglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode = "";
    arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length = 0;
  // alert("xxxxxxxxx")
    FloatPanel_AyohaRewardVoucherList_AyohaStore_CartAdjustHeight();
    var containerViewnamecontainerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount = containerViewnamecontainerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount.element;
    containerViewElnamecontainerFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus();
      }
    );
    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Hi!.You have <font size=3 class="blink_me"> (' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ') </font> Redeemable Vouchers!</b></font>');
    FloatPanel_AyohaRewardVoucherList_AyohaStoreCart_DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore();
}






function FloatPanel_AyohaRewardVoucherList_AyohaStoreCart_DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore() {
    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = "";
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = "";
    globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0.00;


    globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo = '50528-0133376958-NoEnterprise,' + FloatPanel_AyohaStore_getEnterpriseAccNo();
    globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode = 'USU,' + globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;


    
    _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanel_AyohaStore_Cart_ExtEnterpriseAccNo);
    _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', globalFloatPanel_AyohaStore_Cart_ExtMembershipCardCode);
    _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCode');
    _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {



        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getCount();

        var Amt = 0;
        for (i = 0; i < count; i++) {
            var Store = _DataStore_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempLoadBySubscriberAccNoEnterpriseAccNoMembershipCardCodeStore.getAt(i);
         
            if (Store.get('EntitledVoucherStatus') == "ShoppingCart") {
                globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher+parseFloat(Store.get('VoucherAmount'));
                console.log(Amt);

                var n = arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.includes(Store.get('VoucherCode'));
                if (n) {

                } else {
                    arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.push(Store.get('VoucherCode'));

                }
               // Amt++;
            }


            //else {
            //   // Amt--;
            //    Amt = parseFloat(Store.get('VoucherAmount'));
            //    console.log(Amt);
            //    globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher =- parseFloat(Store.get('VoucherAmount'));
            //}

        }
       
        console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount').setHtml('<div style="background: transparent;height:40px;font-size: 16px;font-weight:bold;color:white;text-align:center;margin:8px 0px 0px 0px;" >TOTAL:RM ' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '- <font class="blink_me">Use This Voucher!</font></div>');


      //  globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = Amt;

      
        

    });
    task.delay(500);
}






var globalglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode;


function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus_Back() {

   // alert(globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal);
   // return;

   // alert('FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus_Back');
   // LoadingPanelShow(getLoadingIcon(), 'Calculate....');
    //if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length == 0) {
    //    swalFireWarning("You have not select any voucher!");
    //    return;
    //}


    //if (globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher < 0) {
    //    swalFireWarning("Invalid voucher amount!");
    //    return;
    //}

    //for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
    //    globalglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode +=arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i]+',';
    //}


    //var text = 'abcdef'
    //const editedText = text.slice(0, -1) //'abcde'

   // console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)

    // Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount').setHtml('<div style="background: transparent;height:40px;font-size: 16px;font-weight:bold;color:white;text-align:center;margin:8px 0px 0px 0px;" >TOTAL:RM ' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '- <font class="blink_me">Use This Voucher!</font></div>');

    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow_AfterVoucherAdd();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher Left!</font> -Discount(RM):</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setMargin('-6 0 0 0');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setMargin('-3 0 0 5');

    var task = Ext.create('Ext.util.DelayedTask', function () {


       // var lbl = Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').getLabel();

      
        if (globalFloatPanel_AyohaStore_CheckOut_OrderOption == 'Re-Order') {
            if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>');

                var result = (parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);

                //console.log(globalFloatPanel_AyohaStore_Cart_TotalSumPrice);
                //console.log(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge);
                //console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);
                //console.log(result)
                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result.toFixed(2) + '</div>');
                globalFloatPanel_AyohaStore_Cart_GrandTotal = result.toFixed(2);

            }
            LoadingPanelHide();
            FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide();
            return;
        }
        globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0.00;
        Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>');




      //  Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();"  class="blink_me" style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal + ' Voucher Available!</font> - Voucher Discount(RM):</div>');
       
       
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Hi!.You have <font size=3 class="blink_me"> (' + globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal + ') </font> Redeemable Vouchers!</b></font>');
        globalFloatPanel_AyohaStore_Cart_VoucherCount = parseInt(globalFloatPanel_AyohaStore_Cart_VoucherCountOriginal);
       // FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');
        //FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('OrderPaid');
       // FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus();
        FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide();
        FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();



        //LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(100);

}










function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus() {

//alert(globalFloatPanel_AyohaStore_CheckOut_OrderOption)
    LoadingPanelShow(getLoadingIcon(), 'Calculate....');
    //if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length == 0) {
    //    swalFireWarning("You have not select any voucher!");
    //    return;
    //}


    if (globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher < 0) {
        swalFireWarning("Invalid voucher amount!");
        return;
    }

        //for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
        //    globalglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode +=arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i]+',';
        //}
   
       
        //var text = 'abcdef'
    //const editedText = text.slice(0, -1) //'abcde'

  // alert("globalFloatPanel_AyohaStore_CheckOut_OrderOption:"+globalFloatPanel_AyohaStore_CheckOut_OrderOption)

   // Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount').setHtml('<div style="background: transparent;height:40px;font-size: 16px;font-weight:bold;color:white;text-align:center;margin:8px 0px 0px 0px;" >TOTAL:RM ' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '- <font class="blink_me">Use This Voucher!</font></div>');

    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow_AfterVoucherAdd();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher Left!</font> -Discount(RM):</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setMargin('-6 0 0 0');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setMargin('-3 0 0 5');
    
    var task = Ext.create('Ext.util.DelayedTask', function () {

       
       // var lbl = Ext.getCmp('radioBtnFloatPanel_AyohaStore_CheckOut_OrderOption_Re-Order').getLabel();


        if (globalFloatPanel_AyohaStore_CheckOut_OrderOption == 'Re-Order'){
            if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length >= 0) {
                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '</div>');
               
                var result = (parseFloat(globalFloatPanel_AyohaStore_Cart_TotalSumPrice) + parseFloat(globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge)) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher);    
                Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_GrandTotal').setHtml('<div style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">' + result.toFixed(2) + '</div>');
              //  globalFloatPanel_AyohaStore_Cart_GrandTotal = result.toFixed(2);
              //  alert("FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus:"+isFloatPanel_AyohaStore_CheckOutOpen_ReOrder)
              if(isFloatPanel_AyohaStore_CheckOutOpen_ReOrder=='Y'){
                FloatPanel_AyohaStore_CheckOut_Calculate_GrandTotal_ReOrder();
                LoadingPanelHide();
                FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide();
                return
             }
              
              FloatPanel_AyohaStore_CheckOut_Calculate_GrandTotal();


               
            }





            LoadingPanelHide();
            FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide();
            return;
        }

       

         FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');
        //FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('OrderPaid');
        FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide();


        
      
        //LoadingPanelHide();
        Ext.Viewport.unmask();
    });
    task.delay(500);

}




function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatusSingleTap(VoucherCode,EntitledVoucherStatus) {



   


    //var text = 'abcdef'
    //const editedText = text.slice(0, -1) //'abcde'

    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "VoucherCode": VoucherCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EntitledVoucherStatus": EntitledVoucherStatus

        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserAyohaStoreCartUpdateVoucherStatusSingleTap',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

               
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {



                    LoadingPanelHide();

                }
                else {

                    swalFireFail("Fail!");
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


function FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide() {
    // FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AddCardHide();
    if (isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen == "Y") {
        _FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart.hide(); isFloatPanel_AyohaRewardVoucherList_AyohaStore_CartOpen = 'N';
        RemovePages("FloatPanel_AyohaRewardVoucherList_AyohaStore_CartHide()");
      //  FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatus();
       // FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton();
    }
   
}

var globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = 0;
//var globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CountVoucher = 0;
var arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode =[];
function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_OnChangeCheckbox(checkbox, VoucherCode, VoucherAmount) {
    var n = arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.includes(VoucherCode);
    
    if (checkbox.checked) {

        globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher) +parseFloat(VoucherAmount)
        globalFloatPanel_AyohaStore_Cart_VoucherCount = parseInt(globalFloatPanel_AyohaStore_Cart_VoucherCount) - 1;
        FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatusSingleTap(VoucherCode, "ShoppingCart");

        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Hi!.You have <font size=3 class="blink_me"> (' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ') </font> Redeemable Vouchers!</b></font>');
       // globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CountVoucher = globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CountVoucher + 1;
        if (n) {

        } else {
            arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.push(VoucherCode);
            
        }


    }
    else {
        globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher = parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher) - parseFloat(VoucherAmount)
        globalFloatPanel_AyohaStore_Cart_VoucherCount = parseInt(globalFloatPanel_AyohaStore_Cart_VoucherCount) + 1;
        Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TitleHeaderTxt').setHtml('<font size=2 color=black><b>Hi!.You have <font size=3 class="blink_me"> (' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ') </font> Redeemable Vouchers!</b></font>');
        FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_UpdateVoucherStatusSingleTap(VoucherCode, "Valid");
        var indexs = arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.indexOf(VoucherCode);
        if (indexs > -1) {
            arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.splice(indexs, 1);
           
        }
    }
    Ext.getCmp('htmlFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalVoucherAmount').setHtml('<div style="background: transparent;height:40px;font-size: 16px;font-weight:bold;color:white;text-align:center;margin:8px 0px 0px 0px;" >TOTAL:RM ' + globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher.toFixed(2) + '- <font class="blink_me">Use This Voucher!</font></div>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscount').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">00.00</div>')

    if (isFloatPanel_AyohaStore_CartOpen == "Y") {
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();" class="blink_me" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher Left!</font> -Discount(RM):</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherCount').setMargin('-6 0 0 0');
        Ext.getCmp('htmlFloatPanel_AyohaStore_Cart_VoucherDiscount').setMargin('-3 0 0 5');

    }
  
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();"  class="blink_me" style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;word-break:normal;margin:0px 0px 0px 10px;width:100%;text-align:center;color:#6B7280;"><font color=#6B7280>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher Left!</font></div>');
    
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel').setMargin('0 0 0 40');
    Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel_OrderSummary').setHtml('<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:#6B7280;"> Voucher Discount(RM):</div>');
 //   Ext.getCmp('htmlFloatPanel_AyohaStore_CheckOut_VoucherDiscountLabel_OrderSummary').setHtml('<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaStore_CartShow();"  class="blink_me" style="font-family:Arial, sans-serif;font-size:11px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:right;color:black;"><img style="margin:0px 5px -3px 0px;" src="resources/icons/voucher01.png" width="20px" height="16px"/><font color=purple>' + globalFloatPanel_AyohaStore_Cart_VoucherCount + ' Voucher Left!</font> -Discount(RM):</div>');


   
}


var countMembershipsLoadBySubscriberAccNoStoreFirst;
function MembershipsLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipsLoadBySubscriberAccNoStoreSequence = 0;


    _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLoadBySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EnterprisesName'))) {
                console.log('ada0');

                countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
                Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();
        Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}








function FloatPanel_AyohaRewardVoucherList_AyohaStore_CartAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_CartID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_CartID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_CartListID').setHeight(newHeights);
 //   Ext.getCmp('FloatPanel_AyohaRewardVoucherList_AyohaStore_CartList_AfterAddVoucherID').setHeight(newHeights);
    


}






//Reset Voucher Status to VALID from backButton
var internalglobalFloatPanel_AyohaStore_Cart_VoucherCode;
function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton() {
   

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_Cart_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
    }
    

    console.log(arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length)

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length <= 0)
    {
        return;
    }


    //var text = 'abcdef'
    //const editedText = text.slice(0, -1) //'abcde'


    var ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_Cart_VoucherCode.replace("undefined", "");

    console.log(ModifiedVocherCode.slice(0, -1));

    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {

            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
            "EntitledVoucherStatus": "Valid",
            "Count": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length

        };

        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserUpdateEntitledVoucherStatus',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {



                    LoadingPanelHide();
                    //alert("Function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus_BackButton:"+isFloatPanel_AyohaStore_CheckOutOpen_ReOrder)
                  if(isFloatPanel_AyohaStore_CheckOutOpen_ReOrder=='N'){
                    return;
                  }
                    FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');

                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail*****" + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);

}





//Reset Voucher Status to VALID
function FloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_AyohaRewardVoucherEntitledUserEntitledVoucherStatusTempUpdateEntitledVoucherStatus() {



    if (globalFloatPanel_AyohaStore_Cart_VoucherCount == 0)
    {
        return;
    }


    //var text = 'abcdef'
    //const editedText = text.slice(0, -1) //'abcde'


   var ModifiedVocherCode=globalFloatPanel_AyohaStore_Cart_VoucherCode.replace("undefined", "");

    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {

            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
            "EntitledVoucherStatus": "Valid",
            "Count": globalFloatPanel_AyohaStore_Cart_VoucherCount

        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserUpdateEntitledVoucherStatus',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {



                    LoadingPanelHide();

                }
                else {

                    swalFireFail("Fail!-->" + result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail*****" + result.responseText.trim());
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(500);

}
