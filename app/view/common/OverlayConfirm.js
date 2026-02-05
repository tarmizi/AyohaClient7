Ext.define('BuskartApp.view.common.OverlayConfirm', {
  extend: 'Ext.Dialog',
  xtype: 'overlays',

  itemId: 'ayohaConfirmOverlay',
  cls: 'ayohaConfirmDialog',
  closeAction: 'hide',

  centered: true,
  modal: true,
  hideOnMaskTap: true,     // ✅ native mask tap
  zIndex: 2147483647,

  width: Math.min(window.innerWidth * 0.86, 340),
  style: 'background:#fff; border-radius:14px;',
  // height auto lebih stabil (tak payah fixed 320)
  // height: 320,

  showAnimation: { type: 'popIn', duration: 180, easing: 'ease-out' },
  hideAnimation: { type: 'popOut', duration: 160, easing: 'ease-in' },

  config: {
    titleText: 'Confirmation',
    messageText: 'Are you sure?',
    imageUrl: 'resources/icons/attention1.png',
    yesText: 'YES',
    noText: 'NO',
    onYes: null,
    onNo: null
  },

  listeners: {
    show: function (me) {
      me._choice = null;        // null = not decided yet
      me._handled = false;      // elak callback double
      AyohaBackManager.register(me);
    },

    hide: function (me) {
      AyohaBackManager.unregister(me);

      // safety: kalau ada mask stuck
      Ext.Viewport.setMasked(false);

      // ✅ kalau hide sebab mask tap / back / close => treat as NO
      if (me._handled) return;
      me._handled = true;

      var choice = (me._choice === true); // default false kalau null
      var yesCb = me.getOnYes();
      var noCb  = me.getOnNo();
      var resolver = me._resolver;

      me._resolver = null;

      if (choice && typeof yesCb === 'function') yesCb();
      if (!choice && typeof noCb === 'function') noCb();

      if (resolver) resolver(choice);
    },

    // kalau destroyed, make sure unregister
    destroy: function (me) {
      try { AyohaBackManager.unregister(me); } catch (e) {}
    }
  },

  items: [
    // Close X
    {
      xtype: 'button',
      ui: 'plain',
      html: '<div style="font-size:26px;line-height:26px;">&times;</div>',
      style: 'position:absolute; right:10px; top:10px;',
      handler: function () {
        var d = this.up('#ayohaConfirmOverlay');
        if (d) d._resolve(false);
      }
    },

    // Icon center
    {
      xtype: 'container',
      layout: { type: 'hbox', pack: 'center', align: 'center' },
      margin: '16 0 8 0',
      items: [{
        xtype: 'image',
        itemId: 'imgIcon',
        width: 120,
        height: 120
      }]
    },

    // Title
    {
      xtype: 'component',
      itemId: 'lblTitle',
      margin: '6 16 0 16',
      style: 'text-align:center; font-size:20px; font-weight:700;'
    },

    // Message
    {
      xtype: 'component',
      itemId: 'lblMsg',
      margin: '10 18 12 18',
      style: 'text-align:center; font-size:14px; color:#666; line-height:1.35;'
    }
  ],

  buttons: [
    {
      text: 'YES',
      cls: 'ayohaConfirmYesBtn',
      handler: function () {
        var d = this.up('#ayohaConfirmOverlay');
        if (d) d._resolve(true);
      }
    },
    {
      text: 'NO',
      cls: 'ayohaConfirmNoBtn',
      handler: function () {
        var d = this.up('#ayohaConfirmOverlay');
        if (d) d._resolve(false);
      }
    }
  ],

  initialize: function () {
    this.callParent(arguments);
    this._refreshUI();
  },

  updateTitleText: function () { this._refreshUI(); },
  updateMessageText: function () { this._refreshUI(); },
  updateImageUrl: function () { this._refreshUI(); },
  updateYesText: function () { this._refreshUI(); },
  updateNoText: function () { this._refreshUI(); },

  _refreshUI: function () {
    var t = this.down('#lblTitle');
    var m = this.down('#lblMsg');
    var i = this.down('#imgIcon');

    if (t) t.setHtml(this.getTitleText());
    if (m) m.setHtml(this.getMessageText());
    if (i) i.setSrc(this.getImageUrl());

    // Update button labels
    var btns = this.getButtons && this.getButtons();
    if (btns && btns.length >= 2) {
      btns[0].setText(this.getYesText() || 'YES');
      btns[1].setText(this.getNoText() || 'NO');
    }
  },

  // ✅ Used by BackManager (back closes as NO)
  _resolve: function (isYes) {
    var me = this;
    if (me._handled) return;   // elak double trigger
    me._choice = !!isYes;
    me.hide();
  }
});







// var _ayohaAlertDialog;

// function ayohaAlert(opts) {
//   opts = opts || {};

//   if (!_ayohaAlertDialog || _ayohaAlertDialog.destroyed) {
//     _ayohaAlertDialog = Ext.create('Ext.Dialog', {
//       centered: true,
//       modal: true,
//       hideOnMaskTap: true,
//       closeAction: 'hide',
//       width: Math.min(window.innerWidth * 0.86, 340),
//       style: 'border-radius:14px;',
//       zIndex: 2147483647,
//       layout: 'vbox',
//       items: [
//         { xtype: 'image', itemId: 'ico', width: 70, height: 70, margin: '18 0 8 110' },
//         { xtype: 'component', itemId: 'ttl', style: 'font-size:18px;font-weight:700;text-align:center;', margin: '0 16 6 16' },
//         { xtype: 'component', itemId: 'msg', style: 'font-size:14px;color:#666;text-align:center;line-height:1.4;', margin: '0 16 16 16' }
//       ],
//       buttons: [{
//         text: 'OK',
//         ui: 'action',
//         handler: function () {
//           var d = this.up('dialog');
//           d.hide();
//           if (typeof d._cb === 'function') d._cb();
//           d._cb = null;
//         }
//       }]
//     });

//     Ext.Viewport.add(_ayohaAlertDialog);
//   }

//   _ayohaAlertDialog.down('#ico').setSrc(opts.iconUrl || 'resources/icons/attention1.png');
//   _ayohaAlertDialog.down('#ttl').setHtml(Ext.String.htmlEncode(opts.title || 'Info'));
//   _ayohaAlertDialog.down('#msg').setHtml(Ext.String.htmlEncode(opts.message || ''));

//   _ayohaAlertDialog._cb = opts.cb || null;

//   _ayohaAlertDialog.setZIndex(2147483647);
//   _ayohaAlertDialog.show();
//   _ayohaAlertDialog.toFront();
// }



var _AyohaConfirmOverlay = null;

function ayohaAlert(options) {
  options = options || {};

  if (!_AyohaConfirmOverlay || _AyohaConfirmOverlay.destroyed) {
    _AyohaConfirmOverlay = Ext.create('BuskartApp.view.common.OverlayConfirm');
    Ext.Viewport.add(_AyohaConfirmOverlay);
  }

  _AyohaConfirmOverlay.setTitleText(options.title || 'Confirmation');
  _AyohaConfirmOverlay.setMessageText(options.message || 'Are you sure?');
  _AyohaConfirmOverlay.setImageUrl(options.imageUrl || 'resources/icons/attention1.png');

  _AyohaConfirmOverlay.setYesText(options.yesText || 'YES');
  _AyohaConfirmOverlay.setNoText(options.noText || 'NO');

  _AyohaConfirmOverlay.setOnYes(options.onYes || null);
  _AyohaConfirmOverlay.setOnNo(options.onNo || null);

  return new Promise(function (resolve) {
    _AyohaConfirmOverlay._resolver = resolve;
    _AyohaConfirmOverlay.setZIndex(2147483647);
    _AyohaConfirmOverlay.show();
    _AyohaConfirmOverlay.toFront();
  });
}

















// var _ayohaAlertDialog = null;

// function ayohaAlert(opts) {
//   opts = opts || {};

//   if (!_ayohaAlertDialog || _ayohaAlertDialog.destroyed) {

//     _ayohaAlertDialog = Ext.create('Ext.Dialog', {
//       itemId: 'ayohaAlertDialog',
//       cls: 'ayohaAlertDialog ayohaAlertPremium',

//       centered: true,
//       modal: true,
//       hideOnMaskTap: true,
//       closeAction: 'hide',

//       width: Math.min(window.innerWidth * 0.86, 340),
//       style: 'border-radius:18px; box-shadow: 0 18px 55px rgba(0,0,0,.28);',
//       zIndex: 2147483647,

//       layout: { type: 'vbox', align: 'stretch' },

//       listeners: {
//         show: function (d) {
//           AyohaBackManager.register(d);
//         },
//         hide: function (d) {
//           AyohaBackManager.unregister(d);
//           Ext.Viewport.setMasked(false); // safety
//         }
//       },

//       items: [
//         {
//           xtype: 'container',
//           layout: { type: 'hbox', pack: 'center', align: 'center' },
//           margin: '8 0 8 0',
//           items: [{ xtype: 'image', itemId: 'ico', width: 120, height: 90 }]
//         },
//         { xtype: 'component', itemId: 'ttl', margin: '0 16 6 16', style: 'font-size:18px;font-weight:800;text-align:center;' },
//         { xtype: 'component', itemId: 'msg', margin: '0 18 16 18', style: 'font-size:14px;color:#666;text-align:center;line-height:1.45;' }
//       ],

//       buttons: [{
//         text: 'OK',
//         cls: 'ayohaAlertOkBtnPremium',
//         handler: function () {
//           var d = this.up('dialog');
//           d.hide();

//           if (typeof d._cb === 'function') {
//             var fn = d._cb;
//             d._cb = null;
//             fn();
//           } else {
//             d._cb = null;
//           }
//         }
//       }]
//     });

//     Ext.Viewport.add(_ayohaAlertDialog);
//   }

//   _ayohaAlertDialog.down('#ico').setSrc(opts.iconUrl || 'resources/icons/attention1.png');
//   _ayohaAlertDialog.down('#ttl').setHtml(Ext.String.htmlEncode(opts.title || 'Info'));
//   _ayohaAlertDialog.down('#msg').setHtml(Ext.String.htmlEncode(opts.message || ''));

//   _ayohaAlertDialog._cb = opts.cb || null;

//   _ayohaAlertDialog.setZIndex(2147483647);
//   _ayohaAlertDialog.show();
//   _ayohaAlertDialog.toFront();
// }
