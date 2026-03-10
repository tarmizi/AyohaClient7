Ext.define('BuskartApp.view.common.DeleteMessageOverlay', {
   
  });
  
  var _DeleteMessageOverlayisOpen = 'N';
  var _DeleteMessageOverlay = null;
  
  
  /****************************************************
   * CREATE (sekali je)
   ****************************************************/
  function DeleteMessageOverlayCreateIfNeeded(Msg, ID) {
  
    if (_DeleteMessageOverlay && !_DeleteMessageOverlay.destroyed) return;
  
    _DeleteMessageOverlay = Ext.create('Ext.Container', {
      xtype: 'container',
      id: 'DeleteMessageOverlayID',
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
              html: 'Delete Cart Item',
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
              '<div class="ayohaDlgLine">' + Msg + '</div>' +
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
      DeleteMessageOverlayHide(false);
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
    DeleteMessageOverlayHide(false);


  LoadingPanelShow("resources/icons/delete01.gif", "Delete cart...")

        var task = Ext.create('Ext.util.DelayedTask', function () {
            var objn = {
                "ID": ID,
                "EnterpriseAccNo": AppState.MainDashboard.EnterpriseAccNo,
                "SubscriberAccNo": GetCurrAyohaUserAccountNo(),
               // "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
                "MembershipCardCode": globalFloatPanelAyohaStore_AyohaUser_MembershipCardCode
            };
            var _value = Ext.Ajax.request({
    
                // type: "POST",
    
                // url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartDelete',
    
                // dataType: "json",
                // data: JSON.stringify(objn),
                // headers: {
                //     "Content-Type": "application/json; charset=utf-8"
                // },
    
             //url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartDelete',
             url: GetAPIurl() + '/AyohaStore_Cart/AyohaStoreCartDelete',
            method: 'POST',                 // ✅ betul
            jsonData: objn,                 // ✅ auto encode JSON + set body
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },






                success: function (result, request) {
    
                    //console.log(result.responseText);
    
    
                    data = Ext.decode(result.responseText.trim());
    
                    if (data.success == "true") {
   

                       
                        FloatPanel_AyohaStore_Cart_AyohaStoreCartLoadCartAyohaStore('NewCart');
                        var task = Ext.create('Ext.util.DelayedTask', function () {
                            if (isFloatPanel_AyohaStoreOpen == "Y") {
                                FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore();
                            }
                        });
                        task.delay(500);
    
    
                        // var task = Ext.create('Ext.util.DelayedTask', function () {
                        //     DashboardAyohaUserMainStore();
                        // });
                        // task.delay(500);
                      
                        LoadingPanelHide(false);
                        // FloatPanel_AyohaStore_AyohaStoreSaleItemAyohaStoreFrontPageStore(FloatPanel_AyohaStore_getEnterpriseAccNo());
    
    
                    }
                    else {
    
                        alert("Fail!" + result.responseText.trim());
                        Ext.Viewport.unmask();
                        LoadingPanelHide(false);
                    }
                  //  Ext.Viewport.unmask();
                    LoadingPanelHide(false);
                },
    
                failure: function (result, request) {
                    alert("Fail!" + result.responseText.trim());
                 //   Ext.Viewport.unmask();
                    LoadingPanelHide(false);
                }
    
            });
    
    
            Ext.Viewport.unmask();
        });
        task.delay(500);

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
//                     DeleteMessageOverlayHide(false); // popOut default
                   
                    
                    
                    



                   
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
//                 //       DeleteMessageOverlayHide(false);
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
  function DeleteMessageOverlayShow(cfg, ID) {
    _DeleteMessageOverlayisOpen = 'Y';
    DeleteMessageOverlayCreateIfNeeded(cfg, ID);
  
    _DeleteMessageOverlay.show();
    _DeleteMessageOverlayisOpen = 'Y';
  
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('DeleteMessageOverlay', function () {
        DeleteMessageOverlayHide(true);
      });
    }
  }
  
  
  /****************************************************
   * HIDE
   ****************************************************/
  function DeleteMessageOverlayHide(fromBack, animCfg) {
  // alert(_DeleteMessageOverlayisOpen)
   if (_DeleteMessageOverlayisOpen == 'N') {
    return;
   }
   
    
    
    
    
    
   // if (!_DeleteMessageOverlay || _DeleteMessageOverlay.destroyed) return;
  
    if (animCfg) {
      _DeleteMessageOverlay.hide(Ext.fx.Animation(animCfg));
    } else {
      // default popOut
      _DeleteMessageOverlay.hide(Ext.fx.Animation({
        type: 'popOut',
        easing: 'ease-out',
        duration: 250
      }));
    }
  
    _DeleteMessageOverlayisOpen = 'N';
  
    // ✅ sync history
    if (fromBack !== true) {
      if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
        AyohaBrowserBack.close('DeleteMessageOverlay');
      }
    }
  
    // optional: kalau kau memang suka destroy lepas hide
    _DeleteMessageOverlay.destroy();
    _DeleteMessageOverlay = null;
  }
  