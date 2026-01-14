
Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipCardBeingUsed', {

});

var _FloatPanel_AyohaStore_MembershipCardBeingUsed;


var isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'N';






function FloatPanel_AyohaStore_MembershipCardBeingUsed() {

    _FloatPanel_AyohaStore_MembershipCardBeingUsed =
    Ext.create('Ext.Panel', {
        zIndex: 300,
        xtype: 'container',
        //height: 465,
        height: 360,
        width: '95%',
        id: 'FloatPanel_AyohaStore_MembershipCardBeingUsedID',
        draggable: false,

        styleHtmlContent: true,

        centered: true,
        //bottom: 64,
        // zIndex: 100,
        modal: true,
        hideOnMaskTap: false,
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
                            _FloatPanel_AyohaStore_MembershipCardBeingUsed.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'N';
                            RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsedHide()");
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaStore_MembershipCardBeingUsed.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'N';
                            RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsedHide()");
                        }
                     
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

                                id: 'containerFloatPanel_AyohaStore_MembershipCardBeingUsedHeader',
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
                                                         id: 'btnFloatPanel_AyohaStore_MembershipCardBeingUsedBack',
                                                         height: 30,
                                                         width: 35,
                                                         //hidden:true,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaStore_MembershipCardBeingUsedHide();
                                                             // FloatPanel_AyohaStore_MembershipCardBeingUsed_AddCardHide();
                                                             isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'N';
                                                             _FloatPanel_AyohaStore_MembershipCardBeingUsed.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsedHide()");
                                                             //  FloatPanel_AyohaStore_MembershipCardBeingUsed_AddCardHide();

                                                         }
                                                     },

                                                      //{
                                                      //    xtype: 'spacer',

                                                      //},


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaStore_MembershipCardBeingUsed_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>You are currently using This Membership Card</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaStore_MembershipCardBeingUsed_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                hidden:true,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/MembershipcardPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'N';

                                                                    _FloatPanel_AyohaStore_MembershipCardBeingUsed.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsedHide()");
                                                                    //FloatPanel_AyohaStore_MembershipCardBeingUsed_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_MembershipCardBeingUsedStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaStore_MembershipCardBeingUsedCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaStore_MembershipCardBeingUsed').setActiveItem(0);
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
                                                  height: '100%',
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
                                                          store: _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore,
                                                          id: 'FloatPanel_AyohaStore_MembershipCardBeingUsedListID',
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
                                                          //'<table style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;" OnClick="FloatPanel_AyohaStore_MembershipCardBeingUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" ><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                          //                             '</div>' +                                                                                    
                                                          // '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -30px">Current Ayoha Point</div></div>' +
                                                          // '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -32px;color:black;font-family:Arial, sans-serif;font-size:25px;font-weight:bold;">{AyohaRewardPoint}</div></div>' +
                                                          // '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Points Rate</div>' +
                                                          // '<br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardPoint}</div><div style="width:100%;text-align:right;margin:-26px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;"><button OnClick="FloatPanel_AyohaStore_MembershipCardBeingUsed_AyohaStore_SaleItem_MembershipCardUsed_InsertUpdate(' + "'" + '{MembershipCardCode}' + "'" +')" class="buttonAddToCart" style="margin:0px 0px 0px 2px;">Use this Card</button></div></div>',

                                                          itemTpl: '<div class="myContent" style="margin:0px 0px 0px 0px;width:100%;height:196px;background-color: #fac;background-image: url({MembershipCardBackgroundImg});background-size: 100% 100%;border-radius: 20px 20px 20px 20px;box-shadow: 5px 2px 18px #888888;">' +
                                                        '{ModifiedMembershipApprovalStatus}' +
                                                        '<table OnClick="FloatPanel_AyohaStore_MembershipCardBeingUsedOpenMembershiCardDetail(' + "'" + '{CampaignEnterpriseHQAccNo}' + "'" + ',' + "'" + '{CampaignEnterpriseAccNo}' + "'" + ', ' + "'" + '{MembershipCardCode}' + "'" + ', {ID})" style="border-collapse:collapse;border-spacing:0;border:none;width:100%;margin:-15px 0px 0px 0px;"><tr><td style="background-color:transparent;border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:left;vertical-align:middle;word-break:normal;width:100%;{ModifiedHeaderHeight}" colspan="3">{ModifiedEnterprisesLogo}{ModifiedEnterprisesName}</td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal;width:100%;" colspan="3"><div style="margin:-10px 0px 0px 10px;width:100%;text-align:left;font-family:Playball,cursive;font-size:24px;font-weight:normal;border-top: 1px none white;color:white;padding:0px 0px;">{MembershipLevel}</div><br><div style="margin:-34px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMembershipNo}</div><br><div style="margin:-28px 0px 0px 10px;width:100%;text-align:left;color:white;font-family:Orbitron;font-size:16px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedAccountName}</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:center;vertical-align:top;word-break:normal;width:5%;"></td></tr><tr><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal" colspan="2"><div style="margin:16px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Member Since</div><br><div style="margin:-21px 0px 0px 15px;width:100%;text-align:left;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedMemberSinceDate}</div><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></td><td style="border-color:black;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:10px;overflow:hidden;padding:0px 0px;text-align:right;vertical-align:top;word-break:normal"><div style="margin:16px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Valid Until</div><br><div style="margin:-15px 0px 0px -15px;width:100%;text-align:right;color:white;font-family:Orbitron,sans-serif;font-size:7px;font-weight:normal;border-top: 1px none white;padding:0px 0px">{ModifiedUntilDate}</div></td><br><div style="margin:-18px 0px 0px 0px;width:100%;text-align:left;color:transparent;font-family:Orbitron,sans-serif;font-size:11px;font-weight:normal;border-top: 1px none white;padding:0px 0px;height:5px">02/2021</div></tr></table>' +
                                                                                     '</div>' +
                                                         '<br><div style="margin:-18px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Card Name</div><div style="width:100%;text-align:right;margin:-15px 0px 0px -20px">Card Expired:</div></div>' +
                                                         '<br><div style="margin:-24px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{MembershipCardName}</div><div style="width:100%;text-align:right;margin:-18px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:15px;font-weight:bold;">{ModifiedUntilDate}</div></div>' +
                                                         //'<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Points Rate</div>' +
                                                       // '<br><div style="margin:-30px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">Point Rate</div></div>' +
                                                        '<br><div style="margin:-15px 0px 0px 10px;width:100%;text-align:left;color:black;font-family:Arial, sans-serif;font-size:10px;font-weight:normal;border-top: 1px none white;padding:0px 0px">Membership Privilege</div>' +
                                                        '<br><div style="margin:-25px 0px 0px 10px;width:100%;text-align:center;color:black;font-family:Arial, sans-serif;font-size:12px;font-weight:bold;border-top: 1px none white;padding:0px 0px"><div style="width:100%;text-align:left;">{LoyaltCampaignCount}</div><div class="blink_me" style="width:100%;text-align:right;margin:-16px 0px 0px -20px;color:black;font-family:Arial, sans-serif;font-size:9px;font-weight:normal;">*Tab to view details</div></div>',


                                                          height: '100%',
                                                          width: '100%',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {

                                                          //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                          //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                          //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //        //var ID = records.get('ID');
                                                          //        //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

                                                          //        //globalOpenMembershipCardList_Upgrade_From = "FloatPanel_AyohaStore_MembershipCardBeingUsed";
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
                                id: 'containerFloatPanel_AyohaStore_MembershipCardBeingUsedTitleOutter',
                                width: '100%',
                                docked: 'bottom',
                                hidden: true,
                               height: 35,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                               style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid grey;',
                              // style: "background-color: white;border-top:1px solid grey;",

                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [



                                     {
                                         margin: '3 0 0 0',
                                         width: '100%',
                                         html: '<div style="width:100%;background-color: transparent;text-align:center;border: 1px none white;font-family:Century Gothic;font-size: 12px;font-weight:normal;color:grey;"><button OnClick="FloatPanel_AyohaStore_MembershipCardBeingUsed_UseAnotherCard()" class="buttonSelectAnotherCard" style="margin:0px 0px 0px 0px;">Use Another Card</button></div>'
                                     },




                                    








                                ]

                            },


                              //////////////////////////////////////////////////////////////////////////////////////////////////////////////

                              //{
                              //    xtype: 'tabpanel',
                              //    // hidden: true,
                              //    //  hidden:true,
                              //    id: 'tabpanelFloatPanel_AyohaStore_MembershipCardBeingUsed',
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
    return _FloatPanel_AyohaStore_MembershipCardBeingUsed;



}








function FloatPanel_AyohaStore_MembershipCardBeingUsedShow() {
    var countCard=parseInt(globalFloatPanel_AyohaStore_CountMembershipCard);
    if(countCard==1){
       FloatPanel_OpenMembershipCard();
       return
    }if(countCard>1){
        Ext.Viewport.remove(_FloatPanel_AyohaStore_MembershipCardBeingUsed);
        this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_MembershipCardBeingUsed());
        this.overlay.show();
        LoadingPanelShow(getLoadingIcon(), 'Loading....');
        AddRoutePages("FloatPanel_AyohaStore_MembershipCardBeingUsedHide()");
        isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'Y';
        globalOpenMembershipCardList_Upgrade_From = "FloatPanel_AyohaStore_MembershipCardBeingUsed";
        FloatPanel_AyohaStore_MembershipCardBeingUsed_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore();
    }
   
  
  
  
  
  
  
   
   // alert(globalFloatPanelAyohaStore_CheckMembershipCardIsUsedStatus)
   
    // FloatPanel_AyohaStore_MembershipCardBeingUsedAdjustHeight();
}





function FloatPanel_AyohaStore_MembershipCardBeingUsedHide() {
    // FloatPanel_AyohaStore_MembershipCardBeingUsed_AddCardHide();
    if (isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen == "Y") {
        _FloatPanel_AyohaStore_MembershipCardBeingUsed.hide(); isFloatPanel_AyohaStore_MembershipCardBeingUsedOpen = 'N';
        RemovePages("FloatPanel_AyohaStore_MembershipCardBeingUsedHide()");
    }
  
}







function FloatPanel_AyohaStore_MembershipCardBeingUsedAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 80;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    Ext.getCmp('FloatPanel_AyohaStore_MembershipCardBeingUsedID').setHeight(x + 7);
    //Ext.getCmp('FloatPanel_AyohaStore_MembershipCardBeingUsedID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaStore_MembershipCardBeingUsedListID').setHeight(newHeights);


}


function FloatPanel_AyohaStore_MembershipCardBeingUsed_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore() {

   
    

    var entAccNo;
    var membershipCardCcode;

    entAccNo = FloatPanel_AyohaStore_getEnterpriseAccNo();
    membershipCardCcode = globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;
    if (isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen == 'Y') {
        entAccNo = globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo;
        membershipCardCcode = globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode;
    }










// alert("entAccNo: " + entAccNo + " membershipCardCcode: " + membershipCardCcode);
// alert("GetCurrAyohaUserAccountNo(): " + GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore.getProxy().setExtraParam('EnterpriseAccNo', entAccNo);
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore.getProxy().setExtraParam('MembershipCardCode', membershipCardCcode);
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCode');  
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoAndMembershipCardCodeStore.load({
        callback: function (records, operation, success) {
            if (success) {
                FloatPanel_AyohaStore_MembershipCardBeingUsed_CheckCanUseAnotherCard();
            } else {
                console.error('Failed to load store data.');
                LoadingPanelHide();
            }
        }
    });





    
  




}







function FloatPanel_AyohaStore_MembershipCardBeingUsedOpenMembershiCardDetail(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID) {
    //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
    //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
    //var MembershipCardCode = records.get('MembershipCardCode');
    //var ID = records.get('ID');
    //var isMembershipCardSubscribed = records.get('isMembershipCardSubscribed');

    // alert(EnterpriseAccountNo);

    globalOpenMembershipCardList_Upgrade_From = "FloatPanel_AyohaStore_MembershipCardBeingUsed";
    FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
    setTimeout(function () {

        Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=black><b>My Membership Card</b></font>');
    }, 2000);

}



function FloatPanel_AyohaStore_MembershipCardBeingUsed_UseAnotherCard() {
    FloatPanel_AyohaStore_MembershipCardUsedShow();
}


function FloatPanel_AyohaStore_MembershipCardBeingUsed_CheckCanUseAnotherCard() {


    var entAccNo;

    entAccNo = FloatPanel_AyohaStore_getEnterpriseAccNo();
    if (isFloatPanel_AyohaeWallet_ScanAndPay_PaymentOpen == 'Y') {
        entAccNo = globalFloatPanel_AyohaeWallet_ScanAndPay_Payment_EnterpriseAcNo;
    }


    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', entAccNo);
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/Memberships/MembershipsLoadBySubscriberAccNoAndEnterpriseAccNo');  
    _DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.load({
        callback: function (records, operation, success) {
            if (success) {
                var SubscribeMembershipCard =parseInt(_DataStore_MembershipsLoadBySubscriberAccNoAndEnterpriseAccNoStore.getCount());
      
               
                if (globalFloatPanelAyohaStore_MembershipCardCount == 1) {
                    Ext.getCmp('containerFloatPanel_AyohaStore_MembershipCardBeingUsedTitleOutter').setHidden(true);
                    return;
                }
                if (globalFloatPanelAyohaStore_MembershipCardCount > 1) {
                   
                    if (SubscribeMembershipCard >= globalFloatPanelAyohaStore_MembershipCardCount) {
                        Ext.getCmp('containerFloatPanel_AyohaStore_MembershipCardBeingUsedTitleOutter').setHidden(false);
                    }
                    if (SubscribeMembershipCard < globalFloatPanelAyohaStore_MembershipCardCount) {
                        Ext.getCmp('containerFloatPanel_AyohaStore_MembershipCardBeingUsedTitleOutter').setHidden(true);
                    }
                }
                LoadingPanelHide();
            } else {
                console.error('Failed to load store data.');
                LoadingPanelHide();
            }
        }
    });


















}