
Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardUsed', {

});

var _FloatPanel_AyohaStore_MembershipCardUsed;


var isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'N';






function FloatPanel_AyohaStore_MembershipCardUsed() {

    _FloatPanel_AyohaStore_MembershipCardUsed =
    Ext.create('Ext.Panel', {
        zIndex: 320,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaStore_MembershipCardUsedID',
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
        //style: 'border-bottom:1px solid;background-color:#353839;',
        style: 'border-bottom:1px solid;background-color:white;',
       // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaStore_MembershipCardUsed.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaStore_MembershipCardUsedHide()");
                            isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaStore_MembershipCardUsed.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'N';
                            RemovePages("FloatPanel_AyohaStore_MembershipCardUsedHide()");
                        }
                     
                        //RemovePages(_FloatPanel_AyohaStore_MembershipCardUsed, "isFloatPanel_AyohaStore_MembershipCardUsedOpen");
                    }
                });
            }
        },

        items: [



            {
                xtype: 'container',
                width: '100%',
                height: '100%',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
                style: ' background-color: transparent;',
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

                                id: 'containerFloatPanel_AyohaStore_MembershipCardUsedHeader',
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
                                                         id: 'btnFloatPanel_AyohaStore_MembershipCardUsedBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaStore_MembershipCardUsedHide();
                                                             // FloatPanel_AyohaStore_MembershipCardUsed_AddCardHide();
                                                             isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'N';
                                                             _FloatPanel_AyohaStore_MembershipCardUsed.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                            // RemovePages(_FloatPanel_AyohaStore_MembershipCardUsed, "isFloatPanel_AyohaStore_MembershipCardUsedOpen");
                                                             //  FloatPanel_AyohaStore_MembershipCardUsed_AddCardHide();
                                                             RemovePages("FloatPanel_AyohaStore_MembershipCardUsedHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '-2 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaStore_MembershipCardUsed_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Select Membership Card</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaStore_MembershipCardUsed_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/MembershipCardDetail.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'N';

                                                                    _FloatPanel_AyohaStore_MembershipCardUsed.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_AyohaStore_MembershipCardUsedHide()");
                                                                    //RemovePages(_FloatPanel_AyohaStore_MembershipCardUsed, "isFloatPanel_AyohaStore_MembershipCardUsedOpen");
                                                                    //FloatPanel_AyohaStore_MembershipCardUsed_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_MembershipCardUsedStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaStore_MembershipCardUsedCardLis',
                                layout: {
                                    type: 'vbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                //listeners: {
                                //    initialize: function (c) {

                                //        this.element.on({
                                //            swipe: function (e, node, options) {
                                //                if (e.direction == "left") {
                                //                    //  alert("Hey! I swipe left");

                                //                } else {
                                //                    //  alert("Hey! I swipe right");
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaStore_MembershipCardUsed').setActiveItem(0);
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
                                      height: '100%',
                                      style: "background-color: transparent;",
                                      layout: {
                                          type: 'vbox',
                                          pack: 'start',
                                          align: 'left'

                                      },
                                      items: [



                                              {
                                                  xtype: 'container',
                                                  width: '100%',
                                                  height: '17%',
                                                  //hidden: true,
                                                  style: 'background-color:white',
                                                 // style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'center',
                                                      align: 'center'

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
                                                              html: '<img src="resources/icons/MembershipCardDetail.png" width="55" height="55" alt="Company Name">',
                                                              width:55,
                                                              height:55
                                                          },

                                                          {

                                                              width: '100%',
                                                            //  xtype: 'label',
                                                             // html: 'We detect your have two membership card, please select the preference membershipcard to used in this merchant store.'
                                                             html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:12px;word-wrap: break-word;">We detect your have more than one membership card, please select the preference membership card to be used in this merchant store.</div>'
                                                          },

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
                                                  height: '83%',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  style: 'background-color:#f7f7f7',

                                                  items: [
                                                                                                          
                                                      {
                                                          xtype: 'list',
                                                          //flex:1,
                                                          //  height: '100%',
                                                          //  store: 'MembershipsLoadBySubscriberAccNoStore',
                                                          store: _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore,
                                                          id: 'FloatPanel_AyohaStore_MembershipCardUsedListID',
                                                          mode: 'SINGLE',
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
                                                          //grouped: true,
                                                          disableSelection: true,
                                                         // itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                         //'{ModifiedMembershipApprovalStatus}' +
                                                         //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                         //                             '</div>' +                                                                                    
                                                         // '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -30px">Current Ayoha Point</div></div>' +
                                                         // '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -32px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{AyohaRewardPoint}</div></div>' +
                                                         // '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Points Rate</div>' +
                                                         // '<br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;"><button OnClick="FloatPanel_AyohaStore_MembershipCardUsed_AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate(' + "'" + '{MembershipCardCode}' + "'" +')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Use this Card</button></div></div>',

                                                          itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                        '{ModifiedMembershipApprovalStatus}' +
                                                        '<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;"><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3" OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})"  style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td OnClick="FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                                                     '</div>' +
                                                         '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -30px">Card Expired:</div></div>' +
                                                         '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-18px 0px 0px -32px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                                                         '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Membership Privilege</div>' +
                                                         '<br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;"><button OnClick="FloatPanel_AyohaStore_MembershipCardUsed_AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate(' + "'" + '{MembershipCardCode}' + "'" + ')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Use this Card</button></div></div>',


                                                          height: '100%',
                                                          width: '100%',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {

                                                          //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                          //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                          //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //        //var ID = records.get('ID');
                                                          //        //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

                                                          //        //globalOpenMembershipCardList_Upgrade_From = "FloatPanel_AyohaStore_MembershipCardUsed";
                                                          //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                          //        //setTimeout(function () {

                                                          //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
                                                          //        //}, 2000);



                                                          //    },
                                                          //    deselect: function (list, records) {

                                                          //    }
                                                          //},

                                                      },
                                                  ]
                                              },



                                      ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_MembershipCardUsedTitleOutter',
                                width: '100%',
                                docked: 'bottom',
                                hidden:true,
                                height: 40,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                                // style: "background-color: #EAEEF3;",

                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [




                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaStore_MembershipCardUsedListSearch',
                                          // hidden: true,
                                          //  badgeText: '1',
                                          margin: '2 0 0 -5',
                                          height: 40,
                                          width: 40,
                                          html: '<img src="resources/icons/searchPurpleOne.png" width="28" height="28" alt="Company Name">',
                                          ui: 'plain',
                                          handler: function () {
                                              // NotificationsPanelShow();

                                              // LoyaltyCardRedeemListShow();


                                              //  LoyaltyCardRedeemListShow();
                                          }
                                      },



                                     {
                                         id: 'FloatPanel_AyohaStore_MembershipCardUsed_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_AyohaStore_MembershipCardUsed_SearchTxt" placeHolder="Search Card" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_AyohaStore_MembershipCardUsed_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaStore_MembershipCardUsedFilter',
                                         hidden: true,
                                         //  badgeText: '1',
                                         margin: '2 0 0 15',
                                         height: 25,
                                         width: 35,
                                         html: '<img src="resources/icons/filterPurpleThree.png" width="25" height="25" alt="Company Name">',
                                         ui: 'plain',
                                         handler: function () {
                                             // NotificationsPanelShow();

                                             // LoyaltyCardRedeemListShow();


                                             //  LoyaltyCardRedeemListShow();
                                         }
                                     },





                                ]

                            },


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaStore_MembershipCardUsed',
                              //    // style: 'border-top:2px solid #ECF0F1;background: white;',
                              //    // style: 'background-color: black;',
                              //    // margin: '-20 0 0 -26',
                              //    // margin: '25 0 0 0',

                              //    //width: 200,
                              //    width: '96%',
                              //    height: '100%',
                              //    //height: 120,
                              //    //height: 50,
                              //    //  zIndex: 200,
                              //    //  docked: 'bottom',
                              //    tabBarPosition: 'top',
                              //    ui: 'plain',
                              //    // docked: 'bottom',

                              //    initialize: function (c) {
                              //        //this.getTabBar().hide();


                              //    },



                              //    items: [










































                              //    ]

                              //    //}
                              //},










                        ]
                    },

















































                ]
            },












        ]





    });
    return _FloatPanel_AyohaStore_MembershipCardUsed;



}








function FloatPanel_AyohaStore_MembershipCardUsedShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaStore_MembershipCardUsed);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_MembershipCardUsed());
    this.overlay.show();
  LoadingPanelShow(getLoadingIcon(), 'Loading....');
  AddRoutePages("FloatPanel_AyohaStore_MembershipCardUsedHide()");
    isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'Y';
    FloatPanel_AyohaStore_MembershipCardUsed_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore();
   // FloatPanel_AyohaStore_MembershipCardUsedAdjustHeight();
}





function FloatPanel_AyohaStore_MembershipCardUsedHide() {
    // FloatPanel_AyohaStore_MembershipCardUsed_AddCardHide();
    if (isFloatPanel_AyohaStore_MembershipCardUsedOpen == "Y") {
        _FloatPanel_AyohaStore_MembershipCardUsed.hide(); isFloatPanel_AyohaStore_MembershipCardUsedOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_MembershipCardUsedHide()");
    }
   
}







function FloatPanel_AyohaStore_MembershipCardUsedAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaStore_MembershipCardUsedID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaStore_MembershipCardUsedID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaStore_MembershipCardUsedListID').setHeight(newHeights);


}


function FloatPanel_AyohaStore_MembershipCardUsed_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore() {
    var entAccNo;

    entAccNo = FloatPanel_AyohaStore_getEnterpriseAccNo();
    if (isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen == 'Y') {
        entAccNo = globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo;
    }

    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', entAccNo);
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNo'); 
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.load();

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

      //alert(_DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getCount());
       
        LoadingPanelHide();
        Ext.Viewport.setMasked(false);










    });
    task.delay(1000);




}







function FloatPanel_AyohaStore_MembershipCardUsedOpenMembershiCardDetail(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID) {
    //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
    //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
    //var MembershipCardCode = records.get('MembershipCardCode');
    //var ID = records.get('ID');
    //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

   

    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_AyohaStore_MembershipCardUsed";
    FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
    setTimeout(function () {

        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
    }, 2000);

}



function FloatPanel_AyohaStore_MembershipCardUsed_AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate(MembershipCardCode) {
    var entAccNo;

    entAccNo = FloatPanel_AyohaStore_getEnterpriseAccNo();
    if (isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen == 'Y') {
        entAccNo = globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo;
    }

    var objn = {        
        "EnterpriseAccNo": entAccNo,
"SubscriberAccNo": GetCurrAyohaUserAccountNo(),
"MembershipCardCode": MembershipCardCode,
"SaleItemCode": globalFloatPanelAyohaStore_SaleItemCode,
    };
    var _value = Ext.Ajax.request({

        type: "POST",

        url: GetAPIurl() + '/AyohaStore_SaleItem_MembershipCardUsed/AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate',

        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {

                //swalFireSuccesPostReview('Success post your review/rating,Thank You!');
                //AyohaMerchantReview_AddEditHide();
               
                globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode = MembershipCardCode;
                if (isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen == 'N') {
                    swalFireSuccess("Success Set Membership Card");
                }



               
             
                FloatPanel_AyohaStore_MembershipCardUsedHide();
                if (isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen == 'Y') {
                    FloatPanel_AyohaStore_MembershipCardBeingUsedHide();
                    FloatPanel_AyohaStore_MembershipCardBeingUsed_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore();
                    var task = Ext.create('Ext.util.DelayedTask', function () {


                        FloatPanel_AyohaStore_AyohaStoreSaleItemloadByEnterpriseAccNoItemCategoryStore("firstload");
                        Ext.Viewport.unmask();
                    });
                    Ext.Viewport.unmask();
                    task.delay(700);
                }
                //Ext.Viewport.mask({ xtype: 'loadmask', message: 'Reload Review..' });
               

            }
            else {

                swalFireFail("Fail!");
                FloatPanel_AyohaStore_MembershipCardUsedHide();
                Ext.Viewport.unmask();
            }
            Ext.Viewport.unmask();

        },

        failure: function (result, request) {
            swalFireFail("Fail!");
            Ext.Viewport.unmask();
        }

    });
}
