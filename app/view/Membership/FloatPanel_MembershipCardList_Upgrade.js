




Ext.define('BuskartApp.view.Membership.FloatPanel_MembershipCardList_Upgrade', {

});

var _FloatPanel_MembershipCardList_Upgrade=null;
var _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo;
var _FloatPanel_MembershipCardList_Upgrade_MembershipCode;
var Index=0;
var isFloatPanel_MembershipCardList_UpgradeOpen = 'N';
var _AyohaSkipCarouselListenerOnce = false;
var CarouselIndex = 0;

var _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "N";


function FloatPanel_MembershipCardList_UpgradeCreateIfNeeded() {
    if (_FloatPanel_MembershipCardList_Upgrade && !_FloatPanel_MembershipCardList_Upgrade.destroyed) return;




    function AyohaBottomMenuItem(cfg) {
        return {
          xtype: 'container',
          id: cfg.containerId,
          cls: 'ayohaBottomNavItem' + (cfg.active ? ' is-active' : ''),
          layout: { type: 'vbox', pack: 'center', align: 'center' },
          items: [
            {
              xtype: 'button',
              id: cfg.btnId,
              ui: 'plain',
              width: 34,
              height: 34,
      
              cls: 'ayohaBottomNavBtn',
      
              // ✅ guna icon config (ExtJS akan set background-image pada .x-icon-el)
              icon: cfg.icon,
      
              handler: cfg.handler
            },
            {
              xtype: 'component',
              id: cfg.txtId,
              cls: 'ayohaBottomNavTxt',
              html:
                '<div class="l1">' + cfg.line1 + '</div>' +
                '<div class="l2">' + cfg.line2 + '</div>'
            }
          ]
        };
      }


    _FloatPanel_MembershipCardList_Upgrade =
    Ext.create('Ext.Container', {
        id: 'FloatPanel_MembershipCardList_UpgradeID',
        zIndex: 65,
        floated: true,
        centered: true,
        fullscreen: true,
        closeAction: 'hide',
      // closeAction: 'destroy',
        draggable: false,
        modal: false,
        styleHtmlContent: true,
        layout: 'fit',
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },
        style: ' background-color:white;',   
        listeners: {
 

            // ✅ kalau user tap mask, close macam standard
            beforehide: function () {
              // kalau hide dipanggil bukan dari function kita, block dulu
              // (optional: boleh allow kalau kau nak)
              return true;
            }
          },

        items: [
//             {

//                 xtype: 'container',
//                 width: '100%',
//                 docked: 'bottom',
//                 height: 40,
//                 //hidden:true,
//                 // width: 40,

//                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
//                 //hidden: true,
//                 //margin: '10 0 0 0',
//                 id: 'containerFloatPanel_MembershipCardList_UpgradeBottom',
//                 name: 'clickableContainerFloatPanel_MembershipCardList_UpgradeBottom',
//                 //style: {
//                 //    // background: '#D25959',
//                 //    background: 'transparent',
//                 //    // border: '2px'
//                 //},
//                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
//                 style: 'border-bottom:2px none #D25959;background-color:transparent',
//                 // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #d3d3d3;',
//                 layout: {
//                     type: 'fit',
//                     //pack: 'center',
//                     //align: 'center',
//                 },
//                 // hidden:true,
//                 items:
//                        [

//                             {
//                                 //xtype: 'button',
//                                 ////  align: 'stretch',

//                                 //ui: 'plain',
//                                 // width: '100%',
//                                 margin:'2 0 0 0',
//                                 height: 40,
//                                 id: 'btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard',
//                                 //hidden: true,
                              
//                                 html: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card !!!</button></div>',
//                                 //handler: function () {
//                                 //    getMembershipCard();
//                                 //    // FloatPanel_MembershipCardManagement_NewCardAdd_Save();
//                                 //},


//                             },



//  {
//      xtype: 'button',
//      //  align: 'stretch',

//      ui: 'plain',
//      width: '100%',
//      height: 40,
//      id: 'btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard',
//      hidden: true,
//      // width: '80%',
//      //style: {
//      //    background: '#FA8072',
//      //},
//      // padding: '10px',
//      //  text: '<font size=3px color=white><center><b>Register</b></center></font>',
//      //text: '<div class="blink_me"><button class="button3viewloyaltycard">Get Membership Card</button></div>',
//      text: '<button class="button3Deleteviewloyaltycard">Delete Membership Card</button>',
//      handler: function () {




//      },


//  },







//                        ]

//             },

            {

                xtype: 'container',
                width: '100%',
                docked:'top',
                // width: 40,

                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                //hidden: true,

                id: 'containerFloatPanel_MembershipCardList_UpgradeHeader',
                height: ayoha_HeaderHeight(),
                   style:ayohaThemeColor_Header(),
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
                                         id: 'btnFloatPanel_MembershipCardList_UpgradeBack',
                                         height: 30,
                                         width: 65,
                                         margin: '0 0 0 10',
                                         // iconCls: 'list',
                                         html: '<div ><img src="resources/icons/backwhite03Ori.png" width="25" height="20" alt="Company Name"></div>',
                                         ui: 'plain',
                                         handler: function () {
                                            FloatPanel_MembershipCardList_UpgradeHide(false);

                                             //FloatPanel_MembershipCardList_Upgrade_AddCardHide();
                                             //_FloatPanel_MembershipCardList_Upgrade.hide(Ext.fx.Animation({
                                             //    type: 'slideOut',
                                             //    direction: 'left',
                                             //    easing: 'cubic-bezier(.7,0,.7,1)',
                                             //    duration: 250

                                             //}));

                                         }
                                     },

                                      {
                                          xtype: 'spacer',

                                      },

                                       {
                                           margin: '0 15 0 0',                                          
                                           id: 'htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt',
                                         //  html: '<font size=2 color=black><b>Membership Card</b></font>'
                                           html:ayohaTheme_HeaderText('My Membership Card'),
                                       },

                                            











                       ]

            },



          


                    {
                        xtype: 'container',
                        width: '100%',
                        height: '100%',
                        //    margin: '0 0 0 0',
                       style: 'background-color: transparent',
                       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            
                            
                            {
                                style: 'background-color: transparent',
                                hidden:true,
                                id:'htmlFloatPanel_MembershipCardList_Upgrade_CardLevel',
                                html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.Gold Membership Card</div>',
                            },


                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_MembershipCardList_Upgrade_Loading',
                                width: '100%',
                                height: 200,
                                //hidden:true,
                                 style: "background-color: transparent",
                                //style: "background-color: #F35B57;",
                             //   style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [
                                      {
                                          xtype: 'container',
                                          id: 'containerFloatPanel_MembershipCardList_Upgrade_LoadingInner',
                                          width: '80%',
                                          height: 200,
                                          //hidden:true,
                                          // style: "background-color: transparent",
                                          //style: "background-color: #F35B57;",
                                          style: 'background-image: url("resources/icons/previewcardloadinglatest.gif"); background-size: 80% 80%;',
                                          
                                      },

                                ]

                            },
                           
                        

                            {
                                xtype: 'container',
                               
                                hidden: true,
                                id: 'FloatPanel_MembershipCardList_Upgrade_Carousel',
                                style: 'background-color: transparent',
                                width: '90%',
                                height: 220,
                                indicator: true,
                                listeners: {

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


                                margin: '20 0 0 0',
                                items: [



                                    
                                  {
                                      xtype: 'container',
                                      id: 'carouselFloatPanel_MembershipCardList_Upgrade_0',
                                      style: ' background-color: transparent',
                                      hidden:true,

                                      //'<div style="width:100%;text-align:right;margin:0px 0px 0px 0px;background-color: transparent;height:30px"></div>',
                                      height: 250,
                                      width: '100%',
                                      //  mode: 'image'
                                  },
                                  {
                                      xtype: 'container',
                                      id: 'carouselFloatPanel_MembershipCardList_Upgrade_1',
                                      hidden: true,                                    
                                      height: 250,
                                      width: '100%',
                                     
                                  },
                               //{
                               //    xtype: 'container',
                               //    id: 'carouselFloatPanel_MembershipCardList_Upgrade_2',
                               //    hidden: true,                                 
                               //    height: 250,
                               //    width: '100%',
                                 
                               //},
                               //  {
                               //      xtype: 'container',
                               //      id: 'carouselFloatPanel_MembershipCardList_Upgrade_3',
                               //      hidden: true,
                               //      height: 250,
                               //      width: '100%',
                                   
                               //  }, {
                               //      xtype: 'container',
                               //      id: 'carouselFloatPanel_MembershipCardList_Upgrade_4',
                               //      hidden: true,                                    
                               //      height: 250,
                               //      width: '100%',
                                   
                               //  },

                                ]
                            },



{
    xtype: 'container',
    width: '100%',
    style: 'background-color:transparent',
    height:10
},
                            {
                                xtype: 'container',
                                width: '100%',
                                style: 'background-color:white',
                              //  hidden:true,
                              //  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                layout: {
                                    type: 'hbox',
                                    pack: 'left',
                                    align: 'left'

                                },
                                //height: 50,
                                // margin:'10 0 0 0',
                                items: [

                                        //html: '<div class="x-list-item x-stretched x-list-item-tpl x-list-item-relative x-item-selected;background-color:black; color: floralwhite;"><div class="x-innerhtml" style="padding: 12px;"><div style="overfl' +
                                        //    'ow:auto;width:100%;height:100%;font-size:50%;background-color:black; color: floralwhite;"><span style="font-family: Arial; text-transform:uppercase;">' +
                                        //    '<div style="float:left;width:10%"><span style="font-family: Arial; text-transform:uppercase;">Date</div>' +
                                        //    '<div style="float:left;width:20%"><span style="font-family: Arial; text-transform:uppercase;">Stamped By</div >' +


                                        //    '</div></div></div>'
                                        {
xtype:'spacer',
width:25
                                        },
                                        {
                                            id: 'btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward',
                                            html: '<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Perks</u></div>',
                                        },

                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_MembershipCardList_Upgrade_EntitiledRewardOld',
                                             hidden: true,
                                             height: 22,
                                             width: '50%',
                                             // iconCls: 'list',
                                             html: '<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privileges</u></div>',
                                             ui: 'plain',
                                             handler: function () {
                                                
                                               
                                             }
                                         },
                                         {
                                             xtype: 'button',
                                             id: 'btnFloatPanel_MembershipCardList_Upgrade_EntitiledEnterprise',
                                             height: 22,
                                             hidden:true,
                                             width:'50%',
                                             // iconCls: 'list',
                                             html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:11px;">Membership Outlet</div>',
                                             ui: 'plain',
                                             handler: function () {
                                                
                                             }
                                         },
                                        //{

                                        //    width: '50%',
                                        //    html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;Membership Card List</div>'
                                        //},

                                        //{

                                        //    width: '50%',
                                        //    html: '<div style="width:100%;text-align:right;color:black;font-family: Arial; font-size:12px;">Filter</div>'
                                        //},
                                        //     //{
                                             //    margin: '-8 0 0 0',

                                             //    html: '<font size=2 color=white>Petronas Wangsa Maju Sekyen 3,Jalan Genting Kelang,</font>',
                                             //},
                                             // {
                                             //     margin: '-7 0 0 0',

                                             //     html: '<font size=2 color=white>5682314 Ampang ,Selangor Darul Ehsan.</font>',
                                             // },


                                ]
                            },

                            {
                                xtype: 'container',
                                width: '100%',
                                style: 'background-color:transparent',
                                height:10
                            },
                            {
                                xtype: 'carousel',

                                //hidden: true,
                                id: 'FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise',
                               // style: 'background-color:#f7f7f7',
                                style: 'background-color:white',
                                width: '100%',
                                height: '60%',
                                indicator: false    ,
                                listeners: {

                                  
                                    activeitemchange: function (container, newCard, oldCard, index) {
                                        // console.log('Current index:' + container.getActiveIndex());
                                        CarouselIndex = container.getActiveIndex();
  // ✅ kalau event ni datang dari button, jangan repeat call
  if (_AyohaSkipCarouselListenerOnce) {
    _AyohaSkipCarouselListenerOnce = false; // reset
    return;
  }
  
                                  
                                        if (_FloatPanel_MembershipCardList_Upgrade_isFirstLoad == "Y") {
                                            
                                            MoveMembeshipCarousel(CarouselIndex);
                                           AyohaBottomNav_SetActive(CarouselIndex);
                                            // Ext.defer(function(){
                                            //     var idx = carousel.getItems().indexOf(newCard);
                                            //     if (idx < 0) idx = carousel.getActiveIndex();
                                            //     CarouselIndex = idx;
                                            //     AyohaBottomNav_SetActive(idx);
                                            //   }, 30);

                                        }

                                      

                                    },

                                },


                               // margin: '0 0 0 0',
                                items: [
                                  
                                        //{
                                        //    style: ' background-color: transparent',
                                        //    margin:'0 0 0 0',
                                        //    html: '<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">2.Entitle Prevelliages</div>',
                                        //},
                                        {
                                            xtype: 'container',
                                            id: 'IDcarouselFloatPanel_MembershipCardList_Upgrade_Campaignlist',
                                           // hidden:true,
                                            style: ' background-color: transparent',
                                            height:'100%',
                                            width: '100%',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'left'
            
                                            },
                                            items: [
                                                {
                                                    xtype: 'list',
                                                    width: '95%',
                                                    margin:'0 0 0 10',
                                                    store: _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore,
                                                  
                                                    id: 'FloatPanel_MembershipCardList_Upgrade_Campaignlist',
                                                    cls: 'perkList',
                                                  
                                                    mode: 'SINGLE',
                                                
                                                    disableSelection: true,
                                                    itemHeight: 70,          // sebab padding 6+6 + min-height 56 (roughly 68-72)
variableHeights: false,
itemConfig: { 
  style: 'padding:0 !important;margin:0 !important;width:100% !important;' 
 
},
                                                   
                                                      style: 'background:#fff !important;',
                                                      
                                                   // style: 'background-color:white !important;border-radius: 0px 0px 0px 0px;',
                                                    scrollable: {
                                                        direction: 'vertical',
                                                        directionLock: true,
                                                        indicators: {
                                                            y: {
                                                                autoHide: true
                                                            },
                                                            x: {
                                                                autoHide: true
                                                            }
                                                        }
                                                    },
                                                         
                                                    itemTpl: new Ext.XTemplate(
                                                        // ✅ FULL WIDTH + GAP VERTICAL
                                                        '<div class="myContent" style="'
                                                      + 'background:transparent;'
                                                      + 'width:100%;'
                                                      + 'box-sizing:border-box;'
                                                      + 'padding:0 14px;'          // side spacing kiri/kanan
                                                      + 'margin:0 0 12px 0;'       // ✅ gap vertical antara item
                                                      + '">' +
                                                      
                                                          // ✅ CARD FULL WIDTH
                                                          '<div style="'
                                                        + 'display:flex;align-items:center;gap:12px;'
                                                        + 'width:100%;min-height:86px;'
                                                        + 'background:#fff;'
                                                        + 'border-radius:18px;'
                                                        + 'border:1px solid rgba(124,58,237,.14);'
                                                        + 'box-shadow:0 10px 26px rgba(17,24,39,.06);'
                                                        + 'padding:12px 12px 12px 10px;'
                                                        + 'position:relative;'
                                                        + 'box-sizing:border-box;'
                                                        + '">' +
                                                      
                                                            // left accent bar
                                                            '<div style="'
                                                          + 'width:6px;align-self:stretch;border-radius:999px;'
                                                          + 'background:{[this.getAccent(values.ModifiedCampaignTypeShorted)]};'
                                                          + '"></div>' +
                                                      
                                                            // icon bubble
                                                            '<div style="'
                                                          + 'flex:0 0 44px;width:44px;height:44px;border-radius:14px;'
                                                          + 'background:{[this.getBubble(values.ModifiedCampaignTypeShorted)]};'
                                                          + 'display:flex;align-items:center;justify-content:center;'
                                                          + 'box-shadow:inset 0 1px 0 rgba(255,255,255,.85);'
                                                          + '">' +
                                                              '<div style="'
                                                            + 'width:28px;height:28px;border-radius:10px;'
                                                            + 'background-image:url({ModifiedCampaignType});'
                                                            + 'background-size:cover;background-position:center;background-repeat:no-repeat;'
                                                            + '"></div>' +
                                                            '</div>' +
                                                      
                                                            // text area (3 lines)
                                                            '<div style="flex:1;min-width:0;line-height:1.2;">' +
                                                      
                                                              // LINE 1: title
                                                              '<div style="display:flex;align-items:center;gap:10px;">' +
                                                                '<div style="'
                                                              + 'font-family:Arial,sans-serif;'
                                                              + 'font-size:15px;font-weight:900;'
                                                              + 'color:#111827;'
                                                              + 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                                                              + '">{ModifiedCampaignTypeShorted}</div>' +
                                                              '</div>' +
                                                      
                                                              // LINE 2: microcopy
                                                              '<div style="margin-top:4px;'
                                                            + 'font-family:Arial,sans-serif;'
                                                            + 'font-size:12.5px;font-weight:700;'
                                                            + 'color:#4B5563;'
                                                            + 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                                                            + '">{CampaignName}</div>' +
                                                      
                                                              // LINE 3: badge (moved here)
                                                              '<tpl if="this.hasBadge(values)">' +
                                                                '<div style="margin-top:7px;display:flex;align-items:center;gap:8px;min-width:0;">' +
                                                                  '<div style="{[this.getBadgeStyle(values)]}">'
                                                                    + '{[this.getBadgeText(values)]}'
                                                                  + '</div>' +
                                                                '</div>' +
                                                              '</tpl>' +
                                                      
                                                            '</div>' +
                                                      
                                                            // chevron
                                                            '<div style="color:#9CA3AF;font-size:24px;line-height:1;flex:0 0 auto;padding-left:2px;">›</div>' +
                                                      
                                                          '</div>' +
                                                        '</div>',
                                                      {
                                                        getAccent: function (t) {
                                                          t = (t || '').toLowerCase();
                                                          if (t.indexOf('stamp') > -1) return '#7C3AED';
                                                          if (t.indexOf('discount') > -1) return '#22C55E';
                                                          if (t.indexOf('contest') > -1) return '#F59E0B';
                                                          if (t.indexOf('event') > -1) return '#3B82F6';
                                                          if (t.indexOf('point') > -1) return '#EC4899';
                                                          return '#7C3AED';
                                                        },
                                                      
                                                        getBubble: function (t) {
                                                          t = (t || '').toLowerCase();
                                                          if (t.indexOf('stamp') > -1) return 'rgba(124,58,237,.12)';
                                                          if (t.indexOf('discount') > -1) return 'rgba(34,197,94,.12)';
                                                          if (t.indexOf('contest') > -1) return 'rgba(245,158,11,.14)';
                                                          if (t.indexOf('event') > -1) return 'rgba(59,130,246,.12)';
                                                          if (t.indexOf('point') > -1) return 'rgba(236,72,153,.12)';
                                                          return 'rgba(124,58,237,.12)';
                                                        },
                                                      
                                                        getBadgeBg: function (t) {
                                                          t = (t || '').toLowerCase();
                                                          if (t.indexOf('discount') > -1) return 'rgba(34,197,94,.12)';
                                                          if (t.indexOf('contest') > -1) return 'rgba(245,158,11,.16)';
                                                          if (t.indexOf('event') > -1) return 'rgba(59,130,246,.12)';
                                                          if (t.indexOf('point') > -1) return 'rgba(236,72,153,.12)';
                                                          return 'rgba(124,58,237,.10)';
                                                        },
                                                      
                                                        hasBadge: function (v) {
                                                          return !!(v && v.ModifiedCountLoyaltyStamped && String(v.ModifiedCountLoyaltyStamped).trim());
                                                        },
                                                      
                                                        getBadgeText: function (v) {
                                                          return v.ModifiedCountLoyaltyStamped;
                                                        },
                                                      
                                                        // ✅ badge auto cantik walau text panjang (contoh Entitled 40% discount...)
                                                        getBadgeStyle: function (v) {
                                                          var t = v.ModifiedCampaignTypeShorted || '';
                                                          var accent = this.getAccent(t);
                                                          var bg = this.getBadgeBg(t);
                                                          var text = (v.ModifiedCountLoyaltyStamped || '').toString();
                                                          var isLong = text.length > 22;
                                                      
                                                          return [
                                                            'max-width:100%;',
                                                            'padding:6px 10px;',
                                                            'background:' + bg + ';',
                                                            'color:' + accent + ';',
                                                            'font-weight:900;',
                                                            'font-size:12px;',
                                                            'box-sizing:border-box;',
                                                            isLong
                                                              ? 'border-radius:12px;white-space:normal;line-height:1.15;'
                                                              : 'border-radius:999px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                                                          ].join('');
                                                        }
                                                      }),

                                                
                                                    height: '100%',
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
                                                            
                                                            
                                                            
                                                            // localStorage.setItem('StampCampaignCode', CampaignCode);

                                                            // localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                            // localStorage.setItem('CountStampCardRowShow', Stamp);
                                                             
                                                      

                                                          //  FloatPanel_ScannedMerchantHide();

                                                         //alert(MembershipTag)
                                                            if (MembershipTag == 'YES') {


                                                                if (CampaignType == "Stamp Reward Loyalty Card") {

                                                                    //alert(CampaignType);
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle) {

                                                                    FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo,isRequiredStartEndDate,isCampaignExpired,CampaignDayLeft,"NA");
                                                                   // FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow, EnterpriseLogo, isRequiredStartEndDate, isCampaignExpired, CampaignDayLeft, AdvertismentTitle)
                                                                    
                                                                    //Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');
                                                                    Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '</b></font>');
                                                                }
                                                                if (CampaignType == "Point Reward Loyalty Card") {
                                                                  //  LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatLoyaltyCardPointShow(CampaignName, CampaignCode, EnterpriseLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, isCampaignExpired);
                                                                   // FloatLoyaltyCardPointShow(StampCampaignName, StampCampaignCode, EnterprisesLogo, EnterpriseName, EnterpriseAccNo, EndDate, isRequiredStartEndDate, PointisCampaignExpired);
                                                                }
                                                                if (CampaignType == "Membership Card Discount") {
                                                                  //  LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Contest") {
                                                                   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                    FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
                                                                   // FloatPanel_MerchantDiscountLoyaltyDescriptionShow(CampaignCode,EnterpriseAccNo);
                                                                }
                                                                if (CampaignType == "Membership Card Event") {
                                                                   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
                                                                   // FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(EnterpriseLogo, EnterpriseName, EventCoverPhoto, EventName, EventStartDate_Day, EventStartDate_Month, EventStartTime, EventEndDate_Day, EventEndDate_Month, EventEndTime, EventLocationName, ModifiedWidth, EventDescription, EventLocationCoordinate, EventUrlTicket, EventCode, EnterpriseAccNo, RespondStatus,ID);
                                                                   //alert(CampaignCode)
                                                                   
                                                                    FloatPanel_DashboardMerchantReward_MembershipEventDetailShow_FromMembershipCardList_Upgrade(CampaignCode,EnterpriseLogo, EnterpriseName);
                                                                   // FloatPanel_DashboardMerchantReward_MembershipEventDetailShow
                                                                   
//FloatPanel_DashboardMerchantReward_MembershipContestDetailShow_FromMembershipCardList_Upgrade(CampaignCode);
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

                                                          //  //var Stamps = records.get('Stamps');
                                                          //  //var StampsArr = Stamps.split('/');


                                                          //  var CampaignCode = records.get('CampaignCode');
                                                          //  var EnterpriseHQAccNo = records.get('EnterpriseHQAccNo');
                                                          //  var StartDate = records.get('CampaignStartDate');
                                                          //  var EndDate = records.get('CampaignEndDate');
                                                          //  var SubscriberAccNo = GetCurrAyohaUserAccountNo();
                                                          //  //var EnterpriseName = records.get('EnterpriseName');     
                                                          //  var EnterpriseName = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName;
                                                          //  var StampRuleRemarks = records.get('StampRuleRemarks');
                                                          //  var isStampRulePopUp = records.get('isStampRulePopUp');
                                                          //  var CampaignName = records.get('CampaignName');
                                                          //  var Stamp = records.get('Stamp');
                                                          //  var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                          //  //var EnterpriseLogo = records.get('EnterpriseLogo');
                                                          //  var EnterpriseLogo = global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
                                                         
                                                           
                                                    
                                                          ////  FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks);
                                                          

                                                            


                                                          //  //var StampedCampaignCode = records.get('StampedCampaignCode');
                                                          //  //var EnterpriseAccNo = records.get('EnterpriseAccNo');
                                                          //  //var StartDate = records.get('StartDate');
                                                          //  //var EndDate = records.get('EndDate');
                                                          //  //var SubscriberAccNo = records.get('SubscriberAccNo');
                                                          //  //var EnterpriseName = records.get('EnterpriseName');
                                                          //  //var StampRuleRemarks = records.get('StampRuleRemarks');
                                                          //  //var isStampRulePopUp = records.get('isStampRulePopUp');
                                                          //  //var StampCampaignName = records.get('StampCampaignName');
                                                          //  //var CountLoyaltyStamped = records.get('CountLoyaltyStamped');
                                                          //  //var CountStampCardRowShow = records.get('CountStampCardRowShow');
                                                          //  localStorage.setItem('StampCampaignCode', CampaignCode);

                                                          //  localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                          //  localStorage.setItem('CountStampCardRowShow', Stamp);
                                                          //  //alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                          //  console.log(MembershipTag);

                                                          //  if (MembershipTag == 'YES') {
                                                          //      FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp, EnterpriseLogo);
                                                          //      Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>' + CountLoyaltyStamped + '/' + Stamp + '</b></font>');

                                                          //  }
                                                          //  if (MembershipTag == 'NO') {
                                                          //   //   FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(CampaignCode, EnterpriseHQAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, CampaignName, CountLoyaltyStamped, Stamp);

                                                          //      FloatPanel_AyohaCardManagement_PreviewCardShow(CampaignCode, EnterpriseHQAccNo, "NA", StartDate, EndDate, CampaignName, StampRuleRemarks, EnterpriseLogo, EnterpriseName);
                                                          //      Ext.getCmp('btnStampCard_FloatPanel_AyohaCardManagement_PreviewCard_CountStamp').setHtml('<font size=5 color=white><b>0/' + Stamp + '</b></font>');

                                                          //  }

                                                        },
                                                        deselect: function (list, records) {

                                                        }
                                                    },

                                                },
                                                {
                                                    xtype:'container',
                                                    width:'100%',
                                                    height:100
                                                }
                                            ]

                                        },


                             ///////////////////////




                             {
                                 xtype: 'container',
                                 id: 'containerFloatPanel_MembershipCardList_Upgrade_Enterpriselist',
                                 style: ' background-color: transparent',
                                 height: '75%',
                                 width: '100%',
                                 layout: {
                                     type: 'vbox',
                                     pack: 'start',
                                     align: 'center'

                                 },
                                 items: [
                                     {
                                        xtype: 'list',
                                        id: 'FloatPanel_MembershipCardList_Upgrade_EnterpriseEntitledList',
                                        cls: 'enterpriseList',
                                      
                                        // full height/width
                                        flex: 1,            // ✅ paling selamat kalau parent vbox/hbox
                                        width: '95%',
                                      
                                        store: _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore,
                                        mode: 'SINGLE',
                                        disableSelection: true,
                                      
                                        style: 'background-color:#fff;',
                                      
                                        scrollable: {
                                          direction: 'vertical',
                                          indicators: {
                                            y: { autoHide: true },
                                            x: { autoHide: true }
                                          }
                                        },
                                      
                                        itemTpl:
                                          '<div class="enterpriseCard">' +
                                            '<div class="enterpriseRow">' +
                                      
                                              '<div class="enterpriseLogo" style="background-image:url({EnterpriseLogo});"></div>' +
                                      
                                              '<div class="enterpriseInfo">' +
                                                '<div class="enterpriseName">{EnterpriseName}</div>' +
                                                '<div class="enterpriseMeta">({EnterpriseRegistrationNo}) - {EnterpriseType}</div>' +
                                      
                                                '<div class="enterpriseDetails">' +
                                                  '{EnterpriseAddress}<br>' +
                                                  '<span class="enterpriseLabel">Phone:</span> {EnterprisePhoneNo}<br>' +
                                                  '<span class="enterpriseLabel">Email:</span> {EnterpriseEmail}' +
                                                '</div>' +
                                              '</div>' +
                                      
                                            '</div>' +
                                          '</div>',
                                      

                                      
                                         listeners: {
                                             itemsingletap: function (list, idx, target, records, evt) {





                                             },
                                             deselect: function (list, records) {

                                             }
                                         },

                                     },

                                 ]

                             },
                                     
                                 
                                 ///////////////////////////////////////////////////////
                                 {
                                     xtype: 'container',
                                     id: 'containerFloatPanel_MembershipCardList_Upgrade_CardTransaction',
                                     style: 'background-color: transparent',
                                     height: '100%',
                                     width: '100%',
                                     layout: { type: 'vbox', pack: 'start', align: 'left' },





                                    //  style: ' background-color: transparent',
                                    // // height: '95%',
                                    //  width: '100%',
                                    //  layout: {
                                    //      type: 'vbox',
                                    //      pack: 'start',
                                    //      align: 'center'

                                    //  },
                                     items: [
                                      // {
                                      //   xtype: 'list',
                                      //   id: 'FloatPanel_MembershipCardList_Upgrade_CardTransactionList',
                                      //   height: '100%',
                                      //   width: '100%',
                                      //   store: _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore,
                                      //   mode: 'SINGLE',
                                      //   cls: 'ayohaPointHistoryList',   // ✅ tambah                                
                                      //   style: 'background-color: #fff !important;',
                                      //   disableSelection: true,
                                      //   grouped: true,
              
                                      //   scrollable: {
                                      //     direction: 'vertical',
                                      //     indicators: {
                                      //       y: { autoHide: true },
                                      //       x: { autoHide: true }
                                      //     }
                                      //   },
                                      //   deferEmptyText: false,
                                      //   emptyText:
                                      //     '<div class="ayohaEmptyWrap">' +
                                      //       '<div class="ayohaEmptyCard">' +
                                      //         '<div class="ayohaEmptyIcon">' +
                                      //           '<img src="resources/icons/HistoryPurple01.png" style="width:44px;height:44px;" />' +
                                      //         '</div>' +
                                      //         '<div class="ayohaEmptyTitle">No Point History Yet</div>' +
                                      //         '<div class="ayohaEmptyDesc">You doesn’t have any Point Collection/Redeemed history right now. Please check again later.</div>' +
                                      //       '</div>' +
                                      //     '</div>',
                                      //     itemTpl: 
                                      //     '<div class="myContent">' +
                                      //       '<table style="width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;background:transparent;margin:0;">' +
                                      //         '<colgroup>' +
                                      //           '<col style="width:80%;">' +
                                      //           '<col style="width:20%;">' +
                                      //         '</colgroup>' +
                                      //         '<tbody>' +
                                      //           '<tr>' +
                                      //             '<td style="padding:0;vertical-align:top;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;overflow-wrap:anywhere;word-break:break-word;">' +
                                      //               '{AyohaPointType}<br>{CampaignName}<br>' +
                                      //               '<div style="font-size:11px;font-weight:normal;margin:-23px 0 0 0;">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div><br>' +
                                      //               '<div style="font-size:11px;font-weight:normal;margin:-23px 0 0 0;">{CreatedBy}</div>' +
                                      //             '</td>' +
                                      //             '<td style="padding:0;vertical-align:middle;text-align:right;font-family:Arial,sans-serif;font-size:14px;font-weight:normal;white-space:nowrap;">' +
                                      //               '{ModifiedTypeCRDBExtent}' +
                                      //             '</td>' +
                                      //           '</tr>' +
                                      //         '</tbody>' +
                                      //       '</table>' +
                                      //     '</div>'
                                      
                                          
        
                                      // },

                                        {
                                            xtype: 'list',
                                            id: 'FloatPanel_MembershipCardList_Upgrade_CardTransactionList',
                                            height: '100%',
                                            width: '100%',
                                          //  cls: 'trxList',   // ✅ tambah                                
                                            style: 'background-color: #fff !important;',
                                            disableSelection: true,
                                            grouped: true,
                  
                                            scrollable: {
                                              direction: 'vertical',
                                              indicators: {
                                                y: { autoHide: true },
                                                x: { autoHide: true }
                                              }
                                            },
                                            deferEmptyText: false,
                                         
                                           
                                            store: _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore,
                                          
                                            mode: 'SINGLE',
                                            disableSelection: true,
                                          
                                          
                                          
                                            itemTpl:
                                              '<div class="trxCard">' +
                                                '<div class="trxTop">' +
                                                  '<div class="trxType">{AyohaPointType}</div>' +
                                                '</div>' +
                                                '<div class="trxMain">' +
                                                  '<div class="trxLeft">' +
                                                    '<div class="trxCampaign">{CampaignName}</div>' +
                                                    '<div class="trxDatetime">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div>' +
                                                  '</div>' +
                                                  '<div class="trxRight">' +
                                                    '<div class="trxAmount">{ModifiedTypeCRDBExtent}</div>' +
                                                  '</div>' +
                                                '</div>' +
                                              '</div>',
                                          
                                            emptyText:
                                              '<div class="trxEmpty">' +
                                                '<div class="trxEmptyTitle">No Transactions</div>' +
                                                '<div class="trxEmptySub">Your transaction history will appear here.</div>' +
                                              '</div>'
                                          }





//                                          {

                                          



//                                              xtype: 'list',
// flex:1,
//                                              // height: '64%',
//                                              // height: '100%',
//                                              // height: 200,
//                                              //   flex: 2,
//                                           //   store: 'AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore',
//                                              id: 'FloatPanel_MembershipCardList_Upgrade_CardTransactionList',
//                                              mode: 'SINGLE',
//                                              disableSelection: true,
//                                              grouped: true,
//                                              // disableSelection: true,

//                                              style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
//                                              scrollable: {
//                                                  direction: 'vertical',
//                                                  indicators: {
//                                                      y: {
//                                                          autoHide: true
//                                                      },
//                                                      x: {
//                                                          autoHide: true
//                                                      }
//                                                  }
//                                              },
//                                              itemTpl:
//                                              '<div class="trxCard">' +
                                           
//                                                '<div class="trxTop">' +
//                                                  '<div class="trxType">{AyohaPointType}</div>' +
//                                                '</div>' +
                                           
//                                                '<div class="trxMain">' +
//                                                  '<div class="trxLeft">' +
//                                                    '<div class="trxCampaign">{CampaignName}</div>' +
//                                                    '<div class="trxDatetime">{CreatedDate_DateOnly} {CreatedDate_TimeOnly}</div>' +
//                                                  '</div>' +
                                           
//                                                  '<div class="trxRight">' +
//                                                    '<div class="trxAmount">{ModifiedTypeCRDBExtent}</div>' +
//                                                  '</div>' +
//                                                '</div>' +
                                           
//                                              '</div>',
                                           
//                                            emptyText:
//                                              '<div class="trxEmpty">' +
//                                                '<div class="trxEmptyTitle">No Transactions</div>' +
//                                                '<div class="trxEmptySub">Your transaction history will appear here.</div>' +
//                                              '</div>',
//                                             //  width: '100%',
//                                             //  height:'100%',
//                                              // height: 600,
//                                              // height: '100%',

//                                              listeners: {


//                                                  itemdoubletap: function (dataview, index, target, record, e, eOpts) {


//                                                  },

//                                                  itemsingletap: function (dataview, index, target, record, e, eOpts) {

//                                                  }
//                                              }






//                                          },
                                       

                                     ]

                                 },



                                    ///////////////////////////////////////////////////////
                                 {
                                     xtype: 'container',
                                     id: 'containerFloatPanel_MembershipCardList_Upgrade_CardDetails',
                                     style: ' background-color: white',
                                     // height: '95%',
                                    // height: 412,
                                     width: '100%',
                                     layout: {
                                         type: 'vbox',
                                         pack: 'start',
                                         align: 'left'

                                     },
                                     items: [
                                         {
                                             xtype: 'list',
                                           //  height: 480,
                                             id: 'FloatPanel_MembershipCardList_Upgrade_CardDetails',
                                             // store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                          //   store: 'MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore',                                            
                                             mode: 'SINGLE',
                                             flex: 1,
                                            width: '100%',
                                            style: 'background:#fff; padding:0; margin:0;',
                                          
                                             disableSelection: true,
                                             scrollable: {
                                                direction: 'vertical',
                                                indicators: { y: { autoHide: true }, x: { autoHide: true } }
                                              },




                                            itemTpl:
                                            '<div class="mcDetailCard">' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Membership Card Name</div>' +
                                                '<div class="mcValue">{MembershipCardName}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Card Level</div>' +
                                                '<div class="mcValue">{MembershipCardType}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Card Fees</div>' +
                                                '<div class="mcValue">{MembershipCardFee}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Card Fees Payment Cycle</div>' +
                                                '<div class="mcValue">{MembershipCardFeePaymentCycle}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Card Expiry (Month)</div>' +
                                                '<div class="mcValue">{StrExpiredDate}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Required Approval?</div>' +
                                                '<div class="mcValue">{isRequiredApproval}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Registration Date</div>' +
                                                '<div class="mcValue">{CreatedDate}</div>' +
                                              '</div>' +
                                          
                                            //   '<div class="mcDetailRow">' +
                                            //     '<div class="mcLabel">Registration/Request Method</div>' +
                                            //     '<div class="mcValue">{MembershipByMethod}</div>' +
                                            //   '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Approval Date</div>' +
                                                '<div class="mcValue">{MembrshipApprovalDate}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Approval By</div>' +
                                                '<div class="mcValue">{MembershipApprovalBy}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Approval Status</div>' +
                                                '<div class="mcValue">{MembershipApprovalStatus}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow">' +
                                                '<div class="mcLabel">Paid Fees Amount</div>' +
                                                '<div class="mcValue">{ReceivedAmount}</div>' +
                                              '</div>' +
                                          
                                              '<div class="mcDetailRow mcDetailRowLast">' +
                                                '<div class="mcLabel">Approval Remarks</div>' +
                                                '<div class="mcValue">{Remarks}</div>' +
                                              '</div>' +
                                          
                                            '</div>',


                                            //  itemTpl: '<div class="myContent">' +
                                            //   '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Membership Card Name</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardName}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Level</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardType}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Fees</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardFee}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Fees Payment Cycle</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipCardFeePaymentCycle}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Card Expiry (Month)</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{StrExpiredDate}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">is Required Approval?</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{isRequiredApproval}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Date</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{CreatedDate}</div>' +                                               
                                            //     '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Registration/Request Method</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipByMethod}</div>' +
                                            //     '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Date</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembrshipApprovalDate}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval By</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipApprovalBy}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Status</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{MembershipApprovalStatus}</div>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Paid Fees Amount</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{ReceivedAmount}</div>' +
                                            //     '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:5px 0px 0px 0px;">Approval Remarks</div><br>' +
                                            //    '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;margin:-23px 0px 0px 0px;">{Remarks}</div>' +
                                            //  '</div>',
                                         
                                             listeners: {
                                                 itemsingletap: function (list, idx, target, records, evt) {

                                                   

                                                 },
                                                 deselect: function (list, records) {

                                                 }
                                             },

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
                        docked: 'bottom',
                        height: 65,
                        id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottomOutter',
                      
                        // ✅ ganti style border5.png -> CSS premium
                        cls: 'ayohaBottomNav',
                      
                        layout: 'fit',
                      
                        items: [
                          {
                            xtype: 'container',
                            id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottomInner',
                            width: '100%',
                            cls: 'ayohaBottomNavScroll',
                            style: 'background-color: transparent;',
                            height: 65,
                      
                            scrollable: {
                              direction: 'horizontal',
                              directionLock: true,
                              indicators: false
                            },
                      
                            layout: { type: 'hbox', pack: 'start', align: 'center' },
                      
                            items: [
                      
                              AyohaBottomMenuItem({
                                active: true,
                                containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',
                                btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',
                                txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_MenuBottom_EntitleRewardTxt',
                                icon: 'resources/icons/EntitleReward.png',                               
                                line1: 'Membership',
                                line2: 'Privillage',
                                handler: function () {
                                    _AyohaSkipCarouselListenerOnce = true;  
                                  MoveMembeshipCarousel(0);
                                  AyohaBottomNav_SetActive(0);     // ikut index
                                }
                              }),
                      
                              AyohaBottomMenuItem({
                                containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',
                                btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',
                                txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutletTxt',
                                icon: 'resources/icons/EnttileOutlet.png',                                
                                line1: 'Entitle',
                                line2: 'Outlets',
                                handler: function () {
                                    _AyohaSkipCarouselListenerOnce = true;  
                                  MoveMembeshipCarousel(1);
                                  AyohaBottomNav_SetActive(1);     // ikut index
                                }
                              }),     
                              AyohaBottomMenuItem({
                                containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',
                                btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',
                                txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransactionTxt',
                                icon: 'resources/icons/MembershipCardTransaction.png',
                                line1: 'Card',
                                line2: 'Transactions',
                                handler: function () {
                                    _AyohaSkipCarouselListenerOnce = true;  
                                  MoveMembeshipCarousel(2);
                                  AyohaBottomNav_SetActive(2);     // ikut index
                                }
                              }),
                      
                              AyohaBottomMenuItem({
                                containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',
                                btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',
                                txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfoTxt',
                                icon: 'resources/icons/MembershipCardDetail.png',
                                line1: 'Card',
                                line2: 'Details',
                                handler: function () {
                                    _AyohaSkipCarouselListenerOnce = true;  
                                  MoveMembeshipCarousel(3);
                                  AyohaBottomNav_SetActive(3);     // ikut index
                                }
                              }),

                      
                              AyohaBottomMenuItem({
                                containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',
                                btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',
                                txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndConditionTxt',
                                icon: 'resources/icons/shakeHand01.png',
                                line1: 'Term &',
                                line2: 'Conditions',
                                handler: function () {
                                 
                                  AyohaBottomNav_SetActive(4); 
                                  FloatPanel_Membership_TermAndConditionShow();
                                }
                              }),
                              AyohaBottomMenuItem({
                                containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard',
                                btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard',
                                txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCardTxt',
                                icon: 'resources/icons/CancelMembershipCard.png',
                                line1: 'Unsubscribe',
                                line2: 'Membership',
                                handler: function () {
                                    _AyohaSkipCarouselListenerOnce = true;  
                                  MoveMembeshipCarousel(4);
                                  AyohaBottomNav_SetActive(5);     // ikut index
                                }
                              }),
                              // NFC (hidden, kekal)
                              {
                                xtype: 'container',
                                id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC',
                                hidden: true,
                                cls: 'ayohaBottomNavItem',
                                layout: { type: 'vbox', pack: 'center', align: 'center' },
                                items: [
                                    {
                                        xtype: 'button',
                                        id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC',
                                        ui: 'plain',
                                        width: 34,
                                        height: 34,
                                        cls: 'ayohaBottomNavBtn',
                                        icon: 'resources/icons/NFCenabled.png'
                                      },
                                  {
                                    xtype: 'component',
                                    id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFCTxt',
                                    cls: 'ayohaBottomNavTxt',
                                    html: '<div class="l1">NFC</div><div class="l2">Enabled</div>'
                                  }
                                ]
                              },
                      
                            
                      
                            ]
                          }
                        ]
                      }



        // {
        //     xtype: 'container',
        //     docked: 'bottom',
        //     height: 60,
        //     width: '100%',
        //     id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottomOutter',
          
        //     // ✅ ganti inline style border5.png -> guna css premium
        //     cls: 'ayohaBottomNav',
          
        //     layout: 'fit',
          
        //     items: [
        //       {
        //         xtype: 'container',
        //         id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottomInner',
        //         cls: 'ayohaBottomNavScroll',
          
        //         scrollable: {
        //           direction: 'horizontal',
        //           directionLock: true,
        //           indicators: false
        //         },
          
        //         layout: { type: 'hbox', pack: 'start', align: 'center' },
                
          
        //         // ✅ item menu (no more spacer & width 490)
        //         items: [
                  
        //           AyohaBottomMenuItem({
        //             active: true,
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_MenuBottom_EntitleRewardTxt',
        //             icon: 'resources/icons/EntitleReward.png',
                   
        //             line1: 'Membership',
        //             line2: 'Privillage',
        //             handler: function () { MoveMembeshipCarousel(0); }
        //           }),
          
        //           AyohaBottomMenuItem({
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutletTxt',
        //             icon: 'resources/icons/EnttileOutlet.png',
        //             line1: 'Entitle',
        //             line2: 'Outlets',
        //             handler: function () { MoveMembeshipCarousel(1); }
        //           }),
          
        //           AyohaBottomMenuItem({
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStore',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStore',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStoreTxt',
        //             icon: 'resources/icons/AyohaStorePurple.png',
        //             line1: 'Ayoha',
        //             line2: 'Store',
        //             handler: function () { FloatPanel_MembershipCardList_Upgrade_AyohaStore(); }
        //           }),
          
        //           AyohaBottomMenuItem({
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransactionTxt',
        //             icon: 'resources/icons/MembershipCardTransaction.png',
        //             line1: 'Card',
        //             line2: 'Transactions',
        //             handler: function () { MoveMembeshipCarousel(2); }
        //           }),
          
        //           AyohaBottomMenuItem({
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfoTxt',
        //             icon: 'resources/icons/MembershipCardDetail.png',
        //             line1: 'Card',
        //             line2: 'Details',
        //             handler: function () { MoveMembeshipCarousel(3); }
        //           }),
          
        //           AyohaBottomMenuItem({
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndConditionTxt',
        //             icon: 'resources/icons/shakeHand01.png',
        //             line1: 'Term &',
        //             line2: 'Conditions',
        //             handler: function () { FloatPanel_Membership_TermAndConditionShow(); }
        //           }),
          
        //           // NFC hidden (kekal hidden)
        //           {
        //             xtype: 'container',
        //             hidden: true,
        //             id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC',
        //             cls: 'ayohaBottomNavItem',
        //             layout: { type: 'vbox', pack: 'center', align: 'center' },
        //             items: [
        //               {
        //                 xtype: 'button',
        //                 id: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC',
        //                 ui: 'plain',
        //                 width: 34,
        //                 height: 34,
        //                 html: '<div class="ayohaBottomNavIconWrap"><img src="resources/icons/NFCenabled.png" /></div>'
        //               },
        //               {
        //                 xtype: 'component',
        //                 id: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFCTxt',
        //                 cls: 'ayohaBottomNavTxt',
        //                 html: '<div class="l1">NFC</div><div class="l2">Enabled</div>'
        //               }
        //             ]
        //           },
          
        //           AyohaBottomMenuItem({
        //             containerId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard',
        //             btnId: 'btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard',
        //             txtId: 'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCardTxt',
        //             icon: 'resources/icons/CancelMembershipCard.png',
        //             line1: 'Unsubscribe',
        //             line2: 'Membership',
        //             handler: function () { MoveMembeshipCarousel(4); }
        //           })
        //         ]
        //       }
        //     ]
        //   }



                    



















          










        ]





    });




}








//function FloatPanel_MembershipCardList_UpgradeShow(ID) {
//var MembershipTag;
function FloatPanel_MembershipCardList_UpgradeShow(MembershipCardCode, EnterpriseAccountNo) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
   

    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
   // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
   // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
   // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);
    
    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;



  
    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
        //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );
    MembershipTag = 'NO';
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
    disabledBottomButton();
    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}













var globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed;
function FloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
   
   globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
    
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);

    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;



    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
          //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );
    MembershipTag = 'NO';
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
    disabledBottomButton();
    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}





function FloatPanel_MembershipCardList_UpgradeShow_FromFloatPanel_MerchantDetailPage(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
   
    if(isMembershipCardSubscribed=="NO"){
        setMessage_NotYetMembershipMessage_WithJoinButton();
   
   
       return
   }

    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;
    globalFloatPanelMerchantDetailPage_MembershipCardCode= MembershipCardCode;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;

    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;

   MembershipTag=isMembershipCardSubscribed;

  
    
    
    
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();




  

 
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';

    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);



  


  

    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_FloatPanel_MerchantDetailPage(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
          //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );
    
    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");
 
    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}




function FloatPanel_MembershipCardList_UpgradeShow_FromDashboard_Main(MembershipCardCode, EnterpriseAccountNo, isMembershipCardSubscribed) {
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    globalOpenMembershipCardList_Upgrade_From = "DashboardMain";





    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';

    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    //var EnterpriseAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);
    //var EnterpriseHQAccNo = _DataStore_EnterprisesLoadByRowStatusStore.findRecord('ID', ID, 0, false, false, true);

    //var EnterpriseHQAccountNo = EnterpriseHQAccNo.get('EnterpriseHQAccNo');
    //var EnterpriseAccountNo = EnterpriseAccNo.get('EnterpriseAccNo');
    //alert(EnterpriseHQAccountNo);
    //alert(EnterpriseAccountNo);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(false);
    //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
    // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(true);






    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;

    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;


    FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode);

    var containerView = Ext.ComponentQuery.query('container[name=clickableContainerFloatPanel_MembershipCardList_UpgradeBottom]')[0];
    var containerViewEl = containerView.element;
    containerViewEl.on('tap',
      function (event, node, options, eOpts) {
          FloatPanel_MembershipCardManagement_TermAndConditionShow();
          //  GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom();
      }
    );

    localStorage.setItem("MembershipByMethod", "AyohaStoreRequest");

    _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
    var EntAccNo = EnterpriseAccountNo;

    Dashboard_VisitorAnalsysInsertUpdate("MembershipCard", "NA", EntAccNo);
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();
}








var _FloatPanel_MembershipCardList_Upgrade_ID;
function FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,ID) {






    // Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    // this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    // this.overlay.show();
    // AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");



    


    FloatPanel_MembershipCardList_UpgradeCreateIfNeeded();


    _FloatPanel_MembershipCardList_Upgrade.show();
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_MembershipCardList_Upgrade', function () {
     
        FloatPanel_MembershipCardList_UpgradeHide(true);
      });
    }




    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
   
   
    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseHQAccountNo;
    _FloatPanel_MembershipCardList_Upgrade_ID = ID;
    MembershipTag = 'YES';
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(true);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(false);

   // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
   //// Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
    
   // Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
   // FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
    FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode)
    
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();


}


function FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard_FromScannedQR(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode,isMembershipCardSubscribed) {
    if(isMembershipCardSubscribed=="NO"){
        setMessage_NotYetMembershipMessage_WithJoinButton();
   
   
       return
   }
    Ext.Viewport.remove(_FloatPanel_MembershipCardList_Upgrade);
    this.overlay = Ext.Viewport.add(FloatPanel_MembershipCardList_Upgrade());
    this.overlay.show();
    AddRoutePages("FloatPanel_MembershipCardList_UpgradeHide()");
    FloatPanel_MembershipCardList_UpgradeAdjustHeight();
    isFloatPanel_MembershipCardList_UpgradeOpen = 'Y';
   
   
  //  _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseHQAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo = EnterpriseAccountNo;

    _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCardCode;
    globalFloatPanelMerchantDetailPage_MembershipCardCode= MembershipCardCode;
    globalFloatPanelMerchantDetailPage_EnterpriseAccNo = EnterpriseAccountNo;

    globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed = isMembershipCardSubscribed;
    _FloatPanel_MembershipCardList_Upgrade_ID = 0;
    MembershipTag = isMembershipCardSubscribed;
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_GetMembershipCard').setHidden(true);
    //Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_DeleteMembershipCard').setHidden(false);

   // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
   //// Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
    
   // Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
   // FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoStore(EnterpriseHQAccountNo, EnterpriseAccountNo);
    FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode)
    
    FloatPanel_MerchantDetailPageHide();
    Dashboard_SearchMerchantListHide();


}





var globalOpenMembershipCardList_Upgrade_From;

function FloatPanel_MembershipCardList_UpgradeAdjustHeight() {

    return;
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    var newHeightss = x - 332;
   


    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_MembershipCardList_MyMembershipCard") {
       // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
    }
    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_RewardStoreMembershipCard")
    {
        console.log(globalOpenMembershipCardList_Upgrade_From);
        console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 1);
           // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
        }
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
          //  Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        }
    }
    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_MerchantDetailPage") {
       
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 1);
           // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
            disabledBottomButton();
            MembershipTag = 'NO';
        }
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
            //Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);           
            MembershipTag = 'YES';
        }
    }

   



    if (globalOpenMembershipCardList_Upgrade_From == "DashboardMain") {
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "NO") {
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 1);
           // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(false);
            disabledBottomButton();
            MembershipTag = 'NO';
        }
        if (globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed == "YES") {
            console.log(globalFloatPanel_MembershipCardList_UpgradeShow_FromAyohaMerchant_isMembershipCardSubscribed);
            Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
           // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);           
            MembershipTag = 'YES';
        }
      
    }




    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_AyohaStore_MembershipCardUsed") {
      //  Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
    }
    if (globalOpenMembershipCardList_Upgrade_From == "FloatPanel_AyohaStore_MembershipCardBeingUsed") {
      //  Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
        Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID').setHeight(x + 7);
    }
    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setHeight(newHeights);
    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Campaignlist').setHeight(newHeights-270);


    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardDetails').setHeight(newHeightss);
    Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardTransactionList').setHeight(newHeightss);
    

  

}



function FloatPanel_MembershipCardList_UpgradeHide(fromBack,animCfg){

    // if (isFloatPanel_MembershipCardList_UpgradeOpen == 'Y') {
    //     _FloatPanel_MembershipCardList_Upgrade.hide(); isFloatPanel_MembershipCardList_UpgradeOpen = 'N'; _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "N";
    //     RemovePages("FloatPanel_MembershipCardList_UpgradeHide()");
    // }



    

    if (isFloatPanel_MembershipCardList_UpgradeOpen == 'Y') {
       
      

        if (animCfg) {
            _FloatPanel_MembershipCardList_Upgrade.hide(Ext.fx.Animation(animCfg));
          } else {
            _FloatPanel_MembershipCardList_Upgrade.hide();
          }
          isFloatPanel_MembershipCardList_UpgradeOpen = 'N';
          _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "N";
         
        
          // ✅ kalau bukan sebab browser BACK, kita sync history supaya state tak tinggal
          if (fromBack !== true) {
            AyohaBrowserBack.close('FloatPanel_MembershipCardList_Upgrade');
          }
    }
 
}







//var countEnterpriseSubscribedLoadFirst = 0
var _DataStore_MembershipCardLoadByEnterpriseAccNoStore;
var countMembershipCardLoadByEnterpriseAccNoStoreFirst;
var MmcCode = [];
var EnterpriseAccount = [];
var MembershipCardLevels = [];
function FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore(MembershipCardCode) {

 
    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();

    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //////Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
        //////    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
        //////    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
        //////    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
        //////    MembershipCardCode: MembershipCardCode
        //////});
       // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
      //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
      //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
       /////// var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
        var count = _DataStore_MembershipCardAyohaUserMembershipCardStore.getCount();
      

        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_MembershipCardAyohaUserMembershipCardStore.getAt(i);
            var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
            var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
            var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
            var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
            var MembershipCardType = modelRecorded.get('MembershipCardType');
            var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
            var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
            var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
            var MembershipCardCode = modelRecorded.get('MembershipCardCode');
            var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
           
           
            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
     //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
     //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
     //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
     //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
     //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
     //                                       '</div>' +
     //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');


            
            

            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);
      
        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
      //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');
     

        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}










function FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_FloatPanel_MerchantDetailPage(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();


   //alert(MembershipCardCode)

    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //////Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
        //////    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
        //////    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
        //////    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
        //////    MembershipCardCode: MembershipCardCode
        //////});
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
        /////// var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
        var count = _DataStore_MembershipCardAyohaUserMembershipCardStore.getCount();


        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_MembershipCardAyohaUserMembershipCardStore.getAt(i);
            var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
            var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
            var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
            var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
            var MembershipCardType = modelRecorded.get('MembershipCardType');
            var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
            var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
            var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
            var MembershipCardCode = modelRecorded.get('MembershipCardCode');
            var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');


            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
            //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                       '</div>' +
            //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}



function FloatPanel_MembershipCardList_Upgrade_MembershipCardAyohaUserMembershipCardStore_Maindashboard(MembershipCardCode) {


    MmcCode.length = 0;
    MembershipCardLevels.length = 0;
    //Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
    //    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardAyohaUserMembershipCardStore').load();

 


    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseAccNo', _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('EnterpriseHQAccNo', _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setExtraParam('MembershipCardCode', MembershipCardCode);
    _DataStore_MembershipCardAyohaUserMembershipCardStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardAyohaUserMembershipCard');
    _DataStore_MembershipCardAyohaUserMembershipCardStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //////Ext.getStore('MembershipCardAyohaUserMembershipCardStore').getProxy().setExtraParams({
        //////    EnterpriseAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseAccountNo,
        //////    EnterpriseHQAccNo: FloatPanel_RewardStoreMembershipCar_EnterpriseHQAccountNo,
        //////    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
        //////    MembershipCardCode: MembershipCardCode
        //////});
        // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
        /////// var myStore = Ext.getStore('MembershipCardAyohaUserMembershipCardStore');
        var count = _DataStore_MembershipCardAyohaUserMembershipCardStore.getCount();


        for (i = 0; i < count; i++) {
            var modelRecorded = _DataStore_MembershipCardAyohaUserMembershipCardStore.getAt(i);
            var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
            var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
            var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
            var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
            var MembershipCardType = modelRecorded.get('MembershipCardType');
            var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedMembershipNo');
            var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
            var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
            var MembershipCardCode = modelRecorded.get('MembershipCardCode');
            var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
            global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');


            MmcCode.push(MembershipCardCode);
            MembershipCardLevels.push(MembershipCardType);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            //       Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;height: 250px;width:100%;background-color: #fac;background-image: url('+ MembershipCardBackgroundImg +');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
            //                                    //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
            //                                                     //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
            //// '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;'+ ModifiedHeaderHeight +'" colspan="3">'+ModifiedEnterprisesLogo+' '+ ModifiedEnterprisesName +'</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">'+ MembershipCardType +'</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ ModifiedAyohaUserAccountNo +'</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">'+ AyohaUserAccountName +' </div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
            //                                       '</div>' +
            //                                      '<div style="width:100%;text-align:right;margin:-185px 0px 0px 3px;background-color: transparent;height:100px"><img src="'+ AyohaUserPhoto +'" alt="Image" style="width:90px;height:100px;border-radius: 10%;border: 1px solid white;margin:0px 10px 0px 0px"></div>');





            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHidden(false);
            Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_' + i).setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                                         //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
                                                          //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
     // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                             '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedAyohaUserAccountNo + '</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">00/0000</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">00/0000</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                                                      '</div>' +




                                           '</div>');
            //  '<div style="width:100%;text-align:right;



        }




        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);

        var MembershipCode = MmcCode[0];
        var MembershipCardTypes = MembershipCardLevels[0];
        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
        //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">1.' + MembershipCardTypes + '</div>');


        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}










var global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName;
var global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo;
var global_FloatPanel_MembershipCardList_Upgrade_EnterprisesTagLine;
function FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore(EnterpriseHQAccountNo, EnterpriseAccountNo,MembershipCardCode) {
  
    MmcCode.length = 0;
    //Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').getProxy().setExtraParams({
    //    EnterpriseAccNo: EnterpriseAccountNo,
    //    EnterpriseHQAccNo: EnterpriseHQAccountNo,
    //    AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
    //    MembershipCardCode: MembershipCardCode
    //});
    //Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').load();


//alert('EnterpriseAccountNo:' +EnterpriseAccountNo)
//alert('MembershipCardCode:' + EnterpriseHQAccountNo)
//alert(MembershipCardCode);

    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', EnterpriseAccountNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccountNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('AyohaUserAccountNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', EnterpriseHQAccountNo);
    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCard/MembershipCardLoadByEnterpriseAccNoMembershipCardCode');
   

    _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
               // var count = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getCount();
       
             //   alert(count);
                        var modelRecorded = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getAt(0);
                        var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
                        var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
                        var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
                        var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
                        var MembershipCardType = modelRecorded.get('MembershipCardType');
                        var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedAyohaUserAccountNo');
                        var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
                        var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
                        var MembershipCardCode = modelRecorded.get('MembershipCardCode');
                        var ModifiedMembershipNo = modelRecorded.get('ModifiedMembershipNo');
                        var ValidUntilDateMonthYearOnly = modelRecorded.get('ValidUntilDateMonthYearOnly');
                
                        var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
                        var ModifiedMemberSinceDate = modelRecorded.get('ModifiedMemberSinceDate');
                        var MembershipCardBackgroundImg_back = modelRecorded.get('MembershipCardBackgroundImg_back');
                
                        global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
                        global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
                       
                        
                        MmcCode.push(MembershipCardCode);
                







                                                       var html =
                                                       '<div class="myContent" style="'
                                                     + 'position:relative;overflow:hidden;'
                                                     + 'width:100%;height:212px;'
                                                     + 'border-radius:20px;'
                                                     + 'background-image:url(' + MembershipCardBackgroundImg + ');'
                                                     + 'background-size:100% 100%;background-position:center;background-repeat:no-repeat;'
                                                     + '">' +
                                                     
                                                       // ✅ dark overlay (left + bottom) macam dalam gambar
                                                       '<div style="position:absolute;inset:0;border-radius:20px;'
                                                     + 'background:'
                                                     + 'linear-gradient(90deg, rgba(0,0,0,.72) 0%, rgba(0,0,0,.40) 55%, rgba(0,0,0,.08) 100%),'
                                                     + 'linear-gradient(180deg, rgba(0,0,0,.08) 0%, rgba(0,0,0,.55) 100%);'
                                                     + '"></div>' +
                                                     
                                                       // content wrapper
                                                       '<div style="position:relative;z-index:2;padding:2px 14px 12px 14px;height:100%;">' +
                                                     
                                                         // Header (logo bulat kiri + nama kedai)
                                                         '<div style="display:flex;align-items:center;' + (ModifiedHeaderHeight || '') + '">' +
                                                     
                                                           // Logo circle
                                                           '<div style="width:44px;height:44px;border-radius:999px;'
                                                         + 'background:rgba(255,255,255,.85);'
                                                         + 'display:flex;align-items:center;justify-content:center;'
                                                         + 'box-shadow:0 8px 18px rgba(0,0,0,.25);'
                                                         + 'overflow:hidden;">'
                                                         + ModifiedEnterprisesLogo +
                                                           '</div>' +
                                                     
                                                           // Store name (ellipsis)
                                                           '<div style="margin-left:10px;'
                                                         + 'color:#fff;font-weight:800;font-size:18px;'
                                                         + 'text-shadow:0 2px 10px rgba(0,0,0,.55);'
                                                         + 'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;'
                                                         + 'max-width:240px;">'
                                                         + ModifiedEnterprisesName +
                                                           '</div>' +
                                                     
                                                         '</div>' +
                                                     
                                                         // Middle left content (PLATINUM / number / name)
                                                         '<div style="margin-top:10px;margin-left:6px;">' +
                                                     
                                                           '<div style="color:#fff;'
                                                         + 'font-size:22px;font-weight:900;letter-spacing:1px;'
                                                         + 'text-shadow:0 2px 10px rgba(0,0,0,.55);'
                                                         + 'font-family:Arial,sans-serif;">'
                                                         + MembershipCardType +
                                                           '</div>' +
                                                     
                                                           '<div style="margin-top:2px;color:#fff;'
                                                         + 'font-size:18px;font-weight:800;letter-spacing:2px;'
                                                         + 'text-shadow:0 2px 10px rgba(0,0,0,.55);'
                                                         + 'font-family:Orbitron,Arial,sans-serif;">'
                                                         + modelRecorded.get('MembershipNo') +
                                                           '</div>' +
                                                     
                                                           '<div style="margin-top:4px;color:rgba(255,255,255,.92);'
                                                         + 'font-size:11px;font-weight:700;letter-spacing:.6px;'
                                                         + 'text-transform:uppercase;'
                                                         + 'text-shadow:0 2px 10px rgba(0,0,0,.55);'
                                                         + 'font-family:Arial,sans-serif;">'
                                                         + AyohaUserAccountName +
                                                           '</div>' +
                                                     
                                                         '</div>' +
                                                     
                                                         // Bottom left (Member Since)
                                                         '<div style="position:absolute;left:21px;bottom:12px;">' +
                                                           '<div style="color:rgba(255,255,255,.85);font-size:10px;'
                                                         + 'font-family:Arial,sans-serif;text-shadow:0 2px 10px rgba(0,0,0,.55);">Member Since</div>' +
                                                           '<div style="margin-top:2px;color:#fff;font-size:10px;font-weight:700;'
                                                         + 'font-family:Arial,sans-serif;text-shadow:0 2px 10px rgba(0,0,0,.55);">'
                                                         + ModifiedMemberSinceDate +
                                                           '</div>' +
                                                         '</div>' +
                                                     
                                                         // Bottom right (Valid Until)
                                                         '<div style="position:absolute;right:21px;bottom:12px;text-align:right;">' +
                                                           '<div style="color:rgba(255,255,255,.85);font-size:10px;'
                                                         + 'font-family:Arial,sans-serif;text-shadow:0 2px 10px rgba(0,0,0,.55);">Valid Until</div>' +
                                                           '<div style="margin-top:2px;color:#fff;font-size:10px;font-weight:700;'
                                                         + 'font-family:Arial,sans-serif;text-shadow:0 2px 10px rgba(0,0,0,.55);">'
                                                         + ModifiedUntilDate +
                                                           '</div>' +
                                                         '</div>' +
                                                     
                                                       '</div>' +
                                                     '</div>';
                                                     
                                                     // then use: Ext.getCmp('...').setHtml(html);
                                                     







                                                     Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHidden(false);
                                                     Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHtml(html);
                                                    //  Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +                                                    
                                                    //                                   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-7px 0px 0px 0px;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMembershipNo + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMemberSinceDate + '</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
                                                    //                                                                            '</div>' +
                                             
                                             
                                             
                                             
                                                    //                                 '</div>');





                       // Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_1').setHidden(false);
                      //  Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_1').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg_back + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border-color:white;border-style:solid;border-width:1px;"/>');
                
                        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);
                        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">' + MembershipCardType + '</div>');
                
                        var MembershipCode = MmcCode[0];
                        _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
                       // alert(MembershipCode)
                        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
                        //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
                        Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);
                
                        _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";
            
  
               
            } else {
               alert('error')
              //  globalisSuccessCheckinController_Dashboard_LoadVoucherPerksOpen="N";
              
            }
        }
    });












//     var task = Ext.create('Ext.util.DelayedTask', function () {

//         Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore').getProxy().setExtraParams({
//             EnterpriseAccNo: EnterpriseAccountNo,
//             EnterpriseHQAccNo: EnterpriseHQAccountNo,
//             AyohaUserAccountNo: GetCurrAyohaUserAccountNo(),
//             MembershipCardCode: MembershipCardCode
//         });
//         // _DataStore_MembershipLoadBySubscriberAccNoStore = Ext.StoreMgr.get('MembershipCardLoadByEnterpriseAccNoStore').load();
//         //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
//         //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
//         //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)
//        // var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore');
//         var count = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getCount();
       
// console.log(count);
//         var modelRecorded = _DataStore_MembershipCardLoadByEnterpriseAccNoMembershipCardCodeStore.getAt(0);
//         var MembershipCardBackgroundImg = modelRecorded.get('MembershipCardBackgroundImg');
//         var ModifiedHeaderHeight = modelRecorded.get('ModifiedHeaderHeight');
//         var ModifiedEnterprisesLogo = modelRecorded.get('ModifiedEnterprisesLogo');
//         var ModifiedEnterprisesName = modelRecorded.get('ModifiedEnterprisesName');
//         var MembershipCardType = modelRecorded.get('MembershipCardType');
//         var ModifiedAyohaUserAccountNo = modelRecorded.get('ModifiedAyohaUserAccountNo');
//         var AyohaUserAccountName = modelRecorded.get('AyohaUserAccountName');
//         var AyohaUserPhoto = modelRecorded.get('AyohaUserPhoto');
//         var MembershipCardCode = modelRecorded.get('MembershipCardCode');
//         var ModifiedMembershipNo = modelRecorded.get('ModifiedMembershipNo');
//         var ValidUntilDateMonthYearOnly = modelRecorded.get('ValidUntilDateMonthYearOnly');

//         var ModifiedUntilDate = modelRecorded.get('ModifiedUntilDate');
//         var ModifiedMemberSinceDate = modelRecorded.get('ModifiedMemberSinceDate');
//         var MembershipCardBackgroundImg_back = modelRecorded.get('MembershipCardBackgroundImg_back');

//         global_FloatPanel_MembershipCardList_Upgrade_EnterprisesName = modelRecorded.get('EnterprisesName');
//         global_FloatPanel_MembershipCardList_Upgrade_EnterprisesLogo = modelRecorded.get('EnterprisesLogo');
       
        
//         MmcCode.push(MembershipCardCode);

//         Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHidden(false);
//         Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_0').setHtml('<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
//                                      //'<div style="width:50%;text-align:right;margin:15px 0px 0px 150px;background-color: transparent;height:5px;"><img src="{BusinessTypeIconPath}" alt="Image" style="width:22px;height:22px;margin:0px 0px -15px 0px;"></font></div>' +
//                                                       //     '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><thead><tr><th style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 15px;text-align:left;vertical-align:top;word-break:normal;color:white;" colspan="4"><div style="margin:1px 0px 0px 0px;width:100%;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Campaign End:{EndDateOnly}<br><div style="margin:-4px 0px 0px 0px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;">Fees:RM{StampCampaignFees}({FeesCycle})</div></div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:center;color:white;font-family:Courier New;font-size:24px;font-weight:bold;border-top: 1px solid white;padding:6px 0px">TARMIZI RAHIM</div></th></tr></thead><tbody><tr><td style="background-color: transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:12px;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;word-break:normal" rowspan="3"><br><img src="{EnterpriseLogo}" alt="Image" style="width:100px;height:100px;border-radius: 50%;border: 1px solid black;margin:-15px 0px 0px 10px"></td><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal;color:white" colspan="3"><div style="width:95%;margin:17px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{EnterpriseName}</div></td></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px 0px 0px;text-align:left;vertical-align:top;word-break:normal;color:white" colspan="3" rowspan="2"><div style="width:85%;margin:-3px 0px 0px 0px;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:11px;font-weight:normal">{EnterpriseAddress}</div></td></tr><tr></tr><tr><td style="background-color:transparent;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 0px;text-align:center;vertical-align:middle;word-break:normal;color:white" colspan="4"><div style="margin:0px 0px 0px 0px;width:100%;border-bottom: 2px none white;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;color:white;font-weight:bold;"><i>{StampCampaignName}</i><hr style="width:80%;text-align:center;margin-top:0;color:white;background-color:white"></div><br><div style="margin:-30px 0px 0px 0px;width:100%">Stamp <font size=4>{Stamps}</font></div></td></tr><tr><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 0px 20px;" colspan="2">Last Stamp:{LastStampedDate}</td><td style="background-color:#E5E7E9;border-style:solid;border-width:0px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 5px;text-align:right;vertical-align:middle;word-break:normal;color:black;border-radius: 0px 0px 20px 0px;" colspan="2">{ModifiedNextRedeem}</td></tr></tbody></table>' +
//  // '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:5px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:80px" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:30px 0px 0px 10px;width:100%;text-align:left;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:22px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAyohaUserAccountNo}</div><br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{AyohaUserAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:20px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-25px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2021</div><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:20px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-25px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px">02/2022</div></td><br><div style="margin:-15px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//                                          '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-7px 0px 0px 0px;" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;' + ModifiedHeaderHeight + '" colspan="3">' + ModifiedEnterprisesLogo + ' ' + ModifiedEnterprisesName + '</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:0px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">' + MembershipCardType + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMembershipNo + '</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + AyohaUserAccountName + '</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:30px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedMemberSinceDate + '</div><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:30px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">' + ModifiedUntilDate + '</div></td><br><div style="margin:-10px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></tbody></table>' +
//                                                                                   '</div>' +




//                                        '</div>');
//         Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_1').setHidden(false);
//         Ext.getCmp('carouselFloatPanel_MembershipCardList_Upgrade_1').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;height:212px;background-color: #fac;background-image: url(' + MembershipCardBackgroundImg_back + ');background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border-color:white;border-style:solid;border-width:1px;"/>');

//         Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_Carousel').setHidden(false);
//         Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_CardLevel').setHtml('<div style="margin:0px 0px 0px 0px;width:100%;text-align:left;color:white;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-bottom: 1px none white;padding:0px 0px">' + MembershipCardType + '</div>');

//         var MembershipCode = MmcCode[0];
//         _FloatPanel_MembershipCardList_Upgrade_MembershipCode = MembershipCode;
//        // alert(MembershipCode)
//         FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MembershipCode);
//         //  FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo);
//         Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_Loading').setHidden(true);

//         _FloatPanel_MembershipCardList_Upgrade_isFirstLoad = "Y";

//         Ext.Viewport.setMasked(false);










//     });
//     task.delay(1000);




}

function FloatPanel_MembershipCardList_Upgrade_StampCampaignLoadByEnterpriseAccNoStore(EnterpriseAccountNo) {
    Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore').getProxy().setExtraParams({
        EnterpriseAccNo: EnterpriseAccountNo
    });
    Ext.StoreMgr.get('StampCampaignLoadByGetLoyaltyCardStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore').getProxy().setExtraParams({
            EnterpriseAccNo: EnterpriseAccountNo
        });

        var myStore = Ext.getStore('StampCampaignLoadByGetLoyaltyCardStore');

        Ext.Viewport.setMasked(false);





    });
    task.delay(2000);
}




function FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(MMCCode) {
  
  //  Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').removeAll();
    _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.removeAll();
   



    var mmmCode = MMCCode;
    if (mmmCode) {
    //Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //    MembershipCardCode: MMCCode,
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //});
        //Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
       
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MMCCode);
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardCampaingEntitled/MembershipCardCampaingEntitledLoadByMembershipCardCode');
      //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load();


        _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.load({
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
    //     //Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //     //    MembershipCardCode: MMCCode,
    //     //    SubscriberAccNo: GetCurrAyohaUserAccountNo(),
    //     //});
    //     //Ext.StoreMgr.get('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore').load();
    //     //var myStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
    //     var Count = _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore.getCount();
 
    //   //  _DataStore_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore = Ext.getStore('MembershipCardCampaingEntitledLoadByMembershipCardCodeStore');
    //   LoadingPanelHide();
    //   Ext.Viewport.setMasked(false);

    // });
    // task.delay(1000);
   


}
}


function FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(MembershipCode, EnterpriseAccountNo) {
   // Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').removeAll();



   if (MembershipCode) {
   _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', MembershipCode);
   _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseHQAccNo', EnterpriseAccountNo);
   _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardEnterprisesEntitled/MembershipCardEnterprisesEntitledLoadByMembershipCardCode');
   
   _DataStore_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore.load({
       callback: function (records, operation, success) {
           if (success && records.length > 0) {
             //  console.log('Store loaded successfully, total records: ' + records.length);
   
              
           } else {
             //  console.error('Failed to load store data or no record found.');
              // LoadingPanelHide();
           }
       }
   });
   }











    // if (MembershipCode) {
    //     Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //         MembershipCardCode: MembershipCode,
    //         EnterpriseHQAccNo: EnterpriseAccountNo,
    //     });
    //     Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    //     var task = Ext.create('Ext.util.DelayedTask', function () {
    //         Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').getProxy().setExtraParams({
    //             MembershipCardCode: MembershipCode,
    //             EnterpriseHQAccNo: EnterpriseAccountNo,
    //         });
    //         Ext.StoreMgr.get('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore').load();
    //         var myStore = Ext.getStore('MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore');
    //         var StampCount = myStore.getCount();

    //         //Ext.getCmp('htmlSubscriberMaster_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
    //         // adjustHeight();
    //         Ext.Viewport.setMasked(false);

    //     });
    //     task.delay(2000);
    // }
}





function MembershipCardDelete() {
  

    var obj = {
        "ID": _FloatPanel_MembershipCardList_Upgrade_ID,
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "MembershipCardCode": _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
        "CreatedBy": GetCurrentUserLogin(),

    };
   
    Ext.Ajax.request({

        // type: "POST",

        // url: GetAPIurl() + '/Memberships/MembershipsDelete',

        // dataType: "json",
        // data: JSON.stringify(obj),
        // headers: {
        //     "Content-Type": "application/json; charset=utf-8"
        // },


        url: GetAPIurl() + '/Memberships/MembershipsDelete',
        method: 'POST',                 // ✅ betul
        jsonData: obj,                 // ✅ auto encode JSON + set body
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccess("Delete Membership Card Success!");
                FloatPanel_MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();
                FloatPanel_MembershipCardList_UpgradeHide(false);
                //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

              //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

            }
            else {

                swalFireFail("Delete Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            Ext.Viewport.unmask();
            swalFireFail("Delete Failed!!");
        }

    });
}




function getMembershipCard() {


}



var AYOHA_BOTTOMNAV_ITEMS = [
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EntitleReward',     // 0
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_EnttileOutlet',     // 1
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_AyohaStore',        // 2
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction',   // 3
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo',   // 4
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_TermAndCondition',  // 5
    'containerFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard'         // 6 (kalau guna)
  ];
  
//   function AyohaBottomNav_SetActive(index){
 
//     alert('AyohaBottomNav_SetActive:'+index)

//     for (var i = 0; i < AYOHA_BOTTOMNAV_ITEMS.length; i++) {
//       var cmp = Ext.getCmp(AYOHA_BOTTOMNAV_ITEMS[i]);
//       if (!cmp) continue;
  
//       // buang active dari semua
//       cmp.removeCls('is-active');
  
//       // set active untuk selected
//       if (i === index) cmp.addCls('is-active');
//     }
//   }




  function AyohaBottomNav_SetActive(idx){
    var nav = Ext.getCmp('containerFloatPanel_MembershipCardList_Upgrade_MenuBottomInner');
    if (!nav) return;
  
    // ambil item nav yang memang dalam container ni sahaja
    var navItems = nav.query('container[cls~=ayohaBottomNavItem]');
    navItems = navItems.filter(function(it){ return !it.getHidden(); });
  
    navItems.forEach(function(it){ it.removeCls('is-active'); });
  
    var target = navItems[idx];
    if (target) target.addCls('is-active');
  }


function MoveMembeshipCarousel(Idx) {
   var EntAccNo=AppState.MainDashboard.EnterpriseAccNo;
    if (Idx == 0) {
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(0);
        FloatPanel_MembershipCardList_Upgrade_MembershipCardCampaingEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipCardList_Upgrade_MembershipCode);
       // Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:purple;text-align: center;font-size:8px;width:100%;font-weight:bold"><u>Membership</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-20px 0px 0px 0px"><u>Privillage</u></div>');       
      //  Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Entitle</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
        //Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Privillage</u></div>');
        if (MembershipTag == 'NO') {
            return;
        }
        // Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        // Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        // Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        // Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
      
    }
    if (Idx == 1) {
       Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(1);
      
       FloatPanel_MembershipCardList_Upgrade_MembershipCardEnterprisesEntitledLoadByMembershipCardCodeStore(_FloatPanel_MembershipCardList_Upgrade_MembershipCode, EntAccNo);
       // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Entitle Outlets</u></div>');
       // Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
       // Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:bold"><u>Entitle</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Outlets</u></div>');
      //  Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');




        if (MembershipTag == 'NO') {
            return;
        }
        //  Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        //  Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        //  Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        //  Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
       
       
       
       
       
      
                                              
       
       
    }
    if (Idx == 2) {
        

        if (MembershipTag == 'NO') {
            return;
        }
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(2); 
        // Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Card Transactions</u></div>');     
        FloatPanel_MembershipCardList_Upgrade_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore();
        // Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px"><u>Card</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Transactions</u></div>');
        // Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        // Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        // Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
       // Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
       // Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:normal">Entitle</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
       // Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');







        









    }
    if (Idx == 3) {
        if (MembershipTag == 'NO') {
            return;
        }

        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(3);
     
        // Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        // Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px"><u>Card</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Details</u></div>');
        // Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        // Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">UnSubscribe</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Membership</div>');
       // Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
       // Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:normal">Entitle</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
       // Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');



       
       
       
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:left;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Membership Card Detail</u></div>');
       
       
        FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore();
    }
    if (Idx == 4) {
        if (MembershipTag == 'NO') {
            return;
        }


       
        ShowConfirmUnsubscribe_Membership();
        return;




        






        // ExtJS 7 Modern: confirm dialog (equivalent to Swal.fire)
Ext.Msg.show({
  title: 'Confirm Unsubscribe',
  message:
    'Unsubscribing from this membership will affect your current points, stamps, and privilege card.<br><br>' +
    'You will no longer be able to access this card.<br><br>' +
    '<b>Please think carefully before proceeding.</b>',
  buttons: [
    { text: 'Cancel', itemId: 'cancel' },
    { text: 'Yes, Unsubscribe', itemId: 'yes' }
  ],
  // optional icon: 'warning' (depends on theme/build)
  fn: function (btnId) {
    if (btnId === 'yes') {
      //MembershipCardDelete();
    }
  }
});
 
        // Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
        // Ext.getCmp('htmlCardDetailTxt').setHtml('<div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Details</div>');
        // Ext.getCmp('htmlTermAndConditionTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Term &</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Conditions</div>');
        // Ext.getCmp('htmlUnsubscribeTxt').setHtml('<div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px"><u>UnSubscribe</u></div><br><div style="font-weight:bold;color:purple;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px"><u>Membership</u></div>');
       // Ext.getCmp('htmlMembershipTxt').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Membership</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Privillage</div>');       
        //Ext.getCmp('htmlMembershipTxt02').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px;font-weight:normal">Entitle</div><br><div style="font-weight:normal;color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Outlets</div>');
        //Ext.getCmp('htmlAyohaStoreTxt01').setHtml('<div style="color:grey;text-align: center;font-size:8px;width:100%;;margin:3px 0px 0px 0px">Ayoha</div><br><div style="color:grey;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Store</div>');

        //////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_EntitiledReward').setHtml('<div style="width:100%;text-align:center;color:purple;font-family: Arial; font-size:13px;font-weight:bold;"><u>Unsubcribe Membership</u></div>');
        Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CarouselEntitleReward_EntitleEnterprise').setActiveItem(4);
       
       
       
        // Swal.fire({
        //     title: 'Are you sure To delete?',
        //     text: "Unsubscribe membership  will effect your Current Point,Stamp and Previllage card. Your are no longer accessible to this card. Think Carefully before proccedd !",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes'
        // }).then(function (result) {
        //     if (result.isConfirmed) {
        //         MembershipCardDelete();
        //     }
        // });
    }
    
}










function ShowConfirmUnsubscribe_Membership() {

  var fp = Ext.getCmp('FloatPanel_MembershipCardList_UpgradeID');
  if (fp) {
    fp.setMasked({ xtype: 'mask', cls: 'ayohaModalMask' });
  }

  var dlg = Ext.create('Ext.Dialog', {
    cls: 'ayohaPremiumDialog ayohaPremiumDialogUnsub',
    centered: true,
    floated: true,
    modal: true,
    hideOnMaskTap: false,
    zIndex: 999999,

    width: '95%',
    maxWidth: 520,

    items: [{
      xtype: 'container',
      cls: 'ayohaDlgWrap',
      items: [
        {
          xtype: 'container',
          cls: 'ayohaDlgHeader',
          layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'   // kalau nak center; tukar 'start' kalau nak kiri
          },
          items: [
            {
              xtype: 'component',
              cls: 'ayohaDlgHeaderIcon',
              html:
                '<div class="ayohaDlgHeaderIconCircle">' +
                  '<img class="ayohaDlgHeaderIconImg" src="resources/icons/CancelMembershipCard.png" />' +
                '</div>'
            },
            {
              xtype: 'component',
              cls: 'ayohaDlgHeaderTitle',
              html: 'Confirm Unsubscribe',
              flex: 1
            }
          ]
        },

        // ✅ PREMIUM HEADER (icon + title)
        // {
        //   xtype: 'container',
        //   cls: 'ayohaDlgHeader',
        //   items: [
           
        //     {
        //       xtype: 'component',
        //       cls: 'ayohaDlgHeaderIcon',
        //       html: '<div class="ayohaDlgHeaderIconCircle">' +
        //               '<img class="ayohaDlgHeaderIconImg" src="resources/icons/DeletePurple.png" />' +
        //             '</div>'
        //       // kalau takde image warningWhite.png, guna emoji:
        //       // html: '<div class="ayohaDlgHeaderIconCircle">!</div>'
        //     },
        //     {
        //       xtype: 'component',
        //       cls: 'ayohaDlgHeaderTitle',
        //       html: 'Confirm Unsubscribe'
        //     },
            
        //   ]
        // },

        // ✅ BODY (lebih kemas)
        {
          xtype: 'component',
          cls: 'ayohaDlgBody',
          html:
            '<div class="ayohaDlgMsg">' +
              '<div class="ayohaDlgLine">Unsubscribing will affect your <b>Points</b>, <b>Stamps</b>, and <b>Privilege</b>.</div>' +
              '<div class="ayohaDlgLine">You will no longer be able to access this card.</div>' +
              '<div class="ayohaDlgHint">Please think carefully before proceeding.</div>' +
            '</div>'
        }

      ]
    }],

    buttons: [{
      text: 'CANCEL',
      cls: 'ayohaDlgBtn ayohaDlgBtnCancel',
      handler: function () { dlg.destroy(); }
    },
{
  xtype:'spacer'
},
    {
      text: 'YES, UNSUBSCRIBE',
      cls: 'ayohaDlgBtn ayohaDlgBtnDanger',
      handler: function () {
        dlg.destroy();
        MembershipCardDelete();
      }
    }],

    listeners: {
      destroy: function () {
        if (fp) fp.setMasked(false);
      }
    }
  });

  if (fp) fp.add(dlg); else Ext.Viewport.add(dlg);
  dlg.show();
}



function GetMembershipCardEnableClick_containerFloatPanel_MembershipCardList_UpgradeBottom() {
 
    FloatPanel_MembershipCardManagement_TermAndConditionShow();
    return;




    //var obj = {
    //    "CampaignEnterpriseAccNo": _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
    //    "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
    //    //"MembershipByMethod": "AyohaStoreRequest",
    //    "MembershipByMethod": GetMembershipByMethod(),        
    //    "ReferalSubscriberAccNo": "NA",
    //    "MembershipCardCode": _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
    //    "CreatedBy": GetCurrentUserLogin(),

    //};
    //console.log(obj);
    //var _value = Ext.Ajax.request({

    //    type: "POST",

    //    url: GetAPIurl() + '/Memberships/MembershipsInsert',

    //    dataType: "json",
    //    data: JSON.stringify(obj),
    //    headers: {
    //        "Content-Type": "application/json; charset=utf-8"
    //    },

    //    success: function (result, request) {

    //        data = Ext.decode(result.responseText.trim());

    //        if (data.success == "true") {

    //            swalFireHoorayMessage("Membership Process Successfully!,Please Check your Card in Membership Card List.");
    //            FloatPanel_MembershipCardList_UpgradeHide();
    //            FloatPanel_RewardStoreMembershipCardHide();
    //            //  Load_FloatPanel_AyohaEnterpriseAccount_AyohaEnterprisesUserLoadByEnterpriseHQAccNoStore();

    //            //  Load_FloatPanel_AyohaCardManagement_EditCard_StampCampaignEnterprisesLoadByStampCampaignCodeStore();

    //        }
    //        else {

    //            swalFireFail("Membership Card Failed!!!" + "<br><font size=1>" + result.responseText.trim() + "</font>");
    //        }
    //        Ext.Viewport.unmask();

    //    },

    //    failure: function (result, request) {
    //        Ext.Viewport.unmask();
    //        swalFireFail("Delete Failed!!");
    //    }

    //});
}



function disabledBottomButton() {

    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardTransaction').setHtml('<img src="resources/icons/cardTransactionDisabled.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlCardTransactionTxt01').setHtml('<div style="color:#DCDCDC;text-align: center;font-size:8px;width:100%;margin:3px 0px 0px 0px">Card</div><br><div style="color:#DCDCDC;text-align: center;font-size:8px;width:100%;margin:-22px 0px 0px 0px">Transactions</div>');
   // Ext.getCmp('htmlTransactionTxt').setHtml('<font size=1 color=#DCDCDC>Transaction</font>');

   

    

    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_CardDetailsInfo').setHtml('<img src="resources/icons/disableCardInfo.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlCardDetailTxt').setHtml('<font size=1 color=#DCDCDC>Card Detail</font>');
    //Ext.getCmp('htmlInfoTxt').setHtml('<font size=1 color=#DCDCDC>Info</font>');





    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_NFC').setHtml('<img src="resources/icons/NFCdisabled.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlNFCTxt').setHtml('<font size=1 color=#DCDCDC>NFC</font>');
    Ext.getCmp('htmlEnabledTxt').setHtml('<font size=1 color=#DCDCDC>Enabled</font>');





    Ext.getCmp('btnFloatPanel_MembershipCardList_Upgrade_MenuBottom_DeleteCard').setHtml('<img src="resources/icons/disableCardUnsubscribe.png" width="26" height="26" alt="Company Name">');
    Ext.getCmp('htmlUnsubscribeTxt').setHtml('<font size=1 color=#DCDCDC>Unsubscribe</font>');
  //  Ext.getCmp('htmlMembershipCardTxt').setHtml('<font size=1 color=#DCDCDC>Membership Card</font>');

}







function FloatPanel_MembershipCardList_Upgrade_LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore(MCC) {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo(),
        MembershipCardCode: MCC
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
            MembershipCardCode: MCC
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoAndMembershipCardCodeStore');
        //_DataStore_LoyaltyStampLoadBySubscriberAccNoStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        //StampCount = myStore.getCount();
        //if (isFloatPanel_LoyaltyCard_StampHistoryOpen == 'Y') {
        //    Ext.getCmp('htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        //}

        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);




}





function FloatPanel_MembershipCardList_Upgrade_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore() {
    

    _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore.getProxy().setExtraParam('AyohaUserAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore.getProxy().setExtraParam('MMC', _FloatPanel_MembershipCardList_Upgrade_MembershipCode);
    _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore.getProxy().setExtraParam('EnterprisesAccNo', AppState.MainDashboard.EnterpriseAccNo);
   
    _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/MembershipCardExtent/MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNo');
    
    _DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
            //  alert('Store loaded successfully, total records: ' + records.length);
              Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardDetails').setStore(_DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore);
               
            } else {
                Ext.getCmp('FloatPanel_MembershipCardList_Upgrade_CardDetails').setStore(_DataStore_MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore);
             
           //  alert('Failed to load store data or no record found.');
               // LoadingPanelHide();
            }
        }
    });




return



    Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').getProxy().setExtraParams({
        AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
        MMC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
        EnterprisesAccNo:_FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo
    });
    Ext.StoreMgr.get('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').getProxy().setExtraParams({
            AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
            MMC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
            EnterprisesAccNo: _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo
        });
        Ext.StoreMgr.get('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore').load();
        var myStore = Ext.getStore('MembershipCardLoadBySubscriberAccNoMembershipCardCodeEnterpriseAccNoStore');
        //_DataStore_LoyaltyStampLoadBySubscriberAccNoStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        //var StampCount = myStore.getCount();
        //alert(StampCount);
        //if (isFloatPanel_LoyaltyCard_StampHistoryOpen == 'Y') {
        //    Ext.getCmp('htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        //}

        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(800);




}






function FloatPanel_MembershipCardList_Upgrade_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore() {


    _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore.getProxy().setExtraParam('AyohaUserAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore.getProxy().setExtraParam('EnterprisesAccNo', AppState.MainDashboard.EnterpriseAccNo);
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore.getProxy().setExtraParam('MCC', _FloatPanel_MembershipCardList_Upgrade_MembershipCode);
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardPoint/AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCC');
    
    _DataStore_AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore.load({
        callback: function (records, operation, success) {
          
            if (success && records.length > 0) {
              // Ext.defer(function () {
              //   if (window._AyohaPatchTrxGroupHeaderNow) window._AyohaPatchTrxGroupHeaderNow();
              // }, 120);
            
            } else {
             
            }
        }
    });





return;



    Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').getProxy().setExtraParams({
        AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
        EnterprisesAccNo: _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
        MCC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
       
    });
    Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').getProxy().setExtraParams({
            AyohaUserAccNo: GetCurrAyohaUserAccountNo(),
            EnterprisesAccNo: _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo,
            MCC: _FloatPanel_MembershipCardList_Upgrade_MembershipCode,
           
        });
        Ext.StoreMgr.get('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore').load();
        var myStore = Ext.getStore('AyohaRewardPointLoadBySubscriberAccNoEnterpriseAccNoMCCStore');
        count = myStore.getCount();
        // adjustHeight();
        Ext.Viewport.setMasked(false);


    });
    task.delay(500);


}







function FloatPanel_MembershipCardList_Upgrade_AyohaStore() {
    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_MembershipCardList_Upgrade";
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    _isFloatPanel_AyohaStore_SaleItemDetail_loadFirstTime = 'N';





    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', _FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo);


    // _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('EnterpriseAccNo', globalFloatPanelMerchantDetailPage_EnterpriseAccNo);
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_EnterprisesLoadByMerchantCategory.getProxy().setUrl(GetAPIurl() + '/Enterprises/EnterprisesLoadByEnterpriseAccNoAndSubscriberAccNo');
    _DataStore_EnterprisesLoadByMerchantCategory.load();

    console.log(_FloatPanel_MembershipCardList_Upgrade_EnterpriseAccNo)
    console.log(GetCurrAyohaUserAccountNo())


    var task = Ext.create('Ext.util.DelayedTask', function () {

        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_EnterprisesLoadByMerchantCategory.getCount();
        var Store = _DataStore_EnterprisesLoadByMerchantCategory.getAt(0);
        var ID = Store.get('ID');
        //  FloatPanel_OrderCartHide();
        FloatPanel_RewardStore_OpenStore_FromFloatPanel_MembershipCardList_Upgrade(ID);

        LoadingPanelHide();


    });
    task.delay(500);


    Ext.Viewport.setMasked(false);
}






function AyohaTrxGroupHeader_ToBadge(listId) {
  var list = Ext.getCmp(listId || 'FloatPanel_MembershipCardList_Upgrade_CardTransactionList');
  if (!list || !list.element || !list.element.dom) return;

  // scope: kawasan list + parent (sebab ada sticky header kadang duduk dekat parent)
  var root = list.element.dom;
  var parent = (list.up && list.up() && list.up().element && list.up().element.dom) ? list.up().element.dom : root;

  var headers = parent.querySelectorAll('.x-list-header, .x-list-group-title, .x-group-header, [class*="list-header"]');

  function enc(s){
    return (Ext.String && Ext.String.htmlEncode) ? Ext.String.htmlEncode(s) : (s + '');
  }

  for (var i = 0; i < headers.length; i++) {
    var h = headers[i];
    if (!h || h.getAttribute('data-ayoha-badge') === '1') continue;

    // pastikan header ni berkait dengan list ni
    if (!(root.contains(h) || parent.contains(h))) continue;

    var inner = h.querySelector('.x-innerhtml') || h;
    var txt = (inner.textContent || inner.innerText || '').replace(/\s+/g,' ').trim();
    if (!txt) continue;

    // parse "FEBRUARY 2026 (16)"
    var m = txt.match(/^(.*?)(?:\s*\((\d+)\))?\s*$/);
    if (!m) continue;

    var label = (m[1] || '').trim();
    var count = (m[2] || '').trim();

    // filter yg betul2 month header (optional tapi elak tersalah patch)
    if (!/^(JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)\s+\d{4}$/i.test(label)) {
      continue;
    }

    h.setAttribute('data-ayoha-badge', '1');

    // ✅ tukar text jadi layout + badge
    inner.innerHTML =
      '<div class="trxHdrWrap">' +
        '<span class="trxHdrDot"></span>' +
        '<span class="trxHdrLabel">' + enc(label) + '</span>' +
        (count ? '<span class="trxHdrBadge">' + enc(count) + '</span>' : '') +
      '</div>';
  }
}