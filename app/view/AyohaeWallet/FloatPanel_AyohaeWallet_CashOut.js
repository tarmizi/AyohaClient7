Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_CashOut', {

});

var _FloatPanel_AyohaeWallet_CashOut;


var isFloatPanel_AyohaeWallet_CashOutOpen = 'N';










function FloatPanel_AyohaeWallet_CashOut() {

    _FloatPanel_AyohaeWallet_CashOut =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_CashOutID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 110,
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
         //style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
         //listeners: {
         //    initialize: function (c) {
         //        this.element.on({
         //            swipe: function (e, node, options) {

         //                if (e.direction == "left") {
         //                    _FloatPanel_AyohaeWallet_CashOut.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                    isFloatPanel_AyohaeWallet_CashOutOpen = 'N';
         //                    RemovePages("FloatPanel_AyohaeWallet_CashOutHide()");
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AyohaeWallet_CashOut.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                    isFloatPanel_AyohaeWallet_CashOutOpen = 'N';
         //                    RemovePages("FloatPanel_AyohaeWallet_CashOutHide()");
         //                }

         //            }
         //        });
         //    }
         //},

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 style: ' background-color: transparent;',
                 id: 'containerFloatPanel_AyohaeWallet_CashOutHeader',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },
                 items:
                        [
                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWallet_CashOutBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backwhite03.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_AyohaeWallet_CashOutHide()");
                                              _FloatPanel_AyohaeWallet_CashOut.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_AyohaeWallet_CashOutOpen = 'N';
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },
                                        {
                                            margin: '10 0 0 0',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:right;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Cash Out Ayoha eWallet</div>'
                                        },

                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaeWallet_CashOutIcon',
                                               height: 40,
                                               width: 40,
                                               margin: '0 0 0 0',
                                               // hidden: true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/ewallet5.png" width="30" height="30" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   FloatPanel_AyohaeWallet_CashOut_SettingShow();
                                                   //RemovePages(_FloatPanel_AyohaeWallet_CashOut, "isFloatPanel_AyohaeWallet_CashOutOpen");
                                                   //_FloatPanel_AyohaeWallet_CashOut.hide(Ext.fx.Animation({
                                                   //    type: 'slideOut',
                                                   //    direction: 'right',
                                                   //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                   //    duration: 250

                                                   //}));
                                                   //isFloatPanel_AyohaeWallet_CashOutOpen = 'N';
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

             {

                 xtype: 'container',
                 width: '100%',
                 margin: '0 0 0 0',
                 height: 60,
                 style: ' background-color: transparent;',
                 id: 'containerFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletTxt',
                 layout: {
                     type: 'vbox',
                     pack: 'left',
                     align: 'left',
                 },
                 items: [
                     {
                         html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:white;padding:5px 25px;">eWallet Balance</div>'
                     },
                      {
                          id: 'htmlFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletTxt',
                          html: '<div style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM5526.30</div>'
                      },
                      //{
                      //    xtype: 'container',
                      //    width: '100%',
                      //    style: ' background-color: transparent;',
                      //    id: 'containerFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletLine',
                      //    layout: {
                      //        type: 'vbox',
                      //        pack: 'center',
                      //        align: 'center',
                      //    },
                      //    items: [
                      //        {
                      //            xtype: 'container',
                      //            margin:'0 0 0 -55',
                      //            width: '70%',
                      //            height:1,
                      //            style: ' background-color: white;',
                      //        }
                      //    ]
                      //}

                 ]
             },
         //{

         //    xtype: 'container',
         //    width: '100%',
         //    margin:'-10 0 0 0',
         //   // height:10,
         //    style: ' background-color: transparent;',
         //    id: 'containerFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletAmountTxt',
         //    layout: {
         //        type: 'hbox',
         //        pack: 'left',
         //        align: 'left',
         //    },
         //    items:[
         //        {
         //            html: '<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:white;padding:5px 25px;">RM5526.30</div>'
         //        }

         //    ]
         //},

            {

                xtype: 'container',
                width: '100%',
                margin: '10 0 0 0',
                height: '100%',
                //  style: ' background-color: transparent;',
                style: 'background-color:rgba(255, 255, 255, 0.3);border-left: 1px none #D0D3D4;border-right: 1px none #D0D3D4;border-bottom: 1px none #D0D3D4;border-top: 1px none #D0D3D4;border-radius: 30px 30px 0px 0px;',
                id: 'containerFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletMenu',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left',
                },
                items: [

                    {
                        xtype: 'container',
                        width: '100%',
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
                        margin: '15 0 0 0',
                        html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Request CashOut To:</div>'
                    },
                        ]
                    },
                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        id: 'containerFloatPanel_AyohaeWallet_CashOut_MasterContent_TransferpageID',
                        title: 'containerFloatPanel_AyohaeWallet_CashOut_MasterContent_Transferpage',
                        style: ' background-color: transparent;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left',
                        },
                        items: [
                            {
                                xtype: 'panel',
                                height: 5
                            },



                             {
                                 xtype: 'container',
                                 width: '100%',
                                 height: '100%',
                                 style: ' background-color: transparent;',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'center',
                                 },
                                 items: [
            //                          {
            //    xtype: 'container',
            //    width: '100%',
            //    docked: 'bottom',
            //    height: 30,
            //    style: ' background-color: red;',
            //    layout: {
            //        type: 'hbox',
            //        pack: 'left',
            //        align: 'left',
            //    },
            //    items: [
            //        {
            //            xtype: 'panel',
            //            width: 25
            //        },
            //        {
            //            html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_AyohaeWallet_CashOut_SearchAyohaUserResult()" class="buttonBackTransfer"><< Back</button></div>'

            //        }
            //    ]
            //},
                                     {
                                         xtype: 'list',
                                         width: '90%',
                                         height: 86,
                                         // height: '100%',
                                         // flex: 1,
                                         store: _DataStore_AyohaeWalletAccountRequestCashOutStore,
                                         // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                         id: 'FloatPanel_AyohaeWallet_CashOut_AyohaUserResultID',
                                         style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                         mode: 'SINGLE',
                                         // width: '100%',
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

                                         itemTpl: '<div class="myContent" style="background-color:transparent;width:106%;height:70px;">' +


                                          //'<table  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:transparent;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({Photo}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{PhoneNo}</font></td></tr></table><br>'
                                           '<table  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:transparent;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:160px;height:80px;color:black;vertical-align: top; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 12px;margin:8px 0px 0px 8px;"><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">Bank:{BankName}</font><img src="{ModifiedBankName}"  style="width:160px;height:70px;margin:0px 0px 0px 0px;"></div></td><td style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:top"><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">Account No:</font><br>{BankAccountNo}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">Account Name:</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{BankAccountName}</font><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;">Account Type:</font><br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{BankAccountType}</font></td></tr></table><br>'
                                         + '<div style="width:96%;height:20px;margin:-68px 0px 0px 0px;color:white;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">0</div>'
                                              + '</div>',


                                         //height: '100%',

                                         emptyText: '<div  style="background-color:transparent;width:100%;height100%;">Not Found!</div>',


                                     },

                                      {
                                          xtype: 'panel',
                                          height: 17
                                      },



                                      {
                                          width: '100%',
                                          style: ' background-color: transparent;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'left',
                                              align: 'left',
                                          },
                                          items: [

                                               {
                                                   margin: '0 0 0 25',
                                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Cash Out Amount(RM):</div>'
                                               },
                                               {

                                                   margin: '7 0 0 23',

                                                   // zIndex: -10,
                                                   width: '88.5%',
                                                   // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                   // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                   // original background text box color----> #f0f2f5
                                                   html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer" value="0.00" style="width:100%;height: 60px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 26px;color: black;font-weight:bold;text-align:right;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="00.00">',
                                               },
                                          ]

                                      },
                                         {
                                             xtype: 'panel',
                                             height: 17
                                         },



                                      {
                                          width: '100%',
                                          style: ' background-color: transparent;',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'right',
                                              align: 'right',
                                          },
                                          items: [

                                               {
                                                   margin: '-10 0 0 0',
                                                   width: '77%',
                                                   id: 'FloatPanel_AyohaeWallet_CashOut_Charges',
                                                   html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 7px 0px;background-color:transparent;color:white;text-align:right;">Cash Out Charge(1%) (RM):</div>'
                                               },
                                               {

                                                   margin: '-10 0 0 0',

                                                   // zIndex: -10,
                                                   //  width: '20.5%',
                                                   // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                   // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                   // original background text box color----> #f0f2f5
                                                   html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_charge" readOnly value="00.00" style="width:100%;height: 20px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 5px;background-color:transparent;font-size: 20px;color: white;font-weight:bold;text-align:left;margin:0px 0px 5px 0px;"  placeholder="00.00">',
                                               },
                                               {
                                                   xtype: 'spacer',
                                                   width: '5%'
                                               }
                                          ]

                                      },

                                       {
                                           xtype: 'panel',
                                           height: 10
                                       },




                                       {
                                           width: '100%',
                                           style: ' background-color: transparent;',
                                           layout: {
                                               type: 'hbox',
                                               pack: 'right',
                                               align: 'right',
                                           },
                                           items: [

                                                {
                                                    margin: '-10 0 0 0',
                                                    width: '77%',
                                                    html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 7px 0px;background-color:transparent;color:white;text-align:right;">Total Cash Out(RM):</div>'
                                                },
                                                {

                                                    margin: '-10 0 0 0',

                                                    // zIndex: -10,
                                                    //  width: '20.5%',
                                                    // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                    // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                    // original background text box color----> #f0f2f5
                                                    html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_ttlCashOut" readOnly value="00.00" style="width:100%;height: 20px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 5px;background-color:transparent;font-size: 20px;color: white;font-weight:bold;text-align:left;margin:0px 0px 5px 0px;"  placeholder="00.00">',
                                                },
                                                {
                                                    xtype: 'spacer',
                                                    width: '5%'
                                                }
                                           ]

                                       },

                                      //{
                                      //    width: '100%',
                                      //    style: ' background-color: transparent;',
                                      //    layout: {
                                      //        type: 'hbox',
                                      //        pack: 'right',
                                      //        align: 'right',
                                      //    },
                                      //    margin: '-7 0 0 0',
                                      //    items: [


                                      //         {
                                      //             margin: '-10 0 0 0',
                                      //             width: '35%',
                                      //             html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 7px 0px;background-color:transparent;color:white;text-align:right;">Total Cash Out(RM):</div>'
                                      //         },
                                      //         {

                                      //             margin: '-10 0 0 0',
                                      //           width: '20.5%',                                                 
                                      //             html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_ttlCashOut" readOnly value="00.00" style="width:100%;height: 20px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 5px;background-color:transparent;font-size: 20px;color: white;font-weight:bold;text-align:left;margin:0px 0px 5px 0px;"  placeholder="00.00">',
                                      //         },

                                      //    ]

                                      //},

                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          // hidden:true,
                                          // height: 30,
                                          margin: '0 0 0 0',
                                          style: "background-color: transparent;",
                                          layout: {
                                              type: 'hbox',
                                              pack: 'right',
                                              align: 'right'

                                          },
                                          items: [
                                              //{
                                              //    xtype: 'panel',
                                              //    width: 20
                                              //},
                                              //{
                                              //    //  id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwallet_PayNow',
                                              //    //margin: '-27 0 0 0',
                                              //    margin: '0 0 0 -20',
                                              //    html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_AyohaeWallet_CashOut_SearchAyohaUserResultBack()" class="buttonBackTransfer"><< Back</button></div>'



                                              //},
                                              //{
                                              //    xtype: 'spacer'
                                              //},
                                              {
                                                  //  id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwallet_PayNow',
                                                  //margin: '-27 0 0 0',
                                                  margin: '0 0 0 0',
                                                  html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_AyohaeWallet_CashOutConfirmShow()" class="buttonVisitAyohaMerchant">Cash Out !</button></div>'



                                              },
                                              {
                                                  xtype: 'panel',
                                                  width: 20
                                              }
                                          ]
                                      },



                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: '100%',
                                          margin: '17 0 0 0',
                                          hidden: true,
                                          style: 'background-color:white;border-left: 1px none #D0D3D4;border-right: 1px none #D0D3D4;border-bottom: 1px none #D0D3D4;border-top: 1px none #D0D3D4;border-radius: 30px 30px 0px 0px;',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center',
                                          },
                                          items: [
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: 40,
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                      {
                                                          xtype: 'panel',
                                                          width: 25
                                                      },
                                                         {
                                                             html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:black">Cash Out Transactions</div><br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;float:left;margin:-10px 0px 0px 0px;background-color:transparent;color:black">-Latest top 10-</div>'
                                                         },
                                              {
                                                  xtype: 'spacer'
                                              },
                                              {
                                                  html: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistoryShow()" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:blue"><u>View History</u></div>'
                                              },
                                                 {
                                                     xtype: 'panel',
                                                     width: 25
                                                 },
                                                  ]
                                              },
                                              {
                                                  xtype: 'list',
                                                  width: '90%',
                                                  height: 340,
                                                  // height: '100%',
                                                  // flex: 1,
                                                 // store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore,
                                                  // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                                  id: 'FloatPanel_AyohaeWallet_CashOutTransactionListID',
                                                  style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                  mode: 'SINGLE',
                                                  // width: '100%',
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

                                                  itemTpl: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})"  class="myContent" style="background-color:transparent;width:106%;height:70px;">' +


                                                   '<table onclick="FloatPanel_AyohaeWallet_TransactionHistory_AyohaeWalletTransactionStaging(' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})"  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:transparent;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                                   + '<div style="width:96%;height:20px;margin:-68px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 14px;font-weight:bold;">{ModifiedTransactionAmount}</div>'
                                                       + '</div>',


                                                  //height: '100%',

                                                  emptyText: '<div  style="background-color:transparent;width:100%;height100%;">No Transaction!</div>',


                                              },


                                          ]
                                      },
                                 ]
                             }
                        ]
                    },



                ]
            },






            ////////////////
            //{
            //    xtype: 'panel',
            //    height:5
            //},




         ]







     });
    return _FloatPanel_AyohaeWallet_CashOut;





}

function FloatPanel_AyohaeWallet_CashOutShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_CashOut);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_CashOut());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_CashOutHide()");
    isFloatPanel_AyohaeWallet_CashOutOpen = 'Y';

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletTxt').setHtml('<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + globalDashboardeWalletCurrentBalance + '</div>');

    FloatPanel_AyohaeWallet_CashOut_Enterprises_RequestCashOut_LoadByEnterpriseAccNo();

    //var containerViewnamecontainerFloatPanel_AyohaeWallet_CashOut_Search = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_CashOut_Search]')[0];
    //var containerViewElnamecontainerFloatPanel_AyohaeWallet_CashOut_Search = containerViewnamecontainerFloatPanel_AyohaeWallet_CashOut_Search.element;
    //containerViewElnamecontainerFloatPanel_AyohaeWallet_CashOut_Search.on('tap',
    //  function (event, node, options, eOpts) {
    //      FloatPanel_AyohaeWallet_CashOut_SearchAyohaUserPhoneNo();
    //  }
    //);
    document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer").addEventListener("keyup", OnKeyUp_FloatPanel_AyohaeWallet_CashOut_AmountTransfer);


    // FloatPanel_AyohaeWallet_CashOut_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOut_Enterprises();





    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_CashOutID').setZIndex(410);
    }



}


function FloatPanel_AyohaeWallet_CashOutHide() {
    if (isFloatPanel_AyohaeWallet_CashOutOpen == 'Y') {
        _FloatPanel_AyohaeWallet_CashOut.hide(); isFloatPanel_AyohaeWallet_CashOutOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_CashOutHide()");
        //  FloatPanel_RewardStoreHide();
    }

}


function OnKeyUp_FloatPanel_AyohaeWallet_CashOut_AmountTransfer() {

    var amountCashOut = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer").value);

    var cashOutCharge = parseFloat(document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_charge").value);
    var ttlCashOut = amountCashOut + cashOutCharge;
    var balDashboardeWalletCurrentBalance = parseFloat(globalDashboardeWalletCurrentBalance) - ttlCashOut;

    if (balDashboardeWalletCurrentBalance <= 0) {
        alert("not valid");
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletTxt').setHtml('<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + globalDashboardeWalletCurrentBalance + '</div>');
        document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer").value = "0.00";
        return
    } else {
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_CashOutHeader_AyohaeWalletTxt').setHtml('<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + balDashboardeWalletCurrentBalance.toFixed(2) + '</div>');




        document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_ttlCashOut").value = ttlCashOut.toFixed(2);


    }





}


function FloatPanel_AyohaeWallet_CashOut_Enterprises_RequestCashOut_LoadByEnterpriseAccNo() {


    _DataStore_AyohaeWalletAccountRequestCashOutStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletAccountRequestCashOutStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfileBankAccount/AyohaUserProfileBankAccountRequestCashOutLoadBySubscriberAccNo');
    _DataStore_AyohaeWalletAccountRequestCashOutStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaeWalletAccountRequestCashOutStore.getCount());
        // alert(count);
        if (count > 0) {
            var Store = _DataStore_AyohaeWalletAccountRequestCashOutStore.getAt(0);
            FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent = parseFloat(Store.get('eWalletCashOutChargePersent'));
         
            var duaPersent = FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent.toFixed(2) / 100;
            var cashOutCharge = parseFloat(duaPersent * globalDashboardeWalletCurrentBalance);
            //var cashOutChargePlusduaPercent = parseFloat(globalDashboardeWalletCurrentBalance + cashOutCharge);
            //c

            document.getElementById("input-FloatPanel_AyohaeWallet_CashOut_AmountTransfer_charge").value = cashOutCharge.toFixed(2);
            //id: 'FloatPanel_AyohaeWallet_CashOut_Charges',
            //html: 
        
            Ext.getCmp('FloatPanel_AyohaeWallet_CashOut_Charges').setHtml('<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 7px 0px;background-color:transparent;color:white;text-align:right;">Cash Out Charge(' + FloatPanel_AyohaeWallet_CashOutConfirm_CashOutChargePersent.toFixed(2) + '%) (RM):</div>');
        
        }
      
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}





function FloatPanel_AyohaeWallet_CashOut_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOut_Enterprises() {



    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();

    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore.getProxy().setExtraParam('eWalletAccNo', GetEnterpriseAccNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOut_Enterprises');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsCashOutEnterprisesStore.getCount();




        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}