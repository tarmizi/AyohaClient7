Ext.define('BuskartApp.view.AyohaeWallet.FloatPanel_AyohaeWallet_Transaction_Detail', {

});

var _FloatPanel_AyohaeWallet_Transaction_Detail;


var isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';












//function FloatPanel_AyohaeWallet_Transaction_Detail() {

//    _FloatPanel_AyohaeWallet_Transaction_Detail =
//     Ext.create('Ext.Container', {

//         xtype: 'container',
//         //height: 485,
//         //width: '95%',
//         height: '100%',
//         width: '100%',
//         id: 'LoadingFloatPanel_AyohaeWallet_Transaction_DetailID',
//         draggable: false,



//         centered: true,
//         //bottom: 64,
//         zIndex: 220,
//         // modal: true,
//         //  hideOnMaskTap: true,
//         layout: {
//             type: 'vbox'
//         },
//         showAnimation: {
//             type: 'popIn',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         hideAnimation: {
//             //type: 'slideOut',
//             //direction: 'up',
//             //easing: 'cubic-bezier(.7,0,.7,1)',
//             //duration: 250
//             type: 'popOut',
//             duration: 250,
//             easing: 'ease-out'
//         },
//         //style: 'border-bottom:1px solid;background-color:#353839;',
//         style: 'border-bottom:1px solid;background-color:white;',
//         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//         listeners: {
//             initialize: function (c) {
//                 this.element.on({
//                     swipe: function (e, node, options) {

//                         if (e.direction == "left") {
//                             _FloatPanel_AyohaeWallet_Transaction_Detail.hide(Ext.fx.Animation({
//                                 type: 'slideOut',
//                                 direction: 'left',
//                                 easing: 'cubic-bezier(.7,0,.7,1)',
//                                 duration: 250

//                             }));
//                             isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
//                             RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
//                         } if (e.direction == "right") {
//                             _FloatPanel_AyohaeWallet_Transaction_Detail.hide(Ext.fx.Animation({
//                                 type: 'slideOut',
//                                 direction: 'right',
//                                 easing: 'cubic-bezier(.7,0,.7,1)',
//                                 duration: 250

//                             }));
//                             isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
//                             RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
//                         }
                        
//                     }
//                 });
//             }
//         },

//         //  style: "background-color: #D25959;",



//         items: [
//             {

//                 xtype: 'container',
//                 width: '100%',
//                 height: 40,
//                 // docked: 'top',
//                 // width: 40,
//                 style: ' background-color: white;',
//                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                 //hidden: true,

//                 id: 'containerFloatPanel_AyohaeWallet_Transaction_DetailHeader',
//                 //style: {
//                 //    // background: '#D25959',
//                 //    background: 'transparent',
//                 //    // border: '2px'
//                 //},
//                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                 // style: 'border-bottom:2px solid #D25959;background-color:transparent',
//                 layout: {
//                     type: 'hbox',
//                     pack: 'center',
//                     align: 'center',
//                 },
//                 style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
//                 // hidden:true,
//                 items:
//                        [
//                            {
//                                xtype: 'panel',
//                                width: 10,
//                            },

//                                      {
//                                          xtype: 'button',
//                                          id: 'btnFloatPanel_AyohaeWallet_Transaction_DetailBack',
//                                          height: 30,
//                                          width: 35,
//                                          // iconCls: 'list',
//                                          html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
//                                          ui: 'plain',
//                                          handler: function () {
//                                              RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
//                                              _FloatPanel_AyohaeWallet_Transaction_Detail.hide(Ext.fx.Animation({
//                                                  type: 'slideOut',
//                                                  direction: 'left',
//                                                  easing: 'cubic-bezier(.7,0,.7,1)',
//                                                  duration: 250

//                                              }));
//                                              isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
//                                              FloatPanel_RewardStoreHide();

//                                          }
//                                      },
//                                      {
//                                          xtype: 'spacer',

//                                      },

//                                      //{
//                                      //    margin: '0 0 0 0',
//                                      //    html: '<font size=2 color=black><b>eWallet Transaction History</b></font>'
//                                      //},
//                                       {
//                                           margin: '-4 0 0 0',
//                                           id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TitleHeaderTxt',
//                                           html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">eWallet Transaction History </div>',
//                                           // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                           //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                                       },
//                                           {
//                                               xtype: 'panel',
//                                               width: 10,
//                                           }
















//                        ]

//             },

//             {
//                 xtype: 'container',
//                 width: '100%',
//                 //height: 300,
//                 height: '100%',
//                 layout: {
//                     type: 'vbox',
//                     pack: 'start',
//                     align: 'center',
//                 },
//                 items: [
//                     {

//                         xtype: 'container',
//                         width: '100%',
//                         //height: 300,
//                         height: 70,
//                         style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75 );',
//                         layout: {
//                             type: 'hbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [
//                             {
//                                 xtype: 'panel',
//                                 width:25
//                             },
//                             {
//                                 width: 62,
//                                 height: 62,
//                                 margin: '0 0 0 0',
//                                 html:'<img src="resources/icons/ewallet5.png" width="62px" height="62px">'
//                             },
//                              {
//                                  xtype: 'panel',
//                                  width: 7
//                              },
//                             {
                                
//                              margin:'30 0 0 0',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:0px 0px 0px 0px;height:62;vertical-align:middle">Ayoha e Wallet </div>',
//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },
//                             //{
//                             //    xtype: 'panel',
//                             //    width: 40
//                             //},
//                         ]

//                     },




//                     {

//                         xtype: 'container',
//                         width: '100%',
//                         //height: 300,
//                         height: 70,
//                         style: ' background-color:	#F0F0F0;',
//                         layout: {
//                             type: 'hbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [
//                              {
//                                  xtype: 'container',
//                                  width: '5%',
//                                  height: 70,
//                              },


//                             {
//                                 xtype: 'container',
//                                 width: '60%',
//                                 height: 70,
//                                 style: ' background-color:	transparent;',
//                                 layout: {
//                                     type: 'vbox',
//                                     pack: 'left',
//                                     align: 'left',
//                                 },
//                                 items: [
//                                     {
//                                         margin: '25 0 0 0',
//                                         id:'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType',                                        
//                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Money</div>',

//                                         // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                         //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                                     },
//                                 ]
//                             },
//                             {
//                                 xtype: 'container',
//                                 width: '15%',
//                                 height: 70,
//                             },
//                              {
//                                  xtype: 'container',
//                                  width: '20%',
//                                  height: 70,
//                                  style: ' background-color:	transparent;',
//                                  layout: {
//                                      type: 'vbox',
//                                      pack: 'center',
//                                      align: 'center',
//                                  },
//                                  items: [
//                                        {
//                                            width: 32,
//                                            height: 32,
//                                            margin: '0 0 0 0',
//                                            id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon',
//                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
//                                        },
//                                  ]
//                              },
                             
                         
                            
                               

//                         ]

//                     },


//                     {

//                         xtype: 'container',
//                         width: '90%',
//                         //height: 300,
//                         height: 60,
//                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [

//                             {
//                                 xtype: 'panel',
//                                 height:12
//                             },
//                             {

//                                 margin: '0 0 0 0',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Reference ID</div>',
//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },
                             
//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionID',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">123</div>',

//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                         ]

//                     },


//                     {

//                         xtype: 'container',
//                         width: '90%',
//                         //height: 300,
//                         height: 60,
//                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [

//                             {
//                                 xtype: 'panel',
//                                 height: 12
//                             },
//                             {

//                                 margin: '0 0 0 0',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Date</div>',
//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionDate',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">12/1/2022 09:55:32 AM</div>',


//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                         ]

//                     },
//                     {

//                         xtype: 'container',
//                         width: '90%',
//                         //height: 300,
//                         height: 60,
//                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
//                         layout: {
//                             type: 'hbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [

//                             {
//                                 xtype: 'container',
//                                 width: '85%',
//                                 height: 60,
//                                 style: ' background-color:	transparent;',
//                                 layout: {
//                                     type: 'vbox',
//                                     pack: 'left',
//                                     align: 'left',
//                                 },
//                                 items: [
//                                      {
//                                          xtype: 'panel',
//                                          height: 12
//                                      },
//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To</div>',
//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountName',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">TARMIZI BIN RAHIM</div>',




//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                                 ]
//                             },
//                               {
//                                   xtype: 'container',
//                                   width: '15%',
//                                   height: 60,
//                                   style: ' background-color:	transparent;',
//                                   layout: {
//                                       type: 'vbox',
//                                       pack: 'center',
//                                       align: 'center',
//                                   },
//                                   items: [
//                                        {
//                                            width: 32,
//                                            height: 32,
//                                            margin: '0 0 0 0',
//                                            id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameImg',
//                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
//                                        },
//                                   ]
//                               },
                            

//                         ]

//                     },
//                     {

//                         xtype: 'container',
//                         width: '90%',
//                         //height: 300,
//                         height: 60,
//                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [

//                             {
//                                 xtype: 'panel',
//                                 height: 12
//                             },
//                             {
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl',                           
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To Account No</div>',


//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNo',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">0133376958</div>',



//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                         ]

//                     },
//                     {

//                         xtype: 'container',
//                         width: '90%',
//                         //height: 300,
//                         height: 60,
//                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [

//                             {
//                                 xtype: 'panel',
//                                 height: 12
//                             },
//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Note/Reference</div>',
//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNote',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Sedekah</div>',




//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                         ]

//                     },
//                     {

//                         xtype: 'container',
//                         width: '90%',
//                         //height: 300,
//                         height: 60,
//                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
//                         layout: {
//                             type: 'vbox',
//                             pack: 'left',
//                             align: 'left',
//                         },
//                         items: [

//                             {
//                                 xtype: 'panel',
//                                 height: 12
//                             },
//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Amount</div>',
//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                             {

//                                 margin: '0 0 0 0',
//                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmount',
//                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



//                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

//                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
//                             },

//                         ]

//                     },
                    
//                    {

//                    }
//                 ]

//             },


//                    ///////


                    







//         ]







//     });
//    return _FloatPanel_AyohaeWallet_Transaction_Detail;





//}




function FloatPanel_AyohaeWallet_Transaction_Detail() {

    _FloatPanel_AyohaeWallet_Transaction_Detail =
     Ext.create('Ext.Container', {

         xtype: 'container',
         //height: 485,
         //width: '95%',
         height: '100%',
         width: '100%',
         id: 'LoadingFloatPanel_AyohaeWallet_Transaction_DetailID',
         draggable: false,



         centered: true,
         //bottom: 64,
         zIndex: 220,
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
         style: 'border-bottom:1px solid;background-color:white;',
         // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         listeners: {
             initialize: function (c) {
                 this.element.on({
                     swipe: function (e, node, options) {

                         if (e.direction == "left") {
                             _FloatPanel_AyohaeWallet_Transaction_Detail.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'left',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
                         } if (e.direction == "right") {
                             _FloatPanel_AyohaeWallet_Transaction_Detail.hide(Ext.fx.Animation({
                                 type: 'slideOut',
                                 direction: 'right',
                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                 duration: 250

                             }));
                             isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
                             RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
                         }

                     }
                 });
             }
         },

         //  style: "background-color: #D25959;",



         items: [
             {

                 xtype: 'container',
                 width: '100%',
                 height: 40,
                 //docked: 'top',
                 // width: 40,
                 style: ' background-color: white;',
                 //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerFloatPanel_AyohaeWallet_Transaction_DetailHeader',
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
                 style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                 // hidden:true,
                 items:
                        [
                            {
                                xtype: 'panel',
                                width: 10,
                            },

                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaeWallet_Transaction_DetailBack',
                                          height: 30,
                                          width: 35,
                                          // iconCls: 'list',
                                          html: '<div style="margin:0px 0px 0px 0px"><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                          ui: 'plain',
                                          handler: function () {
                                              RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
                                              _FloatPanel_AyohaeWallet_Transaction_Detail.hide(Ext.fx.Animation({
                                                  type: 'slideOut',
                                                  direction: 'left',
                                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                                  duration: 250

                                              }));
                                              isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
                                              FloatPanel_RewardStoreHide();

                                          }
                                      },
                                      {
                                          xtype: 'spacer',

                                      },

                                      //{
                                      //    margin: '0 0 0 0',
                                      //    html: '<font size=2 color=black><b>eWallet Transaction History</b></font>'
                                      //},
                                       {
                                           margin: '-4 0 0 0',
                                           id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TitleHeaderTxt',
                                           html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">eWallet Transaction Detail </div>',
                                           // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                           //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                       },
                                           {
                                               xtype: 'panel',
                                               width: 10,
                                           }
















                        ]

             },
             {

                 xtype: 'container',
                 width: '100%',
                 //height: 300,
                 height: 70,
                 style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75 );',
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
                         width: 62,
                         height: 62,
                         margin: '0 0 0 0',
                         html: '<img src="resources/icons/ewallet5.png" width="62px" height="62px">'
                     },
                      {
                          xtype: 'panel',
                          width: 7
                      },
                     {

                         margin: '30 0 0 0',
                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:white;margin:0px 0px 0px 0px;height:62;vertical-align:middle">Ayoha e Wallet </div>',
                         // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                         //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                     },
                     //{
                     //    xtype: 'panel',
                     //    width: 40
                     //},
                 ]

             },


             {
                 xtype: 'container',
                 width: '100%',
                 //height: 300,
                 height: '100%',
                 layout: {
                     type: 'vbox',
                     pack: 'start',
                     align: 'center',
                 },
                 scrollable: {
                     direction: 'vertical',
                     directionLock: true,
                     indicators: false
                 },
                 items: [


                     {
                         xtype: 'container',
                         width: '100%',
                         //height: 300,
                         height:900,
                         layout: {
                             type: 'vbox',
                             pack: 'start',
                             align: 'center',
                         },
                       
                         items: [
                             



                     {

                         xtype: 'container',
                         width: '100%',
                         //height: 300,
                         height: 70,
                         style: ' background-color:	#F0F0F0;',
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [
                              {
                                  xtype: 'container',
                                  width: '5%',
                                  height: 70,
                              },


                             {
                                 xtype: 'container',
                                 width: '60%',
                                 height: 70,
                                 style: ' background-color:	transparent;',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left',
                                 },
                                 items: [
                                     {
                                         margin: '25 0 0 0',
                                         id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType',
                                         html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Money</div>',

                                         // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                         //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                     },
                                 ]
                             },
                             {
                                 xtype: 'container',
                                 width: '15%',
                                 height: 70,
                             },
                              {
                                  xtype: 'container',
                                  width: '20%',
                                  height: 70,
                                  style: ' background-color:	transparent;',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center',
                                  },
                                  items: [
                                        {
                                            width: 32,
                                            height: 32,
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon',
                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
                                        },
                                  ]
                              },





                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Reference ID</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionID',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">123</div>',

                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Date</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionDate',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">12/1/2022 09:55:32 AM</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },
                      {

                          xtype: 'container',
                          width: '90%',
                          hidden: true,
                          id: 'containerFloatPanel_AyohaeWallet_Transaction_Detail_CashOutBy',
                          //height: 300,
                          height: 60,
                          style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                          layout: {
                              type: 'vbox',
                              pack: 'left',
                              align: 'left',
                          },
                          items: [

                              {
                                  xtype: 'panel',
                                  height: 12
                              },
                              {

                                  margin: '0 0 0 0',
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Cash Out By:</div>',
                                  // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                  //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                              },

                              {

                                  margin: '0 0 0 0',
                                  id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_CashOutBy',
                                  html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">12/1/2022 09:55:32 AM</div>',


                                  // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                  //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                              },

                          ]

                      },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'hbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'container',
                                 width: '85%',
                                 height: 60,
                                 style: ' background-color:	transparent;',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'left',
                                     align: 'left',
                                 },
                                 items: [
                                      {
                                          xtype: 'panel',
                                          height: 12
                                      },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountName',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">TARMIZI BIN RAHIM</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                                 ]
                             },
                               {
                                   xtype: 'container',
                                   width: '15%',
                                   height: 60,
                                   style: ' background-color:	transparent;',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center',
                                   },
                                   items: [
                                        {
                                            width: 32,
                                            height: 32,
                                            margin: '0 0 0 0',
                                            id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameImg',
                                            html: '<img src="resources/icons/transferMoneyRed.png" width="32px" height="32px">'
                                        },
                                   ]
                               },


                         ]

                     },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To Account No</div>',


                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNo',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">0133376958</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Note/Reference</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNote',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Sedekah</div>',




                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },


                     {

                         xtype: 'container',
                         width: '90%',
                         hidden: true,
                         //height: 300,
                         id: 'containerFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutAmount',
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Request Cash Out Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },

                     {

                         xtype: 'container',
                         width: '90%',
                         hidden: true,
                         //height: 300,
                         id: 'containerFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesRule',
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesRuleLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Cash Out Charges Percent</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesRule',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },

                     {

                         xtype: 'container',
                         width: '90%',
                         hidden: true,
                         //height: 300,
                         id: 'containerFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesAmount',
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Cash Out Charges Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },
                     {

                         xtype: 'container',
                         width: '90%',
                         //height: 300,
                         height: 60,
                         style: ' background-color:	white;border-bottom:1px solid #F0F0F0',
                         layout: {
                             type: 'vbox',
                             pack: 'left',
                             align: 'left',
                         },
                         items: [

                             {
                                 xtype: 'panel',
                                 height: 12
                             },
                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Amount</div>',
                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                             {

                                 margin: '0 0 0 0',
                                 id: 'htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmount',
                                 html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM1000.00</div>',



                                 // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                 //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                             },

                         ]

                     },

                         ]
                     },

                     

                    
                 ]

             },


                    ///////










         ]







     });
    return _FloatPanel_AyohaeWallet_Transaction_Detail;





}



function FloatPanel_AyohaeWallet_Transaction_DetailShow(ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID) {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Transaction_Detail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Transaction_Detail());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
    isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'Y';

    

    if (TransactionType == "eWallet_AppTransferCredit" || TransactionType == "TopUp-eWallet-OpeningEwalletAccount") {
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Money</div>')
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon').setHtml('<img src="resources/icons/receivedMoneyBlue.png" width="32px" height="32px">');

        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Money From</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Money From Account No</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Amount</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle"> Note/Reference</div>');

       
    }
    if (TransactionType == "eWallet_AppTransferDebit") {
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Money</div>')
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon').setHtml('<img src="resources/icons/transferMoneyRed01.png" width="32px" height="32px">');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer To Account No</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Transfer Amount</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle"> Transfer Note/Reference</div>');
    }

    if (TransactionType == "Scan_eWalletApp_Debit") {
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Scan And Pay</div>')
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon').setHtml('<img src="resources/icons/scanQrCodePurple.png" width="32px" height="32px">');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay To</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay To Account No</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Pay Amount</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Payment Note/Reference</div>');
    }

    if (TransactionType == "AyohaRewardContest_TapAndWin") {
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Money</div>')
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon').setHtml('<img src="resources/icons/receivedMoneyBlue.png" width="32px" height="32px">');

        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Money From</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Money From Account No</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Received Amount</div>');
        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle"> Note/Reference</div>');


    }
   

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionID').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + ID + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionDate').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + ModifiedCreatedDate + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + FullAccountName + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameImg').setHtml('<img src="' + UserProfileImg + '" width="32px" height="32px">');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + PhoneNo + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNote').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + TransactionNote + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM' + TransactionAmount + '</div>');


    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_Transaction_DetailID').setZIndex(400);
    }

}

function FloatPanel_AyohaeWallet_Transaction_DetailShow_CashOut(TransactionReferenceNo_cashOut, ModifiedCreatedDate, AccountName, UserProfileImg, PhoneNo, TransactionNote, TransactionAmount, TransactionType, MembershipCardCode, OrderNo, ItemCartCode, FullAccountName, ID) {

    Ext.Viewport.remove(_FloatPanel_AyohaeWallet_Transaction_Detail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaeWallet_Transaction_Detail());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
    isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'Y';




    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionID').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + TransactionReferenceNo_cashOut + '</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionDate').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + ModifiedCreatedDate + '</div>');



    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">RM' + TransactionAmount + '</div>');



    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionType').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 20px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Cash Out</div>')
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionTypeIcon').setHtml('<img src="resources/icons/cashout.png" width="32px" height="32px">');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Bank</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNoLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Account No</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionAmountLbl').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Total Cash Out Amount</div>');
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNoteTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:normal;color:black;margin:0px 0px 0px 0px;vertical-align:middle">Bank Account Type</div>');


    Ext.getCmp('containerFloatPanel_AyohaeWallet_Transaction_Detail_CashOutBy').setHidden(false);
    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_CashOutBy').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + FullAccountName + '</div>');
    FloatPanel_AyohaeWallet_TransactionDetail_CashOutInfo(TransactionReferenceNo_cashOut);






    if (isFloatPanel_AyohaStore_CheckOutOpen == 'Y') {
        Ext.getCmp('LoadingFloatPanel_AyohaeWallet_Transaction_DetailID').setZIndex(400);
    }

}

function FloatPanel_AyohaeWallet_TransactionDetail_CashOutInfo(TransactionReferenceNo) {
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "TransactionReferenceNo": TransactionReferenceNo
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaeWalletTransactionCashOut/AyohaeWalletTransactionCashOutLoadByTransactionReferenceNo',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                    //var newData = JSON.parse(JSON.stringify(result.results.Email))
                    //console.log(result.results.Email);
                    //  //data.results[0];
                    // console.log(data.total);
                    if (data.total > 0) {

                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactionNote').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + data.results[0].BankAccountType + '</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNo').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + data.results[0].BankAccountNo + '</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountName').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + data.results[0].BankName + '</div>');

                        Ext.getCmp('containerFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutAmount').setHidden(false);
                        Ext.getCmp('containerFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesRule').setHidden(false);
                        Ext.getCmp('containerFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesAmount').setHidden(false);



                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + data.results[0].RequestCashOutAmount + '</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesRule').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + data.results[0].CashOutPercentageCharge + '%</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_RequestCashOutChargesAmount').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 16px;font-weight:bold;color:black;margin:0px 0px 0px 0px;vertical-align:middle">' + data.results[0].CashOutCharge + '</div>');

                        var BankName = data.results[0].BankName;


                        if (BankName == "AFFIN BANK") {
                            _value = 'resources/icons/BankIcon/AffinBank.jpg';

                        }
                        if (BankName == "AFFIN ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/AffinBankIslamic.jpg';

                        }
                        if (BankName == "ALLIANCE BANK") {
                            _value = 'resources/icons/BankIcon/AllianceBank.jpg';

                        }
                        if (BankName == "ALLIANCE ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/AllianceIslamikBank.jpg';

                        }
                        if (BankName == "AM BANK") {
                            _value = 'resources/icons/BankIcon/Ambank.jpg';

                        }
                        if (BankName == "AM ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/AmIslamikBank.jpg';

                        }
                        if (BankName == "BANK ISLAM") {
                            _value = 'resources/icons/BankIcon/BankIslam.jpg';

                        }
                        if (BankName == "BANK MUAMALAT") {
                            _value = 'resources/icons/BankIcon/BankMuamalat.jpg';

                        }
                        if (BankName == "CIMB BANK") {
                            _value = 'resources/icons/BankIcon/CimbBank.jpg';

                        }
                        if (BankName == "CIMB ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/CimbBankIslamik.jpg';

                        }
                        if (BankName == "HONG LEONG BANK") {
                            _value = 'resources/icons/BankIcon/HongLeongBank.jpg';

                        }
                        if (BankName == "HONG LEONG ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/HongLeongBankIslamik.jpg';

                        }
                        if (BankName == "MAYBANK") {
                            _value = 'resources/icons/BankIcon/Maybank.jpg';

                        }
                        if (BankName == "MAYBANK ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/MaybankIslamik.jpg';

                        }
                        if (BankName == "OCBC BANK") {
                            _value = 'resources/icons/BankIcon/Ocbcbank.jpg';

                        }
                        if (BankName == "OCBC AL AMIN BANK") {
                            _value = 'resources/icons/BankIcon/OcbcbankIslamik.jpg';

                        }
                        if (BankName == "PUBLIC BANK") {
                            _value = 'resources/icons/BankIcon/PublicBank.jpg';

                        }
                        if (BankName == "PUBLIC ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/PublicBankIslamik.jpg';

                        }
                        if (BankName == "RHB BANK") {
                            _value = 'resources/icons/BankIcon/RhbBank.jpg';

                        }
                        if (BankName == "RHB ISLAMIC BANK") {
                            _value = 'resources/icons/BankIcon/RhbBankIslamik.jpg';

                        }
                        if (BankName == "STANDARD CHARETED BANK") {
                            _value = 'resources/icons/BankIcon/StandardCharteredBank.jpg';

                        }
                        if (BankName == "STANDARD CHARTERED SAADIQ") {
                            _value = 'resources/icons/BankIcon/StandardCharteredBankIslamik.jpg';

                        }
                        if (BankName == "UOB BANK") {
                            _value = 'resources/icons/BankIcon/UOBBank.jpg';

                        }
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameImg').setHtml('<img src="' + _value + '" width="92px" height="32px">');
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameImg').setMargin('0px 0px 0px -40px');
                        Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TransactioneWalletAccountNameImg').setWidth(92);
                        Ext.Viewport.unmask();
                    }
                    if (data.total == 0) {

                        Ext.Viewport.unmask();

                    }





                }
                else {


                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(500);
}

function FloatPanel_AyohaeWallet_Transaction_DetailHide() {
    if (isFloatPanel_AyohaeWallet_Transaction_DetailOpen == 'Y') {
        _FloatPanel_AyohaeWallet_Transaction_Detail.hide(); isFloatPanel_AyohaeWallet_Transaction_DetailOpen = 'N';
        RemovePages("FloatPanel_AyohaeWallet_Transaction_DetailHide()");
        //  FloatPanel_RewardStoreHide();
    }

}



function FloatPanel_AyohaeWallet_Transaction_Detail_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore(Year) {

    Ext.getCmp('htmlFloatPanel_AyohaeWallet_Transaction_Detail_TitleHeaderTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:10px 0px 0px 0px">eWallet Transaction History </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-23px 0px 0px 0px">YEAR ' + Year + '</div>');

    FloatPanel_YearOnlyHide();
    //Ext.getStore('AyohaUserDashBoardNearestRedeemItemListStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
    //Ext.StoreMgr.get('AyohaUserDashBoardNearestRedeemItemListStore').load();
    // alert(Year)
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('FilterType', "Year");
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('eWalletAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('Year', Year);
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setExtraParam('TransactionType', "NA");
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/AyohaeWalletTransactionLoadByeWalletAccNoFilterType');
    _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeStore.getCount();
        // alert(count);

        Ext.Viewport.setMasked(false);
        //  VIAAdvertismentAutoSlide();

    });
    task.delay(500);
}



