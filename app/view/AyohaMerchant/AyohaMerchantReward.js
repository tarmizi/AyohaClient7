


 



Ext.define('BuskartApp.view.AyohaMerchant.AyohaMerchantReward', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'AyohaMerchantReward',
    //id: 'AyohaReward_MainDashboardID',
    //requires: [
    //     'BuskartApp.view.Dashboard.DashboardMerchantReward',
    //],
    
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
    
        style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
    items: [
        {

            xtype: 'container',
            // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
            style: "background-color: transparent;",
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center'

            },
            width: '100%',
            height: '100%',
            items: [

               
                

                    {
                        xtype: 'container',
                        // style: 'background-image: url("resources/icons/AyohaHeaderLogin.png"); background-size: 100% 280px;background-repeat: no-repeat;',
                        style: "background-color: transparent;",
                        width: '100%',
                        height:'100%',
                        title: 'DashboardMerchantReward',
                        id: 'containerDashboardMerchantRewardScroller',


                     
                        
                       
                        scrollable: {
                            direction: 'vertical',
                            directionLock: true,
                            indicators: false,
                            bounces: false,
                            outOfBoundRestrictFactor: 0,
                            scroller: {
                        
                                
                               
                               
                               
                               
                                listeners: {
                                    scroll: function (scroller, x, y) {
                                        var FREEZE_Y = AyohaMerchantReward_FREEZE_Y || 220;
                                        var list     = Ext.getCmp('listcarouselAyohaMerchantRewards_Point_Eligible');
                        
                                        console.log('[scrollable][on scroll] x=' + x + ', y=' + y + ' (freeze=' + FREEZE_Y + ')');
                        
                                        // pastikan kita ada list
                                        if (!list) {
                                            return;
                                        }
                        
                                        // 🔝 1) Di paling atas – parent scroll, list OFF
                                        if (y <= 0) {
                                            if (list.getScrollable()) {
                                                list.setScrollable(true); 
                                                // list.setScrollable({
                                                //     direction     : 'vertical',
                                                //     directionLock : true,
                                                //     indicators    : false,
                                                //     bounces       : true
                                                // });  // bagi gesture jatuh ke parent
                                            }
                                            if (y < 0) {
                                                scroller.scrollTo({ x: 0, y: 0 });
                                            }
                                            return;
                                        }
                        
                                        // 🧷 2) Zon tengah (0 < y < FREEZE_Y) – parent scroll, list OFF
                                        if (y < FREEZE_Y) {
                                            if (list.getScrollable()) {
                                              list.setScrollable(false);
                                            
                                            }
                                            return;
                                        }
                        
                                        // 🎯 3) Dah sampai FREEZE_Y – header sticky, list ON
                                        if (y >= FREEZE_Y) {
                        
                                            // Clamp parent supaya header “melekat”
                                            if (y > FREEZE_Y) {
                                                scroller.scrollTo({ x: 0, y: FREEZE_Y });
                                                list.setScrollable(true);
                                            }
                                          
                                            // Baru hidupkan scroll untuk list
                                            if (!list.getScrollable()) {                                               
                                                list.setScrollable({
                                                    direction     : 'vertical',
                                                    directionLock : true,
                                                    indicators    : false,
                                                    bounces       : true
                                                });
                                            }
                                            return;
                                        }
                                    }
                                }
                            }
                        },
                        
                        

                   


                        layout: {
                            type: 'vbox',
                            //pack: 'start',
                            //align: 'center'

                        },
                        items: [
                            

              
{
    xtype: 'container',
    width: '100%',
    height: 220,
    // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
    style:"background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {

            xtype: 'container',
            width: '100%',  
            height: 65,                                                  
           style: 'background-color:transparent;',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            layout: {
                type: 'hbox',
                pack: 'start',
                align: 'left',
            },




            // hidden:true,
            items:
                   [
//                    {
//                     xtype: 'container',
//                     width: '60%', 
//                    //hidden:true,
//                     height: 40,                                             
//                    style: 'background-color:transparent;',
//                    // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
//                     layout: {
//                         type: 'vbox',
//                         pack: 'start',
//                        // align: 'left',
//                         align: 'center',
//                     },
//                     items:[
                      
                      
//                     {
//                         height: 32,                        
//                         xtype: 'container',
//                         zIndex:10,
//                         width: '100%',
//                         layout: {
//                             type: 'hbox',
//                             pack: 'start',
//                            // align: 'left',
//                             align: 'center',
//                         }, 
//                         items:[
// {
//     margin:'0 0 0 25',
   
//     html:
//                           '<div style="width:100%;height:32px;z-index:999px' +
//                                 'display:flex;align-items:center;justify-content:flex-start;">' +
//                             '<img src="resources/icons/ayohaReward01.gif" ' +
//                                  'style="width:32px;height:32px;display:block;" ' +
//                                  'alt="Company Name" />' +
//                           '</div>'
// }
//                         ]
                        
//                     },

//                     {
//                         xtype: 'container',
//                         width: '80%', 
//                         zIndex:-1,
//                        //hidden:true,
//                        margin:'-8 0 0 0',
//                         height: 40,
//                         cls:'getMoreMembershipCard',                                             
//                     // style: 'background:linear-gradient(90deg,#ff00de,#c800ff); box-shadow:0 16px 36px rgba(200,0,255,.38), 0 2px 0 rgba(255,255,255,.35) inset; border:2px solid rgba(255,255,255,.25);border-radius:30px 30px 30px 30px;',
//                      style:'background:#ecfdf5;border:1px solid #bbf7d0;border-radius:999px;white-space:nowrap;',
                    
//                      //font-size:10px;color:#16a34a;background:#ecfdf5;border:1px solid #bbf7d0;padding:3px 6px;border-radius:999px;white-space:nowrap;
//                        // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);border:1px solid #fac;border-radius:20px 20px 20px 20px',
                       
//                         layout: {
//                             type: 'vbox',
//                             pack: 'center',
//                            // align: 'left',
//                             align: 'center',
//                         },
//                         items:[
//                             {
//                                 margin: '-3 0 0 0',
//                                 html: '<div style="font-size:14px;font-weight:700;color:#16a34a;">You got total 23</div>',
//                             },
//                             {
//                                 margin: '-5 0 0 0',
//                                 html: '<div style="font-size:10px;color:#16a34a;">Eligible perk to be claim today!</div>',
//                             },
//                         ]
//                     },
                   
                      
//                       {
//                             margin: '7 0 0 10',
//                             hidden:true,
//                            // html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:#16a34a;background:#ffffff;padding:3px 6px;border-radius:999px;white-space:nowrap;">Perks from My Membership</span><br><b>My Merchant Reward</b></div>'
//                           // html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:#16a34a;background:#ffffff;padding:3px 6px;border-radius:999px;white-space:nowrap;">Perks from My Membership Card</span><br><b>Merchant Perks</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-22px 0px 0px 0px;">Claim perks in one place</div>'
//                            html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><b>Merchant Perks</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:90%;margin:-22px 0px 0px 0px;">All perks from your membership card in one place</div>'
//                           // html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:14px;color:#16a34a;background:#ffffff;padding:3px 6px;border-radius:999px;white-space:nowrap;font-weight:normal;">Merchant Perks</span></div><br><div  style="color:white;text-align: left;font-size:10px;width:90%;margin:-22px 0px 0px 0px;">All perks from your membership card in one place</div>'
                         
                        
//                         },

                   
                   
//                     ]
                
//                    },


                   {
                    xtype : 'container',
                    width : '60%',
                    height: 40, 
                    margin: '14 0 0 0',    
                    style : 'position:relative;background-color:transparent;',
                    items : [
                        // 🎁 Icon, absolute di atas pill
                        {
                            xtype: 'component',
                            html:
                              '<div style="position:absolute;top:-9px;left:20px;' +
                                     'width:37px;height:37px;z-index:10;">' +
                                '<img src="resources/icons/ayohaReward01.gif" ' +
                                     'style="width:37px;height:37px;display:block;" ' +
                                     'alt="Company Name" />' +
                              '</div>'
                        },
                
                        // 🟢 Pill CTA
                        {
                            xtype : 'container',
                            width : '80%',
                            height: 40,
                            margin: '8 0 0 20',   // align dengan icon
                          //  cls   : 'getMoreMembershipCard',
                            style : 'background:#ecfdf5;border:1px solid #bbf7d0;' +
                                    'border-radius:999px;white-space:nowrap;' +
                                    'position:relative;z-index:1;',
                            layout: {
                                type : 'vbox',
                                pack : 'center',
                                align: 'center'
                            },
                            items: [
                                {
                                    margin: '-3 0 0 0',
                                    html  : '<div style="font-size:14px;font-weight:700;color:#16a34a;">You got total 23</div>'
                                },
                                {
                                    margin: '-4 0 0 0',
                                    html  : '<div style="font-size:10px;color:#16a34a;">Eligible perk to be claim today!</div>'
                                }
                            ]
                        }
                    ]
                },
                  {
                    xtype: 'container',
                    width: '38%', 
                    hidden:false, 
                    height: 65,                                             
                   style: 'background-color:transparent;',
                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items:[

                         {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:10,
                        },
                       
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            height:5,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'center'
                
                            },
                            items:[
                                {
                                    margin: '0 0 0 0',
                                   // hidden:true, 
                                    html: '<div  style="color:white;text-align: center ;font-size:10px;width:100%;margin:0px 0px 0px 0px;font-weight:bold;">Perks Summary</div>'
                                       
                                }
                            ]
                        },
                       
                       
                        {
                            xtype: 'container',
                            style:"background-color:transparent",
                            width: '100%',
                            //margin: '7 0 0 0',
                            margin: '7 0 0 5',
                            height:40,
                            layout: {
                                type: 'hbox',
                                pack: 'right',
                                align: 'right'
                
                            },
                            items:[
                                
                                {
                                    xtype: 'container',
                                    width: '24%',
                                    style:"background-color:transparent",
                                    height:40,
                                    hidden:true,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                    id:'htmlAyohaMerchantReward_TotalPerkEligibleCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Eligible</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                   // width: '24%',
                                    width: '33%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                    id:'htmlAyohaMerchantReward_TotalRedeemCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Redeem</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                    width: '33%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                    id:'htmlAyohaMerchantReward_TotalApprovedRedeemCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Approved</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                    width: '33%',
                                    style:"background-color:transparent",
                                    height:40,
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        
                                        {
                                            xtype: 'container',
                                            width: '90%',
                                            style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                           // style: 'border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1 ;background-color: white;border-radius: 10px 10px 10px 10px;box-shadow: 5px 10px 18px #888888;',
                                           height:40,
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                    id:'htmlAyohaMerchantReward_TotalPerkExpiredCount',
                                                    html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Total</div>'
                                                },
                                                {
                                                    html: '<div  style="color:black;text-align: center;font-size:7px;width:100%;margin:-4px 0px 0px 0px;">Expired</div>'
                                                },
                                            ]
                                        }
                                    ]
                                   
                                       
                                },
                                {
                                    xtype: 'container',
                                    width: 5,
                                    height:40,
                                }
                            ]
                        },


                    ]
                  }

                  


                   ]

        },
       {
        xtype: 'container',
        width: '100%',  
        height: 15,  
       },
        {
    xtype: 'container',
    width: '100%',
    height: 140,
    style:"background-color: transparent;",
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center'

    },
    items:[
        {
            xtype: 'container',
            width: '100%',  
            height: 140,                                             
           style: 'background-color:transparent;',
           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items:[
              
                // {
                //     xtype: 'container',
                //     width: '100%',
                //     height: 5,
                //     layout: {
                //         type: 'vbox',
                //         pack: 'center',
                //         align: 'center',
                //     },
                //     items:[
                //         { 
                //             html: '<div  style="color:white;text-align: center;font-size:10px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">Perks Details</div>'
                //         },

                //     ]

                // },
               
                {
                    width: '95%',
                    height: 140,
                    html:'<div style="width:100%;height:140px;margin:0;background:transparent;">'+
                    '<canvas id="loyaltyHBar" style="width:100%;height:140px;"></canvas>'+
                    '</div>'
                }
            ]
        
           },

    ]
        }
      

    ]
  },



//////////////////////



                              ////////Merchant Redemption

                              {

                                  xtype: 'container',
                                  width: '100%',
                                // height: '100%',
                                height:800,
                                //height: 690,
                               // height: Ext.getBody().getViewSize().height - 250,
                                  /// hidden:true,

                                  margin: '0 0 0 0',
                                  id: 'containerDashboard_MerchantRedemptionMain',
                                  style: {
                                      // background: '#D25959',
                                      background: 'transparent',
                                      // border: '2px'
                                  },
                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                  // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',

                                  },
                                  items: [
//original header button perks
{
    xtype: 'container',
    width: '100%',
    height: 40,    
    /// hidden:true,
    margin: '0 0 0 0',
    id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Master',
   // style: 'border-bottom:2px none #D25959;background-colors:transparent',
    style: 'border-bottom:2px none #D25959;border-top:3px solid #D25959;border-right:2px none #D25959;border-left:2px none #D25959;background-color:transparent',
    scrollable: {
        direction: 'horizontal',
        directionLock: true,
        indicators: false
    },
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },
    items: [
{
    xtype: 'container',
    width: 600,
    height: 37,
    /// hidden:true,
    margin: '0 0 0 0',
    id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Scroll',
    style: 'border-bottom:2px none #D25959;background-color:transparent',
   
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id: 'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
                    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Digital Stamps</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Points',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id: 'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    //html: '<div style="color:#D1D5DB;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>'
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                   
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Events',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
     
      
   
      
      
        
        {
            xtype: 'container',
            width: 100,
            height: 30,
            /// hidden:true,
            margin: '0 0 0 0',
            id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
            name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
            style: 'background-color:transparent',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center',
            },
            items: [
                {
                   
                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                    id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
                    html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>'
                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                },
                
            ]
        },
    ]
},
       
    ]
},
//////




{
    xtype: 'tabpanel',
    style: "background-color: transparent;", 
   margin: '10 0 0 0',
     id: 'tabpanelAyohaMerchantRewards',
     width: '100%',
     height: '100%',
     //height: 500,
    //height: 650,
     tabBarPosition: 'top',
     ui: 'plain',
     items: [
        /////////Stamps Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Stamps',
            id:'containerTabpanelAyohaMerchantRewards_Stamps',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            }, 
            items:[
                ////Stamp micropy button

{
    xtype: 'container',
    width: '100%',
    margin: '0 0 0 0',
    height:25,
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    items: [


{

html:
'<div class="perk-tabs">'+
  '<button id="btnStampEligible" class="perk-btn stamp active" onclick="switchPerkTab_Stamp(this,\'NA\',0);">' +
    '<span class="perk-label">Eligible Perks</span>' +
    '<span id="cntStampEligible" class="perk-count">(3)</span>' +
  '</button>'+
  '<button id="btnStampSubmitted" class="perk-btn stamp" onclick="switchPerkTab_Stamp(this,\'Submitted\',1);">' +
    '<span class="perk-label">Redeem</span>' +
    '<span id="cntStampRedeem" class="perk-count"></span>' +
  '</button>'+
  '<button id="btnStampApproved" class="perk-btn stamp" onclick="switchPerkTab_Stamp(this,\'Approved\',2);">' +
    '<span class="perk-label">Approved</span>' +
    '<span id="cntStampApproved" class="perk-count"></span>' +
  '</button>'+
  '<button id="btnStampExpired" class="perk-btn stamp" onclick="switchPerkTab_Stamp(this,\'Expired\',3);">' +
    '<span class="perk-label">Expired</span>' +
    '<span id="cntStampExpired" class="perk-count"></span>' +
  '</button>'+
'</div>'
},





    ]
},

{
    xtype: 'container',
    width: '100%',
    height: 47,  
    style: 'background-color:transparent;',  
    /// hidden:true,
   
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },
    items:[
        {
            width: '100%',
            height: 47,  
            margin: '-5 0 0 0',  
            html: '<div  style="background-color:transparent; padding: 15px;">' +
            '<input type="text"  id="txtStampPerksSearch" placeholder="Search Merchant or Perk..." ' +
              'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                     'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                     'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                     'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                     'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                     'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
            '>' +
          '</div>',
        }
    ]
},

// {
//     xtype: 'container',
//     style: "background-color: transparent;", 
//    margin: '0 0 0 0',
//      id: 'containerAyohaMerchantRewards_StampStatus',
//      width: '100%',
//      //height: '100%',
//      height: 400,
//      layout: {
//         type: 'vbox',
//         pack: 'start',
//         align: 'center',
//     },
//     items:[
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            margin: '5 0 0 0',
            style: "background-color: transparent;",
            title: 'StampsStatus_EligiblePerks',
            id:'containerTabpanelAyohaMerchantRewards_StampsStatus_Eligible_Redeem_Approved_Expired',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            }, 
            items:[
                

{
    xtype: 'carousel',
    style: "background-color: transparent;", 
   margin: '0 0 0 0',
     id: 'carouselAyohaMerchantRewards_Stamps',
     width: '100%',
     height:'100%',
    // height: 350,
    //// tabBarPosition: 'top',
    // ui: 'plain',
    listeners: {

        activeitemchange: function (container, newCard, oldCard, index) {
        

     


           // globalFloatLoyaltyCardPointCarouselIndex = container.getActiveIndex();
            var eligibleBtn = document.getElementById('btnStampEligible');
            var submittedBtn = document.getElementById('btnStampSubmitted');
            var approvedBtn = document.getElementById('btnStampApproved');
            var expiredBtn = document.getElementById('btnStampExpired');


          

if(container.getActiveIndex()==0){
switchPerkTab_Stamp(eligibleBtn, 'NA', 0);
}
if(container.getActiveIndex()==1){
switchPerkTab_Stamp(submittedBtn, 'Submitted', 1);
}if(container.getActiveIndex()==2){
switchPerkTab_Stamp(approvedBtn, 'Approved', 2);
}if(container.getActiveIndex()==3){
switchPerkTab_Stamp(expiredBtn, 'Expired', 3);
}
            
          
        

        },

    },
    items:[
        ///////Eligible Stamp 
        {
            xtype: 'container',
            flex : 1,                 // 🌟 akan ambil semua ruang tengah
            layout: 'fit',
            margin: '5 0 0 0',
            style: "background-color: transparent;",
            title: 'StamptStatus_Eligible',
            id:'containercarouselAyohaMerchantRewards_Stamp_Eligible',
            listeners: {
                painted: function(pnl) {
                    var h = pnl.getHeight(); // atau pnl.element.getHeight()
                    containerPerkListglobalHeight = h;
                  
                }
            },
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'list',
                    width: '95%',
                    height: 480,
                   // margin: '0 0 0 0',
                    // height: '98%',
                    // flex: 1,
                  //  store: _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore,
                    // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                   // grouped:true,
                    id: 'listTabpanelAyohaMerchantRewards_StampsStatus_NA',
                    mode: 'SINGLE',
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
                    style: 'background-color:rgba(255,255,255, 0.1);',
                    // width: '100%',
                    disableSelection: true,

                  




                    // itemTpl:
                    // '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                    //   '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                    //     '<tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})">' +
                    //       '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                    //         '{ModifiedStampContent}' +
                    //       '</td>' +
                    //       '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                    //         '{StampContentNote}<br>' +
                    //         '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                    //           'Merchant:{EnterpriseName}<br>' +
                    //           'End:{EndDate}' +
                    //           '<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
                    //         '</font>' +
                    //       '</td>' +
                    //     '</tr>' +
                    //   '</table>' +
                    // '</div>',



                    itemTpl:
  '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
    '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
      '<tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})">' +
        '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
          '{ModifiedStampContent}' +
        '</td>' +
        '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
          '{StampContentNote}<br>' +
          '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
            // 👇 added icon before Merchant:
           // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
            'Merchant:{EnterpriseName}</u><br>' +
            'End:{EndDate}' +
           // '<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
          '</font>' +
        '</td>' +
      '</tr>' +
    '</table>' +
    '<div style="position:absolute;bottom:10px;right:10px;' +
    'background-color:transparent;' +
    'color:green;' +
    'font-size:10px;font-weight:normal;' +
    'white-space:nowrap;">' +              // tutup style dengan ">
    '&#9679;&nbsp;{CampaignDayLeft} Day Left' +  // ini jadi content
  '</div>' +
  '</div>',

  emptyText:CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg('Stamp'), 
//   '<div style="text-align:center;margin-top:-230px;font-family:Arial,sans-serif;">' +
//   '<div style="width:72px;height:72px;margin:0 auto 8px;' +
//               'border-radius:50%;background:#F3F4F6;' +
//               'display:flex;align-items:center;justify-content:center;">' +
//     '<img src="resources/icons/empty_eligible.png" ' +
//          'style="width:70px;height:70px;opacity:0.8;" />' +
//   '</div>' +
//   '<div style="font-size:12px;color:#6B7280;">No active perks yet. Visit a merchant membership stamp loyalty program and start collecting!</div>' +
// '</div>',
                    listeners: {
                        itemswipe: function (list, idx, target, record, evt) {
                   
        
                        } // itemswipe
                    }
        
                },
            ]
        },
       
        ///////Submitted Stamp 
        {
            xtype: 'container',
            flex : 1,                 // 🌟 akan ambil semua ruang tengah
            layout: 'fit',
            margin: '5 0 0 0',
            style: "background-color: transparent;",
            title: 'StamptStatus_Submitted',
            id:'containercarouselAyohaMerchantRewards_Stamp_Submitted',
            listeners: {
                painted: function(pnl) {
                    var h = pnl.getHeight(); // atau pnl.element.getHeight()
                    containerPerkListglobalHeight = h;
                  
                }
            },
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'list',
                    width: '95%',
                    height: 500,
                   
                    // height: '98%',
                    // flex: 1,
                  //  store: _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore,
                    // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                   // grouped:true,
                    id: 'listTabpanelAyohaMerchantRewards_StampsStatus_Submitted',
                    mode: 'SINGLE',
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
                    style: 'background-color:rgba(255,255,255, 0.1);',
                    // width: '100%',
                    disableSelection: true,


                    itemTpl:
                    '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                      '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                        '<tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})">' +
                          '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                            '{ModifiedStampContent}' +
                          '</td>' +
                          '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                            '{StampContentNote}<br>' +
                            '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                              // 👇 added icon before Merchant:
                             // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
                              'Merchant:&nbsp;{EnterpriseName}<br>' +
                            //  'Redeem On:{StampedDate}' +
                              '<span style="font-size:10px;color:#F97316;background:#FFEDD5;border:1px solid #FDBA74;padding:3px 6px;border-radius:999px;white-space:nowrap;">Redeemed On:{StampedDate}</span>'+
                             // '<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
                            '</font>' +
                          '</td>' +
                        '</tr>' +
                      '</table>' +
                    '</div>',

                   
                    emptyText:CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg('Stamp'),
                //      '<div style="text-align:center;margin-top:-230px;font-family:Arial,sans-serif;">' +
                //     '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                //                 'border-radius:50%;background:#F3F4F6;' +
                //                 'display:flex;align-items:center;justify-content:center;">' +
                //       '<img src="resources/icons/empty_redeem01.png" ' +
                //            'style="width:70px;height:70px;opacity:0.8;" />' +
                //     '</div>' +
                //     '<div style="font-size:12px;color:#6B7280;">No redemptions yet.<br> Save up your stamps to claim a reward!</div>' +
                //   '</div>',
                    listeners: {
                        itemswipe: function (list, idx, target, record, evt) {
                   
        
                        } // itemswipe
                    }
        
                },
            ]
        },
      
         ///////Approved Stamp 
         {
            xtype: 'container',
            flex : 1,                 // 🌟 akan ambil semua ruang tengah
            layout: 'fit',
            margin: '5 0 0 0',
            style: "background-color: transparent;",
            title: 'StamptStatusApproved',
            id:'containercarouselAyohaMerchantRewards_Stamp_Approved',
            listeners: {
                painted: function(pnl) {
                    var h = pnl.getHeight(); // atau pnl.element.getHeight()
                    containerPerkListglobalHeight = h;
                  
                }
            },
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'list',
                    width: '95%',
                    height: 500,
                   
                    // height: '98%',
                    // flex: 1,
                  //  store: _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore,
                    // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                   // grouped:true,
                    id: 'listTabpanelAyohaMerchantRewards_StampsStatus_Approved',
                    mode: 'SINGLE',
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
                    style: 'background-color:rgba(255,255,255, 0.1);',
                    // width: '100%',
                    disableSelection: true,
                    itemTpl:
                    '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                      '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                        '<tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})">' +
                          '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                            '{ModifiedStampContent}' +
                          '</td>' +
                          '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                            '{StampContentNote}<br>' +
                            '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                              // 👇 added icon before Merchant:
                             // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
                              'Merchant:&nbsp;{EnterpriseName}<br>' +
                              //'Approved On:{StampedDate}' +
                              '<span style="font-size:10px;color:#16a34a;background:#ecfdf5;border:1px solid #bbf7d0;padding:3px 6px;border-radius:999px;white-space:nowrap;">Approved On:{StampedDate}</span>'+
                             // '<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
                            '</font>' +
                          '</td>' +
                        '</tr>' +
                      '</table>' +
                    '</div>',
                    // itemTpl: '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius: 10px 10px 10px 10px;">' +
                    //  '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0px 0px -15px;height:90px;"><tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center">{ModifiedStampContent}</td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{StampContentNote}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{EnterpriseName}<br>End:{EndDate} - {CampaignDayLeft} Day Left</font></td></tr></table>'        
                    //      + '</div>',
                  
                   
                  
                    emptyText:CoreFunction_AyohaMerchantReward_listEmptyApprovedStore_TextMsg('Stamp'),
                //      '<div style="text-align:center;margin-top:-230px;font-family:Arial,sans-serif;">' +
                //     '<div style="width:72px;height:72px;margin:0 auto 8px;' +
                //                 'border-radius:50%;background:#F3F4F6;' +
                //                 'display:flex;align-items:center;justify-content:center;">' +
                //       '<img src="resources/icons/empty_approved.png" ' +
                //            'style="width:70px;height:70px;opacity:0.8;" />' +
                //     '</div>' +
                //     '<div style="font-size:12px;color:#6B7280;">No approvals pending. All your perks are up to date</div>' +
                //   '</div>',
                    listeners: {
                        itemswipe: function (list, idx, target, record, evt) {
                   
        
                        } // itemswipe
                    }
        
                },
            ]
         },
        
         ///////Expired Stamp 
         {
            xtype: 'container',
            flex : 1,                 // 🌟 akan ambil semua ruang tengah
            layout: 'fit',
            margin: '5 0 0 0',
            style: "background-color: transparent;",
            title: 'StamptStatusExpired',
            id:'containercarouselAyohaMerchantRewards_Stamp_Expired',
            listeners: {
                painted: function(pnl) {
                    var h = pnl.getHeight(); // atau pnl.element.getHeight()
                    containerPerkListglobalHeight = h;
                  
                }
            },
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'list',
                    width: '95%',
                    height: 500,
                   
                    // height: '98%',
                    // flex: 1,
                  //  store: _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore,
                    // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                   // grouped:true,
                    id: 'listTabpanelAyohaMerchantRewards_StampsStatus_Expired',
                    mode: 'SINGLE',
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
                    style: 'background-color:rgba(255,255,255, 0.1);',
                    // width: '100%',
                    disableSelection: true,


                   // cls: 'perks-list-tight',   // 👈 class khas list ini
                    // itemTpl:
                    // '<div class="myContent" style="position:relative;background:#fff;width:100%;height:83px;border-radius:0px;margin:0;">' +
                    //   '<span style="position:absolute;top:6px;left:8px;font:700 11px/1 Arial, sans-serif;color:#111827;pointer-events:none;">{RowNumber}).</span>' +
                    //   '<table style="border-collapse:collapse;width:100%;height:80px;background:#fff;">' +
                    //     '<tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})" style="cursor:pointer;">' +
                    //       '<td style="width:20%;padding:0 8px 0 25px;vertical-align:middle;border:0;">{ModifiedStampContent}</td>' +
                    //       '<td style="width:80%;padding:0;border:0;vertical-align:middle;font-family:Arial,sans-serif;">' +
                    //         '<div style="font-size:12px;font-weight:bold;">{StampContentNote}</div>' +
                    //         '<div style="font-size:12px;font-weight:normal;">{EnterpriseName}<br>End:{EndDate} &#9679;<span style="color:red">Expired {CampaignDayLeft} days ago</span></div>' +
                    //       '</td>' +
                    //     '</tr>' +
                    //   '</table>' +
                    // '</div>',

                    itemTpl:
                    '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                      '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                        '<tr onclick="AyohaMerchantReward_openStampCardRedemption({ID})">' +
                          '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                            '{ModifiedStampContent}' +
                          '</td>' +
                          '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                            '{StampContentNote}<br>' +
                            '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                              // 👇 added icon before Merchant:
                             // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
                              'Merchant:&nbsp;{EnterpriseName}<br>' +
                              'End:{EndDate} &#9679;<span style="color:red">Expired {CampaignDayLeft} days ago' +
                             // '<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
                            '</font>' +
                          '</td>' +
                        '</tr>' +
                      '</table>' +
                    '</div>',

                
                  
                    emptyText:CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg('Stamp'), 
              
                  
                    listeners: {
                        itemswipe: function (list, idx, target, record, evt) {
                   
        
                        } // itemswipe
                    }
        
                },
            ]
         }
         
    ]
},





                   
                
        //     ]
        // }
    ]
},


            ]
        },        
           /////////Point Tab
        {
            xtype: 'container',
            width: '100%',
            height:'100%',
            style: "background-color: transparent;",
            title: 'Points',
            id:'containercarouselAyohaMerchantRewards_Points',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                                ////Point micropy button

                                {
                                    xtype: 'container',
                                    width: '100%',
                                    margin: '0 0 0 0',
                                    height:25,
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [
                                
                                
                                {
                                //     html:'<div class="perk-tabs">'+
                                //     '<button id="btnPointEligible" class="perk-btn point active" onclick="switchPerkTab_Point(this,\'Eligible\',0);">Eligible Perks</button>'+
                                //     '<button id="btnPointSubmitted" class="perk-btn point" onclick="switchPerkTab_Point(this,\'Submitted\',1);">Redeem</button>'+
                                //     '<button id="btnPointApproved" class="perk-btn point" onclick="switchPerkTab_Point(this,\'Approved\',2)">Approved</button>'+
                                //     '<button id="btnPointExpired" class="perk-btn point" onclick="switchPerkTab_Point(this,\'Expired\',3)">Expired</button>'+
                                //   '</div>'
                                  html:
                                  '<div class="perk-tabs">'+
                                    '<button id="btnPointEligible" class="perk-btn point active" onclick="switchPerkTab_Point(this,\'Eligible\',0);">' +
                                      '<span class="perk-label">Eligible Perks</span>' +
                                      '<span id="cntPointEligible" class="perk-count">(3)</span>' +
                                    '</button>'+
                                    '<button id="btnPointSubmitted" class="perk-btn point" onclick="switchPerkTab_Point(this,\'Submitted\',1);">' +
                                      '<span class="perk-label">Redeem</span>' +
                                      '<span id="cntPointRedeem" class="perk-count"></span>' +
                                    '</button>'+
                                    '<button id="btnPointApproved" class="perk-btn point" onclick="switchPerkTab_Point(this,\'Approved\',2);">' +
                                      '<span class="perk-label">Approved</span>' +
                                      '<span id="cntPointApproved" class="perk-count"></span>' +
                                    '</button>'+
                                    '<button id="btnPointExpired" class="perk-btn point" onclick="switchPerkTab_Point(this,\'Expired\',3);">' +
                                      '<span class="perk-label">Expired</span>' +
                                      '<span id="cntPointExpired" class="perk-count"></span>' +
                                    '</button>'+
                                  '</div>'
                                  },
                               
                               
                                
                                
                                
                                
                                
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                    height: 47,  
                                    style: 'background-color:transparent;',  
                                    /// hidden:true,
                                   
                                    layout: {
                                        type: 'vbox',
                                        pack: 'start',
                                        align: 'center',
                                    },
                                    items:[
                                        {
                                            width: '100%',
                                            height: 47,  
                                            margin: '-5 0 0 0',  
                                            html: '<div  style="background-color:transparent; padding: 15px;">' +
                                            '<input type="text"  id="txtPointPerksSearch" placeholder="Search Merchant or Perk..." ' +
                                              'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                                                     'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                                                     'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                                                     'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                                                     'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                                                     'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
                                            '>' +
                                          '</div>',
                                        }
                                    ]
                                },
{
    xtype: 'container',
    width: '100%',
    //width: 1050,
    //height: 350,
    height:'100%',
    id: 'containerAyohaMerchantRewards_Points',
    margin: '5 0 0 0',
    //height: '100%',
   // margin: '-150 0 0 0',
   // margin: '-100 0 0 0',
    //style: {
    //    // background: '#D25959',
    //    background: 'rgba(76, 175, 80, 0.3);',
    //    // border: '2px'
    //},
    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    style: 'background-color:transparent',

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },
    items: [
      {
       // xtype: 'tabpanel',
        xtype: 'carousel',
        style: "background-color: transparent;", 
       margin: '0 0 0 0',
         id: 'carouselAyohaMerchantRewards_Points',
         width: '100%',
         height:'100%',
        // height: 350,
        //// tabBarPosition: 'top',
        // ui: 'plain',
        listeners: {

            activeitemchange: function (container, newCard, oldCard, index) {
            

         


               // globalFloatLoyaltyCardPointCarouselIndex = container.getActiveIndex();
                var eligibleBtn = document.getElementById('btnPointEligible');
                var submittedBtn = document.getElementById('btnPointSubmitted');
                var approvedBtn = document.getElementById('btnPointApproved');
                var expiredBtn = document.getElementById('btnPointExpired');

if(container.getActiveIndex()==0){
    switchPerkTab_Point(eligibleBtn, 'Eligible', 0);
}
if(container.getActiveIndex()==1){
    switchPerkTab_Point(submittedBtn, 'Submitted', 1);
}if(container.getActiveIndex()==2){
    switchPerkTab_Point(approvedBtn, 'Approved', 2);
}if(container.getActiveIndex()==3){
    switchPerkTab_Point(expiredBtn, 'Expired', 3);
}
                
              
            

            },

        },
         items: [


////// Point Eligible Corousel Tab
{
    xtype: 'container',
    flex : 1,                 // 🌟 akan ambil semua ruang tengah
    layout: 'fit',
    margin: '5 0 0 0',
    style: "background-color: transparent;",
    title: 'PointStatus_Eligible',
    id:'containercarouselAyohaMerchantRewards_Point_Eligible',
    listeners: {
        painted: function(pnl) {
            var h = pnl.getHeight(); // atau pnl.element.getHeight()
            containerPerkListglobalHeight = h;
           // alert('HEIGHT ZONE =', h);
           // alert('HEIGHT ZONE = ' + h);   // ❗️ concat string + number
            // di sini kalau nak, boleh call load store dan pass height
          //  AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore('Eligible', h);
        }
    },
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    }, 
    items:[
        
{
    xtype: 'list',
    width: '95%',
   //height: 95,       
    id: 'listcarouselAyohaMerchantRewards_Point_Eligible',
    mode: 'SINGLE',
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    // width: '100%',
    disableSelection: true,
    itemTpl:
    '<div class="myContent" style="position:relative;background-color:white;width:100%;height:80px;border-radius:10px;">' +

    
  '<div style="position:absolute;top:0;right:-3px;' +
  'background-color:#4169E1;' +                     // color utama badge
  'color:#FFFFFF;' +
  'font-size:10px;font-weight:bold;' +
  'padding:3px 7px;' +
  'border-radius:0px 0px 10px 10px;' +
  'border:1px none rgba(255,255,255,.25);' +               // garis luar sikit lebih gelap
  'box-shadow:0 2px 4px rgba(0,0,0,0.15);">' +// bagi timbul sedikit
  '{ItemPoint} points</div>' +

      '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
        '<tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})">' +
          '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
            '{ModifiedItemImg}' +
          '</td>' +
          '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
            '{ItemName}<br>' +
            '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
              'Merchant:&nbsp;{EnterpriseName}<br>' +
              'End:{EndDate}' +
              
            '</font>' +
           // '<span style="float:right; white-space:nowrap;color:green;margin:10px 10px 0px 0px;font-size:10px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
          '</td>' +
        '</tr>' +
      '</table>' +

  

    '<div style="position:absolute;bottom:-5px;right:0px;' +
    'background-color:transparent;' +
    'color:green;' +
    'font-size:10px;font-weight:normal;' +
    'white-space:nowrap;">' +              // tutup style dengan ">
    '&#9679;&nbsp;{CampaignDayLeft} Day Left' +  // ini jadi content
  '</div>' +
'</div>',
        //  itemTpl:
        //  '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
        //    '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
        //      '<tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})">' +
        //        '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
        //          '{ModifiedItemImg}' +
        //        '</td>' +
        //        '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
        //          '{ItemName}<br>' +
        //          '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
        //            // 👇 added icon before Merchant:
        //           // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
        //            'Merchant:&nbsp;{EnterpriseName}<br>' +
        //            'End:{EndDate}' +
        //            '<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
        //          '</font>' +
        //        '</td>' +
        //      '</tr>' +
        //    '</table>' +
        //  '</div>',
  
   
  emptyText: CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg('Point'),

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
/////End Eligible Points/////
////// Point Redeem Corousel Tab
{
    xtype: 'container',
    width: '100%',
    height: '100%',
    margin: '5 0 0 0',
    style: "background-color: transparent;",
    title: 'PointStatus_Submitted',
    id:'containercarouselAyohaMerchantRewards_Point_Submitted',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    }, 
    items:[
        
            {
                xtype: 'list',
                width: '95%',
                height: 400,               
                id: 'listcarouselAyohaMerchantRewards_Point_Submitted',
                mode: 'SINGLE',
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
                style: 'background-color:rgba(255,255,255, 0.1);',
                // width: '100%',
                disableSelection: true,
                // itemTpl: '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius: 10px 10px 10px 10px;">' +


                //  '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0px 0px -15px;height:90px;"><tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})"><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center">{ModifiedItemImg}</td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{ItemName}<br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{EnterpriseName}<br>End:{EndDate} - {CampaignDayLeft} Day Left</font></td></tr></table>'

                //      + '</div>',
              
                     itemTpl:
                   
                     '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                     '<div style="position:absolute;top:0;right:10px;' +
                     'background-color:#4169E1;' +                     // color utama badge
                     'color:#FFFFFF;' +
                     'font-size:10px;font-weight:bold;' +
                     'padding:3px 7px;' +
                     'border-radius:0px 0px 10px 10px;' +
                     'border:1px solid rgba(255,255,255,.25);' +               // garis luar sikit lebih gelap
                     'box-shadow:0 2px 4px rgba(0,0,0,0.15);">' +// bagi timbul sedikit
                     '{ItemPoint} points</div>' +
                     '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                         '<tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})">' +
                           '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                             '{ModifiedItemImg}' +
                           '</td>' +
                           '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                             '{ItemName}<br>' +
                             '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                               // 👇 added icon before Merchant:
                              // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
                               'Merchant:&nbsp;{EnterpriseName}<br>' +
                             //  'Redeemed On:{EndDate}' +
                               '<span style="font-size:10px;color:#F97316;background:#FFEDD5;border:1px solid #FDBA74;padding:3px 6px;border-radius:999px;white-space:nowrap;">Redeemed On:{EndDate}</span>'+
                               //'<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
                             '</font>' +
                           '</td>' +
                         '</tr>' +
                       '</table>' +
                     '</div>',
              
                emptyText:CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg('Point'),
                // '<div  style="background-color:transparent;width:100%;height100%;">Hai!, you have no redemption items yet.Go to Ayoha Mechant Menu ,get their Membership card and then collect your redemptions items!</div>',
                //listeners: {
                //    itemsingletap: function (list, idx, target, records, evt) {

               

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
/////End Redeem Points/////

////// Point Approved Corousel Tab
{
    xtype: 'container',
    width: '100%',
    height: '100%',
    margin: '5 0 0 0',
    style: "background-color: transparent;",
    title: 'PointStatus_Approved',
    id:'containercarouselAyohaMerchantRewards_Point_Approved',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    }, 
    items:[
        
            {
                xtype: 'list',
                width: '95%',
                height: 400,               
                id: 'listcarouselAyohaMerchantRewards_Point_Approved',
                mode: 'SINGLE',
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
                style: 'background-color:rgba(255,255,255, 0.1);',
                // width: '100%',
                disableSelection: true,
                itemTpl:
               
                '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                '<div style="position:absolute;top:0;right:10px;' +
                'background-color:#4169E1;' +                     // color utama badge
                'color:#FFFFFF;' +
                'font-size:10px;font-weight:bold;' +
                'padding:3px 7px;' +
                'border-radius:0px 0px 10px 10px;' +
                'border:1px solid rgba(255,255,255,.25);' +               // garis luar sikit lebih gelap
                'box-shadow:0 2px 4px rgba(0,0,0,0.15);">' +// bagi timbul sedikit
                '{ItemPoint} points</div>' +
                '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                    '<tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})">' +
                      '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                        '{ModifiedItemImg}' +
                      '</td>' +
                      '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                        '{ItemName}<br>' +
                        '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                          // 👇 added icon before Merchant:
                         // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
                          'Merchant:&nbsp;{EnterpriseName}<br>' +
                          //'Approved On:{EndDate}' +
                          '<span style="font-size:10px;color:#16a34a;background:#ecfdf5;border:1px solid #bbf7d0;padding:3px 6px;border-radius:999px;white-space:nowrap;">Approved On:{EndDate}</span>'+
                          //'<span style="float:right; white-space:nowrap;color:green;margin:0px 10px 0px 0px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
                        '</font>' +
                      '</td>' +
                    '</tr>' +
                  '</table>' +
                '</div>',
              
                emptyText:CoreFunction_AyohaMerchantReward_listEmptyApprovedStore_TextMsg('Point'),
                //listeners: {
                //    itemsingletap: function (list, idx, target, records, evt) {

               

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
/////End Approved Points/////
////// Point Expired Corousel Tab
{
    xtype: 'container',
    width: '100%',
    height: '100%',
    margin: '5 0 0 0',
    style: "background-color: transparent;",
    title: 'PointStatus_Expired',
    id:'containercarouselAyohaMerchantRewards_Point_Expired',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    }, 
    items:[
        
            {
                xtype: 'list',
                width: '95%',
                height: 400,               
                id: 'listcarouselAyohaMerchantRewards_Point_Expired',
                mode: 'SINGLE',
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
                style: 'background-color:rgba(255,255,255, 0.1);',
                // width: '100%',
                disableSelection: true,




              



                itemTpl:

                '<div class="myContent" style="background-color:white;width:100%;height:80px;border-radius:10px;">' +
                '<div style="position:absolute;top:5;right:8px;' +
                'background-color:#4169E1;' +                     // color utama badge
                'color:#FFFFFF;' +
                'font-size:10px;font-weight:bold;' +
                'padding:3px 7px;' +
                'border-radius:0px 0px 10px 10px;' +
                'border:1px none rgba(255,255,255,.25);' +               // garis luar sikit lebih gelap
                'box-shadow:0 2px 4px rgba(0,0,0,0.15);">' +// bagi timbul sedikit
                '{ItemPoint} points</div>' +
                 

              
      '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
      '<tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})">' +
        '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
          '{ModifiedItemImg}' +
        '</td>' +
        '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
          '{ItemName}<br>' +
          '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
            'Merchant:&nbsp;{EnterpriseName}<br>' +
            'End:{EndDate}' +
            
          '</font>' +
         // '<span style="float:right; white-space:nowrap;color:green;margin:10px 10px 0px 0px;font-size:10px">&#9679;&nbsp;{CampaignDayLeft} Day Left</span>' +
        '</td>' +
      '</tr>' +
    '</table>' +


              '<div style="position:absolute;bottom:5px;right:12px;' +
              'background-color:transparent;' +
              'color:red;' +
              'font-size:10px;font-weight:normal;' +
              'white-space:nowrap;">' +              // tutup style dengan ">
              'Expired&nbsp;&#9679;{ModifiedCampaignDayLeft} days ago' +  // ini jadi content
            '</div>' +
            '</div>',
                
                // '<table style="border-collapse:collapse;border-spacing:0;width:110%;background-color:white;margin:-10px 0 0 -15px;height:90px;">' +
                //     '<tr onclick="AyohaMerchantReward_openPointCardRedemption({ID})">' +
                //       '<td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0 7px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center;">' +
                //         '{ModifiedItemImg}' +
                //       '</td>' +
                //       '<td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center;">' +
                //         '{ItemName}<br>' +
                //         '<font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">' +
                //           // 👇 added icon before Merchant:
                //          // '<img src="{EnterprisesLogo}" style="width:14px;height:14px;margin:0 4px 0 0;vertical-align:middle;" />' +
                //           'Merchant:&nbsp;{EnterpriseName}<br>' +
                //           'End:{EndDate}' +
                //           '<span style="float:right; white-space:nowrap;color:red;margin:0px 10px 0px 0px;font-size:10px;">Expired&nbsp;&#9679;{ModifiedCampaignDayLeft} days ago</span>' +
                //         '</font>' +
                //       '</td>' +
                //     '</tr>' +
                //   '</table>' +
                // '</div>',

              
                emptyText:CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg('Point'),
                //listeners: {
                //    itemsingletap: function (list, idx, target, records, evt) {

               

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
/////End Expired Points/////
         ]
      },
        

       
    ]

},
            ]
        },
         /////////Voucher Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Vouchers',
            id:'containerTabpanelAyohaMerchantRewards_Vouchers',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'container',
                    width: '100%',
                    margin: '0 0 0 0',
                    height:25,
                    style: 'background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center',
                    },
                    items: [
                
                
                // {
                //     html:'<div class="perk-tabs">'+
                //     '<button id="btnVoucherEligible" class="perk-btn point active" onclick="switchPerkTab_Voucher(this,\'Eligible\',0);">Eligible Perks</button>'+
                //     '<button id="btnVoucherRedeem" class="perk-btn point" onclick="switchPerkTab_Voucher(this,\'Submitted\',1);">Redeem</button>'+
                //     '<button id="btnVoucherApproved" class="perk-btn point" onclick="switchPerkTab_Voucher(this,\'Approved\',2)">Approved</button>'+
                //     '<button id="bbtnVoucherExpired" class="perk-btn point" onclick="switchPerkTab_Voucher(this,\'Expired\',3)">Expired</button>'+
                //   '</div>'
                // },
                {
                html:
                '<div class="perk-tabs">'+
                  '<button id="btnVoucherEligible" class="perk-btn voucher active" onclick="switchPerkTab_Voucher(this,\'Eligible\',0);">' +
                    '<span class="perk-label">Eligible Perks</span>' +
                    '<span id="cntVoucherEligible" class="perk-count">(3)</span>' +
                  '</button>'+
                  '<button id="btnVoucherRedeem" class="perk-btn voucher" onclick="switchPerkTab_Voucher(this,\'Submitted\',1);">' +
                    '<span class="perk-label">Redeem</span>' +
                    '<span id="cntPVoucherRedeem" class="perk-count"></span>' +
                  '</button>'+
                  '<button id="btnVoucherApproved" class="perk-btn voucher" onclick="switchPerkTab_Voucher(this,\'Approved\',2);">' +
                    '<span class="perk-label">Approved</span>' +
                    '<span id="cntVoucherApproved" class="perk-count"></span>' +
                  '</button>'+
                  '<button id="btnVoucherExpired" class="perk-btn voucher" onclick="switchPerkTab_Voucher(this,\'Expired\',3);">' +
                    '<span class="perk-label">Expired</span>' +
                    '<span id="cntVoucherExpired" class="perk-count"></span>' +
                  '</button>'+
                '</div>'
                },
                
                
                
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height: 47,  
                    style: 'background-color:transparent;',  
                    /// hidden:true,
                   
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items:[
                        {
                            width: '100%',
                            height: 47,  
                            margin: '-5 0 0 0',  
                            html: '<div  style="background-color:transparent; padding: 15px;">' +
                            '<input type="text"  id="txtVoucherPerksSearch" placeholder="Search Merchant or Perk..." ' +
                              'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                                     'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                                     'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                                     'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                                     'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                                     'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
                            '>' +
                          '</div>',
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: '98%',
                    /// hidden:true,
                    margin: '10 0 0 0',
                    height: '100%',
                    style: 'background-color: transparent;',
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center',
                    },
                    items: [
                       {
                        xtype: 'carousel',
                        style: "background-color: transparent;", 
                       margin: '0 0 0 0',
                         id: 'carouselAyohaMerchantRewards_Vouchers',
                         width: '100%',
                         height:'100%',
                         listeners: {

                            activeitemchange: function (container, newCard, oldCard, index) {
                                var eligibleBtn = document.getElementById('btnVoucherEligible');
                                var submittedBtn = document.getElementById('btnVoucherRedeem');
                                var approvedBtn = document.getElementById('btnVoucherApproved');
                                var expiredBtn = document.getElementById('btnVoucherExpired');
                
                if(container.getActiveIndex()==0){
                    switchPerkTab_Voucher(eligibleBtn, 'Eligible', 0);
                }
                if(container.getActiveIndex()==1){
                    switchPerkTab_Voucher(submittedBtn, 'Submitted', 1);
                }if(container.getActiveIndex()==2){
                    switchPerkTab_Voucher(approvedBtn, 'Approved', 2);
                }if(container.getActiveIndex()==3){
                    switchPerkTab_Voucher(expiredBtn, 'Expired', 3);
                }
                            },
                        },
                        items:[
///////VoucherList_Eligible
{

    id: 'AyohaMerchantReward_VoucherList_Eligible',
    margin: '0 0 0 0',
   // xtype: 'dataview',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',
   // itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
   // itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="{VoucherImgPath}" style="width:100%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
   
   
    itemTpl: 
            '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" class="myContent" style="background-color:transparent;width:100%;height:250px;">' +
         // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
          '<img  src="{VoucherImgPath}" style="width:100%;height:160px;margin:0px 0px 0px 0px;"/><br>' +
        // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
         '<div style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Voucher Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{VoucherName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Merchant:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

         '<div  style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">End:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{EntitledVoucherEndDate} &nbsp;&#9679;{DayLeft} Day Left</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Voucher Amount(RM)<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{VoucherAmount}</div></div></div>' +


       '</div>',

   
   
   
   
   
   
   
    emptyText:CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg('Voucher'),    
},
///////VoucherList_Redeem
{

    id: 'AyohaMerchantReward_VoucherList_Submitted',
    margin: '0 0 0 0',
   // xtype: 'dataview',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',
   // itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
    itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="{VoucherImgPath}" style="width:100%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
    emptyText:CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg('Voucher'),
},
///////VoucherList_Approved
{

    id: 'AyohaMerchantReward_VoucherList_Approved',
    margin: '0 0 0 0',
   // xtype: 'dataview',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',
   // itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
    itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="{VoucherImgPath}" style="width:100%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
    emptyText: CoreFunction_AyohaMerchantReward_listEmptyApprovedStore_TextMsg('Voucher'),
},
///////VoucherList_Expired
{

    id: 'AyohaMerchantReward_VoucherList_Expired',
    margin: '0 0 0 0',
   // xtype: 'dataview',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',
   // itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:95%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
    itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:100%; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 0px;"><img src="{VoucherImgPath}" style="width:100%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:95%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:transparent;border-color:transparent;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-1px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
    emptyText:CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg('Voucher'),
},

                        ]
                       },



                      
                       
                    ]
                },
            ]
        },
        ////////Contest Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Contests',
            id:'containerTabpanelAyohaMerchantRewards_Contests',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'container',
                    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: '100%',
                    style: "background-color: transparent;",
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'

                    },
                    items: [
                        {
                            xtype: 'container',
                            width: '100%',
                            margin: '0 0 0 0',
                            height:25,
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                        
                        
                        {
                        //     html:'<div class="perk-tabs">'+
                        //     '<button id="btnContestEligible" class="perk-btn contest active" onclick="switchPerkTab_Contest(this,\'Eligible\',0);">Eligible Perks</button>'+
                        //     '<button id="btnContestRedeem" class="perk-btn contest" onclick="switchPerkTab_Contest(this,\'Submitted\',1);">Joined</button>'+
                        //     '<button id="btnContestApproved" class="perk-btn contest" onclick="switchPerkTab_Contest(this,\'Reviewed\',2)">Result</button>'+
                        //     '<button id="btnContestExpired" class="perk-btn contest" onclick="switchPerkTab_Contest(this,\'Expired\',3)">Expired</button>'+
                        //   '</div>'







                          html:
                          '<div class="perk-tabs">'+
                            '<button id="btnContestEligible" class="perk-btn contest active" onclick="switchPerkTab_Contest(this,\'Eligible\',0);">' +
                              '<span class="perk-label">Eligible Perks</span>' +
                              '<span id="cntContestEligible" class="perk-count">(3)</span>' +
                            '</button>'+
                            '<button id="btnContestRedeem" class="perk-btn contest" onclick="switchPerkTab_Contest(this,\'Submitted\',1);">' +
                              '<span class="perk-label">Joined</span>' +
                              '<span id="cntContestRedeem" class="perk-count"></span>' +
                            '</button>'+
                            '<button id="btnContestApproved" class="perk-btn contest" onclick="switchPerkTab_Contest(this,\'Reviewed\',2);">' +
                              '<span class="perk-label">Result</span>' +
                              '<span id="cntContestApproved" class="perk-count"></span>' +
                            '</button>'+
                            '<button id="btnContestExpired" class="perk-btn contest" onclick="switchPerkTab_Contest(this,\'Expired\',3);">' +
                              '<span class="perk-label">Expired</span>' +
                              '<span id="cntContestExpired" class="perk-count"></span>' +
                            '</button>'+
                          '</div>'
                          },
                        
                        
                        
                        
                        
                        
                            ]
                        },

                        {
                            xtype: 'container',
                            width: '100%',
                            height: 47,  
                            style: 'background-color:transparent;',  
                            /// hidden:true,
                           
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items:[
                                {
                                    width: '100%',
                                    height: 47,  
                                    margin: '-5 0 0 0',  
                                    html: '<div  style="background-color:transparent; padding: 15px;">' +
                                    '<input type="text"  id="txtContestPerksSearch" placeholder="Search Merchant or Perk..." ' +
                                      'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                                             'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                                             'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                                             'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                                             'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                                             'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
                                    '>' +
                                  '</div>',
                                }
                            ]
                        },


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: '100%',
                                           margin: '0 0 0 0',
                                           //  hidden: true,
                                           id: 'htmlFloatPanel_DashboardMerchantMembershipContest',
                                           style: "background-color: transparent;",
                                           // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                           layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'center'

                                           },
                                           items: [


{
    xtype: 'carousel',
    style: "background-color: transparent;", 
   margin: '10 0 0 0',
     id: 'carouselAyohaMerchantRewards_Contests',
     width: '100%',
     height:'100%',
     listeners: {

        activeitemchange: function (container, newCard, oldCard, index) {
            var eligibleBtn = document.getElementById('btnContestEligible');
            var submittedBtn = document.getElementById('btnContestRedeem');
            var approvedBtn = document.getElementById('btnContestApproved');
            var expiredBtn = document.getElementById('btnContestExpired');

if(container.getActiveIndex()==0){
switchPerkTab_Contest(eligibleBtn, 'Eligible', 0);
}
if(container.getActiveIndex()==1){
switchPerkTab_Contest(submittedBtn, 'Submitted', 1);
}if(container.getActiveIndex()==2){
switchPerkTab_Contest(approvedBtn, 'Reviewed', 2);
}if(container.getActiveIndex()==3){
switchPerkTab_Contest(expiredBtn, 'Expired', 3);
}
        },
    },
    items: [
///////AyohaMerchantReward_ContestList_Eligible
        {

            id: 'AyohaMerchantReward_ContestList_Eligible',
            xtype: 'list',
            height: 500,
            mode: 'SINGLE',
            disableSelection: true,
            //scrollable:false,
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
            style: 'background-color:rgba(255,255,255, 0.1);',
            width: '100%',


            //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
            //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
            //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
            //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


            //'</div>',


            itemTpl: 
            '<div class="myContent" style="background-color:transparent;width:100%;height:410px;">' +
         // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
          '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:100%;height:300px;margin:0px 0px 0px 0px;"/><br>' +
        // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
         '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

         '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div>' +


       '</div>',


            emptyText: CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg('Contest'),

        },
///////AyohaMerchantReward_ContestList_Joined
{

    id: 'AyohaMerchantReward_ContestList_Submitted',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',


    //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
    //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
    //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
    //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


    //'</div>',


    itemTpl: 
    '<div class="myContent" style="background-color:transparent;width:100%;height:410px;">' +
 // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
  '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:100%;height:300px;margin:0px 0px 0px 0px;"/><br>' +
// '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div>' +


'</div>',


    emptyText:CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg('Contest'),

},
///////AyohaMerchantReward_ContestList_Result
{

    id: 'AyohaMerchantReward_ContestList_Reviewed',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',


    //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
    //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
    //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
    //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


    //'</div>',


    itemTpl: 
    '<div class="myContent" style="background-color:transparent;width:100%;height:410px;">' +
 // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
  '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:100%;height:300px;margin:0px 0px 0px 0px;"/><br>' +
// '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div>' +


'</div>',


    emptyText: CoreFunction_AyohaMerchantReward_listEmptyApprovedStore_TextMsg('Contest'),

},
///////AyohaMerchantReward_ContestList_Expired
{

    id: 'AyohaMerchantReward_ContestList_Expired',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',


    //  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:500px;">' +
    //   '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br>' +
    //   '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{AdvertisementImgPath}" style="width:{ModifiedWidth}px;height:400px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
    //  '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 50%; float:left; height:50px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 50%; float:left; height:50px; background:white; margin:0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div><br>' +


    //'</div>',


    itemTpl: 
    '<div class="myContent" style="background-color:transparent;width:100%;height:410px;">' +
 // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
  '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});"   src="{AdvertisementImgPath}" style="width:100%;height:300px;margin:0px 0px 0px 0px;"/><br>' +
// '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Host:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +

 '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Period:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{StartDate_DateOnly} - {EndDate_DateOnly}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Contest Status<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ContestStatus_ContestStatus}</div></div></div>' +


'</div>',


    emptyText: CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg('Contest'),

},
    ]
},






                                          



                                            









                                             
                                           ]
                                       },


                    ]
                },
            ]
        },
        ///////////Event Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Events',
            id:'containerTabpanelAyohaMerchantRewards_Events',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },
            items:[
                {
                    xtype: 'container',
                    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: '100%',
                    style: "background-color: transparent;",
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'

                    },
                    items: [
                        {
                            xtype: 'container',
                            width: '100%',
                            margin: '0 0 0 0',
                            height:25,
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                        
                        
                        {
                        //     html:'<div class="perk-tabs">'+
                        //     '<button id="btnEventEligible" class="perk-btn event active" onclick="switchPerkTab_Event(this,\'Eligible\',0);">Event Invitation</button>'+
                        //     '<button id="btnEventIwillAttend" class="perk-btn event" onclick="switchPerkTab_Event(this,\'IwillAttend\',1);">I will Attend</button>'+
                        //     '<button id="btnEventInterested" class="perk-btn event" onclick="switchPerkTab_Event(this,\'Interested\',2)">Interested</button>'+
                        //     '<button id="btnEventExpired" class="perk-btn event" onclick="switchPerkTab_Event(this,\'Expired\',3)">Expired</button>'+
                        //   '</div>'







                          html:
                          '<div class="perk-tabs">'+
                            '<button id="btnEventEligible" class="perk-btn event active" onclick="switchPerkTab_Event(this,\'Eligible\',0);">' +
                              '<span class="perk-label">Eligible Perks</span>' +
                              '<span id="cntEventEligible" class="perk-count">(3)</span>' +
                            '</button>'+
                            '<button id="btnEventIwillAttend" class="perk-btn event" onclick="switchPerkTab_Event(this,\'IwillAttend\',1);">' +
                              '<span class="perk-label">I will Attend</span>' +
                              '<span id="cntEventRedeem" class="perk-count"></span>' +
                            '</button>'+
                            '<button id="btnEventInterested" class="perk-btn event" onclick="switchPerkTab_Event(this,\'Interested\',2);">' +
                              '<span class="perk-label">Interested</span>' +
                              '<span id="cntEventApproved" class="perk-count"></span>' +
                            '</button>'+
                            '<button id="btnEventExpired" class="perk-btn event" onclick="switchPerkTab_Event(this,\'Expired\',3);">' +
                              '<span class="perk-label">Expired</span>' +
                              '<span id="cntEventExpired" class="perk-count"></span>' +
                            '</button>'+
                          '</div>'
                        },
                        
                        
                        
                        
                        
                            ]
                        },
                        
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 47,  
                            style: 'background-color:transparent;',  
                            /// hidden:true,
                           
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items:[
                                {
                                    width: '100%',
                                    height: 47,  
                                    margin: '-5 0 0 0',  
                                    html: '<div  style="background-color:transparent; padding: 15px;">' +
                                    '<input type="text"  id="txtEventPerksSearch" placeholder="Search Merchant or Perk..." ' +
                                      'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                                             'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                                             'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                                             'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                                             'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                                             'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
                                    '>' +
                                  '</div>',
                                }
                            ]
                        },

                         


                                       {
                                           xtype: 'container',
                                           width: '100%',
                                           height: '100%',
                                           margin: '0 0 0 0',
                                           //  hidden: true,
                                           id: 'htmlFloatPanel_DashboardMerchantMembershipEvent',
                                           style: "background-color: transparent;",
                                           // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                           layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'center'

                                           },
                                           items: [



{
    xtype: 'carousel',
    style: "background-color: transparent;", 
   margin: '10 0 0 0',
     id: 'carouselAyohaMerchantRewards_Events',
     width: '100%',
     height:'100%',
     listeners: {

        activeitemchange: function (container, newCard, oldCard, index) {
            var eligibleBtn = document.getElementById('btnEventEligible');
            var submittedBtn = document.getElementById('btnEventIwillAttend');
            var approvedBtn = document.getElementById('btnEventInterested');
            var expiredBtn = document.getElementById('btnEventExpired');

if(container.getActiveIndex()==0){
switchPerkTab_Event(eligibleBtn, 'Eligible', 0);
}
if(container.getActiveIndex()==1){
switchPerkTab_Event(submittedBtn, 'IwillAttend', 1);
}if(container.getActiveIndex()==2){
switchPerkTab_Event(approvedBtn, 'Interested', 2);
}if(container.getActiveIndex()==3){
switchPerkTab_Event(expiredBtn, 'Expired', 3);
}
        },
    },
    items:[
        ///// Eligible 
        {

            id: 'AyohaMerchantReward_MembershipEvent_Eligible',
            xtype: 'list',
            height: 500,
            mode: 'SINGLE',
            disableSelection: true,
            //scrollable:false,
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
            style: 'background-color:rgba(255,255,255, 0.1);',
            width: '100%',

            itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:350px;">' +
            // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

             // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
             '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:100%;height:200px;margin:0px 0px 0px 0px;"/><br>' +
            '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:transparent; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:transparent; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div>' +


         //'{ModifiedRespondStatus}' +
          '</div>',


            //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


            // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
            emptyText:CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg('Event'),

        },
           ///// IwillAttend 
        {

            id: 'AyohaMerchantReward_MembershipEvent_IwillAttend',
            xtype: 'list',
            height: 500,
            mode: 'SINGLE',
            disableSelection: true,
            //scrollable:false,
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
            style: 'background-color:rgba(255,255,255, 0.1);',
            width: '100%',

            itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:350px;">' +
            // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

             // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
             '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:100%;height:200px;margin:0px 0px 0px 0px;"/><br>' +
            '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:transparent; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:transparent; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div>' +


         //'{ModifiedRespondStatus}' +
          '</div>',


            //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


            // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
            emptyText: CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg('Event'),

        },
   ///// Interested 
   {

    id: 'AyohaMerchantReward_MembershipEvent_Interested',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',

    itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:350px;">' +
    // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

     // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
     '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:100%;height:200px;margin:0px 0px 0px 0px;"/><br>' +
    '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:transparent; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:transparent; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div>' +


 //'{ModifiedRespondStatus}' +
  '</div>',


    //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


    // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
    emptyText: CoreFunction_AyohaMerchantReward_listEmptyRedeemStore_TextMsg('Event'),

},
 ///// Expired 
 {

    id: 'AyohaMerchantReward_MembershipEvent_Expired',
    xtype: 'list',
    height: 500,
    mode: 'SINGLE',
    disableSelection: true,
    //scrollable:false,
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
    style: 'background-color:rgba(255,255,255, 0.1);',
    width: '100%',

    itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:350px;">' +
    // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

     // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
     '<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:100%;height:200px;margin:0px 0px 0px 0px;"/><br>' +
    '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:transparent; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:transparent; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div>' +


 //'{ModifiedRespondStatus}' +
  '</div>',


    //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


    // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
    emptyText:CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg('Event'),

},
    ]
},



                                       


                                      









                                              
                                           ]
                                       },


                    ]
                },
            ]
        },
        ///////////Discount Tab
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: "background-color: transparent;",
            title: 'Discounts',
            id:'containerTabpanelAyohaMerchantRewards_Discounts',
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'center',
            },  
            items:[
                {
                    xtype: 'container',
                    //  style: 'background-image: url("resources/icons/bgfront07.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    margin: '0 0 0 0',
                    height: '100%',
                    style: "background-color: transparent;",
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'
                
                    },
                    items: [
                        {
                            xtype: 'container',
                            width: '100%',
                            margin: '0 0 0 0',
                            height:25,
                            style: 'background-color:transparent',
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center',
                            },
                            items: [
                        
                        
                        {
                        //     html:'<div class="perk-tabs">'+
                        //     '<button id="btnDiscountEligible" class="perk-btn discount active" onclick="switchPerkTab_Discount(this,\'Eligible\',0);">Eligible Perks</button>'+
                        //     '<button id="btnDiscountRedeemOnline" class="perk-btn discount" onclick="switchPerkTab_Discount(this,\'Redeem_Online\',1);">Redeem Online</button>'+
                        //     '<button id="btnDiscountRedeemOffline" class="perk-btn discount" onclick="switchPerkTab_Discount(this,\'Redeem_Offline\',2)">Redeem Offline</button>'+
                        //     '<button id="btnDiscountExpired" class="perk-btn discount" onclick="switchPerkTab_Discount(this,\'Expired\',3)">Expired</button>'+
                        //   '</div>'



                          html:'<div class="perk-tabs">'+
                          '<button id="btnDiscountEligible" class="perk-btn discount active" onclick="switchPerkTab_Discount(this,\'Eligible\',0);">' +
                            '<span class="perk-label">Eligible Perks</span>' +
                            '<span id="cntDiscountEligible" class="perk-count">(3)</span>' +
                          '</button>'+
                          '<button id="btnDiscountRedeemOnline" class="perk-btn discount" onclick="switchPerkTab_Discount(this,\'Redeem_Online\',1);">' +
                            '<span class="perk-label">Redeem Online</span>' +
                            '<span id="cntDiscountRedeemOnline" class="perk-count"></span>' +
                          '</button>'+
                          '<button id="btnDiscountRedeemOffline" class="perk-btn discount" onclick="switchPerkTab_Discount(this,\'Redeem_Offline\',2);">' +
                            '<span class="perk-label">Redeem Offline</span>' +
                            '<span id="cntDiscountRedeemOffline" class="perk-count"></span>' +
                          '</button>'+
                          '<button id="btnDiscountExpired" class="perk-btn discount" onclick="switchPerkTab_Discount(this,\'Expired\',3);">' +
                            '<span class="perk-label">Expired</span>' +
                            '<span id="cntDiscountExpired" class="perk-count"></span>' +
                          '</button>'+
                        '</div>'
                        },
                        
                        
                        
                        
                        
                            ]
                        },
                          
                        
                         
                
                        {
                            xtype: 'container',
                            width: '100%',
                            height: 47,  
                            style: 'background-color:transparent;',  
                            /// hidden:true,
                           
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center',
                            },
                            items:[
                                {
                                    width: '100%',
                                    height: 47,  
                                    margin: '-5 0 0 0',
                                    id:'htmltxtDiscountPerksSearch',
                                    hidden:false, 
                                    html: '<div  style="background-color:transparent; padding: 15px;">' +
                                    '<input type="text"  id="txtDiscountPerksSearch" placeholder="Search Merchant or Perk..." ' +
                                      'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                                             'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                                             'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                                             'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                                             'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                                             'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
                                    '>' +
                                  '</div>',
                                },
                                {
                                    width: '100%',
                                    height: 47,  
                                    margin: '-5 0 0 0',
                                    id:'htmltxtDiscountPerksSearch_OnlineOfflineDiscount',
                                    hidden:true, 
                                    html: '<div  style="background-color:transparent; padding: 15px;">' +
                                    '<input type="text"  id="txtDiscountPerksSearch_OnlineOfflineDiscount" placeholder="Search Merchant or Perk..." ' +
                                      'style="width: 100%; box-sizing: border-box; padding: 10px 20px 10px 45px; ' +
                                             'border-radius: 30px; border: 1px solid #e0e0e0; background-color: #ffffff; ' +
                                             'font-family: sans-serif; font-size: 12px; color: #333; outline: none; ' +
                                             'box-shadow: 0 2px 5px rgba(0,0,0,0.05); ' +
                                             'background-image: url(\'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23999999%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><circle cx=%2211%22 cy=%2211%22 r=%228%22></circle><line x1=%2221%22 y1=%2221%22 x2=%2216.65%22 y2=%2216.65%22></line></svg>\'); ' +
                                             'background-repeat: no-repeat; background-position: 15px center; background-size: 18px;" ' +
                                    '>' +
                                  '</div>',
                                }
                            ]
                        },
                
                         
                
                         {
                            xtype: 'container',
                            width: '100%',
                            height:'100%',
                            margin: '0 0 0 0',
                            //  hidden: true,
                            id: 'containerAyohaMerchantRewardDiscountListt',
                            style: "background-color: transparent;",
                            // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                            layout: {
                                type: 'vbox',
                                pack: 'start',
                                align: 'center'
                
                            },
                            items: [

                                {
                                    xtype: 'carousel',
                                    style: "background-color: transparent;", 
                                   margin: '10 0 0 0',
                                     id: 'carouselAyohaMerchantRewards_Discounts',
                                     width: '100%',
                                     height:'100%',
                                     listeners: {
                                
                                        activeitemchange: function (container, newCard, oldCard, index) {
                                            var eligibleBtn = document.getElementById('btnDiscountEligible');
                                            var redeemOnlinedBtn = document.getElementById('btnDiscountRedeemOnline');
                                            var redeemOfflinedBtn = document.getElementById('btnDiscountRedeemOffline');
                                            var expiredBtn = document.getElementById('btnDiscountExpired');
                                
                                if(container.getActiveIndex()==0){
                                switchPerkTab_Discount(eligibleBtn, 'Eligible', 0);
                              
                                }
                                if(container.getActiveIndex()==1){
                                  
                                switchPerkTab_Discount(redeemOnlinedBtn, 'Redeem_Online', 1);
                                }if(container.getActiveIndex()==2){
                                  
                                switchPerkTab_Discount(redeemOfflinedBtn, 'Redeem_Offline', 2);
                                }if(container.getActiveIndex()==3){
                                  
                                switchPerkTab_Discount(expiredBtn, 'Expired', 3);
                                }
                                        },
                                    },
                                    items:[
                                        {
                
                                            id: 'AyohaMerchantRewardDiscountList_Eligible',
                                            xtype: 'dataview',
                                            xtype: 'list',
                                        height: 500,
                                        mode: 'SINGLE',
                                        width: '100%',
                                        disableSelection: true,
                                        //scrollable:false,
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
                                        style: 'background-color:rgba(255,255,255, 0.1);',
                        
                        
        
        
                                        itemTpl: 
                                        '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" class="myContent" style="background-color:transparent;width:100%;height:380px;">' +
                                     // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
                                      '<img  onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);"   src="{DiscountImgPath}" style="width:100%;height:280px;margin:0px 0px 0px 0px;"/><br>' +
                                    // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
                                     '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Discount Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{DiscountName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Merchant:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +
        
                                     '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Discount Rate:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{DiscountPercent}%</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">End Date:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ModifiedDiscountEndDate}</div></div></div>' +
        
        
                                   '</div>',
        
                                   emptyText: CoreFunction_AyohaMerchantReward_listEmptyEligibleStore_TextMsg('Discounts'),
                                       
                                        },
                                        {
                                            xtype: 'container',
                                            width: '100%',
                                            //height: 300,
                                            height: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                    xtype: 'list',
                                                    width: '92%',
                                                    //height: 300,
                                                    height: 500,
                                                    // flex: 1,
                                                    //store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore,
                                                    // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                                    id: 'AyohaMerchantRewardDiscountList_Redeem_Online',
                                                    mode: 'SINGLE',
                                                    // width: '100%',
                                                   // grouped:true,
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
                                                    style: 'background-color:rgba(255,255,255, 0.1);',
                                                    itemTpl: '<div onclick="MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ','+ "'" + '{EnterpriseAddress}' + "'" + ','+ "'" + '{EnterpriseTagLine}' + "'" + ',`{CustomerAccNo}`,{ID},`{CreatedDate}`)" class="myContent" style="background-color:white;width:106%;height:70px;">' +
                           
                           
                                                    // '<table onclick="MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                                     '<table style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CreatedDate}<br>{ModifiedPaymentChannel}</font></td></tr></table><br>'
                                                   
                                                     + '<div style="width:96%;height:20px;margin:-80px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;">RM{TransactionAmount}<br><span style="color:purple">(A.Pts: {AyohaPoint})</span></div>'
                                                         + '</div>',
                           
                           
                                                    //height: '100%',
                           
                                                    emptyText: CoreFunction_AyohaMerchantReward_listEmptyRedeemOnline_TextMsg(),
                           
                           
                                                },
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
                                                align: 'center'
                                
                                            },
                                            items:[
                                                {
                                                    xtype: 'list',
                                                    width: '92%',
                                                    //height: 300,
                                                    height: 500,
                                                    // flex: 1,
                                                    //store: _DataStore_AyohaeWalletTransactionLoadByeWalletAccNoFilterTypeAllTransactionStore,
                                                    // store:'AyohaUserDashBoardNearestRedeemItemListStore',
                                                    id: 'AyohaMerchantRewardDiscountList_Redeem_Offline',
                                                    mode: 'SINGLE',
                                                    // width: '100%',
                                                   // grouped:true,
                                                    disableSelection: true,
                                                    style: 'background-color:rgba(255,255,255, 0.1);',
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
                                                    itemTpl: '<div onclick="MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ','+ "'" + '{EnterpriseAddress}' + "'" + ','+ "'" + '{EnterpriseTagLine}' + "'" + ',`{CustomerAccNo}`,{ID},`{CreatedDate}`)" class="myContent" style="background-color:white;width:106%;height:70px;">' +
                           
                           
                                                    // '<table onclick="MyAccount_AllTransactionHistory_AyohaeWalletTransactionStaging({TotalStampEarn},' + "'" + '{CreatedDate}' + "'" + ',' + "'" + '{AccountName}' + "'" + ',' + "'" + '{UserProfileImg}' + "'" + ',' + "'" + '{PhoneNo}' + "'" + ',' + "'" + '{TransactionNote}' + "'" + ',' + "'" + '{TransactionAmount}' + "'" + ',' + "'" + '{TransactionType}' + "'" + ',' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{OrderNo}' + "'" + ',' + "'" + '{ItemCartCode}' + "'" + ',' + "'" + '{FullAccountName}' + "'" + ',' + "'" + '{TransactionReferenceNo}' + "'" + ',{ID})" style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{isSpentOrIncome} - {CreatedDate}</font></td></tr></table><br>'
                                                     '<table style="border-collapse:collapse;border-spacing:0;width:106%;background-color:white;margin:-10px 0px 0px -18px;height:80px;"><tr><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 10px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50px;width:60px;height:60px;color:white;vertical-align: bottom; text-align:center;font-family: Lucida Console, Courier, monospace;font-size: 35px;background-image: url({AccountProfileImg}); background-size: 100% 100%;"></div></td><td style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center">{AccountName}<br><font style="font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">{CreatedDate}<br>{ModifiedPaymentChannel}</font></td></tr></table><br>'
                                                   
                                                     + '<div style="width:96%;height:20px;margin:-80px 0px 0px 0px;color:black;vertical-align: top; text-align:right;font-family:Arial, sans-serif;font-size: 12px;font-weight:bold;">RM{TransactionAmount}<br><span style="color:purple">(A.Pts: {AyohaPoint})</span></div>'
                                                         + '</div>',
                           
                           
                                                    //height: '100%',
                           
                                                    emptyText: CoreFunction_AyohaMerchantReward_listEmptyRedeemOffline_TextMsg(),
                           
                           
                                                },
                                            ]

                                        },
                                       
                                        {
                
                                            id: 'AyohaMerchantRewardDiscountList_Expired',
                                            xtype: 'dataview',
                                            xtype: 'list',
                                        height: 500,
                                        mode: 'SINGLE',
                                        width: '100%',
                                        disableSelection: true,
                                        //scrollable:false,
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
                                        style: 'background-color:rgba(255,255,255, 0.1);',
                        
                        
        
        
                                        itemTpl: 
                                        '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" class="myContent" style="background-color:transparent;width:100%;height:380px;">' +
                                     // '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:left;width:100%;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div>&nbsp;&nbsp;<br><br>' +
                                      '<img  onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);"   src="{DiscountImgPath}" style="width:100%;height:280px;margin:0px 0px 0px 0px;"/><br>' +
                                    // '<div onclick="FloatPanel_DashboardMerchantReward_MembershipContestDetailShow({ID});" style="width: 50%; float:left; height:30px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Contest Name:</div><br><div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;margin:-22px 0px 0px 0px;text-align:left;padding:0px 10px;">{ContestName}</div></div><br>' +
                                     '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="width: 60%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Discount Name:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{DiscountName}</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:0px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">Merchant:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;"><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:0px 0px 0px 0px;">{EnterpriseName}</div></div></div></div></div><br>' +
        
                                     '<div onclick="FloatPanel_MerchantDiscountLoyaltyDescriptionShow(`{DiscountCode}`,`{EnterpriseAccNo}`);" style="width: 60%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;"><div style="font-family:Arial, sans-serif;font-size:10px;color:black;font-weight:normal;text-align:left;padding:0px 10px;">Discount Rate:</div><br><div style="font-family:Arial, sans-serif;font-size:12px;color:black;font-weight:bold;margin:-17px 0px 0px 0px;text-align:left;padding:0px 10px;">{DiscountPercent}%</div></div><div style="width: 40%; float:left; height:30px; background:transparent; margin:15px 0px 0px 0px;word-break: break-all;"><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:10px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;height:30px;padding:0px 7px;">End Date:<br><div style="margin:0px 0px 0px 0px;text-align:right;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;padding:0px 0px;">{ModifiedDiscountEndDate}</div></div></div>' +
        
        
                                   '</div>',
                                   emptyText: CoreFunction_AyohaMerchantReward_listEmptyExpiredStore_TextMsg('Discounts'),
        
                                       
                                        },
                                    ]
                                },
                                
                         







                                





                               
                            ]
                        },
                
                
                
                
                
                    ]
                },
            ]
        }

     ]
},








////////




                                      




                                      {
                                          xtype: 'container',
                                          hidden: false,
                                          //width: '95%',
                                          //height: 80,
                                          margin: '0 0 0 0',
                                          width: '100%',
                                          id: 'container_Dashboard_NearestRedeemMembersMaster',
                                          height: 290,
                                          // height: 440,
                                          // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                          style: 'background-color:transparent',
                                          layout: {
                                              type: 'vbox',
                                              pack: 'start',
                                              align: 'center',
                                          },
                                          items: [
                                              {
                                                  xtype: 'container',
                                                  //width: '95%',
                                                  //height: 80,
                                                  hidden: true,
                                                  margin: '0 0 0 0',
                                                  width: '100%',
                                                  id: 'container_Dashboard_NearestRedeemNonMembers',
                                                  name: 'namecontainer_Dashboard_NearestRedeemNonMembers',
                                                  height: 280,
                                                  //  style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
                                                  style: 'background-color:transparent',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [

                                                      {

                                                          //xtype: 'button',
                                                          //height: 90,
                                                          //width: 90,
                                                          margin: '10 0 0 0',
                                                          //zIndex: 400,

                                                          id: 'htmlDashboard_NearestRedeem_NonMembersTxt',
                                                          html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Hai!, you have no stamp redemption items yet.</div>'

                                                          //ui: 'plain',
                                                          //handler: function () {

                                                          //}

                                                      },


                                                       {

                                                           //xtype: 'button',
                                                           //height: 90,
                                                           //width: 90,
                                                           //  margin: '0 0 0 60',
                                                           //zIndex: 400,
                                                           margin: '0 0 0 0',
                                                           id: 'htmlDashboard_NearestRedeem_NonMembersTxt0',
                                                           html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Tap Ayoha Mechant below ,get their Membership card</div>'

                                                           //ui: 'plain',
                                                           //handler: function () {

                                                           //}

                                                       },

                                                        {

                                                            //xtype: 'button',
                                                            //height: 90,
                                                            //width: 90,
                                                            //  margin: '0 0 0 60',
                                                            //zIndex: 400,
                                                            margin: '0 0 0 0',
                                                            id: 'htmlDashboard_NearestRedeem_NonMembersTxt00',
                                                            html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">and then collect your redemptions items!</div>'

                                                            //ui: 'plain',
                                                            //handler: function () {

                                                            //}

                                                        },
                                                       {

                                                           //xtype: 'button',
                                                           //height: 90,
                                                           //width: 90,
                                                           margin: '20 0 0 0',
                                                           //zIndex: 400,
                                                           width: 100,
                                                           height: 100,
                                                           id: 'htmlDashboard_NearestRedeem_NonMembers',
                                                           html: '<img src="resources/icons/AyohaMerchant03.png" alt="Image" style="width:150px;height:100px;zIndex:400px">',

                                                           //ui: 'plain',
                                                           //handler: function () {

                                                           //}

                                                       },
                                                       {

                                                           //xtype: 'button',
                                                           //height: 90,
                                                           //width: 90,
                                                           //  margin: '0 0 0 60',
                                                           //zIndex: 400,
                                                           margin: '3 0 0 0',
                                                           id: 'htmlDashboard_NearestRedeem_NonMembersTxtAyohaMerchant',
                                                           html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div>'

                                                           //ui: 'plain',
                                                           //handler: function () {

                                                           //}

                                                       },

                                                  ]
                                              },



                                            






                                                  




                                                    //////////////////// voucher redemption
                                                  //////////////////Ayoha Voucher////
            //         {
            //             xtype: 'container',
            //             width: '100%',
            //             /// hidden:true,
            //             // margin: '120 0 0 0',
            //             style: {
            //                 // background: '#D25959',
            //                 background: 'transparent',
            //                 // border: '2px'
            //             },
            //             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            //             // style: 'border-bottom:2px solid #D25959;background-color:transparent',
            //             layout: {
            //                 type: 'hbox',
            //                 pack: 'center',
            //                 align: 'center',
            //             },
            //             items: [
            //                  {
            //                      margin: '0 0 0 14',
            //                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //                      id: 'htmlFloatPanel_DashboardMerchantRewardTxt',
            //                      html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Merchant Voucher</b></div>'
            //                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            //                  },
            //                   {
            //                       xtype: 'spacer'
            //                   },
            // {

            //     margin: '0 14 0 0',
            //     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //     html: '<div onclick="FloatPanel_AyohaRewardVoucherList_DashboardShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
            //     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

            // }

            //                   //{
            //                   //    margin: '-4 0 0 14',
            //                   //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
            //                   //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1.-Welcome/Opening Account Voucer</div>'
            //                   //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
            //                   //},
            //             ]
            //         },



                     








                                                    ////////


                                          ]

                                      },
    //////////////////////////////////////end merchant redemption

















                                  ]
                              },









                            //   {
                            //     xtype: 'container',
                            //     width: '100%',
                            //     height: 40,
                            //     docked: 'bottom',
                            //     /// hidden:true,
                            //     margin: '0 0 0 0',
                            //     id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Master',
                            //     style: 'border-bottom:2px none #D25959;background-color:transparent',
                            //     scrollable: {
                            //         direction: 'horizontal',
                            //         directionLock: true,
                            //         indicators: false
                            //     },
                            //     layout: {
                            //         type: 'hbox',
                            //         pack: 'start',
                            //         align: 'center',
                            //     },
                            //     items: [
                            // {
                            //     xtype: 'container',
                            //     width: 600,
                            //     height: 40,
                            //     /// hidden:true,
                            //     margin: '0 0 0 0',
                            //     id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Scroll',
                            //     style: 'border-bottom:2px none #D25959;background-color:transparent',
                               
                            //     layout: {
                            //         type: 'hbox',
                            //         pack: 'start',
                            //         align: 'center',
                            //     },
                            //     items: [
                            //         {
                            //             xtype: 'container',
                            //             width: 100,
                            //             height: 30,
                            //             /// hidden:true,
                            //             margin: '0 0 0 0',
                            //             id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
                            //             name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
                            //             style: 'background-color:transparent',
                            //             layout: {
                            //                 type: 'vbox',
                            //                 pack: 'center',
                            //                 align: 'center',
                            //             },
                            //             items: [
                            //                 {
                                               
                            //                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            //                     id: 'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps',
                            //                     html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Digital Stamps</div>'
                            //                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            //                 },
                                            
                            //             ]
                            //         },
                            //         {
                            //             xtype: 'container',
                            //             width: 100,
                            //             height: 30,
                            //             /// hidden:true,
                            //             margin: '0 0 0 0',
                            //             id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Points',
                            //             name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points',
                            //             style: 'background-color:transparent',
                            //             layout: {
                            //                 type: 'vbox',
                            //                 pack: 'center',
                            //                 align: 'center',
                            //             },
                            //             items: [
                            //                 {
                                               
                            //                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            //                     id: 'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points',
                            //                     html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>'
                            //                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            //                 },
                                            
                            //             ]
                            //         },
                            //         {
                            //             xtype: 'container',
                            //             width: 100,
                            //             height: 30,
                            //             /// hidden:true,
                            //             margin: '0 0 0 0',
                            //             id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
                            //             name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
                            //             style: 'background-color:transparent',
                            //             layout: {
                            //                 type: 'vbox',
                            //                 pack: 'center',
                            //                 align: 'center',
                            //             },
                            //             items: [
                            //                 {
                                               
                            //                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            //                     //html: '<div style="color:#D1D5DB;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>'
                            //                     id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers',
                            //                     html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>'
                            //                 },
                                            
                            //             ]
                            //         },
                            //         {
                            //             xtype: 'container',
                            //             width: 100,
                            //             height: 30,
                            //             /// hidden:true,
                            //             margin: '0 0 0 0',
                            //             id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
                            //             name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
                            //             style: 'background-color:transparent',
                            //             layout: {
                            //                 type: 'vbox',
                            //                 pack: 'center',
                            //                 align: 'center',
                            //             },
                            //             items: [
                            //                 {
                                               
                            //                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                               
                            //                     id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests',
                            //                     html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>'
                            //                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            //                 },
                                            
                            //             ]
                            //         },
                            //         {
                            //             xtype: 'container',
                            //             width: 100,
                            //             height: 30,
                            //             /// hidden:true,
                            //             margin: '0 0 0 0',
                            //             id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Events',
                            //             name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events',
                            //             style: 'background-color:transparent',
                            //             layout: {
                            //                 type: 'vbox',
                            //                 pack: 'center',
                            //                 align: 'center',
                            //             },
                            //             items: [
                            //                 {
                                               
                            //                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            //                     id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events',
                            //                     html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>'
                            //                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            //                 },
                                            
                            //             ]
                            //         },
                                 
                                  
                               
                                  
                                  
                                    
                            //         {
                            //             xtype: 'container',
                            //             width: 100,
                            //             height: 30,
                            //             /// hidden:true,
                            //             margin: '0 0 0 0',
                            //             id: 'containerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
                            //             name:'nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
                            //             style: 'background-color:transparent',
                            //             layout: {
                            //                 type: 'vbox',
                            //                 pack: 'center',
                            //                 align: 'center',
                            //             },
                            //             items: [
                            //                 {
                                               
                            //                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                            //                     id:'htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts',
                            //                     html: '<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>'
                            //                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            //                 },
                                            
                            //             ]
                            //         },
                            //     ]
                            // },
                                   
                            //     ]
                            // },
        









                              /////////////////////////////////////////////////


                        ]
                    },



                

            ]



        },
    ]
},
initialize: function () {

}
});





function AyohaMerchant_AyohaMerchantRewardLoad() {


    AddRoutePages("FloatPanel_DashboardMerchantRewardHide()");
    MembershipTag="YES";


    // var containerView = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem0]')[0];
    // var containerViewEl = containerView.element;
    // containerViewEl.on('tap',
    //   function (event, node, options, eOpts) {

    //       // SingleTap_Dashboard_NearestRedeem0();
    //       SingleTap_Dashboard_NearestRedeem_StampCard(0);
    //   }
    // );


    // var containerView1 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem1]')[0];
    // var containerViewEl1 = containerView1.element;
    // containerViewEl1.on('tap',
    //   function (event, node, options, eOpts) {

    //       //SingleTap_Dashboard_NearestRedeem1();
    //       SingleTap_Dashboard_NearestRedeem_StampCard(1);
    //   }
    // );


    // var containerView2 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem2]')[0];
    // var containerViewEl2 = containerView2.element;
    // containerViewEl2.on('tap',
    //   function (event, node, options, eOpts) {

    //       // SingleTap_Dashboard_NearestRedeem2();
    //       SingleTap_Dashboard_NearestRedeem_StampCard(2);
    //   }
    // );



    // var containerView3 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem3]')[0];
    // var containerViewEl3 = containerView3.element;
    // containerViewEl3.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(3);
    //   }
    // );


    // var containerView4 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem4]')[0];
    // var containerViewEl4 = containerView4.element;
    // containerViewEl4.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(4);
    //   }
    // );




    // var containerView5 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem5]')[0];
    // var containerViewEl5 = containerView5.element;
    // containerViewEl5.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(5);
    //   }
    // );




    // var containerView6 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem6]')[0];
    // var containerViewEl6 = containerView6.element;
    // containerViewEl6.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(6);
    //   }
    // );




    // var containerView7 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem7]')[0];
    // var containerViewEl7 = containerView7.element;
    // containerViewEl7.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(7);
    //   }
    // );


    // var containerView8 = Ext.ComponentQuery.query('container[name=container_Dashboard_NearestRedeem8]')[0];
    // var containerViewEl8 = containerView8.element;
    // containerViewEl8.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_StampCard(8);
    //   }
    // );

    var containerViewLatestStamps = Ext.ComponentQuery.query('container[name=containerDashboard_User_LatestStamps]')[0];
    var containerViewElLatestStamps = containerViewLatestStamps.element;
    containerViewElLatestStamps.on('tap',
      function (event, node, options, eOpts) {


          SingleTap_Dashboard_User_LatestStamps();


      }
    );



    var containerViewTotalPoints = Ext.ComponentQuery.query('container[name=containerDashboard_AyohaRewards_TotalPoints]')[0];
    var containerViewElTotalPoints = containerViewTotalPoints.element;
    containerViewElTotalPoints.on('tap',
      function (event, node, options, eOpts) {




          SingleTap_Dashboard_User_LatestPoint();



      }
    );









    var containerViewNearestRedeemNonMembers = Ext.ComponentQuery.query('container[name=namecontainer_Dashboard_NearestRedeemNonMembers]')[0];
    var containerViewElNearestRedeemNonMembers = containerViewNearestRedeemNonMembers.element;
    containerViewElNearestRedeemNonMembers.on('tap',
      function (event, node, options, eOpts) {
          Dashboard_SearchMerchantListShow();
         // FloatPanel_RewardStoreShow();
      }
    );



    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture0 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture0]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture0 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture0.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture0.on('tap',
    //   function (event, node, options, eOpts) {
    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(0);
    //       // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
    //   }
    // );



    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture1 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture1]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture1 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture1.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture1.on('tap',
    //   function (event, node, options, eOpts) {
    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(1);
    //       // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
    //   }
    // );



    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture2 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture2]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture2 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture2.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture2.on('tap',
    //   function (event, node, options, eOpts) {
    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(2);
    //       // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
    //   }
    // );

    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture3 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture3]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture3 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture3.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture3.on('tap',
    //   function (event, node, options, eOpts) {
    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(3);
    //       // SingleTap_Dashboard_NearestRedeem_loyaltyPoint3();
    //   }
    // );

    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture4 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture4]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture4 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture4.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture4.on('tap',
    //   function (event, node, options, eOpts) {
    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(4);
    //       // SingleTap_Dashboard_NearestRedeem_loyaltyPoint4();
    //   }
    // );


    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture5 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture5]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture5 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture5.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture5.on('tap',
    //   function (event, node, options, eOpts) {
    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(5);
    //       // SingleTap_Dashboard_NearestRedeem_loyaltyPoint5();
    //   }
    // );

    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture6 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture6]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture6 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture6.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture6.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(6);
    //   }
    // );



    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture7 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture7]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture7 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture7.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture7.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(7);
    //   }
    // );


    // var containerViewLoyaltyPointNearestRedeemItem_ItemPicture8 = Ext.ComponentQuery.query('container[name=nameLoyaltyPointNearestRedeemItem_ItemPicture8]')[0];
    // var containerViewElLoyaltyPointNearestRedeemItem_ItemPicture8 = containerViewLoyaltyPointNearestRedeemItem_ItemPicture8.element;
    // containerViewElLoyaltyPointNearestRedeemItem_ItemPicture8.on('tap',
    //   function (event, node, options, eOpts) {

    //       SingleTap_Dashboard_NearestRedeem_loyaltyPoint(8);
    //   }
    // );





    var containerViewLoyaltynamecontainerVIA_Advertisement = Ext.ComponentQuery.query('container[name=namecontainerVIA_Advertisement]')[0];
    var containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement = containerViewLoyaltynamecontainerVIA_Advertisement.element;
    containerViewElcontainerViewLoyaltynamecontainerVIA_Advertisement.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_PreviewAdvertisementShow_VIAAdvertisement("Dashboard_PreviewVIAAdvertisement");
      }
    );
    var containerViewNamecontainerDashboardVIAAdvertisement_eStore = Ext.ComponentQuery.query('container[name=nameContainerDashboardVIAAdvertisement_eStore]')[0];
    var containerViewElDashboardVIAAdvertisement_eStore = containerViewNamecontainerDashboardVIAAdvertisement_eStore.element;
    containerViewElDashboardVIAAdvertisement_eStore.on('tap',
      function (event, node, options, eOpts) {

          Dashboard_openVIAAdvertisement_OnlineStore();


      }
    );



   

    var y = parseInt(screen.width - 24);
    var x = parseInt(window.innerWidth - 64);
    var z = parseInt(window.innerWidth - 58);
    console.log(y)
    console.log(x)

  
    //AyohaMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore();
    AyohaMerchantReward_LoadPerksChartBarData();
   
   // AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore_Initialized();

   

}



function AyohaMerchantReward_Reset(){
    if (is_FloatPanel_DashboardMerchantRewardHide == 'Y') {           
        is_FloatPanel_DashboardMerchantRewardHide = 'N';
        VIAAdvertismentAutoSlideReset();
        RemovePages("FloatPanel_DashboardMerchantRewardHide()");
    }
}


















function AyohaMerchantReward_AyohaUserDashBoardNearestRedeemItemStampCardStore() {



    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemStampCard');
   

    _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
              // alert('Store loaded successfully, total records: ' + records.length);
              AppState.AyohaMerchantReward.StampPerks=records.length;
                var count = records.length;
                ArrStampContentSequence.length = 0;
                ArrStampTotalRow.length = 0;
        
                ArrStampCampaignCode.length = 0;
                ArrStampContentNote.length = 0;
                ArrEnterpriseName.length = 0;
                ArrEndDate.length = 0;
                ArrStampContent.length = 0;
        
                ArrStartDate.length = 0;
                ArrStampRuleRemarks.length = 0;
                ArrIsStampRulePopUp.length = 0;
                ArrEnterpriseAccNo.length = 0;
                ArrStampCampaignName.length = 0;
        
        
                ArrCountStampYES.length = 0;
                ArrEnterprisesLogo.length = 0;
        
                ArrStampisRequiredStartEndDate.length = 0;
                ArrStampisCampaignExpired.length = 0;
                ArrStampCampaignDayLeft.length = 0;
                ArrStampCampaignAdvertisementTitle.length = 0;
                //unlimited load//
                for (i = 0; i < count; i++) {
                    // for (i = 0; i < a; i++) {
                    //   var modelRecord = myStore.getAt(i);
                    var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemStampCardStore.getAt(i);
                    if (modelRecord.get('StampCampaignCode')) {
                        var StampCampaignCode = modelRecord.get('StampCampaignCode');
                        //var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                        var StampContent = modelRecord.get('StampContent');
                        var StampContentNote = modelRecord.get('StampContentNote');
                        var StampContentSequence = modelRecord.get('StampContentSequence');
                        var EnterpriseName = modelRecord.get('EnterpriseName').toUpperCase();
                        var CountRow = modelRecord.get('CountRow');
                        var EndDate = modelRecord.get('EndDate');
                        var StartDate = modelRecord.get('StartDate');
                        var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
                        var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
                        var StampCampaignName = modelRecord.get('StampCampaignName');
                        var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
                        var StampContentFinal = StampContent.replace("height:70px", "height:80px");
                        var CountStampYES = modelRecord.get('CountStampYES');
                        var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
                        var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
                        var isCampaignExpired = modelRecord.get('isCampaignExpired');
                        var CampaignDayLeft = parseInt(modelRecord.get('CampaignDayLeft'));
                        var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
        
        
                     
                        if (i <= 8) {
                            Ext.getCmp('Dashboard_NearestRedeem_StampContent' + i).setHtml(StampContent.replace("-90px", "-50px"));
                            Ext.getCmp('Dashboard_NearestRedeem_StampContentNote' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold;margin:0px 0px 0px 2px;">' + StampContentNote + '</div>');
                            Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal;margin:5px 0px 0px 2px;">' + EnterpriseName + '</div>');
        
        
                            if (isCampaignExpired == "Expired") {
        
                                Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: left;font-size:10px;font-weight:normal;width:100%;margin:3px 0px 0px 2px">End Date:' + EndDate + ' (Campaign Expired !)</div>');
                                //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:red;text-align: center;font-size:12px;font-weight:normal;width:50%">End Date:' + EndDate + '</div><div  style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">Campaign Expired !</div>');
        
                            }
                            if (isCampaignExpired == "NotExpired") {
                                   
                                //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div  style="color:purple;text-align: right;font-size:12px;font-weight:bold;margin:-19px -150px 0px 0px;">' + CampaignDayLeft + ' Day Left</div>');
                                Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
                                if (CampaignDayLeft >= 20 && CampaignDayLeft <= 30) {
                                    // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:green;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
        
                                }
                                if (CampaignDayLeft >= 10 && CampaignDayLeft <= 19) {
                                    // Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:orange;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
                                }
                                if (CampaignDayLeft >= 1 && CampaignDayLeft <= 9) {
                                    //Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;font-weight:normal;width:100%">End Date:' + EndDate + '</div><div class="blink_me" style="color:red;text-align: right;font-size:12px;font-weight:bold;margin:-19px -160px 0px 0px;">(' + CampaignDayLeft + ') Days Left</div>');
                                    Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: left;font-size:10px;font-weight:normal;width:80%;float:left;margin:3px 0px 0px 2px">End Date:' + EndDate + ' - ('+ CampaignDayLeft +') Day Left</div>');
        
        
        
                                }
                            }
                        }
        
                        if (isRequiredStartEndDate == "NO") {
                            Ext.getCmp('Dashboard_NearestRedeem_EndDate' + i).setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:5px 0px 0px 2px">End Date:&nbsp;<i>No End Date,Valid LifeTime</i></div>');
        
                        }
                    
        
        
        
                        ArrStampContentSequence.push(StampContentSequence);
                        ArrStampTotalRow.push(CountRow);
                        //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
                        //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
                        ArrStampCampaignCode.push(StampCampaignCode);
                        ArrStampContentNote.push(StampContentNote);
                        ArrEnterpriseName.push(EnterpriseName);
                        ArrEndDate.push(EndDate);
                        ArrStampContent.push(StampContentFinal);
                        ArrStartDate.push(StartDate);
                        ArrStampRuleRemarks.push(StampRuleRemarks);
                        ArrIsStampRulePopUp.push(IsStampRulePopUp);
                        ArrEnterpriseAccNo.push(EnterpriseAccNo);
                        ArrStampCampaignName.push(StampCampaignName);
                        ArrCountStampYES.push(CountStampYES);
                        ArrEnterprisesLogo.push(EnterprisesLogo);
                        ArrStampisRequiredStartEndDate.push(isRequiredStartEndDate);
                        ArrStampisCampaignExpired.push(isCampaignExpired);
                        ArrStampCampaignDayLeft.push(CampaignDayLeft);
                        ArrStampCampaignAdvertisementTitle.push(AdvertisementTitle);
                    }
        
        
        
                }
        
        
        
                if (count <= 0) {
        
        
        
        
        
                    Ext.getCmp('container_Dashboard_NearestRedeemNonMembers').setHidden(false);
                    Ext.getCmp('container_Dashboard_NearestRedeemMembers').setHidden(true);
                }
               
                AyohaMerchantReward_NearestRedeemItemPointCardStore();
                //AyohaMerchantReward_loadVIAAdvertisement();



               
               
            } else {
                AppState.AyohaMerchantReward.StampPerks=0;
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
                AyohaMerchantReward_NearestRedeemItemPointCardStore();
            }
        }
    });





}





function AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore() {
    if(isFloatPanel_MembershipCardList_UpgradeOpen=="Y"){
        return;
    }
        _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNo');
    
    
    
        _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    
                    Ext.getCmp('AyohaMerchantReward_MembershipEvent_Eligible').setStore(_DataStore_AyohaRewardEventLoadBySubscriberAccNoStore);
                    AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                   
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                    console.error('Failed to load store data or no record found.');
                   
                    AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                  
                    LoadingPanelHide();
                }
               // 
            }
        });





    }

    function AyohaMerchantReward_NearestRedeemItemPointCardStore() {

        _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardNearestRedeemItemPointCard');     
    
        _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                  
                   // alert('Point Perks Available: ' + AppState.AyohaMerchantReward.PointPerks)
                    var count = records.length;
                    ArrPointContentSequence.length = 0;
                    ArrPointTotalRow.length = 0;
                    ArrPointCampaignCode.length = 0;
                    ArrPointContentNote.length = 0;
                    ArrPointEnterpriseName.length = 0;
                    ArrPointEndDate.length = 0;
                    ArrPointContent.length = 0;
                    ArrPointStartDate.length = 0;
                    ArrPointRuleRemarks.length = 0;
                    ArrIsPointRulePopUp.length = 0;
                    ArrPointEnterpriseAccNo.length = 0;
                    ArrPointCampaignName.length = 0;
                    ArrCountPointYES.length = 0;
                    ArrPointEnterprisesLogo.length = 0;
                    ArrPointisRequiredStartEndDate.length = 0;
                    ArrPointisCampaignExpired.length = 0;
                    ArrPointAdvertisementTitle.length = 0;
                    //unlimited load//
                    for (i = 0; i < count; i++) {
                        // for (i = 0; i < a; i++) {
                        var modelRecord = _DataStore_AyohaUserDashBoardNearestRedeemItemPointCardStore.getAt(i);
                        if (modelRecord.get('StampCampaignCode')) {
                            var StampCampaignCode = modelRecord.get('StampCampaignCode');
                            var StampContent = modelRecord.get('StampContent').replace("width:70px", "width:80px");
                            var StampContentNote = modelRecord.get('StampContentNote');
                            var StampContentSequence = modelRecord.get('StampContentSequence');
                            var EnterpriseName = modelRecord.get('EnterpriseName');
                            var CountRow = modelRecord.get('CountRow');
                            var EndDate = modelRecord.get('EndDate');
                            var StartDate = modelRecord.get('StartDate');
                            var StampRuleRemarks = modelRecord.get('StampRuleRemarks');
                            var IsStampRulePopUp = modelRecord.get('IsStampRulePopUp');
                            var StampCampaignName = modelRecord.get('StampCampaignName');
                            var EnterpriseAccNo = modelRecord.get('EnterpriseAccNo');
                            var StampContentFinal = StampContent.replace("height:70px", "height:80px");
                            var CountStampYES = modelRecord.get('CountStampYES');
                            var EnterprisesLogo = modelRecord.get('EnterprisesLogo');
                            var isRequiredStartEndDate = modelRecord.get('isRequiredStartEndDate');
                            var isCampaignExpired = modelRecord.get('isCampaignExpired');
                            var CampaignDayLeft = modelRecord.get('CampaignDayLeft');
                            var AdvertisementTitle = modelRecord.get('AdvertisementTitle');
                            if (i <= 8) {
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHeight(160);
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setWidth('100%');
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPicture' + i).setHtml('<img src="' + StampContent + '"  style="width: 100%;height: 265px;margin: -15px 0px 0px 0px;">');
                                var subStr = StampContentNote.substring(0, 19);
                                Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:14px;width:100%;font-weight:bold;">' + subStr + '</div>');
            
            
                                // Ext.getCmp('Dashboard_NearestRedeem_EnterpriseName' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">' + EnterpriseName + '</div>');
            
            
            
                                Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:transparent;text-align: center;font-size:10px;width:100%;font-weight:normal;">No End Date</div>');
                                // Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('10 0 0 0');
                                if (isRequiredStartEndDate == "YES") {
                                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                                    Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid orange;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: orange;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Left</div></div>');
                                    if (isCampaignExpired == "NotExpired") {
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal">End:' + EndDate + '</div>');
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                                    }
                                    if (isCampaignExpired == "Expired") {
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_EndDateTxt' + i).setHtml('<div class="blink_me" style="color:red;text-align: center;font-size:10px;width:105%;font-weight:normal;border: 1px solid red;background-color: white;border-radius: 10px 10px 10px 10px;">Campaign Expired!</div>');
                                        Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('3 0 0 0');
                                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHidden(false);
                                        Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPointDayLeft' + i).setHtml('<div style="border: 2px solid orange;color:white;text-align: center;font-size:9px;width:100%;font-weight:bold;margin:0px 0px 0px 0px;border-radius: 50%;background-color: red;height:30px;width:30px;padding:5px 0px">' + CampaignDayLeft + '<div style="color:white;text-align: center;font-size:5px;width:100%;font-weight:bold;margin:-4px 0px 0px 0px">Day Pass</div></div>');
                                    }
            
                                } else {
                                    Ext.getCmp('html_LoyaltyPointNearestRedeemItem_ItemNameTxt' + i).setMargin('8 0 0 0');
                                }
            
                               // Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:white;text-align: left;font-size:18px;width:100%;font-weight:bold;margin:10px 0px 0px 2px">' + StampContentSequence + ' <div style="color:white;text-align: left;font-size:9px;width:100%;font-weight:bold;margin:-7px 0px 0px 2px">Points</div></div>');
                                Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHtml('<div style="color:white;text-align: center;font-size:18px;width:100%;font-weight:bold;">' + StampContentSequence + ' <div style="color:white;text-align: center;font-size:10px;width:100%;font-weight:bold;margin:-7px 0px 0px 0px">Points</div></div>');
                            Ext.getCmp('htmlLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHidden(false);
                            Ext.getCmp('containerLoyaltyPointNearestRedeemItem_ItemPoint' + i).setHidden(false);
                            }
            
            
            
                            ArrPointContentSequence.push(StampContentSequence);
                            ArrPointTotalRow.push(CountRow);
                            //Ext.getCmp('htmlPicture_Dashboard_HotSeatAdvertisement_HotSeat' + i).setHtml('<img src="' + AdvertismentMediaUrl + '"  style="width: 230px; height: 210px; border:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;"   onclick="openAdvertisement' + i + '()">');
                            //Ext.getCmp('btn_DashboardAdvertisementButton_HotSeatAdvertisementTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AdvertisementTitle + ' >></b></div>');
                            ArrPointCampaignCode.push(StampCampaignCode);
                            ArrPointContentNote.push(StampContentNote);
                            ArrPointEnterpriseName.push(EnterpriseName);
                            ArrPointEndDate.push(EndDate);
                            ArrPointContent.push(StampContentFinal);
                            ArrPointStartDate.push(StartDate);
                            ArrPointRuleRemarks.push(StampRuleRemarks);
                            ArrIsPointRulePopUp.push(IsStampRulePopUp);
                            ArrPointEnterpriseAccNo.push(EnterpriseAccNo);
                            ArrPointCampaignName.push(StampCampaignName);
                            ArrCountPointYES.push(CountStampYES);
                            ArrPointEnterprisesLogo.push(EnterprisesLogo);
                            ArrPointisRequiredStartEndDate.push(isRequiredStartEndDate);
                            ArrPointisCampaignExpired.push(isCampaignExpired);
                            ArrPointAdvertisementTitle.push(AdvertisementTitle);
                        }
            
                        AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
            
                    }
                } else {
                   
                    console.error('Failed to load store data or no record found.');
                    AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    LoadingPanelHide();
                }
            }
        });
    
    
    }
    

    function AyohaMerchantReward_loadVIAAdvertisement() {
        AdvertismentTypeTag = 'VIAAdvertisement';
        globalFloatPanel_AyohaStore_ModuleTagging = 'VIAAdvertisement';
    
       
    
    
    
        _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getProxy().setUrl(GetAPIurl() + '/Advertisement/AdvertisementloadMediaAdvertisementVIA'); 
        _DataStore_AdvertisementloadMediaAdvertisementVIAStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    var count = records.length;
                    CountAdvertisementMedia = count - 1;
                    var modelRecorded = records[0];;
                    var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
                    var AdvertisementCode = modelRecorded.get('AdvertisementCode');
                    var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
                    var EnterpriseName = modelRecorded.get('EnterpriseName');
                    var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
                    var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
                    var EnterpriseHQAccNo = modelRecorded.get('EnterpriseHQAccNo');
            
                    globalDashboardVIAAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
                    globalDashboardVIAAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
                    globalDashboardVIAAdvertisement_EnterpriseName = EnterpriseName;
                    globalDashboardVIAAdvertisement_AdvertisementTitle = AdvertisementTitle;
            
            
            
            
            
            
            
            
                    localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);
                    localStorage.setItem('EnterpriseHQAccNo', EnterpriseHQAccNo);
            
                    Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
                    Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
                    //   Ext.getCmp('htmlDasboardAdvertisementTitleTxt').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AdvertisementTitle + '</div>');
            
            
                    //console.log(GetEnterpriseHQAccNo());
                    //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
                    //var modelRecord = myStore.getAt(0);
            
                    //var Complaint = modelRecord.get('Complaint');
                    // var MinStoreAlert = modelRecord.get('MinStoreAlert');
                    // var StoreBalance = modelRecord.get('TotalStock');
            
                    carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
                    ArrCaptionTextVIAAdvertisement.length = 0;
                    ArrMediaFileName.length = 0;
            
                    for (i = 0; i < count; i++) {
                        var modelRecord = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(i);
            
                        var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
                        var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
                        var MediaType = modelRecord.get('MediaType');
                        var MediaFileName = modelRecord.get('MediaFileName');
            
            
            
            
            
                        ArrMediaFileName.push(MediaFileName);
            
                        Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
                        //  xtype: 'pinchzoomimage',
                        if (MediaType == "Image") {
                            carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'image', margin: '7 0 0 0' });
                            // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
                        }
                        if (MediaType == "Video") {
                            carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });
            
                        }
            
                        if (AdvertismentMediaNote) {
                            ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
                        } else {
                            ArrCaptionTextVIAAdvertisement.push('NULL');
                        }
            
            
                       
                    }
            
            
            
            
                    var modelRecords = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
                    localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
                    localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
                    localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
                    localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
                    Ext.Viewport.setMasked(false);
                    AyohaMerchantReward_VIAAdvertismentAutoSlide();
                    AyohaMerchantReward_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);
                   // AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
        
                
                } else {
                    console.error('Failed to load store data or no record found.');
                   // AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    LoadingPanelHide();
                }
            }
        });




      
    
      
          
        //     var count = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getCount();
    
        //     CountAdvertisementMedia = count - 1;
        //     var modelRecorded = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        //     var AdvertisementTitle = modelRecorded.get('AdvertisementTitle');
        //     var AdvertisementCode = modelRecorded.get('AdvertisementCode');
        //     var AdvertisementEndDate = modelRecorded.get('AdvertisementEndDate');
        //     var EnterpriseName = modelRecorded.get('EnterpriseName');
        //     var EnterpriseLogoPath = modelRecorded.get('EnterpriseLogoPath');
        //     var EnterpriseAccNo = modelRecorded.get('EnterpriseAccNo');
        //     var EnterpriseHQAccNo = modelRecorded.get('EnterpriseHQAccNo');
    
        //     globalDashboardVIAAdvertisement_EnterpriseAccNo = EnterpriseAccNo;
        //     globalDashboardVIAAdvertisement_EnterpriseLogoPath = EnterpriseLogoPath;
        //     globalDashboardVIAAdvertisement_EnterpriseName = EnterpriseName;
        //     globalDashboardVIAAdvertisement_AdvertisementTitle = AdvertisementTitle;
    
    
    
    
    
    
    
    
        //     localStorage.setItem("Dashboard_VIAAdvertismentCode", AdvertisementCode);
        //     localStorage.setItem('EnterpriseHQAccNo', EnterpriseHQAccNo);
    
        //     Ext.getCmp('btnDashboard_PreviewAdvertisement_PicProfile').setHtml('<img src="' + EnterpriseLogoPath + '" style="width: 50px; height: 50px; border:2px solid #ECF0F1; border-radius: 50%; max-width:200px;">');
        //     Ext.getCmp('btnDashboard_PreviewAdvertisement_UserNameProfile').setHtml('<div style="color:white;text-align: left;font-size:16px;width:90%;font-weight:bold; border-bottom:1px solid white;">' + EnterpriseName + '</div><br><div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:normal;margin:-15px 0px 0px 0px;">' + AdvertisementTitle + '</div>');
        //     //   Ext.getCmp('htmlDasboardAdvertisementTitleTxt').setHtml('<div style="color:white;text-align: left;font-size:12px;width:100%;font-weight:bold;">' + AdvertisementTitle + '</div>');
    
    
        //     //console.log(GetEnterpriseHQAccNo());
        //     //console.log(document.getElementById('input-FloatPanel_AdvertisementSetting_Code').value);
        //     //var modelRecord = myStore.getAt(0);
    
        //     //var Complaint = modelRecord.get('Complaint');
        //     // var MinStoreAlert = modelRecord.get('MinStoreAlert');
        //     // var StoreBalance = modelRecord.get('TotalStock');
    
        //     carouselDasboardVIAAdertisement = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
        //     ArrCaptionTextVIAAdvertisement.length = 0;
        //     ArrMediaFileName.length = 0;
    
        //     for (i = 0; i < count; i++) {
        //         var modelRecord = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(i);
    
        //         var AdvertismentMediaUrl = modelRecord.get('AdvertismentMediaUrl');
        //         var AdvertismentMediaNote = modelRecord.get('AdvertismentMediaNote');
        //         var MediaType = modelRecord.get('MediaType');
        //         var MediaFileName = modelRecord.get('MediaFileName');
    
    
    
    
    
        //         ArrMediaFileName.push(MediaFileName);
    
        //         Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing' + i).setHidden(false);
        //         //  xtype: 'pinchzoomimage',
        //         if (MediaType == "Image") {
        //             carouselDasboardVIAAdertisement.add({ xtype: 'image', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'image', margin: '7 0 0 0' });
        //             // myCarousel.add({ xtype: 'pinchzoomimage', src: AdvertismentMediaUrl, height: 670, width: '100%', mode: 'image' });
        //         }
        //         if (MediaType == "Video") {
        //             carouselDasboardVIAAdertisement.add({ xtype: 'video', src: AdvertismentMediaUrl, height: '100%', width: '100%', mode: 'video', posterUrl: 'resources/icons/videoPurple.png', loop: false, enableControls: true, margin: '7 0 0 0' });
    
        //         }
    
        //         if (AdvertismentMediaNote) {
        //             ArrCaptionTextVIAAdvertisement.push(AdvertismentMediaNote);
        //         } else {
        //             ArrCaptionTextVIAAdvertisement.push('NULL');
        //         }
    
    
        //         // Ext.getCmp('FloatPanel_PreviewAdvertisement_Carousel').setHidden(true);
        //     }
    
    
    
    
        //     //Ext.getCmp('containerDashboard_PreviewAdvertisement_CarouselLoading').setHidden(true);
        //     //Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setHidden(false);
    
    
        //     var modelRecords = _DataStore_AdvertisementloadMediaAdvertisementVIAStore.getAt(0);
        //     localStorage.setItem("EnterprisePhoneNo", modelRecords.get('EnterprisePhoneNo'));
        //     localStorage.setItem("EnterpriseEmail", modelRecords.get('EnterpriseEmail'));
        //     localStorage.setItem("EnterpriseWebsite", modelRecords.get('EnterpriseWebsite'));
        //     //localStorage.setItem("EnterpriseFacebook", modelRecords.get('EnterpriseFacebook'));
        //     localStorage.setItem("EnterpriseTwiter", modelRecords.get('EnterpriseTwiter'));
        //     // localStorage.setItem("EnterpriseInstagram", modelRecords.get('EnterpriseInstagram'));
        //     //  localStorage.setItem("EnterpriseCoordinate", modelRecords.get('EnterpriseCoordinate'));
        //     // localStorage.setItem("PICContactNo", modelRecords.get('PICContactNo'));
        //     ////globalVIAEnterpriseFacebookUrl=modelRecords.get('EnterpriseFacebook');
        //     ////globalVIAEnterpriseInstagramUrl = modelRecords.get('EnterpriseInstagram');
        //     ////globalVIAPICContactNo = modelRecords.get('PICContactNo');
        //     ////globalEnterpriseCoordinate = modelRecords.get('EnterpriseCoordinate');
        //     Ext.Viewport.setMasked(false);
        //     VIAAdvertismentAutoSlide();
        //     //loadAdvertisementloadHotSeatStore();
        //     Dashboard_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo);
        //     FloatPanel_DashboardMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
        // });
        // task.delay(1000);
    
    }



    function AyohaMerchantReward_VIAAdvertismentAutoSlide() {
        var i = 0;
        var interval = parseInt(3000);
        var crsl = Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel');
    
        var maxIndenx = crsl.getMaxItemIndex();
        //  $("#divCardBgImg").css("background-image", "url(" + ArrCardBackgroundImg[i] + ")");
        VIAAdvertismentAutoSlideTimer = setInterval(function () {
    
            crsl.next();
            globalMediaFileName = ArrMediaFileName[crsl.getActiveIndex() + 1];
          
            if (crsl.getActiveIndex() === crsl.getMaxItemIndex()) {
                // crsl.previous();
                Ext.getCmp('Dashboard_PreviewAdvertisement_Carousel').setActiveItem(0);
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing1').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing2').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing3').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing4').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing5').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing6').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing7').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing8').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
                Ext.getCmp('btnDashboard_PreviewAdvertisement_Timing9').setHtml('<img src="resources/icons/TimerBarwhiteOne.png" width="98%" height="3" alt="Company Name">');
            }
            //if (crsl.getActiveIndex() === 0) {
            //    crsl.next();
            //}
    
            Ext.getCmp('DashboardVIAAdvertisement_eStoreIcon').setHtml('<div class="blink_me"><img src="' + arrVIAAdvertisementeStoreIconPath[VIAAdvertisementOnlineStoreIndex] + '" width="38" height="38" alt="Company Name"></div>');
            Ext.getCmp('DashboardVIAAdvertisement_eStoreName').setHtml('<div class="blink_me" style="width:100%;margin:6px 0px 0px 0px;"><font size=2 color=black><b>Visit Our Online Store</b></font><br><div style="margin:-8px 0px 0px 0px"><font size=1 color=black><b>' + arrVIAAdvertisementeStoreName[VIAAdvertisementOnlineStoreIndex] + '</b></font></div></div>');
    
            VIAAdvertisementOnlineStoreIndex++;
            // console.log(VIAAdvertisementOnlineStoreIndex);
            if (VIAAdvertisementOnlineStoreIndex == VIAAdvertisementCount) {
                // console.log('stop');
                VIAAdvertisementOnlineStoreIndex = 0;
                // console.log('reset');
            }
            //  console.log(VIAAdvertisementOnlineStoreIndex);
    
    
    
    
        }, interval);
    }

    function  AyohaMerchantReward_loadVIAAdvertisement_EnterprisesContactUsLinkStore(EnterpriseAccNo) {

        arrVIAAdvertisementeStoreName.length = 0;
        arrVIAAdvertisementOnlineStoreUrl.length = 0;
        arrVIAAdvertisementeStoreIconPath.length = 0;
    
        _DataStore_EnterprisesContactUsLinkStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccNo);
        _DataStore_EnterprisesContactUsLinkStore.getProxy().setUrl(GetAPIurl() + 'Enterprises/EnterprisesContactUsLink');
        _DataStore_EnterprisesContactUsLinkStore.load({
    callback: function (records, operation, success) {
        if (success && records.length > 0) {
            console.log('Store loaded successfully, total records: ' + records.length);

            var record = records[0]; // Access only the first record


            var Store = records[0];
            VIAAdvertisementCount = records.length;
            globalVIAEnterpriseFacebookUrl = Store.get('EnterpriseFacebook');
            globalVIAEnterpriseInstagramUrl = Store.get('EnterpriseInstagram');
            globalVIAPICContactNo = Store.get('PICContactNo');
            globalEnterpriseCoordinate = Store.get('EnterpriseCoordinate');
            globalVIAEnterpriseWebsite = Store.get('EnterpriseWebsite');
    
            globalVIAMerchantLinkType = Store.get('MerchantLinkType');
    
            console.log(globalEnterpriseCoordinate);
    
            console.log(globalVIAEnterpriseInstagramUrl);
    
            if (globalEnterpriseCoordinate != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_Location').setHidden(true);
            }
            if (globalVIAEnterpriseFacebookUrl != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_FB').setHidden(true);
            }
            if (globalVIAEnterpriseInstagramUrl != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_Insta').setHidden(true);
            }
            if (globalVIAPICContactNo != "NA") {
                Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(false);
            } else {
                Ext.getCmp('btnDashboardAdvertisementbottom_Wassap').setHidden(true);
            }


            for (i = 0; i < records.length ; i++) {
                Stores = _DataStore_EnterprisesContactUsLinkStore.getAt(i);
    
    
    
                arrVIAAdvertisementeStoreName.push(Stores.get('eStoreName'));
                arrVIAAdvertisementOnlineStoreUrl.push(Stores.get('OnlineStoreUrl'));
                arrVIAAdvertisementeStoreIconPath.push(Stores.get('eStoreIconPath'));
    
                //if (Stores.get('eStoreName')) {
                //    Ext.getCmp('containerFloatPanel_Advertisement_BottomPanel_OnlineShop_Icon_' + i).setHidden(false);
                //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreIcon' + i).setHtml('<div class="blink_me"><img src="' + Stores.get('eStoreIconPath') + '" width="32" height="32" alt="Company Name" onclick="FloatPanel_PreviewAdvertisement_OpenOnlineStore' + i + '()"></div>');
                //    Ext.getCmp('btnFloatPanel_PreviewAdvertisementbottom_OnlineStoreName' + i).setHtml('<div class="blink_me" style="color:white;text-align: center;font-size:10px;width:100%;font-weight:normal;margin:0px 0px 0px 0px;">' + Stores.get('eStoreName') + '</div>');
    
                //} else {
                //    Ext.getCmp('htmlFloatPanel_PreviewAdvertisementbottom_eStoreNameTitle').setHtml('<font size=2 color=white><b>No Online Store</b></font>');
                //}
    
            }



          
           
        } else {
            console.error('Failed to load store data or no record found.');
            LoadingPanelHide();
        }
    }
});
    
    
    
    }



    function AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore() {

        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setExtraParam('VoucherType', "AyohaMerchantVoucher");
        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantReward');
    
      //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();
    
    
    
    
        _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    console.log('Store loaded successfully, total records: ' + records.length);
                  
                    var count = _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.getCount();
                    Ext.getCmp('AyohaMerchantReward_VoucherList_Eligible').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore);
                   
                    
                    if (count < 1) {

                       // Ext.getCmp('html_AyohaMerchantRewards_VoucherTab_ReadyVoucher').setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;">Your Vouchers-(0)</div>');
                    
                    }
            
                    if (count == 1) {
                        //Ext.getCmp('html_AyohaMerchantRewards_VoucherTab_ReadyVoucher').setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;">Your Vouchers-(' + count + ')</div>');
                        //Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">3).Redeemable Merchant Voucher-<font class="blink_me" size=3x>(' + count + ')</font> </div>');
                    }
            
                    if (count > 1) {
                       // Ext.getCmp('html_AyohaMerchantRewards_VoucherTab_ReadyVoucher').setHtml('<div  style="color:white;text-align: center;font-size:10px;width:100%;">Your Vouchers-(' + count + ')</div>');
                       // Ext.getCmp('htmlFloatPanel_DashboardMerchantRewardTxt').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal"> 3).Redeemable Merchant Voucher-<font class="blink_me" size=2x>(' + count + ')</font></div>');
                    }
                   // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                   LoadingPanelHide();
                } else {
                    console.error('Failed to load store data or no record found.');
                   
                    LoadingPanelHide();
                    AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                }
            }
        });
    
    
    
    
    
    
    
       
    
    }
    

    function AyohaMerchantReward_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore(RedeemStatus) {

        _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.getProxy().setExtraParam('RedeemStatus', RedeemStatus);
        _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardVoucher_EntitledUser/VoucherCampaignRedeemLoadByVoucherRedeemStatus');
    
      //  _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoMerchantRewardStore.load();
    
    
    
    
      _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                   // console.log('Store loaded successfully, total records: ' + records.length);
                  
                    var count = _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.getCount();
                    Ext.getCmp('AyohaMerchantReward_VoucherList_'+RedeemStatus).setStore(_DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore);
            

                } else {
                   
                    Ext.getCmp('AyohaMerchantReward_VoucherList_'+RedeemStatus).setStore(_DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore);
                  
                }
            }
        });
    
    
    
    
    
    
    
       
    
    }
    
    function AyohaMerchantReward_ContestCampaignRedeem_LoadByContestRedeemStatusStore(RedeemStatus) {

        _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.getProxy().setExtraParam('RedeemStatus',RedeemStatus);
        _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/ContestCampaignRedeem_LoadByContestRedeemStatus');
    
      
    
      
        _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                  
                    Ext.getCmp('AyohaMerchantReward_ContestList_'+RedeemStatus).setStore(_DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore);
                  
                    

                } else {

                    Ext.getCmp('AyohaMerchantReward_ContestList_'+RedeemStatus).setStore(_DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore);
                   
                  
                }
               
            }
        });
    }




    function AyohaMerchantReward_EventCampaignRedeemLoadByEventRedeemStatusStore(RedeemStatus) {
       
        _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.getProxy().setExtraParam('RedeemStatus', RedeemStatus);
        _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/EventCampaignRedeemLoadByEventRedeemStatus');
        
        
        
        _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.load({
                callback: function (records, operation, success) {
                    if (success && records.length > 0) {
                        
                        Ext.getCmp('AyohaMerchantReward_MembershipEvent_'+RedeemStatus).setStore(_DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore);
               
                      //  Ext.getCmp('listTabpanelDashboardMerchantRewards_Event').setStore(_DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore);
                      
                        //AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                       
                        
                        // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                    } else {
                        Ext.getCmp('AyohaMerchantReward_MembershipEvent_'+RedeemStatus).setStore(_DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore);
                    }
                   // 
                }
            });
    
    
    
    
    
        }


        function AyohaMerchantReward_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore(RedeemStatus) {
       _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
       _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.getProxy().setExtraParam('RedeemStatus', RedeemStatus);
       _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/DiscountCampaing/DiscountCampaignRedeem_LoadByDiscountRedeemStatus');
            
            
            
            _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.load({
                    callback: function (records, operation, success) {
                        if (success && records.length > 0) {
                            
                            Ext.getCmp('AyohaMerchantRewardDiscountList_'+RedeemStatus).setStore(_DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore);
                            //AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                           
                            
                            // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                        } else {
                            Ext.getCmp('AyohaMerchantRewardDiscountList_'+RedeemStatus).setStore(_DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore);
                        }
                       // 
                    }
                });
        
        
        
        
        
            }




            function AyohaMerchantReward_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore(RedeemStatus) {
       
                _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
                _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.getProxy().setExtraParam('RedeemStatus', RedeemStatus);
                _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.getProxy().setUrl(GetAPIurl() + '/AyohaeWalletTransaction/DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOffline');
                
                
                
                _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.load({
                        callback: function (records, operation, success) {
                            if (success && records.length > 0) {
                                
                                Ext.getCmp('AyohaMerchantRewardDiscountList_'+RedeemStatus).setStore(_DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore);
                                //AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo();
                               
                                
                                // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                            } else {
                                Ext.getCmp('AyohaMerchantRewardDiscountList_'+RedeemStatus).setStore(_DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore);
                            }
                           // 
                        }
                    });
            
            
            
            
            
                }


    function AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore() {

        _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContest/AyohaRewardContestLoadBySubscriberAccNo');
    
      
    
      
        _DataStore_AyohaRewardContestLoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                  
                    Ext.getCmp('AyohaMerchantReward_ContestList_Eligible').setStore(_DataStore_AyohaRewardContestLoadBySubscriberAccNoStore);
                    AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                } else {
                    console.error('Failed to load store data or no record found.');
                   
                    LoadingPanelHide();
                    AyohaMerchantReward_AyohaRewardEventLoadBySubscriberAccNoStore();
                }
               
            }
        });







    
       
    }





    function AyohaMerchantReward_AyohaRewardDiscountCampaing_LoadBySubscriberAccNo() {



       

        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + 'DiscountCampaing/DiscountCampaing_LoadBySubscriberAccNo');
    
      
   
      
        _DataStore_DiscountCampaing_LoadBySubscriberAccNoStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    
                    Ext.getCmp('AyohaMerchantRewardDiscountList_Eligible').setStore(_DataStore_DiscountCampaing_LoadBySubscriberAccNoStore);
                   // AyohaMerchantReward_LoadDashboard();
                   // Load_TotalEligible_vs_Used_Doughnut();
                 
                } else {
                    console.log('jemmm not founfd.');
                    
                  
                    //AyohaMerchantReward_LoadDashboard();
                    //Load_TotalEligible_vs_Used_Doughnut();
                   
                }
               
            }
        });







    
       
    }




// Global chart handler
window._EligibleVsUsedChart = window._EligibleVsUsedChart || null;
window._EligibleVsUsed_DatalabelsRegistered =
  window._EligibleVsUsed_DatalabelsRegistered || false;

  function AyohaMerchantReward_LoadDashboard() {

    var TtlEligiblePerk=parseInt(
        AppState.AyohaMerchantReward.ContestEligible
         +AppState.AyohaMerchantReward.EventEligible
        +AppState.AyohaMerchantReward.PointPerksEligible
        +AppState.AyohaMerchantReward.StampedPerksEligible
        +AppState.AyohaMerchantReward.VoucherPerksEligible
        +AppState.AyohaMerchantReward.DiscountEligible);
        AppState.AyohaMerchantReward.TotalEligiblePerks=TtlEligiblePerk;
        
        var TtlRedeemPerks=parseInt(
            AppState.AyohaMerchantReward.ContestJoined
            +AppState.AyohaMerchantReward.EventJoined
            +AppState.AyohaMerchantReward.PointPerksRedeemSubmitted
            +AppState.AyohaMerchantReward.StampedPerksRedeemSubmitted
            +AppState.AyohaMerchantReward.VoucherPerksRedeem
            +AppState.AyohaMerchantReward.DiscountRedeem
            );
        AppState.AyohaMerchantReward.TotalRedeemedPerks=TtlRedeemPerks;
        
        
        var TtlRedeemApprovePerks=parseInt(
            AppState.AyohaMerchantReward.ContestApproved
            +0
            +AppState.AyohaMerchantReward.PointPerksRedeemApproved
            +AppState.AyohaMerchantReward.StampedPerksRedeemApproved
            +AppState.AyohaMerchantReward.VoucherPerksRedeemApproved
            +0
            
            
            )
        AppState.AyohaMerchantReward.TotalApprovedRedeemedPerks=TtlRedeemApprovePerks;

       

        var TtlExpiredPerks=parseInt(
            AppState.AyohaMerchantReward.StampedPerksRedeemExpired
            + AppState.AyohaMerchantReward.PointPerksExpired
            +AppState.AyohaMerchantReward.VoucherExpired
            +AppState.AyohaMerchantReward.ContestExpired
            +AppState.AyohaMerchantReward.EventExpired
            +AppState.AyohaMerchantReward.DiscountExpired
            
            
            )





        Ext.getCmp('htmlAyohaMerchantReward_TotalPerkEligibleCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+AppState.AyohaMerchantReward.TotalEligiblePerks+'</div>');
        Ext.getCmp('htmlAyohaMerchantReward_TotalRedeemCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+AppState.AyohaMerchantReward.TotalRedeemedPerks+'</div>');
        Ext.getCmp('htmlAyohaMerchantReward_TotalApprovedRedeemCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+AppState.AyohaMerchantReward.TotalApprovedRedeemedPerks+'</div>');
        Ext.getCmp('htmlAyohaMerchantReward_TotalPerkExpiredCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+TtlExpiredPerks+'</div>');


    var canvas = document.getElementById('loyaltyHBar');
    if (!canvas) return;

    var ctx = canvas.getContext('2d');

    // Register datalabels plugin sekali sahaja
    if (!window._EligibleVsUsed_DatalabelsRegistered && window.ChartDataLabels) {
        Chart.register(ChartDataLabels);
        window._EligibleVsUsed_DatalabelsRegistered = true;
    }

    // Destroy chart lama (elak "Canvas is already in use")
    if (window._EligibleVsUsedChart) {
        window._EligibleVsUsedChart.destroy();
        window._EligibleVsUsedChart = null;
    }

    // ⚠️ MESTI sama panjang: 6 item
    var labels   = ['Stamps', 'Points', 'Vouchers', 'Contests', 'Events', 'Discounts'];
   // var labels   = ['Contests', 'Events', 'Points', 'Stamps', 'Vouchers', 'Discounts'];
    var eligible = [

        AppState.AyohaMerchantReward.StampedPerksEligible,
        AppState.AyohaMerchantReward.PointPerksEligible,
        AppState.AyohaMerchantReward.VoucherPerksEligible,
        AppState.AyohaMerchantReward.ContestEligible,
        AppState.AyohaMerchantReward.EventEligible,
        AppState.AyohaMerchantReward.DiscountEligible

    ];
    var used =    [
        AppState.AyohaMerchantReward.StampedPerksRedeemSubmitted,
        AppState.AyohaMerchantReward.PointPerksRedeemSubmitted,
        AppState.AyohaMerchantReward.VoucherPerksRedeem,
        AppState.AyohaMerchantReward.ContestJoined,
        AppState.AyohaMerchantReward.EventJoined,
         AppState.AyohaMerchantReward.DiscountRedeem
    ];
   //  approved for offline voucher and discount will be in next released;
    var approved =[
        AppState.AyohaMerchantReward.StampedPerksRedeemApproved,
        AppState.AyohaMerchantReward.PointPerksRedeemApproved,
       0,
        0,
        0, 
        0
    
    ];
    var joined =[
        0,
        0,
        0,
        0,
        0,
        0
];

        var expired =[
            AppState.AyohaMerchantReward.StampedPerksRedeemExpired,
            AppState.AyohaMerchantReward.PointPerksExpired,
            AppState.AyohaMerchantReward.VoucherExpired,
            AppState.AyohaMerchantReward.ContestExpired,
            AppState.AyohaMerchantReward.EventExpired,
            AppState.AyohaMerchantReward.DiscountExpired
        ];

    window._EligibleVsUsedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
               
                {
                    label: 'Eligible',
                    data: eligible,
                    stack: 'perks',
                   // backgroundColor: 'rgba(255,255,255,0.55)',
                    backgroundColor:'#ecfdf5',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Expired',
                    data: expired,
                    stack: 'perks',
                    backgroundColor: 'red',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Redeemed',
                    data: used,
                    stack: 'perks',
                    backgroundColor: '#f97316',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                {
                    label: 'Approved',
                    data: approved,
                    stack: 'perks',
                    backgroundColor: 'green',
                    borderRadius: 12,
                    borderSkipped: false,
                    barThickness: 25,
                    categoryPercentage: 1,
                    barPercentage: 1
                },
                // {
                //     label: 'Joined',
                //     data: joined,
                //     stack: 'perks',
                //     backgroundColor: 'blue',
                //     borderRadius: 12,
                //     borderSkipped: false,
                //     barThickness: 25,
                //     categoryPercentage: 1,
                //     barPercentage: 1
                // }
            ]
        },
        options: {
            // indexAxis default = 'x', so boleh buang / biar kosong untuk vertical bar
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: '#ffffff',   // tulisan nama perks putih
                        font: {
                            size: 10
                        }
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.15)'
                    }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        precision: 0,
                        color: '#ffffff',   // tulisan axis Y putih (0,1,2,…)
                        font: {
                            size: 10
                        }
                    },
                    suggestedMax: 7,
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',   // atas
                    align: 'end',    // align ke kiri (top-left)
                    labels: {
                        usePointStyle: true,
                        boxWidth: 10,
                        color: '#ffffff',
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            var label = ctx.dataset.label || '';
                            var value = ctx.parsed.y; // vertical bar → guna nilai Y
                            return label + ': ' + value;
                        }
                    }
                },
                datalabels: {
                    color: '#ffffff',       // nombor atas bar putih
                    anchor: 'center',
                    align: 'center',
                    formatter: function (v) {
                        return v > 0 ? v : ''; // kalau 0, jangan tulis
                    },
                    font: {
                        weight: '600',
                        size: 8              // ikut komen: 8px
                    }
                }
            }
        }
    });


   // AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore_Initialized();
    switchPerkTab_Stamp(document.getElementById('btnStampEligible'), 'NA', 0);
}






function AyohaMerchantReward_LoadPerksChartBarData() {
    var task = Ext.create('Ext.util.DelayedTask', function () {




     











        var objn = {
            "SubscriberAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/MerchantReward/MerchantReward_Perks_DashboardData',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {

                //console.log(result.responseText);


                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    if (data.total > 0) {


                        AppState.AyohaMerchantReward.ContestEligible= data.results[0].ContestEligible;
                        AppState.AyohaMerchantReward.ContestJoined= data.results[0].ContestJoined;
                        AppState.AyohaMerchantReward.ContestApproved= data.results[0].ContestApproved;
                        AppState.AyohaMerchantReward.ContestExpired= data.results[0].ContestExpired;


                        setContestPerkCounts(data.results[0].ContestEligible, data.results[0].ContestJoined
                            , data.results[0].ContestApproved, data.results[0].ContestExpired);
                        
                        AppState.AyohaMerchantReward.EventEligible= data.results[0].EventEligible;
                        AppState.AyohaMerchantReward.EventJoined= data.results[0].EventJoined;
                        AppState.AyohaMerchantReward.EventExpired= data.results[0].EventExpired;

                        setEventPerkCounts(data.results[0].EventEligible, data.results[0].Event_IwillAttend
                            , data.results[0].Event_Interested, data.results[0].EventExpired);




                        
                        AppState.AyohaMerchantReward.PointPerksEligible= data.results[0].PointPerksEligible;
                        AppState.AyohaMerchantReward.PointPerksRedeemSubmitted= data.results[0].PointPerksRedeemSubmitted;
                        AppState.AyohaMerchantReward.PointPerksRedeemApproved= data.results[0].PointPerksRedeemApproved;
                        AppState.AyohaMerchantReward.PointPerksExpired= data.results[0].PointPerksExpired;

                        setPointPerkCounts(data.results[0].PointPerksEligible, data.results[0].PointPerksRedeemSubmitted
                            , data.results[0].PointPerksRedeemApproved, data.results[0].PointPerksExpired);




                        
                        AppState.AyohaMerchantReward.StampedPerksEligible= data.results[0].StampedPerksEligible;
                        AppState.AyohaMerchantReward.StampedPerksRedeemSubmitted= data.results[0].StampedPerksRedeemSubmitted;
                        AppState.AyohaMerchantReward.StampedPerksRedeemApproved= data.results[0].StampedPerksRedeemApproved;
                        AppState.AyohaMerchantReward.StampedPerksRedeemRejected= data.results[0].StampedPerksRedeemRejected;
                        AppState.AyohaMerchantReward.StampedPerksRedeemExpired= data.results[0].StampedPerksRedeemExpired;
                       
                        setStampPerkCounts(data.results[0].StampedPerksEligible, data.results[0].StampedPerksRedeemSubmitted
                            , data.results[0].StampedPerksRedeemApproved, data.results[0].StampedPerksRedeemExpired);
                        
                        AppState.AyohaMerchantReward.VoucherPerksEligible= data.results[0].VoucherPerksEligible;
                        AppState.AyohaMerchantReward.VoucherPerksRedeem= data.results[0].VoucherPerksRedeem;
                        AppState.AyohaMerchantReward.VoucherPerksRedeemApproved= data.results[0].VoucherPerksRedeemApproved;
                        AppState.AyohaMerchantReward.VoucherExpired= data.results[0].VoucherExpired;
                        setVoucherPerkCounts(data.results[0].VoucherPerksEligible, data.results[0].VoucherPerksRedeem
                            , data.results[0].VoucherPerksRedeemApproved, data.results[0].VoucherExpired);


                        
                        
                        AppState.AyohaMerchantReward.DiscountEligible= data.results[0].DiscountEligible;
                        AppState.AyohaMerchantReward.DiscountExpired= data.results[0].DiscountExpired;
                        AppState.AyohaMerchantReward.DiscountRedeem= data.results[0].DiscountRedeem;

                        setDiscountPerkCounts(data.results[0].DiscountEligible, data.results[0].DiscountRedeem
                            , 0, data.results[0].DiscountExpired);

                        AyohaMerchantReward_LoadDashboard();



                       
                    }
                    if (data.total == 0) {
                      

                    }



                  

                }
                else {

                }

               
            },

            failure: function (result, request) {
              
               
            }

        });



    });

    //  Ext.Viewport.unmask();

    //   setDashBoardMerchantReviewRate(FiveStar, FourStar, ThreeStar, TwoStar, OneStar);
    task.delay(100);
}




function AyohaMerchantReward_InitializedTabEvent() {
    


    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps.on('tap',
      function (event, node, options, eOpts) {
       

        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(0);
        animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Stamps');
      
      }
    );





    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Points.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(1);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Points');

       Ext.getCmp('carouselAyohaMerchantRewards_Points').setActiveItem(0);
       AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore('Eligible');



      
      }
    );




    
    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(2);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers');
       Ext.getCmp('carouselAyohaMerchantRewards_Vouchers').setActiveItem(0);
        AyohaMerchantReward_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore('Eligible');

      }
    );






    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Contests.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Contest</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(3);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Contests');
       Ext.getCmp('carouselAyohaMerchantRewards_Contests').setActiveItem(0);
       AyohaMerchantReward_ContestCampaignRedeem_LoadByContestRedeemStatusStore('Eligible');
      }
    );






    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Events.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(4);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Events');
       Ext.getCmp('carouselAyohaMerchantRewards_Events').setActiveItem(0);
       // AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore(RedeemStatus);
      AyohaMerchantReward_EventCampaignRedeemLoadByEventRedeemStatusStore('Eligible');
      }
    );

    var containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts = Ext.ComponentQuery.query('container[name=nameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts]')[0];
    var containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts = containerViewnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts.element;
    containerViewElnameContainerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts.on('tap',
      function (event, node, options, eOpts) {
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Stamps').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Digital Stamps</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Points').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Point Rewards</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Vouchers').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Vouchers</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Contests').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Contests</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Events').setHtml('<div style="color:#9CA3AF;text-align: center;font-size:12px;width:100%;font-weight:normal">Events</div>');
        Ext.getCmp('htmlAyohaMerchantRedemptionHeader_ButtonPerks_Discounts').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:bold">Discounts</div>');
        Ext.getCmp('tabpanelAyohaMerchantRewards').setActiveItem(5);
       animatedClickTabExt_AyohaMerchantReward('containerAyohaMerchantRedemptionHeader_ButtonPerks_Discounts');

       Ext.getCmp('carouselAyohaMerchantRewards_Discounts').setActiveItem(0);
        AyohaMerchantReward_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore('Eligible');
      
      }
    );
}




function AyohaMerchantReward_SwitchTab(tabName,index,StampedRedeemStatus) {

   // Ext.getCmp(tabName).setActiveItem(index);

    AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore(StampedRedeemStatus)


}






function AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore_Initialized() {
  

    switchPerkTab_Stamp(document.getElementById('btnStampEligible'), 'NA', 0);


    // _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    // _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('StampedRedeemStatus','NA');
    // _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemStatus');
    
    
    
    // _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.load({
    //         callback: function (records, operation, success) {
    //             if (success && records.length > 0) {
    //                // var record = records[0]; // Access only the first record                 
                   
    //                 switchPerkTab_Point(document.getElementById('btnPointEligible'), 'Eligible', 0);
    //                 Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_NA').setStore(_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore);
                
    //               // AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    
    //                 // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
    //             } else {
    //                 Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_NA').setStore(_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore);
    //                 switchPerkTab_Point(document.getElementById('btnPointEligible'), 'Eligible', 0);
    //                // AyohaMerchantReward_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore();
                    
    //             }
    //            // 
    //         }
    //     });





    }

function AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore(StampedRedeemStatus) {
  
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setExtraParam('StampedRedeemStatus',StampedRedeemStatus);
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemStatus');
    
    
    
    _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.load({
            callback: function (records, operation, success) {
                if (success && records.length > 0) {
                    var record = records[0]; // Access only the first record
                 
                    Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_'+StampedRedeemStatus).setStore(_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore);
                   
                   
                    
                    // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                } else {
                  
                    Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_'+StampedRedeemStatus).setStore(_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore);
                   
                }
               // 
            }
        });





    }



    function AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemExpiredStore(StampedRedeemStatus) {
  
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.getProxy().setUrl(GetAPIurl() + '/AyohaUserStampCard/AyohaUserDashBoardStampCardLoadByStampedRedeemExpired');
        
        
        
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.load({
                callback: function (records, operation, success) {
                    if (success && records.length > 0) {
                        //var record = records[0]; // Access only the first record
                       
                        Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_'+StampedRedeemStatus).setStore(_DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore);
                       
                       
                        
                        // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();
                    } else {
                        Ext.getCmp('listTabpanelAyohaMerchantRewards_StampsStatus_'+StampedRedeemStatus).setStore(_DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore);
                       
                      
                    }
                   // 
                }
            });
    
    
    
    
    
        }



    



      
        var globalAyohaMerchantRewardlistZoneH;
        function AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore(RedeemPointStatus) {
  //alert('RedeemPointStatus:'+RedeemPointStatus)
            _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
            _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.getProxy().setExtraParam('RedeemPointStatus',RedeemPointStatus);
            _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.getProxy().setUrl(GetAPIurl() + '/PointCampaignRedeemItemSetting/PointCampaignRedeemLoadByPointRedeemStatus');
            
            
            
            _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.load({
                    callback: function (records, operation, success) {
                        if (success && records.length > 0) {
                            var record = records[0]; // Access only the first record
                           
                            Ext.getCmp('listcarouselAyohaMerchantRewards_Point_'+RedeemPointStatus).setStore(_DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore);
                         // listHeight=records.length *95;
                         // Ext.getCmp('listcarouselAyohaMerchantRewards_Point_'+RedeemPointStatus).setHeight(listHeight);
                        // var pnl=Ext.getCmp('containercarouselAyohaMerchantRewards_Point_Eligible').getHeight();
                     //   alert(containerPerkListglobalHeight);
                           
                            
                            // AyohaMerchantReward_AyohaRewardContestLoadBySubscriberAccNoStore();




                
Ext.getCmp('listcarouselAyohaMerchantRewards_Point_'+RedeemPointStatus).setHeight(globalAyohaMerchantRewardlistZoneH);

                            return;
                        } else {
                          // alert('fff'+RedeemPointStatus)
                          Ext.getCmp('listcarouselAyohaMerchantRewards_Point_'+RedeemPointStatus).setHeight(globalAyohaMerchantRewardlistZoneH);
                            Ext.getCmp('listcarouselAyohaMerchantRewards_Point_'+RedeemPointStatus).setStore(_DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore);
                           
                        }
                       // 
                    }
                });
        
        
        
        
        
            }






    function switchPerkTab_Stamp(btn,RedeemStatus,Index) {
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn.stamp');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
        globalAyohaMerchantReward_StampFilter=RedeemStatus;
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        if(RedeemStatus!="Expired"){
            AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore(RedeemStatus);
            
            Ext.getCmp('carouselAyohaMerchantRewards_Stamps').setActiveItem(Index);
        }else{
            AyohaMerchantReward_AyohaUserDashBoard_StampCardLoadByStampedRedeemExpiredStore(RedeemStatus);
            Ext.getCmp('carouselAyohaMerchantRewards_Stamps').setActiveItem(Index);
        }
       
      
       
      }



      function switchPerkTab_Point(btn,RedeemStatus,Index) {
      
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn.point');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
      
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        Ext.getCmp('carouselAyohaMerchantRewards_Points').setActiveItem(Index);
        AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore(RedeemStatus);
        
      
       
      }
      function switchPerkTab_Voucher(btn,RedeemStatus,Index) {
      
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn.voucher');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
      
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        Ext.getCmp('carouselAyohaMerchantRewards_Vouchers').setActiveItem(Index);
       // AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore(RedeemStatus);
        AyohaMerchantReward_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore(RedeemStatus);
        
      
       
      }

      function switchPerkTab_Contest(btn,RedeemStatus,Index) {
      
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn.contest');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
      
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        Ext.getCmp('carouselAyohaMerchantRewards_Contests').setActiveItem(Index);
       // AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore(RedeemStatus);
       AyohaMerchantReward_ContestCampaignRedeem_LoadByContestRedeemStatusStore(RedeemStatus);
        
      
       
      }


      function switchPerkTab_Event(btn,RedeemStatus,Index) {
      
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn.event');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
      
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        Ext.getCmp('carouselAyohaMerchantRewards_Events').setActiveItem(Index);
       // AyohaMerchantReward_PointCampaignRedeemLoadByPointRedeemStatusStore(RedeemStatus);
      AyohaMerchantReward_EventCampaignRedeemLoadByEventRedeemStatusStore(RedeemStatus);
        
      
       
      }




      function switchPerkTab_Discount(btn,RedeemStatus,Index) {
      
        // reset semua button ke grey
        var allBtns = document.querySelectorAll('.perk-btn.discount');
        for (var i = 0; i < allBtns.length; i++) {
          allBtns[i].classList.remove('active');
        }
      
        // button yang ditekan jadi hitam/putih
        btn.classList.add('active');
        if(RedeemStatus=="Eligible" || RedeemStatus=="Expired"){
            Ext.getCmp("htmltxtDiscountPerksSearch").setHidden(false);
            Ext.getCmp("htmltxtDiscountPerksSearch_OnlineOfflineDiscount").setHidden(true);
        Ext.getCmp('carouselAyohaMerchantRewards_Discounts').setActiveItem(Index);
        AyohaMerchantReward_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore(RedeemStatus);
        return;
        }
        if(RedeemStatus=="Redeem_Online" || RedeemStatus=="Redeem_Offline"){
            Ext.getCmp("htmltxtDiscountPerksSearch").setHidden(true);
            Ext.getCmp("htmltxtDiscountPerksSearch_OnlineOfflineDiscount").setHidden(false);

            Ext.getCmp('carouselAyohaMerchantRewards_Discounts').setActiveItem(Index);
            AyohaMerchantReward_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore(RedeemStatus);
            return;
            }
      }

      

      function AyohaMerchantReward_openPointCardRedemption(val) {

        // FloatPanel_NearestRedemption_NotificationShow(ID);
         //  FloatPanel_NearestRedemptionHide();
         //alert(val);
     
         var PointCampaignCode = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContent = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentNote = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentSequence = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterpriseName = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var CountRow = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EndDate = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StartDate = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampRuleRemarks = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var IsStampRulePopUp = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var PointCampaignName = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterpriseAccNo= _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentFinal = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var CountStampYES = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterprisesLogo = _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
     
         var PointCampaignCodes = PointCampaignCode.get('PointCampaignCode');
        // var StampContents = StampContent.get('StampContent').replace("width:70px", "width:80px");
        // var StampContentNotes = StampContentNote.get('StampContentNote');
        // var StampContentSequences = StampContentSequence.get('StampContentSequence');
         var EnterpriseNames = EnterpriseName.get('EnterpriseName');
       //  var CountRows = CountRow.get('CountRow');
       //  var EndDates = EndDate.get('EndDate');
       //  var StartDates = StartDate.get('StartDate');
       //  var StampRuleRemarkss = StampRuleRemarks.get('StampRuleRemarks');
      //   var IsStampRulePopUps = IsStampRulePopUp.get('IsStampRulePopUp');
         var PointCampaignNames = PointCampaignName.get('PointCampaignName');
         var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
         //var StampContentFinals = StampContents.replace("height:70px", "height:80px");
        // var CountStampYESs = CountStampYES.get('CountStampYES');
         var EnterprisesLogos = EnterprisesLogo.get('EnterprisesLogo');
     
     
     
         //var StampCampaignCode = ArrStampCampaignCode[0];
         //var EnterpriseAccNo = ArrEnterpriseAccNo[0];
         //var StartDate = ArrStartDate[0];
         //var EndDate = ArrEndDate[0];
         //var SubscriberAccNo = GetCurrAyohaUserAccountNo();
         //var EnterpriseName = ArrEnterpriseName[0];
         //var StampRuleRemarks = ArrStampRuleRemarks[0];
         //var isStampRulePopUp = ArrIsStampRulePopUp[0];
         //var StampCampaignName = ArrStampCampaignName[0];
         //var CountLoyaltyStamped = ArrStampContentSequence[0];
         //var CountStampCardRowShow = ArrStampTotalRow[0];
         //var EnterprisesLogo = ArrEnterprisesLogo[0];
     
     
     
         globalLatestPointCampaignCode = PointCampaignCodes;
         

         FloatLoyaltyCardPointShow(PointCampaignNames, globalLatestPointCampaignCode, EnterprisesLogos, EnterpriseNames, EnterpriseAccNos);



        //  var strStampedYES = CountStampYESs;
        //  var StampedYES = strStampedYES.split("/");
        //  var YESStamped = StampedYES[0];
        //  var TotalRows = StampedYES[1];
        //  localStorage.setItem('StampCampaignCode', StampCampaignCodes);
 
        //  localStorage.setItem('CountLoyaltyStamped', YESStamped);
        //  localStorage.setItem('CountStampCardRowShow', TotalRows);
        //  FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);
 
     
     
     
        //  if (IsStampRulePopUps == "POINTLOYALTYCARD")
        //  {
        //      
     
        //  } else {
            
        //  }
     
        
     
     
     
     
     
        
     }



     function AyohaMerchantReward_openStampCardRedemption(val) {

        // FloatPanel_NearestRedemption_NotificationShow(ID);
         //  FloatPanel_NearestRedemptionHide();
         //alert(val);
     
         var StampCampaignCode = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContent = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentNote = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentSequence = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterpriseName = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var CountRow = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EndDate = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StartDate = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampRuleRemarks = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var IsStampRulePopUp = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampCampaignName = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterpriseAccNo= _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var StampContentFinal = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var CountStampYES = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
         var EnterprisesLogo = _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.findRecord('ID', val, 0, false, false, true);
     
         var StampCampaignCodes = StampCampaignCode.get('StampCampaignCode');
         var StampContents = StampContent.get('StampContent').replace("width:70px", "width:80px");
         var StampContentNotes = StampContentNote.get('StampContentNote');
         var StampContentSequences = StampContentSequence.get('StampContentSequence');
         var EnterpriseNames = EnterpriseName.get('EnterpriseName');
         var CountRows = CountRow.get('CountRow');
         var EndDates = EndDate.get('EndDate');
         var StartDates = StartDate.get('StartDate');
         var StampRuleRemarkss = StampRuleRemarks.get('StampRuleRemarks');
         var IsStampRulePopUps = IsStampRulePopUp.get('IsStampRulePopUp');
         var StampCampaignNames = StampCampaignName.get('StampCampaignName');
         var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');
         var StampContentFinals = StampContents.replace("height:70px", "height:80px");
         var CountStampYESs = CountStampYES.get('CountStampYES');
         var EnterprisesLogos = EnterprisesLogo.get('EnterprisesLogo');
     
     
     
         //var StampCampaignCode = ArrStampCampaignCode[0];
         //var EnterpriseAccNo = ArrEnterpriseAccNo[0];
         //var StartDate = ArrStartDate[0];
         //var EndDate = ArrEndDate[0];
         var SubscriberAccNo = GetCurrAyohaUserAccountNo();
         //var EnterpriseName = ArrEnterpriseName[0];
         //var StampRuleRemarks = ArrStampRuleRemarks[0];
         //var isStampRulePopUp = ArrIsStampRulePopUp[0];
         //var StampCampaignName = ArrStampCampaignName[0];
         //var CountLoyaltyStamped = ArrStampContentSequence[0];
         //var CountStampCardRowShow = ArrStampTotalRow[0];
         //var EnterprisesLogo = ArrEnterprisesLogo[0];
     
     
     
         globalLatestPointCampaignCode = StampCampaignCodes;
         
         var strStampedYES = CountStampYESs;
         var StampedYES = strStampedYES.split("/");
         var YESStamped = StampedYES[0];
         var TotalRows = StampedYES[1];
         localStorage.setItem('StampCampaignCode', StampCampaignCodes);
 
         localStorage.setItem('CountLoyaltyStamped', YESStamped);
         localStorage.setItem('CountStampCardRowShow', TotalRows);
         FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampCampaignCodes, EnterpriseAccNos, StartDates, EndDates, SubscriberAccNo, EnterpriseNames, StampRuleRemarkss, StampCampaignNames, YESStamped, TotalRows, EnterprisesLogos);
 
     
     
     
        //  if (IsStampRulePopUps == "POINTLOYALTYCARD")
        //  {
        //      FloatLoyaltyCardPointShow(StampCampaignNames, globalLatestPointCampaignCode, EnterprisesLogos, EnterpriseNames, EnterpriseAccNos);
     
        //  } else {
            
        //  }
     
        
     
     
     
     
     
        
     }
    // var AyohaMerchantReward_FREEZE_Y = 220; // fallback

    // Di global / controller scope
var AyohaMerchantReward_FREEZE_Y        = 220;   // fallback
var AyohaMerchantReward_ListModeInner   = false; // false = parent scroll, true = list scroll
var AyohaMerchantReward_FREEZE_COMPUTED = false; // sudah kira offset atau belum

     function AyohaMerchantReward_containerDashboardMerchantRewardScroller() {


        var vh = Ext.Viewport.getWindowHeight();    // tinggi viewport semasa (CSS px)

        // contoh kira tinggi untuk container hijau (list zone)
        var headerH = Ext.getCmp('containerAyohaMerchantRedemptionHeader_ButtonPerks_Master').element.getHeight();
        //var searchH = Ext.getCmp('containerAyohaMerchantRewardBottom_Search').element.getHeight();
        var searchH = 48;
        var bottomH = Ext.getCmp('containerMyAccount_Dashboard_MenuBottom').element.getHeight();
        
        var zoneH   = vh - headerH - searchH - bottomH;
        globalAyohaMerchantRewardlistZoneH = zoneH - 170; // tolak padding 10px top & bottom

        // var outer = Ext.getCmp('containerDashboardMerchantRewardScroller');
        // var list  = Ext.getCmp('listcarouselAyohaMerchantRewards_Point_Eligible');
    
        // if (!outer || !outer.getScrollable) return;
    
        // // reset state
        // AyohaMerchantReward_ListModeInner   = false;
        // AyohaMerchantReward_FREEZE_COMPUTED = false;
        // AyohaMerchantReward_FREEZE_Y        = 220;
    
        // // pastikan parent start di atas
        // var s = outer.getScrollable().getScroller();
        // s.scrollTo(0, 0);
    
        // // list: mula-mula JANGAN scroll
        // if (list) {
        //     list.setScrollable(false);
        // }
      
    }
    

    function AyohaMerchantReward_Initialized_SearchText(){
        document.getElementById("txtStampPerksSearch").addEventListener("keyup", AyohaMerchantReward_txtStampPerksSearch_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStoreOnKeyUp);
        document.getElementById("txtPointPerksSearch").addEventListener("keyup", AyohaMerchantReward_txtPointPerksSearch_DataStore_PointCampaignRedeemLoadByPointRedeemStatusStoreOnKeyUp);
        document.getElementById("txtVoucherPerksSearch").addEventListener("keyup", AyohaMerchantReward_txtVoucherPerksSearch_DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStoreOnKeyUp);
        document.getElementById("txtContestPerksSearch").addEventListener("keyup", AyohaMerchantReward_txtContestPerksSearch_DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStoreStoreOnKeyUp);
        document.getElementById("txtEventPerksSearch").addEventListener("keyup", AyohaMerchantReward_txtEventPerksSearch_DataStore_EventCampaignRedeemLoadByEventRedeemStatusStoreOnKeyUp);
        document.getElementById("txtDiscountPerksSearch").addEventListener("keyup", AyohaMerchantReward_txtDiscountPerksSearch_DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStoreOnKeyUp);
        document.getElementById("txtDiscountPerksSearch_OnlineOfflineDiscount").addEventListener("keyup", AyohaMerchantReward_txtDiscountPerksSearch_OnlineOfflineDiscount_DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStoreOnKeyUp);
    }

    
var globalAyohaMerchantReward_StampFilter;
    function AyohaMerchantReward_txtStampPerksSearch_DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStoreOnKeyUp(){
        _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.clearFilter();
        _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.clearFilter();

        var queryString = document.getElementById('txtStampPerksSearch').value;
   
    console.log('queryString: ' + queryString);
    if(globalAyohaMerchantReward_StampFilter !="Expired"){
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_AyohaUserDashBoard_StampCardLoadByStampedRedeemStatusStore.clearFilter();
            return false;
        }
        return;
    }else{

        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_AyohaUserDashBoardStampCardLoadByStampedRedeemExpiredStore.clearFilter();
            return false;
        }
    }
    
       
    
    }

    function AyohaMerchantReward_txtPointPerksSearch_DataStore_PointCampaignRedeemLoadByPointRedeemStatusStoreOnKeyUp(){
        _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.clearFilter();

        var queryString = document.getElementById('txtPointPerksSearch').value;
   
  
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_PointCampaignRedeemLoadByPointRedeemStatusStore.clearFilter();
            return false;
        }
        return;
    
       
    
    }

    function AyohaMerchantReward_txtVoucherPerksSearch_DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStoreOnKeyUp(){
        _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.clearFilter();

        var queryString = document.getElementById('txtVoucherPerksSearch').value;
   
  
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_VoucherCampaignRedeemLoadByVoucherRedeemStatusStore.clearFilter();
            return false;
        }
        return;
    
       
    
    }
    
    function AyohaMerchantReward_txtContestPerksSearch_DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStoreStoreOnKeyUp(){
        _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.clearFilter();

        var queryString = document.getElementById('txtContestPerksSearch').value;
   
  
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_ContestCampaignRedeem_LoadByContestRedeemStatusStore.clearFilter();
            return false;
        }
        return;
    
       
    
    }
    

    function AyohaMerchantReward_txtEventPerksSearch_DataStore_EventCampaignRedeemLoadByEventRedeemStatusStoreOnKeyUp(){
        _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.clearFilter();

        var queryString = document.getElementById('txtEventPerksSearch').value;
   
  
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('SearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_EventCampaignRedeemLoadByEventRedeemStatusStore.clearFilter();
            return false;
        }
        return;
    
       
    
    }
    


    function AyohaMerchantReward_txtDiscountPerksSearch_DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStoreOnKeyUp(){
        _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.clearFilter();

        var queryString = document.getElementById('txtDiscountPerksSearch').value;
   
  
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('ModifiedDiscountEndDate'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_DiscountCampaignRedeem_LoadByDiscountRedeemStatusStore.clearFilter();
            return false;
        }
        return;
    
       
    
    }


    function AyohaMerchantReward_txtDiscountPerksSearch_OnlineOfflineDiscount_DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStoreOnKeyUp(){
        _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.clearFilter();

        var queryString = document.getElementById('txtDiscountPerksSearch_OnlineOfflineDiscount').value;
   
  
        if (queryString) {
            
    
            var thisRegEx = new RegExp(queryString, "i");
            _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.filterBy(function (record) {
                if (thisRegEx.test(record.get('ModifiedSearchCol'))) {
                    console.log('ada0');
    
                  
                    return true;
    
                };
                return false;
                console.log('tiada1');
    
                //  return false;
            });
           // countEnterprisesLoadAyohaMerchantListStore = _DataStore_EnterprisesLoadByMerchantCategory_temp.getCount();
            //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
        }
    
    
        else {
            _DataStore_DiscountCampaignRedeemLoadByDiscountRedeemStatus_OnlineOfflineStore.clearFilter();
            return false;
        }
        return;
    
       
    
    }

    // Call this after you get the counts from server/SQL
function setStampPerkCounts(eligible, redeem, approved, expired) {
    // Helper: set text "(n)" or empty if 0 / null
    function applyCount(spanId, value) {
      var el = document.getElementById(spanId);
      if (!el) return;
  
      if (value && value > 0) {
        el.textContent = '(' + value + ')';
      } else {
        el.textContent = ''; // no bracket if kosong
      }
    }
  
    applyCount('cntStampEligible', eligible);
    applyCount('cntStampRedeem',   redeem);
    applyCount('cntStampApproved', approved);
    applyCount('cntStampExpired',  expired);
  }

  function setPointPerkCounts(eligible, redeem, approved, expired) {
    // Helper: set text "(n)" or empty if 0 / null
    function applyCount(spanId, value) {
      var el = document.getElementById(spanId);
      if (!el) return;
  
      if (value && value > 0) {
        el.textContent = '(' + value + ')';
      } else {
        el.textContent = ''; // no bracket if kosong
      }
    }
  
    applyCount('cntPointEligible', eligible);
    applyCount('cntPointRedeem',   redeem);
    applyCount('cntPointApproved', approved);
    applyCount('cntPointExpired',  expired);
  }


  function setVoucherPerkCounts(eligible, redeem, approved, expired) {
    // Helper: set text "(n)" or empty if 0 / null
    function applyCount(spanId, value) {
      var el = document.getElementById(spanId);
      if (!el) return;
  
      if (value && value > 0) {
        el.textContent = '(' + value + ')';
      } else {
        el.textContent = ''; // no bracket if kosong
      }
    }
  
    applyCount('cntVoucherEligible', eligible);
    applyCount('cntVoucherRedeem',   redeem);
    applyCount('cntVoucherApproved', approved);
    applyCount('cntVoucherExpired',  expired);
  }

  function setContestPerkCounts(eligible, redeem, approved, expired) {
    // Helper: set text "(n)" or empty if 0 / null
    function applyCount(spanId, value) {
      var el = document.getElementById(spanId);
      if (!el) return;
  
      if (value && value > 0) {
        el.textContent = '(' + value + ')';
      } else {
        el.textContent = ''; // no bracket if kosong
      }
    }
  
    applyCount('cntContestEligible', eligible);
    applyCount('cntContestRedeem',   redeem);
    applyCount('cntContestApproved', approved);
    applyCount('cntContestExpired',  expired);
  }


  function setDiscountPerkCounts(eligible, redeem, approved, expired) {
    // Helper: set text "(n)" or empty if 0 / null
    function applyCount(spanId, value) {
      var el = document.getElementById(spanId);
      if (!el) return;
  
      if (value && value > 0) {
        el.textContent = '(' + value + ')';
      } else {
        el.textContent = ''; // no bracket if kosong
      }
    }
  
    applyCount('cntDiscountEligible', eligible);
    applyCount('cntDiscountRedeemOnline',   redeem);
    applyCount('cntDiscountRedeemOffline', approved);
    applyCount('cntDiscountExpired',  expired);
  }




  function setEventPerkCounts(eligible, redeem, approved, expired) {
    // Helper: set text "(n)" or empty if 0 / null
    function applyCount(spanId, value) {
      var el = document.getElementById(spanId);
      if (!el) return;
  
      if (value && value > 0) {
        el.textContent = '(' + value + ')';
      } else {
        el.textContent = ''; // no bracket if kosong
      }
    }
  
    applyCount('cntEventEligible', eligible);
    applyCount('cntEventRedeem',   redeem);
    applyCount('cntEventApproved', approved);
    applyCount('cntEventExpired',  expired);
  }
