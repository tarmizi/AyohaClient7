Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_PaymentMethodList', {
    requires: [
      'Ext.util.DelayedTask'
    ],
});

var _FloatPanel_AyohaStore_PaymentMethodList;


var isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';





function FloatPanel_AyohaStore_PaymentMethodList() {

    _FloatPanel_AyohaStore_PaymentMethodList =
     Ext.create('Ext.Panel', {
         zIndex: 360,
         xtype: 'container',
         // height: '50%',
         width: '95%',
         height: 360,
         //width: 280,
         id: 'LoadingFloatPanel_AyohaStore_PaymentMethodListID',
         draggable: false,
     

         centered: true,
         //bottom: 64,         
         modal: true,
         hideOnMaskTap: false,
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
             //type: 'slideOut',
             //direction: 'down',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             //duration: 250
         },
         //style: 'border-bottom:1px solid;background-color:#353839;',
         style: 'border-bottom:1px none;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaStore_PaymentMethodList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaStore_PaymentMethodList.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
                             RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
                         }
                        
                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",
         items: {




             //  margin:'-50 0 0 0',
             //height: 150,
             //width: 200,

             height: '100%',
             width: '100%',
             xtype: 'container',
             // style: 'border-bottom:0px solid;background-color:#353839;',
             style: 'border-bottom:0px solid;background-color:transparent;',

             // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
             layout: {
                 type: 'vbox',
                 pack: 'start',
                 align: 'center'

             },

             items: [








            {


                // xtype: 'button',
                xtype: 'container',
                margin: '0 0 0 0',
                id: 'FloatPanel_AyohaStore_PaymentMethodListBorderBg',
                docked: 'top',
                //   style: 'background-image: url("resources/icons/mileageClaimBorder2.png"); background-size: 100% 100%;background-repeat:no-repeat',
                style: ' background-color:transparent;',
                height: '100%',
                width: '100%',
                // style: 'border:2px solid #D25959;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'left'
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

                             id: 'containerFloatPanel_AyohaStore_PaymentMethodListHeader',
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
                                                      id: 'btnFloatPanel_AyohaStore_PaymentMethodListBack',
                                                      height: 30,
                                                      width: 35,
                                                      // iconCls: 'list',
                                                      html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                      ui: 'plain',
                                                      handler: function () {

                                                          _FloatPanel_AyohaStore_PaymentMethodList.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'left',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");

                                                      }
                                                  },

                                                  {
                                                      xtype: 'spacer'
                                                  },


                                                   {
                                                       margin: '0 0 0 0',
                                                       id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_TitleHeaderTxt',
                                                       html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px">Payment Methods</div>',

                                                   },

                                            












                                    ]

                         },



                         {
                             xtype: 'container',
                             width: '100%',
                             //height: 300,
                           height: '75%',
                           margin: '30 0 0 0',
                             style: 'background-color:white',                            
                             layout: {
                                 type: 'vbox',
                                 pack: 'start',
                                 align: 'center',
                             },
                             scrollable: {
                                 direction: 'vertical',
                                 indicators: false,
                             },
                             items: [

                                 {

                                     xtype: 'container',
                                     width: '90%',
                                     height: 60,
                                     //margin: '10 0 0 0',
                                     // zIndex:200,
                                     id: 'containerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet',
                                     name: 'containerViewnamerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet',
                                     //style: 'border-bottom:2px solid #fac;border-top:2px solid #fac ;background-color: #FAD6DE;',
                                     style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                     layout: {
                                         type: 'hbox',
                                         pack: 'center',
                                         align: 'center'
                                     },
                                     items: [


                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet_tap',
                                             width: 10,
                                             height: 56,
                                             margin: '-1 0 0 0',
                                             // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                             style: 'background-color:transparent;',
                                         },
                                          {
                                              xtype: 'spacer',
                                              width: 10
                                          },


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 40,
                                              margin: '4 0 0 0',
                                              id: 'containerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWalletinner',
                                              name: 'nameFloatPanel_AyohaStore_PaymentMethodList_AyohaeWalletinner',
                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                              // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                              style: 'background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [

                                                   {
                                                       //height: 28,
                                                       //width: 28,
                                                       id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet_Image',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/ayohaewallet01.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                   },
                                         {
                                             xtype: 'spacer',
                                             width: 10
                                         },
                                          {
                                              //height: 28,
                                              //width: 28,
                                              id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet_Name',
                                              //badgeText: "2",
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Ayoha eWallet</div>',
                                          },

                                          {
                                              xtype: 'spacer'
                                          },
                                         {
                                             id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet_arrow',
                                             margin: '0 0 0 0',
                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                             //  height: 20,
                                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                         },
                                         {
                                             id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet_Spacer',
                                             xtype: 'spacer',
                                             width: 33
                                         },

                                              ]
                                          },


                                     ]

                                 },



                                 {

                                     xtype: 'container',
                                     width: '90%',
                                     height: 60,
                                     //margin: '10 0 0 0',
                                     id: 'containerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking',
                                     name: 'containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking',
                                     style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                     layout: {
                                         type: 'hbox',
                                         pack: 'center',
                                         align: 'center'
                                     },
                                     items: [


                                         {
                                             xtype: 'container',
                                             id: 'containerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_tap',
                                             width: 10,
                                             height: 56,
                                             margin: '-1 0 0 0',
                                             // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                             style: 'background-color:transparent;',
                                         },
                                          {
                                              xtype: 'spacer',
                                              width: 10
                                          },


                                          {
                                              xtype: 'container',
                                              width: '100%',
                                              height: 40,
                                              margin: '4 0 0 0',
                                              id: 'containerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_inner',
                                              name: 'nameFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_inner',
                                              //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                              // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                              style: 'background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'center',
                                                  align: 'center'
                                              },
                                              items: [

                                                   {
                                                       //height: 28,
                                                       //width: 28,
                                                       id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_Image',
                                                       //badgeText: "2",
                                                       html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/fpx01.jpg"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                                   },
                                         {
                                             xtype: 'spacer',
                                             width: 10
                                         },
                                          {
                                              //height: 28,
                                              //width: 28,
                                              id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_Name',
                                              //badgeText: "2",
                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Pay With Online Banking</div>',
                                          },

                                          {
                                              xtype: 'spacer'
                                          },
                                         {
                                             id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_arrow',
                                             margin: '0 0 0 0',
                                             html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                             //  height: 20,
                                             //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                         },
                                         {
                                             id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking_Spacer',
                                             xtype: 'spacer',
                                             width: 33
                                         },

                                              ]
                                          },


                                     ]

                                 },
                             




                             {

                                 xtype: 'container',
                                 width: '90%',
                                 height: 60,
                                 hidden:true,
                                 //margin: '10 0 0 0',
                                 id: 'containerFloatPanel_AyohaStore_PaymentMethodList_CDM',
                                 name: 'containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_CDM',
                                 style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'
                                 },
                                 items: [


                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_AyohaStore_PaymentMethodList_CDM_tap',
                                         width: 10,
                                         height: 56,
                                         margin: '-1 0 0 0',
                                         // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                         style: 'background-color:transparent;',
                                     },
                                      {
                                          xtype: 'spacer',
                                          width: 10
                                      },


                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: 40,
                                          margin: '4 0 0 0',
                                          id: 'containerFloatPanel_AyohaStore_PaymentMethodList_CDM_inner',
                                          name: 'nameFloatPanel_AyohaStore_PaymentMethodList_CDM_inner',
                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                               {
                                                   //height: 28,
                                                   //width: 28,
                                                   id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_CDM_Image',
                                                   //badgeText: "2",
                                                   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/banktransfer.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                               },
                                     {
                                         xtype: 'spacer',
                                         width: 10
                                     },
                                      {
                                          //height: 28,
                                          //width: 28,
                                          id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_CDM_Name',
                                          //badgeText: "2",
                                          html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Pay At Counter(NA)</div>',
                                      },

                                      {
                                          xtype: 'spacer'
                                      },
                                     {
                                         id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_CDM_arrow',
                                         margin: '0 0 0 0',
                                         html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                         //  height: 20,
                                         //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                     },
                                     {
                                         id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_CDM_Spacer',
                                         xtype: 'spacer',
                                         width: 33
                                     },

                                          ]
                                      },


                                 ]

                             },


                             {

                                 xtype: 'container',
                                 width: '90%',
                                 height: 60,
                                 //margin: '10 0 0 0',
                                 id: 'containerFloatPanel_AyohaStore_PaymentMethodList_COD',
                                 name: 'containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_COD',
                                 style: 'border-bottom:1px solid #dddddd;border-top:2px none #fac ;background-color:transparent;',
                                 layout: {
                                     type: 'hbox',
                                     pack: 'center',
                                     align: 'center'
                                 },
                                 items: [


                                     {
                                         xtype: 'container',
                                         id: 'containerFloatPanel_AyohaStore_PaymentMethodList_COD_tap',
                                         width: 10,
                                         height: 56,
                                         margin: '-1 0 0 0',
                                         // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                                         style: 'background-color:transparent;',
                                     },
                                      {
                                          xtype: 'spacer',
                                          width: 10
                                      },


                                      {
                                          xtype: 'container',
                                          width: '100%',
                                          height: 40,
                                          margin: '4 0 0 0',
                                          id: 'containerFloatPanel_AyohaStore_PaymentMethodList_COD_inner',
                                          name: 'nameFloatPanel_AyohaStore_PaymentMethodList_COD_inner',
                                          //style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 40px 40px 40px 40px;',
                                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid pink;border-top:2px solid pink ;background: transparent;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'hbox',
                                              pack: 'center',
                                              align: 'center'
                                          },
                                          items: [

                                               {
                                                   //height: 28,
                                                   //width: 28,
                                                   id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_COD_Image',
                                                   //badgeText: "2",
                                                   html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:40px;font-size: 10px;font-weight:normal;color:black;" ><img src="resources/icons/cod1.png"  style="width: 40px; height: 40px; border:2px none white;  margin:0px 0px 0px 0px"></div>',
                                               },
                                     {
                                         xtype: 'spacer',
                                         width: 10
                                     },
                                      {
                                          //height: 28,
                                          //width: 28,
                                          id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_COD_Name',
                                          //badgeText: "2",
                                          html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;height:15px">Pay At Counter</div>',
                                      },

                                      {
                                          xtype: 'spacer'
                                      },
                                     {
                                         id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_COD_arrow',
                                         margin: '0 0 0 0',
                                         html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:40px;height:15px;font-size: 12px;font-weight:bold;color:black;" >></div>',
                                         //  height: 20,
                                         //  html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-size: 12px;font-weight:normal;color:black;height:20px">950 Points</div>'
                                     },
                                     {
                                         id: 'htmlFloatPanel_AyohaStore_PaymentMethodList_COD_Spacer',
                                         xtype: 'spacer',
                                         width: 33
                                     },

                                          ]
                                      },


                                 ]

                             },
                             ]

                         },


                   {
                       xtype: 'list',
                       hidden:true,
                       width: '100%',
                       height: '100%',
                       // height: '98%',
                       // flex: 1,
                       //store: 'PaymentMethodStore',
                       store: _DataStore_PaymentMethodStore,
                       id: 'FloatPanel_AyohaStore_PaymentMethodList',
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
                       mode: 'SINGLE',
                       style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                       // width: '100%',
                       disableSelection: true,
                       //itemTpl: '<div onclick="FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected({ID})" class="myContent" style="background-color:white;width:104%">' +
                       //    '<table style="border-collapse:collapse;border-spacing:0;width:104%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="{Icon}" style="border:1px none black; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{PaymentMethodName}</b></td></tr></table>' +
                       //    '<br>' +
                       //    '<div style="width:104%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div></div>',



                       itemTpl: '<div onclick="FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected({ID})" class="myContent" style="background-color:white;width:104%;height:75px;">' +
                           //'<div onclick="FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected({ID})" style="overflow:auto;width:104%;margin:-2px 0px 0px 0px;background-color:white;height:90px;"><div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 0px;background-color:white;"><img src="{Icon}" style="border:1px none white; width:75px;height:75px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:84%;margin:15px 0px 0px 0px;background-color:white;color:black"><b>{PaymentMethodName}</b></div>',
                           '<div style="font-family:Arial, sans-serif;font-size:18px;font-weight:normal;float:left;width:20%;margin:5px 0px 0px 0px;background-color:white;"><img src={Icon} style="border:1px none white; width:75px;height:75px;margin:-7px 0px 0px 0px;" /></div><div style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;float:left;width:80%;margin:0px 0px 0px 0px;background-color:transparent;color:black;padding:30px 10px;"><b>{PaymentMethodName}</b></div></div>',

                       emptyText: '<div class="myContent">No Payment Method!</div>',
                     
                    

                   },


  



                ]


            },



             ]




         }







     });
    return _FloatPanel_AyohaStore_PaymentMethodList;





}



function FloatPanel_AyohaStore_PaymentMethodListShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_PaymentMethodList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_PaymentMethodList());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
    isFloatPanel_AyohaStore_PaymentMethodListOpen = 'Y';
   // FloatPanel_AyohaStore_PaymentMethodList_PaymentMethodStore();
   


   if (isFloatPanel_AyohaStore_CheckOutOpen=='Y')
   {
    Ext.getCmp('containerFloatPanel_AyohaStore_PaymentMethodList_COD').setHidden(true);
   }



    var containerViewnamerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet = Ext.ComponentQuery.query('container[name=containerViewnamerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet]')[0];
    var containerViewElcontainerViewnamerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet = containerViewnamerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet.element;
    containerViewElcontainerViewnamerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWallet.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected(1);
      }
    );




    var containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking = containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking.element;
    containerViewElcontainerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_OnlineBanking.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected(2);
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_COD = Ext.ComponentQuery.query('container[name=containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_COD]')[0];
    var containerViewElcontainerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_COD = containerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_COD.element;
    containerViewElcontainerViewnamecontainerFloatPanel_AyohaStore_PaymentMethodList_COD.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected(4);
      }
    );



   if(isFloatPanel_AyohaStore_CheckOut_MembershipCardOpen == 'Y')
   {
    Ext.getCmp('containerFloatPanel_AyohaStore_PaymentMethodList_AyohaeWalletinner').setHidden(true);
   }

    
}





function FloatPanel_AyohaStore_PaymentMethodList_PaymentMethodStore() {







    _DataStore_PaymentMethodStore.getProxy().setUrl(GetAPIurl() + '/AyohaPaymentMethod/AyohaPaymentMethodload');
    _DataStore_PaymentMethodStore.load();





    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_PaymentMethodStore.getCount();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_PaymentMethodListHide() {
    if (isFloatPanel_AyohaStore_PaymentMethodListOpen == "Y") {
        _FloatPanel_AyohaStore_PaymentMethodList.hide(); isFloatPanel_AyohaStore_PaymentMethodListOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_PaymentMethodListHide()");
    }
  
}
var globalFloatPanel_AyohaStore_PaymentMethod_Code;
function FloatPanel_AyohaStore_PaymentMethodListPaymentMethodSelected(ID) {
   
    if (ID == 1) {
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 1;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Ayoha e-Wallet";
        FloatPanel_AyohaStore_PaymentMethodListHide();
        Dashboard_LoadAyohaEwallet();
    }
    if (ID == 2) {
       // swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "red");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 2;
        FloatPanel_AyohaStore_PaymentMethodListHide();
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(false);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
      
       if (isFloatPanel_AyohaStore_CheckOutOpen=='Y')
       {
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Pay With Online Banking";
       }
       
       if(isFloatPanel_AyohaStore_CheckOut_MembershipCardOpen=='Y'){
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod').value = "Pay With Online Banking";
       }
       
        
    }
    if (ID == 3) {
        swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "red");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 3;
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(true);
        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "CDM/Online Bank Transfer";
    }
    if (ID == 4) {
       // swalFireDynamicIconWithMessage("resources/icons/paymentNotAvailable.png", "Currently Not Available!", "black", "red");
        globalFloatPanel_AyohaStore_PaymentMethod_Code = 4;
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_AyohaeWallet').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_FPX').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_ManualTransfer').setHidden(true);
        // Ext.getCmp('containerFloatPanel_AyohaStore_CheckOut_PaymentMethod_COD').setHidden(false);
       // document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value = "Pay At Counter";
     

       
  

        document.getElementById('input-FloatPanel_AyohaStore_CheckOut_MembershipCardPaymentMethod').value = "Pay At Counter";
        FloatPanel_AyohaStore_PaymentMethodListHide();
    }
}




function convertToCents(ringgit) {
    return ringgit * 100;
}



var billPaymentGateWayID_randomNo;
var globalbillExternalID;
var FloatPanel_AyohaeWallet_BillCode;
var popUpExternalwindow;



function ProductInvoice_MakePaymentAyohaOnlineStore() {
    // "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
    // "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
  
  //loop this untuk amik description//  _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(0);


  LoadingPanelShow("resources/icons/ewalletprocess.gif", "Payment Process...");

    var modifiedAccountNo = GetCurrAyohaUserAccountNo();
    billPaymentGateWayID_randomNo = GenerateRandomNo();
let amountInRinggit =globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2); // RM1500
let amountInCents = convertToCents(amountInRinggit);
var billExternalID = modifiedAccountNo + '-' + FloatPanel_AyohaStore_getEnterpriseAccNo() + '-' + billPaymentGateWayID_randomNo;

// //alert(globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode)
// if(globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode){
//     mapbridgePackage="Membership Package Plan "+globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode;

// }else{
// alert("error value globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode"+globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode)
//     return
// }
// //alert(mapbridgePackage)





var count = _DataStore_AyohaStoreCartLoadCartAyohaStore.getCount();
var strOrder;
var Store;
var orders;
for (i = 0; i < count; i++) {
    Store = _DataStore_AyohaStoreCartLoadCartAyohaStore.getAt(i);
    strOrder += Store.get('RowNumber') +")."+ Store.get('ItemName') + ' ' + Store.get('ItemQuantity') + ' X (RM)' + Store.get('ItemPrice') + '<br>' 
   
    
}
var entName = FloatPanel_AyohaStore_getEnterpriseName();
//orderss = "Hi " + entName + "%0a%0a" + "Below is my order:%0a%0a";


orders = strOrder.replace("undefined", "");


// alert(amountInCents)
// return;














    




 // alert(GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePayment?namBill=Ayoha Membership Bill&name=" + GetAyohaUserAccountNames() + "&hpNo=" + GetCurrentPhoneNumber() + " &billName=Ayoha Membership Fees&billDesc="+mapbridgePackage+"&billEmail=" + GetAyohaUserEmail() + "&billExternalID=" + billExternalID+"&billAmount="+amountInCents)
if( GetCurrentPhoneNumber()){

}else{
    FloatPanel_AyohaStore_CheckOut_MembershipCardHide();
    swalFireFail("Please Update Your Mobile Phone No!");
    SingleTap_Open_EditProfile();
  //  LoadingPanelHide();
    return;
}
    
    $.ajax({

        //url: GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePaymentAyohaOnlineStore?namBill=AyohaStore_Payment&name=" + GetAyohaUserAccountNames() + "&hpNo=" + GetCurrentPhoneNumber() + " &billName=AyohaStore_Payment&billDesc="+orders+"&billEmail=" + GetAyohaUserEmail() + "&billExternalID=" + billExternalID+"&billAmount="+amountInCents,
        url: GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePaymentAyohaOnlineStore?namBill=AyohaStore_Payment&name=" + GetAyohaUserAccountNames() + "&hpNo=" + GetCurrentPhoneNumber() + " &billName=AyohaStore_Payment&billDesc=Ayoha Store Online Payment&billEmail=" + GetAyohaUserEmail() + "&billExternalID=" + billExternalID+"&billAmount="+amountInCents,
    
        // url: GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePayment",
        success: function (result) {
         
            data = Ext.decode(JSON.stringify(result));
            var json = data.success.replace("[", "").replace("]", "");
            var obj = JSON.parse(json);
            console.log(obj.BillCode);


            var task = Ext.create('Ext.util.DelayedTask', function () {

                popUpExternalwindow=window.open('https://dev.toyyibpay.com/' + obj.BillCode, '_system');
                FloatPanel_AyohaeWallet_BillCode = obj.BillCode;
                ProductInvoice_PaymentGateWayBillMasterInsert_AyohaOnlineStore(obj.BillCode, "AyohaStore_Payment", billExternalID);
             
                return false;

               
                
         
            });


            task.delay(500);




           

        }
    });



    

       

}






function ProductInvoice_PaymentGateWayBillMasterInsert_AyohaOnlineStore(billCode, billName, billExternalIDs) {

   
   
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "billCode": billCode,
            "billName": billName,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "billExternalReferenceNo": billExternalIDs,
            "SaleItemsCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "PackagePrice":globalFloatPanel_AyohaStore_Cart_GrandTotal.toFixed(2),
            "PaymentMethod": "FPX B2C",
            "PaymentChannel":"FPX B2C"
        };
        console.log(objn);
        var _value = Ext.Ajax.request({
            type: "POST",
            url: GetAPIurl() + '/PaymentGateWayBillTransaction/PaymentGateWayBillMasterInsertAyohaOnlineStorePayment',
           // url: GetAPIurl()+"PaymentGateway/PaymentGatewayCreateBill_MakePayment",
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                
                
                ProductInvoice_CheckPaymentGatewayTransaction_AyohaOnlineStore(billExternalIDs);
                
               // FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_AyohaOnlineStore(billExternalIDs);
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                // if(globalProductInvoice_Package !="Trial")
                // {
              
                // }else{
                   
                //     var task = Ext.create('Ext.util.DelayedTask', function () {                                 
                //         ProductInvoiceHide();
                //         var task = Ext.create('Ext.util.DelayedTask', function () {                                 
                //             SubscribtionPlanHide();
                //             var task = Ext.create('Ext.util.DelayedTask', function () {                                 
                //                ProductInvoice_SubscriptionsInsertUpdate();
                //                 MarketPlaceHide(); 
                               
                         
                //             });
                //             task.delay(500);
                     
                //         });
                //         task.delay(500);
                 
                //     });
                //     task.delay(500);
                  

                // }
               
              
            },

            failure: function (result, request) {

                //Ext.Viewport.unmask();
                swalFireFail("Failed!" + result.responseText.trim());
            }

        });
    });


    task.delay(500);
}

















function ProductInvoice_MakePayment() {
    LoadingPanelShow("resources/icons/ewalletprocess.gif", "Payment Process...");
    // globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
    // globalFloatPanel_MembershipCardList_NotYetSubscribed_price
    // globalFloatPanelMerchantDetailPage_EnterpriseAccNo
    // GetCurrAyohaUserAccountNo()
    // globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
    // "ItemCartCode": globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode+'-'+globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode,





    var modifiedAccountNo = GetCurrAyohaUserAccountNo();
    billPaymentGateWayID_randomNo = GenerateRandomNo();
let amountInRinggit =globalFloatPanel_MembershipCardList_NotYetSubscribed_price; // RM1500
let amountInCents = convertToCents(amountInRinggit);
var mapbridgePackage;
var billExternalID = modifiedAccountNo + '-' + globalFloatPanelMerchantDetailPage_EnterpriseAccNo + '-' + billPaymentGateWayID_randomNo;

//alert(globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode)
if(globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode){
    mapbridgePackage="Membership Package Plan "+globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode;

}else{
alert("error value globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode"+globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode)
    return
}
//alert(mapbridgePackage)


    




 // alert(GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePayment?namBill=Ayoha Membership Bill&name=" + GetAyohaUserAccountNames() + "&hpNo=" + GetCurrentPhoneNumber() + " &billName=Ayoha Membership Fees&billDesc="+mapbridgePackage+"&billEmail=" + GetAyohaUserEmail() + "&billExternalID=" + billExternalID+"&billAmount="+amountInCents)
if( GetCurrentPhoneNumber()){

}else{
    LoadingPanelHide();
    FloatPanel_AyohaStore_CheckOut_MembershipCardHide();
    swalFireFail("Please Update Your Mobile Phone No!");
    SingleTap_Open_EditProfile();
    
    return;
}
    
    $.ajax({

        url: GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePayment?namBill=Ayoha Membership Bill&name=" + GetAyohaUserAccountNames() + "&hpNo=" + GetCurrentPhoneNumber() + " &billName=Ayoha Membership Fees&billDesc="+mapbridgePackage+"&billEmail=" + GetAyohaUserEmail() + "&billExternalID=" + billExternalID+"&billAmount="+amountInCents,
    
        // url: GetAPIurl() + "PaymentGateway/PaymentGatewayCreateBill_MakePayment",
        success: function (result) {
         
            data = Ext.decode(JSON.stringify(result));
            var json = data.success.replace("[", "").replace("]", "");
            var obj = JSON.parse(json);
            console.log(obj.BillCode);


            var task = Ext.create('Ext.util.DelayedTask', function () {

                popUpExternalwindow=window.open('https://dev.toyyibpay.com/' + obj.BillCode, '_system');
                FloatPanel_AyohaeWallet_BillCode = obj.BillCode;
                ProductInvoice_PaymentGateWayBillMasterInsert(obj.BillCode, "Ayoha_Membership_Bill", billExternalID);
             
                return false;

               
                
         
            });


            task.delay(500);




           

        }
    });



    

       

}








var CheckPaymentGatewayTransaction_timer;
var no = 0;
function ProductInvoice_CheckPaymentGatewayTransaction(billExternalID_ext) {

   

    CheckPaymentGatewayTransaction_timer = setInterval(function () {
        no = no + 1;
       console.log(no);
        if (no == 4) {

                var objn = {

                    //"eWalletAccNo":globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
                    "eWalletAccNo": GetCurrAyohaUserAccountNo(),
                    "TransactionReferenceNo": billExternalID_ext,
                   
                };
               console.log(objn)
                var _value = Ext.Ajax.request({

                    type: "POST",

                    url: GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransaction_Enterprises_LoadBy_eWalletAccNo_TransactionReferenceNo',

                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },

                    success: function (result, request) {
                        data = Ext.decode(result.responseText.trim());

                        if (data.success == "true") {
                            console.log(data.success);
                            console.log(data.total);
                            if (data.total > 0) {
                                console.log(data.total);
                                clearInterval(CheckPaymentGatewayTransaction_timer);
                                no = 0;
                               
                               FloatPanel_AyohaStore_CheckOut_MembershipCardHide();
                               FloatPanel_MembershipCardList_NotYetSubscribedHide();
                               FloatPanel_MembershipCardManagement_TermAndConditionHide();              
                               FloatPanel_MembershipCardList_UpgradeHide();
                               FloatPanel_RewardStoreMembershipCardHide();                           
                               FloatPanel_RewardStoreMembershipCardHide();
                               FloatPanel_OrderCartHide();
                               updateSubscriptionStatus(billExternalID_ext);
                             //Disabled 22/12/2025,tak perlu reload list ni sebab page akn direct ke merchant perk atau check In // FloatPanel_AyohaStore_PaymentMethodList_MembershipCardLoadBySubscriberAccNoDashboardMainStore(billExternalID_ext);
               
               
                            
                               if (isFloatPanel_AyohaStoreOpen == "Y") {
                                   FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
                               }
                              
                             
                          
                    
                               
                                
                                if (popUpExternalwindow)
                                LoadingPanelHide();
                                popUpExternalwindow.close(); 
                               
                                                      
                                    return
                                
                               
                            }
                            if (data.total <= 0) {
                              
                                no = 0;
                            }


                        }
                        else {
                            LoadingPanelHide();
                            swalFireLoginFailed("Reading Failed!" + result.responseText.trim());
                           
                        }


                    },

                    failure: function (result, request) {
                        LoadingPanelHide();
                        swalFireLoginFailed("Reading Failed!" + result.responseText.trim());

                    }

                });
          



                if (popUpExternalwindow.closed) {
                    clearInterval(CheckPaymentGatewayTransaction_timer);
                                no = 0;
                                LoadingPanelHide();
                    // You can add any additional actions to take once the window is closed here
                }

           


        }
      

    }, 1000);
}






function ProductInvoice_CheckPaymentGatewayTransaction_AyohaOnlineStore(billExternalID_ext) {

   

    CheckPaymentGatewayTransaction_timer = setInterval(function () {
        no = no + 1;
       console.log(no);
        if (no == 4) {

                var objn = {

                    //"eWalletAccNo":globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
                    "billCode": FloatPanel_AyohaeWallet_BillCode,
                    "billExternalReferenceNo": billExternalID_ext,
                   
                };
               console.log(objn)
                var _value = Ext.Ajax.request({

                    type: "POST",

                    url: GetAPIurl() + '/PaymentGateWayBillTransaction/PaymentGateWayBillTransactionloadBybillCodeAndbillExternalReferenceNoAyohaStoreOnline',

                    dataType: "json",
                    data: JSON.stringify(objn),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    },

                    success: function (result, request) {
                        data = Ext.decode(result.responseText.trim());

                        if (data.success == "true") {
                            console.log(data.success);
                            console.log(data.total);
                            if (data.total > 0) {
                                console.log(data.total);
                                clearInterval(CheckPaymentGatewayTransaction_timer);
                                no = 0;
                                FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_AyohaOnlineStore(billExternalID_ext);

                               
                                
                               
                            }
                            if (data.total <= 0) {
                              
                                no = 0;
                            }


                        }
                        else {
                            LoadingPanelHide();
                            swalFireLoginFailed("Reading Failed!" + result.responseText.trim());
                           
                        }


                    },

                    failure: function (result, request) {
                        LoadingPanelHide();
                        swalFireLoginFailed("Reading Failed!" + result.responseText.trim());

                    }

                });
          



                if (popUpExternalwindow.closed) {
                    clearInterval(CheckPaymentGatewayTransaction_timer);
                                no = 0;
                                LoadingPanelHide();
                    // You can add any additional actions to take once the window is closed here
                }

           


        }
      

    }, 1000);
}



function FloatPanel_AyohaStore_CheckOut_AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsert_AyohaOnlineStore(billExternalIDs) {


       
    var Note = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_NoteToSeller').value;
    var add = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_ShippingAddress').value;



    


  
    //document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_CheckOut_GrandTotal;
    document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value = globalFloatPanel_AyohaStore_Cart_GrandTotal;
    var PaymentMethod = document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentMethod').value;

   
    var PaymentAmount = parseFloat(document.getElementById('input-FloatPanel_AyohaStore_CheckOut_PaymentAmountCaptured').value);

    var PaymentStatus;

    //if (PaymentAmount == globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
    //    PaymentStatus = "FullPaid";
    //}
    //if (PaymentAmount < globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
    //    PaymentStatus = "PartialyPaid";
    //}
    //if (PaymentAmount > globalFloatPanel_AyohaStore_CheckOut_GrandTotal) {
    //    PaymentStatus = "CreditPaid";
    //}


    if (PaymentAmount == globalFloatPanel_AyohaStore_Cart_GrandTotal) {
        PaymentStatus = "FullPaid";
    }
    if (PaymentAmount < globalFloatPanel_AyohaStore_Cart_GrandTotal) {
        PaymentStatus = "PartialyPaid";
    }
    if (PaymentAmount > globalFloatPanel_AyohaStore_Cart_GrandTotal) {
        PaymentStatus = "CreditPaid";
    }
    if (Note) {
        Note = Note;
    } else {
        Note = "NA";
    }



    if (PaymentMethod) {

    } else {
        swalFireFail("Payment Method Required !");
        return;
    }

   
    //////var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_CheckOut_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)
    var floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal = parseFloat(globalFloatPanel_AyohaStore_Cart_GrandTotal) - parseFloat(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)

    console.log(globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher)
    console.log(globalFloatPanel_AyohaStore_Cart_GrandTotal)
    console.log(floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal)
   

   

    


    



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






    var internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode;
    var ModifiedVocherCode;

    if (arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length > 0) {
        for (i = 0; i < arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length; i++) {
            internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode += arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode[i] + ","
        }
        ModifiedVocherCode = internalglobalFloatPanel_AyohaStore_CheckOut_VoucherCode.replace("undefined", "");
    } else {
        ModifiedVocherCode = "NoVoucherCode,";
    }






    //console.log(PaymentAmount)
    //console.log(globalFloatPanel_AyohaStore_CheckOut_GrandTotal)
    //console.log(globalFloatPanel_AyohaStore_Cart_GrandTotal)
    //console.log(floatglobalFloatPanel_AyohaStore_CheckOut_GrandTotal);
    ////return;
   


    //LoadingPanelShow("resources/icons/sendingAnim.gif", "Submit Order...")
   // LoadingPanelShow("resources/icons/ewalletprocess.gif", "Payment Process...");
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "ItemCartCode": globalFloatPanel_AyohaStore_Cart_ItemCartCode,
            "DeliveryChargeCode": globalFloatPanel_AyohaStore_DeliveryChargeList_ChargeTypeCode,
            "DeliveryCharge": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryCharge,
            "MembershipDiscountCampaignCode": "NA",
            "MembershipDiscount": 0.00,
            "VoucherCampaignCode": "NA",
            "VoucherDiscount": globalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_TotalAmountVoucher,
            "GrandTotal": globalFloatPanel_AyohaStore_Cart_GrandTotal,
            "DeliveryAddress_StreetName": globalFloatPanel_AyohaStore_DeliveryAddress_StreetName,
            "DeliveryAddress_Town": globalFloatPanel_AyohaStore_DeliveryAddress_TownCity,
            "DeliveryAddress_Postcode": globalFloatPanel_AyohaStore_DeliveryAddress_PostCode,
            "DeliveryAddress_StateCode": globalFloatPanel_AyohaStore_DeliveryAddress_State,
            "DeliveryAddress_CountryCode": globalFloatPanel_AyohaStore_DeliveryAddress_Country,
            "ReferenceName": globalFloatPanel_AyohaStore_DeliveryAddress_ContactPerson,
            "ReferencePhoneNo": globalFloatPanel_AyohaStore_DeliveryAddress_PhoneNo,
            "NoteToSeller": Note,
            "MerchantPointEarn": globalFloatPanel_AyohaStore_Cart_TotalMerchantPoint,
            "AyohaPointEarn": globalFloatPanel_AyohaStore_Cart_TotalAyohaPoint,
            "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "DeliveryName": globalFloatPanel_AyohaStore_DeliveryChargeList_DeliveryName,
            "TotalQuantity": globalFloatPanel_AyohaStore_Cart_TotalItemQuantity,
            "SubTotal": globalFloatPanel_AyohaStore_Cart_TotalSumPrice,
            "PaymentAmount": PaymentAmount,
            "PaymentMethod": PaymentMethod,
            "PaymentMethodCode": globalFloatPanel_AyohaStore_PaymentMethod_Code,
            "CreatedBy": GetCurrAyohaUserAccountNo(),
            "PaymentStatus": PaymentStatus,
            "VoucherCount": arrglobalFloatPanel_AyohaRewardVoucherList_AyohaStore_Cart_VoucherCode.length,
            "VoucherCode": ModifiedVocherCode.slice(0, -1),
            "TotalStampEarn":globalFloatPanel_AyohaStore_Cart_TotalMerchantSumStamp,
            "MemberDiscountPercent":globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPercent,
            "MemberDiscountAmount":globalFloatPanel_AyohaStore_CheckOut_MembershipDiscountPrice,
            "billExternalReferenceNo":billExternalIDs
        };

        console.log(objn);

        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStoreOrder/AyohaStoreOrderAyohaStorePaymentOrderAndConfirmPayInsertAyohaStoreOnline',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {



              


                   // FloatPanel_AyohaStore_CheckOut_PlayAyohaPointSound();
                    FloatPanel_AyohaStore_AyohaPointCollectedAnimShow();                   
                    FloatPanel_AyohaStoreHide();
                    FloatPanel_AyohaStore_SaleItemDetailHide_AyohaStoreOnlinePayment();
                    FloatPanel_AyohaStore_CartHide();
                    FloatPanel_AyohaStore_CheckOutHide_AyohaStoreOnlinePayment();
                    FloatPanel_OrderCartHide();
            
                  //  FloatPanel_AyohaStore_SaleItemDetailHide();                   
                  //  FloatPanel_AyohaStore_OrderHistoryHide();
              
                    // swalFireSuccesDynamicIconWithMessage("resources/icons/orderplacedAnim.gif", "Order has been submit successfully!");
                   // swalFireDynamicIconWithMessage("resources/icons/paymentSuccess.gif", "Payment has been process successfully!", "black", "#9932cc");
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    if (isFloatPanel_AyohaStoreOpen == "Y") {
                        Ext.getCmp('htmlFloatPanel_AyohaStore_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_MyCartCountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>');
                    }
                 
                   // Dashboard_SearchMerchantListHide();
                 



                  //  FloatPanel_RewardStore_SearchResultHide();
                   // FloatPanel_RewardStoreHide();        
                  //  FloatPanel_OrderHistoryHide();
                  //  FloatPanel_OrderCartHide();
                 //   FloatPanel_AyohaStore_CheckOut_MembershipCardHide();
                  //  FloatPanel_MembershipCardList_NotYetSubscribedHide();
                 //   FloatPanel_MembershipCardManagement_TermAndConditionHide();              
                  //  FloatPanel_MembershipCardList_UpgradeHide();
                 //   FloatPanel_RewardStoreMembershipCardHide();                           
                  //  LoadingPanelHide();
                  //  FloatPanel_AyohaStore_PaymentMethodList_MembershipCardLoadBySubscriberAccNoDashboardMainStore(billExternalID_ext);
    
    
                 
                    if (isFloatPanel_AyohaStoreOpen == "Y") {
                        FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
                    }
                                      
                   //Dashboard_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                //    _LoadingPanel.hide(Ext.fx.Animation({
                //     type: 'popOut',                  
                //     duration: 250

                // }));

                    var task = Ext.create('Ext.util.DelayedTask', function () {
                        DashboardAyohaUserMainStore();
                        LoadingPanelHide();
                       
                    });
                task.delay(1000);



              
                   
                if (popUpExternalwindow){
                    popUpExternalwindow.close(); 
               
                                      
                    return
                }
                      
             
                   




                }
                else {

                   // swalFireFail("Fail! "+ result.responseText.trim());
                   LoadingPanelHide();
                    swalFireLoginFailed("Failed!" + result.responseText.trim());
                    globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                    globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                    globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                    Ext.Viewport.unmask();
                   
                }
                Ext.Viewport.unmask();
                LoadingPanelHide();

            },

            failure: function (result, request) {
                LoadingPanelHide();
                swalFireFail("failure! " + result.responseText.trim());
               // swalFireLoginFailed("Reading Failed!" + result.responseText.trim());
                globalFloatPanel_AyohaStore_CartSumItemSumPrice = 0.00;
                globalFloatPanel_AyohaStore_CartTotalItemQuantity = 0;
                globalFloatPanel_AyohaStore_Cart_ItemCartCode = "NewItemCartCode";
                Ext.Viewport.unmask();
               // LoadingPanelHide();
            }

        });

        Ext.Viewport.unmask();
        LoadingPanelHide();
    });
    task.delay(1000);
}

function updateSubscriptionStatus(billExternalReferenceNo){
    
        var objn = {
            "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "SubscriptionStatus": 'Active',
            "billExternalReferenceNo": billExternalReferenceNo,
            "billCode": FloatPanel_AyohaeWallet_BillCode,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
            "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price              
        };
        console.log(objn);
        var _value = Ext.Ajax.request({
            type: "POST",
            url: GetAPIurl() + '/Subscriptions/SubscriptionsUpdateSubscriptionStatus',
           // url: GetAPIurl()+"PaymentGateway/PaymentGatewayCreateBill_MakePayment",
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                FloatPanel_AyohaStore_CheckOut_MembershipCardHide();
                FloatPanel_MembershipCardList_NotYetSubscribedHide();
                swalFireHoorayMessage("Welcome aboard! 🚀 Your membership was successful. You can now view your card in the Membership Card List.");
               // FloatPanel_AyohaStore_PaymentMethodList_MembershipCardAgree();
            },

            failure: function (result, request) {

                //Ext.Viewport.unmask();
                swalFireFail("Failed!" + result.responseText.trim());
            }

        });
    

}
















function ProductInvoice_PaymentGateWayBillMasterInsert(billCode, billName, billExternalIDs) {


   
    

    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {
            "billCode": billCode,
            "billName": billName,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "EnterpriseAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
            "billExternalReferenceNo": billExternalIDs,
            "SaleItemsCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
            "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
            "PaymentMethod": "FPX B2C",
            "PaymentChannel":"FPX B2C"
        };
        console.log(objn);
        var _value = Ext.Ajax.request({
            type: "POST",
            url: GetAPIurl() + '/PaymentGateWayBillTransaction/PaymentGateWayBillMasterInsertMembershipCardPayment',
           // url: GetAPIurl()+"PaymentGateway/PaymentGatewayCreateBill_MakePayment",
            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                ProductInvoice_CheckPaymentGatewayTransaction(billExternalIDs);
                // if(globalProductInvoice_Package !="Trial")
                // {
              
                // }else{
                   
                //     var task = Ext.create('Ext.util.DelayedTask', function () {                                 
                //         ProductInvoiceHide();
                //         var task = Ext.create('Ext.util.DelayedTask', function () {                                 
                //             SubscribtionPlanHide();
                //             var task = Ext.create('Ext.util.DelayedTask', function () {                                 
                //                ProductInvoice_SubscriptionsInsertUpdate();
                //                 MarketPlaceHide(); 
                               
                         
                //             });
                //             task.delay(500);
                     
                //         });
                //         task.delay(500);
                 
                //     });
                //     task.delay(500);
                  

                // }
               
              
            },

            failure: function (result, request) {

                //Ext.Viewport.unmask();
                swalFireFail("Failed!" + result.responseText.trim());
            }

        });
    });


    task.delay(500);
}


function FloatPanel_AyohaStore_PaymentMethodList_MembershipCardAgree(billExternalID_ext) {
    var obj = {
        "CampaignEnterpriseAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        //"MembershipByMethod": "AyohaStoreRequest",
        "MembershipByMethod": 'FromMainPage_HScroller',        
        "ReferalSubscriberAccNo": "NA",
        "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "CreatedBy":GetCurrAyohaUserAccountNo(),

    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsInsert',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                FloatPanel_MembershipCardManagement_TermAndConditionHide();
              
                FloatPanel_MembershipCardList_UpgradeHide();
                FloatPanel_RewardStoreMembershipCardHide();
                FloatPanel_MembershipCardList_NotYetSubscribedHide();
                FloatPanel_RewardStoreMembershipCardHide();
                FloatPanel_OrderCartHide();
                FloatPanel_AyohaStore_PaymentMethodList_MembershipCardLoadBySubscriberAccNoDashboardMainStore(billExternalID_ext);


               
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();
               
                if (isFloatPanel_AyohaStoreOpen == "Y") {
                    FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
                }
               
               
            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}

function FloatPanel_AyohaStore_PaymentMethodList_MembershipsInsertPayAtCounter() {
    var obj = {
        "CampaignEnterpriseAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        //"MembershipByMethod": "AyohaStoreRequest",
        "MembershipByMethod": 'FromMainPage_HScroller',        
        "ReferalSubscriberAccNo": "NA",
        "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "CreatedBy":GetCurrAyohaUserAccountNo(),
        "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "SubscribedPackage":globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode,
        "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Memberships/MembershipsInsertPayAtCounter',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                FloatPanel_MembershipCardManagement_TermAndConditionHide();
              
                FloatPanel_MembershipCardList_UpgradeHide();
                FloatPanel_RewardStoreMembershipCardHide();
                FloatPanel_AyohaStore_CheckOut_MembershipCardHide();
                FloatPanel_MembershipCardList_NotYetSubscribedHide();
                FloatPanel_RewardStoreMembershipCardHide();
                FloatPanel_OrderCartHide();
                swalFireHoorayMessage("Membership Card Payment Charge Sent to Counter Successfully!");
             //   FloatPanel_AyohaStore_PaymentMethodList_MembershipCardLoadBySubscriberAccNoDashboardMainStore(billExternalID_ext);


               
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

                //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();
               
                if (isFloatPanel_AyohaStoreOpen == "Y") {
                    FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
                }
               
               
            }
            else {

                swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}

function FloatPanel_AyohaStore_PaymentMethodList_MembershipCardLoadBySubscriberAccNoDashboardMainStore(billExternalID_ext) {

    globalOpenMembershipCardList_Upgrade_From = 'DashboardMain';
    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = 'NO';
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadBySubscriberAccNoDashboardMain');
    _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.load();
   

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore.getCount());
        Ext.getCmp('Dashboard_MyAccount_UnSubscribedMembershipCardList').setStore(_DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore);
       // alert(count);
       updateSubscriptionStatus(billExternalID_ext);
        LoadingPanelHide();

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}

function ProductInvoice_SubscriptionsInsertUpdate(){
    // V.SubscriptionCode, V.SubscriberAccNo,
    //        V.MerchantAccNo, V.SaleItemsCode,V.SubscriptionStatus,
    //         V.ModifiedBy

  


    var objn = {

        "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "MerchantAccNo": globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
        "SaleItemsCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        "SubscriptionStatus": "Pending-Payment",
        "ModifiedBy": GetCurrAyohaUserAccountNo(),
        "SubscribedPackage":globalFloatPanel_MembershipCardList_NotYetSubscribed_paymentCycleCode,
        "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
    };
 console.log(objn)
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/Subscriptions/SubscriptionsInsert',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {
            data = Ext.decode(result.responseText.trim());
          
            if (data.success == "true") {
               ProductInvoice_MakePayment();
              LoadingPanelHide();
              return;
            //  FloatPanel_AyohaStore_AyohaPointCollectedAnimHide();
            }
            else {
               // alert( data.message)
                LoadingPanelHide();
                swalFireLoginFailed("Subscribtion Failed!" + data.message);
               
            }


        },

        failure: function (result, request) {
            LoadingPanelHide();
         // alert( data.message)
            swalFireLoginFailed("Subscribtion failure!" + result.responseText.trim());

        }

    });
}






