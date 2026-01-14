Ext.define('BuskartApp.view.Membership.FloatPanel_Membership_MembershipCardSaleDetail', {
    requires: [
'Ext.carousel.Carousel',
'Ext.util.DelayedTask',
'Ext.Video'
    ],
});


var _isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime='N';




var _FloatPanel_Membership_MembershipCardSaleDetail;

function FloatPanel_Membership_MembershipCardSaleDetail() {

    _FloatPanel_Membership_MembershipCardSaleDetail = Ext.create('Ext.Container',


        {
            id: 'FloatPanel_Membership_MembershipCardSaleDetailID',
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
            //    type: 'vbox',
            //    pack: 'start',
            //    align: 'center'
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
         

          
            items: {
                //zIndex: 40,
                xtype: 'container',
                style: ' background-color:transparent;',
               // style: 'background-color:rgba(0, 0, 0, 0.8);border-radius: 0px 0px 0px 0px;',
                // style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                //style: 'background-image: url("resources/icons/ConfetiFour.gif"); background-size: 100% 100%;background-repeat: no-repeat;',

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
                                 

                                  {

                                      xtype: 'container',
                                      width: '100%',
                                      // width: 40,
                                      //zIndex:-10,
                                      //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                      //hidden: true,
                                      height: 30,
                                     docked: 'top',
                                      id: 'containerFloatPanel_Membership_MembershipCardSaleDetailHeader1',
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
                                          pack: 'start',
                                          align: 'left',
                                      },
                                      // hidden:true,
                                      items:
                                             [








                                                 {
                                                     xtype: 'button',
                                                     id: 'btnFloatPanel_Membership_MembershipCardSaleDetailBack',
                                                     height: 40,
                                                     //hidden:true,
                                                     width: 55,
                                                     margin: '0 0 0 0',
                                                     // iconCls: 'list',
                                                     html: '<div ><img src="resources/icons/backblack02.png" width="25" height="20" alt="Company Name"></div>',
                                                     ui: 'plain',
                                                     handler: function () {
                                                         _FloatPanel_Membership_MembershipCardSaleDetail.hide(Ext.fx.Animation({
                                                             type: 'slideOut',
                                                             direction: 'left',
                                                             easing: 'cubic-bezier(.7,0,.7,1)',
                                                             duration: 250

                                                         }));
                                                         is_FloatPanel_Membership_MembershipCardSaleDetailOpen = 'N';
                                                         _isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime = 'N';
                                                         RemovePages("FloatPanel_Membership_MembershipCardSaleDetailHide()");
                                                         globalFloatPanel_Membership_MembershipCardSaleDetail_OpenFrom = 'SaleItemDetail';
                                                         FloatPanel_AyohaStore_ShareAndWhatsappHide();
                                                     }
                                                 },
                                                 {
                                                    xtype: 'spacer',
                                                    //width:15

                                                },
                                                 {
                                                    height: 40,
                                                    margin: '10 0 0 0',
                                                   //  width: 155,
                                                    html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:left;">Membership Card</div>'
                                                },

                                                           


                                                          {
                                                              xtype: 'container',
                                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetailMyCart',
                                                              name: 'namecontainerFloatPanel_Membership_MembershipCardSaleDetailMyCartx',
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
                                                                      id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_CartAmount',
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
                                                                  //      id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MyCartCountbadge',
                                                                  //      style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                                                  //      layout: {
                                                                  //          type: 'vbox',
                                                                  //          pack: 'center',
                                                                  //          align: 'center'

                                                                  //      },
                                                                  //      items: [

                                                                  //{
                                                                  //    margin: '-4 0 0 0',
                                                                  //    id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_MyCartCountbadgeText',
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
                                                                  //    id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_MyCartCountbadgeTextItem',
                                                                  //    hidden:true,
                                                                  //    html: '<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>'
                                                                  //},

                                                                  //      ]
                                                                  //  },




                                                              ]
                                                          },



                                             {
                                                 xtype: 'panel',
                                                 width: 25
                                             }




                                             ]

                                  },
                                  /////////////////////////////





                                  


                                 








                                                 
                                                       

                                                        

                          
                        {
                            xtype: 'container',
                            width: '100%',
                            id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MasterOuter',
                           // zIndex: 100,
                            //hidden:true,
                            margin: '0 0 0 0',
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
                                    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_Master',
                                    //zIndex: 100,
                                    // hidden:true,
                                    // margin: '-80 0 0 0',
                                    height: 1600,
                                    //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center'

                                    },
                                  
                                    items: [
                                           {
                                               xtype: 'carousel',
                                               //hidden:true,
                                               id: 'FloatPanel_Membership_MembershipCardSaleDetail_Carousel',
                                               name: 'nameFloatPanel_Membership_MembershipCardSaleDetail_Carousel',
                                               //width: '100%',
                                               //height: '100%',
                                               width: '100%',
                                               height: 300,
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
                                               items: [
                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    height: 300,
                                                    style: 'background-color:transparent',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
     
                                                    },
                                                    items:[




{
    xtype: 'container',
    width: '90%',
   // height: 235,
    height: 200,
    id:'containerFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardFrontView',
   // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 280px;background-repeat: no-repeat;',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
    width: '95%',
    height: 80,
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'left',
        align: 'center'

    },items:[
        {
            id:'imgFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardEnterpriseLogo',
            html: '<img src="resources/icons/whatsapp01.png" style="width:60px;height:60px;margin:0px 0px 0px 0px;border-radius:50%;" alt="Company Name">',
        },
        {
xtype:'spacer',
width:5
        },
        {
            id:'txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardEnterpriseName',
            html: '<div style="background: transparent;width:100%;font-size: 22px;font-weight:bold;color:white;text-align:left;">SULIANTI ENTERPISE</div>'
           // html: '<img src="resources/icons/whatsapp01.png" style="width:60px;height:60px;margin:0px 0px 0px 0px;border-radius:50%;" alt="Company Name">',
        },
    ]
        },




        {
            xtype: 'container',
    width: '95%',
    height: 70,
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'left'

    },items:[
        {
            //margin:'',
            hidden:true,
            id:'txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardName',
            html: '<div style="background: transparent;width:100%;font-size: 20px;font-weight:normal;color:white;text-align:left;font-family:Playball, cursive">BIBIK FAN BOYS</div>'
        },
        { 
            id:'txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardLevel',
            margin:'-7px 0px 0px 0px',
        html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:normal;color:white;text-align:left;font-family:Orbitron">(GOLD)</div>'
    },
        { 
            id:'txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardNo',
            margin:'-7px 0px 0px 0px',
            html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:normal;color:white;text-align:left;font-family:Orbitron">123456789</div>'
        },
        {   id:'txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardMemberName',
            margin:'-7px 0px 0px 0px',
            html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:normal;color:white;text-align:left;font-family:Orbitron">MEMBER NAME</div>'
        },
       
    ]
        },



        {
            xtype: 'container',
    width: '95%',
    height: 40,
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },items:[


{

    xtype: 'container',
    width: '100%',
    height: 30,
    docked:'bottom',
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '50%',
            height: 30,
            style: 'background-color:transparent',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'center'
        
            },
            items:[

{

    xtype: 'container',
    width: '100%',
    height: 30,
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'left'

    },
    items:[
        {margin:'4 0 0 0',
            html: '<div style="background: transparent;width:100%;font-size: 9px;font-weight:bold;color:white;text-align:left;font-family:Orbitron,sans-serif;">Member Since</div>'
        },
        {margin:'-4 0 0 0',
            html: '<div style="background: transparent;width:100%;font-size: 9px;font-weight:bold;color:white;text-align:left;font-family:Orbitron,sans-serif;">00/00</div>'
        }
    ]
},

                
            ]
        },
        {
            xtype: 'container',
            width: '50%',
            height: 30,           
            style: 'background-color:transparent',
            layout: {
                type: 'hbox',
                pack: 'end',
                align: 'center'
        
            },
            items:[

{

    xtype: 'container',
    width: '100%',
    height: 30,
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'right'

    },
    items:[
        {
            margin:'4 0 0 0',
            html: '<div style="background: transparent;width:100%;font-size: 9px;font-weight:bold;color:white;text-align:left;font-family:Orbitron,sans-serif;">Valid Until</div>'
        },
        {  margin:'-4 0 0 0',
            html: '<div style="background: transparent;width:100%;font-size: 9px;font-weight:bold;color:white;text-align:left;font-family:Orbitron,sans-serif;">00/00</div>'
        }
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



                                                      
                                                    ]
                                                    
                                                },




                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    height: 300,
                                                    style: 'background-color:transparent',
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
     
                                                    },
                                                    items:[
                                                        {
                                                            xtype: 'container',
                                                            width: '90%',
                                                            height: 200,
                                                            id:'containerFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardBackView',
                                                           // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 280px;background-repeat: no-repeat;',
                                                            layout: {
                                                                type: 'vbox',
                                                                pack: 'start',
                                                                align: 'center'
                                                        
                                                            },
                                                            items:[
                                                              
                                                            ]
                                                        },
                                                        


                                                      
                                                    ]
                                                    
                                                },
                                               

                                               ]
                                           },
                                           {
                                               xtype: 'container',
                                               width: '95%',
                                             // hidden:true,
                                               margin: '-10 0 0 0',
                                               zIndex:100,
                                               id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_CarouselInnerCompanyInfo',
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
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ShareAndWhatsappWsBtn',
                                                       layout: {

                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                         
                                                           {
                                                               xtype: 'container',
                                                               zIndex: 200,
                                                               hidden:true,
                                                               height: 35,
                                                               width: 35,
                                                               margin: '45 0 0 35',
                                                               id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MyCartCountbadge',
                                                               name: 'namecontainerFloatPanel_Membership_MembershipCardSaleDetailMyCart',
                                                               style: 'border-right:1px solid black;border-left:1px solid black;border-bottom:1px solid black;border-top:1px solid black ;background-color: white;border-radius: 50%;',
                                                               layout: {
                                                                   type: 'vbox',
                                                                   pack: 'center',
                                                                   align: 'center'

                                                               },
                                                               items: [

                                                           {
                                                               margin: '-1 0 0 0',
                                                               id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_MyCartCountbadgeText',
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
                                                               id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_MyCartCountbadgeTextItem',
                                                               hidden: true,
                                                               html: '<div style="background: transparent;height:5px;font-size: 8px;font-weight:normal;color:black;text-align:center;" >Item</div>'
                                                           },

                                                               ]
                                                           },
                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_Membership_MembershipCardSaleDetailDiscountImg',
                                                                height: 90,
                                                                width: 70,
                                                                hidden: true,
                                                                // iconCls: 'list',
                                                                margin: '30 3 0 0',
                                                                html: '<img class="blink_me" src="resources/icons/DiscountPurple04.png" alt="Image" style="width:60px;height:90px;margin:0px 0px 0px 0px;"><br><div class="blink_me" style="font-family:Arial, sans-serif;font-size:22px;font-weight:bold;word-break:normal;margin:-60px 0px 0px 10px;width:100%;text-align:left;color:white;height:90px;">50%</div>',
                                                                ui: 'plain',
                                                                handler: function () {
                                                                    _FloatPanel_Membership_MembershipCardSaleDetail.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    is_FloatPanel_Membership_MembershipCardSaleDetailOpen = 'N';
                                                                    globalFloatPanel_Membership_MembershipCardSaleDetail_OpenFrom = 'SaleItemDetail';
                                                                    RemovePages("FloatPanel_Membership_MembershipCardSaleDetailHide()");
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
                                                       name:'namecontainerFloatPanel_Membership_MembershipCardSaleDetail_StarOutterMaster',
                                                       margin: '0 0 0 0',
                                                       height: 35,
                                                       // style: 'background-color:rgba(255, 255, 255, 0.3);border-radius: 10px 10px 10px 10px;',
                                                       style: "background-color: transparent;",
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
                                                                       id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter',
                                                                       height: 17,
                                                                       width: 17,
                                                                       html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
                                                                   },
   {
       id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter',
       height: 17,
       width: 17,
       html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
   },
     {
         id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter',
         height: 17,
         width: 17,
         html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
     },
       {
           id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter',
           height: 17,
           width: 17,
           html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',
       },
         {
             id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter',
             height: 17,
             width: 17,
             html: '<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>',

         },
          {
              xtype: 'panel',
              width:7
          },{
             margin: '-2 0 0 0',
             id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateCountOutter',
             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>',

         },
        
                                                               ]
                                                           },
                                                           
                                                           {
                                                            margin: '13 0 0 0',
                                                            id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_TotalReviewsOutter',
                                                            html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                                        },
 
                                                            {
                                                                margin: '1 0 0 0',
                                                                hidden:true,
                                                                id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateHereOutter',
                                                                html: '<div  class="blink_me"  style="color:black;text-align: center;font-size:8px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">Write your review/rate here</div>',

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
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ShareAndWhatsappShareBtn',
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
                                                               id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_ShareAndWhatsappShareBtn',
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
                                                       xtype: 'container',
                                                       width: '100%',
                                                       hidden: true,
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MasterBorder1',
                                                       //zIndex: 100,
                                                       // hidden:true,
                                                       // margin: '-80 0 0 0',
                                                       height: 1,
                                                       //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                       style: 'background-color:grey',
                                                   },


                                                   {
                                                       xtype: 'container',
                                                       style: 'background-color:transparent;',
                                                       width: '100%',
                                                      // hidden:true,
                                                       // margin:'-100 0 0 0',
                                                       //zIndex: 100,
                                                       height: 80,
                                                       layout: {
                                                           type: 'hbox',
                                                           pack: 'start',
                                                           align: 'left'
                                                       },
                                                       items: [

                                                           {
                                                               xtype: 'panel',
                                                               width: 18
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
                                                                        margin: '-3 0 0 0',
                                                                        id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemName',
                                                                        html: '<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;color:black;text-align:center;" >Barbegal</div>',
                                                                    },
                                                                    {
                                                                        margin: '-3 0 0 0',
                                                                        id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemCardLevel',
                                                                        html: '<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;black:white;text-align:center;" >Card Level:25.00</div>',
                                                                    },
                                                                   {
                                                                       margin: '-3 0 0 0',
                                                                       id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemPrice',
                                                                       html: '<div style="background: transparent;width:100%;font-size: 18px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):25.00</u></div>',
                                                                   },
                                                                   {
                                                                       margin: '20 0 0 0',
                                                                       id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemPoint',
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
                                                       margin:'20 0 0 0',
                                                       width: '93%',
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_CarouselMaster',
                                                       height: 1010,
                                                       //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                       style: 'background-color:transparent',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'start',
                                                           align: 'center'
                                                       },
                                                       items: [
                                                           {
                                                               xtype: 'container',
                                                               width: '100%',
                                                               id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterHeader',
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
                                                                            id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle',
                                                                            name:'namecontainerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle',
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
                                                                                    id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle',
                                                                                    html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Description</div>',
                                                                                }
                                                                            ]

                                                                       
                                                                        },
                                                                          {
                                                                              xtype: 'container',
                                                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle',
                                                                              name: 'namecontainerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle',
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
                                                                                      id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle',
                                                                                      html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating</div>',
                                                                                  },
                                                                              ]


                                                                          },
                                                                          {
                                                                              xtype: 'container',
                                                                              //style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;',
                                                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle',
                                                                              name: 'namecontainerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle',
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
                                                                                      id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle',
                                                                                      html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>',
                                                                                  },
                                                                              ]


                                                                          },
                                                                     
                                                               ]
                                                           },
                                                           {
                                                               xtype: 'carousel',

                                                               //hidden:true,
                                                               id: 'FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent',
                                                               name: 'nameFloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent',
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
                                                                   //                FloatPanel_AyohaStore_SaleItem_MembershipDetail_CarouselProductDesc();
                                                                   //            } else {
                                                                   //                FloatPanel_AyohaStore_SaleItem_MembershipDetail_CarouselReviewAndRate();
                                                                   //                //swipeDirection = "Left";
                                                                   //                //FloatPanel_AyohaStore_SaleItem_MembershipDetail_CarouselProductDesc();
                                                                   //            }
                                                                               
                                                                   //        }
                                                                   //    });
                                                                   //},
                                                                   activeitemchange: function (container, newCard, oldCard, index) {
                                                                      var CarouselIndex =parseInt(container.getActiveIndex());


                                                                      if (_isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime == 'Y') {
                                                                          if (CarouselIndex == 0) {
                                                                              console.log(CarouselIndex);
                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');                                                                             
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');

                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Description</div>');
                                                                              return;
                                                                          }
                                                                          if (CarouselIndex == 1) {
                                                                              console.log(CarouselIndex);
                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');


                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');


                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');                                                                             
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                                                                              return;
                                                                          }
                                                                          if (CarouselIndex == 2) {
                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');



                                                                              Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
                                                                              Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Seller Info</div>');
                                                                              if (globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseLogoPath) {
                                                                                  FloatPanel_AyohaStore_MembershipDetail_EnterprisesLoadByEnterpriseAccNoStore_Existing();
                                                                              } else {
                                                                                  FloatPanel_AyohaStore_MembershipDetail_EnterprisesLoadByEnterpriseAccNoStore();
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
                                                                        id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescription',
                                                                        height: '100%',
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
                                                                             //    id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle',
                                                                             //    html: '<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" ><u>Product Description</u></div>',
                                                                             //},
                                                                             {
                                                                                 id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDesc',
                                                                                 margin: '5 0 0 10',
                                                                                 html: '<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;black:white;text-align:left;" >This Membership Card Has following Previllage and benefited:</div>',
                                                                                 // zIndex: -10,
                                                                                 width: '100%',
                                                                                 //html: '<textarea id="input-htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDesc" style="width:95%;height: 320px;padding: 5px 5px;box-sizing: border-box;border: 1px solid #ccc;border-radius: 4px;background-color: #f8f8f8;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',
                                                                              //   html: '<textarea id="input-htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDesc" readOnly style="width:95%;height: 1000px;padding: 5px 5px;box-sizing: border-box;border: 1px none #ccc;border-radius: 4px;background-color:transparent;font-size: 12px;resize: none;" placeholder="Product Descriptions"></textarea>',


                                                                             },

                                                                             {
                                                                                margin: '5 0 0 10',
                                                                                id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_MembershipPrevillage',
                                                                                html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:14px;font-weight:bold;">Membership Privileges</div>',
                                                                            },
                                                                            {
                                                                                xtype: 'list',
                                                                                scrollable:false,
                                                                                width: '100%',
                                                                                store: _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore,
                                                                                id: 'FloatPanel_Membership_MembershipCardSaleDetail_Campaignlist',
                                                                                mode: 'SINGLE',
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
                                                                                height: 100,
                                                                              //  height: 100,
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
                            
                                                                                     
                                                                                        localStorage.setItem('StampCampaignCode', CampaignCode);
                            
                                                                                        localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                                                        localStorage.setItem('CountStampCardRowShow', Stamp);
                                                                                         
                                                                                     
                            
                                                                                        MembershipTag='NO';
                            
                                                                                        if (MembershipTag == 'YES') {
                            
                            
                                                                                            if (CampaignType == "Stamp Reward Loyalty Card") {
                            
                                                                                                //alert(CampaignType);
                                                                                               // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {
                            
                                                                                                FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                                                                //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
                                                                                                Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
                                                                                            }
                                                                                            if (CampaignType == "Point Reward Loyalty Card") {
                                                                                                FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                                                                               // FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, PointisCampaignExpired);
                                                                                            }
                                                                                            if (CampaignType == "Membership Card Discount") {
                                                                                                FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                                            }
                                                                                            if (CampaignType == "Membership Card Contest") {
                                                                                                FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembership_MembershipCardSaleDetail(CampaignCode);
                                                                                               // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                                            }
                                                                                           // 
                            
                            
                            
                                                                                        }
                                                                                        if (MembershipTag == 'NO') {
                                                                                            //   FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp);
                            
                                                                                          
                                                                                            if (CampaignType == "Stamp Reward Loyalty Card") {                                                                 
                            
                                                                                                FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                                                                                Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');
                                                                                            }
                                                                                            if (CampaignType == "Point Reward Loyalty Card") {
                                                                                                FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo);
                                                                                            }
                                                                                            if (CampaignType == "Membership Card Contest") {
                                                                                                FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembership_MembershipCardSaleDetail(CampaignCode);
                                                                                               // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                                            }
                                                                                        }
                            
                            
                                                                                    },
                                                                                    deselect: function (list, records) {
                            
                                                                                    }
                                                                                },
                            
                                                                            },
                                                                            {
                                                                                margin: '5 0 0 10',
                                                                                id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_MembershipOutlet',
                                                                                html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:14px;font-weight:bold;">Membership Entitle Outlet</div>',
                                                                            },
                                                                            {
                                                                                xtype: 'list',
                                                                                //flex:1,
                                                                                height: '100%',
                                                                              //  store: 'MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore',
                                                                               store:_DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore,
                                                                                id: 'FloatPanel_Membership_MembershipCardSaleDetail_MembershipOutletList',
                                                                                mode: 'SINGLE',
                                                                                //  grouped: true,
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
                                                                                itemTpl: '<div class="myContent"  style="background-color:white;width:104%">' +
                                                                                            //'<table style="border-collapse:collapse;border-spacing:10;width:99%;background-color:white;" ><thead><tr><th style="background-color:transparent;border-radius: 10px 0px 0px 10px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogoPath}"style="width: 60px; height: 60px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br>{EnterpriseAddress}<br><br>Current Campaign:RAMADHAN 2021</div><br>Start:01/10/2020<div style="width:100%;text-align:right;margin:-16px 0px 0px 0px">End:01/10/2021</div></th></tr><tr></tr></thead></table>' +
                                                                                             '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:3px 0px 0px -13px;" ><thead><tr><th style="background-color:transparent;border-radius: 0px 0px 0px 0px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;font-color:white;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal" rowspan="2"><img src="{EnterpriseLogo}"style="width: 80px; height: 80px; margin-top: 5px; border:1px none #A2CDF5; border-radius: 50%; max-width:100px; " /></th><th style="background-color:transparent;border-color:transparent;border-right:1px none grey;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:5px 5px;text-align:left;vertical-align:top;word-break:normal" rowspan="2"><font size=3><b>{EnterpriseName}</b></font><br><div style="width:100%;text-align:left;margin:-3px 0px 0px 0px"><font size=1><b>({EnterpriseRegistrationNo})-{EnterpriseType}</b></font></div><br><div style="width:100%;text-align:left;margin:-15px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{EnterpriseAddress}<br>Phone No:{EnterprisePhoneNo}<br>Email:{EnterpriseEmail}</div></div></th></tr><tr></tr></thead></table>' +
                                       
                                       
                                                                                               '</div>',
                                                                                width: '100%',
                                                                                listeners: {
                                                                                    itemsingletap: function (list, idx, target, records, evt) {
                                       
                                       
                                       
                                       
                                       
                                                                                    },
                                                                                    deselect: function (list, records) {
                                       
                                                                                    }
                                                                                },
                                       
                                                                            },
                                                                        ]
                                                                    },
                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                                                                        id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ProductReview',
                                                                        height: 1000,
                                                                        //style: 'background-color:rgba(0, 0, 0, 0.0);border-radius: 0px 0px 0px 0px;',
                                                                        style: 'background-color:white',
                                                                        layout: {
                                                                            type: 'vbox',
                                                                            pack: 'start',
                                                                            align: 'center'
                                                                        },
                                                                        items: [
                                                                            {
                                                                                xtype: 'container',
                                                                                id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewMaster',
                                                                                width: '100%',
                                                                                height: 125,
                                                                                margin:'5 0 0 0',
                                                                               // hidden: true,
                                                                              //  style: "background-color: white",
                                                                                style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                                                                                //style: "background-color: #F35B57;",
                                                                                //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                                                                layout: {
                                                                                    type: 'hbox',
                                                                                    pack: 'left',
                                                                                    align: 'left'
                                                
                                                                                },
                                                                                items: [
                                                                                      //{
                                                                                      //    xtype: 'container',
                                                                                      //    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_LoadingInner',
                                                                                      //    width: '100%',
                                                                                      //    height: 140,
                                                                                      //    //hidden:true,
                                                                                      //    // style: "background-color: transparent",
                                                                                      //    //style: "background-color: #F35B57;",
                                                                                      //    style: 'background-image: url("resources/icons/reviewImgSample.png"); background-size: 100% 140px;background-repeat: no-repeat;',
                                                
                                                                                      //},
                                                                                      {
                                                                                          xtype: 'container',
                                                                                          width: '66%',
                                                                                          height: 140,
                                                                                          style: "background-color: white",
                                                                                          //style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;',
                                                                                          layout: {
                                                                                              type: 'vbox',
                                                                                              pack: 'start',
                                                                                              align: 'left'
                                                                                          },
                                                                                          items: [
                                                
                                                                                               {
                                                                                                   margin: '-30 0 0 -37',
                                                                                                  // html:'<canvas id="FloatPanel_Membership_MembershipCardSaleDetail_barchartAyohaMerchanReviewChartJs" width="300" height="140"></canvas>'
                                                                                                  html: '<div id="FloatPanel_Membership_MembershipCardSaleDetail_barchartAyohaMerchanReview" style="width: 300px; height: 140px;"></div>'
                                                                                               },
                                                
                                                                                          ]
                                                
                                                                                      },
                                                
                                                                                            {
                                                                                                xtype: 'container',
                                                                                                width: '34%',
                                                                                                height: 140,
                                                                                                style: "background-color: white",
                                                                                                layout: {
                                                                                                    type: 'vbox',
                                                                                                    pack: 'start',
                                                                                                    align: 'center'
                                                                                                },
                                                                                                items: [
                                                
                                                                                                     {
                                                                                                         margin: '-10 0 0 6',
                                                                                                         id:'htmlFloatPanel_Membership_MembershipCardSaleDetail_Rate',
                                                                                                         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-size: 60px;font-weight:bold;color:black;">0.0</div>',
                                                                                                     },
                                                
                                                                                                       {
                                                                                                           xtype: 'container',
                                                                                                           width: '100%',
                                                                                                           height: 28,
                                                                                                           margin:'-18 0 0 -2',
                                                                                                           style: "background-color: transparent",
                                                                                                           layout: {
                                                                                                               type: 'hbox',
                                                                                                               pack: 'left',
                                                                                                               align: 'left'
                                                                                                           },
                                                                                                           items: [
                                                
                                                                                                                {
                                                                                                                    xtype: 'button',
                                                                                                                    id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_Star1',
                                                                                                                    height: 28,
                                                                                                                    width: 28,
                                                                                                                    // iconCls: 'list',
                                                                                                                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                                                                    ui: 'plain',
                                                                                                                    handler: function () {
                                                                                                                    
                                                
                                                                                                                    }
                                                                                                                },
                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_Star2',
                                                                height: 28,
                                                                width: 28,
                                                                margin:'0 0 0 -5',
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {
                                                              
                                                                }
                                                            },
                                                              {
                                                                  xtype: 'button',
                                                                  id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_Star3',
                                                                  height: 28,
                                                                  width: 28,
                                                                  margin: '0 0 0 -5',
                                                                  // iconCls: 'list',
                                                                  html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                  ui: 'plain',
                                                                  handler: function () {
                                                
                                                                 
                                                                  }
                                                              },
                                                                {
                                                                    xtype: 'button',
                                                                    id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_Star4',
                                                                    height: 28,
                                                                    width: 28,
                                                                    margin: '0 0 0 -5',
                                                                    // iconCls: 'list',
                                                                    html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                    ui: 'plain',
                                                                    handler: function () {
                                                                   
                                                                    }
                                                                },
                                                                  {
                                                                      xtype: 'button',
                                                                      id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_Star5',
                                                                      height: 28,
                                                                      width: 28,
                                                                      margin: '0 0 0 -5',
                                                                      // iconCls: 'list',
                                                                      html: '<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>',
                                                                      ui: 'plain',
                                                                      handler: function () {
                                                                   
                                                                      }
                                                                  },
                                                                                                           ]
                                                
                                                                                                       },
                                                
                                                
                                                
                                                
                                                                                                       {
                                                                                                           margin: '13 0 0 0',
                                                                                                           id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_TotalReviews',
                                                                                                           html: '<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;0 Reviews</div>'
                                                                                                       }
                                                
                                                
                                                
                                                
                                                                                                ]
                                                
                                                                                            },
                                                
                                                
                                                                                       
                                                
                                                                                ]
                                                
                                                                            },
                                                
                                                                            //{
                                                                            //    xtype: 'container',
                                                                            //    style: 'background-color: transparent',
                                                                            //    width: '100%',
                                                                            //    height:5,
                                                                            //},
                                                                            {
                                                                                xtype: 'list',
                                                                                width: '100%',
                                                                                height: 900,
                                                                                // flex: 1,
                                                                                store: _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore,
                                                                                id: 'FloatPanel_Membership_MembershipCardSaleDetail_ReviewListID',
                                                                                mode: 'SINGLE',
                                                                                // width: '100%',
                                                                                disableSelection: true,
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
                                                                                itemTpl: '<div class="myContent" style="background-color:white;width:104%;">' +
                                        
                                        
                                                                                   
                                                                                   '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-5px 0px 0px -13px;height:110px;"><tr onclick="openAyohaMerchantReviewPanel({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:3px 3px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:18%;vertical-align:top"><img src="{Photo}" style="border:1px solid grey; width:52px;height:52px;border-radius:50%;margin:0px 0px 0px 0px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:2px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:top"><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:bold;color:black;margin:0px 0px 0px 0px">{AccountName}</div><br><div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedStarReview} - {ReviewDate}</div><br><div style="width:100%;background-color: white;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:black;margin:-17px 0px 0px 0px">{ModifiedReviewTxt}<br><br><br></div></td></tr></table>' +
                                        
                                                                                      '</div>'+
                                                                                 '<br>'+
                                                                                 '{ModifiedBottomButton}',
                                                                               //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;height:26px;background-color:white;"><button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipiednt__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/like02.png" style="width: 23px; height: 23px; margin:10px 0px 0px 50px;" /></button></div>',
                                        
                                        
                                        
                                        
                                                                                //'<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_Membership_MembershipCardSaleDetailLike({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 30px;" /></button></div>',
                                                                                //height: '100%',
                                        
                                                                                emptyText: '<div class="myContent">No Review Yet</div>',
                                                                                //listeners: {
                                                                                //    itemsingletap: function (list, idx, target, records, evt) {
                                        
                                                                                //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                                                //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                                                //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                                                //        //var ID = records.get('ID');
                                                                                //        ////FloatPanel_AyohaNotification_EditCardShow_Edit(ID);
                                                                                //        //FloatPanel_Membership_MembershipCardSaleDetailShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                                                //        //setTimeout(function () {
                                                                                //        //    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetailBottom').setHidden(true);
                                                                                //        //    // Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetailBottom').setHidden(true);
                                        
                                                                                //        //    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                                                //        //}, 2000);
                                        
                                        
                                        
                                                                                //    },
                                                                                //    deselect: function (list, records) {
                                        
                                                                                //    }
                                                                                //},
                                                                                listeners: {
                                                                                    itemswipe: function (list, idx, target, record, evt) {
                                                                                        //  To get the selection you should use getSelection() instead
                                                                                        //////var selected = list.getActiveItem();
                                                                                        //////alert(list.getActiveItem());
                                                                                        //////if (!selected) { return; }
                                        
                                                                                        //////var selectedIndex = selected[0];
                                                                                        //////alert([selectedIndex, idx]);
                                                                                        //Ext.Msg.alert('itemswipe', idx);
                                        
                                        
                                                                                    } // itemswipe
                                                                                }
                                        
                                                                            },
                                                                            
                                                                        

                                                                        ]

                                                                    },


                                                                    {
                                                                        xtype: 'container',
                                                                        width: '100%',
                                                                        id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo',
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
                                                                                id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoLogoAndName',
                                                                                name: 'namecontainerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoLogoAndName',
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
                                                                                        id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoLogo',

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
                                                                                                  id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoLogo',
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
                                                                                           id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_CompanyInfo',


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

                                                                                                      id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_CompanyName',
                                                                                                      width: '100%',
                                                                                                      html: '<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">Linex Solution Sdn Bhd</div>',


                                                                                                  },
                                                                                                   //{

                                                                                                   //    id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Linex',
                                                                                                   //    width: '100%',
                                                                                                   //    margin: '0 0 0 0',
                                                                                                   //    html: '<div style="background-color:black;text-align: left;font-size:16px;width:80%;font-weight:bold;height:1px"></div>',


                                                                                                   //},
                                                                                                   {

                                                                                                       id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Tagline',
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
    id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_BRN',
    margin: '-5 0 0 5',

    // zIndex: -10,
width: '90%',
html: '<input type="text"  id="input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_BRN"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
},
                                                                             {
                                                                                 margin: '10 0 0 5',
                                                                                 html: '<font color="black" size="1"><b>Business Address</b></font>',
                                                                             },
                                                                              {
                                                                                  id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Location',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Location"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                               {
                                                                                   margin: '10 0 0 5',
                                                                                   html: '<font color="black" size="1"><b>State</b></font>',
                                                                               },
                                                                              {
                                                                                  id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_State',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_State"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                              {
                                                                                  margin: '10 0 0 5',
                                                                                  html: '<font color="black" size="1"><b>Contact Person</b></font>',
                                                                              },
                                                                              {
                                                                                  id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_PIC',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_PIC"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
                                                                              },
                                                                               {
                                                                                   margin: '10 0 0 5',
                                                                                   html: '<font color="black" size="1"><b>Date Join</b></font>',
                                                                               },
                                                                              {
                                                                                  id: 'htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_DateJoin',
                                                                                  margin: '-5 0 0 5',

                                                                                  // zIndex: -10,
                                                                                  width: '90%',
                                                                                  html: '<input type="text"  id="input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_DateJoin"  style="border-color:transparent;color:black;width:100%;text-align: left;font-size:14px;font-weight:bold">'
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
                           // style: 'background-color:transparent;',
                            style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                            id:'containerFloatPanel_Membership_MembershipCardSaleDetail_bottomInfo',
                           docked: 'bottom',
                            width: '100%',
                           // margin:'-100 0 0 0',
                            zIndex:100,
                            height:51,
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center'
                            },
                            items: [




                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottomInner',
                                    width: '100%',
                                    style: "background-color: transparent",
                                    height: 51,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    scrollable: {
                                        direction: 'horizontal',
                                        directionLock: true,
                                        indicators: false
                                    },
                                    items: [
     
     
                                        {
                                            xtype: 'container',
                                            width: 490,
                                            style: "background-color: transparent",
                                            height: 51,
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
     
     
     
                                                {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_EntitleReward',
                                                    //width: '33%',
                                                    //height: 30,
                                                    margin: '0 0 0 0',
                                                    flex: 1,
                                                    style: "background-color: transparent",
                                                    //style: "background-color: #F35B57;",
     
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
     
                                                    },
                                                    items: [
     
                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_EntitleReward',
                                                             //  badgeText: '1',
                                                             margin: '0 0 0 0',
     
                                                             height: 36,
                                                             width: 36,
                                                             html: '<img src="resources/icons/EntitleReward.png" width="26" height="26" alt="Company Name">',
                                                             ui: 'plain',
                                                             handler: function () {
     
                                                                 MoveMembeshipCarousel(0);
                                                                
     
                                                              
                                                             }
                                                         },
                                                         {
                                                             xtype: 'container',
                                                             id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_MenuBottom_EntitleRewardTxt',
                                                             width: '100%',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center'
     
                                                             },
                                                             items: [
                                                                 {
                                                                     margin: '-15 0 0 0',
                                                                     id: 'htmlMembershipTxt',
                                                                     html: '<font size=1 color=purple><b><u>Membership</u></b></font>'
                                                                 },
                                                                 {
                                                                     margin: '-12 0 0 0',
                                                                     id: 'htmlPrivillageTxt',
                                                                     html: '<font size=1 color=purple><b><u>Privillage</u></b></font>'
                                                                 },
                                                             ]
     
                                                         },
     
     
                                                    ]
                                                },
                                                {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_EnttileOutlet',
                                                    //width: '33%',
                                                    //height: 30,
                                                    margin: '0 0 0 0',
                                                    flex: 1,
                                                    style: "background-color: transparent",
                                                    //style: "background-color: #F35B57;",
     
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
                                                    },
                                                    items: [
     
                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_EnttileOutlet',
                                                             //  badgeText: '1',
                                                             margin: '0 0 0 0',
     
                                                             height: 36,
                                                             width: 36,
                                                             html: '<img src="resources/icons/EnttileOutlet.png" width="26" height="26" alt="Company Name">',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 MoveMembeshipCarousel(1);
                                                                
                                                             }
                                                         },
                                                         {
                                                             xtype: 'container',
                                                             id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_EnttileOutletTxt',
                                                             width: '100%',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center'
     
                                                             },
                                                             items: [
                                                                 {
                                                                     margin: '-15 0 0 0',
                                                                     id: 'htmlMembershipTxt02',
                                                                     html: '<font size=1 color=grey>Membership</font>'
                                                                 },
                                                                 {
                                                                     margin: '-12 0 0 0',
                                                                     id: 'htmlEntitleOutletTxt',
                                                                     html: '<font size=1 color=grey>Entitle Outlet</font>'
                                                                 },
                                                             ]
     
                                                         },
     
     
                                                    ]
                                                },
     
     
                                                {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_AyohaStore',
                                                    //width: '33%',
                                                    //height: 30,
                                                    margin: '0 0 0 0',
                                                    flex: 1,
                                                    style: "background-color: transparent",
                                                    //style: "background-color: #F35B57;",
     
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
     
                                                    },
                                                    items: [
     
                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_AyohaStore',
                                                             //  badgeText: '1',
                                                             margin: '0 0 0 0',
     
                                                             height: 36,
                                                             width: 36,
                                                             html: '<img src="resources/icons/AyohaStorePurple.png" width="26" height="26" alt="Company Name">',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                // FloatPanelMerchantDetailPage_AyohaStore();
                                                                 FloatPanel_Membership_MembershipCardSaleDetail_AyohaStore();
     
                                                             }
                                                         },
                                                         {
                                                             xtype: 'container',
                                                             id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_AyohaStoreTxt',
                                                             width: '100%',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center'
     
                                                             },
                                                             items: [
                                                                 {
                                                                     margin: '-15 0 0 0',
                                                                     id: 'htmlCardTxt01',
                                                                     html: '<font size=1 color=grey>Ayoha</font>'
                                                                 },
                                                                 {
                                                                     margin: '-12 0 0 0',
                                                                     id: 'htmlTransactionTxt',
                                                                     html: '<font size=1 color=grey>Store</font>'
                                                                 },
                                                             ]
     
                                                         },
     
     
                                                    ]
                                                },
     
                                                {
                                                    xtype: 'container',
                                                    id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_CardTransaction',
                                                    //width: '33%',
                                                    //height: 30,
                                                    margin: '0 0 0 0',
                                                    flex: 1,
                                                    style: "background-color: transparent",
                                                    //style: "background-color: #F35B57;",
     
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
     
                                                    },
                                                    items: [
     
                                                         {
                                                             xtype: 'button',
                                                             id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_CardTransaction',
                                                             //  badgeText: '1',
                                                             margin: '0 0 0 0',
     
                                                             height: 36,
                                                             width: 36,
                                                             html: '<img src="resources/icons/MembershipCardTransaction.png" width="26" height="26" alt="Company Name">',
                                                             ui: 'plain',
                                                             handler: function () {
                                                                 MoveMembeshipCarousel(2);
                                                               
     
     
                                                             }
                                                         },
                                                         {
                                                             xtype: 'container',
                                                             id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_CardTransactionTxt',
                                                             width: '100%',
                                                             layout: {
                                                                 type: 'vbox',
                                                                 pack: 'center',
                                                                 align: 'center'
     
                                                             },
                                                             items: [
                                                                 {
                                                                     margin: '-15 0 0 0',
                                                                     id: 'htmlCardTxt01',
                                                                     html: '<font size=1 color=grey>Card</font>'
                                                                 },
                                                                 {
                                                                     margin: '-12 0 0 0',
                                                                     id: 'htmlTransactionTxt',
                                                                     html: '<font size=1 color=grey>Transaction</font>'
                                                                 },
                                                             ]
     
                                                         },
     
     
                                                    ]
                                                },
     
                                          
                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_CardDetailsInfo',
                                              //width: '33%',
                                              //height: 30,
                                              margin: '0 0 0 0',
                                              flex: 1,
                                              style: "background-color: transparent",
                                              //style: "background-color: #F35B57;",
     
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
     
                                              },
                                              items: [
     
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_CardDetailsInfo',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
     
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/MembershipCardDetail.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
                                                           MoveMembeshipCarousel(3);
                                                           
                                                       }
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_CardDetailsInfoTxt',
                                                       width: '100%',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
     
                                                       },
                                                       items: [
                                                           {
                                                               margin: '-15 0 0 0',
                                                               id: 'htmlCardDetailTxt',
                                                               html: '<font size=1 color=grey>Card Detail</font>'
                                                           },
                                                           {
                                                               margin: '-12 0 0 0',
                                                               id: 'htmlInfoTxt',
                                                               html: '<font size=1 color=grey>Info</font>'
                                                           },
                                                       ]
     
                                                   },
     
     
                                              ]
                                          },
     
     
                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_TermAndCondition',
                                              //width: '33%',
                                              //height: 30,
                                             // hidden: true,
                                              margin: '0 0 0 0',
                                              flex: 1,
                                              style: "background-color: transparent",
                                              //style: "background-color: #F35B57;",
     
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
     
                                              },
                                              items: [
     
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_TermAndCondition',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
     
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/shakeHand01.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
     
                                                           // MoveMembeshipCarousel(4);
                                                           FloatPanel_Membership_TermAndConditionShow();
     
     
                                                       }
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_TermAndConditionTxt',
                                                       width: '100%',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
     
                                                       },
                                                       items: [
                                                           {
                                                               margin: '-15 0 0 0',
                                                               id: 'htmlTermAndConditionTxt',
                                                               html: '<font size=1 color=grey>Terms &</font>'
                                                           },
                                                           {
                                                               margin: '-12 0 0 0',
                                                               id: 'htmlTermAndConditionTxts',
                                                               html: '<font size=1 color=grey>Condition</font>'
                                                           },
                                                       ]
     
                                                   },
     
     
                                              ]
                                          },
     
     
     
                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_NFC',
                                              //width: '33%',
                                              //height: 30,
                                              hidden:true,
                                              margin: '0 0 0 0',
                                              flex: 1,
                                              style: "background-color: transparent",
                                              //style: "background-color: #F35B57;",
     
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
     
                                              },
                                              items: [
     
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_NFC',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
     
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/NFCenabled.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
     
                                                          // MoveMembeshipCarousel(4);
     
     
     
                                                       }
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_NFCTxt',
                                                       width: '100%',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
     
                                                       },
                                                       items: [
                                                           {
                                                               margin: '-15 0 0 0',
                                                               id: 'htmlNFCTxt',
                                                               html: '<font size=1 color=grey>NFC</font>'
                                                           },
                                                           {
                                                               margin: '-12 0 0 0',
                                                               id: 'htmlEnabledTxt',
                                                               html: '<font size=1 color=grey>Enabled</font>'
                                                           },
                                                       ]
     
                                                   },
     
     
                                              ]
                                          },
     
                                          
     
                                          {
                                              xtype: 'container',
                                              id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_DeleteCard',
                                              //width: '33%',
                                              //height: 30,
                                              margin: '0 0 0 0',
                                              flex: 1,
                                              style: "background-color: transparent",
                                              //style: "background-color: #F35B57;",
     
                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center'
     
                                              },
                                              items: [
     
                                                   {
                                                       xtype: 'button',
                                                       id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_DeleteCard',
                                                       //  badgeText: '1',
                                                       margin: '0 0 0 0',
     
                                                       height: 36,
                                                       width: 36,
                                                       html: '<img src="resources/icons/CancelMembershipCard.png" width="26" height="26" alt="Company Name">',
                                                       ui: 'plain',
                                                       handler: function () {
     
                                                           MoveMembeshipCarousel(4);
                                                          
     
                                                         
                                                       }
                                                   },
                                                   {
                                                       xtype: 'container',
                                                       id: 'containerFloatPanel_Membership_MembershipCardSaleDetail_MenuBottom_DeleteCardTxt',
                                                       width: '100%',
                                                       layout: {
                                                           type: 'vbox',
                                                           pack: 'center',
                                                           align: 'center'
     
                                                       },
                                                       items: [
                                                           {
                                                               margin: '-15 0 0 0',
                                                               id: 'htmlUnsubscribeTxt',
                                                               html: '<font size=1 color=grey>Unsubscribe</font>'
                                                           },
                                                           {
                                                               margin: '-12 0 0 10',
                                                               id: 'htmlMembershipCardTxt',
                                                               html: '<font size=1 color=grey>Membership Card</font>'
                                                           },
                                                       ]
     
                                                   },
     
     
                                              ]
                                          },
     
     
                                              
     
     
     
     
     
     
                                              
     
     
     
     
     
     
     
     
     
     
                                            ]
     
                                        },
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
                                    ]
                                },












/////////////////////////////////////////////
                                // {

                                //     xtype: 'container',
                                //     width: '95%',
                                //    // docked: 'bottom',
                                //     height: 40,
                                //     //hidden:true,
                                //     // width: 40,
                    
                                //     //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //     //hidden: true,
                                //     //margin: '10 0 0 0',
                                //    // id: 'containerFloatPanel_Membership_MembershipCardSaleDetailBottom',
                                //    // name: 'clickableContainerFloatPanel_Membership_MembershipCardSaleDetailBottom',
                                //     //style: {
                                //     //    // background: '#D25959',
                                //     //    background: 'transparent',
                                //     //    // border: '2px'
                                //     //},
                                //     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                //     style: 'border-bottom:2px none #D25959;background-color:transparent',
                                //     // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
                                //     layout: {
                                //         type: 'fit',
                                //         //pack: 'center',
                                //         //align: 'center',
                                //     },
                                //     // hidden:true,
                                //     items:
                                //            [
                    
                                //                 {
                                //                     //xtype: 'button',
                                //                     ////  align: 'stretch',
                    
                                //                     //ui: 'plain',
                                //                     // width: '100%',
                                //                     margin:'2 0 0 0',
                                //                     height: 40,
                                //                    // id: 'btnFloatPanel_Membership_MembershipCardSaleDetail_GetMembershipCard',
                                //                     //hidden: true,
                                                  
                                //                     html: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card !!!</button></div>',
                                //                     //handler: function () {
                                //                     //    getMembershipCard();
                                //                     //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
                                //                     //},
                    
                    
                                //                 },
                    
                    
                    
                     
                    
                    
                    
                    
                    
                    
                    
                                //            ]
                    
                                // },







                            ]
                        }





                ]

            },






        });

    return _FloatPanel_Membership_MembershipCardSaleDetail;
}


var is_FloatPanel_Membership_MembershipCardSaleDetailOpen = 'N';





var globalFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCode;
var globalFloatPanel_Membership_MembershipCardSaleDetail_EnterpriseAccNo;
function FloatPanel_Membership_MembershipCardSaleDetailShow(EnterpriseAccNo,MembershipCardCode)
{
    Ext.Viewport.remove(_FloatPanel_Membership_MembershipCardSaleDetail);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_MembershipCardSaleDetail());
    this.overlay.show();
    is_FloatPanel_Membership_MembershipCardSaleDetailOpen = 'Y';
    AddRoutePages("FloatPanel_Membership_MembershipCardSaleDetailHide()");
    globalFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCode=MembershipCardCode;
    globalFloatPanel_Membership_MembershipCardSaleDetail_EnterpriseAccNo=EnterpriseAccNo;
    var containerViewnamecontainerFloatPanel_Membership_MembershipCardSaleDetail_StarOutterMaster = Ext.ComponentQuery.query('container[name=namecontainerFloatPanel_Membership_MembershipCardSaleDetail_StarOutterMaster]')[0];
    var containerViewElnamecontainerFloatPanel_Membership_MembershipCardSaleDetail_StarOutterMaster = containerViewnamecontainerFloatPanel_Membership_MembershipCardSaleDetail_StarOutterMaster.element;
    containerViewElnamecontainerFloatPanel_Membership_MembershipCardSaleDetail_StarOutterMaster.on('tap',
      function (event, node, options, eOpts) {
      //  AyohaMerchantReview_AddEditShow_Add();
     // btn_containerAyohaRewardRedemption_carosel_back
      var crsl = Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent');
                            crsl.next();
      }
    );




  
    FloatPanel_AyohaStore_MembershipDetail_MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetail(EnterpriseAccNo,MembershipCardCode);


   







   

}


function FloatPanel_Membership_MembershipCardSaleDetail_loadMembershipCard() {
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime = 'N';
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
      
       // Ext.getCmp('FloatPanel_AyohaStore_ShareAndWhatsappID').setZIndex(60);
        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}










function FloatPanel_Membership_MembershipCardSaleDetailHide() {

    if (is_FloatPanel_Membership_MembershipCardSaleDetailOpen == 'Y') {
        _FloatPanel_Membership_MembershipCardSaleDetail.hide();     
        is_FloatPanel_Membership_MembershipCardSaleDetailOpen = 'N';
        RemovePages("FloatPanel_Membership_MembershipCardSaleDetailHide()");
       
    }

}











function FloatPanel_Membership_MembershipCardSaleDetailNow() {






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
                    FloatPanel_Membership_MembershipCardSaleDetailHide()
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
   




}









function FloatPanel_Membership_MembershipCardSaleDetail_LoadMembershipCardRateAndReview() {

    
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getProxy().setExtraParam('ItemCodeReview', globalFloatPanel_Membership_MembershipCardSaleDetail_ItemCode);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReview');
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.load();
    console.log(FloatPanel_AyohaStore_getEnterpriseAccNo());
    console.log(globalFloatPanel_Membership_MembershipCardSaleDetail_ItemCode);

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var count = _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewStore.getCount();
        FloatPanel_Membership_MembershipCardSaleDetail_CalculateRating();
       
     //   Ext.getCmp('htmlFloatPanel_AyohaStore_ItemCategory_CountLoveTxt').setHtml('<div style="width:100%;background-color: transparent;text-align:left;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:bold;color:black;margin:4px 0px 0px 0px">' + count + ' Record found</div>');


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}




function FloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCalculateRating(EnterpriseAccNo,ItemCodeReview) {

   
    Ext.Viewport.mask({ xtype: 'loadmask', message: 'Calculate Rating....' });
   

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "EnterpriseAccNo": EnterpriseAccNo,
            "ItemCodeReview": ItemCodeReview
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
                            
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateCountOutter').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Rate').setHtml('<div style="color:black;text-align: center;font-size:60px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">' + TotalAvg.toFixed(1) + '</div>');


                        } else {
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateCountOutter').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;">0.0</div>');
                        }

                        Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_TotalReviews').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');
                        Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_TotalReviewsOutter').setHtml('<div style="width100%;text-align:right;background-color: transparent;font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:bold;overflow:hidden;margin:-13px 10px 10px 0px;"><img src="resources/icons/merchantrateusAccountImg.png" alt="Image" style="width:10px;height:10px;">&nbsp;&nbsp;&nbsp;' + TotalVoter + ' Reviews</div>');
                       
                        
                       
                        Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
                       
                        var RateReviews = TotalAvg.toFixed(1);



                        if (RateReviews == 5) {

                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                           
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');


                            

                        }
                        if ((RateReviews >= 4) && (RateReviews < 5)) {
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



                            if ((RateReviews >= 4.2) && (RateReviews <= 4.4)) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');



                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 4.5) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                           
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                           
                           
                            }
                            if ((RateReviews >= 4.6) && (RateReviews <= 4.8)) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                           
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                           
                           
                           
                            }
                            if (RateReviews == 4.9) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                           
                                                      
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                           
                           
                            }



                        }
                        if ((RateReviews >= 3) && (RateReviews < 4)) {

                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



                            if ((RateReviews >= 3.2) && (RateReviews <= 3.4)) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                                
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            }
                            if (RateReviews == 3.5) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                                
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');


                            }
                            if ((RateReviews >= 3.6) && (RateReviews <= 3.8)) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            
                            
                                
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            
                            
                            }
                            if (RateReviews == 3.9) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            
                            
                                                            
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            
                            }



                        }
                        if ((RateReviews >= 2) && (RateReviews < 3)) {


                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                                                            
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



                            if ((RateReviews >= 2.2) && (RateReviews <= 2.4)) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                          
                          
                                                            
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                          
                          
                            }
                            if (RateReviews == 2.5) {

                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                           
                                                           
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                           
                           
                            }
                            if ((RateReviews >= 2.6) && (RateReviews <= 2.8)) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                           
                           
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                           
                           
                            }
                            if (RateReviews == 2.9) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                           
                                                      
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                           
                            }





                        }
                        if ((RateReviews >= 1) && (RateReviews < 2)) {

                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');



                            if ((RateReviews >= 1.2) && (RateReviews <= 1.4)) {


                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');


                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointThree.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                            }
                            if (RateReviews == 1.5) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                         
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointFive.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                         
                            }
                            if ((RateReviews >= 1.6) && (RateReviews <= 1.8)) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                          
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointSeven.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                          
                          
                            }
                            if (RateReviews == 1.9) {
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/star.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                                Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                           
                           
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/star.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/StarpointNine.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                                Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                           
                            }

                        }
                        if ((RateReviews >= 0) && (RateReviews < 1)) {

                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star1Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star2Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star3Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star4Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');
                            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_Star5Outter').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="17" height="17" alt="Company Name"></div>');

                                                       
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star1').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star2').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star3').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star4').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');
                            Ext.getCmp('btnFloatPanel_Membership_MembershipCardSaleDetail_Star5').setHtml('<div ><img src="resources/icons/reviewstarunrate.png" width="18" height="18" alt="Company Name"></div>');

                        }


























                        //var task = Ext.create('Ext.util.DelayedTask', function () {

                        //    setDashBoardMerchantReviewRate();
                        //});

                        //task.delay(500);





                        // globalAyohaMerchantReviewRating = Math.round(TotalAvg);
                        // globalAyohaMerchantReviewRating = TotalAvg.toFixed(1);



                        // console.log(globalAyohaMerchantReviewRating);
                        // --20 + 8 + 9 + 2 + 1 / 11
                        FloatPanel_Membership_MembershipCardSaleDetail_setDashBoardMerchantReviewRate();
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

function FloatPanel_AyohaStore_SaleItem_MembershipDetail_CarouselProductDesc() {
    //var crsl = Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent');
    //crsl.previous();
    Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent').setActiveItem(0);

    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Description</div>');
}
function FloatPanel_AyohaStore_SaleItem_MembershipDetail_CarouselReviewAndRate() {
    //var crsl = Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent');
    //crsl.next();
    Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent').setActiveItem(1);
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Seller Info</div>');
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');

}


function FloatPanel_AyohaStore_SaleItem_MembershipDetail_CarouselSellerInfo() {
    Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_CarouselMasterContent').setActiveItem(2);
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ReviewAndRateTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Rating(' + TotalVoter + ')</div>');
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setStyle('background-color: white;border-right:2px solid #D3D3D3;border-bottom:1px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ProductDescTitle').setHtml('<div style="background: transparent;width:100%;font-size: 12px;font-weight:normal;color:black;text-align:center;" >Description</div>');
    Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setStyle('background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-right:2px solid #D3D3D3;border-left:2px solid #D3D3D3;');
    Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoTitle').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Seller Info</div>');
    if (globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseLogoPath) {
        FloatPanel_AyohaStore_MembershipDetail_EnterprisesLoadByEnterpriseAccNoStore_Existing();

    } else {
        FloatPanel_AyohaStore_MembershipDetail_EnterprisesLoadByEnterpriseAccNoStore();
    }
}


var globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseLogoPath;
var globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseName;
var globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseAddress;
var globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseTagLine;
var globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseRegistrationNo;
var globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseDescriptions;
var globalFloatPanel_AyohaStore_MembershipDetail_CreatedDate;
var globalFloatPanel_AyohaStore_MembershipDetail_PICContactNo;
var globalFloatPanel_AyohaStore_MembershipDetail_PersonInCharge;
var globalFloatPanel_AyohaStore_MembershipDetail_Negeri;


function FloatPanel_AyohaStore_MembershipDetail_EnterprisesLoadByEnterpriseAccNoStore_Existing(){
     Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoLogo').setHtml('<div ><img src="' + globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseLogoPath + '" width="80" height="65" alt="Company Name"></div>');
     Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_CompanyName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseName + '</div>');
     Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Tagline').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseRegistrationNo + '</div>');
     document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Location').value = globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseAddress;
     document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_State').value = globalFloatPanel_AyohaStore_MembershipDetail_Negeri;
     document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_PIC').value = globalFloatPanel_AyohaStore_MembershipDetail_PersonInCharge;
     document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_DateJoin').value = globalFloatPanel_AyohaStore_MembershipDetail_CreatedDate;
     document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_BRN').value = globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseRegistrationNo;
}



function FloatPanel_AyohaStore_MembershipDetail_EnterprisesLoadByEnterpriseAccNoStore() {



    _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNo');
    _DataStore_EnterprisesLoadByEnterpriseAccNoStore.load();
    // 
    var task = Ext.create('Ext.util.DelayedTask', function () {

        var Count = _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getCount();
        var Store = _DataStore_EnterprisesLoadByEnterpriseAccNoStore.getAt(0);

        if (Count > 0) {
           
            globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseLogoPath = Store.get('EnterpriseLogoPath');
            globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseName = Store.get('EnterpriseName');
            globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseAddress = Store.get('EnterpriseAddress');
            globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseTagLine = Store.get('EnterpriseTagLine');
            globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseRegistrationNo = Store.get('EnterpriseRegistrationNo');
            globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseDescriptions = Store.get('EnterpriseDescriptions');
            globalFloatPanel_AyohaStore_MembershipDetail_CreatedDate = Store.get('CreatedDate');
            globalFloatPanel_AyohaStore_MembershipDetail_PICContactNo = Store.get('PICContactNo');
            globalFloatPanel_AyohaStore_MembershipDetail_PersonInCharge = Store.get('PersonInCharge');
            globalFloatPanel_AyohaStore_MembershipDetail_Negeri = Store.get('Negeri');




           Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfoLogo').setHtml('<div ><img src="' + globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseLogoPath + '" width="80" height="65" alt="Company Name"></div>');
           Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_CompanyName').setHtml('<div style="color:black;text-align: left;font-size:16px;width:100%;font-weight:bold">' + globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseName + '</div>');
           Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Tagline').setHtml('<div style="color:black;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseTagLine + '</div>');
           document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_Location').value = globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseAddress;
           document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_State').value = globalFloatPanel_AyohaStore_MembershipDetail_Negeri;
           document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_PIC').value = globalFloatPanel_AyohaStore_MembershipDetail_PersonInCharge;
           document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_DateJoin').value = globalFloatPanel_AyohaStore_MembershipDetail_CreatedDate;
           document.getElementById('input-FloatPanel_Membership_MembershipCardSaleDetail_SellerInfo_BRN').value = globalFloatPanel_AyohaStore_MembershipDetail_EnterpriseRegistrationNo;
        }

       
    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}


function FloatPanel_AyohaStore_MembershipDetail_MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetail(EnterpriseAccNo,MembershipCardCode){
    
    var obj = {
        "EnterpriseAccNo": EnterpriseAccNo,
        "MembershipCardCode": MembershipCardCode,   
    };
    console.log(obj);
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/MembershipCard/MembershipCard_LoadByEnterpriseAccNo_MembershipCardCode_MembershipCardSaleDetail',

        dataType: "json",
        data: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
               
               Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardFrontView').setStyle({
                'background-image': 'url("' + data.results[0].MembershipCardBackgroundImg + '")',
                'background-size': '100% 235px',
                'background-repeat': 'no-repeat',
                'border-radius': '20px 20px 20px 20px',  // Removed semicolon
                'border-color': 'grey',  // Removed semicolon
                'border-width': '1px',  // Removed semicolon
               // 'box-shadow': '5px 2px 18px #888888'  // Removed semicolon
            }).on('error', function() {
                Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardFrontView').setStyle({
                    'background-image': 'url("resources/icons/AyohaHeaderLogin.png")'
                });
            });

            Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardBackView').setStyle({
                'background-image': 'url("' + data.results[0].MembershipCardBackgroundImg_back + '")',
                'background-size': '100% 235px',
                'background-repeat': 'no-repeat',
                'border-radius': '20px 20px 20px 20px',  // Removed semicolon
                'border-color': 'grey',  // Removed semicolon
                'border-width': '1px',  // Removed semicolon
               // 'box-shadow': '5px 2px 18px #888888'  // Removed semicolon
            }).on('error', function() {
                Ext.getCmp('containerFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardBackView').setStyle({
                    'background-image': 'url("resources/icons/AyohaHeaderLogin.png")'
                });
            });



            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemName').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;color:black;text-align:center;" >Card Name:' + data.results[0].MembershipCardName + '</div>');
            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemCardLevel').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;black:white;text-align:center;" >Card Level:' + data.results[0].MembershipCardType + '</div>');           
            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemPrice').setHtml('<div style="background: transparent;width:100%;font-size: 14px;font-weight:bold;black:white;text-align:center;" ><u>Price(RM):' + data.results[0].MembershipCardFee + '</u> - ('+data.results[0].MembershipCardFeePaymentCycle+')</div>');
           
            Ext.getCmp('htmlFloatPanel_Membership_MembershipCardSaleDetail_ItemPoint').setHtml('<div style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;word-break:normal;margin:-17px 0px 0px 0px;color:white;background-color:transparent;width:100%;border:1px none white;border-radius:0px;text-align:left;"><input type="text" readOnly value="1.41 Ayoha Point" style="border-radius: 3px;border: 1px solid purple;padding: 2px; width: 95px;height: 16px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;color:white;text-align:center;background-color:#c800ffc9;"/>&nbsp;&nbsp;</div>');
           


            Ext.getCmp('imgFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardEnterpriseLogo').setHtml('<img src="' + data.results[0].EnterprisesLogo + '" style="width:60px;height:60px;margin:0px 0px 0px 0px;border-radius:50%;" alt="Company Name">');
            Ext.getCmp('txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardEnterpriseName').setHtml('<div style="background: transparent;width:100%;font-size: 22px;font-weight:bold;color:white;text-align:left;">' + data.results[0].EnterprisesName.toUpperCase() + '</div>');
            Ext.getCmp('txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardName').setHtml('<div style="background: transparent;width:100%;font-size: 23px;font-weight:normal;color:white;text-align:left;font-family:Playball, cursive">' + data.results[0].MembershipCardName.toUpperCase() + '</div>');
            Ext.getCmp('txtFloatPanel_Membership_MembershipCardSaleDetail_MembershipCardLevel').setHtml('<div style="background: transparent;width:100%;font-size: 20px;font-weight:normal;color:white;text-align:left;font-family:Orbitron">' + data.results[0].MembershipCardType.toUpperCase() + '</div>');



            
            FloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCardCode,EnterpriseAccNo);
            
            }
            else {

               

            }

            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            // swalFireFail("Scan Failed!!");

        }

    });

}




function FloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MMCCode,EnterpriseAccountNo) {
  
    //  Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').removeAll();
     // _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.removeAll();
     
      _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MMCCode);
      _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
      _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode');
      _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load();


  var task = Ext.create('Ext.util.DelayedTask', function () {
      //Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
      //    MembershipCardCode: MMCCode,
      //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
      //});
      //Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
      //var myStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
      var height =parseInt(_DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getCount())* 100;
      Ext.getCmp('FloatPanel_Membership_MembershipCardSaleDetail_Campaignlist').setHeight(height)
      FloatPanel_Membership_MembershipCardSaleDetail_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MMCCode, EnterpriseAccountNo);
   // alert(Count)
    //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
    LoadingPanelHide();
    _isFloatPanel_Membership_MembershipCardSaleDetail_loadFirstTime='Y';
    Ext.Viewport.setMasked(false);

  });
  task.delay(500);
  
  
    
  }
  


  
function  FloatPanel_Membership_MembershipCardSaleDetail_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo) {
    if (MembershipCode) {

    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCode);
    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccountNo);
    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledLoadByMembershipCardCode');
    
    _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
    
                FloatPanel_Membership_MembershipCardSaleDetail_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore(EnterpriseAccountNo,MembershipCode);
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });


    }










    //  if (MembershipCode) {
    //      Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //          MembershipCardCode: MembershipCode,
    //          EnterpriseHQAccNo: EnterpriseAccountNo,
    //      });
    //      Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    //      var task = Ext.create('Ext.util.DelayedTask', function () {
    //          Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //              MembershipCardCode: MembershipCode,
    //              EnterpriseHQAccNo: EnterpriseAccountNo,
    //          });
    //          Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    //          var myStore = Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore');
    //          var StampCount = myStore.getCount();
    //          FloatPanel_Membership_MembershipCardSaleDetail_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore(EnterpriseAccountNo,MembershipCode);
    //          //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
    //          // adjustHeight();
    //          Ext.Viewport.setMasked(false);
 
    //      });
    //      task.delay(500);
    //  }
 }



 
function FloatPanel_Membership_MembershipCardSaleDetail_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore(EnterpriseAccNo,MMCCode) {




    

     //  Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').removeAll();
     // _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.removeAll();
     
   

 var task = Ext.create('Ext.util.DelayedTask', function () {
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccNo);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.getProxy().setExtraParam('ItemCodeReview', MMCCode);
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.getProxy().setUrl(GetAPIurl() + '/AyohaMerchantReview/AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSale');
    _DataStore_AyohaMerchantReviewLoadByEnterpriseAccNoAndItemCodeReviewMembershipCardSaleStore.load();

    FloatPanel_Membership_MembershipCardSaleDetail_MembershipCardCalculateRating(EnterpriseAccNo,MMCCode);
   Ext.Viewport.setMasked(false);

 });
 task.delay(500);
 


}



function FloatPanel_Membership_MembershipCardSaleDetail_setDashBoardMerchantReviewRate() {


    // google.charts.load('current', { 'packages': ['bar'] });
     google.charts.load('current', { packages: ['corechart', 'bar'] });
     google.charts.setOnLoadCallback(drawStuff_setDashBoardMerchantReviewRate);
 
     function drawStuff_setDashBoardMerchantReviewRate() {
 
         console.log(FiveStar);
 
 
 
         var data = google.visualization.arrayToDataTable([
         ["Rate", "Count", { role: "style" }],
         ["5", FiveStar, "orange"],
         ["4", FourStar, "orange"],
         ["3", ThreeStar, "orange"],
         ["2", TwoStar, "color: orange"],
          ["1", OneStar, "color: orange"]
         ]);
 
         var view = new google.visualization.DataView(data);
         view.setColumns([0, 1,
                          {
                              calc: "stringify",
                              sourceColumn: 1,
                              type: "string",
                              role: "annotation"
                          },
                          2]);
 
         var options = {
             title: "",
                          width: 320,
                          height: 185,
                          bar: { groupWidth: "80%" },
                          //animation: {
                          //    startup: true,
                          //    duration: 2500,
                          //    easing: 'out'
                          //},
                          vAxis: { minValue: 0 },
                          hAxis: {
                              textStyle: { color: 'transparent' },
                              gridlines: {
                                  color: "transparent"
                              },
                              baselineColor: '#FFFFFF'
                          },
                          vAxis: {
                              //textStyle: { color: '#FFF' ,size:'12px'}
                              title: '',
                              //textStyle: {
                              //    color: "black",
                              //    fontName: "sans-serif",
                              //    fontSize: 12,
                              //    bold: true,
                              //    italic: false
                              //}
                          },
                          animation: {
                              duration: 2500,
                              easing: 'out',
                              startup: false,
                          },
                          legend: { position: "none" }, backgroundColor: 'transparent',
           
         };
         var chart = new google.visualization.BarChart(document.getElementById("FloatPanel_Membership_MembershipCardSaleDetail_barchartAyohaMerchanReview"));
         chart.draw(view, options);
 
 
 
     };
 
 
 
 }



function FloatPanel_Membership_MembershipCardSaleDetail_setDashBoardMerchantReviewRate_ChartJs() {

       // Assuming FiveStar, FourStar, ThreeStar, TwoStar, and OneStar are defined
       var ctx = document.getElementById('FloatPanel_Membership_MembershipCardSaleDetail_barchartAyohaMerchanReviewChartJs').getContext('2d');

       var chart = new Chart(ctx, {
           type: 'bar', // Set type to bar (will be horizontal due to 'indexAxis' below)
           data: {
               labels: ['5', '4', '3', '2', '1'], // Labels for the y-axis (star ratings)
               datasets: [{
                   label: 'Count',
                   data: [FiveStar, FourStar, ThreeStar, TwoStar, OneStar], // Data points
                   backgroundColor: 'orange', // Bar color
                   borderColor: 'orange', // Bar border color
                   borderWidth: 5
               }]
           },
           options: {
               indexAxis: 'y', // Switches the chart to horizontal mode
               responsive: true,
               maintainAspectRatio: false,
               scales: {
                   x: {
                       beginAtZero: true, // Start x-axis from 0
                       ticks: {
                           stepSize: 1, // Increment steps of 1 on x-axis
                           precision: 0 // Prevent decimal values
                       },
                       grid: {
                           display: true, // Show gridlines for x-axis
                           color: "orange" // Set gridline color to orange to match your style
                       }
                   },
                   y: {
                       ticks: {
                           color: '#000000', // Keep the y-axis labels visible (black for contrast)
                       },
                       grid: {
                           display: false // Hide y-axis gridlines
                       }
                   }
               },
               plugins: {
                   legend: {
                       display: false // Disable the legend
                   },
                   tooltip: {
                       enabled: true // Enable tooltips
                   }
               },
               animation: {
                   duration: 2500, // Duration of the animation
                   easing: 'easeOutQuart' // Easing function for a smooth effect
               }
           }
       });
}
