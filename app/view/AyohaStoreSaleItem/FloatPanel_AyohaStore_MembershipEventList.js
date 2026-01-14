
Ext.define('BuskartApp.view.AyohaStoreSaleItem.FloatPanel_AyohaStore_MembershipEventList', {

});

var _FloatPanel_AyohaStore_MembershipEventList;


var isFloatPanel_AyohaStore_MembershipEventListOpen = 'N';






function FloatPanel_AyohaStore_MembershipEventList() {

    _FloatPanel_AyohaStore_MembershipEventList =
    Ext.create('Ext.Panel', {
        zIndex: 110,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaStore_MembershipEventListID',
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
        // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _FloatPanel_AyohaStore_MembershipEventList.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaStore_MembershipEventListHide()");
                            isFloatPanel_AyohaStore_MembershipEventListOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaStore_MembershipEventList.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaStore_MembershipEventListOpen = 'N';
                            RemovePages("FloatPanel_AyohaStore_MembershipEventListHide()");
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
                style: 'background-color:white;',
                //style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                                id: 'containerFloatPanel_AyohaStore_MembershipEventListHeader',
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
                                                         id: 'btnFloatPanel_AyohaStore_MembershipEventListBack',
                                                         height: 30,
                                                         margin: '0 0 0 10',
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaStore_MembershipEventListHide();
                                                             // FloatPanel_AyohaStore_MembershipEventList_AddCardHide();

                                                             // FloatPanel_AyohaStore_MembershipEventListHide();



                                                             isFloatPanel_AyohaStore_MembershipEventListOpen = 'N';
                                                             _FloatPanel_AyohaStore_MembershipEventList.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             RemovePages("FloatPanel_AyohaStore_MembershipEventListHide()");

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_AyohaStore_MembershipEventList_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Membership Loyalty Event </b></font>'
                                                      },



                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaStore_MembershipEventList_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                hidden: true,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaStore_MembershipEventListOpen = 'N';

                                                                    _FloatPanel_AyohaStore_MembershipEventList.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages("FloatPanel_AyohaStore_MembershipEventListHide()");
                                                                }
                                                            },









                                       ]

                            },



                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaStore_MembershipEventListList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaStore_MembershipEventListCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaStore_MembershipEventList').setActiveItem(0);
                                //                }
                                //            }
                                //        });
                                //    }
                                //},

                                items: [
                                    //{
                                    //    xtype: 'panel',
                                    //    height: 5
                                    //},

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
                                               xtype: 'panel',
                                               height: 3
                                           },



                                           //{

                                           //    id: 'FloatPanel_AyohaStore_MembershipEventListID',
                                           //    margin: '-15 0 0 0',
                                           //    store: _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore,
                                           //    // grouped: true,
                                           //    xtype: 'dataview',
                                           //    //xtype: 'list',
                                           //    height: 500,
                                           //    style: "background-color: transparent;",
                                           //    inline: {
                                           //        wrap: true
                                           //    },
                                           //    scrollable: {
                                           //        direction: 'vertical',
                                           //        indicators: false,
                                           //    },
                                           //    width: '100%',
                                           //    itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:400px;">' +
                                           //     '&nbsp;&nbsp;<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:left;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div><div style="margin:-17px 0px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>&nbsp;&nbsp;<br>' +

                                           //     // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
                                           //     '&nbsp;&nbsp;<img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:{ModifiedWidth}px;height:200px;margin:-15px 0px 0px 0px;"/>&nbsp;&nbsp;<br>' +
                                           //    '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-22px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-14px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div><br>' +


                                           // //'{ModifiedRespondStatus}' +
                                           //  '</div>',


                                           //    //'<div style="width: 90px; float:left; height:70px; background:red; margin:0px"></div><div style="width: 230px; float:left; height:70px; background:black; margin:0px;"></div>' ,


                                           //    // itemTpl: '<table style="border-collapse:collapse;border-spacing:0;width:100%;"><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:0px 10px;text-align:center;vertical-align:middle;" colspan="2"><img src="{EventCoverPhoto}" style="width:400px;height:250px"/></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:5px 20px;text-align:center;vertical-align:middle;color:black;"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-17px 0px 0px 0px;">{EventStartDate_Month}</div></td><td style="background-color:#ffffff;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:16px;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:middle;word-wrap: break-word;word-break: break-all;white-space: break-spaces;"><div style="margin:-5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;margin:5px 0px 0px 0px;">{EventName}</div></td></tr><tr><td style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal" colspan="2">Berminat | Akan Hadir</td></tr></table>',
                                           //    emptyText: '<div  style="background-color:transparent;width: 100%; height: 400px;margin:20px 0px 0px 0px;padding:5px 10px"><img src="resources/icons/NoMembershipEvent.jpg" style="width: 100%; height: 400px;"/></div>',

                                           //},


                                              {
                                                  xtype: 'list',
                                                  //flex:1,
                                                  height: '97%',
                                                  store: _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore,
                                                  id: 'FloatPanel_AyohaStore_MembershipEventListID',
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
                                                  itemTpl: '<div class="myContent" style="background-color:transparent;width:100%;height:285px;">' +
                                                                      
                                                                      // '&nbsp;&nbsp;<div style="width: 200px; float:left; height:30px; background:white;text-align:left;font-size:12px;"><img src="{EnterpriseLogo}" style="width:30px;height:30px;border-radius:50%;margin:0px 0px 0px 20px;"/><div style="margin:-28px 0px 0px 55px;">{EnterpriseName}</div></div><div style="width:200px; float:left; height:30px; background:white;text-align:right;font-size:12px;"><img src="resources/icons/like01.png" style="width:20px;height:20px;margin:8px 0px 0px 0px;"/></div>&nbsp;&nbsp;<br>' +
                                                                      '<br><img  onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});"   src="{EventCoverPhoto}" style="width:100%;height:200px;margin:-15px 0px 0px 0px;"/><br>' +
                                                                     '<div onclick="FloatPanel_DashboardMerchantReward_MembershipEventDetailShow(' + "'" + '{EnterpriseLogo}' + "'" + ',' + "'" + '{EnterpriseName}' + "'" + ',' + "'" + '{EventCoverPhoto}' + "'" + ',' + "'" + '{EventName}' + "'" + ',' + "'" + '{EventStartDate_Day}' + "'" + ',' + "'" + '{EventStartDate_Month}' + "'" + ',' + "'" + '{EventStartTime}' + "'" + ',' + "'" + '{EventEndDate_Day}' + "'" + ',' + "'" + '{EventEndDate_Month}' + "'" + ',' + "'" + '{EventEndTime}' + "'" + ',' + "'" + '{EventLocationName}' + "'" + ',' + "'" + '{ModifiedWidth}' + "'" + ',' + "'" + '{EventDescription}' + "'" + ',' + "'" + '{EventLocationCoordinate}' + "'" + ',' + "'" + '{EventUrlTicket}' + "'" + ',' + "'" + '{EventCode}' + "'" + ',' + "'" + '{EnterpriseAccNo}' + "'" + ',' + "'" + '{RespondStatus}' + "'" + ',{ID});" style="width: 90px; float:left; height:70px; background:white; margin:0px"><div style="font-family:Arial, sans-serif;font-size:40px;color:black;font-weight:bold;text-align:center;">{EventStartDate_Day}</div><br><div style="font-family:Arial, sans-serif;font-size:16px;color:red;font-weight:bold;margin:-36px 0px 0px 0px;text-align:center;">{EventStartDate_Month}</div></div><div style="width: 230px; float:left; height:70px; background:white; margin:0px;word-break: break-all;"><div style="margin:5px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:14px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:bold;width:100%;height:30px;">{EventName}<br><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventStartDate_Day} {EventStartDate_Month},{EventStartTime} - {EventEndDate_Day} {EventEndDate_Month},{EventEndTime}.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;">{EventLocationName}.</div><br><div style="margin:-24px 0px 0px 0px;text-align:left;color:black;font-family: Arial; font-size:11px;word-wrap: break-word;word-break: break-all;white-space: break-spaces;font-weight:normal;width:100%;"><b>({RespondStatus_IwillAttendCount})</b> Will Attend, <b>({RespondStatus_InterestedCount})</b> Interested</div></div></div>' +
                                                                     '<div style="font-family:Arial, sans-serif;font-size:14px;color:black;font-weight:bold;text-align:right;width:100%;"><div style="margin:-17px -20px 0px 0px;text-align:right">{ModifiedRespondStatusImg}</div></div>' +


                                                                  //'{ModifiedRespondStatus}' +
                                                                   '</div>',




                                                  width: '100%',


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





    });
    return _FloatPanel_AyohaStore_MembershipEventList;



}








function FloatPanel_AyohaStore_MembershipEventListShow() {
    AddRoutePages("FloatPanel_AyohaStore_MembershipEventListHide()");
    Ext.Viewport.remove(_FloatPanel_AyohaStore_MembershipEventList);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaStore_MembershipEventList());
    this.overlay.show();
    isFloatPanel_AyohaStore_MembershipEventListOpen = 'Y';
    FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore();

}



function FloatPanel_AyohaStore_MembershipEventListHide() {
    //  FloatPanel_AyohaStore_MembershipEventList_AddCardHide();
    _FloatPanel_AyohaStore_MembershipEventList.hide(); isFloatPanel_AyohaStore_MembershipEventListOpen = 'N';
    RemovePages("FloatPanel_AyohaStore_MembershipEventListHide()");
}


function FloatPanel_AyohaStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore() {

    _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setExtraParam('EnterpriseAccNo', FloatPanel_AyohaStore_getEnterpriseAccNo());
    _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaRewardEvent/AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNo');

    _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore.load();



    var task = Ext.create('Ext.util.DelayedTask', function () {


       // Ext.getCmp('FloatPanel_MerchantReward_MembershipEvent').setStore(_DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore);
        //_DataStore_EnterprisesLoadByMerchantCategory.load();
        var count = _DataStore_AyohaRewardEventLoadBySubscriberAccNoEnterpriseAccNoStore.getCount();
       
    });
    task.delay(500);
}
