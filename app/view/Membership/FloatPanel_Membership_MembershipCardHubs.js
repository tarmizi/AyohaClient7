Ext.define('BuskartApp.view.Membership.FloatPanel_Membership_MembershipCardHubs', {

});

var _FloatPanel_Membership_MembershipCardHubs;


var isFloatPanel_Membership_MembershipCardHubsOpen = 'N';






function FloatPanel_Membership_MembershipCardHubs() {

    _FloatPanel_Membership_MembershipCardHubs =
    Ext.create('Ext.Panel', {
      
        //zIndex: 310,
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_Membership_MembershipCardHubsID',
        draggable: false,

        styleHtmlContent: true,

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
            duration: 150,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
            //type: 'slideOut',
            //direction: 'left',
            //easing: 'cubic-bezier(.7,0,.7,1)',
            //duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
       // style: 'background-color:white;',
        style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
       // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
        // listeners: {
        //     initialize: function (c) {
        //         this.element.on({
        //             swipe: function (e, node, options) {
        //                 //if (e.direction == "up") {
        //                 //    LoyaltyCardRedeemListHide();
        //                 //}
        //                 if (e.direction == "left") {
        //                     _FloatPanel_Membership_MembershipCardHubs.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'left',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
        //                     RemovePages("FloatPanel_Membership_MembershipCardHubsHide()");
        //                     isFloatPanel_Membership_MembershipCardHubsOpen = 'N';
        //                 } if (e.direction == "right") {
        //                     _FloatPanel_Membership_MembershipCardHubs.hide(Ext.fx.Animation({
        //                         type: 'slideOut',
        //                         direction: 'right',
        //                         easing: 'cubic-bezier(.7,0,.7,1)',
        //                         duration: 250

        //                     }));
        //                     RemovePages("FloatPanel_Membership_MembershipCardHubsHide()");
        //                     isFloatPanel_Membership_MembershipCardHubsOpen = 'N';
        //                 }
                      
        //             }
        //         });
        //     }
        // },
        
      
    
        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
              // style: ' background-color:transparent;',
               style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
               // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                layout: {
                    type: 'fit',

                },
               
                items: [
                    {
                        xtype: 'container',


                        layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'

                        },
                        items: [
                            {

                                xtype: 'container',
                                width: '100%',
                                docked: 'top',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_Membership_MembershipCardHubsHeader',
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
                                                         id: 'btnFloatPanel_Membership_MembershipCardHubsBack',
                                                         height: 30,
                                                         width: 35,
                                                         margin: '0 0 0 10',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_Membership_MembershipCardHubsHide();
                                                             // FloatPanel_Membership_MembershipCardHubs_AddCardHide();
                                                             isFloatPanel_Membership_MembershipCardHubsOpen = 'N';
                                                             _FloatPanel_Membership_MembershipCardHubs.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_Membership_MembershipCardHubsHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_Membership_MembershipCardHubs_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Membership Card Hubs</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                hidden:true,
                                                                id: 'btnFloatPanel_Membership_MembershipCardHubs_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_Membership_MembershipCardHubsOpen = 'N';

                                                                    _FloatPanel_Membership_MembershipCardHubs.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages(_FloatPanel_Membership_MembershipCardHubs, "isFloatPanel_Membership_MembershipCardHubsOpen");
                                                                    //FloatPanel_Membership_MembershipCardHubs_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_Membership_MembershipCardHubsStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_Membership_MembershipCardHubsCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'start',
                                    align: 'left'

                                },
                                scrollable: {
                                    direction: 'vertical',
                                    directionLock: true,
                                    indicators: false,
                                    bounces: false,
                                   
                                    //threshold: 20,
                                   
                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_Membership_MembershipCardHubs').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    {
                                        xtype: 'panel',
                                        height: 5
                                    },

                                    {
                                        xtype: 'container',
                                        width: '100%',
                                        height:1500,                                       
                                        style: 'background-color:transparent',
                                        id:'container_DashboardMembershipCardHubs_Main',
                                        layout: {
                                            // type: 'vbox',
                                            // align: 'stretch'
                                            type: 'vbox',
                                            pack: 'start',
                                            align: 'center',
                                        },
                                        items:[
                                          
                            
                            
                                            { 
                                                xtype: 'container',
                                               width: '100%',
                                               height:'100%',
                                             //  hidden:true,                  
                                             //  margin: '100 0 0 0',
                                               margin: '0 0 0 0',
                                               style: 'background-color:transparent',
                                               layout: {
                                               type: 'vbox',
                                               pack: 'start',
                                               align: 'center',
                                               },
                                                items:[
                                               
                            
                                              
                                                {
                                                    xtype: 'container',
                                                    width: '100%',
                                                    height: 610,                                  
                                                    margin: '15 0 0 0',
                                                    //zIndex:100,
                                                  
                                                    id: 'containerFloatPanel_DashboardMerchantMembershipEventxxxxpaid',
                                                    style: "background-color: transparent;",
                                                    // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'start',
                                                        align: 'center'
                            
                                                    },
                                                    items: [
                                                        // {
                                                        //     xtype: 'container',
                                                        //     width: '2%',
                                                        //     height: 470,
                                                        //     margin: '0 0 0 0',
                                                        //     //  hidden: true,
                                                        //     id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer01paid',
                                                        //     style: "background-color: transparent;",
                            
                                                        // },
                                                        {
                                                            xtype: 'container',
                                                            width: '100%',                           
                                                            id:'container_DashboardMembershipCardHubs',
                                                            margin: '0 0 0 0',
                                                            style: 'background-color:transparent',
                                                            layout: {
                                                            type: 'hbox',
                                                            pack: 'center',
                                                            align: 'center',
                                                            },
                                                            items: [
                              
                                {
                                    margin: '0 0 0 0',
                                    width: '100%',
                                   
                                   // html: '<div style="color:black;text-align: left;font-size:16px;width:100%;margin:0px 0px 0px 20px"><b>Membership Cards Hubs</b></div><br><br><div  style="color:black;text-align: left;font-size:12px;width:100%;margin:-25px 0px 0px 20px;font-weight:bold"> 👑 Paid Membership</div>'
                                    html: '<div  style="color:black;text-align: left;font-size:12px;width:100%;margin:0px 0px 0px 20px;font-weight:bold"> 👑 Paid Membership</div>'
                                   
                                },
                                                                          {
                                                                              xtype: 'spacer'
                                                                          },
                                                                          {
                                                                             xtype: 'button',
                                                                             height: 30,
                                                                             hidden:true,
                                                                             width: 30,
                                                                             margin: '3 0 0 -7',
                                                                           //  id: 'btnDashbordAyohaHotMerchant_SearchAyohaMerchant',
                                                                             //badgeText: "2",
                                                                             html: '<img src="resources/icons/searchPurple.png" width="20" height="20" alt="Company Name">',
                                                                             ui: 'plain',
                                                                             handler: function () {
                                                                                 FloatPanel_Membership_MembershipCardSaleDetailShow();
                                                                             }
                                                                         },
                                                            ]
                                                        },
                                                        {
                                                            margin: '0 0 0 0',
                                                            width: '100%',
                                                            height:50,
                                                            //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                                            html: '<div style="color:black;text-align: left;font-size:16px;width:95%;margin:0px 0px 0px 20px;height:50px"><img src="resources/icons/premiumper.jpeg" width="180" height="45" alt="Company Name"></b></div>'
                                                            // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                                        },
                                                        {
                                                            xtype: 'dataview',
                                                          id: 'Dashboard_MyAccount_UnSubscribedMembershipCardListDesignOne',
                                                            height: 470,
                                                            width: '95%',
                                                            margin: '0 0 0 10',
                                                           // style: 'background-color: transparent;',
                                                          //  style: 'background-color:rgba(255, 255, 255, 0);border-radius: 0px 0px 0px 0px;',
                                                            style: 'background-color:rgba(255, 255, 255, 0); border-radius:0;',
                                                            scrollable: {
                                                              direction: 'horizontal',
                                                              indicators: false
                                                            },
                                                           
                                                            disableSelection: true,
                                                            inline: {
                                                              wrap: false
                                                            },
                                                            itemHeight: 'auto',
                                                           
                                                            // store: {
                                                            //   fields: ['id'],
                                                            //   data: [
                                                            //     { id: 1 },
                                                            //     { id: 2 },
                                                            //   ]
                                                            // },
                                                           // store: _DataStore_MembershipCardLoadBySubscriberAccNoDashboardMainStore,
                                                          
                                                         
                                                          
                                                            itemTpl: [
                                                                // Outer card wrapper
                                                                //'<div style="min-width:100vw; max-width:100vw; height:auto; margin:0; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                                                                '<div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="min-width:88vw; max-width:88vw; margin-right:5vw; box-sizing:border-box; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                                                                  // Background Image Section
                                                                  //'<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8sRD9DXiKgEd0sTh66b2Ljls8laA8hQ0yw&s\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                                                  '<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'{MembershipCardBackgroundImg_back}\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                                              
                                                                    // Membership Card Image (Gold)
                                                                   // '<img src="https://5.imimg.com/data5/KA/JP/TU/SELLER-22794929/gold-membership-card.jpg" alt="Gold Member" ',
                                                                   // 'style="position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.5); z-index:2;">',
                                                                   '<div  style="border:1px solid white;position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px;  z-index:2;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;box-shadow: 5px 2px 18px #888888;">' +
                               
                                                                   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-9px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" ><tr><td style="background-color:transparent;border-color:white;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:33px;color:white" colspan="3">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:8px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:9px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-22px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:8px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:8px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:7px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:8px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-10px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                                                 '</div>'+
                            
                            
                            
                            
                            
                                                                    // Text Overlay
                                                                    '<div style="position:absolute; bottom:0; left:0; width:100%; background-color:rgba(0,0,0,0.5); color:white; padding:2vw; z-index:1;">',
                                                                      '<div style="font-size:3vw; line-height:1.2;">{ModifiedMarketingTagline}</div>',
                                                                      '<div class="blink_me" style="font-size:4.2vw; font-weight:bold;">{ModifiedGetItNow}</div>',
                                                                      '<div style="font-size:3vw;">Membership Fees: RM{MembershipCardFee}</div>',
                                                                    '</div>',
                                                                  '</div>',
                                                              
                                                                  // Merchant Info Section
                                                                  '<div style="padding:4vw; background-color:white;">',
                                                                    '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">',
                                                                      '<div style="font-weight:bold; font-size:4.5vw;">{EnterprisesName}</div>',
                                                                      '<div style="display:flex; align-items:center;">',
                                                                       // '<img src="https://cdn-icons-png.flaticon.com/512/2920/2920029.png" width="6vw" style="margin-right:1vw;">',
                                                                        '<span style="font-size:3vw; color:#555;">{BusinessTypeGroup}</span>',
                                                                      '</div>',
                                                                    '</div>',
                                                              
                                                                    '<div style="font-size:3.2vw; color:#444;">{ModifiedEnterpriseAddress}</div>',
                                                              
                                                                    '<div id:"ModifiedCountStarCountStar" style="margin-top:2vw; font-size:3.2vw; color:#333;">{ModifiedCountStarCountStar} ',
                                                                      '<a href="#" style="color:#3366cc; text-decoration:none;">{CountReviewer} Reviews</a>',
                                                                    '</div>',
                                                                  '</div>',
                                                                '</div>'
                                                              ].join('')
                                                              
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                          
                                                       
                            
                                                },
                            
                            
                            
                            
                            
                                                        // {
                                                        //     xtype: 'container',
                                                        //     width: '2%',
                                                        //     margin: '0 0 0 0',
                                                        //     height: 470,                                            
                                                        //     //  hidden: true,
                                                        //     id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer02paid',
                                                        //     style: "background-color: red;",
                            
                                                        // },
                                                        
                                            ]
                                                
                                        
                                        },
                            
                            {
                            xtype: 'container',
                            width: '100%',
                            margin: '0 0 0 0',
                            id:'containerFloatPanel_DashboardMerchantMembershipEventxxxxUnpaid',
                            height: 400,
                            style: "background-color: transparent;",
                            layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'left'
                            
                            },items:[
                                {
                                    margin: '0 0 0 0',
                                    width: '100%',
                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                 //   html: '<div style="color:black;text-align: left;font-size:16px;width:100%;margin:0px 0px 0px 20px"><b>Membership Cards Hubs</b></div><br><div  style="color:black;text-align: left;font-size:10px;width:100%;margin:-25px 0px 0px 20px;">- Latest membership card.Get It NOW!! -</div>'
                                    html: '<div  style="color:black;text-align: left;font-size:12px;width:100%;margin:0px 0px 0px 20px;font-weight:bold">🚀 Free Membership </div>'
                                   
                                },
                                {
                                    margin: '0 0 0 0',
                                    width: '100%',
                                    height:50,
                                    //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                    html: '<div  style="color:black;text-align: left;font-size:16px;width:95%;margin:0px 0px 0px 20px;height:50px"><img src="resources/icons/freebiezon.jpeg" width="180" height="45" alt="Company Name"></b></div>'
                                    // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                                },
                            {
                            xtype: 'container',
                            width: '100%',
                            height:'100%',
                            //height: 350,                                    
                            //  hidden:true,
                            margin: '-20 0 0 0',
                            //hidden: true,
                            id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxx',
                            style: "background-color: transparent;",
                            // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                            layout: {
                                type: 'hbox',
                                pack: 'start',
                                align: 'center'
                            
                            },
                            items: [
                                {
                                    xtype: 'container',
                                    width: '5%',
                                    height:'100%',
                                    margin: '0 0 0 0',
                                    //  hidden: true,
                                    id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer01',
                                    style: "background-color: transparent;",
                            
                                },
                                {
                            
                                    id: 'Dashboard_MyAccount_UnSubscribedMembershipCardList',
                                   // margin: '-30 0 0 0',
                                    margin: '0 0 0 0',
                                    //  store: _DataStore_AyohaRewardEventLoadBySubscriberAccNoStore,
                                    // grouped: true,
                                    xtype: 'dataview',
                                    //xtype: 'list',
                                    height:'100%',
                                    style: "background-color: transparent;",
                                    inline: {
                                        wrap: false
                                    },
                                    scrollable: {
                                        direction: 'horizontal',
                                        indicators: false,
                                    },
                                    width: '90%',
                            
                                    itemTpl: '<div class="myContent" style="background-color:transparent;width:330px;height:180px;">&nbsp;&nbsp;&nbsp;<div style="margin:0px 0px 0px 0px;width:310px;height:180px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                  ////  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                 //  itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;">' +
                            
                                                 //  '{ModifiedisMembershipCardSubscribed}' +
                                                 '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:0px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{isMembershipCardSubscribed}' + "'" + ',' + "'" + '{MembershipCardFeePaymentCycle}' + "'" + ',' + "'" + '{CountStar}' + "'" + ',' + "'" + '{CountReviewer}' + "'" + ')" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:18px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-29px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:12px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-17px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                               '</div></div>' +
                                                
                                  '<br><div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="margin:5px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">RM{MembershipCardFee}<br><div style="margin:-5px 0px 0px 0px;font-size:10px;font-weight:normal">Membership Fees</div></div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px"></div></div>' +
                                                       //  '<br><div style="margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><button id="btnDashboard_Membership_AyohaStore"  style="display:inline-block;background-color: Transparent;border: none;outline:none;margin:3px 0px 0px 0px;" onClick="FloatPanel_AyohaStoreShow_FromPushNotification();"><img src={EnterprisesLogo} style="float:right;margin-right:0.5em;width: 40px; height: 40px;border-radius:50%;border: 1px solid grey;"><div style="margin:15px 50px 0px 0px;font-size:10px;font-weight:bold;font-color:blue"><u>Visit Us</u></div></button></div></div></div>',
                                                            '<br><div  style="margin:-12px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;margin:-20px 0px 0px 0px;"></div><div style="width:100%;text-align:right;margin:-42px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;"><div class="blink_me"><div style="margin:0px 25px 0px 0px;font-size:10px;font-weight:normal;">Free Membership Card<br><b>GET IT NOW!</b></div></div></div></div>',
                            
                            
                            
                            
                                    //////itemTpl: '<div class="myContent" style="background-color:transparent;width:330px;height:190px;">&nbsp;&nbsp;&nbsp;<div style="margin:0px 0px 0px 0px;width:310px;height:190px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                     
                            
                                    //////                  '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                    //////                                                 '</div></div>' ,
                                                                                  
                            
                                                        //'<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                                                        // '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                                                      
                                                        // '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Membership Fees(RM)</div></div>' +
                                                        //   '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-28px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{MembershipFee}</div></div></div>',
                                                      
                            
                                                        emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:50px 10px;font-size:14pxcolor:black;font-weight:bold;text-align:center;vertical-align:middle">No Membership Card</div>',
                                   // emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',
                            
                                },
                            
                                 {
                                     xtype: 'container',
                                     width: '5%',
                                     height:'100%',
                                     margin: '0 0 0 0',
                                     //  hidden: true,
                                     id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer02',
                                     style: "background-color: transparent;",
                            
                                 },
                            ]
                            },
                            
                            
                            
                            ]
                            
                            },
                            
                                                
                            {
                            xtype: 'container',
                            width: '100%',
                            height: 470,                                  
                            margin: '0 0 0 0',
                            id: 'containerFloatPanel_DashboardMerchantMembershipEventxxxxpaid2',
                            style: "background-color: transparent;",
                            // style: "background-color: transparent;border-right:1px solid #ECF0F1;border-left:1px solid #ECF0F1;border-bottom:1px solid #ECF0F1;border-top:1px solid #ECF0F1;border-radius: 10px 10px 10px 10px;",
                            layout: {
                            type: 'vbox',
                            pack: 'start',
                            align: 'center'
                            
                            },
                            items: [
                            // {
                            //     xtype: 'container',
                            //     width: '2%',
                            //     height: 470,
                            //     margin: '0 0 0 0',
                            //     //  hidden: true,
                            //     id: 'htmlFloatPanel_DashboardMerchantMembershipEventxxxxSpacer01paid',
                            //     style: "background-color: transparent;",
                            
                            // },
                            {
                                margin: '0 0 0 0',
                                width: '100%',
                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                html: '<div  style="color:black;text-align: left;font-size:12px;width:100%;margin:-25px 0px 0px 20px;font-weight:bold">⭐⭐⭐⭐⭐ Highly Rate Membership/Store</div>'
                                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            },
                            {
                                margin: '0 0 0 0',
                                width: '100%',
                                height:50,
                                //   html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: auto;height:60px"></colgroup><thead><tr><th style="border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal"><div style="color:black;text-align: center;font-size:18px;width:100%;">Tarmizi Rahim</div><br><div style="color:black;text-align: center;font-size:12px;width:100%;margin:-27px 0px 0px 0px;">Ayoha Legendry Card</div><img src="resources/icons/editProfileWhite.png" width="30" height="30" alt="Company Name"></tr></thead></table>',
                                html: '<div style="color:black;text-align: left;font-size:16px;width:95%;margin:0px 0px 0px 20px;height:50px"><img src="resources/icons/toprated.jpeg" width="180" height="45" alt="Company Name"></b></div>'
                                // html: '<table style="border-collapse:collapse;border-spacing:0;table-layout: fixed; width: 100%" class="tg"><colgroup><col style="width: 70%"><col style="width:30%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal" rowspan="2"><div style="margin:0px 0px 0px -15px">TARMIZI RAHIM</div><br>Lagendary Card Mortal </th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-break:normal" rowspan="2">Medal</th></tr><tr></tr></thead></table>'
                            },
                            {
                            xtype: 'dataview',
                            height: 470,
                            width: '95%',
                            margin: '2 0 0 10',
                            id: 'Dashboard_MyAccount_UnSubscribedMembershipCardListDesignTwo',
                            // style: 'background-color: transparent;',
                            //  style: 'background-color:rgba(255, 255, 255, 0);border-radius: 0px 0px 0px 0px;',
                            style: 'background-color:rgba(255, 255, 255, 0); border-radius:0;',
                            scrollable: {
                              direction: 'horizontal',
                              indicators: false
                            },
                            
                            disableSelection: true,
                            inline: {
                              wrap: false
                            },
                            itemHeight: 'auto',
                            // listeners: {
                            //     painted: function () {
                            //       const me = this;
                              
                            //       Ext.defer(function () {
                            //         const scroller = me.getScrollable ? me.getScrollable() : null;
                            //         if (scroller && scroller.getElement) {
                            //           const scrollerEl = scroller.getElement().dom;
                              
                            //           // Gunakan scrollBy untuk pastikan scroll ke kanan
                            //           if (scrollerEl.scrollBy) {
                            //             scrollerEl.scrollBy({
                            //               left: 55,
                            //               behavior: 'smooth' // optional
                            //             });
                            //           } else {
                            //             // fallback
                            //             scrollerEl.scrollLeft += 55;
                            //           }
                            //         }
                            //       }, 500); // bagi cukup masa layout siap
                            //     }
                            //   },
                            
                            
                            
                            
                            itemTpl: [
                                 // Outer card wrapper
                                                                //'<div style="min-width:100vw; max-width:100vw; height:auto; margin:0; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                                                                '<div OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" style="min-width:88vw; max-width:88vw; margin-right:5vw; box-sizing:border-box; border-radius:15px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.3); display:inline-block;">',
                                                                  // Background Image Section
                                                                  //'<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8sRD9DXiKgEd0sTh66b2Ljls8laA8hQ0yw&s\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                                                  '<div style="position:relative; height:70vw; max-height:280px; background-image:url(\'{MembershipCardBackgroundImg_back}\'); background-size:cover; background-position:center; background-repeat:no-repeat;">',
                                                              
                                                                    // Membership Card Image (Gold)
                                                                   // '<img src="https://5.imimg.com/data5/KA/JP/TU/SELLER-22794929/gold-membership-card.jpg" alt="Gold Member" ',
                                                                   // 'style="position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px; box-shadow:0 2px 8px rgba(0,0,0,0.5); z-index:2;">',
                                                                   '<div style="border:1px solid white;position:absolute; top:45%; right:4vw; width:42vw; max-width:200px; border-radius:10px;  z-index:2;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;box-shadow: 5px 2px 18px #888888;">' +
                               
                                                                   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-9px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_NotYetSubscribedShow_FromDashboard_Main(`{MembershipCardCode}`,`{EnterpriseAccNo}`,`{isMembershipCardSubscribed}`,`{MembershipCardFeePaymentCycle}`,`{CountStar}`,`{CountReviewer}`)" ><tr><td style="background-color:transparent;border-color:white;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;overflow:hidden;padding:0px 5px;text-align:left;vertical-align:middle;word-break:normal;width:100%;height:33px;color:white" colspan="3">{ModifiedEnterprisesLogoDesignOneTwo}{ModifiedEnterprisesNameDesignOneTwo}</td></tr><tbody><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball, cursive;font-size:8px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipCardType}</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:9px;font-weight:normal;border-top: 1px none white;padding:0px 0px">123 4567</div><br><div style="margin:-22px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:8px;font-weight:normal;border-top: 1px none white;padding:0px 0px">MEMBER NAME</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:8px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-23px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">After Approved</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:7px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:8px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-10px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:5px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedStrExpiredDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">After Approved</div></tr></tbody></table>' +
                                                                                                 '</div>'+
                            
                            
                            
                            
                            
                                                                    // Text Overlay
                                                                    '<div style="position:absolute; bottom:0; left:0; width:100%; background-color:rgba(0,0,0,0.5); color:white; padding:2vw; z-index:1;">',
                                                                      '<div style="font-size:3vw; line-height:1.2;">{ModifiedMarketingTagline}</div>',
                                                                      '<div class="blink_me" style="font-size:4.2vw; font-weight:bold;">{ModifiedGetItNow}</div>',
                                                                      '<div style="font-size:3vw;">Membership Fees: RM{MembershipCardFee}</div>',
                                                                    '</div>',
                                                                  '</div>',
                                                              
                                                                  // Merchant Info Section
                                                                  '<div style="padding:4vw; background-color:white;">',
                                                                    '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">',
                                                                      '<div style="font-weight:bold; font-size:4.5vw;">{EnterprisesName}</div>',
                                                                      '<div style="display:flex; align-items:center;">',
                                                                       // '<img src="https://cdn-icons-png.flaticon.com/512/2920/2920029.png" width="6vw" style="margin-right:1vw;">',
                                                                        '<span style="font-size:3vw; color:#555;">{BusinessTypeGroup}</span>',
                                                                      '</div>',
                                                                    '</div>',
                                                              
                                                                    '<div style="font-size:3.2vw; color:#444;">{ModifiedEnterpriseAddress}</div>',
                                                              
                                                                    '<div id:"ModifiedCountStarCountStar" style="margin-top:2vw; font-size:3.2vw; color:#333;">{ModifiedCountStarCountStar} ',
                                                                      '<a href="#" style="color:#3366cc; text-decoration:none;">{CountReviewer} Reviews</a>',
                                                                    '</div>',
                                                                  '</div>',
                                                                '</div>'
                                                              ].join('')
                              
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            },
                            
                            
                            
                            
                            
                            
                            
                            ]
                            
                            
                            },                         
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












        ]





    });
    return _FloatPanel_Membership_MembershipCardHubs;



}








function FloatPanel_Membership_MembershipCardHubsShow() {

    Ext.Viewport.remove(_FloatPanel_Membership_MembershipCardHubs);
    this.overlay = Ext.Viewport.add(FloatPanel_Membership_MembershipCardHubs());
    this.overlay.show();
   // LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_Membership_MembershipCardHubsHide()");
    isFloatPanel_Membership_MembershipCardHubsOpen = 'Y';
   // Dashboard_MembershipCardHub();

    Dashboard_MembershipCardLoadBySubscriberAccNoDashboardMainStore();
    //document.getElementById("input-FloatPanel_Membership_MembershipCardHubs_SearchTxt").addEventListener("keyup", MembershipsLoadBySubscriberAccNoStoreOnKeyUp);
 




    
    
}





function FloatPanel_Membership_MembershipCardHubsHide() {
    // FloatPanel_Membership_MembershipCardHubs_AddCardHide();
    if (isFloatPanel_Membership_MembershipCardHubsOpen == "Y") {
        _FloatPanel_Membership_MembershipCardHubs.hide(); isFloatPanel_Membership_MembershipCardHubsOpen = 'N';
        RemovePages("FloatPanel_Membership_MembershipCardHubsHide()");
    }
   
}


//var _DataStore_MembershipsLoadBySubscriberAccNoStore;
function FloatPanel_Membership_MembershipCardHubs_MembershipsLoadBySubscriberAccNoStore() {


    //console.log(GetCurrAyohaUserAccountNo());

    //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
    //});
    //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

   // alert(GetCurrAyohaUserAccountNo())
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo');
    _DataStore_MembershipsLoadBySubscriberAccNoStore.load();

    var task = Ext.create('Ext.util.DelayedTask', function () {
      
        //Ext.getStore('MembershipsLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
        //});

        ////  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        ////  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        ////console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


        //Ext.StoreMgr.get('MembershipsLoadBySubscriberAccNoStore').load();

        //var myStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');
        //_DataStore_MembershipsLoadBySubscriberAccNoStore = Ext.getStore('MembershipsLoadBySubscriberAccNoStore');

        var count = parseInt(_DataStore_MembershipsLoadBySubscriberAccNoStore.getCount());

      
    
      
        LoadingPanelHide();
        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}

// var countMembershipsLoadBySubscriberAccNoStoreFirst;
// function MembershipsLoadBySubscriberAccNoStoreOnKeyUp() {






//     console.log('SearchEnterpriseOnKeyUp');
//     var countMembershipsLoadBySubscriberAccNoStoreSequence = 0;


//     _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();

//     var queryString = document.getElementById('input-FloatPanel_Membership_MembershipCardHubs_SearchTxt').value;



//     if (queryString) {
//         console.log(queryString.length);

//         var thisRegEx = new RegExp(queryString, "i");
//         _DataStore_MembershipsLoadBySubscriberAccNoStore.filterBy(function (record) {
//             if (thisRegEx.test(record.get('EnterprisesName'))) {
//                 console.log('ada0');

//                 countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
//                 Ext.getCmp('FloatPanel_Membership_MembershipCardHubs_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');
//                 // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
//                 return true;

//             };
//             return false;
//             console.log('tiada1');

//             //  return false;
//         });
//         console.log('tiada3');
//         countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
//         Ext.getCmp('FloatPanel_Membership_MembershipCardHubs_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');

//         //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
//     }


//     else {
//         console.log('tiada2');
//         _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();
//         Ext.getCmp('FloatPanel_Membership_MembershipCardHubs_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
//         // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
//         // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
//         return false;
//     }




// }
