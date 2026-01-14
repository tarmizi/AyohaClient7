Ext.define('BuskartApp.view.AyohaNotification.FloatPanel_AyohaNotification_Notification', {
});

var FloatPanel_AyohaNotification_NotificationIsOpen="N";

var _FloatPanel_AyohaNotification_Notification;

function FloatPanel_AyohaNotification_Notification() {
    _FloatPanel_AyohaNotification_Notification =
      Ext.create('Ext.Panel', {

          xtype: 'container',
          height: '100%',
          width: '100%',
          id: 'FloatPanel_AyohaNotification_NotificationID',
          draggable: false,



          centered: true,
          // bottom: 14,
          zIndex: 60,
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
          //    style: 'border-bottom:1px solid;background-color:#D25959;',
          style: ' background-color:white;',


          listeners: {
              initialize: function (c) {
                  this.element.on({
                      swipe: function (e, node, options) {
                          //if (e.direction == "up") {
                          //    LoyaltyCardRedeemListHide();
                          //}
                          if (e.direction == "left") {
                              _FloatPanel_AyohaNotification_Notification.hide(Ext.fx.Animation({
                                  type: 'slideOut',
                                  direction: 'left',
                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                  duration: 250

                              }));
                              RemovePages("FloatPanel_AyohaNotification_NotificationHide()");
                              FloatPanel_AyohaNotification_NotificationIsOpen = 'N';
                          } if (e.direction == "right") {
                              _FloatPanel_AyohaNotification_Notification.hide(Ext.fx.Animation({
                                  type: 'slideOut',
                                  direction: 'right',
                                  easing: 'cubic-bezier(.7,0,.7,1)',
                                  duration: 250

                              }));
                              FloatPanel_AyohaNotification_NotificationIsOpen = 'N';
                              RemovePages("FloatPanel_AyohaNotification_NotificationHide()");
                          }
                         
                      }
                  });
              }
          },

          items: {






          //    xtype: 'container',
          //   /// style: 'background-color:white;',
          //    style: 'background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
          //  //  style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
          //    height: '100%',
          //    width: '100%',
          //    layout: {
          //        type: 'vbox',
          //        //  pack: 'center',
          //        //  align: 'end'
          //    },

      
          xtype: 'container',
          width: '100%',
          height: '100%',
          style: "background-color: transparent;",
        //  style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
          // style: 'background-image: url("resources/icons/pointbackdrop.png"); background-size: 100% 30%;background-repeat: no-repeat;',
          layout: {
              type: 'fit',

          },
          items: [

              {

                  xtype: 'container',
                  width: '100%',
                  docked: 'top',
                  // width: 40,

                  //  title: '<font size="3" color="white">Live Tracking Map</font>',
                  //hidden: true,

                  id: 'containerFloatPanel_AyohaNotification_NotificationHeader',
                  //style: {
                  //    // background: '#D25959',
                  //    background: 'transparent',
                  //    // border: '2px'
                  //},
                  //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                  style: 'border-bottom:1px solid grey;background-color:transparent;',
                 // style: ' background-color: #fac;background-image: linear-gradient(#c800ffc9,#ff00de75);',
                  // style: ' background-color: #fac;background-image: linear-gradient(#ff00de75, #c800ffc9);',
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
                                           id: 'btnFloatPanel_AyohaNotification_NotificationBack',
                                           margin:'0 0 0 10',
                                           height: 30,
                                           width: 35,
                                           // iconCls: 'list',
                                           html: '<div ><img src="resources/icons/backPurple.png" width="25" height="20" alt="Company Name"></div>',
                                           ui: 'plain',
                                           handler: function () {

                                               FloatPanel_AyohaNotification_NotificationIsOpen = 'N';
                                               _FloatPanel_AyohaNotification_Notification.hide(Ext.fx.Animation({
                                                   type: 'slideOut',
                                                   direction: 'left',
                                                   easing: 'cubic-bezier(.7,0,.7,1)',
                                                   duration: 250

                                               }));
                                               RemovePages("FloatPanel_AyohaNotification_NotificationHide()");
                                               //  FloatPanel_AyohaNotification_AddCardHide();

                                           }
                                       },

                                        {
                                            xtype: 'spacer',

                                        },


                                        {
                                            margin: '0 10 0 0',
                                            id: 'htmlFloatPanel_AyohaNotification_Notification_TitleHeaderTxt',
                                            html: '<font size=2 color=black><b>Notifications</b></font>'
                                        },


                                              {
                                                  xtype: 'button',
                                                  id: 'btnFloatPanel_AyohaNotification_Notification_CardIcon',
                                                  height: 30,
                                                  width: 35,
                                                  hidden:true,
                                                  // iconCls: 'list',
                                                  html: '<div ><img src="resources/icons/Notification.png" width="25" height="20" alt="Company Name"></div>',
                                                  ui: 'plain',
                                                  handler: function () {

                                                      FloatPanel_AyohaNotification_NotificationIsOpen = 'N';

                                                      _FloatPanel_AyohaNotification_Notification.hide(Ext.fx.Animation({
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
                    width: '100%',

                    layout: {
                        type: 'vbox',
                        pack: 'start',
                        align: 'center'

                    },
               
                   
                        items: [
               
                            {
                                xtype: 'container',
                                width: '100%',
                                height:15
                            },
               {

                   xtype: 'container',
                   id: 'containerFloatPanel_AyohaNotification_Notification_Content',
                   style: 'border-bottom:1px none;background-color:white;',
                   layout: {
                       type: 'vbox',



                   },
                   scrollable: {
                       direction: 'vertical',
                       directionLock: true,
                       indicators: false
                   },
                   // height: '100%',
                   width: '100%',
                   items: [




                    {
                        //  html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:#F7FDFA;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px solid black;overflow:hidden;word-break:normal;text-align:right;background-color:#37474f;color:white" colspan="2">Published On:' + GetNotificationDate() + '<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px solid white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:#37474f;color:white" colspan="2"><br><img src="' + GetNotificationLogo64() + '" style="width: 122px; height: 122px; border:2px none #A2CDF5; border-radius: 50%; max-width:200px; " /><br><b>' + GetSentFrom() + '</b><br>' + GetEnterpriseAddress() + '<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:' + GetNotificationTitle() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>' + GetNotification() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="' + GetAdvertisementImage() + '"style="width: 100%; height: 400px;  max-height:400px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px solid black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href=' + GetEnterpriseWebsite() + '}><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:' + GetEnterpriseEmail() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:' + GetEnterprisePhoneNo() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Cloud-Receipts.Com</font></td></tr></table>',
                        id: 'htmlFloatPanel_AyohaNotification_Notification_Content',
                        html: '<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:right;background-color:white;color:#616161" colspan="2">Published On:' + GetNotificationDate() + '<br></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-bottom: 2px none white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:white;color:#616161" colspan="2"><br><img src="' + GetNotificationLogo64() + '" style="width: 122px; height: 122px; border:2px none #A2CDF5;  max-width:200px; " /><br><b>' + GetSentFrom() + '</b><br>' + GetEnterpriseAddress() + '<br><font color="#616161" size="2px">________________________________________________</font></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>TITLE:' + GetNotificationTitle() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>' + GetNotification() + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="' + GetAdvertisementImage() + '"style="width: 100%; height: 172px;  max-height:200px; " /><br><br><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"><button  style="display:inline-block;color:blue;background-color: Transparent;border: none;outline:none;" ><a href=' + GetEnterpriseWebsite() + '><img src="resources/icons/websiteblackedit.png" style="width: 36px; height: 36px;" /></a></button>&nbsp;&nbsp;<button   style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/emailblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="mailto:' + GetEnterpriseEmail() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/callblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:' + GetEnterprisePhoneNo() + '"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/fbblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/twiterblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;"><img src="resources/icons/instablackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"><a href="tel:{EnterprisePhoneNo}"></a></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you turned on for product and promotion update.To unscribed this nofication go to enterprise info and turn off the notification feature</i> </font><br><br><font  color="#616161" size="1px">Powered By:Ayoha Reward.Com</font></td></tr></table>',


                    },
                         

                   ]

               },


             {

                 xtype: 'container',
                 width: '100%',
                 // width: 40,
                // docked: 'bottom',
                 height: 10,
                 //  title: '<font size="3" color="white">Live Tracking Map</font>',
                 //hidden: true,

                 id: 'containerFloatPanel_AyohaNotification_Notification_Bottom',

                 //  style: 'border-right:2px none #ECF0F1;border-left:2px none #ECF0F1;border-bottom:2px none #ECF0F1;border-top:2px none #ECF0F1 ;background: red;',
                 style: 'background-color:white',
                 layout: {
                     type: 'hbox',
                     pack: 'center',
                     align: 'center',
                 },




                 // hidden:true,
                 items:
                        [


                          {
                              width: '100%',
                              margin: '5 0 0 0',
                              html: '<font size="2" color="black"><b><u>Record Found:</u></b></font>',
                              //    html: '<div style="width:100%;background-color: transparent;text-align:center;border-bottom: 1px none black;font-size: 14px;font-weight:normal;color:black;height:20px">Record Found:</b></div>',
                          },



                        ]

             },


                        ]
                  

                
                }

                ]
          },


           




          //}







      });
    return _FloatPanel_AyohaNotification_Notification;
}



function FloatPanel_AyohaNotification_NotificationHide() {

    if (FloatPanel_AyohaNotification_NotificationIsOpen == "Y") {
        _FloatPanel_AyohaNotification_Notification.hide();
        FloatPanel_AyohaNotification_NotificationIsOpen = 'N';
        RemovePages("FloatPanel_AyohaNotification_NotificationHide()");
    }
   
}






function FloatPanel_AyohaNotification_NotificationAdjustHeight() {
    var y = parseInt(screen.height);
    var x = parseInt(window.innerHeight);


    var newHeights = x - 40;
   // globalFloatPanel_AyohaNotificationManagement_ViewMessageAdjustHeight = newHeights;
    
    Ext.getCmp('containerFloatPanel_AyohaNotification_Notification_Content').setHeight(newHeights);

}


var EnterpriseFacebooks;
var EnterpriseWebsites;
var EnterpriseCoordinates;
var globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo;
var globalFloatPanel_AyohaNotification_Notification_EnterpriseName;
var globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo;
var globalFloatPanel_AyohaNotification_Notification_EnterpriseTagLine;


var globalFloatPanel_AyohaNotification_Notification_WhatsApp;
var globalFloatPanel_AyohaNotification_Notification_Location;
var globalFloatPanel_AyohaNotification_Notification_FB;
var globalFloatPanel_AyohaNotification_Notification_Insta;

var globalFloatPanel_AyohaNotification_Notification_AdvertisementCode;
function FloatPanel_AyohaNotification_NotificationShow(val) {
    
    Ext.Viewport.remove(_FloatPanel_AyohaNotification_Notification);
    this.overlay = Ext.Viewport.add(FloatPanel_AyohaNotification_Notification()); // _GeofenceInfoPanel place in Geofence_fencingstatusAlert class.                         
    // }
    this.overlay.show();
  
    AddRoutePages("FloatPanel_AyohaNotification_NotificationHide()");
    FloatPanel_AyohaNotification_NotificationIsOpen = 'Y';
   
    FloatPanel_AyohaNotification_NotificationAdjustHeight();

  

    var SentDate = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var NotificationTitle = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var NotificationBody = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var NotifcationImage = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var NotificationFooterImage = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var NotificationType = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseName = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseLogoPath = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAddress = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var IsRead = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);




    var EnterprisePhoneNo = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseWebsite = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseFacebook = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseTwiter = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseInstagram = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseCoordinate = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseAccNo = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var EnterpriseTagLine = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);
    var AdvertisementCode = _DataStore_AyohaNotificationLoadBySubscriberAccNoStore.findRecord('ID', val, 0, false, false, true);


    var SentDates = SentDate.get('SentDate');
    var NotificationTitles = NotificationTitle.get('NotificationTitle');
    var NotificationBodys = NotificationBody.get('NotificationBody');
    var NotifcationImages = NotifcationImage.get('NotifcationImage');
    var NotificationFooterImages = NotificationFooterImage.get('NotificationFooterImage');
    var NotificationTypes = NotificationType.get('NotificationType');
    var EnterpriseNames = EnterpriseName.get('EnterpriseName');
    var EnterpriseLogoPaths = EnterpriseLogoPath.get('EnterpriseLogoPath');
    var EnterpriseAddresss = EnterpriseAddress.get('EnterpriseAddress');
    var ModifiedNotificationBody = NotificationBodys.replace(/\n/g, "<br>");
    var IsReads = IsRead.get('IsRead');
    var EnterprisePhoneNos = EnterprisePhoneNo.get('EnterprisePhoneNo');
    EnterpriseWebsites = EnterpriseWebsite.get('EnterpriseWebsite');
    EnterpriseFacebooks = EnterpriseFacebook.get('EnterpriseFacebook');
    var EnterpriseTwiters = EnterpriseTwiter.get('EnterpriseTwiter');
    var EnterpriseInstagrams = EnterpriseInstagram.get('EnterpriseInstagram');
    EnterpriseCoordinates = EnterpriseCoordinate.get('EnterpriseCoordinate');
    var EnterpriseAccNos = EnterpriseAccNo.get('EnterpriseAccNo');


    globalFloatPanel_AyohaNotification_Notification_EnterpriseLogo = EnterpriseLogoPaths;
    globalFloatPanel_AyohaNotification_Notification_EnterpriseName = EnterpriseNames;
    globalFloatPanel_AyohaNotification_Notification_EnterpriseAccNo = EnterpriseAccNos;
    globalFloatPanel_AyohaNotification_Notification_EnterpriseTagLine = EnterpriseTagLine.get('EnterpriseTagLine');

    globalFloatPanel_AyohaNotification_Notification_WhatsApp = EnterprisePhoneNo.get('EnterprisePhoneNo');
    globalFloatPanel_AyohaNotification_Notification_Location = EnterpriseCoordinate.get('EnterpriseCoordinate');
    globalFloatPanel_AyohaNotification_Notification_FB = EnterpriseFacebook.get('EnterpriseFacebook');
    globalFloatPanel_AyohaNotification_Notification_Insta = EnterpriseInstagram.get('EnterpriseInstagram');
    globalFloatPanel_AyohaNotification_Notification_AdvertisementCode = AdvertisementCode.get('AdvertisementCode');
    
    if (NotificationTypes == "Text") {
       Ext.getCmp('htmlFloatPanel_AyohaNotification_Notification_Content').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:center;background-color:white;color:#616161" colspan="2">Notification Date:' + SentDates + '<br><div style="width:100%;text-align:right;margin:0px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotification_DeleteNotification(' + val + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom: 2px none white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:white;color:#616161" colspan="2"><br><img src="' + EnterpriseLogoPaths + '" style="width: 130px; height: 122px; border:2px none #A2CDF5;  max-width:200px; " /><br><b>' + EnterpriseNames + '</b><br><div style="font-family:Arial, sans-serif;font-size:12px;color:#616161;width:100%;background-color:white;">' + EnterpriseAddresss + '</div><br><div style="margin:-20px 0px 0px;width:100%"><font color="#616161" size="2px">________________________________________________</font></div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>' + NotificationTitles + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br>' + ModifiedNotificationBody + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><img src="' + NotificationFooterImages + '"style="width: 100%; height: 172px;  max-height:200px; " /><br><br><b>Visit Us:</b><br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"><button id="btnNotification_Notification_WhatsApp" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_CallEnterprise(' + EnterprisePhoneNos + ');"><img src="resources/icons/WhatsApp01.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_Location" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenLocation();"><img src="resources/icons/gpslocation.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_Insta" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenInsta();"><img src="resources/icons/instagram.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_FB" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenFB();"><img src="resources/icons/facebook.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_AyohaStore" class="blink_me" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaStoreShow_FromPushNotification();"><img src="https://setkita.com/AyohaImgCard/eStoreLogo/AyohaStoreLogoWithBorder.png" style="float:right;margin-right:0.5em;width: 46px; height: 46px;"><div class="blink_me" style="margin:0px 0px 0px 0px;font-size:10px;color:black;">Ayoha Store</div></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you accept term and condition on  product and promotion update.If you feel the nofication inappriorate you may report to us via</i> <a href="mailto:Admin@Ayoha-Reward.com?subject=InAppriroate Push Notification (Notification Code:' + val + ') &body=Hi,I would like to report this Push Notification.TQ"><b>Admin@Ayoha-Reward.com</b></a> </font><br><br><font  color="#616161" size="1px">Powered By:AyohaReward.Com</font></td></tr></table>');
       
    }
    if (NotificationTypes == "Image") {
       Ext.getCmp('htmlFloatPanel_AyohaNotification_Notification_Content').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:center;background-color:white;color:#616161" colspan="2">Notification Date:' + SentDates + '<br><div style="width:100%;text-align:right;margin:0px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotification_DeleteNotification(' + val + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br><img src="' + NotifcationImages + '"style="width: 100%; height: 1050px;  max-height:2050px; " /><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><br>Contact Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"><button style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_CallEnterprise(' + EnterprisePhoneNos + ');"><img src="resources/icons/calling.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenLocation();"><img src="resources/icons/gpslocation.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenFB();"><img src="resources/icons/facebook.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you accept term and condition on  product and promotion update.If you feel the nofication inappriorate you may report to us via</i> <a href="mailto:Admin@BuskartApp.com?subject=InAppriroate Push Notification (Notification Code:' + val + ') &body=Hi,I would like to report this Push Notification.TQ"><b>Admin@BuskartApp.com</b></a></font><br><br><font  color="#616161" size="1px">Powered By:AyohaReward.Com</font></td></tr></table>');

        if (EnterpriseAccNos == "50528-0133376958-NoEnterprise") {
           Ext.getCmp('htmlFloatPanel_AyohaNotification_Notification_Content').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:center;background-color:white;color:#616161" colspan="2">Notification Date:' + SentDates + '<br><div style="width:100%;text-align:right;margin:0px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotification_DeleteNotification(' + val + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>' + NotificationTitles + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br><img src="' + NotifcationImages + '"style="width: 100%; height: 1050px;  max-height:2550px; " /><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><br>Contact/Visit Us:<br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"><button style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenWebSite();"><img src="resources/icons/websiteblackedit.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenLocation();"><img src="resources/icons/gpslocation.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"></button><button style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenFB();"><img src="resources/icons/facebook.png" style="float:left;margin-right:0.5em;width: 36px; height: 36px;"></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you accept term and condition on  product and promotion update.If you feel the nofication inappriorate you may report to us via</i> <a href="mailto:Admin@Ayoha-Reward.com?subject=InAppriroate Push Notification (Notification Code:' + val + ') &body=Hi,I would like to report this Push Notification.TQ"><b>Admin@BuskartApp.com</b></a></font><br><br><font  color="#616161" size="1px">Powered By:AyohaReward.Com</font></td></tr></table>');

        } else {
           Ext.getCmp('htmlFloatPanel_AyohaNotification_Notification_Content').setHtml('<table style="border-collapse:collapse;border-spacing:0;width:100%;background-color:white;border-style:none;border-width:0px;"><tr><th style="font-family:Arial, sans-serif;font-size:12px;font-weight:normal;padding:0px 5px;border-top: 1px none black;overflow:hidden;word-break:normal;text-align:center;background-color:white;color:#616161" colspan="2">Notification Date:' + SentDates + '<br><div style="width:100%;text-align:right;margin:0px 0px 0px 0px;"><button OnClick="FloatPanel_AyohaNotification_DeleteNotification(' + val + ')" class="buttonsHtmlBgTransparent"><img src="resources/icons/DeletePurple.png" style="width: 23px; height: 23px; margin:0px 0px 0px 10px;" /></button></div></th></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-bottom: 2px none white;overflow:hidden;word-break:normal;text-align:center;vertical-align:top;background-color:white;color:#616161" colspan="2"><br><img src="' + EnterpriseLogoPaths + '" style="width: 130px; height: 122px; border:2px none #A2CDF5;  max-width:200px; " /><br><b>' + EnterpriseNames + '</b><br><div style="font-family:Arial, sans-serif;font-size:12px;color:#616161;width:100%;background-color:white;">' + EnterpriseAddresss + '</div><br><div style="margin:-20px 0px 0px;width:100%"><font color="#616161" size="2px">________________________________________________</font></div></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;font-weight:bold;text-decoration:underline;vertical-align:top;text-align:center" colspan="2"><br>' + NotificationTitles + '<br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:12px;padding:0px 5px;border-style:none;border-width:0px;overflow:hidden;word-break:normal" colspan="2"><br><img src="' + NotifcationImages + '"style="width: 100%; height: 650px;  max-height:650px; " /><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 5px;border-style:none;border-width:1px;overflow:hidden;word-break:normal;text-align:center;vertical-align:top" colspan="2"><br><b>Visit Us:</b><br><br></td></tr><tr><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"></td><td style="font-family:Arial, sans-serif;font-size:14px;padding:0px 1px;border-bottom: 1px none black;overflow:hidden;word-break:normal;text-align:center"><button id="btnNotification_Notification_WhatsApp" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_CallEnterprise(' + EnterprisePhoneNos + ');"><img src="resources/icons/WhatsApp01.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_Location" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenLocation();"><img src="resources/icons/gpslocation.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_Insta" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenInsta();"><img src="resources/icons/instagram.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_FB" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaNotification_Notification_OpenFB();"><img src="resources/icons/facebook.png" style="float:left;margin-top:-50px;width: 30px; height: 30px;"></button><button id="btnNotification_Notification_AyohaStore" class="blink_me" style="display:inline-block;background-color: Transparent;border: none;outline:none;" onClick="FloatPanel_AyohaStoreShow_FromPushNotification();"><img src="http://setkita.com/AyohaImgCard/eStoreLogo/AyohaStoreLogoWithBorder.png" style="float:right;margin-right:0.5em;width: 46px; height: 46px;"><div class="blink_me" style="margin:0px 0px 0px 0px;font-size:10px;color:black;">Ayoha Store</div></button><br><font  color="#616161" size="1px">_______________________________________</font><br><br><font  color="#616161" size="1px"><i>You are receiving this notification because you accept term and condition on  product and promotion update.If you feel the nofication inappriorate you may report to us via</i> <a href="mailto:Admin@Ayoha-Reward.com?subject=InAppriroate Push Notification (Notification Code:' + val + ') &body=Hi,I would like to report this Push Notification.TQ"><b>Admin@Ayoha-Reward.com</b></a> </font><br><br><font  color="#616161" size="1px">Powered By:AyohaReward.Com</font></td></tr></table>');

            
        }

       
       
    }

   

 
    if (IsReads == "N") {
        FloatPanel_AyohaNotification_Notification_UpdateIsRead(val);
    }
    if (!EnterprisePhoneNos) {
        document.getElementById("btnNotification_Notification_WhatsApp").style.display = "none";
    }
    if (!EnterpriseFacebooks) {
        document.getElementById("btnNotification_Notification_FB").style.display = "none";
    }
    if (!EnterpriseInstagrams) {
        document.getElementById("btnNotification_Notification_Insta").style.display = "none";
    }
    if (!EnterpriseCoordinates) {
        document.getElementById("btnNotification_Notification_Location").style.display = "none";
    }
 
    LoadingPanelHide();
}



function FloatPanel_AyohaNotification_Notification_CallEnterprise(PhoneNo) {
  
   

    if (PhoneNo) {
       
        window.open("https://api.whatsapp.com/send?phone=" + PhoneNo + "&text=Hi", '_system'); return false;
            // window.open("https://api.whatsapp.com/send?phone=" + globalFloatPanel_PreviewAdvertisement_WhatsAppLink + "&text=https://BuskartApp.com/ayohaimg/" + ModifiedMediaFileName);
        

    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Phone No.,Help Merchant to know this Message!", "Phone No")
    }


}

function FloatPanel_AyohaNotification_Notification_OpenWebSite() {



    if (EnterpriseWebsites) {
      
        setTimeout(function () { window.open(EnterpriseWebsites, '_system'); return false; }, 25);

    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set WebSite URL.,Help Merchant to know this Message!", "Website")
    }


}

function FloatPanel_AyohaNotification_Notification_OpenFB() {
   

    if (EnterpriseFacebooks) {
        setTimeout(function () { window.open("fb://page/" + EnterpriseFacebooks + "", '_system'); return false; }, 25);

    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "FB")
    }

    
}



function FloatPanel_AyohaNotification_Notification_OpenInsta() {


    if (EnterpriseInstagrams) {
        setTimeout(function () { window.open("instagram://user?username=" + EnterpriseInstagrams + "", '_system'); return false; }, 25);

    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set FB Link.,Help Merchant to know this Message!", "Insta")
    }


}

function FloatPanel_AyohaNotification_Notification_OpenLocation() {

    var Coordinate = EnterpriseCoordinates.split(",");
    PlaceMarkerlat = Coordinate[0];
    PlaceMarkerlng = Coordinate[1];

    if (PlaceMarkerlat) {
        window.open("https://www.google.com/maps/search/?api=1&query=" + PlaceMarkerlat + "," + PlaceMarkerlng, '_system'); return false;

    } else {

        swalFireInfoMerchantButtonLink("Merchant Might be Not Set Coordinate.,Help Merchant to know this Message!", "Location")
    }
   
}

function FloatPanel_AyohaNotification_Notification_UpdateIsRead(ID) {
    var objn = {
        "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
        "ID":ID,
        "IsRead": "Y"
    };
    console.log(objn);
    var _value = Ext.Ajax.request({
        type: "POST",
        url: GetAPIurl() + '/AyohaNotification/AyohaNotificationIsReadUpdate',
        dataType: "json",
        data: JSON.stringify(objn),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },

        success: function (result, request) {

            //console.log(result.responseText);


            data = Ext.decode(result.responseText.trim());

            if (data.success == "true") {
                globalPNUnread = globalPNUnread - 1;
                StagingSetBadgeText();
                FloatPanel_AyohaNotificationLoadBySubscriberAccNoStore();
              

            }
            else {
                swalFireFail("Update Failed!" + result.responseText.trim());
            }

            // Ext.Viewport.unmask();

        },

        failure: function (result, request) {

            //Ext.Viewport.unmask();
            swalFireFail("Update Failed!" + result.responseText.trim());
        }

    });
}




function StagingSetBadgeText() {

    if (globalPNUnread != "0") {
        Ext.getCmp('btnMyAccount_DashboardPicProfile').setBadgeText(globalPNUnread);
       // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setBadgeText(globalPNUnread);
        Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/NotificationPurple.png" width="20" height="20" alt="Company Name"><div style="margin:-30px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
        Ext.getCmp('btnFloatPanel_AyohaNotification_CardIcon').setBadgeText(globalPNUnread);
    } else {
        Ext.getCmp('btnMyAccount_DashboardPicProfile').setBadgeText(globalPNUnread);
       // Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setBadgeText(globalPNUnread);
        Ext.getCmp('btn_MyAccount_Dashboard_MenuBottom_Notification').setHtml('<img src="resources/icons/NotificationPurple.png" width="20" height="20" alt="Company Name"><div style="margin:-30px 0px 0px 10px;text-align:center;font-size:12px;color:white;background-color:red;width:20px;height:20px;border-radius:50%;zIndex:100px;">' + globalPNUnread + '</div>');
        Ext.getCmp('btnFloatPanel_AyohaNotification_CardIcon').setBadgeText(globalPNUnread);
    }
}