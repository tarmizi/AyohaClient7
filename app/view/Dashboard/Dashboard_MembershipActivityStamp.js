
Ext.define('BuskartApp.view.Dashboard.Dashboard_MembershipActivityStamp', {

});

var _Dashboard_MembershipActivityStamp;


var isDashboard_MembershipActivityStampOpen = 'N';






function Dashboard_MembershipActivityStamp() {

    _Dashboard_MembershipActivityStamp =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
        height: '100%',
        width: '100%',
        id: 'Dashboard_MembershipActivityStampID',
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
            type: 'slideOut',
            direction: 'left',
            easing: 'cubic-bezier(.7,0,.7,1)',
            duration: 250
        },
        //style: 'border-bottom:1px solid;background-color:#353839;',
        // style: 'border-bottom:1px solid;background-color:white;',
        style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
        listeners: {
            initialize: function (c) {
                this.element.on({
                    swipe: function (e, node, options) {
                        //if (e.direction == "up") {
                        //    LoyaltyCardRedeemListHide();
                        //}
                        if (e.direction == "left") {
                            _Dashboard_MembershipActivityStamp.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));

                            isDashboard_MembershipActivityStampOpen = 'N';
                        } if (e.direction == "right") {
                            _Dashboard_MembershipActivityStamp.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isDashboard_MembershipActivityStampOpen = 'N';
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
                style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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

                                id: 'containerDashboard_MembershipActivityStampHeader',
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
                                                         id: 'btnDashboard_MembershipActivityStampBack',
                                                         height: 30,
                                                         width: 35,
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backFullWhite.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // Dashboard_MembershipActivityStampHide();
                                                             // Dashboard_MembershipActivityStamp_AddCardHide();
                                                             isDashboard_MembershipActivityStampOpen = 'N';
                                                             _Dashboard_MembershipActivityStamp.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             //  Dashboard_MembershipActivityStamp_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 0 0 0',
                                                          id: 'htmlDashboard_MembershipActivityStamp_TitleHeaderTxt',
                                                          html: '<font size=2 color=white><b>UnClaim Stamp Point</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnDashboard_MembershipActivityStamp_CardIcon',
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/membershicardwhite.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isDashboard_MembershipActivityStampOpen = 'N';

                                                                    _Dashboard_MembershipActivityStamp.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    //Dashboard_MembershipActivityStamp_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },




























                            {
                                xtype: 'container',
                                id: 'containerDashboard_MembershipActivityStampStampCardList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                                height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: transparent;",
                                //style: "background-color: #F35B57;",
                                title: 'Dashboard_MembershipActivityStampCardLis',
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
                                //                    Ext.getCmp('tabpanelDashboard_MembershipActivityStamp').setActiveItem(0);
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
                                                  height:60,
                                                  // style: 'background-color:black;color:white',
                                                  style: 'background-image: url("resources/icons/border5.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
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

                                                              //width: '50%',
                                                              margin: '-6 0 0 0',
                                                              id: 'Dashboard_MembershipActivityStamp_TotalUnClaimedStamp',
                                                              html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:38px;">0</div>'
                                                          },
                                                           {

                                                               //width: '50%',
                                                               margin:'-16 0 0 0',
                                                               html: '<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:12px;">Total UnClaimed Stamp Point</div>'
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
                                                          height: '95%',
                                                          store: 'LoyaltyStampLoadBySubscriberAccNoStore',
                                                          id: 'Dashboard_MembershipActivityStampID',
                                                          mode: 'SINGLE',
                                                          grouped: true,
                                                          disableSelection: true,
                                                          itemTpl: '<div class="myContent">' +

                                                          //  '<table style="border-collapse:collapse;border-spacing:0;margin:2px 0px 0px 0px;table-layout: fixed; width: 100%; height:20px;" class="tg"><colgroup><col style="width: 78%"><col style="width: 22%"></colgroup><thead><tr><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</th><th style="background-color:#ffffff;border-color:#ffffff;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:11px;font-weight:normal;overflow:hidden;padding:5px 5px;text-align:center;vertical-align:middle;word-break:normal">{LastStampBy}</th></tr></thead></table>' +
                                                           '<div style="background-color:transparent;border-color:#ffffff;border-style:none;border-width:1px;font-family:Arial, sans-serif;font-size:12px;font-weight:normal;color:black;overflow:hidden;padding:0px 0px;text-align:left;vertical-align:top;word-break:normal">{StampedByDate}<br>{StampedBy}</div>' +



                                                            '</div>',
                                                          width: '100%',
                                                          listeners: {
                                                              itemsingletap: function (list, idx, target, records, evt) {

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
                                                                  //localStorage.setItem('StampCampaignCode', StampedCampaignCode);

                                                                  //localStorage.setItem('CountLoyaltyStamped', CountLoyaltyStamped);
                                                                  //localStorage.setItem('CountStampCardRowShow', CountStampCardRowShow);
                                                                  ////alert(StampRuleRemarks); alert(isStampRulePopUp);

                                                                  //FloatPanel_AyohaCardManagement_PreviewCard_AyohaUserCardShow(StampedCampaignCode, EnterpriseAccNo, StartDate, EndDate, SubscriberAccNo, EnterpriseName, StampRuleRemarks, StampCampaignName, CountLoyaltyStamped, CountStampCardRowShow);



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



                        ]
                    },

















































                ]
            },












        ]





    });
    return _Dashboard_MembershipActivityStamp;



}








function Dashboard_MembershipActivityStampShow() {

    Ext.Viewport.remove(_Dashboard_MembershipActivityStamp);
    this.overlay = Ext.Viewport.add(Dashboard_MembershipActivityStamp());
    this.overlay.show();
    isDashboard_MembershipActivityStampOpen = 'Y';
    Dashboard_MembershipActivityStamp_LoyaltyStampLoadBySubscriberAccNoStore();
}





function Dashboard_MembershipActivityStampHide() {
    // Dashboard_MembershipActivityStamp_AddCardHide();
    _Dashboard_MembershipActivityStamp.hide(); isDashboard_MembershipActivityStampOpen = 'N';
}

//var _DataStore_Dashboard_MembershipActivityStamp_LoyaltyStampLoadBySubscriberAccNoStore;
function Dashboard_MembershipActivityStamp_LoyaltyStampLoadBySubscriberAccNoStore() {
    Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        SubscriberAccNo: GetCurrAyohaUserAccountNo()
    });
    Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
    var task = Ext.create('Ext.util.DelayedTask', function () {
        Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore').getProxy().setExtraParams({
            SubscriberAccNo: GetCurrAyohaUserAccountNo()
        });
        Ext.StoreMgr.get('LoyaltyStampLoadBySubscriberAccNoStore').load();
        var myStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
        //_DataStore_Dashboard_MembershipActivityStamp_LoyaltyStampLoadBySubscriberAccNoStore = Ext.getStore('LoyaltyStampLoadBySubscriberAccNoStore');
       var StampCount = myStore.getCount();


       Ext.getCmp('Dashboard_MembershipActivityStamp_TotalUnClaimedStamp').setHtml('<div style="width:100%;text-align:center;color:black;font-family: Arial; font-size:38px;">' + StampCount + '</div>');
     
        console.log(StampCount)
        //if (isFloatPanel_LoyaltyCard_StampHistoryOpen == 'Y') {
        //    Ext.getCmp('htmlFloatPanel_LoyaltyCard_StampHistory_TotalStampCount').setHtml('<div style="color:white;text-align: center;font-size:28px;width:100%;font-weight:bold">' + StampCount + '</div>');
        //}

        // adjustHeight();
        Ext.Viewport.setMasked(false);








    });
    task.delay(2000);




}