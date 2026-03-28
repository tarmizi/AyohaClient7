Ext.define('BuskartApp.view.common.FloatPanel_MembershipSuccessModal', {
    requires: [
        'Ext.util.DelayedTask'
    ]
});

var _FloatPanel_MembershipSuccessModalisOpen = 'N';
var _FloatPanel_MembershipSuccessModal = null;


/****************************************************
 * CREATE
 ****************************************************/
function FloatPanel_MembershipSuccessModalCreateIfNeeded() {

    if (_FloatPanel_MembershipSuccessModal && !_FloatPanel_MembershipSuccessModal.destroyed) return;

    _FloatPanel_MembershipSuccessModal = Ext.create('Ext.Container', {
        xtype: 'container',
        id: 'FloatPanel_MembershipSuccessModalID',
        height: '100%',
        width: '100%',
        centered: true,
        closeAction: 'destroy',
        floated: true,
        fullscreen: true,
        modal: true,
        hideOnMaskTap: true,
        //zIndex: 999,

        cls: 'ayohaMembershipSuccessModal',
      //  style: 'background: rgba(20,10,30,.50);backdrop-filter: blur(3px);-webkit-backdrop-filter: blur(3px);',
        style: 'background: rgba(20,10,30,.45); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px);',

        showAnimation: { type: 'popIn', duration: 350, easing: 'ease-out' },
        hideAnimation: { type: 'popOut', duration: 350, easing: 'ease-out' },

        _data: {
            logoUrl: '',
            brandTitle: 'AYOHA REWARD',
            brandTagline: 'We Double Your Reward',
            title: '',
            subtitle: 'Your membership is now active',
            badgeText: 'Membership Activated',
            message: 'A world of rewards, perks, and exclusive privileges is now yours to enjoy.',
            buttonText: 'Start Exploring',
            onConfirmFn: null,
            onCancelFn: null
        },

        listeners: {
            beforehide: function () {
                return true;
            }
        },

        items: [{
            xtype: 'container',
            cls: 'ayohaMembershipSuccessWrap',
             scrollable: {
        direction: 'vertical',
        indicators: false
    },
            layout: { type: 'vbox', pack: 'center', align: 'center' },
            padding: 8,
            style: 'background:transparent;',
            items: [{
                xtype: 'container',
                cls: 'ayohaMembershipSuccessShell',
                items: [
                    {
                        xtype: 'component',
                        itemId: 'cmpMembershipSuccessConfetti',
                        cls: 'ayohaMembershipSuccessConfettiHost',
                        html: ''
                    },
                    {
                        xtype: 'component',
                        cls: 'ayohaMembershipSuccessClose',
                        hidden:true,
                        html: '&times;',
                        listeners: {
                            element: 'element',
                            tap: function (e) {
                                if (e && e.stopEvent) e.stopEvent();

                                var cmp = Ext.Component.from(this);
                                var view = cmp.up('#FloatPanel_MembershipSuccessModalID');

                                if (!view) return;

                                if (view._data && Ext.isFunction(view._data.onCancelFn)) {
                                    view._data.onCancelFn();
                                }

                                FloatPanel_MembershipSuccessModalHide(false);
                            }
                        }
                    },

                    {
                        xtype: 'component',
                        itemId: 'cmpMembershipSuccessIconTop',
                        cls: 'ayohaMembershipSuccessIconTop',
                        html:
                            '<div class="ayohaMembershipSuccessGiftAura">' +
                                '<div class="ayohaMembershipSuccessSpark spark1">✦</div>' +
                                '<div class="ayohaMembershipSuccessSpark spark2">✦</div>' +
                               // '<div class="ayohaMembershipSuccessGift">🎁</div>' +
                                '<div class="ayohaMembershipSuccessGift"><img src="'+FloatPanel_AyohaStore_getEnterpriseLogo()+'" style="width:90px;height:90px;border-radius:50%;margin:8px 0px 0px 0px;" alt="Company Name"/></div>' +
                            
                                '</div>'
                    },

                    {
                        xtype: 'container',
                        cls: 'ayohaMembershipSuccessCard',
                        layout: { type: 'vbox', pack: 'start', align: 'stretch' },
                        items: [

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessHeader',
                                itemId: 'cmpMembershipSuccessTitle',
                                html: ''
                            },
                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessHeaderCongratulation',
                                itemId: 'cmpMembershipSuccessTitleCongratulation',
                                html: 'Congratulation! 🎉'
                            },
                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessSubTitle',
                                itemId: 'cmpMembershipSuccessSubtitle',
                                html: 'Your membership is now active'
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessBadge',
                                itemId: 'cmpMembershipSuccessBadge',
                                html: '✓ Membership Activated'
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessMessage',
                                itemId: 'cmpMembershipSuccessMessage',
                                html:  'You’re officially in. Enjoy a more rewarding experience with exclusive member benefits.'
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessBtn',
                                itemId: 'cmpMembershipSuccessBtn',
                                html: 'View My Benefits',
                                listeners: {
                                    element: 'element',
                                    tap: function (e) {

                                        LoadingPanelShow("resources/icons/loadingBlade01.gif", "Loading...");
                                        FloatPanel_MembershipSuccessModalHide(false);
                                       
                                
                                            
                                        



                                         FloatPanel_MembershipCardList_MyMembershipCardOpenMembershiCardDetail(AppState.MainDashboard.CheckIn_MembershipCardCode
                                            ,AppState.MainDashboard.EnterpriseAccNo
                                            ,'YES'
                                            ,AppState.MainDashboard.MembershipCardFeePaymentCycle
                                            ,AppState.MainDashboard.CountStar
                                            ,AppState.MainDashboard.CountReviewer);
                                            Dashboard_LoadLastCheckIn();
                                            FloatPanel_CheckOut_ConfirmedCheckOut_DashboardAyohaGoTop();
                                        //  Ext.defer(function () {
                                          
                                        //   }, 5500);
                                       
                                         // FloatPanel_CheckOut_MembershipCardHide(false);


                                        // if (e && e.stopEvent) e.stopEvent();

                                        // var cmp = Ext.Component.from(this);
                                        // var view = cmp.up('#FloatPanel_MembershipSuccessModalID');

                                        // if (!view) return;
                                      
                                        // if (view._data && Ext.isFunction(view._data.onConfirmFn)) {
                                        //     view._data.onConfirmFn();
                                        // }



                                       
                                      

                                    }
                                }
                            },

                            {
                                xtype: 'component',
                                cls: 'ayohaMembershipSuccessMaybeLater',
                                html: 'Continue Check-In Here !',
                                listeners: {
                                    element: 'element',
                                    tap: function (e) {
                                        if (e && e.stopEvent) e.stopEvent();

                                        var cmp = Ext.Component.from(this);
                                        var view = cmp.up('#FloatPanel_MembershipSuccessModalID');

                                        if (!view) return;

                                        if (view._data && Ext.isFunction(view._data.onCancelFn)) {
                                            view._data.onCancelFn();
                                        }
                                        LoadingPanelShow("resources/icons/loadingBlade01.gif", "Loading...");
                                       
                                        FloatPanel_MembershipSuccessModalHide(false);
                                        FloatPanel_CheckOut_MembershipCardHide(false);
                                                      FloatPanel_MembershipCardList_NotYetSubscribedHide(false);
                                                      FloatPanel_CheckOut_ConfirmedCheckOut_DashboardAyohaGoTop();
                                                      Dashboard_LoadLastCheckIn();
                                    }
                                }
                            },

                            // {
                            //     xtype: 'container',
                            //     cls: 'ayohaMembershipSuccessFooter',
                            //     items: [
                            //         {
                            //             xtype: 'component',
                            //             itemId: 'cmpMembershipSuccessLogo',
                            //             cls: 'ayohaMembershipSuccessLogo',
                            //             html: ''
                            //         },
                            //         // {
                            //         //     xtype: 'component',
                            //         //     hidden:true,
                            //         //     itemId: 'cmpMembershipSuccessBrandTitle',
                            //         //     cls: 'ayohaMembershipSuccessBrandTitle',
                            //         //     html: 'AYOHA REWARD'
                            //         // },
                            //         // {
                            //         //     xtype: 'component',
                            //         //       hidden:true,
                            //         //     itemId: 'cmpMembershipSuccessBrandTagline',
                            //         //     cls: 'ayohaMembershipSuccessBrandTagline',
                            //         //     html: 'We Double Your Reward'
                            //         // }
                            //     ]
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
function FloatPanel_MembershipSuccessModalShow(cfg) {
    _FloatPanel_MembershipSuccessModalisOpen = 'Y';
    FloatPanel_MembershipSuccessModalCreateIfNeeded();

    cfg = cfg || {};

    _FloatPanel_MembershipSuccessModal._data.logoUrl       = FloatPanel_AyohaStore_getEnterpriseLogo();
    _FloatPanel_MembershipSuccessModal._data.brandTitle    = FloatPanel_AyohaStore_getEnterpriseName();
    _FloatPanel_MembershipSuccessModal._data.brandTagline  = cfg.brandTagline || 'We Double Your Reward';
    _FloatPanel_MembershipSuccessModal._data.title         = 'Welcome to ' + FloatPanel_AyohaStore_getEnterpriseName();
    _FloatPanel_MembershipSuccessModal._data.subtitle      = cfg.subtitle || 'Your membership is now active';
    _FloatPanel_MembershipSuccessModal._data.badgeText     = cfg.badgeText || 'Membership Activated';
    _FloatPanel_MembershipSuccessModal._data.message       = cfg.message || 'A world of rewards, perks, and exclusive privileges is now yours to enjoy.';
    _FloatPanel_MembershipSuccessModal._data.buttonText    = cfg.buttonText || 'View My Benefits';
    _FloatPanel_MembershipSuccessModal._data.onConfirmFn   = cfg.onConfirmFn || null;
    _FloatPanel_MembershipSuccessModal._data.onCancelFn    = cfg.onCancelFn || null;

    try {
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessTitle').setHtml(_FloatPanel_MembershipSuccessModal._data.title);
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessSubtitle').setHtml(_FloatPanel_MembershipSuccessModal._data.subtitle);
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessBadge').setHtml('✓ ' + _FloatPanel_MembershipSuccessModal._data.badgeText);
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessMessage').setHtml(_FloatPanel_MembershipSuccessModal._data.message);
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessBtn').setHtml(_FloatPanel_MembershipSuccessModal._data.buttonText);
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessBrandTitle').setHtml(_FloatPanel_MembershipSuccessModal._data.brandTitle);
        _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessBrandTagline').setHtml(_FloatPanel_MembershipSuccessModal._data.brandTagline);

        if (FloatPanel_AyohaStore_getEnterpriseLogo()) {
            _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessLogo').setHtml(
                '<img src="' + FloatPanel_AyohaStore_getEnterpriseLogo() + '" />'
            );
        } else {
            _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessLogo').setHtml('');
        }
    } catch (e) {}

    _FloatPanel_MembershipSuccessModal.show();
   // _FloatPanel_MembershipSuccessModalisOpen = 'Y';
    Ext.defer(function () {
      //  alert('asdsasasad')
        AyohaMembershipSuccessConfettiBurstFromLogo();
    }, 500);

    if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.push) {
        AyohaBrowserBack.push('FloatPanel_MembershipSuccessModal', function () {
            FloatPanel_MembershipSuccessModalHide(true);
        });
    }
}


/****************************************************
 * HIDE
 ****************************************************/
function FloatPanel_MembershipSuccessModalHide(fromBack, animCfg) {

    if (_FloatPanel_MembershipSuccessModalisOpen == 'N') {
        return;
    }

    // if (!_FloatPanel_MembershipSuccessModal || _FloatPanel_MembershipSuccessModal.destroyed) {
    //     _FloatPanel_MembershipSuccessModalisOpen = 'N';
    //     return;
    // }

    if (animCfg) {
        _FloatPanel_MembershipSuccessModal.hide(Ext.fx.Animation(animCfg));
    } else {
        _FloatPanel_MembershipSuccessModal.hide(Ext.fx.Animation({
            type: 'popOut',
            easing: 'ease-out',
            duration: 250
        }));
    }

    _FloatPanel_MembershipSuccessModalisOpen = 'N';

    if (fromBack !== true) {
        if (typeof AyohaBrowserBack !== 'undefined' && AyohaBrowserBack.close) {
            AyohaBrowserBack.close('FloatPanel_MembershipSuccessModal');
        }
    }
   _FloatPanel_MembershipSuccessModal.destroy();
   _FloatPanel_MembershipSuccessModal = null;
   
}






function AyohaMembershipSuccessConfettiBurstFromLogo() {

    if (!_FloatPanel_MembershipSuccessModal || _FloatPanel_MembershipSuccessModal.destroyed) {
        console.log('burst stop: modal not ready');
        return;
    }

    var hostCmp = _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessConfetti');
    var iconCmp = _FloatPanel_MembershipSuccessModal.down('#cmpMembershipSuccessIconTop');

    console.log('hostCmp=', hostCmp);
    console.log('iconCmp=', iconCmp);

    if (!hostCmp || !iconCmp || !hostCmp.el || !iconCmp.el) {
        console.log('burst stop: host/icon/el missing');
        return;
    }

    var hostEl = hostCmp.el.dom;
    var iconEl = iconCmp.el.dom.querySelector('.ayohaMembershipSuccessGiftAura') || iconCmp.el.dom;

    var hostRect = hostEl.getBoundingClientRect();
    var iconRect = iconEl.getBoundingClientRect();

    console.log('hostRect=', hostRect);
    console.log('iconRect=', iconRect);

    var originX = (iconRect.left - hostRect.left) + (iconRect.width / 2);
    var originY = (iconRect.top - hostRect.top) + (iconRect.height / 2);

    var colors = ['ayohaBurstPurple', 'ayohaBurstPink', 'ayohaBurstGold', 'ayohaBurstLilac', 'ayohaBurstWhite'];
    var shapes = ['rect', 'rect', 'dot', 'diamond', 'ribbon'];

    var html = '<div class="ayohaLogoBurstLayer">';

    html += '<div class="ayohaLogoBurstGlow" style="left:' + (originX - 55) + 'px;top:' + (originY - 55) + 'px;"></div>';
    html += '<div class="ayohaLogoBurstRing" style="left:' + (originX - 45) + 'px;top:' + (originY - 45) + 'px;"></div>';

    var sparkles = [
        { x: -36, y: -28, dx: -8,  dy: -18, delay: 0.00 },
        { x:  28, y: -24, dx:  12, dy: -15, delay: 0.08 },
        { x: -18, y:  10, dx: -12, dy:  10, delay: 0.12 },
        { x:  22, y:  14, dx:  14, dy:  12, delay: 0.18 }
    ];

    for (var s = 0; s < sparkles.length; s++) {
        html +=
            '<div class="ayohaLogoBurstSpark" style="' +
                'left:' + (originX + sparkles[s].x) + 'px;' +
                'top:' + (originY + sparkles[s].y) + 'px;' +
                '--sx:' + sparkles[s].dx + 'px;' +
                '--sy:' + sparkles[s].dy + 'px;' +
                'animation-delay:' + sparkles[s].delay + 's;' +
            '">✦</div>';
    }

    for (var i = 0; i < 30; i++) {
        var angleDeg = 18 + Math.random() * 144;
        var angleRad = angleDeg * Math.PI / 180;
        var distance = 80 + Math.random() * 165;

        var tx = Math.cos(angleRad) * distance;
        var ty = Math.sin(angleRad) * distance;

        var delay = (Math.random() * 0.18).toFixed(2);
        var dur = (0.95 + Math.random() * 0.55).toFixed(2);
        var rot = ((Math.random() * 720) - 360).toFixed(0) + 'deg';

        var colorCls = colors[Math.floor(Math.random() * colors.length)];
        var shapeCls = shapes[Math.floor(Math.random() * shapes.length)];

        html +=
            '<span class="ayohaLogoBurstPiece ' + shapeCls + ' ' + colorCls + '" style="' +
                'left:' + originX + 'px;' +
                'top:' + originY + 'px;' +
                '--tx:' + tx.toFixed(0) + 'px;' +
                '--ty:' + ty.toFixed(0) + 'px;' +
                '--rot:' + rot + ';' +
                '--delay:' + delay + 's;' +
                '--dur:' + dur + 's;' +
            '"></span>';
    }

    for (var j = 0; j < 10; j++) {
        var angleDeg2 = 200 + Math.random() * 140;
        var angleRad2 = angleDeg2 * Math.PI / 180;
        var distance2 = 22 + Math.random() * 45;

        var tx2 = Math.cos(angleRad2) * distance2;
        var ty2 = Math.sin(angleRad2) * distance2;

        var delay2 = (Math.random() * 0.10).toFixed(2);
        var dur2 = (0.70 + Math.random() * 0.25).toFixed(2);
        var rot2 = ((Math.random() * 360) - 180).toFixed(0) + 'deg';

        var colorCls2 = colors[Math.floor(Math.random() * colors.length)];
        var shapeCls2 = shapes[Math.floor(Math.random() * shapes.length)];

        html +=
            '<span class="ayohaLogoBurstPiece ' + shapeCls2 + ' ' + colorCls2 + '" style="' +
                'left:' + originX + 'px;' +
                'top:' + originY + 'px;' +
                '--tx:' + tx2.toFixed(0) + 'px;' +
                '--ty:' + ty2.toFixed(0) + 'px;' +
                '--rot:' + rot2 + ';' +
                '--delay:' + delay2 + 's;' +
                '--dur:' + dur2 + 's;' +
            '"></span>';
    }

    html += '</div>';

    hostCmp.setHtml(html);

    Ext.defer(function () {
        if (hostCmp && !hostCmp.destroyed) {
            hostCmp.setHtml('');
        }

      
    }, 1800);
}