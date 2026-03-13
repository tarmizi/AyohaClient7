Ext.define('BuskartApp.view.Membership.FloatPanel_CheckInModal', {
    requires: [
      'Ext.util.DelayedTask'
    ],
  });
  
  var _FloatPanel_CheckInModalisOpen = 'N';
  var _FloatPanel_CheckInModal = null;
  
  
  /****************************************************
   * CREATE (sekali je)
   ****************************************************/
  function FloatPanel_CheckInModalCreateIfNeeded() {
  
    if (_FloatPanel_CheckInModal && !_FloatPanel_CheckInModal.destroyed) return;
  
    _FloatPanel_CheckInModal = Ext.create('Ext.Container', {
      xtype: 'container',
      id: 'FloatPanel_CheckInModalID',
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
  
      // ✅ simpan data macam config lama
      _data: {
        logoUrl: '',
        enterpriseName: '',
        enterpriseTagline: '',
        enterpriseAccNo: '',
        checkInCount: 0,
        onConfirmFn: null,
        onCancelFn: null
      },
  
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
            { xtype: 'component', cls: 'ayohaCheckinIconTop', html: '🎁' },
  
            {
              xtype: 'container',
              cls: 'ayohaCheckinCard',
              layout: { type: 'vbox', pack: 'start', align: 'stretch' },
              items: [
                { xtype: 'component', cls: 'ayohaCheckinHeader', html: 'Ayoha Reward Membership' },
                { xtype: 'component', cls: 'ayohaCheckinTitle',  html: 'Check-In Point Loyalty' },
                { xtype: 'component', cls: 'ayohaCheckinDivider', html: '' },
  
                {
                  xtype: 'container',
                  cls: 'ayohaCheckinStamp',
                  items: [{
                    xtype: 'component',
                    cls: 'ayohaCheckinStampImg',
                    itemId: 'cmpCheckInLogo',
                    html: '<img src="" />'
                  }]
                },
  
                { xtype: 'component', cls: 'ayohaCheckinMerchant', itemId: 'cmpCheckInMerchant', html: '' },
                { xtype: 'component', cls: 'ayohaCheckinTagline',  itemId: 'cmpCheckInTagline',  html: '' },
  
                {
                  xtype: 'component',
                  cls: 'ayohaCheckinInfo',
                  itemId: 'cmpCheckInInfo',
                  html: ''
                },
  
                {
                  xtype: 'component',
                  cls: 'ayohaCheckinBtn',
                  html: 'Tap to Check-In',
                  listeners: {
                    element: 'element',
                    tap: function (e) {
                      if (e && e.stopEvent) e.stopEvent();
  
                      var cmp  = Ext.Component.from(this); // DOM => component
                      var view = cmp.up('#FloatPanel_CheckInModalID');
  
                      if (!view) return;
  
                      var CheckInCount = parseInt((view._data && view._data.checkInCount) || 0, 10) || 0;
  
                      // ✅ logic kau (<=2 allow celebration)
                      if (CheckInCount <= 2) {
                     
                        var objn = {
                            EnterpriseHQAccNo: view._data.enterpriseAccNo,
                            EnterpriseAccNo: view._data.enterpriseAccNo,
                            SubscriberAccNo: GetCurrAyohaUserAccountNo(),
                            CheckInCode: "CIC-" + GenerateRandomNo() + '-' + GetCurrAyohaUserAccountNo(),
                            CheckInMethod: "Online",
                            CheckInPage: "MerchantList"
                          };
      
                          Ext.Ajax.request({
                            url: GetAPIurl() + '/EnterprisesCheckIn/EnterprisesCheckIn_Insert',
                            method: 'POST',
                            jsonData: objn,
                            headers: { 'Content-Type': 'application/json; charset=utf-8' },
      
                            success: function (response) {
                              var data;
      
                              try {
                                data = Ext.decode((response.responseText || '').trim());
                              } catch (e) {
                                swalFireFail("Fail! Invalid JSON -> " + (response.responseText || ''));
                                Ext.Viewport.unmask();
                                LoadingPanelHide();
                                return;
                              }
      
                              if (data && (data.success === true || data.success === "true")) {
      
                                // ✅ update count local
                              
                               // if (view._data) view._data.checkInCount = CheckInCount;
      
                               // if (CheckInCount <= 3) {
                                  FloatPanel_CheckInModalHide(false); // popOut default
                                  Dashboard_SuccessCheckInController_Ayoha_CelebrationReward(CheckInCount, 10);
                                  CoreFunction_DashboardAyohaUser();
                                  FloatPanel_Membership_MembershipCardHubsUpgradeHide(false);
                                //  CheckInCount = CheckInCount + 1;
                              
                               // } 
                                
                                
                                // else {
                                //     FloatPanel_CheckInModalHide(false); // popOut default
                                //   CoreFunction_DashboardAyohaUser();
                              
                                //  FloatPanel_Membership_MembershipCardHubsUpgradeHide(false);
                                //   Ayoha_WelcomeBackFans();
                                // }
      
                              } else {
                                swalFireFail("Fail!->" + (response.responseText || '').trim());
                                LoadingPanelHide();
                                Ext.Viewport.unmask();
                                return;
                              }
      
                              Ext.Viewport.unmask();
                            },
      
                            failure: function (response) {
                              swalFireFail("Fail!" + (response.responseText || '').trim());
                              Ext.Viewport.unmask();
                              LoadingPanelHide();
                            }
                          });
                    
                    
                    }



                   
                    }
                  }
                },
  
                {
                  xtype: 'component',
                  cls: 'ayohaCheckinMaybeLater',
                  html: 'Maybe Later',
                  listeners: {
                    element: 'element',
                    tap: function (e) {
                      if (e && e.stopEvent) e.stopEvent();
                        FloatPanel_CheckInModalHide(false);
                       swalFireHoorayMessage("Welcome aboard! 🚀 Your membership was successful. You can now view your card in the Membership Card List.");
                    
                    }
                  }
                }
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
  function FloatPanel_CheckInModalShow(cfg) {
    _FloatPanel_CheckInModalisOpen = 'Y';
    FloatPanel_CheckInModalCreateIfNeeded();
  
    cfg = cfg || {};
  
    // ✅ set data
    _FloatPanel_CheckInModal._data.logoUrl          = cfg.logoUrl || '';
    _FloatPanel_CheckInModal._data.enterpriseName   = cfg.enterpriseName || '';
    _FloatPanel_CheckInModal._data.enterpriseTagline= cfg.enterpriseTagline || '';
    _FloatPanel_CheckInModal._data.enterpriseAccNo  = cfg.enterpriseAccNo || '';
    _FloatPanel_CheckInModal._data.checkInCount     = parseInt(cfg.checkInCount || 0, 10) || 0;
    _FloatPanel_CheckInModal._data.onConfirmFn      = cfg.onConfirmFn || null;
    _FloatPanel_CheckInModal._data.onCancelFn       = cfg.onCancelFn || null;
  
    // ✅ refresh UI (update component html)
    try {
      _FloatPanel_CheckInModal.down('#cmpCheckInLogo').setHtml('<img src="' + (_FloatPanel_CheckInModal._data.logoUrl || '') + '" />');
      _FloatPanel_CheckInModal.down('#cmpCheckInMerchant').setHtml(_FloatPanel_CheckInModal._data.enterpriseName || '');
      _FloatPanel_CheckInModal.down('#cmpCheckInTagline').setHtml(_FloatPanel_CheckInModal._data.enterpriseTagline || '');
  
      _FloatPanel_CheckInModal.down('#cmpCheckInInfo').setHtml(
        '<div>' +
        'Get <b>10 FREE Ayoha Points</b> just for visiting our ayoha merchant - ' +
        '<b style="color:#7e22ce">' + (_FloatPanel_CheckInModal._data.enterpriseName || '') + '</b> today. ' +
        'You can collect this <b style="color:#7e22ce">10 point</b> up to ' +
        '<b style="color:#7e22ce">3 times per day!</b>' +
        '</div>'
      );
    } catch (e) {}
  
    _FloatPanel_CheckInModal.show();
    _FloatPanel_CheckInModalisOpen = 'Y';
  
    // ✅ push browser back (ikut style kau)
    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
      AyohaBrowserBack.push('FloatPanel_CheckInModal', function () {
        FloatPanel_CheckInModalHide(true);
      });
    }
  }
  
  
  /****************************************************
   * HIDE
   ****************************************************/
  function FloatPanel_CheckInModalHide(fromBack, animCfg) {
  // alert(_FloatPanel_CheckInModalisOpen)
   if (_FloatPanel_CheckInModalisOpen == 'N') {
    return;
   }
   
    
    
    
    
    
   // if (!_FloatPanel_CheckInModal || _FloatPanel_CheckInModal.destroyed) return;
  
    if (animCfg) {
      _FloatPanel_CheckInModal.hide(Ext.fx.Animation(animCfg));
    } else {
      // default popOut
      _FloatPanel_CheckInModal.hide(Ext.fx.Animation({
        type: 'popOut',
        easing: 'ease-out',
        duration: 250
      }));
    }
  
    _FloatPanel_CheckInModalisOpen = 'N';
  
    // ✅ sync history
    if (fromBack !== true) {
      if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
        AyohaBrowserBack.close('FloatPanel_CheckInModal');
      }
    }
  
    // optional: kalau kau memang suka destroy lepas hide
    _FloatPanel_CheckInModal.destroy();
    _FloatPanel_CheckInModal = null;
  }
  