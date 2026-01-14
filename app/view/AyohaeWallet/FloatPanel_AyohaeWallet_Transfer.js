Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_Transfer', {

});

var _FloatPanel_AyohaeWallet_Transfer;


var isFloatPanel_AyohaeWallet_TransferOpen = 'N';










function FloatPanel_AyohaeWallet_Transfer() {

    _FloatPanel_AyohaeWallet_Transfer =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_TransferID',
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
         //                    _FloatPanel_AyohaeWallet_Transfer.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'left',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                    isFloatPanel_AyohaeWallet_TransferOpen = 'N';
         //                    RemovePages("FloatPanel_AyohaeWallet_TransferHide()");
         //                } if (e.direction == "right") {
         //                    _FloatPanel_AyohaeWallet_Transfer.hide(Ext.fx.Animation({
         //                        type: 'slideOut',
         //                        direction: 'right',
         //                        easing: 'cubic-bezier(.7,0,.7,1)',
         //                        duration: 250

         //                    }));
         //                    isFloatPanel_AyohaeWallet_TransferOpen = 'N';
         //                    RemovePages("FloatPanel_AyohaeWallet_TransferHide()");
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
                 id: 'containerFloatPanel_AyohaeWallet_TransferHeader',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },
                 items:
                        [
                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWallet_TransferBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_AyohaeWallet_TransferHide()");
                                              _FloatPanel_AyohaeWallet_Transfer.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_AyohaeWallet_TransferOpen = 'N';
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },
                                        {
                                            margin: '10 0 0 0',
                                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:right;margin:-2px 0px 0px 0px;background-color:transparent;color:white">Transfer Ayoha eWallet</div>'
                                        },

                                           {
                                               xtype: 'button',
                                               id: 'btnFloatPanel_AyohaeWallet_TransferIcon',
                                               height: 40,
                                               width: 40,
                                               margin: '0 0 0 0',
                                               // hidden: true,
                                               // iconCls: 'list',
                                               html: '<div ><img src="resources/icons/ewallet5.png" width="30" height="30" alt="Company Name"></div>',
                                               ui: 'plain',
                                               handler: function () {
                                                   FloatPanel_AyohaeWallet_Transfer_SettingShow();
                                                   //RemovePages(_FloatPanel_AyohaeWallet_Transfer, "isFloatPanel_AyohaeWallet_TransferOpen");
                                                   //_FloatPanel_AyohaeWallet_Transfer.hide(Ext.fx.Animation({
                                                   //    type: 'slideOut',
                                                   //    direction: 'right',
                                                   //    easing: 'cubic-bezier(.7,0,.7,1)',
                                                   //    duration: 250

                                                   //}));
                                                   //isFloatPanel_AyohaeWallet_TransferOpen = 'N';
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
                 id: 'containerFloatPanel_AyohaeWallet_TransferHeader_AyohaeWalletTxt',
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
                          id: 'htmlFloatPanel_AyohaeWallet_TransferHeader_AyohaeWalletTxt',
                          html: '<div style="font-family:Arial, sans-serif;font-size:32px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM5526.30</div>'
                      },
                      //{
                      //    xtype: 'container',
                      //    width: '100%',
                      //    style: ' background-color: transparent;',
                      //    id: 'containerFloatPanel_AyohaeWallet_TransferHeader_AyohaeWalletLine',
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
         //    id: 'containerFloatPanel_AyohaeWallet_TransferHeader_AyohaeWalletAmountTxt',
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
                id: 'containerFloatPanel_AyohaeWallet_TransferHeader_AyohaeWalletMenu',
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
                        html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Transfer To:</div>'
                    },
                        ]
                    },
                    {
                        xtype: 'tabpanel',
                        id: 'tabpanelFloatPanel_AyohaeWallet_Transfer_MasterContent',
                        width: '100%',
                        height: '100%',
                        tabBarPosition: 'top',
                        ui: 'plain',
                        initialize: function (c) {
                            //this.getTabBar().hide();
                           

                        },
                        items: [

                           

                            {
                                xtype: 'container',
                                width: '100%',
                                height: '100%',
                                id: 'containerFloatPanel_AyohaeWallet_Transfer_MasterContent_mainpageID',
                                title:'containerFloatPanel_AyohaeWallet_Transfer_MasterContent_mainpage',
                                style: ' background-color: transparent;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left',
                                },
                                items: [

                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        height: 150,
                                        style: ' background-color: transparent;',
                                        layout: {
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'left',
                                        },
                                        items: [
//{
   
//    margin: '8 0 0 25',
//    width: '87.5%',  
//    html: '<input  type="tel" id="input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser" style="width:100%;height: 35px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 16px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="Mobile Phone No">',
//},
//                                    
                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          // hidden:true,
                                          // height: 30,
                                          margin: '8 0 0 0',
                                          style: "background-color: transparent;",
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center'

                                          },
                                          items: [
                                            
                                              {

                                                  margin: '0 0 0 0',
                                                  width: '53%',
                                                  height: 38,
                                                  html: '<input  type="tel" id="input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser" style="width:100%;height: 38px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 16px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="Ayoha Account No">',
                                              },
                                                                                 {

                                                                                     margin: '0 0 0 0',
                                                                                     width: '3%',
                                                                                     height: 38,
                                                                                    // html: '<input  type="tel" id="input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser" style="width:100%;height: 38px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 16px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="Mobile Phone No">',
                                                                                 },
                                                         {
                                                             xtype: 'container',
                                                             width: '30%',
                                                             height: 37,
                                                             // width: 40,

                                                             //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                             //hidden: true,

                                                             id: 'containeFloatPanel_AyohaeWallet_Transfer_Search',
                                                             name: 'namecontainerFloatPanel_AyohaeWallet_Transfer_Search',
                                                             // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',
                                                
                                                             style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius:6%;',
                                                             //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                                             layout: {
                                                                 type: 'hbox',
                                                                 pack: 'center',
                                                                 align: 'center',
                                                             },
                                                             items: [
                                                                 {
                                                                     html: '<div onclick="FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserPhoneNo()"><font size=2 color=white><b>Search</b></font></div>',
                                                              }
                                                             ]
                                                         },
                                              //{
                                                 
                                              //    margin: '0 0 0 0',
                                              //    width: '40%',
                                              //    html: '<div style="margin:0px 0px 0xp 0xp;width:100%;"><button OnClick="FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserPhoneNo()" class="buttonSearchTransferEwallet">Search</button></div>'



                                              //},
                                              
                                             
                                          ]
                                      },
                                      {
                                          
                                               margin: '15 0 0 27',
                                               html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Recently Transfer To:</div>'
                                          
                                      },
                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: 85,
                                          margin: '0 0 0 0',
                                          style: "background-color: transparent;border-bottom:1px none #ECF0F1;",
                                          // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center'

                                          },
                                          items: [
                                              {

                                                  id: 'FloatPanel_AyohaeWallet_Transfer_RecentlyTransfer',
                                                  store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore,
                                                  //hidden: true,
                                                  // grouped: true,
                                                  xtype: 'dataview',
                                                  // xtype: 'list',
                                                  height: 85,
                                                  //scrollable: true,
                                                  // scrollable: 'horizontal',
                                                  // indicators: false,
                                                  //inline: true,
                                                  inline: {
                                                      wrap: false
                                                  },
                                                  scrollable: {
                                                      direction: 'horizontal',
                                                      indicators: false,
                                                  },
                                                  width: '100%',
                                                  cls: 'dataview-item',
                                                  itemTpl: '<div onclick="FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserPhoneNo_FromRecentlyTransferTo(' + "'" + '{PhoneNo}' + "'" + ');" style="width: 50%; height: 85px; border:3px none white;padding:5px 5px;margin:5px 0px 0px 0px;text-align:center;"><img src="{UserProfileImg}" style="width: 50px; height: 50px; border:1px solid grey; border-radius:50%;margin:0px 0px 0px 35px;"/><br><div style="margin:-4px 0px 0px 15px;text-align:center;color:white;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">{ModifiedFullAccountName}</div><br><div style="margin:-21px 0px 0px 15px;text-align:center;color:white;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">{PhoneNo}</div></div>',


                                              },
                                          ]

                                      }
                                        ]
                                    },
                                      
                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: '100%',
                                           margin: '17 0 0 0',
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
                                                              html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;float:left;margin:0px 0px 0px 0px;background-color:transparent;color:black">Transfer Transactions</div><br><div style="font-family:Arial, sans-serif;font-size:9px;font-weight:normal;float:left;margin:-10px 0px 0px 0px;background-color:transparent;color:black">-Latest top 10-</div>'
                                                          },
                                               {
                                                   xtype: 'spacer'
                                               },
                                               {
                                                   html: '<div onclick="FloatPanel_AyohaeWallet_TransactionHistoryShow()" style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">View History</div>'
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
                                                   store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore,
                                                   // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                                   id: 'FloatPanel_AyohaeWallet_TransferTransactionListID',
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
                            },





                             {
                                 xtype: 'container',
                                 width: '100%',
                                 height: '100%',
                                 id: 'containerFloatPanel_AyohaeWallet_Transfer_MasterContent_TransferpageID',
                                 title: 'containerFloatPanel_AyohaeWallet_Transfer_MasterContent_Transferpage',
                                 style: ' background-color: transparent;',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'left',
                                 },
                                 items: [
                                     {
                                         xtype: 'panel',
                                         height:5
                                     },

                                    

                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height:'100%',
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
                     //            html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserResult()" class="buttonBackTransfer"><< Back</button></div>'

                     //        }
                     //    ]
                     //},
                                              {
                                                  xtype: 'list',
                                                  width: '90%',
                                                  height: 86,
                                                  // height: '100%',
                                                  // flex: 1,
                                                  store: _DataStore_AyohaUserProfileLoadByPhoneNoStore,
                                                  // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                                  id: 'FloatPanel_AyohaeWallet_Transfer_AyohaUserResultID',
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
                                                    '<table  style="border-collapse:collapse;border-spacing:0;width:106%;background-color:transparent;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: middle; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;margin:-18px 0px 0px 8px;"><img src="{Photo}" width="60px";height="60px"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{PhoneNo}</font></td></tr></table><br>'
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
                                                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Transfer Note:</div>'
                                                        },
                                                        {

                                                            margin: '7 0 0 23',

                                                            // zIndex: -10,
                                                            width: '88.5%',
                                                            // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                            // original background text box color----> #f0f2f5
                                                            html: '<textarea  type="text" id="input-FloatPanel_AyohaeWallet_Transfer_TransferNote" style="width:100%;height: 80px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 12px;color: black;font-weight:bold;text-align:left;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="Transfer Note"/>',
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
                                                       type: 'vbox',
                                                       pack: 'left',
                                                       align: 'left',
                                                   },
                                                   items: [
                                                      
                                                        {
                                                            margin: '0 0 0 25',
                                                            html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;margin:0px 0px 0px 0px;background-color:transparent;color:white">Transfer Amount(RM):</div>'
                                                        },
                                                        {

                                                            margin: '7 0 0 23',

                                                            // zIndex: -10,
                                                            width: '88.5%',
                                                            // html: '<textarea id="input-FloatPanel_AyohaStore_SearchProduct" style="width:97%;height: 30px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Search Product"></textarea>',
                                                            // html: '<input type="text"  id="input-FloatPanel_AyohaStoreMerchant_AddEditItem_Descriptions"  style="border-color:black;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold;width:90%;height:30px;">'
                                                            // original background text box color----> #f0f2f5
                                                            html: '<input  type="number" id="input-FloatPanel_AyohaeWallet_Transfer_AmountTransfer" value="0.00" style="width:100%;height: 60px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 5px;background-color:#f0f2f5;font-size: 26px;color: black;font-weight:bold;text-align:right;margin:0px 0px 0px 0px;box-shadow: 0 0 5pt 2pt #D3D3D3;outline-width: 0px;"  placeholder="00.00">',
                                                        },
                                                   ]

                                               },
                                               

                                               {
                                                   xtype: 'container',
                                                   width: '100%',
                                                   // hidden:true,
                                                   // height: 30,
                                                   margin: '10 0 0 0',
                                                   style: "background-color: transparent;",
                                                   layout: {
                                                       type: 'hbox',
                                                       pack: 'center',
                                                       align: 'center'

                                                   },
                                                   items: [
                                                       {
                                                           xtype: 'panel',
                                                           width: 20
                                                       },
                                                       {
                                                           //  id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwallet_PayNow',
                                                           //margin: '-27 0 0 0',
                                                           margin: '0 0 0 -20',
                                                           html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserResultBack()" class="buttonBackTransfer"><< Back</button></div>'



                                                       },
                                                       {
                                                           xtype:'spacer'
                                                       },
                                                       {
                                                           //  id: 'htmlFloatPanel_AyohaStore_Cart_AyohaEwallet_PayNow',
                                                           //margin: '-27 0 0 0',
                                                           margin: '0 0 0 0',
                                                           html: '<div style="margin:0px 0px 0xp 0xp;"><button OnClick="FloatPanel_AyohaeWallet_Transfer_TransferNow_Validate()" class="buttonVisitAyohaMerchant">Transfer Now</button></div>'



                                                       },
                                                       {
                                                           xtype: 'panel',
                                                           width: 20
                                                       }
                                                   ]
                                               },
                                          ]
                                      }
                                 ]
                             },
                            
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
    return _FloatPanel_AyohaeWallet_Transfer;





}

function FloatPanel_AyohaeWallet_TransferShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Transfer);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Transfer());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_TransferHide()");
    isFloatPanel_AyohaeWallet_TransferOpen = 'Y';
    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Transfer_MasterContent').getTabBar().hide();

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_TransferHeader_AyohaeWalletTxt').setHtml('<div style="font-family:Arial, sans-serif;font-size:38px;font-weight:bold;float:left;margin:-7px 0px 0px 0px;background-color:transparent;color:white;padding:0px 25px;">RM' + globalDashboardeWalletCurrentBalance + '</div>');

    FloatPanel_AyohaeWallet_Transfer_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore();

    var containerViewnamecontainerFloatPanel_AyohaeWallet_Transfer_Search = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaeWallet_Transfer_Search]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaeWallet_Transfer_Search = containerViewnamecontainerFloatPanel_AyohaeWallet_Transfer_Search.element;
    containerViewElnamecontainerFloatPanel_AyohaeWallet_Transfer_Search.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserPhoneNo();
      }
    );

    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_TransferID').setZIndex(410);
    }

}


function FloatPanel_AyohaeWallet_TransferHide() {
    if (isFloatPanel_AyohaeWallet_TransferOpen == 'Y') {
        _FloatPanel_AyohaeWallet_Transfer.hide(); isFloatPanel_AyohaeWallet_TransferOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_TransferHide()");
        //  FloatPanel_RewardStoreHide();
    }

}


var globalFloatPanel_AyohaeWallet_Transfer_eWalletAccNo_Credit;
var globalFloatPanel_AyohaeWallet_Transfer_Email_Credit;
var globalFloatPanel_AyohaeWallet_Transfer_Email_Debit;
var globalFloatPanel_AyohaeWallet_Transfer_Name_Credit;
var globalFloatPanel_AyohaeWallet_Transfer_Photo_Credit;
var globalFloatPanel_AyohaeWallet_Transfer_PlayerID;
function FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserPhoneNo() {
   

    var PhoneNo = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser').value;
 
   
    if (PhoneNo.length > 5) {
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.getProxy().setExtraParam('PhoneNo', PhoneNo);
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadByPhoneNo');
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.load();





        var task = Ext.create('Ext.util.DelayedTask', function () {

            var count = _DataStore_AyohaUserProfileLoadByPhoneNoStore.getCount();
            if (count > 0) {
                var Store = _DataStore_AyohaUserProfileLoadByPhoneNoStore.getAt(0);
                globalFloatPanel_AyohaeWallet_Transfer_eWalletAccNo_Credit = Store.get('AccountNo');
                globalFloatPanel_AyohaeWallet_Transfer_Email_Credit = Store.get('Email');
                globalFloatPanel_AyohaeWallet_Transfer_Email_Debit = Store.get('Email_Debit');
                globalFloatPanel_AyohaeWallet_Transfer_Name_Credit = Store.get('AccountName');
                globalFloatPanel_AyohaeWallet_Transfer_Photo_Credit = Store.get('Photo');
                globalFloatPanel_AyohaeWallet_Transfer_PlayerID = Store.get('PlayerID');
                globalFloatPanel_AyohaeWallet_Transfer_AyohaeWalletTransactionTransactionType = Store.get('AyohaeWalletTransactionTransactionType');
                var CurrPhoneNumber = localStorage.getItem('CurrPhoneNumber');

                if (PhoneNo == GetCurrAyohaUserAccountNo()) {
                    swalFireWarning_NoPreventDefault("Cannot Transfer eWallet to same account!");
                } else {
                    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Transfer_MasterContent').setActiveItem(1);
                }
               

            } else {
                swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/rankingwho01.png", "User Not Found!", "grey", "purple");
            }


            LoadingPanelHide();
            Ext.Viewport.setMasked(false);
            //  VIAAdvertismentAutoSlide();

        });
        task.delay(500);
    } else {
        swalFireWarning("Please provide Full Mobile No!");
    }

   
  
}




function FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserPhoneNo_FromRecentlyTransferTo(PhoneNo) {

    document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_SearchAyohaUser').value = PhoneNo;
   
    if (PhoneNo.length > 5) {
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.getProxy().setExtraParam('PhoneNo', PhoneNo);
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserProfile/AyohaUserProfileLoadByPhoneNo');
        _DataStore_AyohaUserProfileLoadByPhoneNoStore.load();


        var task = Ext.create('Ext.util.DelayedTask', function () {

            var count = _DataStore_AyohaUserProfileLoadByPhoneNoStore.getCount();
            if (count > 0) {
                var Store = _DataStore_AyohaUserProfileLoadByPhoneNoStore.getAt(0);
                globalFloatPanel_AyohaeWallet_Transfer_eWalletAccNo_Credit = Store.get('AccountNo');
                globalFloatPanel_AyohaeWallet_Transfer_Email_Credit = Store.get('Email');
                globalFloatPanel_AyohaeWallet_Transfer_Email_Debit = Store.get('Email_Debit');
                globalFloatPanel_AyohaeWallet_Transfer_Name_Credit = Store.get('AccountName');
                globalFloatPanel_AyohaeWallet_Transfer_Photo_Credit = Store.get('Photo');
                globalFloatPanel_AyohaeWallet_Transfer_PlayerID = Store.get('PlayerID');
                
                var CurrPhoneNumber = localStorage.getItem('CurrPhoneNumber');

                if (PhoneNo  == GetCurrAyohaUserAccountNo()) {
                    swalFireWarning_NoPreventDefault("Cannot Transfer eWallet to same account!");
                } else {
                    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Transfer_MasterContent').setActiveItem(1);
                }


            } else {
                swalFireDynamicIconWithMessage_NoPreventDefault("resources/icons/rankingwho01.png", "User Not Found!", "grey", "purple");
            }


            LoadingPanelHide();
            Ext.Viewport.setMasked(false);
            //  VIAAdvertismentAutoSlide();

        });
        task.delay(500);
    } else {
        swalFireWarning("Please provide Full Mobile No!");
    }



}

function FloatPanel_AyohaeWallet_Transfer_SearchAyohaUserResultBack() {
    Ext.getCmp('tabpanelFloatPanel_AyohaeWallet_Transfer_MasterContent').setActiveItem(0);
}



function FloatPanel_AyohaeWallet_Transfer_TransferNow_Validate() {

    globalFloatPanel_AyohaeWallet_Passcode_CheckingTaggingModule = "FloatPanel_AyohaeWallet_Transfer_TransferNow_Validate";
    var TransactionAmount_Credit = parseFloat(document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_AmountTransfer').value);
   
   // alert(TransactionAmount_Credit);

    
    if (TransactionAmount_Credit <= 0.00) {
        swalFireWarning_NoPreventDefault('Transfer Amount Not Valid!');
        return;
    }
    if (TransactionAmount_Credit) {


        FloatPanel_AyohaeWallet_TransferConfirmShow();

        //FloatPanel_AyohaeWallet_PasscodeShow();
    } else {
        swalFireWarning_NoPreventDefault('Transfer Amount Not Valid!');
        return;
    }
   

}



function FloatPanel_AyohaeWallet_Transfer_TransferNow() {
    //alert(globalFloatPanel_AyohaeWallet_Transfer_AyohaeWalletTransactionTransactionType)
    var TransferNote = document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_TransferNote').value;
    var TransactionAmount_Credits = parseFloat(document.getElementById('input-FloatPanel_AyohaeWallet_Transfer_AmountTransfer').value);
    if (TransferNote) {
        TransferNote = TransferNote;
    } else {
        TransferNote = "NA";
    }
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Transfering eWallet..");
    var task = Ext.create('Ext.util.DelayedTask', function () {


        var objn = {
            "eWalletAccNo_Credit": globalFloatPanel_AyohaeWallet_Transfer_eWalletAccNo_Credit,
            "TransactionType_Credit": "eWallet_AppTransferCredit",
            "TransactionAmount_Credit": TransactionAmount_Credits.toFixed(2),
            "TransactionReferenceNo_Credit": "TransactionReferenceNo_Credit",
            "TransactionStatus_Credit": "Success",
            "TransactionNote_Credit": TransferNote,
            "CreditDebitType_Credit": "Credit",
            "CustomerAccNo_Credit": GetCurrAyohaUserAccountNo(),
            "Email_Credit": globalFloatPanel_AyohaeWallet_Transfer_Email_Credit,
            "eWalletAccNo_Debit": GetCurrAyohaUserAccountNo(),
            "TransactionType_Debit": "eWallet_AppTransferDebit",
            "TransactionAmount_Debit": TransactionAmount_Credits.toFixed(2),
            "TransactionReferenceNo_Debit": "TransactionReferenceNo_Debit",
            "TransactionStatus_Debit": "Success",
            "TransactionNote_Debit": TransferNote,
            "CreditDebitType_Debit": "Debit",
            "CustomerAccNo_Debit": globalFloatPanel_AyohaeWallet_Transfer_eWalletAccNo_Credit,
            // check ni email debit dgn player ID debit tak boleh kosong bila transfer to merchant 11/1/2024
            "Email_Debit": globalFloatPanel_AyohaeWallet_Transfer_Email_Debit,
            "PlayerID_Credit": globalFloatPanel_AyohaeWallet_Transfer_PlayerID,

            "AyohaeWalletTransactionTransactionType":globalFloatPanel_AyohaeWallet_Transfer_AyohaeWalletTransactionTransactionType
        };

        console.log(objn)
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionInsertTransferEwallet',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);

                
                data = Ext.decode(result.responseText.trim());
               
                if (data.success == "true") {
                    FloatPanel_AyohaeWallet_TransferHide();
                    Dashboard_LoadAyohaEwallet();
                   
                    swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "Ayoha eWallet Amount <b>RM" + TransactionAmount_Credits.toFixed(2) + "</b> has been transferred to  <b>" + globalFloatPanel_AyohaeWallet_Transfer_Name_Credit + "</b> successfully!", "black", "#9932cc");
                   
                    FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();
                  
                    LoadingPanelHide();
                    return
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                if (data.success == "false-Email") {
                    FloatPanel_AyohaeWallet_TransferHide();
                    Dashboard_LoadAyohaEwallet();

                  //  swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "eWallet Transfer has been process successfully-Notification Email Failed!", "black", "#9932cc");
                    swalFireDynamicIconWithMessage("resources/icons/eWalletTransferSuccess.gif", "Ayoha eWallet Amount <b>RM" + TransactionAmount_Credits.toFixed(2) + "</b> has been transferred to  <b>" + globalFloatPanel_AyohaeWallet_Transfer_Name_Credit + "</b> successfully!-->BUT,Notification Email Failed!", "black", "#9932cc");

                    FloatPanel_AyohaeWallet_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransactionsStore();

                    LoadingPanelHide();
                    return
                    //var task = Ext.create('Ext.util.DelayedTask', function () {
                    //FloatPanel_AyohaStore_AyohaPointCollectedAnim_startCounter();

                    //});
                    //task.delay(1000);
                }
                else {

                    swalFireFail("Fail Transfer!--->" + data.message +"||"+result.responseText.trim());
                    Ext.Viewport.unmask();
                    LoadingPanelHide();
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                swalFireFail("Fail Transfer !!");
                Ext.Viewport.unmask();
                LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
    });
    task.delay(1000);
}






function FloatPanel_AyohaeWallet_Transfer_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore() {

    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
    // alert(Year)
   
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore.getProxy().setExtraParam('eWalletAccNo', GetCurrAyohaUserAccountNo()); 
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactions');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoLatestTransferTransactionsStore.getCount();
        // alert(count);
        FloatPanel_AyohaeWallet_Transfer__DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore();
        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}



function FloatPanel_AyohaeWallet_Transfer__DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore() {

    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
    // alert(Year)

    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore.getProxy().setExtraParam('eWalletAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferTo');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoRecentlyTransferToStore.getCount();
      

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}