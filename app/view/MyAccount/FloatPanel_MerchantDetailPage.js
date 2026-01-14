Ext.define('BuskartApp.view.MyAccount.FloatPanel_MerchantDetailPage', {
    requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
    ],
});




var is_FloatPanel_MerchantDetailPageOpen = "N";


var _FloatPanel_MerchantDetailPage;

function FloatPanel_MerchantDetailPage() {

    _FloatPanel_MerchantDetailPage = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_MerchantDetailPageID',
            requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
            ],
            // xtype: 'panel',
            zIndex: 80,
            xtype: 'container',
            //height: 475,
            height: '100%',
            //  height: '60%',
            width: '100%',
            draggable: false,

            styleHtmlContent: true,

            centered: true,
            //bottom: 64,
            // zIndex: 100,
            // modal: true,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideIn',
                //direction:'down',
                //duration: 1000,
                //easing: 'ease-in'
            },
            hideAnimation: {
                type: 'popOut',
                duration: 250,
                easing: 'ease-out'
                //type: 'slideOut',
                //direction: 'down',
                //duration: 3000,
                //easing: 'ease-in'
            },

            //style: 'background-image: url("resources/icons/LatestConfetiTwo.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            style: ' background-color:white;',
            // style: 'background-image: url("resources/icons/AyohaRankingRewardContest01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
            //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            // style: ' background-color: #fac;background-image: linear-gradient( #c800ffc9,#ff00de75)',
          
            items: {
                ////zIndex: 40,
                xtype: 'container',
                id: 'ContainerFloatPanel_MerchantDetailPage',
                // style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
                name: 'clickableContainerFloatPanel_MerchantDetailPage',
                style: ' background-color:transparent;',
                layout: {
                    type: 'vbox',
                    pack: 'start',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
                //  margin:'-10 0 0 -7',
                items: [


                   {

                       xtype: 'container',
                       width: '100%',
                       docked: 'top',
                       height:50,
                       // width: 40,

                       //  title: '<font size="3" color="white">Live Tracking Map</font>',
                       //hidden: true,

                       id: 'containeFloatPanel_MerchantDetailPageHeader',
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
                                       xtype: 'panel',
                                       width: 10
                                   },

                                            {
                                                xtype: 'button',
                                                id: 'btnFloatPanel_MerchantDetailPageBack',
                                                height: 30,
                                                width: 35,
                                                margin: '5 0 0 10',
                                                // iconCls: 'list',
                                                html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                ui: 'plain',
                                                handler: function () {
                                                    // FloatPanel_AyohaReward_TopTenRankingHide();
                                                    // FloatPanel_AyohaReward_TopTenRanking_AddCardHide();
                                                    is_FloatPanel_MerchantDetailPageOpen = 'N';
                                                    _FloatPanel_MerchantDetailPage.hide(Ext.fx.Animation({
                                                        type: 'slideOut',
                                                        direction: 'left',
                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                        duration: 250

                                                    }));
                                                    RemovePages("FloatPanel_MerchantDetailPageHide()");
                                                    FloatPanel_AyohaStore_LikeDislikeStore_Save();
                                                    //  FloatPanel_AyohaReward_TopTenRanking_AddCardHide();

                                                }
                                            },

                                             {
                                                 xtype: 'spacer',

                                             },


                                             {
                                                 margin: '0 15 0 0',
                                                 id: 'htmlFloatPanel_MerchantDetailPage_TitleHeaderTxt',
                                                 html: '<font size=2 color=black><b>Ayoha Merchant Page</b></font>'
                                             },

                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             },




                              ]

                   },



                
                           {
                               xtype: 'container',
                              // width: '100%',
                               id: 'containerFloatPanel_MerchantDetailPage_Master',
                               width: '100%',
                               height: '100%',
                               //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                               style: 'background-color:transparent',
                               layout: {
                                   type: 'vbox',
                                   pack: 'start',
                                   align: 'center'

                               },
                               scrollable: {
                                  // direction: 'vertical',
                                   directionLock: true,
                                   indicators: false
                               },
                               items: [
                                   //{
                                   //    xtype: 'container',
                                   //    id: 'ContainerFloatPanel_MerchantDetailPage',
                                   //    // style: 'background-image: url("resources/icons/contestAdvertisement01.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                                   //    // name: 'clickableContainerFloatPanel_MerchantDetailPage',
                                   //    style: ' background-color:transparent;',
                                   //    layout: {
                                   //        type: 'vbox',
                                   //        pack: 'start',
                                   //        align: 'center'
                                   //    },
                                   //    width: '100%',
                                   //    height: 1600,
                                   //    //scrollable: {
                                   //    //    directionLock: true,
                                   //    //    indicators: false
                                   //    //},
                                   //    items: [
                                           {

                                               xtype: 'container',
                                               width: '100%',
                                               height: 40,
                                               zIndex: 100,

                                               // docked: 'top',
                                               // width: 40,
                                               style: ' background-color:transparent;',
                                               //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                               //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                               //hidden: true,

                                               id: 'containerFloatPanel_MerchantDetailPage_Header',
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
                                                                        xtype: 'spacer'
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        //width: '100%',
                                                                        // height: 40,
                                                                        hidden:true,
                                                                        style: 'background-color: rgba(255, 255, 255, 0.5);',
                                                                        id: 'containerFloatPanel_MerchantDetailPage_HeaderInner',
                                                                       
                                                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                        // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                                        layout: {
                                                                            type: 'hbox',
                                                                            pack: 'left',
                                                                            align: 'left',
                                                                        },
                                                                        items: [
                                                                            {
                                                                                xtype: 'spacer',
                                                                                height: 40,
                                                                                width: 5,
                                                                            },
                                                                                {
                                                                                    margin: '0 0 5 0',
                                                                                    id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseName',
                                                                                    html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                                                    // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                                                                    //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                                                },

                                                              {
                                                                  xtype: 'button',
                                                                  margin: '6 0 0 0',
                                                                  //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                                  height: 40,
                                                                  width: 40,
                                                                  // iconCls: 'list',
                                                                  id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLogo',
                                                                  html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                                      FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore();

                                                                  }
                                                              },
                                                                        ]
                                                                    },

                                                              //       {
                                                              //           margin: '-2 0 0 0',
                                                              //           id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseName',
                                                              //           html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:10px 0px 0px 0px">Ayoha Members who love </div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">DREAL CHOCLATE</div>',
                                                              //           // html: '<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:-25px 0px 0px 0px">(2)LOVES</div>',

                                                              //           //  html: '<font size=2 color=white><b>Review By Tarmizi Bin Rahim</b></font>'
                                                              //       },

                                                              //{
                                                              //    xtype: 'button',
                                                              //    margin: '6 0 0 0',
                                                              //    //  id: 'btnFloatPanel_MembershipCardManagement_CardIcon',
                                                              //    height: 40,
                                                              //    width: 40,
                                                              //    // iconCls: 'list',
                                                              //    id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLogo',
                                                              //    html: '<div ><img src="resources/icons/likeOn.png" width="30" height="30" alt="Company Name"></div>',
                                                              //    ui: 'plain',
                                                              //    handler: function () {
                                                              //        FloatPanel_AyohaHotMerchant_OnlineStoreListAyohaStore();
                                                                     
                                                              //    }
                                                              //},


                                                              {
                                                                  xtype: 'panel',
                                                                  width: 10
                                                              }









                                                      ]

                                           },

                                          {
                                              xtype: 'carousel',
                                              //hidden:true,
                                              id: 'CarouselFloatPanel_MerchantDetailPage',
                                              name: 'nameCarouselFloatPanel_MerchantDetailPage',
                                              margin:'-40 0 0 0',
                                              width: '95%',
                                              height: 310,
                                              style: 'background-color:transparent',
                                              //height: '100%',
                                              indicator: true,
                                              requires: [
               'Ext.carousel.Carousel',
               'Ext.util.DelayedTask',
               'Ext.Video'
                                              ],
                                              listeners: {
                                                  activeitemchange: function (container, newCard, oldCard, index) {


                                                  },

                                              },



                                             
                                              // items: [


                                              //  ]
                                          },

                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 50,
                                              zIndex: 100,
                                              margin:'-50 0 0 0',
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedias',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      width: '60%',
                                                      height: 50,
                                                      //zIndex: 100,
                                                      margin: '0 0 0 0',
                                                      style: 'background-color: transparent;',
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      width: '40%',
                                                      height: 50,
                                                      //zIndex: 100,
                                                      margin: '0 0 0 0',
                                                      style: 'background-color: transparent;',
                                                      id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedias_Inner',

                                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                      layout: {
                                                          type: 'vbox',
                                                          pack: 'start',
                                                          align: 'right',
                                                      },
                                                      items: [
                                                          {
                                                              html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:white;margin:-27px 0px 0px 0px;padding:0px 6px;">Visit Us On:</div>'
                                                          },
                                                          {
                                                              xtype: 'container',
                                                              width: '100%',
                                                              height: 50,
                                                              //zIndex: 100,
                                                              margin: '-30 0 0 0',
                                                              style: 'background-color: transparent;',
                                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseSocialMedias_InnerInner',

                                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                              layout: {
                                                                  type: 'hbox',
                                                                  pack: 'right',
                                                                  align: 'right',
                                                              },


                                                              items: [

                                                                   {
                                                                       id: 'htmlFloatPanel_MerchantDetailPage_Website',
                                                                       hidden:true,
                                                                       height: 26,
                                                                       margin: '0 0 0 0',
                                                                       width: 26,
                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                       html: '<div onclick="FloatPanel_MerchantDetailPage_OpenWebsite();"><img src="resources/icons/websiteicon02.png" width="26" height="26" alt="Company Name"></div>',
                                                                   },
                                                                   {
                                                                       xtype: 'spacer',
                                                                       width: 6,

                                                                   },
                                                                   {
                                                                       id: 'htmlFloatPanel_MerchantDetailPage_Insta',
                                                                       hidden:true,
                                                                       height: 26,
                                                                       margin: '0 0 0 0',
                                                                       width: 26,
                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                       html: '<div onclick="FloatPanel_MerchantDetailPage_OpenInsta();" ><img src="resources/icons/instagramlogo.png" width="26" height="26" alt="Company Name"></div>',
                                                                   },
                                                                   {
                                                                       xtype: 'spacer',
                                                                       width: 6,

                                                                   },
                                                                   {
                                                                       id: 'htmlFloatPanel_MerchantDetailPage_TikTok',
                                                                       hidden: true,
                                                                       height: 26,
                                                                       margin: '0 0 0 0',
                                                                       width: 26,
                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                       html: '<div onclick="FloatPanel_MerchantDetailPage_OpenTikTok();" ><img src="resources/icons/TikToklogo.png" width="26" height="26" alt="Company Name"></div>',
                                                                   },
                                                                   {
                                                                       xtype: 'spacer',
                                                                       width: 6,

                                                                   },

                                                                   {
                                                                       id: 'htmlFloatPanel_MerchantDetailPage_FB',
                                                                       hidden:true,
                                                                       height: 26,
                                                                       margin: '0 0 0 0',
                                                                       width: 26,
                                                                       // html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">3</div>',
                                                                       html: '<div onclick="FloatPanel_MerchantDetailPage_OpenFB();" ><img src="resources/icons/facebook.png" width="26" height="26" alt="Company Name"></div>',
                                                                   },
                                                                    {
                                                                        xtype: 'spacer',
                                                                        width: 6,

                                                                    },
                                                              ]
                                                          }
                                                      ]
                                                  },
                                                  {
                                                      xtype: 'container',
                                                      width: '10%',
                                                      height: 50,
                                                      //zIndex: 100,
                                                      margin: '0 0 0 0',
                                                      style: 'background-color: transparent;',
                                                  },
                                              ]
                                          },
                                          {
                                              xtype: 'container',
                                              width: '95%',
                                               height: 90,
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      width: '23%',
                                                      height: 90,
                                                      style: 'background-color: transparent;',
                                                      id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Logo',

                                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'left',
                                                          align: 'left',
                                                      },
                                                      items: [
                                                          {
                                                              width: '100%',
                                                              height: 90,
                                                              id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_Logo',
                                                              html: '<div ><img src="null" width="100%" height="90" alt="Company Name"></div>',
                                                          }
                                                      ]
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       width: '71%',
                                                       height: 90,
                                                       style: 'background-color: transparent;',
                                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended',

                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'left',
                                                       },
                                                       items: [
                                                           {
                                                               margin: '-5 0 0 0',
                                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine',                                                              
                                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Monster Chicken</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>Ayam Cheesee Leleh</i></div>',
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               width: '100%',
                                                               height: 35,
                                                               docked:'bottom',
                                                               style: 'background-color: transparent;',
                                                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtendedBotom',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'start',
                                                                   align: 'left',
                                                               },
                                                               items: [
                                                                   {
                                                                    margin: '-10 0 0 0',
                                                                       id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseFullAddress',
                                                                       html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 6px;">Lot 153,Aeon Nilai, Bandar Baru Nilai,71800 Nilai,Negeri Sembilan</div>'
                                                                   }
                                                               ]
                                                           }
                                                       ]
                                                   },


{
    xtype: 'container',
    width: '6%',    
    //height: 90,
    height: 100,
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            width: '100%',
            hidden:true,
            //height: 90,
            height: 40,
            style: 'background-color: transparent;',
            id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction',

            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'top',
                align: 'right',
            },
            items: [
                {
                    width: '100%',
                    height: 30,
                    html: '<div onclick="FloatPanelMerchantDetailPage_OpenDirection();"><img src="resources/icons/DirectionPurple.jpg" width="24" height="24" alt="Company Name"></div>',
                },
                //  {
                //      width: '100%',
                //      height: 5,
                //      margin: '-7 0 0 0',
                //     // hidden:true,
                //      html: '<div onclick="FloatPanelMerchantDetailPage_OpenDirection();" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 7px;font-weight:normal;color:black;">Location</div>'
                //  },
            ]
        },
         {
             xtype: 'container',
             width: '100%',
            // height: 90,
             height: 40,
             hidden:true,
            style: 'background-color: transparent;',
             id: 'containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore',
             name:'namecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore',

            // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: transparent;',
             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center',
             },
             items: [
                 {
                     width: '100%',
                     height: 30,
                     html: '<div onclick="FloatPanelMerchantDetailPage_AyohaStore()"><img src="resources/icons/onlineStore.jpg" width="24" height="24" alt="Company Name"></div>',
                   //  margin:'15 0 0 0',
                 },
                //   {
                //       width: '100%',                     
                // height: 5,
                // margin: '4 0 0 5',
                //       html: '<div onclick="FloatPanelMerchantDetailPage_AyohaStore()" style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 7px;font-weight:normal;color:black;margin:-12px 0px 0px -5px;">Ayoha</div><br><div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 7px;font-weight:normal;color:black;margin:-26px 0px 0px -5px">Store</div>'
                //   },
             ]
         }
    ]

},
                                                  
                                              ]

                                          },
                                           {
                                               xtype: 'container',
                                               width: '95%',
                                               margin:'5 0 0 0',
                                               height: 1,
                                               style: 'background-color: grey;',
                                           },

                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 5,
                                              style: 'background-color: transparent;',
                                          },
                                         
                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 70,
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseDescription',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                              
                                                  {
                                                      width: '100%',
                                                      height: 65,
                                                      margin: '10 0 0 0',
                                                      id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseDescription',
                                                      html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">Kami menjual ayam cheese yang padu dan maengancam nyawa dan liur anda,kipidap dont gi babp</div>'
                                                  }
                                              ]

                                          },

                                           {
                                               xtype: 'container',
                                               width: '95%',
                                               height: 5,
                                               style: 'background-color: transparent;',
                                           },
                                           {
                                            xtype: 'container',
                                            width: '95%',
                                            height: 35,
                                            style: 'background-color: transparent;',
                                            id: 'containerFloatPanel_MerchantDetailPage_EnterpriseCheckIn',
                                            name:'namecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn',

                                            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                            // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'left',
                                                align: 'left',
                                            },
                                            items: [
                                                {
                                                    xtype: 'container',
                                                    width: '7%',
                                                    height: 42,
                                                    style: 'background-color: transparent;',
                                                    id: 'containerFloatPanel_MerchantDetailPage_EnterpriseCheckInIcon',

                                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                    layout: {
                                                        type: 'hbox',
                                                        pack: 'left',
                                                        align: 'left',
                                                    },
                                                    items: [
                                                        {
                                                            width: '100%',
                                                            margin: '-6 0 0 -10',
                                                            height: 42,
                                                            html: '<div ><img src="resources/icons/ayoha_checkin_icon.png" width="40" height="40" alt="Company Name"></div>',
                                                        }
                                                    ]
                                                },
                                                 {
                                                     xtype: 'container',
                                                     width: '92%',
                                                     height: 35,
                                                     style: 'background-color: transparent;',
                                                     id: 'containerFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails',

                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                     layout: {
                                                         type: 'hbox',
                                                         pack: 'left',
                                                         align: 'left',
                                                     },
                                                     items: [
                                                         {
                                                             width: '100%',
                                                             height: 35,
                                                             margin: '-3 0 0 0',
                                                             id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails',                                                             
                                                             html: '<div onclick="FloatPanel_MerchantDetailPage_EnterpriseCheckInDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Loading..</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>',
                                                         }
                                                     ]
                                                 }
                                            ]

                                        },
                                        {
                                            xtype: 'container',
                                            width: '95%',
                                            height: 7,
                                            style: 'background-color: transparent;',
                                        },
                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 35,
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWorkingHour',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      width: '7%',
                                                      height: 26,
                                                      style: 'background-color: transparent;',
                                                      id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWorkingHourIcon',

                                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'left',
                                                          align: 'left',
                                                      },
                                                      items: [
                                                          {
                                                              width: '100%',
                                                              height: 26,
                                                              html: '<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" ><img src="resources/icons/History01.png" width="100%" height="26" alt="Company Name"></div>',
                                                          }
                                                      ]
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       width: '92%',
                                                       height: 35,
                                                       style: 'background-color: transparent;',
                                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails',

                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'left',
                                                           align: 'left',
                                                       },
                                                       items: [
                                                           {
                                                               width: '100%',
                                                               height: 35,
                                                               margin: '-3 0 0 0',
                                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails',                                                             
                                                               html: '<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">10.00AM - 10.00PM (Closed Now)</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>',
                                                           }
                                                       ]
                                                   }
                                              ]

                                          },


                                            {
                                                xtype: 'container',
                                                width: '95%',
                                                height: 7,
                                                style: 'background-color: transparent;',
                                            },

                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 35,
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseBusinessContactNo',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      width: '7%',
                                                      height: 26,
                                                      style: 'background-color: transparent;',
                                                      id: 'containerFloatPanel_MerchantDetailPage_EnterpriseContactIcon',

                                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'left',
                                                          align: 'left',
                                                      },
                                                      items: [
                                                          {
                                                              width: '100%',
                                                              height: 26,
                                                              html: '<div ><img src="resources/icons/BusinessContactIcon.png" width="100%" height="26" alt="Company Name"></div>',
                                                          }
                                                      ]
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       width: '92%',
                                                       height: 35,
                                                       style: 'background-color: transparent;',
                                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseContactDetails',

                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'left',
                                                           align: 'left',
                                                       },
                                                       items: [
                                                           {
                                                               width: '100%',
                                                               height: 35,
                                                               margin: '-3 0 0 0',
                                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseContactDetails',                                                              
                                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">03-663998765</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Contact No</div>',
                                                           }
                                                       ]
                                                   }
                                              ]

                                          },

                                            {
                                                xtype: 'container',
                                                width: '95%',
                                                height: 7,
                                                style: 'background-color: transparent;',
                                            },

                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 35,
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWhatsAppBusinessContactNo',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      width: '7%',
                                                      height: 26,
                                                      style: 'background-color: transparent;',
                                                      id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWhatsAppContactIcon',

                                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'left',
                                                          align: 'left',
                                                      },
                                                      items: [
                                                          {
                                                              width: '100%',
                                                              height: 26,
                                                              html: '<div ><img src="resources/icons/WhatsApp01.png" width="100%" height="26" alt="Company Name"></div>',
                                                          }
                                                      ]
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       width: '92%',
                                                       height: 35,
                                                       style: 'background-color: transparent;',
                                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseWhatsAppDetails',

                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'left',
                                                           align: 'left',
                                                       },
                                                       items: [
                                                           {
                                                               width: '100%',
                                                               height: 35,
                                                               margin: '-3 0 0 0',
                                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseWhatsAppDetails',                                                              
                                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">013-3376958</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">WhatsApp Contact No</div>',
                                                           }
                                                       ]
                                                   }
                                              ]

                                          },






                                                  {
                                                      xtype: 'container',
                                                      width: '95%',
                                                      height: 10,
                                                      style: 'background-color: transparent;',
                                                  },

                                          {
                                              xtype: 'container',
                                              width: '95%',
                                              height: 35,
                                              style: 'background-color: transparent;',
                                              id: 'containerFloatPanel_MerchantDetailPage_EnterpriseLoveUs',

                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                              layout: {
                                                  type: 'hbox',
                                                  pack: 'left',
                                                  align: 'left',
                                              },
                                              items: [
                                                  {
                                                      xtype: 'container',
                                                      width: '7%',
                                                      height: 26,
                                                      style: 'background-color: transparent;',
                                                      id: 'containerFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon',

                                                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                      // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                      layout: {
                                                          type: 'hbox',
                                                          pack: 'left',
                                                          align: 'left',
                                                      },
                                                      items: [
                                                          {
                                                              width: '100%',
                                                              height: 26,
                                                              id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon',
                                                              html: '<div><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>',
                                                          }
                                                      ]
                                                  },
                                                   {
                                                       xtype: 'container',
                                                       width: '92%',
                                                       height: 35,
                                                       style: 'background-color: transparent;',
                                                       id: 'containerFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails',

                                                       //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                       // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'left',
                                                           align: 'left',
                                                       },
                                                       items: [
                                                           {
                                                              // width: '33%',
                                                               width: '31%',
                                                               height: 35,
                                                               margin: '-3 0 0 0',
                                                               id: 'htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails',                                                              
                                                               html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">2</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>',
                                                           },
                                                           {

                                                               xtype: 'container',
                                                             //  width: '30%',
                                                               width: '23%',
                                                               //margin:'0 0 0 0',
                                                               height: 35,
                                                               style: 'background-color: transparent;',
                                                               id: 'containerFloatPanel_MerchantDetailPage_EnterpriseReviewRateDetails',

                                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                               // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'left',
                                                                   align: 'left',
                                                               },
                                                               items: [
                                                                   {
                                                                       xtype: 'container',
                                                                       width: '100%',
                                                                      // flex: 1,
                                                                       margin: '-10 0 0 0',
                                                                       height: 50,
                                                                       id: 'containerFloatPanel_MerchantDetailPage_ReviewAndRate',
                                                                      // name: 'namecontainerFloatPanel_AyohaStore_ReviewAndRate',
                                                                       // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                       style: "background-color: transparent;",
                                                                       layout: {
                                                                           type: 'vbox',
                                                                           pack: 'center',
                                                                           align: 'center'

                                                                       },
                                                                       items: [
                                                                           {
                                                                               margin: '0 0 0 5',
                                                                               id: 'htmlFloatPanel_MerchantDetailPage_ReviewAndRateCount',
                                                                               html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',

                                                                           },

                                                                           {
                                                                               xtype: 'container',
                                                                               width: '100%',
                                                                               margin: '-12 0 0 0',
                                                                               height: 9,
                                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                               style: "background-color: transparent;",
                                                                               layout: {
                                                                                   type: 'hbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'

                                                                               },
                                                                               items: [

                                                                                   {
                                                                                       id: 'htmlFloatPanel_MerchantDetailPage_Star1',
                                                                                       height: 9,
                                                                                       width: 9,
                                                                                       html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                                                                   },
                   {
                       id: 'htmlFloatPanel_MerchantDetailPage_Star2',
                       height: 9,
                       width: 9,
                       html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                   },
                     {
                         id: 'htmlFloatPanel_MerchantDetailPage_Star3',
                         height: 9,
                         width: 9,
                         html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                     },
                       {
                           id: 'htmlFloatPanel_MerchantDetailPage_Star4',
                           height: 9,
                           width: 9,
                           html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                       },
                         {
                             id: 'htmlFloatPanel_MerchantDetailPage_Star5',
                             height: 9,
                             width: 9,
                             html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',

                         },
                                                                               ]
                                                                           },

                                                                           {
                                                                               xtype: 'container',
                                                                               width: '100%',
                                                                               margin: '8 0 0 0',
                                                                               height: 9,
                                                                               layout: {
                                                                                   type: 'hbox',
                                                                                   pack: 'center',
                                                                                   align: 'center'
                                                                               },
                                                                               items: [
                                                                                   {
                                                                                       id: 'htmlFloatPanel_MerchantDetailPage_ReviewByCount',
                                                                                       html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;0 Reviews</div>',
                                                                                   },
                                                                               ]
                                                                           },
                                                                            //{
                                                                            //    margin: '0 0 0 0',
                                                                            //    height: 15,
                                                                            //    id: 'htmlAyohaMerchantReview_TotalReviewsxx',
                                                                            //    html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                                                            //}
                                                                       ]
                                                                   },
                                                               ]
                                                           },

{
    xtype: 'container',
    width: '33%',
    height: 35,
    style: 'background-color: transparent;',
    layout: {
        type: 'vbox',
        pack: 'top',
        align: 'right'
   },
   items:[
    {
        margin: '2 0 0 0',
         // hidden: true,
         width: 30,
         height: 30,
         html: '<img onClick="FloatPanel_AyohaStore_OrderHistoryShow()" src="resources/icons/purchase01.png" alt="Image" style="width:30px;height:30px;">',
         // ui:'plain'
     },
   ]
},


                                                           {
                                                               xtype: 'container',
                                                              // width: '37%',
                                                               width: '13%',
                                                               height: 35,
                                                               style: 'background-color: transparent;',
                                                               id: 'containerFloatPanel_MerchantDetailPage_AyohaStoreCart',
                                                               layout: {
                                                                type: 'vbox',
                                                                pack: 'top',
                                                                align: 'right'

                                                               },
                                                               items: [

                                                                {
                                                                    xtype: 'container',
                                                                    width: '100%',
                                                                   // hidden:true,
                                                                 margin: '0 0 0 0',
                                                                    height: 30,
                                                                    style: 'background-color: transparent;',
                                                                    layout: {
                                                                     type: 'vbox',
                                                                     pack: 'top',
                                                                     align: 'right'
                                                                },
                                                                items:[
                                                                    {
                                                                        margin: '-10 8 0 0',
                                                                        id: 'htmlFloatPanel_MerchantDetailPage_CountbadgeText',
                                                                        html: '<div style="background: transparent;height:10px;font-size: 14px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
                                                                       
                                                                    },
                                                                    {
                                                                       margin: '2 0 0 0',
                                                                        // hidden: true,
                                                                        width: 30,
                                                                        height: 30,
                                                                        html: '<img onClick="FloatPanel_AyohaStore_CartShow()" src="resources/icons/myCart02.png" alt="Image" style="width:30px;height:30px;">',
                                                                        // ui:'plain'
                                                                    },
                                                                ]
                                                            },
                                                                  

                                                               ]
                                                           }

                                                       ]
                                                   },
                                              ]

                                          },


                                            {
                                                xtype: 'container',
                                                width: '95%',
                                                height: 20,
                                                style: 'background-color: transparent;',
                                            },

                                            {
                                                xtype: 'container',
                                                width: '95%',
                                                height: 32,
                                                // width: 40,

                                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                //hidden: true,

                                                id: 'containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt',
                                                name: 'namecontainerFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt_X',
                                               // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',
                                                
                                               style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                                //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                                layout: {
                                                    type: 'hbox',
                                                    pack: 'center',
                                                    align: 'center',
                                                },
                                                items: [
                                                    {
                                                        xtype: 'spacer',
                                                        width:15
                                                    },
                                                    {
                                                        id: 'htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt',
                                                        html: '<font size=2 color=white><b>Online Store</b></font>',
                                                        width:'82%'
                                                       // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Online Store</div>',
                                                    },
                                                    {
                                                        xtype:'spacer'
                                                    },
                                                     { xtype: 'button',
                                                         id: 'btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp',
                                                         //  badgeText: '1',
                                                         margin: '0 0 0 0',
                                                         height: 30,
                                                         width: 60,
                                                         hidden:true,
                                                       //  html: '<font size=2 color=white><b>Hide</b></font>',
                                                         html: '<img src="resources/icons/DropUpWhite.png" style="width:22px;height:22px;">',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideDown';
                                                             Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(false);
                                                             Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(true);
                                                             FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
                                                            
                                                         },
                                                     },
                                                      {
                                                          xtype: 'button',
                                                          id: 'btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown',
                                                          margin: '0 0 0 0',
                                                          height: 30,
                                                          width: 60,
                                                          html: '<img src="resources/icons/DropDownWhite.png" style="width:22px;height:22px;">',
                                                          ui: 'plain',
                                                          handler: function () {
                                                              OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
                                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(true);
                                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(false);
                                                              FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
                                                          },
                                                      },
                                                     {
                                                         xtype: 'spacer',
                                                         width: 15
                                                     },
                                                ]
                                            },

                                                 {
                                                     xtype: 'container',
                                                     width: '95%',
                                                     height: 0,
                                                     // width: 40,

                                                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                     //hidden: true,
                                                   //  display: none,
                                                     id: 'containeFloatPanel_MerchantDetailPage_OnlineStore_Inner',

                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                     style: 'background-color:transparent',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'start',
                                                         align: 'center',
                                                     },
                                                     items: [
                                                         {
                                                             xtype: 'list',
                                                             width: '100%',
                                                             height: 0,
                                                             // height: '98%',
                                                             // flex: 1,
                                                             store: _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore,
                                                             id: 'FloatPanel_MerchantDetailPage_OnlineStoreList',
                                                             mode: 'SINGLE',
                                                             style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                             disableSelection: true,
                                                             scrollable:false,
                                                             //scrollable: {
                                                             //    direction: 'vertical',
                                                             //    indicators: {
                                                             //        y: {
                                                             //            autoHide: true
                                                             //        },
                                                             //        x: {
                                                             //            autoHide: true
                                                             //        }
                                                             //    }
                                                             //},
                                                             itemTpl: '<div onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" class="myContent" style="background-color:white;width:100%">' +


                                                               '<table onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;height:60px;"><tr onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" src="{OnlineStoreIconPath}" style="border:1px solid black; width:55px;height:55px;border-radius:50%;" /></td><td onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{OnlineStoreName}</b><br>{OnlineStoreURL}</td></tr></table>' +
                                                             '<br>' +
                                                                 '<div onclick="FloatPanel_MerchantDetailPage_OpenStore(' + "'" + '{OnlineStoreName}' + "'" + ',' + "'" + '{OnlineStoreURL}' + "'" + ');" style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',

                                                             emptyText: '<div class="myContent">No Online Store!</div>',
                                                           

                                                         },
                                                     ]
                                                 },







                                                      {
                                                          xtype: 'container',
                                                          width: '95%',
                                                          height: 10,
                                                          style: 'background-color: transparent;',
                                                      },

                                           {
                                               xtype: 'container',
                                               width: '95%',
                                               height: 32,
                                               // width: 40,

                                               //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                               //hidden: true,

                                               id: 'containeFloatPanel_MerchantDetailPage_MembershipCard_HeaderTxt',
                                               name: 'namecontainerFloatPanel_MerchantDetailPage_MembershipCard_HeaderTxt_X',
                                               // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',

                                               style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                              // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center',
                                               },
                                               items: [
                                                   {
                                                       xtype: 'spacer',
                                                       width: 15
                                                   },
                                                   {
                                                       id: 'htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt',
                                                       width:'82%',
                                                       html: '<font size=2 color=white><b>Membership Card</b></font>',

                                                      // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Membership Card</div>',
                                                   },
                                                   {
                                                       xtype: 'spacer'
                                                   },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',
                                                        height: 30,
                                                        width: 60,
                                                        hidden: true,
                                                        //  html: '<font size=2 color=white><b>Hide</b></font>',
                                                        html: '<img src="resources/icons/DropUpWhite.png" style="width:22px;height:22px;">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideDown';
                                                            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(false);
                                                            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(true);
                                                            FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();

                                                        },
                                                    },
                                                      {
                                                          xtype: 'button',
                                                          id: 'btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown',
                                                          margin: '0 0 0 0',
                                                          height: 30,
                                                          width: 60,
                                                          html: '<img src="resources/icons/DropDownWhite.png" style="width:22px;height:22px;">',
                                                          ui: 'plain',
                                                          handler: function () {
                                                              OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
                                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(true);
                                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(false);                                                         
                                                              FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
                                                          },
                                                      },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 15
                                                    },
                                               ]
                                           },

                                                 {
                                                     xtype: 'container',
                                                     width: '95%',
                                                     height: 0,
                                                     // width: 40,

                                                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                     //hidden: true,

                                                     id: 'containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner',
                                                    // name: 'namecontaineFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner',
                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                     style: 'background-color:transparent',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'start',
                                                         align: 'center',
                                                     },
                                                     items: [
                                                        {
                                                            xtype: 'list',
                                                            //xtype: 'dataview',
                                                            height: 0,
                                                            store: _DataStore_MembershipCardLoadByEnterpriseAccNoStore,
                                                            id: 'ListFloatPanel_MerchantDetailPage_MembershipcardOfferedID',
                                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                           
                                                            mode: 'SINGLE',
                                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                            scrollable:false,
                                                           
                                                            disableSelection: true,
                                                           
                                                            itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                          //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +

                                                            '{ModifiedisMembershipCardSubscribed}' +
                                                          '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isMembershipCardSubscribed}' + "'" + ')" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                                        '</div>' +
                                                                                        // '<br><div style="margin:-20px 0px 0px 0px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-bottom: 1px solid grey;padding:0px 0px">{MembershipCardName}</div>' +
                                                            '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -25px">Membership Fees(RM)</div></div>' +
                                                            '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-27px 0px 0px -27px;color:black;font-family:Arial, sans-serif;font-size:28px;font-weight:bold;">{MembershipCardFee}</div></div>' +
                                                           //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardName}</div>' +

                                                            '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div class="blink_me" style="width:100%;text-align:right;margin:0px 0px 0px -25px">*Tap to view Details</div></div>' +
                                                          //  '<br><div style="margin:-40px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Card Privilage Level</div>' +
                                                            //'<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px">{MembershipCardType}</div>',
                                                              '<br><div style="margin:-38px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-25px 0px 0px -25px;color:transparent;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">x</div></div>',

                                                            //  '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="resources/icons/MemberPhotos.png" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>',


                                                            emptyText: '<div class="myContent">No Membership Card</div>',




                                                            width: '100%',
                                                         

                                                        },
                                                     ]
                                                 },

















                                                         {
                                                             xtype: 'container',
                                                             width: '95%',
                                                             height: 10,
                                                             style: 'background-color: transparent;',
                                                         },

                                           {
                                               xtype: 'container',
                                               width: '95%',
                                               height: 32,
                                               // width: 40,

                                               //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                               //hidden: true,

                                               id: 'containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_HeaderTxt',
                                               name: 'namecontainerFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_HeaderTxt_X',
                                               // name: 'namecontainerFloatPanel_AyohaStore_WhatsApp',

                                              style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                              // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;border-top:2px solid #D3D3D3;',
                                               layout: {
                                                   type: 'hbox',
                                                   pack: 'center',
                                                   align: 'center',
                                               },
                                               items: [
                                                   {
                                                       xtype: 'spacer',
                                                       width: 15
                                                   },
                                                   {
                                                       id: 'htmlFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt',
                                                       width:'82%',
                                                      // html: '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Membership Loyalty Program</div>',
                                                     html: '<font size=2 color=white><b>Our Loyalty Program</b></font>'
                                                   },
                                                   {
                                                       xtype: 'spacer'
                                                   },
                                                    {
                                                        xtype: 'button',
                                                        id: 'btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp',
                                                        //  badgeText: '1',
                                                        margin: '0 0 0 0',
                                                        height: 30,
                                                        width: 60,
                                                        hidden: true,
                                                        //  html: '<font size=2 color=white><b>Hide</b></font>',
                                                        html: '<img src="resources/icons/DropUpWhite.png" style="width:22px;height:22px;">',
                                                        ui: 'plain',
                                                        handler: function () {
                                                            OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideDown';
                                                            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(false);
                                                            Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(true);
                                                            FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp();
                                                           // FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
                                                          
                                                        },
                                                    },
                                                      {
                                                          xtype: 'button',
                                                          id: 'btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown',
                                                          margin: '0 0 0 0',
                                                          height: 30,
                                                          width: 60,
                                                          html: '<img src="resources/icons/DropDownWhite.png" style="width:22px;height:22px;">',
                                                          ui: 'plain',
                                                          handler: function () {
                                                            LoadingPanelShow(getLoadingIcon(), 'Loading...');
                                                              // FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore();
                                                              FloatPanelMerchantDetailPage_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore();
                                                              OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
                                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(true);
                                                              Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(false);
                                                           
                                                              FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown();
                                                            //  FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
                                                          },
                                                      },
                                                    {
                                                        xtype: 'spacer',
                                                        width: 15
                                                    },
                                               ]
                                           },

                                                 {
                                                     xtype: 'container',
                                                     width: '95%',
                                                     height: 0,
                                                     // width: 40,

                                                     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                                     hidden: true,

                                                     id: 'containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner',
                                                     // name: 'namecontaineFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner',
                                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                     style: 'background-color:transparent',
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'start',
                                                         align: 'center',
                                                     },
                                                     items: [
                                                        {
                                                            xtype: 'list',
                                                            //  flex: 1,
                                                           // hidden:true,
                                                          //  margin: '1 0 0 0',
                                                            width: '100%',
                                                            // store: 'EnterprisegetAllStore',
                                                           store: _DataStore_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore,
                                                          // store: _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore,
                                                          id: 'ListFloatPanel_MerchantDetailPage_MembershipLoyaltyProgramID',
                                                            scrollable:false,
                                                            grouped: true,
                                                            mode: 'SINGLE',
                                                            //  indexBar: true,
                                                            disableSelection: true,
                                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                            // scrollable: {
                                                            //     direction: 'vertical',
                                                            //     directionLock: true,
                                                            //     indicators: {
                                                            //         y: {
                                                            //             autoHide: true
                                                            //         },
                                                            //         x: {
                                                            //             autoHide: true
                                                            //         }
                                                            //     }
                                                            // },
                                                                 
                                                          
                                                        //     itemTpl: '{ModifiedCampaignTypeShorted}' +                                              
                                                        //    '<br><div style="width:100%;text-align:center;margin:-10px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black">{ModifiedCampaignType}</div>' +
                                                        //        '<br><div style="width:100%;text-align:center;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{CampaignName}</div>' +
                                                        //         '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{ModifiedCountLoyaltyStamped}</div>' +
                                                        //           '{ModifiedisRequiredStartEndDate}' +
                                                        //                                                      // '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black">Day Left:{CampaignDayLeft}</div>' +
        
                                                        //     '</div>',
        
        
                                                        itemTpl: '<div class="myContent" style="background-color:transparent;">' +
                    
        
                                                       '<table  style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:0px 0px 0px 0px;height:60px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 0px;width:30px;height:30px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({ModifiedCampaignType}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'
                                                       // '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr onclick="openNotificationPanel(' + ID + ',' + "'" + NotificationType + "'" + ',' + "'" + NotificationCode + "'" + ',' + "'" + EnterpriseAccNo + "'" + ',' + "'" + IsReadStatus + "'" + ')"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:25%;vertical-align:center"><img src="' + EnterpriseLogoPath + '" style="border:1px solid white; width:75px;height:75px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ModifiedCampaignTypeShorted}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{CampaignName} - {ModifiedCountLoyaltyStamped}</font></td></tr></table>'   
                                                       
                                                       
                                                       + '</div>',
        
        
        
        
        
        
                                                           
                                                            // itemTpl: '<div class="myContent" style="background-color:transparent;height:125px">' +
                    
                                                            //    '<div style="width:100%;text-align:center;margin:0px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black"><u>{ModifiedCampaignTypeShorted}</u></div>' +
                                                            //                                                                            // '<br><div style="width:100%;text-align:right;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;font-weight:bold;color:black"></div>' +
                                                            //     '<br><div style="width:100%;text-align:center;margin:-10px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black">{ModifiedCampaignType}</div>' +
                                                            //         '<br><div style="width:100%;text-align:center;margin:-30px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{CampaignName}</div>' +
                                                            //          '<br><div style="width:100%;text-align:center;margin:-25px 0px 0px 0px;background-color: transparent;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;color:black">{ModifiedCountLoyaltyStamped}</div>' +
                                                                     
                                                            //      '</div>',
                                                            height: 0,
                                                           //height: '100%',
                                                            listeners: {
                                                                itemsingletap: function (list, idx, target, records, evt) {
        
                                                                    //var Stamps = records.get('Stamps');
                                                                    //var StampsArr = Stamps.split('/');
        
        
                                                                    var CampaignCode = records.get('CampaignCode');
                                                                    var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                                                    var StartDate = records.get('CampaignStartDate');
                                                                    var EndDate = records.get('CampaignEndDate');
                                                                    var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                                    //var EnterpriseName = records.get('EnterpriseName');     
                                                                    var EnterpriseName = records.get('EnterpriseName');
                                                                    var StampRuleRemarks = records.get('Remarks');
                                                                    var isStampRulePopUp = records.get('isRulePopUp');
                                                                    var CampaignName = records.get('CampaignName');
                                                                    var Stamp = records.get('Stamp');
                                                                    var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                                    //var EnterpriseLogo = records.get('EnterpriseLogo');
                                                                    var EnterpriseLogo = records.get('EnterpriseLogo');
                                                                    var CampaignType = records.get('CampaignType');
                                                                    var EnterpriseAccNo = records.get('EnterpriseAccNo');
        
                                                                    var isRequiredStartEndDate = records.get('isRequiredStartEndDate');
                                                                    var isCampaignExpired = records.get('isCampaignExpired');
                                                                    var CampaignDayLeft = records.get('CampaignDayLeft');
        
                                                                    //  FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks);
        
        
        
                                                                    //var StampedCampaignCode = records.get('StampedCampaignCode');
                                                                    //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                                    //var StartDate = records.get('StartDate');
                                                                    //var EndDate = records.get('EndDate');
                                                                    //var SubscriberAccNo = records.get('SubscriberAccNo');
                                                                    //var EnterpriseName = records.get('EnterpriseName');
                                                                    //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                                    //var isStampRulePopUp = records.get('isStampRulePopUp');
                                                                    //var StampCampaignName = records.get('StampCampaignName');
                                                                    //var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                                    //var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                                    localStorage.setItem('StampCampaignCode', CampaignCode);
        
                                                                    localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                                    localStorage.setItem('CountStampCardRowShow', Stamp);
                                                                     
                                                                
        
        
        
                                                                   
                                                                    if (MembershipTag == 'NO') {
                                                                        
                                                                      

                                                                      //  setMessage_NotYetMembershipMessage();



                                                                        
                                                                if (CampaignType == "Stamp Reward Loyalty Card") {

                                                                    //alert(CampaignType);
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {

                                                                    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                                    //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
                                                                    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
                                                                }
                                                                if (CampaignType == "Point Reward Loyalty Card") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                                                   // FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, PointisCampaignExpired);
                                                                }
                                                                if (CampaignType == "Membership Card Discount") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Contest") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Event") {
                                                                    LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    //FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID);
                                                                    FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade(CampaignCode,EnterpriseLogo, EnterpriseName);
                                                                   
                                                                   
                                                                    // FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                    }
        
                                                                
        
                                                                },
                                                                deselect: function (list, records) {
        
                                                                }
                                                            },
        
                                                        },
                                                        {
                                                            xtype: 'list',
                                                            hidden: true,
                                                            //xtype: 'dataview',
                                                            height: 0,
                                                            store: _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore,
                                                          

                                                            mode: 'SINGLE',
                                                            style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                            scrollable:false,
                                                            //scrollable: {
                                                            //    direction: 'vertical',
                                                            //    indicators: {
                                                            //        y: {
                                                            //            autoHide: true
                                                            //        },
                                                            //        x: {
                                                            //            autoHide: true
                                                            //        }
                                                            //    }
                                                            //},
                                                            grouped:true,

                                                            disableSelection: true,
                                                            itemTpl: '<div  class="myContent" style="background-color:transparent;width:100%">' +


                                                                                                                          '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:transparent;margin:0px 0px 0px 0px;height:40px;"><tr ><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:15%;vertical-align:center"><img  src="{AyohaLoyaltyProgramIcon}" style="border:1px none black; width:35px;height:35px;" /></td><td  style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{AyohaLoyaltyProgram} - ({Bilangan})</b></td></tr></table>' ,
                                                                                                                        //'<br>' +
                                                                                                                        //    '<div  style="width:100%;text-align:left;margin:-60px 0px 0px 10px;background-color:transparent;"><button  class="buttonsHtmlBgTransparent"><img src="resources/icons/backgroundTransparent.png" style="width: 23px; height: 23px; margin:0px 0px 0px 40px;" /></button></div>',

                                                            //emptyText: '<div class="myContent">No Online Store!</div>',
                                                            emptyText: 'Loading...',
                                                            listeners: {
                                                                itemtap: function (list, idx, target, records, evt) {
                                                                  LoadingPanelShow(getLoadingIcon(), 'Loading...');

                                                                    // FloatPanel_RewardStore_OpenStore(records.get('ID'));
                                                                    FloatPanel_MerchantDetailPage_Staging_MembershipLoyaltyProgram(records.get('MembershipSegmentCode'), records.get('Bilangan'), records.get('AyohaLoyaltyProgram'), records.get('LoyaltyProgramCode'));


                                                                },
                                                                deselect: function (list, records) {

                                                                }
                                                            },


                                                            width: '100%',


                                                        },
                                                     ]
                                                 },






                                                         {
                                                             xtype: 'container',
                                                             width: '95%',
                                                             height: 400,
                                                             style: 'background-color: transparent;',
                                                         },




                                   //    ]
                                   //},

                               ]
                           },
                      




                       


                          {

                              xtype: 'container',
                              width: '100%',
                              docked: 'bottom',
                              hidden: true,
                              // width: 40,

                              //  title: '<font size="3" color="white">Live Tracking Map</font>',
                              //hidden: true,

                              id: 'containeFloatPanel_MerchantDetailPageReedemVoucerBottom',
                              //    style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9)',
                              style: 'background-color:transparent;',

                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                              // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                              layout: {
                                  type: 'vbox',
                                  pack: 'center',
                                  align: 'center',
                              },
                              // hidden:true,
                              items:
                                     [



                                         {

                                             xtype: 'container',

                                             width: 210,
                                             height: 40,
                                             margin: '0 0 0 0',
                                             name: 'containeFloatPanel_MerchantDetailPageRedeemVoucher',
                                             //style: {
                                             //    // background: '#D25959',
                                             //    background: 'rgba(76, 175, 80, 0.3);',
                                             //    // border: '2px'
                                             //},
                                             style: 'background-color:transparent;',
                                             // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;',

                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: yellow;border-radius: 20px 20px 20px 20px;',
                                             //style: 'border-right:4px solid black;border-left:4px solid black;border-bottom:4px solid black;border-top:4px solid black;background: yellow;border-radius: 20px 20px 20px 20px;',
                                             //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 20px 20px;',
                                             layout: {
                                                 type: 'hbox',
                                                 pack: 'center',
                                                 align: 'center',
                                             },
                                             items: [

                                                 //{
                                                 //    margin: '0 0 0 0',
                                                 //    html: '<img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 10px;">',

                                                 //},

                                                 {
                                                     margin: '0 0 0 0',
                                                     //  html: '<font size=2 color=white><b>Confirm and Join Contest</b></font>',
                                                     html: '<div class="blink_me" style="background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 20px 20px 20px 20px;border:2px solid #fac;text-align:center;margin:0px 0px 0px 0px;height:40px;width:200px"><div style="color:white;text-align: center;font-size:14px;width:100%;margin:8px 0px 0px 0px;"><b>Redeem Voucher</b></div></div>'

                                                 },
                                                   //{
                                                   //    margin: '8 0 0 0',
                                                   //    html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 10px;">',
                                                   //}


                                             ]
                                         },



                                         {
                                             xtype: 'container',
                                             width: 210,
                                             height: 10,
                                             style: 'background-color:transparent;',
                                         }



                                     ]

                          },



                ]

            },






        });

    return _FloatPanel_MerchantDetailPage;
}



var FloatPanel_MerchantPageDetail;
var globalFloatPanelMerchantDetailPage_ID;
var globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
var globalFloatPanel_MerchantDetailPage_EnterpriseFacebook;
var globalFloatPanel_MerchantDetailPage_EnterpriseWebsite;
var globalFloatPanel_MerchantDetailPage_EnterpriseInstagram;
var globalFloatPanel_MerchantDetailPage_EnterpriseTikTok;
var globalFloatPanelMerchantDetailPage_EnterpriseLogo;
var globalFloatPanelMerchantDetailPage_EnterpriseName;
var globalFloatPanelMerchantDetailPage_EnterpriseTagLine;
var globalFloatPanelMerchantDetailPage_EnterpriseCoordinate;
var globalFloatPanelMerchantDetailPage_BusinessMode;
var globalFloatPanelMerchantDetailPage_WhatsAppNo;




var globalFloatPanelMerchantDetailPage_NamaJalan;
var globalFloatPanelMerchantDetailPage_Postkod;
var globalFloatPanelMerchantDetailPage_Bandar;
var globalFloatPanelMerchantDetailPage_Negeri;
var globalFloatPanelMerchantDetailPage_EnterpriseDescriptions;
var globalFloatPanelMerchantDetailPage_EnterprisePhoneNo;



var OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging;
var OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging;
var OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging;

function FloatPanel_MerchantDetailPageShow(ID,EnterpriseAccNo, EnterpriseLogoPath,EnterpriseName, EnterpriseTagLine,
    NamaJalan, Postkod, Bandar, Negeri, EnterpriseCoordinate, EnterpriseDescriptions, EnterprisePhoneNo, PICContactNo, EnterpriseFacebook, EnterpriseWebsite, EnterpriseInstagram, EnterpriseTikTok, BusinessMode) {
    Ext.Viewport.remove(_FloatPanel_MerchantDetailPage);
    this.overlay = Ext.Viewport.add(FloatPanel_MerchantDetailPage());
    this.overlay.show();
    FloatPanel_MerchantPageDetail = Ext.getCmp('CarouselFloatPanel_MerchantDetailPage');
    AddRoutePages("FloatPanel_MerchantDetailPageHide()");

    OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
    OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
    OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
    countLikeDislikeTap = 0;
    is_FloatPanel_MerchantDetailPageOpen = 'Y';
    globalFloatPanelMerchantDetailPage_ID = ID;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanelMerchantDetailPage_EnterpriseLogo = EnterpriseLogoPath;
    globalFloatPanelMerchantDetailPage_EnterpriseName = EnterpriseName;
    globalFloatPanelMerchantDetailPage_EnterpriseTagLine = EnterpriseTagLine;
    globalFloatPanel_MerchantDetailPage_EnterpriseFacebook = EnterpriseFacebook;
    globalFloatPanel_MerchantDetailPage_EnterpriseWebsite = EnterpriseWebsite;
    globalFloatPanel_MerchantDetailPage_EnterpriseInstagram = EnterpriseInstagram;
    globalFloatPanel_MerchantDetailPage_EnterpriseTikTok = EnterpriseTikTok;
    globalFloatPanelMerchantDetailPage_EnterpriseCoordinate = EnterpriseCoordinate;
    globalFloatPanelMerchantDetailPage_BusinessMode = BusinessMode;
    globalFloatPanelMerchantDetailPage_WhatsAppNo = PICContactNo;
    globalFloatPanelMerchantDetailPage_NamaJalan=NamaJalan;
    globalFloatPanelMerchantDetailPage_Postkod=Postkod;
    globalFloatPanelMerchantDetailPage_Bandar=Bandar;
    globalFloatPanelMerchantDetailPage_Negeri=Negeri;
    globalFloatPanelMerchantDetailPage_EnterpriseDescriptions=EnterpriseDescriptions;
    globalFloatPanelMerchantDetailPage_EnterprisePhoneNo=EnterprisePhoneNo;

    //  globalDashboard_AyohaHotMerchant_EnterpriseAccNo = EnterpriseAccNo;
    localStorage.setItem("globalFloatPanelMerchantDetailPage_ID", ID);

    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanelMerchantDetailPage";
    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_MerchantDetailPage"
    
    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLogo').setHtml('<div ><img src="' + EnterpriseLogoPath + '" width="30" height="30" alt="Company Name"></div>');
    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_Logo').setHtml('<div ><img src="' + EnterpriseLogoPath + '" width="100%" height="90" alt="Company Name"></div>');
   
    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseName_TagLine').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"><i>' + EnterpriseTagLine + '</i></div>');
    
    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseDescription').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;padding:0px 7px;">' + EnterpriseDescriptions + '</div>');
    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseContactDetails').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;"><a href="tel:' + EnterprisePhoneNo + '">' + EnterprisePhoneNo + '</a></div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Contact No</div>');
    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWhatsAppDetails').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenWhatsApp()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + PICContactNo + '</div><br><div onclick="FloatPanelMerchantDetailPage_OpenWhatsApp()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">WhatsApp Contact No</div>');

    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseName').setHtml('<div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 17px;font-weight:bold;color:black;margin:5px 0px 0px 0px">' + EnterpriseName + '</div><br><div style="width:100%;background-color: transparent;text-align:right;border: 1px none white;font-family:Century Gothic;font-size: 11px;font-weight:normal;color:black;margin:-27px 0px 0px 0px">' + EnterpriseTagLine + '</div>');

    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseInfo_EnterpiseInfoExtended_EnterpriseFullAddress').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10.5px;font-weight:normal;color:black;padding:0px 6px;">' + NamaJalan + ',' + Postkod + ' ' + Bandar + ', '+ Negeri +'.</div>');

    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date();
    var day = weekday[d.getDay()];

    if (globalFloatPanel_MerchantDetailPage_EnterpriseFacebook != 'NA') {
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_FB').setHidden(false);

    }
    if (globalFloatPanel_MerchantDetailPage_EnterpriseWebsite != 'NA') {
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Website').setHidden(false);
    }
    if (globalFloatPanel_MerchantDetailPage_EnterpriseInstagram != 'NA') {
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Insta').setHidden(false);
    }
    if (globalFloatPanel_MerchantDetailPage_EnterpriseTikTok != 'NA') {
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_TikTok').setHidden(false);
    }
  
  

    if (BusinessMode == 'Online') {
        // Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(true);
        // Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);
        // FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo, day);


      
        Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(false);
        Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(true);
        FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo, BusinessMode);
        return
    } else
    if (BusinessMode == 'InPremise') {
        Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(true);
        Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);
        FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo, day);
        return
    } 
    else {
        FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo, day);
        Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore').setHidden(false);
        Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);


       
    }

   
   
 

   

    // if (globalFloatPanelMerchantDetailPage_EnterpriseCoordinate != 'NA') {
    //     Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(false);

    // } else {
    //     Ext.getCmp('containerFloatPanel_MerchantDetailPage_EnterpriseInfo_Direction').setHidden(true);

    // }






    //var containerViewnamecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore')[0];
    //var containerViewElnamecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore = containerViewnamecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore.element;
    //containerViewElnamecontainerFloatPanel_MerchantDetailPage_EnterpriseInfo_OnlineStore.on('tap',
    //  function (event, node, options, eOpts) {
    //      FloatPanelMerchantDetailPage_AyohaStore();
    //  }
    //);


   
    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
    //  $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    //   // $('#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').slideUp();
    //   // $('#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').hide();
    //    Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(true);
    //});
   
   
   // LoadingPanelHide();
   
}


function FloatPanel_MerchantDetailPageHide() {

    if (is_FloatPanel_MerchantDetailPageOpen == 'Y') {
        _FloatPanel_MerchantDetailPage.hide();
        FloatPanel_ScannedMerchantHide();
        is_FloatPanel_MerchantDetailPageOpen = 'N';
        RemovePages("FloatPanel_MerchantDetailPageHide()");
        FloatPanel_AyohaStore_LikeDislikeStore_Save();
        // swalFireSuccessStampedCardMsg("Stamped Success!!");
    }

}

function FloatPanel_AyohaStore_EnterprisesCheckIn () {
    var payload = {
      EnterpriseAccNo: FloatPanel_AyohaStore_getEnterpriseAccNo(),
      SubscriberAccNo: GetCurrAyohaUserAccountNo()
    };
  
    Ext.Ajax.request({
      method: 'POST',
      url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_CanCheckIn',
      jsonData: payload,
      success: function (result) {
        var data = Ext.decode(result.responseText.trim() || '{}');
  
        if (data.success === true || data.success === 'true') {
          var count = parseInt(data.results[0].CanCheckIn, 10) || 0;
          var CheckInCount = (parseInt(data.results[0].CheckInCount, 10) || 0) + 1;
  
          var RelativeCheckInTime = data.results[0].RelativeCheckInTime || '';
          var AccumulateTotalCheckIn = parseInt(data.results[0].AccumulateTotalCheckIn, 10) || 0;
  
          var logo    = FloatPanel_AyohaStore_getEnterpriseLogo();
          var eName   = FloatPanel_AyohaStore_getEnterpriseName();
          var etagline= FloatPanel_AyohaStore_getEnterpriseTagLine();
  
          // If can check in now, open the panel immediately
          if (count == 1) {
            FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
            //Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>');     
                
            var containerViewnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn]')[0];
            var containerViewElnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn = containerViewnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn.element;
            containerViewElnamecontainerFloatPanel_MerchantDetailPage_EnterpriseCheckIn.on('tap',
              function (event, node, options, eOpts) {
           
                FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
              }
            );
          }
          if(count==0){
           

            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>');     
        

           return
         
        }
          var cmp = Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails');
  
          if (RelativeCheckInTime) {
            // Show last check-in info
            cmp.setHtml(
              '<div style="width:100%;text-align:left;font-family:Century Gothic;font-size:12px;font-weight:bold;color:#000;padding:0 6px;">'
                + Ext.String.htmlEncode(RelativeCheckInTime) +
                ' - Total Check-In (' + AccumulateTotalCheckIn + ') X Times</div>' +
              '<br>' +
              '<div style="width:100%;text-align:left;font-family:Century Gothic;font-size:10px;color:#000;margin:-27px 0 0 0;padding:0 6px;">Last Check-In</div>'
            );
          } else {
            // Build a tappable "Check-In Now" button and delegate the tap
            var checkInButtonId = Ext.id(null, 'checkin-btn-');
            var buttonHtml =
              '<div id="' + checkInButtonId + '" ' +
                'class="example-5" style="display:inline-flex;align-items:center;gap:6px;padding:8px 12px;' +
                       'background:linear-gradient(90deg,#c800ffc9,#ff00de75);color:#fff;border:2px solid #fac;' +
                       'border-radius:18px;box-shadow:0 12px 28px rgba(0,0,0,.28);cursor:pointer;' +
                       'font:600 10px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;">' +
                'Check-In Now!</div>' +
              '<br><div style="height:6px;"></div>';
  
            cmp.setHtml(buttonHtml);
  
            // Delegate 'tap' (works better for Sencha Touch/modern builds; falls back to click on desktop)
            Ext.defer(function () {
              if (!cmp || !cmp.rendered) return;
  
              var evtName = (Ext && Ext.os && Ext.os.is && (Ext.os.is.Android || Ext.os.is.iOS)) ? 'tap' : 'click';
              cmp.getEl().on(evtName, function () {
                FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
              }, null, { delegate: '#' + checkInButtonId });
            }, 10);
          }
 
          Ext.Viewport.unmask();
        } else {
          swalFireFail('Fail! -> ' + (result.responseText || '').trim());
          LoadingPanelHide();
          Ext.Viewport.unmask();
        }
      },
      failure: function (result) {
        swalFireFail('Fail! ' + (result.responseText || '').trim());
        LoadingPanelHide();
        Ext.Viewport.unmask();
      }
    });
  }
  
function  FloatPanel_AyohaStore_EnterprisesCheckInXX(){

    var objn = {
        "EnterpriseAccNo": FloatPanel_AyohaStore_getEnterpriseAccNo(),
         "SubscriberAccNo":GetCurrAyohaUserAccountNo()
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_CanCheckIn',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

              var count=parseInt(data.results[0].CanCheckIn);
              var CheckInCount=parseInt(data.results[0].CheckInCount) + 1;


              var RelativeCheckInTime=data.results[0].RelativeCheckInTime;
              var AccumulateAyohaRewardPointCheckIn=parseInt(data.results[0].AccumulateAyohaRewardPointCheckIn);
              var AccumulateTotalCheckIn=parseInt(data.results[0].AccumulateTotalCheckIn);
              var logo =FloatPanel_AyohaStore_getEnterpriseLogo();
              var eName =FloatPanel_AyohaStore_getEnterpriseName();
              var etagline =FloatPanel_AyohaStore_getEnterpriseTagLine();
              if(count==1){
           

                FloatPanel_Membership_CheckInPageShow(logo,eName,etagline,CheckInCount);
               
                
             
            }
            if(count==0){
           

                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:red;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In(Exceed Check-In Limit Today) Please Check-In Tommorow Okay!</div>');     
            

               return
             
            }
              
      
           if(RelativeCheckInTime){
            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails').setHtml('<div  style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">'+ RelativeCheckInTime +'-Total Check-In ('+AccumulateTotalCheckIn+')X Times</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Last Check-In</div>');     
            
          // ... inside your 'success' function ...

       // ... inside your 'success' function ...

    } else {

        // -----------------
        // --- REVISED FIX ---
        // -----------------

        // 1. Create a unique ID for your button
        var checkInButtonId = 'my-check-in-button-' + Ext.id();

        // 2. Create the HTML string. Note the "id" attribute and NO "onClick".
        var buttonHtml = '<div id="' + checkInButtonId + '" class="example-5" style="display:inline-flex;align-items:center;gap:5px;padding:6px 9px;background-color: #fac;background-image: linear-gradient(#c800ffc9, #ff00de75);color:#fff;text-decoration:none;border-radius:999px;font:400 10px/1 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;letter-spacing:.2px;border:2px solid #fac; border-radius: 18px; box-shadow: 0 12px 28px rgba(0,0,0,.28); cursor:pointer;">Check-In Now!</div>' + 
                         '<br>' + 
                         '<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;"></div>';

        
        // 3. Get the component reference *first*
        var panel = Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails');
        
        // --- DEBUG: Check if panel exists ---
        if (!panel) {
           console.error("Could not find component 'htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails'");
           return; // Stop if we can't find the panel
        }
        // --- End Debug ---

        // 4. Set the HTML
             panel.setHtml(buttonHtml); 
        
        // 5. Use Ext.Function.defer to wait for the DOM to be updated
        //    (1000ms is very long, but I am keeping it from your code. 
        //     You could try 100ms or 200ms here.)
            Ext.Function.defer(function() {
           
           // 6. Get the component's main element
           var panelEl = panel.getEl(); 

           // --- DEBUG: Check if panel element is rendered ---
           if (panelEl) {
               // 7. Find the button *WITHIN* the panel's element
               //    This is the key change! We use .down()
               var checkInButtonEl = panelEl.down('#' + checkInButtonId); 

               // --- DEBUG: Check if button was found ---
               if (checkInButtonEl) {
                   // 8. Add the click listener
                   checkInButtonEl.on('click', function() {
                       // The variables are passed safely
                       FloatPanel_Membership_CheckInPageShow(logo, eName, etagline, CheckInCount);
                   });
               } else {
                   console.warn("DEBUG: Could not find button #" + checkInButtonId + " *inside* the panel.");
               }
               // --- End Debug ---

           } else {
                console.warn("DEBUG: Panel 'htmlFloatPanel_MerchantDetailPage_EnterpriseCheckInDetails' has no element (getEl() returned null). Is it hidden or not rendered?");
           }
           // --- End Debug ---

        }, 1000); // Using the 1000ms from your code.

      }
           
           
           
           
           
           
           
           
          
          


            }
            else {
               
               swalFireFail("Fail!->" + result.responseText.trim());
               LoadingPanelHide();
                Ext.Viewport.unmask();
              
            }

              

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
           
            swalFireFail("Fail!" + result.responseText.trim());
            Ext.Viewport.unmask();
            LoadingPanelHide();
        }

    });
}


function FloatPanelMerchantDetailPage_OpenDirection() {



    var Coordinate = globalFloatPanelMerchantDetailPage_EnterpriseCoordinate.split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];





    if (PlaceMarkerlat) {
        if (PlaceMarkerlng) {
            window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;
        } else {

            swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this setting!", "Location");
        }
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Location Coordinate.,Help merchant to know this Message!", "Location");
    }
}

function FloatPanelMerchantDetailPage_OpenWhatsApp() {
    


     if (globalFloatPanelMerchantDetailPage_WhatsAppNo) {
        // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
        //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
         window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanelMerchantDetailPage_WhatsAppNo + "&text=Hi " + globalFloatPanelMerchantDetailPage_EnterpriseName, '_system'); return false;
        // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
    } else {
        swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
    }
}




function FloatPanelMerchantDetailPage_OpenMerchantReview() {
    //var IDS = localStorage.getItem("globalFloatPanelMerchantDetailPage_ID");
    //AyohaMerchantReviewShow(IDS);
    AyohaMerchantReviewShow_FromFloatPanel_MerchantDetailPage();

    
}



function FloatPanel_MerchantDetailPage_OpenFB() {
    setTimeout(function () { window.open("fb://page/" + globalFloatPanel_MerchantDetailPage_EnterpriseFacebook + "", '_system'); return false; }, 25);
}
function FloatPanel_MerchantDetailPage_OpenTikTok() {
    window.open(globalFloatPanel_MerchantDetailPage_EnterpriseTikTok, '_system'); return false;
}
function FloatPanel_MerchantDetailPage_OpenInsta() {
    setTimeout(function () { window.open("instagram://user?username=" + globalFloatPanel_MerchantDetailPage_EnterpriseInstagram + "", '_system'); return false; }, 25);
}
function FloatPanel_MerchantDetailPage_OpenWebsite() {
    window.open(globalFloatPanel_MerchantDetailPage_EnterpriseWebsite, '_system'); return false;
}


function FloatPanel_MerchantDetailPage_OpenStore(eStoreName, eStoreURL) {

   // alert(eStoreName);
    // globalDashboard_AyohaHotMerchant_EnterpriseAccNo

    if (eStoreURL != "AyohaStore") {
        window.open(eStoreURL, '_system'); return false;
        return
    } else {
        FloatPanelMerchantDetailPage_AyohaStore();
       // FloatPanel_AyohaHotMerchant_OnlineStoreListHide();
    }


}

function FloatPanelMerchantDetailPage_AyohaStore() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanelMerchantDetailPage";

 //  LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';






    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo); 
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                var Store = records[0]; // Access only the first record
                var ID = Store.get('ID');
                FloatPanel_RewardStore_OpenStore_FromFloatPanelMerchantDetailPage_OnlineStoreList(ID);
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });










    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo); 
    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    // _DataStore_EnterprisesLoadByMerchantCategory.load();

    // console.log(globalFloatPanelMerchantDetailPage_EnterpriseAccNo)
    // console.log(GetCurrAyohaUserAccountNo())


    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     //_DataStore_EnterprisesLoadByMerchantCategory.load();
    //     var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
    //     var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
    //     var ID = Store.get('ID');
    //   //  FloatPanel_OrderCartHide();
    //     FloatPanel_RewardStore_OpenStore_FromFloatPanelMerchantDetailPage_OnlineStoreList(ID);
    
    //     LoadingPanelHide();
        

    // });
    // task.delay(500);


    // Ext.Viewport.setMasked(false);
}

var globalFloatPanelMerchantDetailPage_CountMembershipCard;
var globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height;
function FloatPanelMerchantDetailPage_EnterprisesCoverMediaLoadByEnterpriseAccNoStore(EnterpriseAccNo,day) {

    var Stores;
    var counter = 1;


console.log(EnterpriseAccNo)
console.log(day)
console.log(GetCurrAyohaUserAccountNo())
     _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.removeAll();
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setExtraParam('Today', day);
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/EnterprisesCoverMedia/EnterprisesCoverMediaLoadByEnterpriseAccNo');
    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.load();
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccNo;
    globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = 0;

    _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
              //  var Store = records[0]; // Access only the first record
                var count = parseInt(_DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getCount());
                //   alert("count: " + count);
            
                    if (count > 0) {
                       
                        for (i = 0; i < count; i++) {
                            Stores = _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getAt(i);
                            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHidden(false);
                            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHtml('<img src="' + Store.get('ImgPath') + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');
                
                            FloatPanel_MerchantPageDetail.add({ xtype: 'image', src: Stores.get('CoverMediaUrl'), height: '96%', width: '100%', mode: 'image' });
                            counter++;
                        }
                    }
            
            
                    
            
            
            
                    var Store = _DataStore_EnterprisesCoverMediaLoadByEnterpriseAccNoStore.getAt(0);
                    if (count > 0) {
                    if(Store.get('CountLike')){
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('CountLike') + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
                        globalFloatPanel_AyohaStore_CountLike = parseInt(Store.get('CountLike'));
                       // globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = parseInt(Store.get('CountMembershipCard')) * 400;
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Membership Card (' + Store.get('CountMembershipCard') + ')</b></font></div>');
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt').setHtml('<div onclick="OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Online Store (' + Store.get('CountOnlineStore') + ')</b></font></div>');
                    
                    }
                }
            
          
                    if (globalFloatPanelMerchantDetailPage_BusinessMode == "Online") {
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">Open 24/7 (Open Now)</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
            
                    } else {
            
                        var today = new Date();
                        var time = today.getHours() + "." + today.getMinutes();
                        var TutupBuka;
                        var isWorkingDay = Store.get('isWorkingDay');
                        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        var d = new Date();
                        var day = weekday[d.getDay()];
            
                        if (isWorkingDay == "Y") {
                            var PremiseOpenTime = Store.get('WorkingHourStart').replace(".", ":") + " " + Store.get('WorkingHourStartAMPM');
                            var PremiseCloseTime = Store.get('WorkingHourEnd').replace(".", ":") + " " + Store.get('WorkingHourEndAMPM');
            
            
                            var OpenModified12Hour = parseFloat(convertTimeFrom12To24(PremiseOpenTime));
                            var ClosedModified12Hour = parseFloat(convertTimeFrom12To24(PremiseCloseTime));
                            var MasaSekarang = parseFloat(time);
            
                            if ((MasaSekarang > OpenModified12Hour) && (MasaSekarang < ClosedModified12Hour)) {
            
                                TutupBuka = "Open Now";
                            } else {
                                TutupBuka = "Closed Now";
                            }
            
            
            
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + Store.get('WorkingHourStart') + Store.get('WorkingHourStartAMPM') + ' - ' + Store.get('WorkingHourEnd') + Store.get('WorkingHourEndAMPM') + ' (' + TutupBuka + ')</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
            
                        } else {
            
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails').setHtml('<div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + day + ' (Off Day/Holiday)</div><br><div onclick="FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Business Hour</div>');
                        }
            
                       
                    }
            
            
                    
                    
                  
            
            
            
                   
                    //Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipCard_Txt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Membership Card (' + Store.get('CountMembershipCard') + ')</div>');
                    //Ext.getCmp('htmlFloatPanel_MerchantDetailPage_OnlineStore_Txt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 0px;">Our Online Store (' + Store.get('CountOnlineStore') + ')</div>');
            
            
            
                    
            
            
            
                    globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = Store.get('CountOnlineStore') * 80;
            
                    globalFloatPanelMerchantDetailPage_MembershipCard_tinggi = Store.get('CountMembershipCard') * 300;
            
                  
                  
            
                    if (Store.get('isLikeStatus') == "Y") {
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>');
                       
                    }
                    if (Store.get('isLikeStatus') == "N") {
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>');
                       
                    }
            
            
                    
            


                    // Assuming your functions return a Promise (like fetch, axios, etc.)

                  
            
            
                    FloatPanelMerchantDetailPage_CalculateRating(EnterpriseAccNo);
                    FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore();
                    FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore();
                    FloatPanel_AyohaStore_EnterprisesCheckIn();                 
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });






    // var task = Ext.create('Ext.util.DelayedTask', function () {

     
        


    // });
    // task.delay(500);


    // Ext.Viewport.setMasked(false);
}




function convertTimeFrom12To24(timeStr) {
    var colon = timeStr.indexOf(':');
    var hours = timeStr.substr(0, colon),
        minutes = timeStr.substr(colon + 1, 2),
        meridian = timeStr.substr(colon + 4, 2).toUpperCase();


    var hoursInt = parseInt(hours, 10),
        offset = meridian == 'PM' ? 12 : 0;

    if (hoursInt === 12) {
        hoursInt = offset;
    } else {
        hoursInt += offset;
    }
    return hoursInt + "." + minutes;
}
var globalFloatPanelMerchantDetailPage_CountStar;
var globalFloatPanelMerchantDetailPage_CountReviewer;
function FloatPanelMerchantDetailPage_CalculateRating(EnterpriseAccNo) {
   



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNo
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRating',

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
                        FiveStar = data.results[0].FiveStar;
                        FourStar = data.results[0].FourStar;
                        ThreeStar = data.results[0].ThreeStar;
                        TwoStar = data.results[0].TwoStar;
                        OneStar = data.results[0].OneStar;
                        TotalStar = data.results[0].TotalStar;
                        TotalVoter = data.results[0].TotalVoter;
                        VoteFiveStar = data.results[0].VoteFiveStar;
                        VoteFourStar = data.results[0].VoteFourStar;
                        VoteThreeStar = data.results[0].VoteThreeStar;
                        VoteTwoStar = data.results[0].VoteTwoStar;
                        VoteOneStar = data.results[0].VoteOneStar;


                        var TotalAvg = (VoteFiveStar + VoteFourStar + VoteThreeStar + VoteTwoStar + VoteOneStar) / TotalVoter;
globalFloatPanelMerchantDetailPage_CountStar=TotalAvg;
globalFloatPanelMerchantDetailPage_CountReviewer=TotalVoter;
                        if (TotalAvg) {

                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_ReviewAndRateCount').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');

                        } else {
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_ReviewAndRateCount').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                        }

                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_ReviewByCount').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();" style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:8px;color:black;font-weight:bold;overflow:hidden;"><img src="resources/icons/myaccountwhite01.png" alt="Image" style="width:7px;height:7px;">&nbsp;' + TotalVoter + ' Reviews</div>');

                        //  Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp; Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);
                        globalFloatPanelMerchantDetailPage_CountReviewer= TotalVoter;
                        globalFloatPanelMerchantDetailPage_CountStar=TotalAvg.toFixed(1);
                      

                        if (RateReviews == 5) {

                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointThree.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointFive.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointSeven.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/star.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/StarpointNine.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star1').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star2').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star3').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star4').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_Star5').setHtml('<div onclick="FloatPanelMerchantDetailPage_OpenMerchantReview();"><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>');


                        }

























                       
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




var globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount;
var globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi;

var globalFloatPanelMerchantDetailPage_MembershipCardCount;
var globalFloatPanelMerchantDetailPage_MembershipCard_tinggi;
function FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore() {



   
    _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/EnterprisesOnlineStore/EnterprisesOnlineStoreLoadByEnterpriseAccNo');
    _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.load();

    _DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
               
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });







    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = parseInt(_DataStore_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore.getCount());
    //   //  globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount = count;

    //    // globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = count * 80;

       





    // // FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();

    // });
    // task.delay(500);


    // Ext.Viewport.setMasked(false);
}

var globalFloatPanelMerchantDetailPage_MembershipCardCode;
function FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore() {


var counting=parseInt(ArrFloatPanelMerchantDetailPage_MembershipCardCode.length);

if(counting<=0){
    return;
}

    var MCC;
    var i;
    for (i = 0; i < ArrFloatPanelMerchantDetailPage_MembershipCardCode.length; i++) {
        MCC +=ArrFloatPanelMerchantDetailPage_MembershipCardCode[i]+",";
    }

    var ModifiedMCC = MCC.replace("undefined", "");
    var strMCC = ModifiedMCC.slice(0, -1);
    globalFloatPanelMerchantDetailPage_MembershipCardCode= strMCC;
   


    _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getProxy().setExtraParam('MembershipCardCode', strMCC);
    _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantInfo_MembershipLoyaltyProgram/AyohaMerchantInfoMembershipLoyaltyProgram');
    _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getCount());
        //  globalFloatPanelMerchantDetailPage_EnterprisesOnlineStoreCount = count;

        // globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi = count * 80;
        var TotalLoyaltyProgram = 0;
        for (i = 0; i < count; i++) {
            var Store = _DataStore_AyohaMerchantInfoMembershipLoyaltyProgramStore.getAt(i);
            TotalLoyaltyProgram +=parseInt (Store.get('Bilangan'))

        }


       
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt').setHtml('<div onclick="OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Loyalty Program (' + TotalLoyaltyProgram + ')</b></font></div>');

       
        // FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();

    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown() {

   
    
    $("#containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner").animate({
        height: '+=' + globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height + 'px',
        speed: "fast",
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHidden(false);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHeight(globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height);
        Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipLoyaltyProgramID').setHeight(globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height);
       
        LoadingPanelHide();

    });
}


function FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp() {

  

    $("#containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner").animate({
        height: '-=' + globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height + 'px',
        speed: "fast",
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHidden(true);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Inner').setHeight(0);
        Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipLoyaltyProgramID').setHeight(0);


    });
}













function FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown() {


    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").slideToggle("slow");
    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");

    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
    //    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    //});


    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").animate({
        height: '+=' + globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi + 'px',
        speed:"fast",
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(false);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHeight(globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi);
        Ext.getCmp('FloatPanel_MerchantDetailPage_OnlineStoreList').setHeight(globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi);
       

    });
}






function FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp() {



    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").animate({
        height: '-=' + globalFloatPanelMerchantDetailPage_EnterprisesOnlineStore_tinggi + 'px',
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHidden(true);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_OnlineStore_Inner').setHeight(0);
        Ext.getCmp('FloatPanel_MerchantDetailPage_OnlineStoreList').setHeight(0);

    });
}





var ArrFloatPanelMerchantDetailPage_MembershipCardCode=[];

function FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore() {
    globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height=0;
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseHQAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo');
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                // Loop through all records
                records.forEach(function (record) {
                    var LoyaltCampaignCount = parseInt(record.get('LoyaltCampaignCount'));
                    globalFloatPanelMerchantDetailPage_MembershipCardCode = record.get('MembershipCardCode');
                    globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = record.get('MembershipCardCode');
                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt').setHtml('<div onclick="OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt()" style="width:100%;background-color:transparent;"><font size=2 color=white><b>Our Loyalty Program (' + LoyaltCampaignCount + ')</b></font></div>');
                    globalFloatPanelMerchantDetailPage_MembershipLoyaltyProgramPanel_Height = LoyaltCampaignCount * 100;
                  
                });
              
                FloatPanelMerchantDetailPage_CartTotalItemQuantity();
               
            } else {
                console.error('Failed to load store data.');
              
            }
        }
    });

return;












    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseHQAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNo');
    _DataStore_MembershipCardLoadByEnterpriseAccNoStore.load();
    ArrFloatPanelMerchantDetailPage_MembershipCardCode.length=0;

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_MembershipCardLoadByEnterpriseAccNoStore.getCount());
        
        for (i = 0; i < count; i++) {
          var  Store = _DataStore_MembershipCardLoadByEnterpriseAccNoStore.getAt(i);
            ArrFloatPanelMerchantDetailPage_MembershipCardCode.push(Store.get('MembershipCardCode'))
        }

       



       
       
       
       
        FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore();

        // FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
       
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}


function FloatPanelMerchantDetailPage_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore(){



// Set parameter dan URL API
//_DataStore_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore;
_DataStore_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore.getProxy().setExtraParams({
    'EnterpriseAccNo': globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
    'SubscriberAccNo': GetCurrAyohaUserAccountNo()
});
_DataStore_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore.getProxy().setUrl(GetAPIurl() + 'MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPage');

// Load data dengan callback
_DataStore_MembershipCardCampaingEntitledLoadByEnterpriseAccNoMerchantDetailPageStore.load({
    callback: function(records, operation, success) {
        // Remove loading mask
        Ext.Viewport.setMasked(false);

        if (success) {
           // alert('Data loaded successfully:'+ records);
            // Lakukan apa-apa selepas data dimuat
        } else {
            console.error('Failed to load data.');
           // Ext.Msg.alert('Error', 'Gagal untuk muatkan data.');
        }
    }
});



}





function FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown() {


    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").slideToggle("slow");
    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");

    //$("#containeFloatPanel_MerchantDetailPage_OnlineStore_HeaderTxt").click(function () {
    //    $("#containeFloatPanel_MerchantDetailPage_OnlineStore_Inner").slideToggle("slow");
    //});

    console.log(globalFloatPanelMerchantDetailPage_MembershipCard_tinggi);
    $("#containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner").animate({
        height: '+=' + globalFloatPanelMerchantDetailPage_MembershipCard_tinggi + 'px',
        speed: "slow",
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHidden(false);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHeight(globalFloatPanelMerchantDetailPage_MembershipCard_tinggi);
        Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipcardOfferedID').setHeight(globalFloatPanelMerchantDetailPage_MembershipCard_tinggi);


    });
}






function FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp() {



    $("#containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner").animate({
        height: '-=' + globalFloatPanelMerchantDetailPage_MembershipCard_tinggi + 'px',
        speed: "fast",
    }, 500, function () {
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHidden(true);
        Ext.getCmp('containeFloatPanel_MerchantDetailPage_MembershipcardOffered_Inner').setHeight(0);
        Ext.getCmp('ListFloatPanel_MerchantDetailPage_MembershipcardOfferedID').setHeight(0);

    });
}

function FloatPanel_MerchantDetailPage_EnterpriseWorkingHourDetails() {
    FloatPanel_AyohaMerchantInfo_BusinessHourShow();
}

function FloatPanel_MerchantDetailPage_Staging_MembershipLoyaltyProgram(MembershipSegmentCode, Bilangan, AyohaLoyaltyProgram, LoyaltyProgramCode) {
    
   
    var bil = parseInt(Bilangan);


    if (AyohaLoyaltyProgram == "Point Loyalty Card") {
        if (bil == 1) {
            globalFloatPanel_AyohaStore_Cart_StampPointCampaignCode = LoyaltyProgramCode;
            Scan_QRCode_VerifyQRCode_PointCampaign(globalFloatPanel_AyohaStore_Cart_StampPointCampaignCode);
        }
        if (bil > 1) {

        }
    }

    if (AyohaLoyaltyProgram == "Loyalty Event") {
        if (bil == 1) {
            FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoStore_Event1();
        }
        if (bil > 1) {
            FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoStore_Event2();
        }
    }



    if (AyohaLoyaltyProgram == "Loyalty Contest") {
        if (bil == 1) {
            FloatPanel_AyohaStore_AyohaRewardContestLoadBySubscriberAccNoEnterpriseAccNoStore_XX();
        }
        if (bil > 1) {
            FloatPanel_AyohaStore_MembershipContestListShow();
        }
    }

   
    if (AyohaLoyaltyProgram == "Loyalty Voucher") {
        if (bil == 1) {
            FloatPanel_AyohaRewardVoucherList_AyohaStoreShow();
        }
        if (bil > 1) {
            FloatPanel_AyohaRewardVoucherList_AyohaStoreShow();
        }
    }

    if (AyohaLoyaltyProgram == "Stamp Loyalty Card") {
     
        var EnterpriseAccNo = globalFloatPanelMerchantDetailPage_EnterpriseAccNo;
       
        var SubscriberAccNo = GetCurrAyohaUserAccountNo();
        // FloatPanel_AyohaeWallet_IconShow();
       
        if (bil == 1) {
            FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow(LoyaltyProgramCode, EnterpriseAccNo, SubscriberAccNo);
        }
        if (bil > 1) {
            FloatPanel_AyohaCardManagement_PreviewCard_FromQrCodeShow(LoyaltyProgramCode, EnterpriseAccNo, SubscriberAccNo);
        }
        LoadingPanelHide();
    }

}



function OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt() {

    if (OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging == 'slideUp') {
        OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideDown';
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(false);
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(true);
        FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideUp();
        return;
    }



    if (OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging == 'slideDown') {
        OnClickFloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_Txt_tagging = 'slideUp';
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropDown').setHidden(true);
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipLoyaltyProgram_DropUp').setHidden(false);
        FloatPanelMerchantDetailPage_AyohaMerchantInfoMembershipLoyaltyProgramStore_animatedAccordianSlideDown();
        return;
    }


}

function OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt() {

    if (OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging == 'slideUp') {
        OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideDown';
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(false);
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(true);
        FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
        return;
    }



    if (OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging == 'slideDown') {
        OnClickhtmlFloatPanel_MerchantDetailPage_OnlineStore_Txt_tagging = 'slideUp';
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropDown').setHidden(true);
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_OnlineStore_DropUp').setHidden(false);
        FloatPanelMerchantDetailPage_EnterprisesOnlineStoreLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();
        return;
    }

}

function OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt() {
    if (OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging == 'slideUp') {
        OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideDown';
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(false);
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(true);
        FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideUp();
        return;
    }



    if (OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging == 'slideDown') {
        OnClickhtmlFloatPanel_MerchantDetailPage_MembershipCard_Txt_tagging = 'slideUp';
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropDown').setHidden(true);
        Ext.getCmp('btn_FloatPanel_MerchantDetailPage_MembershipCard_DropUp').setHidden(false);
        FloatPanelMerchantDetailPage_MembershipCardLoadByEnterpriseAccNoStore_animatedAccordianSlideDown();

        return;
    }
}




function FloatPanel_MerchantDetailPage_LikeDislikeStore() {
   countLikeDislikeTap++;
   
    var likedislike = Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').getHtml();
 

   if (likedislike == '<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>') {
        countlikes = globalFloatPanel_AyohaStore_CountLike + 1;     
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + countlikes + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');      
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>');
        likedStatus = "Y";

        globalFloatPanel_AyohaStore_CountLike = countlikes;
        return;

   } if (likedislike == '<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();" ><img src="resources/icons/likeOn.png" width="100%" height="26" alt="Company Name"></div>') {
        countlikes = globalFloatPanel_AyohaStore_CountLike - 1;
        //Ext.getCmp('htmlFloatPanel_AyohaStore_LikeCount').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;"><b>' + countlikes + '</b></div>');
        //Ext.getCmp('htmlFloatPanel_AyohaStore_LikeIcon').setHtml('<div ><img src="resources/icons/unlovepurple.png" width="22" height="22" alt="Company Name"></div>');

        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsDetails').setHtml('<div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 14px;font-weight:bold;color:black;margin:0px 0px 0px 0px;padding:0px 6px;">' + countlikes + '</div><br><div onclick="FloatPanel_AyohaStore_LikeStatusListShow()" style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 10px;font-weight:normal;color:black;margin:-27px 0px 0px 0px;padding:0px 6px;">Love Us</div>');
        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_EnterpriseLoveUsIcon').setHtml('<div onclick="FloatPanel_MerchantDetailPage_LikeDislikeStore();"><img src="resources/icons/unlovepurple.png" width="100%" height="26" alt="Company Name"></div>');

        likedStatus = "N";

        globalFloatPanel_AyohaStore_CountLike = countlikes;

    }



}






function FloatPanelMerchantDetailPage_EnterprisesStageLoad(EnterpriseAccNo) {
   



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNo
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Enterprises/Enterprises_LoadByEnterpriseAccNo',

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
                       var ID = data.results[0].ID;
                       var EnterpriseHQAccNo = data.results[0].EnterpriseHQAccNo;
                       var EnterpriseAccNo = data.results[0].EnterpriseAccNo;
                       var EnterpriseName = data.results[0].EnterpriseName;
                       var EnterpriseAddress = data.results[0].EnterpriseAddress;
                       var EnterprisePhoneNo = data.results[0].EnterprisePhoneNo;
                       var EnterpriseRegistrationNo = data.results[0].EnterpriseRegistrationNo;
                       var EnterpriseEmail = data.results[0].EnterpriseEmail;
                       var  EnterpriseWebsite = data.results[0].EnterpriseWebsite;
                       var EnterpriseDescriptions = data.results[0].EnterpriseDescriptions;
                       var EnterpriseFacebook = data.results[0].EnterpriseFacebook;
                       var  EnterpriseTwiter = data.results[0].EnterpriseTwiter;
                       var EnterpriseInstagram = data.results[0].EnterpriseInstagram;
                       var EnterpriseCoordinate = data.results[0].EnterpriseCoordinate;
                       var EnterpriseLogoPath = data.results[0].EnterpriseLogoPath;
                       var EnterpriseLogoName = data.results[0].EnterpriseLogoName;
                       var EnterpriseName = data.results[0].EnterpriseName;
                       var EnterpriseAddress = data.results[0].EnterpriseAddress;
                       var EnterprisePhoneNo = data.results[0].EnterprisePhoneNo;
                       var PICContactNo = data.results[0].PICContactNo;
                       var PersonInCharge = data.results[0].PersonInCharge;
                       var EnterpriseType = data.results[0].EnterpriseType;
                       var EnterpriseBusinessType = data.results[0].EnterpriseBusinessType;
                       var CountStar = data.results[0].CountStar;
                       var Negeri = data.results[0].Negeri;
                       var NamaJalan = data.results[0].NamaJalan;
                       var Bandar = data.results[0].Bandar;
                       var Postkod = data.results[0].Postkod;
                       var BusinessMode = data.results[0].BusinessMode;
                       var BusinessTypeCode = data.results[0].BusinessTypeCode;
                       var BusinessTypeGroupCode = data.results[0].BusinessTypeGroupCode;
                       var BusinessTypeIconPath = data.results[0].BusinessTypeIconPath;
                       var BusinessTypeGroup = data.results[0].BusinessTypeGroup;
                       var MerchantLinkType = data.results[0].MerchantLinkType;
                       var EnterpriseTagLine = data.results[0].EnterpriseTagLine;
                       var AdvertisementCode = data.results[0].AdvertisementCode;
                  
                       


                        FloatPanel_MerchantDetailPageShow(ID, EnterpriseAccNo, EnterpriseLogoPath, EnterpriseName, EnterpriseTagLine,
                            NamaJalan,Postkod, Bandar, Negeri, EnterpriseCoordinate, EnterpriseDescriptions, EnterprisePhoneNo
                        , PICContactNo, EnterpriseFacebook, EnterpriseWebsite, EnterpriseInstagram, EnterpriseTwiter,BusinessMode
                        );

















                       
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
    task.delay(100);


}




function FloatPanelMerchantDetailPage_CartTotalItemQuantity() {
    var task = Ext.create('Ext.util.DelayedTask', function () {
        globalFloatPanelMerchantDetailPage_CartTotalItemQuantity=0;
        var objn = {
            'EnterpriseAccNo': globalFloatPanelMerchantDetailPage_EnterpriseAccNo,
            'SubscriberAccNo': GetCurrAyohaUserAccountNo()
        };
        console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartCartTotalItemQuantity',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());
                if (data.success == "true") {
                    if (data.total > 0) {
                      //  AppState.FloatPanel_MerchantDetailPage.cartTotalItemQuantity = data.results[0].TotalItemQuantity;
                        if(data.results[0].TotalItemQuantity){
                          ///  AppState.FloatPanel_MerchantDetailPage.cartTotalItemQuantity = data.results[0].TotalItemQuantity;                           
                           Ext.getCmp('htmlFloatPanel_MerchantDetailPage_CountbadgeText').setHtml('<div onClick="FloatPanel_AyohaStore_CartShow()" style="background: transparent;height:10px;font-size: 14px;font-weight:normal;color:black;text-align:center;"><b>'+data.results[0].TotalItemQuantity+'</b></div>');
                        }else{
                           // AppState.FloatPanel_MerchantDetailPage.cartTotalItemQuantity =0;
                            Ext.getCmp('htmlFloatPanel_MerchantDetailPage_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 14px;font-weight:normal;color:black;text-align:center;"><b>'+data.results[0].TotalItemQuantity+'</b></div>');
                        }
                       
                    }
                    if (data.total == 0) {
                      //  AppState.FloatPanel_MerchantDetailPage.cartTotalItemQuantity = 0;
                        Ext.getCmp('htmlFloatPanel_MerchantDetailPage_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 14px;font-weight:normal;color:black;text-align:center;"><b>'+data.results[0].TotalItemQuantity+'</b></div>');
                        Ext.Viewport.unmask();
                    }
                }
                else {
                  //  AppState.FloatPanel_MerchantDetailPage.cartTotalItemQuantity = 0;
                    Ext.getCmp('htmlFloatPanel_MerchantDetailPage_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 14px;font-weight:normal;color:black;text-align:center;"><b>'+data.results[0].TotalItemQuantity+'</b></div>');
                    Ext.Viewport.unmask();
                 
                }
            },

            failure: function (result, request) {
                //AppState.FloatPanel_MerchantDetailPage.cartTotalItemQuantity = 0;
                Ext.getCmp('htmlFloatPanel_MerchantDetailPage_CountbadgeText').setHtml('<div style="background: transparent;height:10px;font-size: 14px;font-weight:normal;color:black;text-align:center;"><b>'+data.results[0].TotalItemQuantity+'</b></div>');
                Ext.Viewport.unmask();
               
            }

        });



    });

    
    task.delay(500);


}