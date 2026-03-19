Ext.define('BuskartApp.view.AyohaNotification.DeleteMessageOverlay_Notification', {
   
  });
  
  var _DeleteMessageOverlay_NotificationisOpen = 'N';
  var _DeleteMessageOverlay_Notification = null;
  
  
  /****************************************************
   * CREATE (sekali je)
   ****************************************************/
  function DeleteMessageOverlay_NotificationCreateIfNeeded(ID) {
  
    if (_DeleteMessageOverlay_Notification && !_DeleteMessageOverlay_Notification.destroyed) return;
  
    _DeleteMessageOverlay_Notification = Ext.create('Ext.Container', {
      xtype: 'container',
      id: 'DeleteMessageOverlay_NotificationID',
      height: '100%',
      width: '100%',
      centered: true,
  
      floated: true,
      fullscreen: true,
      modal: true,
      hideOnMaskTap: true,
      zIndex: 999,
  
      //cls: 'ayohaCheckinModal',
      style: 'background: rgba(20,10,30,.45); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);',
  
      showAnimation: { type: 'popIn', duration: 150, easing: 'ease-out' },
      hideAnimation: { type: 'popOut', duration: 250, easing: 'ease-out' },
  
      
  
      listeners: {
      
  
        // ✅ kalau user tap mask, close macam standard
        beforehide: function () {
          // kalau hide dipanggil bukan dari function kita, block dulu
          // (optional: boleh allow kalau kau nak)
          return true;
        }
      },
  
      items: [


{
 xtype: 'container',
                                    width: '100%',                                  
                                    height: '100%',                                      
                                    style: 'background-color:transparent',
                                    layout: {
                                        type: 'vbox',
                                        pack: 'center',
                                        align: 'center'

                                    },
                                    items:[

 
         {
      xtype: 'container',
     cls: 'ayohaDlgWrap',
               width: '80%',
               margin: '0 0 0 0',
               height: 200,
               style: 'background-color:white;border-radius: 8px; box-shadow: 0 18px 55px rgba(0,0,0,.28);',
               layout: {
                   type: 'vbox',
                   pack: 'center',
                   align: 'center'

               },
      items: [
        {
          xtype: 'container',
          cls: 'ayohaDlgHeader',
          docked: 'top',
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
                  '<img class="ayohaDlgHeaderIconImg" src="resources/icons/DeletePurple.png" />' +
                '</div>'
            },
            {
              xtype: 'component',
              cls: 'ayohaDlgHeaderTitle',
              html: 'Delete Notification',
              flex: 1
            }
          ]
        },

       
        {
          xtype: 'component',
          cls: 'ayohaDlgBody',
            height: 70,
          html:
            '<div class="ayohaDlgMsg">' +
              '<div class="ayohaDlgLine">Are you sure want to delete?</div>' +
            //  '<div class="ayohaDlgLine">You will no longer be able to access this card.</div>' +
          //    '<div class="ayohaDlgHint">Please think carefully before proceeding.</div>' +
            '</div>'
        },

        {
 xtype: 'container',
         
          layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'   // kalau nak center; tukar 'start' kalau nak kiri
          },
          items: [
{
  xtype:'spacer',
  width: 5
},
{xtype: 'button',
      text: ' NO ',
      cls: 'ayohaDlgBtn ayohaDlgBtnCancel',
      handler: function () { 
      DeleteMessageOverlay_NotificationHide(false);
    }
    },
    {
  xtype:'spacer',
   width: 40
},
    {
      xtype: 'button',
      text: 'YES, DELETE',
      cls: 'ayohaDlgBtn ayohaDlgBtnDanger',
      handler: function () {
    DeleteMessageOverlay_NotificationHide(false);


  LoadingPanelShow("resources/icons/delete01.gif", "Deleting..")

 var objn = {
                "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
                "ID": ID,
                "UserRowStatus": "InActive"

            };
           
        Ext.Ajax.request({
                // type: "POST",
                // url: GetAPIurl() + '/AyohaNotification/AyohaNotificationUserRowStatusUpdate',
                // dataType: "json",
                // data: JSON.stringify(objn),
                // headers: {
                //     "Content-Type": "application/json; charset=utf-8"
                // },


       url: GetAPIurl() + '/AyohaNotification/AyohaNotificationUserRowStatusUpdate',
  method: 'POST',
  jsonData: objn,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
                success: function (result, request) {

                    //console.log(result.responseText);


                    data = Ext.decode(result.responseText.trim());

                    if (data.success == "true") {
                        if (FloatPanel_AyohaNotification_NotificationIsOpen == "Y") {
                            FloatPanel_AyohaNotification_NotificationHide(false);
                        }
                      //  swalFireSuccess("Delete Successfully!");
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
    },
{
  xtype:'spacer',
  width: 5
},
          ]

        },
        {
          xtype: 'container',
           docked: 'bottom',
             width: '100%',
              style: 'background-color:transparent',
               margin: '0 0 0 0',
               height: 2,
        }
      ],
       
    }


                                      
                                    ]
},



       
        
        
//         {
//         xtype: 'container',
//         cls: 'ayohaCheckinCardWrap',
//         layout: { type: 'vbox', pack: 'center', align: 'center' },
//         padding: 18,
//         style: 'background:transparent;',
//         items: [
            
            
            
//             {
//           xtype: 'container',
//           cls: 'ayohaCheckinShell',
//           items: [
          
  
//             {
//               xtype: 'container',
//               cls: 'ayohaCheckinCard',
//               layout: { type: 'vbox', pack: 'start', align: 'stretch' },
//               items: [
//                 // { xtype: 'component', cls: 'ayohaCheckinHeader', html: 'Ayoha Reward Membership' },
//                 // { xtype: 'component', cls: 'ayohaCheckinTitle',  html: 'Check-In Point Loyalty' },
//                 // { xtype: 'component', cls: 'ayohaCheckinDivider', html: '' },
  
//                 {
//                   xtype: 'container',
//                   cls: 'ayohaCheckinStamp',
//                   items: [{
//                     xtype: 'component',
//                     cls: 'ayohaCheckinStampImg',
//                     itemId: 'cmpCheckInLogo',
//                     html: '<img src="resources/icons/wired-gradient-1140-error.gif" />'
//                   }]
//                 },
  
//                 { xtype: 'component', cls: 'ayohaCheckinMerchant', itemId: 'cmpCheckInMerchant', html: 'Error' },
             
//                 { xtype: 'component', cls: 'messageOverlayText',  itemId: 'cmpCheckInTagline',  html: Msg },
//      { xtype: 'component', cls: 'ayohaCheckinDivider', html: '' },  
//                 // {
//                 //   xtype: 'component',
//                 //   cls: 'ayohaCheckinInfo',
//                 //   itemId: 'cmpCheckInInfo',
//                 //   html: ''
//                 // },
  

//                 { 
                    
//                    xtype: 'container',
//                    width: '100%',
//                    height: 64,
//                      layout: {
//                                                 type: 'vbox',
//                                                 pack: 'start',
//                                                 align: 'center'
    
//                                             },
//                                             items:[
// {
//                   xtype: 'component',
//                   cls: 'messageOverlayBtn',
//                   html: 'OK',
//                   listeners: {
//                     element: 'element',
//                     tap: function (e) {
//                       if (e && e.stopEvent) e.stopEvent();
//                     DeleteMessageOverlay_NotificationHide(false); // popOut default
                   
                    
                    
                    



                   
//                     }
//                   }
//                 },
//                                             ]
                    
                    
                    
//                     },
                
  
//                 // {
//                 //   xtype: 'component',
//                 //   cls: 'ayohaCheckinMaybeLater',
//                 //   html: 'Maybe Later',
//                 //   listeners: {
//                 //     element: 'element',
//                 //     tap: function (e) {
//                 //       if (e && e.stopEvent) e.stopEvent();
//                 //       DeleteMessageOverlay_NotificationHide(false);
//                 //     }
//                 //   }
//                 // }
//               ]
//             }
//           ]
//         }]
//       }
    
    
    
    
    
    
    ]
    });
  }
  
  
  /****************************************************
   * SHOW
   ****************************************************/
  function DeleteMessageOverlay_NotificationShow(ID) {
    _DeleteMessageOverlay_NotificationisOpen = 'Y';
    DeleteMessageOverlay_NotificationCreateIfNeeded(ID);
  
    _DeleteMessageOverlay_Notification.show();
    _DeleteMessageOverlay_NotificationisOpen = 'Y';
  
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('DeleteMessageOverlay_Notification', function () {
        DeleteMessageOverlay_NotificationHide(true);
      });
    }
  }
  
  
  /****************************************************
   * HIDE
   ****************************************************/
  function DeleteMessageOverlay_NotificationHide(fromBack, animCfg) {
  // alert(_DeleteMessageOverlay_NotificationisOpen)
   if (_DeleteMessageOverlay_NotificationisOpen == 'N') {
    return;
   }
   
    
    
    
    
    
   // if (!_DeleteMessageOverlay_Notification || _DeleteMessageOverlay_Notification.destroyed) return;
  
    if (animCfg) {
      _DeleteMessageOverlay_Notification.hide(Ext.fx.Animation(animCfg));
    } else {
      // default popOut
      _DeleteMessageOverlay_Notification.hide(Ext.fx.Animation({
        type: 'popOut',
        easing: 'ease-out',
        duration: 250
      }));
    }
  
    _DeleteMessageOverlay_NotificationisOpen = 'N';
  
    // ✅ sync history
    if (fromBack !== true) {
      if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
        AyohaBrowserBack.close('DeleteMessageOverlay_Notification');
      }
    }
  
    // optional: kalau kau memang suka destroy lepas hide
    _DeleteMessageOverlay_Notification.destroy();
    _DeleteMessageOverlay_Notification = null;
  }
  