Ext.define('BuskartApp.view.Membership.MembershipCardList', {
    extend: 'Ext.Container',
    //  extend: 'Ext.Panel',
    xtype: 'MembershipCardList',
    //id: 'AyohaReward_MainDashboardID',
    //requires: [
    //     'BuskartApp.view.Dashboard.DashboardMerchantReward',
    //],
    
    config: {
        styleHtmlContent: true,
        layout: 'fit',
        fullscreen: true,
      //  style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
        style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
       
    items: [
        {
            xtype: 'container',
            width: '100%',
            height: '100%',
            style: ' background-color:transparent;',
            title: 'Membership Card List',
          // style: 'background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
          layout: {
            type: 'vbox',
            pack: 'start',
            align: 'center'

        },
      //  layout: 'fit',
      
            items: [



                {
                    xtype: 'container',
                    id: 'containerFloatPanel_MembershipCardList_MyMembershipCardStampCardList',
                  //  style: ' background-color:transparent;',
                  style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
                    // margin: '-10 0 0 0',
                    width: '100%',
                    height: '100%',
                    //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                   // style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
                    //style: "background-color: #F35B57;",
                    title: 'FloatPanel_MembershipCardList_MyMembershipCardCardLis',
                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'

                    },                          
                    // scrollable: {
                    //     direction: 'vertical',
                    //     directionLock: true,
                    //     indicators: false
                    // },

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
                      

                        {
                            xtype: 'container',
                            width: '100%',
                            height: 150,
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
                                    height: 150,                                                     
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
                                           {
                                            xtype: 'container',
                                            width: '50%',  
                                            height: 150,                                                     
                                           style: 'background-color:transparent;',
                                           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                            layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'left',
                                            },
                                            items:[
                                                {
                                                    margin: '10 0 0 14',
                                                
                                                   // id: 'labelDashboard_LastCheckInTimeStamp',    
                                                   // html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">00:00:00</div>'
                                                 //   html: '<div style="display:inline-flex;align-items:center;gap:10px;padding:2px 5px;border-radius:999px;border:2px solid transparent;background:linear-gradient(#ffffff,#ffffff) padding-box,linear-gradient(90deg,#ff00de,#c800ff) border-box;box-shadow:0 10px 24px rgba(200,0,255,.28);color:#111827;font-size:10px;font-weight:bold;"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ayohaGrad1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff00de"/><stop offset="1" stop-color="#c800ff"/></linearGradient></defs><rect x="3" y="9" width="18" height="11" rx="3" fill="url(#ayohaGrad1)"/><rect x="11" y="9" width="2" height="11" fill="#fff" opacity=".9"/><rect x="3" y="13" width="18" height="2" fill="#fff" opacity=".9"/><rect x="11" y="6.6" width="2" height="2.4" fill="url(#ayohaGrad1)"/><circle cx="8" cy="7" r="3" fill="url(#ayohaGrad1)"/><circle cx="16" cy="7" r="3" fill="url(#ayohaGrad1)"/></svg><span>My Ayoha Reward Membership</span></div>'
                                               
                                                   // id: 'labelDashboard_LastCheckInTimeStamp',    
                                                   // html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">00:00:00</div>'
                                                    html: '<div style="color:white;text-align: left;font-size:14px;width:100%;margin:0px 0px 0px 0px"><span style="font-size:10px;color:black;background:gold;border:1px solid #fac;padding:3px 6px;border-radius:999px;white-space:nowrap;">All merchant cards you have joined</span><br><b>My Membership Cards</b></div><br><div  style="color:white;text-align: left;font-size:10px;width:100%;margin:-20px 0px 0px 0px;">Access cards easily in one place</div>'
                                                   
                                               
                                                },
                                                {
                                                    xtype: 'container',
                                                    style:"background-color:transparent",
                                                    width: '100%',
                                                    height:18,
                                                },
                                                {
                                                    xtype: 'container',
                                                    style:"background-color:transparent",
                                                    width: '100%',
                                                    height:20,
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'left'
                                        
                                                    },
                                                    items:[
                                                        {
                                                            margin: '0 0 0 14',
                                                            html: '<div  style="color:white;text-align: left;font-size:10px;width:100%;margin:0px 0px 0px 0px;">Membership Summary</div>'
                                                               
                                                        }
                                                    ]
                                                },
                                               
                                                  {
                                    xtype: 'container',
                                    style:"background-color:transparent",
                                    width: '100%',
                                    height:40,
                                    layout: {
                                        type: 'hbox',
                                        pack: 'center',
                                        align: 'center'
                        
                                    },
                                    items:[
                                        {
                                            xtype: 'container',
                                            width: '3%',
                                            height:40,
                                        },
                                        {
                                            xtype: 'container',
                                            width: '31%',
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
                                                            id:'htmlMembershipCardList_paidMembershipCount',
                                                            html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                        },
                                                        {
                                                            html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Paid</div>'
                                                        },
                                                        {
                                                            html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Membership</div>'
                                                        },
                                                    ]
                                                }
                                            ]
                                           
                                               
                                        },
                                        {
                                            xtype: 'container',
                                            width: '31%',
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
                                                            id:'htmlMembershipCardList_freeMembershipCount',
                                                            html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                        },
                                                        {
                                                            html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Free</div>'
                                                        },
                                                        {
                                                            html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Membership</div>'
                                                        },
                                                    ]
                                                }
                                            ]
                                           
                                               
                                        },
                                        {
                                            xtype: 'container',
                                            width: '31%',
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
                                                   // box-shadow: 5px 10px 18px #888888;
                                                    style: 'border:2px solid #fac;background-color: white;border-radius: 10px 10px 10px 10px;',
                                                    height:40,
                                                    layout: {
                                                        type: 'vbox',
                                                        pack: 'center',
                                                        align: 'center'
                                        
                                                    },
                                                    items:[
                                                        {
                                                            id:'htmlMembershipCardList_pendingApproval',
                                                            html: '<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">0</div>'
                                                        },
                                                        {
                                                            html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-4px 0px 0px 0px;">Pending</div>'
                                                        },
                                                        {
                                                            html: '<div  style="color:black;text-align: center;font-size:6px;width:100%;margin:-2px 0px 0px 0px;">Approval</div>'
                                                        },
                                                    ]
                                                }
                                            ]
                                           
                                               
                                        },
                                        
                                    ]
                                }
                                            ]
                                        
                                           },
        
                                           {
                                            xtype: 'container',
                                            width: '50%',  
                                            height: 150,                                                     
                                           style: 'background-color:transparent;',
                                           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'left',
                                                align: 'left',
                                            },
                                            items:[
                                                {
                                                    width: 320,
                                                    height: 160,
                                                    html:'<div style="max-width:320px;height:160px;margin:0px 0px 0px -40px;background:transparent;">'+
                                                    '<canvas id="membershipStatusDonut"></canvas>'+
                                                    '</div>'
                                                }
                                            ]
                                        
                                           },
                
                                          
                   
                   
                                           ]
                   
                                },
                               
                              
        
                            ]
                          },
                        {
                            xtype: 'container',
                            //width: '95%',
                            //height: 80,
                           // hidden: true,
                            margin: '0 0 0 0',
                            width: '100%',
                            id: 'container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                            name: 'namecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard',
                            height: '100%',
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

                                   // id: 'htmlDashboard_NearestRedeem_NonMembersTxtx',
                                    html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Hi!, you have not subscribed any membership card.</div>'

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
                                    // id: 'htmlDashboard_NearestRedeem_NonMembersTxt0x',
                                     html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Tap Ayoha Mechant below and get their Membership card Now!.</div>'

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
                                     // id: 'htmlDashboard_NearestRedeem_NonMembersTxt00x',
                                      html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;">Enjoy the membership privilleg and get double reward from us!</div>'

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
                                     id: 'htmlDashboard_NearestRedeem_NonMembersx',
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
                                     id: 'htmlDashboard_NearestRedeem_NonMembersTxtAyohaMerchantx',
                                     html: '<div style="color:grey;text-align: center;font-size:12px;width:100%;"><b>Ayoha Merchants</b></div>'

                                     //ui: 'plain',
                                     //handler: function () {

                                     //}

                                 },

                            ]
                        },
                        {
                            xtype: 'container',
                            height: 62,
                            width: '95%',
                            style: 'background-color:transparent;',
                                           // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                                            layout: {
                                                type: 'hbox',
                                                pack: 'center',
                                                align: 'center',
                                            },
                                            items:[
                                                {  height: 62,
                                                    width: '90%',
                                                    html: '<div id="AyohaSearchStrong1" style="max-width:560px;margin:8px auto 14px;">' +
                                                    '<div class="pill">' +
                                                      '<span class="ico" aria-hidden="true">' +
                                                        '<svg width="20" height="20" viewBox="0 0 24 24">' +
                                                          '<defs><linearGradient id="ayohaGradS1" x1="0" y1="0" x2="0" y2="1">' +
                                                            '<stop offset="0" stop-color="#ff00de"/><stop offset="1" stop-color="#c800ff"/>' +
                                                          '</linearGradient></defs>' +
                                                          '<circle cx="10" cy="10" r="7" stroke="url(#ayohaGradS1)" stroke-width="2" fill="none"/>' +
                                                          '<line x1="15" y1="15" x2="21" y2="21" stroke="url(#ayohaGradS1)" stroke-width="2" stroke-linecap="round"/>' +
                                                        '</svg>' +
                                                      '</span>' +
                                                
                                                      '<input type="text" id="txtSearchMembershipCardList" placeholder="Search cards name, merchant name, loyalty type campaign" autocapitalize="none" autocorrect="off" ' +
                                                      'oninput="this.parentNode.querySelector(\\\'.clear\\\').style.display=this.value?\\\'inline-flex\\\':\\\'none\\\';">' +
                                                
                                                      /* Result count chip */
                                                    //   '<span id="txtSearchMembershipCardListCount" ' +
                                                    //         'style="margin-left:8px;display:inline-flex;align-items:center;padding:4px 8px;' +                                                                  
                                                    //                'font-weight:bold;font-size:12px;color:#111827;">0</span>' +

                                                                   '<span id="txtSearchMembershipCardListCount" ' +
                                                                   'style="position:absolute;right:16px;top:50%;transform:translateY(-50%);' +
                                                                          'font-weight:bold;color:#111827;min-width:18px;text-align:right;font-size:14px">0</span>' +
                                                
                                                    //   '<button class="clear" type="button" aria-label="Clear search" ' +
                                                    //     'onclick="var i=this.parentNode.querySelector(\\\'input\\\');i.value=\\\'\\\';i.focus();this.style.display=\\\'none\\\';' +
                                                    //              'var c=document.getElementById(\\\'txtSearchMembershipCardListCount\\\'); if(c){c.textContent=\\\'0 results\\\';}">' +
                                                    //     '<svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">' +
                                                    //       '<path d="M8 8 L16 16 M16 8 L8 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/>' +
                                                    //     '</svg>' +
                                                    //   '</button>' +
                                                    '</div>' +
                                                  '</div>',
                                                  // html:  '<div id="AyohaSearchStrong1" style="max-width:560px;margin:10px auto 14px;"><div class="pill"><span class="ico" aria-hidden="true"><svg width="20" height="20" viewBox="0 0 24 24"><defs><linearGradient id="ayohaGradS1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff00de"/><stop offset="1" stop-color="#c800ff"/></linearGradient></defs><circle cx="10" cy="10" r="7" stroke="url(#ayohaGradS1)" stroke-width="2" fill="none"/><line x1="15" y1="15" x2="21" y2="21" stroke="url(#ayohaGradS1)" stroke-width="2" stroke-linecap="round"/></svg></span><input type="text" id="txtSearchMembershipCardList" placeholder="Search cards, merchants, perks…" autocapitalize="none" autocorrect="off" oninput="this.parentNode.querySelector(\\\'.clear\\\').style.display=this.value?\\\'inline-flex\\\':\\\'none\\\'"><button class="clear" type="button" aria-label="Clear search" onclick="var i=this.parentNode.querySelector(\\\'input\\\');i.value=\\\'\\\';i.focus();this.style.display=\\\'none\\\';"><svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8 L16 16 M16 8 L8 16" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg></button></div></div>',
                                                },
                                                // {  height: 60,
                                                //     width: '5%',
                                                //     html:  '<div  style="font-size:12px;font-weight:bold;color:black;text-align:center">0</div>',
                                                // }
                                            ]
                        },
                        {
                            xtype: 'list',
                            height: 100,
                            width: '95%',
                           id: 'listMembershipCardList_MyMembershipCardList',
                            mode: 'SINGLE',
                           // style: 'background-color:rgba(255,255,255, 0.1);border-radius: 0px 0px 0px 0px;',
                            style:"background: linear-gradient(180deg, #FFF1F9 0%, #F3E8FF 100%);",
                            disableSelection: true,
                            scrollable:false,


                            //box-shadow: 5px 2px 18px #888888;
                            itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;border:2px solid  #fac">' +                        
                            '{ModifiedMembershipApprovalStatus}' +
                       '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseTagLine}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:8px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                         '</div>' +                                                      
                         '<br><div style="margin:-10px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                         '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +                           
                         '<br><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div>{ModifiedMembershipFeeLabel}</div>' +
                           '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;">{ModifiedMembershipFee}</div></div>' ,                          
                         //'<br><div style="width:100%;text-align:center;margin:-28px 0px 0px 0px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div>',




                        //     itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +                        
                        //        '{ModifiedMembershipApprovalStatus}' +
                        //   '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ',' + "'" + '{EnterpriseTagLine}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                        //     '</div>' +                                                      
                        //     '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                        //     '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-22px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +                           
                        //     '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Membership Privilege</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Membership Fees(RM)</div></div>' +
                        //       '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-20px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:18px;font-weight:bold;">{MembershipFee}</div></div>' +                          
                        //     '<br><div style="width:100%;text-align:center;margin:-28px 0px 0px 0px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div>',

                        

                        },
                       
                    ]

                },
          

            ]
        },

    ]
},
initialize: function () {

}
});




function MembershipCardListLoad(){
    //LoadingPanelShow(getLoadingIcon(), 'Loading....');
    AddRoutePages("FloatPanel_MembershipCardList_MyMembershipCardHide()");
   document.getElementById("txtSearchMembershipCardList").addEventListener("keyup", MembershipCardList_MembershipsLoadBySubscriberAccNoStoreOnKeyUp);
   



    var containerViewnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard = Ext.ComponentQuery.query('container[name=namecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard]')[0];
    var containerViewElnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard = containerViewnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard.element;
    containerViewElnamecontainer_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard.on('tap',
      function (event, node, options, eOpts) {
          Dashboard_SearchMerchantListShow();
          // FloatPanel_RewardStoreShow();
      }
    );
    MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore();

}



var countMembershipsLoadBySubscriberAccNoStoreFirst;
function MembershipCardList_MembershipsLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countMembershipsLoadBySubscriberAccNoStoreSequence = 0;


    _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('txtSearchMembershipCardList').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_MembershipsLoadBySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('SearchCol'))) {
                console.log('ada0');

                countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
                document.getElementById('txtSearchMembershipCardListCount').textContent ='('+ countMembershipsLoadBySubscriberAccNoStoreSequence+'-Found)';
                //  Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countMembershipsLoadBySubscriberAccNoStoreSequence = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
        document.getElementById('txtSearchMembershipCardListCount').textContent = '('+ countMembershipsLoadBySubscriberAccNoStoreSequence+')';
       // Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_MembershipsLoadBySubscriberAccNoStore.clearFilter();
        document.getElementById('txtSearchMembershipCardListCount').textContent = '('+ countMembershipsLoadBySubscriberAccNoStoreSequence+')';
       // Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}


function MembershipCardList_MyMembershipCard_MembershipsLoadBySubscriberAccNoStore() {

    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNo');
    _DataStore_MembershipsLoadBySubscriberAccNoStore.load({
        callback: function (records, operation, success) {
            if (success && records.length > 0) {
                console.log('Store loaded successfully, total records: ' + records.length);
                var count = parseInt(_DataStore_MembershipsLoadBySubscriberAccNoStore.getCount());
                countMembershipsLoadBySubscriberAccNoStoreFirst = count;
var extraHeight=180;
var cardHeight=308;
var totalHeight= (count * cardHeight) + extraHeight;
                if (count>0) {
                    Ext.getCmp('container_FloatPanel_MembershipCardList_MyMembershipCardListID_no_membershipcard').setHidden(true);
                    Ext.getCmp('listMembershipCardList_MyMembershipCardList').setHidden(false);
                    Ext.getCmp('listMembershipCardList_MyMembershipCardList').setHeight(totalHeight);
                    Ext.getCmp('listMembershipCardList_MyMembershipCardList').setStore(_DataStore_MembershipsLoadBySubscriberAccNoStore);
                
                }
        
                countMembershipsLoadBySubscriberAccNoStoreFirst = _DataStore_MembershipsLoadBySubscriberAccNoStore.getCount();
              //  Ext.getCmp('FloatPanel_MembershipCardList_MyMembershipCard_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countMembershipsLoadBySubscriberAccNoStoreFirst + ')</b></font>');
               
               
                MembershipCardList_LoadMembershipStatus();
            } else {
                console.error('Failed to load store data or no record found.');
                LoadingPanelHide();
            }
        }
    });
///////////////////////////////////////////////////////////////////////
 


return
   


}





// keep a handle globally (optional but handy)
window.membershipStatusChart = window.membershipStatusChart || null;
window._datalabelsRegistered = window._datalabelsRegistered || false;

function MembershipCardList_MembershipStatusChart(activeCount, expiredCount) {
  const counts = { active: activeCount, expired: expiredCount };
  const total  = counts.active + counts.expired; // 9

  const canvas = document.getElementById('membershipStatusDonut');
  if (!canvas) return; // canvas not in DOM yet

  // ✅ Destroy any existing chart on this canvas
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();
  if (window.membershipStatusChart) { window.membershipStatusChart.destroy(); window.membershipStatusChart = null; }

  const ctx = canvas.getContext('2d');

  // Register plugin once
  if (!window._datalabelsRegistered) {
    Chart.register(ChartDataLabels);
    window._datalabelsRegistered = true;
  }

  // Center "Total" text (white)
  const centerText = {
    id: 'centerText',
    afterDraw(chart) {
      const { ctx, chartArea } = chart;
      const p = chart.getDatasetMeta(0).data[0];
      const cx = p?.x ?? (chartArea.left + chartArea.right) / 2;
      const cy = p?.y ?? (chartArea.top + chartArea.bottom) / 2;

      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '700 12px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
      ctx.fillStyle = '#fff';      // "Total"
      ctx.fillText('Total', cx, cy - 10);
      ctx.font = '900 22px system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
      ctx.fillStyle = '#fff';      // "9"
      ctx.fillText(total, cx, cy + 10);
      ctx.restore();
    }
  };

  // Create chart
  window.membershipStatusChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Active', 'Expired'],
      datasets: [{
        data: [counts.active, counts.expired],
        backgroundColor: ['rgba(46, 204, 113, 0.95)', 'rgba(231, 76, 60, 0.70)'],
        borderColor: '#ffffff',  // solid white border
        borderWidth: 1,
        borderAlign: 'inner',
        hoverOffset: 6,
        cutout: '66%'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: { padding: { top: 8, right: 8, bottom: 12, left: 8 } },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#fff', usePointStyle: true, pointStyle: 'circle',
            font: { weight: '700', size: 10 }
          }
        },
        tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}` } },
        datalabels: {
          display: true,
          color: '#fff',           // numbers on slices in white
          anchor: 'center',
          align: 'center',
          offset: 0,
          clip: true,
          clamp: true,
          formatter: (v) => `${v}`,
          font: (ctx) => {
            const data = ctx.dataset.data, v = data[ctx.dataIndex];
            const pct = v / data.reduce((a,b)=>a+b,0) * 100;
            const base = ctx.chart.width < 360 ? 11 : 13;
            return { weight: '900', size: pct < 14 ? base - 2 : base, family: 'system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif' };
          }
        }
      },
      animation: { duration: 800, animateRotate: true }
    },
    plugins: [centerText]
  });
}

  







function MembershipCardList_LoadMembershipStatus() {
   



    
   

    var task = Ext.create('Ext.util.DelayedTask', function () {

        var objn = {
            "SubscriberAccNo": GetCurrAyohaUserAccountNo()
        };
        // console.log(objn);
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/Memberships/Memberships_MyMembershipCardStatus',

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
                        PaidMembershipCount = data.results[0].PaidMembershipCount;
                        FreeMembershipCount = data.results[0].FreeMembershipCount;
                        PendingApprovalCount = data.results[0].PendingApprovalCount;
                        ActiveCardCount =parseInt(data.results[0].ActiveCardCount);
                        ExpiredCardCount = parseInt(data.results[0].ExpiredCardCount);



                        Ext.getCmp('htmlMembershipCardList_paidMembershipCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+PaidMembershipCount+'</div>');

                        Ext.getCmp('htmlMembershipCardList_freeMembershipCount').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+FreeMembershipCount+'</div>');
                        Ext.getCmp('htmlMembershipCardList_pendingApproval').setHtml('<div  style="color:black;text-align: center;font-size:14px;width:100%;margin:0px 0px 0px 0px;font-weight:bold">'+PendingApprovalCount+'</div>');

                        MembershipCardList_MembershipStatusChart(ActiveCardCount, ExpiredCardCount);
                     

















                       
                       
                    }
                    if (data.total == 0) {

                       

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
