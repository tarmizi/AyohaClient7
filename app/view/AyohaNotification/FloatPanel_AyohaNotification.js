
Ext.define('BuskartApp.view.AyohaNotification.FloatPanel_AyohaNotification', {

});

var _FloatPanel_AyohaNotification;


var isFloatPanel_AyohaNotificationOpen = 'N';






function FloatPanel_AyohaNotification() {

    _FloatPanel_AyohaNotification =
    Ext.create('Ext.Panel', {
        zIndex: 50,
        xtype: 'container',
        //height: 465,
      //  height: '100%',
        width: '100%',
        id: 'FloatPanel_AyohaNotificationID',
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
                            _FloatPanel_AyohaNotification.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'left',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            RemovePages("FloatPanel_AyohaNotificationHide()");
                            isFloatPanel_AyohaNotificationOpen = 'N';
                        } if (e.direction == "right") {
                            _FloatPanel_AyohaNotification.hide(Ext.fx.Animation({
                                type: 'slideOut',
                                direction: 'right',
                                easing: 'cubic-bezier(.7,0,.7,1)',
                                duration: 250

                            }));
                            isFloatPanel_AyohaNotificationOpen = 'N';
                            RemovePages("FloatPanel_AyohaNotificationHide()");
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
                style: 'background-color:transparent;',
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
                               // height:40,

                                //  title: '<font size="3" color="white">Live Tracking Map</font>',
                                //hidden: true,

                                id: 'containerFloatPanel_AyohaNotificationHeader',
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
                                                         id: 'btnFloatPanel_AyohaNotificationBack',
                                                         height: 55,
                                                         width: 55,
                                                         margin: '10 0 0 0',
                                                         // iconCls: 'list',
                                                         html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                                         ui: 'plain',
                                                         handler: function () {
                                                             // FloatPanel_AyohaNotificationHide();
                                                             // FloatPanel_AyohaNotification_AddCardHide();
                                                             isFloatPanel_AyohaNotificationOpen = 'N';
                                                             RemovePages("FloatPanel_AyohaNotificationHide()");
                                                             _FloatPanel_AyohaNotification.hide(Ext.fx.Animation({
                                                                 type: 'slideOut',
                                                                 direction: 'left',
                                                                 easing: 'cubic-bezier(.7,0,.7,1)',
                                                                 duration: 250

                                                             }));
                                                             //  FloatPanel_AyohaNotification_AddCardHide();

                                                         }
                                                     },

                                                      {
                                                          xtype: 'spacer',

                                                      },


                                                      {
                                                          margin: '0 10 0 0',
                                                          id: 'htmlFloatPanel_AyohaNotification_TitleHeaderTxt',
                                                          html: '<font size=2 color=black><b>Notifications List</b></font>'
                                                      },


                                                            {
                                                                xtype: 'button',
                                                                id: 'btnFloatPanel_AyohaNotification_CardIcon',
                                                                hidden:true,
                                                                height: 30,
                                                                width: 35,
                                                                // iconCls: 'list',
                                                                html: '<div ><img src="resources/icons/Notification.png" width="25" height="20" alt="Company Name"></div>',
                                                                ui: 'plain',
                                                                handler: function () {

                                                                    isFloatPanel_AyohaNotificationOpen = 'N';

                                                                    _FloatPanel_AyohaNotification.hide(Ext.fx.Animation({
                                                                        type: 'slideOut',
                                                                        direction: 'right',
                                                                        easing: 'cubic-bezier(.7,0,.7,1)',
                                                                        duration: 250

                                                                    }));
                                                                    RemovePages(_FloatPanel_AyohaNotification, "isFloatPanel_AyohaNotificationOpen");
                                                                    //FloatPanel_AyohaNotification_AddCardHide();
                                                                }
                                                            },









                                       ]

                            },



























                            {
                                xtype: 'container',
                                id: 'containerFloatPanel_AyohaNotificationList',
                                // margin: '-10 0 0 0',
                                width: '100%',
                               height: '100%',
                                //style: "background-color: white;border-right:2px solid #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px solid #ECF0F1;border-top:2px #ECF0F1 white;border-radius: 50px 50px 50px 50px;",
                                style: "background-color: white;",
                                //style: "background-color: #F35B57;",
                                title: 'FloatPanel_AyohaNotificationCardLis',
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
                                //                    Ext.getCmp('tabpanelFloatPanel_AyohaNotification').setActiveItem(0);
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
                                                  hidden:true,
                                                  // style: 'background-color:black;color:white',
                                                  style: 'background-image: url("resources/icons/border7.png"); background-size: 100% 100%;border-bottom:2px solid #ECF0F1;border-top:2px solid #ECF0F1;border-right:2px solid #ECF0F1;border-left:2px solid #ECF0F1;border-radius: 10px 10px 0px 0px;',
                                                  layout: {
                                                      type: 'hbox',
                                                      pack: 'start',
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

                                                              width: '50%',
                                                              html: '<div style="width:100%;text-align:left;color:black;font-family: Arial; font-size:12px;"> &nbsp;&nbsp;&nbsp;&nbsp;My Membership Card List</div>'
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
                                                  height: '95%',
                                                  id: 'FloatPanel_AyohaNotificationListContentID',
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
                                                          //  store: 'AyohaNotificationLoadBySubscriberAccNoStore',
                                                          store:_DataStore_AyohaNotificationLoadBySubscriberAccNoStore,
                                                          id: 'FloatPanel_AyohaNotificationListID',
                                                          mode: 'SINGLE',
                                                         // width: '100%',
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
                                                          style: 'background-color:rgba(255,255,255, 10);border-radius: 0px 0px 0px 0px;',
                                                          itemTpl: '<div class="myContent" style="background-color:white;width:104%">' +
                                                         

                                                             //'<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;margin:-10px 0px 0px -13px;height:90px;"><tr><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:20%;vertical-align:center"><img src="{EnterpriseLogoPath}" style="border:1px solid white; width:65px;height:65px;" /></td><td style="font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:0px 0px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;width:80%;vertical-align:center"><b>{EnterpriseName}</b><br><font style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;">{NotificationTitle}<br>Date:{SentDate}</font></td></tr></table>' +
                                                             '{ModifiedNotification}'

                                                               +'</div>'
                                                           + '<br>'
                                                         //+ '<div style="width:100%;text-align:right;margin:-60px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotificationManagement_SetRecipient__DeleteSpecificMember({ID})" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 30px;" /></button></div>',
                                                               + '{ModifiedIsRead}',
                                                          //height: '100%',
                                                    
                                                          emptyText: '<div class="myContent">No Notification</div>',
                                                          //listeners: {
                                                          //    itemsingletap: function (list, idx, target, records, evt) {

                                                          //        //var EnterpriseHQAccountNo = records.get('CampaignEnterpriseHQAccNo');
                                                          //        //var EnterpriseAccountNo = records.get('CampaignEnterpriseAccNo');
                                                          //        //var MembershipCardCode = records.get('MembershipCardCode');
                                                          //        //var ID = records.get('ID');
                                                          //        ////FloatPanel_AyohaNotification_EditCardShow_Edit(ID);
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
                                id: 'containerFloatPanel_AyohaNotificationTitleOutter',
                                width: '100%',
                              //  docked: 'bottom',
                                hidden:true,
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
                                          id: 'btnFloatPanel_AyohaNotificationListSearch',
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
                                         id: 'FloatPanel_AyohaNotification_SearchTxt',
                                         margin: '0 0 0 -10',
                                         width: '78%',
                                         height: 20,
                                         html: '<input type="text" id="input-FloatPanel_AyohaNotification_SearchTxt" placeHolder="Search Merchant" style="border-color:purple;color:black;width:100%;text-align: center;font-size:12px;">'
                                     },



                                     {
                                         id: 'FloatPanel_AyohaNotification_CountSearchTxt',
                                         margin: '0 0 0 0',
                                         // width: '75%',
                                         height: 20,
                                         html: '<font size=3 color=black>(0)</font>'
                                     },
                                     {
                                         xtype: 'button',
                                         id: 'btnFloatPanel_AyohaNotificationFilter',
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
                              //    id: 'tabpanelFloatPanel_AyohaNotification',
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
    return _FloatPanel_AyohaNotification;



}








function FloatPanel_AyohaNotificationShow() {
   
    Ext.Viewport.remove(_FloatPanel_AyohaNotification);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotification());
    this.overlay.show();
    LoadingPanelShow(getLoadingIcon(), 'Loading...');
    AddRoutePages("FloatPanel_AyohaNotificationHide()");
    isFloatPanel_AyohaNotificationOpen = 'Y';
  
    document.getElementById("input-FloatPanel_AyohaNotification_SearchTxt").addEventListener("keyup", AyohaNotificationLoadBySubscriberAccNoStoreOnKeyUp);
    FloatPanel_AyohaNotificationLoadBySubscriberAccNoStore();
    FloatPanel_AyohaNotificationAdjustHeight();

   
    if (globalPNUnread != "0") {
        Ext.getCmp('btnFloatPanel_AyohaNotification_CardIcon').setBadgeText(globalPNUnread);
    }

}





function FloatPanel_AyohaNotificationHide() {
    // FloatPanel_AyohaNotification_AddCardHide();
   
    if (isFloatPanel_AyohaNotificationOpen == "Y") {
        _FloatPanel_AyohaNotification.hide(); isFloatPanel_AyohaNotificationOpen = 'N';
        RemovePages("FloatPanel_AyohaNotificationHide()");
    }
 
}



function FloatPanel_AyohaNotificationLoadBySubscriberAccNoStore() {


    _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.getProxy().setExtraParam('SubscriberAccNo', GetCurrAyohaUserAccountNo());
    _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.getProxy().setUrl(GetAPIurl() + '/AyohaNotification/AyohaNotificationLoadBySubscriberAccNo');
    _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.load();

    //Ext.getStore('AyohaNotificationLoadBySubscriberAccNoStore').getProxy().setExtraParams({
    //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
    //});
    //Ext.StoreMgr.get('AyohaNotificationLoadBySubscriberAccNoStore').load();

    var task = Ext.create('Ext.util.DelayedTask', function () {

        //Ext.getStore('AyohaNotificationLoadBySubscriberAccNoStore').getProxy().setExtraParams({
        //    SubscriberAccNo: GetCurrAyohaUserAccountNo()
        //});

        //  var myStore = Ext.getStore('MembershipCardLoadByEnterpriseAccNoStore');
        //  countMembershipCardLoadByEnterpriseAccNoStoreFirst = myStore.getCount();
        //console.log(countMembershipCardLoadByEnterpriseAccNoStoreFirst)


        //_DataStore_AyohaNotificationLoadBySubscriberAccNoStore= Ext.StoreMgr.get('AyohaNotificationLoadBySubscriberAccNoStore').load();

        //var myStore = Ext.getStore('AyohaNotificationLoadBySubscriberAccNoStore');
      //  _DataStore_AyohaNotificationLoadBySubscriberAccNoStore = Ext.getStore('AyohaNotificationLoadBySubscriberAccNoStore');

        countAyohaNotificationLoadBySubscriberAccNoFirst = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.getCount();
     
      
        Ext.getCmp('FloatPanel_AyohaNotification_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countAyohaNotificationLoadBySubscriberAccNoFirst + ')</b></font>');
        LoadingPanelHide();
     
       










    });
    task.delay(1000);




}

var countAyohaNotificationLoadBySubscriberAccNoFirst;
function AyohaNotificationLoadBySubscriberAccNoStoreOnKeyUp() {






    console.log('SearchEnterpriseOnKeyUp');
    var countcountAyohaNotificationLoadBySubscriberAccNoSequence = 0;


    _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.clearFilter();

    var queryString = document.getElementById('input-FloatPanel_AyohaNotification_SearchTxt').value;



    if (queryString) {
        console.log(queryString.length);

        var thisRegEx = new RegExp(queryString, "i");
        _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.filterBy(function (record) {
            if (thisRegEx.test(record.get('EnterpriseName'))) {
                console.log('ada0');

                countcountAyohaNotificationLoadBySubscriberAccNoSequence = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.getCount();
                Ext.getCmp('FloatPanel_AyohaNotification_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countcountAyohaNotificationLoadBySubscriberAccNoSequence + ')</b></font>');
                // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
                return true;

            };
            return false;
            console.log('tiada1');

            //  return false;
        });
        console.log('tiada3');
        countcountAyohaNotificationLoadBySubscriberAccNoSequence = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.getCount();
        Ext.getCmp('FloatPanel_AyohaNotification_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countcountAyohaNotificationLoadBySubscriberAccNoSequence + ')</b></font>');

        //  Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterprise + ')</b></font>');
    }


    else {
        console.log('tiada2');
        _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.clearFilter();
        Ext.getCmp('FloatPanel_AyohaNotification_CountSearchTxt').setHtml('<font size=3 color=black><b>(' + countAyohaNotificationLoadBySubscriberAccNoFirst + ')</b></font>');
        // Ext.getCmp('htmlSubscriberListTypeLbl').setHtml('<font size="2" color="black"><b>All Cards(' + countEnterpriseSubscribedLoadFirst + ')</b></font>')
        // Ext.getCmp('lblSearchEnterpriseList').setHtml('<font size="2" color="black"><b>Enterprise List (' + countEnterpriseLoanFirst + ')</b></font>');
        return false;
    }




}



function openNotificationPanel(ID,NotificationType,ReviewCode,EnterpriseAccNo,IsReadStatus) {
    LoadingPanelShow(getLoadingIcon(), 'Loading....');
    
   if(NotificationType=="ReviewAndRate"){  
    FloatPanel_AyohaNotification_AyohaStoreSaleItemloadByItemCode(EnterpriseAccNo,ReviewCode,ID,IsReadStatus);
   return;
}if(NotificationType=="AyohaStoreOrderStatus"){  
    FloatPanel_OrderHistoryShow_FromNotificationList(ID);
    return;
   }
   else{
    FloatPanel_AyohaNotification_NotificationShow(ID);
   }
    

   
  //  FloatPanel_AyohaNotificationHide();
}

var globalDashboard_TotalItemQuantityCart_fromAyohaNotification;
function FloatPanel_AyohaNotification_AyohaStoreSaleItemloadByItemCode(EnterpriseAccNo,ReviewCode,ID,IsReadStatus) {
    globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo=EnterpriseAccNo;
    var task = Ext.create('Ext.util.DelayedTask', function () {
        var objn = {

          
            "EnterpriseAccNo": EnterpriseAccNo,
            "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
            "ReviewCode":ReviewCode
        };
        var _value = Ext.Ajax.request({

            type: "POST",

            url: GetAPIurl() + '/AyohaStore_SaleItem/AyohaStoreSaleItemloadByItemCode',

            dataType: "json",
            data: JSON.stringify(objn),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },

            success: function (result, request) {
                data = Ext.decode(result.responseText.trim());

                if (data.success == "true") {
                   
                    globalFloatPanel_AyohaStore_ModuleTagging = "FloatPanel_AyohaNotification";
                    if (data.total > 0) {

                        FloatPanel_AyohaStore_SaleItemDetailShow(data.results[0].StampRuleAmount,data.results[0].ID,data.results[0].ItemCode,data.results[0].ItemCoverImg,data.results[0].ItemName,data.results[0].ItemPrice,data.results[0].MerchantPoint,data.results[0].AyohaPoint,data.results[0].CampaignType,data.results[0].MembershipCardCode,data.results[0].ProductCategoryName,data.results[0].ItemCategoryCode,data.results[0].MembershipCardName,data.results[0].ItemCoverImgName,data.results[0].Stock,data.results[0].ShowStock,data.results[0].StockAlert,data.results[0].ItemDescriptions,data.results[0].ItemPriceDiscount,data.results[0].ItemPriceDiscountRate);
                        globalEnterpriseAccNo_AyohaMerchantReview=data.results[0].EnterpriseAccNo;
                        //Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent').setActiveItem(1);
                      // globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode=data.results[0].MembershipCardCode;
                     


                        var task = Ext.create('Ext.util.DelayedTask', function () {

                            //htmlFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadgeText
                            //globalDashboard_TotalItemQuantityCart
                           // alert(globalDashboard_TotalItemQuantityCart)
                            Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_MyCartCountbadge').setHidden(true);
                           Ext.getCmp('containerFloatPanel_AyohaStore_SaleItemDetail_bottomInfo').setHidden(true);
                            var crsl = Ext.getCmp('FloatPanel_AyohaStore_SaleItemDetail_CarouselMasterContent');
                            crsl.next();
    
                    
                            var task = Ext.create('Ext.util.DelayedTask', function () {
                                Ext.getCmp('btnFloatPanel_AyohaStore_SaleItemDetailBack').setZIndex(50);
                                
                                FloatPanel_AyohaStore_SaleItem_AyohaStoreSaleItemDetail_CarouselReviewAndRate();
                                
                        
                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                    if(IsReadStatus=='N'){
                                        FloatPanel_AyohaNotification_Notification_UpdateIsRead(ID);
                                    }
                               
                            });
                            task.delay(1000);
                        
                        
                            });
                            task.delay(1200);
                    
                    
                        });
                        task.delay(500);




                       




                        Ext.Viewport.setMasked(false);

                    }
                    if (data.total <= 0) {
                        LoadingPanelHide();
                        swalFireLoginFailed("Failed!" + result.responseText.trim());
                    }


                }
                else {
                    LoadingPanelHide();
                    swalFireLoginFailed("Failed!" + result.responseText.trim());
                    Ext.Viewport.unmask();
                }


            },

            failure: function (result, request) {
                Ext.Viewport.unmask();
                LoadingPanelHide();
                swalFireLoginFailed("Failed!" + result.responseText.trim());

            }

        });
    });

    task.delay(500);
}

function FloatPanel_AyohaNotification_DeleteNotification(ID) {










    Swal.fire({
        title: 'Are you sure want to delete?',
        //  text: "Delete this card will effect your customer card. They no longer accessible to this card. Think Carefully before proccedd with delete!",
        //icon: 'warning',
        //showCancelButton: true,
        //confirmButtonColor: '#3085d6',
        //cancelButtonColor: '#d33',
        imageUrl: "resources/icons/attention1.png",
        imageWidth: 150,
        imageHeight: 150,
        showCloseButton: true,
        showCancelButton: false,
        //  confirmButtonColor: '#3085d6',
        confirmButtonColor: '#9932cc',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then(function (result) {
        if (result.isConfirmed) {
            var objn = {
                "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                "ID": ID,
                "UserRowStatus": "InActive"

            };
           
            var _value = Ext.Ajax.request({
                type: "POST",
                url: GetAPIurl() + '/AyohaNotification/AyohaNotificationUserRowStatusUpdate',
                dataType: "json",
                data: JSON.stringify(objn),
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },

                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        if (FloatPanel_AyohaNotification_NotificationIsOpen == "Y") {
                            FloatPanel_AyohaNotification_NotificationHide();
                        }
                        swalFireSuccess("Delete Successfully!");
                        FloatPanel_AyohaNotificationLoadBySubscriberAccNoStore();

                       
                    }
                    else {
                        swalFireFail("Delete Failed!" + result.responseText.trim());
                    }

                    Ext.Viewport.unmask();

                },

                failure: function (result, request) {

                    Ext.Viewport.unmask();
                    swalFireFail("Delete Failed!" + result.responseText.trim());
                }

            });
        }
    });

   
}



function FloatPanel_AyohaNotificationAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 40;
    // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;

    Ext.getCmp('FloatPanel_AyohaNotificationID').setHeight(x + 40);
    Ext.getCmp('FloatPanel_AyohaNotificationListID').setHeight(newHeights);
    

}



