
Ext.define('BuskartApp.view.AyohaReward.FloatPanel_AyohaReward_ContestHistory', {

});

var _FloatPanel_AyohaReward_ContestHistory;


var isFloatPanel_AyohaReward_ContestHistoryOpen = 'N';






function FloatPanel_AyohaReward_ContestHistory() {

    _FloatPanel_AyohaReward_ContestHistory =
    Ext.create('Ext.Panel', {
        zIndex: 111,
        xtype: 'container',
        //height: 465,
        //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaReward_ContestHistoryID',
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
        style: 'background-color:white;',
      //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaReward_ContestHistory.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isFloatPanel_AyohaReward_ContestHistoryOpen = 'N';
                            RemovePages("FloatPanel_AyohaReward_ContestHistoryHide()");
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaReward_ContestHistory.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaReward_ContestHistoryOpen = 'N';
                            RemovePages("FloatPanel_AyohaReward_ContestHistoryHide()");
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
                style: ' background-color:white;',
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
                                margin: '20 0 0 0',
                                // width: 40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaReward_ContestHistoryHeader',
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
                                                         id: 'btnFloatPanel_AyohaReward_ContestHistoryBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaReward_ContestHistoryHide();
                                                             // FloatPanel_AyohaReward_ContestHistory_AddCardHide();
                                                             isFloatPanel_AyohaReward_ContestHistoryOpen = 'N';
                                                             _FloatPanel_AyohaReward_ContestHistory.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaReward_ContestHistoryHide()");
                                                             //  FloatPanel_AyohaReward_ContestHistory_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlFloatPanel_AyohaReward_ContestHistory_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Ayoha Reward Contest History</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaReward_ContestHistory_CardIcon',
                                                                hidden:true,
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/contest01.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaReward_ContestHistoryOpen = 'N';

                                                                    _FloatPanel_AyohaReward_ContestHistory.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_AyohaReward_ContestHistoryHide()");
                                                                    //FloatPanel_AyohaReward_ContestHistory_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },



























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaReward_ContestHistoryList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: white;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaReward_ContestHistoryCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaReward_ContestHistory').setActiveItem(0);
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
                                                  height: '95%',
                                                  id: 'FloatPanel_AyohaReward_ContestHistoryListContentID',
                                                  layout: {
                                                      type: 'vbox',
                                                      pack: 'start',
                                                      align: 'center'

                                                  },
                                                  style: 'background-color:transparent',

                                                  items: [
                                                      {
                                                          xtype: 'list',
                                                          width: '100%',
                                                          // height: '98%',
                                                          // flex: 1,
                                                          // store: 'AyohaRewardContestantLoadBySubscriberAccNoStore',
                                                          store:_DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore,
                                                          id: 'FloatPanel_AyohaReward_ContestHistoryListID',
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
                                                          itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +

                       //  '<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:16px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{EnterpriseLogo64}"style="width: 102px; height: 122px; margin-top: 5px; border:1px solid #A2CDF5; border-radius: 50%; max-width:200px; " /><br>{EnterpriseName}<br>{EnterpriseAddress}<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Subscribtion</td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center" colspan="2">Status</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">Cloud Receipts</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedCloudReceipt}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="2">News&amp;Promotions</td><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:center;vertical-align:top" colspan="2">{SubscribedNewsAndPromotion}</td></tr><tr><td style="font-family:Arial, sans-serif;font-size:13px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><b>Start subscribtion date:{SubscribedDate}</b><br><br></td></tr></table>' +

                         //'<table style="border-collapse:collapse;border-spacing:0;background-color:#F7FDFA;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;text-align:left" colspan="3">Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{ItemCode}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:bold;vertical-align:top" colspan="3">Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px -2px;">{RedeemPoint}</div></td></tr></table>' +

                        //ori //'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:#ffffff;background-color:#26ade4;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate} </div></td></tr></table>' +
                         //'<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:0px 0px 0px 0px;width:100%;text-align:left;color:black;">No.1</div>' +
                        //  '<div style="font-family:Arial, sans-serif;font-size:11px;font-weight:normal;word-break:normal;margin:10px 0px 0px 0px;width:100%;text-align:left;color:black;">Redeem ID:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-10px 0px 0px 0px;width:100%;text-align:left;color:black;">{ID}</div></div>' +
                         ///jadi//'<table style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:100%;margin:-30px 0px 0px 0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center" colspan="4"><img src="{ImgPath}"style="width: 100%; height: 300px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Redeem Item Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Code:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ItemCode}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Redeem Item Point:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemPoint}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:2px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:100%;" colspan="3">Redeem Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{RedeemHistoryStatus} - {RedeemHistoryStatusDate}</div></td></tr></table>' +
                                                '<table style="border-collapse:collapse;border-spacing:0;background-color:white;margin:-10px 0px 0px -13px;width:103.7%;"><tr onclick="FloatPanel_AyohaReward_ContestAdvertisementShow()"><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:bold;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;border-color:#A2CDF5;color:#333;text-align:center;background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);"  colspan="4"><img src="{AdvertisementImgPath}"style="width: 100%; height: 500px; " /></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:0px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;text-align:left" colspan="3">Contest Name:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ContestName}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Start Date:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{StartDate}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;text-align:right;">End Date:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;width:100%;text-align:right;">{EndDate}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;">Contest Status:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{ContestStatus}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:50%;text-align:right;">Contest Fees(RM):<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;width:100%;text-align:right">{ContestFees}</div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:65%;">Date Joined:<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;">{JoinDate} {JoinDate_TimeOnly}</div></td><td style="font-family:Arial, sans-serif;font-size:11px;padding:4px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:transparent;color:black;background-color:transparent;font-weight:normal;vertical-align:top;width:35%;text-align:right;">.<br><div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-1px 0px 0px 0px;width:100%;text-align:right">.</div></td></tr></table>' +
                                    '<div style="font-family:Arial, sans-serif;font-size:15px;font-weight:bold;word-break:normal;margin:-50px 0px 0px -15px;width:103.7%;text-align:right;color:black;"><button class="buttonViewMyRanking01" onClick="FloatPanel_AyohaReward_ViewMyRankingShow()">View My Ranking</button></div>' +
                       '</div>',

                                                          emptyText: '<div class="myContent">You have not join Any Contest yet, Join the contest Now!</div>',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {

                                                          //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                          //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                          //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //        //var ID = records.get('ID');
                                                          //        ////FloatPanel_AyohaReward_ContestHistory_EditCardShow_Edit(ID);
                                                          //        //FloatPanel_MembershipCardList_UpgradeShow_MyMembershipCard(EnterpriseHQAccountNo, EnterpriseAccountNo, MembershipCardCode, ID);
                                                          //        //setTimeout(function () {
                                                          //        //    Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);
                                                          //        //    // Ext.getCmp('containerFloatPanel_MembershipCardList_UpgradeBottom').setHidden(true);

                                                          //        //    Ext.getCmp('htmlFloatPanel_MembershipCardList_Upgrade_TitleHeaderTxt').setHtml('<font size=2 color=white><b>My Membership Card</b></font>');
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



                                      ]
                                  },

                                ]

                            },




                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaReward_ContestHistoryTitleOutter',
                                width: '100%',
                                //  docked: 'bottom',
                                hidden: true,
                                height: 40,
                                // style: "background-color: white;box-shadow: 5px 5px 5px rgba(68,68,68,0.6);",
                                // style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;',
                                style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-top:1px solid #EAEEF3;',
                                // style: "background-color: #EAEEF3;",

                                layout: {
                                    type: 'hbox',
                                    pack: 'center',
                                    align: 'center'

                                },
                                items: [




                                      {
                                          xtype: 'button',
                                          id: 'btnFloatPanel_AyohaReward_ContestHistoryListSearch',
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
                                         id: 'FloatPanel_AyohaReward_ContestHistory_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_AyohaReward_ContestHistory_SearchTxt" placeHolder="Search Merchant" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_AyohaReward_ContestHistory_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaReward_ContestHistoryFilter',
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
                              //    id: 'tabpanelFloatPanel_AyohaReward_ContestHistory',
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
    return _FloatPanel_AyohaReward_ContestHistory;



}








function FloatPanel_AyohaReward_ContestHistoryShow() {

    Ext.Viewport.remove(_FloatPanel_AyohaReward_ContestHistory);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaReward_ContestHistory());
    this.overlay.show();
    AddRoutePages("FloatPanel_AyohaReward_ContestHistoryHide()");
    isFloatPanel_AyohaReward_ContestHistoryOpen = 'Y';
    FloatPanel_AyohaReward_AyohaRewardContestantLoadBySubscriberAccNoStore();
    FloatPanel_AyohaReward_ContestHistoryAdjustHeight();



}





function FloatPanel_AyohaReward_ContestHistoryHide() {
    // FloatPanel_AyohaReward_ContestHistory_AddCardHide();
    if (isFloatPanel_AyohaReward_ContestHistoryOpen == "Y") {
        _FloatPanel_AyohaReward_ContestHistory.hide(); isFloatPanel_AyohaReward_ContestHistoryOpen = 'N';
        RemovePages("FloatPanel_AyohaReward_ContestHistoryHide()");
    }
  
}


//var _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore;
function FloatPanel_AyohaReward_AyohaRewardContestantLoadBySubscriberAccNoStore() {

    _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadBySubscriberAccNo');
    _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.load({
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












//     //Ext.getStore('AyohaRewardContestantLoadBySubscriberAccNoStore').getProxy().setExtraParams({
//     //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
//     //});
//     //Ext.StoreMgr.get('AyohaRewardContestantLoadBySubscriberAccNoStore').load();
//     _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
//     _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardContestant/AyohaRewardContestantLoadBySubscriberAccNo');
//    // _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.load();

//     var task = Ext.create('Ext.util.DelayedTask', function () {
//       _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.load();
//         //Ext.getStore('AyohaRewardContestantLoadBySubscriberAccNoStore').getProxy().setExtraParams({
//         //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
//         //});


//         //_DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore = Ext.StoreMgr.get('AyohaRewardContestantLoadBySubscriberAccNoStore').load();

//         //var myStore = Ext.getStore('AyohaRewardContestantLoadBySubscriberAccNoStore');
//         //  _DataStore_AyohaNotificationLoadBySubscriberAccNoStore = Ext.getStore('AyohaNotificationLoadBySubscriberAccNoStore');

//         //countAyohaNotificationLoadBySubscriberAccNoFirst = _DataStore_AyohaRewardContestantLoadBySubscriberAccNoStore.getCount();
//         //alert(countAyohaNotificationLoadBySubscriberAccNoFirst);
//         //Ext.getCmp('FloatPanel_AyohaReward_ContestHistory_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countAyohaNotificationLoadBySubscriberAccNoFirst + ')</b></font>');


//         Ext.Viewport.setMasked(false);










//     });
//     task.delay(500);




}




//function openNotificationPanel(ID) {

//    FloatPanel_AyohaReward_ContestHistory_NotificationShow(ID);
//    //  FloatPanel_AyohaReward_ContestHistoryHide();
//}





function FloatPanel_AyohaReward_ContestHistoryAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 40;
    // globalFloatPanel_AyohaReward_ContestHistoryManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaReward_ContestHistoryID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaReward_ContestHistoryListID').setHeight(newHeights);


}



