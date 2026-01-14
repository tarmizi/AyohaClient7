Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward', {

});

var _FloatPanel_AyohaReward;


var isFloatPanel_AyohaRewardOpen = 'N';

var _FloatPanel_AyohaReward_isFirstLoad = "N";








function FloatPanel_AyohaReward() {

    _FloatPanel_AyohaReward =
     Ext.create('Ext.Container', {
        zIndex: 110,
        xtype: 'container',
        width: '100%',
        height: '100%',
        id: 'FloatPanel_AyohaRewardListContentID',
        styleHtmlContent: true,
        centered: true,
        
        // --- START: Key Changes for Backdrop ---
        modal: false, // Use Sencha's modal handling
        hideOnMaskTap: false, // Prevent closing on tap
        layout: {
            type: 'fit',
            // pack: 'start',
            // align: 'center'

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

      // style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       style: 'background-color:white;',


         items: [

            {
                xtype: 'container',
                id: 'containerFloatPanel_AyohaReward',
                width: '100%',
                height: '100%',
                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
               style: "background-color: transparent;",
      
      
      
                //style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
                //style: "background-color: #F35B57;",
                title: 'DashboardAyohaReward',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                   // pack: 'start',
                    //pack: 'center',
                   // align: 'top'
      
                },
                scrollable: {
                    direction: 'vertical',
                    directionLock: true,
                    indicators: false,
                    bounces: false,
                    outOfBoundRestrictFactor: 0,
                    //threshold: 20,
                    scroller: {
                        listeners: {
                            scroll: function (scroller, x, y, eOpts) {
                              //  console.log('[scrollable][on scroll]x=' + x + ', y=' + y);
                                if (y <= 0) {
                                 
                                   // console.log('sampai scrollable')
                                    scroller.scrollTo({
                                        x: 0,
                                        y: 0
                                    });
                                    return
                                }
                            },
                            //scrollend: function (scroller, x, y, eOpts) {
                            //    //console.log('[scrollable][on scrollend]x=' + x + ', y=' + y);
                            //    //if (y <= 0) {
                            //    //    console.log('sampai')
                            //    //    scroller.scrollTo({
                            //    //        x: 0,
                            //    //        y: 0
                            //    //    });
                            //    //}
      
                               
                            //}
                        }
                    }
                },
            
                items: [
      
              
      
        
    //                {
      
    //                    xtype: 'container',
    //                    width: '100%',
    //                    height: 60,
    //                    // width: 40,
    //                    // docked: 'top',
      
    //                    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //                    //hidden: true,
      
    //                    id: 'containerFloatPanel_AyohaReward_DashboardHeader',
    //                   /// style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
    //                   // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
    //                   style: 'background-color:transparent;',
    //                   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
    //                    layout: {
    //                        type: 'hbox',
    //                        pack: 'center',
    //                        align: 'center',
    //                    },
      
      
      
      
    //                    // hidden:true,
    //                    items:
    //                           [
      
                         
    // {

    //     xtype: 'container',
    //     width: '100%',
    //     docked: 'top',
    //     height: 40,
    //     // width: 40,

    //     //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //     //hidden: true,

    //     id: 'containerFloatPanel_AyohaRewardTopHeader',
    //     style: {
    //         // background: '#D25959',
    //         background: 'transparent',
    //         // border: '2px'
    //     },
    //     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    //     // style: 'border-bottom:2px solid #D25959;background-color:transparent',
    //     layout: {
    //         type: 'hbox',
    //         pack: 'center',
    //         align: 'center',
    //     },
    //     // hidden:true,
    //     items:
    //            [


    //                          {
    //                              xtype: 'button',
    //                              id: 'btnFloatPanel_AyohaRewardBack',
    //                              margin: '10 0 0 5',
    //                              height: 30,
    //                              width: 35,
    //                              // iconCls: 'list',
    //                              html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
    //                              ui: 'plain',
    //                              handler: function () {
    //                                 FloatPanel_AyohaRewardHide();
    //                                  // FloatPanel_AyohaRewardHide();
    //                                  // FloatPanel_AyohaReward_AddCardHide();
                                     
    //                                  //  FloatPanel_AyohaReward_AddCardHide();

    //                              }
    //                          },

    //                           {
    //                               xtype: 'spacer',

    //                           },
    //                           {
    //                             margin: '10 10 0 0',
    //                             id: 'htmlFloatPanel_AyohaReward_TitleHeaderTxt',

    //                             html: '<div style="color:black;text-align: right;font-size:14px;width:100%;"><b>Membership Loyalty Stamp</b></div>'
    //                         },
    //                           {
    //                             xtype: 'button',
    //                             margin: '10 0 0 -10',
    //                             id: 'btnFloatPanel_AyohaReward_CardIcon',
    //                             height: 35,
    //                             width: 35,
    //                             //hidden:true,
    //                             // iconCls: 'list',
    //                             html: '<div ><img src="resources/icons/stampedFeature01.png" width="25" height="25" alt="Company Name"></div>',
    //                             ui: 'plain',
    //                             handler: function () {

    //                             }
    //                         },
                              

    //                         {
    //                             xtype: 'spacer',
    //                             width: 10,
    //                         },
                                  









    //            ]

    // },
      
      
      
      
      
    //                           ]
      
    //                },
                   
                   
                
      
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  {
                       xtype: 'container',
                   
                       id: 'DashboardFloatPanel_AyohaReward',
                       name: 'nameDashboardFloatPanel_AyohaReward',                
                       //width: '100%',
                       //height: '100%',
                      
                       width: '100%',
                   // height: 480,
                    height: 380,
                      // disable:true,
                       style: 'background-color:transparent',
                    
                     margin: '0 0 0 0',
                    //margin: '-322 0 0 0',
                       items: [
                          {
                           //  xtype: 'carousel',
                             xtype: 'container',
                              id: 'mainDashboardFloatPanel_AyohaRewardContainer',
                              name: 'namemainDashboardFloatPanel_AyohaRewardContainer',
                              height: 390,
                              width: '100%',
                              indicator: true,
                              style: 'background-color:transparent',
                             
      
                                                                items:[
      
      
                                                                  ///////////////////////////////// Ayoha Reward Container /////////////////////////////////
       {
                                 xtype: 'container',
                                 
                                 //style: 'background-image: url("resources/icons/bgfront06.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                                // style: 'background-image: url("resources/icons/AyohaHeader04.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                               
                                style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                               // style: 'background-image: url("resources/icons/bgfront15.png"); background-size: 100% 390px;background-repeat: no-repeat;',
                                 
                                 width: '100%',
                                 height: 390,
                                 title: 'Dashboard_AyohaReward_AyohaMerchant',
                               // style: "background-color: transparent;",
                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'center'
      
                                 },
                                 items: [
      
////// head
{
          
    xtype: 'container',
    width: '100%',
 // height: 100,
    // width: 40,
    // docked: 'top',

    //  title: '<font size="3" color="white">Live Tracking Map</font>',
    //hidden: true,

    id: 'containerFloatPanel_AyohaReward_DashboardHeader',
   /// style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
   // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
   style: 'background-color:transparent;',
   // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                 id: 'btnFloatPanel_AyohaRewardDashboardBack',
                 margin: '10 0 0 5',
                 height: 30,
                 width: 35,
                 // iconCls: 'list',
                 html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                 ui: 'plain',
                 handler: function () {
                    FloatPanel_AyohaRewardHide();

                 }
             },

              {
                  xtype: 'spacer',

              },
              {
                margin: '10 10 0 0',
                id: 'htmlFloatPanel_AyohaRewardDashboard_TitleHeaderTxt',
               // html: '<div style="color:white;text-align: left;font-size:14px;width:100%;"><b>My Ayoha Reward Membership</b></div>'
                html: '<font size="2" color="white"><b>Ayoha Reward Membership</b></font>'
            },
        
              
              {
                xtype: 'button',
                margin: '10 0 0 -10',
                id: 'btnFloatPanel_AyohaReward_MainDashboard_CardIcon',
                height: 35,
                width: 35,
                //hidden:true,
                // iconCls: 'list',
                html: '<div><img src="resources/icons/Logo/LogoWhiteSimplifed.png" width="25" height="25" alt="Company Name"></div>',
                ui: 'plain',
                handler: function () {

                }
            },
              

            {
                xtype: 'spacer',
                width: 10,
            },
                












           ]

},

///




                              
                                  {
      
                                      xtype: 'container',
                                      id: 'containerFloatPanel_AyohaReward_MembershipInfo_main',
                                      //hidden: true,
                                      style: "background-color: transparent;",
                                      margin: '-10 0 0 0',
                                     // margin: '50 0 0 0',
                                      width: '100%',
                                      height: 320,  
                                      //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                      layout: {
                                          type: 'vbox',
                                          pack: 'center',
                                          align: 'center'
             
                                      },
                                      items: [
             
                                                 {
                                                     xtype: 'container',
                                                     //  style: 'background-color:#f7347a;border-radius: 50%;',
                                                     // style: 'background-color:#C72CB4;border-radius: 50%;border:2px solid purple',
             
             
                                                     style: "background-color: transparent;",
                                                     //  style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9); border-radius: 50%;border:2px solid #fac',
             
             
                                                     margin: '0 0 0 0',
                                                     id: 'containerFloatPanel_AyohaReward_MembershipInfo',
                                                     name: 'namecontainerFloatPanel_AyohaReward_MembershipInfo',
                                                    // zIndex: 200,
                                                     width: 230,
                                                     height: 230,
                                                     layout: {
                                                         type: 'vbox',
                                                         pack: 'center',
                                                         align: 'center'
             
                                                     },
                                                     items: [
             
             
      
      {
                xtype: 'container',
                                                             width: '100%',
                                                             height: 10,
                                                             style: "background-color: transparent;",
      },
                                                         {
                                                          id: 'containerFloatPanel_AyohaReward_MembershipInfo_Dashboard',
                                                  
      
      
      
      
      
      
      
      
      
      
                                                                html: '<div style="width: min(82vw, 350px); max-width: 400px; margin: 14px auto; padding: 16px;'+
            ' box-sizing:border-box; color:#fff; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial;'+
            ' background: rgba(255,255,255,0.12);'+
            ' backdrop-filter: blur(14px) saturate(120%); -webkit-backdrop-filter: blur(14px) saturate(120%);'+
            ' border:2px solid #fac; border-radius: 18px; box-shadow: 0 12px 28px rgba(0,0,0,.28);">'+
      
              // Header
              '<div style="display:flex; align-items:flex-end; justify-content:space-between; gap:12px; margin-bottom:14px;">'+
                '<div style="min-width:0;">'+
                  '<div style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; margin-bottom:2px; font-weight:700; white-space:nowrap;">Membership No</div>'+
                  '<div id="txtFloatPanel_AyohaReward_MembershipNo" style="font-size:clamp(12px, 3.4vw, 14px); font-weight:1000; overflow:hidden; text-overflow:ellipsis;">12323</div>'+
                '</div>'+
                '<div style="text-align:right; min-width:0;">'+
                  '<div style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; font-weight:700; white-space:nowrap;">Membership Since:</div>'+
                  '<div id="txtFloatPanel_AyohaReward_MembershipSince" style="font-size:clamp(12px, 3.4vw, 14px); font-weight:1000; overflow:hidden; text-overflow:ellipsis;">Jan 2023</div>'+
                '</div>'+
              '</div>'+
      
              // Two columns side by side
              '<div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:nowrap;">'+
      
                // Left box
                '<div onclick="FloatPanel_AyohaReward_PointTransactionsShow();" '+
                     'style="flex:1; text-align:center; padding:14px 10px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.25);">'+
                //  '<div id="txtDashboard_AyohaPoint" style="font-size:clamp(22px, 6.4vw, 28px); font-weight:800; margin:8px 0 0 0;">2353</div>'+
                  '<div id="txtFloatPanel_AyohaReward_AyohaRewardPoint" class="odometer" style="font-size:clamp(22px, 6.4vw, 28px); font-weight:800; margin:8px 0 0 0;">2353</div>'+
                  '<div style="font-size:clamp(14px, 2.7vw, 12px); opacity:.9; margin:-2px 0 0 0; font-weight:800;">Ayoha Point</div>'+
                '</div>'+
      
                // Right box
                '<div onclick="FloatPanel_MyAccountRankDescriptionShow();" '+
                     'style="flex:1; text-align:center; padding:14px 10px; border-radius:14px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.25);">'+
                  '<div style="margin-bottom:6px;">'+
                    '<img id="imgFloatPanel_AyohaReward_RankingIcon" src="resources/icons/Logo/LogoWhiteSimplifed.png" alt="Gold Tier" '+
                         'style="width:44px; height:44px; display:block; margin:0 auto; object-fit:contain;">'+
                  '</div>'+
                  '<div id="txtFloatPanel_AyohaReward_RankingIcon" style="font-size:clamp(14px, 3.2vw, 13px); font-weight:800; margin:-6px 0 0 0; white-space:wrap; overflow:hidden; text-overflow:ellipsis;">Non Ayoha Member</div>'+
                  '<div id="txtFloatPanel_AyohaReward_MembershipTier" style="font-size:clamp(10px, 2.7vw, 12px); opacity:.9; margin:-2px 0 0 0; font-weight:700;">Membership Tier</div>'+
                '</div>'+
      
              '</div>'+
            '</div>'
      
                                                      },
                                                      
                                                      
                                                       
                                                         
                                                     ]
                                                     // html: '<img src="resources/icons/ayohaReward01.gif" style="width: 230px; height: 230px;" />',
                                                 },
                                            
      
      
                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  margin: '0 0 0 0',
                                                 height: 60,     
                                                 // height: 350,                                        
                                                 
                                                  style: 'background-color:transparent;',
                                                  layout: {
                                                      type: 'vbox',
                                                     // type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'
                                                  }, 
                                                  items:[
                                                      {
                                                          width: '80%',
                                                          margin: '10 0 0 0',
      html:'<div  class="tier-head">'+
      '<span style="margin:20px 0px 0px 10px">Next Membership Tier</span>'+
      '<span id="txtFloatPanel_AyohaReward_NextRanking" style="margin:20px -80px 0px 0px"><b>Black Iron</b></span><span style="margin:5px 5px 0px 0px"><img  id="imgFloatPanel_AyohaReward_NextRankingIcon" src="resources/icons/ayohaRankingIcon/blackIron.png" style="width: 30px; height: 30px;" /></span>'+
      '</div>'+
      
      '<div style="margin:0px 0px 0px 0px" class="progress" aria-label="Progress to next tier" role="progressbar" aria-valuemin="0" aria-valuemax="5000" aria-valuenow="2353">'+
      '<div  class="bar" id="tierBarFloatPanel_AyohaReward"></div>'+
      '<div class="label" id="tierLabelFloatPanel_AyohaReward"></div>'+
      '</div>',
                                                      },
                                                      {
                                                          xtype: 'container',
                                                          width: '100%',
                                                          hidden: true,
                                                          //zIndex:50,
                                                          //hidden: true,
                                                          margin: '0 0 0 0',
                                                          style: 'background-color:transparent',
                                                          layout: {
                                                          type: 'vbox',
                                                          pack: 'center',
                                                          align: 'center',
                                                          },
                                                          items: [
                             //{
                             //                                               margin: '0 0 0 14',
                             //                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             //                                               html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Membership Cards</b></div>'
                             //                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                             //                                           },
                             {
                              id: 'containerFloatPanel_AyohaReward_MembershipInfoRankIcon',
                              xtype: 'container',
                              name:'containerNameFloatPanel_AyohaReward_MembershipInfoRankIcon',
                             // style: 'background-color:yellow',
                             hidden: true,
                            //  margin: '-200 0 0 140',
                             style: 'background-color:transparent;',
                              height: 42,
                              width: 42,
                              html: '<div  style="width:22px;height:22px;background-color:transparent;"><img src="resources/icons/Logo/LogoWhiteSimplifed.png" alt="Image" style="width:42px;height:42px;"></div>',
                                    
      
                          },
                              {
                                  margin: '0 0 0 0',
                                  width:'100%',
                                  hidden: true,
                                  id: 'htmlFloatPanel_AyohaReward_MembershipInfoRankIconText',
                                  html: '<div style="color:white;text-align: center;font-size:16px;width:100%;margin:0px 0px 0px 0px"><b>Non Ayoha Member</b></div>'
                                
                               
                              },
                              {
                                  margin: '-5 0 0 0',
                                  width:'100%',
                                  hidden: true,
                                  html: '<div onclick="FloatPanel_MyAccountRankDescriptionShow();" style="color:white;text-align: center;font-size:10px;width:100%;margin:0px 0px 0px 0px">Your Ayoha Membership Tier</div>'
                               
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
      
                   {
                    xtype: 'container',
                    width: '100%',
                 // hidden: true,
                    height:2300,
                    id:'containerFloatPanel_AyohaReward_MainContainer',
                  
                    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                   // style: 'background-color:transparent',
                    style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items:[









                     //Ayoha reward redemption//

                                {
                                    xtype: 'container',
                                    width: '100%',
                                    id:'containerFloatPanel_AyohaReward_MainContainerRedemption',
                                    margin: '0 0 0 0',
                                    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [
                                         {
                                             margin: '10 0 0 14',
                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                             html: '<div style="color:black;text-align: center;font-size:14px;width:100%;"><b>Ayoha Point Redemption</b></div>'
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },
                                         {
                                             xtype: 'spacer'
                                         },
                                          {
                                              xtype: 'button',
                                              id: 'btnFloatPanel_AyohaReward_MainContainerRedemptionList',
                                              //hidden:true,
                                              //  badgeText: '1',
                                              margin: '15 10 0 0',
                                              height: 35,
                                              width: 35,
                                              html: '<img src="resources/icons/myredeemption.png" width="25" height="25" alt="Company Name">',
                                              ui: 'plain',
                                              handler: function () {
                                                  FloatPanel_AyohaReward_RedemptionHistoryShow();
                                              }
                                          },



                                    ]
                                },
                                {
                                    xtype: 'container',
                                    width: '100%',
                                     hidden: true,
                                    margin: '-7 0 0 0',
                                    id: 'containerFloatPanel_AyohaReward_MainContainerRedemptionVerifiedUser',
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
                                    items: [
                                         {
                                             margin: '-8 0 0 14',
                                             id: 'htmlFloatPanel_AyohaReward_MainContainerRedemptionVerifiedUser',
                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                             html: '<div style="color:black;text-align: center;font-size:10px;width:100%;">- Ayoha Membership Only -</div>'
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },
                                         {
                                             xtype: 'spacer'
                                         },




                                    ]
                                },



                                {
                                    xtype: 'container',
                                    id: 'containerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption',

                                    // hidden: true,
                                   style: "background-color: transparent;",
                                   // style:"background:linear-gradient(180deg, #FFF8E1 0%, #FFE7B7 100%);",                                   
                                    margin: '5 0 0 0',
                                    width: '100%',
                                    //height: 350,
                                    height: 380,
                                    //  style: 'border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;background: transparent;border-radius: 20px 20px 20px 20px;box-shadow: 5px 10px 18px #888888;',
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items: [



                                        {
                                            xtype: 'container',
                                            margin: '0 0 0 0',
                                            width: '8%',
                                            id: 'containerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_back',
                                            // height: 350,
                                            height: 400,
                                            style: 'background-color:transparent',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            }, items: [

                                                     {
                                                         xtype: 'button',
                                                         margin: '-50 0 0 0',
                                                         id: 'btnFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_back',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple2.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {

                                                             //Ext.getCmp('carousel_containerAyohaRewardRedemption').setShowAnimation('slideIn');
                                                             // Ext.getCmp('carousel_containerAyohaRewardRedemption').setShowAnimation('slideIn');

                                                             var crsl = Ext.getCmp('carouselFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption');
                                                             crsl.previous();
                                                         }
                                                     },

                                            ]
                                        },





  {
      xtype: 'carousel',
      //width: '95%',
      //height: 80,
      margin: '-2 0 0 0',
      width: '84%',
      id: 'carouselFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption',
      // height: 350,
      height: 380,
      items: [





{
    xtype: 'container',
    // xtype: 'carousel',
    //width: '95%',
    //height: 80,
    margin: '5 0 0 0',
    width: '100%',
    id: 'containerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel0',
    height: 350,
    // height: 440,
    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            //width: '95%',
            //height: 80,
            //margin: '12 0 0 0',
            width: '100%',
            height: 30,
            //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
            //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            style: 'background-color:transparent',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center',
            },
            items: [




                 {
                     margin: '-10 0 0 0',
                     id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APoint0',
                     html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
                 },
                {
                    margin: '-12 0 0 3',
                    id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointTxt0',
                    html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
                },



            ]

        },




        {


            //xtype: 'button',
            height: 250,
            width: '100%',
            margin: '-2 0 0 0',
            //zIndex: 400,
            id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0',
            name: 'nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0',
            html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

            //ui: 'plain',
            //handler: function () {

            //}


        },



    {
        margin: '-20 0 0 0',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemTxt0',
        html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
    },
     {
         margin: '-2 0 0 0',
         id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemPriceTxt0',
         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
     },

    {
        margin: '5 0 0 0',
        width: '100%',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemRedeemButton0',
        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(0)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">🎉 Redeem Now</button></div>'
    },


    ]

},



///////////////////////////

{
    xtype: 'container',
    // xtype: 'carousel',
    hidden: false,
    //width: '95%',
    //height: 80,
    margin: '5 0 0 0',
    width: '100%',
    id: 'containerFloatPanel_AyohaReward_MainContainerContainerAyohaRewardRedemption_carosel1',
    height: 350,
    // height: 440,
    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            //width: '95%',
            //height: 80,
            //margin: '12 0 0 0',
            width: '100%',
            height: 30,
            //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
            //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            style: 'background-color:transparent',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center',
            },
            items: [




                 {
                     margin: '-10 0 0 0',
                     id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APoint1',
                     html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
                 },
                {
                    margin: '-12 0 0 3',
                    id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointTxt1',
                    html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
                },



            ]

        },




        {


            //xtype: 'button',
            height: 250,
            width: '100%',
            margin: '-2 0 0 0',
            //zIndex: 400,
            id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1',          
            name: 'nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1',
            html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

            //ui: 'plain',
            //handler: function () {

            //}


        },



    {
        margin: '-20 0 0 0',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemTxt1',
        html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
    },
     {
         margin: '-2 0 0 0',
         id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemPriceTxt1',
         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
     },

    {
        margin: '5 0 0 0',
        width: '100%',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemRedeemButton1',
        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(1)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
    },


    ]

},



{
    xtype: 'container',
    // xtype: 'carousel',
    hidden: false,
    //width: '95%',
    //height: 80,
    margin: '5 0 0 0',
    width: '100%',
    id: 'containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardRedemption_carosel2',
    height: 350,
    // height: 440,
    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            //width: '95%',
            //height: 80,
            //margin: '12 0 0 0',
            width: '100%',
            height: 30,
            //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
            //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            style: 'background-color:transparent',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center',
            },
            items: [




                 {
                     margin: '-10 0 0 0',
                     id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APoint2',
                     html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
                 },
                {
                    margin: '-12 0 0 3',
                    id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointTxt2',
                    html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
                },



            ]

        },




        {


            //xtype: 'button',
            height: 250,
            width: '100%',
            margin: '-2 0 0 0',
            //zIndex: 400,
            id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2',
            name: 'nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2',
            html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

            //ui: 'plain',
            //handler: function () {

            //}


        },



    {
        margin: '-20 0 0 0',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemTxt2',
        html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
    },
     {
         margin: '-2 0 0 0',
         id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemPriceTxt2',
         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
     },

    {
        margin: '5 0 0 0',
        width: '100%',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemRedeemButton2',
        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(2)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
    },


    ]

},



{
    xtype: 'container',
    // xtype: 'carousel',
    hidden: false,
    //width: '95%',
    //height: 80,
    margin: '5 0 0 0',
    width: '100%',
    id: 'containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardRedemption_carosel3',
    height: 350,
    // height: 440,
    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
    style: 'background-color:transparent',
    layout: {
        type: 'vbox',
        pack: 'center',
        align: 'center',
    },
    items: [
        {
            xtype: 'container',
            //width: '95%',
            //height: 80,
            //margin: '12 0 0 0',
            width: '100%',
            height: 30,
            //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
            //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            style: 'background-color:transparent',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
            // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
            layout: {
                type: 'hbox',
                pack: 'center',
                align: 'center',
            },
            items: [




                 {
                     margin: '-10 0 0 0',
                     id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APoint3',
                     html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
                 },
                {
                    margin: '-12 0 0 3',
                    id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointTxt3',
                    html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
                },



            ]

        },




        {


            //xtype: 'button',
            height: 250,
            width: '100%',
            margin: '-2 0 0 0',
            //zIndex: 400,
            id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3',           
            name: 'nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3',
            html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

            //ui: 'plain',
            //handler: function () {

            //}


        },



    {
        margin: '-20 0 0 0',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemTxt3',
        html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
    },
     {
         margin: '-2 0 0 0',
         id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemPriceTxt3',
         html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
     },

    {
        margin: '5 0 0 0',
        width: '100%',
        id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemRedeemButton3',
        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(3)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
    },


    ]

},






         {
             xtype: 'container',
             // xtype: 'carousel',
             hidden: false,
             //width: '95%',
             //height: 80,
             margin: '5 0 0 0',
             width: '100%',
             id: 'containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardRedemption_carosel4',
             height: 350,
             // height: 440,
             // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: transparent;border-radius: 10px 10px 10px 10px;',
             style: 'background-color:transparent',
             layout: {
                 type: 'vbox',
                 pack: 'center',
                 align: 'center',
             },
             items: [
                 {
                     xtype: 'container',
                     //width: '95%',
                     //height: 80,
                     //margin: '12 0 0 0',
                     width: '100%',
                     height: 30,
                     //style: 'border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: transparent;border-radius: 10px 10px 10px 10px; box-shadow: 5px 10px 18px #888888;',
                     //// style: 'border-right:1px solid white;border-left:1px solid white;border-bottom:1px solid white;border-top:1px solid white;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                     style: 'background-color:transparent',
                     // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 10px 10px 10px 10px;',
                     // style: 'border-right:0.1px solid #ECECEC;border-left:0.1px solid #ECECEC;border-bottom:0.1px solid #ECECEC;border-top:0.1px solid #ECECEC;background-color: white;border-radius: 10px 10px 10px 10px;',
                     layout: {
                         type: 'hbox',
                         pack: 'center',
                         align: 'center',
                     },
                     items: [




                          {
                              margin: '-10 0 0 0',
                              id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APoint4',
                              html: '<div style="color:purple;text-align: center;font-size:30px;width:100%;font-weight:bold">150000</div>',
                          },
                         {
                            margin: '-12 0 0 3',
                             id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointTxt4',
                             html: '<div style="color:purple;text-align: center;font-size:14px;width:100%;font-weight:bold">Ayoha Point</div>',
                         },



                     ]

                 },




                 {


                     //xtype: 'button',
                     height: 250,
                     width: '100%',
                     margin: '-2 0 0 0',
                     //zIndex: 400,
                     id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4',
                     name: 'nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4',
                     html: '<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="resources/icons/Samsung Galaxy.png" alt="Image" style="width:70%;height:230px;"></div>',

                     //ui: 'plain',
                     //handler: function () {

                     //}


                 },



             {
                 margin: '-20 0 0 0',
                 id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemTxt4',
                 html: '<div style="color:black;text-align: center;font-size:18px;width:100%;font-weight:bold">HP Pavillion Notebook</div>',
             },
              {
                  margin: '-2 0 0 0',
                  id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemPriceTxt4',
                  html: '<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM2500.00</div>',
              },

             {
                 margin: '5 0 0 0',
                 width: '100%',
                 id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemRedeemButton4',
                 html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="DashboardAyohaPointRedemption_openRedeemItem(4)" class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Redeem</button></div>'
             },


             ]

         },

////



      ]
  },



       {
           xtype: 'container',
           margin: '0 0 0 0',
           width: '8%',
           id: 'containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardRedemption_carosel_next',
           // height: 350,
           height: 380,
           style: 'background-color:transparent',
           layout: {
               type: 'vbox',
               pack: 'center',
               align: 'center',
           }, items: [

                    {
                        xtype: 'button',
                        margin: '-50 0 0 -10',
                        id: 'btnFloatPanel_AyohaReward_MainContainerBtnAyohaRewardRedemption_carosel_next',
                        height: 30,
                        width: 35,
                        // iconCls: 'list',
                        html: '<div ><img src="resources/icons/nextPurple2.png" width="25" height="20" alt="Company Name"></div>',
                        ui: 'plain',
                        handler: function () {
                            var crsl = Ext.getCmp('carouselFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption');
                            crsl.next();
                        }
                    },

           ]
       },
















                                    ]
                                },





///////////////////////////////////////////////// start ayoha reward contest ///////////////

{
    xtype: 'container',
    width: '100%',
    id:'containerFloatPanel_AyohaReward_MainContainerAyohaRewardContest',
    //hidden:true,
    //margin: '-10 0 0 0',
    margin: '35 0 0 0',
    // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 0px 15px 15px 0px;',
    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
    style: 'background-color:transparent',
    layout: {
        type: 'hbox',
        pack: 'center',
        align: 'center',
    },
    items: [
         {
             margin: '10 0 0 14',
             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Reward Contest</b></div>'
             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
         },
         {
             xtype: 'spacer'
         },
          {
              xtype: 'button',
              id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingInfo',
              //hidden:true,
              //  badgeText: '1',
              margin: '15 10 0 0',
              height: 35,
              width: 35,
              html: '<img src="resources/icons/entercontest01.png" width="25" height="25" alt="Company Name">',
              ui: 'plain',
              handler: function () {
                  // FloatPanel_AyohaReward_ContestAdvertisementShow();
                  FloatPanel_AyohaReward_ContestHistoryShow();
              }
          },



    ]
},

                      {
                          xtype: 'container',
                          width: '100%',
                          hidden: true,
                          margin: '-7 0 0 0',
                          id: 'containerFloatPanel_AyohaReward_MainContainerContestEndDate',
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
                          items: [
                               {
                                   margin: '-8 0 0 14',
                                   id: 'htmlFloatPanel_AyohaReward_MainContainerJoinContestDate',
                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                   html: '<div style="color:black;text-align: center;font-size:14px;width:100%;">Spent And Win</div>'
                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                               },
                               {
                                   xtype: 'spacer'
                               },
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingInfoxx',
                                    hidden: true,
                                    //  badgeText: '1',
                                    margin: '0 10 0 0',
                                    height: 35,
                                    width: 35,
                                    html: '<img src="resources/icons/contest01.png" width="25" height="25" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                        FloatPanel_AyohaReward_ContestAdvertisementShow();
                                    }
                                },



                          ]
                      },



                      {
                          xtype: 'container',
                          width: '40%',
                          //width: 100,
                          height: 150,
                          zIndex: 300,
                          // hidden: true,
                          margin: '-30 0 0 0',
                          id: 'containerFloatPanel_AyohaReward_MainContainerContestYourRanking',
                          name: 'nameFloatPanel_AyohaReward_MainContainerContestYourRanking',
                          //style: {
                          //     background: '#D25959',
                          //   // background: 'transparent',
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
                                   margin: '0 0 0 0',
                                   id: 'htmlFloatPanel_AyohaReward_MainContainerContestYourRanking',
                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                   html: '<div style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Your Ranking !</div>'
                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                               },

                              {
                                  margin: '0 0 0 0',
                                  id: 'htmlFloatPanel_AyohaReward_MainContainerContestYourRankingNo',
                                  //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                  html: '<div style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">?</div>'
                                  // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                              },

                               {
                                   margin: '-80 0 0 0',
                                   id: 'htmlFloatPanel_AyohaReward_MainContainerContestYourRankingview',
                                   //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                   html: '<div  style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">*View Ranking</div>'
                                   // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                               },

                          ]
                      },

                      {
                          xtype: 'container',
                          width: '100%',
                          height: 400,
                          margin: '-100 0 0 5',
                          name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar',
                          id:'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBarID',
                          //style: {
                          //    // background: '#D25959',
                          //    background: 'rgba(76, 175, 80, 0.3);',
                          //    // border: '2px'
                          //},
                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                          style: 'background-color:transparent;border-bottom:2px none white;',
                          //  style: 'background-image: url("resources/icons/sportlight03-removebg-preview.png"); background-size: 100% 100%;background-repeat: no-repeat;',
                          layout: {
                              type: 'hbox',
                              pack: 'center',
                              align: 'center',
                          },

                          items: [
                               {
                                   xtype: 'container',
                                   width: '31%',
                                   height: 400,
                                   margin: '0 0 0 0',
                                   name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01',
                                   //style: {
                                   //    // background: '#D25959',
                                   //    background: 'rgba(76, 175, 80, 0.3);',
                                   //    // border: '2px'
                                   //},
                                   //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                   style: 'background-color:transparent',
                                   layout: {
                                       type: 'vbox',
                                       pack: 'end',
                                       align: 'center',
                                   },

                                   items: [

                                        //{
                                        //    xtype: 'button',
                                        //    height: 70,
                                        //    width: 70,
                                        //    margin: '0 0 0 3',
                                        //    id: 'btnDashboard_User_AyohaRewardRanking01',
                                        //    //badgeText: "2",
                                        //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/AzuImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                        //    ui: 'plain',
                                        //    handler: function () {



                                        //    }
                                        //},




                                        {
                                            //xtype: 'button',

                                            xtype: 'container',
                                            style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                            height: 80,
                                            width: 80,
                                            margin: '-38 0 0 0',
                                            id: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking02',
                                            //badgeText: "2",
                                            //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                            //ui: 'plain',
                                            //handler: function () {



                                            //}

                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                {
                                                    height: 70,
                                                    width: 70,
                                                    id: 'imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking02',
                                                    html: '<img src="resources/icons/AzuImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                                }
                                            ]
                                        },




                                         {
                                             margin: '0 0 0 0',
                                             id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking02_Name',
                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Azuliana</b></div>'
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },
                                          {
                                              margin: '-2 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking02_AyohaPoint',
                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                              html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>2000 Point</b></div>'
                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                          },

                                          {
                                              xtype: 'container',
                                              width: 100,
                                              height: 130,
                                              margin: '0 0 0 0',
                                              zIndex: 50,
                                              name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar02_Bar',
                                              //style: {
                                              //    // background: '#D25959',
                                              //    background: 'rgba(76, 175, 80, 0.3);',
                                              //    // border: '2px'
                                              //},
                                              //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                              style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                              //  style: 'background-color:#AFEEEE;border-radius: 5px 5px 0px 0px;border-top:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-right:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-bottom:2px none white;border-left:2px solid #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',


                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>2</b></div>'
                                                  }
                                              ]

                                          }



                                   ]
                               },


                                {
                                    xtype: 'container',
                                    width: '31%',
                                    height: 400,
                                    margin: '0 0 0 6',
                                    name: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01',
                                    //style: {
                                    //    // background: '#D25959',
                                    //    background: 'rgba(76, 175, 80, 0.3);',
                                    //    // border: '2px'
                                    //},
                                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'end',
                                        align: 'center',
                                    },

                                    items: [


                                        {
                                            //xtype: 'button',

                                            xtype: 'container',
                                            style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.5);',
                                            height: 90,
                                            width: 90,
                                            margin: '-38 0 0 0',
                                            id: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking01',
                                            //badgeText: "2",
                                            //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                            //ui: 'plain',
                                            //handler: function () {



                                            //}

                                            layout: {
                                                type: 'vbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items: [
                                                {
                                                    height: 80,
                                                    width: 80,
                                                    id: 'imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking01',
                                                    html: '<img src="resources/icons/founder.jpg"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                                }
                                            ]
                                        },
                                         {
                                             margin: '0 0 0 0',
                                             id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking01_Name',
                                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                             html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>Mizi</b></div>'
                                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                         },
                                          {
                                              margin: '-2 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking01_AyohaPoint',
                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                              html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>4870 Point</b></div>'
                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                          },

                                           {
                                               xtype: 'container',
                                               width: 110,
                                               height: 220,
                                               zIndex: 50,
                                               margin: '0 0 0 0',
                                               name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01_Bar',
                                               //style: {
                                               //    // background: '#D25959',
                                               //    background: 'rgba(76, 175, 80, 0.3);',
                                               //    // border: '2px'
                                               //},
                                               //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                               style: 'background-color:#FF69B4;border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                               layout: {
                                                   type: 'vbox',
                                                   pack: 'center',
                                                   align: 'center',
                                               },
                                               items: [
                                                   {
                                                       html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>1</b></div>'
                                                   }
                                               ]

                                           }


                                    ]
                                },





                                 {
                                     xtype: 'container',
                                     width: '31%',
                                     height: 400,
                                     margin: '0 0 0 0',
                                     name: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03',
                                     //style: {
                                     //    // background: '#D25959',
                                     //    background: 'rgba(76, 175, 80, 0.3);',
                                     //    // border: '2px'
                                     //},
                                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                     style: 'background-color:transparent',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'end',
                                         align: 'center',
                                     },

                                     items: [


                                          //{
                                          //    xtype: 'button',
                                          //    height: 70,
                                          //    width: 70,
                                          //    margin: '20 0 0 0',
                                          //    id: 'btnDashboard_User_AyohaRewardRanking03',
                                          //    //badgeText: "2",
                                          //    html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;background: transparent;border-radius: 0px 0px 0px 0px;width:60px;height:60px" ><img src="resources/icons/familyPic/anisAqilahImg.jpg"  style="width: 60px; height: 60px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px"></div>',
                                          //    ui: 'plain',
                                          //    handler: function () {



                                          //    }
                                          //},

                                          {
                                              //xtype: 'button',

                                              xtype: 'container',
                                              style: 'border-radius: 50%;background-color:rgba(255, 255, 255, 0.3);',
                                              height: 80,
                                              width: 80,
                                              margin: '-38 0 0 0',
                                              id: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking03',
                                              //badgeText: "2",
                                              //  html: '<div style="border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none white;border-radius: 50%;width:100px;height:100px;background-color:rgba(255, 255, 255, 0.3);" ><img src="resources/icons/founder.jpg"  style="width: 90px; height: 90px; border:2px solid white; border-radius: 50%;  margin:-1px 0px 0px -5px;"></div>',
                                              //ui: 'plain',
                                              //handler: function () {



                                              //}

                                              layout: {
                                                  type: 'vbox',
                                                  pack: 'center',
                                                  align: 'center',
                                              },
                                              items: [
                                                  {
                                                      height: 70,
                                                      width: 70,
                                                      id: 'imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking03',
                                                      html: '<img src="resources/icons/anisAqilahImg.jpg"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">',
                                                  }
                                              ]
                                          },
                                          {
                                              margin: '0 0 0 0',
                                              id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking03_Name',
                                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                              html: '<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>A.Aqilah</b></div>'
                                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                          },
                                           {
                                               margin: '-2 0 0 0',
                                               id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking03_AyohaPoint',
                                               //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                               html: '<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>1120 Point</b></div>'
                                               // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                           },

                                              {
                                                  xtype: 'container',
                                                  width: 90,
                                                  height: 90,
                                                  zIndex: 50,
                                                  margin: '0 0 0 0',
                                                  name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03_Bar',
                                                  //style: {
                                                  //    // background: '#D25959',
                                                  //    background: 'rgba(76, 175, 80, 0.3);',
                                                  //    // border: '2px'
                                                  //},
                                                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                                                  style: 'background-color:#FADC77; border-radius: 5px 5px 0px 0px;border-top:2px solid white;border-right:2px solid white;border-bottom:2px none white;border-left:2px solid white;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center',
                                                  },
                                                  items: [
                                                      {
                                                          html: '<div style="color:white;text-align: center;font-size:30px;width:100%;"><b>3</b></div>'
                                                      }
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
                          margin: '0 0 0 10',
                          name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingLine',
                          id:'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingLineID',
                          //style: {
                          //    // background: '#D25959',
                          //    background: 'rgba(76, 175, 80, 0.3);',
                          //    // border: '2px'
                          //},
                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                          // style: 'background-color:transparent;border-bottom:2px solid white;',
                          style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                          layout: {
                              type: 'hbox',
                              pack: 'center',
                              align: 'center',
                          },


                          items: [
                               {
                                   xtype: 'button',
                                   id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingEnterContest',
                                   // hidden:true,
                                   //  badgeText: '1',
                                   margin: '-550 0 0 0',
                                   height: 30,
                                   width: 30,
                                   //html: '<img src="resources/icons/shiningIcon.png" width="20" height="20" alt="Company Name">',
                                   ui: 'plain',
                                   handler: function () {
                                       // FloatPanel_AyohaReward_TopTenRankingShow();
                                       FloatPanel_AyohaReward_ContestAdvertisementShow();
                                   }
                               },
                               {
                                   margin: '-620 0 0 -145',
                                   zIndex: -100,
                                   hidden: true,
                                   html: '<img src="resources/icons/splashbg03.png" width="600px" height="600px" alt="Company Name">'
                                   // html: '<img src="resources/icons/splashbg05.png" width="600px" height="600px" alt="Company Name">'
                               },
                                {
                                    xtype: 'button',
                                    id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingEnterContest2',
                                    //  badgeText: '1',
                                    margin: '-500 0 0 -645',

                                    height: 50,
                                    width: 50,
                                    // html: '<img src="resources/icons/shiningIcon.png" width="40" height="40" alt="Company Name">',
                                    ui: 'plain',
                                    handler: function () {
                                        // FloatPanel_AyohaReward_TopTenRankingShow();
                                        FloatPanel_AyohaReward_ContestAdvertisementShow();
                                    }
                                },
                                //{
                                //    xtype: 'button',
                                //    id: 'btnMyDashboard_AyohaRewardRankingEnterContest2',
                                //    //  badgeText: '1',
                                //    margin: '-500 0 0 60',

                                //    height: 50,
                                //    width: 50,
                                //    html: '<img src="resources/icons/shiningIcon.png" width="40" height="40" alt="Company Name">',
                                //    ui: 'plain',
                                //    handler: function () {
                                //        // FloatPanel_AyohaReward_TopTenRankingShow();
                                //        FloatPanel_AyohaReward_ContestAdvertisementShow();
                                //    }
                                //},
                               {
                                   xtype: 'spacer'
                               },
                                 {
                                     xtype: 'button',
                                     id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingEnterContest3',
                                     hidden: true,
                                     //  badgeText: '1',
                                     margin: '-585 -20 0 0',
                                     height: 60,
                                     width: 60,
                                     //   html: '<img src="resources/icons/shiningIcon.png" width="50" height="50" alt="Company Name">',
                                     ui: 'plain',
                                     handler: function () {
                                         // FloatPanel_AyohaReward_TopTenRankingShow();
                                         FloatPanel_AyohaReward_ContestAdvertisementShow();
                                     }
                                 },
                                //{
                                //    xtype: 'button',
                                //    id: 'btnMyDashboard_AyohaRewardRankingContest',
                                //    //  badgeText: '1',
                                //    //zIndex:-50,
                                //    margin: '-500 -20 0 0',
                                //    height: 160,
                                //    width: 160,
                                //    html: '<img src="resources/icons/enterContest-removebg-preview.png" width="150" height="150" alt="Company Name">',
                                //    ui: 'plain',
                                //    handler: function () {
                                //        // FloatPanel_AyohaReward_TopTenRankingShow();
                                //        FloatPanel_AyohaReward_ContestAdvertisementShow();
                                //    }
                                //},

                                {
                                    xtype: 'container',
                                    name: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContest',
                                    //  badgeText: '1',
                                    //zIndex:-50,
                                    margin: '-750 -20 0 0',
                                    height: 160,
                                    width: 160,
                                    style: 'background: transparent;',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center',
                                    },
                                    items: [

                                        {
                                            //hidden: true,
                                            id: 'imgFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContest',
                                            html: '<img src="resources/icons/enterContest-removebg-preview.png" width="160" height="160" alt="Company Name" class="blink_me">',
                                        },

                                    {
                                        hidden: true,
                                        id: 'imgFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContestShining',
                                        //html: '<img src="resources/icons/shiningIcon.png" width="60" height="60" alt="Company Name">',
                                        html: '<img src="resources/icons/contestLogo01.png" width="100" height="100" alt="Company Name">',
                                    },



                                    ]
                                    //  html: '<img src="resources/icons/enterContest-removebg-preview.png" width="150" height="150" alt="Company Name">',
                                    //ui: 'plain',
                                    //handler: function () {
                                    //    // FloatPanel_AyohaReward_TopTenRankingShow();
                                    //    FloatPanel_AyohaReward_ContestAdvertisementShow();
                                    //}
                                },
                          ]
                      },

                      {

                          xtype: 'container',
                          width: '100%',
                          height: 10,
                          margin: '0 0 0 0',
                          id:'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingID',
                          name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRanking',
                          //style: {
                          //    // background: '#D25959',
                          //    background: 'rgba(76, 175, 80, 0.3);',
                          //    // border: '2px'
                          //},
                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                          style: 'background-color:transparent;',
                          // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:4px solid #ECF0F1 ;background: transparent;border-radius: 0px 0px 0px 0px;',
                          layout: {
                              type: 'hbox',
                              pack: 'center',
                              align: 'center',
                          },
                          items: [
                             {
                                 xtype: 'button',
                                 id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingEnterContest4',
                                 //  badgeText: '1',
                                 margin: '0 0 0 0',
                                 hidden: true,
                                 height: 35,
                                 width: 35,
                                 //html: '<img src="resources/icons/shiningIcon.png" width="25" height="25" alt="Company Name">',
                                 ui: 'plain',
                                 handler: function () {
                                     // FloatPanel_AyohaReward_TopTenRankingShow();
                                     FloatPanel_AyohaReward_ContestAdvertisementShow();
                                 }
                             },

                              {

                                  xtype: 'container',
                                  hidden: true,
                                  //width: 160,
                                  height: 10,
                                  width: '100%',
                                  margin: '0 0 0 0',
                                  id: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtnID',
                                  name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtn',
                                  //style: {
                                  //    // background: '#D25959',
                                  //    background: 'rgba(76, 175, 80, 0.3);',
                                  //    // border: '2px'
                                  //},
                                  // style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;',
                                  style: 'background-color:transparent;',
                                  // style: 'border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: white;border-radius: 20px 20px 20px 20px;',
                                  layout: {
                                      type: 'vbox',
                                      pack: 'start',
                                      align: 'center',
                                  },
                                  items: [
                                      //{
                                      //    margin:'0 0 0 1',
                                      //     html: '<font size=2 color=grey>View My Ranking</font>',
                                      //},
                                      // {
                                      //     margin: '8 0 0 0',
                                      //     html: '<img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:-6px 0px 0px 5px;">',
                                      // }



                                      //{
                                      //    margin: '0 0 0 0',
                                      //    height: 40,
                                      //    width:40,
                                      //    html: '<img src="resources/icons/contestrule04.png"  style="width: 40px; height: 40px;   margin:0px 0px 0px 0px;">',
                                      //},
                                      {
                                          margin: '-10 0 0 38',
                                          id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingText',
                                          html: '<div style="background: transparent;width:90%;font-size: 11px;font-weight:normal;color:black;text-align:center;" >*<i>Dear contestant, please maintain your rank until the end of contest for entitlement to redeem the prize.</i></div>',
                                      },
                                        {
                                            margin: '5 0 0 0',
                                            id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingIcon',
                                            html: '<div style="background: transparent;width:100%;font-size: 11px;font-weight:normal;color:black;text-align:center;" ><img src="resources/icons/rankingpurple01.png"  style="width: 30px; height: 30px;   margin:0px 0px 0px 0px;"></div>',
                                        },
                                        {
                                            margin: '-5 0 0 0',
                                            id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingViewRanking',
                                            html: '<div style="background: transparent;width:100%;font-size: 11px;font-weight:normal;color:black;text-align:center;" ><u>View Ranking</u></div>',
                                        },

                                  ]
                              },





                              {
                                  xtype: 'container',

                                  width: '100%',
                                  height: 40,
                                  margin: '0 0 0 0',
                                  style: 'background-color:transparent;',
                                  id: 'containeFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtnID',
                                  name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtn',

                                  layout: {
                                      type: 'vbox',
                                      pack: 'center',
                                      align: 'center',
                                  },
                                  items: [



                                    {

                                        // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'
                                       // html: '<div class="buttonRedeemDashboard" >Enter Contest</div>',
                                        html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button class="buttonRedeemDashboard" style="margin:0px 0px 0px 0px;">Enter Contest</button></div>',
                                        width: '100%',
                                        height: 40,
                                        margin: '15 0 0 30',
                                        // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'

                                           },



// {
// xtype: 'spacer',
// width: '20%',
// height: 40,
// },

//                                       {
//                                         xtype: 'container',
//                                         width: '60%',
//                                         height: 40,
//                                         layout: {
//                                             type: 'vbox',
//                                             pack: 'center',
//                                             align: 'center',
//                                         },
//                                         items: [
                                          
//                                         ]






//                                       },
//                                       {
//                                         xtype: 'spacer',
//                                         width: '20%',
//                                         height: 40,
//                                         },
                                        // {

                                        //   //  html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'
                                        //     // html: '<img src="resources/icons/contest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'


                                        // },



                                  ]

                              },


                                   {
                                       xtype: 'spacer'
                                   },
                                    {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingEnterContest5',
                                        //  badgeText: '1',
                                        margin: '0 0 0 0',
                                        height: 25,
                                        width: 25,
                                        //  html: '<img src="resources/icons/shiningIcon.png" width="15" height="15" alt="Company Name">',
                                        ui: 'plain',
                                        handler: function () {
                                            // FloatPanel_AyohaReward_TopTenRankingShow();
                                            // FloatPanel_AyohaReward_ContestAdvertisementShow();
                                        }
                                    },
                          ]

                      },



                    




                      


                      ///////////////////////////////////////////////// End ayoha reward contest ///////////////







////////////////////////////////////////////AyohaTAPS Contest


{
    xtype: 'container',
    width: '100%',
    margin: '120 0 0 0',
    id: 'containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01',
    name: 'nameContainerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01',
    height: 270,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'center',
    },

    items: [
        {
            xtype: 'container',
            width: '100%',
            /// hidden:true,
            margin: '0 0 0 0',
            height: 10,

            //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
            style: 'background-color:transparent',
            layout: {
                type: 'hbox',
                pack: 'left',
                align: 'left',
            },
            items: [
                 {
                     margin: '0 0 0 18',
                     //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                     html: '<div style="color:black;text-align: center;font-size:14px;width:100%;">Ayoha TAP and Win</div>'
                     // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                 },
            ]
        },
         {
             xtype: 'container',
             width: '92%',
             /// hidden:true,
             margin: '15 0 0 0',
             height: 200,

             //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
             style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center',
             },
             items: [
                  {
                      height: 198,
                      width: '99%',
                      // margin: '0 0 0 14',
                      //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                      id: 'htmlFloatPanel_AyohaReward_MainContainerAyohaRewardContest1',
                      html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/ayohaTapContest.png"/>'
                      // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                  },
             ]
         },
         {
             xtype: 'container',

             width: '100%',
             height: 40,
             margin: '20 0 0 0',
             style: 'background-color:transparent;',
             id: 'containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01BtnID',
             name: 'nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01Btn',

             layout: {
                 type: 'hbox',
                 pack: 'center',
                 align: 'center',
             },
             items: [


                 {
                     id: 'htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01_TapChanceLeftTxt',
                    // html: '<div style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background:white;border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:black;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'
                     html: '<div class="buttonRedeemDashboard" >Enter Contest</div>'
                     // html: '<div  style="border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1 ;background: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:160px;height:40px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:10px 0px 0px -30px;">Enter Contest</div></div>'

                     

                 },
                   //{

                   //    html: '<img src="resources/icons/entercontest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'
                   //    // html: '<img src="resources/icons/contest01.png"  style="width: 30px; height: 30px;   margin:6px 0px 0px -50px;">'


                   //},



             ]

         },
    ]
},



                 //////////////////Ayoha Voucher////
                 {
                     xtype: 'container',
                     width: '100%',
                     id:'containerFloatPanel_AyohaReward_MainContainer_AyohaVoucher',
                     /// hidden:true,
                     margin: '120 0 0 0',
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
                     items: [
                          {
                              margin: '0 0 0 14',
                              //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                              id: 'htmlFloatPanel_AyohaReward_MainContainer_AyohaVaucherTxt',
                              html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Voucher</b></div>'
                              // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                          },
                           {
                               xtype: 'spacer'
                           },
         {

             margin: '0 14 0 0',
             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
             html: '<div onclick="FloatPanel_AyohaRewardVoucherList_AyohaRewardHomeShow();" style="color:black;text-align: center;font-size:12px;width:100%;"><u>View All</u></div>'
             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'

         }

                           //{
                           //    margin: '-4 0 0 14',
                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                           //    html: '<div style="color:black;text-align: center;font-size:12px;width:100%;">1.-Welcome/Opening Account Voucer</div>'
                           //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                           //},
                     ]
                 },



                  {
                      xtype: 'container',
                      width: '98%',
                      id: 'containerFloatPanel_AyohaReward_MainContainer_AyohaVoucherListID',
                      /// hidden:true,
                      margin: '-5 0 0 0',
                      height: 222,
                      style: 'background-color: white;',
                      //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                      //  style: 'background-color: white;border-left: 1px solid #D0D3D4;border-right: 1px solid #D0D3D4;border-bottom: 1px solid #D0D3D4;border-top: 1px solid #D0D3D4;box-shadow: 5px 10px 18px #888888;border-radius: 10px 10px 10px 10px;',
                      layout: {
                          type: 'vbox',
                          pack: 'center',
                          align: 'center',
                      },
                      items: [
                           {

                               id: 'listFloatPanel_AyohaReward_MainContainer_AyohaVoucherListID',
                               // margin: '-4 0 0 14',
                               // margin: '-5 0 0 0',
                               // store: _DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore,
                               // grouped: true,
                               xtype: 'dataview',
                               // xtype: 'list',
                               height: 200,
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
                               //itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;">Valid Until:{EntitledVoucherEndDate}</div><br><div style="margin:-26px 0px 0px 0px;text-align:left;color:#c800ffc9;font-family: Arial; font-size:10px;word-wrap: break-word;font-weight:bold;">Day Left:{DayLeft}</div></div>',
                               itemTpl: '<div onclick="FloatPanel_AyohaRewardVoucherDetailShow(' + "'" + '{VoucherName}' + "'" + ',' + "'" + '{VoucherImgPath}' + "'" + ',' + "'" + '{EntitledVoucherEndDate}' + "'" + ',' + "'" + '{DayLeft}' + "'" + ',' + "'" + '{VoucherCode}' + "'" + ',' + "'" + '{VoucherAmount}' + "'" + ');" style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="{VoucherImgPath}" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-4px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;font-weight:normal;width:100%"><table style="border-collapse:collapse;border-spacing:0;width:100%;" class="tg"><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:middle;word-break:normal">Valid Until:<b>{EntitledVoucherEndDate}</b></th><th style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;overflow:hidden;padding:0px 6px;text-align:right;vertical-align:middle;word-break:normal">Amount:<b>RM{VoucherAmount}</b></th></tr></thead><tbody><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 1px;text-align:left;vertical-align:top;word-break:normal;color:purple;font-weight:bold;" colspan="2"><div style="margin:-3px 0px 0px 0px">Day Left:{DayLeft}</div></td></tr></tbody></table></div></div>',
                               emptyText: '<div style="width:{ModifiedWidth}px; height: 200px; border:3px none white;padding:0px 0px;margin:0px 0px 0px 10px;"><img src="resources/icons/NotAvailableVoucher.png" style="width:99%; height: 160px; border:2px dashed grey;"/><br><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:9px;word-wrap: break-word;font-weight:normal;width:100%">*Vouchers will be given by ayoha reward to users when users reach a certain level of spending in the ayoha merchant online store and also certain special days such as religious days, national independence day, birthdays and so on.</div></div>',
                           },
                           //{
                           //    height: 198,
                           //    width: '100%',
                           //    // margin: '0 0 0 14',
                           //    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                           //    html: '<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="resources/icons/AyohaVoucher.png"/>'
                           //    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                           //},
                      ]
                  },


                 //////



              


/////////Ayoha Community
{
                    xtype: 'container',
                    width: '100%',
                    id: 'FloatPanel_AyohaReward_MainContainer_AyohaCommunity_Txt',
                    // hidden:true,
                    margin: '100 0 0 0',
                    style: {
                        // background: '#D25959',
                        background: 'transparent',
                        // border: '2px'
                    },
                    //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                    // style: 'border-bottom:2px solid #D25959;background-color:transparent',
                    layout: {
                        type: 'hbox',
                        pack: 'left',
                        align: 'left',
                    },
                    items: [
                         {
                             margin: '0 0 0 14',
                             //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                             html: '<div style="color:black;text-align: center;font-size:16px;width:100%;"><b>Ayoha Community (Comming Soon!)</b></div>'
                             // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                         },
                    ]
                },

                {
                    xtype: 'container',
                    margin: '60 0 0 0',
                    style: 'background-image: url("resources/icons/Ayohacommunity01.png"); background-size: 100% 400px;background-repeat: no-repeat;',
                    width: '100%',
                    height: 400,
                },
                 {
                     xtype: 'container',
                     width: '100%',
                     height: 50,
                     margin: '0 0 0 20',
                     hidden: true,
                     id: 'FloatPanel_AyohaReward_MainContainer_FloatingAdvertisement_Icon',
                     //style: {
                     //    // background: '#D25959',
                     //    background: 'rgba(76, 175, 80, 0.3);',
                     //    // border: '2px'
                     //},
                     //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                     style: 'background-color:transparent',

                     layout: {
                         type: 'hbox',
                         pack: 'left',
                         align: 'left',
                     },
                     items: [
                         {
                             html: '<div class="blink_me"><img src="resources/icons/floatAdvertisement03.png" width="100" height="105" alt="Company Name"  OnClick="FloatPanel_FloatingAdvertisementShow()"></div>',
                             name: 'nameFloatPanel_AyohaReward_MainContainer_FloatAdvertisementIcon',
                             height: 105,
                             width: 100,
                         },
                     ]

                 },

                // {
                //     xtype: 'panel',
                //     //  style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
                //     height: 200
                // },


/////////Ayoha Community END


            ]
        },
                         
      
    
      
                ]
      
            },




                        


         ]


     












     });
    return _FloatPanel_AyohaReward;



}



function FloatPanel_AyohaRewardShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward());
    this.overlay.show();
    isFloatPanel_AyohaRewardOpen = 'Y';
    AddRoutePages("FloatPanel_AyohaRewardHide()");

    FloatPanel_AyohaRewardSetupMembershipData();
   
   


}





function FloatPanel_AyohaRewardHide() {
    if (isFloatPanel_AyohaRewardOpen == "Y") {
        _FloatPanel_AyohaReward.hide(); isFloatPanel_AyohaRewardOpen = 'N';
        _FloatPanel_AyohaReward_isFirstLoad = "N";
        RemovePages("FloatPanel_AyohaRewardHide()");
    }
   
}

function FloatPanel_AyohaRewardSetupMembershipData(){
    document.getElementById("txtFloatPanel_AyohaReward_MembershipSince").textContent =convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate);         
    document.getElementById("txtFloatPanel_AyohaReward_AyohaRewardPoint").textContent = AppState.FloatPanel_AyohaReward.AyohaRewardPointBalance;


    if (convertDateToDayMonthYear(globalLogginAyohaUser_UserVerifiedDate)=="Non Ayoha Member"){
        document.getElementById("txtFloatPanel_AyohaReward_MembershipTier").style.visibility = "hidden";
        document.getElementById("txtFloatPanel_AyohaReward_MembershipNo").textContent = "00-00-00-00";
    }else{
    // Show
    document.getElementById("txtFloatPanel_AyohaReward_MembershipTier").style.visibility = "visible";
    document.getElementById("txtFloatPanel_AyohaReward_MembershipNo").textContent = AppState.FloatPanel_AyohaReward.MembershipNo;
    }



if(AppState.LoginAyohaUser.AyohaUserisUserVerified=="YES"){

    Ext.get('imgFloatPanel_AyohaReward_RankingIcon').dom.src = AppState.FloatPanel_AyohaReward.imgRankStar;
    Ext.get('imgFloatPanel_AyohaReward_NextRankingIcon').dom.src = AppState.FloatPanel_AyohaReward.imgNextRankStar;
   
   document.getElementById("txtFloatPanel_AyohaReward_RankingIcon").textContent = AppState.FloatPanel_AyohaReward.TextRankStar;
   document.getElementById("txtFloatPanel_AyohaReward_NextRanking").textContent = AppState.FloatPanel_AyohaReward.TextNextRankStar;
   const txtFloatPanel_AyohaReward_NextRanking = document.getElementById("txtFloatPanel_AyohaReward_NextRanking");
   txtFloatPanel_AyohaReward_NextRanking.style.fontWeight = "bold";
  

   if (AppState.FloatPanel_AyohaReward.TextNextRankStar == "Black Iron") {
    txtFloatPanel_AyohaReward_NextRanking.style.margin = "20px -100px 0px 0px";
}
if (AppState.FloatPanel_AyohaReward.TextNextRankStar == "Bronze") {
    txtFloatPanel_AyohaReward_NextRanking.style.margin = "20px -100px 0px 0px";
}
if (AppState.FloatPanel_AyohaReward.TextNextRankStar == "Silver") {    
    txtFloatPanel_AyohaReward_NextRanking.style.margin = "20px -100px 0px 0px";
}
if (AppState.FloatPanel_AyohaReward.TextNextRankStar == "Gold") { 
    txtFloatPanel_AyohaReward_NextRanking.style.margin = "20px -80px 0px 0px";
}
if (AppState.FloatPanel_AyohaReward.TextNextRankStar == "Platinum") { 
    txtFloatPanel_AyohaReward_NextRanking.style.margin = "20px -80px 0px 0px";
}

  
  
   



}
FloatPanel_AyohaReward_NextRanking();
   FloatPanel_AyohaReward_SetupRewardRedemptionCarosel();
   FloatPanel_AyohaReward_AyohaRewardPointRewardRankingStore();
   FloatPanel_AyohaReward_AyohaRewardContestantLoadByContestCodeStore();
   FloatPanel_AyohaReward_AyohaRewardTapAndWin();
   FloatPanel_AyohaReward_AyohaRewardAyohaVoucher();
    





   var containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0 = containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg0.on('tap',
      function (event, node, options, eOpts) {
          DashboardAyohaPointRedemption_openRedeemItem(0);
      }
    );


    var containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1 = containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg1.on('tap',
      function (event, node, options, eOpts) {
          DashboardAyohaPointRedemption_openRedeemItem(1);
      }
    );


    var containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2 = containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg2.on('tap',
      function (event, node, options, eOpts) {
          DashboardAyohaPointRedemption_openRedeemItem(2);
      }
    );

    var containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3 = containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg3.on('tap',
      function (event, node, options, eOpts) {
          DashboardAyohaPointRedemption_openRedeemItem(3);
      }
    );



    var containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4 = containerViewnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg4.on('tap',
      function (event, node, options, eOpts) {
          DashboardAyohaPointRedemption_openRedeemItem(4);
      }
    );





    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtn = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtn]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtn = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtn.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtn.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_ContestAdvertisementShow();
      }
    );





    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtn = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtn]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtn = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtn.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtn.on('tap',
      function (event, node, options, eOpts) {

        FloatPanel_AyohaReward_ViewMyRankingShow();
      }
    );




    var containerViewnameFloatPanel_AyohaReward_MainContainerContestYourRanking = Ext.ComponentQuery.query('container[name=nameFloatPanel_AyohaReward_MainContainerContestYourRanking]')[0];
    var containerViewElnameFloatPanel_AyohaReward_MainContainerContestYourRanking = containerViewnameFloatPanel_AyohaReward_MainContainerContestYourRanking.element;
    containerViewElnameFloatPanel_AyohaReward_MainContainerContestYourRanking.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_ViewMyRankingShow();
      }
    );






    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01_Bar = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01_Bar]')[0];
    //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01_Bar = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01_Bar.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar01_Bar.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_ViewMyRankingShow();
      }
    );

    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar02_Bar = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar02_Bar]')[0];
    //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar02_Bar = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar02_Bar.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar02_Bar.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_ViewMyRankingShow();
      }
    );


    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03_Bar = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03_Bar]')[0];
    //var containerView3 = Ext.ComponentQuery.query('container[name=containerContestYourRankingName]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03_Bar = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03_Bar.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingBar03_Bar.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_ViewMyRankingShow();
      }
    );




    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01 = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01 = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_AyohaTapContestShow();

      }
    );



    var containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01Btn = Ext.ComponentQuery.query('container[name=nameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01Btn]')[0];
    var containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01Btn = containerViewnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01Btn.element;
    containerViewElnameContainerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01Btn.on('tap',
      function (event, node, options, eOpts) {

          FloatPanel_AyohaReward_AyohaTapContestShow();

      }
    );
}




function FloatPanel_AyohaReward_updateProgress(current, target){
    const pct = Math.max(0, Math.min(100, (current/target)*100));
    const bar   = document.getElementById('tierBarFloatPanel_AyohaReward');
    const label = document.getElementById('tierLabelFloatPanel_AyohaReward');
    if (!bar || !label) return; // safety
  
    bar.style.width = pct + '%';
    label.textContent = `${current.toLocaleString()} / ${target.toLocaleString()}`;
    const progressEl = document.querySelector('.progress');
    if (progressEl) progressEl.setAttribute('aria-valuenow', String(current));
  }
  
  
  
  function FloatPanel_AyohaReward_NextRanking(){
      const currentPoints = AppState.FloatPanel_AyohaReward.AyohaRewardPointBalance;
      const nextTierPoints = AppState.FloatPanel_AyohaReward.AyohaMember_NextRankPoint;
      FloatPanel_AyohaReward_updateProgress(currentPoints, nextTierPoints);
  
      // Optional: animate count-up
      let val = 0, step = Math.ceil(currentPoints / 60);
      const timer = setInterval(() => {
        val = Math.min(currentPoints, val + step);
        FloatPanel_AyohaReward_updateProgress(val, nextTierPoints);
        if (val >= currentPoints) clearInterval(timer);
      }, 16);
  }





function FloatPanel_AyohaReward_SetupRewardRedemptionCarosel() {

 
    console.log(arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point.length);
    for (var i = 0; i < arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point.length; i++) {        
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APoint' + i).setHtml('<div style="color:purple;text-align: center;font-size:15px;width:100%;font-weight:bold">🎁' + arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_Point[i] + '- </div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointImg' + i).setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;font-weight:bold"><img src="' + arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemImage[i] + '" alt="Image" style="width:70%;height:230px;"></div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:15px;width:100%;font-weight:bold">' + arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemName[i] + '</div>');
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerAyohaRewardRedemption_carosel_APointNameItemPriceTxt' + i).setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;font-weight:normal">Worth RM' + arrAyohaRedeemPrizeLoadByAyohaUserGroupCode_ItemPrice[i] + '</div>');
    }
}



function FloatPanel_AyohaReward_AyohaRewardPointRewardRankingStore() {


    var ii = 1;
    // _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setExtraParam('RankingLevel', "ALL");
    // _DataStore_AyohaRewardPointRewardRankingStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointRewardRanking');
    // _DataStore_AyohaRewardPointRewardRankingStore.load();


    var task = Ext.create('Ext.util.DelayedTask', function () {
        var count = _DataStore_AyohaRewardPointRewardRankingStore.getCount();
        for (i = 0; i < count; i++) {
            var modelRecord = _DataStore_AyohaRewardPointRewardRankingStore.getAt(i);
            var AccountName = modelRecord.get('AccountName');
            var Photo = modelRecord.get('Photo');
            var AyohaPoint = modelRecord.get('AyohaPoint');
            var SubscriberAccNo = modelRecord.get('SubscriberAccNo');
            var JoinDate_DateOnly = modelRecord.get('JoinDate_DateOnly');
            var JoinDate_TimeOnly = modelRecord.get('JoinDate_TimeOnly');



            if (ii < 4 && i < 3) {
                if (ii == 1) {

                   
                    Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking0' + ii).setHtml('<img src="' + Photo + '"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking0' + ii + '_Name').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AccountName + '</b></div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking0' + ii + '_AyohaPoint').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>' + AyohaPoint + ' Point</b></div>');
                } else {
                    Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking0' + ii).setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking0' + ii + '_Name').setHtml('<div style="color:black;text-align: center;font-size:12px;width:100%;"><b>' + AccountName + '</b></div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking0' + ii + '_AyohaPoint').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;"><b>' + AyohaPoint + ' Point</b></div>');
                }


            }



            if (SubscriberAccNo == GetCurrAyohaUserAccountNo()) {

              myRankingNo = ii;
                // alert(JoinDate);

                globalJoinDate = JoinDate_DateOnly + ' ' + JoinDate_TimeOnly;
                //Ext.getCmp('htmlJoinContestDate').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;">Joined Date:' + JoinDate_DateOnly + '' + JoinDate_TimeOnly + '</div>');


                if (myRankingNo <= 10) {

                    if (myRankingNo == 1) {
                        //Ext.getCmp('imgDashboard_User_AyohaRewardRanking01').setHtml('<img src="' + Photo + '"  style="width: 80px; height: 80px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;" class="example-1">');
                        Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking01').setHtml('<img src="' + Photo + '"  style="width: 80px; height: 80px; border:2px solid grey; border-radius: 50%;  margin:0px 0px 0px 0px;" >');
                    }

                    if (myRankingNo == 2) {
                        //Ext.getCmp('imgDashboard_User_AyohaRewardRanking02').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;" class="example-1">');
                        Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking02').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:2px grey; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    }
                    if (myRankingNo == 3) {
                        // Ext.getCmp('imgDashboard_User_AyohaRewardRanking03').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:1px solid white; border-radius: 50%;  margin:0px 0px 0px 0px;"  class="example-1">');
                        Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRanking03').setHtml('<img src="' + Photo + '"  style="width: 70px; height: 70px; border:2px solid grey; border-radius: 50%;  margin:0px 0px 0px 0px;">');
                    }
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerContestYourRanking').setHtml('<div  class="blink_me" style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Hooray You in Ranking !</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerContestYourRankingNo').setHtml('<div class="blink_me" style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">' + myRankingNo + '</div>');

                } else {
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerContestYourRankingNo').setHtml('<div style="color:black;text-align: center;font-size:40px;font-weight:bold;width:100%;margin:-10px 0px 0px 0px;">' + myRankingNo + '</div>');
                    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerContestYourRanking').setHtml('<div style="color:black;text-align: center;font-size:10px;width:100%;margin:70px 0px 0px 0px;">Your Ranking !</div>');
                }


            }

            ii++;

        }
















        Ext.Viewport.setMasked(false);

    });
    task.delay(1000);

}



//contest spend and win
function FloatPanel_AyohaReward_AyohaRewardContestantLoadByContestCodeStore() {

    if(AppState.FloatPanel_AyohaReward.isButtonEnterContestOrViewMyRanking=="EnterContest"){
        Ext.getCmp('containeFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtnID').setHidden(false);
        Ext.getCmp('containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtnID').setHidden(true);

       
        Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContest').setHidden(false);
        Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContestShining').setHidden(true);
        Ext.getCmp('containerFloatPanel_AyohaReward_MainContainerContestEndDate').setHidden(false);
    }
    if(AppState.FloatPanel_AyohaReward.isButtonEnterContestOrViewMyRanking=="ViewMyRanking"){
        Ext.getCmp('containeFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtnID').setHidden(true);
            Ext.getCmp('containerFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingViewMyRankingBtnID').setHidden(false);

          
            Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContest').setHidden(true);
            Ext.getCmp('imgFloatPanel_AyohaReward_MainContainer_AyohaRewardRankingContestShining').setHidden(false);
            Ext.getCmp('containerFloatPanel_AyohaReward_MainContainerContestEndDate').setHidden(false);
    }


}

function FloatPanel_AyohaReward_AyohaRewardTapAndWin(){
    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainerAyohaRewardContest1').setHtml('<img style="width:100%;height:198px;border-radius: 10px 10px 10px 10px;" src="' + AppState.FloatPanel_AyohaReward.TapAndWinMainImg + '"/>');
    Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_User_AyohaRewardContest01_TapChanceLeftTxt').setHtml('<div style="border-right:2px solid #fac;border-left:2px solid #fac;border-bottom:2px solid #fac;border-top:2px solid #fac;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);border-radius: 20px 20px 20px 20px;width:250px;height:50px;font-size: 12px;font-weight:bold;color:white;text-align:center;vertical-align:middle;" ><div style="margin:-8px 0px 0px 0px;">You Have <font size=6px>' + AppState.FloatPanel_AyohaReward.AyohaTaAndWinTapBalance + '</font> Chance Left</div></div>');

    // Ext.getCmp('containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01').setHeight(270);
    // Ext.getCmp('containeFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtnID').setHidden(false);
    if(AppState.FloatPanel_AyohaReward.isContestTapAndWinActive>0){
        Ext.getCmp('containerFloatPanel_AyohaReward_MainContainer_containerAyohaRewardContest01').setHeight(210);
        Ext.getCmp('containeFloatPanel_AyohaReward_MainContainer_User_AyohaRewardRankingEnterContestBtnID').setHidden(true);
    }

   
}




function FloatPanel_AyohaReward_AyohaRewardAyohaVoucher(){
    var count =AppState.FloatPanel_AyohaReward.AyohaVoucherCount;
    
    Ext.getCmp('listFloatPanel_AyohaReward_MainContainer_AyohaVoucherListID').setStore(_DataStore_AyohaRewardVoucherEntitledUserLoadBySubscriberAccNoVoucherTypeStore);

    if (count < 1) {
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold">(0) Ayoha Vocher Left!</div>');
    }

    if (count == 1) {
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold"><font class="blink_me" size=4x>(' + count + ')</font> Redeemable Ayoha Voucher!</div>');
    }

    if (count > 1) {
        Ext.getCmp('htmlFloatPanel_AyohaReward_MainContainer_AyohaVaucherTxt').setHtml('<div style="color:black;text-align: center;font-size:16px;width:100%;font-weight:bold"><font class="blink_me" size=4x>(' + count + ')</font> Redeemable Ayoha Voucher!</div>');
    }
}





