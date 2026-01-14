


Ext.define('BuskartApp.view.LoyaltyCard.FloatLoyaltyCardPoint', {

});


var _FloatLoyaltyCardPoint;


var isFloatLoyaltyCardPointOpen = 'N';



var _FloatLoyaltyCardPoint_isFirstLoad = "N";

var globalFloatLoyaltyCardPointCarouselIndex=0;





function FloatLoyaltyCardPoint() {

    _FloatLoyaltyCardPoint =
     Ext.create('Ext.Panel', {

         xtype: 'container',
         //height: 465,
         height: '100%',
         width: '100%',
         id: 'LoadingFloatLoyaltyCardPointID',
         draggable: false,
         styleHtmlContent: true,
        // zIndex: 400,
         zIndex: 350,
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
             //direction: 'up',
             //easing: 'cubic-bezier(.7,0,.7,1)',
             duration: 250
         },
         // style: 'border-bottom:1px solid;background-color:#353839;',
         // style: 'border-bottom:1px solid;background-color:white;',
        // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
         style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',


         items: [




             {
                 xtype: 'container',
                 width: '100%',
                 height: '100%',
                 //  style: "background-color: transparent;",
               //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                 style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                 // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                 layout: {
                     type: 'fit',

                 },
                 items: [
                       {
                           xtype: 'container',
                           width: '100%',

                           layout: {
                               type: 'vbox',
                               pack: 'start',
                               align: 'center'

                           },
                           items: [

                               /////

                               {

                                   xtype: 'container',
                                   width: '100%',
                                   // width: 40,

                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatLoyaltyCardPointHeader',
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
                                                            id: 'btnFloatLoyaltyCardPointBack',
                                                            height: 30,
                                                            width: 35,
                                                            // iconCls: 'list',
                                                            html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                                            ui: 'plain',
                                                            handler: function () {

                                                                _FloatLoyaltyCardPoint.hide(Ext.fx.Animation({
                                                                    type: 'slideOut',
                                                                    direction: 'left',
                                                                    easing: 'cubic-bezier(.7,0,.7,1)',
                                                                    duration: 250

                                                                }));
                                                                isFloatLoyaltyCardPointOpen = 'N';
                                                                _FloatLoyaltyCardPoint_isFirstLoad = "N";
                                                                RemovePages("FloatLoyaltyCardPointHide()");
                                                            }
                                                        },

                                                         {
                                                             xtype: 'spacer',

                                                         },

                                                          //{
                                                          //    margin: '0 0 0 0',
                                                          //    html: '<font size=2 color=white><b>Preview</b></font>'
                                                          //},

                                                          {
                                                              xtype: 'container',
                                                              margin: '-11 -18 0 0',
                                                              //hidden: true,
                                                              //style: 'background-color: white;',
                                                              //style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 0px 0px 10px;box-shadow: 5px 10px 18px #888888;',
                                                              style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;',

                                                              height: 25,
                                                              width: 135,
                                                              // margin: '70 0 0 0',
                                                              id: 'containerFloatLoyaltyCardPointTitle',
                                                              layout: {

                                                                  type: 'vbox',
                                                                  pack: 'center',
                                                                  align: 'center'
                                                              },
                                                              items: [


                                                                  {
                                                                      //  margin: '2 0 0 0',
                                                                      margin: '3 0 0 -30',
                                                                      id: 'htmlFloatLoyaltyCardPointPointTitle',
                                                                      html: '<div style="width:130px;border-radius: 10px 0px 0px 10px;background-color: white;text-align:center;border: 1px solid grey;font-size: 11px;font-weight:bold;color:black;height:20px">Azrina Bt Rahim</div>',                                                                     
                                                                      //hidden: true,
                                                                  },
                                                                   {
                                                                       //  margin: '2 0 0 0',
                                                                       margin: '-3 0 0 0',
                                                                       id: 'htmlFloatLoyaltyCardPointisExpired',
                                                                       html: '<div class="blink_me" style="width:100px;border-radius: 10px 10px 10px 10px;background-color: white;text-align:center;border: 1px solid red;font-size: 9px;font-weight:bold;color:red;height:15px">Campaign Expired!</div>',
                                                                       hidden: true,
                                                                   },
                                                                  {
                                                                      xtype: 'container',
                                                                      hidden: true,
                                                                      //   margin: '0 0 0 5',
                                                                      // hidden: true,
                                                                      style: 'background-color: transparent;',

                                                                      height: 25,
                                                                      width: 70,
                                                                      // margin: '70 0 0 0',
                                                                      id: 'containerFloatLoyaltyCardPoint_PointIconImg',
                                                                      layout: {

                                                                          type: 'hbox',
                                                                          pack: 'left',
                                                                          align: 'left'
                                                                      },
                                                                      items: [
                                                                           {
                                                                               xtype: 'button',
                                                                               id: 'btnFloatLoyaltyCardPointNFCSign',
                                                                               hidden: true,
                                                                               margin: '7 0 0 8',
                                                                               height: 30,
                                                                               width: 35,
                                                                               // iconCls: 'list',
                                                                               html: '<div class="blink_me"><img src="resources/icons/nfc-sign.png" width="25" height="20" alt="Company Name"></div>',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   // Ayoha_eWallet();

                                                                               }
                                                                           },
                                                                           //{
                                                                           //    height: 30,
                                                                           //    margin: '10 0 0 0',
                                                                           //    width: 65,

                                                                           //    //html: '<button OnClick="Ayoha_eWallet()" class="buttonsHtmlBgTransparent"><div style="color:white;text-align: left;font-size:14px;width:100%;font-weight:bold" >RM00.00</div></button>',
                                                                           //},
                                                                           {
                                                                               xtype: 'button',
                                                                               id: 'btnFloatLoyaltyCardPointNFC',
                                                                               margin: '7 0 0 2',
                                                                               height: 30,
                                                                               width: 65,
                                                                               hidden:true,
                                                                               // iconCls: 'list',
                                                                               html: '<div class="blink_me" style="color:white;text-align: left;font-size:16px;width:100%;font-weight:bold;margin:-1px 0px 0px -8px" >NFC</div>',
                                                                               ui: 'plain',
                                                                               handler: function () {
                                                                                   //  Ayoha_eWallet();

                                                                               }
                                                                           },
                                                                           //{
                                                                           //    margin: '7 0 0 2',

                                                                           //}
                                                                      ]
                                                                  },

                                                              ]
                                                          }, {
                                                              xtype: 'container',
                                                              margin: '1 0 0 -5',
                                                              //hidden: true,
                                                              //style: 'background-color: white;',
                                                              style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                                                              height: 35,
                                                              width: 35,
                                                              // margin: '70 0 0 0',
                                                              id: 'containerFloatLoyaltyCardPointPicture',
                                                              layout: {

                                                                  type: 'hbox',
                                                                  pack: 'right',
                                                                  align: 'right'
                                                              },
                                                              items: [
                                                                  {
                                                                      xtype: 'button',
                                                                      height: 40,
                                                                      width: 40,
                                                                      margin: '0 0 0 3',
                                                                      id: 'btnFloatLoyaltyCardPoint_PointIcon',
                                                                      //badgeText: "2",
                                                                      html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/hawa.jpg"  style="width: 30px; height: 30px; border:1px solid grey; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                                                      ui: 'plain',
                                                                      handler: function () {



                                                                          _FloatLoyaltyCardPoint.hide(Ext.fx.Animation({
                                                                              type: 'slideOut',
                                                                              direction: 'right',
                                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                                              duration: 250

                                                                          }));
                                                                          isFloatLoyaltyCardPointOpen = 'N';
                                                                          _FloatLoyaltyCardPoint_isFirstLoad = "N";
                                                                          RemovePages("FloatLoyaltyCardPointHide()");
                                                                         
                                                                      }
                                                                  },



                                                              ]
                                                          },











                                          ]

                               },



                               ///////////

                               {
                                   xtype: 'container',
                                   style: "background-color: transparent",
                                   margin: '-25 0 0 0',
                                   width: '100%',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'

                                   },
                                   items: [
           {
               xtype: 'container',

               width: '100%',
               layout: {
                   type: 'vbox',
                   pack: 'center',
                   align: 'center'

               },
               items: [

                   {
                       margin: '5 0 0 0',
                       height: 120,
                       width: 120,
                       id: 'htmlFloatLoyaltyCardPoint_Logo',
                       html: '<img src="resources/icons/ccrlogo.png" width="130" height="130"/>',
                   },
                   {
                       xtype: 'container',

                       width: '100%',
                       layout: {
                           type: 'vbox',
                           pack: 'center',
                           align: 'center'

                       },
                       items: [

                            {
                                margin: '-7 0 0 0',
                                id: 'htmlFloatLoyaltyCardPoint_EnterpriseName',
                                html: '<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >Community Coffee Roastes Sdn Bhd</div>',
                            },
                             {
                                 xtype: 'container',
                                 style: "background-color: white;border-bottom:1px solid white;",
                                 height: 2,
                                 width: '85%',
                                 margin: '-1 0 0 0',
                                 //style: {

                                 //    background: 'white',

                                 //},
                                 //layout: {
                                 //    type: 'hbox',
                                 //    pack: 'center',
                                 //    align: 'center'

                                 //},
                             },
                       //     {
                       //         margin: '-8 0 0 0',

                       //         html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                       //     },
                       //      {
                       //          margin: '-7 0 0 0',

                       //          html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                       //      },
                       ]

                   }

               ]
           },







                                //{
                                //    xtype: 'container',
                                //    height: 1,
                                //    width: '90%',
                                //    style: {

                                //        background: 'white',

                                //    },
                                //    layout: {
                                //        type: 'hbox',
                                //        pack: 'center',
                                //        align: 'center'

                                //    },
                                //},



                                //////////////////////

                                {
                                    xtype: 'container',
                                    id: 'containerFloatLoyaltyCardPoint',
                                    width: '100%',
                                    // height: 35,

                                    style: "background-color:transparent;",
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [


                                         {
                                             margin: '-2 0 0 0',

                                             id: 'htmlFloatLoyaltyCardPoint_CampaignName',

                                             html: '<font size=2 color=white><b>Ramadhan 2021!</b></font>',
                                         },
                                         {
                                             margin: '-10 0 0 0',

                                             id: 'htmlFloatLoyaltyCardPoint_CampaignEndDate',

                                             html: '<font size=1 color=white>Campaign End Date:13/08/2022</font>',
                                         },
                                        {
                                            xtype: 'container',
                                            id: 'containerLoyaltyCardStampbottom',
                                            hidden: true,
                                            style: "background-color: transparent",
                                            //style: "background-color: #F35B57;",

                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'

                                            },


                                            items: [




                                            ]

                                        },
                                    ]
                                },








                                /////////////


























                                 //{
                                 //    zIndex: 40,
                                 //    margin: '-25 0 0 0',
                                 //    html: '<div class="btn--shockwave is-active"><div class="transboxFloatLoyaltyCardPointContainer"></div></div>',
                                 //    height: 100,
                                 //    width: '100%',
                                 //},
                                 {
                                     xtype: 'container',
                                     height: 50,
                                     width: '90%',
                                     margin: '5 0 0 0',
                                     //// style: 'background-image: url("resources/icons/pointbackdropwhite.png"); background-size: 100% 100%;border-bottom:1px none;border-radius: 20px 20px 20px 20px;',   
                                     //style: 'background-color: rgb(255 230 0);background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                                     //  style: 'background-color: #fac;background-image: linear-gradient(#6400ff75, hsl(287deg 100% 50% / 71%))',
                                     // style: 'background-color:white;border-radius: 10px 10px 10px 10px;',
                                     // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                     style: {

                                         background: 'transparent',

                                     },
                                     layout: {
                                         type: 'vbox',
                                         pack: 'center',
                                         align: 'center'

                                     },
                                     items: [


                                         {
                                             margin: '-16 0 0 0',
                                             //  html:'<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:50px;font-weight:bold;overflow:hidden;text-align:center;vertical-align:middle;word-break:normal;width:100%;height:100px">1000</div>',
                                             id:'htmlFloatLoyaltyCardPoint_SumPoint',
                                             html: '<font size="15" color="white"><b>0</b></font>'
                                         },
                                          {
                                              margin: '-16 0 0 0',
                                              id:'htmlFloatLoyaltyCardPoint_MerchantPointTxt',
                                              html: '<font size=2 color=white><b>Merchant Points(MP)</b></font>'
                                          },


                                     {
                                         xtype: 'container',
                                         width: '100%',
                                         hidden: true,
                                         margin: '-65 0 0 -7',
                                         style: {

                                             background: 'transparent',

                                         },
                                         layout: {
                                             type: 'hbox',
                                             pack: 'right',
                                             align: 'right'

                                         },
                                         items: [

                                             {
                                                 xtype: 'container',
                                                 width: '100%',
                                                 margin: '-2 0 0 0',
                                                 style: {

                                                     background: 'transparent',

                                                 },
                                                 layout: {
                                                     type: 'vbox',
                                                     pack: 'right',
                                                     align: 'right'

                                                 },
                                                 items: [

                                                   {
                                                       xtype: 'button',
                                                       id: 'btnRedeem_FloatLoyaltyCardPoint',
                                                       //  badgeText: '1',
                                                       margin: '-5 15 0 0',
                                                       height: 55,
                                                       width: 55,
                                                       html: '<div class="blink_me"><img src="resources/icons/gift-hearts-icon.png" width="45" height="45" alt="Company Name"></div>',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           // NotificationsPanelShow();
                                                           LoyaltyCardRedeemListShow();
                                                       }
                                                   },
                                                    {
                                                        //margin: '10 0 0 0',
                                                        margin: '-11 15 0 0',
                                                        id: 'htmlBtnFloatLoyaltyCardPointRedeem',
                                                        html: '<button OnClick="LoyaltyCardRedeemListShow()" class="buttonLoyaltyCardPointRedeem">Redeem</button>'
                                                    }

                                                 ]

                                             },


                                         ]
                                     }

                                     ]
                                 },
                                  {
                                      xtype: 'container',
                                      id:'container_pointspacer',
                                      width: '100%',
                                      height: 10,
                                  },
                                   ]

                               },



                               ////////////////////////////////////////////

                               {
                                   xtype: 'container',
                                   id: 'containerFloatLoyaltyCardPointMasterHeader',
                                   width: '100%',
                                   height: 25,

                                   // style: "background-color: white",
                                   // style: 'border-bottom:1px solid #D25959;background-color:transparent',
                                   style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                   // style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                   //style: "background-color: #F35B57;",

                                   layout: {
                                       type: 'hbox',
                                       pack: 'left',
                                       align: 'left'

                                   },
                                   items: [

                                       {
                                           width: 20,
                                           height: 20,
                                           margin: '0 0 0 8',
                                           id: 'htmlFloatLoyaltyCardPointMasterHeaderIcon',
                                           html: '<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">',
                                       },
                                       {
                                           //  width: 150,
                                           margin: '0 0 0 5',
                                           id: 'htmlFloatLoyaltyCardPointMasterHeaderTxt',
                                           html: '<font size=2 color=black>Redeem Prize</font>'
                                       },


                                   ]

                               },


                               /////////////////////////////


                               {
                                   xtype: 'container',
                                   // docked: 'top',
                                   // hidden:true,
                                   //  margin: '0 0 0 0',
                                   //  docked: 'bottom',
                                   style: 'background-color: transparent;',
                                   id: 'tabpanelFloatLoyaltyCardPoint',
                                   //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                   zIndex: 90,
                                   //height:200,
                                   // autoHeight:true,
                                   // height: '100%',
                                   // flex:1,
                                   //  maxHeight:'100%',
                                   //height:'63%',
                                   width: '100%',
                                   // margin: '70 0 0 0',

                                   layout: {

                                       type: 'vbox',
                                       pack: 'center',
                                       align: 'center'
                                   },
                                   items: [

                                       ///////////////////////////////////////////////
                                       {
                                           xtype: 'carousel',

                                           //hidden: true,
                                           id: 'carouselFloatLoyaltyCardPoint',
                                         //  style: 'background-color:#f7f7f7',
                                           style: 'background-color:white',
                                           width: '100%',
                                           height: '100%',
                                           indicator: false,
                                           listeners: {

                                               activeitemchange: function (container, newCard, oldCard, index) {
                                               

                                            


                                                   globalFloatLoyaltyCardPointCarouselIndex = container.getActiveIndex();


                                                 

                                                   if (_FloatLoyaltyCardPoint_isFirstLoad == "Y") {
                                                       console.log("activeitemchange");
                                                       console.log("isFloatLoyaltyCardPointOpen:" + isFloatLoyaltyCardPointOpen);
                                                       if (isFloatLoyaltyCardPointOpen == 'Y') {
                                                           FloatLoyaltyCardPoint_MoveCarousel(globalFloatLoyaltyCardPointCarouselIndex);
                                                           return;
                                                       }
                                                     
                                                       
                                                   }
                                                  

                                               

                                               },

                                           },


                                           margin: '0 0 0 0',
                                           items: [

                                                   //{
                                                   //    style: ' background-color: transparent',
                                                   //    margin:'0 0 0 0',
                                                   //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                                                   //},
                                                   {
                                                       xtype: 'container',
                                                       id: 'carouselFloatLoyaltyCardPoint_RedeemItem',
                                                       style: ' background-color: transparent',
                                                       height: '100%',
                                                       width: '100%',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'left'

                                                       },
                                                       items: [
                                                           {


                                                               xtype: 'list',
                                                               height: '100%',                                                              
                                                               //store: 'PointCampaignRedeemLoadByPointCampaignCodeStore',
                                                               store: _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore ,
                                                               id: 'List_FloatLoyaltyCardPoint_RedeemPrize',
                                                               style: 'background-color:rgba(255,255,255, 0.9);border-radius: 0px 0px 0px 0px;',
                                                               mode: 'SINGLE',
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
                                                               //itemTpl: '<div class="myContent">' +
                                                               //        '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ModifiedItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-45px 0px 0px 0px;"><button OnClick="FloatLoyaltyCardPointCheckRedeemEntitle({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
                                                               //        + '</div>',


                                                               itemTpl: '<div class="myContent">' +
                                                            '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:33.3%;text-align:left">Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ModifiedItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:33.3%;text-align:center">Entitled Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemPoint}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:33.3%;text-align:right">Item Cost:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">RM{ItemPrizePriceCost}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">{ModifiedButtonRedeemItem}</div></td></tr></table>' +
                                                           // '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-33px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonStatusLog" onClick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow({ID})">Status Log</button></div>' +
                                                            '</div>',
                                                               width: '100%',

                                                               listeners: {


                                                                   itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                                                   },

                                                                   itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                                                   }
                                                               }






                                                           },
                                                       ]

                                                   },


                                        ///////////////////////




                                        {
                                            xtype: 'container',
                                            id: 'carouselFloatLoyaltyCardPoint_RedeemPrizeHistory',
                                            style: ' background-color: transparent',
                                            height: '100%',
                                            width: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'left'

                                            },
                                            items: [
                                                {


                                                    xtype: 'list',
                                                    // height: '64%',
                                                    height: '100%',
                                                    // height: 200,
                                                    //   flex: 2,
                                                    //store: 'LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore',
                                                    store:_DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore,
                                                    id: 'List_FloatLoyaltyCardPoint_RedeemPrizeHistory',
                                                    style: 'background-color:rgba(255,255,255, 0.9);border-radius: 0px 0px 0px 0px;',
                                                    mode: 'SINGLE',
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

                                                    itemTpl: '<div class="myContent">' +
                                                                     '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Redeem Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ItemName}-({ModifiedItemCode})</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Redeem Item ID:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{ID}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Redeem Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;"><b>{RedeemPoint}</b></div><div style="width:100%;text-align:left;margin:0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</div></th></tr></thead></table>'
                                                                     +'<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-30px 0px 0px 0px;width:100%;text-align:center;color:black;"><button class="buttonStatusLog" onClick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow({ID})">View Redeem Status Log</button></div>' 
                                                                     + '</div>',

                                                    //itemTpl: '<div class="myContent">' +
                                                    //         '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ModifiedItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br>{ModifiedRedeemHistoryStatus}</td></tr></table>' +
                                                    //         '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-33px 0px 0px 0px;width:100%;text-align:right;color:black;"><button class="buttonStatusLog" onClick="FloatLoyaltyCardPoint_RedeemPrizeHistoryLogShow({ID})">Status Log</button></div>' +
                                                    //         '</div>',

                                                    width: '100%',
                                                    // height: 600,
                                                    // height: '100%',

                                                    listeners: {


                                                        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                                        },

                                                        itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                                        }
                                                    }






                                                },
                                            ]

                                        },



                                            ///////////////////////////////////////////////////////
                                            {
                                                xtype: 'container',
                                                id: 'carouselFloatLoyaltyCardPoint_AyohaPointHistory',
                                                style: ' background-color: transparent',
                                                height: '100%',
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'start',
                                                    align: 'left'

                                                },
                                                items: [
                                                    {


                                                        xtype: 'list',
                                                        // height: '64%',
                                                        height: '100%',
                                                        // height: 200,
                                                        //   flex: 2,
                                                        //store: 'LoyaltyPointLoadByPointCampaignCodeUserStore',
                                                        store:_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore,
                                                        id: 'List_FloatLoyaltyCardPoint_PointHistory',
                                                        style: 'background-color:rgba(255,255,255, 0.9);border-radius: 0px 0px 0px 0px;',
                                                        mode: 'SINGLE',
                                                        disableSelection: true,
                                                        grouped: true,
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

                                                                         // '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><thead><tr><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal;width:80%;background-color:transparent;"><div style="font-family:Arial, sans-serif;font-size:25px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;">RM{Amount}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-27px 0px 0px 0px;">Receipt/Bill No:{ReceiptBillID}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedBy}</th><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal;width:20%;background-color:transparent;"><div style="font-family:Arial, sans-serif;font-size:35px;font-weight:bold;word-break:normal;margin:-6px 0px 0px 0px;text-align:center">{ModifiedTypeCRDB}{CountsPoint}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-30px 0px 0px 0px;text-align:center">Points {PointType}</div></th></tr></thead></table>' +
                                                                       '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><thead><tr><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%;background-color:transparent;">{ModifiedAmount}<br>{ModifiedReceiptBillID}<br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedBy}</th><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%;background-color:transparent;">{ModifiedTypeCRDB}</th></tr></thead></table>' +

                                                                   //  '<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:0px 0px 0px 0px;"><thead><tr><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:top;word-break:normal;width:80%;background-color:transparent;">{ModifiedAmount}<br>{ModifiedReceiptBillID}<br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedByDate_DateOnly} {PointedByDate_TimeOnly}</div><br><div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:-23px 0px 0px 0px;">{PointedBy}</th><th style="border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:center;vertical-align:middle;word-break:normal;width:20%;background-color:transparent;">{ModifiedTypeCRDBExtent}</th></tr></thead></table>' +

                                                      '</div>',

                                                        width: '100%',
                                                        // height: 600,
                                                        // height: '100%',

                                                        listeners: {


                                                            itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                                            },

                                                            itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                                            }
                                                        }






                                                    },
                                                ]

                                            },

                                            ////////////////////////////////////////////////////





                                            {
                                                xtype: 'container',
                                                id: 'carouselFloatLoyaltyCardPoint_PointQRCode',
                                                style: ' background-color: white',
                                                height: '100%',
                                                width: '100%',
                                                layout: {
                                                    type: 'vbox',
                                                    pack: 'center',
                                                    align: 'center'

                                                },
                                                items: [
                                                    

                                                    //{
                                                    //    xtype: 'container',
                                                    //    id: 'carouselFloatLoyaltyCardPoint_PointQRCodeInner',
                                                    //    style: ' background-color: transparent',
                                                    //    height: '100%',
                                                    //    width: '100%',
                                                    //    layout: {
                                                    //        type: 'vbox',
                                                    //        pack: 'center',
                                                    //        align: 'center'

                                                    //    },
                                                    //    items:[


                                                    //    ]

                                                    //}
                                                 {
                                                     xtype: 'container',
                                                     id: 'carouselFloatLoyaltyCardPoint_PointQRCodeInnerTop',
                                                     style: ' background-color: transparent',
                                                     docked: 'top',
                                                     height: 50,
                                                     width: '100%',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'center'

                                                     },
                                                     items: [

                                                        {
                                                            margin: "0 0 0 0",
                                                            id:'htmlFloatLoyaltyCardPoint_AccountName',
                                                            html: '<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTop"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >Tarmizi Bin Rahim</div>',

                                                        },
                                                         {
                                                             margin: "-2 0 0 0",
                                                             id: 'htmlFloatLoyaltyCardPoint_MembershipNo',
                                                            html: '<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTopMembershipNi"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >0121112222-56545218</div>',

                                                         }
                                                     ]
                                                 },
                                                     {

                                                         margin: '0 0 0 20',
                                                         //  margin: '-100 0 0 20',
                                                         width: '100%',
                                                        // height: 360,
                                                         flex:1,
                                                         // height: '100%',

                                                         id: 'htmlFloatLoyaltyCardPoint_PointQRCode',
                                                         html: '<div id="myPointQRCodeImg"  style="width: 100%; height: 100%; border:2px none red;" />',
                                                     },

                                                      {
                                                              xtype: 'container',
                                                              id: 'carouselFloatLoyaltyCardPoint_PointQRCodeInnerbottem',
                                                              style: ' background-color: transparent',
                                                          docked:'bottom',
                                                              height: 40,
                                                              width: '100%',
                                                              layout: {
                                                                  type: 'hbox',
                                                                  pack: 'center',
                                                                  align: 'center'

                                                              },
                                                              items:[

                                                                   {
                                                                       id: 'htmlFloatLoyaltyCardPoint_PointQRCodeInnerbottemTxt',
                                                                       html: '<div  id="divFloatLoyaltyCardPoint_PointQRCodeInnerBottom"  style="width: 100%;  border:2px none red;text-align:center;font-size:11px;color:purple;font-weight:bold;" >Show this QR Code to Merchandiser and Earn Points!!!</div>',
                                                                   }
                                                              ]
                                                      },

                                                ]

                                            },









                                           ]
                                       },




















                                       ///////////////////////////////////////////

                                       ////{
                                       ////    xtype: 'list',
                                       ////    // height: '64%',
                                       ////    height: '100%',
                                       ////    // height: 200,
                                       ////    //   flex: 2,
                                       ////    store: 'AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore',
                                       ////    id: 'FloatLoyaltyCardPointID',
                                       ////    mode: 'SINGLE',
                                       ////   disableSelection: true,
                                       ////    // disableSelection: true,


                                       ////    itemTpl: '<div class="myContent">' +

                                       ////          '<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="{ImgPath}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:transparent;border-color:transparent;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="FloatPanel_RedeemPrizeShow({ID})" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
                                       ////        //'<table style="border-collapse:collapse;border-spacing:0;width:100%" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:middle;word-break:normal;width:30%" rowspan="2"><img src="http://42.1.63.57/crsuite/resources/icons/RedeemItem/{ItemImg}" style="width: 100px; height: 100px; border:1px none white;max-width:100px;" /></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:70%" colspan="2"><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:5px 0px 0px 0px;">Item Name:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemName}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Item Code:</div><br><div style="font-family:Arial, sans-serif;font-size:17px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;">{ItemCode}</div><br><div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-15px 0px 0px 0px;">Entitled Point:</div><br><div style="font-family:Arial, sans-serif;font-size:19px;font-weight:normal;word-break:normal;margin:-13px 0px 0px 0px;"><b>{ItemPoint}</b></div><div style="width:100%;text-align:right;margin:-35px 0px 0px 0px;"><button OnClick="LoyaltyCardRedeemItem()" class="buttonLoyaltyCardPointRedeemList">Redeem</button></div></th></tr></thead></table>'
                                       ////     + '</div>',

                                       ////    width: '100%',
                                       ////    // height: 600,
                                       ////    // height: '100%',

                                       ////    listeners: {


                                       ////        itemdoubletap: function (dataview, index, target, record, e, eOpts) {


                                       ////        },

                                       ////        itemsingletap: function (dataview, index, target, record, e, eOpts) {

                                       ////        }
                                       ////    }





                                       ////},






                                   ]
                               },



                               ///////////////////////////////////


                               {
                                   xtype: 'tabpanel',
                                   hidden: true,
                                   //  hidden:true,
                                   id: 'tabpanelFloatLoyaltyCardPointori',
                                   // style: 'border-top:2px solid #ECF0F1;background: white;',
                                   // style: 'background-color: black;',
                                   // margin: '-20 0 0 -26',
                                   // margin: '25 0 0 0',

                                   //width: 200,
                                   width: '100%',
                                   height: 360,
                                   //height: 120,
                                   //height: 50,
                                   //  zIndex: 200,
                                   //  docked: 'bottom',
                                   tabBarPosition: 'top',
                                   ui: 'plain',
                                   // docked: 'bottom',

                                   initialize: function (c) {
                                       this.getTabBar().hide();
                                   },



                                   items: [



               {
                   xtype: 'container',
                   id: 'containerFloatLoyaltyCardPointMaster',
                   width: '100%',
                   height: 360,
                   //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                   style: "background-color: white;",
                   //style: "background-color: #F35B57;",
                   title: 'FloatLoyaltyCardPointMaster',
                   layout: {
                       type: 'vbox',
                       pack: 'center',
                       align: 'center'

                   },
                   listeners: {
                       initialize: function (c) {

                           this.element.on({
                               swipe: function (e, node, options) {
                                   if (e.direction == "left") {
                                       //  alert("Hey! I swipe left");
                                       Ext.getCmp('tabpanelFloatLoyaltyCardPoint').setActiveItem(1);
                                   } else {
                                       //  alert("Hey! I swipe right");

                                   }
                               }
                           });
                       }
                   },


                   items: [










                   ]

               },


                                        {
                                            xtype: 'container',
                                            id: 'containerFloatLoyaltyCardPointMasterQRCodePoint',
                                            width: '100%',
                                            height: 360,
                                            //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                            style: "background-color: white;",
                                            //style: "background-color: #F35B57;",
                                            title: 'FloatLoyaltyCardPointMasterQRCodePoint',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'

                                            },
                                            listeners: {
                                                initialize: function (c) {

                                                    this.element.on({
                                                        swipe: function (e, node, options) {
                                                            if (e.direction == "left") {
                                                                //  alert("Hey! I swipe left");

                                                            } else {
                                                                //  alert("Hey! I swipe right");
                                                                Ext.getCmp('tabpanelFloatLoyaltyCardPoint').setActiveItem(0);
                                                            }
                                                        }
                                                    });
                                                }
                                            },

                                            items: [


                                                {
                                                    id: 'htmlFloatLoyaltyCardPointMasterQRCodePoint',
                                                    margin: '18 0 0 20',
                                                    width: '100%',
                                                    height: 360,
                                                    html: '<img src="' + GetQRCodeImg() + '" style="width: 100px; height: 100px; border:1px solid white;" />',
                                                }



                                            ]

                                        },



                                   ]

                                   //}
                               },

                               ////////////////////////////////////////////
                               {

                                   xtype: 'container',
                                   width: '100%',
                                   // width: 40,
                                   // docked: 'bottom',
                                   height: 55,
                                   //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                   //hidden: true,

                                   id: 'containerFloatLoyaltyCardPoint_MenuBottom',
                                   style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                   //style: {
                                   //    // background: '#D25959',
                                   //    background: 'transparent',
                                   //    // border: '2px'
                                   //},
                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                   // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                   layout: {
                                       type: 'hbox',
                                       pack: 'start',
                                       align: 'center',
                                   },




                                   // hidden:true,
                                   items:
                                          [
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  style: "background-color: transparent",
                                                  height: 55,
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  //scrollable: {
                                                  //    direction: 'horizontal',
                                                  //    directionLock: false
                                                  //},
                                                  items: [


                                                      {
                                                          xtype: 'container',
                                                          //width: 600,
                                                          //  width: 400,
                                                          width: '100%',
                                                          style: "background-color: transparent",
                                                          height: 55,
                                                          layout: {
                                                              type: 'hbox',
                                                              pack: 'center',
                                                              align: 'center',
                                                          },
                                                          items: [










                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemPrize',

                                                            //width: '33%',
                                                            //height: 30,
                                                            margin: '0 0 0 0',
                                                            flex: 1,
                                                            style: "background-color: transparent",
                                                            //style: "background-color: #F35B57;",

                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [

                                                                 {
                                                                     xtype: 'button',
                                                                     id: 'btn_FloatLoyaltyCardPoint_MenuBottom_RedeemPrize',
                                                                     //  badgeText: '1',
                                                                     margin: '0 0 0 0',

                                                                     height: 36,
                                                                     width: 36,
                                                                     html: '<img src="resources/icons/AyohaStorePurple.png" width="26" height="26" alt="Company Name">',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         // FloatPanel_LoyaltyCard_PointHistoryShow();
                                                                         FloatLoyaltyCardPoint_MoveCarousel(0);
                                                                     }
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt',
                                                                     width: '100%',
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'start',
                                                                         align: 'center'

                                                                     },
                                                                     items: [
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01',
                                                                             html: '<font size=1 color=purple><u><b>Redeem</b></u></font>'
                                                                         },
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02',
                                                                             html: '<font size=1 color=purple><u><b>Prize</b></u></font>'
                                                                         },
                                                                     ]

                                                                 },


                                                            ]
                                                        },

                                                        {
                                                            xtype: 'container',
                                                            id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemHistory',

                                                            //width: '33%',
                                                            //height: 30,
                                                            margin: '0 0 0 0',
                                                            flex: 1,
                                                            style: "background-color: transparent",
                                                            //style: "background-color: #F35B57;",

                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'

                                                            },
                                                            items: [

                                                                 {
                                                                     xtype: 'button',
                                                                     id: 'btn_FloatLoyaltyCardPoint_MenuBottom_RedeemHistory',
                                                                     //badgeText: '2',
                                                                     margin: '0 0 0 0',

                                                                     height: 36,
                                                                     width: 36,
                                                                     html: '<img src="resources/icons/myredeemption.png" width="26" height="26" alt="Company Name">',
                                                                     ui: 'plain',
                                                                     handler: function () {
                                                                         //  LoyaltyCardRedeemListShow();
                                                                         FloatLoyaltyCardPoint_MoveCarousel(1);
                                                                     }
                                                                 },
                                                                 {
                                                                     xtype: 'container',
                                                                     id: 'containerFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt',
                                                                     width: '100%',
                                                                     layout: {
                                                                         type: 'vbox',
                                                                         pack: 'start',
                                                                         align: 'center'

                                                                     },
                                                                     items: [
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01',
                                                                             html: '<font size=1 color=grey>My</font>'
                                                                         },
                                                                         {
                                                                             margin: '-12 0 0 0',
                                                                             id: 'htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02',
                                                                             html: '<font size=1 color=grey>Redemption</font>'
                                                                         },
                                                                     ]

                                                                 },


                                                            ]
                                                        },


                                                            {
                                                                xtype: 'container',
                                                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistory',
                                                                //width: '33%',
                                                                //height: 30,
                                                                margin: '0 0 0 0',
                                                                flex: 1,
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",

                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btn_FloatLoyaltyCardPoint_MenuBottom_AyohaPointHistory',
                                                                         //  badgeText: '1',
                                                                         margin: '0 0 0 0',

                                                                         height: 36,
                                                                         width: 36,
                                                                         html: '<img src="resources/icons/HistoryPurple01.png" width="26" height="26" alt="Company Name">',
                                                                         ui: 'plain',
                                                                         handler: function () {
                                                                             // FloatLoyaltyCardStampShow();
                                                                             FloatLoyaltyCardPoint_MoveCarousel(2);
                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01',
                                                                                 html: '<font size=1 color=grey>Points</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02',
                                                                                 html: '<font size=1 color=grey>History</font>'
                                                                             },
                                                                         ]

                                                                     },


                                                                ]
                                                            },







                                                            {
                                                                xtype: 'container',
                                                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_PointQRCode',
                                                                //width: '33%',
                                                                //height: 30,
                                                                margin: '0 0 0 0',
                                                                flex: 1,
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",

                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btn_FloatLoyaltyCardPoint_MenuBottom_PointQRCode',
                                                                         //  badgeText: '1',
                                                                         margin: '0 0 0 0',

                                                                         height: 36,
                                                                         width: 36,
                                                                         html: '<img src="resources/icons/qrcodetwo.png" width="26" height="26" alt="Company Name">',
                                                                         ui: 'plain',
                                                                         handler: function () {
                                                                             FloatLoyaltyCardPoint_MoveCarousel(3);
                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01',
                                                                                 html: '<font size=1 color=grey>Point</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02',
                                                                                 html: '<font size=1 color=grey>QR Code</font>'
                                                                             },
                                                                         ]

                                                                     },


                                                                ]
                                                            },



                                                            {
                                                                xtype: 'container',
                                                                id: 'containerFloatLoyaltyCardPoint_MenuBottom_CashBack',
                                                                hidden:true,
                                                                //width: '33%',
                                                                //height: 30,
                                                                margin: '0 0 0 0',
                                                                flex: 1,
                                                                style: "background-color: transparent",
                                                                //style: "background-color: #F35B57;",

                                                                layout: {
                                                                    type: 'vbox',
                                                                    pack: 'start',
                                                                    align: 'center'

                                                                },
                                                                items: [

                                                                     {
                                                                         xtype: 'button',
                                                                         id: 'btn_FloatLoyaltyCardPoint_MenuBottom_CashBack',
                                                                         //  badgeText: '1',
                                                                         margin: '0 0 0 0',

                                                                         height: 36,
                                                                         width: 36,
                                                                         html: '<img src="resources/icons/cashback01.png" width="26" height="26" alt="Company Name">',
                                                                         ui: 'plain',
                                                                         handler: function () {

                                                                         }
                                                                     },
                                                                     {
                                                                         xtype: 'container',
                                                                         id: 'containerFloatLoyaltyCardPoint_MenuBottom_CashBackTxt',
                                                                         width: '100%',
                                                                         layout: {
                                                                             type: 'vbox',
                                                                             pack: 'start',
                                                                             align: 'center'

                                                                         },
                                                                         items: [
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01',
                                                                                 html: '<font size=1 color=grey>Ayoha Point</font>'
                                                                             },
                                                                             {
                                                                                 margin: '-12 0 0 0',
                                                                                 id: 'htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02',
                                                                                 html: '<font size=1 color=grey>Cash Back</font>'
                                                                             },
                                                                         ]

                                                                     },


                                                                ]
                                                            },







                                                          ]

                                                      },
















                                                  ]
                                              },





                                                         //{
                                                         //    margin: '0 0 0 0',
                                                         //    html: '<font size=3 color=white><b>TARMIZI RAHIM</b></font>'
                                                         //},










                                          ]

                               },










                           ]

                       },








                              /////





                              //////



                              ////////////////////////









                 ]

             },




         ]















     });
    return _FloatLoyaltyCardPoint;



}


var globalEnterpriseAccNo_FloatLoyaltyCardPoint;
var globalPointCampaignCode_FloatLoyaltyCardPoint;
var globalPointCampaignIsExpired = "NotExpired";
var globalPointCampaingName;
var globalPointCampaignEnterpriseName_FloatLoyaltyCardPoint;

function FloatLoyaltyCardPointShow(CampaingName, PointCampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, PointisRequiredStartEndDate, PointisCampaignExpired) {
    globalPointCampaignIsExpired = "NotExpired";
   
    Ext.Viewport.remove(_FloatLoyaltyCardPoint);
    this.overlay = Ext.Viewport.add(FloatLoyaltyCardPoint());
    this.overlay.show();
    AddRoutePages("FloatLoyaltyCardPointHide()");
    isFloatLoyaltyCardPointOpen = 'Y';
 
    FloatLoyaltyCardPointAdjustHeight();
    //FloatPanel_FloatingAdvertisementShow();
    //Ext.getCmp('htmlFloatLoyaltyCardPoint_Logo').setHtml('<img src="' + GetEnterpriseLogoPath() + '" width="130" height="130"/>');

    Ext.getCmp('htmlFloatLoyaltyCardPoint_Logo').setHtml('<img src="' + EnterpriseLogo + '" style = "width: 120px; height: 120px; border:1px none grey; border-radius: 50%; max-width:120px;max-height:120px;" />');
    globalPointCampaingName = CampaingName;
    globalPointCampaignEnterpriseName_FloatLoyaltyCardPoint=EnterpriseName;
    Ext.getCmp('htmlFloatLoyaltyCardPoint_EnterpriseName').setHtml('<div style="border-bottom:1px none #ECF0F1;background: transparent;color:white; text-align:center;font-size: 16px;font-weight:bold;width:100%;" >' + EnterpriseName + '</div>');

    if (PointisRequiredStartEndDate == "YES") {
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHidden(false);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHtml('<font size=1 color=white>Campaign End Date:' + EndDate + '</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setMargin("-2 0 0 0");
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setHtml('<font size=2 color=white><b>' + CampaingName + '</b></font>');
        Ext.getCmp('container_pointspacer').setHeight(10);
        if (PointisCampaignExpired == "Expired") {
            Ext.getCmp('htmlFloatLoyaltyCardPointisExpired').setHidden(false);
            Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHtml('<font class="blink_me" size=1 color=white>Campaign End Date:' + EndDate + '</font>');
            globalPointCampaignIsExpired = "Expired";
        }
        


        
        


    }
    if (PointisRequiredStartEndDate == "NO") {
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHidden(true);
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setMargin("2 0 0 0");
        Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignName').setHtml('<font size=2 color=white><b>' + CampaingName + '</b></font>');
        Ext.getCmp('container_pointspacer').setHeight(15);

      //  Ext.getCmp('htmlFloatLoyaltyCardPoint_CampaignEndDate').setHtml('<font size=1 color=white>Campaign End Date:' + EndDate + '</font>');

    }
    
   
    
    globalEnterpriseAccNo_FloatLoyaltyCardPoint = EnterpriseAccNo;
    globalPointCampaignCode_FloatLoyaltyCardPoint = PointCampaignCode;


    

   // Ext.getCmp('btnFloatLoyaltyCardPoint_PointIcon').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="' + GetAyohaUserPicProfile() + '"  style="width: 30px; height: 30px; border:1px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>');
    Ext.getCmp('btnFloatLoyaltyCardPoint_PointIcon').setHtml('<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:30px;height:30px" ><img src="resources/icons/WhitePointStamp.png"  style="width: 30px; height: 30px; border:1px none white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>');





   // Ext.getCmp('htmlFloatLoyaltyCardPointPointTitle').setHtml('<div style="width:130px;border-radius: 10px 0px 0px 10px;background-color: transparent;text-align:center;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:20px">' + GetAyohaUserAccountNames() + '</div>');
    ////Ext.getCmp('htmlFloatLoyaltyCardPointPointTitle').setHtml('<div style="width:130px;border-radius: 0px 0px 0px 0px;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:20px">' + GetAyohaUserAccountNames() + '</div>');
    Ext.getCmp('htmlFloatLoyaltyCardPointPointTitle').setHtml('<div style="width:130px;border-radius: 0px 0px 0px 0px;background-color: transparent;text-align:right;border: 1px none white;font-size: 11px;font-weight:bold;color:white;height:20px">Loyalty Point Card</div>');




    Load_FloatLoyaltyCardPoint_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode, EnterpriseAccNo);

    //  Ext.getCmp('htmlFloatLoyaltyCardPointPointsCollected').setHtml('<div style="color:white;text-align: center;font-size:58px;width:100%;margin:50px 0px 0px 0px;"><b>' + localStorage.getItem("AyohaPoint") + '</b></div><br><div style="color:white;text-align: center;font-size:11px;width:100%;margin:-38px 0px 0px 0px"><b>Ayoha Point</b></div><br>');



    //  Ext.getCmp('containerRedeemListItems').setHeight(adjustHeight());
    // AyohaRedeemPrizeLoadByAyohaUserGroupCodeStore();
    _FloatLoyaltyCardPoint_isFirstLoad = 'Y';
    
   
}


function Load_FloatLoyaltyCardPoint_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo) {

   





    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setExtraParam('ModuleCode', 3);
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.getProxy().setUrl(GetAPIurl() + '/AdvertisementLinkModule/AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCode');
    
    _DataStore_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                var record = records[0]; // Access only the first record              
                localStorage.setItem('FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow_AdvertismentCode', record.get('AdvertisementCode'));
                FloatPanel_Advertisement_FloatAdvertisementShow();
               LoadingPanelHide();
               
               
            } else {
                LoadingPanelHide();
                console.error('Failed to load store data or no record found.');
               
            }
        }
    });







}


function FloatLoyaltyCardPointHide() {


    if (isFloatLoyaltyCardPointOpen == "Y") {
        _FloatLoyaltyCardPoint.hide();

        isFloatLoyaltyCardPointOpen = 'N';
        _FloatLoyaltyCardPoint_isFirstLoad = "N";
        RemovePages("FloatLoyaltyCardPointHide()");
    }
  
}




function FloatLoyaltyCardPointAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);
    var headerHeight = parseInt(251);
    //alert(y);
    //alert(x);
    // var headerHeight = parseInt(218);
    var adjustedHeight = x - headerHeight;
    //var newHeight = adjustedHeight - 99;
    var newHeight = adjustedHeight - 83;

    //alert(newHeight)

    Ext.getCmp('tabpanelFloatLoyaltyCardPoint').setHeight(newHeight);
    Ext.getCmp('containerFloatLoyaltyCardPointMaster').setHeight(newHeight);






}






function FloatLoyaltyCardPointCheckRedeemEntitle(val) {

    if(is_prompt_setMessage_NotYetMembershipMessage()){
        return
     }
    if (globalPointCampaignIsExpired == "Expired") {
        Swal.fire({
            title: "",
            text:globalPointCampaingName + " campaign has been Expired.Unable to redeem!",
            showConfirmButton: false,
            imageUrl: "resources/icons/campaignExpired.png",
            imageWidth: 300,
            imageHeight: 250,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        })
        return;
    }



    globalItemIDFloatLoyaltyCardPoint_RedeemPrize = val;
    
    var ItemPoint = _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.findRecord('ID', val, 0, false, false, true);
    globalItemPointFloatLoyaltyCardPoint_RedeemPrize = ItemPoint.get('ItemPoint'); 

    if (globalFloatLoyaltyCardPoint_SumPoint >= globalItemPointFloatLoyaltyCardPoint_RedeemPrize) {
        FloatLoyaltyCardPoint_RedeemPrizeShow(val);

    } else
    {
        Swal.fire({
            title: 'Insufficient Point',
            text: "Unable to redeem prize!",
            showConfirmButton: false,
            imageUrl: "resources/icons/UnableRedeem01.png",
            imageWidth: 300,
            imageHeight: 200,
            //   imageAlt: 'Cloud-Reward Pro v 1.0',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        })

    }


    

}





function FloatLoyaltyCardPoint_MoveCarousel(Idx) {
   
    console.log(Idx)
    if (Idx == 0) {
        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(0);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/AyohaStorePurple.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>Redeem Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=purple><b><u>Redeem</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=purple><b><u>Prize</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey>Points</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
    }
    if (Idx == 1) {
        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(1);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/myredeemption.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>My Redemptions</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=purple><b><u>My</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=purple><b><u>Redemption</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey> Points</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey>History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey> Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code</font>');


    }
    if (Idx == 2) {

        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(2);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/HistoryPurple01.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>Points History</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=purple><b><u>Points</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=purple><b><u>History</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=grey>QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code Back</font>');
    }
    if (Idx == 3) {

        Ext.getCmp('carouselFloatLoyaltyCardPoint').setActiveItem(3);
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderIcon').setHtml('<img src="resources/icons/qrcodetwo.png" width="20" height="20" alt="Company Name">');
        Ext.getCmp('htmlFloatLoyaltyCardPointMasterHeaderTxt').setHtml('<font size=1 color=black>Points QR Code</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt01').setHtml('<font size=1 color=purple><b><u>Points</u></b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_PointQRCodeTxt02').setHtml('<font size=1 color=purple><b><u>QR Code</u></b></font>');
        //////////////////////////////////////////
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt01').setHtml('<font size=1 color=grey>Redeem</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemPrizeTxt02').setHtml('<font size=1 color=grey>Prize</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt01').setHtml('<font size=1 color=grey>My</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_RedeemHistoryTxt02').setHtml('<font size=1 color=grey>Redemption</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt01').setHtml('<font size=1 color=grey>Point</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_CashBackTxt02').setHtml('<font size=1 color=grey>QR Code Back</font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt01').setHtml('<font size=1 color=grey><b>Points</b></font>');
        Ext.getCmp('htmlFloatLoyaltyCardPoint_MenuBottom_AyohaPointHistoryTxt02').setHtml('<font size=1 color=grey><b>History</b></font>');


        if(is_prompt_setMessage_NotYetMembershipMessage()){
            return
           }

        if (globalPointCampaignIsExpired == "NotExpired") {
            var val = GetCurrAyohaUserAccountNo() + "|" + _FloatLoyaltyCardPoint_PointCampaignCode;
            //var val = GetCurrAyohaUserAccountNo()+ "|Point";            
            FloatLoyaltyCardPoint_CreateQrCode(val);
        }
        if (globalPointCampaignIsExpired == "Expired") {
            Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCode').setMargin('0 0 0 3');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCode').setHtml('<img src="resources/icons/campaignExpired.png" style="width: 100%; height: 100%; border:1px solid white;" />');
            var val = GetCurrAyohaUserAccountNo().split('-');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_AccountName').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTop"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + GetAyohaUserAccountNames() + '</div>');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_MembershipNo').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTopMembershipNi"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + val[1] + '-' + val[2] + '</div>');
            Ext.getCmp('htmlFloatLoyaltyCardPoint_PointQRCodeInnerbottemTxt').setHtml('<div  id="divFloatLoyaltyCardPoint_PointQRCodeInnerBottom"  style="width: 100%;  border:2px none red;text-align:center;font-size:11px;color:grey;font-weight:bold;" >Campaign Expired,unable to generate Point QR Code</div>');
            
           
        }
       
        //id: 'htmlFloatLoyaltyCardPoint_PointQRCode',
        //html: '<div id="myPointQRCodeImg"  style="width: 100%; height: 100%; border:2px none red;" />',
    }






}
//var _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore;
var _FloatLoyaltyCardPoint_PointCampaignCode;
function Load_FloatLoyaltyCardPoint_PointCampaignRedeemLoadByPointCampaignCodeStore(PointCampaignCode, EnterpriseAccNo) {





    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.getProxy().setExtraParam('PointCampaignCode', PointCampaignCode);
    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.getProxy().setUrl(GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemLoadByPointCampaignCode');
    _DataStore_PointCampaignRedeemLoadByPointCampaignCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('record found.'+ records.length);
                _FloatLoyaltyCardPoint_PointCampaignCode = PointCampaignCode;
                Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(PointCampaignCode,EnterpriseAccNo);
            } else {
                console.error('Failed to load store data or no record found.');
                Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(PointCampaignCode,EnterpriseAccNo);
                
            }
        }
    });







}
//var _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore;
function Load_FloatLoyaltyCardPoint_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore(PointCampaignCode,EnterpriseAccNo) {

    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.getProxy().setExtraParam('RedeemHistoryStatusBy', GetCurrAyohaUserAccountNo());
    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.getProxy().setUrl(GetAPIurl() + '/LoyaltyPointRedeemPrizeHistory/LoyaltyPointRedeemPrizeHistoryLoadRedeemHistory');
    _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              //  console.log('record found.'+ records.length);
                Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo);
                        } else {
               // console.error('Failed to load store data or no record found.');
                Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo);
                
            }
        }
    });






    
    // Ext.getStore('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').getProxy().setExtraParams({
    //     RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo(),
    //     EnterpriseAccNo: EnterpriseAccNo
    // });
    // Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').load();
    // var task = Ext.create('Ext.util.DelayedTask', function () {
    //     Ext.getStore('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').getProxy().setExtraParams({
    //         RedeemHistoryStatusBy: GetCurrAyohaUserAccountNo(),
    //         EnterpriseAccNo: EnterpriseAccNo
    //     });
    //     _DataStore_LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore = Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').load();

    //     Ext.StoreMgr.get('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore').load();
    //     var myStore = Ext.getStore('LoyaltyPointRedeemPrizeHistoryLoadRedeemHistoryStore');
    //     var count = myStore.getCount();
        

    //     //if (count >= 1) {
    //     //    var modelRecord = myStore.getAt(0);
    //     //    var SumPoint = modelRecord.get('SumPoint');
    //     //    Ext.getCmp('htmlFloatLoyaltyCardPoint_SumPoint').setHtml('<font size="15" color="white"><b>' + SumPoint + '</b></font>');
    //     //}



    //     //var TotalItemPrizePriceCost = modelRecord.get('TotalItemPrizePriceCost');
    //     //var result01 = TotalItemPrizePriceCost / TotalItemPoint;

    //     //var num = result01;
    //     //var n = num.toFixed(2);

    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemPoint').value = TotalItemPoint;
    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_TotalItemCost').value = TotalItemPrizePriceCost;
    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationMethod').value = "Total Item Cost=(" + TotalItemPrizePriceCost + ") /" + "Total Item Point=(" + TotalItemPoint + ")";
    //     //document.getElementById('input-FloatPanel_AyohaCardManagement_EditCard_Point_CalculationResult01').value = n;

    //     //PointCount = myStore.getCount();
    //     //Ext.getCmp('htmlSubscriberMaster_TotalPointCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + PointCount + '</div>');
    //     // adjustHeight();
    //     Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo);
    //     Ext.Viewport.setMasked(false);

    // });
    // task.delay(500);
}


var globalFloatLoyaltyCardPoint_SumPoint;
//LoyaltyPoint History
function Load_FloatLoyaltyCardPoint_LoyaltyPointLoadByPointCampaignCodeUserStore(PointCampaignCode, EnterpriseAccNo) {




_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.getProxy().setExtraParam('PointCampaignCode', PointCampaignCode);
_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.getProxy().setUrl(GetAPIurl() + '/LoyaltyPoint/LoyaltyPointLoadByPointCampaignCodeUser');
_DataStore_LoyaltyPointLoadByPointCampaignCodeUserStore.load({
    callback: function (records, operation, success) {       
        if (success && records.length > 0) {                       
                var record = records[0]; // Access only the first record
                var SumPoint = record.get('SumPoint');               
                globalFloatLoyaltyCardPoint_SumPoint = SumPoint;
                Ext.getCmp('htmlFloatLoyaltyCardPoint_SumPoint').setHtml('<font size="15" color="white"><b>' + SumPoint + '</b></font>');
           
            Load_FloatLoyaltyCardPoint_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
        
        } else {
           // console.error('Failed to load store data or no record found.');
           Load_FloatLoyaltyCardPoint_AdvertisementLinkModuleloadByEnterpriseHQAccNoModuleCodeStore(EnterpriseAccNo);
            
        }
    }
});





}



function FloatLoyaltyCardPoint_CreateQrCode(TmpQrCodeTxt) {
 

    var val = GetCurrAyohaUserAccountNo().split('-');

    Ext.getCmp('htmlFloatLoyaltyCardPoint_AccountName').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTop"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + GetAyohaUserAccountNames() + '</div>');
    Ext.getCmp('htmlFloatLoyaltyCardPoint_MembershipNo').setHtml('<div id="divFloatLoyaltyCardPoint_PointQRCodeInnerTopMembershipNi"  style="width: 100%;  border:2px none red;text-align:center;font-size:12px;color:purple;font-weight:bold;" >' + val[1] + '-' + val[2] + '</div>');

    // var x = screen.width;
    // var y = screen.height;
    // var xx = x - 32;
    // var yy = y - 427;

  

    
    // qrcode = new QRCode(document.getElementById("myPointQRCodeImg"), {       
    //     width: xx-1,
    //     height: yy,
    // });

    

    var x = screen.width;
    var xx = x - 28;
    qrcode = new QRCode(document.getElementById("myPointQRCodeImg"), {
        //width: 330,
        width: xx,
        height: 360
    });



    qrcode.clear();

    qrcode.makeCode(TmpQrCodeTxt);

    

}

// function makeCodePoint () {		
//     var elText = document.getElementById("text");
	
//     if (!elText.value) {
//         alert("Input a text");
//         elText.focus();
//         return;
//     }
	
//     qrcode.makeCodePoint(elText.value);
// }