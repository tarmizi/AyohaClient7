// Ext.define('BuskartApp.view.ImageCarousel', {
//   extend: 'Ext.Container',
//   xtype: 'imagecarousel',

//   config: {
//     height: 300,
//     width: '100%',
//     style: 'background:transparent;',
//     layout: 'fit'
//   },

//   initialize: function () {
//     var me = this;
//     me.callParent(arguments);

//     me.currentIndex = 0;

//     me.stage = me.add({
//       xtype: 'container',
//       itemId: 'stage',
//       style:
//         'position:relative;width:100%;height:100%;max-width:400px;margin:0 auto;' +
//         'perspective:1000px;overflow:visible;background:transparent;'
//     });

//     // ✅ cards as REAL components (bukan html string)
//     me.cards = [
//       me._addCard('resources/icons/Modenas_Kriss08.png'),
//       me._addCard('resources/icons/iPhone17_01.png'),
//       me._addCard('resources/icons/FarehaGold01.png'),
//       me._addCard('resources/icons/monsterChicken02.png')
//     ];

//     // ✅ nav buttons overlay
//     me.add({
//       xtype: 'container',
//       style:
//         'position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);' +
//         'display:flex;justify-content:space-between;pointer-events:none;z-index:50;',
//       items: [
//         {
//           xtype: 'button',
//           text: '❮',
//           style:
//             'pointer-events:auto;margin-left:10px;border-radius:999px;' +
//             'box-shadow:0 2px 8px rgba(0,0,0,.18);background:rgba(255,255,255,.85);',
//           handler: function () { me.prev(); }
//         },
//         {
//           xtype: 'button',
//           text: '❯',
//           style:
//             'pointer-events:auto;margin-right:10px;border-radius:999px;' +
//             'box-shadow:0 2px 8px rgba(0,0,0,.18);background:rgba(255,255,255,.85);',
//           handler: function () { me.next(); }
//         }
//       ]
//     });

//     // ✅ swipe (Modern)
//     me.element.on({
//       swipe: function (e) {
//         if (e.direction === 'left')  me.next();
//         if (e.direction === 'right') me.prev();
//       }
//     });

//     // tunggu element siap baru apply style
//     Ext.defer(function () {
//       me.apply3D();
//     }, 50);
//   },

//   _addCard: function (imgPath) {
//     var me = this;
//     return me.stage.add({
//       xtype: 'component',
//       html:
//         '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;' +
//         'background:linear-gradient(#c800ffc9,#ff00de75);">' +
//           '<img src="' + imgPath + '" style="width:80%;height:100%;object-fit:contain;display:block;" />' +
//         '</div>',
//       style:
//         'position:absolute;top:10%;left:20%;width:60%;height:80%;' +
//         'border-radius:15px;overflow:hidden;' +
//         'box-shadow:0 5px 15px rgba(0,0,0,.10);' +
//         'transition:transform .5s ease, opacity .5s ease;' +
//         'will-change:transform,opacity;'
//     });
//   },

//   next: function () {
//     if (!this.cards || !this.cards.length) return;
//     this.currentIndex = (this.currentIndex + 1) % this.cards.length;
//     this.apply3D();
//   },

//   prev: function () {
//     if (!this.cards || !this.cards.length) return;
//     this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
//     this.apply3D();
//   },

//   apply3D: function () {
//     var me = this;
//     var total = me.cards.length;
//     var idx = me.currentIndex;

//     var prev = (idx - 1 + total) % total;
//     var next = (idx + 1) % total;

//     for (var i = 0; i < total; i++) {
//       var card = me.cards[i];
//       if (!card || !card.el) continue;

//       // default hidden
//       var transform = 'scale(0.5)';
//       var opacity = '0';
//       var z = '1';

//       if (i === idx) {
//         transform = 'translateZ(0) scale(1)';
//         opacity = '1';
//         z = '3';
//       } else if (i === prev) {
//         transform = 'translateX(-45%) translateZ(-100px) scale(.8)';
//         opacity = '.6';
//         z = '2';
//       } else if (i === next) {
//         transform = 'translateX(45%) translateZ(-100px) scale(.8)';
//         opacity = '.6';
//         z = '2';
//       }

//       card.el.setStyle({
//         transform: transform,
//         opacity: opacity,
//         zIndex: z
//       });
//     }
//   }
// });


Ext.define('BuskartApp.view.ImageCarousel', {
  extend: 'Ext.Container',
  xtype: 'imagecarousel',

  config: {
    height: 300,
    width: '100%',
    style: 'background:transparent;',
    layout: 'fit'
  },

  initialize: function () {
    var me = this;
    me.callParent(arguments);

    me.currentIndex = 0;
    me._navHideTask = null;

    // ✅ stage (center + max width)
    me.stage = me.add({
      xtype: 'container',
      itemId: 'stage',
      style:
        'position:relative;width:100%;height:100%;max-width:400px;margin:0 auto;' +
        'perspective:1000px;overflow:visible;background:transparent;'
    });

    // ✅ cards as REAL components
    me.cards = [
      me._addCard('resources/icons/Modenas_Kriss08.png'),
      me._addCard('resources/icons/iPhone17_01.png'),
      me._addCard('resources/icons/FarehaGold01.png'),
      me._addCard('resources/icons/monsterChicken02.png')
    ];

    // ✅ nav overlay ikut stage width (max-width 400) + low-profile
    me.nav = me.add({
      xtype: 'container',
      itemId: 'nav',
      style:
        'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);' +
        'width:100%;max-width:400px;display:flex;align-items:center;justify-content:space-between;' +
        'pointer-events:none;z-index:50;',
      items: [
        {
          xtype: 'button',
          itemId: 'prevBtn',
          text: '❮',
          ui: 'plain',
          style:
            'pointer-events:auto;margin-left:8px;width:34px;height:34px;min-height:34px;' +
            'padding:0;border-radius:999px;' +
            'border:1px solid rgba(255,255,255,.9);' +
            'background:rgba(255,255,255,.70);' +
            'box-shadow:0 10px 22px rgba(17,24,39,.18);' +
            'color:rgba(17,24,39,.70);font-weight:900;font-size:16px;' +
            'opacity:.25;transform:scale(.98);' +
            'transition:opacity .18s ease, transform .18s ease, background .18s ease;',
          handler: function () { me.prev(); }
        },
        {
          xtype: 'button',
          itemId: 'nextBtn',
          text: '❯',
          ui: 'plain',
          style:
            'pointer-events:auto;margin-right:8px;width:34px;height:34px;min-height:34px;' +
            'padding:0;border-radius:999px;' +
            'border:1px solid rgba(255,255,255,.9);' +
            'background:rgba(255,255,255,.70);' +
            'box-shadow:0 10px 22px rgba(17,24,39,.18);' +
            'color:rgba(17,24,39,.70);font-weight:900;font-size:16px;' +
            'opacity:.25;transform:scale(.98);' +
            'transition:opacity .18s ease, transform .18s ease, background .18s ease;',
          handler: function () { me.next(); }
        }
      ]
    });

    me.prevBtn = me.down('#prevBtn');
    me.nextBtn = me.down('#nextBtn');

    // ✅ show nav bila user interact (tap/touch/swipe)
    me._bindGestures();

    // ✅ penting: tunggu painted baru apply3D (supaya card.el wujud)
    me.on('painted', function () {
      me.apply3D();
      me._hideNavNow(); // start low-profile
    }, me);
  },

  _bindGestures: function () {
    var me = this;

    // swipe gesture
    me.element.on({
      swipe: function (e) {
        me._showNavTemp();
        if (e.direction === 'left')  me.next();
        if (e.direction === 'right') me.prev();
      },
      // apa-apa sentuhan pun buat nav muncul sekejap
      touchstart: function () {
        me._showNavTemp();
      },
      scope: me
    });
  },

  _showNavTemp: function () {
    var me = this;

    me._showNavNow();

    if (me._navHideTask) {
      Ext.undefer(me._navHideTask);
      me._navHideTask = null;
    }

    me._navHideTask = Ext.defer(function () {
      if (me.destroyed) return;
      me._hideNavNow();
    }, 1200);
  },

  _showNavNow: function () {
    var me = this;
    if (me.prevBtn && me.prevBtn.el) {
      me.prevBtn.el.setStyle({
        opacity: '0.95',
        transform: 'scale(1)',
        background: 'rgba(255,255,255,.86)'
      });
    }
    if (me.nextBtn && me.nextBtn.el) {
      me.nextBtn.el.setStyle({
        opacity: '0.95',
        transform: 'scale(1)',
        background: 'rgba(255,255,255,.86)'
      });
    }
  },

  _hideNavNow: function () {
    var me = this;
    if (me.prevBtn && me.prevBtn.el) {
      me.prevBtn.el.setStyle({
        opacity: '0.25',
        transform: 'scale(.98)',
        background: 'rgba(255,255,255,.70)'
      });
    }
    if (me.nextBtn && me.nextBtn.el) {
      me.nextBtn.el.setStyle({
        opacity: '0.25',
        transform: 'scale(.98)',
        background: 'rgba(255,255,255,.70)'
      });
    }
  },

  _addCard: function (imgPath) {
    var me = this;
    return me.stage.add({
      xtype: 'component',
      html:
        '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;' +
        'background:linear-gradient(#c800ffc9,#ff00de75);">' +
          '<img src="' + imgPath + '" style="width:80%;height:100%;object-fit:contain;display:block;" />' +
        '</div>',
      style:
        'position:absolute;top:10%;left:20%;width:60%;height:80%;' +
        'border-radius:15px;overflow:hidden;' +
        'box-shadow:0 5px 15px rgba(0,0,0,.10);' +
        'transition:transform .5s ease, opacity .5s ease;' +
        'will-change:transform,opacity;'
    });
  },

  next: function () {
    if (!this.cards || !this.cards.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.cards.length;
    this.apply3D();
    this._showNavTemp();
  },

  prev: function () {
    if (!this.cards || !this.cards.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
    this.apply3D();
    this._showNavTemp();
  },

  apply3D: function () {
    var me = this;
    if (!me.cards || !me.cards.length) return;

    var total = me.cards.length;
    var idx = me.currentIndex;

    var prev = (idx - 1 + total) % total;
    var next = (idx + 1) % total;

    for (var i = 0; i < total; i++) {
      var card = me.cards[i];
      if (!card || !card.el) continue;

      var transform = 'scale(0.5)';
      var opacity = '0';
      var z = '1';

      if (i === idx) {
        transform = 'translateZ(0) scale(1)';
        opacity = '1';
        z = '3';
      } else if (i === prev) {
        transform = 'translateX(-45%) translateZ(-100px) scale(.8)';
        opacity = '.6';
        z = '2';
      } else if (i === next) {
        transform = 'translateX(45%) translateZ(-100px) scale(.8)';
        opacity = '.6';
        z = '2';
      }

      card.el.setStyle({
        transform: transform,
        opacity: opacity,
        zIndex: z
      });
    }
  },

  destroy: function () {
    if (this._navHideTask) {
      Ext.undefer(this._navHideTask);
      this._navHideTask = null;
    }
    this.callParent(arguments);
  }
});
