Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_SaleItemDetail', {
    requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
    ],
});


var _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime='N';




var _FloatPanel_AyohaStore_SaleItemDetail;

function FloatPanel_AyohaStore_SaleItemDetail() {

    _FloatPanel_AyohaStore_SaleItemDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_AyohaStore_SaleItemDetailID',
            requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
            ],
            // xtype: 'panel',
            //zIndex: 330,
            zIndex: 300,
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
            modal: false,
            //   hideOnMaskTap: true,
            //left: 10,
            //top:10,
            layout: {
                type: 'fit'
            },
            showAnimation: {
                type: 'popIn',
                duration: 150,
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
            //  style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',
            style: 'background-color:white;',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            //listeners: {
            //    initialize: function (c) {
            //        this.element.on({
            //            swipe: function (e, node, options) {
            //                //if (e.direction == "up") {
            //                //    FloatPanel_AyohaReward_RedemptionHistoryHide();
            //                //}
            //                if (e.direction == "left") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'left',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                } if (e.direction == "right") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'right',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                } if (e.direction == "up") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'up',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                }
            //                if (e.direction == "down") {
            //                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
            //                        type: 'slideOut',
            //                        direction: 'down',
            //                        easing: 'cubic-bezier(.7,0,.7,1)',
            //                        duration: 250

            //                    }));

            //                }
            //                is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
            //                RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
            //            }
            //        });
            //    }
            //},

          
            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color:transparent;',
               // style: 'background-color:rgba(0, 0, 0, 0.8);border-radius: 0px 0px 0px 0px;',
                // style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'center'
                },
                width: '100%',
                height: '100%',
               
                //  margin:'-10 0 0 -7',
                items: [


                    



                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        margin: '0 0 0 0',
                         style: 'background-color:transparent',
                      //  style: ' background-color:transparent;border-radius: 30px 30px 30px 30px;',
                        //  style: 'background-color:black',
                        //style: 'background-color:rgba(0, 0, 0, 0.5);border-radius: 0px 0px 0px 0px;',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                      
                        items: [
                                  //{
                                  //    xtype: 'container',
                                  //    width: '100%',
                                  //    id: 'containerFloatPanel_AyohaStore_SaleItemDetail_CaptionText',
                                  //    docked: 'bottom',
                                  //    // hidden:true,
                                  //    // margin: '-80 0 0 0',
                                  //    height: 75,
                                  //    style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                  //    layout: {
                                  //        type: 'vbox',
                                  //        pack: 'center',
                                  //        align: 'center'

                                  //    },
                                  //    items: [
                                  //        {
                                  //            id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_CaptionText',
                                  //            html: '<div style="color:white;text-align: center;font-size:13px;width:100%;font-weight:bold">Aslam cucu angah rahem..</div>',
                                  //        }
                                  //    ]
                                  //},



                                  /////////////////////

                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      // width: 40,
                                      //zIndex:-10,
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      //hidden: true,
                                      height: 50,
                                     // docked: 'top',
                                      id: 'containerFloatPanel_AyohaStore_SaleItemDetailHeader1',
                                      style: "background-color: transparent;",
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
                                                     xtype: 'button',
                                                     id: 'btnFloatPanel_AyohaStore_SaleItemDetailBack_1',
                                                     height: 50,
                                                     width: 55,
                                                     margin: '0 0 0 0',
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'left',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                         is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                         _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';
                                                         RemovePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
                                                         globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
                                                         FloatPanel_AyohaStore_ShareAndWhatsappHide();
                                                     }
                                                 },

                                                            {
                                                                xtype: 'spacer',

                                                            },

                                                           
//{
//    xtype: 'container',
//    zIndex:100,
//    height: 35,
//    width: 35,
//    margin: '-3 0 0 5',
//    id: 'containerFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadge',
//    name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart',
//    style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
//    layout: {
//        type: 'vbox',
//        pack: 'center',
//        align: 'center'

//    },
//    items: [

//{
//    margin: '-1 0 0 0',
//    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText',
//    html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
//},
//{
//    margin: '2 2 0 0',
//    // hidden: true,
//    width: 18,
//    height: 18,
//    html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:18px;height:18px;">',
//    // ui:'plain'
//},
//{
//    margin: '0 0 0 0',
//    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeTextItem',
//    hidden: true,
//    html: '<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>'
//},

//    ]
//},

                                                     //{
                                                     //    xtype: 'button',
                                                     //    id: 'btnbtnFloatPanel_AyohaStore_SaleItemDetailFakeButton',
                                                     //    height: 35,
                                                     //    width: 120,
                                                     //    zIndex: 100,
                                                     //    // badgeText:'0',
                                                     //    // iconCls: 'list',
                                                     //    margin: '0 -115 0 0',
                                                     //    //  html: '<div><img src="resources/icons/AyohaStoreWhite.png" width="25" height="25" alt="Company Name"></div>',
                                                     //    ui: 'plain',
                                                     //    handler: function () {
                                                     //        FloatPanel_AyohaStore_CartShow();
                                                     //    }
                                                     //},



                                                          {
                                                              xtype: 'container',
                                                              id: 'containerFloatPanel_AyohaStore_SaleItemDetailMyCart',
                                                              name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetailMyCartx',
                                                              hidden: true,
                                                              width: 110,
                                                              height: 30,
                                                              zIndex: 100,
                                                              margin: '0 0 0 0',
                                                              // hidden: true,
                                                              style: "background-color: transparent",
                                                              //style: "background-color: #F35B57;",
                                                             // style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background: white;border-radius: 10px 10px 10px 10px;',
                                                              layout: {
                                                                  type: 'hbox',
                                                                  pack: 'left',
                                                                  align: 'left'

                                                              },
                                                              items: [

                                                                  {
                                                                      xtype: 'panel',
                                                                      width: 5
                                                                  },

                                                                  
                                                                  {
                                                                      margin: '5 0 0 0',
                                                                      hidden: true,
                                                                      id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_CartAmount',
                                                                      html: '<div style="background: transparent;height:30px;font-size: 12px;font-weight:bold;color:black;text-align:center;" >RM00.00</div>'
                                                                  },
                                                                    {
                                                                        margin: '2 0 0 2',
                                                                        hidden:true,
                                                                        width: 24,
                                                                        height: 24,
                                                                        html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:24px;height:24px;">',
                                                                        // ui:'plain'
                                                                    },

                                                                  //  {
                                                                  //      xtype: 'container',
                                                                  //      height: 35,
                                                                  //      width: 35,
                                                                  //      margin: '-3 0 0 5',
                                                                  //      id: 'containerFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadge',
                                                                  //      style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                                                  //      layout: {
                                                                  //          type: 'vbox',
                                                                  //          pack: 'center',
                                                                  //          align: 'center'

                                                                  //      },
                                                                  //      items: [

                                                                  //{
                                                                  //    margin: '-4 0 0 0',
                                                                  //    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText',
                                                                  //    html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
                                                                  //},
                                                                  // {
                                                                  //     margin: '2 0 0 2',
                                                                  //    // hidden: true,
                                                                  //     width: 24,
                                                                  //     height: 24,
                                                                  //     html: '<img src="resources/icons/myCart02.png" alt="Image" style="width:20px;height:20px;">',
                                                                  //     // ui:'plain'
                                                                  // },
                                                                  //{
                                                                  //    margin: '0 0 0 0',
                                                                  //    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeTextItem',
                                                                  //    hidden:true,
                                                                  //    html: '<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>'
                                                                  //},

                                                                  //      ]
                                                                  //  },




                                                              ]
                                                          },



                                             {
                                                 xtype: 'panel',
                                                 width: 10
                                             }




                                             ]

                                  },
                                  /////////////////////////////





                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      hidden:true,
                                     // docked: 'top',
                                      height: 30,
                                      id: 'containerFloatPanel_AyohaStore_SaleItemDetailHeader',
                                      style: "background-color: transparent;",
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
                                                     id: 'btnFloatPanel_AyohaStore_SaleItemDetailBack',
                                                     height: 30,
                                                     width: 35,
                                                     margin: '0 0 0 0',
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {

                                                         //var panel = Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_MasterOuter');
                                                         //panel.getScrollable().getScroller().scrollTo(0, 0, true);


                                                         //var content = Ext.get('containerFloatPanel_AyohaStore_SaleItemDetail_Master');
                                                         //var bottom = content.getHeight();                                                     


                                                         //var panel = Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_MasterOuter');
                                                         //panel.getScrollable().getScroller().scrollTo(0, bottom, true);




                                                         //panel.setDisabled(true);
                                                       //  panel.setDisabled(false);


                                                         _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'left',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                         is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                         RemovePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
                                                         globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
                                                         FloatPanel_AyohaStore_ShareAndWhatsappHide();
                                                     }
                                                 },

                                                   //{
                                                   //   xtype: 'button',
                                                   //    height: 35,
                                                   //    width: 310,
                                                   //    //height: 30,
                                                   //    //width: '100%',
                                                   //    //margin: '-1 0 0 0',
                                                   //    id: 'btnFloatPanel_AyohaStore_DotMenuItemExpandShrinkTxtx',
                                                   //    //badgeText: "2",
                                                   //    //html: '<font size=2 color=black><b>Cawan Hikmat</b></font>',
                                                   //    html: '<div style="height:35px;color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background-color:white;border-radius: 20px 0px 20px 0px;padding:8px 0px 0px 0px;">Aslam cucu angah rahem..</div>',
                                                   //    ui: 'plain',
                                                   //    handler: function () {
                                                   //        //FloatPanel_AyohaStore_DotMenuItemHide();
                                                   //        // FloatPanel_AyohaStore_SearchProductShow();
                                                   //    }
                                                   //},
                                                       //{
                                                       //    xtype: 'container',
                                                       //    margin: '0 0 0 0',
                                                       //    style: "background-color: transparent;",
                                                       //  //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background:black;border-radius: 20px 20px 20px 20px;',
                                                       //    height: 30,
                                                       //    width:300,
                                                       //    // margin: '70 0 0 0',
                                                       //    id: 'containerFloatPanel_AyohaStore_DotMenuItemSearchTxtInnerx',
                                                       //    layout: {

                                                       //        type: 'hbox',
                                                       //        pack: 'center',
                                                       //        align: 'center'
                                                       //    },
                                                       //    items: [


                                                                 


                                                       //    ]
                                                       //},
                                                            {
                                                                xtype: 'spacer',

                                                            },

                                                           

                                                  {
                                                      xtype: 'button',
                                                      id: 'btnFloatPanel_AyohaStore_SaleItemDetailDiscountImgXXX',
                                                      height: 100,
                                                      width: 70,
                                                     hidden: true,
                                                      // iconCls: 'list',
                                                      margin: '10 3 0 0',
                                                      html: '<img class="blink_me" src="resources/icons/DiscountPurple04.png" alt="Image" style="width:60px;height:90px;margin:0px 0px 0px 0px;"><br><div class="blink_me" style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:-60px 0px 0px 10px;width:100%;text-align:left;color:white;height:90px;">50%</div>',
                                                      ui: 'plain',
                                                      handler: function () {
                                                          _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                              type: 'slideOut',
                                                              direction: 'right',
                                                              easing: 'cubic-bezier(.7,0,.7,1)',
                                                              duration: 250

                                                          }));
                                                          is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                          RemovePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
                                                      }
                                                  },




                                                  {
                                                      xtype: 'panel',
                                                      width:10
                                                  }







                                             ]

                                  },


                                  //{

                                  //    xtype: 'container',
                                  //    width: '100%',
                                  //    // docked: 'top',
                                  //    height: 30,
                                  //    id: 'containerFloatPanel_AyohaStore_SaleItemDetailHeaderxx',
                                  //    style: "background-color: transparent;",
                                  //    layout: {
                                  //        type: 'vbox',
                                  //        pack: 'center',
                                  //        align: 'right',
                                  //    },
                                  //    // hidden:true,
                                  //    items:
                                  //           [








                                                 
                                                       

                                                        

                                  //                {
                                  //                    xtype: 'button',
                                  //                    id: 'btnFloatPanel_AyohaStore_SaleItemDetailDiscountImg',
                                  //                    height: 100,
                                  //                    width: 70,
                                  //                    hidden: true,
                                  //                    // iconCls: 'list',
                                  //                    margin: '10 13 0 0',
                                  //                    html: '<img class="blink_me" src="resources/icons/DiscountPurple04.png" alt="Image" style="width:60px;height:90px;margin:0px 0px 0px 0px;"><br><div class="blink_me" style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:-60px 0px 0px 10px;width:100%;text-align:left;color:white;height:90px;">50%</div>',
                                  //                    ui: 'plain',
                                  //                    handler: function () {
                                  //                        _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                  //                            type: 'slideOut',
                                  //                            direction: 'right',
                                  //                            easing: 'cubic-bezier(.7,0,.7,1)',
                                  //                            duration: 250

                                  //                        }));
                                  //                        is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                  //                        RemovePages(_FloatPanel_AyohaStore_SaleItemDetail, "is_FloatPanel_AyohaStore_SaleItemDetailOpen");
                                  //                    }
                                  //                },




                                  //                //{
                                  //                //    xtype: 'panel',
                                  //                //    width: 10
                                  //                //}







                                  //           ]

                                  //},
                                  
                          
                        {
                            xtype: 'container',
                            width: '100%',
                            id: 'containerFloatPanel_AyohaStore_SaleItemDetail_MasterOuter',
                           // zIndex: 100,
                            // hidden:true,
                            margin: '-50 0 0 0',
                            height: '100%',
                            //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                            style: 'background-color:white',
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'left'

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
                                    id: 'containerFloatPanel_AyohaStore_SaleItemDetail_Master',
                                    //zIndex: 100,
                                    // hidden:true,
                                    // margin: '-80 0 0 0',
                                    height: 1600,
                                    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'left'

                                    },
                                  
                                    items: [
                                           {
                                               xtype: 'carousel',
                                               //hidden:true,
                                               id: 'FloatPanel_AyohaStore_SaleItemDetail_Carousel',
                                               name: 'nameFloatPanel_AyohaStore_SaleItemDetail_Carousel',
                                               //width: '100%',
                                               //height: '100%',
                                               width: '100%',
                                               height: 350,
                                               style: 'background-color:white',
                                               //height: '100%',
                                               indicator: true,
                                               requires: [
                'Ext.carousel.Carousel',
                'Ext.util.DelayedTask',
                'Ext.Video'
                                               ],
                                               listeners: {
                                                   //initialize: function (c) {
                                                   //    this.element.on({
                                                   //        tap: function (e, node, options) {
                                                   //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                                   //        }
                                                   //    });
                                                   //},
                                                   //initialize: function (c) {
                                                   //    this.element.on({
                                                   //        swipe: function (e, node, options) {
                                                   //            if (e.direction == "left") {
                                                   //                swipeDirection = "Left";

                                                   //            } else {
                                                   //                swipeDirection = "Right";
                                                   //            }
                                                   //        }
                                                   //    });
                                                   //},
                                                   activeitemchange: function (container, newCard, oldCard, index) {


                                                   },

                                               },



                                               margin: '0 0 0 0',
                                               // items: [


                                               //  ]
                                           },
                                           {
                                               xtype: 'container',
                                               width: '100%',
                                               margin: '-10 0 0 0',
                                               zIndex:100,
                                               id: 'containerFloatPanel_AyohaStore_SaleItemDetail_CarouselInnerCompanyInfo',
                                               height: 10,
                                               style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                               // style: 'background-color:red',
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'right'

                                               },
                                               items: [
                                                   {
                                                       xtype: 'container',
                                                       margin: '-400 10 0 0',
                                                       // hidden: true,
                                                       style: 'background-color: transparent;',
                                                      // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;',
                                                       height: 100,
                                                       width: 70,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ShareAndWhatsappWsBtn',
                                                       layout: {

                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                           //{
                                                           //    xtype: 'button',
                                                           //    height: 50,
                                                           //    width: 50,
                                                           //    hidden:true,
                                                           //    margin: '0 0 0 0',
                                                           //    id: 'btnFloatPanel_AyohaStore_SaleItemDetail_ShareAndWhatsappWsBtn',
                                                           //    //badgeText: "2",
                                                           //    html: '<img src="resources/icons/whatsapp01.png" style="width:25px;height:25px;margin:0px 0px 0px -5px;" alt="Company Name">',
                                                           //    ui: 'plain',
                                                           //    handler: function () {

                                                           //        if (globalFloatPanel_PreviewAdvertisement_WhatsAppLink) {
                                                           //            // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                                           //            //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                                           //            window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi,i want to know more about this product-*%0a*" + globalFloatPanel_AyohaStore_SaleItemDetail_ItemName + "*%0a*", '_system'); return false;
                                                           //            // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
                                                           //        } else {
                                                           //            swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                                           //        }

                                                           //    }
                                                           //},
                                                           {
                                                               xtype: 'container',
                                                               zIndex: 200,
                                                               height: 35,
                                                               width: 35,
                                                               margin: '45 0 0 35',
                                                               id: 'containerFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadge',
                                                               name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart',
                                                               style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'center',
                                                                   align: 'center'

                                                               },
                                                               items: [

                                                           {
                                                               margin: '-1 0 0 0',
                                                               id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText',
                                                               html: '<div style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>0</b></div>'
                                                           },
                                                           {
                                                               margin: '2 2 0 0',
                                                               // hidden: true,
                                                               width: 18,
                                                               height: 18,
                                                               html: '<div onclick="FloatPanel_AyohaStore_CartShow()"><img src="resources/icons/myCart02.png" alt="Image" style="width:18px;height:18px;"></div>',
                                                               // ui:'plain'
                                                           },
                                                           {
                                                               margin: '0 0 0 0',
                                                               id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeTextItem',
                                                               hidden: true,
                                                               html: '<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>'
                                                           },

                                                               ]
                                                           },
                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaStore_SaleItemDetailDiscountImg',
                                                                height: 90,
                                                                width: 70,
                                                                // hidden: true,
                                                                // iconCls: 'list',
                                                                margin: '30 3 0 0',
                                                                html: '<img class="blink_me" src="resources/icons/DiscountPurple04.png" alt="Image" style="width:60px;height:90px;margin:0px 0px 0px 0px;"><br><div class="blink_me" style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:-60px 0px 0px 10px;width:100%;text-align:left;color:white;height:90px;">50%</div>',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    _FloatPanel_AyohaStore_SaleItemDetail.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
                                                                    globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
                                                                    RemovePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
                                                                }
                                                            },

                                                       ]
                                                   },
                                                   
                                                    
                                                   {
                                                       xtype: 'panel',
                                                       height:250
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       width: 130,
                                                       name:'namecontainerFloatPanel_AyohaStore_SaleItemDetail_StarOutterMaster',
                                                       margin: '0 0 0 0',
                                                       height: 35,
                                                       // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                       style: "background-color: white;",
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'

                                                       },
                                                       items: [
                                                          
                                                           {
                                                               xtype: 'container',
                                                               width: 120,
                                                               margin: '2 0 0 0',
                                                               height: 17,
                                                               // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                               style: "background-color: transparent;",
                                                               layout: {
                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'

                                                               },
                                                               items: [

                                                                   {
                                                                       id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter',
                                                                       height: 17,
                                                                       width: 17,
                                                                       html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
                                                                   },
   {
       id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter',
       height: 17,
       width: 17,
       html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
   },
     {
         id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter',
         height: 17,
         width: 17,
         html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
     },
       {
           id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter',
           height: 17,
           width: 17,
           html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
       },
         {
             id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter',
             height: 17,
             width: 17,
             html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',

         },
          {
              xtype: 'panel',
              width:7
          },{
             margin: '-2 0 0 0',
             id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateCountOutter',
             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',

         },
        
                                                               ]
                                                           },
                                                            {
                                                                margin: '1 0 0 0',
                                                                id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateHereOutter',
                                                                html: '<div style="color:black;text-align: center;font-size:8px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Add your review/rate here</div>',

                                                            },
                                                       ]
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       margin: '0 10 0 0',
                                                       hidden: true,
                                                       style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black;background: white;border-radius: 30px 30px 30px 30px;',
                                                       //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;',
                                                       height: 50,
                                                       width: 50,
                                                       // margin: '70 0 0 0',
                                                       id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ShareAndWhatsappShareBtn',
                                                       layout: {

                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                           {
                                                               xtype: 'button',
                                                               height: 50,
                                                               width: 50,
                                                               margin: '0 0 0 0',
                                                               id: 'btnFloatPanel_AyohaStore_SaleItemDetail_ShareAndWhatsappShareBtn',
                                                               //badgeText: "2",
                                                               html: '<img src="resources/icons/share01.png" style="width:25px;height:25px;margin:0px 0px 0px -5px;" alt="Company Name">',
                                                               ui: 'plain',
                                                               handler: function () {
                                                                   FloatPanel_AyohaStore_ShareAndWhatsappHide();
                                                               }
                                                           },



                                                       ]
                                                   },
                                               ]
                                           },
                                                   {

                                                       id: 'ListFloatPanel_AyohaStore_SaleItemDetail_CarouselExtendedImage',
                                                       store: _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore,
                                                       hidden:true,
                                                       // grouped: true,
                                                       xtype: 'dataview',
                                                       disableSelection: false,
                                                       // xtype: 'list',
                                                       //height: 815,
                                                       scrollable: false,
                                                       inline: true,
                                                       scrollable: {
                                                           direction: 'horizontal',
                                                           indicators: false,
                                                       },
                                                       width: '100%',
                                                       height: 50,
                                                       cls: 'dataview-item',
                                                       itemTpl: '<div onClick="FloatPanel_AyohaStore_SaleItemDetail_SlideImage({row_num})"><img src="{ImgPath}" alt="Image" style="width:50px;height:50px;border: 6px solid white;"/></div>',


                                                   },
                                                   {
                                                       xtype: 'container',
                                                       width: '100%',
                                                       hidden: true,
                                                       id: 'containerFloatPanel_AyohaStore_SaleItemDetail_MasterBorder1',
                                                       //zIndex: 100,
                                                       // hidden:true,
                                                       // margin: '-80 0 0 0',
                                                       height: 1,
                                                       //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                       style: 'background-color:grey',
                                                   },


                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:white;',
                                                       width: '100%',
                                                       // margin:'-100 0 0 0',
                                                       //zIndex: 100,
                                                       height: 60,
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [

                                                           {
                                                               xtype: 'panel',
                                                               width: 10
                                                           },
                                                           {
                                                               xtype: 'container',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'start',
                                                                   align: 'left'
                                                               },
                                                               items: [
                                                                    {
                                                                        margin: '0 0 0 0',
                                                                        id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName',
                                                                        html: '<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;color:black;text-align:center;" >Barbegal</div>',
                                                                    },
                                                                   {
                                                                       margin: '-8 0 0 0',
                                                                       id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice',
                                                                       html: '<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):25.00</u></div>',
                                                                   },
                                                                   {
                                                                       margin: '12 0 0 0',
                                                                       id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint',
                                                                       html: '<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="1.41 M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*1.41 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>',
                                                                   },
                                                                    

                                                               ]
                                                           },

                                                           {
                                                               xtype: 'spacer'
                                                           },




                                                       ]
                                                   },



                                                   {
                                                       xtype: 'container',
                                                       width: '100%',
                                                       id: 'containerFloatPanel_AyohaStore_SaleItemDetail_CarouselMaster',
                                                       height: 1010,
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
                                                               width: '100%',
                                                               id: 'containerFloatPanel_AyohaStore_SaleItemDetail_CarouselMasterHeader',
                                                               height: 25,
                                                               //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                               style: 'background-color:transparent',
                                                               layout: {
                                                                   type: 'hbox',
                                                                   pack: 'center',
                                                                   align: 'center'
                                                               },
                                                               items: [
                                                                    
                                                                        {
                                                                            xtype: 'container',
                                                                            id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle',
                                                                            name:'namecontainerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle',
                                                                            style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;',
                                                                            flex:1,
                                                                            layout: {
                                                                                type: 'vbox',
                                                                                pack: 'center',
                                                                                align: 'center'
                                                                            },
                                                                            items:[
                                                                                {
                                                                                    margin: '0 0 0 0',
                                                                                    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle',
                                                                                    html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Description</div>',
                                                                                }
                                                                            ]

                                                                       
                                                                        },
                                                                          {
                                                                              xtype: 'container',
                                                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                                              id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle',
                                                                              name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle',
                                                                              style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                                              flex: 1,
                                                                              layout: {
                                                                                  type: 'vbox',
                                                                                  pack: 'center',
                                                                                  align: 'center'
                                                                              },
                                                                              items: [
                                                                                  {
                                                                                      margin: '0 0 0 0',
                                                                                      id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle',
                                                                                      html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating</div>',
                                                                                  },
                                                                              ]


                                                                          },
                                                                          {
                                                                              xtype: 'container',
                                                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                                              id: 'containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle',
                                                                              name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle',
                                                                              style: 'background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;',
                                                                              flex: 1,
                                                                              layout: {
                                                                                  type: 'vbox',
                                                                                  pack: 'center',
                                                                                  align: 'center'
                                                                              },
                                                                              items: [
                                                                                  {
                                                                                      margin: '0 0 0 0',
                                                                                      id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle',
                                                                                      html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>',
                                                                                  },
                                                                              ]


                                                                          },
                                                                     
                                                               ]
                                                           },
                                                           {
                                                               xtype: 'carousel',
                                                               //hidden:true,
                                                               id: 'FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent',
                                                               name: 'nameFloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent',
                                                               //width: '100%',
                                                               //height: '100%',
                                                               width: '100%',
                                                               height: 1000,
                                                               style: 'background-color:white',
                                                               //height: '100%',
                                                               indicator: false,
                                                               requires: [
                                'Ext.carousel.Carousel',
                                'Ext.util.DelayedTask',
                                'Ext.Video'
                                                               ],
                                                               listeners: {
                                                                   //initialize: function (c) {
                                                                   //    this.element.on({
                                                                   //        tap: function (e, node, options) {
                                                                   //            FloatPanel_PreviewAdvertisementShow("Dashboard_PreviewVIAAdvertisement");
                                                                   //        }
                                                                   //    });
                                                                   //},
                                                                   //initialize: function (c) {
                                                                   //    this.element.on({
                                                                   //        swipe: function (e, node, options) {
                                                                   //            if (e.direction == "left") {
                                                                   //                //swipeDirection = "Left";
                                                                   //                FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselProductDesc();
                                                                   //            } else {
                                                                   //                FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselReviewAndRate();
                                                                   //                //swipeDirection = "Left";
                                                                   //                //FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselProductDesc();
                                                                   //            }
                                                                               
                                                                   //        }
                                                                   //    });
                                                                   //},
                                                                   activeitemchange: function (container, newCard, oldCard, index) {
                                                                      var CarouselIndex =parseInt(container.getActiveIndex());


                                                                      if (_isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime == 'Y') {
                                                                          if (CarouselIndex == 0) {
                                                                              console.log(CarouselIndex);
                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');                                                                             
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');

                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Description</div>');
                                                                              return;
                                                                          }
                                                                          if (CarouselIndex == 1) {
                                                                              console.log(CarouselIndex);
                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');


                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');


                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');                                                                             
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                                                                              return;
                                                                          }
                                                                          if (CarouselIndex == 2) {
                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');



                                                                              Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Seller Info</div>');
                                                                              if (globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath) {
                                                                                  FloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterprisesLoadByEnterpriseAccNoStore_Existing();
                                                                              } else {
                                                                                  FloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterprisesLoadByEnterpriseAccNoStore();
                                                                              }
                                                                              return;
                                                                          }
                                                                      }
                                                                      
                                                                        
                                                                      
                                                                   },

                                                               },



                                                               margin: '0 0 0 0',
                                                                items: [
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                                                                        id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescription',
                                                                        height: 1000,
                                                                        //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                        style: 'background-color:white',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'start',
                                                                            align: 'left'
                                                                        },
                                                                        items: [
                                                                             //{
                                                                             //    margin: '0 0 0 10',
                                                                             //    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle',
                                                                             //    html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" ><u>Product Description</u></div>',
                                                                             //},
                                                                             {
                                                                                 id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc',
                                                                                 margin: '0 0 0 10',

                                                                                 // zIndex: -10,
                                                                                 width: '100%',
                                                                                 //html: '<textarea id="input-htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc" style="width:95%;height: 320px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',
                                                                                 html: '<textarea id="input-htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc" readOnly style="width:95%;height: 1000px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',


                                                                             },
                                                                        ]
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                                                                        id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ProductReview',
                                                                        height: 1000,
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
                                                                                width: '100%',
                                                                                id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ProductReviewInner',
                                                                                //zIndex: 100,
                                                                                hidden:true,
                                                                                // margin: '-80 0 0 0',
                                                                                height: 30,
                                                                                //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                                style: 'background-color:white',
                                                                                layout: {
                                                                                    type: 'hbox',
                                                                                    pack: 'center',
                                                                                    align: 'left'
                                                                                }, items: [


                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: 70,
                                                                                        margin: '0 0 0 0',
                                                                                        height: 23,
                                                                                        // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                        style: "background-color: transparent;",
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'start',
                                                                                            align: 'center'

                                                                                        },
                                                                                        items: [
                                                                                            {
                                                                                                margin: '-5 0 0 0',
                                                                                                id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateCount',
                                                                                                html: '<div style="color:black;text-align: center;font-size:14px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',

                                                                                            },
                                                                                            {
                                                                                                xtype: 'container',
                                                                                                width: 70,
                                                                                                margin: '-10 0 0 0',
                                                                                                height: 13,
                                                                                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                                style: "background-color: transparent;",
                                                                                                layout: {
                                                                                                    type: 'hbox',
                                                                                                    pack: 'center',
                                                                                                    align: 'center'

                                                                                                },
                                                                                                items: [

                                                                                                    {
                                                                                                        id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star1',
                                                                                                        height: 13,
                                                                                                        width: 13,
                                                                                                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                                                                                    },
                                    {
                                        id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star2',
                                        height: 13,
                                        width: 13,
                                        html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                    },
                                      {
                                          id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star3',
                                          height: 13,
                                          width: 13,
                                          html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                      },
                                        {
                                            id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star4',
                                            height: 13,
                                            width: 13,
                                            html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',
                                        },
                                          {
                                              id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_Star5',
                                              height: 13,
                                              width: 13,
                                              html: '<div ><img src="resources/icons/reviewstarunrate.png" width="9" height="9" alt="Company Name"></div>',

                                          },
                                                                                                ]
                                                                                            },
                                                                                        ]
                                                                                    },


                                                                                      {
                                                                                          xtype: 'panel',
                                                                                          width: 20
                                                                                      },
                                                                                           {
                                                                                               xtype: 'container',
                                                                                               id: 'containerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel',
                                                                                               name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel',
                                                                                               width: 100,
                                                                                               height: 30,
                                                                                               margin: '0 0 0 0',
                                                                                               // hidden: true,
                                                                                               // style: "background-color: white",
                                                                                               //style: "background-color: #F35B57;",
                                                                                               style: 'border-right:2px none purple;border-left:2px none purple;border-bottom:2px none purple;border-top:2px none purple ;background: white;border-radius: 10px 10px 10px 10px;',
                                                                                               layout: {
                                                                                                   type: 'hbox',
                                                                                                   pack: 'center',
                                                                                                   align: 'center'

                                                                                               },
                                                                                               items: [



                                                                                                   {
                                                                                                       margin: '0 0 0 0',
                                                                                                       html: '<img src="resources/icons/editReview.png" alt="Image" style="width:24px;height:24px;">'
                                                                                                   },
                                                                                                   {
                                                                                                       margin: '5 0 0 0',
                                                                                                       html: '<div style="background: transparent;height:30px;font-size: 11px;font-weight:normal;color:black;text-align:center;" >Write a review</div>'
                                                                                                   }

                                                                                               ]
                                                                                           },
                                                                                           {
                                                                                               xtype: 'panel',
                                                                                               width: 10
                                                                                           },
                                                                                ]
                                                                            },

                                                                            {
                                                                                xtype: 'container',
                                                                                width: '100%',
                                                                                height: 1000,
                                                                                margin:'-8 0 0 0',
                                                                                id: 'FloatPanel_AyohaStore_SaleItemDetail_ReviewContentID',
                                                                                layout: {
                                                                                    type: 'vbox',
                                                                                    pack: 'start',
                                                                                    align: 'center'

                                                                                },
                                                                                // style: 'background-color:transparent',
                                                                                style: 'border-top:2px none #ECF0F1 ;background: transparent;',

                                                                                items: [
                                                                                    {
                                                                                        xtype: 'list',
                                                                                        width: '100%',
                                                                                        height: 1000,
                                                                                        // flex: 1,
                                                                                        store: _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore,
                                                                                        id: 'FloatPanel_AyohaStore_SaleItemDetail_ReviewListID',
                                                                                        mode: 'SINGLE',
                                                                                        // width: '100%',
                                                                                        disableSelection: true,
                                                                                        style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
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
                                                                                        itemTpl: '<div class="myContent" style="background-color:white;width:104%;">' +



                                                                                           '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:110px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:3px 3px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:18%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 0px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:top"><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedReviewTxt}<br><br><br></div></td></tr></table>' +

                                                                                              '</div>' +
                                                                                         '<br>' +
                                                                                         '{ModifiedBottomButton}',
                                                                                       

                                                                                        emptyText: 'No Review Yet',

                                                                                        //listeners: {
                                                                                        //    itemswipe: function (list, idx, target, record, evt) {



                                                                                        //    } // itemswipe
                                                                                        //}

                                                                                    },
                                                                                ]
                                                                            },

                                                                        ]

                                                                    },


                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                                                                        id: 'containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfo',
                                                                        height: 500,
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
                                                                                width: '100%',
                                                                                margin: '0 0 0 0',
                                                                                id: 'containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName',
                                                                                name: 'namecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName',
                                                                                height: 80,
                                                                                // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                                                style: "background-color: transparent;",
                                                                                layout: {
                                                                                    type: 'hbox',
                                                                                    pack: 'center',
                                                                                    align: 'center'

                                                                                },
                                                                                items: [
                                                                                    //{
                                                                                    //    xtype: 'panel',
                                                                                    //    id: 'panelFloatPanel_AyohaStore_Status7',
                                                                                    //    width: 7
                                                                                    //},



                                                                                    {
                                                                                        xtype: 'container',
                                                                                        width: 80,
                                                                                        id: 'containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogo',

                                                                                        margin: '0 0 0 0',
                                                                                        //style: {
                                                                                        //    // background: '#D25959',
                                                                                        //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                        //    // border: '2px'
                                                                                        //},
                                                                                        //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                        style: 'background-color:transparent',
                                                                                        layout: {
                                                                                            type: 'vbox',
                                                                                            pack: 'center',
                                                                                            align: 'center',
                                                                                        },
                                                                                        items: [
                                                                                              {
                                                                                                  //xtype: 'button',
                                                                                                  //height: 75,
                                                                                                  //width: 75,

                                                                                                  margin: '0 0 0 0',
                                                                                                  id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogo',
                                                                                                  //badgeText: "2",
                                                                                                  //  html: '<img src="resources/icons/MyAdvertisementDashboardOne.png" width="65" height="65" alt="Company Name">',
                                                                                                  html: '<div ><img src="https://setkita.com/AyohaImgCard/Logo/AyohaLogofullOrange.png" width="80" height="65" alt="Company Name"></div>',

                                                                                              },

                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        xtype: 'panel',
                                                                                        width:3
                                                                                    },
                                                                                       {
                                                                                           xtype: 'container',
                                                                                          // width: '75%',
                                                                                           id: 'containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_CompanyInfo',


                                                                                           margin: '0 0 0 0',
                                                                                           //style: {
                                                                                           //    // background: '#D25959',
                                                                                           //    background: 'rgba(76, 175, 80, 0.3);',
                                                                                           //    // border: '2px'
                                                                                           //},
                                                                                           //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                                                           style: 'background-color:transparent',
                                                                                           layout: {
                                                                                               type: 'vbox',
                                                                                               pack: 'center',
                                                                                               align: 'center',
                                                                                           },
                                                                                           items: [
                                                                                                  {

                                                                                                      id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_CompanyName',
                                                                                                      width: '100%',
                                                                                                      html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Linex Solution Sdn Bhd</div>',


                                                                                                  },
                                                                                                   //{

                                                                                                   //    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Linex',
                                                                                                   //    width: '100%',
                                                                                                   //    margin: '0 0 0 0',
                                                                                                   //    html: '<div style="background-color:black;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',


                                                                                                   //},
                                                                                                   {

                                                                                                       id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Tagline',
                                                                                                       margin:'-5 0 0 0',
                                                                                                       width: '100%',
                                                                                                       // iconCls: 'list',
                                                                                                       //html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;background: white;border-radius: 30px 30px 30px 30px;width:45px;height:45px;" ><img src="resources/icons/founder.jpg" width="25" height="25"  alt="Company Name" style="margin:7px 0px 0px 0px;border-radius: 50%;"></div>',
                                                                                                       html: '<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">Date:28/12/2020 10:30:54PM</div>',


                                                                                                   },
                                                                                                   

                                                                                           ]
                                                                                       },

                                                                                       
                                                                                ]


                                                                            },
                                                                            
                                                                        {
                                                                        margin: '10 0 0 5',
                                                                        html: '<font color="black" size="1"><b>Business Registration No</b></font><img src="resources/icons/successregister.gif" style="width:16px;height:16px;" alt="Company Name">',
    },
{
    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_BRN',
    margin: '-5 0 0 5',

    // zIndex: -10,
width: '90%',
html: '<input type="text"  id="input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_BRN"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
},
                                                                             {
                                                                                 margin: '10 0 0 5',
                                                                                 html: '<font color="black" size="1"><b>Business Address</b></font>',
                                                                             },
                                                                              {
                                                                                  id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Location',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Location"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                               {
                                                                                   margin: '10 0 0 5',
                                                                                   html: '<font color="black" size="1"><b>State</b></font>',
                                                                               },
                                                                              {
                                                                                  id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_State',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_State"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                              {
                                                                                  margin: '10 0 0 5',
                                                                                  html: '<font color="black" size="1"><b>Contact Person</b></font>',
                                                                              },
                                                                              {
                                                                                  id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_PIC',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_PIC"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                               {
                                                                                   margin: '10 0 0 5',
                                                                                   html: '<font color="black" size="1"><b>Date Join</b></font>',
                                                                               },
                                                                              {
                                                                                  id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_DateJoin',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_DateJoin"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                              {
                                                                                margin: '10 0 0 5',
                                                                                html: '<font color="black" size="1"><b>WhatsApp</b></font>',
                                                                            },
                                                                            //   {
                                                                            //     id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_WhatsAppNo',
                                                                            //     margin: '-5 0 0 5',

                                                                            //     // zIndex: -10,
                                                                            //     width: '90%',
                                                                            //     html: '<input type="text"  id="input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_DateJoin"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                            // },
                                                                            {
                                                                                xtype: 'button',
                                                                                height: 50,
                                                                                width: 50,
                                                                                margin: '-5 0 0 5',
                                                                                id: 'btnFloatPanel_AyohaStore_SaleItemDetail_WhatsappWsBtn',
                                                                                //badgeText: "2",
                                                                                html: '<img src="resources/icons/WhatsApp01.png" style="width:25px;height:25px;margin:0px 0px 0px -5px;" alt="Company Name">',
                                                                                ui: 'plain',
                                                                                handler: function () {
                                            
                                                                                    var WhatsAppLink = FloatPanel_AyohaStore_getWhatsAppLink();
                                                                                    if (WhatsAppLink.length > 4) {
                                                                                        // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                                                                        //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                                                                        window.open("https://api.whatsapp.com/send?phone=" + WhatsAppLink + "&text=Hi,i want to know more about this product-*%0a*" + globalFloatPanel_AyohaStore_SaleItemDetail_ItemName + "*%0a*", '_system'); return false;
                                                                                        // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
                                                                                    } else {
                                                                                        swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                                                                    }
                                            
                                                                                }
                                                                            },

                                                                        ]
                                                                    },

                                                                 ]
                                                           },

                                                       ]
                                                   },
                                                   //{
                                                   //    xtype: 'container',
                                                   //    width: '100%',
                                                   //    id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescription',
                                                   //    height: 350,
                                                   //    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                   //    style: 'background-color:white',
                                                   //    layout: {
                                                   //        type: 'vbox',
                                                   //        pack: 'center',
                                                   //        align: 'left'
                                                   //    },
                                                   //    items: [
                                                   //         {
                                                   //             margin: '0 0 0 10',
                                                   //             id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle',
                                                   //             html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" ><u>Product Description</u></div>',
                                                   //         },
                                                   //         {
                                                   //             id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc',
                                                   //             margin: '0 0 0 10',

                                                   //             // zIndex: -10,
                                                   //             width: '100%',
                                                   //             //html: '<textarea id="input-htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc" style="width:95%;height: 320px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',
                                                   //             html: '<textarea id="input-htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc" style="width:95%;height: 340px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',


                                                   //         },
                                                   //    ]
                                                   //},

                                                       //{
                                                       //    xtype: 'container',
                                                       //    width: '100%',
                                                       //    id: 'containerFloatPanel_AyohaStore_SaleItemDetail_ProductReview',
                                                       //    //zIndex: 100,
                                                       //    // hidden:true,
                                                       //    // margin: '-80 0 0 0',
                                                       //    height: 650,
                                                       //    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                       //    style: 'background-color:white',
                                                       //    layout: {
                                                       //        type: 'vbox',
                                                       //        pack: 'start',
                                                       //        align: 'left'
                                                       //    },
                                                       //    items: [

                                                               
                                                                
                                                               
                                                       //    ]
                                                       //},


                                    ]
                                },
                            ]
                           
                        },

                           

                             

                           




                        ]
                    },


                   //{
                   //    xtype: 'container',
                   //    style: 'background-color:white;',
                   //    // docked: 'bottom',
                   //    width: '100%',
                   //    // margin:'-100 0 0 0',
                   //    zIndex: 100,
                   //    height: 538,
                   //    layout: {
                   //        type: 'hbox',
                   //        pack: 'center',
                   //        align: 'center'
                   //    },
                   //    items:[]
                   //},

                    









                        {
                            xtype: 'container',
                            style: 'background-color:transparent;',
                            id:'containerFloatPanel_AyohaStore_SaleItemDetail_bottomInfo',
                           docked: 'bottom',
                            width: '100%',
                            style: 'background-color:white;border-top:1px none #f0f2f5;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 16px 0 rgba(0, 0, 0, 0.19)',
                           // margin:'-100 0 0 0',
                            zIndex:100,
                            height:50,
                            layout: {
                                type: 'hbox',
                                pack: 'right',
                                align: 'center'
                            },
                            items: [

                                {
                                    xtype: 'panel',
                                    width:10
                                },
                                {
                                    margin: '8 0 0 0',
                                    hidden:true,
                                    id: 'htmlFloatPanel_AyohaStore_SaleItemDetail_ProductStock',
                                    html: '<div style="background: transparent;width:100%;font-size: 13px;font-weight:bold;black:white;text-align:center;" >Stock:110</div>',
                                },
                                 
                                // {
                                //     xtype: 'button',
                                //     height: 50,
                                //     width: 50,
                                //     margin: '-3 0 0 0',
                                //     hidden:true,
                                //     id: 'btnFloatPanel_AyohaStore_SaleItemDetail_WhatsappWsBtnx',
                                //     //badgeText: "2",
                                //     html: '<img src="resources/icons/WhatsApp01.png" style="width:25px;height:25px;margin:0px 0px 0px -5px;" alt="Company Name">',
                                //     ui: 'plain',
                                //     handler: function () {

                                //         var WhatsAppLink = FloatPanel_AyohaStore_getWhatsAppLink();
                                //         if (WhatsAppLink.length > 4) {
                                //             // var ModifiedMediaFileName = globalMediaFileName.replace(".", "") + ".html?ImgId=" + globalMediaFileName;
                                //             //  window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=Hi");
                                //             window.open("https://api.whatsapp.com/send?phone=" + WhatsAppLink + "&text=Hi,i want to know more about this product-*%0a*" + globalFloatPanel_AyohaStore_SaleItemDetail_ItemName + "*%0a*", '_system'); return false;
                                //             // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
                                //         } else {
                                //             swalFireInfoMerchantButtonLink("Merchant Might be Not Set WhatsApp No.,Help merchant to know this Message!", "WhatsApp");
                                //         }

                                //     }
                                // },

                                {
                                    xtype:'spacer'
                                },

                               
                                
                                {
                                    margin:'20 0 0 0',
                               // html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;height:22px;">Quantity:<input type="number" id="input-FloatPanel_AyohaStore_SaleItemDetail" value="1" readOnly style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button OnClick="FloatPanel_AyohaStore_SaleItemDetailAddToCart();" class="buttonAddToCartLarge" style="margin:-10px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div>',
                                html: '<div style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:black;height:22px;"><button onclick="FloatPanel_AyohaStore_SaleItemDetail_UpdateQuantity(-1)" class="buttonAddMinusToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_SaleItemDetail" value="1" readOnly style="border-radius: 5px;border: 1px solid purple;padding: 2px; width: 40px;height: 27px;font-family:Arial, sans-serif;font-size:15px;font-weight:normal;word-break:normal;color:black;text-align:center"/><button onclick="FloatPanel_AyohaStore_SaleItemDetail_UpdateQuantity(1)" class="buttonAddMinusToCartSign">+</button>&nbsp;&nbsp;&nbsp;&nbsp;<button OnClick="FloatPanel_AyohaStore_SaleItemDetailAddToCart();" class="buttonAddToCartLarge" style="margin:-10px 0px 0px 2px;">Add to Cart<img src="resources/icons/myCart03.png" alt="Image" style="width:13px;height:13px;margin:0px 0px 0px 0px;"></button></div>',
                               
                            
                            },


                          
                           
                                 //{
                                 //    margin: '25 0 0 0',
                                 //    html: '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-28px 0px 0px 0px;width:100%;text-align:right;color:#c800ffc9;height:22px;"><button OnClick="FloatPanel_AyohaStore_Cart_CheckOutStaging_BuyNow();" class="buttonBuyNow" style="margin:0px 0px 0px 2px;">Buy Now</button></div>',
                                 //},
                            {
                            xtype: 'panel',
    width:10
},
                                //{
                                //    xtype:'panel',
                                //    width:'100%',
                                //    height:10
                                //},

                                //{
                                //    xtype: 'container',
                                //    width: '100%',
                                //    height:32,
                                   
                                //    style: 'background-color:transparent;',
                                //    layout: {
                                //        type: 'hbox',
                                //        pack: 'center',
                                //        align: 'center'
                                //    },
                                //    items: [

                                //        {
                                          
                                //            width: '100%',
                                //            id: 'FloatPanel_AyohaStore_SaleItemDetail_Quantity',
                                //            html: '<div style="font-family:Arial, sans-serif;font-size:13px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 0px;width:100%;text-align:center;color:#c800ffc9;height:32px;"><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_MINUS({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ')"  class="buttonSigToCartSign">-</button><input type="number" id="input-FloatPanel_AyohaStore_Cart_Qty{ID}"  style="border-radius: 2px;border: 1px solid black;padding: 2px; width: 35px;height: 36px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;word-break:normal;color:black;text-align:center;background-color:white"/><button OnClick="FloatPanel_AyohaStore_cart_AddToCart_ADD({ID},' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{LoyaltyRewardType}' + "'" + ',' + "'" + '{ItemCode}' + "'" + ')"  class="buttonSigToCartSign">+</button> </div>'
                                //        },

                                //    ]
                                //},
                            //{
                            //    xtype: 'container',
                            //    width: '100%',
                            //    margin: '3 0 0 0',
                            //    style: 'background-color:transparent;',
                            //    layout: {
                            //        type: 'hbox',
                            //        pack: 'center',
                            //        align: 'center'
                            //    },
                            //    items: [
                                   
                            //        {
                            //            margin: '0 0 0 0',
                            //            width: '50%',
                            //            id: 'FloatPanel_AyohaStore_SaleItemDetail_Redeem',
                            //            html: '<div style="background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaStore_SaleItemDetailNow()" class="buttonAyohaPointRedemption_Redeem_Yes" style="margin:0px 0px 0px 0px;">Add To Cart</button></div>'
                            //        },

                            //    ]
                            //},
                            


                            ]
                        }





                ]

            },






        });

    return _FloatPanel_AyohaStore_SaleItemDetail;
}

var FloatPanel_AyohaStore_SaleItemDetailCarousel;
var globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
var globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount;
var globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
var globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType;
var globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemName;
var globalFloatPanel_AyohaStore_SaleItemDetail_ProductStock;
//{ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + '
//function FloatPanel_AyohaStore_SaleItemDetailShow(ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode) 
//({ID},' + "'" + '{ItemCode}' + "'" + ',' + "'" + '{ItemCoverImg}' + "'" + ',' + "'" + '{ItemName}' + "'" + ',' + "'" + '{ItemPrice}' + "'" + ',' + "'" + '{MerchantPoint}' + "'" + ',' + "'" + '{AyohaPoint}' + "'" + ',' + "'" + '{CampaignType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{ProductCategoryName}' + "'" + ',' + "'" + '{ItemCategoryCode}' + "'" + ',' + "'" + '{MembershipCardName}' + "'" + ',' + "'" + '{ItemCoverImgName}' + "'" + ',' + "'" + '{Stock}' + "'" + ',' + "'" + '{ShowStock}' + "'" + ',' + "'" + '{StockAlert}' + "'" + ',' + "'" + '{ModifiedItemDescriptions_01}' + "'" + ',' + "'" + '{ItemPriceDiscount}' + "'" + ',' + "'" + '{ItemPriceDiscountRate}' + "'" + ')


var globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';

function FloatPanel_AyohaStore_SaleItemDetailShow(StampRuleAmount,ID, ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode, ProductCategoryName, ItemCategoryCode, MembershipCardName, ItemCoverImgName, Stock, ShowStock, StockAlert, ModifiedItemDescriptions_01, ItemPriceDiscount, ItemPriceDiscountRate)
{
    globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType=CampaignType;
    if(CampaignType=="MembershipCard"){
        globalFloatPanel_MembershipCardList_NotYetSubscribed_ItemCoverImg=ItemCoverImg;
        globalFloatPanel_MembershipCardList_NotYetSubscribed_price=ItemPrice;
        global_FloatPanel_MembershipCardList_NotYetSubscribed_CardName=ItemName;
        globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode=MembershipCardCode;
        _FloatPanel_MembershipCardList_NotYetSubscribed_MembershipCode=MembershipCardCode;
        globalFloatPanel_MembershipCardList_NotYetSubscribed_price=parseFloat(ItemPrice);


      
        // var objn = {
        //     "SubscriptionCode": GetCurrAyohaUserAccountNo()+'-'+globalFloatPanelMerchantDetailPage_EnterpriseAccNo+'-'+globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode,
        //      "PackagePrice":globalFloatPanel_MembershipCardList_NotYetSubscribed_price,
        //      "SubscribedPackage":globalFloatPanel_MembershipCardList_NotYetSubscribed_plan
        // };




        FloatPanel_MembershipCardList_NotYetSubscribed_CheckExistSubscriptionCode();
       
        return;
    }


    Ext.Viewport.remove(_FloatPanel_AyohaStore_SaleItemDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_SaleItemDetail());
    this.overlay.show();
    is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaStore_SaleItemDetailHide()");

 
   // FloatPanel_AyohaStore_ShareAndWhatsappShow();
   globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount=StampRuleAmount;


   MerchantSumStamp =0;
   stampEntitled=0;
   globalFloatPanel_AyohaStore_Cart_MerchantSumStamp=0;
    if (globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom == "MyCart") {
        Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetailID').setZIndex(330);

       // globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom == "SaleItemDetail") {
        Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetailID').setZIndex(300);
       // Ext.getCmp('FloatPanel_AyohaStore_ShareAndWhatsappID').setZIndex(310);
        

        // globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
    }
   

    var TTlMerchantPoint;
    var TTlAyohaPoint;
    var discount =parseFloat(ItemPriceDiscountRate);
    //alert(ModifiedItemDescriptions_01);

    if (ItemPriceDiscountRate >= 0.1) {
       // alert(ItemPriceDiscountRate)
      //  isPrice = "<div style='font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-21px 0px 0px 0px;color:#c800ffc9;text-align:left;'><strike>RM" + ItemPrice + "</strike></div><div style='font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-16px 0px 0px 80px;color:#c800ffc9;text-align:left;'>RM" + ItemPriceDiscount + "</div>";
        TTlMerchantPoint = parseFloat(ItemPriceDiscount) * parseFloat(MerchantPoint);
        TTlAyohaPoint = parseFloat(ItemPriceDiscount) * parseFloat(AyohaPoint);
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleItemDetailDiscountImg').setHidden(false);
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleItemDetailDiscountImg').setHtml('<img class="blink_me" src="resources/icons/DiscountPurple04.png" alt="Image" style="width:60px;height:90px;margin:0px 0px 0px 0px;"><br><div class="blink_me" style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:-60px 0px 0px 10px;width:100%;text-align:left;color:white;height:90px;">' + discount.toFixed(0) + '%</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;color:#c800ffc9;text-align:center;" ><strike>PRICE:RM' + ItemPrice + '</strike> &nbsp;&nbsp;&nbsp;PRICE:RM' + ItemPriceDiscount + '</div>');
        Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadge').setMargin('55 0 0 35')
       


    }else {
       // isPrice = "<div style='font-family:Arial, sans-serif;font-size:14px;font-weight:bold;word-break:normal;margin:-21px 0px 0px 0px;color:#c800ffc9;width:100%;text-align:left;'>RM" + ItemPrice + "</div>";
        TTlMerchantPoint = parseFloat(ItemPrice) * parseFloat(MerchantPoint);
        TTlAyohaPoint = parseFloat(ItemPrice) * parseFloat(AyohaPoint);
        Ext.getCmp('btnFloatPanel_AyohaStore_SaleItemDetailDiscountImg').setHidden(true);
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;color:#c800ffc9;text-align:center;" >PRICE:RM' + ItemPrice + '</div>');
        Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadge').setMargin('45 0 0 35')
    }

    globalFloatPanel_AyohaStore_SaleItemDetail_ProductStock = "InStock";
    if (ShowStock == "Y") {
        if (Stock > 0) {
            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductStock').setHidden(true);
            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductStock').setHtml('<div style="background: transparent;width:100%;font-size: 13px;font-weight:bold;color:black;text-align:center;" >Stock:' + Stock + '</div>');
        } else {
            globalFloatPanel_AyohaStore_SaleItemDetail_ProductStock = "Out Of Stock";
            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductStock').setHidden(true);
            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductStock').setHtml('<div style="background: transparent;width:100%;font-size: 13px;font-weight:bold;color:red;text-align:center;" >Out Of Stock</div>');
        }
    } else {
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductStock').setHidden(true);
    }
    
   
    if (globalFloatPanel_AyohaStore_CartTotalItemQuantity == 1) {
      //  Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM' + globalFloatPanel_AyohaStore_CartSumItemSumPrice + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div onclick="FloatPanel_AyohaStore_CartShow()" style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');

        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeTextItem').setHtml('<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>');
    }

    if (globalFloatPanel_AyohaStore_CartTotalItemQuantity > 1) {
       // Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_CartAmount').setHtml('<div style="background: transparent;height:30px;font-size: 13px;font-weight:bold;color:black;text-align:center;" >RM' + globalFloatPanel_AyohaStore_CartSumItemSumPrice + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeTextItem').setHtml('<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Items</div>');
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText').setHtml('<div onclick="FloatPanel_AyohaStore_CartShow()" style="background: transparent;height:10px;font-size: 12px;font-weight:normal;color:black;text-align:center;" ><b>' + globalFloatPanel_AyohaStore_CartTotalItemQuantity + '</b></div>');

    }


    //TTlMerchantPoint = parseFloat(ItemPriceDiscount) * parseFloat(MerchantPoint);
    //TTlAyohaPoint = parseFloat(ItemPriceDiscount) * parseFloat(AyohaPoint);

    FloatPanel_AyohaStore_SaleItemDetailCarousel = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_Carousel');
    globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint = MerchantPoint;
    globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint = AyohaPoint;
    globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType = CampaignType;
    globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode = MembershipCardCode;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode = ItemCode;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice = ItemPrice;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount = ItemPriceDiscount;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate = ItemPriceDiscountRate;
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemName = ItemName;
   
    //Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName').setHtml('<font size=2 color=white><b>' + ItemName + '</b></font>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName').setHtml('<div style="background: transparent;width:100%;font-size: 15px;font-weight:bold;color:black;text-align:center;" >' + ItemName + '</div>');
    //Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;color:#c800ffc9;text-align:center;" >PRICE:RM' + ItemPrice + '</div>');



 //alert(globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint)




  
    if (CampaignType == "Stamp Reward Loyalty Card") {
        var StampRuleAmount = parseFloat(MerchantPoint);
        var ItemPriceDiscountRates = parseFloat(ItemPriceDiscountRate);
        var ItemPrices = parseFloat(ItemPrice);
        var ItemPriceDiscounts = parseFloat(ItemPriceDiscount);
        var stamp;
        if (ItemPriceDiscountRates >= 0.1) {
            if (ItemPriceDiscounts >= StampRuleAmount) {

                stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);
                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');

            }
           

        } else {
            if (ItemPrices >= StampRuleAmount) {

                stamp = parseInt(ItemPrices) / parseInt(StampRuleAmount);
                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + stamp + ' Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + stamp + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');

            }
            if (ItemPrices < StampRuleAmount) {

               // stamp = parseInt(ItemPrices) / parseInt(StampRuleAmount);
                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="0 Stamp(s)" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*1 Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');

            }
        }
    } else {
        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="' + TTlMerchantPoint.toFixed(2) + ' M.Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 70px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;<input type="text" readOnly value="*' + TTlAyohaPoint.toFixed(2) + ' Ayoha Point" style="border-radius: 0px;border: 1px none purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:black;text-align:left;background-color:transparent;"/></div>');

    }
   


    var regex = /<br\s*[\/]?>/gi;
    var ModifiedItemDescription = ModifiedItemDescriptions_01.replace(regex, "\n");


    //console.log(ModifiedItemDescription.length);

    //var ItemDescLength = parseInt(ModifiedItemDescription.length) - 150;
    //var ItemDescLengthTxtArea = parseInt(ModifiedItemDescription.length) - 140;
    //var xx = parseInt(ModifiedItemDescription.length) + 100;

    //var ItemDescLength =parseInt(ModifiedItemDescription.length)+30;
    //var ItemDescLengthTxtArea = parseInt(ModifiedItemDescription.length)+20;
    //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescription').setHeight(ItemDescLength);
    //Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc').setHtml('<textarea id="input-htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc" style="width:95%;height: ' + ItemDescLengthTxtArea + 'px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>');

    document.getElementById('input-htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDesc').value = ModifiedItemDescription;

    FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemImgExtendloadByItemCodeStore(ItemCode, ItemCoverImg);
   
    //FloatPanel_AyohaStore_ScrollUpDownShow();
  

    



    var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail__AddNewReviewPanel.on('tap',
      function (event, node, options, eOpts) {
          globalAyohaMerchantReview_ItemCodeReview = globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode;
          AyohaMerchantReview_AddEditShow_Add();
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselProductDesc();
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselReviewAndRate();
      }
    );


    var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselSellerInfo();
      }
    );

    

    var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_StarOutterMaster = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail_StarOutterMaster]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_StarOutterMaster = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_StarOutterMaster.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_StarOutterMaster.on('tap',
      function (event, node, options, eOpts) {
          globalAyohaMerchantReview_ItemCodeReview = globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode;
          AyohaMerchantReview_AddEditShow_Add();
      }
    );
    



    var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart]')[0];
    var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart.element;
    containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetailMyCart.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaStore_CartShow();
      }
    );



   
    if (isFloatPanel_AyohaStoreOpen == 'N') {
        var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_AyohaStore_SaleItemDetail_loadAyohaStore();
          }
        );
    }

   


    

    FloatPanel_AyohaStore_SaleItemDetail_RateAndReview();
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'Y';  

    FloatPanel_AyohaReward_AyohaTapContestHide();
    LoadingPanelHide();
}


function FloatPanel_AyohaStore_SaleItemDetail_loadAyohaStore() {
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();
    MerchantSumStamp =0;
    stampEntitled=0;
    globalFloatPanel_AyohaStore_Cart_MerchantSumStamp=0;

    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
        FloatPanel_OrderCartHide();
        FloatPanel_RewardStore_OpenStore(ID);
        FloatPanel_AyohaReward_AyohaTapContestHide();

        Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetailID').setZIndex(50);
       // Ext.getCmp('FloatPanel_AyohaStore_ShareAndWhatsappID').setZIndex(60);
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}


var globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate;
var globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount;

function FloatPanel_AyohaStore_SaleItemDetailShowExt(ID) {
    Ext.Viewport.remove(_FloatPanel_AyohaStore_SaleItemDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_SaleItemDetail());
    this.overlay.show();
    is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'Y';
    FloatPanel_AyohaReward_AyohaTapContestHide();
    AddRoutePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
    MerchantSumStamp =0;
    stampEntitled=0;
    globalFloatPanel_AyohaStore_Cart_MerchantSumStamp=0;
   // (ItemCode, ItemCoverImg, ItemName, ItemPrice, MerchantPoint, AyohaPoint, CampaignType, MembershipCardCode)

    var ItemCode = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemCoverImg = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemName = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemPrice = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var MerchantPoint = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var StampRuleAmount = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var AyohaPoint = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var CampaignType = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var MembershipCardCode = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemPriceDiscountRate =  _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);
    var ItemPriceDiscount = _DataStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore.findRecord('ID', ID, 0, false, false, true);


    FloatPanel_AyohaStore_SaleItemDetailCarousel = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_Carousel');
    globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint = MerchantPoint.get('MerchantPoint');
    globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount= StampRuleAmount.get('StampRuleAmount');
    globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint = AyohaPoint.get('AyohaPoint');
    globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType = CampaignType.get('CampaignType');
    globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode = MembershipCardCode.get('MembershipCardCode');
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode = ItemCode.get('ItemCode');
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice = ItemPrice.get('ItemPrice');

    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate = ItemPriceDiscountRate.get('ItemPriceDiscountRate');
    globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount = ItemPriceDiscount.get('ItemPriceDiscount');

    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemName').setHtml('<font size=2 color=white><b>' + ItemName.get('ItemName') + '</b></font>');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):' + ItemPrice.get('ItemPrice') + '</u></div>');
   //alert(globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint)
    FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemImgExtendloadByItemCodeStore(ItemCode.get('ItemCode'), ItemCoverImg.get('ItemCoverImg'));




    if (isFloatPanel_AyohaStoreOpen == 'N') {
        var containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName]')[0];
        var containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName = containerViewnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName.element;
        containerViewElnamecontainerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogoAndName.on('tap',
          function (event, node, options, eOpts) {

              FloatPanel_AyohaStore_SaleItemDetail_loadAyohaStore();
          }
        );
    }

}

function FloatPanel_AyohaStore_SaleItemDetailShowExtNoImage() {
    swalFireWarning("No Sale Item Image!");
}

var is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';


var stampEntitled=0;
var MerchantSumStamp=0;
function FloatPanel_AyohaStore_SaleItemDetailAddToCart() {
    MerchantSumStamp=0;
    var val = document.getElementById("input-FloatPanel_AyohaStore_SaleItemDetail").value;
    if (globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus == "NotMember_NoMembershipCard") {
        // Swal.fire({ title: '<strong>HTML <u>example</u></strong>', icon: 'info', html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class="fa fa-thumbs-down"></i>', cancelButtonAriaLabel: 'Thumbs down' });

        Swal.fire({
            title: '',
            html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMember(),
            //html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>Every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
            //imageUrl: "resources/icons/membershipPurpleThree.png",
            imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
            imageWidth: 350,
            imageHeight: 200,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'JOIN',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        }).then(function (result) {
            if (result.isConfirmed) {
                localStorage.setItem("MembershipByMethod", "AyohaStore");
                // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()
                FloatPanel_AyohaStore_SaleItemDetailHide();
                var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
                FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
            }
        });
        return;

    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode == "NotMember") {
        // Swal.fire({ title: '<strong>HTML <u>example</u></strong>', icon: 'info', html: 'You can use <b>bold text</b>, ' + '<a href="//sweetalert2.github.io">links</a> ' + 'and other HTML tags', showCloseButton: true, showCancelButton: true, focusConfirm: false, confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!', confirmButtonAriaLabel: 'Thumbs up, great!', cancelButtonText: '<i class="fa fa-thumbs-down"></i>', cancelButtonAriaLabel: 'Thumbs down' });

        Swal.fire({
            title: '',
            html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>."+setMessage_toBeAyohaMember(),
            //html: "<b>Hi!,! You are not member of " + FloatPanel_AyohaStore_getEnterpriseName() + "</b>.<br><br>Every ayoha reward user required to be a member in every one of our online stores,we will give you more rewards for every purchase you make.<br><br>  Press JOIN to get a membership card and join the campaign!",
            //imageUrl: "resources/icons/membershipPurpleThree.png",
            imageUrl: FloatPanel_AyohaStore_getEnterpriseLogo(),
            imageWidth: 350,
            imageHeight: 200,
            showCloseButton: true,
            showCancelButton: false,
            //  confirmButtonColor: '#3085d6',
            confirmButtonColor: '#9932cc',
            cancelButtonColor: '#d33',
            confirmButtonText: 'JOIN',
            footer: '<img src="resources/icons/Logo/AyohaLogofullOrange.png" width="100" height="70" alt="Company Name"/>'
        }).then(function (result) {
            if (result.isConfirmed) {
                localStorage.setItem("MembershipByMethod", "AyohaStore");
                // GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom()
                FloatPanel_AyohaStore_SaleItemDetailHide();
                var ent = FloatPanel_AyohaStore_getEnterpriseAccNo();
                FloatPanel_RewardStoreMembershipCardShow_FromQrCode(ent, ent);
            }
        });
        return;

    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_MembershipCardCode == "NoMembershipCard") {
        FloatPanel_AyohaStore_SaleItemDetailHide();
        swalFireWarning("This Merchant not create membership card!,Cannot procced.");
        return;
    }
    if (globalFloatPanel_AyohaStore_SaleItemDetail_ProductStock == "Out Of Stock") {
        // FloatPanel_AyohaStore_SaleItemDetailHide();
        swalFireDynamicIconWithMessage("resources/icons/outofstock.png", "Out Of Stock!", "red", "red");
      //  swalFireGeneralMessaging("Out Of Stock!", "resources/icons/outofstock.png");
        return;
    }
    if (val) {
       

        var Qty = parseInt(val);

        if (Qty <= 0) {
            return;
        }

       



       
        var MerchantPoint = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint);
   
        var AyohaPoint = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint);
        var ItemPrice = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice);
        var ItemPriceDiscountRate = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate);
        var ItemPriceDiscount = parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount);
        var TTlMerchantPoint;
        var TTlAyohaPoint;
        var SumPrice;
        var StampRuleAmount=parseInt(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
    




        if (ItemPriceDiscountRate >= 0.1) {
               
            TTlMerchantPoint = (ItemPriceDiscount * MerchantPoint)* Qty;
            TTlAyohaPoint = (ItemPriceDiscount * AyohaPoint)* Qty;
            stampEntitled=(ItemPriceDiscount / StampRuleAmount)* Qty;
            SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
        } else {
            
            TTlMerchantPoint = (ItemPrice * MerchantPoint)* Qty;
            TTlAyohaPoint = (ItemPrice * AyohaPoint)* Qty;
            stampEntitled=(ItemPrice / StampRuleAmount)* Qty;
            SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
        }



        
        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Stamp Reward Loyalty Card") {
          














            // var StampRuleAmount = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_StampRuleAmount);
            // var ItemPriceDiscountRates = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate);
            // var ItemPriceDiscounts = parseFloat(globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount);
            // var stamp;
            // if (ItemPriceDiscountRates >= 0.1) {
            //     if (ItemPriceDiscounts >= StampRuleAmount) {

            //         stamp = parseInt(ItemPriceDiscounts) / parseInt(StampRuleAmount);
            //         TTlAyohaPoint = ItemPriceDiscount * AyohaPoint;
                 
            //     }

            //     SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            // } else {
            //     if (ItemPrices >= StampRuleAmount) {

            //         stamp = parseInt(ItemPrices) / parseInt(StampRuleAmount);
               
            //     }
            //     if (ItemPrices < StampRuleAmount) {

            //         stamp = 1;
                  
            //     }
            //     SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            // }
           // MerchantSumStamp = MerchantSumStamp+stampEntitled;


           MerchantSumStamp = stampEntitled;
           // MerchantSumStamp = globalFloatPanel_AyohaStore_Cart_MerchantSumStamp + stampEntitled;
            TTlMerchantPoint = 0.00;


        }
        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Point Reward Loyalty Card") {
           


            if (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate > 0) {

                TTlMerchantPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
                TTlAyohaPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
                MerchantSumStamp = 0;
                SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
            } else {
                TTlMerchantPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint;
                TTlAyohaPoint = (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty) * globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint;
                MerchantSumStamp = 0;
                SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
            }
        }

        if (globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType == "Point Reward Loyalty Card|Stamp Reward Loyalty Card") {
          
           MerchantSumStamp = stampEntitled;
           // MerchantSumStamp = globalFloatPanel_AyohaStore_Cart_MerchantSumStamp + stampEntitled;
        
        
        }
  


        //alert(MerchantSumStamp)
        // console.log(globalFloatPanel_AyohaStore_Cart_MerchantSumStamp)
        // console.log(stampEntitled)

        //if (globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscountRate > 0) {
        //    SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPriceDiscount * Qty;
        //} else {
        //    SumPrice = globalFloatPanel_AyohaStore_SaleItemDetail_ItemPrice * Qty;
        //}

       
        //Ext.Viewport.mask({ xtype: 'loadmask', message: '...' });

      
        FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert(globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode, Qty, SumPrice, globalFloatPanel_AyohaStore_SaleItemDetail_CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, globalFloatPanel_AyohaStore_SaleItemDetail_MerchantPoint, globalFloatPanel_AyohaStore_SaleItemDetail_AyohaPoint);
       // FloatPanel_AyohaStore_Cart_AyohaStoreCart_Insert(ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint)
      
        // (ItemCode, Qty, SumPrice, CampaignType, TTlMerchantPoint, TTlAyohaPoint, MerchantSumStamp, MerchantPoint, AyohaPoint)
    } else {

    }


    // AC.LoyaltyRewardType, AC.MerchantSumPoint, AC.AyohaSumPoint, AC.MerchantSumStamp
}


function FloatPanel_AyohaStore_SaleItemDetailHide() {

    if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == 'Y') {
        _FloatPanel_AyohaStore_SaleItemDetail.hide();
        globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
        is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
        _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';
        RemovePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
        FloatPanel_AyohaStore_ShareAndWhatsappHide();
        FloatPanel_AyohaReward_AyohaTapContestHide();
    }

}




function FloatPanel_AyohaStore_SaleItemDetailHide_AyohaStoreOnlinePayment() {

    if (is_FloatPanel_AyohaStore_SaleItemDetailOpen == 'Y') {
        _FloatPanel_AyohaStore_SaleItemDetail.hide();
        globalFloatPanel_AyohaStore_SaleItemDetail_OpenFrom = 'SaleItemDetail';
        is_FloatPanel_AyohaStore_SaleItemDetailOpen = 'N';
        _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';
        RemovePages("FloatPanel_AyohaStore_SaleItemDetailHide()");
       
    }

}


function FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemImgExtendloadByItemCodeStore(ItemCode,ItemCoverImg) {

    var Store;
    var counter = 1;
    _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getProxy().setExtraParam('ItemCode', ItemCode);
    _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getProxy().setUrl(GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemImgExtendloadByItemCode');
    _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = parseInt(_DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getCount());
        for (i = 0; i < count; i++) {
            Store = _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getAt(i);
            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHidden(false);
            //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHtml('<img src="' + Store.get('ImgPath') + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

            FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: Store.get('ImgPath'), height: '100%', width: '100%', mode: 'image' });
            counter++;
        }



        ////////if (count == 0) {
        ////////    FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: ItemCoverImg, height: '100%', width: '100%', mode: 'image' });
        ////////    //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHidden(false);
        ////////    //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHtml('<img src="' + ItemCoverImg + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

        ////////    return;
        ////////} else {
        ////////    FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: ItemCoverImg, height: '100%', width: '100%', mode: 'image' });
        ////////    //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHidden(false);
        ////////    //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture0').setHtml('<img src="' + ItemCoverImg + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

        ////////    for (i = 0; i < count; i++) {
        ////////        Store = _DataStore_AyohaStoreSaleItemImgExtendloadByItemCodeStore.getAt(i);
        ////////        //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHidden(false);
        ////////        //Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_Picture' + counter).setHtml('<img src="' + Store.get('ImgPath') + '" style="width:42px;height:42px;margin:0px 0px 0px 0px;border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background: white;border-radius: 5px 5px 5px 5px;" alt="Company Name">');

        ////////        FloatPanel_AyohaStore_SaleItemDetailCarousel.add({ xtype: 'image', src: Store.get('ImgPath'), height: '100%', width: '100%', mode: 'image' });
        ////////        counter++;
        ////////    }
          
        ////////}

       


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}





function FloatPanel_AyohaStore_SaleItemDetailNow() {



    var CurrAyohaPoint = parseInt(localStorage.getItem("AyohaPoint"));
    var intglobalFloatPanel_AyohaPointRedemption_Point = parseInt(globalFloatPanel_AyohaPointRedemption_Point);
    //console.log(CurrAyohaPoint);10009
    //console.log(globalFloatPanel_AyohaPointRedemption_Point);5000
    //if (CurrAyohaPoint < globalFloatPanel_AyohaPointRedemption_Point) {
    //    swalFireWarning("Not Enough Ayoha Point!");
    //    return;
    //}
    //if (globalFloatPanel_AyohaPointRedemption_Point < CurrAyohaPoint) {

    //    return;
    //}



    if (CurrAyohaPoint >= intglobalFloatPanel_AyohaPointRedemption_Point) {

        var obj = {
            "ID": 0,
            "ItemCode": globalFloatPanel_AyohaPointRedemption_ItemCode,
            "RedeemHistoryCode": GenerateRandomNo() + "-" + globalFloatPanel_AyohaPointRedemption_ItemCode + "-" + GetCurrAyohaUserAccountNo(),
            "RedeemHistoryStatus": "Submitted",
            "RedeemHistoryStatusBy": GetCurrAyohaUserAccountNo(),
            "RedeemPoint": intglobalFloatPanel_AyohaPointRedemption_Point,
            "Remarks": "NA",
            "RowStatus": 'Active',
            "AyohaPoint": CurrAyohaPoint,

        };
        console.log(obj);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaRedeemPrizeHistory/AyohaRedeemPrizeHistoryInsertUpdate',

            dataType: "json",
            data: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {

                    swalFireSuccess("Redeem has been Submitted!");
                    FloatPanel_AyohaStore_SaleItemDetailHide()
                    //  Dashboard_AyohaRewardSummary();
                    // FloatPanel_RedeemPrizeHide();

                }
                else {

                    swalFireFail("Redeem Process Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");


                }

                Ext.Viewport.unmask();

            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                // swalFireFail("Scan Failed!!");

            }

        });
    } else {
        swalFireWarning("Not Enough Ayoha Point!");
    }




}



function FloatPanel_AyohaStore_SaleItemDetail_SlideImage(row_num) {
    

    var val = parseInt(row_num) - 1;

    Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_Carousel').setActiveItem(val);
}






function FloatPanel_AyohaStore_SaleItemDetail_RateAndReview() {

    
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getProxy().setExtraParam('ItemCodeReview', globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReview');
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.load();
 

    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                var count = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getCount();
                FloatPanel_AyohaStore_SaleItemDetail_CalculateRating();
              //  LoadingPanelHide();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });












    // var task = Ext.create('Ext.util.DelayedTask', function () {

    //     var count = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getCount();
    //     FloatPanel_AyohaStore_SaleItemDetail_CalculateRating();
       
    //  //   Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Record found</div>');


    // });
    // task.delay(500);


    // Ext.Viewport.setMasked(false);
}




function FloatPanel_AyohaStore_SaleItemDetail_CalculateRating() {
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });
    var EnterpriseAccNumber = FloatPanel_AyohaStore_getEnterpriseAccNo();
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "HotSeatAdvertisement")
    //{
    //    EnterpriseAccNumber = globalFloatPanel_PreviewAdvertisement_EnterpriseAccNo;
    //}
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "VIAAdvertisement") {
    //    EnterpriseAccNumber = globalDashboardVIAAdvertisement_EnterpriseAccNo;
    //}
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "StampCard") {
    //    EnterpriseAccNumber = globalStampCampaignEnterpriseAccNo;
    //}
    //if (globalFloatPanel_AyohaStore_ModuleTagging == "AyohaMerchant") {
    //    EnterpriseAccNumber = globalFloatPanel_RewardStore_EnterpriseAccNo;
    //}



    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNumber,
            "ItemCodeReview": globalFloatPanel_AyohaStore_SaleItemDetail_ItemCode
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewCalculateRatingSaleItemDetail',

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

                        if (TotalAvg) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateCountOutter').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');

                        } else {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateCountOutter').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                        }

                      //  Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRate').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Review And Rate('+TotalVoter+')</div>');
                        Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                        //  Ext.getCmp('htmlAyohaMerchantReview_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp; Reviews</div>');

                        var RateReviews = TotalAvg.toFixed(1);



                        if (RateReviews == 5) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');


                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');

                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');





                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');





                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star1Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star2Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                        }


























                        //var task = Ext.create('Ext.util.DelayedTask', function () {

                        //    setDashBoardMerchantReviewRate();
                        //});

                        //task.delay(500);





                        // globalAyohaMerchantReviewRating = Math.round(TotalAvg);
                        // globalAyohaMerchantReviewRating = TotalAvg.toFixed(1);



                        // console.log(globalAyohaMerchantReviewRating);
                        // --20 + 8 + 9 + 2 + 1 / 11
                       
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

function FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselProductDesc() {
    //var crsl = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent');
    //crsl.previous();
    Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent').setActiveItem(0);

    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Description</div>');
}
function FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselReviewAndRate() {
    //var crsl = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent');
    //crsl.next();
    Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent').setActiveItem(1);
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');

}


function FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselSellerInfo() {
    Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent').setActiveItem(2);
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');
    Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Seller Info</div>');
    if (globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath) {
        FloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterprisesLoadByEnterpriseAccNoStore_Existing();

    } else {
        FloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterprisesLoadByEnterpriseAccNoStore();
    }
}


var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseName;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseAddress;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseTagLine;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseRegistrationNo;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseDescriptions;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_CreatedDate;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_PICContactNo;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_PersonInCharge;
var globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_Negeri;


function FloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterprisesLoadByEnterpriseAccNoStore_Existing(){
     Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogo').setHtml('<div ><img src="' + globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath + '" width="80" height="65" alt="Company Name"></div>');
     Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_CompanyName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseName + '</div>');
     Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Tagline').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseRegistrationNo + '</div>');
     document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Location').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseAddress;
     document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_State').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_Negeri;
     document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_PIC').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_PersonInCharge;
     document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_DateJoin').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_CreatedDate;
     document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_BRN').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseRegistrationNo;
}



function FloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterprisesLoadByEnterpriseAccNoStore() {



    _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNo');
    _DataStore_EnterprisesLoadByEnterpriseAccNoStore.load();
    // 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count = _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getCount();
        var Store = _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getAt(0);

        if (Count > 0) {
           
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath = Store.get('EnterpriseLogoPath');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseName = Store.get('EnterpriseName');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseAddress = Store.get('EnterpriseAddress');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseTagLine = Store.get('EnterpriseTagLine');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseRegistrationNo = Store.get('EnterpriseRegistrationNo');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseDescriptions = Store.get('EnterpriseDescriptions');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_CreatedDate = Store.get('CreatedDate');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_PICContactNo = Store.get('PICContactNo');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_PersonInCharge = Store.get('PersonInCharge');
            globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_Negeri = Store.get('Negeri');




           Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfoLogo').setHtml('<div ><img src="' + globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseLogoPath + '" width="80" height="65" alt="Company Name"></div>');
           Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_CompanyName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseName + '</div>');
           Ext.getCmp('htmlFloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Tagline').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseTagLine + '</div>');
           document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_Location').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseAddress;
           document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_State').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_Negeri;
           document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_PIC').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_PersonInCharge;
           document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_DateJoin').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_CreatedDate;
           document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail_SellerInfo_BRN').value = globalFloatPanel_AyohaStore_AyohaStoreSaleItemDetail_EnterpriseRegistrationNo;
        }

       
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}


function FloatPanel_AyohaStore_SaleItemDetail_UpdateQuantity(change) {
    const input = document.getElementById('input-FloatPanel_AyohaStore_SaleItemDetail');
    let currentValue = parseInt(input.value) || 0;
    currentValue += change;
    if (currentValue < 1) currentValue = 1;  // Prevent going below 1
    input.value = currentValue;
}