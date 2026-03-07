Ext.define('BuskartApp.view.common.ErrorMessagesOverlay', {
   
  });
  
  var _ErrorMessagesOverlayisOpen = 'N';
  var _ErrorMessagesOverlay = null;
  
  
  /****************************************************
   * CREATE (sekali je)
   ****************************************************/
  function ErrorMessagesOverlayCreateIfNeeded(Msg) {
  
    if (_ErrorMessagesOverlay && !_ErrorMessagesOverlay.destroyed) return;
  
    _ErrorMessagesOverlay = Ext.create('Ext.Container', {
      xtype: 'container',
      id: 'ErrorMessagesOverlayID',
      height: '100%',
      width: '100%',
      centered: true,
  
      floated: true,
      fullscreen: true,
      modal: true,
      hideOnMaskTap: true,
      zIndex: 999,
  
      cls: 'ayohaCheckinModal',
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
  
      items: [{
        xtype: 'container',
        cls: 'ayohaCheckinCardWrap',
        layout: { type: 'vbox', pack: 'center', align: 'center' },
        padding: 18,
        style: 'background:transparent;',
        items: [{
          xtype: 'container',
          cls: 'ayohaCheckinShell',
          items: [
          
  
            {
              xtype: 'container',
              cls: 'ayohaCheckinCard',
              layout: { type: 'vbox', pack: 'start', align: 'stretch' },
              items: [
                // { xtype: 'component', cls: 'ayohaCheckinHeader', html: 'Ayoha Reward Membership' },
                // { xtype: 'component', cls: 'ayohaCheckinTitle',  html: 'Check-In Point Loyalty' },
                // { xtype: 'component', cls: 'ayohaCheckinDivider', html: '' },
  
                {
                  xtype: 'container',
                  cls: 'ayohaCheckinStamp',
                  items: [{
                    xtype: 'component',
                    cls: 'ayohaCheckinStampImg',
                    itemId: 'cmpCheckInLogo',
                    html: '<img src="resources/icons/wired-gradient-1140-error.gif" />'
                  }]
                },
  
                { xtype: 'component', cls: 'ayohaCheckinMerchant', itemId: 'cmpCheckInMerchant', html: 'Error' },
             
                { xtype: 'component', cls: 'messageOverlayText',  itemId: 'cmpCheckInTagline',  html: Msg },
     { xtype: 'component', cls: 'ayohaCheckinDivider', html: '' },  
                // {
                //   xtype: 'component',
                //   cls: 'ayohaCheckinInfo',
                //   itemId: 'cmpCheckInInfo',
                //   html: ''
                // },
  

                { 
                    
                   xtype: 'container',
                   width: '100%',
                   height: 64,
                     layout: {
                                                type: 'vbox',
                                                pack: 'start',
                                                align: 'center'
    
                                            },
                                            items:[
{
                  xtype: 'component',
                  cls: 'messageOverlayBtn',
                  html: 'OK',
                  listeners: {
                    element: 'element',
                    tap: function (e) {
                      if (e && e.stopEvent) e.stopEvent();
                    ErrorMessagesOverlayHide(false); // popOut default
                   
                    
                    
                    



                   
                    }
                  }
                },
                                            ]
                    
                    
                    
                    },
                
  
                // {
                //   xtype: 'component',
                //   cls: 'ayohaCheckinMaybeLater',
                //   html: 'Maybe Later',
                //   listeners: {
                //     element: 'element',
                //     tap: function (e) {
                //       if (e && e.stopEvent) e.stopEvent();
                //       ErrorMessagesOverlayHide(false);
                //     }
                //   }
                // }
              ]
            }
          ]
        }]
      }]
    });
  }
  
  
  /****************************************************
   * SHOW
   ****************************************************/
  function ErrorMessagesOverlayShow(cfg) {
    _ErrorMessagesOverlayisOpen = 'Y';
    ErrorMessagesOverlayCreateIfNeeded(cfg);
  
    _ErrorMessagesOverlay.show();
    _ErrorMessagesOverlayisOpen = 'Y';
  
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('ErrorMessagesOverlay', function () {
        ErrorMessagesOverlayHide(true);
      });
    }
  }
  
  
  /****************************************************
   * HIDE
   ****************************************************/
  function ErrorMessagesOverlayHide(fromBack, animCfg) {
  // alert(_ErrorMessagesOverlayisOpen)
   if (_ErrorMessagesOverlayisOpen == 'N') {
    return;
   }
   
    
    
    
    
    
   // if (!_ErrorMessagesOverlay || _ErrorMessagesOverlay.destroyed) return;
  
    if (animCfg) {
      _ErrorMessagesOverlay.hide(Ext.fx.Animation(animCfg));
    } else {
      // default popOut
      _ErrorMessagesOverlay.hide(Ext.fx.Animation({
        type: 'popOut',
        easing: 'ease-out',
        duration: 250
      }));
    }
  
    _ErrorMessagesOverlayisOpen = 'N';
  
    // ✅ sync history
    if (fromBack !== true) {
      if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
        AyohaBrowserBack.close('ErrorMessagesOverlay');
      }
    }
  
    // optional: kalau kau memang suka destroy lepas hide
    _ErrorMessagesOverlay.destroy();
    _ErrorMessagesOverlay = null;
  }
  